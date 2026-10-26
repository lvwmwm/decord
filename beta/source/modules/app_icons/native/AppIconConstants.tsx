// Module ID: 9865
// Function ID: 9866
// Name: AppIconConstants
// Dependencies: [4996, 9866, 9867, 1128, 9868, 9869, 9870, 9871, 9872, 9873, 9874, 9875, 9876, 9877, 9878, 9879, 9880, 9881, 9882, 9883, 9884, 9885, 9886, 9887, 9888, 9889, 9890, 9891, 4999, 9892, 4998, 4247, 2]
// Exports: getDefaultIcon, getIconById, getIcons, getOfficialAlternateIcons, isHexagonCampaignAppIcon, isIconExpired

// Module 9865 (AppIconConstants)
import intl25 from "intl" /* 1128 */;
import _modDef4247 from "module_4247" /* 4247 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 4998 */;
import HexagonCampaignPerkAvailability from "HexagonCampaignPerkAvailability" /* 4999 */;
import AppIconTypes from "AppIconTypes" /* 9866 */;
import AssetRegistryDefault from "AssetRegistry" /* 9867 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9868 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 9869 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 9870 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 9871 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 9872 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 9873 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 9874 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 9875 */;
import AssetRegistryDefault10 from "AssetRegistry" /* 9876 */;
import AssetRegistryDefault11 from "AssetRegistry" /* 9877 */;
import AssetRegistryDefault12 from "AssetRegistry" /* 9878 */;
import AssetRegistryDefault13 from "AssetRegistry" /* 9879 */;
import AssetRegistryDefault14 from "AssetRegistry" /* 9880 */;
import AssetRegistryDefault15 from "AssetRegistry" /* 9881 */;
import AssetRegistryDefault16 from "AssetRegistry" /* 9882 */;
import AssetRegistryDefault17 from "AssetRegistry" /* 9883 */;
import AssetRegistryDefault18 from "AssetRegistry" /* 9884 */;
import AssetRegistryDefault19 from "AssetRegistry" /* 9885 */;
import AssetRegistryDefault20 from "AssetRegistry" /* 9886 */;
import AssetRegistryDefault21 from "AssetRegistry" /* 9887 */;
import AssetRegistryDefault22 from "AssetRegistry" /* 9888 */;
import AssetRegistryDefault23 from "AssetRegistry" /* 9889 */;
import AssetRegistryDefault24 from "AssetRegistry" /* 9890 */;
import AssetRegistryDefault25 from "AssetRegistry" /* 9891 */;
import AssetRegistryDefault26 from "AssetRegistry" /* 9892 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4996 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let intl;
let intl10;
let intl11;
let intl12;
let intl13;
let intl14;
let intl15;
let intl16;
let intl17;
let intl18;
let intl19;
let intl2;
let intl20;
let intl21;
let intl22;
let intl23;
let intl24;
let intl3;
let intl4;
let intl5;
let intl6;
let intl7;
let intl8;
let intl9;
const f105032 = (expiresAt) => {
  let tmp = null != expiresAt.expiresAt;
  if (tmp) {
    const _Date = Date;
    tmp = Date.now() > expiresAt.expiresAt;
  }
  return !tmp;
};
function getLimitedAlternateIcons() {
  let intl;
  let items1;
  let tmp3Result;
  items = [...closure_7];
  const obj = HexagonCampaignPerkAvailability;
  const tmp5 = constants;
  if (obj.getHexagonCampaignPerkAvailabilityForCurrentUser(constants.APP_ICON, "AppIconConstants") === hasOwnProperty.HIDDEN) {
    items1 = [];
  } else {
    const obj2 = { id: AppIconTypes.LimitedTimeAppIconIds.HEXAGON, iconSource: AssetRegistryDefault26, isPremium: tmp3Result.isHexagonCampaignPerkPremiumOnly(tmp5.APP_ICON), expiresAt, name: intl.string(_modDef4247.JC4Pii) };
    tmp3Result = HexagonCampaignUtils;
    intl = tmp3(1128).intl;
    items1 = [obj2];
  }
  HermesBuiltin.arraySpread(items, items1, tmp2);
  return items.filter((expiresAt) => {
    let tmp = null != expiresAt.expiresAt;
    if (tmp) {
      const _Date = Date;
      tmp = Date.now() > expiresAt.expiresAt;
    }
    return !tmp;
  });
}
({ HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT_MS: c3, HexagonCampaignPerk: closure_4, HexagonCampaignPerkAvailability: hasOwnProperty } = HexagonCampaignConstants);
let obj = { id: AppIconTypes.PremiumAppIconIds.IN_RAINBOWS, iconSource: AssetRegistryDefault2, isPremium: true, name: intl.string(intl25.t.yxJB9E) };
intl = intl25.intl;
let items = [obj, , , , , , , , , , , , , , , , , , , , , , , ];
let obj2 = { id: AppIconTypes.PremiumAppIconIds.MIDNIGHT_PRISM, iconSource: AssetRegistryDefault3, isPremium: true, name: intl2.string(intl25.t.nshUZZ) };
intl2 = intl25.intl;
items[1] = obj2;
const obj3 = { id: AppIconTypes.PremiumAppIconIds.COLOR_WAVE, iconSource: AssetRegistryDefault4, isPremium: true, name: intl3.string(intl25.t.MWRYqh) };
intl3 = intl25.intl;
items[2] = obj3;
const obj4 = { id: AppIconTypes.PremiumAppIconIds.BLURPLE_TWILIGHT, iconSource: AssetRegistryDefault5, isPremium: true, name: intl4.string(intl25.t.Mfoe3p) };
intl4 = intl25.intl;
items[3] = obj4;
const obj5 = { id: AppIconTypes.PremiumAppIconIds.BRAND_INVERTED, iconSource: AssetRegistryDefault6, isPremium: true, name: intl5.string(intl25.t.h6UXSt) };
intl5 = intl25.intl;
items[4] = obj5;
const obj6 = { id: AppIconTypes.PremiumAppIconIds.BRAND_DARK, iconSource: AssetRegistryDefault7, name: intl6.string(intl25.t.gZEUBl), isPremium: true };
intl6 = intl25.intl;
items[5] = obj6;
const obj7 = { id: AppIconTypes.PremiumAppIconIds.MATTE_DARK, iconSource: AssetRegistryDefault8, isPremium: true, name: intl7.string(intl25.t.NkshQt) };
intl7 = intl25.intl;
items[6] = obj7;
const obj8 = { id: AppIconTypes.PremiumAppIconIds.MATTE_LIGHT, iconSource: AssetRegistryDefault9, name: intl8.string(intl25.t.G2W302), isPremium: true };
intl8 = intl25.intl;
items[7] = obj8;
const obj9 = { id: AppIconTypes.PremiumAppIconIds.PASTEL, iconSource: AssetRegistryDefault10, isPremium: true, name: intl9.string(intl25.t.mTSkLT) };
intl9 = intl25.intl;
items[8] = obj9;
const obj10 = { id: AppIconTypes.PremiumAppIconIds.PIRATE, iconSource: AssetRegistryDefault11, isPremium: true, name: intl10.string(intl25.t["EgWTY+"]) };
intl10 = intl25.intl;
items[9] = obj10;
const obj11 = { id: AppIconTypes.PremiumAppIconIds.CAMO, iconSource: AssetRegistryDefault12, isPremium: true, name: intl11.string(intl25.t.RSKXOK) };
intl11 = intl25.intl;
items[10] = obj11;
const obj12 = { id: AppIconTypes.PremiumAppIconIds.SUNSET, iconSource: AssetRegistryDefault13, isPremium: true, name: intl12.string(intl25.t.ixdjPB) };
intl12 = intl25.intl;
items[11] = obj12;
const obj13 = { id: AppIconTypes.PremiumAppIconIds.GALAXY, iconSource: AssetRegistryDefault14, isPremium: true, name: intl13.string(intl25.t.cb78Ls) };
intl13 = intl25.intl;
items[12] = obj13;
const obj14 = { id: AppIconTypes.PremiumAppIconIds.Y2K, iconSource: AssetRegistryDefault15, isPremium: true, name: intl14.string(intl25.t["s+KoXO"]) };
intl14 = intl25.intl;
items[13] = obj14;
const obj15 = { id: AppIconTypes.PremiumAppIconIds.CHERRY_BLOSSOM, iconSource: AssetRegistryDefault16, isPremium: true, name: intl15.string(intl25.t["ta/5RB"]) };
intl15 = intl25.intl;
items[14] = obj15;
const obj16 = { id: AppIconTypes.PremiumAppIconIds.BEANIE, iconSource: AssetRegistryDefault17, isPremium: true, name: intl16.string(intl25.t.IoLViw) };
intl16 = intl25.intl;
items[15] = obj16;
const obj17 = { id: AppIconTypes.PremiumAppIconIds.GAMING, iconSource: AssetRegistryDefault18, isPremium: true, name: intl17.string(intl25.t["2Tf+c4"]) };
intl17 = intl25.intl;
items[16] = obj17;
const obj18 = { id: AppIconTypes.PremiumAppIconIds.CIRCUIT, iconSource: AssetRegistryDefault19, isPremium: true, name: intl18.string(intl25.t.dUpxKb) };
intl18 = intl25.intl;
items[17] = obj18;
const obj19 = { id: AppIconTypes.PremiumAppIconIds.HOLO_WAVES, iconSource: AssetRegistryDefault20, isPremium: true, name: intl19.string(intl25.t["9mg7g1"]) };
intl19 = intl25.intl;
items[18] = obj19;
const obj20 = { id: AppIconTypes.PremiumAppIconIds.BLUSH, iconSource: AssetRegistryDefault21, isPremium: true, name: intl20.string(intl25.t.nmd90m) };
intl20 = intl25.intl;
items[19] = obj20;
const obj21 = { id: AppIconTypes.PremiumAppIconIds.ANGRY, iconSource: AssetRegistryDefault22, isPremium: true, name: intl21.string(intl25.t["9PUXpM"]) };
intl21 = intl25.intl;
items[20] = obj21;
const obj22 = { id: AppIconTypes.PremiumAppIconIds.MANGA, iconSource: AssetRegistryDefault23, isPremium: true, name: intl22.string(intl25.t.hGBbF8) };
intl22 = intl25.intl;
items[21] = obj22;
const obj23 = { id: AppIconTypes.PremiumAppIconIds.CONTROLLER, iconSource: AssetRegistryDefault24, isPremium: true, name: intl23.string(intl25.t["4QM2U1"]) };
intl23 = intl25.intl;
items[22] = obj23;
const obj24 = { id: AppIconTypes.PremiumAppIconIds.MUSHROOM, iconSource: AssetRegistryDefault25, isPremium: true, name: intl24.string(intl25.t.gnLLSK) };
intl24 = intl25.intl;
items[23] = obj24;
const args = [];
const result = size.fileFinishedImporting("modules/app_icons/native/AppIconConstants.tsx");

export const getDefaultIcon = function getDefaultIcon() {
  let intl;
  const obj = { id: AppIconTypes.FreemiumAppIconIds.DEFAULT, iconSource: AssetRegistryDefault, name: intl.string(intl25.t.ANxkLy), isPremium: false };
  intl = intl25.intl;
  return obj;
};
export const isHexagonCampaignAppIcon = function isHexagonCampaignAppIcon(currentAppIcon) {
  return currentAppIcon === AppIconTypes.LimitedTimeAppIconIds.HEXAGON;
};
export const isIconExpired = function isIconExpired(expiresAt) {
  let tmp = null != expiresAt.expiresAt;
  if (tmp) {
    const _Date = Date;
    tmp = Date.now() > expiresAt.expiresAt;
  }
  return tmp;
};
export const getOfficialAlternateIcons = function getOfficialAlternateIcons() {
  return items.filter(f105032);
};
export { getLimitedAlternateIcons };
export const getIcons = function getIcons() {
  let intl;
  const obj = { id: AppIconTypes.FreemiumAppIconIds.DEFAULT, iconSource: AssetRegistryDefault, name: intl.string(intl25.t.ANxkLy), isPremium: false };
  intl = intl25.intl;
  items = [obj, ...items.filter(f105032), ...getLimitedAlternateIcons()];
  return items;
};
export const getIconById = function getIconById(currentAppIcon) {
  let intl;
  let intl2;
  let closure_0 = currentAppIcon;
  let tmp = require;
  const obj = { id: AppIconTypes.FreemiumAppIconIds.DEFAULT, iconSource: AssetRegistryDefault, name: intl.string(intl25.t.ANxkLy), isPremium: false };
  intl = intl25.intl;
  items = [obj, ...items.filter(f105032), ...getLimitedAlternateIcons()];
  let found = items.find((id) => id.id === closure_0);
  if (null == found) {
    const obj2 = { id: AppIconTypes.FreemiumAppIconIds.DEFAULT, iconSource: AssetRegistryDefault, name: intl2.string(intl25.t.ANxkLy), isPremium: false };
    intl2 = intl25.intl;
    found = obj2;
  }
  return found;
};
