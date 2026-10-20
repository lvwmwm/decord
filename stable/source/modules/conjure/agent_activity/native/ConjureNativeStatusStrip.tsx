// Module ID: 17322
// Function ID: 17323
// Name: ConjureNativeStatusStrip
// Dependencies: [32, 19, 17, 13234, 14232, 21, 5092, 587, 558, 576, 17193, 14231, 14235, 504, 1126, 5056, 17323, 6185, 3849, 17324, 5088, 5046, 2]

// Module 17322 (ConjureNativeStatusStrip)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _modDef3849 from "module_3849" /* 3849 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5056 */;
import AILoaderConstants from "AILoaderConstants" /* 14232 */;
import ConjureStatusLabels from "ConjureStatusLabels" /* 17193 */;
import ConjureUsageSheet from "ConjureUsageSheet" /* 17323 */;
import ConjureNativeTurnTimerDefault from "ConjureNativeTurnTimer" /* 17324 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 13234 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ConjureUsageSheetDefault = ConjureUsageSheet;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const AI_LOADER_CYCLE_MS = AILoaderConstants.AI_LOADER_CYCLE_MS;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, activity: obj3, live: { flexShrink: 1 }, indicator: obj4, label: { flexShrink: 1 }, runes: obj5 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_4, minHeight: nativeDefault.space.PX_4 + nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_16 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, alignSelf: "flex-start" };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function ThinkingIndicator(line) {
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
  let obj = line(text[9]);
  const cResult = obj.c(22);
  line = line.line;
  const rotating = line.rotating;
  let immediate = line.immediate;
  const tmp4 = closure_10();
  [text, tmp7] = react.useState(line);
  _slicedToArray = tmp7;
  if (!immediate) {
    const tmpResult = tmp(text[10]);
    immediate = tmpResult.isPublishLineSwitch(line, text);
  }
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
    class A {
      constructor() {
        closure_5.current = closure_2;
        return;
      }
    }
    const items3 = [];
    cResult[9] = tmp22;
    cResult[10] = items3;
    tmp21 = items3;
    tmp20 = tmp22;
  } else {
    class A {
      constructor() {
        closure_5.current = closure_2;
        return;
      }
    }
    tmp21 = cResult[10];
  }
  const effect3 = obj2.useEffect(tmp20, tmp21);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        closure_5.current = closure_2;
        return;
      }
    }
    cResult[11] = closure_8(tmp(text[11]).AILoader, { size: 10, color: "text-subtle" });
    const tmp25 = closure_8(tmp(text[11]).AILoader, { size: 10, color: "text-subtle" });
  } else {
    class A {
      constructor() {
        closure_5.current = closure_2;
        return;
      }
    }
  }
  if (rotating) {
    class A {
      constructor() {
        closure_5.current = closure_2;
        return;
      }
    }
  }
  if (cResult[12] !== text) {
    class A {
      constructor() {
        closure_5.current = closure_2;
        return;
      }
    }
    const obj3 = { ref, text, variant: "text-xs/medium", color: "text-subtle", duration: tmp(text[10]).INDICATOR_PASS_MS, delay: null };
    const AIShimmer = tmp(tmp2[12]).AIShimmer;
    cResult[12] = text;
    cResult[13] = closure_8(AIShimmer, obj3);
    const tmp27 = closure_8(AIShimmer, obj3);
  } else {
    class A {
      constructor() {
        closure_5.current = closure_2;
        return;
      }
    }
  }
  if (cResult[14] === rotating) {
    class A {
      constructor() {
        closure_5.current = closure_2;
        return;
      }
    }
  }
  const obj4 = { style: tmp4.label, accessibilityElementsHidden: rotating, importantForAccessibility: "auto", children: tmp26 };
  cResult[14] = rotating;
  cResult[15] = tmp4.label;
  cResult[16] = "auto";
  cResult[17] = tmp26;
  cResult[18] = closure_8(ref2, obj4);
  closure_8(ref2, obj4);
}) : (function ThinkingIndicator(line) {
  let AIShimmer;
  let closure_3;
  let first;
  let items3;
  let obj5;
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
  const tmp = closure_10();
  let obj = react;
  [text, tmp4] = react.useState(line);
  _slicedToArray = tmp4;
  if (!immediate) {
    const obj2 = line(text[10]);
    immediate = obj2.isPublishLineSwitch(line, text);
  }
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
        const obj = line(first[10]);
        const tmp8 = line;
        const tmp9 = first;
        if (obj.isRecallingLine(ref2.current)) {
          num = tmp7.current + 1;
        }
        ref.current = num;
        const tmp8Result = tmp8(tmp9[10]);
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
    }, line(first[10]).INDICATOR_PASS_STAGGER_MS);
    return () => {
      clearTimeout(closure_2);
      if (null != closure_0) {
        const _clearInterval = clearInterval;
        clearInterval(closure_0);
      }
    };
  }, []);
  const obj3 = { style: tmp.indicator, children: items3 };
  items3 = [closure_8(line(text[11]).AILoader, { size: 10, color: "text-subtle" }), ];
  const obj4 = { style: tmp.label, accessibilityElementsHidden: rotating, importantForAccessibility: str, children: closure_8(AIShimmer, obj5) };
  str = "auto";
  const tmp13 = closure_9;
  if (rotating) {
    str = "no-hide-descendants";
  }
  obj5 = { ref, text, variant: "text-xs/medium", color: "text-subtle", duration: line(text[10]).INDICATOR_PASS_MS, delay: null };
  AIShimmer = tmp16(tmp17[12]).AIShimmer;
  items3[1] = closure_8(ref2, obj4);
  return tmp13(ref2, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeStatusStrip(projectId) {
  let activity;
  let compacting;
  let connFailed;
  let connLabel;
  let controlling;
  let first;
  let obj3;
  let onToggleThinking;
  let projectUsage;
  let recalling;
  let saving;
  let stringResult;
  let thinking;
  let thinkingOpen;
  let tmp10;
  let tmp26Result;
  let tmp29;
  let tmp9;
  let turnStartedAt;
  let tmp = projectId;
  let obj = projectId(576);
  const cResult = obj.c(47);
  projectId = projectId.projectId;
  ({ thinking, turnStartedAt, compacting, saving, recalling, activity, projectUsage, connLabel, connFailed, controlling, thinkingOpen, onToggleThinking } = projectId);
  closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjurePublishStatusStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function s() {
      const publishStatus = ConjurePublishStatusStore.getPublishStatus(projectId);
      let publishing;
      if (publishStatus != null) {
        publishing = publishStatus.publishing;
      }
      return true === publishing;
    };
    const items1 = [projectId];
    cResult[1] = projectId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp10 = items1;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp9, tmp10);
  if (cResult[4] === activity) {
    if (cResult[5] === compacting) {
      if (cResult[6] === controlling) {
        if (cResult[7] === stateFromStores) {
          if (cResult[8] === (undefined !== recalling && recalling)) {
            let tmp12;
            let tmp13;
            if (cResult[9] === (undefined !== saving && saving)) {
              tmp12 = cResult[10];
              tmp13 = cResult[11];
            }
            const first1 = tmp(17193).RECALLING_LINES[0];
            if (cResult[12] !== projectUsage) {
              let runesUsedLabelsResult = null;
              if (null != projectUsage) {
                const tmpResult3 = tmp(17193);
                runesUsedLabelsResult = tmpResult3.runesUsedLabels(projectUsage);
              }
              cResult[12] = projectUsage;
              cResult[13] = runesUsedLabelsResult;
            }
            let tmp20 = null != activity && "" !== activity.text;
            let tmp21 = thinking;
            if (tmp21) {
              if (!tmp20) {
                tmp20 = thinkingOpen;
              }
              tmp21 = tmp20;
            }
            if (cResult[14] !== projectId) {
              class G {
                constructor() {
                  let obj2;
                  const tmp = ActionSheetActionCreators;
                  const showActionSheet = tmp.showActionSheet;
                  const obj = { content: metroImportAll(ConjureUsageSheetDefault, obj2), key: ConjureUsageSheet.CONJURE_USAGE_SHEET_KEY };
                  obj2 = { projectId };
                  showActionSheet(obj);
                }
              }
              cResult[14] = projectId;
              cResult[15] = G;
            } else {
              class G {
                constructor() {
                  let obj2;
                  const tmp = ActionSheetActionCreators;
                  const showActionSheet = tmp.showActionSheet;
                  const obj = { content: metroImportAll(ConjureUsageSheetDefault, obj2), key: ConjureUsageSheet.CONJURE_USAGE_SHEET_KEY };
                  obj2 = { projectId };
                  showActionSheet(obj);
                }
              }
            }
            if (cResult[16] === tmp21) {
              class G {
                constructor() {
                  let obj2;
                  const tmp = ActionSheetActionCreators;
                  const showActionSheet = tmp.showActionSheet;
                  const obj = { content: metroImportAll(ConjureUsageSheetDefault, obj2), key: ConjureUsageSheet.CONJURE_USAGE_SHEET_KEY };
                  obj2 = { projectId };
                  showActionSheet(obj);
                }
              }
            }
            if (!thinking) {
              class G {
                constructor() {
                  let obj2;
                  const tmp = ActionSheetActionCreators;
                  const showActionSheet = tmp.showActionSheet;
                  const obj = { content: metroImportAll(ConjureUsageSheetDefault, obj2), key: ConjureUsageSheet.CONJURE_USAGE_SHEET_KEY };
                  obj2 = { projectId };
                  showActionSheet(obj);
                }
              }
              cResult[16] = tmp21;
              cResult[17] = tmp13;
              cResult[18] = onToggleThinking;
              cResult[19] = undefined !== recalling && recalling;
              cResult[20] = tmp12 === first1;
              cResult[21] = undefined !== saving && saving;
              cResult[22] = thinking;
              cResult[23] = thinkingOpen;
              cResult[24] = tmp26Result;
            }
            const PressableOpacity = tmp(6185).PressableOpacity;
            if (!tmp21) {
              class G {
                constructor() {
                  let obj2;
                  const tmp = ActionSheetActionCreators;
                  const showActionSheet = tmp.showActionSheet;
                  const obj = { content: metroImportAll(ConjureUsageSheetDefault, obj2), key: ConjureUsageSheet.CONJURE_USAGE_SHEET_KEY };
                  obj2 = { projectId };
                  showActionSheet(obj);
                }
              }
            }
            let obj2 = { accessible: tmp27, accessibilityRole: undefined, accessibilityState: tmp29, accessibilityLabel: tmp31, accessibilityHint: stringResult, hitSlop: 8, disabled: !tmp21, onPress: onToggleThinking, children: closure_8(closure_11, obj3) };
            if (tmp21) {
              class G {
                constructor() {
                  let obj2;
                  const tmp = ActionSheetActionCreators;
                  const showActionSheet = tmp.showActionSheet;
                  const obj = { content: metroImportAll(ConjureUsageSheetDefault, obj2), key: ConjureUsageSheet.CONJURE_USAGE_SHEET_KEY };
                  obj2 = { projectId };
                  showActionSheet(obj);
                }
              }
            }
            tmp29 = undefined;
            if (tmp21) {
              class G {
                constructor() {
                  let obj2;
                  const tmp = ActionSheetActionCreators;
                  const showActionSheet = tmp.showActionSheet;
                  const obj = { content: metroImportAll(ConjureUsageSheetDefault, obj2), key: ConjureUsageSheet.CONJURE_USAGE_SHEET_KEY };
                  obj2 = { projectId };
                  showActionSheet(obj);
                }
              }
              tmp30[0] = thinkingOpen;
              tmp29 = tmp30;
            }
            if (tmp21) {
              class G {
                constructor() {
                  let obj2;
                  const tmp = ActionSheetActionCreators;
                  const showActionSheet = tmp.showActionSheet;
                  const obj = { content: metroImportAll(ConjureUsageSheetDefault, obj2), key: ConjureUsageSheet.CONJURE_USAGE_SHEET_KEY };
                  obj2 = { projectId };
                  showActionSheet(obj);
                }
              }
            } else {
              class G {
                constructor() {
                  let obj2;
                  const tmp = ActionSheetActionCreators;
                  const showActionSheet = tmp.showActionSheet;
                  const obj = { content: metroImportAll(ConjureUsageSheetDefault, obj2), key: ConjureUsageSheet.CONJURE_USAGE_SHEET_KEY };
                  obj2 = { projectId };
                  showActionSheet(obj);
                }
              }
            }
            stringResult = undefined;
            if (tmp21) {
              class G {
                constructor() {
                  let obj2;
                  const tmp = ActionSheetActionCreators;
                  const showActionSheet = tmp.showActionSheet;
                  const obj = { content: metroImportAll(ConjureUsageSheetDefault, obj2), key: ConjureUsageSheet.CONJURE_USAGE_SHEET_KEY };
                  obj2 = { projectId };
                  showActionSheet(obj);
                }
              }
              stringResult = obj6.string(_modDef3849["0Kemnh"]);
            }
            obj3 = { line: tmp13, rotating: tmp12 === first1, immediate: undefined !== saving && saving };
            tmp26Result = closure_8(PressableOpacity, obj2);
          }
        }
      }
    }
  }
  const tmpResult4 = tmp(17193);
  const thinkingLabelResult = tmpResult4.thinkingLabel({ activity, compacting, saving: undefined !== saving && saving, recalling: undefined !== recalling && recalling, controlling, publishPending: stateFromStores });
  const intl = tmp(1126).intl;
  const stringResult1 = intl.string(thinkingLabelResult);
  cResult[4] = activity;
  cResult[5] = compacting;
  cResult[6] = controlling;
  cResult[7] = stateFromStores;
  cResult[8] = undefined !== recalling && recalling;
  cResult[9] = undefined !== saving && saving;
  cResult[10] = thinkingLabelResult;
  cResult[11] = stringResult1;
  tmp13 = stringResult1;
  tmp12 = thinkingLabelResult;
}) : (function ConjureNativeStatusStrip(projectId) {
  let activity;
  let connFailed;
  let connLabel;
  let controlling;
  let items4;
  let onToggleThinking;
  let projectUsage;
  let saving;
  let str2;
  let stringResult1;
  let thinking;
  let thinkingOpen;
  let tmp18;
  let tmp19;
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
  let tmp = closure_10();
  let obj = projectId(504);
  const items = [ConjurePublishStatusStore];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(projectId);
    let publishing;
    if (publishStatus != null) {
      publishing = publishStatus.publishing;
    }
    return true === publishing;
  }, items1);
  let obj2 = projectId(17193);
  const thinkingLabelResult = obj2.thinkingLabel({ activity, compacting, saving, recalling: flag, controlling, publishPending: stateFromStores });
  const intl = projectId(1126).intl;
  const stringResult = intl.string(thinkingLabelResult);
  let runesUsedLabelsResult = null;
  const first = projectId(17193).RECALLING_LINES[0];
  if (null != projectUsage) {
    const tmp2Result = projectId(17193);
    runesUsedLabelsResult = tmp2Result.runesUsedLabels(projectUsage);
  }
  let tmp9 = null != activity && "" !== activity.text;
  let tmp10 = thinking;
  if (tmp10) {
    if (!tmp9) {
      tmp9 = thinkingOpen;
    }
    tmp10 = tmp9;
  }
  [][0] = projectId;
  const obj3 = { style: tmp.row, children: null };
  const obj4 = { style: tmp.activity, children: null };
  const obj5 = { style: tmp.live, accessibilityRole: "none", accessibilityLiveRegion: "polite", children: null };
  if (!thinking) {
    let tmp14Result4;
    if (!flag) {
      tmp14Result4 = null;
    }
    obj5.children = tmp14Result4;
    const items2 = [closure_8(View, obj5), ];
    let tmp14Result = null;
    if (thinking) {
      tmp14Result = null;
      if (null != turnStartedAt) {
        const obj6 = { startedAt: turnStartedAt, variant: "text-xs/medium" };
        tmp14Result = tmp14(ConjureNativeTurnTimerDefault, obj6);
      }
    }
    items2[1] = tmp14Result;
    obj4.children = items2;
    const items3 = [closure_9(View, obj4), , ];
    let tmp14Result3 = null;
    if (null != connLabel) {
      let str3 = "text-muted";
      const Text = tmp2(5088).Text;
      if (connFailed) {
        str3 = "text-feedback-critical";
      }
      const obj7 = { variant: "text-xs/medium", color: str3, children: connLabel };
      tmp14Result3 = tmp14(Text, obj7);
    }
    items3[1] = tmp14Result3;
    let tmp12Result = null;
    if (null != runesUsedLabelsResult) {
      const obj8 = { accessibilityRole: "button", accessibilityLabel: runesUsedLabelsResult.aria, hitSlop: 8, style: tmp.runes, onPress: tmp11, children: items4 };
      const PressableOpacity2 = tmp2(6185).PressableOpacity;
      const obj9 = { variant: "text-xs/medium", color: "text-muted", children: runesUsedLabelsResult.text };
      items4 = [closure_8(projectId(5088).Text, obj9), ];
      const obj10 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
      const CircleInformationIcon = tmp2(5046).CircleInformationIcon;
      items4[1] = closure_8(CircleInformationIcon, obj10);
      tmp12Result = tmp12(PressableOpacity2, obj8);
    }
    items3[2] = tmp12Result;
    obj3.children = items3;
    return closure_9(View, obj3);
  }
  let tmp17 = tmp10;
  const PressableOpacity = tmp2(6185).PressableOpacity;
  if (!tmp10) {
    tmp17 = tmp16;
  }
  const obj11 = { accessible: tmp17, accessibilityRole: str2, accessibilityState: tmp18, accessibilityLabel: tmp19, accessibilityHint: stringResult1, hitSlop: 8, disabled: !tmp10, onPress: onToggleThinking, children: closure_8(closure_11, { line: stringResult, rotating: thinkingLabelResult === first, immediate: saving }) };
  str2 = undefined;
  if (tmp10) {
    str2 = "button";
  }
  tmp18 = undefined;
  if (tmp10) {
    tmp18 = { expanded: thinkingOpen };
    const obj12 = { expanded: thinkingOpen };
  }
  if (tmp10) {
    tmp19 = stringResult;
  }
  stringResult1 = undefined;
  if (tmp10) {
    const intl2 = tmp2(1126).intl;
    stringResult1 = intl2.string(_modDef3849["0Kemnh"]);
  }
  tmp14Result4 = tmp14(PressableOpacity, obj11);
});
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureNativeStatusStrip.tsx");

export default tmp4;
