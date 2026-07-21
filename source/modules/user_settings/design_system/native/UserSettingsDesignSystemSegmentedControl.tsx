// Module ID: 14317
// Function ID: 108144
// Name: UserSettingsDesignSystemSegmentedControl
// Dependencies: []
// Exports: default

// Module 14317 (UserSettingsDesignSystemSegmentedControl)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
({ View: closure_4, ScrollView: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsxs: closure_6, jsx: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: {} };
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST, borderColor: importDefault(dependencyMap[5]).colors.BORDER_STRONG };
obj.item = obj;
let closure_8 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemSegmentedControl.tsx");

export default function UserSettingsDesignSystemSegmentedControl() {
  const tmp = callback2(React.useState(0), 2);
  const callback = tmp[1];
  const tmp2 = callback2(React.useState(3), 2);
  const first = tmp2[0];
  const dependencyMap = first;
  const callback2 = tmp2[1];
  const tmp4 = callback5();
  let obj = callback(dependencyMap[7]);
  const segmentedControlState = obj.useSegmentedControlState({
    items: function useSegmentedControlItems(first) {
      let closure_0 = first;
      const tmp = callback3();
      first = tmp;
      const items = [first, tmp.item];
      return React.useMemo(() => {
        const items = [];
        let num = 0;
        if (0 < arg0) {
          do {
            let obj = {};
            let _HermesInternal = HermesInternal;
            obj.label = "Item " + num + 1;
            let _HermesInternal2 = HermesInternal;
            obj.id = "item-" + num + 1;
            let tmp = closure_7;
            let tmp2 = closure_4;
            obj = {};
            let tmp3 = closure_1;
            obj.style = closure_1.item;
            let tmp4 = closure_6;
            let tmp5 = closure_0;
            let tmp6 = closure_1;
            obj = { variant: "heading-xxl/bold" };
            let items1 = [, num + 1];
            obj.children = items1;
            obj.children = closure_6(closure_0(closure_1[6]).Text, obj);
            obj.page = closure_7(closure_4, obj);
            let arr = items.push(obj);
            num = num + 1;
            let tmp8 = closure_0;
          } while (num < closure_0);
        }
        return items;
      }, items);
    }(first),
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
  const items = [callback4(callback(dependencyMap[9]).SegmentedControl, { state: segmentedControlState }), callback4(callback(dependencyMap[10]).SegmentedControlPages, { state: segmentedControlState }), ];
  const obj2 = { paddingVertical: 1, width: null };
  const items1 = [
    callback4(callback(dependencyMap[11]).Button, {
      disabled: first >= 5,
      onPress() {
        const sum = first + 1;
        callback2(sum);
        const AccessibilityAnnouncer = callback(first[12]).AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce("Tab added, " + sum + " tabs", "polite");
      }
    }),
    callback4(callback(dependencyMap[11]).Button, {
      disabled: 2 === first,
      onPress() {
        const diff = first - 1;
        callback2(diff);
        const AccessibilityAnnouncer = callback(first[12]).AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce("Tab removed, " + diff + " tabs", "polite");
      }
    })
  ];
  obj2.children = items1;
  items[2] = callback3(callback(dependencyMap[8]).Stack, obj2);
  obj1.children = items;
  obj.children = callback3(callback(dependencyMap[8]).Stack, obj1);
  obj.children = callback4(closure_4, obj);
  return callback4(closure_5, obj);
};
