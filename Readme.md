目的：今後 TypeScript や React にスケールする為の準備段階
使用技術： JavaScript/CSS/HTML

このコードは、ユーザーがテキスト入力フィールドに入力した内容をリアルタイムで表示するシンプルなウェブページを作成します。HTML、CSS、JavaScript の 3 つの部分に分かれており、それぞれが異なる役割を担っています。

<h1>HTMLの解説</h1>
HTMLはウェブページの骨格を定義します。

<h3>head セクション</h3>

<h3>meta charset="UTF-8"</h3> 文字コードをUTF-8に設定し、日本語が正しく表示されるようにします。

<h3>meta name="viewport" content="width=device-width, initial-scale=1.0"</h3> 異なるデバイス（PC、スマートフォンなど）で適切に表示されるように、ビューポートを設定します。

<h3>title</h3> ブラウザのタブに表示されるページのタイトルを設定します。

<h3>link rel="stylesheet" href="style.css"</h3> style.cssというファイルに書かれたCSSをこのHTMLファイルに適用します。

<h3>body セクション</h3>

<h3>div class="box">リアルタイム入力プレビュー</div></h3> "リアルタイム入力プレビュー"というテキストを持つdiv要素です。これはCSSで装飾され、ホバーするとアニメーションする視覚的なボックスになります。

<h3>br</h3> 改行タグで、box と次の要素の間に少し空白を作ります。

<h3>div class="preview-container"</h3> 入力フィールドとプレビュー表示を囲むコンテナです。

<h3>label for="textInput"</h3> 入力フィールドに関連付けられたラベルです。ユーザーに何を入力すべきかを伝えます。

<h3>input type="text" id="textInput" placeholder="ここに文字を入力..." /></h3> テキストを入力するための入力フィールドです。id="textInput"が設定されており、JavaScript からこの要素を操作するために使われます。placeholder 属性は、入力がないときに表示されるヒントテキストです。

<h3><p>プレビュー: <span id="previewDisplay"></span></p></h3> 入力されたテキストが表示される部分です。"プレビュー:"というテキストの後に、<span id="previewDisplay"></span>という要素があります。このspan要素の中に、JavaScriptを使って入力されたテキストが表示されます。

<h3>script src="script.js"</h3> script.jsというファイルに書かれたJavaScriptをこのHTMLファイルに読み込みます。これは通常、HTMLの最後に配置され、ページの内容が読み込まれてからスクリプトが実行されるようにします。

<h1>CSS</h1>

CSS はウェブページの見た目を装飾します。

- body: ページ全体のスタイルを設定します。背景画像、フォント、文字色、そしてコンテンツを中央に配置するための Flexbox プロパティが設定されています。

- .preview-container: 入力フィールドとプレビュー表示を囲むボックスのスタイルを設定します。白い背景色、パディング（内側の余白）、角の丸み、影などが適用されています。

- label: ラベルテキストのスタイルを設定します。ブロック要素として表示され、下部に余白が設定されています。

- input[type="text"]: テキスト入力フィールドのスタイルを設定します。パディング、フォントサイズ、ボーダー（枠線）、角の丸み、幅、下部の余白、アニメーション効果などが設定されています。

- input[type="text"]:focus: テキスト入力フィールドにフォーカス（クリックして入力できる状態）が当たったときのスタイルを設定します。枠線の色と影が変わります。

- p: プレビューテキストの段落のスタイルを設定します。フォントサイズ、太さ、色などが設定されています。

- #previewDisplay: プレビューとして表示されるテキスト（<span>要素）のスタイルを設定します。赤い文字色、太字、長い単語がはみ出さないように改行する設定が含まれています。

- .box: "リアルタイム入力プレビュー"というテキストを含むボックスのスタイルを設定します。幅、高さ、中央揃え、文字色、フォントサイズ、太字などが設定されています。

- .box::before, .box::after: box 要素の擬似要素です。これらは装飾的な枠線を作成し、ホバー時にアニメーションする効果を持たせています。

- .box:hover:before, .box:hover::after, .box:hover: box 要素にマウスが乗った（ホバーした）ときのスタイルとアニメーションを設定します。枠線が広がり、ボックスの背景が半透明になり、ぼかし効果が適用されます。

<h1>JavaScript(script.js)</h1>

JavaScript はウェブページに動きと対話性を持たせます。

- const textInput = document.getElementById("textInput");: HTML 要素の中から id が textInput の要素（つまりテキスト入力フィールド）を取得し、textInput という定数に格納します。

- const previewDisplay = document.getElementById("previewDisplay");: HTML 要素の中から id が previewDisplay の要素（つまりプレビューを表示する<span>要素）を取得し、previewDisplay という定数に格納します。

- textInput.addEventListener("input", () => { ... });: textInput（テキスト入力フィールド）に対して**input イベント**を監視するように設定しています。

  - input イベントは、入力フィールドの値が変更されるたびに発生します。例えば、ユーザーが文字を入力したり、削除したりするたびにこのイベントが発火します。

  - イベントが発生すると、() => {}で囲まれた関数が実行されます。

- previewDisplay.textContent = textInput.value;: この行が、リアルタイムプレビューの核心です。

  - textInput.value: textInput というテキスト入力フィールドに現在入力されている値（テキスト）を取得します。

  - previewDisplay.textContent = ...: 取得したテキストを、previewDisplay という<span>要素のテキストコンテンツとして設定します。これにより、入力フィールドに入力された内容が即座にプレビュー表示の部分に反映されます。

<h1>【まとめ】</h1>
このコードは、HTMLでページの構造と要素を定義し、CSSでその見た目を美しく整え、そしてJavaScriptを使って入力フィールドの値をリアルタイムでプレビュー表示に反映させるという、基本的なウェブ開発の要素を組み合わせています。ユーザーが文字を入力するたびに、その文字がすぐに表示されるため、非常に分かりやすいインタラクションを提供します。
