// Module ID: 16399
// Function ID: 16400
// Name: VibegrationsNativeStatusStrip
// Dependencies: [32, 19, 17, 13936, 21, 4836, 576, 16393, 13935, 13939, 1115, 4800, 16400, 5435, 3715, 16401, 4832, 4787, 2]
// Exports: default

// Module 16399 (VibegrationsNativeStatusStrip)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import _modDef3715 from "module_3715" /* 3715 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4800 */;
import AILoaderConstants from "AILoaderConstants" /* 13936 */;
import VibegrationsStatusLabels from "VibegrationsStatusLabels" /* 16393 */;
import VibegrationsUsageSheet from "VibegrationsUsageSheet" /* 16400 */;
import VibegrationsNativeTurnTimerDefault from "VibegrationsNativeTurnTimer" /* 16401 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const VibegrationsUsageSheetDefault = VibegrationsUsageSheet;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
function ThinkingIndicator(line) {
  let AIShimmer;
  let closure_3;
  let first;
  let items3;
  let obj3;
  let str;
  let text;
  line = line.line;
  const rotating = line.rotating;
  text = undefined;
  _slicedToArray = undefined;
  react = undefined;
  const tmp = closure_9();
  [text, _slicedToArray] = react.useState(line);
  react = react.useRef(line);
  const ref2 = react.useRef(text);
  const ref = react.useRef(null);
  const items = [line];
  const effect = react.useEffect(() => {
    ref.current = line;
  }, items);
  const items1 = [text];
  const effect1 = react.useEffect(() => {
    ref2.current = current;
  }, items1);
  let closure_7 = react.useRef(rotating);
  let closure_8 = react.useRef(0);
  const items2 = [rotating];
  const effect2 = react.useEffect(() => {
    closure_7.current = rotating;
    let isRecallingLineResult = !rotating;
    if (isRecallingLineResult) {
      const obj = VibegrationsStatusLabels;
      isRecallingLineResult = obj.isRecallingLine(ref2.current);
    }
    if (isRecallingLineResult) {
      closure_3(ref.current);
    }
  }, items2);
  const effect3 = react.useEffect(() => {
    let closure_2;
    let ref3;
    let ref4;
    function beat() {
      if (ref4.current) {
        let num = 0;
        const obj = line(first[7]);
        const tmp8 = line;
        const tmp9 = first;
        if (obj.isRecallingLine(ref2.current)) {
          num = tmp7.current + 1;
        }
        ref.current = num;
        const tmp8Result = tmp8(tmp9[7]);
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
    }, line(first[7]).INDICATOR_PASS_STAGGER_MS);
    return () => {
      clearTimeout(closure_2);
      if (null != closure_0) {
        const _clearInterval = clearInterval;
        clearInterval(closure_0);
      }
    };
  }, []);
  let obj = { style: tmp.indicator, children: items3 };
  let tmp9 = closure_8;
  items3 = [closure_7(line(text[8]).AILoader, { size: 10, color: "text-subtle" }), ];
  const obj2 = { style: tmp.label, accessibilityElementsHidden: rotating, importantForAccessibility: str, children: closure_7(AIShimmer, obj3) };
  str = "auto";
  if (rotating) {
    str = "no-hide-descendants";
  }
  obj3 = { ref, text, variant: "text-xs/medium", color: "text-subtle", duration: line(text[7]).INDICATOR_PASS_MS, delay: null };
  AIShimmer = tmp12(tmp13[9]).AIShimmer;
  items3[1] = closure_7(ref2, obj2);
  return tmp9(ref2, obj);
}
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
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeStatusStrip.tsx");

export default function VibegrationsNativeStatusStrip(projectId) {
  let activity;
  let connFailed;
  let connLabel;
  let controlling;
  let items1;
  let items2;
  let items3;
  let obj7;
  let onToggleThinking;
  let projectUsage;
  let recalling;
  let str2;
  let stringResult1;
  let thinking;
  let thinkingOpen;
  let tmp13Result;
  let tmp17;
  let tmp18;
  let turnStartedAt;
  projectId = projectId.projectId;
  ({ thinking, turnStartedAt, recalling } = projectId);
  const compacting = projectId.compacting;
  if (recalling === undefined) {
    recalling = false;
  }
  ({ activity, projectUsage, connLabel, thinkingOpen } = projectId);
  ({ connFailed, controlling, onToggleThinking } = projectId);
  let tmp = closure_9();
  let obj = projectId(16393);
  const thinkingLabelResult = obj.thinkingLabel({ activity, compacting, recalling, controlling });
  const intl = projectId(1115).intl;
  const stringResult = intl.string(thinkingLabelResult);
  let runesUsedLabelsResult = null;
  const first = projectId(16393).RECALLING_LINES[0];
  if (null != projectUsage) {
    const tmp2Result = projectId(16393);
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
  const items = [projectId];
  let obj2 = { style: tmp.row, children: items2 };
  const obj3 = { style: tmp.activity, children: items1 };
  const obj4 = { style: tmp.live, accessibilityRole: "none", accessibilityLiveRegion: "polite", children: tmp13Result };
  const callback = react.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: metroImportDefault(VibegrationsUsageSheetDefault, obj2), key: VibegrationsUsageSheet.VIBEGRATIONS_USAGE_SHEET_KEY };
    obj2 = { projectId };
    showActionSheet(obj);
  }, items);
  if (thinking) {
    let tmp16 = tmp9;
    const PressableOpacity = tmp2(5435).PressableOpacity;
    if (!tmp9) {
      tmp16 = tmp15;
    }
    const obj5 = { accessible: tmp16, accessibilityRole: str2, accessibilityState: tmp17, accessibilityLabel: tmp18, accessibilityHint: stringResult1, hitSlop: 8, disabled: !tmp9, onPress: onToggleThinking, children: closure_7(ThinkingIndicator, obj7) };
    str2 = undefined;
    if (tmp9) {
      str2 = "button";
    }
    tmp17 = undefined;
    if (tmp9) {
      tmp17 = { expanded: thinkingOpen };
      const obj6 = { expanded: thinkingOpen };
    }
    if (tmp9) {
      tmp18 = stringResult;
    }
    stringResult1 = undefined;
    if (tmp9) {
      const intl2 = tmp2(1115).intl;
      stringResult1 = intl2.string(_modDef3715["0PGVTy"]);
    }
    obj7 = { line: stringResult, rotating: thinkingLabelResult === first };
    tmp13Result = tmp13(PressableOpacity, obj5);
  } else {
    tmp13Result = null;
  }
  items1 = [closure_7(View, obj4), ];
  let tmp13Result3 = null;
  if (thinking) {
    tmp13Result3 = null;
    if (null != turnStartedAt) {
      const obj8 = { startedAt: turnStartedAt, variant: "text-xs/medium" };
      tmp13Result3 = tmp13(VibegrationsNativeTurnTimerDefault, obj8);
    }
  }
  items1[1] = tmp13Result3;
  items2 = [closure_8(View, obj3), , ];
  let tmp13Result4 = null;
  if (null != connLabel) {
    let str3 = "text-muted";
    const Text = tmp2(4832).Text;
    if (connFailed) {
      str3 = "text-feedback-critical";
    }
    const obj9 = { variant: "text-xs/medium", color: str3, children: connLabel };
    tmp13Result4 = tmp13(Text, obj9);
  }
  items2[1] = tmp13Result4;
  let tmp11Result = null;
  if (null != runesUsedLabelsResult) {
    const obj10 = { accessibilityRole: "button", accessibilityLabel: runesUsedLabelsResult.aria, hitSlop: 8, style: tmp.runes, onPress: callback, children: items3 };
    const PressableOpacity2 = tmp2(5435).PressableOpacity;
    const obj11 = { variant: "text-xs/medium", color: "text-muted", children: runesUsedLabelsResult.text };
    items3 = [closure_7(projectId(4832).Text, obj11), ];
    const obj12 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
    const CircleInformationIcon = tmp2(4787).CircleInformationIcon;
    items3[1] = closure_7(CircleInformationIcon, obj12);
    tmp11Result = tmp11(PressableOpacity2, obj10);
  }
  items2[2] = tmp11Result;
  return closure_8(View, obj2);
};
