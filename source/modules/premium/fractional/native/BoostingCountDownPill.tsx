// Module ID: 12328
// Function ID: 94397
// Name: handlePress
// Dependencies: []
// Exports: default

// Module 12328 (handlePress)
function handlePress() {
  let obj = importDefault(dependencyMap[4]);
  obj = {};
  const intl = require(dependencyMap[7]).intl;
  obj.aboutText = intl.string(require(dependencyMap[7]).t.07lzz7);
  obj.openLazy(require(dependencyMap[6])(dependencyMap[5], dependencyMap.paths), "NitroCreditEducationActionSheet", obj);
}
const _module = require(dependencyMap[0]);
({ TouchableOpacity: closure_3, View: closure_4 } = _module);
const _module1 = require(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = _module1);
const _module2 = require(dependencyMap[2]);
let obj = {};
obj = { 1834026050: -14, -659493785: -14, -1437152157: 0.75, -319042460: -4, 1649697712: 16, 72458410: 0.75, 1006330628: 14, -680106838: -14, 1196532421: 0.875, backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_SURFACE_HIGH, borderColor: importDefault(dependencyMap[3]).colors.STATUS_WARNING, borderRadius: importDefault(dependencyMap[3]).radii.lg };
obj.fractionalPremiumBanner = obj;
const obj1 = { "Bool(false)": "sticker", "Bool(false)": "png", "Bool(false)": true, "Bool(false)": "/assets/images/native/premium/guild_boosting/perks", "Bool(false)": 24, "Bool(false)": 24, backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_MOD_STRONG, borderRadius: importDefault(dependencyMap[3]).radii.xxl };
obj.fpDurationPill = obj1;
obj.fpDurationText = { 1377929130: true, -1532433124: true };
obj.fpUnavailable = { markAsSpoilerTitle: null, keyboardAppearance: null };
obj.fpUnavailableTextNoCountdown = { textAlign: "center" };
let closure_7 = _module2.createStyles(obj);
const _module3 = require(dependencyMap[9]);
const result = _module3.fileFinishedImporting("modules/premium/fractional/native/BoostingCountDownPill.tsx");

export default function BoostingCountDownPill(style) {
  let fpDurationText;
  let isInReverseTrial;
  ({ fpDurationText, isInReverseTrial } = style);
  const tmp = callback2();
  let obj = { activeOpacity: 0.7 };
  let tmp4;
  if (!isInReverseTrial) {
    tmp4 = handlePress;
  }
  obj.onPress = tmp4;
  obj = { style: items };
  const items = [tmp.fractionalPremiumBanner, style.style];
  let tmp7 = !isInReverseTrial;
  if (tmp7) {
    obj = { style: tmp.fpDurationPill };
    const obj1 = { variant: "text-sm/bold", style: tmp.fpDurationText, children: fpDurationText.toUpperCase() };
    obj.children = callback(require(dependencyMap[8]).Text, obj1);
    tmp7 = callback(closure_4, obj);
  }
  const items1 = [tmp7, ];
  const obj2 = { style: tmp.fpUnavailable };
  const obj3 = {};
  let prop;
  if (isInReverseTrial) {
    prop = tmp.fpUnavailableTextNoCountdown;
  }
  obj3.style = prop;
  const intl = require(dependencyMap[7]).intl;
  obj3.children = intl.string(require(dependencyMap[7]).t.5nrJDO);
  obj2.children = callback(require(dependencyMap[8]).Text, obj3);
  items1[1] = callback(closure_4, obj2);
  obj.children = items1;
  obj.children = closure_6(closure_4, obj);
  return callback(closure_3, obj);
};
