// Module ID: 12834
// Function ID: 12835
// Name: ConjureDebugGitSection
// Dependencies: [32, 19, 17, 21, 5005, 587, 8604, 10187, 12835, 12837, 9083, 12839, 9712, 12841, 11695, 12155, 7327, 8012, 7078, 12843, 12845, 558, 576, 12847, 5271, 12829, 5073, 5952, 6961, 6015, 11993, 5281, 2]

// Module 12834 (ConjureDebugGitSection)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AlertModal from "AlertModal" /* 5952 */;
import CircleXIcon from "CircleXIcon" /* 7078 */;
import CircleCheckIcon from "CircleCheckIcon" /* 7327 */;
import WarningIcon from "WarningIcon" /* 8012 */;
import FolderIcon from "FolderIcon" /* 8604 */;
import CalendarIcon from "CalendarIcon" /* 9083 */;
import ServerIcon from "ServerIcon" /* 9712 */;
import PencilIcon from "PencilIcon" /* 10187 */;
import SpeedometerIcon from "SpeedometerIcon" /* 11695 */;
import FileIcon from "FileIcon" /* 12155 */;
import CloudIcon from "CloudIcon" /* 12835 */;
import ListNumberedIcon from "ListNumberedIcon" /* 12837 */;
import SaveIcon from "SaveIcon" /* 12839 */;
import CloudDownloadIcon from "CloudDownloadIcon" /* 12841 */;
import ArrowSmallUpIcon from "ArrowSmallUpIcon" /* 12843 */;
import ArrowSmallDownIcon from "ArrowSmallDownIcon" /* 12845 */;
import ConjureDebugGit from "ConjureDebugGit" /* 12847 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
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
let tmp;
const Text_Text = tmp(5271);
const ConjureDebugPrimitives = tmp(12829);
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
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureDebugGitSection(projectId) {
  let items;
  let tmp5;
  let tmp = require;
  let tmp2 = dependencyMap;
  let obj = react2;
  const cResult = obj.c(13);
  projectId = projectId.projectId;
  const tmp4 = closure_9();
  let obj2 = ConjureDebugGit;
  const state = obj2.useConjureDebugGitInfo(projectId).state;
  if (cResult[0] !== state) {
    const tmpResult = ConjureDebugGit;
    const gitInfoStatusResult = tmpResult.gitInfoStatus(state);
    cResult[0] = state;
    cResult[1] = gitInfoStatusResult;
    tmp5 = gitInfoStatusResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp5.critical) {
    let tmp7;
    if (cResult[3] === tmp5.line) {
      tmp7 = cResult[4];
    }
    if (cResult[5] === tmp4.controls) {
      let tmp10;
      let tmp14;
      if (cResult[6] === tmp7) {
        tmp10 = cResult[7];
      }
      if (cResult[8] !== state.info) {
        let mapped = null;
        if (null != state.info) {
          const tmpResult2 = ConjureDebugGit;
          const gitInfoRowsResult = tmpResult2.gitInfoRows(state.info);
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
            const DebugStatRow = require("ConjureDebugPrimitives").DebugStatRow;
            tmp7Result = undefined;
            if (null != first) {
              const obj3 = { size: "xs", color: tmp6 };
              tmp7Result = tmp7(first, obj3);
            }
            return closure_1_7(DebugStatRow, obj, label);
          });
        }
        cResult[8] = state.info;
        cResult[9] = mapped;
        tmp14 = mapped;
      } else {
        tmp14 = cResult[9];
      }
      if (cResult[10] === tmp10) {
        let tmp16;
        if (cResult[11] === tmp14) {
          tmp16 = cResult[12];
        }
        return tmp16;
      }
      let obj3 = { title: "Git", children: items };
      items = [tmp10, tmp14];
      const tmp18 = metroImportAll(ConjureDebugPrimitives.DebugSection, obj3);
      cResult[10] = tmp10;
      cResult[11] = tmp14;
      cResult[12] = tmp18;
      tmp16 = tmp18;
    }
    obj4 = { style: tmp4.controls, children: tmp7 };
    const tmp13 = metroImportDefault(metroRequire, obj4);
    cResult[5] = tmp4.controls;
    cResult[6] = tmp7;
    cResult[7] = tmp13;
    tmp10 = tmp13;
  }
  let tmp9Result = null;
  if ("" !== tmp5.line) {
    let str = "text-muted";
    const Text = Text_Text.Text;
    const tmp9 = metroImportDefault;
    if (tmp5.critical) {
      str = "text-feedback-critical";
    }
    obj5 = { variant: "text-xs/normal", accessibilityLiveRegion: "polite", color: str, children: tmp5.line };
    tmp9Result = tmp9(Text, obj5);
  }
  cResult[2] = tmp5.critical;
  cResult[3] = tmp5.line;
  cResult[4] = tmp9Result;
  tmp7 = tmp9Result;
}) : (function ConjureDebugGitSection(projectId) {
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
      const DebugStatRow = require("ConjureDebugPrimitives").DebugStatRow;
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureDebugRestartAgent(projectId) {
  let accessibilityRole;
  let accessibilityState;
  let busy;
  let clearAlarm;
  let confirmCopy;
  let state;
  let obj = clearAlarm(confirmCopy[22]);
  const cResult = obj.c(43);
  projectId = projectId.projectId;
  const tmp4 = closure_9();
  let obj2 = clearAlarm(confirmCopy[23]);
  const conjureRestartAgent = obj2.useConjureRestartAgent(projectId);
  ({ state, busy, clearAlarm } = conjureRestartAgent);
  const setClearAlarm = conjureRestartAgent.setClearAlarm;
  confirmCopy = conjureRestartAgent.confirmCopy;
  const restart = conjureRestartAgent.restart;
  if (cResult[0] === busy) {
    let tmp6;
    if (cResult[1] === clearAlarm) {
      tmp6 = cResult[2];
    }
    const tmpResult = clearAlarm(confirmCopy[26]);
    const checkboxA11yNative = tmpResult.useCheckboxA11yNative(tmp6);
    ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
    if (cResult[3] === confirmCopy.body) {
      if (cResult[4] === confirmCopy.confirm) {
        if (cResult[5] === confirmCopy.title) {
          let tmp8;
          if (cResult[6] === restart) {
            tmp8 = cResult[7];
          }
          let disabled = null;
          const controls = tmp4.controls;
          if (busy) {
            disabled = tmp4.disabled;
          }
          if (cResult[8] === tmp4.clearAlarm) {
            let tmp10;
            if (cResult[9] === disabled) {
              tmp10 = cResult[10];
            }
            if (cResult[11] === clearAlarm) {
              let tmp11;
              let tmp12;
              let tmp18;
              if (cResult[12] === setClearAlarm) {
                tmp11 = cResult[13];
              }
              if (cResult[14] !== clearAlarm) {
                const obj3 = { checked: clearAlarm };
                const tmp14 = closure_7(clearAlarm(confirmCopy[28]).FormCheckbox, obj3);
                cResult[14] = clearAlarm;
                class T {
                  constructor() {
                    const obj = AlertModal;
                    const obj2 = { key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart };
                    obj.showConfirmModal(obj2);
                  }
                }
                cResult[15] = tmp14;
                tmp12 = tmp14;
              } else {
                tmp12 = cResult[15];
              }
              const _Symbol = Symbol;
              class T {
                constructor() {
                  const obj = AlertModal;
                  const obj2 = { key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart };
                  obj.showConfirmModal(obj2);
                }
              }
              if (cResult[17] !== tmp12) {
                const items = [, ];
                items[0] = tmp12;
                items[1] = tmp17;
                class T {
                  constructor() {
                    const obj = AlertModal;
                    const obj2 = { key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart };
                    obj.showConfirmModal(obj2);
                  }
                }
                cResult[17] = tmp12;
                cResult[18] = tmp20;
                tmp18 = tmp20;
              } else {
                tmp18 = cResult[18];
              }
              if (cResult[19] === accessibilityRole) {
                if (cResult[20] === accessibilityState) {
                  if (cResult[21] === busy) {
                    if (cResult[22] === tmp10) {
                      if (cResult[23] === tmp11) {
                        let tmp21;
                        let tmp25;
                        if (cResult[24] === tmp18) {
                          tmp21 = cResult[25];
                        }
                        const _Symbol2 = Symbol;
                        if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                          obj5 = { size: "xs", color: setClearAlarm(confirmCopy[5]).colors.TEXT_FEEDBACK_CRITICAL };
                          const RetryIcon = tmp(tmp2[30]).RetryIcon;
                          const tmp28 = closure_7(RetryIcon, obj5);
                          class T {
                            constructor() {
                              const obj = AlertModal;
                              const obj2 = { key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart };
                              obj.showConfirmModal(obj2);
                            }
                          }
                          cResult[26] = tmp28;
                          tmp25 = tmp28;
                        } else {
                          tmp25 = cResult[26];
                        }
                        if (cResult[27] === busy) {
                          let tmp29;
                          if (cResult[28] === tmp8) {
                            tmp29 = cResult[29];
                          }
                          if (cResult[30] === tmp4.restartAgentRow) {
                            if (cResult[31] === tmp21) {
                              let tmp33;
                              if (cResult[32] === tmp29) {
                                tmp33 = cResult[33];
                              }
                              let str2 = "text-muted";
                              if ("failed" === state.phase) {
                                str2 = "text-feedback-critical";
                              }
                              if (cResult[34] !== state) {
                                const tmpResult2 = clearAlarm(confirmCopy[23]);
                                const result = tmpResult2.restartAgentStatusLine(state);
                                cResult[34] = state;
                                cResult[35] = result;
                                class T {
                                  constructor() {
                                    const obj = AlertModal;
                                    const obj2 = { key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart };
                                    obj.showConfirmModal(obj2);
                                  }
                                }
                              }
                              if (cResult[36] === str2) {
                                let tmp40;
                                if (cResult[37] === tmp38) {
                                  tmp40 = cResult[38];
                                }
                                if (cResult[39] === tmp4.controls) {
                                  if (cResult[40] === tmp33) {
                                    let tmp42;
                                    if (cResult[41] === tmp40) {
                                      tmp42 = cResult[42];
                                    }
                                    return tmp42;
                                  }
                                }
                                const obj6 = { style: controls, children: tmp45 };
                                class T {
                                  constructor() {
                                    const obj = AlertModal;
                                    const obj2 = { key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart };
                                    obj.showConfirmModal(obj2);
                                  }
                                }
                                tmp45[0] = tmp33;
                                tmp45[1] = tmp40;
                                const tmp46 = closure_8(closure_6, obj6);
                                cResult[39] = tmp4.controls;
                                cResult[40] = tmp33;
                                cResult[41] = tmp40;
                                cResult[42] = tmp46;
                                tmp42 = tmp46;
                              }
                              class T {
                                constructor() {
                                  const obj = AlertModal;
                                  const obj2 = { key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart };
                                  obj.showConfirmModal(obj2);
                                }
                              }
                              const obj7 = { variant: "text-xs/normal", accessibilityLiveRegion: "polite", color: str2, children: tmp38 };
                              const tmp41 = closure_7(clearAlarm(confirmCopy[24]).Text, obj7);
                              cResult[36] = str2;
                              cResult[37] = tmp38;
                              cResult[38] = tmp41;
                              tmp40 = tmp41;
                            }
                          }
                          const obj8 = { style: tmp4.restartAgentRow, children: tmp36 };
                          class T {
                            constructor() {
                              const obj = AlertModal;
                              const obj2 = { key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart };
                              obj.showConfirmModal(obj2);
                            }
                          }
                          tmp36[0] = tmp21;
                          tmp36[1] = tmp29;
                          const tmp37 = closure_8(closure_6, obj8);
                          cResult[30] = tmp4.restartAgentRow;
                          cResult[31] = tmp21;
                          cResult[32] = tmp29;
                          cResult[33] = tmp37;
                          tmp33 = tmp37;
                        }
                        class T {
                          constructor() {
                            const obj = AlertModal;
                            const obj2 = { key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart };
                            obj.showConfirmModal(obj2);
                          }
                        }
                        tmp31[2] = tmp25;
                        const Button = tmp(tmp2[31]).Button;
                        tmp31[3] = clearAlarm(confirmCopy[23]).RESTART_AGENT_LABEL;
                        tmp31[4] = busy;
                        tmp31[5] = busy;
                        tmp31[6] = tmp8;
                        const tmp32 = closure_7(Button, tmp31);
                        cResult[27] = busy;
                        cResult[28] = tmp8;
                        cResult[29] = tmp32;
                        tmp29 = tmp32;
                      }
                    }
                  }
                }
              }
              const obj9 = { accessibilityRole, accessibilityState, accessibilityLabel: clearAlarm(confirmCopy[23]).RESTART_AGENT_CLEAR_ALARM_LABEL, accessibilityHint: clearAlarm(confirmCopy[23]).RESTART_AGENT_CLEAR_ALARM_HINT, disabled: busy, style: tmp10, onPress: tmp11, children: tmp18 };
              const tmp24 = closure_7(closure_5, obj9);
              cResult[19] = accessibilityRole;
              cResult[20] = accessibilityState;
              cResult[21] = busy;
              cResult[22] = tmp10;
              cResult[23] = tmp11;
              cResult[24] = tmp18;
              cResult[25] = tmp24;
              tmp21 = tmp24;
            }
            const fn = function p() {
              return setClearAlarm(!clearAlarm);
            };
            cResult[11] = clearAlarm;
            class T {
              constructor() {
                const obj = AlertModal;
                const obj2 = { key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart };
                obj.showConfirmModal(obj2);
              }
            }
            cResult[13] = fn;
            tmp11 = fn;
          }
          const items1 = [, ];
          class T {
            constructor() {
              const obj = AlertModal;
              const obj2 = { key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart };
              obj.showConfirmModal(obj2);
            }
          }
          items1[1] = disabled;
          cResult[8] = tmp4.clearAlarm;
          cResult[9] = disabled;
          cResult[10] = items1;
          tmp10 = items1;
        }
      }
    }
    class T {
      constructor() {
        const obj = AlertModal;
        const obj2 = { key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart };
        obj.showConfirmModal(obj2);
      }
    }
    cResult[3] = confirmCopy.body;
    cResult[4] = confirmCopy.confirm;
    cResult[5] = confirmCopy.title;
    cResult[6] = restart;
    cResult[7] = T;
    tmp8 = T;
  }
  const obj10 = { checked: clearAlarm, disabled: busy };
  cResult[0] = busy;
  cResult[1] = clearAlarm;
  cResult[2] = obj10;
  tmp6 = obj10;
}) : (function ConjureDebugRestartAgent(projectId) {
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
  let obj = clearAlarm(confirmCopy[23]);
  const conjureRestartAgent = obj.useConjureRestartAgent(projectId);
  ({ state, busy, clearAlarm } = conjureRestartAgent);
  ({ setClearAlarm: c1, confirmCopy } = conjureRestartAgent);
  const restart = conjureRestartAgent.restart;
  let obj2 = clearAlarm(confirmCopy[26]);
  const checkboxA11yNative = obj2.useCheckboxA11yNative({ checked: clearAlarm, disabled: busy });
  const items = [confirmCopy, restart];
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const obj3 = { style: tmp.controls, children: items4 };
  obj4 = { style: tmp.restartAgentRow, children: items3 };
  obj5 = {
    accessibilityRole,
    accessibilityState,
    accessibilityLabel: clearAlarm(confirmCopy[23]).RESTART_AGENT_CLEAR_ALARM_LABEL,
    accessibilityHint: clearAlarm(confirmCopy[23]).RESTART_AGENT_CLEAR_ALARM_HINT,
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
  Stack = tmp2(tmp3[29]).Stack;
  items2 = [closure_7(clearAlarm(confirmCopy[28]).FormCheckbox, { checked: clearAlarm }), ];
  const obj7 = { variant: "text-sm/medium", color: "text-default", children: clearAlarm(confirmCopy[23]).RESTART_AGENT_CLEAR_ALARM_LABEL };
  const Text = tmp2(tmp3[24]).Text;
  items2[1] = closure_7(Text, obj7);
  items3 = [closure_7(tmp10, obj5), ];
  const obj8 = { variant: "critical-secondary", size: "sm", icon: closure_7(RetryIcon, obj9), text: clearAlarm(confirmCopy[23]).RESTART_AGENT_LABEL, loading: busy, disabled: busy, onPress: callback };
  const Button = tmp2(tmp3[31]).Button;
  obj9 = { size: "xs", color: require("native").colors.TEXT_FEEDBACK_CRITICAL };
  RetryIcon = tmp2(tmp3[30]).RetryIcon;
  items3[1] = closure_7(Button, obj8);
  items4 = [closure_8(closure_6, obj4), ];
  let str = "text-muted";
  const Text2 = tmp2(tmp3[24]).Text;
  if ("failed" === state.phase) {
    str = "text-feedback-critical";
  }
  const obj10 = { variant: "text-xs/normal", accessibilityLiveRegion: "polite", color: str, children: tmp2Result.restartAgentStatusLine(state) };
  tmp2Result = clearAlarm(confirmCopy[23]);
  items4[1] = closure_7(Text2, obj10);
  return closure_8(closure_6, obj3);
});
let result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugGitSection.tsx");

export const ConjureDebugGitSection = tmp5;
export const ConjureDebugRestartAgent = tmp6;
