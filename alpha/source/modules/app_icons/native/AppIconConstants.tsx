// Module ID: 10406
// Function ID: 10407
// Name: AppIconConstants
// Dependencies: [4817, 4818, 10407, 1113, 10408, 10409, 10410, 10411, 10412, 10413, 10414, 10415, 10416, 10417, 10418, 10419, 10420, 10421, 10422, 10423, 10424, 10425, 10426, 10427, 10428, 10429, 10430, 10431, 4822, 10432, 4820, 4476, 2]
// Exports: getDefaultIcon, getIconById, getIcons, getOfficialAlternateIcons, isIconExpired

// Module 10406 (AppIconConstants)
import intl25 from "intl" /* 1113 */;
import _modDef4476 from "module_4476" /* 4476 */;
import AppIconTypes from "AppIconTypes" /* 4818 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 4820 */;
import HexagonCampaignPerkAvailability from "HexagonCampaignPerkAvailability" /* 4822 */;
import AssetRegistryDefault from "AssetRegistry" /* 10407 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10408 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10409 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10410 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 10411 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 10412 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 10413 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 10414 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 10415 */;
import AssetRegistryDefault10 from "AssetRegistry" /* 10416 */;
import AssetRegistryDefault11 from "AssetRegistry" /* 10417 */;
import AssetRegistryDefault12 from "AssetRegistry" /* 10418 */;
import AssetRegistryDefault13 from "AssetRegistry" /* 10419 */;
import AssetRegistryDefault14 from "AssetRegistry" /* 10420 */;
import AssetRegistryDefault15 from "AssetRegistry" /* 10421 */;
import AssetRegistryDefault16 from "AssetRegistry" /* 10422 */;
import AssetRegistryDefault17 from "AssetRegistry" /* 10423 */;
import AssetRegistryDefault18 from "AssetRegistry" /* 10424 */;
import AssetRegistryDefault19 from "AssetRegistry" /* 10425 */;
import AssetRegistryDefault20 from "AssetRegistry" /* 10426 */;
import AssetRegistryDefault21 from "AssetRegistry" /* 10427 */;
import AssetRegistryDefault22 from "AssetRegistry" /* 10428 */;
import AssetRegistryDefault23 from "AssetRegistry" /* 10429 */;
import AssetRegistryDefault24 from "AssetRegistry" /* 10430 */;
import AssetRegistryDefault25 from "AssetRegistry" /* 10431 */;
import AssetRegistryDefault26 from "AssetRegistry" /* 10432 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4817 */;
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
const f99174 = (expiresAt) => {
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
    const obj2 = { id: AppIconTypes.LimitedTimeAppIconIds.HEXAGON, iconSource: AssetRegistryDefault26, isPremium: tmp3Result.isHexagonCampaignPerkPremiumOnly(tmp5.APP_ICON), expiresAt, name: intl.string(_modDef4476.JC4Pii) };
    tmp3Result = HexagonCampaignUtils;
    intl = tmp3(1113).intl;
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

export function getDefaultIcon() {
  let intl;
  const obj = { id: AppIconTypes.FreemiumAppIconIds.DEFAULT, iconSource: AssetRegistryDefault, name: intl.string(intl25.t.ANxkLy), isPremium: false };
  intl = intl25.intl;
  return obj;
}
export function isIconExpired(expiresAt) {
  let tmp = null != expiresAt.expiresAt;
  if (tmp) {
    const _Date = Date;
    tmp = Date.now() > expiresAt.expiresAt;
  }
  return tmp;
}
export function getOfficialAlternateIcons() {
  return items.filter(f99174);
}
export { getLimitedAlternateIcons };
export function getIcons() {
  let intl;
  const obj = { id: AppIconTypes.FreemiumAppIconIds.DEFAULT, iconSource: AssetRegistryDefault, name: intl.string(intl25.t.ANxkLy), isPremium: false };
  intl = intl25.intl;
  items = [obj, ...items.filter(f99174), ...getLimitedAlternateIcons()];
  return items;
}
export function getIconById(currentAppIcon) {
  let intl;
  let intl2;
  let closure_0 = currentAppIcon;
  let tmp = require;
  const obj = { id: AppIconTypes.FreemiumAppIconIds.DEFAULT, iconSource: AssetRegistryDefault, name: intl.string(intl25.t.ANxkLy), isPremium: false };
  intl = intl25.intl;
  items = [obj, ...items.filter(f99174), ...getLimitedAlternateIcons()];
  let found = items.find((id) => id.id === closure_0);
  if (null == found) {
    const obj2 = { id: AppIconTypes.FreemiumAppIconIds.DEFAULT, iconSource: AssetRegistryDefault, name: intl2.string(intl25.t.ANxkLy), isPremium: false };
    intl2 = intl25.intl;
    found = obj2;
  }
  return found;
}
