// Module ID: 18066
// Function ID: 18067
// Name: UserSettingsDesignSystemTabs
// Dependencies: [32, 19, 17, 21, 5143, 575, 5763, 5734, 5140, 9141, 9131, 6165, 12379, 14597, 14424, 5770, 7507, 2]
// Exports: default

// Module 18066 (UserSettingsDesignSystemTabs)
import nativeDefault from "native" /* 575 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 9141 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

let importDefault;

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
  let closure_1;
  let first;
  let first1;
  let first2;
  let items3;
  let items4;
  let items5;
  let obj7;
  let onLayout;
  let ref;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp8;
  let tmp2 = dependencyMap;
  const tmp3 = useMeasuredLayoutDefault();
  const width = tmp3.width;
  let num = 0;
  ({ ref, onLayout } = tmp3);
  if (undefined !== width) {
    num = width;
  }
  [first, importDefault] = react.useState(3);
  [first1, tmp8] = react.useState(true);
  let tmp9 = _slicedToArray(react.useState(false), 2);
  [tmp10, tmp11] = tmp9;
  [first2, tmp14] = react.useState(false);
  importDefault = tmp10;
  const tmp15 = closure_9();
  const tmp16 = closure_9();
  let closure_2 = tmp16;
  let items = [first, tmp16.item, tmp10];
  const memo = react.useMemo(() => {
    let items1;
    let obj2;
    let obj3;
    let rounded;
    let sum;
    const items = [];
    let num = 0;
    if (0 < first) {
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
        obj2 = { style: item.item, children: closure_2_7(first(dependencyMap[6]).Text, obj3) };
        obj3 = { variant: "heading-xxl/semibold", children: items1 };
        items1 = ["Item ", sum];
        let arr = push(obj);
        num = sum;
      } while (sum < first);
    }
    return items;
  }, items);
  let obj = first(9131);
  const segmentedControlState = obj.useSegmentedControlState({ items: memo, pageWidth: num, defaultIndex: 1 });
  let obj2 = first(5734);
  const token = obj2.useToken(tmp(575).colors.BACKGROUND_BASE_LOW);
  let items1 = [token, ];
  let obj3 = first(5140);
  items1[1] = obj3.hexWithOpacity(token, 0);
  const obj4 = { style: tmp15.container, ref, onLayout, children: closure_7(Stack, obj7) };
  Stack = first(6165).Stack;
  const items2 = [closure_8(first(12379).Tabs, { state: segmentedControlState, grow: first1 }), ];
  let tmp21Result = first2;
  const tmp22 = closure_6;
  if (tmp21Result) {
    const obj5 = { state: segmentedControlState, colors: items1 };
    tmp21Result = tmp21(tmp(14597), obj5);
  }
  obj7 = { spacing: 24, children: items3 };
  items2[1] = tmp21Result;
  const obj6 = { children: closure_8(closure_5, obj4) };
  items3 = [closure_7(closure_5, { children: items2 }), closure_8(first(14424).SegmentedControlPages, { state: segmentedControlState }), , ];
  const obj8 = { spacing: 8, direction: "horizontal", children: items4 };
  const Stack2 = tmp18(6165).Stack;
  items4 = [, ];
  const obj9 = {
    text: "Add Tab",
    variant: "active",
    size: "sm",
    disabled: first >= 10,
    onPress() {
      return closure_1(first + 1);
    }
  };
  items4[0] = closure_8(first(5770).Button, obj9);
  const obj10 = {
    text: "Remove Tab",
    variant: "destructive",
    size: "sm",
    disabled: 2 === first,
    onPress() {
      return closure_1(first - 1);
    }
  };
  items4[1] = closure_8(first(5770).Button, obj10);
  items3[2] = closure_7(Stack2, obj8);
  const obj11 = { children: items5 };
  items5 = [closure_8(first(7507).TableSwitchRow, { start: true, label: "Enable Grow", value: first1, onValueChange: tmp8 }), closure_8(first(7507).TableSwitchRow, { label: "Enable Counts", value: tmp10, onValueChange: tmp11 }), closure_8(first(7507).TableSwitchRow, { end: true, label: "Enable Overflow Gradient", value: first2, onValueChange: tmp14 })];
  items3[3] = closure_7(closure_5, obj11);
  return closure_8(tmp22, obj6);
};
