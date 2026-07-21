// Module ID: 14270
// Function ID: 107829
// Name: UserSettingsDebugLogsFiltersActionSheet
// Dependencies: []
// Exports: openUserSettingsDebugLogsFiltersActionSheet

// Module 14270 (UserSettingsDebugLogsFiltersActionSheet)
function UserSettingsDebugLogsFiltersActionSheet(arg0) {
  let onRefresh;
  let onSortOrderChanged;
  let sortOrder;
  ({ sortOrder, onSortOrderChanged, onRefresh } = arg0);
  let obj = {};
  obj = {};
  const intl = arg1(dependencyMap[4]).intl;
  obj.title = intl.string(arg1(dependencyMap[4]).t.+B9e11);
  obj.header = callback(arg1(dependencyMap[3]).BottomSheetTitleHeader, obj);
  obj = { hasIcons: false };
  const obj1 = {};
  const intl2 = arg1(dependencyMap[4]).intl;
  obj1.label = intl2.string(arg1(dependencyMap[4]).t.wzzjk9);
  obj1.onPress = onRefresh;
  obj.children = callback(arg1(dependencyMap[6]).TableRow, obj1);
  const items = [callback(arg1(dependencyMap[5]).TableRowGroup, obj), , ];
  const obj2 = {};
  const intl3 = arg1(dependencyMap[4]).intl;
  obj2.title = intl3.string(arg1(dependencyMap[4]).t.gePre2);
  obj2.defaultValue = sortOrder;
  obj2.onChange = onSortOrderChanged;
  obj2.hasIcons = false;
  const obj3 = {};
  const intl4 = arg1(dependencyMap[4]).intl;
  obj3.label = intl4.string(arg1(dependencyMap[4]).t.eoXe0r);
  obj3.value = "newest";
  const items1 = [callback(arg1(dependencyMap[8]).TableRadioRow, obj3), ];
  const obj4 = {};
  const intl5 = arg1(dependencyMap[4]).intl;
  obj4.label = intl5.string(arg1(dependencyMap[4]).t.mmeWUF);
  obj4.value = "oldest";
  items1[1] = callback(arg1(dependencyMap[8]).TableRadioRow, obj4);
  obj2.children = items1;
  items[1] = callback2(arg1(dependencyMap[7]).TableRadioGroup, obj2);
  items[2] = callback(arg1(dependencyMap[9]).Spacer, { size: 0 });
  obj.children = items;
  return callback2(arg1(dependencyMap[2]).ActionSheet, obj);
}
importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsDebugLogsActionSheet.tsx");

export const openUserSettingsDebugLogsFiltersActionSheet = function openUserSettingsDebugLogsFiltersActionSheet(arg0) {
  let obj = importDefault(dependencyMap[10]);
  obj = { default: UserSettingsDebugLogsFiltersActionSheet };
  obj.openLazy(Promise.resolve(obj), "UserSettingsDebugLogsFiltersActionSheet", arg0);
};
