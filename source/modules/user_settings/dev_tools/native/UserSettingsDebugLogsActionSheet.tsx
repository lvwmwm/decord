// Module ID: 14395
// Function ID: 110057
// Name: UserSettingsDebugLogsFiltersActionSheet
// Dependencies: [31, 33, 5500, 5186, 1212, 5503, 5165, 7519, 7518, 1273, 4098, 2]
// Exports: openUserSettingsDebugLogsFiltersActionSheet

// Module 14395 (UserSettingsDebugLogsFiltersActionSheet)
import "result";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
function UserSettingsDebugLogsFiltersActionSheet(arg0) {
  let onRefresh;
  let onSortOrderChanged;
  let sortOrder;
  ({ sortOrder, onSortOrderChanged, onRefresh } = arg0);
  let obj = {};
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["+B9e11"]);
  obj.header = callback(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { hasIcons: false };
  const obj1 = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.label = intl2.string(require(1212) /* getSystemLocale */.t.wzzjk9);
  obj1.onPress = onRefresh;
  obj.children = callback(require(5165) /* TableRowInner */.TableRow, obj1);
  const items = [callback(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj), , ];
  const obj2 = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj2.title = intl3.string(require(1212) /* getSystemLocale */.t.gePre2);
  obj2.defaultValue = sortOrder;
  obj2.onChange = onSortOrderChanged;
  obj2.hasIcons = false;
  const obj3 = {};
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj3.label = intl4.string(require(1212) /* getSystemLocale */.t.eoXe0r);
  obj3.value = "newest";
  const items1 = [callback(require(7518) /* TableRadioRow */.TableRadioRow, obj3), ];
  const obj4 = {};
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj4.label = intl5.string(require(1212) /* getSystemLocale */.t.mmeWUF);
  obj4.value = "oldest";
  items1[1] = callback(require(7518) /* TableRadioRow */.TableRadioRow, obj4);
  obj2.children = items1;
  items[1] = callback2(require(7519) /* context */.TableRadioGroup, obj2);
  items[2] = callback(require(1273) /* Button */.Spacer, { size: 0 });
  obj.children = items;
  return callback2(require(5500) /* ActionSheet */.ActionSheet, obj);
}
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
const result = require("ActionSheet").fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsDebugLogsActionSheet.tsx");

export const openUserSettingsDebugLogsFiltersActionSheet = function openUserSettingsDebugLogsFiltersActionSheet(arg0) {
  let obj = importDefault(4098);
  obj = { default: UserSettingsDebugLogsFiltersActionSheet };
  obj.openLazy(Promise.resolve(obj), "UserSettingsDebugLogsFiltersActionSheet", arg0);
};
