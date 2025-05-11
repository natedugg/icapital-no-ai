import { Investor } from "../types";

export async function getInvestors(): Promise<Investor[] | undefined> {
    try {
        const response: Response = await fetch(`${process.env.REACT_APP_API_URL_BASE}/investors`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        return data as Investor[];
    } catch (e) {
        console.error(e);
        return;
    }
}

export async function getInvestor(investorId: number): Promise<Investor | undefined> {
    try {
        const response: Response = await fetch(`${process.env.REACT_APP_API_URL_BASE}/investors/${investorId}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        return data as Investor;
    } catch (e) {
        console.error(e);
        return;
    }
}

export async function addInvestor(investor: Investor): Promise<Investor | undefined> {
    try {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(investor)
        };
        const response: Response = await fetch(`${process.env.REACT_APP_API_URL_BASE}/investors`, requestOptions);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        return data as Investor;
    } catch (e) {
        console.error(e);
        return;
    }
}

export async function updateInvestor(investor: Investor): Promise<Investor | undefined> {
    try {
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(investor)
        };
        const response: Response = await fetch(`${process.env.REACT_APP_API_URL_BASE}/investors/${investor.id}`, requestOptions);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        return data as Investor;
    } catch (e) {
        console.error(e);
        return;
    }
}

export async function deleteInvestor(investor: Investor): Promise<boolean> {
    try {
        const requestOptions = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(investor)
        };
        const response: Response = await fetch(`${process.env.REACT_APP_API_URL_BASE}/investors/${investor.id}`, requestOptions);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: { success: boolean } = await response.json();

        return data.success;
    } catch (e) {
        console.error(e);
        return false;
    }
}