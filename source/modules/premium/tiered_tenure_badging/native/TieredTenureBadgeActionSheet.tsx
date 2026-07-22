// Module ID: 8524
// Function ID: 67938
// Name: TieredTenureBadgeItem
// Dependencies: []
// Exports: default

// Module 8524 (TieredTenureBadgeItem)
function TieredTenureBadgeItem(arg0) {
  let badge;
  let isUsersBadge;
  let premiumSince;
  ({ badge, isUsersBadge, premiumSince } = arg0);
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  const mobileTenureBadgeImages = obj.useMobileTenureBadgeImages(badge);
  if (null != mobileTenureBadgeImages) {
    const small = mobileTenureBadgeImages.small;
  }
  let obj1 = arg1(dependencyMap[9]);
  const tieredTenureBadgeData = obj1.getTieredTenureBadgeData(badge);
  arg1(dependencyMap[10]);
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
    const items1 = [callback(importDefault(dependencyMap[11]), obj), , , ];
    obj1 = { "Null": "String", "Null": "justifyContent", alignItems: "np", style: tmp.badgeName };
    const intl = arg1(dependencyMap[13]).intl;
    obj1.children = intl.string(tieredTenureBadgeData.nameUnformatted);
    items1[1] = callback(arg1(dependencyMap[12]).Text, obj1);
    const obj2 = { style: tmp.badgeRequirement, children: tmp5 };
    items1[2] = callback(arg1(dependencyMap[12]).Text, obj2);
    if (isUsersBadge) {
      isUsersBadge = null != premiumSince;
    }
    if (isUsersBadge) {
      const obj3 = { style: tmp.badgePremiumSince };
      const intl2 = arg1(dependencyMap[13]).intl;
      const obj4 = {};
      const _Date = Date;
      const date = new Date(premiumSince);
      obj4.date = date;
      obj3.children = intl2.formatToPlainString(arg1(dependencyMap[13]).t.Hu4jfi, obj4);
      isUsersBadge = callback(arg1(dependencyMap[12]).Text, obj3);
    }
    items1[3] = isUsersBadge;
    obj.children = items1;
    tmp7Result = closure_11(View, obj);
    const tmp7 = closure_11;
    const tmp8 = View;
  }
  return tmp7Result;
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ PremiumTypes: closure_6, TieredTenureBadge: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ AnalyticsPages: closure_8, UserSettingsSections: closure_9 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { headerContainer: { space: true, TypeError: null }, title: {}, subtitle: { MINIMAL: null, currentScreenId: null }, container: {}, rowContainer: { getChangeSentinel: null, addGlobalUnhandledRejectionInstrumentationHandler: 15, handleDefaultAutoArchiveDurationChange: "activity_joining_restricted_guild_ids", useInAppMessageSoundsEnabled: "scalar", GiftPromotionReminderExperiment: 1, EMOJI_PICKER: 6, overflow: 17 }, rowContainerWithUsersBadge: { height: 186 }, badgeContainer: { flexDirection: 20, maxWidth: null, alignItems: null, paddingBottom: null, shadowEnabled: null } };
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_MUTED, borderWidth: 1.2, borderColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_STRONG, borderRadius: importDefault(dependencyMap[7]).radii.sm };
obj.usersBadgeContainer = obj;
obj.badgeName = { marginTop: 8 };
obj.badgeRequirement = { marginTop: 4 };
obj.badgePremiumSince = {};
obj.footer = { marginHorizontal: 24 };
let closure_12 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/premium/tiered_tenure_badging/native/TieredTenureBadgeActionSheet.tsx");

export default function TieredTenureBadgeActionSheet(userId) {
  let loading;
  let onPress;
  userId = userId.userId;
  const arg1 = userId;
  let flag = userId.shouldShowCTA;
  if (flag === undefined) {
    flag = true;
  }
  let importDefault;
  let dependencyMap;
  let React;
  const tmp = callback3();
  importDefault = tmp;
  let obj = arg1(dependencyMap[14]);
  const tieredTenureBadgeDataForUser = obj.useTieredTenureBadgeDataForUser(userId);
  dependencyMap = tieredTenureBadgeDataForUser;
  let obj1 = arg1(dependencyMap[14]);
  React = obj1.usePremiumSinceForUser(userId);
  let obj2 = arg1(dependencyMap[15]);
  const items = [closure_5];
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj3 = arg1(dependencyMap[16]);
  const isPremiumResult = obj3.isPremium(stateFromStores, closure_6.TIER_2);
  let obj4 = arg1(dependencyMap[16]);
  let premiumType;
  if (null != stateFromStores) {
    premiumType = stateFromStores.premiumType;
  }
  obj = {};
  const isPremiumAtLeastResult = obj4.isPremiumAtLeast(premiumType, closure_6.TIER_0);
  obj.type = arg1(dependencyMap[18]).ImpressionTypes.HALFSHEET;
  obj.name = arg1(dependencyMap[18]).ImpressionNames.TIERED_TENURE_BADGE_MODAL;
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
  importDefault(dependencyMap[17])(obj, obj1, items1);
  const bottom = importDefault(dependencyMap[19])().bottom;
  const items2 = [userId];
  const callback = React.useCallback(() => {
    let obj = userId(tieredTenureBadgeDataForUser[20]);
    obj = { screen: constants.PREMIUM };
    obj.openUserSettings(obj);
    tmp(tieredTenureBadgeDataForUser[21]).hideActionSheet("TIERED_TENURE_BADGE_ACTION_SHEET");
    const obj3 = tmp(tieredTenureBadgeDataForUser[21]);
    const obj4 = tmp(tieredTenureBadgeDataForUser[21]);
    obj4.hideActionSheet(userId(tieredTenureBadgeDataForUser[22]).getUserProfileActionSheetKey(userId));
  }, items2);
  const tmp7 = importDefault(dependencyMap[17]);
  ({ loading, onPress } = importDefault(dependencyMap[23])(false, callback, constants.TIERED_TENURE_BADGES_ACTION_SHEET, "replaceTopSheet"));
  const memo = React.useMemo(() => {
    let length;
    let sum;
    const values = Object.values(closure_7);
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
  obj3 = { cachedAt: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011454504407100313, edpbxy: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004026493667951817, style: tmp.title };
  const intl = arg1(dependencyMap[13]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[13]).t;
  if (isPremiumResult) {
    let stringResult = string(t.Og62j7);
  } else {
    stringResult = string(t.RtGeFS);
  }
  obj3.children = stringResult;
  const items3 = [closure_10(arg1(dependencyMap[12]).Text, obj3), ];
  obj4 = { style: tmp.subtitle };
  const intl2 = arg1(dependencyMap[13]).intl;
  if (isPremiumResult) {
    let stringResult1 = intl2.string(tmp19(tmp20[13]).t.IdAP91);
  } else {
    const obj5 = { learnMoreHook: callback };
    stringResult1 = intl2.format(tmp19(tmp20[13]).t.bF+q7R, obj5);
  }
  obj4.children = stringResult1;
  items3[1] = closure_10(arg1(dependencyMap[24]).TextWithIOSLinkWorkaround, obj4);
  obj2.children = items3;
  const obj6 = { style: items4 };
  const items4 = [tmp.footer, { paddingBottom: bottom }];
  const tmp13 = importDefault(dependencyMap[23])(false, callback, constants.TIERED_TENURE_BADGES_ACTION_SHEET, "replaceTopSheet");
  const tmp14 = callback2;
  const tmp15 = View;
  const tmp16 = closure_10;
  const tmp18 = closure_10;
  const Button = arg1(dependencyMap[25]).Button;
  if (isPremiumResult) {
    const obj7 = { variant: "experimental_premium-primary" };
    const intl4 = tmp26(tmp27[13]).intl;
    obj7.text = intl4.string(tmp26(tmp27[13]).t.hvVgAZ);
    obj7.onPress = callback;
    obj6.children = tmp25(Button, obj7);
    let tmp31 = obj6;
  } else {
    const obj8 = {};
    const intl3 = arg1(dependencyMap[13]).intl;
    const string2 = intl3.string;
    const t2 = arg1(dependencyMap[13]).t;
    if (isPremiumAtLeastResult) {
      let string2Result = string2(t2.IJI7yk);
    } else {
      string2Result = string2(t2.pj0XBN);
    }
    obj8.text = string2Result;
    obj8.loading = loading;
    obj8.onPress = onPress;
    obj6.children = tmp25(Button, obj8);
    tmp31 = obj6;
  }
  const tmp14Result = callback2(View, obj2);
  const tmp23 = closure_10;
  const tmp24 = View;
  const obj9 = { openDisableCommunication: null, freezeEnabled: null };
  let tmp34;
  if (flag) {
    tmp34 = tmp23Result;
  }
  obj9.footer = tmp34;
  const obj10 = { contentContainerStyle: items5 };
  const items5 = [tmp.container, { paddingBottom: bottom + 64 }];
  const items6 = [
    tmp14Result,
    memo.map((arr) => {
      let rowContainerWithUsersBadge = arr.some((arg0) => {
        let id;
        if (null != user) {
          id = user.id;
        }
        return arg0 === id;
      });
      const obj = {};
      const items = [tmp.rowContainer, ];
      if (rowContainerWithUsersBadge) {
        rowContainerWithUsersBadge = tmp.rowContainerWithUsersBadge;
      }
      items[1] = rowContainerWithUsersBadge;
      obj.style = items;
      obj.children = arr.map((badge) => {
        let id;
        if (null != user) {
          id = user.id;
        }
        const obj = { badge, isUsersBadge: badge === id, premiumSince: closure_3 };
        return callback(closure_13, obj, arg1);
      });
      return closure_10(closure_4, obj, arg1);
    })
  ];
  obj10.children = items6;
  obj9.children = callback2(arg1(dependencyMap[27]).BottomSheetScrollView, obj10);
  return closure_10(arg1(dependencyMap[26]).BottomSheet, obj9);
};
export const TIERED_TENURE_BADGE_ACTION_SHEET_KEY = "TIERED_TENURE_BADGE_ACTION_SHEET";
