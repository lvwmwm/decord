// Module ID: 9906
// Function ID: 76638
// Name: ForLaterModal
// Dependencies: []
// Exports: default

// Module 9906 (ForLaterModal)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWER };
obj.modal = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.headerContainer = { paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16, paddingTop: importDefault(dependencyMap[4]).space.PX_8 };
let closure_6 = obj.createStyles(obj);
const obj1 = { paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16, paddingTop: importDefault(dependencyMap[4]).space.PX_8 };
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/saved_messages/native/ForLaterModal.tsx");

export default function ForLaterModal() {
  const tmp = callback2();
  let obj = { style: tmp.modal };
  obj = { style: tmp.headerContainer };
  obj = {};
  const intl = arg1(dependencyMap[6]).intl;
  obj.title = intl.string(arg1(dependencyMap[6]).t.2pAkDA);
  obj.headerTitle = function headerTitle() {
    const obj = {};
    const intl = callback(closure_2[6]).intl;
    obj.title = intl.string(callback(closure_2[6]).t.2pAkDA);
    return callback2(callback(closure_2[7]).GenericHeaderTitle, obj);
  };
  obj.headerTitleAlign = "center";
  let num;
  if (obj4.isIOS()) {
    num = 0;
  }
  obj.headerStatusBarHeight = num;
  const obj4 = arg1(dependencyMap[8]);
  const tmp2 = closure_5;
  obj.headerLeft = arg1(dependencyMap[9]).getHeaderCloseButton(importDefault(dependencyMap[10]).pop);
  obj.children = callback(arg1(dependencyMap[5]).Header, obj);
  const items = [callback(View, obj), ];
  const obj1 = {};
  const obj5 = arg1(dependencyMap[9]);
  obj1.onClose = importDefault(dependencyMap[10]).pop;
  items[1] = callback(importDefault(dependencyMap[11]), obj1);
  obj.children = items;
  return tmp2(View, obj);
};
