// Module ID: 8530
// Function ID: 67975
// Name: TieredTenureBadgeItem
// Dependencies: [31, 27, 1849, 1851, 653, 33, 4130, 689, 8531, 6877, 8556, 5085, 4126, 1212, 8557, 566, 1872, 8559, 480, 1557, 5796, 4098, 8492, 7958, 5459, 8560, 5187, 5189, 2]
// Exports: default

// Module 8530 (TieredTenureBadgeItem)
import result from "result";
import { View } from "BottomSheetModal";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import GuildFeatures from "GuildFeatures";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function TieredTenureBadgeItem(arg0) {
  let badge;
  let isUsersBadge;
  let premiumSince;
  ({ badge, isUsersBadge, premiumSince } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(8531) /* getMobileTenureBadgeImages */;
  const mobileTenureBadgeImages = obj.useMobileTenureBadgeImages(badge);
  if (null != mobileTenureBadgeImages) {
    const small = mobileTenureBadgeImages.small;
  }
  let obj1 = require(6877) /* getTieredTenureBadgeData */;
  const tieredTenureBadgeData = obj1.getTieredTenureBadgeData(badge);
  require(8556) /* getTenureBadgeRequirementString */;
  if (null != tieredTenureBadgeData) {
    const tenureReqNumMonths = tieredTenureBadgeData.tenureReqNumMonths;
  }
  let tmp7Result = null;
  if (null != tieredTenureBadgeData) {
    obj = {};
    const items = [tmp.badgeContainer, ];
    let usersBadgeContainer = isUsersBadge;
    if (isUsersBadge) {
      usersBadgeContainer = tmp.usersBadgeContainer;
    }
    items[1] = usersBadgeContainer;
    obj.style = items;
    obj = { resizeMode: "contain", source: small };
    const items1 = [callback(importDefault(5085), obj), , , ];
    obj1 = { style: tmp.badgeName, variant: "heading-md/semibold", color: "mobile-text-heading-primary" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj1.children = intl.string(tieredTenureBadgeData.nameUnformatted);
    items1[1] = callback(require(4126) /* Text */.Text, obj1);
    const obj2 = { style: tmp.badgeRequirement, variant: "text-xs/normal", color: "mobile-text-heading-primary", children: tmp5 };
    items1[2] = callback(require(4126) /* Text */.Text, obj2);
    if (isUsersBadge) {
      isUsersBadge = null != premiumSince;
    }
    if (isUsersBadge) {
      const obj3 = { style: tmp.badgePremiumSince, variant: "text-xs/normal", color: "text-muted" };
      const intl2 = require(1212) /* getSystemLocale */.intl;
      const obj4 = {};
      const _Date = Date;
      const date = new Date(premiumSince);
      obj4.date = date;
      obj3.children = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.Hu4jfi, obj4);
      isUsersBadge = callback(require(4126) /* Text */.Text, obj3);
    }
    items1[3] = isUsersBadge;
    obj.children = items1;
    tmp7Result = closure_11(View, obj);
    const tmp7 = closure_11;
    const tmp8 = View;
  }
  return tmp7Result;
}
({ PremiumTypes: closure_6, TieredTenureBadge: closure_7 } = GuildFeatures);
({ AnalyticsPages: closure_8, UserSettingsSections: closure_9 } = ME);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = { headerContainer: { paddingHorizontal: 24, alignItems: "center" }, title: { marginTop: 8, paddingHorizontal: 12, textAlign: "center" }, subtitle: { marginTop: 8, textAlign: "center" }, container: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingHorizontal: 24, marginTop: 16 }, rowContainer: { flexDirection: "row", width: "100%", height: 160, gap: 8, justifyContent: "center", alignItems: "center", marginTop: 24 }, rowContainerWithUsersBadge: { height: 186 }, badgeContainer: { minWidth: 110, height: "100%", paddingTop: 16, alignItems: "center", paddingHorizontal: 8 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, borderWidth: 1.2, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.usersBadgeContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.badgeName = { marginTop: 8 };
_createForOfIteratorHelperLoose.badgeRequirement = { marginTop: 4 };
_createForOfIteratorHelperLoose.badgePremiumSince = { width: 90, marginTop: 4, textAlign: "center" };
_createForOfIteratorHelperLoose.footer = { marginHorizontal: 24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/tiered_tenure_badging/native/TieredTenureBadgeActionSheet.tsx");

export default function TieredTenureBadgeActionSheet(userId) {
  let loading;
  let onPress;
  userId = userId.userId;
  let flag = userId.shouldShowCTA;
  if (flag === undefined) {
    flag = true;
  }
  let importDefault;
  let tieredTenureBadgeDataForUser;
  let React;
  const tmp = _createForOfIteratorHelperLoose();
  importDefault = tmp;
  let obj = userId(tieredTenureBadgeDataForUser[14]);
  tieredTenureBadgeDataForUser = obj.useTieredTenureBadgeDataForUser(userId);
  let obj1 = userId(tieredTenureBadgeDataForUser[14]);
  React = obj1.usePremiumSinceForUser(userId);
  let obj2 = userId(tieredTenureBadgeDataForUser[15]);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj2.useStateFromStores(items, () => outer1_5.getCurrentUser());
  let obj3 = userId(tieredTenureBadgeDataForUser[16]);
  const isPremiumResult = obj3.isPremium(stateFromStores, closure_6.TIER_2);
  let obj4 = userId(tieredTenureBadgeDataForUser[16]);
  let premiumType;
  if (null != stateFromStores) {
    premiumType = stateFromStores.premiumType;
  }
  obj = {};
  const isPremiumAtLeastResult = obj4.isPremiumAtLeast(premiumType, closure_6.TIER_0);
  obj.type = userId(tieredTenureBadgeDataForUser[18]).ImpressionTypes.HALFSHEET;
  obj.name = userId(tieredTenureBadgeDataForUser[18]).ImpressionNames.TIERED_TENURE_BADGE_MODAL;
  obj = {};
  let id;
  if (null != tieredTenureBadgeDataForUser) {
    id = tieredTenureBadgeDataForUser.id;
  }
  obj.badge = id;
  obj.premium_type = isPremiumResult;
  obj.viewed_user_id = userId;
  obj.properties = obj;
  obj1 = {};
  let id1;
  if (null != tieredTenureBadgeDataForUser) {
    id1 = tieredTenureBadgeDataForUser.id;
  }
  obj1.disableTrack = null == id1;
  let id2;
  if (null != tieredTenureBadgeDataForUser) {
    id2 = tieredTenureBadgeDataForUser.id;
  }
  const items1 = [id2];
  importDefault(tieredTenureBadgeDataForUser[17])(obj, obj1, items1);
  const bottom = importDefault(tieredTenureBadgeDataForUser[19])().bottom;
  const items2 = [userId];
  const callback = React.useCallback(() => {
    let obj = userId(tieredTenureBadgeDataForUser[20]);
    obj = { screen: outer1_9.PREMIUM };
    obj.openUserSettings(obj);
    _undefined(tieredTenureBadgeDataForUser[21]).hideActionSheet("TIERED_TENURE_BADGE_ACTION_SHEET");
    const obj3 = _undefined(tieredTenureBadgeDataForUser[21]);
    const obj4 = _undefined(tieredTenureBadgeDataForUser[21]);
    obj4.hideActionSheet(userId(tieredTenureBadgeDataForUser[22]).getUserProfileActionSheetKey(userId));
  }, items2);
  const tmp7 = importDefault(tieredTenureBadgeDataForUser[17]);
  ({ loading, onPress } = importDefault(tieredTenureBadgeDataForUser[23])(false, callback, constants.TIERED_TENURE_BADGES_ACTION_SHEET, "replaceTopSheet"));
  const memo = React.useMemo(() => {
    let length;
    let sum;
    const values = Object.values(outer1_7);
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
  obj2 = { style: tmp.headerContainer };
  obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title };
  const intl = userId(tieredTenureBadgeDataForUser[13]).intl;
  const string = intl.string;
  const t = userId(tieredTenureBadgeDataForUser[13]).t;
  if (isPremiumResult) {
    let stringResult = string(t.Og62j7);
  } else {
    stringResult = string(t.RtGeFS);
  }
  obj3.children = stringResult;
  const items3 = [closure_10(userId(tieredTenureBadgeDataForUser[12]).Text, obj3), ];
  obj4 = { variant: "text-md/medium", color: "text-default", style: tmp.subtitle };
  const intl2 = userId(tieredTenureBadgeDataForUser[13]).intl;
  if (isPremiumResult) {
    let stringResult1 = intl2.string(tmp19(tmp20[13]).t.IdAP91);
  } else {
    const obj5 = { learnMoreHook: callback };
    stringResult1 = intl2.format(tmp19(tmp20[13]).t["bF+q7R"], obj5);
  }
  obj4.children = stringResult1;
  items3[1] = closure_10(userId(tieredTenureBadgeDataForUser[24]).TextWithIOSLinkWorkaround, obj4);
  obj2.children = items3;
  const obj6 = { style: items4 };
  items4 = [tmp.footer, { paddingBottom: bottom }];
  const tmp13 = importDefault(tieredTenureBadgeDataForUser[23])(false, callback, constants.TIERED_TENURE_BADGES_ACTION_SHEET, "replaceTopSheet");
  const tmp14 = callback2;
  const tmp15 = View;
  const tmp16 = closure_10;
  const tmp18 = closure_10;
  const tmp27 = importDefault(tieredTenureBadgeDataForUser[25]);
  const obj7 = {};
  if (isPremiumResult) {
    obj7.shiny = false;
    const intl4 = userId(tmp26[13]).intl;
    obj7.text = intl4.string(userId(tmp26[13]).t.hvVgAZ);
    obj7.onPress = callback;
    obj6.children = tmp25(tmp27, obj7);
    let tmp31 = obj6;
  } else {
    obj7.loading = loading;
    const intl3 = userId(tieredTenureBadgeDataForUser[13]).intl;
    const string2 = intl3.string;
    const t2 = userId(tieredTenureBadgeDataForUser[13]).t;
    if (isPremiumAtLeastResult) {
      let string2Result = string2(t2.IJI7yk);
    } else {
      string2Result = string2(t2.pj0XBN);
    }
    obj7.text = string2Result;
    obj7.onPress = onPress;
    obj6.children = tmp25(tmp27, obj7);
    tmp31 = obj6;
  }
  const tmp14Result = callback2(View, obj2);
  const tmp23 = closure_10;
  const tmp24 = View;
  const obj8 = { scrollable: true, startExpanded: true };
  let tmp35;
  if (flag) {
    tmp35 = tmp23Result;
  }
  obj8.footer = tmp35;
  const obj9 = { contentContainerStyle: items5 };
  items5 = [tmp.container, { paddingBottom: bottom + 64 }];
  const items6 = [
    tmp14Result,
    memo.map((arr) => {
      let rowContainerWithUsersBadge = arr.some((arg0) => {
        let id;
        if (null != outer1_2) {
          id = outer1_2.id;
        }
        return arg0 === id;
      });
      let obj = {};
      const items = [_undefined.rowContainer, ];
      if (rowContainerWithUsersBadge) {
        rowContainerWithUsersBadge = _undefined.rowContainerWithUsersBadge;
      }
      items[1] = rowContainerWithUsersBadge;
      obj.style = items;
      obj.children = arr.map((badge) => {
        let id;
        if (null != outer1_2) {
          id = outer1_2.id;
        }
        const obj = { badge, isUsersBadge: badge === id, premiumSince: outer1_3 };
        return outer2_10(outer2_13, obj, arg1);
      });
      return outer1_10(outer1_4, obj, arg1);
    })
  ];
  obj9.children = items6;
  obj8.children = callback2(userId(tieredTenureBadgeDataForUser[27]).BottomSheetScrollView, obj9);
  return closure_10(userId(tieredTenureBadgeDataForUser[26]).BottomSheet, obj8);
};
export const TIERED_TENURE_BADGE_ACTION_SHEET_KEY = "TIERED_TENURE_BADGE_ACTION_SHEET";
