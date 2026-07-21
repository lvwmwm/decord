// Module ID: 12329
// Function ID: 94412
// Name: NitroCreditEducationActionSheet
// Dependencies: []
// Exports: default

// Module 12329 (NitroCreditEducationActionSheet)
const View = require(dependencyMap[0]).View;
const HelpdeskArticles = require(dependencyMap[1]).HelpdeskArticles;
const _module = require(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = _module);
const _module1 = require(dependencyMap[3]);
let obj = { container: {} };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_SUBTLE, borderRadius: importDefault(dependencyMap[4]).radii.lg };
obj.aboutContainer = obj;
obj.warningIcon = { margin: 16 };
obj.aboutTextContainer = {};
obj.helpdeskText = { value: 24, marginTop: "recent_games_enabled" };
let closure_7 = _module1.createStyles(obj);
const _module2 = require(dependencyMap[11]);
const result = _module2.fileFinishedImporting("modules/premium/fractional/native/NitroCreditEducationActionSheet.tsx");

export default function NitroCreditEducationActionSheet(children) {
  const tmp = callback3();
  let obj = {};
  obj = { style: tmp.container };
  obj = { style: tmp.aboutContainer };
  const items = [callback(require(dependencyMap[6]).CircleErrorIcon, { size: "lg", style: tmp.warningIcon }), callback(View, { style: tmp.aboutTextContainer, children: callback(require(dependencyMap[7]).Text, { children: children.aboutText }) })];
  obj.children = items;
  const items1 = [callback2(View, obj), ];
  const obj3 = { style: tmp.helpdeskText };
  const intl = require(dependencyMap[9]).intl;
  const obj4 = {};
  const obj1 = { size: "lg", style: tmp.warningIcon };
  const obj2 = { style: tmp.aboutTextContainer, children: callback(require(dependencyMap[7]).Text, { children: children.aboutText }) };
  obj4.helpCenterLink = importDefault(dependencyMap[10]).getArticleURL(HelpdeskArticles.FRACTIONAL_PREMIUM_ABOUT);
  obj3.children = intl.format(require(dependencyMap[9]).t.bg3jBj, obj4);
  items1[1] = callback(require(dependencyMap[8]).TextWithIOSLinkWorkaround, obj3);
  obj.children = items1;
  obj.children = callback2(View, obj);
  return callback(require(dependencyMap[5]).BottomSheet, obj);
};
