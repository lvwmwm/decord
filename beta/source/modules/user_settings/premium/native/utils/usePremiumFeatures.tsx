// Module ID: 8673
// Function ID: 8674
// Name: usePremiumFeatures
// Dependencies: [19, 1374, 4502, 1380, 4529, 1115, 3199, 8674, 4488, 8219, 8676, 8122, 8533, 8678, 8680, 576, 2]
// Exports: default

// Module 8673 (usePremiumFeatures)
import intl11 from "intl" /* 1115 */;
import user from "user" /* 1380 */;
import _modDef3199 from "module_3199" /* 3199 */;
import PremiumUtils from "PremiumUtils" /* 4488 */;
import PremiumGroupConstants from "PremiumGroupConstants" /* 4502 */;
import FriendsIcon from "FriendsIcon" /* 4529 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8122 */;
import ReactionIcon from "ReactionIcon" /* 8219 */;
import ScreenStreamIcon from "ScreenStreamIcon" /* 8533 */;
import UploadIcon from "UploadIcon" /* 8674 */;
import SuperReactionIcon from "SuperReactionIcon" /* 8676 */;
import BoostGemIcon from "BoostGemIcon" /* 8678 */;
import UserSquareIcon from "UserSquareIcon" /* 8680 */;
import react from "react" /* 19 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, premiumGroupRoles, premiumTypes;

let closure_4;
let hasOwnProperty;
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_4, PremiumTypes: hasOwnProperty } = PremiumConstants);
const TOTAL_PREMIUM_GROUP_USERS = PremiumGroupConstants.TOTAL_PREMIUM_GROUP_USERS;
const result = size.fileFinishedImporting("modules/user_settings/premium/native/utils/usePremiumFeatures.tsx");

export default function usePremiumFeatures(arg0) {
  let closure_0;
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let UNSPECIFIED = arg2;
  if (arg2 === undefined) {
    UNSPECIFIED = require("user").PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  let items = [arg0, flag, UNSPECIFIED];
  return react.useMemo(() => {
    let formatToPlainString;
    let intl;
    let intl10;
    let intl2;
    let intl4;
    let intl5;
    let intl6;
    let intl7;
    let intl8;
    let intl9;
    let items;
    let items1;
    let items10;
    let items11;
    let items12;
    let items13;
    let items14;
    let items15;
    let items16;
    let items17;
    let items18;
    let items19;
    let items20;
    let items3;
    let items4;
    let items5;
    let items6;
    let items7;
    let items8;
    let items9;
    let oEudy7;
    let obj12;
    let obj14;
    let obj2;
    let obj5;
    let obj6;
    let obj = { IconComponent: FriendsIcon.FriendsIcon, label: intl.formatToPlainString(_modDef3199.gsE005, obj2), premiumTypes: new Set(items), premiumGroupRoles: items1, availableOnFractional: false };
    intl = intl11.intl;
    items = [hasOwnProperty.TIER_2];
    items1 = [];
    obj2 = { totalSeats: TOTAL_PREMIUM_GROUP_USERS };
    new Set(items);
    items1[0] = user.PremiumSubscriptionGroupRole.PRIMARY;
    const items2 = [obj, , , , , , , , , ];
    const obj3 = { IconComponent: FriendsIcon.FriendsIcon, label: intl2.string(_modDef3199["G6K/+s"]), premiumTypes: new Set(items3), premiumGroupRoles: items4, availableOnFractional: false };
    intl2 = intl11.intl;
    items3 = [hasOwnProperty.TIER_2];
    items4 = [];
    new Set(items3);
    items4[0] = user.PremiumSubscriptionGroupRole.MEMBER;
    items2[1] = obj3;
    const obj4 = { IconComponent: UploadIcon.UploadIcon, label: formatToPlainString(oEudy7, obj5), premiumTypes: new Set(items5), premiumGroupRoles: items6, availableOnFractional: true };
    const intl3 = intl11.intl;
    formatToPlainString = intl3.formatToPlainString;
    obj5 = { uploadSize: obj6.getMaxFileSizeForPremiumType(closure_0, { useSpace: false }) };
    oEudy7 = intl11.t.oEudy7;
    items5 = [, ];
    ({ TIER_0: arr6[0], TIER_2: arr6[1] } = hasOwnProperty);
    items6 = [, ];
    obj6 = PremiumUtils;
    new Set(items5);
    items6[0] = user.PremiumSubscriptionGroupRole.UNSPECIFIED;
    items6[1] = user.PremiumSubscriptionGroupRole.PRIMARY;
    items2[2] = obj4;
    const obj7 = { IconComponent: ReactionIcon.ReactionIcon, label: intl4.string(intl11.t.E1NP2x), premiumTypes: new Set(items7), premiumGroupRoles: items8, availableOnFractional: true };
    intl4 = intl11.intl;
    items7 = [, ];
    ({ TIER_0: arr8[0], TIER_2: arr8[1] } = hasOwnProperty);
    items8 = [, , ];
    new Set(items7);
    items8[0] = user.PremiumSubscriptionGroupRole.UNSPECIFIED;
    items8[1] = user.PremiumSubscriptionGroupRole.PRIMARY;
    items8[2] = user.PremiumSubscriptionGroupRole.MEMBER;
    items2[3] = obj7;
    const obj8 = { IconComponent: SuperReactionIcon.SuperReactionIcon, label: intl5.string(intl11.t["taMwg/"]), premiumTypes: new Set(items9), premiumGroupRoles: items10, availableOnFractional: true };
    intl5 = intl11.intl;
    items9 = [hasOwnProperty.TIER_2];
    items10 = [, , ];
    new Set(items9);
    items10[0] = user.PremiumSubscriptionGroupRole.UNSPECIFIED;
    items10[1] = user.PremiumSubscriptionGroupRole.PRIMARY;
    items10[2] = user.PremiumSubscriptionGroupRole.MEMBER;
    items2[4] = obj8;
    const obj9 = { IconComponent: NitroWheelIcon.NitroWheelIcon, label: intl6.string(intl11.t.oyfAMZ), premiumTypes: new Set(items11), premiumGroupRoles: items12, availableOnFractional: true };
    intl6 = intl11.intl;
    items11 = [hasOwnProperty.TIER_0];
    items12 = [];
    new Set(items11);
    items12[0] = user.PremiumSubscriptionGroupRole.UNSPECIFIED;
    items2[5] = obj9;
    const obj10 = { IconComponent: ScreenStreamIcon.ScreenStreamIcon, label: intl7.string(intl11.t.myyAEr), premiumTypes: new Set(items13), premiumGroupRoles: items14, availableOnFractional: true };
    intl7 = intl11.intl;
    items13 = [hasOwnProperty.TIER_2];
    items14 = [, , ];
    new Set(items13);
    items14[0] = user.PremiumSubscriptionGroupRole.UNSPECIFIED;
    items14[1] = user.PremiumSubscriptionGroupRole.PRIMARY;
    items14[2] = user.PremiumSubscriptionGroupRole.MEMBER;
    items2[6] = obj10;
    const obj11 = { IconComponent: BoostGemIcon.BoostGemIcon, label: intl8.formatToPlainString(_modDef3199.HVCRVf, obj12), premiumTypes: new Set(items15), premiumGroupRoles: items16, availableOnFractional: false };
    intl8 = intl11.intl;
    items15 = [hasOwnProperty.TIER_2];
    items16 = [];
    obj12 = { numBoosts };
    new Set(items15);
    items16[0] = user.PremiumSubscriptionGroupRole.PRIMARY;
    items2[7] = obj11;
    const obj13 = { IconComponent: BoostGemIcon.BoostGemIcon, label: intl9.formatToPlainString(intl11.t.DbkNFj, obj14), premiumTypes: new Set(items17), premiumGroupRoles: items18, availableOnFractional: false };
    intl9 = intl11.intl;
    items17 = [hasOwnProperty.TIER_2];
    items18 = [];
    obj14 = { numBoosts };
    new Set(items17);
    items18[0] = user.PremiumSubscriptionGroupRole.UNSPECIFIED;
    items2[8] = obj13;
    const obj15 = { IconComponent: UserSquareIcon.UserSquareIcon, label: intl10.string(intl11.t.vlHicE), premiumTypes: new Set(items19), premiumGroupRoles: items20, availableOnFractional: true };
    intl10 = intl11.intl;
    items19 = [hasOwnProperty.TIER_2];
    items20 = [, , ];
    new Set(items19);
    items20[0] = user.PremiumSubscriptionGroupRole.UNSPECIFIED;
    items20[1] = user.PremiumSubscriptionGroupRole.PRIMARY;
    items20[2] = user.PremiumSubscriptionGroupRole.MEMBER;
    items2[9] = obj15;
    const found = items2.filter((premiumTypes) => {
      premiumTypes = premiumTypes.premiumTypes;
      let hasItem = premiumTypes.has(closure_1_0);
      if (hasItem) {
        let availableOnFractional = !flag;
        if (flag) {
          availableOnFractional = premiumTypes.availableOnFractional;
        }
        hasItem = availableOnFractional;
      }
      return hasItem;
    });
    const found1 = found.filter((premiumGroupRoles) => {
      premiumGroupRoles = premiumGroupRoles.premiumGroupRoles;
      return premiumGroupRoles.includes(UNSPECIFIED);
    });
    return found1.map((item) => {
      const obj = { color: flag(UNSPECIFIED[15]).unsafe_rawColors.WHITE };
      const merged = Object.assign(item);
      return obj;
    });
  }, items);
};
