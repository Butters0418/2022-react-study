const { useState } = React;
// 幣別
const currencyObj = [
  {
    country: '日幣',
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
  // 兌換記錄控制
  const [history, setHistory] = useState([]);

  function addCurrency() {
    currencyObj.push(newCurreny);
    setCurrency([...currencyObj]);
    sernewCurreny({ country: '', currencyRatio: 0 });
    setValue(1);
  }

  function counter() {
    setCurrency(
      currencyObj.map((item, i) => {
        return {
          country: item.country,
          currencyRatio: Number(item.currencyRatio * value).toFixed(2),
        };
      })
    );
  }

  function exchangeMoney({ country, currencyRatio }) {
    const obj = {
      value,
      country,
      currencyRatio,
    };
    console.log(obj);
    setHistory([...history, obj]);
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
          sernewCurreny({ ...newCurreny, currencyRatio: Number(e.target.value) });
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
      <h3>您錢包還有 {5000 - history.reduce((a, b) => a + Number(b.value), 0)} 元</h3>
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
              <input
                name={item.country}
                type="button"
                value="兌換"
                onClick={(e) => exchangeMoney(item)}
              />
            </li>
          );
        })}
      </ul>
      <h3>您的兌換記錄</h3>
      <ul>
        {history.map((item, i) => {
          return (
            <li key={i}>
              您用元{item.value}台幣，兌換了{item.currencyRatio + item.country}
            </li>
          );
        })}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
