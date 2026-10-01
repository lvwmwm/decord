// Module ID: 16016
// Function ID: 16017
// Name: FocusModeOptionsActionSheet
// Dependencies: [19, 21, 1091, 1115, 9550, 6618, 5999, 5917, 2]
// Exports: default

// Module 16016 (FocusModeOptionsActionSheet)
import DurationsDefault from "Durations" /* 1091 */;
import intl5 from "intl" /* 1115 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let duration;

let c2;
let c3;
function label() {
  const intl = intl5.intl;
  return intl.string(intl5.t["755t4q"]);
}
({ jsx: c2, jsxs: c3 } = Fragment);
let obj = {
  duration: 30 * DurationsDefault.Millis.MINUTE,
  label() {
    const intl = intl5.intl;
    return intl.string(intl5.t.RxJGbL);
  }
};
let items = [obj, , , , , ];
let obj2 = {
  duration: DurationsDefault.Millis.HOUR,
  label() {
    const intl = intl5.intl;
    return intl.string(intl5.t.UMWBZr);
  }
};
items[1] = obj2;
let obj3 = {
  duration: 3 * DurationsDefault.Millis.HOUR,
  label() {
    const intl = intl5.intl;
    return intl.string(intl5.t.QmYWtu);
  }
};
items[2] = obj3;
let obj4 = {
  duration: 8 * DurationsDefault.Millis.HOUR,
  label() {
    const intl = intl5.intl;
    return intl.string(intl5.t.EpAXPC);
  }
};
items[3] = obj4;
items[4] = { duration: DurationsDefault.Millis.DAY, label };
const obj6 = {
  duration: "Array",
  label() {
    const intl = intl5.intl;
    return intl.string(intl5.t["46dqJY"]);
  }
};
items[5] = obj6;
({ duration: DurationsDefault.Millis.DAY, label });
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/FocusModeOptionsActionSheet.tsx");

export default function FocusModeOptionsActionSheet(onSelect) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  onSelect = onSelect.onSelect;
  let obj = onSelect(9550);
  const focusModeEnabled = obj.useFocusModeEnabled();
  const ActionSheet = onSelect(6618).ActionSheet;
  const obj2 = { title: intl.string(onSelect(1115).t["sNX1E+"]), hasIcons: false, children: items };
  const TableRowGroup = onSelect(5999).TableRowGroup;
  intl = onSelect(1115).intl;
  let tmp4Result = null;
  const tmp5 = closure_3;
  if (focusModeEnabled) {
    const obj3 = {
      accessibilityLabel: intl2.string(onSelect(1115).t.rk35Gm),
      accessibilityHint: intl3.string(onSelect(1115).t.rk35Gm),
      onPress() {
          onSelect(false, undefined);
        },
      trailing: null,
      label: intl4.string(onSelect(1115).t.rk35Gm)
    };
    let TableRow = tmp(5917).TableRow;
    intl2 = tmp(1115).intl;
    intl3 = tmp(1115).intl;
    intl4 = tmp(1115).intl;
    tmp4Result = tmp4(TableRow, obj3);
  }
  items = [tmp4Result, ];
  const obj4 = { children: tmp5(TableRowGroup, obj2) };
  items[1] = items.map((duration) => {
    duration = duration.duration;
    const label = duration.label;
    const obj = {
      accessibilityLabel: label(),
      accessibilityHint: label(),
      onPress() {
        onSelect(true, duration);
      },
      trailing: null,
      label: label()
    };
    const TableRow = onSelect(dependencyMap[7]).TableRow;
    return closure_1_2(TableRow, obj, "" + duration);
  });
  return closure_2(ActionSheet, obj4);
};
