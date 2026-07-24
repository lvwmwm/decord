// Module ID: 8085
// Function ID: 64048
// Name: extractSingleFontFamily
// Dependencies: [31, 33, 8079, 8084]
// Exports: default, setTSpan

// Module 8085 (extractSingleFontFamily)
import "result";
import { Children } from "result";
import { jsx } from "jsxProd";

const require = arg1;
function extractSingleFontFamily(fontFamily) {
  let replaced = null;
  if (fontFamily) {
    const str = fontFamily.split(closure_9)[0];
    replaced = fontFamily.split(closure_9)[0].replace(closure_7, "").replace(closure_8, "");
    const str3 = fontFamily.split(closure_9)[0].replace(closure_7, "");
  }
  return replaced;
}
function extractFont(propsAndStylesResult) {
  let font;
  let fontData;
  let fontFamily;
  let fontFeatureSettings;
  let fontSize;
  let fontStretch;
  let fontStyle;
  let fontVariant;
  let fontVariantLigatures;
  let fontVariationSettings;
  let fontWeight;
  let kerning;
  let letterSpacing;
  let textAnchor;
  let textDecoration;
  let wordSpacing;
  ({ kerning, font } = propsAndStylesResult);
  let num = 2;
  ({ fontData, fontStyle, fontVariant, fontWeight, fontStretch, fontSize, fontFamily, textAnchor, textDecoration, letterSpacing, wordSpacing, fontFeatureSettings, fontVariantLigatures, fontVariationSettings } = propsAndStylesResult);
  require(8079) /* pickNotNil */;
  let obj = { fontData, fontStyle, fontVariant, fontWeight, fontStretch, fontSize, fontFamily: extractSingleFontFamily(fontFamily), textAnchor, textDecoration, letterSpacing, wordSpacing, kerning, fontFeatureSettings, fontVariantLigatures, fontVariationSettings };
  if ("string" !== typeof font) {
    const _Object = Object;
    return Object.assign({}, font, tmp2);
  } else {
    const _Object2 = Object;
    if (!hasOwnProperty.call(dependencyMap, font)) {
      kerning = regex.exec(font);
      if (!kerning) {
        dependencyMap[font] = null;
      }
    }
    const match = /bold/.exec(kerning[1]);
    obj = {};
    let num3 = kerning[num];
    const match1 = /italic/.exec(kerning[1]);
    if (!num3) {
      num3 = 12;
    }
    obj.fontSize = num3;
    let str = "normal";
    let str2 = "normal";
    if (match) {
      str2 = "bold";
    }
    obj.fontWeight = str2;
    if (match1) {
      str = "italic";
    }
    obj.fontStyle = str;
    num = extractSingleFontFamily(kerning[3]);
    obj.fontFamily = num;
    dependencyMap[font] = obj;
    const obj2 = /bold/;
    const obj3 = /italic/;
    const tmp8 = dependencyMap;
  }
}
function getChild(arg0) {
  if ("string" === typeof arg0) {
    const obj = {};
    const _String = String;
    obj.children = String(arg0);
    let tmp2 = <closure_3 />;
  } else {
    tmp2 = arg0;
  }
  return tmp2;
}
const re6 = /^\s*((?:(?:normal|bold|italic)\s+)*)(?:(\d+(?:\.\d+)?(?:%|px|em|pt|pc|mm|cm|in]))*(?:\s*\/.*?)?\s+)?\s*"?([^"]*)/i;
const re7 = /^[\s"']*/;
const re8 = /[\s"']*$/;
const re9 = /\s*,\s*/g;
let closure_10 = {};

export default function extractText(children) {
  children = children.children;
  if ("string" !== typeof children) {
    if ("number" !== tmp10) {
      if (Children.count(children) > 1) {
        let mapped = Children.map(children, getChild);
      } else {
        const _Array = Array;
        mapped = children;
      }
    }
    let obj = {};
    let StringResult = null;
    if (null === mapped) {
      const _String2 = String;
      StringResult = String(children);
    }
    obj.content = StringResult;
    obj.children = mapped;
    obj.inlineSize = tmp6;
    obj.baselineShift = tmp7;
    obj.verticalAlign = tmp8;
    obj.alignmentBaseline = tmp9;
    obj.font = extractFont(children);
    obj.x = importDefault(8084)(tmp);
    obj.y = importDefault(8084)(tmp2);
    obj.dx = importDefault(8084)(tmp3);
    obj.dy = importDefault(8084)(tmp4);
    obj.rotate = importDefault(8084)(tmp5);
    return obj;
  }
  let tmp16 = null;
  if (arg1) {
    obj = {};
    const _String = String;
    obj.children = String(children);
    tmp16 = <closure_3 />;
  }
  mapped = tmp16;
};
export { extractFont };
export function setTSpan(arg0) {
  let closure_3 = arg0;
}
