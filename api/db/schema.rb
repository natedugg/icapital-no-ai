# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_05_11_173259) do
  create_table "investors", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.date "date_of_birth", null: false
    t.string "phone", null: false
    t.string "address_1", null: false
    t.string "address_2"
    t.string "state", null: false
    t.string "zip", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "investors_files", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "file_name", null: false
    t.integer "file_size"
    t.bigint "investors_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["investors_id"], name: "index_investors_files_on_investors_id"
  end

  add_foreign_key "investors_files", "investors", column: "investors_id"
end
