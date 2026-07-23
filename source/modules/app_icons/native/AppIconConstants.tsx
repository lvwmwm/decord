// Module ID: 7961
// Function ID: 63521
// Name: getDefaultIcon
// Dependencies: [7962, 7963, 1212, 7964, 7965, 7966, 7967, 7968, 7969, 7970, 7971, 7972, 7973, 7974, 7975, 7976, 7977, 7978, 7979, 7980, 7981, 7982, 7983, 7984, 7985, 7986, 7987, 2]
// Exports: getIconById

// Module 7961 (getDefaultIcon)
import { intl } from "getSystemLocale";
import { intl as intl2 } from "getSystemLocale";
import { intl as intl3 } from "getSystemLocale";
import { intl as intl4 } from "getSystemLocale";
import { intl as intl5 } from "getSystemLocale";
import { intl as intl6 } from "getSystemLocale";
import { intl as intl7 } from "getSystemLocale";
import { intl as intl8 } from "getSystemLocale";
import { intl as intl9 } from "getSystemLocale";
import { intl as intl10 } from "getSystemLocale";
import { intl as intl11 } from "getSystemLocale";
import { intl as intl12 } from "getSystemLocale";
import { intl as intl13 } from "getSystemLocale";
import { intl as intl14 } from "getSystemLocale";
import { intl as intl15 } from "getSystemLocale";
import { intl as intl16 } from "getSystemLocale";
import { intl as intl17 } from "getSystemLocale";
import { intl as intl18 } from "getSystemLocale";
import { intl as intl19 } from "getSystemLocale";
import { intl as intl20 } from "getSystemLocale";
import { intl as intl21 } from "getSystemLocale";
import { intl as intl22 } from "getSystemLocale";
import { intl as intl23 } from "getSystemLocale";
import { intl as intl24 } from "getSystemLocale";

function getDefaultIcon() {
  const obj = { id: require(7962) /* FreemiumAppIconIds */.FreemiumAppIconIds.DEFAULT, iconSource: importDefault(7963) };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.name = intl.string(require(1212) /* getSystemLocale */.t.ANxkLy);
  obj.isPremium = false;
  return obj;
}
function isIconExpired(expiresAt) {
  let tmp = null != expiresAt.expiresAt;
  if (tmp) {
    const _Date = Date;
    tmp = Date.now() > expiresAt.expiresAt;
  }
  return tmp;
}
function getOfficialAlternateIcons() {
  return items.filter((arg0) => !outer1_6(arg0));
}
function getLimitedAlternateIcons() {
  return closure_4.filter((arg0) => !outer1_6(arg0));
}
function getIcons() {
  const items = [getDefaultIcon(), ...getOfficialAlternateIcons(), ...getLimitedAlternateIcons()];
  return items;
}
let obj = { id: require("FreemiumAppIconIds").PremiumAppIconIds.IN_RAINBOWS, iconSource: require("registerAsset"), isPremium: true };
obj.name = intl.string(require("getSystemLocale").t.yxJB9E);
let items = [obj, , , , , , , , , , , , , , , , , , , , , , , ];
obj = { id: require("FreemiumAppIconIds").PremiumAppIconIds.MIDNIGHT_PRISM, iconSource: require("registerAsset"), isPremium: true };
obj.name = intl2.string(require("getSystemLocale").t.nshUZZ);
items[1] = obj;
obj = { id: require("FreemiumAppIconIds").PremiumAppIconIds.COLOR_WAVE, iconSource: require("registerAsset"), isPremium: true };
obj.name = intl3.string(require("getSystemLocale").t.MWRYqh);
items[2] = obj;
const obj1 = { id: require("FreemiumAppIconIds").PremiumAppIconIds.BLURPLE_TWILIGHT, iconSource: require("registerAsset"), isPremium: true };
obj1.name = intl4.string(require("getSystemLocale").t.Mfoe3p);
items[3] = obj1;
const obj2 = { id: require("FreemiumAppIconIds").PremiumAppIconIds.BRAND_INVERTED, iconSource: require("registerAsset"), isPremium: true };
obj2.name = intl5.string(require("getSystemLocale").t.h6UXSt);
items[4] = obj2;
const obj3 = { id: require("FreemiumAppIconIds").PremiumAppIconIds.BRAND_DARK, iconSource: require("registerAsset") };
obj3.name = intl6.string(require("getSystemLocale").t.gZEUBl);
obj3.isPremium = true;
items[5] = obj3;
const obj4 = { id: require("FreemiumAppIconIds").PremiumAppIconIds.MATTE_DARK, iconSource: require("registerAsset"), isPremium: true };
obj4.name = intl7.string(require("getSystemLocale").t.NkshQt);
items[6] = obj4;
const obj5 = { id: require("FreemiumAppIconIds").PremiumAppIconIds.MATTE_LIGHT, iconSource: require("registerAsset") };
obj5.name = intl8.string(require("getSystemLocale").t.G2W302);
obj5.isPremium = true;
items[7] = obj5;
const obj6 = { id: require("FreemiumAppIconIds").PremiumAppIconIds.PASTEL, iconSource: require("registerAsset"), isPremium: true };
obj6.name = intl9.string(require("getSystemLocale").t.mTSkLT);
items[8] = obj6;
const obj7 = { id: require("FreemiumAppIconIds").PremiumAppIconIds.PIRATE, iconSource: require("registerAsset"), isPremium: true };
obj7.name = intl10.string(require("getSystemLocale").t["EgWTY+"]);
items[9] = obj7;
const obj8 = { id: require("FreemiumAppIconIds").PremiumAppIconIds.CAMO, iconSource: require("registerAsset"), isPremium: true };
obj8.name = intl11.string(require("getSystemLocale").t.RSKXOK);
items[10] = obj8;
const obj9 = { id: require("FreemiumAppIconIds").PremiumAppIconIds.SUNSET, iconSource: require("registerAsset"), isPremium: true };
obj9.name = intl12.string(require("getSystemLocale").t.ixdjPB);
items[11] = obj9;
const obj10 = { id: require("FreemiumAppIconIds").PremiumAppIconIds.GALAXY, iconSource: require("registerAsset"), isPremium: true };
obj10.name = intl13.string(require("getSystemLocale").t.cb78Ls);
items[12] = obj10;
const obj11 = { id: require("FreemiumAppIconIds").PremiumAppIconIds.Y2K, iconSource: require("registerAsset"), isPremium: true };
obj11.name = intl14.string(require("getSystemLocale").t["s+KoXO"]);
items[13] = obj11;
const obj12 = { id: require("FreemiumAppIconIds").PremiumAppIconIds.CHERRY_BLOSSOM, iconSource: require("registerAsset"), isPremium: true };
obj12.name = intl15.string(require("getSystemLocale").t["ta/5RB"]);
items[14] = obj12;
const obj13 = { id: require("FreemiumAppIconIds").PremiumAppIconIds.BEANIE, iconSource: require("registerAsset"), isPremium: true };
obj13.name = intl16.string(require("getSystemLocale").t.IoLViw);
items[15] = obj13;
const obj14 = { id: require("FreemiumAppIconIds").PremiumAppIconIds.GAMING, iconSource: require("registerAsset"), isPremium: true };
obj14.name = intl17.string(require("getSystemLocale").t["2Tf+c4"]);
items[16] = obj14;
const obj15 = { id: require("FreemiumAppIconIds").PremiumAppIconIds.CIRCUIT, iconSource: require("registerAsset"), isPremium: true };
obj15.name = intl18.string(require("getSystemLocale").t.dUpxKb);
items[17] = obj15;
const obj16 = { id: require("FreemiumAppIconIds").PremiumAppIconIds.HOLO_WAVES, iconSource: require("registerAsset"), isPremium: true };
obj16.name = intl19.string(require("getSystemLocale").t["9mg7g1"]);
items[18] = obj16;
const obj17 = { id: require("FreemiumAppIconIds").PremiumAppIconIds.BLUSH, iconSource: require("registerAsset"), isPremium: true };
obj17.name = intl20.string(require("getSystemLocale").t.nmd90m);
items[19] = obj17;
const obj18 = { id: require("FreemiumAppIconIds").PremiumAppIconIds.ANGRY, iconSource: require("registerAsset"), isPremium: true };
obj18.name = intl21.string(require("getSystemLocale").t["9PUXpM"]);
items[20] = obj18;
const obj19 = { id: require("FreemiumAppIconIds").PremiumAppIconIds.MANGA, iconSource: require("registerAsset"), isPremium: true };
obj19.name = intl22.string(require("getSystemLocale").t.hGBbF8);
items[21] = obj19;
const obj20 = { id: require("FreemiumAppIconIds").PremiumAppIconIds.CONTROLLER, iconSource: require("registerAsset"), isPremium: true };
obj20.name = intl23.string(require("getSystemLocale").t["4QM2U1"]);
items[22] = obj20;
const obj21 = { id: require("FreemiumAppIconIds").PremiumAppIconIds.MUSHROOM, iconSource: require("registerAsset"), isPremium: true };
obj21.name = intl24.string(require("getSystemLocale").t.gnLLSK);
items[23] = obj21;
let closure_4 = [];
const result = require("getSystemLocale").fileFinishedImporting("modules/app_icons/native/AppIconConstants.tsx");

export { getDefaultIcon };
export { isIconExpired };
export { getOfficialAlternateIcons };
export { getLimitedAlternateIcons };
export { getIcons };
export const getIconById = function getIconById(currentAppIcon) {
  let closure_0 = currentAppIcon;
  let found = getIcons().find((id) => id.id === closure_0);
  if (null == found) {
    found = getDefaultIcon();
  }
  return found;
};
