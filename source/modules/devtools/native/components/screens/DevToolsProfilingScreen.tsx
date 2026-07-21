// Module ID: 14505
// Function ID: 109209
// Name: TableRowGroupReactProfiling
// Dependencies: []
// Exports: default

// Module 14505 (TableRowGroupReactProfiling)
function TableRowGroupReactProfiling() {
  let result;
  if (null != importDefault(dependencyMap[7])) {
    let obj = importDefault(dependencyMap[7]);
    result = obj.reactProfilingEnabled();
  }
  const tmp6 = callback2(React.useState(null != result && result), 2);
  const first = tmp6[0];
  const arg1 = first;
  const items = [first];
  const effect = React.useEffect(() => {
    if (null != callback(closure_2[7])) {
      const result = callback(closure_2[7]).setReactProfilingEnabled(first);
      const obj = callback(closure_2[7]);
    }
  }, items);
  obj = { "Bool(false)": 0.000000000000000000000000000000000000005879840348361748, "Bool(false)": 8592733888.000696, children: callback3(arg1(dependencyMap[9]).TableSwitchRow, { onValueChange: tmp6[1], value: first }) };
  return callback3(arg1(dependencyMap[8]).TableRowGroup, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
const ScrollView = tmp2.ScrollView;
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj["backgroundColor"] = importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW;
obj["padding"] = 16;
obj.container = obj;
obj.monospace = { fontFamily: arg1(dependencyMap[3]).Fonts.CODE_BOLD };
let closure_9 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/devtools/native/components/screens/DevToolsProfilingScreen.tsx");

export default function DevToolsProfilingScreen() {
  let callback = callback2(React.useState(false), 2)[1];
  callback = React.useCallback(() => {
    const result = callback(componentRenderStats[10]).clearComponentRenderStats();
    callback(true);
  }, []);
  const tmp3 = callback5();
  const importDefault = tmp3;
  let obj = callback(dependencyMap[10]);
  const componentRenderStats = obj.getComponentRenderStats();
  const dependencyMap = componentRenderStats;
  obj = { style: tmp3.container };
  const tmp = callback2(React.useState(false), 2);
  obj = { spacing: 16 };
  if (tmp5) {
    const obj1 = {};
    const obj2 = {};
    const obj3 = { <string:1688231116>: "r", <string:2968308795>: "isArray", <string:1674328934>: "Reflect", onPress: callback };
    obj2.children = callback3(callback(dependencyMap[12]).TableRow, obj3);
    const items = [callback3(callback(dependencyMap[8]).TableRowGroup, obj2), ];
    const _Object = Object;
    const keys = Object.keys(componentRenderStats);
    items[1] = keys.map((arg0) => {
      let mount;
      let nestedUpdate;
      let update;
      ({ mount, update, nestedUpdate } = componentRenderStats[arg0]);
      const obj = { title: "Component Profiler Target: '" + arg0 + "'", hasIcons: false };
      const items = [{ stat: mount, label: "Mount" }, { stat: update, label: "Update" }, { stat: nestedUpdate, label: "Nested Update" }];
      obj.children = items.map((stat) => {
        stat = stat.stat;
        let obj = {};
        obj = {};
        obj = { style: closure_1.monospace, children: "Count - " + stat.count };
        const items = [callback2(callback(closure_2[13]).Text, obj), ];
        const obj1 = { style: closure_1.monospace, children: "Mean - " + stat.mean };
        items[1] = callback2(callback(closure_2[13]).Text, obj1);
        obj.children = items;
        obj.subLabel = callback3(closure_7, obj);
        obj.label = stat.label;
        return callback2(callback(closure_2[12]).TableRow, obj, arg1);
      });
      return callback2(callback(componentRenderStats[8]).TableRowGroup, obj, arg0);
    });
    obj1.children = items;
    let tmp15 = callback4(closure_7, obj1);
  } else {
    const obj4 = {};
    const obj5 = { label: "No components rendered yet." };
    const obj6 = {};
    const obj7 = { -9223372036854775808: "r", 9223372036854775807: "isArray", 0: "Text", style: tmp3.monospace };
    const items1 = [false, callback3(callback(dependencyMap[13]).Text, obj7), " to enable measurements."];
    obj6.children = items1;
    obj5.subLabel = callback4(callback(dependencyMap[13]).Text, obj6);
    obj4.children = callback3(callback(dependencyMap[12]).TableRow, obj5);
    tmp15 = callback3(callback(dependencyMap[8]).TableRowGroup, obj4);
  }
  const items2 = [tmp15, callback3(callback(dependencyMap[14]).DevToolsProfilingUseStateFromStores, {}), ];
  const tmp5 = Object.keys(componentRenderStats).length > 0;
  const tmp6 = callback3;
  const tmp7 = ScrollView;
  const tmp8 = callback4;
  let tmp22 = null;
  if (obj11.isAndroid()) {
    tmp22 = callback3(TableRowGroupReactProfiling, {});
  }
  items2[2] = tmp22;
  obj.children = items2;
  obj.children = tmp8(callback(dependencyMap[11]).Stack, obj);
  return tmp6(tmp7, obj);
};
