// Module ID: 7955
// Function ID: 63474
// Name: getDefaultIcon
// Dependencies: []
// Exports: getIconById

// Module 7955 (getDefaultIcon)
function getDefaultIcon() {
  const obj = { id: require(dependencyMap[0]).FreemiumAppIconIds.DEFAULT, iconSource: importDefault(dependencyMap[1]) };
  const intl = require(dependencyMap[2]).intl;
  obj.name = intl.string(require(dependencyMap[2]).t.ANxkLy);
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
  return items.filter((arg0) => !callback(arg0));
}
function getLimitedAlternateIcons() {
  return closure_4.filter((arg0) => !callback(arg0));
}
function getIcons() {
  const items = [getDefaultIcon(), ...closure_7(), ...closure_8()];
  return items;
}
let obj = { id: require(dependencyMap[0]).PremiumAppIconIds.IN_RAINBOWS, iconSource: importDefault(dependencyMap[3]), isPremium: true };
const intl = require(dependencyMap[2]).intl;
obj.name = intl.string(require(dependencyMap[2]).t.yxJB9E);
const items = [obj, , , , , , , , , , , , , , , , , , , , , , , ];
obj = { id: require(dependencyMap[0]).PremiumAppIconIds.MIDNIGHT_PRISM, iconSource: importDefault(dependencyMap[4]), isPremium: true };
const intl2 = require(dependencyMap[2]).intl;
obj.name = intl2.string(require(dependencyMap[2]).t.nshUZZ);
items[1] = obj;
obj = { id: require(dependencyMap[0]).PremiumAppIconIds.COLOR_WAVE, iconSource: importDefault(dependencyMap[5]), isPremium: true };
const intl3 = require(dependencyMap[2]).intl;
obj.name = intl3.string(require(dependencyMap[2]).t.MWRYqh);
items[2] = obj;
const obj1 = { id: require(dependencyMap[0]).PremiumAppIconIds.BLURPLE_TWILIGHT, iconSource: importDefault(dependencyMap[6]), isPremium: true };
const intl4 = require(dependencyMap[2]).intl;
obj1.name = intl4.string(require(dependencyMap[2]).t.Mfoe3p);
items[3] = obj1;
const obj2 = { id: require(dependencyMap[0]).PremiumAppIconIds.BRAND_INVERTED, iconSource: importDefault(dependencyMap[7]), isPremium: true };
const intl5 = require(dependencyMap[2]).intl;
obj2.name = intl5.string(require(dependencyMap[2]).t.h6UXSt);
items[4] = obj2;
const obj3 = { id: require(dependencyMap[0]).PremiumAppIconIds.BRAND_DARK, iconSource: importDefault(dependencyMap[8]) };
const intl6 = require(dependencyMap[2]).intl;
obj3.name = intl6.string(require(dependencyMap[2]).t.gZEUBl);
obj3.isPremium = true;
items[5] = obj3;
const obj4 = { id: require(dependencyMap[0]).PremiumAppIconIds.MATTE_DARK, iconSource: importDefault(dependencyMap[9]), isPremium: true };
const intl7 = require(dependencyMap[2]).intl;
obj4.name = intl7.string(require(dependencyMap[2]).t.NkshQt);
items[6] = obj4;
const obj5 = { id: require(dependencyMap[0]).PremiumAppIconIds.MATTE_LIGHT, iconSource: importDefault(dependencyMap[10]) };
const intl8 = require(dependencyMap[2]).intl;
obj5.name = intl8.string(require(dependencyMap[2]).t.G2W302);
obj5.isPremium = true;
items[7] = obj5;
const obj6 = { id: require(dependencyMap[0]).PremiumAppIconIds.PASTEL, iconSource: importDefault(dependencyMap[11]), isPremium: true };
const intl9 = require(dependencyMap[2]).intl;
obj6.name = intl9.string(require(dependencyMap[2]).t.mTSkLT);
items[8] = obj6;
const obj7 = { id: require(dependencyMap[0]).PremiumAppIconIds.PIRATE, iconSource: importDefault(dependencyMap[12]), isPremium: true };
const intl10 = require(dependencyMap[2]).intl;
obj7.name = intl10.string(require(dependencyMap[2]).t.EgWTY+);
items[9] = obj7;
const obj8 = { id: require(dependencyMap[0]).PremiumAppIconIds.CAMO, iconSource: importDefault(dependencyMap[13]), isPremium: true };
const intl11 = require(dependencyMap[2]).intl;
obj8.name = intl11.string(require(dependencyMap[2]).t.RSKXOK);
items[10] = obj8;
const obj9 = { id: require(dependencyMap[0]).PremiumAppIconIds.SUNSET, iconSource: importDefault(dependencyMap[14]), isPremium: true };
const intl12 = require(dependencyMap[2]).intl;
obj9.name = intl12.string(require(dependencyMap[2]).t.ixdjPB);
items[11] = obj9;
const obj10 = { id: require(dependencyMap[0]).PremiumAppIconIds.GALAXY, iconSource: importDefault(dependencyMap[15]), isPremium: true };
const intl13 = require(dependencyMap[2]).intl;
obj10.name = intl13.string(require(dependencyMap[2]).t.cb78Ls);
items[12] = obj10;
const obj11 = { id: require(dependencyMap[0]).PremiumAppIconIds.Y2K, iconSource: importDefault(dependencyMap[16]), isPremium: true };
const intl14 = require(dependencyMap[2]).intl;
obj11.name = intl14.string(require(dependencyMap[2]).t.s+KoXO);
items[13] = obj11;
const obj12 = { id: require(dependencyMap[0]).PremiumAppIconIds.CHERRY_BLOSSOM, iconSource: importDefault(dependencyMap[17]), isPremium: true };
const intl15 = require(dependencyMap[2]).intl;
obj12.name = intl15.string(require(dependencyMap[2]).t.ta/5RB);
items[14] = obj12;
const obj13 = { id: require(dependencyMap[0]).PremiumAppIconIds.BEANIE, iconSource: importDefault(dependencyMap[18]), isPremium: true };
const intl16 = require(dependencyMap[2]).intl;
obj13.name = intl16.string(require(dependencyMap[2]).t.IoLViw);
items[15] = obj13;
const obj14 = { id: require(dependencyMap[0]).PremiumAppIconIds.GAMING, iconSource: importDefault(dependencyMap[19]), isPremium: true };
const intl17 = require(dependencyMap[2]).intl;
obj14.name = intl17.string(require(dependencyMap[2]).t.2Tf+c4);
items[16] = obj14;
const obj15 = { id: require(dependencyMap[0]).PremiumAppIconIds.CIRCUIT, iconSource: importDefault(dependencyMap[20]), isPremium: true };
const intl18 = require(dependencyMap[2]).intl;
obj15.name = intl18.string(require(dependencyMap[2]).t.dUpxKb);
items[17] = obj15;
const obj16 = { id: require(dependencyMap[0]).PremiumAppIconIds.HOLO_WAVES, iconSource: importDefault(dependencyMap[21]), isPremium: true };
const intl19 = require(dependencyMap[2]).intl;
obj16.name = intl19.string(require(dependencyMap[2]).t.9mg7g1);
items[18] = obj16;
const obj17 = { id: require(dependencyMap[0]).PremiumAppIconIds.BLUSH, iconSource: importDefault(dependencyMap[22]), isPremium: true };
const intl20 = require(dependencyMap[2]).intl;
obj17.name = intl20.string(require(dependencyMap[2]).t.nmd90m);
items[19] = obj17;
const obj18 = { id: require(dependencyMap[0]).PremiumAppIconIds.ANGRY, iconSource: importDefault(dependencyMap[23]), isPremium: true };
const intl21 = require(dependencyMap[2]).intl;
obj18.name = intl21.string(require(dependencyMap[2]).t.9PUXpM);
items[20] = obj18;
const obj19 = { id: require(dependencyMap[0]).PremiumAppIconIds.MANGA, iconSource: importDefault(dependencyMap[24]), isPremium: true };
const intl22 = require(dependencyMap[2]).intl;
obj19.name = intl22.string(require(dependencyMap[2]).t.hGBbF8);
items[21] = obj19;
const obj20 = { id: require(dependencyMap[0]).PremiumAppIconIds.CONTROLLER, iconSource: importDefault(dependencyMap[25]), isPremium: true };
const intl23 = require(dependencyMap[2]).intl;
obj20.name = intl23.string(require(dependencyMap[2]).t.4QM2U1);
items[22] = obj20;
const obj21 = { id: require(dependencyMap[0]).PremiumAppIconIds.MUSHROOM, iconSource: importDefault(dependencyMap[26]), isPremium: true };
const intl24 = require(dependencyMap[2]).intl;
obj21.name = intl24.string(require(dependencyMap[2]).t.gnLLSK);
items[23] = obj21;
let closure_4 = [];
const _module = require(dependencyMap[27]);
const result = _module.fileFinishedImporting("modules/app_icons/native/AppIconConstants.tsx");

export { getDefaultIcon };
export { isIconExpired };
export { getOfficialAlternateIcons };
export { getLimitedAlternateIcons };
export { getIcons };
export const getIconById = function getIconById(currentAppIcon) {
  const require = currentAppIcon;
  let found = getIcons().find((id) => id.id === id);
  if (null == found) {
    found = getDefaultIcon();
  }
  return found;
};
