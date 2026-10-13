// Module ID: 11844
// Function ID: 11845
// Name: ConjureActivityBox
// Dependencies: [32, 19, 17, 1085, 21, 5092, 11814, 587, 558, 576, 11845, 11792, 11891, 1126, 3849, 11810, 11892, 5088, 11284, 7572, 11893, 2]
// Exports: stretchOf

// Module 11844 (ConjureActivityBox)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import Text_Text from "Text/Text" /* 5088 */;
import ConjureNativeStatusLineDefault from "ConjureNativeStatusLine" /* 11810 */;
import conjureNativeChatLayout from "conjureNativeChatLayout" /* 11814 */;
import ConjureSubagentMark from "ConjureSubagentMark" /* 11845 */;
import ConjureNativeStepImagesDefault from "ConjureNativeStepImages" /* 11893 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp2;
const WarningIcon2 = tmp2(7572);
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { activityBox: obj2, activityDetail: obj3, stepDetail: obj4, stepLine: obj5, stepCommand: { fontFamily: Fonts.CODE_NORMAL, fontSize: 12, lineHeight: 18 } };
obj2 = { marginLeft: -conjureNativeChatLayout.RAIL_INDENT };
createStyles = createStyles.createStyles;
obj3 = { paddingLeft: conjureNativeChatLayout.RAIL_INDENT };
obj4 = { marginTop: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_12, borderLeftWidth: 2, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, gap: 2 };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureActivityBox(projectId) {
  let length;
  let tmp7;
  let tree;
  let turnActive;
  let obj = projectId(length[9]);
  const cResult = obj.c(14);
  const tmp = projectId;
  projectId = projectId.projectId;
  ({ tree, turnActive } = projectId);
  const besideAvatar = projectId.besideAvatar;
  let tmp5 = closure_8();
  const tmp2 = length;
  if (0 === tree.steps.length) {
    if (0 === tree.tasks.length) {
      return null;
    }
  }
  length = tree.tasks.length;
  if (cResult[0] === (undefined !== besideAvatar && besideAvatar)) {
    if (cResult[1] === length) {
      if (cResult[2] === projectId) {
        if (cResult[3] === tmp5.activityBox) {
          if (cResult[4] === tree) {
            let tmp6;
            if (cResult[5] === turnActive) {
              tmp6 = cResult[6];
            }
            return tmp6;
          }
        }
      }
    }
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor(arg0) {
        return projectId.taskId;
      }
    }
    cResult[7] = A;
    tmp7 = A;
  } else {
    class A {
      constructor(arg0) {
        return projectId.taskId;
      }
    }
  }
  const tasks = tree.tasks;
  const tmpResult = tmp(tmp2[10]);
  let closure_3 = tmpResult.subagentIllocons(tasks.map(tmp7));
  if (cResult[8] === (undefined !== besideAvatar && besideAvatar)) {
    class A {
      constructor(arg0) {
        return projectId.taskId;
      }
    }
  }
  cResult[8] = undefined !== besideAvatar && besideAvatar;
  cResult[9] = length;
  cResult[10] = projectId;
  cResult[11] = tree;
  cResult[12] = turnActive;
  cResult[13] = closure_6(closure_9, { projectId, tree, turnActive, epoch: length, besideAvatar: undefined !== besideAvatar && besideAvatar });
  const tmp8 = closure_6(closure_9, { projectId, tree, turnActive, epoch: length, besideAvatar: undefined !== besideAvatar && besideAvatar });
}) : (function ConjureActivityBox(projectId) {
  let items;
  let tree;
  let turnActive;
  projectId = projectId.projectId;
  ({ tree, turnActive } = projectId);
  let flag = projectId.besideAvatar;
  if (flag === undefined) {
    flag = false;
  }
  let length;
  let closure_3;
  const tmp = closure_8();
  if (0 === tree.steps.length) {
    if (0 === tree.tasks.length) {
      return null;
    }
  }
  length = tree.tasks.length;
  let obj = projectId(length[10]);
  const tasks = tree.tasks;
  closure_3 = obj.subagentIllocons(tasks.map((taskId) => taskId.taskId));
  let obj2 = { style: tmp.activityBox, children: items };
  items = [closure_6(closure_9, { projectId, tree, turnActive, epoch: length, besideAvatar: flag }), ];
  const tasks1 = tree.tasks;
  items[1] = tasks1.map((task) => {
    let familiarMarkResult;
    if (null != task.task.helperMark) {
      const obj = ConjureSubagentMark;
      familiarMarkResult = obj.familiarMark(task.task.helperMark);
    }
    if (familiarMarkResult == null) {
      familiarMarkResult = closure_3.get(task.taskId);
    }
    let tmp5 = null;
    if (null != familiarMarkResult) {
      const obj2 = { projectId, lane: task, mark: familiarMarkResult, turnActive, epoch: length };
      tmp5 = metroRequire(closure_10, obj2, task.taskId);
    }
    return tmp5;
  });
  return closure_7(View, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function TurnStatusLine(projectId) {
  let describeTurnDurationResult;
  let epoch;
  let first;
  let items;
  let steps1;
  let tmp6;
  let tree;
  let turn3;
  let turnActive;
  let tmp = projectId;
  let tmp2 = epoch;
  let obj = projectId(epoch[9]);
  const cResult = obj.c(31);
  projectId = projectId.projectId;
  ({ tree, turnActive } = projectId);
  epoch = projectId.epoch;
  const besideAvatar = projectId.besideAvatar;
  const tmp4 = closure_8();
  const tmp5 = _slicedToArray(react.useState(false), 2);
  [tmp6, _slicedToArray] = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      return _slicedToArray((arg0) => !arg0);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tree.steps) {
    if (cResult[2] === tree.tasks) {
      const turn = tree.turn;
      let durationMs;
      const tmp8 = cResult[3];
      if (turn != null) {
        durationMs = turn.durationMs;
      }
      if (tmp8 === durationMs) {
        let tmp12;
        let tmp23;
        if (cResult[4] === turnActive) {
          react = cResult[5];
          tmp12 = cResult[6];
        }
        if (cResult[9] !== tree.steps) {
          let someResult = tree.steps.length > 1;
          if (!someResult) {
            const steps = tree.steps;
            someResult = steps.some((detail) => detail.detail.length > 0 || detail.attachments.length > 0);
          }
          cResult[9] = tree.steps;
          cResult[10] = someResult;
          tmp23 = someResult;
        } else {
          tmp23 = cResult[10];
        }
        let tmp26;
        if (besideAvatar) {
          tmp26 = null;
        }
        let tmp27;
        if (tmp23) {
          tmp27 = first;
        }
        if (cResult[11] === epoch) {
          if (cResult[12] === tmp6) {
            if (cResult[13] === tmp12) {
              if (cResult[14] === !turnActive) {
                if (cResult[15] === tmp26) {
                  if (cResult[16] === tmp27) {
                    let tmp28;
                    if (cResult[17] === turnActive) {
                      tmp28 = cResult[18];
                    }
                    if (cResult[19] === tmp11) {
                      if (cResult[20] === epoch) {
                        if (cResult[21] === tmp6) {
                          if (cResult[22] === tmp23) {
                            if (cResult[23] === projectId) {
                              if (cResult[24] === tmp4) {
                                if (cResult[25] === tree.steps) {
                                  let tmp32;
                                  if (cResult[26] === turnActive) {
                                    tmp32 = cResult[27];
                                  }
                                  if (cResult[28] === tmp28) {
                                    let tmp36;
                                    if (cResult[29] === tmp32) {
                                      tmp36 = cResult[30];
                                    }
                                    return tmp36;
                                  }
                                  const obj2 = { children: items };
                                  items = [tmp28, tmp32];
                                  const tmp39 = closure_7(View, obj2);
                                  cResult[28] = tmp28;
                                  cResult[29] = tmp32;
                                  cResult[30] = tmp39;
                                  tmp36 = tmp39;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    let tmp33 = null;
                    if (tmp6) {
                      tmp33 = null;
                      if (tmp23) {
                        const obj3 = {
                          style: tmp4.activityDetail,
                          children: steps1.map((node) => {
                                                  let tmp3;
                                                  const obj = { projectId, node, live: tmp3, epoch };
                                                  tmp3 = turnActive;
                                                  const tmp = metroRequire;
                                                  const tmp2 = closure_11;
                                                  if (turnActive) {
                                                    tmp3 = node === react;
                                                  }
                                                  return tmp(tmp2, obj, node.id);
                                                })
                        };
                        steps1 = tree.steps;
                        tmp33 = closure_6(View, obj3);
                      }
                    }
                    cResult[19] = tmp11;
                    cResult[20] = epoch;
                    cResult[21] = tmp6;
                    cResult[22] = tmp23;
                    cResult[23] = projectId;
                    cResult[24] = tmp4;
                    cResult[25] = tree.steps;
                    cResult[26] = turnActive;
                    cResult[27] = tmp33;
                    tmp32 = tmp33;
                  }
                }
              }
            }
          }
        }
        const obj4 = { line: tmp12, live: turnActive, settled: !turnActive, inGutter: true, glyph: tmp26, epoch, expanded: tmp6, onToggle: tmp27 };
        const tmp31 = closure_6(turnActive(tmp2[15]), obj4);
        cResult[11] = epoch;
        cResult[12] = tmp6;
        cResult[13] = tmp12;
        cResult[14] = !turnActive;
        cResult[15] = tmp26;
        cResult[16] = tmp27;
        cResult[17] = turnActive;
        cResult[18] = tmp31;
        tmp28 = tmp31;
      }
    }
  }
  const tmpResult = tmp(tmp2[11]);
  const currentStepResult = tmpResult.currentStep(tree.steps);
  react = currentStepResult;
  let tmp14;
  if (!turnActive) {
    const turn2 = tree.turn;
    let durationMs1;
    if (turn2 != null) {
      durationMs1 = turn2.durationMs;
    }
    tmp14 = durationMs1;
  }
  if (cResult[7] !== tree.tasks) {
    const tasks = tree.tasks;
    const found = tasks.find((task) => null != task.task.groupLabel);
    let groupLabel;
    if (found != null) {
      groupLabel = found.task.groupLabel;
    }
    cResult[7] = tree.tasks;
    cResult[8] = groupLabel;
    describeTurnDurationResult = groupLabel;
  } else {
    describeTurnDurationResult = cResult[8];
  }
  if (null != tmp14) {
    const tmpResult3 = tmp(tmp2[12]);
    describeTurnDurationResult = tmpResult3.describeTurnDuration(tmp14);
  } else if (null != currentStepResult) {
    const tmpResult4 = tmp(tmp2[11]);
    describeTurnDurationResult = tmpResult4.describeNode(currentStepResult);
  } else if (describeTurnDurationResult == null) {
    const intl = tmp(tmp2[13]).intl;
    describeTurnDurationResult = intl.string(turnActive(tmp2[14]).t8skVB);
  }
  ({ steps: tmp3[1], tasks: tmp3[2], turn: turn3 } = tree);
  let durationMs2;
  if (turn3 != null) {
    durationMs2 = turn3.durationMs;
  }
  cResult[3] = durationMs2;
  cResult[4] = turnActive;
  cResult[5] = currentStepResult;
  cResult[6] = describeTurnDurationResult;
  tmp12 = describeTurnDurationResult;
}) : (function TurnStatusLine(epoch) {
  let _undefined;
  let c3;
  let c4;
  let projectId;
  let steps1;
  let tmp19;
  let tmp20;
  let tmp3;
  let tree;
  let turnActive;
  ({ projectId: require, tree, turnActive } = epoch);
  epoch = epoch.epoch;
  _slicedToArray = undefined;
  react = undefined;
  const besideAvatar = epoch.besideAvatar;
  let tmp = closure_8();
  let tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, c3] = tmp2;
  const callback = react.useCallback(() => _undefined((arg0) => !arg0), []);
  let obj = require("ConjureTimelineTree");
  const currentStepResult = obj.currentStep(tree.steps);
  react = currentStepResult;
  let tmp8;
  if (!turnActive) {
    const turn = tree.turn;
    let durationMs;
    if (turn != null) {
      durationMs = turn.durationMs;
    }
    tmp8 = durationMs;
  }
  const tasks = tree.tasks;
  const found = tasks.find((task) => null != task.task.groupLabel);
  let groupLabel;
  if (found != null) {
    groupLabel = found.task.groupLabel;
  }
  if (null != tmp8) {
    const tmp5Result = require("ConjureDuration");
    groupLabel = tmp5Result.describeTurnDuration(tmp8);
  } else if (null != currentStepResult) {
    const tmp5Result2 = require("ConjureTimelineTree");
    groupLabel = tmp5Result2.describeNode(currentStepResult);
  } else if (groupLabel == null) {
    const intl = tmp5(tmp6[13]).intl;
    groupLabel = intl.string(turnActive(tmp6[14]).t8skVB);
  }
  let someResult = tree.steps.length > 1;
  if (!someResult) {
    const steps = tree.steps;
    someResult = steps.some((detail) => detail.detail.length > 0 || detail.attachments.length > 0);
  }
  const obj2 = { line: groupLabel, live: turnActive, settled: !turnActive, inGutter: true, glyph: tmp19, epoch, expanded: tmp3, onToggle: tmp20 };
  tmp19 = undefined;
  const tmp15 = closure_7;
  const tmp18 = turnActive(epoch[15]);
  if (besideAvatar) {
    tmp19 = null;
  }
  tmp20 = undefined;
  if (someResult) {
    tmp20 = callback;
  }
  const children = [closure_6(tmp18, obj2), ];
  let tmp17Result = null;
  if (tmp3) {
    tmp17Result = null;
    if (someResult) {
      const obj3 = {
        style: tmp.activityDetail,
        children: steps1.map((node) => {
              let tmp3;
              const obj = { projectId: require, node, live: tmp3, epoch };
              tmp3 = turnActive;
              const tmp = metroRequire;
              const tmp2 = closure_11;
              if (turnActive) {
                tmp3 = node === c4;
              }
              return tmp(tmp2, obj, node.id);
            })
      };
      steps1 = tree.steps;
      tmp17Result = tmp17(tmp16, obj3);
    }
  }
  children[1] = tmp17Result;
  return tmp15(View, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function LaneStatusLine(projectId) {
  let describeTaskOutcomeResult;
  let epoch;
  let first;
  let items;
  let items1;
  let lane;
  let mark;
  let tmp6;
  let turnActive;
  let obj = projectId(epoch[9]);
  const cResult = obj.c(33);
  projectId = projectId.projectId;
  ({ lane, mark } = projectId);
  ({ turnActive, epoch } = projectId);
  const tmp4 = closure_8();
  const tmp5 = _slicedToArray(react.useState(false), 2);
  [tmp6, _slicedToArray] = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      return _slicedToArray((arg0) => !arg0);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (turnActive) {
    turnActive = tmp8;
  }
  if (cResult[1] === "running" === lane.task.status) {
    if (cResult[2] === lane.steps) {
      if (cResult[3] === lane.task) {
        let tmp9;
        let tmp11;
        let tmp18;
        if (cResult[4] === turnActive) {
          tmp9 = cResult[5];
          react = cResult[6];
          tmp11 = cResult[7];
        }
        const status = lane.task.status;
        if (cResult[8] !== mark.Illocon) {
          const tmp20 = closure_6(mark.Illocon, { size: 16, accessible: false });
          cResult[8] = mark.Illocon;
          cResult[9] = tmp20;
          tmp18 = tmp20;
        } else {
          tmp18 = cResult[9];
        }
        let tmp21;
        if (tmp9) {
          tmp21 = first;
        }
        if (cResult[10] === epoch) {
          if (cResult[11] === tmp6) {
            if (cResult[12] === turnActive) {
              if (cResult[13] === tmp11) {
                if (cResult[14] === mark.tint) {
                  if (cResult[15] === (!turnActive && "failed" !== lane.task.status)) {
                    if (cResult[16] === "failed" === status) {
                      if (cResult[17] === tmp18) {
                        let tmp23;
                        if (cResult[18] === tmp21) {
                          tmp23 = cResult[19];
                        }
                        if (cResult[20] === epoch) {
                          if (cResult[21] === tmp6) {
                            if (cResult[22] === tmp9) {
                              if (cResult[23] === lane.steps) {
                                if (cResult[24] === lane.task.detail) {
                                  if (cResult[25] === tmp10) {
                                    if (cResult[26] === mark.tint) {
                                      if (cResult[27] === projectId) {
                                        let tmp27;
                                        if (cResult[28] === tmp4) {
                                          tmp27 = cResult[29];
                                        }
                                        if (cResult[30] === tmp23) {
                                          let tmp31;
                                          if (cResult[31] === tmp27) {
                                            tmp31 = cResult[32];
                                          }
                                          return tmp31;
                                        }
                                        const obj2 = { children: items };
                                        items = [tmp23, tmp27];
                                        const tmp34 = closure_7(View, obj2);
                                        cResult[30] = tmp23;
                                        cResult[31] = tmp27;
                                        cResult[32] = tmp34;
                                        tmp31 = tmp34;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        let tmp28 = null;
                        if (tmp6) {
                          tmp28 = null;
                          if (tmp9) {
                            const detail = lane.task.detail;
                            const obj3 = { style: tmp4.activityDetail, children: items1 };
                            items1 = [
                              detail.map((children, index) => {
                                                          const obj = { variant: "text-xs/normal", color: "text-feedback-critical", children };
                                                          return closure_1_6(projectId(epoch[17]).Text, obj, index);
                                                        }),

                            ];
                            const steps = lane.steps;
                            items1[1] = steps.map((node) => {
                              const obj = { projectId, node, live: node === react, crestColor: mark.tint, epoch };
                              return metroRequire(closure_11, obj, node.id);
                            });
                            tmp28 = closure_7(View, obj3);
                          }
                        }
                        cResult[20] = epoch;
                        cResult[21] = tmp6;
                        cResult[22] = tmp9;
                        cResult[23] = lane.steps;
                        cResult[24] = lane.task.detail;
                        cResult[25] = tmp10;
                        cResult[26] = mark.tint;
                        cResult[27] = projectId;
                        cResult[28] = tmp4;
                        cResult[29] = tmp28;
                        tmp27 = tmp28;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const obj4 = { line: tmp11, live: turnActive, settled: !turnActive && "failed" !== lane.task.status, failed: "failed" === status, glyph: tmp18, crestColor: mark.tint, inGutter: true, epoch, expanded: tmp6, onToggle: tmp21 };
        const tmp26 = closure_6(mark(epoch[15]), obj4);
        cResult[10] = epoch;
        cResult[11] = tmp6;
        cResult[12] = turnActive;
        cResult[13] = tmp11;
        cResult[14] = mark.tint;
        cResult[15] = !turnActive && "failed" !== lane.task.status;
        cResult[16] = "failed" === status;
        cResult[17] = tmp18;
        cResult[18] = tmp21;
        cResult[19] = tmp26;
        tmp23 = tmp26;
      }
    }
  }
  let currentStepResult;
  if (turnActive) {
    const tmpResult = projectId(epoch[11]);
    currentStepResult = tmpResult.currentStep(lane.steps);
  }
  react = currentStepResult;
  const tmp13 = lane.task.detail.length > 0 || lane.steps.length > 0;
  if ("running" === lane.task.status) {
    let describeNodeResult;
    if (null != currentStepResult) {
      const tmpResult4 = projectId(epoch[11]);
      describeNodeResult = tmpResult4.describeNode(currentStepResult);
    } else {
      const tmpResult5 = projectId(epoch[16]);
      describeNodeResult = tmpResult5.taskTitle(lane.task);
    }
    describeTaskOutcomeResult = describeNodeResult;
  } else {
    const tmpResult6 = projectId(epoch[16]);
    describeTaskOutcomeResult = tmpResult6.describeTaskOutcome(lane.task);
  }
  cResult[1] = "running" === lane.task.status;
  cResult[2] = lane.steps;
  cResult[3] = lane.task;
  cResult[4] = turnActive;
  cResult[5] = tmp13;
  cResult[6] = currentStepResult;
  cResult[7] = describeTaskOutcomeResult;
  tmp11 = describeTaskOutcomeResult;
  tmp9 = tmp13;
}) : (function LaneStatusLine(arg0) {
  let _undefined;
  let c3;
  let c4;
  let describeTaskOutcomeResult;
  let epoch;
  let items1;
  let lane;
  let mark;
  let projectId;
  let tmp11;
  let tmp23;
  let tmp24;
  let tmp3;
  let turnActive;
  ({ projectId: require, lane, mark } = arg0);
  ({ turnActive, epoch } = arg0);
  _slicedToArray = undefined;
  react = undefined;
  const tmp = closure_8();
  [tmp3, c3] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const callback = react.useCallback(() => _undefined((arg0) => !arg0), []);
  if (turnActive) {
    turnActive = tmp5;
  }
  let currentStepResult;
  if (turnActive) {
    let obj = require("ConjureTimelineTree");
    currentStepResult = obj.currentStep(lane.steps);
  }
  react = currentStepResult;
  const tmp9 = lane.task.detail.length > 0 || lane.steps.length > 0;
  if ("running" === lane.task.status) {
    let describeNodeResult;
    let tmp15;
    if (null != currentStepResult) {
      const obj4 = require("ConjureTimelineTree");
      describeNodeResult = obj4.describeNode(currentStepResult);
      tmp15 = epoch;
    } else {
      tmp15 = epoch;
      const obj3 = require("ConjureTaskOutcome");
      describeNodeResult = obj3.taskTitle(lane.task);
    }
    tmp11 = tmp15;
    describeTaskOutcomeResult = describeNodeResult;
  } else {
    tmp11 = epoch;
    const obj2 = require("ConjureTaskOutcome");
    describeTaskOutcomeResult = obj2.describeTaskOutcome(lane.task);
  }
  const obj5 = { line: describeTaskOutcomeResult, live: turnActive, settled: tmp23, failed: "failed" === lane.task.status, glyph: closure_6(mark.Illocon, { size: 16, accessible: false }), crestColor: mark.tint, inGutter: true, epoch, expanded: tmp3, onToggle: tmp24 };
  tmp23 = !turnActive;
  const tmp22 = mark(tmp11[15]);
  if (!turnActive) {
    tmp23 = "failed" !== lane.task.status;
  }
  tmp24 = undefined;
  if (tmp9) {
    tmp24 = callback;
  }
  const children = [closure_6(tmp22, obj5), ];
  let tmp19Result = null;
  if (tmp3) {
    tmp19Result = null;
    if (tmp9) {
      const detail = lane.task.detail;
      const obj6 = { style: tmp.activityDetail, children: items1 };
      items1 = [
        detail.map((children, index) => {
              const obj = { variant: "text-xs/normal", color: "text-feedback-critical", children };
              return closure_1_6(require("Text/Text").Text, obj, index);
            }),

      ];
      const steps = lane.steps;
      items1[1] = steps.map((node) => {
        const obj = { projectId: require, node, live: node === c4, crestColor: mark.tint, epoch };
        return metroRequire(closure_11, obj, node.id);
      });
      tmp19Result = tmp19(tmp20, obj6);
    }
  }
  children[1] = tmp19Result;
  return closure_7(View, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function TimelineRow(arg0) {
  let arr;
  let closure_1;
  let crestColor;
  let detail;
  let epoch;
  let inGutter;
  let items;
  let live;
  let node;
  let obj5;
  let projectId;
  let tmp10;
  let tmp13;
  let tmpResult2;
  let tmp2 = dependencyMap;
  let obj = node(576);
  const cResult = obj.c(29);
  ({ projectId, node } = arg0);
  ({ inGutter, live, crestColor, epoch } = arg0);
  let num = 0;
  if (undefined !== epoch) {
    num = epoch;
  }
  const tmp6 = closure_8();
  importDefault = tmp6;
  if (cResult[0] !== node.attachments) {
    let tmp8;
    let tmp7 = globalThis;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function n(id) {
        if (null != id.id) {
          const CONJURE_VIEWABLE_IMAGE_TYPES = node(dependencyMap[18]).CONJURE_VIEWABLE_IMAGE_TYPES;
          if (CONJURE_VIEWABLE_IMAGE_TYPES.has(id.content_type)) {
            const obj = { id: id.id };
            const merged = Object.assign(id);
            const items = [obj];
          }
          return [];
        }
      };
      cResult[2] = fn;
      tmp8 = fn;
    } else {
      tmp8 = cResult[2];
    }
    const attachments = node.attachments;
    const flatMapResult = attachments.flatMap(tmp8);
    cResult[0] = node.attachments;
    cResult[1] = flatMapResult;
    arr = flatMapResult;
  } else {
    arr = cResult[1];
  }
  if (cResult[3] !== node) {
    let tmpResult = tmp(11792);
    const describeNodeResult = tmpResult.describeNode(node);
    cResult[3] = node;
    cResult[4] = describeNodeResult;
    tmp10 = describeNodeResult;
  } else {
    tmp10 = cResult[4];
  }
  let str3 = "detail";
  const status = node.status;
  if (undefined !== live && live) {
    str3 = "headline";
  }
  if (cResult[5] !== node.durationMs) {
    let tmp14 = null;
    if (null != node.durationMs) {
      let obj2 = { variant: "text-xs/normal", color: "text-subtle", children: tmpResult2.describeDuration(node.durationMs) };
      let Text = tmp(5088).Text;
      tmpResult2 = node(11891);
      tmp14 = closure_6(Text, obj2);
    }
    cResult[5] = node.durationMs;
    cResult[6] = tmp14;
    tmp13 = tmp14;
  } else {
    tmp13 = cResult[6];
  }
  if (cResult[7] === crestColor) {
    if (cResult[8] === num) {
      if (cResult[9] === (undefined !== inGutter && inGutter)) {
        if (cResult[10] === (undefined !== live && live)) {
          if (cResult[11] === tmp10) {
            if (cResult[12] === (!(undefined !== live && live) && "failed" !== node.status)) {
              if (cResult[13] === "failed" === status) {
                if (cResult[14] === str3) {
                  let tmp17;
                  if (cResult[15] === tmp13) {
                    tmp17 = cResult[16];
                  }
                  if (cResult[17] === node.detail) {
                    if (cResult[18] === node.detailError) {
                      let tmp19;
                      if (cResult[19] === tmp6) {
                        tmp19 = cResult[20];
                      }
                      if (cResult[21] === arr) {
                        if (cResult[22] === projectId) {
                          let tmp23;
                          if (cResult[23] === tmp6) {
                            tmp23 = cResult[24];
                          }
                          if (cResult[25] === tmp17) {
                            if (cResult[26] === tmp19) {
                              let tmp29;
                              if (cResult[27] === tmp23) {
                                tmp29 = cResult[28];
                              }
                              return tmp29;
                            }
                          }
                          let obj3 = { children: items };
                          items = [tmp17, tmp19, tmp23];
                          const tmp32 = closure_7(View, obj3);
                          cResult[25] = tmp17;
                          cResult[26] = tmp19;
                          cResult[27] = tmp23;
                          cResult[28] = tmp32;
                          tmp29 = tmp32;
                        }
                      }
                      let tmp25 = null;
                      if (null != projectId) {
                        tmp25 = null;
                        if (arr.length > 0) {
                          let obj4 = { style: tmp6.stepDetail, children: closure_6(ConjureNativeStepImagesDefault, obj5) };
                          obj5 = { projectId, images: arr };
                          tmp25 = closure_6(View, obj4);
                        }
                      }
                      cResult[21] = arr;
                      cResult[22] = projectId;
                      cResult[23] = tmp6;
                      cResult[24] = tmp25;
                      tmp23 = tmp25;
                    }
                  }
                  let tmp20 = null;
                  if (node.detail.length > 0) {
                    const obj6 = {
                      style: tmp6.stepDetail,
                      children: detail.map((children, index) => {
                                          let WarningIcon;
                                          let items;
                                          let obj4;
                                          const Text = Text_Text.Text;
                                          let stepCommand;
                                          if (children.startsWith("$ ")) {
                                            stepCommand = closure_1.stepCommand;
                                          }
                                          const obj = { variant: "text-sm/normal", color: "text-muted", style: stepCommand, children };
                                          const tmpResult = metroRequire(Text, obj, index);
                                          let tmp7 = node.detailError[index];
                                          if (tmp7 == null) {
                                            tmp7 = null;
                                          }
                                          let tmp8 = tmpResult;
                                          if (null != tmp7) {
                                            const obj2 = { style: closure_1.stepLine, children: items };
                                            items = [tmpResult, ];
                                            const obj3 = { accessible: true, accessibilityRole: "image", accessibilityLabel: tmp7, children: metroRequire(WarningIcon, obj4) };
                                            obj4 = { size: "xs", color: nativeDefault.colors.STATUS_DANGER };
                                            WarningIcon = WarningIcon2.WarningIcon;
                                            items[1] = metroRequire(View, obj3);
                                            tmp8 = metroImportDefault(View, obj2, index);
                                          }
                                          return tmp8;
                                        })
                    };
                    detail = node.detail;
                    tmp20 = closure_6(View, obj6);
                  }
                  cResult[17] = node.detail;
                  cResult[18] = node.detailError;
                  cResult[19] = tmp6;
                  cResult[20] = tmp20;
                  tmp19 = tmp20;
                }
              }
            }
          }
        }
      }
    }
  }
  const tmp18 = closure_6(ConjureNativeStatusLineDefault, { line: tmp10, live: undefined !== live && live, settled: !(undefined !== live && live) && "failed" !== node.status, failed: "failed" === status, presentation: str3, crestColor, inGutter: undefined !== inGutter && inGutter, epoch: num, trailing: tmp13 });
  cResult[7] = crestColor;
  cResult[8] = num;
  cResult[9] = undefined !== inGutter && inGutter;
  cResult[10] = undefined !== live && live;
  cResult[11] = tmp10;
  cResult[12] = !(undefined !== live && live) && "failed" !== node.status;
  cResult[13] = "failed" === status;
  cResult[14] = str3;
  cResult[15] = tmp13;
  cResult[16] = tmp18;
  tmp17 = tmp18;
}) : (function TimelineRow(inGutter) {
  let closure_1;
  let crestColor;
  let detail;
  let epoch;
  let node;
  let obj2;
  let obj6;
  let projectId;
  let str2;
  let tmp4Result;
  let tmp8Result;
  let tmp9;
  ({ projectId, node } = inGutter);
  let flag = inGutter.inGutter;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = inGutter.live;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ epoch, crestColor } = inGutter);
  if (epoch === undefined) {
    epoch = 0;
  }
  const tmp = closure_8();
  importDefault = tmp;
  const attachments = node.attachments;
  const flatMapResult = attachments.flatMap((id) => {
    if (null != id.id) {
      const CONJURE_VIEWABLE_IMAGE_TYPES = node(dependencyMap[18]).CONJURE_VIEWABLE_IMAGE_TYPES;
      if (CONJURE_VIEWABLE_IMAGE_TYPES.has(id.content_type)) {
        const obj = { id: id.id };
        const merged = Object.assign(id);
        const items = [obj];
      }
      return [];
    }
  });
  let tmp2 = closure_7;
  let obj = { line: obj2.describeNode(node), live: flag2, settled: tmp9, failed: "failed" === node.status, presentation: str2, crestColor, inGutter: flag, epoch, trailing: tmp4Result };
  let tmp8 = node;
  let tmp7 = ConjureNativeStatusLineDefault;
  obj2 = node(11792);
  str2 = "detail";
  tmp9 = !flag2 && "failed" !== node.status;
  if (flag2) {
    str2 = "headline";
  }
  tmp4Result = null;
  if (null != node.durationMs) {
    let obj3 = { variant: "text-xs/normal", color: "text-subtle", children: tmp8Result.describeDuration(node.durationMs) };
    let Text = tmp8(5088).Text;
    tmp8Result = tmp8(11891);
    tmp4Result = tmp4(Text, obj3);
  }
  const children = [tmp4(tmp7, obj), , ];
  let tmp4Result3 = null;
  if (node.detail.length > 0) {
    let obj4 = {
      style: tmp.stepDetail,
      children: detail.map((children, index) => {
          let WarningIcon;
          let items;
          let obj4;
          const Text = Text_Text.Text;
          let stepCommand;
          if (children.startsWith("$ ")) {
            stepCommand = closure_1.stepCommand;
          }
          const obj = { variant: "text-sm/normal", color: "text-muted", style: stepCommand, children };
          const tmpResult = metroRequire(Text, obj, index);
          let tmp7 = node.detailError[index];
          if (tmp7 == null) {
            tmp7 = null;
          }
          let tmp8 = tmpResult;
          if (null != tmp7) {
            const obj2 = { style: closure_1.stepLine, children: items };
            items = [tmpResult, ];
            const obj3 = { accessible: true, accessibilityRole: "image", accessibilityLabel: tmp7, children: metroRequire(WarningIcon, obj4) };
            obj4 = { size: "xs", color: nativeDefault.colors.STATUS_DANGER };
            WarningIcon = WarningIcon2.WarningIcon;
            items[1] = metroRequire(View, obj3);
            tmp8 = metroImportDefault(View, obj2, index);
          }
          return tmp8;
        })
    };
    detail = node.detail;
    tmp4Result3 = tmp4(tmp3, obj4);
  }
  children[1] = tmp4Result3;
  let tmp4Result4 = null;
  if (null != projectId) {
    tmp4Result4 = null;
    if (flatMapResult.length > 0) {
      const obj5 = { style: tmp.stepDetail, children: closure_6(ConjureNativeStepImagesDefault, obj6) };
      obj6 = { projectId, images: flatMapResult };
      tmp4Result4 = tmp4(tmp3, obj5);
    }
  }
  children[2] = tmp4Result4;
  return tmp2(View, { children });
});
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureActivityBox.tsx");

export default tmp4;
export const stretchOf = function stretchOf(memo, index, arg2) {
  let steps;
  let tasks;
  let closure_0 = index;
  const obj = { steps: steps.filter((segment) => segment.segment === index), tasks: tasks.filter((task) => task.task.segment === index) };
  steps = memo.steps;
  tasks = memo.tasks;
  const tmp = arg2;
  if (tmp) {
    let obj3;
    if (null != memo.turn) {
      obj3 = { turn: memo.turn };
      const obj2 = { turn: memo.turn };
    }
    const merged = Object.assign(obj3);
    return obj;
  }
  obj3 = {};
};
