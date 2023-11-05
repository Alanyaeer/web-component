# 这是我的前端小组件库 :thinking:

## cloud-font

[cloud-font](https://github.com/Alanyaeer/web-component/tree/master/cloud-font)

![image-20231028192333139](https://cdn.jsdelivr.net/gh/Alanyaeer/web-component@master/assets/202310282006780.png)

## nav

[nav](https://github.com/Alanyaeer/web-component/tree/master/nav-tab)

![image-20231029141317092](https://cdn.jsdelivr.net/gh/Alanyaeer/web-component@master/assets/202310291413234.png)



## process-bar

[进度条](https://github.com/Alanyaeer/web-component/tree/master/process-bar)

这里有一段代码不是很理解

`background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);`

>这段 CSS 代码是用来设置一个元素的背景图像，具体来说是一个线性渐变背景。我们可以逐步解析这段代码：
>
>`linear-gradient(45deg, ...)`: 这是 CSS 的 `linear-gradient` 函数，它创建一个线性渐变。这里的 `45deg` 表示渐变的方向是 45 度角。
>
>`rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent`: 这是渐变的颜色和位置。
>
>- `rgba(255, 255, 255, .15) 25%`: 表示颜色为白色（RGB 为 255,255,255）并且不透明度为 0.15 的色标位于渐变的 25% 位置。不透明度范围从 0（完全透明）到 1（完全不透明）。
>- `transparent 25%`: 表示一个透明的色标，位于渐变的 25% 位置。透明色标将确保在渐变中有一个从下到上的过渡。
>- `transparent 50%`: 表示一个透明的色标，位于渐变的 50% 位置。再次使用透明色标以在渐变中创建一个从下到上的过渡。
>- `rgba(255, 255, 255, .15) 50%`: 表示颜色为白色（RGB 为 255,255,255）并且不透明度为 0.15 的色标位于渐变的 50% 位置。
>- `rgba(255, 255, 255, .15) 75%`: 表示颜色为白色（RGB 为 255,255,255）并且不透明度为 0.15 的色标位于渐变的 75% 位置。
>- `transparent 75%`: 表示一个透明的色标，位于渐变的 75% 位置。再次使用透明色标以在渐变中创建一个从上到下的过渡。
>- `transparent`: 最后，透明色标确保在渐变的最后有一个从上到下的过渡。
>
>这里的 `transparent` 的主要作用是创建渐变的过渡效果，它使得颜色之间的过渡更加平滑，而不是直接跳转到下一个颜色。通过使用透明色标，我们可以创建出各种各样的线性渐变效果，例如“彩虹”效果等。

暂时放着以后之后再来回头看， 大概的意思是 transparent 可以让过渡效果更加的好看

![image-20231105204409670](https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202311052044848.png)
