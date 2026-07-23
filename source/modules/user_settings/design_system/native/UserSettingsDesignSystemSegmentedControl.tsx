// Module ID: 14439
// Function ID: 110340
// Name: UserSettingsDesignSystemSegmentedControl
// Dependencies: [57, 31, 27, 33, 4130, 689, 4126, 8360, 4541, 8760, 8758, 4543, 3843, 2]
// Exports: default

// Module 14439 (UserSettingsDesignSystemSegmentedControl)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
({ jsxs: closure_6, jsx: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { margin: 16, flex: 1, alignItems: "center", padding: 40 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderWidth: 2, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG, flex: 1, alignItems: "center", justifyContent: "center", height: 400 };
_createForOfIteratorHelperLoose.item = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemSegmentedControl.tsx");

export default function UserSettingsDesignSystemSegmentedControl() {
  let tmp = callback(React.useState(0), 2);
  const _require = tmp[1];
  let tmp2 = callback(React.useState(3), 2);
  let first = tmp2[0];
  callback = tmp2[1];
  let tmp4 = _createForOfIteratorHelperLoose();
  let obj = _require(first[7]);
  const segmentedControlState = obj.useSegmentedControlState({
    items: (function useSegmentedControlItems(first) {
      let closure_0 = first;
      let tmp = outer1_8();
      first = tmp;
      let items = [first, tmp.item];
      return outer1_3.useMemo(() => {
        const items = [];
        let num = 0;
        if (0 < callback) {
          do {
            let obj = {};
            let _HermesInternal = HermesInternal;
            obj.label = "Item " + num + 1;
            let _HermesInternal2 = HermesInternal;
            obj.id = "item-" + num + 1;
            let tmp = outer2_7;
            let tmp2 = outer2_4;
            obj = {};
            let tmp3 = tmp;
            obj.style = tmp.item;
            let tmp4 = outer2_6;
            let tmp5 = callback;
            let tmp6 = first;
            obj = { variant: "heading-xxl/bold" };
            let items1 = ["Item ", num + 1];
            obj.children = items1;
            obj.children = outer2_6(callback(first[6]).Text, obj);
            obj.page = outer2_7(outer2_4, obj);
            let arr = items.push(obj);
            num = num + 1;
            let tmp8 = callback;
          } while (num < callback);
        }
        return items;
      }, items);
    })(first),
    pageWidth: tmp[0],
    defaultIndex: 1
  });
  obj = {};
  obj = {
    style: tmp4.container,
    onLayout: React.useCallback((nativeEvent) => {
      callback(nativeEvent.nativeEvent.layout.width);
    }, [])
  };
  const obj1 = { spacing: 24 };
  let items = [callback3(_require(first[9]).SegmentedControl, { state: segmentedControlState }), callback3(_require(first[10]).SegmentedControlPages, { state: segmentedControlState }), ];
  const obj2 = { spacing: 8, direction: "horizontal" };
  const obj3 = {
    text: "Add Tab",
    variant: "active",
    size: "sm",
    disabled: first >= 5,
    onPress() {
      const sum = first + 1;
      callback2(sum);
      const AccessibilityAnnouncer = callback(first[12]).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce("Tab added, " + sum + " tabs", "polite");
    }
  };
  let items1 = [callback3(_require(first[11]).Button, obj3), ];
  const obj4 = {
    text: "Remove Tab",
    variant: "destructive",
    size: "sm",
    disabled: 2 === first,
    onPress() {
      const diff = first - 1;
      callback2(diff);
      const AccessibilityAnnouncer = callback(first[12]).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce("Tab removed, " + diff + " tabs", "polite");
    }
  };
  items1[1] = callback3(_require(first[11]).Button, obj4);
  obj2.children = items1;
  items[2] = callback2(_require(first[8]).Stack, obj2);
  obj1.children = items;
  obj.children = callback2(_require(first[8]).Stack, obj1);
  obj.children = callback3(closure_4, obj);
  return callback3(closure_5, obj);
};
