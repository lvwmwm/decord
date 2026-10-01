// Module ID: 15380
// Function ID: 15381
// Name: UserSettingsDesignSystemTabs
// Dependencies: [32, 19, 17, 21, 4836, 576, 4832, 4531, 4683, 9083, 5279, 12111, 12275, 12113, 5281, 6621, 2]
// Exports: default

// Module 15380 (UserSettingsDesignSystemTabs)
import nativeDefault from "native" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsxs: metroImportDefault, jsx: metroImportAll } = Fragment);
let obj = { container: { margin: 16, flex: 1, alignItems: "center" }, item: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 2, borderColor: nativeDefault.colors.BORDER_STRONG, flex: 1, alignItems: "center", justifyContent: "center", height: 400 };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTabs.tsx");

export default function UserSettingsDesignSystemTabs() {
  let Stack;
  let closure_0;
  let closure_2;
  let first;
  let first1;
  let first2;
  let first3;
  let items3;
  let items4;
  let items5;
  let obj7;
  let tmp10;
  let tmp13;
  let tmp7;
  let tmp9;
  [first, _require] = react.useState(0);
  [first1, dependencyMap] = react.useState(3);
  [first2, tmp7] = react.useState(true);
  let tmp8 = _slicedToArray(react.useState(false), 2);
  [tmp9, tmp10] = tmp8;
  [first3, tmp13] = react.useState(false);
  let closure_1 = tmp9;
  const tmp14 = closure_9();
  const tmp15 = closure_9();
  dependencyMap = tmp15;
  let items = [first1, tmp15.item, tmp9];
  const memo = react.useMemo(() => {
    let items1;
    let obj2;
    let obj3;
    let rounded;
    let sum;
    const items = [];
    let num = 0;
    if (0 < first1) {
      do {
        let obj = { label: "Item " + sum, count: rounded, id: "item-" + sum, page: closure_2_8(closure_2_5, obj2) };
        sum = num + 1;
        let _HermesInternal = HermesInternal;
        let push = items.push;
        rounded = undefined;
        if (closure_1) {
          let _Math = Math;
          let _Math2 = Math;
          rounded = Math.floor(100 * Math.random());
        }
        let _HermesInternal2 = HermesInternal;
        obj2 = { style: item.item, children: closure_2_7(first1(item[6]).Text, obj3) };
        obj3 = { variant: "heading-xxl/bold", children: items1 };
        items1 = ["Item ", sum];
        let arr = push(obj);
        num = sum;
      } while (sum < first1);
    }
    return items;
  }, items);
  let obj = require("SegmentedControlState");
  const segmentedControlState = obj.useSegmentedControlState({ items: memo, pageWidth: first, defaultIndex: 1 });
  const callback = react.useCallback((nativeEvent) => {
    closure_0(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj2 = require("useToken");
  const token = obj2.useToken(first1(576).colors.BACKGROUND_BASE_LOW);
  let items1 = [token, ];
  let obj3 = require("ColorUtils");
  items1[1] = obj3.hexWithOpacity(token, 0);
  const obj4 = { style: tmp14.container, onLayout: callback, children: closure_7(Stack, obj7) };
  Stack = require("Stack/Stack").Stack;
  const items2 = [closure_8(require("Tabs").Tabs, { state: segmentedControlState, grow: first2 }), ];
  let tmp23Result = first3;
  const tmp21 = first1;
  const tmp24 = closure_6;
  if (tmp23Result) {
    const obj5 = { state: segmentedControlState, colors: items1 };
    tmp23Result = tmp23(tmp21(12275), obj5);
  }
  obj7 = { spacing: 24, children: items3 };
  items2[1] = tmp23Result;
  const obj6 = { children: closure_8(closure_5, obj4) };
  items3 = [closure_7(closure_5, { children: items2 }), closure_8(require("SegmentedControlPages").SegmentedControlPages, { state: segmentedControlState }), , ];
  const obj8 = { spacing: 8, direction: "horizontal", children: items4 };
  const Stack2 = tmp17(5279).Stack;
  items4 = [, ];
  const obj9 = {
    text: "Add Tab",
    variant: "active",
    size: "sm",
    disabled: first1 >= 10,
    onPress() {
      return closure_2(first1 + 1);
    }
  };
  items4[0] = closure_8(require("components/Button/Button").Button, obj9);
  const obj10 = {
    text: "Remove Tab",
    variant: "destructive",
    size: "sm",
    disabled: 2 === first1,
    onPress() {
      return closure_2(first1 - 1);
    }
  };
  items4[1] = closure_8(require("components/Button/Button").Button, obj10);
  items3[2] = closure_7(Stack2, obj8);
  const obj11 = { children: items5 };
  items5 = [closure_8(require("TableSwitchRow").TableSwitchRow, { start: true, label: "Enable Grow", value: first2, onValueChange: tmp7 }), closure_8(require("TableSwitchRow").TableSwitchRow, { label: "Enable Counts", value: tmp9, onValueChange: tmp10 }), closure_8(require("TableSwitchRow").TableSwitchRow, { end: true, label: "Enable Overflow Gradient", value: first3, onValueChange: tmp13 })];
  items3[3] = closure_7(closure_5, obj11);
  return closure_8(tmp24, obj6);
};
