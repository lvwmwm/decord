// Module ID: 12172
// Function ID: 12173
// Name: ConjureProjectIcon
// Dependencies: [19, 17, 21, 4972, 587, 558, 576, 12173, 5670, 1414, 8577, 5253, 683, 12174, 2]

// Module 12172 (ConjureProjectIcon)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import AvatarUtils from "AvatarUtils" /* 1414 */;
import useToken from "useToken" /* 5253 */;
import FastImageDefault from "FastImage" /* 5670 */;
import AppsIcon2 from "AppsIcon" /* 8577 */;
import useConjureProjectIcon from "useConjureProjectIcon" /* 12173 */;
import MagicWandIcon2 from "MagicWandIcon" /* 12174 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4972 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
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
  let obj3;
  const obj = { frame: { width, height: width, borderRadius, overflow: "hidden", alignItems: "center", justifyContent: "center" }, placeholder: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG }, image: { width, height: width }, border: obj3, glyph: { width: width2, height: width2 } };
  obj3 = { borderRadius, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG });
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureProjectIcon(project) {
  let items;
  let tmpResult;
  const obj = react2;
  const cResult = obj.c(13);
  const tmp6 = useConjureProjectIconDefault(project.project, closure_7[project.size]);
  const url = tmp6.url;
  const tmp7 = closure_8(closure_7[project.size], tmp6.radius, tmp6.glyphSize);
  if (cResult[0] === tmp7.frame) {
    let tmp9;
    let tmp12;
    if (cResult[1] === (null == url && tmp7.placeholder)) {
      tmp9 = cResult[2];
    }
    if (cResult[3] === tmp7.glyph) {
      if (cResult[4] === tmp7.image) {
        let tmp10;
        let tmp15;
        if (cResult[5] === url) {
          tmp10 = cResult[6];
        }
        if (cResult[7] !== tmp7.border) {
          const obj2 = { style: tmp7.border, pointerEvents: "none" };
          const tmp18 = hasOwnProperty(React3, obj2);
          cResult[7] = tmp7.border;
          cResult[8] = tmp18;
          tmp15 = tmp18;
        } else {
          tmp15 = cResult[8];
        }
        if (cResult[9] === tmp9) {
          if (cResult[10] === tmp10) {
            let tmp19;
            if (cResult[11] === tmp15) {
              tmp19 = cResult[12];
            }
            return tmp19;
          }
        }
        const obj3 = { style: tmp9, children: items };
        items = [tmp10, tmp15];
        const tmp22 = metroRequire(React3, obj3);
        cResult[9] = tmp9;
        cResult[10] = tmp10;
        cResult[11] = tmp15;
        cResult[12] = tmp22;
        tmp19 = tmp22;
      }
    }
    if (null != url) {
      const obj4 = { source: tmpResult.makeSource(url), style: tmp7.image };
      const tmp5Result = FastImageDefault;
      tmpResult = AvatarUtils;
      tmp12 = hasOwnProperty(tmp5Result, obj4);
    } else {
      const obj5 = { size: "custom", style: tmp7.glyph, color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
      const AppsIcon = tmp(8577).AppsIcon;
      tmp12 = hasOwnProperty(AppsIcon, obj5);
    }
    cResult[3] = tmp7.glyph;
    cResult[4] = tmp7.image;
    cResult[5] = url;
    cResult[6] = tmp12;
    tmp10 = tmp12;
  }
  const items1 = [tmp7.frame, null == url && tmp7.placeholder];
  cResult[0] = tmp7.frame;
  cResult[1] = null == url && tmp7.placeholder;
  cResult[2] = items1;
  tmp9 = items1;
}) : (function ConjureProjectIcon(project) {
  let items1;
  let obj4;
  let tmp10;
  let tmp11;
  const tmp4 = useConjureProjectIconDefault(project.project, closure_7[project.size]);
  const url = tmp4.url;
  const tmp5 = closure_8(closure_7[project.size], tmp4.radius, tmp4.glyphSize);
  const items = [tmp5.frame, ];
  let placeholder = null == url;
  const tmp6 = metroRequire;
  if (placeholder) {
    placeholder = tmp5.placeholder;
  }
  const obj = { style: items, children: items1 };
  items[1] = placeholder;
  if (null != url) {
    const obj2 = { source: obj4.makeSource(url), style: tmp5.image };
    const tmp2Result = FastImageDefault;
    obj4 = AvatarUtils;
    tmp11 = hasOwnProperty(tmp2Result, obj2);
    tmp10 = hasOwnProperty;
  } else {
    const obj3 = { size: "custom", style: tmp5.glyph, color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
    const AppsIcon = AppsIcon2.AppsIcon;
    tmp10 = hasOwnProperty;
    tmp11 = hasOwnProperty(AppsIcon, obj3);
  }
  items1 = [tmp11, ];
  const obj5 = { style: tmp5.border, pointerEvents: "none" };
  items1[1] = tmp10(React3, obj5);
  return tmp6(React3, obj);
});
createStyles = createStyles_mod;
let closure_9 = createStyles.createStyles((backgroundColor) => {
  const obj = { tile: obj2 };
  return obj;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNewProjectIcon(arg0) {
  let tmp10;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(12);
  if (cResult[0] !== closure_7[arg0.size]) {
    const tmpResult = useConjureProjectIcon;
    const result = tmpResult.conjureProjectIconMetrics(tmp4);
    cResult[0] = closure_7[arg0.size];
    cResult[1] = result;
    tmp5 = result;
  } else {
    tmp5 = cResult[1];
  }
  const tmp7 = closure_8(closure_7[arg0.size], tmp5.radius, tmp5.glyphSize);
  const tmpResult2 = useToken;
  const token = tmpResult2.useToken(nativeDefault.colors.BACKGROUND_BRAND);
  if (cResult[2] !== token) {
    const obj4 = _modDef683(token);
    const alphaResult = obj4.alpha(0.24);
    const cssResult = alphaResult.css();
    cResult[2] = token;
    cResult[3] = cssResult;
    tmp10 = cssResult;
  } else {
    tmp10 = cResult[3];
  }
  const tmp12 = closure_9(tmp10);
  if (cResult[4] === tmp7.frame) {
    let tmp13;
    let tmp14;
    if (cResult[5] === tmp12.tile) {
      tmp13 = cResult[6];
    }
    if (cResult[7] !== tmp7.glyph) {
      const obj2 = { size: "custom", style: tmp7.glyph, color: nativeDefault.colors.ICON_BRAND };
      const MagicWandIcon = tmp(12174).MagicWandIcon;
      const tmp16 = hasOwnProperty(MagicWandIcon, obj2);
      cResult[7] = tmp7.glyph;
      cResult[8] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[8];
    }
    if (cResult[9] === tmp13) {
      let tmp17;
      if (cResult[10] === tmp14) {
        tmp17 = cResult[11];
      }
      return tmp17;
    }
    const obj3 = { style: tmp13, children: tmp14 };
    const tmp20 = hasOwnProperty(React3, obj3);
    cResult[9] = tmp13;
    cResult[10] = tmp14;
    cResult[11] = tmp20;
    tmp17 = tmp20;
  }
  const items = [tmp7.frame, tmp12.tile];
  cResult[4] = tmp7.frame;
  cResult[5] = tmp12.tile;
  cResult[6] = items;
  tmp13 = items;
}) : (function ConjureNewProjectIcon(arg0) {
  let MagicWandIcon;
  let items;
  let obj5;
  const obj = useConjureProjectIcon;
  const result = obj.conjureProjectIconMetrics(tmp);
  const tmp3 = closure_8(closure_7[arg0.size], result.radius, result.glyphSize);
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.BACKGROUND_BRAND);
  const obj3 = _modDef683(token);
  const obj4 = { style: items, children: hasOwnProperty(MagicWandIcon, obj5) };
  items = [tmp3.frame, ];
  const alphaResult = obj3.alpha(0.24);
  items[1] = closure_9(alphaResult.css()).tile;
  obj5 = { size: "custom", style: tmp3.glyph, color: nativeDefault.colors.ICON_BRAND };
  MagicWandIcon = MagicWandIcon2.MagicWandIcon;
  return hasOwnProperty(React3, obj4);
});
let result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectIcon.tsx");

export default tmp5;
export const ConjureNewProjectIcon = tmp6;
