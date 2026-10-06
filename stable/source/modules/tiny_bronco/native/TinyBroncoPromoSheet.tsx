// Module ID: 14267
// Function ID: 14268
// Name: TinyBroncoPromoSheet
// Dependencies: [19, 17, 9197, 1086, 2048, 21, 4837, 588, 558, 576, 5049, 14268, 4801, 14266, 7863, 7865, 2114, 6801, 1127, 3074, 14269, 5282, 5746, 9816, 2]

// Module 14267 (TinyBroncoPromoSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 588 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2114 */;
import _modDef3074 from "module_3074" /* 3074 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import openUserSettings from "openUserSettings" /* 6801 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7863 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 7865 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 9197 */;
import openTinyBroncoPromoSheet from "openTinyBroncoPromoSheet" /* 14266 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1086 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let markAsDismissed;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let size;
const Image = react_native.Image;
const TINY_BRONCO_BLOG_URL = TinyBroncoConstants.TINY_BRONCO_BLOG_URL;
({ HelpdeskArticles: metroRequire, UserSettingsSections: metroImportDefault } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { illustration: size, actions: { paddingVertical: 0 } };
size = { width: 198, height: 132, marginTop: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((markAsDismissed) => {
  let dismissOnce;
  let tmp16;
  let obj = dismissOnce(576);
  const cResult = obj.c(36);
  markAsDismissed = markAsDismissed.markAsDismissed;
  closure_11();
  let obj2 = dismissOnce(5049);
  const isVerifiedTeen = obj2.useIsVerifiedTeen();
  let obj3 = dismissOnce(14268);
  const tmp = dismissOnce;
  dismissOnce = obj3.useDismissOnce(markAsDismissed);
  if (cResult[0] !== dismissOnce) {
    const fn = function o() {
      dismissOnce(ContentDismissActionType.USER_DISMISS);
    };
    cResult[0] = dismissOnce;
    cResult[1] = fn;
  }
  if (cResult[2] !== dismissOnce) {
    class N {
      constructor() {
        dismissOnce(ContentDismissActionType.USER_DISMISS);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
      }
    }
    cResult[2] = dismissOnce;
    cResult[3] = N;
  } else {
    class N {
      constructor() {
        dismissOnce(ContentDismissActionType.USER_DISMISS);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
      }
    }
  }
  if (cResult[4] !== dismissOnce) {
    class I {
      constructor() {
        dismissOnce(ContentDismissActionType.TAKE_ACTION);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
        const obj2 = AgeVerificationActionCreatorsDefault;
        const obj3 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.TINY_BRONCO_POPOVER };
        const result = obj2.showAgeVerificationGetStartedModal(obj3);
      }
    }
    cResult[4] = dismissOnce;
    cResult[5] = I;
  } else {
    class I {
      constructor() {
        dismissOnce(ContentDismissActionType.TAKE_ACTION);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
        const obj2 = AgeVerificationActionCreatorsDefault;
        const obj3 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.TINY_BRONCO_POPOVER };
        const result = obj2.showAgeVerificationGetStartedModal(obj3);
      }
    }
  }
  if (cResult[6] !== dismissOnce) {
    class I {
      constructor() {
        dismissOnce(ContentDismissActionType.TAKE_ACTION);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
        const obj2 = AgeVerificationActionCreatorsDefault;
        const obj3 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.TINY_BRONCO_POPOVER };
        const result = obj2.showAgeVerificationGetStartedModal(obj3);
      }
    }
    cResult[6] = dismissOnce;
    cResult[7] = tmp11;
  } else {
    class I {
      constructor() {
        dismissOnce(ContentDismissActionType.TAKE_ACTION);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
        const obj2 = AgeVerificationActionCreatorsDefault;
        const obj3 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.TINY_BRONCO_POPOVER };
        const result = obj2.showAgeVerificationGetStartedModal(obj3);
      }
    }
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        obj.openUrl(TINY_BRONCO_BLOG_URL);
      }
    }
    cResult[8] = M;
  } else {
    class M {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        obj.openUrl(TINY_BRONCO_BLOG_URL);
      }
    }
  }
  if (cResult[9] !== dismissOnce) {
    class M {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        obj.openUrl(TINY_BRONCO_BLOG_URL);
      }
    }
    cResult[9] = dismissOnce;
    cResult[10] = tmp14;
  } else {
    class M {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        obj.openUrl(TINY_BRONCO_BLOG_URL);
      }
    }
  }
  if (cResult[11] === tmp10) {
    class M {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        obj.openUrl(TINY_BRONCO_BLOG_URL);
      }
    }
  }
  const obj4 = { text: null, onPress: null };
  const intl = tmp(1127).intl;
  _modDef3074;
  if (isVerifiedTeen) {
    class M {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        obj.openUrl(TINY_BRONCO_BLOG_URL);
      }
    }
    obj4.onPress = tmp10;
    tmp16 = obj4;
  } else {
    class M {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        obj.openUrl(TINY_BRONCO_BLOG_URL);
      }
    }
    obj4.onPress = tmp13;
    tmp16 = obj4;
  }
  cResult[11] = tmp10;
  cResult[12] = tmp13;
  cResult[13] = isVerifiedTeen;
  cResult[14] = tmp16;
}) : ((markAsDismissed) => {
  let ButtonGroup;
  let formatResult;
  let intl2;
  let intl4;
  let items5;
  let obj5;
  let obj8;
  let tmp14;
  let tmp15;
  let dismissOnce;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_11();
  let obj = dismissOnce(5049);
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  let obj2 = dismissOnce(14268);
  dismissOnce = obj2.useDismissOnce(markAsDismissed);
  const items = [dismissOnce];
  const items1 = [dismissOnce];
  const callback = react.useCallback(() => {
    dismissOnce(ContentDismissActionType.USER_DISMISS);
  }, items);
  const items2 = [dismissOnce];
  const callback1 = react.useCallback(() => {
    dismissOnce(ContentDismissActionType.USER_DISMISS);
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
  }, items1);
  const items3 = [dismissOnce];
  const callback2 = react.useCallback(() => {
    dismissOnce(ContentDismissActionType.TAKE_ACTION);
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
    const obj2 = AgeVerificationActionCreatorsDefault;
    const obj3 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.TINY_BRONCO_POPOVER };
    const result = obj2.showAgeVerificationGetStartedModal(obj3);
  }, items2);
  const callback3 = react.useCallback(() => {
    dismissOnce(ContentDismissActionType.TAKE_ACTION);
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
    const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
    AgeVerificationActionCreatorsDefault;
    const obj2 = HelpdeskUtilsDefault;
    openUrl(obj2.getArticleURL(metroRequire.TIGGER_PAWTECT_LEARN_MORE));
  }, items3);
  const items4 = [dismissOnce];
  const callback4 = react.useCallback(() => {
    const obj = AgeVerificationActionCreatorsDefault;
    obj.openUrl(TINY_BRONCO_BLOG_URL);
  }, []);
  let obj3 = { text: null, onPress: null };
  const callback5 = react.useCallback(() => {
    dismissOnce(ContentDismissActionType.TAKE_ACTION);
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
    const obj2 = openUserSettings;
    const obj3 = { screen: metroImportDefault.AGE_GROUP };
    obj2.openUserSettings(obj3);
  }, items4);
  const intl = dismissOnce(1127).intl;
  const string = intl.string;
  const tmp13 = _modDef3074;
  if (isVerifiedTeen) {
    obj3.text = string(tmp13["+7NlgO"]);
    obj3.onPress = callback3;
    tmp14 = tmp12;
    tmp15 = obj3;
  } else {
    obj3.text = string(tmp13.jjpcno);
    obj3.onPress = callback5;
    tmp14 = tmp12;
    tmp15 = obj3;
  }
  const obj4 = { illustration: closure_9(Image, obj5), title: intl2.string(tmp14(3074).GdTVPF), description: formatResult, onDismiss: callback, actions: closure_10(ButtonGroup, obj8) };
  obj5 = { source: tmp14(14269), style: tmp.illustration, resizeMode: "contain" };
  const PromoSheet = tmp2(9816).PromoSheet;
  intl2 = tmp2(1127).intl;
  const intl3 = tmp2(1127).intl;
  const format = intl3.format;
  const tmp14Result = tmp14(3074);
  if (isVerifiedTeen) {
    const obj6 = { handleOnConfirmAgeHook: callback2 };
    formatResult = format(tmp14Result["Ga2z/E"], obj6);
  } else {
    const obj7 = { handleOnBlogHook: callback4 };
    formatResult = format(tmp14Result.xuvWqy, obj7);
  }
  obj8 = { size: "lg", style: tmp.actions, children: items5 };
  ButtonGroup = tmp2(5746).ButtonGroup;
  items5 = [, ];
  const obj9 = { size: "lg", text: tmp15.text, onPress: tmp15.onPress };
  items5[0] = closure_9(dismissOnce(5282).Button, obj9);
  const obj10 = { size: "lg", variant: "secondary", text: intl4.string(dismissOnce(1127).t["NX+WJN"]), onPress: callback1 };
  const Button = tmp2(5282).Button;
  intl4 = tmp2(1127).intl;
  items5[1] = closure_9(Button, obj10);
  return closure_9(PromoSheet, obj4);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoPromoSheet.tsx");

export default tmp4;
