// Module ID: 15110
// Function ID: 115082
// Name: items
// Dependencies: [31, 33, 664, 1212, 10230, 5500, 5503, 5165, 2]
// Exports: default

// Module 15110 (items)
import "result";
import jsxProd from "jsxProd";

let closure_2;
let closure_3;
const require = arg1;
({ jsx: closure_2, jsxs: closure_3 } = jsxProd);
let obj = {
  duration: 30 * require("set").Millis.MINUTE,
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.RxJGbL);
  }
};
let items = [obj, , , , , ];
obj = {
  duration: require("set").Millis.HOUR,
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.UMWBZr);
  }
};
items[1] = obj;
obj = {
  duration: 3 * require("set").Millis.HOUR,
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.QmYWtu);
  }
};
items[2] = obj;
items[3] = {
  duration: 8 * require("set").Millis.HOUR,
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.EpAXPC);
  }
};
let obj1 = {
  duration: 8 * require("set").Millis.HOUR,
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.EpAXPC);
  }
};
items[4] = {
  duration: require("set").Millis.DAY,
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["755t4q"]);
  }
};
items[5] = {
  duration: undefined,
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["46dqJY"]);
  }
};
const obj2 = {
  duration: require("set").Millis.DAY,
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["755t4q"]);
  }
};
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/FocusModeOptionsActionSheet.tsx");

export default function FocusModeOptionsActionSheet(onSelect) {
  onSelect = onSelect.onSelect;
  let obj = onSelect(10230);
  const focusModeEnabled = obj.useFocusModeEnabled();
  obj = {};
  obj = {};
  const intl = onSelect(1212).intl;
  obj.title = intl.string(onSelect(1212).t["sNX1E+"]);
  obj.hasIcons = false;
  let tmp4 = null;
  if (focusModeEnabled) {
    const obj1 = {};
    const intl2 = onSelect(1212).intl;
    obj1.accessibilityLabel = intl2.string(onSelect(1212).t.rk35Gm);
    const intl3 = onSelect(1212).intl;
    obj1.accessibilityHint = intl3.string(onSelect(1212).t.rk35Gm);
    obj1.onPress = function onPress() {
      onSelect(false, undefined);
    };
    obj1.trailing = null;
    const intl4 = onSelect(1212).intl;
    obj1.label = intl4.string(onSelect(1212).t.rk35Gm);
    tmp4 = callback(onSelect(5165).TableRow, obj1);
  }
  const items = [tmp4, ];
  items[1] = items.map((duration) => {
    duration = duration.duration;
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
    return outer1_2(onSelect(outer1_1[7]).TableRow, obj, "" + duration);
  });
  obj.children = items;
  obj.children = closure_3(onSelect(5503).TableRowGroup, obj);
  return callback(onSelect(5500).ActionSheet, obj);
};
