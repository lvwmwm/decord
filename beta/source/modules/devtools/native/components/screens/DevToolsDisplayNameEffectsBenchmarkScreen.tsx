// Module ID: 15330
// Function ID: 15331
// Name: DevToolsDisplayNameEffectsBenchmarkScreen
// Dependencies: [32, 19, 17, 1372, 1390, 21, 1391, 10364, 1115, 10360, 2877, 4836, 576, 5279, 4832, 5281, 10357, 10358, 504, 15331, 5999, 5917, 8732, 5086, 2]
// Exports: default

// Module 15330 (DevToolsDisplayNameEffectsBenchmarkScreen)
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1390 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1391 */;
import _modDef2877 from "module_2877" /* 2877 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10357 */;
import types from "types" /* 10358 */;
import useDisplayNameStylesEffectConfigs from "useDisplayNameStylesEffectConfigs" /* 10360 */;
import _mod10364 from "module_10364" /* 10364 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, set;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
function effectName(arg0) {
  const intl = intl2.intl;
  const string = intl.string;
  let OpWJ3f = useDisplayNameStylesEffectConfigs.DISPLAY_NAME_STYLES_EFFECT_NAMES[arg0];
  if (OpWJ3f == null) {
    OpWJ3f = _modDef2877.OpWJ3f;
  }
  return string(OpWJ3f);
}
function OptionButtons(caption) {
  let options;
  let require;
  ({ options, value: require, onChange: importDefault } = caption);
  caption = caption.caption;
  let tmp = closure_14();
  let obj = { spacing: 8, children: items };
  const Stack = Stack_Stack.Stack;
  items = [closure_8(Text_Text.Text, { variant: "text-sm/semibold", color: "text-subtle", children: caption }), ];
  const obj2 = {
    direction: "horizontal",
    spacing: 8,
    style: tmp.optionButtons,
    children: options.map((label) => {
      let str;
      const obj = {
        size: "sm",
        text: label.label,
        variant: str,
        onPress() {
          return importDefault(label.value);
        }
      };
      str = "secondary";
      const Button = require("components/Button/Button").Button;
      const tmp = closure_1_8;
      if (label.value === label) {
        str = "primary";
      }
      return tmp(Button, obj, String(label.value));
    })
  };
  const Stack2 = Stack_Stack.Stack;
  items[1] = closure_8(Stack2, obj2);
  return closure_9(Stack, obj);
}
function BenchmarkRow(arg0) {
  let effect;
  let obj3;
  let style;
  let tmp2;
  let userId;
  let userName;
  ({ userId, effect, userName, style } = arg0);
  const obj2 = { style, children: metroImportAll(tmp2, obj3) };
  const obj = useDisplayNameStylesEffectConfigs;
  const displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(effect);
  obj3 = { userId, userName, effectDisplayType: types.EffectDisplayType.STATIC, pendingDisplayNameStyles: displayNameStylesEffectConfig.previewStyles, variant: "text-md/semibold" };
  tmp2 = UsernameWithEffectsDefault;
  return metroImportAll(metroRequire, obj2);
}
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const EFFECT_ORDER = DisplayNameStylesConstants.EFFECT_ORDER;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let items = [...EFFECT_ORDER, DisplayNameEffect.DisplayNameEffect.GUMMY];
let closure_12 = [10, 50, 100, 200];
let items1 = [{ key: "short", label: "Short", name: "Pixel7" }, { key: "medium", label: "Medium", name: "NebulaWanderer" }, { key: "long", label: "Long", name: "GalacticOverlord2049" }];
let createStyles = createStyles_mod;
let obj = { wrap: obj2, container: obj3, batchRow: { paddingVertical: 2 }, optionButtons: { flexWrap: "wrap" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_16 };
let closure_14 = createStyles(obj);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsDisplayNameEffectsBenchmarkScreen.tsx");

export default function DevToolsDisplayNameEffectsBenchmarkScreen() {
  let MountMeasure;
  let Stack;
  let Stack2;
  let addScroll;
  let clear;
  let closure_3;
  let first;
  let first1;
  let first2;
  let items10;
  let items11;
  let items8;
  let items9;
  let memo3;
  let obj10;
  let obj12;
  let obj16;
  let obj17;
  let obj7;
  let results;
  let tmp12;
  let tmp23;
  let tmp9;
  let tmp = memo3();
  _require = tmp;
  let tmp2 = _require;
  let obj = require("get initialized");
  items = [addScroll];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = addScroll.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  [first, _slicedToArray] = first1.useState(() => {
    items = [closure_0(first[6]).DisplayNameEffect.GUMMY];
    set = new Set(items);
    return set;
  });
  [first1, tmp9] = first1.useState(100);
  [first2, tmp12] = first1.useState("long");
  const obj2 = require("FRAME_BUDGET_MS");
  const benchmarkResults = obj2.useBenchmarkResults();
  const addMount = benchmarkResults.addMount;
  addScroll = benchmarkResults.addScroll;
  ({ results, clear } = benchmarkResults);
  let obj3 = require("FRAME_BUDGET_MS");
  const mountTimer = obj3.useMountTimer();
  const run = mountTimer.run;
  const begin = mountTimer.begin;
  const measure = mountTimer.measure;
  items1 = [addScroll];
  const cancel = mountTimer.cancel;
  const items2 = [first2];
  const callback = first1.useCallback((arg0) => {
    addScroll(arg0);
  }, items1);
  const memo = first1.useMemo(() => items1.find((key) => key.key === first2).name, items2);
  const items3 = [memo];
  const memo1 = first1.useMemo(() => {
    const obj = _mod10364;
    return obj.splitGraphemes(memo).length;
  }, items3);
  const items4 = [first];
  const memo2 = first1.useMemo(() => items.filter((item) => set.has(item)), items4);
  const items5 = [memo2];
  memo3 = first1.useMemo(() => {
    let str = "All (rotation)";
    const arr = memo2;
    if (memo2.length !== items.length) {
      const mapped = arr.map(effectName);
      str = mapped.join(" + ");
    }
    return str;
  }, items5);
  let closure_15 = first1.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    let closure_1 = arg1;
    let tmp = closure_3((items) => {
      set = new Set(items);
      const tmp = closure_1;
      if (tmp) {
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
      const obj = { effects: tmp, effectLabel: memo3, rowCount: first1, name: memo, graphemeCount: memo1 };
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
  const tmp20 = null != stateFromStores && memo2.length > 0;
  const obj4 = { style: tmp.wrap, contentContainerStyle: tmp.container, children: tmp23(Stack, { spacing: 16, children: items10 }) };
  Stack = tmp2(tmp3[13]).Stack;
  const obj5 = { title: "Configuration", hasIcons: false, children: items9 };
  const TableRowGroup = tmp2(tmp3[20]).TableRowGroup;
  const obj6 = { label: begin(Stack2, obj7) };
  const TableRow = tmp2(tmp3[21]).TableRow;
  obj7 = { spacing: 8, children: items8 };
  Stack2 = tmp2(tmp3[13]).Stack;
  items8 = [run(tmp2(tmp3[14]).Text, { variant: "text-sm/semibold", color: "text-subtle", children: "Effects (checked render in rotation)" }), ];
  const obj8 = {
    spacing: 4,
    children: measure.map((item) => {
      closure_0 = item;
      const Checkbox = closure_0(first[22]).Checkbox;
      const intl = closure_0(first[8]).intl;
      const string = intl.string;
      let OpWJ3f = closure_0(first[9]).DISPLAY_NAME_STYLES_EFFECT_NAMES[item];
      const tmp = run;
      const tmp2 = first;
      if (OpWJ3f == null) {
        OpWJ3f = stateFromStores(tmp2[10]).OpWJ3f;
      }
      const obj = {
        label: string(OpWJ3f),
        checked: first.has(item),
        onToggle(arg0) {
          return closure_15(item, arg0);
        }
      };
      return tmp(Checkbox, obj, item);
    })
  };
  const Stack3 = tmp2(tmp3[13]).Stack;
  items8[1] = run(Stack3, obj8);
  items9 = [run(TableRow, obj6), , ];
  const obj9 = { label: run(closure_15, obj10) };
  obj10 = {
    caption: "Rows",
    value: first1,
    onChange: tmp9,
    options: memo1.map((value) => {
      const obj = { value, label: String(value) };
      return obj;
    })
  };
  const TableRow2 = tmp2(tmp3[21]).TableRow;
  items9[1] = run(TableRow2, obj9);
  const obj11 = { label: run(closure_15, obj12) };
  obj12 = { caption: "Name length (" + memo1 + " graphemes)", value: first2, onChange: tmp12, options: memo2.map((key) => ({ value: key.key, label: key.label })) };
  const TableRow3 = tmp2(tmp3[21]).TableRow;
  items9[2] = run(TableRow3, obj11);
  items10 = [begin(TableRowGroup, obj5), , , ];
  const obj13 = { title: "Run", hasIcons: false, children: items11 };
  const TableRowGroup2 = tmp2(tmp3[20]).TableRowGroup;
  items11 = [, ];
  const obj14 = { label: "Measure mount + layout", subLabel: "Mounts the batch and times until native layout completes.", arrow: true, disabled: !tmp20, onPress: callback1 };
  items11[0] = run(tmp2(first[21]).TableRow, obj14);
  items11[1] = run(tmp2(first[19]).ScrollBenchmark, { onResult: callback, subLabel: "Records frame times while you scroll the batch below." });
  items10[1] = begin(TableRowGroup2, obj13);
  items10[2] = run(tmp2(first[19]).BenchmarkResultsList, { results, onClear: clear });
  let tmp21Result = null;
  const tmp22 = first2;
  tmp23 = begin;
  if (null != run) {
    tmp21Result = null;
    if (null != stateFromStores) {
      const obj15 = { value: { overrideSettings: true }, children: run(MountMeasure, obj16, run.batchKey) };
      const Provider = tmp2(tmp3[23]).DisplayNameStylesContext.Provider;
      const _Array = Array;
      obj16 = {
        batchKey: run.batchKey,
        onCancel: cancel,
        onMeasure(onMeasureTruncated) {
              return closure_16(onMeasureTruncated, run.params);
            },
        children: Array.from(obj17, (arg0, arg1) => {
              let sum;
              const name = run.params.name;
              const obj = { userId: stateFromStores, effect: run.params.effects[arg1 % run.params.effects.length], userName: sum, style: closure_0.batchRow };
              const length = String(Math.max(run.params.rowCount - 1, 0)).length;
              const StringResult = String(arg1);
              const padStartResult = StringResult.padStart(length, "0");
              const obj3 = _mod10364;
              const splitGraphemesResult = obj3.splitGraphemes(name);
              sum = padStartResult;
              const tmp = metroImportAll;
              const tmp2 = BenchmarkRow;
              if (splitGraphemesResult.length > length) {
                const substr = splitGraphemesResult.slice(0, splitGraphemesResult.length - length);
                sum = substr.join("") + padStartResult;
              }
              return tmp(tmp2, obj, arg1);
            })
      };
      obj17 = { length: run.params.rowCount };
      MountMeasure = tmp2(tmp3[19]).MountMeasure;
      tmp21Result = tmp21(Provider, obj15);
    }
  }
  items10[3] = tmp21Result;
  return run(tmp22, obj4);
};
