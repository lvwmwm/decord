// Module ID: 13020
// Function ID: 13021
// Name: ConjureDebugGitSection
// Dependencies: [32, 19, 17, 21, 5014, 575, 8646, 10232, 13021, 13023, 9115, 13025, 9758, 13027, 11926, 11062, 7340, 8026, 7092, 13029, 13031, 13033, 13015, 5624, 5082, 5964, 6027, 6989, 5634, 11083, 2]
// Exports: ConjureDebugGitSection, ConjureDebugRestartAgent

// Module 13020 (ConjureDebugGitSection)
import nativeDefault from "native" /* 575 */;
import AlertModal from "AlertModal" /* 5964 */;
import CircleXIcon from "CircleXIcon" /* 7092 */;
import CircleCheckIcon from "CircleCheckIcon" /* 7340 */;
import WarningIcon from "WarningIcon" /* 8026 */;
import FolderIcon from "FolderIcon" /* 8646 */;
import CalendarIcon from "CalendarIcon" /* 9115 */;
import ServerIcon from "ServerIcon" /* 9758 */;
import PencilIcon from "PencilIcon" /* 10232 */;
import FileIcon from "FileIcon" /* 11062 */;
import SpeedometerIcon from "SpeedometerIcon" /* 11926 */;
import ConjureDebugPrimitives from "ConjureDebugPrimitives" /* 13015 */;
import CloudIcon from "CloudIcon" /* 13021 */;
import ListNumberedIcon from "ListNumberedIcon" /* 13023 */;
import SaveIcon from "SaveIcon" /* 13025 */;
import CloudDownloadIcon from "CloudDownloadIcon" /* 13027 */;
import ArrowSmallUpIcon from "ArrowSmallUpIcon" /* 13029 */;
import ArrowSmallDownIcon from "ArrowSmallDownIcon" /* 13031 */;
import ConjureDebugGit from "ConjureDebugGit" /* 13033 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let hasOwnProperty;
let items;
let items1;
let items2;
let items3;
let items4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp2;
const Text_Text = tmp2(5624);
({ Pressable: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { controls: obj2, restartAgentRow: obj3, clearAlarm: { flexShrink: 1 }, disabled: { opacity: 0.5 } };
obj2 = { gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
let obj4 = { checkout: FolderIcon.FolderIcon, edit: PencilIcon.PencilIcon, remote: CloudIcon.CloudIcon, commits: ListNumberedIcon.ListNumberedIcon, calendar: CalendarIcon.CalendarIcon, save: SaveIcon.SaveIcon, objects: ServerIcon.ServerIcon, download: CloudDownloadIcon.CloudDownloadIcon, size: SpeedometerIcon.SpeedometerIcon, file: FileIcon.FileIcon };
let obj5 = { ok: items, warning: items1, error: items2, ahead: items3, behind: items4 };
items = [CircleCheckIcon.CircleCheckIcon, nativeDefault.colors.ICON_FEEDBACK_POSITIVE];
items1 = [WarningIcon.WarningIcon, nativeDefault.colors.ICON_FEEDBACK_WARNING];
items2 = [CircleXIcon.CircleXIcon, nativeDefault.colors.ICON_FEEDBACK_CRITICAL];
items3 = [ArrowSmallUpIcon.ArrowSmallUpIcon, nativeDefault.colors.ICON_MUTED];
items4 = [ArrowSmallDownIcon.ArrowSmallDownIcon, nativeDefault.colors.ICON_MUTED];
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugGitSection.tsx");

export function ConjureDebugGitSection(projectId) {
  let tmp6Result;
  projectId = projectId.projectId;
  let tmp2 = require;
  let tmp = closure_9();
  let obj = ConjureDebugGit;
  const state = obj.useConjureDebugGitInfo(projectId).state;
  let obj2 = ConjureDebugGit;
  const gitInfoStatusResult = obj2.gitInfoStatus(state);
  let tmp6 = metroImportDefault;
  let obj3 = { style: tmp.controls, children: tmp6Result };
  tmp6Result = null;
  const DebugSection = ConjureDebugPrimitives.DebugSection;
  const tmp7 = metroRequire;
  const tmp5 = metroImportAll;
  if ("" !== gitInfoStatusResult.line) {
    let str = "text-muted";
    const Text = Text_Text.Text;
    if (gitInfoStatusResult.critical) {
      str = "text-feedback-critical";
    }
    obj4 = { variant: "text-xs/normal", accessibilityLiveRegion: "polite", color: str, children: gitInfoStatusResult.line };
    tmp6Result = tmp6(Text, obj4);
  }
  const children = [tmp6(tmp7, obj3), ];
  let mapped = null;
  if (null != state.info) {
    let tmp2Result = ConjureDebugGit;
    const gitInfoRowsResult = tmp2Result.gitInfoRows(state.info);
    mapped = gitInfoRowsResult.map((item) => {
      let hint;
      let items;
      let label;
      let obj2;
      let state;
      let tmp7Result;
      let value;
      ({ label, state } = item);
      ({ value, hint } = item);
      const tmp = obj4[item.icon];
      const tmp2 = _slicedToArray;
      if (null != state) {
        items = obj5[state];
      } else {
        items = [null, undefined];
      }
      const tmp2Result = tmp2(items, 2);
      const first = tmp2Result[0];
      const obj = { label, value, hint, critical: "error" === state, icon: closure_1_7(tmp, obj2), state: tmp7Result };
      obj2 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
      const tmp6 = tmp2Result[1];
      const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
      tmp7Result = undefined;
      if (null != first) {
        const obj3 = { size: "xs", color: tmp6 };
        tmp7Result = tmp7(first, obj3);
      }
      return closure_1_7(DebugStatRow, obj, label);
    });
  }
  children[1] = mapped;
  return tmp5(DebugSection, { title: "Git", children });
}
export function ConjureDebugRestartAgent(projectId) {
  let RetryIcon;
  let Stack;
  let _undefined;
  let accessibilityRole;
  let accessibilityState;
  let busy;
  let c1;
  let clearAlarm;
  let confirmCopy;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj6;
  let obj9;
  let state;
  let tmp2Result;
  clearAlarm = undefined;
  importDefault = undefined;
  confirmCopy = undefined;
  projectId = projectId.projectId;
  const tmp = closure_9();
  let obj = clearAlarm(confirmCopy[21]);
  const conjureRestartAgent = obj.useConjureRestartAgent(projectId);
  ({ state, busy, clearAlarm } = conjureRestartAgent);
  ({ setClearAlarm: c1, confirmCopy } = conjureRestartAgent);
  const restart = conjureRestartAgent.restart;
  let obj2 = clearAlarm(confirmCopy[24]);
  const checkboxA11yNative = obj2.useCheckboxA11yNative({ checked: clearAlarm, disabled: busy });
  const items = [confirmCopy, restart];
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const obj3 = { style: tmp.controls, children: items4 };
  obj4 = { style: tmp.restartAgentRow, children: items3 };
  obj5 = {
    accessibilityRole,
    accessibilityState,
    accessibilityLabel: clearAlarm(confirmCopy[21]).RESTART_AGENT_CLEAR_ALARM_LABEL,
    accessibilityHint: clearAlarm(confirmCopy[21]).RESTART_AGENT_CLEAR_ALARM_HINT,
    disabled: busy,
    style: items1,
    onPress() {
      return _undefined(!clearAlarm);
    },
    children: closure_8(Stack, obj6)
  };
  const callback = react.useCallback(() => {
    const obj = AlertModal;
    const obj2 = { key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart };
    obj.showConfirmModal(obj2);
  }, items);
  items1 = [tmp.clearAlarm, ];
  let disabled = null;
  const tmp10 = closure_5;
  if (busy) {
    disabled = tmp.disabled;
  }
  items1[1] = disabled;
  obj6 = { direction: "horizontal", spacing: 8, align: "center", children: items2 };
  Stack = tmp2(tmp3[26]).Stack;
  items2 = [closure_7(clearAlarm(confirmCopy[27]).FormCheckbox, { checked: clearAlarm }), ];
  const obj7 = { variant: "text-sm/medium", color: "text-default", children: clearAlarm(confirmCopy[21]).RESTART_AGENT_CLEAR_ALARM_LABEL };
  const Text = tmp2(tmp3[23]).Text;
  items2[1] = closure_7(Text, obj7);
  items3 = [closure_7(tmp10, obj5), ];
  const obj8 = { variant: "critical-secondary", size: "sm", icon: closure_7(RetryIcon, obj9), text: clearAlarm(confirmCopy[21]).RESTART_AGENT_LABEL, loading: busy, disabled: busy, onPress: callback };
  const Button = tmp2(tmp3[28]).Button;
  obj9 = { size: "xs", color: require("native").colors.TEXT_FEEDBACK_CRITICAL };
  RetryIcon = tmp2(tmp3[29]).RetryIcon;
  items3[1] = closure_7(Button, obj8);
  items4 = [closure_8(closure_6, obj4), ];
  let str = "text-muted";
  const Text2 = tmp2(tmp3[23]).Text;
  if ("failed" === state.phase) {
    str = "text-feedback-critical";
  }
  const obj10 = { variant: "text-xs/normal", accessibilityLiveRegion: "polite", color: str, children: tmp2Result.restartAgentStatusLine(state) };
  tmp2Result = clearAlarm(confirmCopy[21]);
  items4[1] = closure_7(Text2, obj10);
  return closure_8(closure_6, obj3);
}
