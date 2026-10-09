// Module ID: 17198
// Function ID: 17199
// Name: ConjureNativeStatusStrip
// Dependencies: [32, 19, 17, 14149, 21, 5091, 587, 558, 576, 17192, 14148, 14152, 1126, 5055, 17199, 6191, 3827, 17200, 5087, 5013, 2]

// Module 17198 (ConjureNativeStatusStrip)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _modDef3827 from "module_3827" /* 3827 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5055 */;
import AILoaderConstants from "AILoaderConstants" /* 14149 */;
import ConjureStatusLabels from "ConjureStatusLabels" /* 17192 */;
import ConjureUsageSheet from "ConjureUsageSheet" /* 17199 */;
import ConjureNativeTurnTimerDefault from "ConjureNativeTurnTimer" /* 17200 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj1, showActionSheet, showActionSheetResult;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const AI_LOADER_CYCLE_MS = AILoaderConstants.AI_LOADER_CYCLE_MS;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, activity: obj3, live: { flexShrink: 1 }, indicator: obj4, label: { flexShrink: 1 }, runes: obj5 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_4, minHeight: nativeDefault.space.PX_4 + nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_16 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, alignSelf: "flex-start" };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ThinkingIndicator(line) {
  let closure_3;
  let first;
  let text;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp20;
  let tmp21;
  let tmp7;
  const tmp = line;
  let obj = line(text[8]);
  const cResult = obj.c(22);
  line = line.line;
  const rotating = line.rotating;
  let immediate = line.immediate;
  const tmp4 = closure_9();
  [text, tmp7] = react.useState(line);
  _slicedToArray = tmp7;
  if (immediate) {
    immediate = text !== line;
  }
  if (immediate) {
    tmp7(line);
  }
  react = obj2.useRef(line);
  const ref2 = obj2.useRef(text);
  const ref = obj2.useRef(null);
  if (cResult[0] !== line) {
    class I {
      constructor() {
        closure_4.current = line;
        return;
      }
    }
    const items = [line];
    let num = 0;
    cResult[0] = line;
    cResult[1] = I;
    cResult[2] = items;
    tmp11 = items;
    tmp10 = I;
  } else {
    class I {
      constructor() {
        closure_4.current = line;
        return;
      }
    }
    tmp11 = cResult[2];
  }
  const effect = obj2.useEffect(tmp10, tmp11);
  if (cResult[3] !== text) {
    class A {
      constructor() {
        closure_5.current = closure_2;
        return;
      }
    }
    const items1 = [text];
    cResult[3] = text;
    cResult[4] = A;
    cResult[5] = items1;
    tmp14 = items1;
    tmp13 = A;
  } else {
    class A {
      constructor() {
        closure_5.current = closure_2;
        return;
      }
    }
    tmp14 = cResult[5];
  }
  const effect1 = obj2.useEffect(tmp13, tmp14);
  let closure_7 = obj2.useRef(rotating);
  let closure_8 = obj2.useRef(0);
  if (cResult[6] !== rotating) {
    class A {
      constructor() {
        closure_5.current = closure_2;
        return;
      }
    }
    const items2 = [rotating];
    cResult[6] = rotating;
    cResult[7] = tmp18;
    cResult[8] = items2;
    tmp17 = items2;
    tmp16 = tmp18;
  } else {
    class A {
      constructor() {
        closure_5.current = closure_2;
        return;
      }
    }
    tmp17 = cResult[8];
  }
  const effect2 = obj2.useEffect(tmp16, tmp17);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        closure_0 = null;
        beat = function beat() { /* body not rendered: F148600 */ };
        closure_2 = setTimeout(() => { /* body not rendered: F148601 */ }, line(closure_2[9]).INDICATOR_PASS_STAGGER_MS);
        return () => { /* body not rendered: F148602 */ };
      }
    }
    const items3 = [];
    cResult[9] = N;
    cResult[10] = items3;
    tmp21 = items3;
    tmp20 = N;
  } else {
    class N {
      constructor() {
        closure_0 = null;
        beat = function beat() { /* body not rendered: F148600 */ };
        closure_2 = setTimeout(() => { /* body not rendered: F148601 */ }, line(closure_2[9]).INDICATOR_PASS_STAGGER_MS);
        return () => { /* body not rendered: F148602 */ };
      }
    }
    tmp21 = cResult[10];
  }
  const effect3 = obj2.useEffect(tmp20, tmp21);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        closure_0 = null;
        beat = function beat() { /* body not rendered: F148600 */ };
        closure_2 = setTimeout(() => { /* body not rendered: F148601 */ }, line(closure_2[9]).INDICATOR_PASS_STAGGER_MS);
        return () => { /* body not rendered: F148602 */ };
      }
    }
    cResult[11] = closure_7(tmp(text[10]).AILoader, { size: 10, color: "text-subtle" });
    const tmp24 = closure_7(tmp(text[10]).AILoader, { size: 10, color: "text-subtle" });
  } else {
    class N {
      constructor() {
        closure_0 = null;
        beat = function beat() { /* body not rendered: F148600 */ };
        closure_2 = setTimeout(() => { /* body not rendered: F148601 */ }, line(closure_2[9]).INDICATOR_PASS_STAGGER_MS);
        return () => { /* body not rendered: F148602 */ };
      }
    }
  }
  if (rotating) {
    class N {
      constructor() {
        closure_0 = null;
        beat = function beat() { /* body not rendered: F148600 */ };
        closure_2 = setTimeout(() => { /* body not rendered: F148601 */ }, line(closure_2[9]).INDICATOR_PASS_STAGGER_MS);
        return () => { /* body not rendered: F148602 */ };
      }
    }
  }
  if (cResult[12] !== text) {
    class N {
      constructor() {
        closure_0 = null;
        beat = function beat() { /* body not rendered: F148600 */ };
        closure_2 = setTimeout(() => { /* body not rendered: F148601 */ }, line(closure_2[9]).INDICATOR_PASS_STAGGER_MS);
        return () => { /* body not rendered: F148602 */ };
      }
    }
    const obj3 = { ref, text, variant: "text-xs/medium", color: "text-subtle", duration: tmp(text[9]).INDICATOR_PASS_MS, delay: null };
    const AIShimmer = tmp(tmp2[11]).AIShimmer;
    cResult[12] = text;
    cResult[13] = closure_7(AIShimmer, obj3);
    const tmp26 = closure_7(AIShimmer, obj3);
  } else {
    class N {
      constructor() {
        closure_0 = null;
        beat = function beat() { /* body not rendered: F148600 */ };
        closure_2 = setTimeout(() => { /* body not rendered: F148601 */ }, line(closure_2[9]).INDICATOR_PASS_STAGGER_MS);
        return () => { /* body not rendered: F148602 */ };
      }
    }
  }
  if (cResult[14] === rotating) {
    class N {
      constructor() {
        closure_0 = null;
        beat = function beat() { /* body not rendered: F148600 */ };
        closure_2 = setTimeout(() => { /* body not rendered: F148601 */ }, line(closure_2[9]).INDICATOR_PASS_STAGGER_MS);
        return () => { /* body not rendered: F148602 */ };
      }
    }
  }
  const obj4 = { style: tmp4.label, accessibilityElementsHidden: rotating, importantForAccessibility: "auto", children: tmp25 };
  cResult[14] = rotating;
  cResult[15] = tmp4.label;
  cResult[16] = "auto";
  cResult[17] = tmp25;
  cResult[18] = closure_7(ref2, obj4);
  closure_7(ref2, obj4);
}) : (function ThinkingIndicator(line) {
  let AIShimmer;
  let closure_3;
  let first;
  let items3;
  let obj4;
  let str;
  let text;
  let tmp4;
  line = line.line;
  const rotating = line.rotating;
  let immediate = line.immediate;
  text = undefined;
  react = undefined;
  let ref2;
  let ref;
  let closure_7;
  let closure_8;
  const tmp = closure_9();
  let obj = react;
  [text, tmp4] = react.useState(line);
  _slicedToArray = tmp4;
  if (immediate) {
    immediate = text !== line;
  }
  if (immediate) {
    tmp4(line);
  }
  react = obj.useRef(line);
  ref2 = obj.useRef(text);
  ref = obj.useRef(null);
  const items = [line];
  const effect = obj.useEffect(() => {
    ref.current = line;
  }, items);
  const items1 = [text];
  const effect1 = obj.useEffect(() => {
    ref2.current = current;
  }, items1);
  closure_7 = obj.useRef(rotating);
  closure_8 = obj.useRef(0);
  const items2 = [rotating];
  const effect2 = obj.useEffect(() => {
    closure_7.current = rotating;
    let isRecallingLineResult = !rotating;
    if (isRecallingLineResult) {
      const obj = ConjureStatusLabels;
      isRecallingLineResult = obj.isRecallingLine(ref2.current);
    }
    if (isRecallingLineResult) {
      closure_3(ref.current);
    }
  }, items2);
  const effect3 = obj.useEffect(() => {
    let closure_2;
    let ref3;
    let ref4;
    function beat() {
      if (ref4.current) {
        let num = 0;
        const obj = line(first[9]);
        const tmp8 = line;
        const tmp9 = first;
        if (obj.isRecallingLine(ref2.current)) {
          num = tmp7.current + 1;
        }
        ref.current = num;
        const tmp8Result = tmp8(tmp9[9]);
        closure_1_3(tmp8Result.recallingLine(ref.current));
      } else if (ref.current !== ref2.current) {
        closure_1_3(tmp.current);
      } else {
        const current = ref3.current;
        if (current != null) {
          current.play();
        }
      }
    }
    let closure_0 = null;
    const timeout = setTimeout(() => {
      beat();
      const interval = setInterval(beat, AI_LOADER_CYCLE_MS);
    }, line(first[9]).INDICATOR_PASS_STAGGER_MS);
    return () => {
      clearTimeout(closure_2);
      if (null != closure_0) {
        const _clearInterval = clearInterval;
        clearInterval(closure_0);
      }
    };
  }, []);
  const obj2 = { style: tmp.indicator, children: items3 };
  items3 = [closure_7(line(text[10]).AILoader, { size: 10, color: "text-subtle" }), ];
  const obj3 = { style: tmp.label, accessibilityElementsHidden: rotating, importantForAccessibility: str, children: closure_7(AIShimmer, obj4) };
  str = "auto";
  const tmp11 = closure_8;
  if (rotating) {
    str = "no-hide-descendants";
  }
  obj4 = { ref, text, variant: "text-xs/medium", color: "text-subtle", duration: line(text[9]).INDICATOR_PASS_MS, delay: null };
  AIShimmer = tmp14(tmp15[11]).AIShimmer;
  items3[1] = closure_7(ref2, obj3);
  return tmp11(ref2, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeStatusStrip(projectId) {
  let activity;
  let compacting;
  let connFailed;
  let connLabel;
  let controlling;
  let obj3;
  let onToggleThinking;
  let projectUsage;
  let recalling;
  let saving;
  let stringResult;
  let thinking;
  let thinkingOpen;
  let tmp21Result;
  let tmp24;
  let turnStartedAt;
  let tmp = projectId;
  let obj = projectId(576);
  const cResult = obj.c(42);
  projectId = projectId.projectId;
  ({ thinking, turnStartedAt, compacting, saving, recalling, activity, projectUsage, connLabel, connFailed, controlling, thinkingOpen, onToggleThinking } = projectId);
  closure_9();
  if (cResult[0] === activity) {
    if (cResult[1] === compacting) {
      if (cResult[2] === controlling) {
        if (cResult[3] === (undefined !== recalling && recalling)) {
          let tmp7;
          let tmp8;
          if (cResult[4] === (undefined !== saving && saving)) {
            tmp7 = cResult[5];
            tmp8 = cResult[6];
          }
          const first = tmp(17192).RECALLING_LINES[0];
          if (cResult[7] !== projectUsage) {
            let runesUsedLabelsResult = null;
            if (null != projectUsage) {
              const tmpResult = tmp(17192);
              runesUsedLabelsResult = tmpResult.runesUsedLabels(projectUsage);
            }
            cResult[7] = projectUsage;
            cResult[8] = runesUsedLabelsResult;
          }
          let tmp15 = null != activity && "" !== activity.text;
          let tmp16 = thinking;
          if (tmp16) {
            if (!tmp15) {
              tmp15 = thinkingOpen;
            }
            tmp16 = tmp15;
          }
          if (cResult[9] !== projectId) {
            class X {
              constructor() {
                tmp = closure_0(closure_2[13]);
                obj = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                showActionSheet = tmp.showActionSheet;
                obj1 = { projectId };
                obj.content = jsx(closure_1(closure_2[14]), obj1);
                showActionSheetResult = showActionSheet(obj);
                return;
              }
            }
            cResult[9] = projectId;
            cResult[10] = X;
          } else {
            class X {
              constructor() {
                tmp = closure_0(closure_2[13]);
                obj = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                showActionSheet = tmp.showActionSheet;
                obj1 = { projectId };
                obj.content = jsx(closure_1(closure_2[14]), obj1);
                showActionSheetResult = showActionSheet(obj);
                return;
              }
            }
          }
          if (cResult[11] === tmp16) {
            class X {
              constructor() {
                tmp = closure_0(closure_2[13]);
                obj = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                showActionSheet = tmp.showActionSheet;
                obj1 = { projectId };
                obj.content = jsx(closure_1(closure_2[14]), obj1);
                showActionSheetResult = showActionSheet(obj);
                return;
              }
            }
          }
          if (!thinking) {
            class X {
              constructor() {
                tmp = closure_0(closure_2[13]);
                obj = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                showActionSheet = tmp.showActionSheet;
                obj1 = { projectId };
                obj.content = jsx(closure_1(closure_2[14]), obj1);
                showActionSheetResult = showActionSheet(obj);
                return;
              }
            }
            cResult[11] = tmp16;
            cResult[12] = tmp8;
            cResult[13] = onToggleThinking;
            cResult[14] = undefined !== recalling && recalling;
            cResult[15] = tmp7 === first;
            cResult[16] = undefined !== saving && saving;
            cResult[17] = thinking;
            cResult[18] = thinkingOpen;
            cResult[19] = tmp21Result;
          }
          const PressableOpacity = tmp(6191).PressableOpacity;
          if (!tmp16) {
            class X {
              constructor() {
                tmp = closure_0(closure_2[13]);
                obj = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                showActionSheet = tmp.showActionSheet;
                obj1 = { projectId };
                obj.content = jsx(closure_1(closure_2[14]), obj1);
                showActionSheetResult = showActionSheet(obj);
                return;
              }
            }
          }
          let obj2 = { accessible: tmp22, accessibilityRole: undefined, accessibilityState: tmp24, accessibilityLabel: tmp26, accessibilityHint: stringResult, hitSlop: 8, disabled: !tmp16, onPress: onToggleThinking, children: closure_7(closure_10, obj3) };
          if (tmp16) {
            class X {
              constructor() {
                tmp = closure_0(closure_2[13]);
                obj = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                showActionSheet = tmp.showActionSheet;
                obj1 = { projectId };
                obj.content = jsx(closure_1(closure_2[14]), obj1);
                showActionSheetResult = showActionSheet(obj);
                return;
              }
            }
          }
          tmp24 = undefined;
          if (tmp16) {
            class X {
              constructor() {
                tmp = closure_0(closure_2[13]);
                obj = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                showActionSheet = tmp.showActionSheet;
                obj1 = { projectId };
                obj.content = jsx(closure_1(closure_2[14]), obj1);
                showActionSheetResult = showActionSheet(obj);
                return;
              }
            }
            tmp25[0] = thinkingOpen;
            tmp24 = tmp25;
          }
          if (tmp16) {
            class X {
              constructor() {
                tmp = closure_0(closure_2[13]);
                obj = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                showActionSheet = tmp.showActionSheet;
                obj1 = { projectId };
                obj.content = jsx(closure_1(closure_2[14]), obj1);
                showActionSheetResult = showActionSheet(obj);
                return;
              }
            }
          } else {
            class X {
              constructor() {
                tmp = closure_0(closure_2[13]);
                obj = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                showActionSheet = tmp.showActionSheet;
                obj1 = { projectId };
                obj.content = jsx(closure_1(closure_2[14]), obj1);
                showActionSheetResult = showActionSheet(obj);
                return;
              }
            }
          }
          stringResult = undefined;
          if (tmp16) {
            class X {
              constructor() {
                tmp = closure_0(closure_2[13]);
                obj = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                showActionSheet = tmp.showActionSheet;
                obj1 = { projectId };
                obj.content = jsx(closure_1(closure_2[14]), obj1);
                showActionSheetResult = showActionSheet(obj);
                return;
              }
            }
            stringResult = obj5.string(_modDef3827["0Kemnh"]);
          }
          obj3 = { line: tmp8, rotating: tmp7 === first, immediate: undefined !== saving && saving };
          tmp21Result = closure_7(PressableOpacity, obj2);
        }
      }
    }
  }
  const tmpResult2 = tmp(17192);
  const thinkingLabelResult = tmpResult2.thinkingLabel({ activity, compacting, saving: undefined !== saving && saving, recalling: undefined !== recalling && recalling, controlling });
  const intl = tmp(1126).intl;
  const stringResult1 = intl.string(thinkingLabelResult);
  cResult[0] = activity;
  cResult[1] = compacting;
  cResult[2] = controlling;
  cResult[3] = undefined !== recalling && recalling;
  cResult[4] = undefined !== saving && saving;
  cResult[5] = thinkingLabelResult;
  cResult[6] = stringResult1;
  tmp8 = stringResult1;
  tmp7 = thinkingLabelResult;
}) : (function ConjureNativeStatusStrip(projectId) {
  let activity;
  let connFailed;
  let connLabel;
  let controlling;
  let items2;
  let onToggleThinking;
  let projectUsage;
  let saving;
  let str2;
  let stringResult1;
  let thinking;
  let thinkingOpen;
  let tmp17;
  let tmp18;
  let turnStartedAt;
  projectId = projectId.projectId;
  ({ thinking, turnStartedAt, saving } = projectId);
  const compacting = projectId.compacting;
  if (saving === undefined) {
    saving = false;
  }
  let flag = projectId.recalling;
  if (flag === undefined) {
    flag = false;
  }
  ({ activity, projectUsage, connLabel, thinkingOpen } = projectId);
  ({ connFailed, controlling, onToggleThinking } = projectId);
  let tmp = closure_9();
  let obj = projectId(17192);
  const thinkingLabelResult = obj.thinkingLabel({ activity, compacting, saving, recalling: flag, controlling });
  const intl = projectId(1126).intl;
  const stringResult = intl.string(thinkingLabelResult);
  let runesUsedLabelsResult = null;
  const first = projectId(17192).RECALLING_LINES[0];
  if (null != projectUsage) {
    const tmp2Result = projectId(17192);
    runesUsedLabelsResult = tmp2Result.runesUsedLabels(projectUsage);
  }
  let tmp8 = null != activity && "" !== activity.text;
  let tmp9 = thinking;
  if (tmp9) {
    if (!tmp8) {
      tmp8 = thinkingOpen;
    }
    tmp9 = tmp8;
  }
  [][0] = projectId;
  let obj2 = { style: tmp.row, children: null };
  const obj3 = { style: tmp.activity, children: null };
  const obj4 = { style: tmp.live, accessibilityRole: "none", accessibilityLiveRegion: "polite", children: null };
  if (!thinking) {
    let tmp13Result4;
    if (!flag) {
      tmp13Result4 = null;
    }
    obj4.children = tmp13Result4;
    const items = [closure_7(View, obj4), ];
    let tmp13Result = null;
    if (thinking) {
      tmp13Result = null;
      if (null != turnStartedAt) {
        const obj5 = { startedAt: turnStartedAt, variant: "text-xs/medium" };
        tmp13Result = tmp13(ConjureNativeTurnTimerDefault, obj5);
      }
    }
    items[1] = tmp13Result;
    obj3.children = items;
    const items1 = [closure_8(View, obj3), , ];
    let tmp13Result3 = null;
    if (null != connLabel) {
      let str3 = "text-muted";
      const Text = tmp2(5087).Text;
      if (connFailed) {
        str3 = "text-feedback-critical";
      }
      const obj6 = { variant: "text-xs/medium", color: str3, children: connLabel };
      tmp13Result3 = tmp13(Text, obj6);
    }
    items1[1] = tmp13Result3;
    let tmp11Result = null;
    if (null != runesUsedLabelsResult) {
      const obj7 = { accessibilityRole: "button", accessibilityLabel: runesUsedLabelsResult.aria, hitSlop: 8, style: tmp.runes, onPress: tmp10, children: items2 };
      const PressableOpacity2 = tmp2(6191).PressableOpacity;
      const obj8 = { variant: "text-xs/medium", color: "text-muted", children: runesUsedLabelsResult.text };
      items2 = [closure_7(projectId(5087).Text, obj8), ];
      const obj9 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
      const CircleInformationIcon = tmp2(5013).CircleInformationIcon;
      items2[1] = closure_7(CircleInformationIcon, obj9);
      tmp11Result = tmp11(PressableOpacity2, obj7);
    }
    items1[2] = tmp11Result;
    obj2.children = items1;
    return closure_8(View, obj2);
  }
  let tmp16 = tmp9;
  const PressableOpacity = tmp2(6191).PressableOpacity;
  if (!tmp9) {
    tmp16 = tmp15;
  }
  const obj10 = { accessible: tmp16, accessibilityRole: str2, accessibilityState: tmp17, accessibilityLabel: tmp18, accessibilityHint: stringResult1, hitSlop: 8, disabled: !tmp9, onPress: onToggleThinking, children: closure_7(closure_10, { line: stringResult, rotating: thinkingLabelResult === first, immediate: saving }) };
  str2 = undefined;
  if (tmp9) {
    str2 = "button";
  }
  tmp17 = undefined;
  if (tmp9) {
    tmp17 = { expanded: thinkingOpen };
    const obj11 = { expanded: thinkingOpen };
  }
  if (tmp9) {
    tmp18 = stringResult;
  }
  stringResult1 = undefined;
  if (tmp9) {
    const intl2 = tmp2(1126).intl;
    stringResult1 = intl2.string(_modDef3827["0Kemnh"]);
  }
  tmp13Result4 = tmp13(PressableOpacity, obj10);
});
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureNativeStatusStrip.tsx");

export default tmp4;
