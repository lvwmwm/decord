// Module ID: 8061
// Function ID: 63869
// Name: usePremiumFeatures
// Dependencies: [31, 1851, 3790, 1867, 3832, 1212, 2780, 7440, 3776, 7437, 7483, 7486, 7480, 7477, 7474, 689, 2]
// Exports: default

// Module 8061 (usePremiumFeatures)
import result from "result";
import GuildFeatures from "GuildFeatures";
import { TOTAL_PREMIUM_GROUP_USERS } from "TOTAL_PREMIUM_GROUP_MEMBER_SEATS";

let closure_4;
let closure_5;
const require = arg1;
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_4, PremiumTypes: closure_5 } = GuildFeatures);
const result = require("TOTAL_PREMIUM_GROUP_MEMBER_SEATS").fileFinishedImporting("modules/user_settings/premium/native/utils/usePremiumFeatures.tsx");

export default function usePremiumFeatures(arg0) {
  let flag = arg1;
  let UNSPECIFIED = arg2;
  const _require = arg0;
  if (arg1 === undefined) {
    flag = false;
  }
  if (UNSPECIFIED === undefined) {
    UNSPECIFIED = _require(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  let items = [arg0, flag, UNSPECIFIED];
  return React.useMemo(() => {
    let obj = { IconComponent: callback(UNSPECIFIED[4]).FriendsIcon };
    const intl = callback(UNSPECIFIED[5]).intl;
    obj = { totalSeats: outer1_6 };
    obj.label = intl.formatToPlainString(flag(UNSPECIFIED[6]).gsE005, obj);
    const items = [outer1_5.TIER_2];
    obj.premiumTypes = new Set(items);
    const items1 = [callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.PRIMARY];
    obj.premiumGroupRoles = items1;
    obj.availableOnFractional = false;
    const items2 = [obj, , , , , , , , , ];
    obj = { IconComponent: callback(UNSPECIFIED[4]).FriendsIcon };
    const intl2 = callback(UNSPECIFIED[5]).intl;
    obj.label = intl2.string(flag(UNSPECIFIED[6])["G6K/+s"]);
    const items3 = [outer1_5.TIER_2];
    const set = new Set(items);
    obj.premiumTypes = new Set(items3);
    const items4 = [callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.MEMBER];
    obj.premiumGroupRoles = items4;
    obj.availableOnFractional = false;
    items2[1] = obj;
    const obj1 = { IconComponent: callback(UNSPECIFIED[7]).UploadIcon };
    const intl3 = callback(UNSPECIFIED[5]).intl;
    const obj2 = {};
    let obj5 = callback(UNSPECIFIED[8]);
    obj2.uploadSize = obj5.getMaxFileSizeForPremiumType(callback, { useSpace: false });
    obj1.label = intl3.formatToPlainString(callback(UNSPECIFIED[5]).t.oEudy7, obj2);
    const items5 = [, ];
    ({ TIER_0: arr6[0], TIER_2: arr6[1] } = outer1_5);
    const set1 = new Set(items3);
    obj1.premiumTypes = new Set(items5);
    const items6 = [callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.UNSPECIFIED, callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.PRIMARY];
    obj1.premiumGroupRoles = items6;
    obj1.availableOnFractional = true;
    items2[2] = obj1;
    const obj3 = { IconComponent: callback(UNSPECIFIED[9]).ReactionIcon };
    const intl4 = callback(UNSPECIFIED[5]).intl;
    obj3.label = intl4.string(callback(UNSPECIFIED[5]).t.E1NP2x);
    const items7 = [, ];
    ({ TIER_0: arr8[0], TIER_2: arr8[1] } = outer1_5);
    const set2 = new Set(items5);
    obj3.premiumTypes = new Set(items7);
    const items8 = [callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.UNSPECIFIED, callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.PRIMARY, callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.MEMBER];
    obj3.premiumGroupRoles = items8;
    obj3.availableOnFractional = true;
    items2[3] = obj3;
    const obj4 = { IconComponent: callback(UNSPECIFIED[10]).SuperReactionIcon };
    const intl5 = callback(UNSPECIFIED[5]).intl;
    obj4.label = intl5.string(callback(UNSPECIFIED[5]).t["taMwg/"]);
    const items9 = [outer1_5.TIER_2];
    const set3 = new Set(items7);
    obj4.premiumTypes = new Set(items9);
    const items10 = [callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.UNSPECIFIED, callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.PRIMARY, callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.MEMBER];
    obj4.premiumGroupRoles = items10;
    obj4.availableOnFractional = true;
    items2[4] = obj4;
    obj5 = { IconComponent: callback(UNSPECIFIED[11]).NitroWheelIcon };
    const intl6 = callback(UNSPECIFIED[5]).intl;
    obj5.label = intl6.string(callback(UNSPECIFIED[5]).t.oyfAMZ);
    const items11 = [outer1_5.TIER_0];
    const set4 = new Set(items9);
    obj5.premiumTypes = new Set(items11);
    const items12 = [callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.UNSPECIFIED];
    obj5.premiumGroupRoles = items12;
    obj5.availableOnFractional = true;
    items2[5] = obj5;
    const obj6 = { IconComponent: callback(UNSPECIFIED[12]).ScreenStreamIcon };
    const intl7 = callback(UNSPECIFIED[5]).intl;
    obj6.label = intl7.string(callback(UNSPECIFIED[5]).t.myyAEr);
    const items13 = [outer1_5.TIER_2];
    const set5 = new Set(items11);
    obj6.premiumTypes = new Set(items13);
    const items14 = [callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.UNSPECIFIED, callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.PRIMARY, callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.MEMBER];
    obj6.premiumGroupRoles = items14;
    obj6.availableOnFractional = true;
    items2[6] = obj6;
    const obj7 = { IconComponent: callback(UNSPECIFIED[13]).BoostGemIcon };
    const intl8 = callback(UNSPECIFIED[5]).intl;
    obj7.label = intl8.formatToPlainString(flag(UNSPECIFIED[6]).HVCRVf, { numBoosts: outer1_4 });
    const items15 = [outer1_5.TIER_2];
    const obj8 = { numBoosts: outer1_4 };
    const set6 = new Set(items13);
    obj7.premiumTypes = new Set(items15);
    const items16 = [callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.PRIMARY];
    obj7.premiumGroupRoles = items16;
    obj7.availableOnFractional = false;
    items2[7] = obj7;
    const obj9 = { IconComponent: callback(UNSPECIFIED[13]).BoostGemIcon };
    const intl9 = callback(UNSPECIFIED[5]).intl;
    obj9.label = intl9.formatToPlainString(callback(UNSPECIFIED[5]).t.DbkNFj, { numBoosts: outer1_4 });
    const items17 = [outer1_5.TIER_2];
    const obj10 = { numBoosts: outer1_4 };
    const set7 = new Set(items15);
    obj9.premiumTypes = new Set(items17);
    const items18 = [callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.UNSPECIFIED];
    obj9.premiumGroupRoles = items18;
    obj9.availableOnFractional = false;
    items2[8] = obj9;
    const obj11 = { IconComponent: callback(UNSPECIFIED[14]).UserSquareIcon };
    const intl10 = callback(UNSPECIFIED[5]).intl;
    obj11.label = intl10.string(callback(UNSPECIFIED[5]).t.vlHicE);
    const items19 = [outer1_5.TIER_2];
    const set8 = new Set(items17);
    obj11.premiumTypes = new Set(items19);
    const items20 = [callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.UNSPECIFIED, callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.PRIMARY, callback(UNSPECIFIED[3]).PremiumSubscriptionGroupRole.MEMBER];
    obj11.premiumGroupRoles = items20;
    obj11.availableOnFractional = true;
    items2[9] = obj11;
    const found = items2.filter((premiumTypes) => {
      premiumTypes = premiumTypes.premiumTypes;
      let hasItem = premiumTypes.has(outer1_0);
      if (hasItem) {
        hasItem = !outer1_1 || premiumTypes.availableOnFractional;
        const tmp3 = !outer1_1 || premiumTypes.availableOnFractional;
      }
      return hasItem;
    });
    const found1 = found.filter((premiumGroupRoles) => {
      premiumGroupRoles = premiumGroupRoles.premiumGroupRoles;
      return premiumGroupRoles.includes(outer1_2);
    });
    return found1.map((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["color"] = flag(UNSPECIFIED[15]).unsafe_rawColors.WHITE;
      return obj;
    });
  }, items);
};
