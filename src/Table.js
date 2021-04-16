import "./Table.css"
const Table = () => {
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Platform</th>
                        <th>Last Traded Price</th>
                        <th>Buy / Sell Price</th>
                        <th>Difference</th>
                        <th>Savings</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>WazirX</td>
                        <td>&#8377;49,69,868</td>
                        <td>&#8377; 49,65,031 / &#8377;49,69,868</td>
                        <td>0.35%</td>
                        <td>&#8377;17,343</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Bitbns</td>
                        <td>&#8377;49,69,868</td>
                        <td>&#8377; 49,65,031 / &#8377;49,69,868</td>
                        <td className="red">-0.97%</td>
                        <td>&#8377;48,095</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Giotus</td>
                        <td>&#8377;49,69,868</td>
                        <td>&#8377; 49,65,031 / &#8377;49,69,868</td>
                        <td>0.35%</td>
                        <td>&#8377;17,475</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Colodax</td>
                        <td>&#8377;49,79,266</td>
                        <td>&#8377; 49,65,031 / &#8377;49,69,868</td>
                        <td>0.54%</td>
                        <td>&#8377;26,741</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Zebpay</td>
                        <td>&#8377;49,79,266</td>
                        <td>&#8377; 49,65,031 / &#8377;49,69,868</td>
                        <td>0.03%</td>
                        <td>&#8377;1,449</td>
                    </tr>

                    <tr>
                        <td>6</td>
                        <td>CoinDCX</td>
                        <td>&#8377;49,79,266</td>
                        <td >&#8377; 49,65,031 / &#8377;49,69,868</td>
                        <td className="red">-0.30%</td>
                        <td>&#8377;14,912</td>
                    </tr>
                </tbody>
            </table>
        </div>
      );
}
 
export default Table;