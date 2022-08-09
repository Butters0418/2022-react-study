const { useState } = React;
// 幣別
const currencyObj = [
  {
    country: '日本',
    currencyRatio: 4.48,
  },
  {
    country: '美金',
    currencyRatio: 0.03,
  },
  {
    country: '澳幣',
    currencyRatio: 0.05,
  },
  {
    country: '韓幣',
    currencyRatio: 43.29,
  },
  {
    country: '印尼幣',
    currencyRatio: 493.94,
  },
];

function App() {
  const [currency, setCurrency] = useState([...currencyObj]);
  const [value, setValue] = useState(0);

  function counter() {
    setCurrency(
      currencyObj.map((item, i) => {
        return {
          country: item.country,
          currencyRatio: (item.currencyRatio * value).toFixed(2),
        };
      })
    );
  }
  return (
    <>
      <h1>change price</h1>
      <input type='number' placeholder='TW' value={value} onChange={(e) => setValue(e.target.value)} />
      <input type='button' value='計算' onClick={() => counter()} />
      <p>can change</p>
      <ul>
        {currency.map((item, i) => {
          return (
            <li key={i}>
              {item.country} : {item.currencyRatio}
            </li>
          );
        })}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
