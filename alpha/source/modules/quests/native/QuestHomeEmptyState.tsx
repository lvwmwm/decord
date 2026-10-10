// Module ID: 15316
// Function ID: 15317
// Name: QuestHomeEmptyState
// Dependencies: [19, 17, 1085, 21, 5092, 587, 558, 576, 1126, 4818, 4979, 1382, 5088, 6156, 15317, 5391, 6813, 2]

// Module 15316 (QuestHomeEmptyState)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import useToken from "useToken" /* 4818 */;
import useChatLayoutDefault from "useChatLayout" /* 4979 */;
import Text_Text from "Text/Text" /* 5088 */;
import LinearGradientDefault from "LinearGradient" /* 5391 */;
import FastImageDefault from "FastImage" /* 6156 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6813 */;
import AssetRegistryDefault from "AssetRegistry" /* 15317 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c3;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ View: c3, StyleSheet } = react_native);
const VerticalGradient = Constants.VerticalGradient;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, emptyStateContainer: { justifyContent: "center", alignItems: "center", flex: 1 }, emptyStateContentContainer: obj2, emptyStateContentTitle: { textAlign: "center" }, emptyStateContentDescription: { textAlign: "center", marginTop: 4 }, emptyImage: { flex: 1, width: "100%", aspectRatio: 1.6375545851528384, minWidth: "100%", position: "absolute", bottom: 0, zIndex: -1 }, backgroundImage: obj3, gradient: { height: 22, width: "100%", position: "absolute", bottom: 0 }, actionWrapper: { marginTop: 16, alignSelf: "center" } };
obj2 = { top: -55, paddingHorizontal: nativeDefault.space.PX_32 };
createStyles = createStyles.createStyles;
obj3 = { width: "100%", height: undefined };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_8 = createStyles(obj);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestHomeEmptyState(arg0) {
  let action;
  let items;
  let items1;
  let items2;
  let items3;
  let obj7;
  let subtitle;
  let title;
  let tmp11;
  let tmp4;
  let tmp6;
  let tmp9Result;
  const obj = react2;
  const cResult = obj.c(35);
  ({ action, title, subtitle } = arg0);
  if (cResult[0] !== title) {
    let stringResult = title;
    if (undefined === title) {
      const intl = tmp(1126).intl;
      stringResult = intl.string(tmp(1126).t.SdlRnK);
    }
    cResult[0] = title;
    cResult[1] = stringResult;
    tmp4 = stringResult;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== subtitle) {
    let stringResult1 = subtitle;
    if (undefined === subtitle) {
      const intl2 = tmp(1126).intl;
      stringResult1 = intl2.string(tmp(1126).t["R7mv+G"]);
    }
    cResult[2] = subtitle;
    cResult[3] = stringResult1;
    tmp6 = stringResult1;
  } else {
    tmp6 = cResult[3];
  }
  const tmp8 = closure_8();
  const tmpResult = useToken;
  const token = tmpResult.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
  const isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult2 = PlatformUtils;
    const isAndroidResult = tmpResult2.isAndroid();
    cResult[4] = isAndroidResult;
    tmp11 = isAndroidResult;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === tmp8.emptyStateContentTitle) {
    let tmp13;
    if (cResult[6] === tmp4) {
      tmp13 = cResult[7];
    }
    if (cResult[8] === tmp8.emptyStateContentDescription) {
      let tmp15;
      if (cResult[9] === tmp6) {
        tmp15 = cResult[10];
      }
      if (cResult[11] === action) {
        let tmp18;
        if (cResult[12] === tmp8.actionWrapper) {
          tmp18 = cResult[13];
        }
        if (cResult[14] === tmp8.emptyStateContentContainer) {
          if (cResult[15] === tmp13) {
            if (cResult[16] === tmp15) {
              let tmp23;
              if (cResult[17] === tmp18) {
                tmp23 = cResult[18];
              }
              if (cResult[19] === token) {
                if (cResult[20] === isChatLockedOpen) {
                  if (cResult[21] === tmp8.backgroundImage) {
                    if (cResult[22] === tmp8.emptyImage) {
                      let tmp27;
                      if (cResult[23] === tmp8.gradient) {
                        tmp27 = cResult[24];
                      }
                      if (cResult[25] === tmp8.emptyStateContainer) {
                        if (cResult[26] === tmp27) {
                          let tmp35;
                          if (cResult[27] === tmp23) {
                            tmp35 = cResult[28];
                          }
                          if (cResult[29] === tmp8.container) {
                            let tmp39;
                            if (cResult[30] === tmp35) {
                              tmp39 = cResult[31];
                            }
                            if (cResult[32] === tmp8.container) {
                              let tmp43;
                              if (cResult[33] === tmp39) {
                                tmp43 = cResult[34];
                              }
                              return tmp43;
                            }
                            const obj2 = { bottom: tmp11, style: tmp8.container, children: tmp39 };
                            const tmp45 = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj2);
                            cResult[32] = tmp8.container;
                            cResult[33] = tmp39;
                            cResult[34] = tmp45;
                            tmp43 = tmp45;
                          }
                          const obj3 = { style: tmp8.container, children: tmp35 };
                          const tmp42 = hasOwnProperty(_false, obj3);
                          cResult[29] = tmp8.container;
                          cResult[30] = tmp35;
                          cResult[31] = tmp42;
                          tmp39 = tmp42;
                        }
                      }
                      const obj4 = { style: tmp8.emptyStateContainer, children: items };
                      items = [tmp23, tmp27];
                      const tmp38 = metroRequire(_false, obj4);
                      cResult[25] = tmp8.emptyStateContainer;
                      cResult[26] = tmp27;
                      cResult[27] = tmp23;
                      cResult[28] = tmp38;
                      tmp35 = tmp38;
                    }
                  }
                }
              }
              let tmp28 = null;
              if (!isChatLockedOpen) {
                const obj5 = { children: items1 };
                const obj6 = { style: tmp8.emptyImage, children: hasOwnProperty(tmp9Result, obj7) };
                obj7 = { style: tmp8.backgroundImage, source: AssetRegistryDefault, resizeMode: "cover" };
                tmp9Result = FastImageDefault;
                items1 = [hasOwnProperty(_false, obj6), ];
                const obj8 = { style: tmp8.gradient, end: null, start: null, colors: items2 };
                ({ END: obj11.end, START: obj11.start } = VerticalGradient);
                items2 = ["rgba(0, 0, 0, 0)", token];
                items1[1] = hasOwnProperty(LinearGradientDefault, obj8);
                tmp28 = metroRequire(metroImportDefault, obj5);
              }
              cResult[19] = token;
              cResult[20] = isChatLockedOpen;
              cResult[21] = tmp8.backgroundImage;
              cResult[22] = tmp8.emptyImage;
              cResult[23] = tmp8.gradient;
              cResult[24] = tmp28;
              tmp27 = tmp28;
            }
          }
        }
        const obj9 = { style: tmp8.emptyStateContentContainer, children: items3 };
        items3 = [tmp13, tmp15, tmp18];
        const tmp26 = metroRequire(_false, obj9);
        cResult[14] = tmp8.emptyStateContentContainer;
        cResult[15] = tmp13;
        cResult[16] = tmp15;
        cResult[17] = tmp18;
        cResult[18] = tmp26;
        tmp23 = tmp26;
      }
      let tmp20 = null != action;
      if (tmp20) {
        const obj10 = { style: tmp8.actionWrapper, children: action };
        tmp20 = hasOwnProperty(_false, obj10);
      }
      cResult[11] = action;
      cResult[12] = tmp8.actionWrapper;
      cResult[13] = tmp20;
      tmp18 = tmp20;
    }
    const obj12 = { variant: "text-md/normal", color: "text-default", style: tmp8.emptyStateContentDescription, children: tmp6 };
    const tmp17 = hasOwnProperty(Text_Text.Text, obj12);
    cResult[8] = tmp8.emptyStateContentDescription;
    cResult[9] = tmp6;
    cResult[10] = tmp17;
    tmp15 = tmp17;
  }
  const obj13 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp8.emptyStateContentTitle, children: tmp4 };
  const tmp14 = hasOwnProperty(Text_Text.Text, obj13);
  cResult[5] = tmp8.emptyStateContentTitle;
  cResult[6] = tmp4;
  cResult[7] = tmp14;
  tmp13 = tmp14;
}) : (function QuestHomeEmptyState(subtitle) {
  let action;
  let items;
  let items1;
  let items2;
  let items3;
  let obj12;
  let obj3;
  let obj4;
  let obj5;
  let title;
  let tmp7Result;
  ({ action, title } = subtitle);
  if (title === undefined) {
    const intl = intl3.intl;
    title = intl.string(intl3.t.SdlRnK);
  }
  subtitle = subtitle.subtitle;
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
  obj4 = { style: tmp5.container, children: metroRequire(_false, obj5) };
  const obj6 = { style: tmp5.emptyStateContentContainer, children: items };
  items = [, , ];
  obj5 = { style: tmp5.emptyStateContainer, children: items1 };
  const obj7 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp5.emptyStateContentTitle, children: title };
  items[0] = hasOwnProperty(Text_Text.Text, obj7);
  const obj8 = { variant: "text-md/normal", color: "text-default", style: tmp5.emptyStateContentDescription, children: subtitle };
  items[1] = hasOwnProperty(Text_Text.Text, obj8);
  let tmp9Result = null != action;
  if (tmp9Result) {
    const obj9 = { style: tmp5.actionWrapper, children: action };
    tmp9Result = tmp9(tmp10, obj9);
  }
  items[2] = tmp9Result;
  items1 = [metroRequire(_false, obj6), ];
  let tmp11Result = null;
  if (!isChatLockedOpen) {
    const obj10 = { children: items2 };
    const obj11 = { style: tmp5.emptyImage, children: hasOwnProperty(tmp7Result, obj12) };
    obj12 = { style: tmp5.backgroundImage, source: AssetRegistryDefault, resizeMode: "cover" };
    tmp7Result = FastImageDefault;
    items2 = [hasOwnProperty(_false, obj11), ];
    const obj24 = { style: tmp5.gradient, end: null, start: null, colors: items3 };
    ({ END: obj13.end, START: obj13.start } = VerticalGradient);
    items3 = ["rgba(0, 0, 0, 0)", token];
    items2[1] = hasOwnProperty(LinearGradientDefault, obj24);
    tmp11Result = tmp11(metroImportDefault, obj10);
  }
  items1[1] = tmp11Result;
  return hasOwnProperty(SafeAreaPaddingView, obj2);
});
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeEmptyState.tsx");

export default tmp7;
