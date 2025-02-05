window.__EC_DOC_option_gl_series_polygons3D = {
  "multiPolygon": {
    "desc": "<p>Whether a data contains multiple polygons.</p>\n"
  },
  "itemStyle": {
    "desc": "<p>Graphic styles, including color, transparency, strokes, and etc.</p>\n"
  },
  "itemStyle.color": {
    "desc": "<p>The color of the graphic. </p>\n<pre><code class=\"lang-ts\">// pure white\n[1, 1, 1, 1]\n</code></pre>\n<p>When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.</p>\n"
  },
  "itemStyle.opacity": {
    "desc": "<p>The opacity of the graphic.</p>\n"
  },
  "emphasis": {
    "desc": "<p>Mouse hover Highlights the style of graphics and labels.</p>\n"
  },
  "emphasis.itemStyle.color": {
    "desc": "<p>The color of the graphic. </p>\n<pre><code class=\"lang-ts\">// pure white\n[1, 1, 1, 1]\n</code></pre>\n<p>When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.</p>\n"
  },
  "emphasis.itemStyle.opacity": {
    "desc": "<p>The opacity of the graphic.</p>\n"
  },
  "data": {
    "desc": "<p>A list of data for the polygon.</p>\n<pre><code class=\"lang-ts\">data: [{\n    // A square\n    coords: [[0, 0], [100, 0], [100, 100], [0, 100]],\n    // Height\n    height: 3\n}, {\n    // A triangle\n    coords: [[50, 0], [100, 100], [0, 100]],\n    // Height\n    height: 5\n}]\n</code></pre>\n"
  },
  "data.coords": {
    "desc": "<p>A list of coordinates of the polygon. If <a href=\"#series-polygons3D.multiPolygon\">multiPolygon</a> is set to true, it is an array containing multiple polygons.</p>\n"
  },
  "progressiveThreshold": {
    "desc": "<p>Enable progressive rendering thresholds, progressive rendering can be loading the screen without blocking.</p>\n"
  },
  "progressive": {
    "desc": "<p>Progressively render the amount of data per render.</p>\n"
  }
}