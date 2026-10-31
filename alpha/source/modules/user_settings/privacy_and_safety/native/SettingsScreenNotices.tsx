// Module ID: 16704
// Function ID: 16705
// Name: SettingsScreenNotices
// Dependencies: [19, 17, 1383, 21, 5014, 575, 8372, 16705, 16706, 5693, 6731, 6726, 16713, 16714, 2]
// Exports: default

// Module 16704 (SettingsScreenNotices)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5693 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6731 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8372 */;
import FamilyCenterSettingsNoticeDefault from "FamilyCenterSettingsNotice" /* 16705 */;
import TinyBroncoSettingsNoticesLazy from "TinyBroncoSettingsNoticesLazy" /* 16706 */;
import AgeConfirmationNoticeDefault from "AgeConfirmationNotice" /* 16713 */;
import SensitiveContentFiltersNotices from "SensitiveContentFiltersNotices" /* 16714 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let items;
let items1;
let items2;
let tmp;
const AgeVerificationUtils = tmp(6726);
function predicate() {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
  if (isFeatureAgeGatedResult) {
    const tmpResult = AgeVerificationUtils;
    isFeatureAgeGatedResult = !tmpResult.isAgeVerified();
  }
  return isFeatureAgeGatedResult;
}
const predicate2 = function predicate() {
  const currentUser = UserStore.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return false === nsfwAllowed;
};
const predicate3 = function predicate() {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
  if (isFeatureAgeGatedResult) {
    const tmpResult = AgeVerificationUtils;
    isFeatureAgeGatedResult = !tmpResult.isAgeVerified();
  }
  return isFeatureAgeGatedResult;
};
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { noticeContainer: { marginHorizontal: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_16 }, listHeaderNoticeContainer: { marginTop: nativeDefault.space.PX_16 } };
createStyles = createStyles.createStyles;
({ marginHorizontal: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_16 });
({ marginTop: nativeDefault.space.PX_16 });
let closure_6 = createStyles(obj);
const obj4 = { SENSITIVE_CONTENT_FILTERS: items, CONTENT_AND_SOCIAL: items1, DATA_AND_PRIVACY: items2 };
items = [{ order: 100, predicate: FamilyCenterUtils.isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault }, , , ];
({ order: 100, predicate: FamilyCenterUtils.isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault });
items[1] = { order: 150, predicate: TinyBroncoSettingsNoticesLazy.shouldShowTinyBroncoUnconfirmedNotice, Component: TinyBroncoSettingsNoticesLazy.ContentFiltersUnconfirmedNotice };
({ order: 150, predicate: TinyBroncoSettingsNoticesLazy.shouldShowTinyBroncoUnconfirmedNotice, Component: TinyBroncoSettingsNoticesLazy.ContentFiltersUnconfirmedNotice });
items[2] = { order: 200, predicate, Component: AgeConfirmationNoticeDefault };
({ order: 200, predicate, Component: AgeConfirmationNoticeDefault });
items[3] = { order: 300, predicate: predicate2, Component: SensitiveContentFiltersNotices.SensitiveContentFiltersTeenNotice };
({ order: 300, predicate: predicate2, Component: SensitiveContentFiltersNotices.SensitiveContentFiltersTeenNotice });
items1 = [{ order: 100, predicate: FamilyCenterUtils.isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault }, ];
({ order: 100, predicate: FamilyCenterUtils.isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault });
items1[1] = { order: 200, predicate: predicate3, Component: AgeConfirmationNoticeDefault };
({ order: 200, predicate: predicate3, Component: AgeConfirmationNoticeDefault });
items2 = [{ order: 100, predicate: FamilyCenterUtils.isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault }];
({ order: 100, predicate: FamilyCenterUtils.isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault });
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsScreenNotices.tsx");

export default function SettingsScreenNotices(screen) {
  screen = screen.screen;
  let flag = screen.isListHeader;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6();
  const items = [screen];
  const memo = react.useMemo(() => {
    const arr = obj4[screen];
    const found = arr.filter((predicate) => predicate.predicate());
    const sorted = found.sort((order, order2) => order.order - order2.order);
    const mapped = sorted.map((Component) => Component.Component);
    let first = null;
    if (0 !== mapped.length) {
      first = mapped[0];
    }
    return first;
  }, items);
  let tmp4Result = null;
  if (null != memo) {
    const obj = { style: flag ? tmp.listHeaderNoticeContainer : tmp.noticeContainer, children: <memo key={screen} /> };
    tmp4Result = tmp4(View, obj);
  }
  return tmp4Result;
};
export const SettingsScreen = { SENSITIVE_CONTENT_FILTERS: "SENSITIVE_CONTENT_FILTERS", CONTENT_AND_SOCIAL: "CONTENT_AND_SOCIAL", DATA_AND_PRIVACY: "DATA_AND_PRIVACY" };
