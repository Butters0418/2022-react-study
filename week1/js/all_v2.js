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
  // 匯率控制
  const [currency, setCurrency] = useState([...currencyObj]);
  // 新增匯率控制
  const [newCurreny, sernewCurreny] = useState({ country: '', currencyRatio: 0 });
  // 輸入欄位控制
  const [value, setValue] = useState(1);

  function addCurrency() {
    currencyObj.push(newCurreny);
    setCurrency([...currencyObj]);
    sernewCurreny({ country: '', currencyRatio: 0 });
  }

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
      <h3>新增幣種</h3>
      <input
        type="text"
        placeholder="幣種名稱"
        value={newCurreny.country}
        onChange={(e) => {
          sernewCurreny({ ...newCurreny, country: e.target.value });
        }}
      />
      <input
        type="number"
        placeholder="匯率(1台幣兌換匯率)"
        value={newCurreny.currencyRatio}
        onChange={(e) => {
          sernewCurreny({ ...newCurreny, currencyRatio: e.target.value * 1 });
        }}
      />
      <input
        type="button"
        value="新增幣種"
        onClick={() => {
          addCurrency();
        }}
      />
      <hr />
      請輸入您要換的台幣
      <input
        type="number"
        placeholder="台幣"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input type="button" value="計算" onClick={() => counter()} />
      <p>可以換算</p>
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
