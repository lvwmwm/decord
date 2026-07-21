// Module ID: 12326
// Function ID: 94392
// Name: handlePress
// Dependencies: []
// Exports: default

// Module 12326 (handlePress)
function handlePress() {
  let obj = importDefault(dependencyMap[5]);
  obj = {};
  const intl = require(dependencyMap[8]).intl;
  obj = { premiumGroupProductName: callback() };
  obj.aboutText = intl.formatToPlainString(importDefault(dependencyMap[9]).5xN/C1, obj);
  obj.openLazy(require(dependencyMap[7])(dependencyMap[6], dependencyMap.paths), "PremiumGroupEducationActionSheet", obj);
}
const _module = require(dependencyMap[0]);
({ TouchableOpacity: closure_3, View: closure_4 } = _module);
let closure_5 = require(dependencyMap[1]).getPremiumGroupProductName;
const jsx = require(dependencyMap[2]).jsx;
const _module1 = require(dependencyMap[3]);
let obj = {};
obj = { 1834026050: -14, -659493785: -14, -1437152157: 0.75, -319042460: -4, 1649697712: 16, 72458410: 0.75, 1006330628: 14, -680106838: -14, 1196532421: 0.875, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH, borderColor: importDefault(dependencyMap[4]).colors.STATUS_WARNING, borderRadius: importDefault(dependencyMap[4]).radii.lg };
obj.premiumGroupBanner = obj;
obj.pgUnavailable = { markAsSpoilerTitle: null, keyboardAppearance: null };
obj.pgUnavailableText = { textAlign: "center" };
let closure_7 = _module1.createStyles(obj);
const _module2 = require(dependencyMap[11]);
const result = _module2.fileFinishedImporting("modules/premium/premium_group/native/BoostingUnavailablePill.tsx");

export default function BoostingUnavailablePill(style) {
  const tmp = callback2();
  let obj = { activeOpacity: 0.7, onPress: handlePress };
  obj = { style: items };
  const items = [tmp.premiumGroupBanner, style.style];
  obj = { style: tmp.pgUnavailable };
  const obj1 = { style: tmp.pgUnavailableText };
  const intl = require(dependencyMap[8]).intl;
  obj1.children = intl.string(require(dependencyMap[8]).t.5nrJDO);
  obj.children = jsx(require(dependencyMap[10]).Text, obj1);
  obj.children = <closure_4 {...obj} />;
  obj.children = <closure_4 {...obj} />;
  return <closure_3 {...obj} />;
};
