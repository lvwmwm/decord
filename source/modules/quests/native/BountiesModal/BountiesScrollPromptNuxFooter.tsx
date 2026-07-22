// Module ID: 13830
// Function ID: 104573
// Name: BountiesScrollPromptFooter
// Dependencies: []
// Exports: default

// Module 13830 (BountiesScrollPromptFooter)
const View = require(dependencyMap[0]).View;
const _module = require(dependencyMap[1]);
({ jsx: closure_3, jsxs: closure_4 } = _module);
const _module1 = require(dependencyMap[2]);
let closure_5 = _module1.createStyles(() => ({ root: {}, titleText: { textAlign: "center" }, swipeText: {} }));
const _module2 = require(dependencyMap[5]);
const result = _module2.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollPromptNuxFooter.tsx");

export default function BountiesScrollPromptFooter() {
  const tmp = callback3();
  let obj = { style: tmp.root };
  obj = { cachedAt: null, edpbxy: "Array", style: tmp.titleText };
  const intl = require(dependencyMap[4]).intl;
  obj.children = intl.string(require(dependencyMap[4]).t.H57f41);
  const items = [callback(require(dependencyMap[3]).Text, obj), ];
  obj = { cachedAt: false, edpbxy: false, style: tmp.swipeText };
  const intl2 = require(dependencyMap[4]).intl;
  obj.children = intl2.string(require(dependencyMap[4]).t.tG0zsk);
  items[1] = callback(require(dependencyMap[3]).Text, obj);
  obj.children = items;
  return callback2(View, obj);
};
