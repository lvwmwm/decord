// Module ID: 1797
// Function ID: 1798
// Dependencies: [1667, 1798]
// Exports: initSvgCssSupport

// Module 1797
import _mod1667 from "module_1667" /* 1667 */;
import _mod1798 from "module_1798" /* 1798 */;


export function initSvgCssSupport() {
  const obj = _mod1667;
  const result = obj.registerComponentPropsBuilder("RNSVGCircle", _mod1798.SVG_CIRCLE_PROPERTIES_CONFIG);
  const obj2 = _mod1667;
  const result1 = obj2.registerComponentPropsBuilder("RNSVGEllipse", _mod1798.SVG_ELLIPSE_PROPERTIES_CONFIG);
  const obj3 = _mod1667;
  const result2 = obj3.registerComponentPropsBuilder("RNSVGImage", _mod1798.SVG_IMAGE_PROPERTIES_CONFIG);
  const obj4 = _mod1667;
  const result3 = obj4.registerComponentPropsBuilder("RNSVGLine", _mod1798.SVG_LINE_PROPERTIES_CONFIG);
  const obj5 = _mod1667;
  const result4 = obj5.registerComponentPropsBuilder("RNSVGLinearGradient", _mod1798.SVG_LINEAR_GRADIENT_PROPERTIES_CONFIG);
  const obj6 = _mod1667;
  const result5 = obj6.registerComponentPropsBuilder("RNSVGRadialGradient", _mod1798.SVG_RADIAL_GRADIENT_PROPERTIES_CONFIG);
  const obj7 = _mod1667;
  const result6 = obj7.registerComponentPropsBuilder("RNSVGPath", _mod1798.SVG_PATH_PROPERTIES_CONFIG);
  const obj8 = _mod1667;
  const result7 = obj8.registerComponentPropsBuilder("RNSVGPattern", _mod1798.SVG_PATTERN_PROPERTIES_CONFIG);
  const registerComponentPropsBuilder = _mod1667.registerComponentPropsBuilder;
  _mod1667;
  const obj9 = _mod1667;
  const compoundComponentName = obj9.getCompoundComponentName("RNSVGPath", "Polygon");
  const result8 = registerComponentPropsBuilder(compoundComponentName, _mod1798.SVG_POLYGON_PROPERTIES_CONFIG);
  const registerComponentPropsBuilder2 = _mod1667.registerComponentPropsBuilder;
  _mod1667;
  const obj10 = _mod1667;
  const compoundComponentName1 = obj10.getCompoundComponentName("RNSVGPath", "Polyline");
  const result9 = registerComponentPropsBuilder2(compoundComponentName1, _mod1798.SVG_POLYLINE_PROPERTIES_CONFIG);
  const obj11 = _mod1667;
  const result10 = obj11.registerComponentPropsBuilder("RNSVGRect", _mod1798.SVG_RECT_PROPERTIES_CONFIG);
  const obj12 = _mod1667;
  const result11 = obj12.registerComponentPropsBuilder("RNSVGText", _mod1798.SVG_TEXT_PROPERTIES_CONFIG);
  const obj13 = _mod1667;
  const result12 = obj13.registerComponentPropsBuilder(/^RNSVG/, _mod1798.SVG_COMMON_PROPERTIES_CONFIG);
}
