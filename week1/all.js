const { useState } = React;
function App() {
  return (
    <>
      <h1>請輸入您要換的台幣</h1>
      <input type="text" placeholder="台幣" />
      <input type="button" value="計算" />
      <p>可以換算</p>
      <ul>
        <li>日幣：</li>
        <li>美金：</li>
        <li>澳幣：</li>
        <li>韓幣：</li>
        <li>印尼幣：</li>
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
