// Module ID: 1795
// Function ID: 1796
// Dependencies: [1665, 1796]
// Exports: initSvgCssSupport

// Module 1795
import _mod1665 from "module_1665" /* 1665 */;
import _mod1796 from "module_1796" /* 1796 */;


export function initSvgCssSupport() {
  const obj = _mod1665;
  const result = obj.registerComponentPropsBuilder("RNSVGCircle", _mod1796.SVG_CIRCLE_PROPERTIES_CONFIG);
  const obj2 = _mod1665;
  const result1 = obj2.registerComponentPropsBuilder("RNSVGEllipse", _mod1796.SVG_ELLIPSE_PROPERTIES_CONFIG);
  const obj3 = _mod1665;
  const result2 = obj3.registerComponentPropsBuilder("RNSVGImage", _mod1796.SVG_IMAGE_PROPERTIES_CONFIG);
  const obj4 = _mod1665;
  const result3 = obj4.registerComponentPropsBuilder("RNSVGLine", _mod1796.SVG_LINE_PROPERTIES_CONFIG);
  const obj5 = _mod1665;
  const result4 = obj5.registerComponentPropsBuilder("RNSVGLinearGradient", _mod1796.SVG_LINEAR_GRADIENT_PROPERTIES_CONFIG);
  const obj6 = _mod1665;
  const result5 = obj6.registerComponentPropsBuilder("RNSVGRadialGradient", _mod1796.SVG_RADIAL_GRADIENT_PROPERTIES_CONFIG);
  const obj7 = _mod1665;
  const result6 = obj7.registerComponentPropsBuilder("RNSVGPath", _mod1796.SVG_PATH_PROPERTIES_CONFIG);
  const obj8 = _mod1665;
  const result7 = obj8.registerComponentPropsBuilder("RNSVGPattern", _mod1796.SVG_PATTERN_PROPERTIES_CONFIG);
  const registerComponentPropsBuilder = _mod1665.registerComponentPropsBuilder;
  _mod1665;
  const obj9 = _mod1665;
  const compoundComponentName = obj9.getCompoundComponentName("RNSVGPath", "Polygon");
  const result8 = registerComponentPropsBuilder(compoundComponentName, _mod1796.SVG_POLYGON_PROPERTIES_CONFIG);
  const registerComponentPropsBuilder2 = _mod1665.registerComponentPropsBuilder;
  _mod1665;
  const obj10 = _mod1665;
  const compoundComponentName1 = obj10.getCompoundComponentName("RNSVGPath", "Polyline");
  const result9 = registerComponentPropsBuilder2(compoundComponentName1, _mod1796.SVG_POLYLINE_PROPERTIES_CONFIG);
  const obj11 = _mod1665;
  const result10 = obj11.registerComponentPropsBuilder("RNSVGRect", _mod1796.SVG_RECT_PROPERTIES_CONFIG);
  const obj12 = _mod1665;
  const result11 = obj12.registerComponentPropsBuilder("RNSVGText", _mod1796.SVG_TEXT_PROPERTIES_CONFIG);
  const obj13 = _mod1665;
  const result12 = obj13.registerComponentPropsBuilder(/^RNSVG/, _mod1796.SVG_COMMON_PROPERTIES_CONFIG);
}
