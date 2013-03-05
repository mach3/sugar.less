# Sugar.less

version 0.9.0


## これはなに

less.js用のミックスイン・ユーティリティクラス群です。
normalize.cssをベースに使用しています。

## 使い方

less環境で*less/sugar.less*を読み込んで使いたい機能を使用するだけです。

例えば次のコードではシンプルなグリッドシステムを活用しています。

```less
@import "less/sugar";

@grid-column-width : 80px; // カラム幅を指定
@grid-gutter-width : 20px; // 溝の幅を指定

.my-grid-container {
	#grid > .row(12); // 12カラムのグリッド行を作成

	.my-grid-item {
		#grid > .col(3); // 3カラム分のグリッドカラムを作成
	}
}
```

*less/sugar.less*では、Sugar.lessの全てのコンポーネントがインポートされています。
必要な物だけをインポートするには、*less/sugar/* 以下のlessファイルを直接インポートします。

例えば、グリッドシステムのみを使用する場合は次のようになります。

```less
@import "less/sugar/utils";
@import "less/sugar/grid";
```

### 共有ユーティリティと、その他のミックスイン

*less/utils.less* にある共有のミックスインはベーシックなミックスインです。

```less
.box {
	.size(100px, 80px); // 100*80のサイズ指定をする
}
```

その他のコンポーネント（fonts, grid, css3, gradient)については、less.jsの名前空間を活用しています。

cs) [LESS | Namespace](http://lesscss.org/#-namespaces)

```less
body {
	#fonts > .sans(); // 日本語のゴシック体を指定
}

h1 {
	#fonts > .en > .sans(); // 英語のゴシック体を指定
}
```

## 構成ファイル

- normalize.less : via [normalize.css](http://necolas.github.com/normalize.css/)
- utils.less : 共有のユーティリティミックスイン・クラス群
- fonts.less : フォント定義
- grid.less : シンプルなグリッドシステム
- css3.less : CSS3プロパティのミックスイン via [Bootstrap](http://twitter.github.com/bootstrap/)
- gradient.less : グラデーション用ミックスイン via [Bootstrap](http://twitter.github.com/bootstrap/)

## ドキュメント

各コンポーネントのドキュメントは [こちら](./docs/index.md)

## 作者

mach3

- [Blog](http://blog.mach3.jp)
- [Website](http://www.mach3.jp)
- [Twitter](http://twitter.com/mach3ss)


