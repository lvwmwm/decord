// Module ID: 13661
// Function ID: 103477
// Name: FamilyCenterActivityPage
// Dependencies: []
// Exports: default

// Module 13661 (FamilyCenterActivityPage)
importAll(dependencyMap[0]);
({ View: closure_3, ScrollView: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { scrollView: { flex: 1 } };
obj = { marginTop: importDefault(dependencyMap[4]).space.PX_8 };
obj.dataConfirmation = obj;
const tmp4 = arg1(dependencyMap[2]);
obj.container = { paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16, paddingBottom: importDefault(dependencyMap[4]).space.PX_16 };
let closure_8 = obj.createStyles(obj);
const obj1 = { paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16, paddingBottom: importDefault(dependencyMap[4]).space.PX_16 };
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityPage.tsx");

export default function FamilyCenterActivityPage() {
  const tmp = callback3();
  let obj = arg1(dependencyMap[5]);
  obj = { style: tmp.scrollView };
  const activeLinkUserIds = obj.useActiveLinkUserIds();
  obj = { bottom: true };
  const obj1 = { style: tmp.container };
  const items = [callback(importDefault(dependencyMap[7]), {}), ];
  if (0 === activeLinkUserIds.length) {
    const obj2 = {};
    const items1 = [callback(importDefault(dependencyMap[8]), {}), callback(importDefault(dependencyMap[9]), {}), ];
    const obj3 = { style: tmp.dataConfirmation, children: callback(importDefault(dependencyMap[10]), {}) };
    items1[2] = callback(closure_3, obj3);
    obj2.children = items1;
    let tmp9 = callback2(closure_6, obj2);
  } else {
    tmp9 = callback(importDefault(dependencyMap[11]), {});
  }
  items[1] = tmp9;
  obj1.children = items;
  obj.children = callback2(closure_3, obj1);
  obj.children = callback(arg1(dependencyMap[6]).SafeAreaPaddingView, obj);
  return callback(closure_4, obj);
};
