# Sugar.less

version 0.9.0


## これはなに

Less用のミックスイン・ユーティリティクラス群です。  
[normalize.css](http://necolas.github.com/normalize.css)と[Twitter Bootstrap](http://twitter.github.com/bootstrap/)を部分的に取り入れています。

## 使い方

Less環境で*less/sugar.less*を読み込んで使いたい機能を使用するだけです。

例えば次のコードではユーティリティミックスインをレイアウトに活用しています。

```
@import "less/sugar";

#container {
	.clearfix();
	width: 960px;

	#main {
		.left();
		width: 800px;
	}
	#sub {
		.right();
		width: 960px - 800px - 20px;
	}
}
```

*less/sugar.less*では、Sugar.lessの全てのコンポーネントがインポートされています。
必要な物だけをインポートするには、*less/sugar/* 以下のlessファイルを直接インポートします。

例えば、共有ユーティリティのみを使用する場合は次のようになります。

```
@import "less/sugar/utils";
```

## 共有ユーティリティと、その他のコンポーネント

*less/utils.less* にある共有のミックスインはベーシックなミックスインです。

```
.box {
	.size(100px, 80px); // 100*80のサイズ指定をする
}
```

その他のコンポーネント（fonts, grid, css3, gradient)については、less.jsの名前空間を活用しています。

cs) [LESS | Namespace](http://lesscss.org/#-namespaces)

```
body {
	#fonts > .sans(); // 和文のゴシック体を指定
}
h1 {
	#fonts > .en > .sans(); // 欧文のゴシック体を指定
}
```

## 構成ファイル/ドキュメント


### less/

- sugar.less : less/sugar/* を全てインポートします。


### less/sugar/

- normalize.less : via [normalize.css](http://necolas.github.com/normalize.css/)
- [utils.less](./docs/utils.md) : 共有のユーティリティミックスイン・クラス群
- [fonts.less](./docs/fonts.md) : フォント定義
- [grid.less](./docs/grid.md) : シンプルなグリッドシステム
- [css3.less](./docs/css3.md) : CSS3プロパティのミックスイン 
- [gradient.less](./docs/gradient.md) : グラデーション用ミックスイン 


## 作者

mach3

- [Blog](http://blog.mach3.jp)
- [Website](http://www.mach3.jp)
- [Twitter](http://twitter.com/mach3ss)


