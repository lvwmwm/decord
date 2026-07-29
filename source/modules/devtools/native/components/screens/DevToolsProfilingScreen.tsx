// Module ID: 14760
// Function ID: 14761
// Name: TableRowGroupReactProfiling
// Dependencies: [32, 19, 17, 676, 21, 4189, 712, 14761, 5554, 5555, 10354, 4598, 5220, 4185, 14762, 500, 2]
// Exports: default

// Module 14760 (TableRowGroupReactProfiling)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function TableRowGroupReactProfiling() {
  let obj = React;
  const obj2 = importDefault(14761);
  let flag;
  if (obj2 != null) {
    flag = obj2.reactProfilingEnabled();
  }
  if (flag == null) {
    flag = false;
  }
  const tmp2 = callback(React.useState(flag), 2);
  const first = tmp2[0];
  const items = [first];
  const effect = obj.useEffect(() => {
    const obj = outer1_1(outer1_2[7]);
    if (obj != null) {
      const result = obj.setReactProfilingEnabled(first);
    }
  }, items);
  obj = { title: "React Profiling Renderer", hasIcons: false, children: null };
  obj[2] = callback2(first(5555).TableSwitchRow, { label: "Enable React Profiling Renderer", subLabel: "Enables React.Profiler, app restart required after change.", onValueChange: tmp2[1], value: first });
  return callback2(first(5554).TableRowGroup, obj);
}
({ ScrollView: c5, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_6, Fragment: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { container: null, monospace: null };
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.backgroundColor = require("Themes").colors.BACKGROUND_BASE_LOW;
createCacheKey.padding = 16;
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { fontFamily: require("ME").Fonts.CODE_BOLD };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsProfilingScreen.tsx");

export default function DevToolsProfilingScreen() {
  let require;
  [r10008, require] = callback(React.useState(false), 2);
  callback = React.useCallback(() => {
    const result = outer1_0(componentRenderStats[10]).clearComponentRenderStats();
    callback(true);
  }, []);
  const tmp3 = createCacheKey();
  const importDefault = tmp3;
  let obj = require(componentRenderStats[10]);
  componentRenderStats = obj.getComponentRenderStats();
  obj = { style: tmp3.container, children: null };
  const tmp = callback(React.useState(false), 2);
  if (tmp7) {
    obj = { children: null };
    let obj1 = { title: "Component Profiler", hasIcons: false, children: null };
    const obj2 = { variant: "danger", arrow: true, label: "Reset Stats", onPress: null };
    obj2[3] = callback;
    obj1[2] = tmp8(tmp4(tmp5[12]).TableRow, obj2);
    let items = [tmp8(tmp4(tmp5[8]).TableRowGroup, obj1), ];
    const _Object = Object;
    const keys = Object.keys(componentRenderStats);
    items[1] = keys.map((arg0) => {
      let mount;
      let nestedUpdate;
      let update;
      ({ mount, update, nestedUpdate } = componentRenderStats[arg0]);
      let obj = { title: null, hasIcons: false, children: null };
      obj[0] = "Component Profiler Target: '" + arg0 + "'";
      let items = [{ stat: mount, label: "Mount" }, { stat: update, label: "Update" }, { stat: nestedUpdate, label: "Nested Update" }];
      obj[2] = items.map((stat) => {
        stat = stat.stat;
        let obj = { subLabel: null, label: null };
        obj = { children: null };
        obj = { variant: "text-sm/medium", color: "text-subtle", style: closure_1.monospace, children: null };
        obj[3] = "Count - " + stat.count;
        const items = [outer1_6(outer1_0(outer1_2[13]).Text, obj), ];
        const obj1 = { variant: "text-sm/medium", color: "text-subtle", style: closure_1.monospace, children: null };
        obj1[3] = "Mean - " + stat.mean;
        items[1] = outer1_6(outer1_0(outer1_2[13]).Text, obj1);
        obj[0] = items;
        obj[0] = outer1_8(outer1_7, obj);
        obj[1] = stat.label;
        return outer1_6(outer1_0(outer1_2[12]).TableRow, obj, arg1);
      });
      return outer1_6(outer1_0(componentRenderStats[8]).TableRowGroup, obj, arg0);
    });
    obj[0] = items;
    let tmp8Result = tmp10(closure_7, obj);
  } else {
    const obj3 = { title: "Component Profiler", hasIcons: false, children: null };
    const obj4 = { label: "No components rendered yet.", subLabel: null };
    const obj5 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    const obj6 = { variant: "text-xs/semibold", style: null, children: "<ComponentProfiler />" };
    obj6[1] = tmp3.monospace;
    const items1 = ["Make sure you wrap your component in ", tmp8(tmp4(tmp5[13]).Text, obj6), " to enable measurements."];
    obj5[2] = items1;
    obj4[1] = tmp10(tmp4(tmp5[13]).Text, obj5);
    obj3[2] = tmp8(tmp4(tmp5[12]).TableRow, obj4);
    tmp8Result = tmp8(tmp4(tmp5[8]).TableRowGroup, obj3);
  }
  const items2 = [tmp8Result, closure_6(require(componentRenderStats[14]).DevToolsProfilingUseStateFromStores, {}), ];
  tmp7 = Object.keys(componentRenderStats).length > 0;
  const tmp9 = closure_5;
  tmp8Result = null;
  if (tmp4Result.isAndroid()) {
    tmp8Result = tmp8(TableRowGroupReactProfiling, {});
  }
  items2[2] = tmp8Result;
  obj[1] = closure_8(require(componentRenderStats[11]).Stack, { spacing: 16, children: items2 });
  return closure_6(tmp9, obj);
};
