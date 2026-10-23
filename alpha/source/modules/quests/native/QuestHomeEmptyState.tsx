// Module ID: 16322
// Function ID: 16323
// Name: QuestHomeEmptyState
// Dependencies: [19, 17, 1087, 21, 4969, 587, 558, 576, 1128, 5250, 5151, 1384, 5232, 5667, 16323, 5256, 7219, 2]

// Module 16322 (QuestHomeEmptyState)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import intl3 from "intl" /* 1128 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import useChatLayoutDefault from "useChatLayout" /* 5151 */;
import Text_Text from "Text/Text" /* 5232 */;
import useToken from "useToken" /* 5250 */;
import LinearGradientDefault from "LinearGradient" /* 5256 */;
import FastImageDefault from "FastImage" /* 5667 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7219 */;
import AssetRegistryDefault from "AssetRegistry" /* 16323 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c3;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ View: c3, StyleSheet } = react_native);
const VerticalGradient = Constants.VerticalGradient;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, emptyStateContainer: { justifyContent: "center", alignItems: "center", flex: 1 }, emptyStateContainerBelowContent: obj2, emptyStateContentContainer: obj3, emptyStateContentContainerScreenCentered: { top: -55 }, emptyStateContentTitle: { textAlign: "center" }, emptyStateContentDescription: { textAlign: "center", marginTop: 4 }, emptyImage: { flex: 1, width: "100%", aspectRatio: 1.6375545851528384, minWidth: "100%", position: "absolute", bottom: 0, zIndex: -1 }, backgroundImage: obj4, gradient: { height: 22, width: "100%", position: "absolute", bottom: 0 }, actionWrapper: { marginTop: 16, alignSelf: "center" } };
obj2 = { justifyContent: "flex-start", paddingTop: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_32 };
obj4 = { width: "100%", height: undefined };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_8 = createStyles(obj);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestHomeEmptyState(arg0) {
  let action;
  let hasContentAbove;
  let items;
  let items1;
  let items2;
  let items3;
  let obj7;
  let subtitle;
  let title;
  let tmp10Result;
  let tmp12;
  let tmp5;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(41);
  ({ hasContentAbove, action, title, subtitle } = arg0);
  if (cResult[0] !== title) {
    let stringResult = title;
    if (undefined === title) {
      const intl = tmp(1128).intl;
      stringResult = intl.string(tmp(1128).t.SdlRnK);
    }
    cResult[0] = title;
    cResult[1] = stringResult;
    tmp5 = stringResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== subtitle) {
    let stringResult1 = subtitle;
    if (undefined === subtitle) {
      const intl2 = tmp(1128).intl;
      stringResult1 = intl2.string(tmp(1128).t["R7mv+G"]);
    }
    cResult[2] = subtitle;
    cResult[3] = stringResult1;
    tmp7 = stringResult1;
  } else {
    tmp7 = cResult[3];
  }
  const tmp9 = closure_8();
  const tmpResult = useToken;
  const token = tmpResult.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
  const isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult2 = PlatformUtils;
    const isAndroidResult = tmpResult2.isAndroid();
    cResult[4] = isAndroidResult;
    tmp12 = isAndroidResult;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === tmp9.emptyStateContainer) {
    let tmp15;
    if (cResult[6] === (undefined !== hasContentAbove && hasContentAbove && tmp9.emptyStateContainerBelowContent)) {
      tmp15 = cResult[7];
    }
    if (cResult[8] === tmp9.emptyStateContentContainer) {
      let tmp17;
      if (cResult[9] === (!(undefined !== hasContentAbove && hasContentAbove) && tmp9.emptyStateContentContainerScreenCentered)) {
        tmp17 = cResult[10];
      }
      if (cResult[11] === tmp9.emptyStateContentTitle) {
        let tmp18;
        if (cResult[12] === tmp5) {
          tmp18 = cResult[13];
        }
        if (cResult[14] === tmp9.emptyStateContentDescription) {
          let tmp21;
          if (cResult[15] === tmp7) {
            tmp21 = cResult[16];
          }
          if (cResult[17] === action) {
            let tmp24;
            if (cResult[18] === tmp9.actionWrapper) {
              tmp24 = cResult[19];
            }
            if (cResult[20] === tmp17) {
              if (cResult[21] === tmp18) {
                if (cResult[22] === tmp21) {
                  let tmp29;
                  if (cResult[23] === tmp24) {
                    tmp29 = cResult[24];
                  }
                  if (cResult[25] === token) {
                    if (cResult[26] === isChatLockedOpen) {
                      if (cResult[27] === tmp9.backgroundImage) {
                        if (cResult[28] === tmp9.emptyImage) {
                          let tmp33;
                          if (cResult[29] === tmp9.gradient) {
                            tmp33 = cResult[30];
                          }
                          if (cResult[31] === tmp29) {
                            if (cResult[32] === tmp33) {
                              let tmp41;
                              if (cResult[33] === tmp15) {
                                tmp41 = cResult[34];
                              }
                              if (cResult[35] === tmp9.container) {
                                let tmp45;
                                if (cResult[36] === tmp41) {
                                  tmp45 = cResult[37];
                                }
                                if (cResult[38] === tmp9.container) {
                                  let tmp49;
                                  if (cResult[39] === tmp45) {
                                    tmp49 = cResult[40];
                                  }
                                  return tmp49;
                                }
                                const obj2 = { bottom: tmp12, style: tmp9.container, children: tmp45 };
                                const tmp51 = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj2);
                                cResult[38] = tmp9.container;
                                cResult[39] = tmp45;
                                cResult[40] = tmp51;
                                tmp49 = tmp51;
                              }
                              const obj3 = { style: tmp9.container, children: tmp41 };
                              const tmp48 = hasOwnProperty(_false, obj3);
                              cResult[35] = tmp9.container;
                              cResult[36] = tmp41;
                              cResult[37] = tmp48;
                              tmp45 = tmp48;
                            }
                          }
                          const obj4 = { style: tmp15, children: items };
                          items = [tmp29, tmp33];
                          const tmp44 = metroRequire(_false, obj4);
                          cResult[31] = tmp29;
                          cResult[32] = tmp33;
                          cResult[33] = tmp15;
                          cResult[34] = tmp44;
                          tmp41 = tmp44;
                        }
                      }
                    }
                  }
                  let tmp34 = null;
                  if (!isChatLockedOpen) {
                    const obj5 = { children: items1 };
                    const obj6 = { style: tmp9.emptyImage, children: hasOwnProperty(tmp10Result, obj7) };
                    obj7 = { style: tmp9.backgroundImage, source: AssetRegistryDefault, resizeMode: "cover" };
                    tmp10Result = FastImageDefault;
                    items1 = [hasOwnProperty(_false, obj6), ];
                    const obj8 = { style: tmp9.gradient, end: null, start: null, colors: items2 };
                    ({ END: obj11.end, START: obj11.start } = VerticalGradient);
                    items2 = ["rgba(0, 0, 0, 0)", token];
                    items1[1] = hasOwnProperty(LinearGradientDefault, obj8);
                    tmp34 = metroRequire(metroImportDefault, obj5);
                  }
                  cResult[25] = token;
                  cResult[26] = isChatLockedOpen;
                  cResult[27] = tmp9.backgroundImage;
                  cResult[28] = tmp9.emptyImage;
                  cResult[29] = tmp9.gradient;
                  cResult[30] = tmp34;
                  tmp33 = tmp34;
                }
              }
            }
            const obj9 = { style: tmp17, children: items3 };
            items3 = [tmp18, tmp21, tmp24];
            const tmp32 = metroRequire(_false, obj9);
            cResult[20] = tmp17;
            cResult[21] = tmp18;
            cResult[22] = tmp21;
            cResult[23] = tmp24;
            cResult[24] = tmp32;
            tmp29 = tmp32;
          }
          let tmp26 = null != action;
          if (tmp26) {
            const obj10 = { style: tmp9.actionWrapper, children: action };
            tmp26 = hasOwnProperty(_false, obj10);
          }
          cResult[17] = action;
          cResult[18] = tmp9.actionWrapper;
          cResult[19] = tmp26;
          tmp24 = tmp26;
        }
        const obj12 = { variant: "text-md/normal", color: "text-default", style: tmp9.emptyStateContentDescription, children: tmp7 };
        const tmp23 = hasOwnProperty(Text_Text.Text, obj12);
        cResult[14] = tmp9.emptyStateContentDescription;
        cResult[15] = tmp7;
        cResult[16] = tmp23;
        tmp21 = tmp23;
      }
      const obj13 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp9.emptyStateContentTitle, children: tmp5 };
      const tmp20 = hasOwnProperty(Text_Text.Text, obj13);
      cResult[11] = tmp9.emptyStateContentTitle;
      cResult[12] = tmp5;
      cResult[13] = tmp20;
      tmp18 = tmp20;
    }
    const items4 = [tmp9.emptyStateContentContainer, !(undefined !== hasContentAbove && hasContentAbove) && tmp9.emptyStateContentContainerScreenCentered];
    cResult[8] = tmp9.emptyStateContentContainer;
    cResult[9] = !(undefined !== hasContentAbove && hasContentAbove) && tmp9.emptyStateContentContainerScreenCentered;
    cResult[10] = items4;
    tmp17 = items4;
  }
  const items5 = [tmp9.emptyStateContainer, undefined !== hasContentAbove && hasContentAbove && tmp9.emptyStateContainerBelowContent];
  cResult[5] = tmp9.emptyStateContainer;
  cResult[6] = undefined !== hasContentAbove && hasContentAbove && tmp9.emptyStateContainerBelowContent;
  cResult[7] = items5;
  tmp15 = items5;
}) : (function QuestHomeEmptyState(hasContentAbove) {
  let action;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj12;
  let obj3;
  let obj4;
  let obj5;
  let title;
  let tmp8Result;
  let flag = hasContentAbove.hasContentAbove;
  if (flag === undefined) {
    flag = false;
  }
  ({ action, title } = hasContentAbove);
  if (title === undefined) {
    const intl = intl3.intl;
    title = intl.string(intl3.t.SdlRnK);
  }
  let subtitle = hasContentAbove.subtitle;
  if (subtitle === undefined) {
    const intl2 = intl3.intl;
    subtitle = intl2.string(intl3.t["R7mv+G"]);
  }
  const tmp5 = closure_8();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
  const isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  const obj2 = { bottom: obj3.isAndroid(), style: tmp5.container, children: hasOwnProperty(_false, obj4) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj3 = PlatformUtils;
  const items = [tmp5.emptyStateContainer, ];
  obj4 = { style: tmp5.container, children: metroRequire(_false, obj5) };
  obj5 = { style: items, children: items3 };
  const tmp13 = flag && tmp5.emptyStateContainerBelowContent;
  items[1] = tmp13;
  const items1 = [tmp5.emptyStateContentContainer, ];
  const obj6 = { style: items1, children: items2 };
  const tmp14 = !flag && tmp5.emptyStateContentContainerScreenCentered;
  items1[1] = tmp14;
  items2 = [, , ];
  const obj7 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp5.emptyStateContentTitle, children: title };
  items2[0] = hasOwnProperty(Text_Text.Text, obj7);
  const obj8 = { variant: "text-md/normal", color: "text-default", style: tmp5.emptyStateContentDescription, children: subtitle };
  items2[1] = hasOwnProperty(Text_Text.Text, obj8);
  let tmp10Result = null != action;
  if (tmp10Result) {
    const obj9 = { style: tmp5.actionWrapper, children: action };
    tmp10Result = tmp10(tmp11, obj9);
  }
  items2[2] = tmp10Result;
  items3 = [metroRequire(_false, obj6), ];
  let tmp12Result = null;
  if (!isChatLockedOpen) {
    const obj10 = { children: items4 };
    const obj11 = { style: tmp5.emptyImage, children: hasOwnProperty(tmp8Result, obj12) };
    obj12 = { style: tmp5.backgroundImage, source: AssetRegistryDefault, resizeMode: "cover" };
    tmp8Result = FastImageDefault;
    items4 = [hasOwnProperty(_false, obj11), ];
    const obj24 = { style: tmp5.gradient, end: null, start: null, colors: items5 };
    ({ END: obj13.end, START: obj13.start } = VerticalGradient);
    items5 = ["rgba(0, 0, 0, 0)", token];
    items4[1] = hasOwnProperty(LinearGradientDefault, obj24);
    tmp12Result = tmp12(metroImportDefault, obj10);
  }
  items3[1] = tmp12Result;
  return hasOwnProperty(SafeAreaPaddingView, obj2);
});
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeEmptyState.tsx");

export default tmp7;
