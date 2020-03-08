// btnを取得し、クリックされたら以下を実行
// li要素を作成

document.getElementById("btnAdd").addEventListener("click", e => {
  e.preventDefault();
  const li = document.createElement("li");
  const text = document.querySelector("input");
  li.textContent = text.value;
  document.querySelector("ul").appendChild(li);

  text.value = "";
  text.focus();
});

document.getElementById("btnClear"),
  addEventListener("click", () => {
    ul.remove();
  });
