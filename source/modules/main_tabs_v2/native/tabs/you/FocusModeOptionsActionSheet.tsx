// Module ID: 14986
// Function ID: 112871
// Name: items
// Dependencies: []
// Exports: default

// Module 14986 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let obj = {
  duration: 30 * importDefault(dependencyMap[2]).Millis.MINUTE,
  label() {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.RxJGbL);
  }
};
const items = [obj, , , , , ];
obj = {
  duration: importDefault(dependencyMap[2]).Millis.HOUR,
  label() {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.UMWBZr);
  }
};
items[1] = obj;
obj = {
  duration: 3 * importDefault(dependencyMap[2]).Millis.HOUR,
  label() {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.QmYWtu);
  }
};
items[2] = obj;
const tmp3 = arg1(dependencyMap[1]);
items[3] = {
  duration: 8 * importDefault(dependencyMap[2]).Millis.HOUR,
  label() {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.EpAXPC);
  }
};
const obj1 = {
  duration: 8 * importDefault(dependencyMap[2]).Millis.HOUR,
  label() {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.EpAXPC);
  }
};
items[4] = {
  duration: importDefault(dependencyMap[2]).Millis.DAY,
  label() {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.755t4q);
  }
};
items[5] = {
  duration: undefined,
  label() {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.46dqJY);
  }
};
const obj2 = {
  duration: importDefault(dependencyMap[2]).Millis.DAY,
  label() {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.755t4q);
  }
};
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/FocusModeOptionsActionSheet.tsx");

export default function FocusModeOptionsActionSheet(onSelect) {
  const arg1 = onSelect.onSelect;
  let obj = arg1(dependencyMap[4]);
  const focusModeEnabled = obj.useFocusModeEnabled();
  obj = {};
  obj = {};
  const intl = arg1(dependencyMap[3]).intl;
  obj.title = intl.string(arg1(dependencyMap[3]).t.sNX1E+);
  obj.hasIcons = false;
  let tmp4 = null;
  if (focusModeEnabled) {
    const obj1 = {};
    const intl2 = arg1(dependencyMap[3]).intl;
    obj1.accessibilityLabel = intl2.string(arg1(dependencyMap[3]).t.rk35Gm);
    const intl3 = arg1(dependencyMap[3]).intl;
    obj1.accessibilityHint = intl3.string(arg1(dependencyMap[3]).t.rk35Gm);
    obj1.onPress = function onPress() {
      onSelect(false, undefined);
    };
    obj1.trailing = null;
    const intl4 = arg1(dependencyMap[3]).intl;
    obj1.label = intl4.string(arg1(dependencyMap[3]).t.rk35Gm);
    tmp4 = callback(arg1(dependencyMap[7]).TableRow, obj1);
  }
  const items = [tmp4, ];
  items[1] = items.map((duration) => {
    duration = duration.duration;
    const onSelect = duration;
    const label = duration.label;
    const obj = {
      accessibilityLabel: label(),
      accessibilityHint: label(),
      onPress() {
        duration(true, duration);
      },
      trailing: null,
      label: label()
    };
    return callback(onSelect(closure_1[7]).TableRow, obj, "" + duration);
  });
  obj.children = items;
  obj.children = closure_3(arg1(dependencyMap[6]).TableRowGroup, obj);
  return callback(arg1(dependencyMap[5]).ActionSheet, obj);
};
