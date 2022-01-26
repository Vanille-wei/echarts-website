window.__EC_DOC_option_graphic = {
  "id": {
    "desc": "<p>Component ID, not specified by default. If specified, it can be used to refer the component in option or API.</p>\n"
  },
  "elements": {
    "desc": "<p>A list of all graphic elements.</p>\n<p>Note, the standard configuration of graphic component is:</p>\n<pre><code class=\"lang-javascript\">{\n    graphic: {\n        elements: [\n            {type: &#39;rect&#39;, ...}, {type: &#39;circle&#39;, ...}, ...\n        ]\n    }\n}\n</code></pre>\n<p>But we always use short patterns for convenience:</p>\n<pre><code class=\"lang-javascript\">{\n    graphic: { // Declare only one graphic element.\n        type: &#39;rect&#39;,\n        ...\n    }\n}\n</code></pre>\n<p>Or:</p>\n<pre><code class=\"lang-javascript\">{\n    graphic: [ // Declare multiple graphic elements.\n        {type: &#39;rect&#39;, ...}, {type: &#39;circle&#39;, ...}, ...\n    ]\n}\n</code></pre>\n"
  },
  "elements-group": {
    "desc": "<p><code class=\"codespan\">group</code> is the only type that can contain children, so that a group of elements can be positioned and transformed together.</p>\n"
  },
  "elements-group.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-group.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "elements-group.$action": {
    "desc": "<p>Specify the operation should be performed to the element when calling <code class=\"codespan\">setOption</code>.\nDefault value is &#39;merge&#39;, other values can be &#39;replace&#39; or &#39;remove&#39;.</p>\n<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>: merge the given option to existing element (if any), otherwise create a new element.</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>: create a new element according to the given option and replace the existing element (if any).</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>: delete the existing element (if any).</li>\n</ul>\n"
  },
  "elements-group.x": {
    "desc": "<p>x position of element. In pixels.</p>\n"
  },
  "elements-group.y": {
    "desc": "<p>y position of element. In pixels.</p>\n"
  },
  "elements-group.rotation": {
    "desc": "<p>Degree value of rotation.</p>\n"
  },
  "elements-group.scaleX": {
    "desc": "<p>Scale on x.</p>\n"
  },
  "elements-group.scaleY": {
    "desc": "<p>Scale on y.</p>\n"
  },
  "elements-group.originX": {
    "desc": "<p>x value of element scale and rotation origin. In pixels</p>\n"
  },
  "elements-group.originY": {
    "desc": "<p>y value of element scale and rotation origin. In pixels.</p>\n"
  },
  "elements-group.transition": {
    "desc": "<p>You can specify that all properties have transition animations turned on with `&#39;all&#39;&#39;, or you can specify a single property or an array of properties.</p>\n<p>The properties can be:</p>\n<p>Transform related properties:<code class=\"codespan\">&#39;x&#39;</code>, <code class=\"codespan\">&#39;y&#39;</code>, <code class=\"codespan\">&#39;scaleX&#39;</code>, <code class=\"codespan\">&#39;scaleY&#39;</code>, <code class=\"codespan\">&#39;rotation&#39;</code>, <code class=\"codespan\">&#39;originX&#39;</code>, <code class=\"codespan\">&#39;originY&#39;</code>. For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    x: 100,\n    y: 200,\n    transition: [&#39;x&#39;, &#39;y&#39;]\n}\n</code></pre>\n<p>Shortcut to transition all of the properties in <a href=\"#graphic.elements-group.shape\"><code class=\"codespan\">&#39;shape&#39;</code></a>, <a href=\"#graphic.elements-group.style\">&#39;<code class=\"codespan\">style&#39;</code></a>, <a href=\"#graphic.elements-group.extra\"><code class=\"codespan\">&#39;extra&#39;</code></a>. For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { // ... },\n    // Indicate that all props in `shape` will\n    // have transition animation.\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n<p>In the custom series. <code class=\"codespan\">&#39;x&#39;</code> and <code class=\"codespan\">&#39;y&#39;</code> are transitioned by default. If you want to disable the default transition, just set it as: <code class=\"codespan\">transition: []</code>.</p>\n<p>See this <a href=\"https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a> please.</p>\n"
  },
  "elements-group.enterFrom": {
    "desc": "<p>Initial properties for enter animation.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    enterFrom: {\n        // Fade in\n        style: { opacity: 0 },\n        // Slide in from left\n        x: 0\n    }\n}\n</code></pre>\n"
  },
  "elements-group.leaveTo": {
    "desc": "<p>End properties for leave animation.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    leaveTo: {\n        // Fade out\n        style: { opacity: 0 },\n        // Slide out to right\n        x: 200\n    }\n}\n</code></pre>\n"
  },
  "elements-group.enterAnimation": {
    "desc": "<p>Configurations of enter animation.</p>\n"
  },
  "elements-group.enterAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-group.enterAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-group.enterAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-group.updateAnimation": {
    "desc": "<p>Configurations of update animation.</p>\n"
  },
  "elements-group.updateAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-group.updateAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-group.updateAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-group.leaveAnimation": {
    "desc": "<p>Configurations of leave animation.</p>\n"
  },
  "elements-group.leaveAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-group.leaveAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-group.leaveAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-group.keyframeAnimation": {
    "desc": "<p>Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">keyframeAnimation: [{\n    // Using scale for breath animation.\n    duration: 1000,\n    loop: true,\n    keyframes: [{\n        percent: 0.5,\n        easing: &#39;sinusoidalInOut&#39;,\n        scaleX: 0.1,\n        scaleY: 0.1\n    }, {\n        percent: 1,\n        easing: &#39;sinusoidalInOut&#39;,\n        scaleX: 1,\n        scaleY: 1\n    }]\n}, {\n    // Translate animation.\n    duration: 2000,\n    loop: true,\n    keyframes: [{\n        percent: 0,\n        x: 10\n    }, {\n        percent: 1,\n        x: 100\n    }]\n}]\n\n</code></pre>\n<p>If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.</p>\n"
  },
  "elements-group.keyframeAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-group.keyframeAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-group.keyframeAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-group.keyframeAnimation.loop": {
    "desc": "<p>If loop the keyframe animation.</p>\n"
  },
  "elements-group.keyframeAnimation.keyframes": {
    "desc": "<p>The keyframes of the animation. Each item in the array is a keyframe in the following format.</p>\n<pre><code class=\"lang-ts\">interface Keyframe {\n    // Keyframe position. 0 is the first frame, 1 is the last frame\n    // The time of keyframe is percent * duration + delay\n    percent: number\n    // Easing function from the last keyframe to this keyframe. Optional\n    easing?: number\n\n    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.\n}\n</code></pre>\n"
  },
  "elements-group.left": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-group.left\">left</a> and <a href=\"#graphic.elements-group.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-group.left\">left</a> or <a href=\"#graphic.elements-group.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-group.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-group.right": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-group.left\">left</a> and <a href=\"#graphic.elements-group.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-group.left\">left</a> or <a href=\"#graphic.elements-group.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-group.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-group.top": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-group.top\">top</a> and <a href=\"#graphic.elements-group.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-group.top\">top</a> or <a href=\"#graphic.elements-group.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-group.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-group.bottom": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-group.top\">top</a> and <a href=\"#graphic.elements-group.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-group.top\">top</a> or <a href=\"#graphic.elements-group.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-group.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-group.bounding": {
    "desc": "<p>Used to specify whether the entire transformed element (containing children if is group) is confined in its container.</p>\n<p>See sample:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/en/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"></iframe>\n\n\n<p>Optional values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>: (default)\n  Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>:\n  Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.</p>\n</li>\n</ul>\n"
  },
  "elements-group.z": {
    "desc": "<p>z value of the elements, determine the overlap order.</p>\n"
  },
  "elements-group.zlevel": {
    "desc": "<p>Determine which canvas layer this element should be in.</p>\n<p>Notice: Multiple canvas layer may affect performance.</p>\n"
  },
  "elements-group.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-ts\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-group.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "elements-group.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "elements-group.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "elements-group.textContent": {
    "desc": "<p>Text block attached to an element and layout based on the element by <code class=\"codespan\">textConfig</code>.</p>\n<p>The props the the same as <a href=\"option.html#graphic.elements-text\" target=\"_blank\">text</a>.</p>\n"
  },
  "elements-group.textConfig.position": {
    "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
  },
  "elements-group.textConfig.rotation": {
    "desc": "<p>Rotation of <code class=\"codespan\">textContent</code>. In radian.</p>\n"
  },
  "elements-group.textConfig.layoutRect": {
    "desc": "<p>Rect that <code class=\"codespan\">textContent</code> will be positioned.\nDefault to be the bounding box of host element.</p>\n<pre><code class=\"lang-ts\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
  },
  "elements-group.textConfig.offset": {
    "desc": "<p>Offset of the <code class=\"codespan\">textContent</code>.</p>\n<p>The difference of <code class=\"codespan\">offset</code> and <code class=\"codespan\">position</code> is that <code class=\"codespan\">offset</code> will be applied in the rotation.</p>\n"
  },
  "elements-group.textConfig.origin": {
    "desc": "<p><code class=\"codespan\">origin</code> is relative to the bounding box of the host element.\nCan be percent value. Relative to the bounding box.\nIf <code class=\"codespan\">&#39;center&#39;</code> specified, it will be center of the bounding box.</p>\n<p>Only available when position and rotation are both set.</p>\n<ul>\n<li>like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
  },
  "elements-group.textConfig.distance": {
    "desc": "<p>Distance to the <code class=\"codespan\">layoutRect</code>。</p>\n"
  },
  "elements-group.textConfig.local": {
    "desc": "<p>If <code class=\"codespan\">true</code>, it will apply host&#39;s transform.</p>\n"
  },
  "elements-group.textConfig.insideFill": {
    "desc": "<p><code class=\"codespan\">insideFill</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is <code class=\"codespan\">&quot;inside&quot;</code>, its final <code class=\"codespan\">fill</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\nIn most cases, &quot;auto-calculated-fill&quot; is white.</p>\n"
  },
  "elements-group.textConfig.insideStroke": {
    "desc": "<p><code class=\"codespan\">insideStroke</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is <code class=\"codespan\">&quot;inside&quot;</code>, its final <code class=\"codespan\">stroke</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>The rule of getting &quot;auto-calculated-stroke&quot;:</p>\n<ul>\n<li>If<ul>\n<li>(A) the <code class=\"codespan\">fill</code> is specified in style (either in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>or (B) needed to draw text background (either defined in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>&quot;auto-calculated-stroke&quot; will be null.</li>\n</ul>\n</li>\n<li>Otherwise<ul>\n<li>&quot;auto-calculated-stroke&quot; will be the same as <code class=\"codespan\">fill</code> of this element if possible, or null.</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-group.textConfig.outsideFill": {
    "desc": "<p><code class=\"codespan\">outsideFill</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is &quot;inside&quot;, its final <code class=\"codespan\">fill</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
  },
  "elements-group.textConfig.outsideStroke": {
    "desc": "<p><code class=\"codespan\">outsideStroke</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is not &quot;inside&quot;, its final <code class=\"codespan\">stroke</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>The rule of getting &quot;auto-calculated-stroke&quot;:</p>\n<ul>\n<li>If<ul>\n<li>(A) the <code class=\"codespan\">fill</code> is specified in style (either in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>or (B) needed to draw text background (either defined in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>&quot;auto-calculated-stroke&quot; will be null.</li>\n</ul>\n</li>\n<li>Otherwise<ul>\n<li>&quot;auto-calculated-stroke&quot; will be a near white color to distinguish &quot;front end&quot; label with messy background (like other text label, line or other graphic).</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-group.textConfig.inside": {
    "desc": "<p>Tell echarts that I can make sure this text is inside or not.</p>\n"
  },
  "elements-group.during": {
    "desc": "<p><code class=\"codespan\">during</code> callback enable users to set props to an element in each animation frame.</p>\n<pre><code class=\"lang-ts\">(duringAPI: CustomDuringAPI) =&gt; void\n\ninterface CustomDuringAPI {\n    // Set transform prop value.\n    // Transform prop see `TransformProp`.\n    setTransform(key: TransformProp, val: unknown): void;\n    // Get transform prop value of the current animation frame.\n    getTransform(key: TransformProp): unknown;\n    // Set shape prop value.\n    // Shape prop is like `{ type: &#39;rect&#39;, shape: { xxxProp: xxxValue } }`.\n    setShape(key: string, val: unknown): void;\n    // Get shape prop value of the current animation frame.\n    getShape(key: string): unknown;\n    // Set style prop value.\n    // Style prop is like `{ type: &#39;rect&#39;, style: { xxxProp: xxxValue } }`.\n    setStyle(key: string, val: unknown): void;\n    // Get style prop value of the current animation frame.\n    getStyle(key: string): unknown;\n    // Set extra prop value.\n    // Extra prop is like `{ type: &#39;rect&#39;, extra: { xxxProp: xxxValue } }`.\n    setExtra(key: string, val: unknown): void;\n    // Get extra prop value of the current animation frame.\n    getExtra(key: string): unknown;\n}\n\ntype TransformProp =\n    &#39;x&#39; | &#39;y&#39; | &#39;scaleX&#39; | &#39;scaleY&#39; | &#39;originX&#39; | &#39;originY&#39; | &#39;rotation&#39;;\n</code></pre>\n<p>In most cases users do not need this <code class=\"codespan\">during</code> callback. For example, if some props are specified in <a href=\"option.html#series-custom.renderItem.return_rect.transition\" target=\"_blank\">transition</a>, echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this <code class=\"codespan\">during</code> callback to customize them.</p>\n<p>For example, if users are using <a href=\"option.html#series-custom.renderItem.return_polygon\" target=\"_blank\">polygon</a> shape. The shape is described by <a href=\"option.html#series-custom.renderItem.return_polygon.shape.points\" target=\"_blank\">shape.points</a>, which is an points array like:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...]\n    },\n    // ...\n}\n</code></pre>\n<p>If users specify them into <a href=\"option.html#series-custom.renderItem.return_polygon.transition\" target=\"_blank\">transition</a> like:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...],\n    },\n    transition: &#39;shape&#39;\n    // ...\n}\n</code></pre>\n<p>Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the <code class=\"codespan\">during</code> callback like that:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: calculatePoints(initialDegree),\n        transition: &#39;points&#39;\n    },\n    extra: {\n        degree: nextDegree\n    },\n    // Make echarts interpolate `extra.degree` internally, based on which\n    // we calculate the `points` in each animation frame.\n    transition: &#39;extra&#39;,\n    during: function (duringAPI) {\n        var currentDegree = duringAPI.getExtra(&#39;degree&#39;);\n        duringAPI.setShape(calculatePoints(currentDegree));\n    }\n    // ...\n}\n</code></pre>\n<p>See this example <a href=\"https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a>.</p>\n"
  },
  "elements-group.cursor": {
    "desc": "\n\n<p>The mouse style when mouse hovers on an element, the same as <code class=\"codespan\">cursor</code> property in <code class=\"codespan\">CSS</code>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-group.draggable": {
    "desc": "<p>Can be dragged or not.</p>\n"
  },
  "elements-group.progressive": {
    "desc": "<p>Whether use progressive render to improve performance. Usually used when number of element is too large.</p>\n"
  },
  "elements-group.width": {
    "desc": "<p>Specify width of this <code class=\"codespan\">group</code>.</p>\n<p>This width is only used for the positioning of its children.</p>\n<p>When width is <code class=\"codespan\">0</code>, children can also be positioned according to its parent using <code class=\"codespan\">left: &#39;center&#39;</code>.</p>\n"
  },
  "elements-group.height": {
    "desc": "<p>Specify height of this <code class=\"codespan\">group</code>.</p>\n<p>This height is only used for the positioning of its children.</p>\n<p>When height is <code class=\"codespan\">0</code>, children can also be positioned according to its parent using <code class=\"codespan\">top: &#39;middle&#39;</code>.</p>\n"
  },
  "elements-group.diffChildrenByName": {
    "desc": "<p>In <a href=\"#series-custom\">custom series</a>, when <code class=\"codespan\">diffChildrenByName</code> is set as <code class=\"codespan\">true</code>, for each <a href=\"#graphic.elements-group\">group</a> returned from <a href=\"#series-custom.renderItem\">renderItem</a>, &quot;diff&quot; will be performed to its <a href=\"#graphic.elements-group.children\">children</a> according to the <a href=\"#graphic.elements-polygon.name\">name</a> attribute of each graphic elements. Here &quot;diff&quot; means that map the coming graphic elements to the existing graphic elements when repainting according to <code class=\"codespan\">name</code>, which enables the transition animation if data is modified.</p>\n<p>But notice that the operation is performance consuming, do not use it for large data amount.</p>\n"
  },
  "elements-group.children": {
    "desc": "<p>A list of children, each item is a declaration of an element.</p>\n"
  },
  "elements-image.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-image.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "elements-image.$action": {
    "desc": "<p>Specify the operation should be performed to the element when calling <code class=\"codespan\">setOption</code>.\nDefault value is &#39;merge&#39;, other values can be &#39;replace&#39; or &#39;remove&#39;.</p>\n<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>: merge the given option to existing element (if any), otherwise create a new element.</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>: create a new element according to the given option and replace the existing element (if any).</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>: delete the existing element (if any).</li>\n</ul>\n"
  },
  "elements-image.x": {
    "desc": "<p>x position of element. In pixels.</p>\n"
  },
  "elements-image.y": {
    "desc": "<p>y position of element. In pixels.</p>\n"
  },
  "elements-image.rotation": {
    "desc": "<p>Degree value of rotation.</p>\n"
  },
  "elements-image.scaleX": {
    "desc": "<p>Scale on x.</p>\n"
  },
  "elements-image.scaleY": {
    "desc": "<p>Scale on y.</p>\n"
  },
  "elements-image.originX": {
    "desc": "<p>x value of element scale and rotation origin. In pixels</p>\n"
  },
  "elements-image.originY": {
    "desc": "<p>y value of element scale and rotation origin. In pixels.</p>\n"
  },
  "elements-image.transition": {
    "desc": "<p>You can specify that all properties have transition animations turned on with `&#39;all&#39;&#39;, or you can specify a single property or an array of properties.</p>\n<p>The properties can be:</p>\n<p>Transform related properties:<code class=\"codespan\">&#39;x&#39;</code>, <code class=\"codespan\">&#39;y&#39;</code>, <code class=\"codespan\">&#39;scaleX&#39;</code>, <code class=\"codespan\">&#39;scaleY&#39;</code>, <code class=\"codespan\">&#39;rotation&#39;</code>, <code class=\"codespan\">&#39;originX&#39;</code>, <code class=\"codespan\">&#39;originY&#39;</code>. For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    x: 100,\n    y: 200,\n    transition: [&#39;x&#39;, &#39;y&#39;]\n}\n</code></pre>\n<p>Shortcut to transition all of the properties in <a href=\"#graphic.elements-image.shape\"><code class=\"codespan\">&#39;shape&#39;</code></a>, <a href=\"#graphic.elements-image.style\">&#39;<code class=\"codespan\">style&#39;</code></a>, <a href=\"#graphic.elements-image.extra\"><code class=\"codespan\">&#39;extra&#39;</code></a>. For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { // ... },\n    // Indicate that all props in `shape` will\n    // have transition animation.\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n<p>In the custom series. <code class=\"codespan\">&#39;x&#39;</code> and <code class=\"codespan\">&#39;y&#39;</code> are transitioned by default. If you want to disable the default transition, just set it as: <code class=\"codespan\">transition: []</code>.</p>\n<p>See this <a href=\"https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a> please.</p>\n"
  },
  "elements-image.enterFrom": {
    "desc": "<p>Initial properties for enter animation.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    enterFrom: {\n        // Fade in\n        style: { opacity: 0 },\n        // Slide in from left\n        x: 0\n    }\n}\n</code></pre>\n"
  },
  "elements-image.leaveTo": {
    "desc": "<p>End properties for leave animation.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    leaveTo: {\n        // Fade out\n        style: { opacity: 0 },\n        // Slide out to right\n        x: 200\n    }\n}\n</code></pre>\n"
  },
  "elements-image.enterAnimation": {
    "desc": "<p>Configurations of enter animation.</p>\n"
  },
  "elements-image.enterAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-image.enterAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-image.enterAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-image.updateAnimation": {
    "desc": "<p>Configurations of update animation.</p>\n"
  },
  "elements-image.updateAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-image.updateAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-image.updateAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-image.leaveAnimation": {
    "desc": "<p>Configurations of leave animation.</p>\n"
  },
  "elements-image.leaveAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-image.leaveAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-image.leaveAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-image.keyframeAnimation": {
    "desc": "<p>Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">keyframeAnimation: [{\n    // Using scale for breath animation.\n    duration: 1000,\n    loop: true,\n    keyframes: [{\n        percent: 0.5,\n        easing: &#39;sinusoidalInOut&#39;,\n        scaleX: 0.1,\n        scaleY: 0.1\n    }, {\n        percent: 1,\n        easing: &#39;sinusoidalInOut&#39;,\n        scaleX: 1,\n        scaleY: 1\n    }]\n}, {\n    // Translate animation.\n    duration: 2000,\n    loop: true,\n    keyframes: [{\n        percent: 0,\n        x: 10\n    }, {\n        percent: 1,\n        x: 100\n    }]\n}]\n\n</code></pre>\n<p>If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.</p>\n"
  },
  "elements-image.keyframeAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-image.keyframeAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-image.keyframeAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-image.keyframeAnimation.loop": {
    "desc": "<p>If loop the keyframe animation.</p>\n"
  },
  "elements-image.keyframeAnimation.keyframes": {
    "desc": "<p>The keyframes of the animation. Each item in the array is a keyframe in the following format.</p>\n<pre><code class=\"lang-ts\">interface Keyframe {\n    // Keyframe position. 0 is the first frame, 1 is the last frame\n    // The time of keyframe is percent * duration + delay\n    percent: number\n    // Easing function from the last keyframe to this keyframe. Optional\n    easing?: number\n\n    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.\n}\n</code></pre>\n"
  },
  "elements-image.left": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-image.left\">left</a> and <a href=\"#graphic.elements-image.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-image.left\">left</a> or <a href=\"#graphic.elements-image.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-image.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-image.right": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-image.left\">left</a> and <a href=\"#graphic.elements-image.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-image.left\">left</a> or <a href=\"#graphic.elements-image.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-image.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-image.top": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-image.top\">top</a> and <a href=\"#graphic.elements-image.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-image.top\">top</a> or <a href=\"#graphic.elements-image.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-image.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-image.bottom": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-image.top\">top</a> and <a href=\"#graphic.elements-image.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-image.top\">top</a> or <a href=\"#graphic.elements-image.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-image.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-image.bounding": {
    "desc": "<p>Used to specify whether the entire transformed element (containing children if is group) is confined in its container.</p>\n<p>See sample:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/en/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"></iframe>\n\n\n<p>Optional values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>: (default)\n  Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>:\n  Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.</p>\n</li>\n</ul>\n"
  },
  "elements-image.z": {
    "desc": "<p>z value of the elements, determine the overlap order.</p>\n"
  },
  "elements-image.zlevel": {
    "desc": "<p>Determine which canvas layer this element should be in.</p>\n<p>Notice: Multiple canvas layer may affect performance.</p>\n"
  },
  "elements-image.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-ts\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-image.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "elements-image.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "elements-image.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "elements-image.textContent": {
    "desc": "<p>Text block attached to an element and layout based on the element by <code class=\"codespan\">textConfig</code>.</p>\n<p>The props the the same as <a href=\"option.html#graphic.elements-text\" target=\"_blank\">text</a>.</p>\n"
  },
  "elements-image.textConfig.position": {
    "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
  },
  "elements-image.textConfig.rotation": {
    "desc": "<p>Rotation of <code class=\"codespan\">textContent</code>. In radian.</p>\n"
  },
  "elements-image.textConfig.layoutRect": {
    "desc": "<p>Rect that <code class=\"codespan\">textContent</code> will be positioned.\nDefault to be the bounding box of host element.</p>\n<pre><code class=\"lang-ts\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
  },
  "elements-image.textConfig.offset": {
    "desc": "<p>Offset of the <code class=\"codespan\">textContent</code>.</p>\n<p>The difference of <code class=\"codespan\">offset</code> and <code class=\"codespan\">position</code> is that <code class=\"codespan\">offset</code> will be applied in the rotation.</p>\n"
  },
  "elements-image.textConfig.origin": {
    "desc": "<p><code class=\"codespan\">origin</code> is relative to the bounding box of the host element.\nCan be percent value. Relative to the bounding box.\nIf <code class=\"codespan\">&#39;center&#39;</code> specified, it will be center of the bounding box.</p>\n<p>Only available when position and rotation are both set.</p>\n<ul>\n<li>like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
  },
  "elements-image.textConfig.distance": {
    "desc": "<p>Distance to the <code class=\"codespan\">layoutRect</code>。</p>\n"
  },
  "elements-image.textConfig.local": {
    "desc": "<p>If <code class=\"codespan\">true</code>, it will apply host&#39;s transform.</p>\n"
  },
  "elements-image.textConfig.insideFill": {
    "desc": "<p><code class=\"codespan\">insideFill</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is <code class=\"codespan\">&quot;inside&quot;</code>, its final <code class=\"codespan\">fill</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\nIn most cases, &quot;auto-calculated-fill&quot; is white.</p>\n"
  },
  "elements-image.textConfig.insideStroke": {
    "desc": "<p><code class=\"codespan\">insideStroke</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is <code class=\"codespan\">&quot;inside&quot;</code>, its final <code class=\"codespan\">stroke</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>The rule of getting &quot;auto-calculated-stroke&quot;:</p>\n<ul>\n<li>If<ul>\n<li>(A) the <code class=\"codespan\">fill</code> is specified in style (either in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>or (B) needed to draw text background (either defined in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>&quot;auto-calculated-stroke&quot; will be null.</li>\n</ul>\n</li>\n<li>Otherwise<ul>\n<li>&quot;auto-calculated-stroke&quot; will be the same as <code class=\"codespan\">fill</code> of this element if possible, or null.</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-image.textConfig.outsideFill": {
    "desc": "<p><code class=\"codespan\">outsideFill</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is &quot;inside&quot;, its final <code class=\"codespan\">fill</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
  },
  "elements-image.textConfig.outsideStroke": {
    "desc": "<p><code class=\"codespan\">outsideStroke</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is not &quot;inside&quot;, its final <code class=\"codespan\">stroke</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>The rule of getting &quot;auto-calculated-stroke&quot;:</p>\n<ul>\n<li>If<ul>\n<li>(A) the <code class=\"codespan\">fill</code> is specified in style (either in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>or (B) needed to draw text background (either defined in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>&quot;auto-calculated-stroke&quot; will be null.</li>\n</ul>\n</li>\n<li>Otherwise<ul>\n<li>&quot;auto-calculated-stroke&quot; will be a near white color to distinguish &quot;front end&quot; label with messy background (like other text label, line or other graphic).</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-image.textConfig.inside": {
    "desc": "<p>Tell echarts that I can make sure this text is inside or not.</p>\n"
  },
  "elements-image.during": {
    "desc": "<p><code class=\"codespan\">during</code> callback enable users to set props to an element in each animation frame.</p>\n<pre><code class=\"lang-ts\">(duringAPI: CustomDuringAPI) =&gt; void\n\ninterface CustomDuringAPI {\n    // Set transform prop value.\n    // Transform prop see `TransformProp`.\n    setTransform(key: TransformProp, val: unknown): void;\n    // Get transform prop value of the current animation frame.\n    getTransform(key: TransformProp): unknown;\n    // Set shape prop value.\n    // Shape prop is like `{ type: &#39;rect&#39;, shape: { xxxProp: xxxValue } }`.\n    setShape(key: string, val: unknown): void;\n    // Get shape prop value of the current animation frame.\n    getShape(key: string): unknown;\n    // Set style prop value.\n    // Style prop is like `{ type: &#39;rect&#39;, style: { xxxProp: xxxValue } }`.\n    setStyle(key: string, val: unknown): void;\n    // Get style prop value of the current animation frame.\n    getStyle(key: string): unknown;\n    // Set extra prop value.\n    // Extra prop is like `{ type: &#39;rect&#39;, extra: { xxxProp: xxxValue } }`.\n    setExtra(key: string, val: unknown): void;\n    // Get extra prop value of the current animation frame.\n    getExtra(key: string): unknown;\n}\n\ntype TransformProp =\n    &#39;x&#39; | &#39;y&#39; | &#39;scaleX&#39; | &#39;scaleY&#39; | &#39;originX&#39; | &#39;originY&#39; | &#39;rotation&#39;;\n</code></pre>\n<p>In most cases users do not need this <code class=\"codespan\">during</code> callback. For example, if some props are specified in <a href=\"option.html#series-custom.renderItem.return_rect.transition\" target=\"_blank\">transition</a>, echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this <code class=\"codespan\">during</code> callback to customize them.</p>\n<p>For example, if users are using <a href=\"option.html#series-custom.renderItem.return_polygon\" target=\"_blank\">polygon</a> shape. The shape is described by <a href=\"option.html#series-custom.renderItem.return_polygon.shape.points\" target=\"_blank\">shape.points</a>, which is an points array like:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...]\n    },\n    // ...\n}\n</code></pre>\n<p>If users specify them into <a href=\"option.html#series-custom.renderItem.return_polygon.transition\" target=\"_blank\">transition</a> like:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...],\n    },\n    transition: &#39;shape&#39;\n    // ...\n}\n</code></pre>\n<p>Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the <code class=\"codespan\">during</code> callback like that:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: calculatePoints(initialDegree),\n        transition: &#39;points&#39;\n    },\n    extra: {\n        degree: nextDegree\n    },\n    // Make echarts interpolate `extra.degree` internally, based on which\n    // we calculate the `points` in each animation frame.\n    transition: &#39;extra&#39;,\n    during: function (duringAPI) {\n        var currentDegree = duringAPI.getExtra(&#39;degree&#39;);\n        duringAPI.setShape(calculatePoints(currentDegree));\n    }\n    // ...\n}\n</code></pre>\n<p>See this example <a href=\"https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a>.</p>\n"
  },
  "elements-image.cursor": {
    "desc": "\n\n<p>The mouse style when mouse hovers on an element, the same as <code class=\"codespan\">cursor</code> property in <code class=\"codespan\">CSS</code>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-image.draggable": {
    "desc": "<p>Can be dragged or not.</p>\n"
  },
  "elements-image.progressive": {
    "desc": "<p>Whether use progressive render to improve performance. Usually used when number of element is too large.</p>\n"
  },
  "elements-image.style.image": {
    "desc": "<p>Specify content of the image, can be a URL, or <a href=\"https://tools.ietf.org/html/rfc2397\" target=\"_blank\">dataURI</a>.</p>\n"
  },
  "elements-image.style.x": {
    "desc": "<p>The x value of the left-top corner of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-image.style.y": {
    "desc": "<p>The y value of the left-top corner of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-image.style.width": {
    "desc": "<p>The width of the shape of the element.</p>\n"
  },
  "elements-image.style.height": {
    "desc": "<p>The height of the shape of the element.</p>\n<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-image.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "elements-image.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "elements-image.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "elements-image.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "elements-image.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "elements-image.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "elements-image.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "elements-image.style.transition": {
    "desc": "<p>Can be a single property name or an array of property names.\nEnable transition animation when the specified properties changed.\nCan only specify properties that are under this <code class=\"codespan\">style</code>.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        ...\n        // This two props will perform transition animation.\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>We can also specify all of the properties like this:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        ...\n    },\n    // Indicate that all props in `style` will\n    // have transition animation.\n    transition: &#39;style&#39;,\n};\n</code></pre>\n"
  },
  "elements-image.focus": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>When it&#39;s highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> Do not fade out other data, it&#39;s by default.</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> Only focus (not fade out) the element of the currently highlighted data.</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> Focus on all elements of the series which the currently highlighted data belongs to.</li>\n</ul>\n"
  },
  "elements-image.blurScope": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>The range of fade out when <code class=\"codespan\">focus</code> is enabled. Support the following configurations</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code></li>\n<li><code class=\"codespan\">&#39;series&#39;</code></li>\n<li><code class=\"codespan\">&#39;global&#39;</code></li>\n</ul>\n"
  },
  "elements-text": {
    "desc": "<p>Text block.</p>\n"
  },
  "elements-text.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-text.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "elements-text.$action": {
    "desc": "<p>Specify the operation should be performed to the element when calling <code class=\"codespan\">setOption</code>.\nDefault value is &#39;merge&#39;, other values can be &#39;replace&#39; or &#39;remove&#39;.</p>\n<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>: merge the given option to existing element (if any), otherwise create a new element.</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>: create a new element according to the given option and replace the existing element (if any).</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>: delete the existing element (if any).</li>\n</ul>\n"
  },
  "elements-text.x": {
    "desc": "<p>x position of element. In pixels.</p>\n"
  },
  "elements-text.y": {
    "desc": "<p>y position of element. In pixels.</p>\n"
  },
  "elements-text.rotation": {
    "desc": "<p>Degree value of rotation.</p>\n"
  },
  "elements-text.scaleX": {
    "desc": "<p>Scale on x.</p>\n"
  },
  "elements-text.scaleY": {
    "desc": "<p>Scale on y.</p>\n"
  },
  "elements-text.originX": {
    "desc": "<p>x value of element scale and rotation origin. In pixels</p>\n"
  },
  "elements-text.originY": {
    "desc": "<p>y value of element scale and rotation origin. In pixels.</p>\n"
  },
  "elements-text.transition": {
    "desc": "<p>You can specify that all properties have transition animations turned on with `&#39;all&#39;&#39;, or you can specify a single property or an array of properties.</p>\n<p>The properties can be:</p>\n<p>Transform related properties:<code class=\"codespan\">&#39;x&#39;</code>, <code class=\"codespan\">&#39;y&#39;</code>, <code class=\"codespan\">&#39;scaleX&#39;</code>, <code class=\"codespan\">&#39;scaleY&#39;</code>, <code class=\"codespan\">&#39;rotation&#39;</code>, <code class=\"codespan\">&#39;originX&#39;</code>, <code class=\"codespan\">&#39;originY&#39;</code>. For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    x: 100,\n    y: 200,\n    transition: [&#39;x&#39;, &#39;y&#39;]\n}\n</code></pre>\n<p>Shortcut to transition all of the properties in <a href=\"#graphic.elements-text.shape\"><code class=\"codespan\">&#39;shape&#39;</code></a>, <a href=\"#graphic.elements-text.style\">&#39;<code class=\"codespan\">style&#39;</code></a>, <a href=\"#graphic.elements-text.extra\"><code class=\"codespan\">&#39;extra&#39;</code></a>. For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { // ... },\n    // Indicate that all props in `shape` will\n    // have transition animation.\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n<p>In the custom series. <code class=\"codespan\">&#39;x&#39;</code> and <code class=\"codespan\">&#39;y&#39;</code> are transitioned by default. If you want to disable the default transition, just set it as: <code class=\"codespan\">transition: []</code>.</p>\n<p>See this <a href=\"https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a> please.</p>\n"
  },
  "elements-text.enterFrom": {
    "desc": "<p>Initial properties for enter animation.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    enterFrom: {\n        // Fade in\n        style: { opacity: 0 },\n        // Slide in from left\n        x: 0\n    }\n}\n</code></pre>\n"
  },
  "elements-text.leaveTo": {
    "desc": "<p>End properties for leave animation.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    leaveTo: {\n        // Fade out\n        style: { opacity: 0 },\n        // Slide out to right\n        x: 200\n    }\n}\n</code></pre>\n"
  },
  "elements-text.enterAnimation": {
    "desc": "<p>Configurations of enter animation.</p>\n"
  },
  "elements-text.enterAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-text.enterAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-text.enterAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-text.updateAnimation": {
    "desc": "<p>Configurations of update animation.</p>\n"
  },
  "elements-text.updateAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-text.updateAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-text.updateAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-text.leaveAnimation": {
    "desc": "<p>Configurations of leave animation.</p>\n"
  },
  "elements-text.leaveAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-text.leaveAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-text.leaveAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-text.keyframeAnimation": {
    "desc": "<p>Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">keyframeAnimation: [{\n    // Using scale for breath animation.\n    duration: 1000,\n    loop: true,\n    keyframes: [{\n        percent: 0.5,\n        easing: &#39;sinusoidalInOut&#39;,\n        scaleX: 0.1,\n        scaleY: 0.1\n    }, {\n        percent: 1,\n        easing: &#39;sinusoidalInOut&#39;,\n        scaleX: 1,\n        scaleY: 1\n    }]\n}, {\n    // Translate animation.\n    duration: 2000,\n    loop: true,\n    keyframes: [{\n        percent: 0,\n        x: 10\n    }, {\n        percent: 1,\n        x: 100\n    }]\n}]\n\n</code></pre>\n<p>If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.</p>\n"
  },
  "elements-text.keyframeAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-text.keyframeAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-text.keyframeAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-text.keyframeAnimation.loop": {
    "desc": "<p>If loop the keyframe animation.</p>\n"
  },
  "elements-text.keyframeAnimation.keyframes": {
    "desc": "<p>The keyframes of the animation. Each item in the array is a keyframe in the following format.</p>\n<pre><code class=\"lang-ts\">interface Keyframe {\n    // Keyframe position. 0 is the first frame, 1 is the last frame\n    // The time of keyframe is percent * duration + delay\n    percent: number\n    // Easing function from the last keyframe to this keyframe. Optional\n    easing?: number\n\n    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.\n}\n</code></pre>\n"
  },
  "elements-text.left": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-text.left\">left</a> and <a href=\"#graphic.elements-text.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-text.left\">left</a> or <a href=\"#graphic.elements-text.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-text.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-text.right": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-text.left\">left</a> and <a href=\"#graphic.elements-text.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-text.left\">left</a> or <a href=\"#graphic.elements-text.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-text.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-text.top": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-text.top\">top</a> and <a href=\"#graphic.elements-text.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-text.top\">top</a> or <a href=\"#graphic.elements-text.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-text.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-text.bottom": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-text.top\">top</a> and <a href=\"#graphic.elements-text.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-text.top\">top</a> or <a href=\"#graphic.elements-text.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-text.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-text.bounding": {
    "desc": "<p>Used to specify whether the entire transformed element (containing children if is group) is confined in its container.</p>\n<p>See sample:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/en/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"></iframe>\n\n\n<p>Optional values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>: (default)\n  Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>:\n  Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.</p>\n</li>\n</ul>\n"
  },
  "elements-text.z": {
    "desc": "<p>z value of the elements, determine the overlap order.</p>\n"
  },
  "elements-text.zlevel": {
    "desc": "<p>Determine which canvas layer this element should be in.</p>\n<p>Notice: Multiple canvas layer may affect performance.</p>\n"
  },
  "elements-text.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-ts\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-text.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "elements-text.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "elements-text.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "elements-text.textContent": {
    "desc": "<p>Text block attached to an element and layout based on the element by <code class=\"codespan\">textConfig</code>.</p>\n<p>The props the the same as <a href=\"option.html#graphic.elements-text\" target=\"_blank\">text</a>.</p>\n"
  },
  "elements-text.textConfig.position": {
    "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
  },
  "elements-text.textConfig.rotation": {
    "desc": "<p>Rotation of <code class=\"codespan\">textContent</code>. In radian.</p>\n"
  },
  "elements-text.textConfig.layoutRect": {
    "desc": "<p>Rect that <code class=\"codespan\">textContent</code> will be positioned.\nDefault to be the bounding box of host element.</p>\n<pre><code class=\"lang-ts\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
  },
  "elements-text.textConfig.offset": {
    "desc": "<p>Offset of the <code class=\"codespan\">textContent</code>.</p>\n<p>The difference of <code class=\"codespan\">offset</code> and <code class=\"codespan\">position</code> is that <code class=\"codespan\">offset</code> will be applied in the rotation.</p>\n"
  },
  "elements-text.textConfig.origin": {
    "desc": "<p><code class=\"codespan\">origin</code> is relative to the bounding box of the host element.\nCan be percent value. Relative to the bounding box.\nIf <code class=\"codespan\">&#39;center&#39;</code> specified, it will be center of the bounding box.</p>\n<p>Only available when position and rotation are both set.</p>\n<ul>\n<li>like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
  },
  "elements-text.textConfig.distance": {
    "desc": "<p>Distance to the <code class=\"codespan\">layoutRect</code>。</p>\n"
  },
  "elements-text.textConfig.local": {
    "desc": "<p>If <code class=\"codespan\">true</code>, it will apply host&#39;s transform.</p>\n"
  },
  "elements-text.textConfig.insideFill": {
    "desc": "<p><code class=\"codespan\">insideFill</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is <code class=\"codespan\">&quot;inside&quot;</code>, its final <code class=\"codespan\">fill</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\nIn most cases, &quot;auto-calculated-fill&quot; is white.</p>\n"
  },
  "elements-text.textConfig.insideStroke": {
    "desc": "<p><code class=\"codespan\">insideStroke</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is <code class=\"codespan\">&quot;inside&quot;</code>, its final <code class=\"codespan\">stroke</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>The rule of getting &quot;auto-calculated-stroke&quot;:</p>\n<ul>\n<li>If<ul>\n<li>(A) the <code class=\"codespan\">fill</code> is specified in style (either in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>or (B) needed to draw text background (either defined in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>&quot;auto-calculated-stroke&quot; will be null.</li>\n</ul>\n</li>\n<li>Otherwise<ul>\n<li>&quot;auto-calculated-stroke&quot; will be the same as <code class=\"codespan\">fill</code> of this element if possible, or null.</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-text.textConfig.outsideFill": {
    "desc": "<p><code class=\"codespan\">outsideFill</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is &quot;inside&quot;, its final <code class=\"codespan\">fill</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
  },
  "elements-text.textConfig.outsideStroke": {
    "desc": "<p><code class=\"codespan\">outsideStroke</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is not &quot;inside&quot;, its final <code class=\"codespan\">stroke</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>The rule of getting &quot;auto-calculated-stroke&quot;:</p>\n<ul>\n<li>If<ul>\n<li>(A) the <code class=\"codespan\">fill</code> is specified in style (either in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>or (B) needed to draw text background (either defined in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>&quot;auto-calculated-stroke&quot; will be null.</li>\n</ul>\n</li>\n<li>Otherwise<ul>\n<li>&quot;auto-calculated-stroke&quot; will be a near white color to distinguish &quot;front end&quot; label with messy background (like other text label, line or other graphic).</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-text.textConfig.inside": {
    "desc": "<p>Tell echarts that I can make sure this text is inside or not.</p>\n"
  },
  "elements-text.during": {
    "desc": "<p><code class=\"codespan\">during</code> callback enable users to set props to an element in each animation frame.</p>\n<pre><code class=\"lang-ts\">(duringAPI: CustomDuringAPI) =&gt; void\n\ninterface CustomDuringAPI {\n    // Set transform prop value.\n    // Transform prop see `TransformProp`.\n    setTransform(key: TransformProp, val: unknown): void;\n    // Get transform prop value of the current animation frame.\n    getTransform(key: TransformProp): unknown;\n    // Set shape prop value.\n    // Shape prop is like `{ type: &#39;rect&#39;, shape: { xxxProp: xxxValue } }`.\n    setShape(key: string, val: unknown): void;\n    // Get shape prop value of the current animation frame.\n    getShape(key: string): unknown;\n    // Set style prop value.\n    // Style prop is like `{ type: &#39;rect&#39;, style: { xxxProp: xxxValue } }`.\n    setStyle(key: string, val: unknown): void;\n    // Get style prop value of the current animation frame.\n    getStyle(key: string): unknown;\n    // Set extra prop value.\n    // Extra prop is like `{ type: &#39;rect&#39;, extra: { xxxProp: xxxValue } }`.\n    setExtra(key: string, val: unknown): void;\n    // Get extra prop value of the current animation frame.\n    getExtra(key: string): unknown;\n}\n\ntype TransformProp =\n    &#39;x&#39; | &#39;y&#39; | &#39;scaleX&#39; | &#39;scaleY&#39; | &#39;originX&#39; | &#39;originY&#39; | &#39;rotation&#39;;\n</code></pre>\n<p>In most cases users do not need this <code class=\"codespan\">during</code> callback. For example, if some props are specified in <a href=\"option.html#series-custom.renderItem.return_rect.transition\" target=\"_blank\">transition</a>, echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this <code class=\"codespan\">during</code> callback to customize them.</p>\n<p>For example, if users are using <a href=\"option.html#series-custom.renderItem.return_polygon\" target=\"_blank\">polygon</a> shape. The shape is described by <a href=\"option.html#series-custom.renderItem.return_polygon.shape.points\" target=\"_blank\">shape.points</a>, which is an points array like:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...]\n    },\n    // ...\n}\n</code></pre>\n<p>If users specify them into <a href=\"option.html#series-custom.renderItem.return_polygon.transition\" target=\"_blank\">transition</a> like:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...],\n    },\n    transition: &#39;shape&#39;\n    // ...\n}\n</code></pre>\n<p>Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the <code class=\"codespan\">during</code> callback like that:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: calculatePoints(initialDegree),\n        transition: &#39;points&#39;\n    },\n    extra: {\n        degree: nextDegree\n    },\n    // Make echarts interpolate `extra.degree` internally, based on which\n    // we calculate the `points` in each animation frame.\n    transition: &#39;extra&#39;,\n    during: function (duringAPI) {\n        var currentDegree = duringAPI.getExtra(&#39;degree&#39;);\n        duringAPI.setShape(calculatePoints(currentDegree));\n    }\n    // ...\n}\n</code></pre>\n<p>See this example <a href=\"https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a>.</p>\n"
  },
  "elements-text.cursor": {
    "desc": "\n\n<p>The mouse style when mouse hovers on an element, the same as <code class=\"codespan\">cursor</code> property in <code class=\"codespan\">CSS</code>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-text.draggable": {
    "desc": "<p>Can be dragged or not.</p>\n"
  },
  "elements-text.progressive": {
    "desc": "<p>Whether use progressive render to improve performance. Usually used when number of element is too large.</p>\n"
  },
  "elements-text.style.text": {
    "desc": "<p>Text content. <code class=\"codespan\">\\n</code> can be used as a line break.</p>\n"
  },
  "elements-text.style.x": {
    "desc": "<p>The x value of the left-top corner of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-text.style.y": {
    "desc": "<p>The y value of the left-top corner of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-text.style.font": {
    "desc": "<p>Font size, font type, font weight, font color, follow the form of <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/font\" target=\"_blank\">css font</a>.</p>\n<p>For example:</p>\n<pre><code>// size | family\nfont: &#39;2em &quot;STHeiti&quot;, sans-serif&#39;\n\n// style | weight | size | family\nfont: &#39;italic bolder 16px cursive&#39;\n\n// weight | size | family\nfont: &#39;bolder 2em &quot;Microsoft YaHei&quot;, sans-serif&#39;\n</code></pre>"
  },
  "elements-text.style.textAlign": {
    "desc": "<p>Text horizontal alignment. Optional values: <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>.</p>\n<p><code class=\"codespan\">&#39;left&#39;</code> means the left side of the text block is specified by the <a href=\"#graphic.elements-text.style.x\">style.x</a>, while <code class=\"codespan\">&#39;right&#39;</code> means the right side of the text block is specified by <a href=\"#graphic.elements-text.style.y\">style.y</a>.</p>\n"
  },
  "elements-text.style.textVerticalAlign": {
    "desc": "<p>Text vertical alignment. Optional values: <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>.</p>\n<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-text.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "elements-text.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "elements-text.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "elements-text.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "elements-text.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "elements-text.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "elements-text.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "elements-text.style.transition": {
    "desc": "<p>Can be a single property name or an array of property names.\nEnable transition animation when the specified properties changed.\nCan only specify properties that are under this <code class=\"codespan\">style</code>.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        ...\n        // This two props will perform transition animation.\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>We can also specify all of the properties like this:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        ...\n    },\n    // Indicate that all props in `style` will\n    // have transition animation.\n    transition: &#39;style&#39;,\n};\n</code></pre>\n"
  },
  "elements-text.focus": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>When it&#39;s highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> Do not fade out other data, it&#39;s by default.</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> Only focus (not fade out) the element of the currently highlighted data.</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> Focus on all elements of the series which the currently highlighted data belongs to.</li>\n</ul>\n"
  },
  "elements-text.blurScope": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>The range of fade out when <code class=\"codespan\">focus</code> is enabled. Support the following configurations</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code></li>\n<li><code class=\"codespan\">&#39;series&#39;</code></li>\n<li><code class=\"codespan\">&#39;global&#39;</code></li>\n</ul>\n"
  },
  "elements-rect": {
    "desc": "<p>Rectangle element.</p>\n"
  },
  "elements-rect.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-rect.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "elements-rect.$action": {
    "desc": "<p>Specify the operation should be performed to the element when calling <code class=\"codespan\">setOption</code>.\nDefault value is &#39;merge&#39;, other values can be &#39;replace&#39; or &#39;remove&#39;.</p>\n<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>: merge the given option to existing element (if any), otherwise create a new element.</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>: create a new element according to the given option and replace the existing element (if any).</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>: delete the existing element (if any).</li>\n</ul>\n"
  },
  "elements-rect.x": {
    "desc": "<p>x position of element. In pixels.</p>\n"
  },
  "elements-rect.y": {
    "desc": "<p>y position of element. In pixels.</p>\n"
  },
  "elements-rect.rotation": {
    "desc": "<p>Degree value of rotation.</p>\n"
  },
  "elements-rect.scaleX": {
    "desc": "<p>Scale on x.</p>\n"
  },
  "elements-rect.scaleY": {
    "desc": "<p>Scale on y.</p>\n"
  },
  "elements-rect.originX": {
    "desc": "<p>x value of element scale and rotation origin. In pixels</p>\n"
  },
  "elements-rect.originY": {
    "desc": "<p>y value of element scale and rotation origin. In pixels.</p>\n"
  },
  "elements-rect.transition": {
    "desc": "<p>You can specify that all properties have transition animations turned on with `&#39;all&#39;&#39;, or you can specify a single property or an array of properties.</p>\n<p>The properties can be:</p>\n<p>Transform related properties:<code class=\"codespan\">&#39;x&#39;</code>, <code class=\"codespan\">&#39;y&#39;</code>, <code class=\"codespan\">&#39;scaleX&#39;</code>, <code class=\"codespan\">&#39;scaleY&#39;</code>, <code class=\"codespan\">&#39;rotation&#39;</code>, <code class=\"codespan\">&#39;originX&#39;</code>, <code class=\"codespan\">&#39;originY&#39;</code>. For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    x: 100,\n    y: 200,\n    transition: [&#39;x&#39;, &#39;y&#39;]\n}\n</code></pre>\n<p>Shortcut to transition all of the properties in <a href=\"#graphic.elements-rect.shape\"><code class=\"codespan\">&#39;shape&#39;</code></a>, <a href=\"#graphic.elements-rect.style\">&#39;<code class=\"codespan\">style&#39;</code></a>, <a href=\"#graphic.elements-rect.extra\"><code class=\"codespan\">&#39;extra&#39;</code></a>. For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { // ... },\n    // Indicate that all props in `shape` will\n    // have transition animation.\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n<p>In the custom series. <code class=\"codespan\">&#39;x&#39;</code> and <code class=\"codespan\">&#39;y&#39;</code> are transitioned by default. If you want to disable the default transition, just set it as: <code class=\"codespan\">transition: []</code>.</p>\n<p>See this <a href=\"https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a> please.</p>\n"
  },
  "elements-rect.enterFrom": {
    "desc": "<p>Initial properties for enter animation.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    enterFrom: {\n        // Fade in\n        style: { opacity: 0 },\n        // Slide in from left\n        x: 0\n    }\n}\n</code></pre>\n"
  },
  "elements-rect.leaveTo": {
    "desc": "<p>End properties for leave animation.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    leaveTo: {\n        // Fade out\n        style: { opacity: 0 },\n        // Slide out to right\n        x: 200\n    }\n}\n</code></pre>\n"
  },
  "elements-rect.enterAnimation": {
    "desc": "<p>Configurations of enter animation.</p>\n"
  },
  "elements-rect.enterAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-rect.enterAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-rect.enterAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-rect.updateAnimation": {
    "desc": "<p>Configurations of update animation.</p>\n"
  },
  "elements-rect.updateAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-rect.updateAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-rect.updateAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-rect.leaveAnimation": {
    "desc": "<p>Configurations of leave animation.</p>\n"
  },
  "elements-rect.leaveAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-rect.leaveAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-rect.leaveAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-rect.keyframeAnimation": {
    "desc": "<p>Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">keyframeAnimation: [{\n    // Using scale for breath animation.\n    duration: 1000,\n    loop: true,\n    keyframes: [{\n        percent: 0.5,\n        easing: &#39;sinusoidalInOut&#39;,\n        scaleX: 0.1,\n        scaleY: 0.1\n    }, {\n        percent: 1,\n        easing: &#39;sinusoidalInOut&#39;,\n        scaleX: 1,\n        scaleY: 1\n    }]\n}, {\n    // Translate animation.\n    duration: 2000,\n    loop: true,\n    keyframes: [{\n        percent: 0,\n        x: 10\n    }, {\n        percent: 1,\n        x: 100\n    }]\n}]\n\n</code></pre>\n<p>If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.</p>\n"
  },
  "elements-rect.keyframeAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-rect.keyframeAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-rect.keyframeAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-rect.keyframeAnimation.loop": {
    "desc": "<p>If loop the keyframe animation.</p>\n"
  },
  "elements-rect.keyframeAnimation.keyframes": {
    "desc": "<p>The keyframes of the animation. Each item in the array is a keyframe in the following format.</p>\n<pre><code class=\"lang-ts\">interface Keyframe {\n    // Keyframe position. 0 is the first frame, 1 is the last frame\n    // The time of keyframe is percent * duration + delay\n    percent: number\n    // Easing function from the last keyframe to this keyframe. Optional\n    easing?: number\n\n    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.\n}\n</code></pre>\n"
  },
  "elements-rect.left": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-rect.left\">left</a> and <a href=\"#graphic.elements-rect.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-rect.left\">left</a> or <a href=\"#graphic.elements-rect.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-rect.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-rect.right": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-rect.left\">left</a> and <a href=\"#graphic.elements-rect.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-rect.left\">left</a> or <a href=\"#graphic.elements-rect.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-rect.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-rect.top": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-rect.top\">top</a> and <a href=\"#graphic.elements-rect.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-rect.top\">top</a> or <a href=\"#graphic.elements-rect.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-rect.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-rect.bottom": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-rect.top\">top</a> and <a href=\"#graphic.elements-rect.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-rect.top\">top</a> or <a href=\"#graphic.elements-rect.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-rect.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-rect.bounding": {
    "desc": "<p>Used to specify whether the entire transformed element (containing children if is group) is confined in its container.</p>\n<p>See sample:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/en/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"></iframe>\n\n\n<p>Optional values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>: (default)\n  Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>:\n  Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.</p>\n</li>\n</ul>\n"
  },
  "elements-rect.z": {
    "desc": "<p>z value of the elements, determine the overlap order.</p>\n"
  },
  "elements-rect.zlevel": {
    "desc": "<p>Determine which canvas layer this element should be in.</p>\n<p>Notice: Multiple canvas layer may affect performance.</p>\n"
  },
  "elements-rect.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-ts\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-rect.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "elements-rect.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "elements-rect.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "elements-rect.textContent": {
    "desc": "<p>Text block attached to an element and layout based on the element by <code class=\"codespan\">textConfig</code>.</p>\n<p>The props the the same as <a href=\"option.html#graphic.elements-text\" target=\"_blank\">text</a>.</p>\n"
  },
  "elements-rect.textConfig.position": {
    "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
  },
  "elements-rect.textConfig.rotation": {
    "desc": "<p>Rotation of <code class=\"codespan\">textContent</code>. In radian.</p>\n"
  },
  "elements-rect.textConfig.layoutRect": {
    "desc": "<p>Rect that <code class=\"codespan\">textContent</code> will be positioned.\nDefault to be the bounding box of host element.</p>\n<pre><code class=\"lang-ts\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
  },
  "elements-rect.textConfig.offset": {
    "desc": "<p>Offset of the <code class=\"codespan\">textContent</code>.</p>\n<p>The difference of <code class=\"codespan\">offset</code> and <code class=\"codespan\">position</code> is that <code class=\"codespan\">offset</code> will be applied in the rotation.</p>\n"
  },
  "elements-rect.textConfig.origin": {
    "desc": "<p><code class=\"codespan\">origin</code> is relative to the bounding box of the host element.\nCan be percent value. Relative to the bounding box.\nIf <code class=\"codespan\">&#39;center&#39;</code> specified, it will be center of the bounding box.</p>\n<p>Only available when position and rotation are both set.</p>\n<ul>\n<li>like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
  },
  "elements-rect.textConfig.distance": {
    "desc": "<p>Distance to the <code class=\"codespan\">layoutRect</code>。</p>\n"
  },
  "elements-rect.textConfig.local": {
    "desc": "<p>If <code class=\"codespan\">true</code>, it will apply host&#39;s transform.</p>\n"
  },
  "elements-rect.textConfig.insideFill": {
    "desc": "<p><code class=\"codespan\">insideFill</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is <code class=\"codespan\">&quot;inside&quot;</code>, its final <code class=\"codespan\">fill</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\nIn most cases, &quot;auto-calculated-fill&quot; is white.</p>\n"
  },
  "elements-rect.textConfig.insideStroke": {
    "desc": "<p><code class=\"codespan\">insideStroke</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is <code class=\"codespan\">&quot;inside&quot;</code>, its final <code class=\"codespan\">stroke</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>The rule of getting &quot;auto-calculated-stroke&quot;:</p>\n<ul>\n<li>If<ul>\n<li>(A) the <code class=\"codespan\">fill</code> is specified in style (either in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>or (B) needed to draw text background (either defined in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>&quot;auto-calculated-stroke&quot; will be null.</li>\n</ul>\n</li>\n<li>Otherwise<ul>\n<li>&quot;auto-calculated-stroke&quot; will be the same as <code class=\"codespan\">fill</code> of this element if possible, or null.</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-rect.textConfig.outsideFill": {
    "desc": "<p><code class=\"codespan\">outsideFill</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is &quot;inside&quot;, its final <code class=\"codespan\">fill</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
  },
  "elements-rect.textConfig.outsideStroke": {
    "desc": "<p><code class=\"codespan\">outsideStroke</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is not &quot;inside&quot;, its final <code class=\"codespan\">stroke</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>The rule of getting &quot;auto-calculated-stroke&quot;:</p>\n<ul>\n<li>If<ul>\n<li>(A) the <code class=\"codespan\">fill</code> is specified in style (either in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>or (B) needed to draw text background (either defined in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>&quot;auto-calculated-stroke&quot; will be null.</li>\n</ul>\n</li>\n<li>Otherwise<ul>\n<li>&quot;auto-calculated-stroke&quot; will be a near white color to distinguish &quot;front end&quot; label with messy background (like other text label, line or other graphic).</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-rect.textConfig.inside": {
    "desc": "<p>Tell echarts that I can make sure this text is inside or not.</p>\n"
  },
  "elements-rect.during": {
    "desc": "<p><code class=\"codespan\">during</code> callback enable users to set props to an element in each animation frame.</p>\n<pre><code class=\"lang-ts\">(duringAPI: CustomDuringAPI) =&gt; void\n\ninterface CustomDuringAPI {\n    // Set transform prop value.\n    // Transform prop see `TransformProp`.\n    setTransform(key: TransformProp, val: unknown): void;\n    // Get transform prop value of the current animation frame.\n    getTransform(key: TransformProp): unknown;\n    // Set shape prop value.\n    // Shape prop is like `{ type: &#39;rect&#39;, shape: { xxxProp: xxxValue } }`.\n    setShape(key: string, val: unknown): void;\n    // Get shape prop value of the current animation frame.\n    getShape(key: string): unknown;\n    // Set style prop value.\n    // Style prop is like `{ type: &#39;rect&#39;, style: { xxxProp: xxxValue } }`.\n    setStyle(key: string, val: unknown): void;\n    // Get style prop value of the current animation frame.\n    getStyle(key: string): unknown;\n    // Set extra prop value.\n    // Extra prop is like `{ type: &#39;rect&#39;, extra: { xxxProp: xxxValue } }`.\n    setExtra(key: string, val: unknown): void;\n    // Get extra prop value of the current animation frame.\n    getExtra(key: string): unknown;\n}\n\ntype TransformProp =\n    &#39;x&#39; | &#39;y&#39; | &#39;scaleX&#39; | &#39;scaleY&#39; | &#39;originX&#39; | &#39;originY&#39; | &#39;rotation&#39;;\n</code></pre>\n<p>In most cases users do not need this <code class=\"codespan\">during</code> callback. For example, if some props are specified in <a href=\"option.html#series-custom.renderItem.return_rect.transition\" target=\"_blank\">transition</a>, echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this <code class=\"codespan\">during</code> callback to customize them.</p>\n<p>For example, if users are using <a href=\"option.html#series-custom.renderItem.return_polygon\" target=\"_blank\">polygon</a> shape. The shape is described by <a href=\"option.html#series-custom.renderItem.return_polygon.shape.points\" target=\"_blank\">shape.points</a>, which is an points array like:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...]\n    },\n    // ...\n}\n</code></pre>\n<p>If users specify them into <a href=\"option.html#series-custom.renderItem.return_polygon.transition\" target=\"_blank\">transition</a> like:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...],\n    },\n    transition: &#39;shape&#39;\n    // ...\n}\n</code></pre>\n<p>Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the <code class=\"codespan\">during</code> callback like that:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: calculatePoints(initialDegree),\n        transition: &#39;points&#39;\n    },\n    extra: {\n        degree: nextDegree\n    },\n    // Make echarts interpolate `extra.degree` internally, based on which\n    // we calculate the `points` in each animation frame.\n    transition: &#39;extra&#39;,\n    during: function (duringAPI) {\n        var currentDegree = duringAPI.getExtra(&#39;degree&#39;);\n        duringAPI.setShape(calculatePoints(currentDegree));\n    }\n    // ...\n}\n</code></pre>\n<p>See this example <a href=\"https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a>.</p>\n"
  },
  "elements-rect.cursor": {
    "desc": "\n\n<p>The mouse style when mouse hovers on an element, the same as <code class=\"codespan\">cursor</code> property in <code class=\"codespan\">CSS</code>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-rect.draggable": {
    "desc": "<p>Can be dragged or not.</p>\n"
  },
  "elements-rect.progressive": {
    "desc": "<p>Whether use progressive render to improve performance. Usually used when number of element is too large.</p>\n"
  },
  "elements-rect.shape.x": {
    "desc": "<p>The x value of the left-top corner of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-rect.shape.y": {
    "desc": "<p>The y value of the left-top corner of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-rect.shape.width": {
    "desc": "<p>The width of the shape of the element.</p>\n"
  },
  "elements-rect.shape.height": {
    "desc": "<p>The height of the shape of the element.</p>\n"
  },
  "elements-rect.shape.r": {
    "desc": "<p>Specify border radius of the rectangular here. Generally, <code class=\"codespan\">r</code> should be <code class=\"codespan\">[topLeftRadius, topRightRadius, BottomRightRadius, bottomLeftRadius]</code>, where each item is a number.</p>\n<p>Abbreviation is enabled, for example:</p>\n<ul>\n<li><code class=\"codespan\">r</code>: <code class=\"codespan\">1</code>         means <code class=\"codespan\">[1, 1, 1, 1]</code></li>\n<li><code class=\"codespan\">r</code>: <code class=\"codespan\">[1]</code>       means <code class=\"codespan\">[1, 1, 1, 1]</code></li>\n<li><code class=\"codespan\">r</code>: <code class=\"codespan\">[1, 2]</code>    means <code class=\"codespan\">[1, 2, 1, 2]</code></li>\n<li><code class=\"codespan\">r</code>: <code class=\"codespan\">[1, 2, 3]</code> means <code class=\"codespan\">[1, 2, 3, 2]</code></li>\n</ul>\n"
  },
  "elements-rect.shape.transition": {
    "desc": "<p>Can be a single property name or an array of property names.\nEnable transition animation when the specified properties changed.\nCan only specify properties that are under this <code class=\"codespan\">shape</code>.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        ...\n        // This two props will perform transition animation.\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>We can also specify all of the properties like this:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        ...\n    },\n    // Indicate that all props in `shape` will\n    // have transition animation.\n    transition: &#39;shape&#39;,\n};\n</code></pre>\n"
  },
  "elements-rect.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-rect.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "elements-rect.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "elements-rect.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "elements-rect.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "elements-rect.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "elements-rect.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "elements-rect.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "elements-rect.style.transition": {
    "desc": "<p>Can be a single property name or an array of property names.\nEnable transition animation when the specified properties changed.\nCan only specify properties that are under this <code class=\"codespan\">style</code>.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        ...\n        // This two props will perform transition animation.\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>We can also specify all of the properties like this:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        ...\n    },\n    // Indicate that all props in `style` will\n    // have transition animation.\n    transition: &#39;style&#39;,\n};\n</code></pre>\n"
  },
  "elements-rect.focus": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>When it&#39;s highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> Do not fade out other data, it&#39;s by default.</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> Only focus (not fade out) the element of the currently highlighted data.</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> Focus on all elements of the series which the currently highlighted data belongs to.</li>\n</ul>\n"
  },
  "elements-rect.blurScope": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>The range of fade out when <code class=\"codespan\">focus</code> is enabled. Support the following configurations</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code></li>\n<li><code class=\"codespan\">&#39;series&#39;</code></li>\n<li><code class=\"codespan\">&#39;global&#39;</code></li>\n</ul>\n"
  },
  "elements-circle": {
    "desc": "<p>Circle element.</p>\n"
  },
  "elements-circle.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-circle.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "elements-circle.$action": {
    "desc": "<p>Specify the operation should be performed to the element when calling <code class=\"codespan\">setOption</code>.\nDefault value is &#39;merge&#39;, other values can be &#39;replace&#39; or &#39;remove&#39;.</p>\n<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>: merge the given option to existing element (if any), otherwise create a new element.</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>: create a new element according to the given option and replace the existing element (if any).</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>: delete the existing element (if any).</li>\n</ul>\n"
  },
  "elements-circle.x": {
    "desc": "<p>x position of element. In pixels.</p>\n"
  },
  "elements-circle.y": {
    "desc": "<p>y position of element. In pixels.</p>\n"
  },
  "elements-circle.rotation": {
    "desc": "<p>Degree value of rotation.</p>\n"
  },
  "elements-circle.scaleX": {
    "desc": "<p>Scale on x.</p>\n"
  },
  "elements-circle.scaleY": {
    "desc": "<p>Scale on y.</p>\n"
  },
  "elements-circle.originX": {
    "desc": "<p>x value of element scale and rotation origin. In pixels</p>\n"
  },
  "elements-circle.originY": {
    "desc": "<p>y value of element scale and rotation origin. In pixels.</p>\n"
  },
  "elements-circle.transition": {
    "desc": "<p>You can specify that all properties have transition animations turned on with `&#39;all&#39;&#39;, or you can specify a single property or an array of properties.</p>\n<p>The properties can be:</p>\n<p>Transform related properties:<code class=\"codespan\">&#39;x&#39;</code>, <code class=\"codespan\">&#39;y&#39;</code>, <code class=\"codespan\">&#39;scaleX&#39;</code>, <code class=\"codespan\">&#39;scaleY&#39;</code>, <code class=\"codespan\">&#39;rotation&#39;</code>, <code class=\"codespan\">&#39;originX&#39;</code>, <code class=\"codespan\">&#39;originY&#39;</code>. For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    x: 100,\n    y: 200,\n    transition: [&#39;x&#39;, &#39;y&#39;]\n}\n</code></pre>\n<p>Shortcut to transition all of the properties in <a href=\"#graphic.elements-circle.shape\"><code class=\"codespan\">&#39;shape&#39;</code></a>, <a href=\"#graphic.elements-circle.style\">&#39;<code class=\"codespan\">style&#39;</code></a>, <a href=\"#graphic.elements-circle.extra\"><code class=\"codespan\">&#39;extra&#39;</code></a>. For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { // ... },\n    // Indicate that all props in `shape` will\n    // have transition animation.\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n<p>In the custom series. <code class=\"codespan\">&#39;x&#39;</code> and <code class=\"codespan\">&#39;y&#39;</code> are transitioned by default. If you want to disable the default transition, just set it as: <code class=\"codespan\">transition: []</code>.</p>\n<p>See this <a href=\"https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a> please.</p>\n"
  },
  "elements-circle.enterFrom": {
    "desc": "<p>Initial properties for enter animation.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    enterFrom: {\n        // Fade in\n        style: { opacity: 0 },\n        // Slide in from left\n        x: 0\n    }\n}\n</code></pre>\n"
  },
  "elements-circle.leaveTo": {
    "desc": "<p>End properties for leave animation.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    leaveTo: {\n        // Fade out\n        style: { opacity: 0 },\n        // Slide out to right\n        x: 200\n    }\n}\n</code></pre>\n"
  },
  "elements-circle.enterAnimation": {
    "desc": "<p>Configurations of enter animation.</p>\n"
  },
  "elements-circle.enterAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-circle.enterAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-circle.enterAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-circle.updateAnimation": {
    "desc": "<p>Configurations of update animation.</p>\n"
  },
  "elements-circle.updateAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-circle.updateAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-circle.updateAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-circle.leaveAnimation": {
    "desc": "<p>Configurations of leave animation.</p>\n"
  },
  "elements-circle.leaveAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-circle.leaveAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-circle.leaveAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-circle.keyframeAnimation": {
    "desc": "<p>Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">keyframeAnimation: [{\n    // Using scale for breath animation.\n    duration: 1000,\n    loop: true,\n    keyframes: [{\n        percent: 0.5,\n        easing: &#39;sinusoidalInOut&#39;,\n        scaleX: 0.1,\n        scaleY: 0.1\n    }, {\n        percent: 1,\n        easing: &#39;sinusoidalInOut&#39;,\n        scaleX: 1,\n        scaleY: 1\n    }]\n}, {\n    // Translate animation.\n    duration: 2000,\n    loop: true,\n    keyframes: [{\n        percent: 0,\n        x: 10\n    }, {\n        percent: 1,\n        x: 100\n    }]\n}]\n\n</code></pre>\n<p>If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.</p>\n"
  },
  "elements-circle.keyframeAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-circle.keyframeAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-circle.keyframeAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-circle.keyframeAnimation.loop": {
    "desc": "<p>If loop the keyframe animation.</p>\n"
  },
  "elements-circle.keyframeAnimation.keyframes": {
    "desc": "<p>The keyframes of the animation. Each item in the array is a keyframe in the following format.</p>\n<pre><code class=\"lang-ts\">interface Keyframe {\n    // Keyframe position. 0 is the first frame, 1 is the last frame\n    // The time of keyframe is percent * duration + delay\n    percent: number\n    // Easing function from the last keyframe to this keyframe. Optional\n    easing?: number\n\n    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.\n}\n</code></pre>\n"
  },
  "elements-circle.left": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-circle.left\">left</a> and <a href=\"#graphic.elements-circle.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-circle.left\">left</a> or <a href=\"#graphic.elements-circle.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-circle.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-circle.right": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-circle.left\">left</a> and <a href=\"#graphic.elements-circle.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-circle.left\">left</a> or <a href=\"#graphic.elements-circle.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-circle.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-circle.top": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-circle.top\">top</a> and <a href=\"#graphic.elements-circle.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-circle.top\">top</a> or <a href=\"#graphic.elements-circle.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-circle.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-circle.bottom": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-circle.top\">top</a> and <a href=\"#graphic.elements-circle.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-circle.top\">top</a> or <a href=\"#graphic.elements-circle.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-circle.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-circle.bounding": {
    "desc": "<p>Used to specify whether the entire transformed element (containing children if is group) is confined in its container.</p>\n<p>See sample:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/en/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"></iframe>\n\n\n<p>Optional values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>: (default)\n  Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>:\n  Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.</p>\n</li>\n</ul>\n"
  },
  "elements-circle.z": {
    "desc": "<p>z value of the elements, determine the overlap order.</p>\n"
  },
  "elements-circle.zlevel": {
    "desc": "<p>Determine which canvas layer this element should be in.</p>\n<p>Notice: Multiple canvas layer may affect performance.</p>\n"
  },
  "elements-circle.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-ts\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-circle.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "elements-circle.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "elements-circle.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "elements-circle.textContent": {
    "desc": "<p>Text block attached to an element and layout based on the element by <code class=\"codespan\">textConfig</code>.</p>\n<p>The props the the same as <a href=\"option.html#graphic.elements-text\" target=\"_blank\">text</a>.</p>\n"
  },
  "elements-circle.textConfig.position": {
    "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
  },
  "elements-circle.textConfig.rotation": {
    "desc": "<p>Rotation of <code class=\"codespan\">textContent</code>. In radian.</p>\n"
  },
  "elements-circle.textConfig.layoutRect": {
    "desc": "<p>Rect that <code class=\"codespan\">textContent</code> will be positioned.\nDefault to be the bounding box of host element.</p>\n<pre><code class=\"lang-ts\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
  },
  "elements-circle.textConfig.offset": {
    "desc": "<p>Offset of the <code class=\"codespan\">textContent</code>.</p>\n<p>The difference of <code class=\"codespan\">offset</code> and <code class=\"codespan\">position</code> is that <code class=\"codespan\">offset</code> will be applied in the rotation.</p>\n"
  },
  "elements-circle.textConfig.origin": {
    "desc": "<p><code class=\"codespan\">origin</code> is relative to the bounding box of the host element.\nCan be percent value. Relative to the bounding box.\nIf <code class=\"codespan\">&#39;center&#39;</code> specified, it will be center of the bounding box.</p>\n<p>Only available when position and rotation are both set.</p>\n<ul>\n<li>like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
  },
  "elements-circle.textConfig.distance": {
    "desc": "<p>Distance to the <code class=\"codespan\">layoutRect</code>。</p>\n"
  },
  "elements-circle.textConfig.local": {
    "desc": "<p>If <code class=\"codespan\">true</code>, it will apply host&#39;s transform.</p>\n"
  },
  "elements-circle.textConfig.insideFill": {
    "desc": "<p><code class=\"codespan\">insideFill</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is <code class=\"codespan\">&quot;inside&quot;</code>, its final <code class=\"codespan\">fill</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\nIn most cases, &quot;auto-calculated-fill&quot; is white.</p>\n"
  },
  "elements-circle.textConfig.insideStroke": {
    "desc": "<p><code class=\"codespan\">insideStroke</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is <code class=\"codespan\">&quot;inside&quot;</code>, its final <code class=\"codespan\">stroke</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>The rule of getting &quot;auto-calculated-stroke&quot;:</p>\n<ul>\n<li>If<ul>\n<li>(A) the <code class=\"codespan\">fill</code> is specified in style (either in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>or (B) needed to draw text background (either defined in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>&quot;auto-calculated-stroke&quot; will be null.</li>\n</ul>\n</li>\n<li>Otherwise<ul>\n<li>&quot;auto-calculated-stroke&quot; will be the same as <code class=\"codespan\">fill</code> of this element if possible, or null.</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-circle.textConfig.outsideFill": {
    "desc": "<p><code class=\"codespan\">outsideFill</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is &quot;inside&quot;, its final <code class=\"codespan\">fill</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
  },
  "elements-circle.textConfig.outsideStroke": {
    "desc": "<p><code class=\"codespan\">outsideStroke</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is not &quot;inside&quot;, its final <code class=\"codespan\">stroke</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>The rule of getting &quot;auto-calculated-stroke&quot;:</p>\n<ul>\n<li>If<ul>\n<li>(A) the <code class=\"codespan\">fill</code> is specified in style (either in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>or (B) needed to draw text background (either defined in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>&quot;auto-calculated-stroke&quot; will be null.</li>\n</ul>\n</li>\n<li>Otherwise<ul>\n<li>&quot;auto-calculated-stroke&quot; will be a near white color to distinguish &quot;front end&quot; label with messy background (like other text label, line or other graphic).</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-circle.textConfig.inside": {
    "desc": "<p>Tell echarts that I can make sure this text is inside or not.</p>\n"
  },
  "elements-circle.during": {
    "desc": "<p><code class=\"codespan\">during</code> callback enable users to set props to an element in each animation frame.</p>\n<pre><code class=\"lang-ts\">(duringAPI: CustomDuringAPI) =&gt; void\n\ninterface CustomDuringAPI {\n    // Set transform prop value.\n    // Transform prop see `TransformProp`.\n    setTransform(key: TransformProp, val: unknown): void;\n    // Get transform prop value of the current animation frame.\n    getTransform(key: TransformProp): unknown;\n    // Set shape prop value.\n    // Shape prop is like `{ type: &#39;rect&#39;, shape: { xxxProp: xxxValue } }`.\n    setShape(key: string, val: unknown): void;\n    // Get shape prop value of the current animation frame.\n    getShape(key: string): unknown;\n    // Set style prop value.\n    // Style prop is like `{ type: &#39;rect&#39;, style: { xxxProp: xxxValue } }`.\n    setStyle(key: string, val: unknown): void;\n    // Get style prop value of the current animation frame.\n    getStyle(key: string): unknown;\n    // Set extra prop value.\n    // Extra prop is like `{ type: &#39;rect&#39;, extra: { xxxProp: xxxValue } }`.\n    setExtra(key: string, val: unknown): void;\n    // Get extra prop value of the current animation frame.\n    getExtra(key: string): unknown;\n}\n\ntype TransformProp =\n    &#39;x&#39; | &#39;y&#39; | &#39;scaleX&#39; | &#39;scaleY&#39; | &#39;originX&#39; | &#39;originY&#39; | &#39;rotation&#39;;\n</code></pre>\n<p>In most cases users do not need this <code class=\"codespan\">during</code> callback. For example, if some props are specified in <a href=\"option.html#series-custom.renderItem.return_rect.transition\" target=\"_blank\">transition</a>, echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this <code class=\"codespan\">during</code> callback to customize them.</p>\n<p>For example, if users are using <a href=\"option.html#series-custom.renderItem.return_polygon\" target=\"_blank\">polygon</a> shape. The shape is described by <a href=\"option.html#series-custom.renderItem.return_polygon.shape.points\" target=\"_blank\">shape.points</a>, which is an points array like:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...]\n    },\n    // ...\n}\n</code></pre>\n<p>If users specify them into <a href=\"option.html#series-custom.renderItem.return_polygon.transition\" target=\"_blank\">transition</a> like:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...],\n    },\n    transition: &#39;shape&#39;\n    // ...\n}\n</code></pre>\n<p>Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the <code class=\"codespan\">during</code> callback like that:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: calculatePoints(initialDegree),\n        transition: &#39;points&#39;\n    },\n    extra: {\n        degree: nextDegree\n    },\n    // Make echarts interpolate `extra.degree` internally, based on which\n    // we calculate the `points` in each animation frame.\n    transition: &#39;extra&#39;,\n    during: function (duringAPI) {\n        var currentDegree = duringAPI.getExtra(&#39;degree&#39;);\n        duringAPI.setShape(calculatePoints(currentDegree));\n    }\n    // ...\n}\n</code></pre>\n<p>See this example <a href=\"https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a>.</p>\n"
  },
  "elements-circle.cursor": {
    "desc": "\n\n<p>The mouse style when mouse hovers on an element, the same as <code class=\"codespan\">cursor</code> property in <code class=\"codespan\">CSS</code>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-circle.draggable": {
    "desc": "<p>Can be dragged or not.</p>\n"
  },
  "elements-circle.progressive": {
    "desc": "<p>Whether use progressive render to improve performance. Usually used when number of element is too large.</p>\n"
  },
  "elements-circle.shape.cx": {
    "desc": "<p>The x value of the center of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-circle.shape.cy": {
    "desc": "<p>The y value of the center of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-circle.shape.r": {
    "desc": "<p>Outside radius.</p>\n"
  },
  "elements-circle.shape.transition": {
    "desc": "<p>Can be a single property name or an array of property names.\nEnable transition animation when the specified properties changed.\nCan only specify properties that are under this <code class=\"codespan\">shape</code>.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        ...\n        // This two props will perform transition animation.\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>We can also specify all of the properties like this:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        ...\n    },\n    // Indicate that all props in `shape` will\n    // have transition animation.\n    transition: &#39;shape&#39;,\n};\n</code></pre>\n"
  },
  "elements-circle.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-circle.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "elements-circle.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "elements-circle.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "elements-circle.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "elements-circle.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "elements-circle.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "elements-circle.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "elements-circle.style.transition": {
    "desc": "<p>Can be a single property name or an array of property names.\nEnable transition animation when the specified properties changed.\nCan only specify properties that are under this <code class=\"codespan\">style</code>.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        ...\n        // This two props will perform transition animation.\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>We can also specify all of the properties like this:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        ...\n    },\n    // Indicate that all props in `style` will\n    // have transition animation.\n    transition: &#39;style&#39;,\n};\n</code></pre>\n"
  },
  "elements-circle.focus": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>When it&#39;s highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> Do not fade out other data, it&#39;s by default.</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> Only focus (not fade out) the element of the currently highlighted data.</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> Focus on all elements of the series which the currently highlighted data belongs to.</li>\n</ul>\n"
  },
  "elements-circle.blurScope": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>The range of fade out when <code class=\"codespan\">focus</code> is enabled. Support the following configurations</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code></li>\n<li><code class=\"codespan\">&#39;series&#39;</code></li>\n<li><code class=\"codespan\">&#39;global&#39;</code></li>\n</ul>\n"
  },
  "elements-ring": {
    "desc": "<p>Ring element.</p>\n"
  },
  "elements-ring.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-ring.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "elements-ring.$action": {
    "desc": "<p>Specify the operation should be performed to the element when calling <code class=\"codespan\">setOption</code>.\nDefault value is &#39;merge&#39;, other values can be &#39;replace&#39; or &#39;remove&#39;.</p>\n<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>: merge the given option to existing element (if any), otherwise create a new element.</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>: create a new element according to the given option and replace the existing element (if any).</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>: delete the existing element (if any).</li>\n</ul>\n"
  },
  "elements-ring.x": {
    "desc": "<p>x position of element. In pixels.</p>\n"
  },
  "elements-ring.y": {
    "desc": "<p>y position of element. In pixels.</p>\n"
  },
  "elements-ring.rotation": {
    "desc": "<p>Degree value of rotation.</p>\n"
  },
  "elements-ring.scaleX": {
    "desc": "<p>Scale on x.</p>\n"
  },
  "elements-ring.scaleY": {
    "desc": "<p>Scale on y.</p>\n"
  },
  "elements-ring.originX": {
    "desc": "<p>x value of element scale and rotation origin. In pixels</p>\n"
  },
  "elements-ring.originY": {
    "desc": "<p>y value of element scale and rotation origin. In pixels.</p>\n"
  },
  "elements-ring.transition": {
    "desc": "<p>You can specify that all properties have transition animations turned on with `&#39;all&#39;&#39;, or you can specify a single property or an array of properties.</p>\n<p>The properties can be:</p>\n<p>Transform related properties:<code class=\"codespan\">&#39;x&#39;</code>, <code class=\"codespan\">&#39;y&#39;</code>, <code class=\"codespan\">&#39;scaleX&#39;</code>, <code class=\"codespan\">&#39;scaleY&#39;</code>, <code class=\"codespan\">&#39;rotation&#39;</code>, <code class=\"codespan\">&#39;originX&#39;</code>, <code class=\"codespan\">&#39;originY&#39;</code>. For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    x: 100,\n    y: 200,\n    transition: [&#39;x&#39;, &#39;y&#39;]\n}\n</code></pre>\n<p>Shortcut to transition all of the properties in <a href=\"#graphic.elements-ring.shape\"><code class=\"codespan\">&#39;shape&#39;</code></a>, <a href=\"#graphic.elements-ring.style\">&#39;<code class=\"codespan\">style&#39;</code></a>, <a href=\"#graphic.elements-ring.extra\"><code class=\"codespan\">&#39;extra&#39;</code></a>. For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { // ... },\n    // Indicate that all props in `shape` will\n    // have transition animation.\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n<p>In the custom series. <code class=\"codespan\">&#39;x&#39;</code> and <code class=\"codespan\">&#39;y&#39;</code> are transitioned by default. If you want to disable the default transition, just set it as: <code class=\"codespan\">transition: []</code>.</p>\n<p>See this <a href=\"https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a> please.</p>\n"
  },
  "elements-ring.enterFrom": {
    "desc": "<p>Initial properties for enter animation.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    enterFrom: {\n        // Fade in\n        style: { opacity: 0 },\n        // Slide in from left\n        x: 0\n    }\n}\n</code></pre>\n"
  },
  "elements-ring.leaveTo": {
    "desc": "<p>End properties for leave animation.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    leaveTo: {\n        // Fade out\n        style: { opacity: 0 },\n        // Slide out to right\n        x: 200\n    }\n}\n</code></pre>\n"
  },
  "elements-ring.enterAnimation": {
    "desc": "<p>Configurations of enter animation.</p>\n"
  },
  "elements-ring.enterAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-ring.enterAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-ring.enterAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-ring.updateAnimation": {
    "desc": "<p>Configurations of update animation.</p>\n"
  },
  "elements-ring.updateAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-ring.updateAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-ring.updateAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-ring.leaveAnimation": {
    "desc": "<p>Configurations of leave animation.</p>\n"
  },
  "elements-ring.leaveAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-ring.leaveAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-ring.leaveAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-ring.keyframeAnimation": {
    "desc": "<p>Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">keyframeAnimation: [{\n    // Using scale for breath animation.\n    duration: 1000,\n    loop: true,\n    keyframes: [{\n        percent: 0.5,\n        easing: &#39;sinusoidalInOut&#39;,\n        scaleX: 0.1,\n        scaleY: 0.1\n    }, {\n        percent: 1,\n        easing: &#39;sinusoidalInOut&#39;,\n        scaleX: 1,\n        scaleY: 1\n    }]\n}, {\n    // Translate animation.\n    duration: 2000,\n    loop: true,\n    keyframes: [{\n        percent: 0,\n        x: 10\n    }, {\n        percent: 1,\n        x: 100\n    }]\n}]\n\n</code></pre>\n<p>If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.</p>\n"
  },
  "elements-ring.keyframeAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-ring.keyframeAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-ring.keyframeAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-ring.keyframeAnimation.loop": {
    "desc": "<p>If loop the keyframe animation.</p>\n"
  },
  "elements-ring.keyframeAnimation.keyframes": {
    "desc": "<p>The keyframes of the animation. Each item in the array is a keyframe in the following format.</p>\n<pre><code class=\"lang-ts\">interface Keyframe {\n    // Keyframe position. 0 is the first frame, 1 is the last frame\n    // The time of keyframe is percent * duration + delay\n    percent: number\n    // Easing function from the last keyframe to this keyframe. Optional\n    easing?: number\n\n    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.\n}\n</code></pre>\n"
  },
  "elements-ring.left": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-ring.left\">left</a> and <a href=\"#graphic.elements-ring.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-ring.left\">left</a> or <a href=\"#graphic.elements-ring.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-ring.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-ring.right": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-ring.left\">left</a> and <a href=\"#graphic.elements-ring.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-ring.left\">left</a> or <a href=\"#graphic.elements-ring.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-ring.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-ring.top": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-ring.top\">top</a> and <a href=\"#graphic.elements-ring.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-ring.top\">top</a> or <a href=\"#graphic.elements-ring.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-ring.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-ring.bottom": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-ring.top\">top</a> and <a href=\"#graphic.elements-ring.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-ring.top\">top</a> or <a href=\"#graphic.elements-ring.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-ring.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-ring.bounding": {
    "desc": "<p>Used to specify whether the entire transformed element (containing children if is group) is confined in its container.</p>\n<p>See sample:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/en/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"></iframe>\n\n\n<p>Optional values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>: (default)\n  Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>:\n  Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.</p>\n</li>\n</ul>\n"
  },
  "elements-ring.z": {
    "desc": "<p>z value of the elements, determine the overlap order.</p>\n"
  },
  "elements-ring.zlevel": {
    "desc": "<p>Determine which canvas layer this element should be in.</p>\n<p>Notice: Multiple canvas layer may affect performance.</p>\n"
  },
  "elements-ring.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-ts\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-ring.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "elements-ring.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "elements-ring.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "elements-ring.textContent": {
    "desc": "<p>Text block attached to an element and layout based on the element by <code class=\"codespan\">textConfig</code>.</p>\n<p>The props the the same as <a href=\"option.html#graphic.elements-text\" target=\"_blank\">text</a>.</p>\n"
  },
  "elements-ring.textConfig.position": {
    "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
  },
  "elements-ring.textConfig.rotation": {
    "desc": "<p>Rotation of <code class=\"codespan\">textContent</code>. In radian.</p>\n"
  },
  "elements-ring.textConfig.layoutRect": {
    "desc": "<p>Rect that <code class=\"codespan\">textContent</code> will be positioned.\nDefault to be the bounding box of host element.</p>\n<pre><code class=\"lang-ts\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
  },
  "elements-ring.textConfig.offset": {
    "desc": "<p>Offset of the <code class=\"codespan\">textContent</code>.</p>\n<p>The difference of <code class=\"codespan\">offset</code> and <code class=\"codespan\">position</code> is that <code class=\"codespan\">offset</code> will be applied in the rotation.</p>\n"
  },
  "elements-ring.textConfig.origin": {
    "desc": "<p><code class=\"codespan\">origin</code> is relative to the bounding box of the host element.\nCan be percent value. Relative to the bounding box.\nIf <code class=\"codespan\">&#39;center&#39;</code> specified, it will be center of the bounding box.</p>\n<p>Only available when position and rotation are both set.</p>\n<ul>\n<li>like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
  },
  "elements-ring.textConfig.distance": {
    "desc": "<p>Distance to the <code class=\"codespan\">layoutRect</code>。</p>\n"
  },
  "elements-ring.textConfig.local": {
    "desc": "<p>If <code class=\"codespan\">true</code>, it will apply host&#39;s transform.</p>\n"
  },
  "elements-ring.textConfig.insideFill": {
    "desc": "<p><code class=\"codespan\">insideFill</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is <code class=\"codespan\">&quot;inside&quot;</code>, its final <code class=\"codespan\">fill</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\nIn most cases, &quot;auto-calculated-fill&quot; is white.</p>\n"
  },
  "elements-ring.textConfig.insideStroke": {
    "desc": "<p><code class=\"codespan\">insideStroke</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is <code class=\"codespan\">&quot;inside&quot;</code>, its final <code class=\"codespan\">stroke</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>The rule of getting &quot;auto-calculated-stroke&quot;:</p>\n<ul>\n<li>If<ul>\n<li>(A) the <code class=\"codespan\">fill</code> is specified in style (either in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>or (B) needed to draw text background (either defined in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>&quot;auto-calculated-stroke&quot; will be null.</li>\n</ul>\n</li>\n<li>Otherwise<ul>\n<li>&quot;auto-calculated-stroke&quot; will be the same as <code class=\"codespan\">fill</code> of this element if possible, or null.</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-ring.textConfig.outsideFill": {
    "desc": "<p><code class=\"codespan\">outsideFill</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is &quot;inside&quot;, its final <code class=\"codespan\">fill</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
  },
  "elements-ring.textConfig.outsideStroke": {
    "desc": "<p><code class=\"codespan\">outsideStroke</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is not &quot;inside&quot;, its final <code class=\"codespan\">stroke</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>The rule of getting &quot;auto-calculated-stroke&quot;:</p>\n<ul>\n<li>If<ul>\n<li>(A) the <code class=\"codespan\">fill</code> is specified in style (either in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>or (B) needed to draw text background (either defined in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>&quot;auto-calculated-stroke&quot; will be null.</li>\n</ul>\n</li>\n<li>Otherwise<ul>\n<li>&quot;auto-calculated-stroke&quot; will be a near white color to distinguish &quot;front end&quot; label with messy background (like other text label, line or other graphic).</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-ring.textConfig.inside": {
    "desc": "<p>Tell echarts that I can make sure this text is inside or not.</p>\n"
  },
  "elements-ring.during": {
    "desc": "<p><code class=\"codespan\">during</code> callback enable users to set props to an element in each animation frame.</p>\n<pre><code class=\"lang-ts\">(duringAPI: CustomDuringAPI) =&gt; void\n\ninterface CustomDuringAPI {\n    // Set transform prop value.\n    // Transform prop see `TransformProp`.\n    setTransform(key: TransformProp, val: unknown): void;\n    // Get transform prop value of the current animation frame.\n    getTransform(key: TransformProp): unknown;\n    // Set shape prop value.\n    // Shape prop is like `{ type: &#39;rect&#39;, shape: { xxxProp: xxxValue } }`.\n    setShape(key: string, val: unknown): void;\n    // Get shape prop value of the current animation frame.\n    getShape(key: string): unknown;\n    // Set style prop value.\n    // Style prop is like `{ type: &#39;rect&#39;, style: { xxxProp: xxxValue } }`.\n    setStyle(key: string, val: unknown): void;\n    // Get style prop value of the current animation frame.\n    getStyle(key: string): unknown;\n    // Set extra prop value.\n    // Extra prop is like `{ type: &#39;rect&#39;, extra: { xxxProp: xxxValue } }`.\n    setExtra(key: string, val: unknown): void;\n    // Get extra prop value of the current animation frame.\n    getExtra(key: string): unknown;\n}\n\ntype TransformProp =\n    &#39;x&#39; | &#39;y&#39; | &#39;scaleX&#39; | &#39;scaleY&#39; | &#39;originX&#39; | &#39;originY&#39; | &#39;rotation&#39;;\n</code></pre>\n<p>In most cases users do not need this <code class=\"codespan\">during</code> callback. For example, if some props are specified in <a href=\"option.html#series-custom.renderItem.return_rect.transition\" target=\"_blank\">transition</a>, echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this <code class=\"codespan\">during</code> callback to customize them.</p>\n<p>For example, if users are using <a href=\"option.html#series-custom.renderItem.return_polygon\" target=\"_blank\">polygon</a> shape. The shape is described by <a href=\"option.html#series-custom.renderItem.return_polygon.shape.points\" target=\"_blank\">shape.points</a>, which is an points array like:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...]\n    },\n    // ...\n}\n</code></pre>\n<p>If users specify them into <a href=\"option.html#series-custom.renderItem.return_polygon.transition\" target=\"_blank\">transition</a> like:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...],\n    },\n    transition: &#39;shape&#39;\n    // ...\n}\n</code></pre>\n<p>Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the <code class=\"codespan\">during</code> callback like that:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: calculatePoints(initialDegree),\n        transition: &#39;points&#39;\n    },\n    extra: {\n        degree: nextDegree\n    },\n    // Make echarts interpolate `extra.degree` internally, based on which\n    // we calculate the `points` in each animation frame.\n    transition: &#39;extra&#39;,\n    during: function (duringAPI) {\n        var currentDegree = duringAPI.getExtra(&#39;degree&#39;);\n        duringAPI.setShape(calculatePoints(currentDegree));\n    }\n    // ...\n}\n</code></pre>\n<p>See this example <a href=\"https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a>.</p>\n"
  },
  "elements-ring.cursor": {
    "desc": "\n\n<p>The mouse style when mouse hovers on an element, the same as <code class=\"codespan\">cursor</code> property in <code class=\"codespan\">CSS</code>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-ring.draggable": {
    "desc": "<p>Can be dragged or not.</p>\n"
  },
  "elements-ring.progressive": {
    "desc": "<p>Whether use progressive render to improve performance. Usually used when number of element is too large.</p>\n"
  },
  "elements-ring.shape.cx": {
    "desc": "<p>The x value of the center of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-ring.shape.cy": {
    "desc": "<p>The y value of the center of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-ring.shape.r": {
    "desc": "<p>Outside radius.</p>\n"
  },
  "elements-ring.shape.r0": {
    "desc": "<p>Inside radius.</p>\n"
  },
  "elements-ring.shape.transition": {
    "desc": "<p>Can be a single property name or an array of property names.\nEnable transition animation when the specified properties changed.\nCan only specify properties that are under this <code class=\"codespan\">shape</code>.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        ...\n        // This two props will perform transition animation.\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>We can also specify all of the properties like this:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        ...\n    },\n    // Indicate that all props in `shape` will\n    // have transition animation.\n    transition: &#39;shape&#39;,\n};\n</code></pre>\n"
  },
  "elements-ring.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-ring.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "elements-ring.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "elements-ring.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "elements-ring.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "elements-ring.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "elements-ring.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "elements-ring.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "elements-ring.style.transition": {
    "desc": "<p>Can be a single property name or an array of property names.\nEnable transition animation when the specified properties changed.\nCan only specify properties that are under this <code class=\"codespan\">style</code>.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        ...\n        // This two props will perform transition animation.\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>We can also specify all of the properties like this:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        ...\n    },\n    // Indicate that all props in `style` will\n    // have transition animation.\n    transition: &#39;style&#39;,\n};\n</code></pre>\n"
  },
  "elements-ring.focus": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>When it&#39;s highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> Do not fade out other data, it&#39;s by default.</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> Only focus (not fade out) the element of the currently highlighted data.</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> Focus on all elements of the series which the currently highlighted data belongs to.</li>\n</ul>\n"
  },
  "elements-ring.blurScope": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>The range of fade out when <code class=\"codespan\">focus</code> is enabled. Support the following configurations</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code></li>\n<li><code class=\"codespan\">&#39;series&#39;</code></li>\n<li><code class=\"codespan\">&#39;global&#39;</code></li>\n</ul>\n"
  },
  "elements-sector": {
    "desc": "<p>Sector element.</p>\n"
  },
  "elements-sector.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-sector.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "elements-sector.$action": {
    "desc": "<p>Specify the operation should be performed to the element when calling <code class=\"codespan\">setOption</code>.\nDefault value is &#39;merge&#39;, other values can be &#39;replace&#39; or &#39;remove&#39;.</p>\n<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>: merge the given option to existing element (if any), otherwise create a new element.</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>: create a new element according to the given option and replace the existing element (if any).</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>: delete the existing element (if any).</li>\n</ul>\n"
  },
  "elements-sector.x": {
    "desc": "<p>x position of element. In pixels.</p>\n"
  },
  "elements-sector.y": {
    "desc": "<p>y position of element. In pixels.</p>\n"
  },
  "elements-sector.rotation": {
    "desc": "<p>Degree value of rotation.</p>\n"
  },
  "elements-sector.scaleX": {
    "desc": "<p>Scale on x.</p>\n"
  },
  "elements-sector.scaleY": {
    "desc": "<p>Scale on y.</p>\n"
  },
  "elements-sector.originX": {
    "desc": "<p>x value of element scale and rotation origin. In pixels</p>\n"
  },
  "elements-sector.originY": {
    "desc": "<p>y value of element scale and rotation origin. In pixels.</p>\n"
  },
  "elements-sector.transition": {
    "desc": "<p>You can specify that all properties have transition animations turned on with `&#39;all&#39;&#39;, or you can specify a single property or an array of properties.</p>\n<p>The properties can be:</p>\n<p>Transform related properties:<code class=\"codespan\">&#39;x&#39;</code>, <code class=\"codespan\">&#39;y&#39;</code>, <code class=\"codespan\">&#39;scaleX&#39;</code>, <code class=\"codespan\">&#39;scaleY&#39;</code>, <code class=\"codespan\">&#39;rotation&#39;</code>, <code class=\"codespan\">&#39;originX&#39;</code>, <code class=\"codespan\">&#39;originY&#39;</code>. For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    x: 100,\n    y: 200,\n    transition: [&#39;x&#39;, &#39;y&#39;]\n}\n</code></pre>\n<p>Shortcut to transition all of the properties in <a href=\"#graphic.elements-sector.shape\"><code class=\"codespan\">&#39;shape&#39;</code></a>, <a href=\"#graphic.elements-sector.style\">&#39;<code class=\"codespan\">style&#39;</code></a>, <a href=\"#graphic.elements-sector.extra\"><code class=\"codespan\">&#39;extra&#39;</code></a>. For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { // ... },\n    // Indicate that all props in `shape` will\n    // have transition animation.\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n<p>In the custom series. <code class=\"codespan\">&#39;x&#39;</code> and <code class=\"codespan\">&#39;y&#39;</code> are transitioned by default. If you want to disable the default transition, just set it as: <code class=\"codespan\">transition: []</code>.</p>\n<p>See this <a href=\"https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a> please.</p>\n"
  },
  "elements-sector.enterFrom": {
    "desc": "<p>Initial properties for enter animation.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    enterFrom: {\n        // Fade in\n        style: { opacity: 0 },\n        // Slide in from left\n        x: 0\n    }\n}\n</code></pre>\n"
  },
  "elements-sector.leaveTo": {
    "desc": "<p>End properties for leave animation.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    leaveTo: {\n        // Fade out\n        style: { opacity: 0 },\n        // Slide out to right\n        x: 200\n    }\n}\n</code></pre>\n"
  },
  "elements-sector.enterAnimation": {
    "desc": "<p>Configurations of enter animation.</p>\n"
  },
  "elements-sector.enterAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-sector.enterAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-sector.enterAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-sector.updateAnimation": {
    "desc": "<p>Configurations of update animation.</p>\n"
  },
  "elements-sector.updateAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-sector.updateAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-sector.updateAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-sector.leaveAnimation": {
    "desc": "<p>Configurations of leave animation.</p>\n"
  },
  "elements-sector.leaveAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-sector.leaveAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-sector.leaveAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-sector.keyframeAnimation": {
    "desc": "<p>Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">keyframeAnimation: [{\n    // Using scale for breath animation.\n    duration: 1000,\n    loop: true,\n    keyframes: [{\n        percent: 0.5,\n        easing: &#39;sinusoidalInOut&#39;,\n        scaleX: 0.1,\n        scaleY: 0.1\n    }, {\n        percent: 1,\n        easing: &#39;sinusoidalInOut&#39;,\n        scaleX: 1,\n        scaleY: 1\n    }]\n}, {\n    // Translate animation.\n    duration: 2000,\n    loop: true,\n    keyframes: [{\n        percent: 0,\n        x: 10\n    }, {\n        percent: 1,\n        x: 100\n    }]\n}]\n\n</code></pre>\n<p>If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.</p>\n"
  },
  "elements-sector.keyframeAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-sector.keyframeAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-sector.keyframeAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-sector.keyframeAnimation.loop": {
    "desc": "<p>If loop the keyframe animation.</p>\n"
  },
  "elements-sector.keyframeAnimation.keyframes": {
    "desc": "<p>The keyframes of the animation. Each item in the array is a keyframe in the following format.</p>\n<pre><code class=\"lang-ts\">interface Keyframe {\n    // Keyframe position. 0 is the first frame, 1 is the last frame\n    // The time of keyframe is percent * duration + delay\n    percent: number\n    // Easing function from the last keyframe to this keyframe. Optional\n    easing?: number\n\n    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.\n}\n</code></pre>\n"
  },
  "elements-sector.left": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-sector.left\">left</a> and <a href=\"#graphic.elements-sector.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-sector.left\">left</a> or <a href=\"#graphic.elements-sector.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-sector.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-sector.right": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-sector.left\">left</a> and <a href=\"#graphic.elements-sector.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-sector.left\">left</a> or <a href=\"#graphic.elements-sector.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-sector.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-sector.top": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-sector.top\">top</a> and <a href=\"#graphic.elements-sector.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-sector.top\">top</a> or <a href=\"#graphic.elements-sector.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-sector.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-sector.bottom": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-sector.top\">top</a> and <a href=\"#graphic.elements-sector.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-sector.top\">top</a> or <a href=\"#graphic.elements-sector.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-sector.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-sector.bounding": {
    "desc": "<p>Used to specify whether the entire transformed element (containing children if is group) is confined in its container.</p>\n<p>See sample:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/en/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"></iframe>\n\n\n<p>Optional values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>: (default)\n  Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>:\n  Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.</p>\n</li>\n</ul>\n"
  },
  "elements-sector.z": {
    "desc": "<p>z value of the elements, determine the overlap order.</p>\n"
  },
  "elements-sector.zlevel": {
    "desc": "<p>Determine which canvas layer this element should be in.</p>\n<p>Notice: Multiple canvas layer may affect performance.</p>\n"
  },
  "elements-sector.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-ts\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-sector.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "elements-sector.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "elements-sector.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "elements-sector.textContent": {
    "desc": "<p>Text block attached to an element and layout based on the element by <code class=\"codespan\">textConfig</code>.</p>\n<p>The props the the same as <a href=\"option.html#graphic.elements-text\" target=\"_blank\">text</a>.</p>\n"
  },
  "elements-sector.textConfig.position": {
    "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
  },
  "elements-sector.textConfig.rotation": {
    "desc": "<p>Rotation of <code class=\"codespan\">textContent</code>. In radian.</p>\n"
  },
  "elements-sector.textConfig.layoutRect": {
    "desc": "<p>Rect that <code class=\"codespan\">textContent</code> will be positioned.\nDefault to be the bounding box of host element.</p>\n<pre><code class=\"lang-ts\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
  },
  "elements-sector.textConfig.offset": {
    "desc": "<p>Offset of the <code class=\"codespan\">textContent</code>.</p>\n<p>The difference of <code class=\"codespan\">offset</code> and <code class=\"codespan\">position</code> is that <code class=\"codespan\">offset</code> will be applied in the rotation.</p>\n"
  },
  "elements-sector.textConfig.origin": {
    "desc": "<p><code class=\"codespan\">origin</code> is relative to the bounding box of the host element.\nCan be percent value. Relative to the bounding box.\nIf <code class=\"codespan\">&#39;center&#39;</code> specified, it will be center of the bounding box.</p>\n<p>Only available when position and rotation are both set.</p>\n<ul>\n<li>like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
  },
  "elements-sector.textConfig.distance": {
    "desc": "<p>Distance to the <code class=\"codespan\">layoutRect</code>。</p>\n"
  },
  "elements-sector.textConfig.local": {
    "desc": "<p>If <code class=\"codespan\">true</code>, it will apply host&#39;s transform.</p>\n"
  },
  "elements-sector.textConfig.insideFill": {
    "desc": "<p><code class=\"codespan\">insideFill</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is <code class=\"codespan\">&quot;inside&quot;</code>, its final <code class=\"codespan\">fill</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\nIn most cases, &quot;auto-calculated-fill&quot; is white.</p>\n"
  },
  "elements-sector.textConfig.insideStroke": {
    "desc": "<p><code class=\"codespan\">insideStroke</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is <code class=\"codespan\">&quot;inside&quot;</code>, its final <code class=\"codespan\">stroke</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>The rule of getting &quot;auto-calculated-stroke&quot;:</p>\n<ul>\n<li>If<ul>\n<li>(A) the <code class=\"codespan\">fill</code> is specified in style (either in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>or (B) needed to draw text background (either defined in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>&quot;auto-calculated-stroke&quot; will be null.</li>\n</ul>\n</li>\n<li>Otherwise<ul>\n<li>&quot;auto-calculated-stroke&quot; will be the same as <code class=\"codespan\">fill</code> of this element if possible, or null.</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-sector.textConfig.outsideFill": {
    "desc": "<p><code class=\"codespan\">outsideFill</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is &quot;inside&quot;, its final <code class=\"codespan\">fill</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
  },
  "elements-sector.textConfig.outsideStroke": {
    "desc": "<p><code class=\"codespan\">outsideStroke</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is not &quot;inside&quot;, its final <code class=\"codespan\">stroke</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>The rule of getting &quot;auto-calculated-stroke&quot;:</p>\n<ul>\n<li>If<ul>\n<li>(A) the <code class=\"codespan\">fill</code> is specified in style (either in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>or (B) needed to draw text background (either defined in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>&quot;auto-calculated-stroke&quot; will be null.</li>\n</ul>\n</li>\n<li>Otherwise<ul>\n<li>&quot;auto-calculated-stroke&quot; will be a near white color to distinguish &quot;front end&quot; label with messy background (like other text label, line or other graphic).</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-sector.textConfig.inside": {
    "desc": "<p>Tell echarts that I can make sure this text is inside or not.</p>\n"
  },
  "elements-sector.during": {
    "desc": "<p><code class=\"codespan\">during</code> callback enable users to set props to an element in each animation frame.</p>\n<pre><code class=\"lang-ts\">(duringAPI: CustomDuringAPI) =&gt; void\n\ninterface CustomDuringAPI {\n    // Set transform prop value.\n    // Transform prop see `TransformProp`.\n    setTransform(key: TransformProp, val: unknown): void;\n    // Get transform prop value of the current animation frame.\n    getTransform(key: TransformProp): unknown;\n    // Set shape prop value.\n    // Shape prop is like `{ type: &#39;rect&#39;, shape: { xxxProp: xxxValue } }`.\n    setShape(key: string, val: unknown): void;\n    // Get shape prop value of the current animation frame.\n    getShape(key: string): unknown;\n    // Set style prop value.\n    // Style prop is like `{ type: &#39;rect&#39;, style: { xxxProp: xxxValue } }`.\n    setStyle(key: string, val: unknown): void;\n    // Get style prop value of the current animation frame.\n    getStyle(key: string): unknown;\n    // Set extra prop value.\n    // Extra prop is like `{ type: &#39;rect&#39;, extra: { xxxProp: xxxValue } }`.\n    setExtra(key: string, val: unknown): void;\n    // Get extra prop value of the current animation frame.\n    getExtra(key: string): unknown;\n}\n\ntype TransformProp =\n    &#39;x&#39; | &#39;y&#39; | &#39;scaleX&#39; | &#39;scaleY&#39; | &#39;originX&#39; | &#39;originY&#39; | &#39;rotation&#39;;\n</code></pre>\n<p>In most cases users do not need this <code class=\"codespan\">during</code> callback. For example, if some props are specified in <a href=\"option.html#series-custom.renderItem.return_rect.transition\" target=\"_blank\">transition</a>, echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this <code class=\"codespan\">during</code> callback to customize them.</p>\n<p>For example, if users are using <a href=\"option.html#series-custom.renderItem.return_polygon\" target=\"_blank\">polygon</a> shape. The shape is described by <a href=\"option.html#series-custom.renderItem.return_polygon.shape.points\" target=\"_blank\">shape.points</a>, which is an points array like:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...]\n    },\n    // ...\n}\n</code></pre>\n<p>If users specify them into <a href=\"option.html#series-custom.renderItem.return_polygon.transition\" target=\"_blank\">transition</a> like:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...],\n    },\n    transition: &#39;shape&#39;\n    // ...\n}\n</code></pre>\n<p>Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the <code class=\"codespan\">during</code> callback like that:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: calculatePoints(initialDegree),\n        transition: &#39;points&#39;\n    },\n    extra: {\n        degree: nextDegree\n    },\n    // Make echarts interpolate `extra.degree` internally, based on which\n    // we calculate the `points` in each animation frame.\n    transition: &#39;extra&#39;,\n    during: function (duringAPI) {\n        var currentDegree = duringAPI.getExtra(&#39;degree&#39;);\n        duringAPI.setShape(calculatePoints(currentDegree));\n    }\n    // ...\n}\n</code></pre>\n<p>See this example <a href=\"https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a>.</p>\n"
  },
  "elements-sector.cursor": {
    "desc": "\n\n<p>The mouse style when mouse hovers on an element, the same as <code class=\"codespan\">cursor</code> property in <code class=\"codespan\">CSS</code>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-sector.draggable": {
    "desc": "<p>Can be dragged or not.</p>\n"
  },
  "elements-sector.progressive": {
    "desc": "<p>Whether use progressive render to improve performance. Usually used when number of element is too large.</p>\n"
  },
  "elements-sector.shape.cx": {
    "desc": "<p>The x value of the center of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-sector.shape.cy": {
    "desc": "<p>The y value of the center of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-sector.shape.r": {
    "desc": "<p>Outside radius.</p>\n"
  },
  "elements-sector.shape.r0": {
    "desc": "<p>Inside radius.</p>\n"
  },
  "elements-sector.shape.startAngle": {
    "desc": "<p>start angle, in radian.</p>\n"
  },
  "elements-sector.shape.endAngle": {
    "desc": "<p>end angle, in radian.</p>\n"
  },
  "elements-sector.shape.clockwise": {
    "desc": "<p>Whether draw clockwise.</p>\n"
  },
  "elements-sector.shape.transition": {
    "desc": "<p>Can be a single property name or an array of property names.\nEnable transition animation when the specified properties changed.\nCan only specify properties that are under this <code class=\"codespan\">shape</code>.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        ...\n        // This two props will perform transition animation.\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>We can also specify all of the properties like this:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        ...\n    },\n    // Indicate that all props in `shape` will\n    // have transition animation.\n    transition: &#39;shape&#39;,\n};\n</code></pre>\n"
  },
  "elements-sector.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-sector.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "elements-sector.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "elements-sector.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "elements-sector.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "elements-sector.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "elements-sector.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "elements-sector.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "elements-sector.style.transition": {
    "desc": "<p>Can be a single property name or an array of property names.\nEnable transition animation when the specified properties changed.\nCan only specify properties that are under this <code class=\"codespan\">style</code>.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        ...\n        // This two props will perform transition animation.\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>We can also specify all of the properties like this:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        ...\n    },\n    // Indicate that all props in `style` will\n    // have transition animation.\n    transition: &#39;style&#39;,\n};\n</code></pre>\n"
  },
  "elements-sector.focus": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>When it&#39;s highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> Do not fade out other data, it&#39;s by default.</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> Only focus (not fade out) the element of the currently highlighted data.</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> Focus on all elements of the series which the currently highlighted data belongs to.</li>\n</ul>\n"
  },
  "elements-sector.blurScope": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>The range of fade out when <code class=\"codespan\">focus</code> is enabled. Support the following configurations</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code></li>\n<li><code class=\"codespan\">&#39;series&#39;</code></li>\n<li><code class=\"codespan\">&#39;global&#39;</code></li>\n</ul>\n"
  },
  "elements-arc": {
    "desc": "<p>Arc element.</p>\n"
  },
  "elements-arc.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-arc.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "elements-arc.$action": {
    "desc": "<p>Specify the operation should be performed to the element when calling <code class=\"codespan\">setOption</code>.\nDefault value is &#39;merge&#39;, other values can be &#39;replace&#39; or &#39;remove&#39;.</p>\n<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>: merge the given option to existing element (if any), otherwise create a new element.</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>: create a new element according to the given option and replace the existing element (if any).</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>: delete the existing element (if any).</li>\n</ul>\n"
  },
  "elements-arc.x": {
    "desc": "<p>x position of element. In pixels.</p>\n"
  },
  "elements-arc.y": {
    "desc": "<p>y position of element. In pixels.</p>\n"
  },
  "elements-arc.rotation": {
    "desc": "<p>Degree value of rotation.</p>\n"
  },
  "elements-arc.scaleX": {
    "desc": "<p>Scale on x.</p>\n"
  },
  "elements-arc.scaleY": {
    "desc": "<p>Scale on y.</p>\n"
  },
  "elements-arc.originX": {
    "desc": "<p>x value of element scale and rotation origin. In pixels</p>\n"
  },
  "elements-arc.originY": {
    "desc": "<p>y value of element scale and rotation origin. In pixels.</p>\n"
  },
  "elements-arc.transition": {
    "desc": "<p>You can specify that all properties have transition animations turned on with `&#39;all&#39;&#39;, or you can specify a single property or an array of properties.</p>\n<p>The properties can be:</p>\n<p>Transform related properties:<code class=\"codespan\">&#39;x&#39;</code>, <code class=\"codespan\">&#39;y&#39;</code>, <code class=\"codespan\">&#39;scaleX&#39;</code>, <code class=\"codespan\">&#39;scaleY&#39;</code>, <code class=\"codespan\">&#39;rotation&#39;</code>, <code class=\"codespan\">&#39;originX&#39;</code>, <code class=\"codespan\">&#39;originY&#39;</code>. For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    x: 100,\n    y: 200,\n    transition: [&#39;x&#39;, &#39;y&#39;]\n}\n</code></pre>\n<p>Shortcut to transition all of the properties in <a href=\"#graphic.elements-arc.shape\"><code class=\"codespan\">&#39;shape&#39;</code></a>, <a href=\"#graphic.elements-arc.style\">&#39;<code class=\"codespan\">style&#39;</code></a>, <a href=\"#graphic.elements-arc.extra\"><code class=\"codespan\">&#39;extra&#39;</code></a>. For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { // ... },\n    // Indicate that all props in `shape` will\n    // have transition animation.\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n<p>In the custom series. <code class=\"codespan\">&#39;x&#39;</code> and <code class=\"codespan\">&#39;y&#39;</code> are transitioned by default. If you want to disable the default transition, just set it as: <code class=\"codespan\">transition: []</code>.</p>\n<p>See this <a href=\"https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a> please.</p>\n"
  },
  "elements-arc.enterFrom": {
    "desc": "<p>Initial properties for enter animation.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    enterFrom: {\n        // Fade in\n        style: { opacity: 0 },\n        // Slide in from left\n        x: 0\n    }\n}\n</code></pre>\n"
  },
  "elements-arc.leaveTo": {
    "desc": "<p>End properties for leave animation.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    leaveTo: {\n        // Fade out\n        style: { opacity: 0 },\n        // Slide out to right\n        x: 200\n    }\n}\n</code></pre>\n"
  },
  "elements-arc.enterAnimation": {
    "desc": "<p>Configurations of enter animation.</p>\n"
  },
  "elements-arc.enterAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-arc.enterAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-arc.enterAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-arc.updateAnimation": {
    "desc": "<p>Configurations of update animation.</p>\n"
  },
  "elements-arc.updateAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-arc.updateAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-arc.updateAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-arc.leaveAnimation": {
    "desc": "<p>Configurations of leave animation.</p>\n"
  },
  "elements-arc.leaveAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-arc.leaveAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-arc.leaveAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-arc.keyframeAnimation": {
    "desc": "<p>Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">keyframeAnimation: [{\n    // Using scale for breath animation.\n    duration: 1000,\n    loop: true,\n    keyframes: [{\n        percent: 0.5,\n        easing: &#39;sinusoidalInOut&#39;,\n        scaleX: 0.1,\n        scaleY: 0.1\n    }, {\n        percent: 1,\n        easing: &#39;sinusoidalInOut&#39;,\n        scaleX: 1,\n        scaleY: 1\n    }]\n}, {\n    // Translate animation.\n    duration: 2000,\n    loop: true,\n    keyframes: [{\n        percent: 0,\n        x: 10\n    }, {\n        percent: 1,\n        x: 100\n    }]\n}]\n\n</code></pre>\n<p>If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.</p>\n"
  },
  "elements-arc.keyframeAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-arc.keyframeAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-arc.keyframeAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-arc.keyframeAnimation.loop": {
    "desc": "<p>If loop the keyframe animation.</p>\n"
  },
  "elements-arc.keyframeAnimation.keyframes": {
    "desc": "<p>The keyframes of the animation. Each item in the array is a keyframe in the following format.</p>\n<pre><code class=\"lang-ts\">interface Keyframe {\n    // Keyframe position. 0 is the first frame, 1 is the last frame\n    // The time of keyframe is percent * duration + delay\n    percent: number\n    // Easing function from the last keyframe to this keyframe. Optional\n    easing?: number\n\n    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.\n}\n</code></pre>\n"
  },
  "elements-arc.left": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-arc.left\">left</a> and <a href=\"#graphic.elements-arc.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-arc.left\">left</a> or <a href=\"#graphic.elements-arc.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-arc.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-arc.right": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-arc.left\">left</a> and <a href=\"#graphic.elements-arc.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-arc.left\">left</a> or <a href=\"#graphic.elements-arc.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-arc.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-arc.top": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-arc.top\">top</a> and <a href=\"#graphic.elements-arc.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-arc.top\">top</a> or <a href=\"#graphic.elements-arc.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-arc.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-arc.bottom": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-arc.top\">top</a> and <a href=\"#graphic.elements-arc.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-arc.top\">top</a> or <a href=\"#graphic.elements-arc.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-arc.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-arc.bounding": {
    "desc": "<p>Used to specify whether the entire transformed element (containing children if is group) is confined in its container.</p>\n<p>See sample:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/en/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"></iframe>\n\n\n<p>Optional values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>: (default)\n  Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>:\n  Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.</p>\n</li>\n</ul>\n"
  },
  "elements-arc.z": {
    "desc": "<p>z value of the elements, determine the overlap order.</p>\n"
  },
  "elements-arc.zlevel": {
    "desc": "<p>Determine which canvas layer this element should be in.</p>\n<p>Notice: Multiple canvas layer may affect performance.</p>\n"
  },
  "elements-arc.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-ts\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-arc.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "elements-arc.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "elements-arc.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "elements-arc.textContent": {
    "desc": "<p>Text block attached to an element and layout based on the element by <code class=\"codespan\">textConfig</code>.</p>\n<p>The props the the same as <a href=\"option.html#graphic.elements-text\" target=\"_blank\">text</a>.</p>\n"
  },
  "elements-arc.textConfig.position": {
    "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
  },
  "elements-arc.textConfig.rotation": {
    "desc": "<p>Rotation of <code class=\"codespan\">textContent</code>. In radian.</p>\n"
  },
  "elements-arc.textConfig.layoutRect": {
    "desc": "<p>Rect that <code class=\"codespan\">textContent</code> will be positioned.\nDefault to be the bounding box of host element.</p>\n<pre><code class=\"lang-ts\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
  },
  "elements-arc.textConfig.offset": {
    "desc": "<p>Offset of the <code class=\"codespan\">textContent</code>.</p>\n<p>The difference of <code class=\"codespan\">offset</code> and <code class=\"codespan\">position</code> is that <code class=\"codespan\">offset</code> will be applied in the rotation.</p>\n"
  },
  "elements-arc.textConfig.origin": {
    "desc": "<p><code class=\"codespan\">origin</code> is relative to the bounding box of the host element.\nCan be percent value. Relative to the bounding box.\nIf <code class=\"codespan\">&#39;center&#39;</code> specified, it will be center of the bounding box.</p>\n<p>Only available when position and rotation are both set.</p>\n<ul>\n<li>like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
  },
  "elements-arc.textConfig.distance": {
    "desc": "<p>Distance to the <code class=\"codespan\">layoutRect</code>。</p>\n"
  },
  "elements-arc.textConfig.local": {
    "desc": "<p>If <code class=\"codespan\">true</code>, it will apply host&#39;s transform.</p>\n"
  },
  "elements-arc.textConfig.insideFill": {
    "desc": "<p><code class=\"codespan\">insideFill</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is <code class=\"codespan\">&quot;inside&quot;</code>, its final <code class=\"codespan\">fill</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\nIn most cases, &quot;auto-calculated-fill&quot; is white.</p>\n"
  },
  "elements-arc.textConfig.insideStroke": {
    "desc": "<p><code class=\"codespan\">insideStroke</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is <code class=\"codespan\">&quot;inside&quot;</code>, its final <code class=\"codespan\">stroke</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>The rule of getting &quot;auto-calculated-stroke&quot;:</p>\n<ul>\n<li>If<ul>\n<li>(A) the <code class=\"codespan\">fill</code> is specified in style (either in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>or (B) needed to draw text background (either defined in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>&quot;auto-calculated-stroke&quot; will be null.</li>\n</ul>\n</li>\n<li>Otherwise<ul>\n<li>&quot;auto-calculated-stroke&quot; will be the same as <code class=\"codespan\">fill</code> of this element if possible, or null.</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-arc.textConfig.outsideFill": {
    "desc": "<p><code class=\"codespan\">outsideFill</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is &quot;inside&quot;, its final <code class=\"codespan\">fill</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
  },
  "elements-arc.textConfig.outsideStroke": {
    "desc": "<p><code class=\"codespan\">outsideStroke</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is not &quot;inside&quot;, its final <code class=\"codespan\">stroke</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>The rule of getting &quot;auto-calculated-stroke&quot;:</p>\n<ul>\n<li>If<ul>\n<li>(A) the <code class=\"codespan\">fill</code> is specified in style (either in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>or (B) needed to draw text background (either defined in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>&quot;auto-calculated-stroke&quot; will be null.</li>\n</ul>\n</li>\n<li>Otherwise<ul>\n<li>&quot;auto-calculated-stroke&quot; will be a near white color to distinguish &quot;front end&quot; label with messy background (like other text label, line or other graphic).</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-arc.textConfig.inside": {
    "desc": "<p>Tell echarts that I can make sure this text is inside or not.</p>\n"
  },
  "elements-arc.during": {
    "desc": "<p><code class=\"codespan\">during</code> callback enable users to set props to an element in each animation frame.</p>\n<pre><code class=\"lang-ts\">(duringAPI: CustomDuringAPI) =&gt; void\n\ninterface CustomDuringAPI {\n    // Set transform prop value.\n    // Transform prop see `TransformProp`.\n    setTransform(key: TransformProp, val: unknown): void;\n    // Get transform prop value of the current animation frame.\n    getTransform(key: TransformProp): unknown;\n    // Set shape prop value.\n    // Shape prop is like `{ type: &#39;rect&#39;, shape: { xxxProp: xxxValue } }`.\n    setShape(key: string, val: unknown): void;\n    // Get shape prop value of the current animation frame.\n    getShape(key: string): unknown;\n    // Set style prop value.\n    // Style prop is like `{ type: &#39;rect&#39;, style: { xxxProp: xxxValue } }`.\n    setStyle(key: string, val: unknown): void;\n    // Get style prop value of the current animation frame.\n    getStyle(key: string): unknown;\n    // Set extra prop value.\n    // Extra prop is like `{ type: &#39;rect&#39;, extra: { xxxProp: xxxValue } }`.\n    setExtra(key: string, val: unknown): void;\n    // Get extra prop value of the current animation frame.\n    getExtra(key: string): unknown;\n}\n\ntype TransformProp =\n    &#39;x&#39; | &#39;y&#39; | &#39;scaleX&#39; | &#39;scaleY&#39; | &#39;originX&#39; | &#39;originY&#39; | &#39;rotation&#39;;\n</code></pre>\n<p>In most cases users do not need this <code class=\"codespan\">during</code> callback. For example, if some props are specified in <a href=\"option.html#series-custom.renderItem.return_rect.transition\" target=\"_blank\">transition</a>, echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this <code class=\"codespan\">during</code> callback to customize them.</p>\n<p>For example, if users are using <a href=\"option.html#series-custom.renderItem.return_polygon\" target=\"_blank\">polygon</a> shape. The shape is described by <a href=\"option.html#series-custom.renderItem.return_polygon.shape.points\" target=\"_blank\">shape.points</a>, which is an points array like:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...]\n    },\n    // ...\n}\n</code></pre>\n<p>If users specify them into <a href=\"option.html#series-custom.renderItem.return_polygon.transition\" target=\"_blank\">transition</a> like:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...],\n    },\n    transition: &#39;shape&#39;\n    // ...\n}\n</code></pre>\n<p>Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the <code class=\"codespan\">during</code> callback like that:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: calculatePoints(initialDegree),\n        transition: &#39;points&#39;\n    },\n    extra: {\n        degree: nextDegree\n    },\n    // Make echarts interpolate `extra.degree` internally, based on which\n    // we calculate the `points` in each animation frame.\n    transition: &#39;extra&#39;,\n    during: function (duringAPI) {\n        var currentDegree = duringAPI.getExtra(&#39;degree&#39;);\n        duringAPI.setShape(calculatePoints(currentDegree));\n    }\n    // ...\n}\n</code></pre>\n<p>See this example <a href=\"https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a>.</p>\n"
  },
  "elements-arc.cursor": {
    "desc": "\n\n<p>The mouse style when mouse hovers on an element, the same as <code class=\"codespan\">cursor</code> property in <code class=\"codespan\">CSS</code>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-arc.draggable": {
    "desc": "<p>Can be dragged or not.</p>\n"
  },
  "elements-arc.progressive": {
    "desc": "<p>Whether use progressive render to improve performance. Usually used when number of element is too large.</p>\n"
  },
  "elements-arc.shape.cx": {
    "desc": "<p>The x value of the center of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-arc.shape.cy": {
    "desc": "<p>The y value of the center of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-arc.shape.r": {
    "desc": "<p>Outside radius.</p>\n"
  },
  "elements-arc.shape.r0": {
    "desc": "<p>Inside radius.</p>\n"
  },
  "elements-arc.shape.startAngle": {
    "desc": "<p>start angle, in radian.</p>\n"
  },
  "elements-arc.shape.endAngle": {
    "desc": "<p>end angle, in radian.</p>\n"
  },
  "elements-arc.shape.clockwise": {
    "desc": "<p>Whether draw clockwise.</p>\n"
  },
  "elements-arc.shape.transition": {
    "desc": "<p>Can be a single property name or an array of property names.\nEnable transition animation when the specified properties changed.\nCan only specify properties that are under this <code class=\"codespan\">shape</code>.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        ...\n        // This two props will perform transition animation.\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>We can also specify all of the properties like this:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        ...\n    },\n    // Indicate that all props in `shape` will\n    // have transition animation.\n    transition: &#39;shape&#39;,\n};\n</code></pre>\n"
  },
  "elements-arc.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-arc.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "elements-arc.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "elements-arc.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "elements-arc.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "elements-arc.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "elements-arc.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "elements-arc.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "elements-arc.style.transition": {
    "desc": "<p>Can be a single property name or an array of property names.\nEnable transition animation when the specified properties changed.\nCan only specify properties that are under this <code class=\"codespan\">style</code>.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        ...\n        // This two props will perform transition animation.\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>We can also specify all of the properties like this:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        ...\n    },\n    // Indicate that all props in `style` will\n    // have transition animation.\n    transition: &#39;style&#39;,\n};\n</code></pre>\n"
  },
  "elements-arc.focus": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>When it&#39;s highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> Do not fade out other data, it&#39;s by default.</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> Only focus (not fade out) the element of the currently highlighted data.</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> Focus on all elements of the series which the currently highlighted data belongs to.</li>\n</ul>\n"
  },
  "elements-arc.blurScope": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>The range of fade out when <code class=\"codespan\">focus</code> is enabled. Support the following configurations</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code></li>\n<li><code class=\"codespan\">&#39;series&#39;</code></li>\n<li><code class=\"codespan\">&#39;global&#39;</code></li>\n</ul>\n"
  },
  "elements-polygon": {
    "desc": "<p>Polygon element.</p>\n"
  },
  "elements-polygon.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-polygon.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "elements-polygon.$action": {
    "desc": "<p>Specify the operation should be performed to the element when calling <code class=\"codespan\">setOption</code>.\nDefault value is &#39;merge&#39;, other values can be &#39;replace&#39; or &#39;remove&#39;.</p>\n<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>: merge the given option to existing element (if any), otherwise create a new element.</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>: create a new element according to the given option and replace the existing element (if any).</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>: delete the existing element (if any).</li>\n</ul>\n"
  },
  "elements-polygon.x": {
    "desc": "<p>x position of element. In pixels.</p>\n"
  },
  "elements-polygon.y": {
    "desc": "<p>y position of element. In pixels.</p>\n"
  },
  "elements-polygon.rotation": {
    "desc": "<p>Degree value of rotation.</p>\n"
  },
  "elements-polygon.scaleX": {
    "desc": "<p>Scale on x.</p>\n"
  },
  "elements-polygon.scaleY": {
    "desc": "<p>Scale on y.</p>\n"
  },
  "elements-polygon.originX": {
    "desc": "<p>x value of element scale and rotation origin. In pixels</p>\n"
  },
  "elements-polygon.originY": {
    "desc": "<p>y value of element scale and rotation origin. In pixels.</p>\n"
  },
  "elements-polygon.transition": {
    "desc": "<p>You can specify that all properties have transition animations turned on with `&#39;all&#39;&#39;, or you can specify a single property or an array of properties.</p>\n<p>The properties can be:</p>\n<p>Transform related properties:<code class=\"codespan\">&#39;x&#39;</code>, <code class=\"codespan\">&#39;y&#39;</code>, <code class=\"codespan\">&#39;scaleX&#39;</code>, <code class=\"codespan\">&#39;scaleY&#39;</code>, <code class=\"codespan\">&#39;rotation&#39;</code>, <code class=\"codespan\">&#39;originX&#39;</code>, <code class=\"codespan\">&#39;originY&#39;</code>. For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    x: 100,\n    y: 200,\n    transition: [&#39;x&#39;, &#39;y&#39;]\n}\n</code></pre>\n<p>Shortcut to transition all of the properties in <a href=\"#graphic.elements-polygon.shape\"><code class=\"codespan\">&#39;shape&#39;</code></a>, <a href=\"#graphic.elements-polygon.style\">&#39;<code class=\"codespan\">style&#39;</code></a>, <a href=\"#graphic.elements-polygon.extra\"><code class=\"codespan\">&#39;extra&#39;</code></a>. For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { // ... },\n    // Indicate that all props in `shape` will\n    // have transition animation.\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n<p>In the custom series. <code class=\"codespan\">&#39;x&#39;</code> and <code class=\"codespan\">&#39;y&#39;</code> are transitioned by default. If you want to disable the default transition, just set it as: <code class=\"codespan\">transition: []</code>.</p>\n<p>See this <a href=\"https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a> please.</p>\n"
  },
  "elements-polygon.enterFrom": {
    "desc": "<p>Initial properties for enter animation.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    enterFrom: {\n        // Fade in\n        style: { opacity: 0 },\n        // Slide in from left\n        x: 0\n    }\n}\n</code></pre>\n"
  },
  "elements-polygon.leaveTo": {
    "desc": "<p>End properties for leave animation.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    leaveTo: {\n        // Fade out\n        style: { opacity: 0 },\n        // Slide out to right\n        x: 200\n    }\n}\n</code></pre>\n"
  },
  "elements-polygon.enterAnimation": {
    "desc": "<p>Configurations of enter animation.</p>\n"
  },
  "elements-polygon.enterAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-polygon.enterAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-polygon.enterAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-polygon.updateAnimation": {
    "desc": "<p>Configurations of update animation.</p>\n"
  },
  "elements-polygon.updateAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-polygon.updateAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-polygon.updateAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-polygon.leaveAnimation": {
    "desc": "<p>Configurations of leave animation.</p>\n"
  },
  "elements-polygon.leaveAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-polygon.leaveAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-polygon.leaveAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-polygon.keyframeAnimation": {
    "desc": "<p>Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">keyframeAnimation: [{\n    // Using scale for breath animation.\n    duration: 1000,\n    loop: true,\n    keyframes: [{\n        percent: 0.5,\n        easing: &#39;sinusoidalInOut&#39;,\n        scaleX: 0.1,\n        scaleY: 0.1\n    }, {\n        percent: 1,\n        easing: &#39;sinusoidalInOut&#39;,\n        scaleX: 1,\n        scaleY: 1\n    }]\n}, {\n    // Translate animation.\n    duration: 2000,\n    loop: true,\n    keyframes: [{\n        percent: 0,\n        x: 10\n    }, {\n        percent: 1,\n        x: 100\n    }]\n}]\n\n</code></pre>\n<p>If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.</p>\n"
  },
  "elements-polygon.keyframeAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-polygon.keyframeAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-polygon.keyframeAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-polygon.keyframeAnimation.loop": {
    "desc": "<p>If loop the keyframe animation.</p>\n"
  },
  "elements-polygon.keyframeAnimation.keyframes": {
    "desc": "<p>The keyframes of the animation. Each item in the array is a keyframe in the following format.</p>\n<pre><code class=\"lang-ts\">interface Keyframe {\n    // Keyframe position. 0 is the first frame, 1 is the last frame\n    // The time of keyframe is percent * duration + delay\n    percent: number\n    // Easing function from the last keyframe to this keyframe. Optional\n    easing?: number\n\n    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.\n}\n</code></pre>\n"
  },
  "elements-polygon.left": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-polygon.right": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-polygon.top": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-polygon.bottom": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-polygon.bounding": {
    "desc": "<p>Used to specify whether the entire transformed element (containing children if is group) is confined in its container.</p>\n<p>See sample:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/en/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"></iframe>\n\n\n<p>Optional values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>: (default)\n  Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>:\n  Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.</p>\n</li>\n</ul>\n"
  },
  "elements-polygon.z": {
    "desc": "<p>z value of the elements, determine the overlap order.</p>\n"
  },
  "elements-polygon.zlevel": {
    "desc": "<p>Determine which canvas layer this element should be in.</p>\n<p>Notice: Multiple canvas layer may affect performance.</p>\n"
  },
  "elements-polygon.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-ts\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-polygon.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "elements-polygon.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "elements-polygon.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "elements-polygon.textContent": {
    "desc": "<p>Text block attached to an element and layout based on the element by <code class=\"codespan\">textConfig</code>.</p>\n<p>The props the the same as <a href=\"option.html#graphic.elements-text\" target=\"_blank\">text</a>.</p>\n"
  },
  "elements-polygon.textConfig.position": {
    "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
  },
  "elements-polygon.textConfig.rotation": {
    "desc": "<p>Rotation of <code class=\"codespan\">textContent</code>. In radian.</p>\n"
  },
  "elements-polygon.textConfig.layoutRect": {
    "desc": "<p>Rect that <code class=\"codespan\">textContent</code> will be positioned.\nDefault to be the bounding box of host element.</p>\n<pre><code class=\"lang-ts\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
  },
  "elements-polygon.textConfig.offset": {
    "desc": "<p>Offset of the <code class=\"codespan\">textContent</code>.</p>\n<p>The difference of <code class=\"codespan\">offset</code> and <code class=\"codespan\">position</code> is that <code class=\"codespan\">offset</code> will be applied in the rotation.</p>\n"
  },
  "elements-polygon.textConfig.origin": {
    "desc": "<p><code class=\"codespan\">origin</code> is relative to the bounding box of the host element.\nCan be percent value. Relative to the bounding box.\nIf <code class=\"codespan\">&#39;center&#39;</code> specified, it will be center of the bounding box.</p>\n<p>Only available when position and rotation are both set.</p>\n<ul>\n<li>like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
  },
  "elements-polygon.textConfig.distance": {
    "desc": "<p>Distance to the <code class=\"codespan\">layoutRect</code>。</p>\n"
  },
  "elements-polygon.textConfig.local": {
    "desc": "<p>If <code class=\"codespan\">true</code>, it will apply host&#39;s transform.</p>\n"
  },
  "elements-polygon.textConfig.insideFill": {
    "desc": "<p><code class=\"codespan\">insideFill</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is <code class=\"codespan\">&quot;inside&quot;</code>, its final <code class=\"codespan\">fill</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\nIn most cases, &quot;auto-calculated-fill&quot; is white.</p>\n"
  },
  "elements-polygon.textConfig.insideStroke": {
    "desc": "<p><code class=\"codespan\">insideStroke</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is <code class=\"codespan\">&quot;inside&quot;</code>, its final <code class=\"codespan\">stroke</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>The rule of getting &quot;auto-calculated-stroke&quot;:</p>\n<ul>\n<li>If<ul>\n<li>(A) the <code class=\"codespan\">fill</code> is specified in style (either in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>or (B) needed to draw text background (either defined in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>&quot;auto-calculated-stroke&quot; will be null.</li>\n</ul>\n</li>\n<li>Otherwise<ul>\n<li>&quot;auto-calculated-stroke&quot; will be the same as <code class=\"codespan\">fill</code> of this element if possible, or null.</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-polygon.textConfig.outsideFill": {
    "desc": "<p><code class=\"codespan\">outsideFill</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is &quot;inside&quot;, its final <code class=\"codespan\">fill</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
  },
  "elements-polygon.textConfig.outsideStroke": {
    "desc": "<p><code class=\"codespan\">outsideStroke</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is not &quot;inside&quot;, its final <code class=\"codespan\">stroke</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>The rule of getting &quot;auto-calculated-stroke&quot;:</p>\n<ul>\n<li>If<ul>\n<li>(A) the <code class=\"codespan\">fill</code> is specified in style (either in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>or (B) needed to draw text background (either defined in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>&quot;auto-calculated-stroke&quot; will be null.</li>\n</ul>\n</li>\n<li>Otherwise<ul>\n<li>&quot;auto-calculated-stroke&quot; will be a near white color to distinguish &quot;front end&quot; label with messy background (like other text label, line or other graphic).</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-polygon.textConfig.inside": {
    "desc": "<p>Tell echarts that I can make sure this text is inside or not.</p>\n"
  },
  "elements-polygon.during": {
    "desc": "<p><code class=\"codespan\">during</code> callback enable users to set props to an element in each animation frame.</p>\n<pre><code class=\"lang-ts\">(duringAPI: CustomDuringAPI) =&gt; void\n\ninterface CustomDuringAPI {\n    // Set transform prop value.\n    // Transform prop see `TransformProp`.\n    setTransform(key: TransformProp, val: unknown): void;\n    // Get transform prop value of the current animation frame.\n    getTransform(key: TransformProp): unknown;\n    // Set shape prop value.\n    // Shape prop is like `{ type: &#39;rect&#39;, shape: { xxxProp: xxxValue } }`.\n    setShape(key: string, val: unknown): void;\n    // Get shape prop value of the current animation frame.\n    getShape(key: string): unknown;\n    // Set style prop value.\n    // Style prop is like `{ type: &#39;rect&#39;, style: { xxxProp: xxxValue } }`.\n    setStyle(key: string, val: unknown): void;\n    // Get style prop value of the current animation frame.\n    getStyle(key: string): unknown;\n    // Set extra prop value.\n    // Extra prop is like `{ type: &#39;rect&#39;, extra: { xxxProp: xxxValue } }`.\n    setExtra(key: string, val: unknown): void;\n    // Get extra prop value of the current animation frame.\n    getExtra(key: string): unknown;\n}\n\ntype TransformProp =\n    &#39;x&#39; | &#39;y&#39; | &#39;scaleX&#39; | &#39;scaleY&#39; | &#39;originX&#39; | &#39;originY&#39; | &#39;rotation&#39;;\n</code></pre>\n<p>In most cases users do not need this <code class=\"codespan\">during</code> callback. For example, if some props are specified in <a href=\"option.html#series-custom.renderItem.return_rect.transition\" target=\"_blank\">transition</a>, echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this <code class=\"codespan\">during</code> callback to customize them.</p>\n<p>For example, if users are using <a href=\"option.html#series-custom.renderItem.return_polygon\" target=\"_blank\">polygon</a> shape. The shape is described by <a href=\"option.html#series-custom.renderItem.return_polygon.shape.points\" target=\"_blank\">shape.points</a>, which is an points array like:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...]\n    },\n    // ...\n}\n</code></pre>\n<p>If users specify them into <a href=\"option.html#series-custom.renderItem.return_polygon.transition\" target=\"_blank\">transition</a> like:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...],\n    },\n    transition: &#39;shape&#39;\n    // ...\n}\n</code></pre>\n<p>Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the <code class=\"codespan\">during</code> callback like that:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: calculatePoints(initialDegree),\n        transition: &#39;points&#39;\n    },\n    extra: {\n        degree: nextDegree\n    },\n    // Make echarts interpolate `extra.degree` internally, based on which\n    // we calculate the `points` in each animation frame.\n    transition: &#39;extra&#39;,\n    during: function (duringAPI) {\n        var currentDegree = duringAPI.getExtra(&#39;degree&#39;);\n        duringAPI.setShape(calculatePoints(currentDegree));\n    }\n    // ...\n}\n</code></pre>\n<p>See this example <a href=\"https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a>.</p>\n"
  },
  "elements-polygon.cursor": {
    "desc": "\n\n<p>The mouse style when mouse hovers on an element, the same as <code class=\"codespan\">cursor</code> property in <code class=\"codespan\">CSS</code>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-polygon.draggable": {
    "desc": "<p>Can be dragged or not.</p>\n"
  },
  "elements-polygon.progressive": {
    "desc": "<p>Whether use progressive render to improve performance. Usually used when number of element is too large.</p>\n"
  },
  "elements-polygon.shape.points": {
    "desc": "<p>A list of points, which defines the shape, like <code class=\"codespan\">[[22, 44], [44, 55], [11, 44], ...]</code>.</p>\n"
  },
  "elements-polygon.shape.smooth": {
    "desc": "<p>Whether smooth the line.</p>\n<ul>\n<li>If the value is number, bezier interpolation is used, and the value specified the level of smooth, which is in the range of <code class=\"codespan\">[0, 1]</code>.</li>\n<li>If the value is <code class=\"codespan\">&#39;spline&#39;</code>, Catmull-Rom spline interpolation is used.</li>\n</ul>\n"
  },
  "elements-polygon.shape.smoothConstraint": {
    "desc": "<p>Whether prevent the smooth process cause the line out of the bounding box.</p>\n<p>Only works when <code class=\"codespan\">smooth</code> is <code class=\"codespan\">number</code> (bezier smooth).</p>\n"
  },
  "elements-polygon.shape.transition": {
    "desc": "<p>Can be a single property name or an array of property names.\nEnable transition animation when the specified properties changed.\nCan only specify properties that are under this <code class=\"codespan\">shape</code>.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        ...\n        // This two props will perform transition animation.\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>We can also specify all of the properties like this:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        ...\n    },\n    // Indicate that all props in `shape` will\n    // have transition animation.\n    transition: &#39;shape&#39;,\n};\n</code></pre>\n"
  },
  "elements-polygon.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-polygon.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "elements-polygon.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "elements-polygon.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "elements-polygon.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "elements-polygon.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "elements-polygon.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "elements-polygon.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "elements-polygon.style.transition": {
    "desc": "<p>Can be a single property name or an array of property names.\nEnable transition animation when the specified properties changed.\nCan only specify properties that are under this <code class=\"codespan\">style</code>.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        ...\n        // This two props will perform transition animation.\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>We can also specify all of the properties like this:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        ...\n    },\n    // Indicate that all props in `style` will\n    // have transition animation.\n    transition: &#39;style&#39;,\n};\n</code></pre>\n"
  },
  "elements-polygon.focus": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>When it&#39;s highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> Do not fade out other data, it&#39;s by default.</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> Only focus (not fade out) the element of the currently highlighted data.</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> Focus on all elements of the series which the currently highlighted data belongs to.</li>\n</ul>\n"
  },
  "elements-polygon.blurScope": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>The range of fade out when <code class=\"codespan\">focus</code> is enabled. Support the following configurations</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code></li>\n<li><code class=\"codespan\">&#39;series&#39;</code></li>\n<li><code class=\"codespan\">&#39;global&#39;</code></li>\n</ul>\n"
  },
  "elements-polyline": {
    "desc": "<p>Polyline element.</p>\n"
  },
  "elements-polyline.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-polyline.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "elements-polyline.$action": {
    "desc": "<p>Specify the operation should be performed to the element when calling <code class=\"codespan\">setOption</code>.\nDefault value is &#39;merge&#39;, other values can be &#39;replace&#39; or &#39;remove&#39;.</p>\n<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>: merge the given option to existing element (if any), otherwise create a new element.</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>: create a new element according to the given option and replace the existing element (if any).</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>: delete the existing element (if any).</li>\n</ul>\n"
  },
  "elements-polyline.x": {
    "desc": "<p>x position of element. In pixels.</p>\n"
  },
  "elements-polyline.y": {
    "desc": "<p>y position of element. In pixels.</p>\n"
  },
  "elements-polyline.rotation": {
    "desc": "<p>Degree value of rotation.</p>\n"
  },
  "elements-polyline.scaleX": {
    "desc": "<p>Scale on x.</p>\n"
  },
  "elements-polyline.scaleY": {
    "desc": "<p>Scale on y.</p>\n"
  },
  "elements-polyline.originX": {
    "desc": "<p>x value of element scale and rotation origin. In pixels</p>\n"
  },
  "elements-polyline.originY": {
    "desc": "<p>y value of element scale and rotation origin. In pixels.</p>\n"
  },
  "elements-polyline.transition": {
    "desc": "<p>You can specify that all properties have transition animations turned on with `&#39;all&#39;&#39;, or you can specify a single property or an array of properties.</p>\n<p>The properties can be:</p>\n<p>Transform related properties:<code class=\"codespan\">&#39;x&#39;</code>, <code class=\"codespan\">&#39;y&#39;</code>, <code class=\"codespan\">&#39;scaleX&#39;</code>, <code class=\"codespan\">&#39;scaleY&#39;</code>, <code class=\"codespan\">&#39;rotation&#39;</code>, <code class=\"codespan\">&#39;originX&#39;</code>, <code class=\"codespan\">&#39;originY&#39;</code>. For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    x: 100,\n    y: 200,\n    transition: [&#39;x&#39;, &#39;y&#39;]\n}\n</code></pre>\n<p>Shortcut to transition all of the properties in <a href=\"#graphic.elements-polyline.shape\"><code class=\"codespan\">&#39;shape&#39;</code></a>, <a href=\"#graphic.elements-polyline.style\">&#39;<code class=\"codespan\">style&#39;</code></a>, <a href=\"#graphic.elements-polyline.extra\"><code class=\"codespan\">&#39;extra&#39;</code></a>. For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { // ... },\n    // Indicate that all props in `shape` will\n    // have transition animation.\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n<p>In the custom series. <code class=\"codespan\">&#39;x&#39;</code> and <code class=\"codespan\">&#39;y&#39;</code> are transitioned by default. If you want to disable the default transition, just set it as: <code class=\"codespan\">transition: []</code>.</p>\n<p>See this <a href=\"https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a> please.</p>\n"
  },
  "elements-polyline.enterFrom": {
    "desc": "<p>Initial properties for enter animation.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    enterFrom: {\n        // Fade in\n        style: { opacity: 0 },\n        // Slide in from left\n        x: 0\n    }\n}\n</code></pre>\n"
  },
  "elements-polyline.leaveTo": {
    "desc": "<p>End properties for leave animation.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    leaveTo: {\n        // Fade out\n        style: { opacity: 0 },\n        // Slide out to right\n        x: 200\n    }\n}\n</code></pre>\n"
  },
  "elements-polyline.enterAnimation": {
    "desc": "<p>Configurations of enter animation.</p>\n"
  },
  "elements-polyline.enterAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-polyline.enterAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-polyline.enterAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-polyline.updateAnimation": {
    "desc": "<p>Configurations of update animation.</p>\n"
  },
  "elements-polyline.updateAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-polyline.updateAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-polyline.updateAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-polyline.leaveAnimation": {
    "desc": "<p>Configurations of leave animation.</p>\n"
  },
  "elements-polyline.leaveAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-polyline.leaveAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-polyline.leaveAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-polyline.keyframeAnimation": {
    "desc": "<p>Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">keyframeAnimation: [{\n    // Using scale for breath animation.\n    duration: 1000,\n    loop: true,\n    keyframes: [{\n        percent: 0.5,\n        easing: &#39;sinusoidalInOut&#39;,\n        scaleX: 0.1,\n        scaleY: 0.1\n    }, {\n        percent: 1,\n        easing: &#39;sinusoidalInOut&#39;,\n        scaleX: 1,\n        scaleY: 1\n    }]\n}, {\n    // Translate animation.\n    duration: 2000,\n    loop: true,\n    keyframes: [{\n        percent: 0,\n        x: 10\n    }, {\n        percent: 1,\n        x: 100\n    }]\n}]\n\n</code></pre>\n<p>If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.</p>\n"
  },
  "elements-polyline.keyframeAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-polyline.keyframeAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-polyline.keyframeAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-polyline.keyframeAnimation.loop": {
    "desc": "<p>If loop the keyframe animation.</p>\n"
  },
  "elements-polyline.keyframeAnimation.keyframes": {
    "desc": "<p>The keyframes of the animation. Each item in the array is a keyframe in the following format.</p>\n<pre><code class=\"lang-ts\">interface Keyframe {\n    // Keyframe position. 0 is the first frame, 1 is the last frame\n    // The time of keyframe is percent * duration + delay\n    percent: number\n    // Easing function from the last keyframe to this keyframe. Optional\n    easing?: number\n\n    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.\n}\n</code></pre>\n"
  },
  "elements-polyline.left": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polyline.left\">left</a> and <a href=\"#graphic.elements-polyline.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polyline.left\">left</a> or <a href=\"#graphic.elements-polyline.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polyline.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-polyline.right": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polyline.left\">left</a> and <a href=\"#graphic.elements-polyline.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polyline.left\">left</a> or <a href=\"#graphic.elements-polyline.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polyline.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-polyline.top": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polyline.top\">top</a> and <a href=\"#graphic.elements-polyline.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polyline.top\">top</a> or <a href=\"#graphic.elements-polyline.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polyline.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-polyline.bottom": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polyline.top\">top</a> and <a href=\"#graphic.elements-polyline.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polyline.top\">top</a> or <a href=\"#graphic.elements-polyline.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polyline.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-polyline.bounding": {
    "desc": "<p>Used to specify whether the entire transformed element (containing children if is group) is confined in its container.</p>\n<p>See sample:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/en/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"></iframe>\n\n\n<p>Optional values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>: (default)\n  Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>:\n  Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.</p>\n</li>\n</ul>\n"
  },
  "elements-polyline.z": {
    "desc": "<p>z value of the elements, determine the overlap order.</p>\n"
  },
  "elements-polyline.zlevel": {
    "desc": "<p>Determine which canvas layer this element should be in.</p>\n<p>Notice: Multiple canvas layer may affect performance.</p>\n"
  },
  "elements-polyline.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-ts\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-polyline.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "elements-polyline.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "elements-polyline.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "elements-polyline.textContent": {
    "desc": "<p>Text block attached to an element and layout based on the element by <code class=\"codespan\">textConfig</code>.</p>\n<p>The props the the same as <a href=\"option.html#graphic.elements-text\" target=\"_blank\">text</a>.</p>\n"
  },
  "elements-polyline.textConfig.position": {
    "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
  },
  "elements-polyline.textConfig.rotation": {
    "desc": "<p>Rotation of <code class=\"codespan\">textContent</code>. In radian.</p>\n"
  },
  "elements-polyline.textConfig.layoutRect": {
    "desc": "<p>Rect that <code class=\"codespan\">textContent</code> will be positioned.\nDefault to be the bounding box of host element.</p>\n<pre><code class=\"lang-ts\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
  },
  "elements-polyline.textConfig.offset": {
    "desc": "<p>Offset of the <code class=\"codespan\">textContent</code>.</p>\n<p>The difference of <code class=\"codespan\">offset</code> and <code class=\"codespan\">position</code> is that <code class=\"codespan\">offset</code> will be applied in the rotation.</p>\n"
  },
  "elements-polyline.textConfig.origin": {
    "desc": "<p><code class=\"codespan\">origin</code> is relative to the bounding box of the host element.\nCan be percent value. Relative to the bounding box.\nIf <code class=\"codespan\">&#39;center&#39;</code> specified, it will be center of the bounding box.</p>\n<p>Only available when position and rotation are both set.</p>\n<ul>\n<li>like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
  },
  "elements-polyline.textConfig.distance": {
    "desc": "<p>Distance to the <code class=\"codespan\">layoutRect</code>。</p>\n"
  },
  "elements-polyline.textConfig.local": {
    "desc": "<p>If <code class=\"codespan\">true</code>, it will apply host&#39;s transform.</p>\n"
  },
  "elements-polyline.textConfig.insideFill": {
    "desc": "<p><code class=\"codespan\">insideFill</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is <code class=\"codespan\">&quot;inside&quot;</code>, its final <code class=\"codespan\">fill</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\nIn most cases, &quot;auto-calculated-fill&quot; is white.</p>\n"
  },
  "elements-polyline.textConfig.insideStroke": {
    "desc": "<p><code class=\"codespan\">insideStroke</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is <code class=\"codespan\">&quot;inside&quot;</code>, its final <code class=\"codespan\">stroke</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>The rule of getting &quot;auto-calculated-stroke&quot;:</p>\n<ul>\n<li>If<ul>\n<li>(A) the <code class=\"codespan\">fill</code> is specified in style (either in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>or (B) needed to draw text background (either defined in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>&quot;auto-calculated-stroke&quot; will be null.</li>\n</ul>\n</li>\n<li>Otherwise<ul>\n<li>&quot;auto-calculated-stroke&quot; will be the same as <code class=\"codespan\">fill</code> of this element if possible, or null.</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-polyline.textConfig.outsideFill": {
    "desc": "<p><code class=\"codespan\">outsideFill</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is &quot;inside&quot;, its final <code class=\"codespan\">fill</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
  },
  "elements-polyline.textConfig.outsideStroke": {
    "desc": "<p><code class=\"codespan\">outsideStroke</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is not &quot;inside&quot;, its final <code class=\"codespan\">stroke</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>The rule of getting &quot;auto-calculated-stroke&quot;:</p>\n<ul>\n<li>If<ul>\n<li>(A) the <code class=\"codespan\">fill</code> is specified in style (either in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>or (B) needed to draw text background (either defined in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>&quot;auto-calculated-stroke&quot; will be null.</li>\n</ul>\n</li>\n<li>Otherwise<ul>\n<li>&quot;auto-calculated-stroke&quot; will be a near white color to distinguish &quot;front end&quot; label with messy background (like other text label, line or other graphic).</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-polyline.textConfig.inside": {
    "desc": "<p>Tell echarts that I can make sure this text is inside or not.</p>\n"
  },
  "elements-polyline.during": {
    "desc": "<p><code class=\"codespan\">during</code> callback enable users to set props to an element in each animation frame.</p>\n<pre><code class=\"lang-ts\">(duringAPI: CustomDuringAPI) =&gt; void\n\ninterface CustomDuringAPI {\n    // Set transform prop value.\n    // Transform prop see `TransformProp`.\n    setTransform(key: TransformProp, val: unknown): void;\n    // Get transform prop value of the current animation frame.\n    getTransform(key: TransformProp): unknown;\n    // Set shape prop value.\n    // Shape prop is like `{ type: &#39;rect&#39;, shape: { xxxProp: xxxValue } }`.\n    setShape(key: string, val: unknown): void;\n    // Get shape prop value of the current animation frame.\n    getShape(key: string): unknown;\n    // Set style prop value.\n    // Style prop is like `{ type: &#39;rect&#39;, style: { xxxProp: xxxValue } }`.\n    setStyle(key: string, val: unknown): void;\n    // Get style prop value of the current animation frame.\n    getStyle(key: string): unknown;\n    // Set extra prop value.\n    // Extra prop is like `{ type: &#39;rect&#39;, extra: { xxxProp: xxxValue } }`.\n    setExtra(key: string, val: unknown): void;\n    // Get extra prop value of the current animation frame.\n    getExtra(key: string): unknown;\n}\n\ntype TransformProp =\n    &#39;x&#39; | &#39;y&#39; | &#39;scaleX&#39; | &#39;scaleY&#39; | &#39;originX&#39; | &#39;originY&#39; | &#39;rotation&#39;;\n</code></pre>\n<p>In most cases users do not need this <code class=\"codespan\">during</code> callback. For example, if some props are specified in <a href=\"option.html#series-custom.renderItem.return_rect.transition\" target=\"_blank\">transition</a>, echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this <code class=\"codespan\">during</code> callback to customize them.</p>\n<p>For example, if users are using <a href=\"option.html#series-custom.renderItem.return_polygon\" target=\"_blank\">polygon</a> shape. The shape is described by <a href=\"option.html#series-custom.renderItem.return_polygon.shape.points\" target=\"_blank\">shape.points</a>, which is an points array like:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...]\n    },\n    // ...\n}\n</code></pre>\n<p>If users specify them into <a href=\"option.html#series-custom.renderItem.return_polygon.transition\" target=\"_blank\">transition</a> like:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...],\n    },\n    transition: &#39;shape&#39;\n    // ...\n}\n</code></pre>\n<p>Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the <code class=\"codespan\">during</code> callback like that:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: calculatePoints(initialDegree),\n        transition: &#39;points&#39;\n    },\n    extra: {\n        degree: nextDegree\n    },\n    // Make echarts interpolate `extra.degree` internally, based on which\n    // we calculate the `points` in each animation frame.\n    transition: &#39;extra&#39;,\n    during: function (duringAPI) {\n        var currentDegree = duringAPI.getExtra(&#39;degree&#39;);\n        duringAPI.setShape(calculatePoints(currentDegree));\n    }\n    // ...\n}\n</code></pre>\n<p>See this example <a href=\"https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a>.</p>\n"
  },
  "elements-polyline.cursor": {
    "desc": "\n\n<p>The mouse style when mouse hovers on an element, the same as <code class=\"codespan\">cursor</code> property in <code class=\"codespan\">CSS</code>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-polyline.draggable": {
    "desc": "<p>Can be dragged or not.</p>\n"
  },
  "elements-polyline.progressive": {
    "desc": "<p>Whether use progressive render to improve performance. Usually used when number of element is too large.</p>\n"
  },
  "elements-polyline.shape.points": {
    "desc": "<p>A list of points, which defines the shape, like <code class=\"codespan\">[[22, 44], [44, 55], [11, 44], ...]</code>.</p>\n"
  },
  "elements-polyline.shape.smooth": {
    "desc": "<p>Whether smooth the line.</p>\n<ul>\n<li>If the value is number, bezier interpolation is used, and the value specified the level of smooth, which is in the range of <code class=\"codespan\">[0, 1]</code>.</li>\n<li>If the value is <code class=\"codespan\">&#39;spline&#39;</code>, Catmull-Rom spline interpolation is used.</li>\n</ul>\n"
  },
  "elements-polyline.shape.smoothConstraint": {
    "desc": "<p>Whether prevent the smooth process cause the line out of the bounding box.</p>\n<p>Only works when <code class=\"codespan\">smooth</code> is <code class=\"codespan\">number</code> (bezier smooth).</p>\n"
  },
  "elements-polyline.shape.transition": {
    "desc": "<p>Can be a single property name or an array of property names.\nEnable transition animation when the specified properties changed.\nCan only specify properties that are under this <code class=\"codespan\">shape</code>.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        ...\n        // This two props will perform transition animation.\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>We can also specify all of the properties like this:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        ...\n    },\n    // Indicate that all props in `shape` will\n    // have transition animation.\n    transition: &#39;shape&#39;,\n};\n</code></pre>\n"
  },
  "elements-polyline.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-polyline.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "elements-polyline.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "elements-polyline.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "elements-polyline.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "elements-polyline.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "elements-polyline.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "elements-polyline.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "elements-polyline.style.transition": {
    "desc": "<p>Can be a single property name or an array of property names.\nEnable transition animation when the specified properties changed.\nCan only specify properties that are under this <code class=\"codespan\">style</code>.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        ...\n        // This two props will perform transition animation.\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>We can also specify all of the properties like this:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        ...\n    },\n    // Indicate that all props in `style` will\n    // have transition animation.\n    transition: &#39;style&#39;,\n};\n</code></pre>\n"
  },
  "elements-polyline.focus": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>When it&#39;s highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> Do not fade out other data, it&#39;s by default.</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> Only focus (not fade out) the element of the currently highlighted data.</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> Focus on all elements of the series which the currently highlighted data belongs to.</li>\n</ul>\n"
  },
  "elements-polyline.blurScope": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>The range of fade out when <code class=\"codespan\">focus</code> is enabled. Support the following configurations</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code></li>\n<li><code class=\"codespan\">&#39;series&#39;</code></li>\n<li><code class=\"codespan\">&#39;global&#39;</code></li>\n</ul>\n"
  },
  "elements-line": {
    "desc": "<p>Line element.</p>\n"
  },
  "elements-line.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-line.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "elements-line.$action": {
    "desc": "<p>Specify the operation should be performed to the element when calling <code class=\"codespan\">setOption</code>.\nDefault value is &#39;merge&#39;, other values can be &#39;replace&#39; or &#39;remove&#39;.</p>\n<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>: merge the given option to existing element (if any), otherwise create a new element.</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>: create a new element according to the given option and replace the existing element (if any).</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>: delete the existing element (if any).</li>\n</ul>\n"
  },
  "elements-line.x": {
    "desc": "<p>x position of element. In pixels.</p>\n"
  },
  "elements-line.y": {
    "desc": "<p>y position of element. In pixels.</p>\n"
  },
  "elements-line.rotation": {
    "desc": "<p>Degree value of rotation.</p>\n"
  },
  "elements-line.scaleX": {
    "desc": "<p>Scale on x.</p>\n"
  },
  "elements-line.scaleY": {
    "desc": "<p>Scale on y.</p>\n"
  },
  "elements-line.originX": {
    "desc": "<p>x value of element scale and rotation origin. In pixels</p>\n"
  },
  "elements-line.originY": {
    "desc": "<p>y value of element scale and rotation origin. In pixels.</p>\n"
  },
  "elements-line.transition": {
    "desc": "<p>You can specify that all properties have transition animations turned on with `&#39;all&#39;&#39;, or you can specify a single property or an array of properties.</p>\n<p>The properties can be:</p>\n<p>Transform related properties:<code class=\"codespan\">&#39;x&#39;</code>, <code class=\"codespan\">&#39;y&#39;</code>, <code class=\"codespan\">&#39;scaleX&#39;</code>, <code class=\"codespan\">&#39;scaleY&#39;</code>, <code class=\"codespan\">&#39;rotation&#39;</code>, <code class=\"codespan\">&#39;originX&#39;</code>, <code class=\"codespan\">&#39;originY&#39;</code>. For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    x: 100,\n    y: 200,\n    transition: [&#39;x&#39;, &#39;y&#39;]\n}\n</code></pre>\n<p>Shortcut to transition all of the properties in <a href=\"#graphic.elements-line.shape\"><code class=\"codespan\">&#39;shape&#39;</code></a>, <a href=\"#graphic.elements-line.style\">&#39;<code class=\"codespan\">style&#39;</code></a>, <a href=\"#graphic.elements-line.extra\"><code class=\"codespan\">&#39;extra&#39;</code></a>. For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { // ... },\n    // Indicate that all props in `shape` will\n    // have transition animation.\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n<p>In the custom series. <code class=\"codespan\">&#39;x&#39;</code> and <code class=\"codespan\">&#39;y&#39;</code> are transitioned by default. If you want to disable the default transition, just set it as: <code class=\"codespan\">transition: []</code>.</p>\n<p>See this <a href=\"https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a> please.</p>\n"
  },
  "elements-line.enterFrom": {
    "desc": "<p>Initial properties for enter animation.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    enterFrom: {\n        // Fade in\n        style: { opacity: 0 },\n        // Slide in from left\n        x: 0\n    }\n}\n</code></pre>\n"
  },
  "elements-line.leaveTo": {
    "desc": "<p>End properties for leave animation.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    leaveTo: {\n        // Fade out\n        style: { opacity: 0 },\n        // Slide out to right\n        x: 200\n    }\n}\n</code></pre>\n"
  },
  "elements-line.enterAnimation": {
    "desc": "<p>Configurations of enter animation.</p>\n"
  },
  "elements-line.enterAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-line.enterAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-line.enterAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-line.updateAnimation": {
    "desc": "<p>Configurations of update animation.</p>\n"
  },
  "elements-line.updateAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-line.updateAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-line.updateAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-line.leaveAnimation": {
    "desc": "<p>Configurations of leave animation.</p>\n"
  },
  "elements-line.leaveAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-line.leaveAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-line.leaveAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-line.keyframeAnimation": {
    "desc": "<p>Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">keyframeAnimation: [{\n    // Using scale for breath animation.\n    duration: 1000,\n    loop: true,\n    keyframes: [{\n        percent: 0.5,\n        easing: &#39;sinusoidalInOut&#39;,\n        scaleX: 0.1,\n        scaleY: 0.1\n    }, {\n        percent: 1,\n        easing: &#39;sinusoidalInOut&#39;,\n        scaleX: 1,\n        scaleY: 1\n    }]\n}, {\n    // Translate animation.\n    duration: 2000,\n    loop: true,\n    keyframes: [{\n        percent: 0,\n        x: 10\n    }, {\n        percent: 1,\n        x: 100\n    }]\n}]\n\n</code></pre>\n<p>If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.</p>\n"
  },
  "elements-line.keyframeAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-line.keyframeAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-line.keyframeAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-line.keyframeAnimation.loop": {
    "desc": "<p>If loop the keyframe animation.</p>\n"
  },
  "elements-line.keyframeAnimation.keyframes": {
    "desc": "<p>The keyframes of the animation. Each item in the array is a keyframe in the following format.</p>\n<pre><code class=\"lang-ts\">interface Keyframe {\n    // Keyframe position. 0 is the first frame, 1 is the last frame\n    // The time of keyframe is percent * duration + delay\n    percent: number\n    // Easing function from the last keyframe to this keyframe. Optional\n    easing?: number\n\n    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.\n}\n</code></pre>\n"
  },
  "elements-line.left": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-line.left\">left</a> and <a href=\"#graphic.elements-line.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-line.left\">left</a> or <a href=\"#graphic.elements-line.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-line.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-line.right": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-line.left\">left</a> and <a href=\"#graphic.elements-line.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-line.left\">left</a> or <a href=\"#graphic.elements-line.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-line.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-line.top": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-line.top\">top</a> and <a href=\"#graphic.elements-line.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-line.top\">top</a> or <a href=\"#graphic.elements-line.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-line.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-line.bottom": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-line.top\">top</a> and <a href=\"#graphic.elements-line.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-line.top\">top</a> or <a href=\"#graphic.elements-line.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-line.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-line.bounding": {
    "desc": "<p>Used to specify whether the entire transformed element (containing children if is group) is confined in its container.</p>\n<p>See sample:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/en/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"></iframe>\n\n\n<p>Optional values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>: (default)\n  Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>:\n  Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.</p>\n</li>\n</ul>\n"
  },
  "elements-line.z": {
    "desc": "<p>z value of the elements, determine the overlap order.</p>\n"
  },
  "elements-line.zlevel": {
    "desc": "<p>Determine which canvas layer this element should be in.</p>\n<p>Notice: Multiple canvas layer may affect performance.</p>\n"
  },
  "elements-line.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-ts\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-line.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "elements-line.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "elements-line.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "elements-line.textContent": {
    "desc": "<p>Text block attached to an element and layout based on the element by <code class=\"codespan\">textConfig</code>.</p>\n<p>The props the the same as <a href=\"option.html#graphic.elements-text\" target=\"_blank\">text</a>.</p>\n"
  },
  "elements-line.textConfig.position": {
    "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
  },
  "elements-line.textConfig.rotation": {
    "desc": "<p>Rotation of <code class=\"codespan\">textContent</code>. In radian.</p>\n"
  },
  "elements-line.textConfig.layoutRect": {
    "desc": "<p>Rect that <code class=\"codespan\">textContent</code> will be positioned.\nDefault to be the bounding box of host element.</p>\n<pre><code class=\"lang-ts\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
  },
  "elements-line.textConfig.offset": {
    "desc": "<p>Offset of the <code class=\"codespan\">textContent</code>.</p>\n<p>The difference of <code class=\"codespan\">offset</code> and <code class=\"codespan\">position</code> is that <code class=\"codespan\">offset</code> will be applied in the rotation.</p>\n"
  },
  "elements-line.textConfig.origin": {
    "desc": "<p><code class=\"codespan\">origin</code> is relative to the bounding box of the host element.\nCan be percent value. Relative to the bounding box.\nIf <code class=\"codespan\">&#39;center&#39;</code> specified, it will be center of the bounding box.</p>\n<p>Only available when position and rotation are both set.</p>\n<ul>\n<li>like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
  },
  "elements-line.textConfig.distance": {
    "desc": "<p>Distance to the <code class=\"codespan\">layoutRect</code>。</p>\n"
  },
  "elements-line.textConfig.local": {
    "desc": "<p>If <code class=\"codespan\">true</code>, it will apply host&#39;s transform.</p>\n"
  },
  "elements-line.textConfig.insideFill": {
    "desc": "<p><code class=\"codespan\">insideFill</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is <code class=\"codespan\">&quot;inside&quot;</code>, its final <code class=\"codespan\">fill</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\nIn most cases, &quot;auto-calculated-fill&quot; is white.</p>\n"
  },
  "elements-line.textConfig.insideStroke": {
    "desc": "<p><code class=\"codespan\">insideStroke</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is <code class=\"codespan\">&quot;inside&quot;</code>, its final <code class=\"codespan\">stroke</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>The rule of getting &quot;auto-calculated-stroke&quot;:</p>\n<ul>\n<li>If<ul>\n<li>(A) the <code class=\"codespan\">fill</code> is specified in style (either in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>or (B) needed to draw text background (either defined in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>&quot;auto-calculated-stroke&quot; will be null.</li>\n</ul>\n</li>\n<li>Otherwise<ul>\n<li>&quot;auto-calculated-stroke&quot; will be the same as <code class=\"codespan\">fill</code> of this element if possible, or null.</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-line.textConfig.outsideFill": {
    "desc": "<p><code class=\"codespan\">outsideFill</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is &quot;inside&quot;, its final <code class=\"codespan\">fill</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
  },
  "elements-line.textConfig.outsideStroke": {
    "desc": "<p><code class=\"codespan\">outsideStroke</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is not &quot;inside&quot;, its final <code class=\"codespan\">stroke</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>The rule of getting &quot;auto-calculated-stroke&quot;:</p>\n<ul>\n<li>If<ul>\n<li>(A) the <code class=\"codespan\">fill</code> is specified in style (either in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>or (B) needed to draw text background (either defined in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>&quot;auto-calculated-stroke&quot; will be null.</li>\n</ul>\n</li>\n<li>Otherwise<ul>\n<li>&quot;auto-calculated-stroke&quot; will be a near white color to distinguish &quot;front end&quot; label with messy background (like other text label, line or other graphic).</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-line.textConfig.inside": {
    "desc": "<p>Tell echarts that I can make sure this text is inside or not.</p>\n"
  },
  "elements-line.during": {
    "desc": "<p><code class=\"codespan\">during</code> callback enable users to set props to an element in each animation frame.</p>\n<pre><code class=\"lang-ts\">(duringAPI: CustomDuringAPI) =&gt; void\n\ninterface CustomDuringAPI {\n    // Set transform prop value.\n    // Transform prop see `TransformProp`.\n    setTransform(key: TransformProp, val: unknown): void;\n    // Get transform prop value of the current animation frame.\n    getTransform(key: TransformProp): unknown;\n    // Set shape prop value.\n    // Shape prop is like `{ type: &#39;rect&#39;, shape: { xxxProp: xxxValue } }`.\n    setShape(key: string, val: unknown): void;\n    // Get shape prop value of the current animation frame.\n    getShape(key: string): unknown;\n    // Set style prop value.\n    // Style prop is like `{ type: &#39;rect&#39;, style: { xxxProp: xxxValue } }`.\n    setStyle(key: string, val: unknown): void;\n    // Get style prop value of the current animation frame.\n    getStyle(key: string): unknown;\n    // Set extra prop value.\n    // Extra prop is like `{ type: &#39;rect&#39;, extra: { xxxProp: xxxValue } }`.\n    setExtra(key: string, val: unknown): void;\n    // Get extra prop value of the current animation frame.\n    getExtra(key: string): unknown;\n}\n\ntype TransformProp =\n    &#39;x&#39; | &#39;y&#39; | &#39;scaleX&#39; | &#39;scaleY&#39; | &#39;originX&#39; | &#39;originY&#39; | &#39;rotation&#39;;\n</code></pre>\n<p>In most cases users do not need this <code class=\"codespan\">during</code> callback. For example, if some props are specified in <a href=\"option.html#series-custom.renderItem.return_rect.transition\" target=\"_blank\">transition</a>, echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this <code class=\"codespan\">during</code> callback to customize them.</p>\n<p>For example, if users are using <a href=\"option.html#series-custom.renderItem.return_polygon\" target=\"_blank\">polygon</a> shape. The shape is described by <a href=\"option.html#series-custom.renderItem.return_polygon.shape.points\" target=\"_blank\">shape.points</a>, which is an points array like:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...]\n    },\n    // ...\n}\n</code></pre>\n<p>If users specify them into <a href=\"option.html#series-custom.renderItem.return_polygon.transition\" target=\"_blank\">transition</a> like:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...],\n    },\n    transition: &#39;shape&#39;\n    // ...\n}\n</code></pre>\n<p>Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the <code class=\"codespan\">during</code> callback like that:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: calculatePoints(initialDegree),\n        transition: &#39;points&#39;\n    },\n    extra: {\n        degree: nextDegree\n    },\n    // Make echarts interpolate `extra.degree` internally, based on which\n    // we calculate the `points` in each animation frame.\n    transition: &#39;extra&#39;,\n    during: function (duringAPI) {\n        var currentDegree = duringAPI.getExtra(&#39;degree&#39;);\n        duringAPI.setShape(calculatePoints(currentDegree));\n    }\n    // ...\n}\n</code></pre>\n<p>See this example <a href=\"https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a>.</p>\n"
  },
  "elements-line.cursor": {
    "desc": "\n\n<p>The mouse style when mouse hovers on an element, the same as <code class=\"codespan\">cursor</code> property in <code class=\"codespan\">CSS</code>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-line.draggable": {
    "desc": "<p>Can be dragged or not.</p>\n"
  },
  "elements-line.progressive": {
    "desc": "<p>Whether use progressive render to improve performance. Usually used when number of element is too large.</p>\n"
  },
  "elements-line.shape.x1": {
    "desc": "<p>x value of the start point.</p>\n"
  },
  "elements-line.shape.y1": {
    "desc": "<p>y value of the start point.</p>\n"
  },
  "elements-line.shape.x2": {
    "desc": "<p>x value of the end point.</p>\n"
  },
  "elements-line.shape.y2": {
    "desc": "<p>y value of the end point.</p>\n"
  },
  "elements-line.shape.percent": {
    "desc": "<p>Specify the percentage of drawing, useful in animation.</p>\n<p>Value range: [0, 1].</p>\n"
  },
  "elements-line.shape.transition": {
    "desc": "<p>Can be a single property name or an array of property names.\nEnable transition animation when the specified properties changed.\nCan only specify properties that are under this <code class=\"codespan\">shape</code>.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        ...\n        // This two props will perform transition animation.\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>We can also specify all of the properties like this:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        ...\n    },\n    // Indicate that all props in `shape` will\n    // have transition animation.\n    transition: &#39;shape&#39;,\n};\n</code></pre>\n"
  },
  "elements-line.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-line.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "elements-line.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "elements-line.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "elements-line.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "elements-line.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "elements-line.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "elements-line.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "elements-line.style.transition": {
    "desc": "<p>Can be a single property name or an array of property names.\nEnable transition animation when the specified properties changed.\nCan only specify properties that are under this <code class=\"codespan\">style</code>.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        ...\n        // This two props will perform transition animation.\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>We can also specify all of the properties like this:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        ...\n    },\n    // Indicate that all props in `style` will\n    // have transition animation.\n    transition: &#39;style&#39;,\n};\n</code></pre>\n"
  },
  "elements-line.focus": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>When it&#39;s highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> Do not fade out other data, it&#39;s by default.</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> Only focus (not fade out) the element of the currently highlighted data.</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> Focus on all elements of the series which the currently highlighted data belongs to.</li>\n</ul>\n"
  },
  "elements-line.blurScope": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>The range of fade out when <code class=\"codespan\">focus</code> is enabled. Support the following configurations</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code></li>\n<li><code class=\"codespan\">&#39;series&#39;</code></li>\n<li><code class=\"codespan\">&#39;global&#39;</code></li>\n</ul>\n"
  },
  "elements-bezierCurve": {
    "desc": "<p>Quadratic bezier curve or cubic bezier curve.</p>\n"
  },
  "elements-bezierCurve.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-bezierCurve.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "elements-bezierCurve.$action": {
    "desc": "<p>Specify the operation should be performed to the element when calling <code class=\"codespan\">setOption</code>.\nDefault value is &#39;merge&#39;, other values can be &#39;replace&#39; or &#39;remove&#39;.</p>\n<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>: merge the given option to existing element (if any), otherwise create a new element.</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>: create a new element according to the given option and replace the existing element (if any).</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>: delete the existing element (if any).</li>\n</ul>\n"
  },
  "elements-bezierCurve.x": {
    "desc": "<p>x position of element. In pixels.</p>\n"
  },
  "elements-bezierCurve.y": {
    "desc": "<p>y position of element. In pixels.</p>\n"
  },
  "elements-bezierCurve.rotation": {
    "desc": "<p>Degree value of rotation.</p>\n"
  },
  "elements-bezierCurve.scaleX": {
    "desc": "<p>Scale on x.</p>\n"
  },
  "elements-bezierCurve.scaleY": {
    "desc": "<p>Scale on y.</p>\n"
  },
  "elements-bezierCurve.originX": {
    "desc": "<p>x value of element scale and rotation origin. In pixels</p>\n"
  },
  "elements-bezierCurve.originY": {
    "desc": "<p>y value of element scale and rotation origin. In pixels.</p>\n"
  },
  "elements-bezierCurve.transition": {
    "desc": "<p>You can specify that all properties have transition animations turned on with `&#39;all&#39;&#39;, or you can specify a single property or an array of properties.</p>\n<p>The properties can be:</p>\n<p>Transform related properties:<code class=\"codespan\">&#39;x&#39;</code>, <code class=\"codespan\">&#39;y&#39;</code>, <code class=\"codespan\">&#39;scaleX&#39;</code>, <code class=\"codespan\">&#39;scaleY&#39;</code>, <code class=\"codespan\">&#39;rotation&#39;</code>, <code class=\"codespan\">&#39;originX&#39;</code>, <code class=\"codespan\">&#39;originY&#39;</code>. For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    x: 100,\n    y: 200,\n    transition: [&#39;x&#39;, &#39;y&#39;]\n}\n</code></pre>\n<p>Shortcut to transition all of the properties in <a href=\"#graphic.elements-bezierCurve.shape\"><code class=\"codespan\">&#39;shape&#39;</code></a>, <a href=\"#graphic.elements-bezierCurve.style\">&#39;<code class=\"codespan\">style&#39;</code></a>, <a href=\"#graphic.elements-bezierCurve.extra\"><code class=\"codespan\">&#39;extra&#39;</code></a>. For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: { // ... },\n    // Indicate that all props in `shape` will\n    // have transition animation.\n    transition: &#39;shape&#39;,\n}\n</code></pre>\n<p>In the custom series. <code class=\"codespan\">&#39;x&#39;</code> and <code class=\"codespan\">&#39;y&#39;</code> are transitioned by default. If you want to disable the default transition, just set it as: <code class=\"codespan\">transition: []</code>.</p>\n<p>See this <a href=\"https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a> please.</p>\n"
  },
  "elements-bezierCurve.enterFrom": {
    "desc": "<p>Initial properties for enter animation.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    enterFrom: {\n        // Fade in\n        style: { opacity: 0 },\n        // Slide in from left\n        x: 0\n    }\n}\n</code></pre>\n"
  },
  "elements-bezierCurve.leaveTo": {
    "desc": "<p>End properties for leave animation.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;circle&#39;,\n    x: 100,\n    leaveTo: {\n        // Fade out\n        style: { opacity: 0 },\n        // Slide out to right\n        x: 200\n    }\n}\n</code></pre>\n"
  },
  "elements-bezierCurve.enterAnimation": {
    "desc": "<p>Configurations of enter animation.</p>\n"
  },
  "elements-bezierCurve.enterAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-bezierCurve.enterAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-bezierCurve.enterAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-bezierCurve.updateAnimation": {
    "desc": "<p>Configurations of update animation.</p>\n"
  },
  "elements-bezierCurve.updateAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-bezierCurve.updateAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-bezierCurve.updateAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-bezierCurve.leaveAnimation": {
    "desc": "<p>Configurations of leave animation.</p>\n"
  },
  "elements-bezierCurve.leaveAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-bezierCurve.leaveAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-bezierCurve.leaveAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-bezierCurve.keyframeAnimation": {
    "desc": "<p>Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">keyframeAnimation: [{\n    // Using scale for breath animation.\n    duration: 1000,\n    loop: true,\n    keyframes: [{\n        percent: 0.5,\n        easing: &#39;sinusoidalInOut&#39;,\n        scaleX: 0.1,\n        scaleY: 0.1\n    }, {\n        percent: 1,\n        easing: &#39;sinusoidalInOut&#39;,\n        scaleX: 1,\n        scaleY: 1\n    }]\n}, {\n    // Translate animation.\n    duration: 2000,\n    loop: true,\n    keyframes: [{\n        percent: 0,\n        x: 10\n    }, {\n        percent: 1,\n        x: 100\n    }]\n}]\n\n</code></pre>\n<p>If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.</p>\n"
  },
  "elements-bezierCurve.keyframeAnimation.duration": {
    "desc": "<p>动画时长，单位 ms</p>\n"
  },
  "elements-bezierCurve.keyframeAnimation.easing": {
    "desc": "<p>动画缓动。不同的缓动效果可以参考 <a href=\"https://echarts.apache.org/examples/en/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n"
  },
  "elements-bezierCurve.keyframeAnimation.delay": {
    "desc": "<p>动画延迟时长，单位 ms</p>\n"
  },
  "elements-bezierCurve.keyframeAnimation.loop": {
    "desc": "<p>If loop the keyframe animation.</p>\n"
  },
  "elements-bezierCurve.keyframeAnimation.keyframes": {
    "desc": "<p>The keyframes of the animation. Each item in the array is a keyframe in the following format.</p>\n<pre><code class=\"lang-ts\">interface Keyframe {\n    // Keyframe position. 0 is the first frame, 1 is the last frame\n    // The time of keyframe is percent * duration + delay\n    percent: number\n    // Easing function from the last keyframe to this keyframe. Optional\n    easing?: number\n\n    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.\n}\n</code></pre>\n"
  },
  "elements-bezierCurve.left": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-bezierCurve.left\">left</a> and <a href=\"#graphic.elements-bezierCurve.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-bezierCurve.left\">left</a> or <a href=\"#graphic.elements-bezierCurve.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-bezierCurve.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-bezierCurve.right": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-bezierCurve.left\">left</a> and <a href=\"#graphic.elements-bezierCurve.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-bezierCurve.left\">left</a> or <a href=\"#graphic.elements-bezierCurve.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-bezierCurve.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-bezierCurve.top": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-bezierCurve.top\">top</a> and <a href=\"#graphic.elements-bezierCurve.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-bezierCurve.top\">top</a> or <a href=\"#graphic.elements-bezierCurve.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-bezierCurve.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-bezierCurve.bottom": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-bezierCurve.top\">top</a> and <a href=\"#graphic.elements-bezierCurve.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-bezierCurve.top\">top</a> or <a href=\"#graphic.elements-bezierCurve.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-bezierCurve.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-bezierCurve.bounding": {
    "desc": "<p>Used to specify whether the entire transformed element (containing children if is group) is confined in its container.</p>\n<p>See sample:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/en/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"></iframe>\n\n\n<p>Optional values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>: (default)\n  Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>:\n  Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.</p>\n</li>\n</ul>\n"
  },
  "elements-bezierCurve.z": {
    "desc": "<p>z value of the elements, determine the overlap order.</p>\n"
  },
  "elements-bezierCurve.zlevel": {
    "desc": "<p>Determine which canvas layer this element should be in.</p>\n<p>Notice: Multiple canvas layer may affect performance.</p>\n"
  },
  "elements-bezierCurve.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-ts\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-bezierCurve.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "elements-bezierCurve.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "elements-bezierCurve.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "elements-bezierCurve.textContent": {
    "desc": "<p>Text block attached to an element and layout based on the element by <code class=\"codespan\">textConfig</code>.</p>\n<p>The props the the same as <a href=\"option.html#graphic.elements-text\" target=\"_blank\">text</a>.</p>\n"
  },
  "elements-bezierCurve.textConfig.position": {
    "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
  },
  "elements-bezierCurve.textConfig.rotation": {
    "desc": "<p>Rotation of <code class=\"codespan\">textContent</code>. In radian.</p>\n"
  },
  "elements-bezierCurve.textConfig.layoutRect": {
    "desc": "<p>Rect that <code class=\"codespan\">textContent</code> will be positioned.\nDefault to be the bounding box of host element.</p>\n<pre><code class=\"lang-ts\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
  },
  "elements-bezierCurve.textConfig.offset": {
    "desc": "<p>Offset of the <code class=\"codespan\">textContent</code>.</p>\n<p>The difference of <code class=\"codespan\">offset</code> and <code class=\"codespan\">position</code> is that <code class=\"codespan\">offset</code> will be applied in the rotation.</p>\n"
  },
  "elements-bezierCurve.textConfig.origin": {
    "desc": "<p><code class=\"codespan\">origin</code> is relative to the bounding box of the host element.\nCan be percent value. Relative to the bounding box.\nIf <code class=\"codespan\">&#39;center&#39;</code> specified, it will be center of the bounding box.</p>\n<p>Only available when position and rotation are both set.</p>\n<ul>\n<li>like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
  },
  "elements-bezierCurve.textConfig.distance": {
    "desc": "<p>Distance to the <code class=\"codespan\">layoutRect</code>。</p>\n"
  },
  "elements-bezierCurve.textConfig.local": {
    "desc": "<p>If <code class=\"codespan\">true</code>, it will apply host&#39;s transform.</p>\n"
  },
  "elements-bezierCurve.textConfig.insideFill": {
    "desc": "<p><code class=\"codespan\">insideFill</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is <code class=\"codespan\">&quot;inside&quot;</code>, its final <code class=\"codespan\">fill</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\nIn most cases, &quot;auto-calculated-fill&quot; is white.</p>\n"
  },
  "elements-bezierCurve.textConfig.insideStroke": {
    "desc": "<p><code class=\"codespan\">insideStroke</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is <code class=\"codespan\">&quot;inside&quot;</code>, its final <code class=\"codespan\">stroke</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>The rule of getting &quot;auto-calculated-stroke&quot;:</p>\n<ul>\n<li>If<ul>\n<li>(A) the <code class=\"codespan\">fill</code> is specified in style (either in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>or (B) needed to draw text background (either defined in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>&quot;auto-calculated-stroke&quot; will be null.</li>\n</ul>\n</li>\n<li>Otherwise<ul>\n<li>&quot;auto-calculated-stroke&quot; will be the same as <code class=\"codespan\">fill</code> of this element if possible, or null.</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-bezierCurve.textConfig.outsideFill": {
    "desc": "<p><code class=\"codespan\">outsideFill</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is &quot;inside&quot;, its final <code class=\"codespan\">fill</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
  },
  "elements-bezierCurve.textConfig.outsideStroke": {
    "desc": "<p><code class=\"codespan\">outsideStroke</code> is a color string or left empty.</p>\n<p>If a <code class=\"codespan\">textContent</code> is not &quot;inside&quot;, its final <code class=\"codespan\">stroke</code> will be picked by this priority:\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>The rule of getting &quot;auto-calculated-stroke&quot;:</p>\n<ul>\n<li>If<ul>\n<li>(A) the <code class=\"codespan\">fill</code> is specified in style (either in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>or (B) needed to draw text background (either defined in <code class=\"codespan\">textContent.style</code> or <code class=\"codespan\">textContent.style.rich</code>)</li>\n<li>&quot;auto-calculated-stroke&quot; will be null.</li>\n</ul>\n</li>\n<li>Otherwise<ul>\n<li>&quot;auto-calculated-stroke&quot; will be a near white color to distinguish &quot;front end&quot; label with messy background (like other text label, line or other graphic).</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-bezierCurve.textConfig.inside": {
    "desc": "<p>Tell echarts that I can make sure this text is inside or not.</p>\n"
  },
  "elements-bezierCurve.during": {
    "desc": "<p><code class=\"codespan\">during</code> callback enable users to set props to an element in each animation frame.</p>\n<pre><code class=\"lang-ts\">(duringAPI: CustomDuringAPI) =&gt; void\n\ninterface CustomDuringAPI {\n    // Set transform prop value.\n    // Transform prop see `TransformProp`.\n    setTransform(key: TransformProp, val: unknown): void;\n    // Get transform prop value of the current animation frame.\n    getTransform(key: TransformProp): unknown;\n    // Set shape prop value.\n    // Shape prop is like `{ type: &#39;rect&#39;, shape: { xxxProp: xxxValue } }`.\n    setShape(key: string, val: unknown): void;\n    // Get shape prop value of the current animation frame.\n    getShape(key: string): unknown;\n    // Set style prop value.\n    // Style prop is like `{ type: &#39;rect&#39;, style: { xxxProp: xxxValue } }`.\n    setStyle(key: string, val: unknown): void;\n    // Get style prop value of the current animation frame.\n    getStyle(key: string): unknown;\n    // Set extra prop value.\n    // Extra prop is like `{ type: &#39;rect&#39;, extra: { xxxProp: xxxValue } }`.\n    setExtra(key: string, val: unknown): void;\n    // Get extra prop value of the current animation frame.\n    getExtra(key: string): unknown;\n}\n\ntype TransformProp =\n    &#39;x&#39; | &#39;y&#39; | &#39;scaleX&#39; | &#39;scaleY&#39; | &#39;originX&#39; | &#39;originY&#39; | &#39;rotation&#39;;\n</code></pre>\n<p>In most cases users do not need this <code class=\"codespan\">during</code> callback. For example, if some props are specified in <a href=\"option.html#series-custom.renderItem.return_rect.transition\" target=\"_blank\">transition</a>, echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this <code class=\"codespan\">during</code> callback to customize them.</p>\n<p>For example, if users are using <a href=\"option.html#series-custom.renderItem.return_polygon\" target=\"_blank\">polygon</a> shape. The shape is described by <a href=\"option.html#series-custom.renderItem.return_polygon.shape.points\" target=\"_blank\">shape.points</a>, which is an points array like:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...]\n    },\n    // ...\n}\n</code></pre>\n<p>If users specify them into <a href=\"option.html#series-custom.renderItem.return_polygon.transition\" target=\"_blank\">transition</a> like:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: [[12, 33], [15, 36], [19, 39], ...],\n    },\n    transition: &#39;shape&#39;\n    // ...\n}\n</code></pre>\n<p>Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the <code class=\"codespan\">during</code> callback like that:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;polygon&#39;,\n    shape: {\n        points: calculatePoints(initialDegree),\n        transition: &#39;points&#39;\n    },\n    extra: {\n        degree: nextDegree\n    },\n    // Make echarts interpolate `extra.degree` internally, based on which\n    // we calculate the `points` in each animation frame.\n    transition: &#39;extra&#39;,\n    during: function (duringAPI) {\n        var currentDegree = duringAPI.getExtra(&#39;degree&#39;);\n        duringAPI.setShape(calculatePoints(currentDegree));\n    }\n    // ...\n}\n</code></pre>\n<p>See this example <a href=\"https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a>.</p>\n"
  },
  "elements-bezierCurve.cursor": {
    "desc": "\n\n<p>The mouse style when mouse hovers on an element, the same as <code class=\"codespan\">cursor</code> property in <code class=\"codespan\">CSS</code>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-bezierCurve.draggable": {
    "desc": "<p>Can be dragged or not.</p>\n"
  },
  "elements-bezierCurve.progressive": {
    "desc": "<p>Whether use progressive render to improve performance. Usually used when number of element is too large.</p>\n"
  },
  "elements-bezierCurve.shape.x1": {
    "desc": "<p>x value of the start point.</p>\n"
  },
  "elements-bezierCurve.shape.y1": {
    "desc": "<p>y value of the start point.</p>\n"
  },
  "elements-bezierCurve.shape.x2": {
    "desc": "<p>x value of the end point.</p>\n"
  },
  "elements-bezierCurve.shape.y2": {
    "desc": "<p>y value of the end point.</p>\n"
  },
  "elements-bezierCurve.shape.cpx1": {
    "desc": "<p>x of control point.</p>\n"
  },
  "elements-bezierCurve.shape.cpy1": {
    "desc": "<p>y of control point.</p>\n"
  },
  "elements-bezierCurve.shape.cpx2": {
    "desc": "<p>x of the second control point. If specified, cubic bezier is used.</p>\n<p>If both <code class=\"codespan\">cpx2</code> and <code class=\"codespan\">cpy2</code> are not set, quatratic bezier is used.</p>\n"
  },
  "elements-bezierCurve.shape.cpy2": {
    "desc": "<p>y of the second control point. If specified, cubic bezier is used.</p>\n<p>If both <code class=\"codespan\">cpx2</code> and <code class=\"codespan\">cpy2</code> are not set, quatratic bezier is used.</p>\n"
  },
  "elements-bezierCurve.shape.percent": {
    "desc": "<p>Specify the percentage of drawing, useful in animation.</p>\n<p>Value range: [0, 1].</p>\n"
  },
  "elements-bezierCurve.shape.transition": {
    "desc": "<p>Can be a single property name or an array of property names.\nEnable transition animation when the specified properties changed.\nCan only specify properties that are under this <code class=\"codespan\">shape</code>.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        ...\n        // This two props will perform transition animation.\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>We can also specify all of the properties like this:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    shape: {\n        ...\n    },\n    // Indicate that all props in `shape` will\n    // have transition animation.\n    transition: &#39;shape&#39;,\n};\n</code></pre>\n"
  },
  "elements-bezierCurve.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-bezierCurve.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "elements-bezierCurve.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "elements-bezierCurve.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "elements-bezierCurve.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "elements-bezierCurve.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "elements-bezierCurve.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "elements-bezierCurve.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "elements-bezierCurve.style.transition": {
    "desc": "<p>Can be a single property name or an array of property names.\nEnable transition animation when the specified properties changed.\nCan only specify properties that are under this <code class=\"codespan\">style</code>.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        ...\n        // This two props will perform transition animation.\n        transition: [&#39;mmm&#39;, &#39;ppp&#39;]\n    }\n}\n</code></pre>\n<p>We can also specify all of the properties like this:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;rect&#39;,\n    style: {\n        ...\n    },\n    // Indicate that all props in `style` will\n    // have transition animation.\n    transition: &#39;style&#39;,\n};\n</code></pre>\n"
  },
  "elements-bezierCurve.focus": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>When it&#39;s highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> Do not fade out other data, it&#39;s by default.</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> Only focus (not fade out) the element of the currently highlighted data.</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> Focus on all elements of the series which the currently highlighted data belongs to.</li>\n</ul>\n"
  },
  "elements-bezierCurve.blurScope": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>The range of fade out when <code class=\"codespan\">focus</code> is enabled. Support the following configurations</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code></li>\n<li><code class=\"codespan\">&#39;series&#39;</code></li>\n<li><code class=\"codespan\">&#39;global&#39;</code></li>\n</ul>\n"
  }
}