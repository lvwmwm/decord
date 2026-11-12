// Module ID: 13246
// Function ID: 13247
// Name: AIGlyphText
// Dependencies: [19, 17, 21, 1652, 5243, 13247, 5839, 2]
// Exports: AIGlyphText

// Module 13246 (AIGlyphText)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import useToken2 from "useToken" /* 5839 */;
import AIGlyphFont from "AIGlyphFont" /* 13247 */;
import react from "react" /* 19 */;
import module_1652 from "module_1652" /* 1652 */;
import createStyles from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

const Text = react_native.Text;
const jsx = Fragment.jsx;
let closure_4 = module_1652.createAnimatedComponent(Text);
let closure_5 = createStyles.createStyles((fontSize, color) => {
  const obj = { glyph: { color, fontFamily: AIGlyphFont.AI_GLYPH_FONT_FAMILY_NATIVE, fontSize, lineHeight: fontSize, textAlign: "center", includeFontPadding: false } };
  ({ color, fontFamily: AIGlyphFont.AI_GLYPH_FONT_FAMILY_NATIVE, fontSize, lineHeight: fontSize, textAlign: "center", includeFontPadding: false });
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("design/visual-identities/ai/AIGlyphText.native.tsx");

export function AIGlyphText(color) {
  let allowFontScaling;
  let animated;
  let children;
  let ellipsizeMode;
  let numberOfLines;
  let style;
  let str = color.color;
  size = color.size;
  if (str === undefined) {
    str = "text-default";
  }
  ({ animated, allowFontScaling } = color);
  if (animated === undefined) {
    animated = false;
  }
  ({ numberOfLines, ellipsizeMode, style, children } = color);
  let tmp2;
  const useToken = useToken2.useToken;
  useToken2;
  if ("none" !== str) {
    tmp2 = str;
  }
  const items = [closure_5(size, useToken(tmp2)).glyph, style];
  return jsx(animated ? closure_4 : Text, { style: items, allowFontScaling, numberOfLines, ellipsizeMode, children });
}
