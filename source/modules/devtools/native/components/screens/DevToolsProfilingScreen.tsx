// Module ID: 14630
// Function ID: 111444
// Name: TableRowGroupReactProfiling
// Dependencies: [57, 31, 27, 653, 33, 4130, 689, 277, 5503, 5504, 10330, 4541, 5165, 4126, 14631, 477, 2]
// Exports: default

// Module 14630 (TableRowGroupReactProfiling)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function TableRowGroupReactProfiling() {
  let result;
  if (null != importDefault(277)) {
    let obj = importDefault(277);
    result = obj.reactProfilingEnabled();
  }
  const tmp6 = callback(React.useState(null != result && result), 2);
  const first = tmp6[0];
  const items = [first];
  const effect = React.useEffect(() => {
    if (null != outer1_1(outer1_2[7])) {
      const result = outer1_1(outer1_2[7]).setReactProfilingEnabled(first);
      const obj = outer1_1(outer1_2[7]);
    }
  }, items);
  obj = { title: "React Profiling Renderer", hasIcons: false };
  obj = { label: "Enable React Profiling Renderer", subLabel: "Enables React.Profiler, app restart required after change.", onValueChange: tmp6[1], value: first };
  obj.children = callback2(first(5504).TableSwitchRow, obj);
  return callback2(first(5503).TableRowGroup, obj);
}
const ScrollView = get_ActivityIndicator.ScrollView;
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["backgroundColor"] = require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW;
_createForOfIteratorHelperLoose["padding"] = 16;
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.monospace = { fontFamily: require("ME").Fonts.CODE_BOLD };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsProfilingScreen.tsx");

export default function DevToolsProfilingScreen() {
  const _require = callback(React.useState(false), 2)[1];
  callback = React.useCallback(() => {
    const result = callback(componentRenderStats[10]).clearComponentRenderStats();
    callback(true);
  }, []);
  const tmp3 = _createForOfIteratorHelperLoose();
  const importDefault = tmp3;
  let obj = _require(componentRenderStats[10]);
  componentRenderStats = obj.getComponentRenderStats();
  obj = { style: tmp3.container };
  const tmp = callback(React.useState(false), 2);
  obj = { spacing: 16 };
  if (tmp5) {
    let obj1 = {};
    const obj2 = { title: "Component Profiler", hasIcons: false };
    const obj3 = { variant: "danger", arrow: true, label: "Reset Stats", onPress: callback };
    obj2.children = callback2(_require(componentRenderStats[12]).TableRow, obj3);
    let items = [callback2(_require(componentRenderStats[8]).TableRowGroup, obj2), ];
    const _Object = Object;
    const keys = Object.keys(componentRenderStats);
    items[1] = keys.map((arg0) => {
      let mount;
      let nestedUpdate;
      let update;
      ({ mount, update, nestedUpdate } = componentRenderStats[arg0]);
      let obj = { title: "Component Profiler Target: '" + arg0 + "'", hasIcons: false };
      let items = [{ stat: mount, label: "Mount" }, { stat: update, label: "Update" }, { stat: nestedUpdate, label: "Nested Update" }];
      obj.children = items.map((stat) => {
        stat = stat.stat;
        let obj = {};
        obj = {};
        obj = { variant: "text-sm/medium", color: "text-subtle", style: outer1_1.monospace, children: "Count - " + stat.count };
        const items = [outer2_6(callback(componentRenderStats[13]).Text, obj), ];
        const obj1 = { variant: "text-sm/medium", color: "text-subtle", style: outer1_1.monospace, children: "Mean - " + stat.mean };
        items[1] = outer2_6(callback(componentRenderStats[13]).Text, obj1);
        obj.children = items;
        obj.subLabel = outer2_8(outer2_7, obj);
        obj.label = stat.label;
        return outer2_6(callback(componentRenderStats[12]).TableRow, obj, arg1);
      });
      return outer1_6(callback(componentRenderStats[8]).TableRowGroup, obj, arg0);
    });
    obj1.children = items;
    let tmp15 = callback3(closure_7, obj1);
  } else {
    const obj4 = { title: "Component Profiler", hasIcons: false };
    const obj5 = { label: "No components rendered yet." };
    const obj6 = { variant: "text-xs/medium", color: "text-subtle" };
    const obj7 = { variant: "text-xs/semibold", style: tmp3.monospace, children: "<ComponentProfiler />" };
    const items1 = ["Make sure you wrap your component in ", callback2(_require(componentRenderStats[13]).Text, obj7), " to enable measurements."];
    obj6.children = items1;
    obj5.subLabel = callback3(_require(componentRenderStats[13]).Text, obj6);
    obj4.children = callback2(_require(componentRenderStats[12]).TableRow, obj5);
    tmp15 = callback2(_require(componentRenderStats[8]).TableRowGroup, obj4);
  }
  const items2 = [tmp15, callback2(_require(componentRenderStats[14]).DevToolsProfilingUseStateFromStores, {}), ];
  tmp5 = Object.keys(componentRenderStats).length > 0;
  const tmp6 = callback2;
  const tmp7 = ScrollView;
  const tmp8 = callback3;
  let tmp22 = null;
  if (obj11.isAndroid()) {
    tmp22 = callback2(TableRowGroupReactProfiling, {});
  }
  items2[2] = tmp22;
  obj.children = items2;
  obj.children = tmp8(_require(componentRenderStats[11]).Stack, obj);
  return tmp6(tmp7, obj);
};
