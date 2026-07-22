// Module ID: 14582
// Function ID: 109898
// Name: makeUniqueName
// Dependencies: []
// Exports: default

// Module 14582 (makeUniqueName)
function makeUniqueName(closure_0) {
  const length = String(Math.max(arg2 - 1, 0)).length;
  const padStartResult = String(arg1).padStart(length, "0");
  const StringResult = String(arg1);
  const splitGraphemesResult = arg1(dependencyMap[7]).splitGraphemes(closure_0);
  let sum = padStartResult;
  if (splitGraphemesResult.length > length) {
    const substr = splitGraphemesResult.slice(0, splitGraphemesResult.length - length);
    sum = substr.join("") + padStartResult;
  }
  return sum;
}
function effectName(arg0) {
  const intl = arg1(dependencyMap[8]).intl;
  let OpWJ3f = arg1(dependencyMap[9]).DISPLAY_NAME_STYLES_EFFECT_NAMES[arg0];
  if (null == OpWJ3f) {
    OpWJ3f = importDefault(dependencyMap[10]).OpWJ3f;
  }
  return intl.string(OpWJ3f);
}
function OptionButtons(caption) {
  let options;
  ({ options, value: closure_0, onChange: closure_1 } = caption);
  let obj = { spacing: 8 };
  obj = { cachedAt: true, edpbxy: true, children: caption.caption };
  const items = [callback2(arg1(dependencyMap[14]).Text, obj), ];
  obj = {
    style: callback4().optionButtons,
    children: options.map((label) => {
      const obj = { size: "sm", text: label.label };
      let str = "secondary";
      if (label.value === label) {
        str = "primary";
      }
      obj.variant = str;
      obj.onPress = function onPress() {
        return callback(arg0.value);
      };
      return closure_8(label(closure_2[15]).Button, obj, String(label.value));
    })
  };
  items[1] = callback2(arg1(dependencyMap[13]).Stack, obj);
  obj.children = items;
  return callback3(arg1(dependencyMap[13]).Stack, obj);
}
function BenchmarkRow(arg0) {
  let effect;
  let style;
  let userId;
  let userName;
  ({ userId, effect, userName, style } = arg0);
  let obj = arg1(dependencyMap[9]);
  obj = { style };
  const displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(effect);
  obj = { userId, userName, effectDisplayType: arg1(dependencyMap[17]).EffectDisplayType.STATIC, pendingDisplayNameStyles: displayNameStylesEffectConfig.previewStyles, variant: "text-md/semibold" };
  obj.children = callback2(importDefault(dependencyMap[16]), obj);
  return callback2(closure_6, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ScrollView: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
const items = [...arg1(dependencyMap[4]).EFFECT_ORDER, arg1(dependencyMap[6]).DisplayNameEffect.GUMMY];
let closure_11 = [true, true, true, true];
const items1 = [{ 1852068463: "<string:24182785>", 256142949: "<string:1929379840>", 218104907: "isArray" }, {}, { 1852068463: 18, 256142949: "center", 218104907: "center" }];
let obj = arg1(dependencyMap[11]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOW, paddingHorizontal: importDefault(dependencyMap[12]).space.PX_16 };
obj.wrap = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.container = { paddingVertical: importDefault(dependencyMap[12]).space.PX_16 };
obj.batchRow = { paddingVertical: 2 };
obj.optionButtons = { flexWrap: "wrap" };
let closure_13 = obj.createStyles(obj);
const obj1 = { paddingVertical: importDefault(dependencyMap[12]).space.PX_16 };
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/devtools/native/components/screens/DevToolsDisplayNameEffectsBenchmarkScreen.tsx");

export default function DevToolsDisplayNameEffectsBenchmarkScreen() {
  let clear;
  let results;
  const tmp = callback4();
  const arg1 = tmp;
  let obj = arg1(dependencyMap[18]);
  let items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = addScroll.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    return id;
  });
  const importDefault = stateFromStores;
  const tmp3 = callback(React.useState(() => {
    const items = [tmp(first[6]).DisplayNameEffect.GUMMY];
    return new Set(items);
  }), 2);
  const first = tmp3[0];
  const dependencyMap = first;
  let callback = tmp3[1];
  const tmp5 = callback(React.useState(100), 2);
  const first1 = tmp5[0];
  const React = first1;
  const tmp7 = callback(React.useState("long"), 2);
  const first2 = tmp7[0];
  let obj1 = arg1(dependencyMap[19]);
  const benchmarkResults = obj1.useBenchmarkResults();
  const addMount = benchmarkResults.addMount;
  const addScroll = benchmarkResults.addScroll;
  closure_7 = addScroll;
  ({ results, clear } = benchmarkResults);
  let obj2 = arg1(dependencyMap[19]);
  const mountTimer = obj2.useMountTimer();
  const run = mountTimer.run;
  const begin = mountTimer.begin;
  const measure = mountTimer.measure;
  items = measure;
  let items1 = [addScroll];
  const items2 = [first2];
  callback = React.useCallback((arg0) => {
    addScroll(arg0);
  }, items1);
  const memo = React.useMemo(() => memo1.find((key) => key.key === closure_5).name, items2);
  let closure_11 = memo;
  const items3 = [memo];
  const memo1 = React.useMemo(() => tmp(first[7]).splitGraphemes(memo).length, items3);
  items1 = memo1;
  const items4 = [first];
  const memo2 = React.useMemo(() => measure.filter((arg0) => set.has(arg0)), items4);
  const callback4 = memo2;
  const items5 = [memo2];
  const memo3 = React.useMemo(() => {
    let str = "All (rotation)";
    if (memo2.length !== measure.length) {
      const mapped = memo2.map(closure_15);
      str = mapped.join(" + ");
    }
    return str;
  }, items5);
  const makeUniqueName = memo3;
  let closure_15 = React.useCallback((arg0, arg1) => {
    const stateFromStores = arg1;
    callback((items) => {
      const set = new Set(items);
      if (arg1) {
        set.add(items);
      } else {
        set.delete(items);
      }
      return set;
    });
  }, []);
  const items6 = [begin, memo2, memo3, first1, memo, memo1];
  const items7 = [measure, addMount];
  const callback1 = React.useCallback(() => {
    if (0 !== memo2.length) {
      const obj = { effects: memo2, effectLabel: memo3, rowCount: first1, name: memo, graphemeCount: memo1 };
      begin(obj);
    }
  }, items6);
  let closure_16 = React.useCallback((arg0, effectLabel) => {
    const tmp = measure(arg0);
    if (null != tmp) {
      const _HermesInternal = HermesInternal;
      addMount("" + effectLabel.effectLabel + " \u00B7 " + effectLabel.rowCount + " rows \u00B7 " + effectLabel.graphemeCount + " graphemes", tmp);
    }
  }, items7);
  obj = { style: tmp.wrap, contentContainerStyle: tmp.container };
  obj = { spacing: 16 };
  obj1 = { -9223372036854775808: true, 9223372036854775807: true };
  obj2 = {};
  const obj3 = { spacing: 8 };
  const items8 = [run(arg1(dependencyMap[14]).Text, {}), ];
  const obj4 = {
    spacing: 4,
    children: items.map((arg0) => {
      const obj = {
        label: callback2(arg0),
        checked: first.has(arg0),
        onToggle(arg0) {
          return callback(arg0, arg0);
        }
      };
      return run(arg0(first[22]).Checkbox, obj, arg0);
    })
  };
  items8[1] = run(arg1(dependencyMap[13]).Stack, obj4);
  obj3.children = items8;
  obj2.label = begin(arg1(dependencyMap[13]).Stack, obj3);
  const items9 = [run(arg1(dependencyMap[21]).TableRow, obj2), , ];
  const obj5 = {};
  const obj6 = { caption: "Rows", value: first1, onChange: tmp5[1], options: closure_11.map((value) => ({ value, label: String(value) })) };
  obj5.label = run(closure_16, obj6);
  items9[1] = run(arg1(dependencyMap[21]).TableRow, obj5);
  const obj7 = {};
  const obj8 = { caption: "Name length (" + memo1 + " graphemes)", value: first2, onChange: tmp7[1], options: items1.map((key) => ({ value: key.key, label: key.label })) };
  obj7.label = run(closure_16, obj8);
  items9[2] = run(arg1(dependencyMap[21]).TableRow, obj7);
  obj1.children = items9;
  const items10 = [begin(arg1(dependencyMap[20]).TableRowGroup, obj1), , , ];
  const obj9 = { -9223372036854775808: "<string:17524545>", 9223372036854775807: "<string:1732864>" };
  const obj10 = { user: "\u{1F450}\u{1F3FF}", formatToPlainString: true, jsx: null, disabled: !(null != stateFromStores && memo2.length > 0), onPress: callback1 };
  const items11 = [run(arg1(dependencyMap[21]).TableRow, obj10), run(arg1(dependencyMap[19]).ScrollBenchmark, { onResult: callback, subLabel: "Records frame times while you scroll the batch below." })];
  obj9.children = items11;
  items10[1] = begin(arg1(dependencyMap[20]).TableRowGroup, obj9);
  items10[2] = run(arg1(dependencyMap[19]).BenchmarkResultsList, { results, onClear: clear });
  let tmp20 = null;
  if (null != run) {
    tmp20 = null;
    if (null != stateFromStores) {
      const obj11 = {};
      const obj12 = { overrideSettings: true };
      obj11.value = obj12;
      const obj13 = {
        batchKey: run.batchKey,
        onCancel: mountTimer.cancel,
        onMeasure(arg0) {
              return callback3(arg0, run.params);
            }
      };
      const _Array = Array;
      const obj14 = { length: run.params.rowCount };
      obj13.children = Array.from(obj14, (arg0, arg1) => run(closure_17, { userId: stateFromStores, effect: run.params.effects[arg1 % closure_8.params.effects.length], userName: memo3(run.params.name, arg1, run.params.rowCount), style: tmp.batchRow }, arg1));
      obj11.children = run(arg1(dependencyMap[19]).MountMeasure, obj13, run.batchKey);
      tmp20 = run(arg1(dependencyMap[23]).DisplayNameStylesContext.Provider, obj11);
    }
  }
  items10[3] = tmp20;
  obj.children = items10;
  obj.children = begin(arg1(dependencyMap[13]).Stack, obj);
  return run(first2, obj);
};
