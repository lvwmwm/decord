// Module ID: 18361
// Function ID: 18362
// Name: DisplayNameStylesFlywheelMobileActionSheet
// Dependencies: [19, 17, 1392, 1087, 4818, 21, 558, 576, 4983, 4976, 5203, 7072, 504, 2053, 15831, 1128, 2928, 4999, 4805, 15909, 7488, 7131, 5580, 18362, 1384, 5667, 18366, 9400, 5232, 5242, 7219, 5263, 4969, 587, 2]

// Module 18361 (DisplayNameStylesFlywheelMobileActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import dismissible_content from "dismissible_content" /* 4805 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4818 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4999 */;
import openUserSettings from "openUserSettings" /* 7488 */;
import openPremiumTryItOutModal from "openPremiumTryItOutModal" /* 15909 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1392 */;
import Constants from "Constants" /* 1087 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import createStyles from "createStyles" /* 4969 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ UserSettingsSections: metroRequire, Fonts: metroImportDefault } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c9, jsxs: c10 } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function DisplayNameStylesFlywheelMobileActionSheet(markAsDismissed) {
  let closure_2;
  let currentUser;
  let enabled2;
  let items1;
  let tmp10;
  let tmp13;
  let tmp25;
  let tmp9;
  const tmp = markAsDismissed;
  let tmp2 = dependencyMap;
  let obj = markAsDismissed(576);
  const cResult = obj.c(56);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const ref = enabled2.useRef(null);
  const enabled = enabled2.useContext(markAsDismissed(4983).AccessibilityPreferencesContext).reducedMotion.enabled;
  let obj2 = markAsDismissed(4976);
  obj2.isThemeDark(ref(5203)());
  const tmp7 = closure_11();
  let obj3 = markAsDismissed(7072);
  const typeConsolidationTextTransform = obj3.useTypeConsolidationTextTransform("DisplayNameStylesFlywheel");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function y() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = fn;
    tmp9 = items;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp10);
  if (cResult[2] !== stateFromStores) {
    const tmp5Result = ref(2053);
    let result = tmp5Result.canUsePremiumProfileCustomization(stateFromStores);
    cResult[2] = stateFromStores;
    cResult[3] = result;
    tmp13 = result;
  } else {
    tmp13 = cResult[3];
  }
  dependencyMap = tmp13;
  const tmpResult2 = tmp(15831);
  enabled2 = tmpResult2.useTryItOutMobileRefreshConfig("DisplayNameStylesFlywheelMobileActionSheet").enabled;
  if (cResult[4] !== tmp13) {
    let stringResult;
    const intl = tmp(1128).intl;
    const string = intl.string;
    const tmp5Result3 = ref(2928);
    if (tmp13) {
      stringResult = string(tmp5Result3.TyUdka);
    } else {
      stringResult = string(tmp5Result3.dluV0R);
    }
    cResult[4] = tmp13;
    cResult[5] = stringResult;
    let tmp15 = stringResult;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] === tmp13) {
    if (cResult[7] === enabled2) {
      if (cResult[10] !== markAsDismissed) {
        class L {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
        cResult[10] = markAsDismissed;
        cResult[11] = L;
      } else {
        class L {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
      if (cResult[12] !== markAsDismissed) {
        class L {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
        cResult[12] = markAsDismissed;
        cResult[13] = tmp21;
      } else {
        class L {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
      const content = tmp7.content;
      if (cResult[14] !== markAsDismissed) {
        class L {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
        let obj4 = {
          onPress() {
                  const current = ref.current;
                  if (current != null) {
                    current.closeActionSheet();
                  }
                  markAsDismissed(ContentDismissActionType.USER_DISMISS);
                }
        };
        cResult[14] = markAsDismissed;
        cResult[15] = closure_9(tmp(5580).ActionSheetHeaderBar, obj4);
        const tmp23 = closure_9(tmp(5580).ActionSheetHeaderBar, obj4);
      } else {
        class L {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
      if (cResult[16] !== enabled) {
        class L {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
        if (tmp25) {
          class L {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
          tmp25 = closure_9(tmp(18362).DisplayNameStylesV2AbstractUI, { resizeMode: "contain" });
        }
        cResult[16] = enabled;
        cResult[17] = tmp25;
      } else {
        class L {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
      if (cResult[18] === enabled) {
        class L {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
        if (cResult[21] === tmp7.imageContainer) {
          class L {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
        }
        const obj5 = { style: tmp7.imageContainer, children: items1 };
        items1 = [tmp24, tmp26];
        cResult[21] = tmp7.imageContainer;
        cResult[22] = tmp24;
        cResult[23] = tmp26;
        cResult[24] = closure_10(View, obj5);
        const tmp36 = closure_10(View, obj5);
      }
      let tmp27 = !enabled;
      if (tmp27) {
        let tmp28Result;
        class L {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
        if (obj8.isIOS()) {
          class L {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
          const obj6 = { uri: ref(18366) };
          tmp32[0] = obj6;
          tmp32[1] = tmp7.image;
          tmp32[3] = !enabled;
          const tmp5Result4 = ref(5667);
          tmp28Result = tmp28(tmp5Result4, tmp32);
        } else {
          class L {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
          const APNGPlayer = tmp(9400).APNGPlayer;
          tmp29[0] = ref(18366);
          tmp29[1] = tmp7.image;
          tmp28Result = tmp28(APNGPlayer, tmp29);
        }
        tmp27 = tmp28Result;
      }
      cResult[18] = enabled;
      cResult[19] = tmp7.image;
      cResult[20] = tmp27;
    }
  }
  const fn2 = function v() {
    if (!closure_2) {
      const tmp2 = enabled2;
      if (tmp2) {
        markAsDismissed(ContentDismissActionType.TAKE_ACTION);
        let obj = DismissibleContentUnsafeUtils;
        let obj2 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
        let result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, obj2);
        const obj3 = openPremiumTryItOutModal;
        const result1 = obj3.openPremiumTryItOutModal("display-name-styles");
      }
    }
    const tmp15 = closure_2 ? metroRequire.PROFILE_CUSTOMIZATION : metroRequire.PROFILE_CUSTOMIZATION_TRY_IT_OUT;
    const obj4 = openUserSettings;
    obj4.openUserSettings({ screen: tmp15 }, () => {
      let obj = markAsDismissed(closure_2[21]);
      obj.runAfterInteractions(() => {
        let obj = markAsDismissed(closure_2_2[20]);
        let obj2 = { screen: constants.DISPLAY_NAME_STYLES };
        obj.openUserSettings(obj2, () => {
          closure_1_0(constants.TAKE_ACTION);
          const obj = closure_2_0(closure_2_2[17]);
          const obj2 = { dismissAction: constants.INDIRECT_ACTION };
          const result = obj.UNSAFE_markDismissibleContentAsDismissed(closure_2_0(closure_2_2[18]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, obj2);
        });
      });
    });
  };
  cResult[6] = tmp13;
  cResult[7] = enabled2;
  cResult[8] = markAsDismissed;
  cResult[9] = fn2;
}) : (function DisplayNameStylesFlywheelMobileActionSheet(markAsDismissed) {
  let SafeAreaPaddingView;
  let c2;
  let currentUser;
  let intl2;
  let intl3;
  let intl4;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj12;
  let obj16;
  let str2;
  let stringResult;
  markAsDismissed = markAsDismissed.markAsDismissed;
  let enabled2;
  let obj = enabled2;
  const ref = enabled2.useRef(null);
  let tmp2 = markAsDismissed;
  const enabled = enabled2.useContext(markAsDismissed(4983).AccessibilityPreferencesContext).reducedMotion.enabled;
  let obj2 = markAsDismissed(4976);
  const isThemeDarkResult = obj2.isThemeDark(ref(5203)());
  const tmp6 = closure_11();
  let obj3 = markAsDismissed(7072);
  const typeConsolidationTextTransform = obj3.useTypeConsolidationTextTransform("DisplayNameStylesFlywheel");
  let obj4 = markAsDismissed(504);
  const items = [UserStore];
  const stateFromStores = obj4.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj5 = ref(2053);
  let result = obj5.canUsePremiumProfileCustomization(stateFromStores);
  dependencyMap = result;
  const obj6 = markAsDismissed(15831);
  enabled2 = obj6.useTryItOutMobileRefreshConfig("DisplayNameStylesFlywheelMobileActionSheet").enabled;
  const intl = markAsDismissed(1128).intl;
  const string = intl.string;
  const tmp10 = ref(2928);
  if (result) {
    stringResult = string(tmp10.TyUdka);
  } else {
    stringResult = string(tmp10.dluV0R);
  }
  const items1 = [result, enabled2, markAsDismissed];
  const items2 = [markAsDismissed];
  const callback = obj.useCallback(() => {
    if (!c2) {
      const tmp2 = enabled2;
      if (tmp2) {
        markAsDismissed(ContentDismissActionType.TAKE_ACTION);
        let obj = DismissibleContentUnsafeUtils;
        let obj2 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
        let result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, obj2);
        const obj3 = openPremiumTryItOutModal;
        const result1 = obj3.openPremiumTryItOutModal("display-name-styles");
      }
    }
    const tmp15 = c2 ? metroRequire.PROFILE_CUSTOMIZATION : metroRequire.PROFILE_CUSTOMIZATION_TRY_IT_OUT;
    const obj4 = openUserSettings;
    obj4.openUserSettings({ screen: tmp15 }, () => {
      let obj = markAsDismissed(c2[21]);
      obj.runAfterInteractions(() => {
        let obj = markAsDismissed(closure_2_2[20]);
        let obj2 = { screen: constants.DISPLAY_NAME_STYLES };
        obj.openUserSettings(obj2, () => {
          closure_1_0(constants.TAKE_ACTION);
          const obj = closure_2_0(closure_2_2[17]);
          const obj2 = { dismissAction: constants.INDIRECT_ACTION };
          const result = obj.UNSAFE_markDismissibleContentAsDismissed(closure_2_0(closure_2_2[18]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, obj2);
        });
      });
    });
  }, items1);
  const items3 = [markAsDismissed];
  const callback1 = obj.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items2);
  let tmp15 = closure_9;
  const callback2 = obj.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items3);
  const obj7 = { ref, onDismiss: callback2, startExpanded: true, handleDisabled: true, children: tmp15(SafeAreaPaddingView, obj16) };
  BottomSheet = tmp2(5263).BottomSheet;
  const obj8 = { style: tmp6.content, children: items4 };
  SafeAreaPaddingView = tmp2(7219).SafeAreaPaddingView;
  items4 = [, , , , ];
  const obj9 = {
    onPress() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
      markAsDismissed(ContentDismissActionType.USER_DISMISS);
    }
  };
  items4[0] = closure_9(tmp2(5580).ActionSheetHeaderBar, obj9);
  const obj10 = { style: tmp6.imageContainer, children: items5 };
  items5 = [enabled && tmp15(tmp2(18362).DisplayNameStylesV2AbstractUI, { resizeMode: "contain" }), ];
  let tmp19 = !enabled;
  enabled && tmp15(tmp2(18362).DisplayNameStylesV2AbstractUI, { resizeMode: "contain" });
  if (tmp19) {
    let tmp15Result;
    const tmp2Result = tmp2(1384);
    if (tmp2Result.isIOS()) {
      const obj11 = { source: obj12, style: tmp6.image, resizeMode: "contain", enableAnimation: !enabled };
      obj12 = { uri: ref(18366) };
      const tmp4Result = ref(5667);
      tmp15Result = tmp15(tmp4Result, obj11);
    } else {
      const obj13 = { url: ref(18366), style: tmp6.image, autoplay: true };
      const APNGPlayer = tmp2(9400).APNGPlayer;
      tmp15Result = tmp15(APNGPlayer, obj13);
    }
    tmp19 = tmp15Result;
  }
  items5[1] = tmp19;
  items4[1] = closure_10(View, obj10);
  const obj14 = { variant: "display-md", style: items6, color: str2, children: intl2.string(ref(2928).Uzms61) };
  items6 = [tmp6.title, typeConsolidationTextTransform];
  let str = "text-overlay-dark";
  str2 = "text-overlay-dark";
  const Text = tmp2(5232).Text;
  if (isThemeDarkResult) {
    str2 = "text-overlay-light";
  }
  intl2 = tmp2(1128).intl;
  items4[2] = tmp15(Text, obj14);
  const obj15 = { variant: "text-lg/medium", style: tmp6.subtitle, color: str, children: stringResult };
  const Text2 = tmp2(5232).Text;
  if (isThemeDarkResult) {
    str = "text-overlay-light";
  }
  obj16 = { bottom: true, children: closure_10(View, obj8) };
  items4[3] = tmp15(Text2, obj15);
  const obj17 = { style: tmp6.actions, children: items7 };
  const obj18 = { text: intl3.string(tmp2(1128).t["4P5I8V"]), variant: "primary", size: "lg", onPress: callback };
  const Button = tmp2(5242).Button;
  intl3 = tmp2(1128).intl;
  items7 = [tmp15(Button, obj18), ];
  const obj19 = { text: intl4.string(tmp2(1128).t.TulDPl), variant: "secondary", size: "lg", onPress: callback1 };
  const Button2 = tmp2(5242).Button;
  intl4 = tmp2(1128).intl;
  items7[1] = tmp15(Button2, obj19);
  items4[4] = closure_10(View, obj17);
  return tmp15(BottomSheet, obj7);
});
let closure_11 = createStyles.createStyles(() => {
  const obj = { content: { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 }, imageContainer: size, image: { width: "100%", height: "100%" }, title: { textAlign: "center", fontFamily: metroImportDefault.GINTO_NORD_EXTRA_BOLD, textTransform: "uppercase", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12 }, subtitle: { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_32 }, actions: { gap: nativeDefault.space.PX_12, width: "100%" } };
  ({ alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 });
  size = { width: "100%", height: 162, alignItems: "center", justifyContent: "center", marginVertical: nativeDefault.space.PX_24 };
  ({ textAlign: "center", fontFamily: metroImportDefault.GINTO_NORD_EXTRA_BOLD, textTransform: "uppercase", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12 });
  ({ textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_32 });
  ({ gap: nativeDefault.space.PX_12, width: "100%" });
  return obj;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFlywheelMobileActionSheet.tsx");

export default tmp4;
