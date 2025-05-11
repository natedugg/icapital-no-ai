import React, { useEffect, useState } from "react";
import { Investor } from "../../types";
import { Link, useNavigate } from "react-router-dom";
import { getInvestors } from "../../services/investors";

const Investors: React.FC = () => {
    const [investors, setInvestors] = useState<Investor[] | undefined>();

    const loadInvestors = async function() {
        const investors = await getInvestors();
        setInvestors(investors);
    };

    useEffect(() => {
        loadInvestors();
    }, []);

    const navigate = useNavigate();
    const addInvestor = () => navigate("/investors/new");

    const hasInvestors = investors?.length;
    const noInvestors = (
        <tr>
            <td colSpan={7} align="center" className="py-30">
                No investors
            </td>
        </tr>
    );

    return (
        <div className="Investors">
            <div className="row">
                <div className="col-6 text-start">
                    <h2>Investors</h2>
                </div>
                <div className="col-6 text-end">
                    <button className="btn btn-primary" onClick={addInvestor}>
                        New Investor
                    </button>
                </div>
            </div>
            <table width="100%" cellPadding={10} cellSpacing={0} className="border">
                <thead>
                    <tr>
                        <th className="text-start border">Name</th>
                        <th className="text-start border">DOB</th>
                        <th className="text-start border">Phone</th>
                        <th className="text-start border">Address</th>
                        <th className="text-start border">State</th>
                        <th className="text-start border">Zip</th>
                        <th className="text-start border">Files</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        hasInvestors ? investors.map((investor, idx) => (
                            <tr key={idx}>
                                <td className="text-start">
                                    <Link to={`/investors/${investor.id}`}>
                                        {investor.first_name}
                                        {investor.last_name}
                                    </Link>
                                </td>
                                <td className="text-start">{investor.date_of_birth}</td>
                                <td className="text-start">{investor.phone}</td>
                                <td className="text-start">{investor.address_1} {investor.address_2}</td>
                                <td className="text-start">{investor.state}</td>
                                <td className="text-start">{investor.zip}</td>
                                <td className="text-start">{investor.phone}</td>
                            </tr>
                        )) : noInvestors
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Investors;