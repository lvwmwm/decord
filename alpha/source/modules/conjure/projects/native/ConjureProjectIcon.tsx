// Module ID: 12463
// Function ID: 12464
// Name: ConjureProjectIcon
// Dependencies: [19, 17, 21, 5014, 575, 11343, 5717, 1409, 11340, 5596, 671, 12464, 2]
// Exports: ConjureNewProjectIcon, default

// Module 12463 (ConjureProjectIcon)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import AvatarUtils from "AvatarUtils" /* 1409 */;
import useToken from "useToken" /* 5596 */;
import FastImageDefault from "FastImage" /* 5717 */;
import useConjureProjectIcon from "useConjureProjectIcon" /* 11343 */;
import MagicWandIcon2 from "MagicWandIcon" /* 12464 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const useConjureProjectIconDefault = useConjureProjectIcon;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
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
let closure_9 = createStyles.createStyles((backgroundColor) => {
  const obj = { tile: obj2 };
  return obj;
});
let result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectIcon.tsx");

export default function ConjureProjectIcon(project) {
  let items;
  let obj4;
  let tmp10;
  let tmp9;
  project = project.project;
  const tmp4 = useConjureProjectIconDefault(project, closure_7[project.size]);
  const url = tmp4.url;
  const tmp5 = closure_8(closure_7[project.size], tmp4.radius, tmp4.glyphSize);
  const obj = { style: tmp5.frame, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items };
  const tmp6 = metroRequire;
  if (null != url) {
    const obj3 = { source: obj4.makeSource(url), style: tmp5.image };
    const tmp2Result = FastImageDefault;
    obj4 = AvatarUtils;
    tmp10 = hasOwnProperty(tmp2Result, obj3);
    tmp9 = hasOwnProperty;
  } else {
    const obj5 = { applicationId: null, name: null, size: closure_7[project.size] };
    ({ application_id: obj2.applicationId, name: obj2.name } = project);
    tmp9 = hasOwnProperty;
    tmp10 = hasOwnProperty(tmp2(11340), obj5);
  }
  items = [tmp10, ];
  const obj8 = { style: tmp5.border, pointerEvents: "none" };
  items[1] = tmp9(React3, obj8);
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
  items[1] = closure_9(alphaResult.css()).tile;
  obj5 = { size: "custom", style: tmp3.glyph, color: nativeDefault.colors.ICON_BRAND };
  MagicWandIcon = MagicWandIcon2.MagicWandIcon;
  return hasOwnProperty(React3, obj4);
}
