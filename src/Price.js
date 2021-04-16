import './Price.css';
const Price = () => {
    return (
        <div className="price">
            <div className="minutes">
                <div className="percent">0.18 %</div>
                <div className="time">5 Mins</div>
            </div>

            <div className="hour">
            <div className="percent">0.72 %</div>
            <div className="time">1 Hour</div>
            </div>

            <div className="rate">
                <div className="best_price">Best Price to Trade</div>
                <div className="rupees">&#8377; 127</div>
                <div className="time">Average XRP/INR net price including commission</div>
            </div>

            <div className="day">
            <div className="percent">3.63 %</div>
            <div className="time">1 Hour</div>
            </div>

            <div className="days">
            <div className="percent">6.07 %</div>
            <div className="time">7 Days</div>
            </div>
        </div>
      );
}
 
export default Price;