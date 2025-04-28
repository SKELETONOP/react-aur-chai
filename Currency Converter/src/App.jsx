import { useEffect, useState } from "react";
import "./App.css";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyinfo";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("");
  const BackgroundImage =
    "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (!amount) {
      setConvertedAmount(""); // if no amount entered, clear convertedAmount
      return;
    }
    const result = amount * currencyInfo[to];
    setConvertedAmount(Number(result.toFixed(2)));
  };

  useEffect(() => {
    convert();
  }, [amount, from, to, currencyInfo]);

  return (
    <div
      className="w-full min-h-screen flex flex-col bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      {/* Content Section with Image and Currency Converter */}
      <div className="w-full md:w-full p-4 flex-grow flex items-center justify-center">
        {/* Image Section */}
        {/* <div className="flex justify-center w-full md:w-1/2">
          <div className="rounded-xl shadow-lg max-w-[300px] max-h-[300px] w-full object-cover">
            <img
              src="https://img.freepik.com/free-vector/illustration-financial-items_53876-5907.jpg"
              alt="Currency Illustration"
              className="w-auto h-[80%] object-contain"
            />
          </div>
        </div> */}

        {/* Currency Converter Section */}
        <div className="flex justify-center w-full md:w-1/2">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                  placeholder="Enter The Amount"
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-black rounded-md bg-white text-black px-2 py-0.5"
                  onClick={swap}
                >
                  Swap 🔁
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                  placeholder="Converted Amount"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} TO {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full text-center py-4 bg-black/40 text-white text-sm mt-auto">
        Made with 💙 by Naresh
      </div>
    </div>
  );
}

export default App;
