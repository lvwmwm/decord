// Module ID: 17071
// Function ID: 17072
// Name: VibegrationsNativeStatusStrip
// Dependencies: [32, 19, 17, 14445, 21, 4790, 580, 558, 568, 17063, 14444, 14448, 4757, 17072, 5373, 1119, 3714, 4786, 4744, 2]

// Module 17071 (VibegrationsNativeStatusStrip)
import nativeDefault from "native" /* 580 */;
import _modDef3714 from "module_3714" /* 3714 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4757 */;
import VibegrationsUsageSheet from "VibegrationsUsageSheet" /* 17072 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const VibegrationsUsageSheetDefault = VibegrationsUsageSheet;

require = fn;
const View = fn(17).View;
const AI_LOADER_CYCLE_MS = fn(14445).AI_LOADER_CYCLE_MS;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { row: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_4, minHeight: nativeDefault.space.PX_4 + nativeDefault.space.PX_24 }, activity: null, indicator: null, label: null, runes: null };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_4, minHeight: nativeDefault.space.PX_4 + nativeDefault.space.PX_24 };
obj2.activity = { flex: 1, minHeight: nativeDefault.space.PX_16, justifyContent: "center" };
let obj4 = { flex: 1, minHeight: nativeDefault.space.PX_16, justifyContent: "center" };
obj2.indicator = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, alignSelf: "flex-start" };
obj2.label = { flexShrink: 1 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, alignSelf: "flex-start" };
obj2.runes = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((line) => {
  const cResult = line(568).c(17);
  line = line.line;
  const tmp4 = closure_9();
  [text, dependencyMap] = noop.useState(line);
  _slicedToArray = noop.useRef(line);
  noop = noop.useRef(text);
  const ref = noop.useRef(null);
  if (cResult[0] !== line) {
    const fn = function y() {
      closure_3.current = line;
    };
    const items = [line];
    cResult[0] = line;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp9 = items;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  const effect = obj2.useEffect(tmp8, tmp9);
  if (cResult[3] !== text) {
    const fn2 = function x() {
      closure_4.current = current;
    };
    const items1 = [text];
    cResult[3] = text;
    cResult[4] = fn2;
    cResult[5] = items1;
    let tmp12 = items1;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  const effect1 = obj2.useEffect(tmp11, tmp12);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function v() {
      closure_0 = null;
      function beat() {
        if (ref.current !== ref2.current) {
          closure_2(tmp.current);
        } else {
          const current = ref3.current;
          if (current != null) {
            current.play();
          }
        }
      }
      timeout = setTimeout(() => {
        if (ref.current !== ref2.current) {
          closure_2(tmp2.current);
        } else {
          const current = ref.current;
          if (current != null) {
            current.play();
          }
        }
        const interval = setInterval(beat, AI_LOADER_CYCLE_MS);
      }, line(timeout[9]).INDICATOR_PASS_STAGGER_MS);
      return () => {
        clearTimeout(closure_2);
        if (null != closure_0) {
          const _clearInterval = clearInterval;
          clearInterval(closure_0);
        }
      };
    };
    const items2 = [];
    cResult[6] = fn3;
    cResult[7] = items2;
    let tmp15 = items2;
    let tmp14 = fn3;
  } else {
    tmp14 = cResult[6];
    tmp15 = cResult[7];
  }
  const effect2 = obj2.useEffect(tmp14, tmp15);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp19 = closure_7(tmp(14444).AILoader, { size: 10, color: "text-subtle" });
    cResult[8] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[8];
  }
  if (cResult[9] !== text) {
    const obj3 = { ref, text, variant: "text-xs/medium", color: "text-subtle", duration: tmp(17063).INDICATOR_PASS_MS, delay: null };
    const tmp22 = closure_7(tmp(14448).AIShimmer, obj3);
    cResult[9] = text;
    cResult[10] = tmp22;
    let tmp20 = tmp22;
  } else {
    tmp20 = cResult[10];
  }
  if (cResult[11] === tmp4.label) {
    if (cResult[12] === tmp20) {
      let tmp23 = cResult[13];
    }
    if (cResult[14] === tmp4.indicator) {
      if (cResult[15] === tmp23) {
        let tmp25 = cResult[16];
      }
      return tmp25;
    }
    const obj4 = { style: tmp4.indicator, children: null };
    const items3 = [tmp17, tmp23];
    obj4.children = items3;
    const tmp28 = closure_8(ref, obj4);
    cResult[14] = tmp4.indicator;
    cResult[15] = tmp23;
    cResult[16] = tmp28;
    tmp25 = tmp28;
  }
  const tmp24 = closure_7(ref, { style: tmp4.label, children: tmp20 });
  cResult[11] = tmp4.label;
  cResult[12] = tmp20;
  cResult[13] = tmp24;
  tmp23 = tmp24;
}) : ((line) => {
  line = line.line;
  text = undefined;
  dependencyMap = undefined;
  noop = undefined;
  const tmp = closure_9();
  [text, dependencyMap] = noop.useState(line);
  _slicedToArray = noop.useRef(line);
  noop = noop.useRef(text);
  const ref = noop.useRef(null);
  const items = [line];
  const effect = noop.useEffect(() => {
    closure_3.current = line;
  }, items);
  const items1 = [text];
  const effect1 = noop.useEffect(() => {
    closure_4.current = current;
  }, items1);
  const effect2 = noop.useEffect(() => {
    function beat() {
      if (ref.current !== ref2.current) {
        closure_2(tmp.current);
      } else {
        const current = ref3.current;
        if (current != null) {
          current.play();
        }
      }
    }
    closure_0 = null;
    timeout = setTimeout(() => {
      if (ref.current !== ref2.current) {
        closure_2(tmp2.current);
      } else {
        const current = ref.current;
        if (current != null) {
          current.play();
        }
      }
      const interval = setInterval(beat, AI_LOADER_CYCLE_MS);
    }, line(timeout[9]).INDICATOR_PASS_STAGGER_MS);
    return () => {
      clearTimeout(closure_2);
      if (null != closure_0) {
        const _clearInterval = clearInterval;
        clearInterval(closure_0);
      }
    };
  }, []);
  const obj = { style: tmp.indicator, children: null };
  const items2 = [closure_7(line(14444).AILoader, { size: 10, color: "text-subtle" }), ];
  const obj2 = { style: tmp.label, children: closure_7(line(14448).AIShimmer, { ref, text, variant: "text-xs/medium", color: "text-subtle", duration: line(17063).INDICATOR_PASS_MS, delay: null }) };
  items2[1] = closure_7(ref, obj2);
  obj.children = items2;
  return closure_8(ref, obj);
});
ReactCompilerGating = fn(558);
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeStatusStrip.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  const cResult = projectId(568).c(29);
  projectId = projectId.projectId;
  ({ thinking, compacting, activity, projectUsage, connLabel, connFailed, controlling, thinkingOpen, onToggleThinking } = projectId);
  closure_9();
  if (cResult[0] === activity) {
    if (cResult[1] === compacting) {
      if (cResult[2] === controlling) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] !== projectUsage) {
        let runesUsedLabelsResult = null;
        if (null != projectUsage) {
          runesUsedLabelsResult = tmp(17063).runesUsedLabels(projectUsage);
          const tmpResult = tmp(17063);
        }
        cResult[4] = projectUsage;
        cResult[5] = runesUsedLabelsResult;
      }
      let tmp10 = null != activity;
      if (tmp10) {
        tmp10 = "" !== activity.text;
      }
      if (!tmp10) {
        tmp10 = thinkingOpen;
      }
      if (cResult[6] !== projectId) {
        class A {
          constructor() {
            obj = closure_0(closure_2[12]);
            obj1 = { content: null, key: closure_0(closure_2[13]).VIBEGRATIONS_USAGE_SHEET_KEY };
            obj4 = { projectId };
            obj1.content = jsx(closure_1(closure_2[13]), obj4);
            showActionSheetResult = obj.showActionSheet(obj1);
            return;
          }
        }
        cResult[6] = projectId;
        cResult[7] = A;
      } else {
        class A {
          constructor() {
            obj = closure_0(closure_2[12]);
            obj1 = { content: null, key: closure_0(closure_2[13]).VIBEGRATIONS_USAGE_SHEET_KEY };
            obj4 = { projectId };
            obj1.content = jsx(closure_1(closure_2[13]), obj4);
            showActionSheetResult = obj.showActionSheet(obj1);
            return;
          }
        }
      }
      if (cResult[8] === tmp10) {
        class A {
          constructor() {
            obj = closure_0(closure_2[12]);
            obj1 = { content: null, key: closure_0(closure_2[13]).VIBEGRATIONS_USAGE_SHEET_KEY };
            obj4 = { projectId };
            obj1.content = jsx(closure_1(closure_2[13]), obj4);
            showActionSheetResult = obj.showActionSheet(obj1);
            return;
          }
        }
      }
      let tmp14Result = null;
      if (thinking) {
        class A {
          constructor() {
            obj = closure_0(closure_2[12]);
            obj1 = { content: null, key: closure_0(closure_2[13]).VIBEGRATIONS_USAGE_SHEET_KEY };
            obj4 = { projectId };
            obj1.content = jsx(closure_1(closure_2[13]), obj4);
            showActionSheetResult = obj.showActionSheet(obj1);
            return;
          }
        }
        let obj2 = { accessible: tmp10, accessibilityRole: null, accessibilityState: null, accessibilityLabel: null, accessibilityHint: null, hitSlop: 8, disabled: null, onPress: null, children: null };
        if (tmp10) {
          class A {
            constructor() {
              obj = closure_0(closure_2[12]);
              obj1 = { content: null, key: closure_0(closure_2[13]).VIBEGRATIONS_USAGE_SHEET_KEY };
              obj4 = { projectId };
              obj1.content = jsx(closure_1(closure_2[13]), obj4);
              showActionSheetResult = obj.showActionSheet(obj1);
              return;
            }
          }
        }
        obj2.accessibilityRole = undefined;
        let tmp16;
        if (tmp10) {
          class A {
            constructor() {
              obj = closure_0(closure_2[12]);
              obj1 = { content: null, key: closure_0(closure_2[13]).VIBEGRATIONS_USAGE_SHEET_KEY };
              obj4 = { projectId };
              obj1.content = jsx(closure_1(closure_2[13]), obj4);
              showActionSheetResult = obj.showActionSheet(obj1);
              return;
            }
          }
          tmp17[0] = thinkingOpen;
          tmp16 = tmp17;
        }
        obj2.accessibilityState = tmp16;
        if (tmp10) {
          class A {
            constructor() {
              obj = closure_0(closure_2[12]);
              obj1 = { content: null, key: closure_0(closure_2[13]).VIBEGRATIONS_USAGE_SHEET_KEY };
              obj4 = { projectId };
              obj1.content = jsx(closure_1(closure_2[13]), obj4);
              showActionSheetResult = obj.showActionSheet(obj1);
              return;
            }
          }
        }
        obj2.accessibilityLabel = undefined;
        let stringResult;
        if (tmp10) {
          class A {
            constructor() {
              obj = closure_0(closure_2[12]);
              obj1 = { content: null, key: closure_0(closure_2[13]).VIBEGRATIONS_USAGE_SHEET_KEY };
              obj4 = { projectId };
              obj1.content = jsx(closure_1(closure_2[13]), obj4);
              showActionSheetResult = obj.showActionSheet(obj1);
              return;
            }
          }
          stringResult = obj5.string(_modDef3714["0PGVTy"]);
        }
        obj2.accessibilityHint = stringResult;
        obj2.disabled = !tmp10;
        obj2.onPress = onToggleThinking;
        const obj3 = { line: tmp5 };
        obj2.children = tmp14(closure_10, obj3);
        tmp14Result = tmp14(tmp(5373).PressableOpacity, obj2);
      }
      cResult[8] = tmp10;
      cResult[9] = tmp5;
      cResult[10] = onToggleThinking;
      cResult[11] = thinking;
      cResult[12] = thinkingOpen;
      cResult[13] = tmp14Result;
    }
  }
  const obj = projectId(568);
  const thinkingLineResult = projectId(17063).thinkingLine({ activity, compacting, controlling });
  cResult[0] = activity;
  cResult[1] = compacting;
  cResult[2] = controlling;
  cResult[3] = thinkingLineResult;
  tmp5 = thinkingLineResult;
}) : ((projectId) => {
  projectId = projectId.projectId;
  ({ activity, projectUsage, connLabel, thinkingOpen } = projectId);
  ({ thinking, compacting, connFailed, controlling, onToggleThinking } = projectId);
  const tmp = closure_9();
  const thinkingLineResult = projectId(17063).thinkingLine({ activity, compacting, controlling });
  let runesUsedLabelsResult = null;
  if (null != projectUsage) {
    runesUsedLabelsResult = tmp2(17063).runesUsedLabels(projectUsage);
    const tmp2Result = tmp2(17063);
  }
  let tmp6 = null != activity;
  if (tmp6) {
    tmp6 = "" !== activity.text;
  }
  if (!tmp6) {
    tmp6 = thinkingOpen;
  }
  const items = [projectId];
  let obj2 = { style: tmp.row, children: null };
  const obj3 = { style: tmp.activity, accessibilityRole: "none", accessibilityLiveRegion: "polite", children: null };
  let tmp10Result = null;
  const callback = noop.useCallback(() => {
    const obj2 = { content: React5(VibegrationsUsageSheetDefault, { projectId }), key: VibegrationsUsageSheet.VIBEGRATIONS_USAGE_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items);
  if (thinking) {
    const obj4 = { accessible: tmp6, accessibilityRole: null, accessibilityState: null, accessibilityLabel: null, accessibilityHint: null, hitSlop: 8, disabled: null, onPress: null, children: null };
    let str2;
    if (tmp6) {
      str2 = "button";
    }
    obj4.accessibilityRole = str2;
    let tmp12;
    if (tmp6) {
      const obj5 = { expanded: thinkingOpen };
      tmp12 = obj5;
    }
    obj4.accessibilityState = tmp12;
    let tmp13;
    if (tmp6) {
      tmp13 = thinkingLineResult;
    }
    obj4.accessibilityLabel = tmp13;
    let stringResult;
    if (tmp6) {
      const intl = tmp2(1119).intl;
      stringResult = intl.string(_modDef3714["0PGVTy"]);
    }
    obj4.accessibilityHint = stringResult;
    obj4.disabled = !tmp6;
    obj4.onPress = onToggleThinking;
    const obj6 = { line: thinkingLineResult };
    obj4.children = tmp10(closure_10, obj6);
    tmp10Result = tmp10(tmp2(5373).PressableOpacity, obj4);
  }
  obj3.children = tmp10Result;
  const items1 = [closure_7(View, obj3), , ];
  let tmp10Result2 = null;
  if (null != connLabel) {
    let str3 = "text-muted";
    if (connFailed) {
      str3 = "text-feedback-critical";
    }
    const obj7 = { variant: "text-xs/medium", color: str3, children: connLabel };
    tmp10Result2 = tmp10(tmp2(4786).Text, obj7);
  }
  items1[1] = tmp10Result2;
  let tmp8Result = null;
  if (null != runesUsedLabelsResult) {
    const obj8 = { accessibilityRole: "button", accessibilityLabel: runesUsedLabelsResult.aria, hitSlop: 8, style: tmp.runes, onPress: callback, children: null };
    const obj9 = { variant: "text-xs/medium", color: "text-muted", children: runesUsedLabelsResult.text };
    const items2 = [tmp10(tmp2(4786).Text, obj9), ];
    const obj10 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
    items2[1] = tmp10(tmp2(4744).CircleInformationIcon, obj10);
    obj8.children = items2;
    tmp8Result = tmp8(tmp2(5373).PressableOpacity, obj8);
  }
  items1[2] = tmp8Result;
  obj2.children = items1;
  return closure_8(View, obj2);
});
