// Module ID: 14319
// Function ID: 108154
// Name: UserSettingsDesignSystemTabs
// Dependencies: []
// Exports: default

// Module 14319 (UserSettingsDesignSystemTabs)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsxs: closure_7, jsx: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: { "Null": true, "Null": true, "Null": true } };
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST, borderColor: importDefault(dependencyMap[5]).colors.BORDER_STRONG };
obj.item = obj;
let closure_9 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTabs.tsx");

export default function UserSettingsDesignSystemTabs() {
  let tmp7;
  let tmp8;
  const tmp = callback2(React.useState(0), 2);
  let callback = tmp[1];
  const tmp2 = callback2(React.useState(3), 2);
  const first = tmp2[0];
  const importDefault = first;
  let closure_2 = tmp2[1];
  const tmp4 = callback2(React.useState(true), 2);
  const first1 = tmp4[0];
  [tmp7, tmp8] = callback2(React.useState(false), 2);
  const tmp9 = callback2(React.useState(false), 2);
  const first2 = tmp9[0];
  const tmp6 = callback2(React.useState(false), 2);
  const tmp11 = callback5();
  let obj = callback(closure_2[9]);
  const segmentedControlState = obj.useSegmentedControlState({
    items: function useTabItems(first, arg1) {
      let closure_0 = first;
      first = arg1;
      const tmp = callback3();
      let closure_2 = tmp;
      const items = [first, tmp.item, arg1];
      return React.useMemo(() => {
        const items = [];
        let num = 0;
        if (0 < arg0) {
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
            let tmp3 = closure_8;
            let tmp4 = closure_5;
            obj = {};
            let tmp5 = closure_2;
            obj.style = closure_2.item;
            let tmp6 = closure_7;
            let tmp7 = closure_0;
            let tmp8 = closure_2;
            obj = { variant: "heading-xxl/bold" };
            let items1 = [, num + 1];
            obj.children = items1;
            obj.children = closure_7(closure_0(closure_2[6]).Text, obj);
            obj.page = closure_8(closure_5, obj);
            let arr = items.push(obj);
            num = num + 1;
            let tmp10 = closure_0;
          } while (num < closure_0);
        }
        return items;
      }, items);
    }(first, tmp7),
    pageWidth: tmp[0],
    defaultIndex: 1
  });
  callback = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj1 = callback(closure_2[7]);
  const token = obj1.useToken(importDefault(closure_2[5]).colors.BACKGROUND_BASE_LOW);
  const items = [token, ];
  let obj2 = callback(closure_2[8]);
  items[1] = obj2.hexWithOpacity(token, 0);
  obj = {};
  obj = { style: tmp11.container, onLayout: callback };
  obj1 = { spacing: 24 };
  obj2 = {};
  const items1 = [callback4(callback(closure_2[11]).Tabs, { state: segmentedControlState, grow: first1 }), ];
  let tmp20 = first2;
  if (first2) {
    const obj3 = { state: segmentedControlState, colors: items };
    tmp20 = callback4(importDefault(closure_2[12]), obj3);
  }
  items1[1] = tmp20;
  obj2.children = items1;
  const items2 = [callback3(closure_5, obj2), callback4(callback(closure_2[13]).SegmentedControlPages, { state: segmentedControlState }), , ];
  const obj4 = { paddingVertical: 1, width: null };
  const items3 = [
    callback4(callback(closure_2[14]).Button, {
      disabled: first >= 10,
      onPress() {
        return callback2(first + 1);
      }
    }),
    callback4(callback(closure_2[14]).Button, {
      disabled: 2 === first,
      onPress() {
        return callback2(first - 1);
      }
    })
  ];
  obj4.children = items3;
  items2[2] = callback3(callback(closure_2[10]).Stack, obj4);
  const obj7 = {};
  const items4 = [callback4(callback(closure_2[15]).TableSwitchRow, { value: first1, onValueChange: tmp4[1] }), callback4(callback(closure_2[15]).TableSwitchRow, { label: "Enable Counts", value: tmp7, onValueChange: tmp8 }), callback4(callback(closure_2[15]).TableSwitchRow, { value: first2, onValueChange: tmp9[1] })];
  obj7.children = items4;
  items2[3] = callback3(closure_5, obj7);
  obj1.children = items2;
  obj.children = callback3(callback(closure_2[10]).Stack, obj1);
  obj.children = callback4(closure_5, obj);
  return callback4(closure_6, obj);
};
