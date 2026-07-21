// Module ID: 13933
// Function ID: 105881
// Name: QuestBottomSheetTaskSelect
// Dependencies: []
// Exports: default

// Module 13933 (QuestBottomSheetTaskSelect)
importAll(dependencyMap[0]);
const QuestTaskPlatform = arg1(dependencyMap[1]).QuestTaskPlatform;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetTaskSelect.tsx");

export default function QuestBottomSheetTaskSelect(onTaskSelect) {
  const arg1 = onTaskSelect.onTaskSelect;
  let obj = { hasIcons: true };
  obj = { arrow: true, icon: callback(arg1(dependencyMap[5]).ScreenIcon, {}) };
  const intl = arg1(dependencyMap[6]).intl;
  obj.label = intl.string(arg1(dependencyMap[6]).t.QXc01+);
  obj.onPress = function onPress() {
    let tmp;
    if (null != onTaskSelect) {
      tmp = onTaskSelect(constants.DESKTOP);
    }
    return tmp;
  };
  const items = [callback(arg1(dependencyMap[4]).TableRow, obj), ];
  obj = { arrow: true, icon: callback(arg1(dependencyMap[7]).GameControllerIcon, {}) };
  const intl2 = arg1(dependencyMap[6]).intl;
  obj.label = intl2.string(arg1(dependencyMap[6]).t.8lAfuB);
  obj.onPress = function onPress() {
    let tmp;
    if (null != onTaskSelect) {
      tmp = onTaskSelect(constants.CONSOLE);
    }
    return tmp;
  };
  items[1] = callback(arg1(dependencyMap[4]).TableRow, obj);
  obj.children = items;
  return callback2(arg1(dependencyMap[3]).TableRowGroup, obj);
};
