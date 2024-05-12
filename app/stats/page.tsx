export default function Page() {
    return (
        
        <div className="p-4">
            <p className="text-3xl font-bold mb-10">Stats</p>

            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2 w-1/3">Year</th>
                        <th className="px-4 py-2 w-2/3">Wins?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2 w-1/3">
                            <div className="w-full">2024</div>
                        </td>
                        <td className="border px-4 py-2 w-2/3">1,000,000</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2 w-1/3">
                            <div className="w-full">2023</div>
                        </td>
                        <td className="border px-4 py-2 w-2/3">1,000,000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}