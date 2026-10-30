// Module ID: 16565
// Function ID: 16566
// Name: TinyBroncoPromoSheet
// Dependencies: [19, 6731, 1072, 4855, 21, 5009, 575, 6720, 16566, 5253, 16564, 7947, 6723, 2062, 7557, 1114, 3125, 10817, 5712, 16567, 6761, 5629, 2]
// Exports: default

// Module 16565 (TinyBroncoPromoSheet)
import nativeDefault from "native" /* 575 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import _modDef3125 from "module_3125" /* 3125 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6723 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 6731 */;
import openUserSettings from "openUserSettings" /* 7557 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7947 */;
import openTinyBroncoPromoSheet from "openTinyBroncoPromoSheet" /* 16564 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
size = size_mod;
let result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoPromoSheet.tsx");

export default function TinyBroncoPromoSheet(markAsDismissed) {
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
  let obj = dismissOnce(6720);
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  let obj2 = dismissOnce(16566);
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
  const intl = dismissOnce(1114).intl;
  const string = intl.string;
  const tmp13 = _modDef3125;
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
  const obj4 = { illustration: closure_8(tmp14Result, obj5), title: intl2.string(tmp14(3125).GdTVPF), description: formatResult, onDismiss: callback, actions: closure_9(ButtonGroup, obj8) };
  const PromoSheet = tmp2(10817).PromoSheet;
  obj5 = { source: tmp14(16567), style: tmp.illustration, resizeMode: "contain" };
  tmp14Result = tmp14(5712);
  intl2 = tmp2(1114).intl;
  const intl3 = tmp2(1114).intl;
  const format = intl3.format;
  const tmp14Result2 = tmp14(3125);
  if (isVerifiedTeen) {
    const obj6 = { handleOnConfirmAgeHook: callback2 };
    formatResult = format(tmp14Result2["Ga2z/E"], obj6);
  } else {
    const obj7 = { handleOnBlogHook: callback4 };
    formatResult = format(tmp14Result2.xuvWqy, obj7);
  }
  obj8 = { size: "lg", style: tmp.actions, children: items5 };
  ButtonGroup = tmp2(6761).ButtonGroup;
  items5 = [, ];
  const obj9 = { size: "lg", text: tmp15.text, onPress: tmp15.onPress };
  items5[0] = closure_8(dismissOnce(5629).Button, obj9);
  const obj10 = { size: "lg", variant: "secondary", text: intl4.string(dismissOnce(1114).t["NX+WJN"]), onPress: callback1 };
  const Button = tmp2(5629).Button;
  intl4 = tmp2(1114).intl;
  items5[1] = closure_8(Button, obj10);
  return closure_8(PromoSheet, obj4);
};
