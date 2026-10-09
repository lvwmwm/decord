// Module ID: 14915
// Function ID: 14916
// Name: TinyBroncoPromoSheet
// Dependencies: [19, 5934, 1085, 2061, 21, 5091, 587, 558, 576, 5906, 14916, 5055, 14914, 7497, 5916, 2127, 7087, 1126, 3149, 6163, 14917, 5376, 5965, 10290, 2]

// Module 14915 (TinyBroncoPromoSheet)
import nativeDefault from "native" /* 587 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2061 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import _modDef3149 from "module_3149" /* 3149 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 5916 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 5934 */;
import openUserSettings from "openUserSettings" /* 7087 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7497 */;
import openTinyBroncoPromoSheet from "openTinyBroncoPromoSheet" /* 14914 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let size;
const TINY_BRONCO_BLOG_URL = TinyBroncoConstants.TINY_BRONCO_BLOG_URL;
({ HelpdeskArticles: hasOwnProperty, UserSettingsSections: metroRequire } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { illustration: size, actions: { paddingVertical: 0 } };
size = { width: 198, height: 132, marginTop: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function TinyBroncoPromoSheet(markAsDismissed) {
  let dismissOnce;
  let tmp15;
  let obj = dismissOnce(576);
  const cResult = obj.c(36);
  markAsDismissed = markAsDismissed.markAsDismissed;
  closure_10();
  let obj2 = dismissOnce(5906);
  const isVerifiedTeen = obj2.useIsVerifiedTeen();
  let obj3 = dismissOnce(14916);
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
    class R {
      constructor() {
        dismissOnce(ContentDismissActionType.USER_DISMISS);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
      }
    }
    cResult[2] = dismissOnce;
    cResult[3] = R;
  } else {
    class R {
      constructor() {
        dismissOnce(ContentDismissActionType.USER_DISMISS);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
      }
    }
  }
  if (cResult[4] !== dismissOnce) {
    class N {
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
    cResult[5] = N;
  } else {
    class N {
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
    class C {
      constructor() {
        dismissOnce(ContentDismissActionType.TAKE_ACTION);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
        const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
        AgeVerificationActionCreatorsDefault;
        const obj2 = HelpdeskUtilsDefault;
        openUrl(obj2.getArticleURL(hasOwnProperty.TIGGER_PAWTECT_LEARN_MORE));
      }
    }
    cResult[6] = dismissOnce;
    cResult[7] = C;
  } else {
    class C {
      constructor() {
        dismissOnce(ContentDismissActionType.TAKE_ACTION);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
        const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
        AgeVerificationActionCreatorsDefault;
        const obj2 = HelpdeskUtilsDefault;
        openUrl(obj2.getArticleURL(hasOwnProperty.TIGGER_PAWTECT_LEARN_MORE));
      }
    }
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        dismissOnce(ContentDismissActionType.TAKE_ACTION);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
        const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
        AgeVerificationActionCreatorsDefault;
        const obj2 = HelpdeskUtilsDefault;
        openUrl(obj2.getArticleURL(hasOwnProperty.TIGGER_PAWTECT_LEARN_MORE));
      }
    }
    cResult[8] = tmp12;
  } else {
    class C {
      constructor() {
        dismissOnce(ContentDismissActionType.TAKE_ACTION);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
        const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
        AgeVerificationActionCreatorsDefault;
        const obj2 = HelpdeskUtilsDefault;
        openUrl(obj2.getArticleURL(hasOwnProperty.TIGGER_PAWTECT_LEARN_MORE));
      }
    }
  }
  if (cResult[9] !== dismissOnce) {
    class M {
      constructor() {
        dismissOnce(ContentDismissActionType.TAKE_ACTION);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
        const obj2 = openUserSettings;
        const obj3 = { screen: metroRequire.AGE_GROUP };
        obj2.openUserSettings(obj3);
      }
    }
    cResult[9] = dismissOnce;
    cResult[10] = M;
  } else {
    class M {
      constructor() {
        dismissOnce(ContentDismissActionType.TAKE_ACTION);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
        const obj2 = openUserSettings;
        const obj3 = { screen: metroRequire.AGE_GROUP };
        obj2.openUserSettings(obj3);
      }
    }
  }
  if (cResult[11] === tmp10) {
    class M {
      constructor() {
        dismissOnce(ContentDismissActionType.TAKE_ACTION);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
        const obj2 = openUserSettings;
        const obj3 = { screen: metroRequire.AGE_GROUP };
        obj2.openUserSettings(obj3);
      }
    }
  }
  const obj4 = { text: null, onPress: null };
  const intl = tmp(1126).intl;
  _modDef3149;
  if (isVerifiedTeen) {
    class M {
      constructor() {
        dismissOnce(ContentDismissActionType.TAKE_ACTION);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
        const obj2 = openUserSettings;
        const obj3 = { screen: metroRequire.AGE_GROUP };
        obj2.openUserSettings(obj3);
      }
    }
    obj4.onPress = tmp10;
    tmp15 = obj4;
  } else {
    class M {
      constructor() {
        dismissOnce(ContentDismissActionType.TAKE_ACTION);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
        const obj2 = openUserSettings;
        const obj3 = { screen: metroRequire.AGE_GROUP };
        obj2.openUserSettings(obj3);
      }
    }
    obj4.onPress = tmp13;
    tmp15 = obj4;
  }
  cResult[11] = tmp10;
  cResult[12] = tmp13;
  cResult[13] = isVerifiedTeen;
  cResult[14] = tmp15;
}) : (function TinyBroncoPromoSheet(markAsDismissed) {
  let ButtonGroup;
  let formatResult;
  let intl2;
  let intl4;
  let items5;
  let obj5;
  let obj8;
  let tmp14;
  let tmp14Result;
  let tmp15;
  let dismissOnce;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_10();
  let obj = dismissOnce(5906);
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  let obj2 = dismissOnce(14916);
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
    openUrl(obj2.getArticleURL(hasOwnProperty.TIGGER_PAWTECT_LEARN_MORE));
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
    const obj3 = { screen: metroRequire.AGE_GROUP };
    obj2.openUserSettings(obj3);
  }, items4);
  const intl = dismissOnce(1126).intl;
  const string = intl.string;
  const tmp13 = _modDef3149;
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
  const obj4 = { illustration: closure_8(tmp14Result, obj5), title: intl2.string(tmp14(3149).GdTVPF), description: formatResult, onDismiss: callback, actions: closure_9(ButtonGroup, obj8) };
  const PromoSheet = tmp2(10290).PromoSheet;
  obj5 = { source: tmp14(14917), style: tmp.illustration, resizeMode: "contain" };
  tmp14Result = tmp14(6163);
  intl2 = tmp2(1126).intl;
  const intl3 = tmp2(1126).intl;
  const format = intl3.format;
  const tmp14Result2 = tmp14(3149);
  if (isVerifiedTeen) {
    const obj6 = { handleOnConfirmAgeHook: callback2 };
    formatResult = format(tmp14Result2["Ga2z/E"], obj6);
  } else {
    const obj7 = { handleOnBlogHook: callback4 };
    formatResult = format(tmp14Result2.xuvWqy, obj7);
  }
  obj8 = { size: "lg", style: tmp.actions, children: items5 };
  ButtonGroup = tmp2(5965).ButtonGroup;
  items5 = [, ];
  const obj9 = { size: "lg", text: tmp15.text, onPress: tmp15.onPress };
  items5[0] = closure_8(dismissOnce(5376).Button, obj9);
  const obj10 = { size: "lg", variant: "secondary", text: intl4.string(dismissOnce(1126).t["NX+WJN"]), onPress: callback1 };
  const Button = tmp2(5376).Button;
  intl4 = tmp2(1126).intl;
  items5[1] = closure_8(Button, obj10);
  return closure_8(PromoSheet, obj4);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoPromoSheet.tsx");

export default tmp4;
