// Module ID: 18426
// Function ID: 18427
// Name: UserSettingsDesignSystemSegmentedControl
// Dependencies: [32, 19, 17, 21, 5306, 575, 5929, 7994, 7983, 6337, 11251, 14944, 5936, 5315, 2]
// Exports: default

// Module 18426 (UserSettingsDesignSystemSegmentedControl)
import nativeDefault from "native" /* 575 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5315 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 7994 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let importDefault;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsxs: metroImportDefault, jsx: metroImportAll } = Fragment);
let obj = { container: { margin: 16, flex: 1, alignItems: "center", padding: 40 }, item: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 2, borderColor: nativeDefault.colors.BORDER_STRONG, flex: 1, alignItems: "center", justifyContent: "center", height: 400 };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemSegmentedControl.tsx");

export default function UserSettingsDesignSystemSegmentedControl() {
  let Stack;
  let closure_1;
  let first;
  let items1;
  let items2;
  let obj3;
  let obj4;
  let onLayout;
  let ref;
  let tmp2 = useMeasuredLayoutDefault();
  const width = tmp2.width;
  let num = 0;
  ({ ref, onLayout } = tmp2);
  if (undefined !== width) {
    num = width;
  }
  [first, importDefault] = react.useState(3);
  let tmp5 = closure_9();
  let tmp6 = closure_9();
  importDefault = tmp6;
  let items = [first, tmp6.item];
  const memo = react.useMemo(() => {
    let items1;
    let obj2;
    let obj3;
    let sum;
    const items = [];
    let num = 0;
    if (0 < first) {
      do {
        let obj = { label: "Item " + sum, id: "item-" + sum, page: closure_2_8(closure_2_5, obj2) };
        sum = num + 1;
        let _HermesInternal = HermesInternal;
        let push = items.push;
        let _HermesInternal2 = HermesInternal;
        obj2 = { style: item.item, children: closure_2_7(first(dependencyMap[6]).Text, obj3) };
        obj3 = { variant: "heading-xxl/semibold", children: items1 };
        items1 = ["Item ", sum];
        let arr = push(obj);
        num = sum;
      } while (sum < first);
    }
    return items;
  }, items);
  let obj = first(7983);
  const segmentedControlState = obj.useSegmentedControlState({ items: memo, pageWidth: num, defaultIndex: 1 });
  let obj2 = { children: closure_8(closure_5, obj3) };
  obj3 = { style: tmp5.container, ref, onLayout, children: closure_7(Stack, obj4) };
  obj4 = { spacing: 24, children: items1 };
  Stack = first(6337).Stack;
  items1 = [closure_8(first(11251).SegmentedControl, { state: segmentedControlState }), closure_8(first(14944).SegmentedControlPages, { state: segmentedControlState }), ];
  const obj5 = { spacing: 8, direction: "horizontal", children: items2 };
  const Stack2 = first(6337).Stack;
  items2 = [, ];
  const obj6 = {
    text: "Add Tab",
    variant: "active",
    size: "sm",
    disabled: first >= 5,
    onPress() {
      const sum = first + 1;
      closure_1(sum);
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce("Tab added, " + sum + " tabs", "polite");
    }
  };
  items2[0] = closure_8(first(5936).Button, obj6);
  const obj7 = {
    text: "Remove Tab",
    variant: "destructive",
    size: "sm",
    disabled: 2 === first,
    onPress() {
      const diff = first - 1;
      closure_1(diff);
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce("Tab removed, " + diff + " tabs", "polite");
    }
  };
  items2[1] = closure_8(first(5936).Button, obj7);
  items1[2] = closure_7(Stack2, obj5);
  return closure_8(closure_6, obj2);
};
