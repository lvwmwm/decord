// Module ID: 15378
// Function ID: 15379
// Name: UserSettingsDesignSystemSegmentedControl
// Dependencies: [32, 19, 17, 21, 4836, 576, 4832, 9083, 5279, 9084, 12113, 5281, 4541, 2]
// Exports: default

// Module 15378 (UserSettingsDesignSystemSegmentedControl)
import nativeDefault from "native" /* 576 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4541 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ jsxs: metroRequire, jsx: metroImportDefault } = Fragment);
let obj = { container: { margin: 16, flex: 1, alignItems: "center", padding: 40 }, item: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 2, borderColor: nativeDefault.colors.BORDER_STRONG, flex: 1, alignItems: "center", justifyContent: "center", height: 400 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemSegmentedControl.tsx");

export default function UserSettingsDesignSystemSegmentedControl() {
  let Stack;
  let closure_0;
  let closure_2;
  let first;
  let first1;
  let items1;
  let items2;
  let obj3;
  let obj4;
  [first, _require] = react.useState(0);
  [first1, _slicedToArray] = react.useState(3);
  let tmp5 = closure_8();
  let tmp6 = closure_8();
  let closure_1 = tmp6;
  let items = [first1, tmp6.item];
  const memo = react.useMemo(() => {
    let items1;
    let obj2;
    let obj3;
    let sum;
    const items = [];
    let num = 0;
    if (0 < first1) {
      do {
        let obj = { label: "Item " + sum, id: "item-" + sum, page: closure_2_7(closure_2_4, obj2) };
        sum = num + 1;
        let _HermesInternal = HermesInternal;
        let push = items.push;
        let _HermesInternal2 = HermesInternal;
        obj2 = { style: item.item, children: closure_2_6(first1(first1[6]).Text, obj3) };
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
  let obj2 = { children: closure_7(closure_4, obj3) };
  obj3 = {
    style: tmp5.container,
    onLayout: react.useCallback((nativeEvent) => {
      closure_0(nativeEvent.nativeEvent.layout.width);
    }, []),
    children: closure_6(Stack, obj4)
  };
  obj4 = { spacing: 24, children: items1 };
  Stack = require("Stack/Stack").Stack;
  items1 = [closure_7(require("SegmentedControl").SegmentedControl, { state: segmentedControlState }), closure_7(require("SegmentedControlPages").SegmentedControlPages, { state: segmentedControlState }), ];
  const obj5 = { spacing: 8, direction: "horizontal", children: items2 };
  const Stack2 = require("Stack/Stack").Stack;
  items2 = [, ];
  const obj6 = {
    text: "Add Tab",
    variant: "active",
    size: "sm",
    disabled: first1 >= 5,
    onPress() {
      const sum = first1 + 1;
      closure_2(sum);
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce("Tab added, " + sum + " tabs", "polite");
    }
  };
  items2[0] = closure_7(require("components/Button/Button").Button, obj6);
  const obj7 = {
    text: "Remove Tab",
    variant: "destructive",
    size: "sm",
    disabled: 2 === first1,
    onPress() {
      const diff = first1 - 1;
      closure_2(diff);
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce("Tab removed, " + diff + " tabs", "polite");
    }
  };
  items2[1] = closure_7(require("components/Button/Button").Button, obj7);
  items1[2] = closure_6(Stack2, obj5);
  return closure_7(closure_5, obj2);
};
