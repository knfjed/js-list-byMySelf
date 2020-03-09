## XMLHttpRequest

https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest/responseText

https://github.com/ryotogashi/samurai-javascript-material/tree/master/ajax

### XMLHttpRequest.onreadystatechange プロパティ

XMLHttpRequest の readyState が変化するたびに呼び出される

### Document.readyState プロパティ

その文書の読み込み状態を示す

### responseText とは

XMLHttpRequest を使用して受信したテキストデータ、またはリクエストが失敗したときは null、またはリクエストがまだ send() の呼び出しによって送信されていない場合は ""。

非同期リクエストを処理している間、 responseText の値は、データが完全に受信できておらず不完全であっても、常にサーバーから受信した現在のコンテンツを持ちます。

readyState の値が XMLHttpRequest.DONE (4) になり、 status の値が 200 ("OK") になった場合、コンテンツ全体が受信されたことが分かります。
