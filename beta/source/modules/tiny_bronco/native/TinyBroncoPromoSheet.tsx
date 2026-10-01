// Module ID: 14279
// Function ID: 14280
// Name: TinyBroncoPromoSheet
// Dependencies: [19, 17, 9231, 1074, 2042, 21, 4836, 576, 5048, 14280, 4800, 14278, 7859, 7861, 2111, 6800, 1115, 3071, 9691, 14281, 5745, 5281, 2]
// Exports: default

// Module 14279 (TinyBroncoPromoSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import _modDef3071 from "module_3071" /* 3071 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import openUserSettings from "openUserSettings" /* 6800 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7859 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 7861 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 9231 */;
import openTinyBroncoPromoSheet from "openTinyBroncoPromoSheet" /* 14278 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

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
  let tmp15;
  let dismissOnce;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_11();
  let obj = dismissOnce(5048);
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  let obj2 = dismissOnce(14280);
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
  const intl = dismissOnce(1115).intl;
  const string = intl.string;
  const tmp13 = _modDef3071;
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
  const obj4 = { illustration: closure_9(Image, obj5), title: intl2.string(tmp14(3071).GdTVPF), description: formatResult, onDismiss: callback, actions: closure_10(ButtonGroup, obj8) };
  obj5 = { source: tmp14(14281), style: tmp.illustration, resizeMode: "contain" };
  const PromoSheet = tmp2(9691).PromoSheet;
  intl2 = tmp2(1115).intl;
  const intl3 = tmp2(1115).intl;
  const format = intl3.format;
  const tmp14Result = tmp14(3071);
  if (isVerifiedTeen) {
    const obj6 = { handleOnConfirmAgeHook: callback2 };
    formatResult = format(tmp14Result["Ga2z/E"], obj6);
  } else {
    const obj7 = { handleOnBlogHook: callback4 };
    formatResult = format(tmp14Result.xuvWqy, obj7);
  }
  obj8 = { size: "lg", style: tmp.actions, children: items5 };
  ButtonGroup = tmp2(5745).ButtonGroup;
  items5 = [, ];
  const obj9 = { size: "lg", text: tmp15.text, onPress: tmp15.onPress };
  items5[0] = closure_9(dismissOnce(5281).Button, obj9);
  const obj10 = { size: "lg", variant: "secondary", text: intl4.string(dismissOnce(1115).t["NX+WJN"]), onPress: callback1 };
  const Button = tmp2(5281).Button;
  intl4 = tmp2(1115).intl;
  items5[1] = closure_9(Button, obj10);
  return closure_9(PromoSheet, obj4);
};
