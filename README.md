## Overview

This repository contains my first attempt to complete the [iCapital Identity Team Engineer Challenge](https://gist.github.com/pm-builder/979dcf6300d4dff1cdfd2ee4808af091), which is supposed to be completed in two hours. During this attempt, I did **not** employ the help of any kind of artificial intelligence.

I started at 1pm on May 11, 2025 and stopped at right around 3pm (with a few extra minutes spent creating this repository and uploading the code).

Shortly after getting to the end of the non-AI version, I realized that I hadn't actually accomplished very much, as described more below. I decided to go ahead and try to build the same project using ChatGPT as an aide. That version, if you're interested, is [located here](https://github.com/natedugg/icapital-with-ai).

## No Vibe Coding

I started working on this project with the intent to see how far I could get without using any AI assistance. Ultimately, I didn't get very far at all, unfortunately. Most notibly, although I was able to add the database models for investors and investors files, and a basic front end for listing and adding investors, I ran out of time and did not implement file upload in the controller or on the front end. Most of the two hours was spent setting up scaffolding and configuration for the front and back end applications, i.e. database config, front-end component structure, routing, etc. By the time I got to fleshing out the actual features, most of that time was already gone.

Here's what I did manage to accomplish:

1. Back end:
- API returns a list of saved investors (without related files)
- API endpoints for adding/editing/deleting investors (no file upload capability)
```
GET /investors
POST /investors
GET /investors/:investor_id
PUT /investors/:investor_id
DELETE /investors/:investor_id
```
2. Front end:
- uses Bootstrap for styling
- `Investors` component showing the list of investors returned from the API (without related files)
- `InvestorForm` component that, given more time, *would* have been reused by the `Add` and `Edit` components for adding and editing investors, respectively [NOTE: The `Edit` component is currently broken due to a missing import of `InvestorForm`]; uses Formik for form validation
- Top level Typescript definitions located in `/src/types.ts`
- API services for investors split out into a dedicated services file `/src/services/investors.ts`
- API base value (http://localhost:3000) set in a constant value located in `/.env`

## What's Left

Since this implementation was very imcomplete, there are many additions and enhancements that I would have included given more time.

- Authentication / authorization: I would have added JWT / session token-based authentication to limit functionality for non-administrative users. This would probably require a separate `users` table and then setting up administrative roles for admin users.
- Full implementation of the file upload feature, which means storing file metadata in the database and file contents on the file system.
  - It should be noted that most basic implementation would use the local file system and default network settings, which severely limits the potential size of uploaded files due to network bandwidth and storage space on the file system. In this case, upload file sizes would be limited to a few megabytes at best.
  - A much better, more scalable solution would be to use cloud storage, like AWS S3, pre-signed URLs for upload/download, and multi-part upload for large files. Here are the high-level implementation details for that:
    - When uploading a file, first the file metadata is uploaded to the API, which saves the metadata to the database
    - If it's a very large file, then the multi-part calculation is done on the API, and an array of pre-signed URLs for each upload part is returned to the client
    - On the client side, the large file is "chunked" (broken up into parts), and then the pre-signed URLs are used to upload each chunk, potentially in parallel
    - When all parts have been uploaded, the file is rebuilt and stored in the cloud, which notifies the API that the upload is complete; the cloud file path is then saved in the database along with the file metadata
    - Multi-part uploads bring a couple more benefits
      - can implement resumable uploads by keeping track of chunks already uploaded, and then simply resuming with the last chunk that has not yet completed
      - can implement progress bars on the front end by keeping track of uploaded chunks
    - File downloads become a two step process
      - first the client requests a pre-signed download URL from the API, using the file ID from the database
      - the client can then directly access the full file using the pre-signed download URL
- The ability to merge accounts based on matching names / SSNs
  - when adding a new investor and checking for property matches within existing investor accounts, use the union-find / disjoint-set algorithm to generate the list of matching accounts
  - on the client side, give the admin use the option to decide how, or in what direction, to merge the accounts
- **UNIT TESTS**
  - Obviously this implementation could never be considered fully complete without unit tests. I'd add controller tests to the API to cover the endpoints and component tests on the front end to verify usability, with special emphasis on testing the form component.

## Screen shot

<img width="1365" alt="icapital-no-ai-list-page" src="https://github.com/user-attachments/assets/a7e00ad6-07f5-4268-be70-baba98190db6" />


## Configuration

1. **Clone the repo**
```bash
git clone <repo-url>
cd icapital-no-ai
```

## Back end (Ruby on Rails)

### Prerequisites
- Ruby 3.x
- Rails 7.0.x
- MySQL server (e.g. MySQL 8.0)

### Setup

1. **Back end setup**
```
cd api
bundle install
# Ensure MySQL server is running and accessible
rails db:create db:migrate
rails server -p 3000
```

## Front end (React)

### Prerequisites
- Node 

### Setup

1. **Front end setup**
```
cd ../frontend
npm install
npm start
```

2. **Usage**
- Open http://localhost:3001 in your browser.

## Notes
- CORS is configured to allow requests from any origin to `/api/*`.
