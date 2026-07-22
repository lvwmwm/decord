// Module ID: 12332
// Function ID: 94435
// Name: PremiumGroupEducationActionSheet
// Dependencies: []
// Exports: default

// Module 12332 (PremiumGroupEducationActionSheet)
const View = require(dependencyMap[0]).View;
const HELP_CENTER_LINK = require(dependencyMap[1]).HELP_CENTER_LINK;
const _module = require(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = _module);
const _module1 = require(dependencyMap[3]);
let obj = { container: { "Null": "<string:343015425>", "Null": "<string:335544320>" } };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_SUBTLE, borderRadius: importDefault(dependencyMap[4]).radii.lg };
obj.aboutContainer = obj;
obj.warningIcon = { margin: 16 };
obj.aboutTextContainer = { 0: "max", 9223372036854775807: "media", 0: "message" };
obj.helpdeskText = { memo: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001282895982263, accessibilityRole: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005495969098605 };
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
