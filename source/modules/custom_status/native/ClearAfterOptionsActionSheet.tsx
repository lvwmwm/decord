// Module ID: 11897
// Function ID: 92101
// Name: ClearAfterOptionsActionSheet
// Dependencies: []
// Exports: default

// Module 11897 (ClearAfterOptionsActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const ClearAfterOptions = arg1(dependencyMap[3]).ClearAfterOptions;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
obj.content = obj;
const tmp2 = arg1(dependencyMap[4]);
obj.buttonWrapper = { marginTop: importDefault(dependencyMap[6]).space.PX_24, paddingBottom: importDefault(dependencyMap[6]).space.PX_16 };
let closure_9 = obj.createStyles(obj);
const obj1 = { marginTop: importDefault(dependencyMap[6]).space.PX_24, paddingBottom: importDefault(dependencyMap[6]).space.PX_16 };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/custom_status/native/ClearAfterOptionsActionSheet.tsx");

export default function ClearAfterOptionsActionSheet(arg0) {
  let initialValue;
  ({ initialValue, onChange: closure_0 } = arg0);
  const tmp = callback4();
  const tmp2 = callback(React.useState(initialValue), 2);
  let closure_1 = tmp2[0];
  let obj = { contentStyles: tmp.content };
  obj = {};
  const intl = arg1(dependencyMap[9]).intl;
  obj.title = intl.string(arg1(dependencyMap[9]).t.5XnRQ+);
  obj.header = callback2(arg1(dependencyMap[8]).BottomSheetTitleHeader, obj);
  obj = { onChange: tmp2[1] };
  const intl2 = arg1(dependencyMap[9]).intl;
  obj.title = intl2.string(arg1(dependencyMap[9]).t.E45wvP);
  obj.defaultValue = initialValue;
  obj.hasIcons = false;
  obj.children = ClearAfterOptions.map((value) => {
    const obj = { value, label: callback2(closure_2[12])(value) };
    return callback3(callback(closure_2[11]).TableRadioRow, obj, value);
  });
  const items = [callback2(arg1(dependencyMap[10]).TableRadioGroup, obj), ];
  const obj1 = { style: tmp.buttonWrapper };
  const obj2 = {
    onPress() {
      callback(callback2);
      callback2(closure_2[14]).hideActionSheet();
    }
  };
  const intl3 = arg1(dependencyMap[9]).intl;
  obj2.text = intl3.string(arg1(dependencyMap[9]).t.TyCVIq);
  obj1.children = callback2(arg1(dependencyMap[13]).Button, obj2);
  items[1] = callback2(View, obj1);
  obj.children = items;
  return callback3(arg1(dependencyMap[7]).BottomSheet, obj);
};
