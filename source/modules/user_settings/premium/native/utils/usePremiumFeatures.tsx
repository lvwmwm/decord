// Module ID: 7998
// Function ID: 63573
// Name: usePremiumFeatures
// Dependencies: []
// Exports: default

// Module 7998 (usePremiumFeatures)
let closure_3 = importAll(dependencyMap[0]);
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_4, PremiumTypes: closure_5 } = arg1(dependencyMap[1]));
const TOTAL_PREMIUM_GROUP_USERS = arg1(dependencyMap[2]).TOTAL_PREMIUM_GROUP_USERS;
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/user_settings/premium/native/utils/usePremiumFeatures.tsx");

export default function usePremiumFeatures(arg0) {
  let flag = arg1;
  let UNSPECIFIED = arg2;
  const arg1 = arg0;
  if (arg1 === undefined) {
    flag = false;
  }
  const importDefault = flag;
  if (UNSPECIFIED === undefined) {
    UNSPECIFIED = arg1(dependencyMap[3]).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  const dependencyMap = UNSPECIFIED;
  const items = [arg0, flag, UNSPECIFIED];
  return React.useMemo(() => {
    let obj = { IconComponent: arg0(UNSPECIFIED[4]).FriendsIcon };
    const intl = arg0(UNSPECIFIED[5]).intl;
    obj = { totalSeats: closure_6 };
    obj.label = intl.formatToPlainString(flag(UNSPECIFIED[6]).gsE005, obj);
    const items = [closure_5.TIER_2];
    obj.premiumTypes = new Set(items);
    const items1 = [arg0(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.PRIMARY];
    obj.premiumGroupRoles = items1;
    obj.availableOnFractional = false;
    const items2 = [obj, , , , , , , , , ];
    obj = { IconComponent: arg0(UNSPECIFIED[4]).FriendsIcon };
    const intl2 = arg0(UNSPECIFIED[5]).intl;
    obj.label = intl2.string(flag(UNSPECIFIED[6]).G6K/+s);
    const items3 = [closure_5.TIER_2];
    const set = new Set(items);
    obj.premiumTypes = new Set(items3);
    const items4 = [arg0(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.MEMBER];
    obj.premiumGroupRoles = items4;
    obj.availableOnFractional = false;
    items2[1] = obj;
    const obj1 = { IconComponent: arg0(UNSPECIFIED[7]).UploadIcon };
    const intl3 = arg0(UNSPECIFIED[5]).intl;
    const obj2 = {};
    let obj5 = arg0(UNSPECIFIED[8]);
    obj2.uploadSize = obj5.getMaxFileSizeForPremiumType(arg0, { useSpace: false });
    obj1.label = intl3.formatToPlainString(arg0(UNSPECIFIED[5]).t.oEudy7, obj2);
    const items5 = [, ];
    ({ TIER_0: arr6[0], TIER_2: arr6[1] } = closure_5);
    const set1 = new Set(items3);
    obj1.premiumTypes = new Set(items5);
    const items6 = [arg0(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.UNSPECIFIED, arg0(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.PRIMARY];
    obj1.premiumGroupRoles = items6;
    obj1.availableOnFractional = true;
    items2[2] = obj1;
    const obj3 = { IconComponent: arg0(UNSPECIFIED[9]).ReactionIcon };
    const intl4 = arg0(UNSPECIFIED[5]).intl;
    obj3.label = intl4.string(arg0(UNSPECIFIED[5]).t.E1NP2x);
    const items7 = [, ];
    ({ TIER_0: arr8[0], TIER_2: arr8[1] } = closure_5);
    const set2 = new Set(items5);
    obj3.premiumTypes = new Set(items7);
    const items8 = [arg0(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.UNSPECIFIED, arg0(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.PRIMARY, arg0(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.MEMBER];
    obj3.premiumGroupRoles = items8;
    obj3.availableOnFractional = true;
    items2[3] = obj3;
    const obj4 = { IconComponent: arg0(UNSPECIFIED[10]).SuperReactionIcon };
    const intl5 = arg0(UNSPECIFIED[5]).intl;
    obj4.label = intl5.string(arg0(UNSPECIFIED[5]).t.taMwg/);
    const items9 = [closure_5.TIER_2];
    const set3 = new Set(items7);
    obj4.premiumTypes = new Set(items9);
    const items10 = [arg0(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.UNSPECIFIED, arg0(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.PRIMARY, arg0(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.MEMBER];
    obj4.premiumGroupRoles = items10;
    obj4.availableOnFractional = true;
    items2[4] = obj4;
    obj5 = { IconComponent: arg0(UNSPECIFIED[11]).NitroWheelIcon };
    const intl6 = arg0(UNSPECIFIED[5]).intl;
    obj5.label = intl6.string(arg0(UNSPECIFIED[5]).t.oyfAMZ);
    const items11 = [closure_5.TIER_0];
    const set4 = new Set(items9);
    obj5.premiumTypes = new Set(items11);
    const items12 = [arg0(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.UNSPECIFIED];
    obj5.premiumGroupRoles = items12;
    obj5.availableOnFractional = true;
    items2[5] = obj5;
    const obj6 = { IconComponent: arg0(UNSPECIFIED[12]).ScreenStreamIcon };
    const intl7 = arg0(UNSPECIFIED[5]).intl;
    obj6.label = intl7.string(arg0(UNSPECIFIED[5]).t.myyAEr);
    const items13 = [closure_5.TIER_2];
    const set5 = new Set(items11);
    obj6.premiumTypes = new Set(items13);
    const items14 = [arg0(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.UNSPECIFIED, arg0(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.PRIMARY, arg0(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.MEMBER];
    obj6.premiumGroupRoles = items14;
    obj6.availableOnFractional = true;
    items2[6] = obj6;
    const obj7 = { IconComponent: arg0(UNSPECIFIED[13]).BoostGemIcon };
    const intl8 = arg0(UNSPECIFIED[5]).intl;
    obj7.label = intl8.formatToPlainString(flag(UNSPECIFIED[6]).HVCRVf, { numBoosts: closure_4 });
    const items15 = [closure_5.TIER_2];
    const obj8 = { numBoosts: closure_4 };
    const set6 = new Set(items13);
    obj7.premiumTypes = new Set(items15);
    const items16 = [arg0(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.PRIMARY];
    obj7.premiumGroupRoles = items16;
    obj7.availableOnFractional = false;
    items2[7] = obj7;
    const obj9 = { IconComponent: arg0(UNSPECIFIED[13]).BoostGemIcon };
    const intl9 = arg0(UNSPECIFIED[5]).intl;
    obj9.label = intl9.formatToPlainString(arg0(UNSPECIFIED[5]).t.DbkNFj, { numBoosts: closure_4 });
    const items17 = [closure_5.TIER_2];
    const obj10 = { numBoosts: closure_4 };
    const set7 = new Set(items15);
    obj9.premiumTypes = new Set(items17);
    const items18 = [arg0(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.UNSPECIFIED];
    obj9.premiumGroupRoles = items18;
    obj9.availableOnFractional = false;
    items2[8] = obj9;
    const obj11 = { IconComponent: arg0(UNSPECIFIED[14]).UserSquareIcon };
    const intl10 = arg0(UNSPECIFIED[5]).intl;
    obj11.label = intl10.string(arg0(UNSPECIFIED[5]).t.vlHicE);
    const items19 = [closure_5.TIER_2];
    const set8 = new Set(items17);
    obj11.premiumTypes = new Set(items19);
    const items20 = [arg0(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.UNSPECIFIED, arg0(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.PRIMARY, arg0(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.MEMBER];
    obj11.premiumGroupRoles = items20;
    obj11.availableOnFractional = true;
    items2[9] = obj11;
    const found = items2.filter((premiumTypes) => {
      premiumTypes = premiumTypes.premiumTypes;
      let hasItem = premiumTypes.has(closure_0);
      if (hasItem) {
        hasItem = !closure_1 || premiumTypes.availableOnFractional;
        const tmp3 = !closure_1 || premiumTypes.availableOnFractional;
      }
      return hasItem;
    });
    const found1 = found.filter((premiumGroupRoles) => {
      premiumGroupRoles = premiumGroupRoles.premiumGroupRoles;
      return premiumGroupRoles.includes(closure_2);
    });
    return found1.map((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["color"] = callback(closure_2[15]).unsafe_rawColors.WHITE;
      return obj;
    });
  }, items);
};
