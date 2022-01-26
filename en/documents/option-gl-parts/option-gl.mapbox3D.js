window.__EC_DOC_option_gl_mapbox3D = {
  "style": {
    "desc": "<p>Sets the style of the Mapbox map. Same as <a href=\"https://www.mapbox.com/mapbox-gl-js/style-spec/\" target=\"_blank\">https://www.mapbox.com/mapbox-gl-js/style-spec/</a>.</p>\n"
  },
  "center": {
    "desc": "<p>Sets the longitude and latitude of the center of the map. Longitude and latitude are represented by arrays, for example:</p>\n<pre><code class=\"lang-ts\">mapbox3D: {\n    center: [104.114129, 37.550339],\n    zoom: 3\n}\n</code></pre>\n"
  },
  "zoom": {
    "desc": "<p>Sets the zoom level of the map. See <a href=\"https://www.mapbox.com/mapbox-gl-js/style-spec/#root-zoom\" target=\"_blank\">https://www.mapbox.com/mapbox-gl-js/style-spec/#root-zoom</a></p>\n"
  },
  "bearing": {
    "desc": "<p>Sets the bearing angle of the map. See <a href=\"https://www.mapbox.com/mapbox-gl-js/style-spec/#root-bearing\" target=\"_blank\">https://www.mapbox.com/mapbox-gl-js/style-spec/#root-bearing</a></p>\n"
  },
  "pitch": {
    "desc": "<p>Sets the pitch angle of the map. The default is <code class=\"codespan\">0</code> means perpendicular to the surface of the map. The greater value is <code class=\"codespan\">60</code>. See <a href=\"https://www.mapbox.com/mapbox-gl-js/style-spec/#root-pitch\" target=\"_blank\">https://www.mapbox.com/mapbox-gl-js/style-spec/#root-pitch</a></p>\n"
  },
  "altitudeScale": {
    "desc": "<p>The zoom of the altitude Scale.</p>\n"
  },
  "shading": {
    "desc": "<p>The coloring effect of 3D graphics in mapbox3D. The following three coloring methods are supported in echarts-gl:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;color&#39;</code>\nOnly display colors, not affected by other factors such as lighting.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;lambert&#39;</code>\nThrough the classic [lambert] coloring, can express the light and dark that the light shows.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;realistic&#39;</code>\nRealistic rendering, combined with <a href=\"#globe.light.ambientCubemap\">light.ambientCubemap</a> and <a href=\"#globe.postEffect\">postEffect</a>, can improve the quality and texture of the display. [Physical Based Rendering (PBR)] (<a href=\"https://www.marmoset.co/posts/physically-based-rendering-and-you-can-too/\" target=\"_blank\">https://www.marmoset.co/posts/physically-based-rendering-and-you-can-too/</a>) is used in ECharts GL to represent realistic materials.</p>\n</li>\n</ul>\n"
  },
  "realisticMaterial": {
    "desc": "<p>The configuration item of the realistic material is valid when <a href=\"#mapbox3D.shading\">shading</a> is <code class=\"codespan\">&#39;realistic&#39;</code>.</p>\n"
  },
  "realisticMaterial.detailTexture": {
    "desc": "<p>The texture map of the material detail.</p>\n"
  },
  "realisticMaterial.textureTiling": {
    "desc": "<p>Tiles the texture map of the material detail. The default is <code class=\"codespan\">1</code>, which means that the stretch is filled. When greater than <code class=\"codespan\">1</code>, the number indicates how many times the texture is tiled.</p>\n<p><strong>Note:</strong>  The use of tiling requires the <code class=\"codespan\">detail texture</code> height and width to be 2 to the power of n. For example, 512x512, if it is a 200x200 texture, you cannot use tiling.</p>\n"
  },
  "realisticMaterial.textureOffset": {
    "desc": "<p>The displacement of the texture detail texture.</p>\n"
  },
  "realisticMaterial.roughness": {
    "desc": "<p>The <code class=\"codespan\">roughness</code> attribute is used to indicate the roughness of the material, <code class=\"codespan\">0</code> is completely smooth, <code class=\"codespan\">1</code> is completely rough, and the middle value is between the two.</p>\n<p>The following images show the effect of <code class=\"codespan\">roughness</code> in <a href=\"#globe\"><code class=\"codespan\">globe</code></a> <code class=\"codespan\">0.2</code> (smooth) and <code class=\"codespan\">0.8</code> (rough).</p>\n<p><img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-gloss.png\">\n<img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-rough.png\"></p>\n<p>When you want to express more complex materials. You can set <code class=\"codespan\">roughness</code> directly to the texture that stores the roughness with each pixel as follows.</p>\n<p><img width=\"300\" height=\"300\" src=\"documents/asset/gl/img/roughness.png\"></p>\n<p>The more white the color in the texture, the larger the value and the rougher it is. You can get texture resources of different materials from resource websites such as [<a href=\"http://freepbr.com/]\" target=\"_blank\">http://freepbr.com/]</a> (<a href=\"http://freepbr.com/)\" target=\"_blank\">http://freepbr.com/)</a>. You can also generate it yourself using other tools.</p>\n"
  },
  "realisticMaterial.metalness": {
    "desc": "<p>The <code class=\"codespan\">metalness</code> attribute is used to indicate whether the material is metal or non-metal, <code class=\"codespan\">0</code> is non-metallic, <code class=\"codespan\">1</code> is metal, and the middle value is between the two. Usually set to <code class=\"codespan\">0</code> and <code class=\"codespan\">1</code> to meet most of the scenes.</p>\n<p>The picture below show the difference between `metal&#39; and &#39;0&#39; in <a href=\"#globe\">globe</a>.</p>\n<p><img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-metal.png\">\n<img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-non-metal.png\"></p>\n<p>As with <a href=\"#mapbox3D.realisticMaterial.roughness\">roughness</a> you can set <code class=\"codespan\">metalness</code> directly to the metal texture.</p>\n"
  },
  "realisticMaterial.roughnessAdjust": {
    "desc": "<p>Roughness adjustment is useful when using roughness map. The overall roughness of the texture can be adjusted. The default is <code class=\"codespan\">0.5</code>, <code class=\"codespan\">0</code> is completely smooth, <code class=\"codespan\">1</code> is completely rough.</p>\n"
  },
  "realisticMaterial.metalnessAdjust": {
    "desc": "<p>Metalness adjustment is useful when using metalness maps. The overall metallicity of the texture can be adjusted. The default is <code class=\"codespan\">0.5</code>, <code class=\"codespan\">0</code> is non-metal, <code class=\"codespan\">1</code> is metal.</p>\n"
  },
  "realisticMaterial.normalTexture": {
    "desc": "<p>Normal map of material details.</p>\n<p>Using normal maps, you can still display rich shades of detail on the surface of the object with fewer vertices.</p>\n"
  },
  "lambertMaterial": {
    "desc": "<p>The configuration item of the lambert material is valid when <a href=\"#mapbox3D.shading\">shading</a> is <code class=\"codespan\">&#39;lambert&#39;</code>.</p>\n"
  },
  "lambertMaterial.detailTexture": {
    "desc": "<p>The texture map of the material detail.</p>\n"
  },
  "lambertMaterial.textureTiling": {
    "desc": "<p>Tiles the texture map of the material detail. The default is <code class=\"codespan\">1</code>, which means that the stretch is filled. When greater than <code class=\"codespan\">1</code>, the number indicates how many times the texture is tiled.</p>\n<p><strong>Note:</strong>  The use of tiling requires the <code class=\"codespan\">detail texture</code> height and width to be 2 to the power of n. For example, 512x512, if it is a 200x200 texture, you cannot use tiling.</p>\n"
  },
  "lambertMaterial.textureOffset": {
    "desc": "<p>The displacement of the texture detail texture.</p>\n"
  },
  "colorMaterial": {
    "desc": "<p>The color material related configuration item is valid when <a href=\"#mapbox3D.shading\">shading</a> is <code class=\"codespan\">&#39;color&#39;</code>.</p>\n"
  },
  "colorMaterial.detailTexture": {
    "desc": "<p>The texture map of the material detail.</p>\n"
  },
  "colorMaterial.textureTiling": {
    "desc": "<p>Tiles the texture map of the material detail. The default is <code class=\"codespan\">1</code>, which means that the stretch is filled. When greater than <code class=\"codespan\">1</code>, the number indicates how many times the texture is tiled.</p>\n<p><strong>Note:</strong>  The use of tiling requires the <code class=\"codespan\">detail texture</code> height and width to be 2 to the power of n. For example, 512x512, if it is a 200x200 texture, you cannot use tiling.</p>\n"
  },
  "colorMaterial.textureOffset": {
    "desc": "<p>The displacement of the texture detail texture.</p>\n"
  },
  "light": {
    "desc": "<p>Light related settings. Invalid when <a href=\"#mapbox3D.shading\">shading</a> is &#39;color&#39;.</p>\n<p>The lighting settings affect the components and all the charts on the component&#39;s coordinate system.</p>\n<p>A reasonable lighting setting can make the brightness and darkness of the whole scene richer and more layered.</p>\n"
  },
  "light.main": {
    "desc": "<p>The setting of the main light source of the scene. In the <a href=\"#globe\">globe</a> component is the sun.</p>\n"
  },
  "light.main.color": {
    "desc": "<p>The color of the main light source.</p>\n"
  },
  "light.main.intensity": {
    "desc": "<p>The intensity of the main light source.</p>\n"
  },
  "light.main.shadow": {
    "desc": "<p>Whether the main light source displays a shadow. The default is off.</p>\n<p>Turning on the shadows can bring more realistic and layered lighting to the scene. But it also increases the operating overhead of the program.</p>\n<p>The following two images show the difference between turning on the shadow and turning off the shadow.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-shadow.png\" width=\"100%\" title=\"Shadow\"></img>\n    <img  src=\"documents/asset/gl/img/geo-no-shadow.png\" width=\"100%\" title=\"No Shadow\"></img>\n</div>\n"
  },
  "light.main.shadowQuality": {
    "desc": "<p>The quality of the shadow. You can choose <code class=\"codespan\">&#39;low&#39;</code>, <code class=\"codespan\">&#39;medium&#39;</code>, <code class=\"codespan\">&#39;high&#39;</code>, <code class=\"codespan\">&#39;ultra&#39;</code></p>\n<p>The following two images shows the difference between low quality and high quality shadows.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-shadow-low.png\" width=\"100%\" title=\"Low\"></img>\n    <img  src=\"documents/asset/gl/img/geo-shadow-high.png\" width=\"100%\" title=\"High\"></img>\n</div>\n"
  },
  "light.main.alpha": {
    "desc": "<p>The main light source is around the x-axis, which is the angle of up-down rotation. Control the direction of the light with <a href=\"#mapbox3D.light.main.beta\">beta</a>.</p>\n<p>As the following image show:</p>\n<p><img width=\"\" height=\"auto\" src=\"documents/asset/gl/img/light-alpha-beta.png\"></p>\n<p>The <a href=\"#globe\">globe</a> component can control the time of sunlight by <a href=\"#globe.light.main.time\">time</a>.</p>\n"
  },
  "light.main.beta": {
    "desc": "<p>The main light source is around the y-axis, which is the angle of the left-right rotation.</p>\n"
  },
  "light.ambient": {
    "desc": "<p>Global ambient light settings.</p>\n"
  },
  "light.ambient.color": {
    "desc": "<p>The color of ambient light.</p>\n"
  },
  "light.ambient.intensity": {
    "desc": "<p>The intensity of ambient light.</p>\n"
  },
  "light.ambientCubemap": {
    "desc": "<p>The ambientCubemap uses texture as the source of ambient light, which provides diffuse and specular for objects. The diffuse and specular can be set separately by <a href=\"#mapbox3D.light.ambientCubemap.diffuseIntensity\">diffuseIntensity</a> and <a href=\"#mapbox3D.light.ambientCubemap.specularIntensity\">specularIntensity</a>.</p>\n"
  },
  "light.ambientCubemap.texture": {
    "desc": "<p>The URL of the ambient cubemap supports HDR images in the <code class=\"codespan\">.hdr</code> format. You can obtained the resources for <code class=\"codespan\">.hdr</code> from <a href=\"http://www.hdrlabs.com/sibl/archive.html\" target=\"_blank\">http://www.hdrlabs.com/sibl/archive.html</a> and other websites.</p>\n<p>Example：</p>\n<pre><code class=\"lang-ts\">ambientCubemap: {\n    texture: &#39;pisa.hdr&#39;,\n    // The exposure value used when analytic hdr\n    exposure: 1.0\n}\n</code></pre>\n"
  },
  "light.ambientCubemap.diffuseIntensity": {
    "desc": "<p>The intensity of diffuse.</p>\n"
  },
  "light.ambientCubemap.specularIntensity": {
    "desc": "<p>The intensity of specular.</p>\n"
  },
  "postEffect": {
    "desc": "<p>Post-processing effects related configuration. It can add effects such as highlights, depth of field, screen space ambient occlusion (SSAO), toning to the picture. And it can make the whole picture more textured.</p>\n<p>The following are the differences between closing <code class=\"codespan\">postEffect</code> and opening <code class=\"codespan\">postEffect</code>.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/globe-posteffect-disable.png\" width=\"100%\" title=\"Disable\"></img>\n    <img  src=\"documents/asset/gl/img/globe-posteffect-enable.png\" width=\"100%\" title=\"Enable\"></img>\n</div>\n\n<p>Note that when postEffect is enable, <a href=\"#mapbox3D.temporalSuperSampling\">temporalSuperSampling</a> is enable by default. After the picture is still, the picture will continue to be enhanced, including anti-aliasing, depth of field, SSAO, shadows, etc.</p>\n"
  },
  "postEffect.enable": {
    "desc": "<p>Whether to enable post-processing effects. Not enabled by default.</p>\n"
  },
  "postEffect.bloom": {
    "desc": "<p>Bloom is used to reproducing the effects that occur in real cameras when taking pictures in a bright environment.\nBecause traditional RGB can only represent colors in the range of &#39;0 - 255&#39;, so we need to use the bloom effect simulates fringes of light extending from the borders of bright areas, creating the illusion of a bright light overwhelming the camera. As shown below：</p>\n<p><img width=\"\" height=\"auto\" src=\"documents/asset/gl/img/globe-posteffect-bloom.png\"></p>\n"
  },
  "postEffect.bloom.enable": {
    "desc": "<p>Whether to enable the bloom effect.</p>\n"
  },
  "postEffect.bloom.bloomIntensity": {
    "desc": "<p>The intensity of the bloom. The default is 0.1.</p>\n"
  },
  "postEffect.depthOfField": {
    "desc": "<p>Depth of Field is a post-processing effect that simulates the focus properties of a camera. The area of focus is clear, and the area away from the focus is gradually blurred.</p>\n<p>The depth of field effect allows the observer to focus on the area of focus and make the picture feel stronger. Large depth of field can also create a macro model effect.</p>\n<p>The following are the differences between turning off and turning on the depth of field effect.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-no-dof.png\" width=\"100%\" title=\"Disable\"></img>\n    <img  src=\"documents/asset/gl/img/geo-dof.png\" width=\"100%\" title=\"Enable\"></img>\n</div>\n"
  },
  "postEffect.depthOfField.enable": {
    "desc": "<p>Whether to enable the depth of field.</p>\n"
  },
  "postEffect.depthOfField.focalDistance": {
    "desc": "<p>The initial focus distance. The user can click on the area to automatically focus.</p>\n"
  },
  "postEffect.depthOfField.focalRange": {
    "desc": "<p>The size of the in-focus area. The objects in this range are completely clear and there is no blurring.</p>\n"
  },
  "postEffect.depthOfField.fstop": {
    "desc": "<p>[F value] of the lens (<a href=\"https://zh.wikipedia.org/wiki/%E7%84%A6%E6%AF%94)\" target=\"_blank\">https://zh.wikipedia.org/wiki/%E7%84%A6%E6%AF%94)</a>, the smaller the value, the shallower the depth of field.</p>\n"
  },
  "postEffect.depthOfField.blurRadius": {
    "desc": "<p>Blur radius outside the focus.</p>\n<p>The difference blur effect between the different radius.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-dof-small.png\" width=\"100%\" title=\"blurSize: 3\"></img>\n    <img  src=\"documents/asset/gl/img/geo-dof-large.png\" width=\"100%\" title=\"blurSize: 10\"></img>\n</div>\n"
  },
  "postEffect.screenSpaceAmbientOcclusion": {
    "desc": "<p>The ambient occlusion post-processing effect darkens the corners, holes, crevices, and areas where most light can`t reach. It is a supplement to the traditional shadow map, which makes the whole scene more natural and layered.</p>\n<p>Below is a comparison of the effects of no SSAO and SSAO:</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-no-ssao.png\" width=\"100%\" title=\"No SSAO\"></img>\n    <img  src=\"documents/asset/gl/img/geo-ssao.png\" width=\"100%\" title=\"SSAO\"></img>\n</div>\n"
  },
  "postEffect.SSAO": {
    "desc": "<p>Same as <a href=\"#mapbox3D.postEffect.screenSpaceAmbientOcclusion\">screenSpaceAmbientOcclusion</a></p>\n"
  },
  "postEffect.SSAO.enable": {
    "desc": "<p>Whether to enable SSAO (screen space ambient occlusion). Not enabled by default.</p>\n"
  },
  "postEffect.SSAO.quality": {
    "desc": "<p>The quality of SSAO (screen space ambient occlusion). Supporting<code class=\"codespan\">&#39;low&#39;</code>, <code class=\"codespan\">&#39;medium&#39;</code>, <code class=\"codespan\">&#39;high&#39;</code>, <code class=\"codespan\">&#39;ultra&#39;</code></p>\n"
  },
  "postEffect.SSAO.radius": {
    "desc": "<p>The radius of the SSAO (screen space ambient occlusion). The larger the radius, the more natural the effect, but you need to set a higher <code class=\"codespan\">&#39;quality&#39;</code>.</p>\n<p>The following example is the difference between a smaller and larger radius:</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-ssao-small-radius.png\" width=\"100%\" title=\"Radius: 1\"></img>\n    <img  src=\"documents/asset/gl/img/geo-ssao-large-radius.png\" width=\"100%\" title=\"Radius: 10\"></img>\n</div>\n"
  },
  "postEffect.SSAO.intensity": {
    "desc": "<p>The intensity of SSAO (screen space ambient occlusion). The larger the value, the darker the color.</p>\n"
  },
  "postEffect.colorCorrection": {
    "desc": "<p>Color correction and adjustment. Similar to Color Adjustments in Photoshop.</p>\n<p>The same scene in the figure below is adjusted to the difference between the cool color system and the warm color system.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/buildings-cold.jpg\" width=\"100%\" title=\"Cold\"></img>\n    <img  src=\"documents/asset/gl/img/buildings-warm.jpg\" width=\"100%\" title=\"Warm\"></img>\n</div>\n\n"
  },
  "postEffect.colorCorrection.enable": {
    "desc": "<p>Whether to enable the color correction.</p>\n"
  },
  "postEffect.colorCorrection.lookupTexture": {
    "desc": "<p>Color correction lookup texture, recommended.</p>\n<p>The color correction lookup texture is a texture image like the one below.</p>\n<p><img width=\"200\" height=\"auto\" src=\"documents/asset/gl/img/lookup.png\"></p>\n<p>This is the basic lookup texture image that you can use directly.\nTo adjust the color of the scene to the effect you want, you can take a screenshot of the scene and adjust the color to the desired effect in image processing software such as Photoshop. Then apply the same adjustment to the image of the lookup texture above.</p>\n<p>For example, after turning into a cool tone, the image of the lookup texture will look like this:</p>\n<p><img width=\"200\" height=\"auto\" src=\"documents/asset/gl/img/crispwinter.png\"></p>\n<p>Then the texture image is used as the value of the configuration item, and you can get the same effect in Photoshop.</p>\n<p>Of course, if you just want to get a screenshot, you don&#39;t have to do it anymore, but if you want to easily adjust to the ideal color in real-time interactive works, this is very useful.</p>\n"
  },
  "postEffect.colorCorrection.exposure": {
    "desc": "<p>The exposure of the image.</p>\n"
  },
  "postEffect.colorCorrection.brightness": {
    "desc": "<p>The brightness of the image.</p>\n"
  },
  "postEffect.colorCorrection.contrast": {
    "desc": "<p>The contrast of the image.</p>\n"
  },
  "postEffect.colorCorrection.saturation": {
    "desc": "<p>The saturation of the image.</p>\n"
  },
  "postEffect.FXAA": {
    "desc": "<p>After opening <a href=\"#mapbox3D.postEffect\">postEffect</a>, WebGL&#39;s default MSAA (Multi Sampling Anti Aliasing) will not work. At this time, FXAA (Fast Approximate Anti-Aliasing) can solve the anti-aliasing problem quickly and easily. FXAA blurs the edge of the scene to solve the problem of aliasing. It works well on some scenes, but in echarts-gl, you need to ensure that the edges of many texts and lines are sharp and clear, so FXAA is not suitable. At this point we can use supersampling by setting a higher <code class=\"codespan\">devicePixelRatio</code> as follows:</p>\n<pre><code class=\"lang-ts\">var chart = echarts.init(dom, null, {\n    devicePixelRatio: 2\n})\n</code></pre>\n<p>However, setting a higher <code class=\"codespan\">devicePixelRatio</code> has high requirements for computer performance, so more often we recommend using <a href=\"#mapbox3D.temporalSuperSampling\">temporalSuperSampling</a> in echarts-gl. After the picture is still, it will continue to sample multiple times and taken at several instances inside the pixel and an average color value is calculated.,thus achieving anti-aliasing effect.</p>\n"
  },
  "postEffect.FXAA.enable": {
    "desc": "<p>Whether to enable FXAA. Not enabled by default.</p>\n"
  },
  "temporalSuperSampling": {
    "desc": "<p>Temporal supersampling. After opening <a href=\"#mapbox3D.postEffect\">postEffect</a>, WebGL&#39;s default MSAA (MultiSampling Anti-Aliasing) will not work, so we need to solve the problem of sampling.</p>\n<p>Temporal supersampling is an anti-aliasing method. After the picture is still, it will continue to sample multiple times and taken at several instances inside the pixel and an average color value is calculated, thus achieving anti-aliasing effect.\nAnd in this process, ECharts-gl also progressively enhances some of the effects in <a href=\"#mapbox3D.postEffect\">postEffect</a> that require sampled guarantees. For example <a href=\"#mapbox3D.postEffect.SSAO\">SSAO</a>, <a href=\"#mapbox3D.postEffect.depthOfField\">Depth of Field</a>, and shadow.</p>\n<p>The following is the difference between not opening <code class=\"codespan\">temporalSuperSampling</code> and opening <code class=\"codespan\">temporalSuperSampling</code>.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 800px;\">\n    <img  src=\"documents/asset/gl/img/surface-no-taa.png\" width=\"100%\" title=\"No AA\"></img>\n    <img  src=\"documents/asset/gl/img/surface-taa.png\" width=\"100%\" title=\"AA\"></img>\n</div>\n"
  },
  "temporalSuperSampling.enable": {
    "desc": "<p>Whether to enable temporal supersampling. By default, temporal supersampling is also turned on synchronously when <a href=\"#mapbox3D.postEffect\">postEffect</a> is turned on.</p>\n"
  }
}