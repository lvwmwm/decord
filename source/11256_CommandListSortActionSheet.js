// Module ID: 11256
// Function ID: 87560
// Name: CommandListSortActionSheet
// Dependencies: []
// Exports: default

// Module 11256 (CommandListSortActionSheet)
importAll(dependencyMap[0]);
const CommandListSortOrder = arg1(dependencyMap[1]).CommandListSortOrder;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/sort/CommandListSortActionSheet.tsx");

export default function CommandListSortActionSheet(sortOrder) {
  ({ onClose: closure_0, onSortOptionPress: closure_1 } = sortOrder);
  let obj = { startExpanded: true };
  obj = {};
  obj = { size: "sm", color: importDefault(dependencyMap[7]).colors.TEXT_DEFAULT };
  obj.leading = jsx(arg1(dependencyMap[6]).ArrowsUpDownIcon, obj);
  const intl = arg1(dependencyMap[3]).intl;
  obj.title = intl.string(arg1(dependencyMap[3]).t.yeYaHf);
  obj.header = jsx(arg1(dependencyMap[5]).BottomSheetTitleHeader, obj);
  const obj1 = {
    hasIcons: false,
    value: sortOrder.sortOrder,
    onChange(arg0) {
      callback2(arg0);
      callback();
    }
  };
  const obj2 = {};
  const intl2 = arg1(dependencyMap[3]).intl;
  obj2.label = intl2.string(arg1(dependencyMap[3]).t.SzxiqK);
  obj2.value = CommandListSortOrder.POPULAR;
  const items = [obj2, ];
  const obj3 = {};
  const intl3 = arg1(dependencyMap[3]).intl;
  obj3.label = intl3.string(arg1(dependencyMap[3]).t.m8xsti);
  obj3.value = CommandListSortOrder.ALPHABETICAL;
  items[1] = obj3;
  obj1.children = items.map((label) => {
    const value = label.value;
    return callback3(callback(closure_2[9]).TableRadioRow, { label: label.label, value }, value);
  });
  obj.children = jsx(arg1(dependencyMap[8]).TableRadioGroup, obj1);
  return jsx(arg1(dependencyMap[4]).BottomSheet, obj);
};
