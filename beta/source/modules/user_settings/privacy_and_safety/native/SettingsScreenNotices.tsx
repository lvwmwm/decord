// Module ID: 14349
// Function ID: 14350
// Name: SettingsScreenNotices
// Dependencies: [19, 17, 1372, 21, 4836, 576, 7012, 14350, 14351, 5735, 5736, 5048, 14358, 14359, 2]
// Exports: default

// Module 14349 (SettingsScreenNotices)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5735 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5736 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7012 */;
import FamilyCenterSettingsNoticeDefault from "FamilyCenterSettingsNotice" /* 14350 */;
import TinyBroncoSettingsNoticesLazy from "TinyBroncoSettingsNoticesLazy" /* 14351 */;
import AgeConfirmationNoticeDefault from "AgeConfirmationNotice" /* 14358 */;
import SensitiveContentFiltersNotices from "SensitiveContentFiltersNotices" /* 14359 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let items;
let items1;
let items2;
let tmp;
const AgeVerificationUtils = tmp(5048);
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
