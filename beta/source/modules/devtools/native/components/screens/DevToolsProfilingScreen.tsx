// Module ID: 15216
// Function ID: 15217
// Name: DevToolsProfilingScreen
// Dependencies: [32, 19, 17, 1074, 21, 4836, 576, 9654, 5279, 5999, 5917, 4832, 15217, 2]
// Exports: default

// Module 15216 (DevToolsProfilingScreen)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import TableRow2 from "TableRow" /* 5917 */;
import TableRowGroup3 from "TableRowGroup" /* 5999 */;
import ComponentProfiler from "ComponentProfiler" /* 9654 */;
import DevToolsProfilingUseStateFromStores from "DevToolsProfilingUseStateFromStores" /* 15217 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, stat;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
({ ScrollView: closure_4, StyleSheet } = react_native);
const Fonts = Constants.Fonts;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, monospace: { fontFamily: Fonts.CODE_BOLD } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 16 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_8 = createStyles(obj);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsProfilingScreen.tsx");

export default function DevToolsProfilingScreen() {
  let Stack;
  let TableRow;
  let Text;
  let closure_1;
  let componentRenderStats;
  let items;
  let items1;
  let items2;
  let obj10;
  let obj5;
  let obj7;
  let obj8;
  let tmp8Result;
  [r10008, require] = componentRenderStats(react.useState(false), 2);
  componentRenderStats(react.useState(false), 2);
  const callback = react.useCallback(() => {
    const obj = ComponentProfiler;
    const result = obj.clearComponentRenderStats();
    require(true);
  }, []);
  const tmp3 = closure_8();
  dependencyMap = tmp3;
  let obj = ComponentProfiler;
  componentRenderStats = obj.getComponentRenderStats();
  let obj2 = { style: tmp3.container, children: closure_7(Stack, obj10) };
  const tmp7 = Object.keys(componentRenderStats).length > 0;
  Stack = Stack_Stack.Stack;
  const tmp9 = closure_4;
  if (tmp7) {
    let obj3 = { children: items };
    let obj4 = { title: "Component Profiler", hasIcons: false, children: closure_5(TableRow2.TableRow, obj5) };
    const TableRowGroup2 = tmp4(5999).TableRowGroup;
    obj5 = { variant: "danger", arrow: true, label: "Reset Stats", onPress: callback };
    items = [closure_5(TableRowGroup2, obj4), ];
    const _Object = Object;
    const keys = Object.keys(componentRenderStats);
    items[1] = keys.map((item) => {
      let items;
      let mount;
      let nestedUpdate;
      let update;
      ({ mount, update, nestedUpdate } = componentRenderStats[item]);
      let obj = {
        title: "Component Profiler Target: '" + item + "'",
        hasIcons: false,
        children: items.map((stat, index) => {
          let items;
          let obj2;
          stat = stat.stat;
          const label = stat.label;
          const obj = { subLabel: closure_2_7(closure_2_6, obj2), label };
          obj2 = { children: items };
          const TableRow = require("TableRow").TableRow;
          const obj3 = { variant: "text-sm/medium", color: "text-subtle", style: closure_1_1.monospace, children: "Count - " + stat.count };
          const Text = require("Text/Text").Text;
          items = [closure_2_5(Text, obj3), ];
          const obj4 = { variant: "text-sm/medium", color: "text-subtle", style: closure_1_1.monospace, children: "Mean - " + stat.mean };
          const Text2 = require("Text/Text").Text;
          items[1] = closure_2_5(Text2, obj4);
          return closure_2_5(TableRow, obj, index);
        })
      };
      const TableRowGroup = TableRowGroup3.TableRowGroup;
      items = [{ stat: mount, label: "Mount" }, { stat: update, label: "Update" }, { stat: nestedUpdate, label: "Nested Update" }];
      return hasOwnProperty(TableRowGroup, obj, item);
    });
    tmp8Result = tmp10(closure_6, obj3);
  } else {
    const obj6 = { title: "Component Profiler", hasIcons: false, children: closure_5(TableRow, obj7) };
    let TableRowGroup = tmp4(5999).TableRowGroup;
    obj7 = { label: "No components rendered yet.", subLabel: closure_7(Text, obj8) };
    TableRow = tmp4(5917).TableRow;
    obj8 = { variant: "text-xs/medium", color: "text-subtle", children: items1 };
    Text = tmp4(4832).Text;
    const obj9 = { variant: "text-xs/semibold", style: tmp3.monospace, children: "<ComponentProfiler />" };
    items1 = ["Make sure you wrap your component in ", closure_5(Text_Text.Text, obj9), " to enable measurements."];
    tmp8Result = tmp8(TableRowGroup, obj6);
  }
  obj10 = { spacing: 16, children: items2 };
  items2 = [tmp8Result, closure_5(DevToolsProfilingUseStateFromStores.DevToolsProfilingUseStateFromStores, {})];
  return closure_5(tmp9, obj2);
};
