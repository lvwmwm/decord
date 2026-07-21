// Module ID: 11756
// Function ID: 91287
// Name: HubEmailConnectionDescriptionActionsheet
// Dependencies: []
// Exports: default

// Module 11756 (HubEmailConnectionDescriptionActionsheet)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
let closure_4 = arg1(dependencyMap[2]).createStyles({ description: { marginBottom: 8 } });
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/hub/native/components/HubEmailConnectionDescriptionActionsheet.tsx");

export default function HubEmailConnectionDescriptionActionsheet() {
  const tmp = callback3();
  let obj = {};
  obj = {};
  const intl = arg1(dependencyMap[5]).intl;
  obj.title = intl.string(arg1(dependencyMap[5]).t.48kg+O);
  const items = [callback(arg1(dependencyMap[4]).BottomSheetTitleHeader, obj), , ];
  obj = { style: tmp.description };
  const intl2 = arg1(dependencyMap[5]).intl;
  obj.children = intl2.string(arg1(dependencyMap[5]).t.O1k9XX);
  items[1] = callback(arg1(dependencyMap[6]).Text, obj);
  const obj1 = { style: tmp.description };
  const intl3 = arg1(dependencyMap[5]).intl;
  obj1.children = intl3.string(arg1(dependencyMap[5]).t.FV5dvh);
  items[2] = callback(arg1(dependencyMap[6]).Text, obj1);
  obj.children = items;
  return callback2(arg1(dependencyMap[3]).BottomSheet, obj);
};
