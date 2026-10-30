// Module ID: 12425
// Function ID: 12426
// Name: ConjureProjectIcon
// Dependencies: [19, 17, 21, 5009, 575, 12426, 5619, 8670, 12428, 5712, 1410, 5591, 671, 12429, 2]
// Exports: ConjureNewProjectIcon, default

// Module 12425 (ConjureProjectIcon)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import AvatarUtils from "AvatarUtils" /* 1410 */;
import useToken from "useToken" /* 5591 */;
import Text_Text from "Text/Text" /* 5619 */;
import AppsIcon from "AppsIcon" /* 8670 */;
import useConjureDefaultAppIconDefault from "useConjureDefaultAppIcon" /* 12426 */;
import useConjureProjectIcon from "useConjureProjectIcon" /* 12428 */;
import MagicWandIcon2 from "MagicWandIcon" /* 12429 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const useConjureProjectIconDefault = useConjureProjectIcon;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let tmp2;
const FastImageDefault = tmp2(5712);
function ConjureProjectIconFallback(project) {
  let character;
  let foregroundColor;
  let glyphStyle;
  let pixels;
  let tmp4Result;
  project = project.project;
  ({ pixels, glyphStyle } = project);
  const tmp2 = useConjureDefaultAppIconDefault(project.application_id, project.name);
  ({ character, foregroundColor } = tmp2);
  const tmp3 = closure_9(pixels, tmp2.backgroundColor, foregroundColor);
  const obj = { style: tmp3.tile, children: tmp4Result };
  const tmp5 = React3;
  if (null != character) {
    const obj2 = { variant: "heading-md/bold", color: "none", style: tmp3.character, allowFontScaling: false, children: character };
    tmp4Result = tmp4(Text_Text.Text, obj2);
  } else {
    const obj3 = { size: "custom", style: glyphStyle, color: foregroundColor };
    tmp4Result = tmp4(AppsIcon.AppsIcon, obj3);
  }
  return hasOwnProperty(tmp5, obj);
}
({ StyleSheet: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = { header: 20, list: 32, card: 40, dialog: 48 };
let createStyles = createStyles_mod;
let closure_8 = createStyles.createStyles((width, borderRadius, width2) => {
  let obj2;
  const obj = { frame: { width, height: width, borderRadius, overflow: "hidden", alignItems: "center", justifyContent: "center" }, image: { width, height: width }, border: obj2, glyph: { width: width2, height: width2 } };
  obj2 = { borderRadius, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  return obj;
});
createStyles = createStyles_mod;
let closure_9 = createStyles.createStyles((width, backgroundColor, color) => {
  const obj = { tile: size, character: { color, fontSize: Math.round(width / 2), lineHeight: Math.round(0.625 * width) } };
  size = { width, height: width, alignItems: "center", justifyContent: "center", backgroundColor };
  ({ color, fontSize: Math.round(width / 2), lineHeight: Math.round(0.625 * width) });
  return obj;
});
createStyles = createStyles_mod;
let closure_11 = createStyles.createStyles((backgroundColor) => {
  const obj = { tile: obj2 };
  return obj;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectIcon.tsx");

export default function ConjureProjectIcon(project) {
  let items;
  let obj4;
  let tmp10;
  let tmp11;
  project = project.project;
  const tmp4 = useConjureProjectIconDefault(project, closure_7[project.size]);
  const url = tmp4.url;
  const tmp5 = closure_8(closure_7[project.size], tmp4.radius, tmp4.glyphSize);
  const obj = { style: tmp5.frame, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items };
  const tmp6 = metroRequire;
  if (null != url) {
    const obj2 = { source: obj4.makeSource(url), style: tmp5.image };
    const tmp2Result = FastImageDefault;
    obj4 = AvatarUtils;
    tmp11 = hasOwnProperty(tmp2Result, obj2);
    tmp10 = hasOwnProperty;
  } else {
    tmp10 = hasOwnProperty;
    const obj3 = { project, pixels: closure_7[project.size], glyphStyle: tmp5.glyph };
    tmp11 = hasOwnProperty(ConjureProjectIconFallback, obj3);
  }
  items = [tmp11, ];
  const obj5 = { style: tmp5.border, pointerEvents: "none" };
  items[1] = tmp10(React3, obj5);
  return tmp6(React3, obj);
};
export function ConjureNewProjectIcon(arg0) {
  let MagicWandIcon;
  let items;
  let obj5;
  const obj = useConjureProjectIcon;
  const result = obj.conjureProjectIconMetrics(tmp);
  const tmp3 = closure_8(closure_7[arg0.size], result.radius, result.glyphSize);
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.BACKGROUND_BRAND);
  const obj3 = _modDef671(token);
  const obj4 = { style: items, children: hasOwnProperty(MagicWandIcon, obj5) };
  items = [tmp3.frame, ];
  const alphaResult = obj3.alpha(0.24);
  items[1] = closure_11(alphaResult.css()).tile;
  obj5 = { size: "custom", style: tmp3.glyph, color: nativeDefault.colors.ICON_BRAND };
  MagicWandIcon = MagicWandIcon2.MagicWandIcon;
  return hasOwnProperty(React3, obj4);
}
