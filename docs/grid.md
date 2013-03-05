# Grid

シンプルなグリッドシステムを提供するコンポーネント。

- 依存コンポーネント : utils

```less
@import "less/sugar/utils";
@import "less/sugar/grid";
```

## 名前空間

名前空間 *#grid* を使用します。

```less
.my-grid-row {
	#grid > .row(12);
}
```


## 変数

カラム幅・溝幅を変数で定義してあります。ミックスインで引数が省略された場合に初期値として使用されます。

- @grid-column-width : カラム幅
- @grid-gutter-width : 溝幅

## ミックスイン


### .row(@num, @col, @gut)

グリッドの行を指定します。

- @num : カラム数（初期値:1）
- @col : カラム幅（初期値:@grid-column-width）
- @gut : 溝幅（初期値:@grid-gutter-width）

### .col(@num, @col, @gut)

グリッドのカラムを指定します。

- @num : カラム数（初期値:1）
- @col : カラム幅（初期値:@grid-column-width）
- @gut : 溝幅（初期値:@grid-gutter-width）

```less
.my-grid-row {
	#grid > .row(12);
	.my-grid-column {
		#grid > .col(3);
	}
}
```

### .align(@num, @col, @gut)

カラムの左余白を指定します。

- @num : カラム数（初期値:1）
- @col : カラム幅（初期値:@grid-column-width）
- @gut : 溝幅（初期値:@grid-gutter-width）

```less
.my-grid-row {
	...
	.my-grid-column-aligned {
		#grid-align(4); // 4カラム分インデントする
	}
}
```

### .block

*#gird > .block* を使用する事で、 *display: block* とフロートでグリッドを作成します。  
（デフォルトでは *inline-block* です）

```less
.my-grid-row {
	#grid > .block > .row();
	.my-grid-column {
		#grid > .block > .col();
	}
}
```



