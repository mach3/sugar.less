# Gradient

CSSによるグラデーションエフェクトのショートハンドを提供します。
基本的に[Bootstrap](http://twitter.github.com/bootstrap/)のミックスインを参考にしています。

## 名前空間

名前空間 *#gradient* を使用します。

```less
.item {
	#gradient > .horizontal(#000, #fff);
}
```

## ミックスイン

引数や機能については[ソース](../less/sugar/gradient.less)ならびに[デモ](../test/css3/gradient.less)をご確認ください。
.horizontal, .vertical, .vertical-three-colors は、IE互換用のfilterを *.ie-\** として分離しています。

- .horizontal(@startColor, @endColor)
- .ie-horizontal(@startColor, @endColor)
- .vertical(@startColor, @endColor)
- .ie-vertical(@startColor, @endColor)
- .vertical-three-colors(@startColor, @midColor, @colorStop, @endColor)
- .ie-vertical-three-colors(@startColor, @midColor, @colorStop, @endColor)
- .directional(@startColor, @endColor, @deg)
- .radial(@innerColor, @outerColor)
