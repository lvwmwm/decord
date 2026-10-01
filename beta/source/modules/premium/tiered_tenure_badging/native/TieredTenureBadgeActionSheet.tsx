// Module ID: 10619
// Function ID: 10620
// Name: TieredTenureBadgeActionSheet
// Dependencies: [19, 17, 1372, 1374, 1074, 21, 4836, 576, 10620, 7048, 10645, 5899, 4832, 1115, 10646, 504, 1970, 8230, 1249, 1613, 6800, 4800, 7624, 9422, 9425, 6571, 6045, 2]
// Exports: default

// Module 10619 (TieredTenureBadgeActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import FastImageDefault from "FastImage" /* 5899 */;
import openUserSettings from "openUserSettings" /* 6800 */;
import TieredTenureBadgeUtils from "TieredTenureBadgeUtils" /* 7048 */;
import showUserProfileActionSheet from "showUserProfileActionSheet" /* 7624 */;
import useMobileTenureBadgeImages from "useMobileTenureBadgeImages" /* 10620 */;
import useTenureBadgeRequirementString from "useTenureBadgeRequirementString" /* 10645 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, importDefault;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let unpackModuleId;
function TieredTenureBadgeItem(arg0) {
  let Hu4jfi;
  let badge;
  let date;
  let formatToPlainString;
  let intl;
  let isUsersBadge;
  let items1;
  let obj7;
  let premiumSince;
  let small;
  ({ badge, isUsersBadge, premiumSince } = arg0);
  const tmp = closure_13();
  const obj = useMobileTenureBadgeImages;
  const mobileTenureBadgeImages = obj.useMobileTenureBadgeImages(badge);
  if (mobileTenureBadgeImages != null) {
    small = mobileTenureBadgeImages.small;
  }
  const tmp2Result = TieredTenureBadgeUtils;
  const tieredTenureBadgeData = tmp2Result.getTieredTenureBadgeData(badge);
  useTenureBadgeRequirementString;
  if (tieredTenureBadgeData != null) {
    const tenureReqNumMonths = tieredTenureBadgeData.tenureReqNumMonths;
  }
  let tmp9Result = null;
  if (null != tieredTenureBadgeData) {
    const items = [tmp.badgeContainer, ];
    let usersBadgeContainer = isUsersBadge;
    const tmp10 = View;
    const tmp9 = unpackModuleId;
    if (isUsersBadge) {
      usersBadgeContainer = tmp.usersBadgeContainer;
    }
    const obj2 = { style: items, children: items1 };
    items[1] = usersBadgeContainer;
    const obj3 = { resizeMode: "contain", source: small };
    items1 = [authStore(FastImageDefault, obj3), , , ];
    const obj4 = { style: tmp.badgeName, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: intl.string(tieredTenureBadgeData.nameUnformatted) };
    const Text = tmp2(4832).Text;
    intl = tmp2(1115).intl;
    items1[1] = authStore(Text, obj4);
    const obj5 = { style: tmp.badgeRequirement, variant: "text-xs/normal", color: "mobile-text-heading-primary", children: tmp7 };
    items1[2] = authStore(Text_Text.Text, obj5);
    const tmp11 = authStore;
    if (isUsersBadge) {
      isUsersBadge = null != premiumSince;
    }
    if (isUsersBadge) {
      const obj6 = { style: tmp.badgePremiumSince, variant: "text-xs/normal", color: "text-muted", children: formatToPlainString(Hu4jfi, obj7) };
      const Text2 = tmp2(4832).Text;
      const intl2 = tmp2(1115).intl;
      formatToPlainString = intl2.formatToPlainString;
      const _Date = Date;
      const self = this;
      const self2 = this;
      obj7 = { date };
      Hu4jfi = tmp2(1115).t.Hu4jfi;
      date = new Date(premiumSince);
      isUsersBadge = tmp11(Text2, obj6);
    }
    items1[3] = isUsersBadge;
    tmp9Result = tmp9(tmp10, obj2);
  }
  return tmp9Result;
}
let react = react_mod;
const View = react_native.View;
({ PremiumTypes: metroRequire, TieredTenureBadge: metroImportDefault } = PremiumConstants);
({ AnalyticsPages: metroImportAll, UserSettingsSections: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const TIERED_TENURE_BADGE_ACTION_SHEET = "TIERED_TENURE_BADGE_ACTION_SHEET";
let obj = { headerContainer: { paddingHorizontal: 24, alignItems: "center" }, title: { marginTop: 8, paddingHorizontal: 12, textAlign: "center" }, subtitle: { marginTop: 8, textAlign: "center" }, container: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingHorizontal: 24, marginTop: 16 }, rowContainer: { flexDirection: "row", width: "100%", height: 160, gap: 8, justifyContent: "center", alignItems: "center", marginTop: 24 }, rowContainerWithUsersBadge: { height: 186 }, badgeContainer: { minWidth: 110, height: "100%", paddingTop: 16, alignItems: "center", paddingHorizontal: 8 }, usersBadgeContainer: obj2, badgeName: { marginTop: 8 }, badgeRequirement: { marginTop: 4 }, badgePremiumSince: { width: 90, marginTop: 4, textAlign: "center" }, footer: { marginHorizontal: 24 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderWidth: 1.2, borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.sm };
let closure_13 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/TieredTenureBadgeActionSheet.tsx");

export default function TieredTenureBadgeActionSheet(userId) {
  let BottomSheetScrollView;
  let closure_1;
  let closure_3;
  let currentUser;
  let id;
  let intl4;
  let items3;
  let items4;
  let items5;
  let items6;
  let loading;
  let obj15;
  let onPress;
  let string2Result;
  let stringResult;
  let stringResult1;
  let tmp27;
  userId = userId.userId;
  let flag = userId.shouldShowCTA;
  if (flag === undefined) {
    flag = true;
  }
  let tieredTenureBadgeDataForUser;
  let tmp = closure_13();
  importDefault = tmp;
  let tmp2 = userId;
  let tmp3 = tieredTenureBadgeDataForUser;
  let obj = userId(tieredTenureBadgeDataForUser[14]);
  tieredTenureBadgeDataForUser = obj.useTieredTenureBadgeDataForUser(userId);
  let obj2 = userId(tieredTenureBadgeDataForUser[14]);
  react = obj2.usePremiumSinceForUser(userId);
  let obj3 = userId(tieredTenureBadgeDataForUser[15]);
  let items = [UserStore];
  const stateFromStores = obj3.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj4 = userId(tieredTenureBadgeDataForUser[16]);
  const isPremiumResult = obj4.isPremium(stateFromStores, TIER_2.TIER_2);
  let premiumType;
  const isPremiumAtLeast = userId(tieredTenureBadgeDataForUser[16]).isPremiumAtLeast;
  userId(tieredTenureBadgeDataForUser[16]);
  const tmp6 = TIER_2;
  if (stateFromStores != null) {
    premiumType = stateFromStores.premiumType;
  }
  const obj5 = { type: tmp2(tmp3[18]).ImpressionTypes.HALFSHEET, name: tmp2(tmp3[18]).ImpressionNames.TIERED_TENURE_BADGE_MODAL, properties: { badge: id, premium_type: isPremiumResult, viewed_user_id: userId } };
  const isPremiumAtLeastResult = isPremiumAtLeast(premiumType, tmp6.TIER_0);
  id = undefined;
  const tmp12 = require("useTrackImpression");
  if (tieredTenureBadgeDataForUser != null) {
    id = tieredTenureBadgeDataForUser.id;
  }
  let id1;
  if (tieredTenureBadgeDataForUser != null) {
    id1 = tieredTenureBadgeDataForUser.id;
  }
  let id2;
  const obj6 = { disableTrack: null == id1 };
  if (tieredTenureBadgeDataForUser != null) {
    id2 = tieredTenureBadgeDataForUser.id;
  }
  const items1 = [id2];
  tmp12(obj5, obj6, items1);
  const bottom = tmp11(tmp3[19])().bottom;
  const items2 = [userId];
  const callback = react.useCallback(() => {
    const obj = openUserSettings;
    const obj2 = { screen: constants.PREMIUM };
    obj.openUserSettings(obj2);
    const obj3 = ActionSheetActionCreatorsDefault;
    obj3.hideActionSheet(TIERED_TENURE_BADGE_ACTION_SHEET);
    const hideActionSheet = ActionSheetActionCreatorsDefault.hideActionSheet;
    ActionSheetActionCreatorsDefault;
    const obj4 = showUserProfileActionSheet;
    hideActionSheet(obj4.getUserProfileActionSheetKey(userId));
  }, items2);
  ({ loading, onPress } = require("usePremiumFeatureUpsellGetNitro")(false, callback, constants.TIERED_TENURE_BADGES_ACTION_SHEET, "replaceTopSheet"));
  require("usePremiumFeatureUpsellGetNitro")(false, callback, constants.TIERED_TENURE_BADGES_ACTION_SHEET, "replaceTopSheet");
  const memo = react.useMemo(() => {
    let length;
    let sum;
    const values = Object.values(closure_1_7);
    const items = [];
    let num = 0;
    if (0 < values.length) {
      do {
        sum = num + 3;
        let arr = items.push(values.slice(num, sum));
        num = sum;
        length = values.length;
      } while (sum < length);
    }
    return items;
  }, []);
  const obj7 = { style: tmp.headerContainer, children: items3 };
  const obj8 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: stringResult };
  const Text = tmp2(tmp3[12]).Text;
  const intl = tmp2(tmp3[13]).intl;
  const string = intl.string;
  const t = tmp2(tmp3[13]).t;
  if (isPremiumResult) {
    stringResult = string(t.Og62j7);
  } else {
    stringResult = string(t.RtGeFS);
  }
  items3 = [closure_10(Text, obj8), ];
  const obj9 = { variant: "text-md/medium", color: "text-default", style: tmp.subtitle, children: stringResult1 };
  const Text2 = tmp2(tmp3[12]).Text;
  const intl2 = tmp2(tmp3[13]).intl;
  if (isPremiumResult) {
    stringResult1 = intl2.string(tmp2(tmp3[13]).t.IdAP91);
  } else {
    const obj10 = { learnMoreHook: callback };
    stringResult1 = intl2.format(tmp2(tmp3[13]).t["bF+q7R"], obj10);
  }
  items3[1] = closure_10(Text2, obj9);
  const obj11 = { style: items4, children: null };
  items4 = [tmp.footer, { paddingBottom: bottom }];
  const tmp19Result = closure_11(View, obj7);
  const tmp11Result = require("NitroUpsellButton");
  if (isPremiumResult) {
    const obj12 = { shiny: false, text: intl4.string(tmp2(tmp3[13]).t.hvVgAZ), onPress: callback };
    intl4 = tmp2(tmp3[13]).intl;
    obj11.children = closure_10(tmp11Result, obj12);
    tmp27 = obj11;
  } else {
    const obj13 = { loading, text: string2Result, onPress };
    const intl3 = tmp2(tmp3[13]).intl;
    const string2 = intl3.string;
    const t2 = tmp2(tmp3[13]).t;
    if (isPremiumAtLeastResult) {
      string2Result = string2(t2.IJI7yk);
    } else {
      string2Result = string2(t2.pj0XBN);
    }
    obj11.children = closure_10(tmp11Result, obj13);
    tmp27 = obj11;
  }
  let tmp29;
  const tmp21Result = closure_10(View, tmp27);
  BottomSheet = tmp2(tmp3[25]).BottomSheet;
  if (flag) {
    tmp29 = tmp21Result;
  }
  const obj14 = { scrollable: true, startExpanded: true, footer: tmp29, children: closure_11(BottomSheetScrollView, obj15) };
  obj15 = { contentContainerStyle: items5, children: items6 };
  items5 = [tmp.container, ];
  const obj16 = { paddingBottom: bottom + 64 };
  items5[1] = obj16;
  items6 = [tmp19Result, ];
  BottomSheetScrollView = tmp2(tmp3[26]).BottomSheetScrollView;
  items6[1] = memo.map((arr, index) => {
    let premiumSince;
    let user;
    const someResult = arr.some((item) => {
      let id;
      if (user != null) {
        id = user.id;
      }
      return item === id;
    });
    const items = [closure_1.rowContainer, ];
    let rowContainerWithUsersBadge = someResult;
    let tmp2 = authStore;
    const tmp3 = View;
    if (someResult) {
      rowContainerWithUsersBadge = closure_1.rowContainerWithUsersBadge;
    }
    let obj = {
      style: items,
      children: arr.map((badge, index) => {
        let id;
        const obj = { badge, isUsersBadge: badge === id, premiumSince };
        id = undefined;
        const tmp = closure_2_10;
        const tmp2 = TieredTenureBadgeItem;
        if (user != null) {
          id = user.id;
        }
        return tmp(tmp2, obj, index);
      })
    };
    items[1] = rowContainerWithUsersBadge;
    return tmp2(tmp3, obj, index);
  });
  return closure_10(BottomSheet, obj14);
};
export const TIERED_TENURE_BADGE_ACTION_SHEET_KEY = "TIERED_TENURE_BADGE_ACTION_SHEET";
