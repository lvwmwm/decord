// Module ID: 12327
// Function ID: 94407
// Name: PremiumGroupEducationActionSheet
// Dependencies: []
// Exports: default

// Module 12327 (PremiumGroupEducationActionSheet)
const View = require(dependencyMap[0]).View;
const HELP_CENTER_LINK = require(dependencyMap[1]).HELP_CENTER_LINK;
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
const result = _module2.fileFinishedImporting("modules/premium/premium_group/native/PremiumGroupEducationActionSheet.tsx");

export default function PremiumGroupEducationActionSheet(children) {
  const tmp = callback3();
  let obj = {};
  obj = { style: tmp.container };
  obj = { style: tmp.aboutContainer };
  const items = [callback(require(dependencyMap[6]).CircleErrorIcon, { size: "lg", style: tmp.warningIcon }), callback(View, { style: tmp.aboutTextContainer, children: callback(require(dependencyMap[7]).Text, { children: children.aboutText }) })];
  obj.children = items;
  const items1 = [callback2(View, obj), ];
  const obj3 = { style: tmp.helpdeskText };
  const intl = require(dependencyMap[9]).intl;
  obj3.children = intl.format(importDefault(dependencyMap[10]).ah1Ecm, { helpCenterLink: HELP_CENTER_LINK });
  items1[1] = callback(require(dependencyMap[8]).TextWithIOSLinkWorkaround, obj3);
  obj.children = items1;
  obj.children = callback2(View, obj);
  return callback(require(dependencyMap[5]).BottomSheet, obj);
};
