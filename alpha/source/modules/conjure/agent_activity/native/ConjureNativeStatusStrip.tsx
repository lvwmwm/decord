// Module ID: 12746
// Function ID: 12747
// Name: ConjureNativeStatusStrip
// Dependencies: [32, 19, 17, 10847, 12063, 21, 5009, 575, 12568, 12062, 12747, 504, 1114, 5253, 12752, 12753, 6974, 3865, 12754, 5619, 5730, 2]
// Exports: default

// Module 12746 (ConjureNativeStatusStrip)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef3865 from "module_3865" /* 3865 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5253 */;
import AILoaderConstants from "AILoaderConstants" /* 12063 */;
import ConjureStatusLabels from "ConjureStatusLabels" /* 12568 */;
import ConjureUsageSheet from "ConjureUsageSheet" /* 12752 */;
import ConjureQueuedSheet from "ConjureQueuedSheet" /* 12753 */;
import ConjureNativeTurnTimerDefault from "ConjureNativeTurnTimer" /* 12754 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10847 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const ConjureUsageSheetDefault = ConjureUsageSheet;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
function ThinkingIndicator(line) {
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
    const obj2 = line(text[8]);
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
        const obj = line(first[8]);
        const tmp8 = line;
        const tmp9 = first;
        if (obj.isRecallingLine(ref2.current)) {
          num = tmp7.current + 1;
        }
        ref.current = num;
        const tmp8Result = tmp8(tmp9[8]);
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
    }, line(first[8]).INDICATOR_PASS_STAGGER_MS);
    return () => {
      clearTimeout(closure_2);
      if (null != closure_0) {
        const _clearInterval = clearInterval;
        clearInterval(closure_0);
      }
    };
  }, []);
  const obj3 = { style: tmp.indicator, children: items3 };
  items3 = [closure_8(line(text[9]).AILoader, { size: 10, color: "text-subtle" }), ];
  const obj4 = { style: tmp.label, accessibilityElementsHidden: rotating, importantForAccessibility: str, children: closure_8(AIShimmer, obj5) };
  str = "auto";
  const tmp13 = closure_9;
  if (rotating) {
    str = "no-hide-descendants";
  }
  obj5 = { ref, text, variant: "text-xs/medium", color: "text-subtle", duration: line(text[8]).INDICATOR_PASS_MS, delay: null };
  AIShimmer = tmp16(tmp17[10]).AIShimmer;
  items3[1] = closure_8(ref2, obj4);
  return tmp13(ref2, obj3);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const AI_LOADER_CYCLE_MS = AILoaderConstants.AI_LOADER_CYCLE_MS;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, activity: obj3, live: { flexShrink: 1 }, indicator: obj4, label: { flexShrink: 1 }, chip: obj5 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_4, minHeight: nativeDefault.space.PX_4 + nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_16 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, alignSelf: "flex-start" };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureNativeStatusStrip.tsx");

export default function ConjureNativeStatusStrip(projectId) {
  let Text2;
  let activity;
  let compacting;
  let connFailed;
  let connLabel;
  let controlling;
  let intl3;
  let items5;
  let obj10;
  let obj9;
  let onToggleThinking;
  let projectUsage;
  let queuedCount;
  let remixStartedAt;
  let saving;
  let str2;
  let stringResult1;
  let thinking;
  let thinkingOpen;
  let tmp23;
  let tmp24;
  let tmp9;
  let turnStartedAt;
  projectId = projectId.projectId;
  ({ thinking, remixStartedAt, saving } = projectId);
  ({ turnStartedAt, compacting } = projectId);
  if (saving === undefined) {
    saving = false;
  }
  let flag = projectId.recalling;
  if (flag === undefined) {
    flag = false;
  }
  ({ activity, projectUsage, connLabel, controlling, thinkingOpen, queuedCount, connFailed, onToggleThinking } = projectId);
  if (queuedCount === undefined) {
    queuedCount = 0;
  }
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
  if (remixStartedAt == null) {
    let tmp6;
    if (thinking) {
      tmp6 = turnStartedAt;
    }
    remixStartedAt = tmp6;
  }
  let obj2 = { activity, compacting, saving, remixing: tmp5, recalling: flag, controlling, publishPending: tmp9, publishing: stateFromStores };
  tmp9 = stateFromStores;
  const thinkingLabel = projectId(12568).thinkingLabel;
  projectId(12568);
  if (stateFromStores) {
    tmp9 = tmp7;
  }
  const thinkingLabelResult = thinkingLabel(obj2);
  const intl = tmp2(1114).intl;
  const stringResult = intl.string(thinkingLabelResult);
  let runesUsedLabelsResult = null;
  const first = tmp2(12568).RECALLING_LINES[0];
  if (null != projectUsage) {
    const tmp2Result2 = projectId(12568);
    runesUsedLabelsResult = tmp2Result2.runesUsedLabels(projectUsage);
  }
  let tmp14 = null != activity && "" !== activity.text;
  if (thinking) {
    if (!tmp14) {
      tmp14 = thinkingOpen;
    }
    thinking = tmp14;
  }
  const items2 = [projectId];
  [][0] = projectId;
  const callback = react.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: metroImportAll(ConjureUsageSheetDefault, obj2), key: ConjureUsageSheet.CONJURE_USAGE_SHEET_KEY };
    obj2 = { projectId };
    showActionSheet(obj);
  }, items2);
  const obj3 = { style: tmp.row, children: null };
  const obj4 = { style: tmp.activity, children: null };
  const obj5 = { style: tmp.live, accessibilityRole: "none", accessibilityLiveRegion: "polite", children: null };
  if (!(thinking || null != remixStartedAt || saving)) {
    if (!flag) {
      let tmp19Result6;
      if (!controlling) {
        tmp19Result6 = null;
      }
      obj5.children = tmp19Result6;
      const items3 = [closure_8(View, obj5), ];
      let tmp19Result = null;
      if (null != remixStartedAt) {
        const obj6 = { startedAt: remixStartedAt, variant: "text-xs/medium" };
        tmp19Result = tmp19(ConjureNativeTurnTimerDefault, obj6);
      }
      items3[1] = tmp19Result;
      obj4.children = items3;
      const items4 = [closure_9(View, obj4), , , ];
      let tmp19Result4 = null;
      if (null != connLabel) {
        let str3 = "text-muted";
        const Text = tmp2(5619).Text;
        if (connFailed) {
          str3 = "text-feedback-critical";
        }
        const obj7 = { variant: "text-xs/medium", color: str3, children: connLabel };
        tmp19Result4 = tmp19(Text, obj7);
      }
      items4[1] = tmp19Result4;
      let tmp19Result5 = null;
      if (queuedCount > 0) {
        const obj8 = { accessibilityRole: "button", hitSlop: 8, style: tmp.chip, onPress: tmp16, children: closure_8(Text2, obj9) };
        const PressableOpacity2 = tmp2(6974).PressableOpacity;
        obj9 = { variant: "text-xs/medium", color: "text-muted", children: intl3.formatToPlainString(_modDef3865.REnNUn, obj10) };
        Text2 = tmp2(5619).Text;
        intl3 = tmp2(1114).intl;
        obj10 = { count: queuedCount };
        tmp19Result5 = tmp19(PressableOpacity2, obj8);
      }
      items4[2] = tmp19Result5;
      let tmp17Result = null;
      if (null != runesUsedLabelsResult) {
        const obj11 = { accessibilityRole: "button", accessibilityLabel: runesUsedLabelsResult.aria, hitSlop: 8, style: tmp.chip, onPress: callback, children: items5 };
        const PressableOpacity3 = tmp2(6974).PressableOpacity;
        const obj12 = { variant: "text-xs/medium", color: "text-muted", children: runesUsedLabelsResult.text };
        items5 = [closure_8(projectId(5619).Text, obj12), ];
        const obj13 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
        const CircleInformationIcon = tmp2(5730).CircleInformationIcon;
        items5[1] = closure_8(CircleInformationIcon, obj13);
        tmp17Result = tmp17(PressableOpacity3, obj11);
      }
      items4[3] = tmp17Result;
      obj3.children = items4;
      return closure_9(View, obj3);
    }
  }
  let tmp22 = thinking;
  const PressableOpacity = tmp2(6974).PressableOpacity;
  if (!thinking) {
    tmp22 = tmp21;
  }
  const obj14 = { accessible: tmp22, accessibilityRole: str2, accessibilityState: tmp23, accessibilityLabel: tmp24, accessibilityHint: stringResult1, hitSlop: 8, disabled: !thinking, onPress: onToggleThinking, children: closure_8(ThinkingIndicator, { line: stringResult, rotating: thinkingLabelResult === first, immediate: saving }) };
  str2 = undefined;
  if (thinking) {
    str2 = "button";
  }
  tmp23 = undefined;
  if (thinking) {
    tmp23 = { expanded: thinkingOpen };
    const obj15 = { expanded: thinkingOpen };
  }
  if (thinking) {
    tmp24 = stringResult;
  }
  stringResult1 = undefined;
  if (thinking) {
    const intl2 = tmp2(1114).intl;
    stringResult1 = intl2.string(_modDef3865["0Kemnh"]);
  }
  tmp19Result6 = tmp19(PressableOpacity, obj14);
};
