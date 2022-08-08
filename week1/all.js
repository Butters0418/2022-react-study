const { useState } = React;
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
  const { currency, setCurrency } = useState(currencyObj);
  return (
    <>
      <h1>請輸入您要換的台幣</h1>
      <input type="text" placeholder="台幣" />
      <input type="button" value="計算" />
      <p>可以換算</p>
      <ul></ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
