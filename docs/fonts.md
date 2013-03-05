# Fonts

共有フォント指定用のコンポーネントです。名前空間 *#fonts* を使用します。

```less
@import "less/sugar/fonts";

h1 {
	#fonts > .serif();
}
```

## 変数

sans, serif, monospaceそれぞれの指定が変数で宣言されています。
必要に応じて上書きを行います。

```less
@font-family-sans-en : "Verdana";
```

### 和文用 

- @font-family-sans
- @font-family-serif
- @font-family-monospace

### 欧文用

- @font-family-sans-en
- @font-family-serif-en
- @font-family-monospace-en


## ミックスイン

### .sans(), .serif(), .monospace()

sans, serif, monospaceをそれぞれ指定します。

```
h1 {
	#fonts > .serif();
}
```

### .en

*.en* を間に挟むことで欧文用のフォントを指定できます。

```
h1 {
	#fonts > .en > .serif();
}
```