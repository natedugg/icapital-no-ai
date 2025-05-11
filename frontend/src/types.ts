export interface Investor {
    id?: number;
    first_name: string;
    last_name: string;
    date_of_birth: string;
    phone: string;
    address_1: string;
    address_2?: string;
    state: string;
    zip: string;
    updated_at?: string;
    created_at?: string;
    investor_files?: InvestorFile[]
}

export interface InvestorFile {
    file_name: string;
    file_size?: number;
    updated_at?: string;
    created_at?: string;
}