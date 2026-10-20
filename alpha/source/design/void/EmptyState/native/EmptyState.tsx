// Module ID: 15248
// Function ID: 15249
// Name: EmptyState
// Dependencies: [19, 17, 21, 4945, 587, 558, 576, 4952, 5631, 5195, 2]

// Module 15248 (EmptyState)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import shared from "shared" /* 4952 */;
import FastImageDefault from "FastImage" /* 5631 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4945 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = { textTransform: "none" };
let closure_7 = { accessible: false, accessibilityRole: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
let obj = { container: obj2, emptyImage: { flex: 1, maxWidth: 300, maxHeight: 200 }, textGroup: { alignSelf: "stretch", alignItems: "center" }, emptyTitle: { marginTop: 20, textTransform: "uppercase" }, emptyBody: { textAlign: "center", marginTop: 8 } };
obj2 = { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 36, paddingBottom: 80, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_8 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmptyState(Illustration) {
  let body;
  let bodyStyle;
  let children;
  let items2;
  let items3;
  let items4;
  let items5;
  let style;
  let title;
  let titleStyle;
  let tmp10;
  const obj = react2;
  const cResult = obj.c(30);
  const tmp4 = closure_8();
  const obj2 = shared;
  const themeContext = obj2.useThemeContext();
  let hasItem;
  if (themeContext != null) {
    const enabledExperiments = themeContext.enabledExperiments;
    if (enabledExperiments != null) {
      hasItem = enabledExperiments.includes("mana-type-consolidation");
    }
  }
  shared;
  if (null != Illustration.Illustration) {
    if (cResult[0] === Illustration.imageStyle) {
      let tmp21;
      if (cResult[1] === tmp4.emptyImage) {
        tmp21 = cResult[2];
      }
      if (cResult[3] === Illustration.Illustration) {
        let tmp22;
        if (cResult[4] === tmp21) {
          tmp22 = cResult[5];
        }
        tmp10 = tmp22;
      }
      Illustration = Illustration.Illustration;
      const obj3 = { resizeMode: "contain", style: tmp21 };
      const merged = Object.assign(closure_7);
      const tmp27 = React3(Illustration, obj3);
      cResult[3] = Illustration.Illustration;
      cResult[4] = tmp21;
      cResult[5] = tmp27;
      tmp22 = tmp27;
    }
    const items = [tmp4.emptyImage, Illustration.imageStyle];
    cResult[0] = Illustration.imageStyle;
    cResult[1] = tmp4.emptyImage;
    cResult[2] = items;
    tmp21 = items;
  } else {
    tmp10 = null;
    if (null != Illustration.lightSource) {
      tmp10 = null;
      if (null != Illustration.darkSource) {
        const tmpResult2 = shared;
        const tmp11 = tmpResult2.isThemeLight(tmp9) ? Illustration.lightSource : Illustration.darkSource;
        if (cResult[6] === Illustration.imageStyle) {
          let tmp12;
          if (cResult[7] === tmp4.emptyImage) {
            tmp12 = cResult[8];
          }
          if (cResult[9] === tmp11) {
            let tmp13;
            if (cResult[10] === tmp12) {
              tmp13 = cResult[11];
            }
            tmp10 = tmp13;
          }
          const obj4 = { resizeMode: "contain", source: tmp11, style: tmp12 };
          const tmp16 = FastImageDefault;
          const merged1 = Object.assign(closure_7);
          const tmp20 = React3(tmp16, obj4);
          cResult[9] = tmp11;
          cResult[10] = tmp12;
          cResult[11] = tmp20;
          tmp13 = tmp20;
        }
        const items1 = [tmp4.emptyImage, Illustration.imageStyle];
        cResult[6] = Illustration.imageStyle;
        cResult[7] = tmp4.emptyImage;
        cResult[8] = items1;
        tmp12 = items1;
      }
    }
  }
  ({ style, body, title, children, bodyStyle, titleStyle } = Illustration);
  if (cResult[12] === style) {
    let tmp29;
    if (cResult[13] === tmp4.container) {
      tmp29 = cResult[14];
    }
    if (cResult[15] === body) {
      if (cResult[16] === bodyStyle) {
        if (cResult[17] === (null != title || null != body)) {
          if (cResult[18] === tmp4.emptyBody) {
            if (cResult[19] === tmp4.emptyTitle) {
              if (cResult[20] === tmp4.textGroup) {
                if (cResult[21] === title) {
                  if (cResult[22] === titleStyle) {
                    let tmp30;
                    if (cResult[23] === tmp7) {
                      tmp30 = cResult[24];
                    }
                    if (cResult[25] === children) {
                      if (cResult[26] === tmp10) {
                        if (cResult[27] === tmp29) {
                          let tmp38;
                          if (cResult[28] === tmp30) {
                            tmp38 = cResult[29];
                          }
                          return tmp38;
                        }
                      }
                    }
                    const obj5 = { style: tmp29, children: items2 };
                    items2 = [tmp10, tmp30, children];
                    const tmp41 = hasOwnProperty(View, obj5);
                    cResult[25] = children;
                    cResult[26] = tmp10;
                    cResult[27] = tmp29;
                    cResult[28] = tmp30;
                    cResult[29] = tmp41;
                    tmp38 = tmp41;
                  }
                }
              }
            }
          }
        }
      }
    }
    let tmp32Result = null;
    if (null != title || null != body) {
      let tmp34 = null;
      const obj6 = { style: tmp4.textGroup, accessible: true, children: items4 };
      const tmp32 = hasOwnProperty;
      const tmp33 = View;
      if (null != title) {
        const obj7 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, style: items3, children: title };
        items3 = [tmp4.emptyTitle, titleStyle, tmp7];
        tmp34 = React3(tmp(5195).Text, obj7);
      }
      items4 = [tmp34, ];
      let tmp36 = null;
      if (null != body) {
        const obj8 = { variant: "text-md/medium", color: "text-muted", maxFontSizeMultiplier: 2, style: items5, children: body };
        items5 = [tmp4.emptyBody, bodyStyle];
        tmp36 = React3(tmp(5195).Text, obj8);
      }
      items4[1] = tmp36;
      tmp32Result = tmp32(tmp33, obj6);
    }
    cResult[15] = body;
    cResult[16] = bodyStyle;
    cResult[17] = null != title || null != body;
    cResult[18] = tmp4.emptyBody;
    cResult[19] = tmp4.emptyTitle;
    cResult[20] = tmp4.textGroup;
    cResult[21] = title;
    cResult[22] = titleStyle;
    cResult[23] = tmp7;
    cResult[24] = tmp32Result;
    tmp30 = tmp32Result;
  }
  const items6 = [tmp4.container, style];
  cResult[12] = style;
  cResult[13] = tmp4.container;
  cResult[14] = items6;
  tmp29 = items6;
}) : (function EmptyState(Illustration) {
  let body;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let title;
  let tmp11Result;
  let tmp23Result;
  let tmp2Result2;
  let tmp6;
  const tmp = closure_8();
  const obj = shared;
  const themeContext = obj.useThemeContext();
  let hasItem;
  if (themeContext != null) {
    const enabledExperiments = themeContext.enabledExperiments;
    if (enabledExperiments != null) {
      hasItem = enabledExperiments.includes("mana-type-consolidation");
    }
  }
  if (true === hasItem) {
    tmp6 = closure_6;
  }
  shared;
  if (null != Illustration.Illustration) {
    Illustration = Illustration.Illustration;
    const obj2 = { resizeMode: "contain", style: items };
    const merged = Object.assign(closure_7);
    items = [tmp.emptyImage, Illustration.imageStyle];
    tmp11Result = React3(Illustration, obj2);
  } else {
    tmp11Result = null;
    const tmp9 = null != Illustration.lightSource && null != Illustration.darkSource;
    if (tmp9) {
      const obj3 = { resizeMode: "contain", source: tmp2Result2.isThemeLight(tmp8) ? Illustration.lightSource : Illustration.darkSource, style: items1 };
      const tmp13 = FastImageDefault;
      const merged1 = Object.assign(closure_7);
      items1 = [tmp.emptyImage, Illustration.imageStyle];
      tmp2Result2 = shared;
      tmp11Result = React3(tmp13, obj3);
    }
  }
  ({ body, title } = Illustration);
  const obj4 = { style: items2, children: items3 };
  items2 = [tmp.container, Illustration.style];
  items3 = [tmp11Result, , ];
  const children = Illustration.children;
  if (null != title) {
    let tmp26 = null;
    const obj5 = { style: tmp.textGroup, accessible: true, children: items5 };
    if (null != title) {
      const obj6 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, style: items4, children: title };
      items4 = [tmp.emptyTitle, tmp22, tmp6];
      tmp26 = React3(tmp2(5195).Text, obj6);
    }
    items5 = [tmp26, ];
    let tmp28 = null;
    if (null != body) {
      const obj7 = { variant: "text-md/medium", color: "text-muted", maxFontSizeMultiplier: 2, style: items6, children: body };
      items6 = [tmp.emptyBody, tmp21];
      tmp28 = React3(tmp2(5195).Text, obj7);
    }
    items5[1] = tmp28;
    tmp23Result = tmp23(tmp24, obj5);
  } else {
    tmp23Result = null;
  }
  items3[1] = tmp23Result;
  items3[2] = children;
  return hasOwnProperty(View, obj4);
});
const result = size.fileFinishedImporting("design/void/EmptyState/native/EmptyState.tsx");

export default tmp4;
