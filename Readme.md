# リアルタイムプレビュー

## 概要

テキスト入力フィールドに文字を入力すると、リアルタイムでプレビューが表示される簡単な Web アプリケーションです。TypeScript や React へのスケールアップを見据えた準備段階として、バニラ JavaScript で実装されています。

## 機能

- **リアルタイム入力プレビュー**: 入力フィールドに文字を入力すると即座にプレビューエリアに表示
- **レスポンシブデザイン**: 様々な画面サイズに対応
- **視覚的なフィードバック**: ホバー効果やフォーカス状態の表示
- **モダンな UI**: ガラスモーフィズム風のデザイン

## 使用技術

- **HTML5**: セマンティックな構造
- **CSS3**: フレックスボックス、トランジション、擬似要素
- **JavaScript (ES6)**: DOM イベントハンドリング

## ファイル構成

```
project/
├── index.html      # メインのHTMLファイル
├── style.css       # スタイルシート
├── script.js       # JavaScriptファイル
└── img/
    └── Simple_Background-S.png  # 背景画像
```

## 実装の詳細

### HTML 構造

- `div.box`: メインタイトル表示エリア
- `div.preview-container`: 入力フィールドとプレビューを含むコンテナ
- `input#textInput`: テキスト入力フィールド
- `span#previewDisplay`: プレビュー表示エリア

### CSS 設計

- **レイアウト**: Flexbox を使用したセンター配置
- **スタイリング**:
  - 背景画像のカバー表示
  - 入力フィールドのフォーカス状態スタイル
  - ホバー効果付きのボックス要素
- **アニメーション**: CSS トランジションによるスムーズな状態変化

### JavaScript 機能

- **イベントリスナー**: `input`イベントでリアルタイム更新
- **DOM 操作**: `textContent`を使用した安全なテキスト表示

## セットアップ方法

1. **ファイルの配置**

   ```bash
   # プロジェクトディレクトリを作成
   mkdir realtime-preview
   cd realtime-preview

   # ファイルを作成
   touch index.html style.css script.js
   mkdir img
   ```

2. **背景画像の準備**

   - `img/Simple_Background-S.png`を配置
   - または、CSS で背景画像のパスを変更

3. **ブラウザで開く**
   - `index.html`をブラウザで開く
   - または、ローカルサーバーを起動

## 使用方法

1. ブラウザで index.html を開く
2. 「何か入力してください:」のテキストフィールドに文字を入力
3. 入力した内容がリアルタイムで「プレビュー:」の後に表示される

## 今後の拡張予定

### TypeScript への移行

- 型安全性の向上
- インターフェースの定義
- より良い開発体験

### React 化

- コンポーネント指向の設計
- 状態管理の改善
- 再利用可能な UI 部品

### 追加機能

- 複数の入力フィールド対応
- フォーマット機能（マークダウン等）
- データの永続化

## 開発のポイント

### 学習要素

- **DOM 操作**: `getElementById`、`addEventListener`
- **イベントハンドリング**: `input`イベントの活用
- **CSS 設計**: モダンなレイアウト手法
- **レスポンシブデザイン**: モバイル対応

### ベストプラクティス

- セマンティックな HTML
- CSS の設計パターン
- JavaScript ES6 記法
