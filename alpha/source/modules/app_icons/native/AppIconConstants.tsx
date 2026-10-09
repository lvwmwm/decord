// Module ID: 9439
// Function ID: 9440
// Name: AppIconConstants
// Dependencies: [9440, 9441, 1126, 9442, 9443, 9444, 9445, 9446, 9447, 9448, 9449, 9450, 9451, 9452, 9453, 9454, 9455, 9456, 9457, 9458, 9459, 9460, 9461, 9462, 9463, 9464, 9465, 2]
// Exports: getDefaultIcon, getIconById, getIcons, getLimitedAlternateIcons, getOfficialAlternateIcons, isIconExpired

// Module 9439 (AppIconConstants)
import intl25 from "intl" /* 1126 */;
import AppIconTypes from "AppIconTypes" /* 9440 */;
import AssetRegistryDefault from "AssetRegistry" /* 9441 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9442 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 9443 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 9444 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 9445 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 9446 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 9447 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 9448 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 9449 */;
import AssetRegistryDefault10 from "AssetRegistry" /* 9450 */;
import AssetRegistryDefault11 from "AssetRegistry" /* 9451 */;
import AssetRegistryDefault12 from "AssetRegistry" /* 9452 */;
import AssetRegistryDefault13 from "AssetRegistry" /* 9453 */;
import AssetRegistryDefault14 from "AssetRegistry" /* 9454 */;
import AssetRegistryDefault15 from "AssetRegistry" /* 9455 */;
import AssetRegistryDefault16 from "AssetRegistry" /* 9456 */;
import AssetRegistryDefault17 from "AssetRegistry" /* 9457 */;
import AssetRegistryDefault18 from "AssetRegistry" /* 9458 */;
import AssetRegistryDefault19 from "AssetRegistry" /* 9459 */;
import AssetRegistryDefault20 from "AssetRegistry" /* 9460 */;
import AssetRegistryDefault21 from "AssetRegistry" /* 9461 */;
import AssetRegistryDefault22 from "AssetRegistry" /* 9462 */;
import AssetRegistryDefault23 from "AssetRegistry" /* 9463 */;
import AssetRegistryDefault24 from "AssetRegistry" /* 9464 */;
import AssetRegistryDefault25 from "AssetRegistry" /* 9465 */;
import size from "module_2" /* 2 */;

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
const f101270 = (expiresAt) => {
  let tmp = null != expiresAt.expiresAt;
  if (tmp) {
    const _Date = Date;
    tmp = Date.now() > expiresAt.expiresAt;
  }
  return !tmp;
};
const f101271 = (expiresAt) => {
  let tmp = null != expiresAt.expiresAt;
  if (tmp) {
    const _Date = Date;
    tmp = Date.now() > expiresAt.expiresAt;
  }
  return !tmp;
};
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
let closure_4 = [];
const result = size.fileFinishedImporting("modules/app_icons/native/AppIconConstants.tsx");

export const getDefaultIcon = function getDefaultIcon() {
  let intl;
  const obj = { id: AppIconTypes.FreemiumAppIconIds.DEFAULT, iconSource: AssetRegistryDefault, name: intl.string(intl25.t.ANxkLy), isPremium: false };
  intl = intl25.intl;
  return obj;
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
  return items.filter(f101270);
};
export const getLimitedAlternateIcons = function getLimitedAlternateIcons() {
  return closure_4.filter(f101271);
};
export const getIcons = function getIcons() {
  let intl;
  const obj = { id: AppIconTypes.FreemiumAppIconIds.DEFAULT, iconSource: AssetRegistryDefault, name: intl.string(intl25.t.ANxkLy), isPremium: false };
  intl = intl25.intl;
  items = [obj, ...items.filter(f101270), ...closure_4.filter(f101271)];
  return items;
};
export const getIconById = function getIconById(currentAppIcon) {
  let intl;
  let intl2;
  let closure_0 = currentAppIcon;
  let tmp = require;
  const obj = { id: AppIconTypes.FreemiumAppIconIds.DEFAULT, iconSource: AssetRegistryDefault, name: intl.string(intl25.t.ANxkLy), isPremium: false };
  intl = intl25.intl;
  items = [obj, ...items.filter(f101270), ...closure_4.filter(f101271)];
  let found = items.find((id) => id.id === closure_0);
  if (null == found) {
    const obj2 = { id: AppIconTypes.FreemiumAppIconIds.DEFAULT, iconSource: AssetRegistryDefault, name: intl2.string(intl25.t.ANxkLy), isPremium: false };
    intl2 = intl25.intl;
    found = obj2;
  }
  return found;
};
