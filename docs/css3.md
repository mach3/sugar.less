# CSS3

CSS3のベンダープレフィックス等のショートハンドを提供します。
基本的に[Bootstrap](http://twitter.github.com/bootstrap/)のミックスインを参考にしています。

## 名前空間

名前空間 *#css3* を使用します。

```less
.item {
	#css3 > .border-radius(8px);
}
```

## ミックスイン

引数や機能については[ソース](../less/sugar/css3.less)ならびに[デモ](../test/css3/style.less)をご確認ください。

- .placeholder(@color)
- .border-radius(@size)
- .box-shadow(@shadow)
- .transition(@transition)
- .transition-delay(@transition-delay)
- .rotate(@degrees)
- .scale(@ratio)
- .translate(@x, @y)
- .skew(@x, @y)
- .translate3d(@x, @y, @z)
- .backface-visibility(@visibility)
- .background-clip(@clip)
- .background-size(@size)
- .box-sizing(@boxmodel)
- .user-select(@select)
- .content-columns(@columnCount, @columnGap)
- .hyphens(@mode)
