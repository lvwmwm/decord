// Module ID: 16878
// Function ID: 16879
// Name: AgeNoticePromoSheet
// Dependencies: [19, 6817, 1072, 5016, 21, 5170, 575, 6806, 16879, 5404, 16877, 8046, 6809, 2185, 7658, 1113, 3284, 10973, 5872, 16880, 6847, 5788, 2]
// Exports: default

// Module 16878 (AgeNoticePromoSheet)
import nativeDefault from "native" /* 575 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2185 */;
import _modDef3284 from "module_3284" /* 3284 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5016 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6809 */;
import AgeNoticeConstants from "AgeNoticeConstants" /* 6817 */;
import openUserSettings from "openUserSettings" /* 7658 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8046 */;
import openAgeNoticePromoSheet from "openAgeNoticePromoSheet" /* 16877 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let size;
const AGE_NOTICE_BLOG_URL = AgeNoticeConstants.AGE_NOTICE_BLOG_URL;
({ HelpdeskArticles: hasOwnProperty, UserSettingsSections: metroRequire } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { illustration: size, actions: { paddingVertical: 0 } };
size = { width: 198, height: 132, marginTop: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticePromoSheet.tsx");

export default function AgeNoticePromoSheet(markAsDismissed) {
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
  let obj = dismissOnce(6806);
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  let obj2 = dismissOnce(16879);
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
    obj.hideActionSheet(openAgeNoticePromoSheet.AGE_NOTICE_PROMO_SHEET_KEY);
  }, items1);
  const items3 = [dismissOnce];
  const callback2 = react.useCallback(() => {
    dismissOnce(ContentDismissActionType.TAKE_ACTION);
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(openAgeNoticePromoSheet.AGE_NOTICE_PROMO_SHEET_KEY);
    const obj2 = AgeVerificationActionCreatorsDefault;
    const obj3 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.AGE_NOTICE_POPOVER };
    const result = obj2.showAgeVerificationGetStartedModal(obj3);
  }, items2);
  const callback3 = react.useCallback(() => {
    dismissOnce(ContentDismissActionType.TAKE_ACTION);
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(openAgeNoticePromoSheet.AGE_NOTICE_PROMO_SHEET_KEY);
    const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
    AgeVerificationActionCreatorsDefault;
    const obj2 = HelpdeskUtilsDefault;
    openUrl(obj2.getArticleURL(hasOwnProperty.AGE_VERIFICATION_LEARN_MORE));
  }, items3);
  const items4 = [dismissOnce];
  const callback4 = react.useCallback(() => {
    const obj = AgeVerificationActionCreatorsDefault;
    obj.openUrl(AGE_NOTICE_BLOG_URL);
  }, []);
  let obj3 = { text: null, onPress: null };
  const callback5 = react.useCallback(() => {
    dismissOnce(ContentDismissActionType.TAKE_ACTION);
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(openAgeNoticePromoSheet.AGE_NOTICE_PROMO_SHEET_KEY);
    const obj2 = openUserSettings;
    const obj3 = { screen: metroRequire.AGE_GROUP };
    obj2.openUserSettings(obj3);
  }, items4);
  const intl = dismissOnce(1113).intl;
  const string = intl.string;
  const tmp13 = _modDef3284;
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
  const obj4 = { illustration: closure_8(tmp14Result, obj5), title: intl2.string(tmp14(3284).GdTVPF), description: formatResult, onDismiss: callback, actions: closure_9(ButtonGroup, obj8) };
  const PromoSheet = tmp2(10973).PromoSheet;
  obj5 = { source: tmp14(16880), style: tmp.illustration, resizeMode: "contain" };
  tmp14Result = tmp14(5872);
  intl2 = tmp2(1113).intl;
  const intl3 = tmp2(1113).intl;
  const format = intl3.format;
  const tmp14Result2 = tmp14(3284);
  if (isVerifiedTeen) {
    const obj6 = { handleOnConfirmAgeHook: callback2 };
    formatResult = format(tmp14Result2["Ga2z/E"], obj6);
  } else {
    const obj7 = { handleOnBlogHook: callback4 };
    formatResult = format(tmp14Result2.xuvWqy, obj7);
  }
  obj8 = { size: "lg", style: tmp.actions, children: items5 };
  ButtonGroup = tmp2(6847).ButtonGroup;
  items5 = [, ];
  const obj9 = { size: "lg", text: tmp15.text, onPress: tmp15.onPress };
  items5[0] = closure_8(dismissOnce(5788).Button, obj9);
  const obj10 = { size: "lg", variant: "secondary", text: intl4.string(dismissOnce(1113).t["NX+WJN"]), onPress: callback1 };
  const Button = tmp2(5788).Button;
  intl4 = tmp2(1113).intl;
  items5[1] = closure_8(Button, obj10);
  return closure_8(PromoSheet, obj4);
};
