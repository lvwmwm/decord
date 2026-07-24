// Module ID: 14491
// Function ID: 110673
// Name: UserSettingsDesignSystemTabs
// Dependencies: [57, 31, 27, 33, 4130, 689, 4126, 3834, 3974, 8404, 4541, 11676, 11821, 8797, 4543, 5502, 2]
// Exports: default

// Module 14491 (UserSettingsDesignSystemTabs)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsxs: closure_7, jsx: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { margin: 16, flex: 1, alignItems: "center" } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderWidth: 2, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG, flex: 1, alignItems: "center", justifyContent: "center", height: 400 };
_createForOfIteratorHelperLoose.item = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTabs.tsx");

export default function UserSettingsDesignSystemTabs() {
  let tmp7;
  let tmp8;
  let tmp = callback(React.useState(0), 2);
  const _require = tmp[1];
  const tmp2 = callback(React.useState(3), 2);
  const first = tmp2[0];
  const dependencyMap = tmp2[1];
  let tmp4 = callback(React.useState(true), 2);
  const first1 = tmp4[0];
  [tmp7, tmp8] = callback(React.useState(false), 2);
  const tmp9 = callback(React.useState(false), 2);
  const first2 = tmp9[0];
  let tmp6 = callback(React.useState(false), 2);
  const tmp11 = _createForOfIteratorHelperLoose();
  let obj = _require(8404);
  const segmentedControlState = obj.useSegmentedControlState({
    items: (function useTabItems(first, arg1) {
      let closure_0 = first;
      let closure_1 = arg1;
      let tmp = outer1_9();
      let closure_2 = tmp;
      let items = [first, tmp.item, arg1];
      return outer1_4.useMemo(() => {
        const items = [];
        let num = 0;
        if (0 < callback) {
          do {
            let obj = {};
            let _HermesInternal = HermesInternal;
            obj.label = "Item " + num + 1;
            let tmp = closure_1;
            let rounded;
            if (closure_1) {
              let _Math = Math;
              let _Math2 = Math;
              rounded = Math.floor(100 * Math.random());
            }
            obj.count = rounded;
            let _HermesInternal2 = HermesInternal;
            obj.id = "item-" + num + 1;
            let tmp3 = outer2_8;
            let tmp4 = outer2_5;
            obj = {};
            let tmp5 = tmp;
            obj.style = tmp.item;
            let tmp6 = outer2_7;
            let tmp7 = callback;
            let tmp8 = tmp;
            obj = { variant: "heading-xxl/bold" };
            let items1 = ["Item ", num + 1];
            obj.children = items1;
            obj.children = outer2_7(callback(tmp[6]).Text, obj);
            obj.page = outer2_8(outer2_5, obj);
            let arr = items.push(obj);
            num = num + 1;
            let tmp10 = callback;
          } while (num < callback);
        }
        return items;
      }, items);
    })(first, tmp7),
    pageWidth: tmp[0],
    defaultIndex: 1
  });
  callback = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj1 = _require(3834);
  const token = obj1.useToken(first(689).colors.BACKGROUND_BASE_LOW);
  let items = [token, ];
  let obj2 = _require(3974);
  items[1] = obj2.hexWithOpacity(token, 0);
  obj = {};
  obj = { style: tmp11.container, onLayout: callback };
  obj1 = { spacing: 24 };
  obj2 = {};
  let items1 = [callback3(_require(11676).Tabs, { state: segmentedControlState, grow: first1 }), ];
  let tmp20 = first2;
  if (first2) {
    const obj3 = { state: segmentedControlState, colors: items };
    tmp20 = callback3(first(11821), obj3);
  }
  items1[1] = tmp20;
  obj2.children = items1;
  const items2 = [callback2(closure_5, obj2), callback3(_require(8797).SegmentedControlPages, { state: segmentedControlState }), , ];
  const obj4 = { spacing: 8, direction: "horizontal" };
  const obj5 = {
    text: "Add Tab",
    variant: "active",
    size: "sm",
    disabled: first >= 10,
    onPress() {
      return callback2(first + 1);
    }
  };
  const items3 = [callback3(_require(4543).Button, obj5), ];
  const obj6 = {
    text: "Remove Tab",
    variant: "destructive",
    size: "sm",
    disabled: 2 === first,
    onPress() {
      return callback2(first - 1);
    }
  };
  items3[1] = callback3(_require(4543).Button, obj6);
  obj4.children = items3;
  items2[2] = callback2(_require(4541).Stack, obj4);
  const obj7 = {};
  const obj8 = { start: true, label: "Enable Grow", value: first1, onValueChange: tmp4[1] };
  const items4 = [callback3(_require(5502).TableSwitchRow, obj8), callback3(_require(5502).TableSwitchRow, { label: "Enable Counts", value: tmp7, onValueChange: tmp8 }), ];
  const obj9 = { end: true, label: "Enable Overflow Gradient", value: first2, onValueChange: tmp9[1] };
  items4[2] = callback3(_require(5502).TableSwitchRow, obj9);
  obj7.children = items4;
  items2[3] = callback2(closure_5, obj7);
  obj1.children = items2;
  obj.children = callback2(_require(4541).Stack, obj1);
  obj.children = callback3(closure_5, obj);
  return callback3(closure_6, obj);
};
