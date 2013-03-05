# Utils

ベーシックなユーティリティミックスインとクラス群を提供します。

```
@import "less/sugar/utils";
```

## クラス

ここで言う「クラス」とは、通常のCSSクラスとして利用できる物を指します。
Lessの特性上、引数の必要ないミックスインとしても使用する事ができます。

```less
.my-container {
	.clearfix();
}
```

### .clearfix

clearfixを指定する。

### .left

左にフロートする。

### .right

右にフロートする。

### .hide

要素を非表示にする。

### .show

要素を表示する（display: block）。

### .inline-block

inline-blockを指定する。

### .inline-collapse

inline-blockのブロック間の空白を削除する。


## ミックスイン

### .opacity(@opacity)

opacityを指定。

```
.item {
	.opacity(60); // 不透明度60%
}
```

### .size(@width, @height)

サイズ指定のショートハンド。

```less
.item {
	.size(100px, 80px); // width: 100px; height: 80px;
}
```

### .square(@size)

正方形のサイズ指定のショートハンド。

```less
.item {
	.size(100px); // width: 100px; height: 100px;
}
```

### .sprite(@x, @y, @width, @height)

CSSスプライトのショートハンド。

```less
.item {
	background-image: url("foo.png");
	.sprite(-10px, -20px, 100px, 80px);
	// background-repeat: no-repeat;
	// background-position: 10px, 20px;
	// width: 100px;
	// height: 80px;
}
```

### .resizable(@direction)

resizeのショートハンド。

```less
textarea {
	.resizable(horizontal);
}
```

### .border-arrow

borderを使用した矢印を指定するコンポーネント。

```less
.item { ... }
.item:after {
	position: absolute;
	left: 10px;
	bottom: -10px;
	.border-arrow > .bottom(10px, #cc0000);
}
```

- .border-arrow > .bottom(@size, @color)
- .border-arrow > .top(@size, @color)
- .border-arrow > .right(@size, @color)
- .border-arrow > .left(@size, @color)
