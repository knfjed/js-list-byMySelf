// ライブラリ（express）を組み込む
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("readed!");
});

app.listen(3006);

// xhrオブジェクトの作成
const xhr = new XMLHttpRequest();

// 処理の進捗によって以下を実行
xhr.onreadystatechange = () => {
  switch (xhr.readyState) {
    case 0:
      // 未初期化状態
      console.log("uninitialized");
      break;

    case 1:
      // 送信中
      console.log("loading...");
      break;

    case 2:
      // 応答待ち
      console.log("loaded");
      break;

    case 3:
      // 受信中
      console.log("interactive... `${xhr.responseText.length}` bytes.");
      break;

    case 4:
      // 受診完了
      if (xhr.status === 200 || xhr.status === 304) {
        var data = xhr.responseText;
        console.log(data);
      } else {
        console.log("Failed");
      }
      break;
  }
};

// リクエストの作成
xhr.open("GET", "http://127.0.0.1:5500/src/views/index.html?");
// リクエストの送信
xhr.send();
