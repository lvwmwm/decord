// Module ID: 14744
// Function ID: 112383
// Name: makeUniqueName
// Dependencies: [57, 31, 27, 1849, 1861, 33, 1862, 8567, 1212, 8563, 2556, 4130, 689, 4541, 4126, 4543, 8558, 8559, 566, 14745, 5501, 5165, 9060, 4363, 2]
// Exports: default

// Module 14744 (makeUniqueName)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_8;
let closure_9;
let require = arg1;
function makeUniqueName(closure_0) {
  const length = String(Math.max(arg2 - 1, 0)).length;
  const padStartResult = String(arg1).padStart(length, "0");
  const StringResult = String(arg1);
  const splitGraphemesResult = require(8567) /* splitGraphemes */.splitGraphemes(closure_0);
  let sum = padStartResult;
  if (splitGraphemesResult.length > length) {
    const substr = splitGraphemesResult.slice(0, splitGraphemesResult.length - length);
    sum = substr.join("") + padStartResult;
  }
  return sum;
}
function effectName(arg0) {
  const intl = require(1212) /* getSystemLocale */.intl;
  let OpWJ3f = require(8563) /* DISPLAY_NAME_STYLES_EFFECT_NAMES */.DISPLAY_NAME_STYLES_EFFECT_NAMES[arg0];
  if (null == OpWJ3f) {
    OpWJ3f = importDefault(2556).OpWJ3f;
  }
  return intl.string(OpWJ3f);
}
function OptionButtons(caption) {
  let importDefault;
  let options;
  let require;
  ({ options, value: require, onChange: importDefault } = caption);
  let obj = { spacing: 8 };
  obj = { variant: "text-sm/semibold", color: "text-subtle", children: caption.caption };
  const items = [callback2(require(4126) /* Text */.Text, obj), ];
  obj = {
    direction: "horizontal",
    spacing: 8,
    style: _createForOfIteratorHelperLoose().optionButtons,
    children: options.map((label) => {
      let closure_0 = label;
      const obj = { size: "sm", text: label.label };
      let str = "secondary";
      if (label.value === closure_0) {
        str = "primary";
      }
      obj.variant = str;
      obj.onPress = function onPress() {
        return outer1_1(label.value);
      };
      return outer1_8(outer1_0(outer1_2[15]).Button, obj, String(label.value));
    })
  };
  items[1] = callback2(require(4541) /* Stack */.Stack, obj);
  obj.children = items;
  return callback3(require(4541) /* Stack */.Stack, obj);
}
function BenchmarkRow(arg0) {
  let effect;
  let style;
  let userId;
  let userName;
  ({ userId, effect, userName, style } = arg0);
  let obj = require(8563) /* DISPLAY_NAME_STYLES_EFFECT_NAMES */;
  obj = { style };
  const displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(effect);
  obj = { userId, userName, effectDisplayType: require(8559) /* DisplayNameStyleColorPreset */.EffectDisplayType.STATIC, pendingDisplayNameStyles: displayNameStylesEffectConfig.previewStyles, variant: "text-md/semibold" };
  obj.children = callback2(importDefault(8558), obj);
  return callback2(closure_6, obj);
}
({ ScrollView: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let items = [...require("items3").EFFECT_ORDER, require("DisplayNameEffect").DisplayNameEffect.GUMMY];
let closure_11 = [10, 50, 100, 200];
let items1 = [{ key: "short", label: "Short", name: "Pixel7" }, { key: "medium", label: "Medium", name: "NebulaWanderer" }, { key: "long", label: "Long", name: "GalacticOverlord2049" }];
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.wrap = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.container = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.batchRow = { paddingVertical: 2 };
_createForOfIteratorHelperLoose.optionButtons = { flexWrap: "wrap" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsDisplayNameEffectsBenchmarkScreen.tsx");

export default function DevToolsDisplayNameEffectsBenchmarkScreen() {
  let clear;
  let results;
  let tmp = memo2();
  const require = tmp;
  let obj = require(first[18]);
  let items = [addScroll];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = addScroll.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    return id;
  });
  const tmp3 = callback(first1.useState(() => {
    const items = [tmp(first[6]).DisplayNameEffect.GUMMY];
    return new Set(items);
  }), 2);
  first = tmp3[0];
  callback = tmp3[1];
  const tmp5 = callback(first1.useState(100), 2);
  first1 = tmp5[0];
  const tmp7 = callback(first1.useState("long"), 2);
  const first2 = tmp7[0];
  let obj1 = require(first[19]);
  const benchmarkResults = obj1.useBenchmarkResults();
  const addMount = benchmarkResults.addMount;
  addScroll = benchmarkResults.addScroll;
  ({ results, clear } = benchmarkResults);
  let obj2 = require(first[19]);
  const mountTimer = obj2.useMountTimer();
  const run = mountTimer.run;
  const begin = mountTimer.begin;
  const measure = mountTimer.measure;
  const items1 = [addScroll];
  const items2 = [first2];
  callback = first1.useCallback((arg0) => {
    addScroll(arg0);
  }, items1);
  const memo = first1.useMemo(() => memo1.find((key) => key.key === outer1_5).name, items2);
  const items3 = [memo];
  const memo1 = first1.useMemo(() => tmp(first[7]).splitGraphemes(memo).length, items3);
  const items4 = [first];
  memo2 = first1.useMemo(() => measure.filter((arg0) => outer1_2.has(arg0)), items4);
  const items5 = [memo2];
  const memo3 = first1.useMemo(() => {
    let str = "All (rotation)";
    if (memo2.length !== measure.length) {
      const mapped = memo2.map(closure_15);
      str = mapped.join(" + ");
    }
    return str;
  }, items5);
  let closure_15 = first1.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    callback((items) => {
      const set = new Set(items);
      if (closure_1) {
        set.add(closure_0);
      } else {
        set.delete(closure_0);
      }
      return set;
    });
  }, []);
  const items6 = [begin, memo2, memo3, first1, memo, memo1];
  const items7 = [measure, addMount];
  const callback1 = first1.useCallback(() => {
    if (0 !== memo2.length) {
      const obj = { effects: memo2, effectLabel: memo3, rowCount: first1, name: memo, graphemeCount: memo1 };
      begin(obj);
    }
  }, items6);
  let closure_16 = first1.useCallback((arg0, effectLabel) => {
    const tmp = measure(arg0);
    if (null != tmp) {
      const _HermesInternal = HermesInternal;
      addMount("" + effectLabel.effectLabel + " \u00B7 " + effectLabel.rowCount + " rows \u00B7 " + effectLabel.graphemeCount + " graphemes", tmp);
    }
  }, items7);
  obj = { style: tmp.wrap, contentContainerStyle: tmp.container };
  obj = { spacing: 16 };
  obj1 = { title: "Configuration", hasIcons: false };
  obj2 = {};
  const obj3 = { spacing: 8 };
  const items8 = [run(require(first[14]).Text, { variant: "text-sm/semibold", color: "text-subtle", children: "Effects (checked render in rotation)" }), ];
  const obj4 = {
    spacing: 4,
    children: measure.map((arg0) => {
      const obj = {
        label: callback2(arg0),
        checked: first.has(arg0),
        onToggle(arg0) {
          return outer1_15(closure_0, arg0);
        }
      };
      return run(arg0(first[22]).Checkbox, obj, arg0);
    })
  };
  items8[1] = run(require(first[13]).Stack, obj4);
  obj3.children = items8;
  obj2.label = begin(require(first[13]).Stack, obj3);
  const items9 = [run(require(first[21]).TableRow, obj2), , ];
  const obj5 = {};
  const obj6 = { caption: "Rows", value: first1, onChange: tmp5[1], options: memo.map((value) => ({ value, label: String(value) })) };
  obj5.label = run(closure_16, obj6);
  items9[1] = run(require(first[21]).TableRow, obj5);
  const obj7 = {};
  const obj8 = { caption: "Name length (" + memo1 + " graphemes)", value: first2, onChange: tmp7[1], options: memo1.map((key) => ({ value: key.key, label: key.label })) };
  obj7.label = run(closure_16, obj8);
  items9[2] = run(require(first[21]).TableRow, obj7);
  obj1.children = items9;
  const items10 = [begin(require(first[20]).TableRowGroup, obj1), , , ];
  const obj9 = { title: "Run", hasIcons: false };
  const obj10 = { label: "Measure mount + layout", subLabel: "Mounts the batch and times until native layout completes.", arrow: true, disabled: !(null != stateFromStores && memo2.length > 0), onPress: callback1 };
  const items11 = [run(require(first[21]).TableRow, obj10), run(require(first[19]).ScrollBenchmark, { onResult: callback, subLabel: "Records frame times while you scroll the batch below." })];
  obj9.children = items11;
  items10[1] = begin(require(first[20]).TableRowGroup, obj9);
  items10[2] = run(require(first[19]).BenchmarkResultsList, { results, onClear: clear });
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
      obj13.children = Array.from(obj14, (arg0, arg1) => run(outer1_17, { userId: stateFromStores, effect: run.params.effects[arg1 % run.params.effects.length], userName: memo3(run.params.name, arg1, run.params.rowCount), style: tmp.batchRow }, arg1));
      obj11.children = run(require(first[19]).MountMeasure, obj13, run.batchKey);
      tmp20 = run(require(first[23]).DisplayNameStylesContext.Provider, obj11);
    }
  }
  items10[3] = tmp20;
  obj.children = items10;
  obj.children = begin(require(first[13]).Stack, obj);
  return run(first2, obj);
};
