window.__EC_DOC_option_gl_series_polygons3D = {
  "multiPolygon": {
    "desc": "<p>是否一个数据包含多个多边形。</p>\n"
  },
  "itemStyle": {
    "desc": "<p>图形样式，包括颜色、透明度、描边等。</p>\n"
  },
  "itemStyle.color": {
    "desc": "<p>图形的颜色。 默认从全局调色盘 <a href=\"https://echarts.apache.org/zh/option.html#color\" target=\"_blank\">option.color</a> 获取颜色 </p>\n<p>除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：</p>\n<pre><code class=\"lang-ts\">// 纯白色\n[1, 1, 1, 1]\n</code></pre>\n<p>使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。</p>\n"
  },
  "itemStyle.opacity": {
    "desc": "<p>图形的不透明度。</p>\n"
  },
  "emphasis": {
    "desc": "<p>鼠标 hover 高亮时图形和标签的样式。</p>\n"
  },
  "emphasis.itemStyle.color": {
    "desc": "<p>图形的颜色。</p>\n<p>除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：</p>\n<pre><code class=\"lang-ts\">// 纯白色\n[1, 1, 1, 1]\n</code></pre>\n<p>使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。</p>\n"
  },
  "emphasis.itemStyle.opacity": {
    "desc": "<p>图形的不透明度。</p>\n"
  },
  "data": {
    "desc": "<p>多边形的数据列表。</p>\n<pre><code class=\"lang-ts\">data: [{\n    // A square\n    coords: [[0, 0], [100, 0], [100, 100], [0, 100]],\n    // Height\n    height: 3\n}, {\n    // A triangle\n    coords: [[50, 0], [100, 100], [0, 100]],\n    // Height\n    height: 5\n}]\n</code></pre>\n"
  },
  "data.coords": {
    "desc": "<p>多边形的坐标列表。如果 <a href=\"#series-polygons3D.multiPolygon\">multiPolygon</a> 设成 true，则是包含多个多边形的数组。</p>\n"
  },
  "progressiveThreshold": {
    "desc": "<p>启用渐进渲染的阈值，渐进渲染可以让你在加载画面的过程中不会有阻塞。</p>\n"
  },
  "progressive": {
    "desc": "<p>渐进渲染每次渲染的数据量。</p>\n"
  }
}