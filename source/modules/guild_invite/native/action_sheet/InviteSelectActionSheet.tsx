// Module ID: 16377
// Function ID: 126373
// Name: InviteSelectActionSheet
// Dependencies: []
// Exports: default

// Module 16377 (InviteSelectActionSheet)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[3]).space.PX_16, paddingBottom: importDefault(dependencyMap[3]).space.PX_16 };
obj.content = obj;
let closure_4 = obj.createStyles(obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild_invite/native/action_sheet/InviteSelectActionSheet.tsx");

export default function InviteSelectActionSheet(arg0) {
  let options;
  let title;
  let value;
  ({ options, onChange: closure_0 } = arg0);
  ({ title, value } = arg0);
  let obj = { contentStyles: callback().content, header: jsx(arg1(dependencyMap[5]).BottomSheetTitleHeader, { title }) };
  obj = {
    value,
    onChange(arg0) {
      callback(arg0);
      callback2(closure_2[7]).hideActionSheet();
    },
    hasIcons: false,
    children: options.map((value) => callback3(callback(closure_2[8]).TableRadioRow, { value: value.value, label: value.label, accessibilityHint: value.descriptiveLabel }, "" + value.value))
  };
  obj.children = jsx(arg1(dependencyMap[6]).TableRadioGroup, obj);
  return jsx(arg1(dependencyMap[4]).BottomSheet, obj);
};
