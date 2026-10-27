// Module ID: 12342
// Function ID: 12343
// Name: ConjureMessageRow
// Dependencies: [19, 17, 1389, 21, 4972, 12334, 12343, 12344, 587, 558, 576, 10703, 12301, 12315, 11751, 12346, 12194, 504, 12354, 12355, 12349, 12356, 12241, 11763, 12347, 5235, 1125, 12353, 12357, 12358, 12359, 12360, 12361, 12369, 3831, 12375, 12377, 12378, 12248, 12379, 12429, 12188, 12430, 12300, 12432, 12460, 12463, 12476, 12478, 12366, 12481, 12486, 12487, 12488, 2]

// Module 12342 (ConjureMessageRow)
import nativeDefault from "native" /* 587 */;
import conjureChatTurns from "conjureChatTurns" /* 10703 */;
import ConjureDesignFeedback from "ConjureDesignFeedback" /* 11751 */;
import ConjureVersionRestoreConfirm from "ConjureVersionRestoreConfirm" /* 12241 */;
import ConjureNativeMarkdown from "ConjureNativeMarkdown" /* 12248 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 12301 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 12315 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 12334 */;
import conjureNativeChatLayout from "conjureNativeChatLayout" /* 12343 */;
import chat_ConjureRepliedMessage from "chat/ConjureRepliedMessage" /* 12344 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 12349 */;
import ConjureChatRestore from "ConjureChatRestore" /* 12354 */;
import conjureQueuedMessage from "conjureQueuedMessage" /* 12356 */;
import ConjureActivityBox from "ConjureActivityBox" /* 12379 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1389 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ConjureActivityBoxDefault = ConjureActivityBox;
let content;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let rect;
let rect1;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
let Fragment = Fragment_mod;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, rowGroupStart: obj3, boundaryRow: obj4, avatar: rect, spoken: obj5, avatarSpoken: rect1, avatarSpokenReplying: obj6, header: obj7, activityBox: obj8 };
obj2 = { position: "relative", paddingLeft: ConjureNativeStatusLine.MESSAGE_CONTENT_INSET, paddingRight: ConjureNativeStatusLine.MESSAGE_EDGE_INSET, paddingVertical: conjureNativeChatLayout.ROW_PAD, gap: conjureNativeChatLayout.BLOCK_GAP };
createStyles = createStyles.createStyles;
obj3 = { marginTop: conjureNativeChatLayout.GROUP_GAP };
obj4 = { paddingHorizontal: ConjureNativeStatusLine.MESSAGE_EDGE_INSET, paddingVertical: conjureNativeChatLayout.ROW_PAD };
rect = { position: "absolute", left: ConjureNativeStatusLine.MESSAGE_EDGE_INSET, top: conjureNativeChatLayout.ROW_PAD };
obj5 = { position: "relative", gap: conjureNativeChatLayout.BLOCK_GAP };
rect1 = { left: ConjureNativeStatusLine.MESSAGE_EDGE_INSET - ConjureNativeStatusLine.MESSAGE_CONTENT_INSET, top: 0 };
obj6 = { top: chat_ConjureRepliedMessage.REPLY_PREVIEW_HEIGHT + conjureNativeChatLayout.BLOCK_GAP };
obj7 = { marginBottom: -nativeDefault.space.PX_4 };
obj8 = { marginLeft: -conjureNativeChatLayout.RAIL_INDENT };
let closure_10 = createStyles(obj);
let memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureMessageRow(projectId) {
  let appBuildRequestDismissed;
  let canSend;
  let checklistExpanded;
  let checklistSuperseded;
  let clarificationDismissed;
  let closingContent;
  let first;
  let groupStart;
  let isNewest;
  let items1;
  let items2;
  let obj10;
  let obj14;
  let onAnswerClarification;
  let onApprovePlan;
  let onCardInputFocusChange;
  let onDismissAppBuildRequest;
  let onDismissClarification;
  let onPickIdea;
  let onToggleChecklist;
  let onTogglePlan;
  let planExpanded;
  let planSuperseded;
  let planVersion;
  let replyKey;
  let secretRequestStatus;
  let showsClosingMessage;
  let tmp5;
  let turnLeadsWithStretchResult;
  let tmp = projectId;
  const tmp2 = groupStart;
  let obj = projectId(groupStart[10]);
  const cResult = obj.c(231);
  projectId = projectId.projectId;
  const message = projectId.message;
  groupStart = projectId.groupStart;
  ({ isNewest, checklistSuperseded } = projectId);
  ({ checklistExpanded, secretRequestStatus, onToggleChecklist } = projectId);
  ({ planVersion, planSuperseded } = projectId);
  ({ planExpanded, onTogglePlan } = projectId);
  const replied = projectId.replied;
  const onJumpToReplied = projectId.onJumpToReplied;
  ({ onApprovePlan, onPickIdea, onAnswerClarification, onDismissClarification } = projectId);
  ({ onCardInputFocusChange, canSend, onDismissAppBuildRequest } = projectId);
  const onRestoreVersion = projectId.onRestoreVersion;
  ({ first, clarificationDismissed, appBuildRequestDismissed } = projectId);
  const tmp4 = onDismissAppBuildRequest();
  const spoken = tmp4;
  const steps = message.steps;
  if (cResult[0] !== message) {
    const tmpResult = tmp(tmp2[11]);
    const turnSettledResult = tmpResult.turnSettled(message);
    cResult[0] = message;
    cResult[1] = turnSettledResult;
    tmp5 = turnSettledResult;
  } else {
    tmp5 = cResult[1];
  }
  let tmp7 = !tmp5;
  if (cResult[2] === message.steps) {
    let tmp8;
    let tmp10;
    if (cResult[3] === tmp7) {
      tmp8 = cResult[4];
    }
    let closure_13 = tmp8;
    const steps2 = message.steps;
    if (cResult[5] !== message) {
      const tmpResult16 = tmp(tmp2[11]);
      const turnSettledResult1 = tmpResult16.turnSettled(message);
      cResult[5] = message;
      cResult[6] = turnSettledResult1;
      tmp10 = turnSettledResult1;
    } else {
      tmp10 = cResult[6];
    }
    if (cResult[7] === message.steps) {
      let arr;
      let tmp14;
      if (cResult[8] === !tmp10) {
        arr = cResult[9];
      }
      if (cResult[10] !== message.steps) {
        const tmpResult17 = tmp(tmp2[12]);
        const latestTodosResult = tmpResult17.latestTodos(message.steps);
        cResult[10] = message.steps;
        cResult[11] = latestTodosResult;
        tmp14 = latestTodosResult;
      } else {
        tmp14 = cResult[11];
      }
      if (cResult[12] !== tmp8.tasks) {
        const tmpResult18 = tmp(tmp2[13]);
        const runningTodoAgentsResult = tmpResult18.runningTodoAgents(tmp8.tasks);
        cResult[12] = tmp8.tasks;
        cResult[13] = runningTodoAgentsResult;
        let tmp16 = runningTodoAgentsResult;
      } else {
        tmp16 = cResult[13];
      }
      if (cResult[14] === checklistSuperseded) {
        if (cResult[15] === message.render_id) {
          if (cResult[18] === message.render_id) {
            if (cResult[19] === onTogglePlan) {
              if (cResult[20] === planSuperseded) {
                let tmp19 = cResult[21];
              }
              if (cResult[22] === onJumpToReplied) {
                let tmp21;
                let tmp25;
                let attachments;
                if (cResult[23] === replied) {
                  let tmp20 = cResult[24];
                }
                if (cResult[25] !== message.content) {
                  const tmpResult19 = tmp(tmp2[14]);
                  const result = tmpResult19.parseConjureDesignRemark(message.content);
                  cResult[25] = message.content;
                  cResult[26] = result;
                  tmp21 = result;
                } else {
                  tmp21 = cResult[26];
                }
                let body;
                if (tmp21 != null) {
                  body = tmp21.body;
                }
                if (body == null) {
                  body = message.content;
                }
                if (cResult[27] !== body) {
                  const trimmed = body.trim();
                  cResult[27] = body;
                  cResult[28] = trimmed;
                  tmp25 = trimmed;
                } else {
                  tmp25 = cResult[28];
                }
                content = tmp25;
                const tmpResult20 = tmp(tmp2[15]);
                const conjureMentionNames = tmpResult20.useConjureMentionNames(tmp25);
                if (cResult[29] === message.attachments) {
                  if (cResult[30] === message.content) {
                    let arr2;
                    if (cResult[31] === message.role) {
                      arr2 = cResult[32];
                    }
                    let tmp29 = null;
                    if (null != arr2) {
                      tmp29 = null;
                      if (arr2.length > 0) {
                        tmp29 = arr2;
                      }
                    }
                    if (cResult[33] === tmp4.row) {
                      let tmp31;
                      let tmp35;
                      let tmp34;
                      if (cResult[34] === (groupStart && !first && tmp4.rowGroupStart)) {
                        tmp31 = cResult[35];
                      }
                      let user_id;
                      if ("user" === message.role) {
                        user_id = message.user_id;
                      }
                      const _Symbol = Symbol;
                      if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                        const items = [onTogglePlan];
                        function fe() {
                          const currentUser = onTogglePlan.getCurrentUser();
                          let id;
                          if (currentUser != null) {
                            id = currentUser.id;
                          }
                          return id;
                        }
                        cResult[36] = items;
                        cResult[37] = fe;
                        tmp35 = fe;
                        tmp34 = items;
                      } else {
                        tmp34 = cResult[36];
                        tmp35 = cResult[37];
                      }
                      const tmpResult21 = tmp(tmp2[17]);
                      const stateFromStores = tmpResult21.useStateFromStores(tmp34, tmp35);
                      if (cResult[38] === message) {
                        let tmp38;
                        if (cResult[39] === onRestoreVersion) {
                          tmp38 = cResult[40];
                        }
                        let closure_18 = tmp38;
                        const tmp41 = message(tmp2[19])(projectId, message);
                        let closure_19 = tmp41;
                        if (cResult[41] === user_id) {
                          if (cResult[42] === tmp25) {
                            if (cResult[43] === stateFromStores) {
                              if (cResult[44] === message) {
                                if (cResult[45] === onRestoreVersion) {
                                  if (cResult[46] === projectId) {
                                    if (cResult[47] === tmp41) {
                                      if ("" === tmp25) {
                                        if (null == user_id) {
                                          if ("user" === message.role) {
                                            let tmp110;
                                            if ("" === tmp25) {
                                              if (null == tmp21) {
                                                tmp110 = null;
                                              }
                                              return tmp110;
                                            }
                                            if (cResult[50] === groupStart) {
                                              if (cResult[51] === message.user_id) {
                                                let tmp111;
                                                if (cResult[52] === tmp4.avatar) {
                                                  tmp111 = cResult[53];
                                                }
                                                if (cResult[54] === groupStart) {
                                                  if (cResult[55] === message.created_at) {
                                                    if (cResult[56] === message.user_id) {
                                                      let tmp115;
                                                      let tmp121Result;
                                                      if (cResult[57] === tmp4.header) {
                                                        tmp115 = cResult[58];
                                                      }
                                                      if (cResult[59] === tmp25) {
                                                        if (cResult[60] === groupStart) {
                                                          if (cResult[61] === tmp21) {
                                                            let tmp119;
                                                            if (cResult[62] === conjureMentionNames) {
                                                              tmp119 = cResult[63];
                                                            }
                                                            if (cResult[64] === tmp29) {
                                                              let tmp126;
                                                              if (cResult[65] === projectId) {
                                                                tmp126 = cResult[66];
                                                              }
                                                              if (cResult[67] !== message.agentReaction) {
                                                                let tmp130 = null;
                                                                if (null != message.agentReaction) {
                                                                  let obj2 = { reaction: message.agentReaction };
                                                                  tmp130 = replied(tmp40(tmp2[30]), obj2);
                                                                }
                                                                cResult[67] = message.agentReaction;
                                                                cResult[68] = tmp130;
                                                                class Re {
                                                                  constructor() {
                                                                    tmp = closure_0(closure_2[20]);
                                                                    obj = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                    showConjureMessageActions = tmp.showConjureMessageActions;
                                                                    obj2 = closure_0(closure_2[21]);
                                                                    obj.onQueuedAction = obj2.queuedMessageActionHandler(projectId, message, closure_17);
                                                                    fn = undefined;
                                                                    if (null != closure_18) {
                                                                      tmp2 = onRestoreVersion;
                                                                      if (null != onRestoreVersion) {
                                                                        fn = () => {
                                                                          const obj = projectId(groupStart[22]);
                                                                          const obj2 = { onConfirm() { /* body not rendered: F160767 */ } };
                                                                          return obj.confirmRestoreVersion(obj2);
                                                                        };
                                                                      }
                                                                    }
                                                                    obj.onRestoreVersion = fn;
                                                                    fn2 = undefined;
                                                                    if (null != closure_19) {
                                                                      fn2 = () => {
                                                                        const obj = projectId(groupStart[23]);
                                                                        return obj.requestConjureTrace(closure_1_0, closure_1_19);
                                                                      };
                                                                    }
                                                                    obj.onViewTrace = fn2;
                                                                    return showConjureMessageActions(obj);
                                                                  }
                                                                }
                                                              }
                                                              if (cResult[69] === tmp44) {
                                                                if (cResult[70] === tmp31) {
                                                                  if (cResult[71] === tmp111) {
                                                                    if (cResult[72] === tmp115) {
                                                                      if (cResult[73] === tmp119) {
                                                                        if (cResult[74] === tmp126) {
                                                                          let tmp132;
                                                                          if (cResult[75] === tmp129) {
                                                                            tmp132 = cResult[76];
                                                                          }
                                                                          tmp110 = tmp132;
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              let obj3 = { style: null, onLongPress: tmp44, accessible: false, children: items1 };
                                                              class Re {
                                                                constructor() {
                                                                  tmp = closure_0(closure_2[20]);
                                                                  obj = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                  showConjureMessageActions = tmp.showConjureMessageActions;
                                                                  obj2 = closure_0(closure_2[21]);
                                                                  obj.onQueuedAction = obj2.queuedMessageActionHandler(projectId, message, closure_17);
                                                                  fn = undefined;
                                                                  if (null != closure_18) {
                                                                    tmp2 = onRestoreVersion;
                                                                    if (null != onRestoreVersion) {
                                                                      fn = () => {
                                                                        const obj = projectId(groupStart[22]);
                                                                        const obj2 = { onConfirm() { /* body not rendered: F160767 */ } };
                                                                        return obj.confirmRestoreVersion(obj2);
                                                                      };
                                                                    }
                                                                  }
                                                                  obj.onRestoreVersion = fn;
                                                                  fn2 = undefined;
                                                                  if (null != closure_19) {
                                                                    fn2 = () => {
                                                                      const obj = projectId(groupStart[23]);
                                                                      return obj.requestConjureTrace(closure_1_0, closure_1_19);
                                                                    };
                                                                  }
                                                                  obj.onViewTrace = fn2;
                                                                  return showConjureMessageActions(obj);
                                                                }
                                                              }
                                                              items1 = [tmp111, tmp115, tmp119, tmp126, tmp129];
                                                              const tmp135 = onJumpToReplied(onToggleChecklist, obj3);
                                                              cResult[69] = tmp44;
                                                              cResult[70] = tmp31;
                                                              cResult[71] = tmp111;
                                                              cResult[72] = tmp115;
                                                              cResult[73] = tmp119;
                                                              cResult[74] = tmp126;
                                                              cResult[75] = tmp129;
                                                              cResult[76] = tmp135;
                                                              tmp132 = tmp135;
                                                            }
                                                            let tmp127 = null;
                                                            if (null != tmp29) {
                                                              let obj4 = { projectId, attachments: tmp29 };
                                                              tmp127 = replied(tmp40(tmp2[29]), obj4);
                                                            }
                                                            cResult[64] = tmp29;
                                                            class Re {
                                                              constructor() {
                                                                tmp = closure_0(closure_2[20]);
                                                                obj = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                showConjureMessageActions = tmp.showConjureMessageActions;
                                                                obj2 = closure_0(closure_2[21]);
                                                                obj.onQueuedAction = obj2.queuedMessageActionHandler(projectId, message, closure_17);
                                                                fn = undefined;
                                                                if (null != closure_18) {
                                                                  tmp2 = onRestoreVersion;
                                                                  if (null != onRestoreVersion) {
                                                                    fn = () => {
                                                                      const obj = projectId(groupStart[22]);
                                                                      const obj2 = { onConfirm() { /* body not rendered: F160767 */ } };
                                                                      return obj.confirmRestoreVersion(obj2);
                                                                    };
                                                                  }
                                                                }
                                                                obj.onRestoreVersion = fn;
                                                                fn2 = undefined;
                                                                if (null != closure_19) {
                                                                  fn2 = () => {
                                                                    const obj = projectId(groupStart[23]);
                                                                    return obj.requestConjureTrace(closure_1_0, closure_1_19);
                                                                  };
                                                                }
                                                                obj.onViewTrace = fn2;
                                                                return showConjureMessageActions(obj);
                                                              }
                                                            }
                                                            cResult[65] = projectId;
                                                            cResult[66] = tmp127;
                                                            tmp126 = tmp127;
                                                          }
                                                        }
                                                      }
                                                      if ("" !== tmp25) {
                                                        let tmp123;
                                                        let combined;
                                                        const Text = tmp(tmp2[25]).Text;
                                                        const tmp121 = onJumpToReplied;
                                                        if (!groupStart) {
                                                          const intl2 = tmp(tmp2[26]).intl;
                                                          const _HermesInternal = HermesInternal;
                                                          combined = "" + intl2.string(tmp(tmp2[26]).t.KD6OJJ) + ": " + conjureMentionNames;
                                                        }
                                                        const obj6 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: items2 };
                                                        class Re {
                                                          constructor() {
                                                            tmp = closure_0(closure_2[20]);
                                                            obj = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                            showConjureMessageActions = tmp.showConjureMessageActions;
                                                            obj2 = closure_0(closure_2[21]);
                                                            obj.onQueuedAction = obj2.queuedMessageActionHandler(projectId, message, closure_17);
                                                            fn = undefined;
                                                            if (null != closure_18) {
                                                              tmp2 = onRestoreVersion;
                                                              if (null != onRestoreVersion) {
                                                                fn = () => {
                                                                  const obj = projectId(groupStart[22]);
                                                                  const obj2 = { onConfirm() { /* body not rendered: F160767 */ } };
                                                                  return obj.confirmRestoreVersion(obj2);
                                                                };
                                                              }
                                                            }
                                                            obj.onRestoreVersion = fn;
                                                            fn2 = undefined;
                                                            if (null != closure_19) {
                                                              fn2 = () => {
                                                                const obj = projectId(groupStart[23]);
                                                                return obj.requestConjureTrace(closure_1_0, closure_1_19);
                                                              };
                                                            }
                                                            obj.onViewTrace = fn2;
                                                            return showConjureMessageActions(obj);
                                                          }
                                                        }
                                                        if (null != tmp21) {
                                                          const obj7 = { label: tmp21.label, variant: "text-md/medium" };
                                                          tmp123 = replied(message(tmp2[27]), obj7);
                                                        }
                                                        items2 = [tmp123, , ];
                                                        let str10 = null;
                                                        if (null != tmp21) {
                                                          str10 = null;
                                                          if ("" !== tmp25) {
                                                            str10 = " ";
                                                          }
                                                        }
                                                        items2[1] = str10;
                                                        const obj8 = { text: tmp25, variant: "text-md/normal" };
                                                        items2[2] = replied(message(tmp2[28]), obj8);
                                                        tmp121Result = tmp121(Text, obj6);
                                                      } else {
                                                        tmp121Result = null;
                                                      }
                                                      cResult[59] = tmp25;
                                                      class Re {
                                                        constructor() {
                                                          tmp = closure_0(closure_2[20]);
                                                          obj = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                          showConjureMessageActions = tmp.showConjureMessageActions;
                                                          obj2 = closure_0(closure_2[21]);
                                                          obj.onQueuedAction = obj2.queuedMessageActionHandler(projectId, message, closure_17);
                                                          fn = undefined;
                                                          if (null != closure_18) {
                                                            tmp2 = onRestoreVersion;
                                                            if (null != onRestoreVersion) {
                                                              fn = () => {
                                                                const obj = projectId(groupStart[22]);
                                                                const obj2 = { onConfirm() { /* body not rendered: F160767 */ } };
                                                                return obj.confirmRestoreVersion(obj2);
                                                              };
                                                            }
                                                          }
                                                          obj.onRestoreVersion = fn;
                                                          fn2 = undefined;
                                                          if (null != closure_19) {
                                                            fn2 = () => {
                                                              const obj = projectId(groupStart[23]);
                                                              return obj.requestConjureTrace(closure_1_0, closure_1_19);
                                                            };
                                                          }
                                                          obj.onViewTrace = fn2;
                                                          return showConjureMessageActions(obj);
                                                        }
                                                      }
                                                      cResult[61] = tmp21;
                                                      cResult[62] = conjureMentionNames;
                                                      cResult[63] = tmp121Result;
                                                      tmp119 = tmp121Result;
                                                    }
                                                  }
                                                }
                                                let tmp116 = null;
                                                if (groupStart) {
                                                  const obj9 = { style: tmp4.header, children: replied(tmp(tmp2[24]).ConjureUserHeader, obj10) };
                                                  obj10 = { userId: message.user_id, at: null };
                                                  class Re {
                                                    constructor() {
                                                      tmp = closure_0(closure_2[20]);
                                                      obj = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                      showConjureMessageActions = tmp.showConjureMessageActions;
                                                      obj2 = closure_0(closure_2[21]);
                                                      obj.onQueuedAction = obj2.queuedMessageActionHandler(projectId, message, closure_17);
                                                      fn = undefined;
                                                      if (null != closure_18) {
                                                        tmp2 = onRestoreVersion;
                                                        if (null != onRestoreVersion) {
                                                          fn = () => {
                                                            const obj = projectId(groupStart[22]);
                                                            const obj2 = { onConfirm() { /* body not rendered: F160767 */ } };
                                                            return obj.confirmRestoreVersion(obj2);
                                                          };
                                                        }
                                                      }
                                                      obj.onRestoreVersion = fn;
                                                      fn2 = undefined;
                                                      if (null != closure_19) {
                                                        fn2 = () => {
                                                          const obj = projectId(groupStart[23]);
                                                          return obj.requestConjureTrace(closure_1_0, closure_1_19);
                                                        };
                                                      }
                                                      obj.onViewTrace = fn2;
                                                      return showConjureMessageActions(obj);
                                                    }
                                                  }
                                                  tmp116 = replied(planSuperseded, obj9);
                                                }
                                                cResult[54] = groupStart;
                                                class Re {
                                                  constructor() {
                                                    tmp = closure_0(closure_2[20]);
                                                    obj = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                    showConjureMessageActions = tmp.showConjureMessageActions;
                                                    obj2 = closure_0(closure_2[21]);
                                                    obj.onQueuedAction = obj2.queuedMessageActionHandler(projectId, message, closure_17);
                                                    fn = undefined;
                                                    if (null != closure_18) {
                                                      tmp2 = onRestoreVersion;
                                                      if (null != onRestoreVersion) {
                                                        fn = () => {
                                                          const obj = projectId(groupStart[22]);
                                                          const obj2 = { onConfirm() { /* body not rendered: F160767 */ } };
                                                          return obj.confirmRestoreVersion(obj2);
                                                        };
                                                      }
                                                    }
                                                    obj.onRestoreVersion = fn;
                                                    fn2 = undefined;
                                                    if (null != closure_19) {
                                                      fn2 = () => {
                                                        const obj = projectId(groupStart[23]);
                                                        return obj.requestConjureTrace(closure_1_0, closure_1_19);
                                                      };
                                                    }
                                                    obj.onViewTrace = fn2;
                                                    return showConjureMessageActions(obj);
                                                  }
                                                }
                                                cResult[55] = message.created_at;
                                                cResult[56] = message.user_id;
                                                cResult[57] = tmp4.header;
                                                cResult[58] = tmp116;
                                                tmp115 = tmp116;
                                              }
                                            }
                                            let tmp112 = null;
                                            if (groupStart) {
                                              const obj11 = { style: tmp4.avatar, children: null };
                                              class Re {
                                                constructor() {
                                                  tmp = closure_0(closure_2[20]);
                                                  obj = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                  showConjureMessageActions = tmp.showConjureMessageActions;
                                                  obj2 = closure_0(closure_2[21]);
                                                  obj.onQueuedAction = obj2.queuedMessageActionHandler(projectId, message, closure_17);
                                                  fn = undefined;
                                                  if (null != closure_18) {
                                                    tmp2 = onRestoreVersion;
                                                    if (null != onRestoreVersion) {
                                                      fn = () => {
                                                        const obj = projectId(groupStart[22]);
                                                        const obj2 = { onConfirm() { /* body not rendered: F160767 */ } };
                                                        return obj.confirmRestoreVersion(obj2);
                                                      };
                                                    }
                                                  }
                                                  obj.onRestoreVersion = fn;
                                                  fn2 = undefined;
                                                  if (null != closure_19) {
                                                    fn2 = () => {
                                                      const obj = projectId(groupStart[23]);
                                                      return obj.requestConjureTrace(closure_1_0, closure_1_19);
                                                    };
                                                  }
                                                  obj.onViewTrace = fn2;
                                                  return showConjureMessageActions(obj);
                                                }
                                              }
                                              tmp112 = replied(planSuperseded, obj11);
                                            }
                                            cResult[50] = groupStart;
                                            class Re {
                                              constructor() {
                                                tmp = closure_0(closure_2[20]);
                                                obj = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                showConjureMessageActions = tmp.showConjureMessageActions;
                                                obj2 = closure_0(closure_2[21]);
                                                obj.onQueuedAction = obj2.queuedMessageActionHandler(projectId, message, closure_17);
                                                fn = undefined;
                                                if (null != closure_18) {
                                                  tmp2 = onRestoreVersion;
                                                  if (null != onRestoreVersion) {
                                                    fn = () => {
                                                      const obj = projectId(groupStart[22]);
                                                      const obj2 = { onConfirm() { /* body not rendered: F160767 */ } };
                                                      return obj.confirmRestoreVersion(obj2);
                                                    };
                                                  }
                                                }
                                                obj.onRestoreVersion = fn;
                                                fn2 = undefined;
                                                if (null != closure_19) {
                                                  fn2 = () => {
                                                    const obj = projectId(groupStart[23]);
                                                    return obj.requestConjureTrace(closure_1_0, closure_1_19);
                                                  };
                                                }
                                                obj.onViewTrace = fn2;
                                                return showConjureMessageActions(obj);
                                              }
                                            }
                                            cResult[51] = message.user_id;
                                            cResult[52] = tmp4.avatar;
                                            cResult[53] = tmp112;
                                            tmp111 = tmp112;
                                          } else if ("context_boundary" === message.kind) {
                                            if (cResult[77] === message.contextSwitch) {
                                              if (cResult[78] === projectId) {
                                                let tmp106;
                                                if (cResult[79] === tmp4.boundaryRow) {
                                                  tmp106 = cResult[80];
                                                }
                                                return tmp106;
                                              }
                                            }
                                            let tmp107 = null;
                                            if (null != message.contextSwitch) {
                                              const obj13 = { style: tmp4.boundaryRow, children: replied(message(tmp2[31]), obj14) };
                                              obj14 = { projectId, contextSwitch: null };
                                              class Re {
                                                constructor() {
                                                  tmp = closure_0(closure_2[20]);
                                                  obj = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                  showConjureMessageActions = tmp.showConjureMessageActions;
                                                  obj2 = closure_0(closure_2[21]);
                                                  obj.onQueuedAction = obj2.queuedMessageActionHandler(projectId, message, closure_17);
                                                  fn = undefined;
                                                  if (null != closure_18) {
                                                    tmp2 = onRestoreVersion;
                                                    if (null != onRestoreVersion) {
                                                      fn = () => {
                                                        const obj = projectId(groupStart[22]);
                                                        const obj2 = { onConfirm() { /* body not rendered: F160767 */ } };
                                                        return obj.confirmRestoreVersion(obj2);
                                                      };
                                                    }
                                                  }
                                                  obj.onRestoreVersion = fn;
                                                  fn2 = undefined;
                                                  if (null != closure_19) {
                                                    fn2 = () => {
                                                      const obj = projectId(groupStart[23]);
                                                      return obj.requestConjureTrace(closure_1_0, closure_1_19);
                                                    };
                                                  }
                                                  obj.onViewTrace = fn2;
                                                  return showConjureMessageActions(obj);
                                                }
                                              }
                                              tmp107 = replied(planSuperseded, obj13);
                                            }
                                            cResult[77] = message.contextSwitch;
                                            class Re {
                                              constructor() {
                                                tmp = closure_0(closure_2[20]);
                                                obj = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                showConjureMessageActions = tmp.showConjureMessageActions;
                                                obj2 = closure_0(closure_2[21]);
                                                obj.onQueuedAction = obj2.queuedMessageActionHandler(projectId, message, closure_17);
                                                fn = undefined;
                                                if (null != closure_18) {
                                                  tmp2 = onRestoreVersion;
                                                  if (null != onRestoreVersion) {
                                                    fn = () => {
                                                      const obj = projectId(groupStart[22]);
                                                      const obj2 = { onConfirm() { /* body not rendered: F160767 */ } };
                                                      return obj.confirmRestoreVersion(obj2);
                                                    };
                                                  }
                                                }
                                                obj.onRestoreVersion = fn;
                                                fn2 = undefined;
                                                if (null != closure_19) {
                                                  fn2 = () => {
                                                    const obj = projectId(groupStart[23]);
                                                    return obj.requestConjureTrace(closure_1_0, closure_1_19);
                                                  };
                                                }
                                                obj.onViewTrace = fn2;
                                                return showConjureMessageActions(obj);
                                              }
                                            }
                                            cResult[79] = tmp4.boundaryRow;
                                            cResult[80] = tmp107;
                                            tmp106 = tmp107;
                                          } else {
                                            if ("project_event" === message.kind) {
                                              if (null != message.projectEvent) {
                                                if (cResult[81] === message.projectEvent) {
                                                  let tmp99;
                                                  if (cResult[82] === projectId) {
                                                    tmp99 = cResult[83];
                                                  }
                                                  if (cResult[84] === tmp31) {
                                                    let tmp102;
                                                    if (cResult[85] === tmp99) {
                                                      tmp102 = cResult[86];
                                                    }
                                                    return tmp102;
                                                  }
                                                  const obj15 = { style: tmp31, children: null };
                                                  class Re {
                                                    constructor() {
                                                      tmp = closure_0(closure_2[20]);
                                                      obj = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                      showConjureMessageActions = tmp.showConjureMessageActions;
                                                      obj2 = closure_0(closure_2[21]);
                                                      obj.onQueuedAction = obj2.queuedMessageActionHandler(projectId, message, closure_17);
                                                      fn = undefined;
                                                      if (null != closure_18) {
                                                        tmp2 = onRestoreVersion;
                                                        if (null != onRestoreVersion) {
                                                          fn = () => {
                                                            const obj = projectId(groupStart[22]);
                                                            const obj2 = { onConfirm() { /* body not rendered: F160767 */ } };
                                                            return obj.confirmRestoreVersion(obj2);
                                                          };
                                                        }
                                                      }
                                                      obj.onRestoreVersion = fn;
                                                      fn2 = undefined;
                                                      if (null != closure_19) {
                                                        fn2 = () => {
                                                          const obj = projectId(groupStart[23]);
                                                          return obj.requestConjureTrace(closure_1_0, closure_1_19);
                                                        };
                                                      }
                                                      obj.onViewTrace = fn2;
                                                      return showConjureMessageActions(obj);
                                                    }
                                                  }
                                                  const tmp105 = replied(planSuperseded, obj15);
                                                  cResult[84] = tmp31;
                                                  cResult[85] = tmp99;
                                                  cResult[86] = tmp105;
                                                  tmp102 = tmp105;
                                                }
                                                const obj16 = { projectId, event: message.projectEvent };
                                                const tmp101 = replied(message(tmp2[32]), obj16);
                                                class Re {
                                                  constructor() {
                                                    tmp = closure_0(closure_2[20]);
                                                    obj = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                    showConjureMessageActions = tmp.showConjureMessageActions;
                                                    obj2 = closure_0(closure_2[21]);
                                                    obj.onQueuedAction = obj2.queuedMessageActionHandler(projectId, message, closure_17);
                                                    fn = undefined;
                                                    if (null != closure_18) {
                                                      tmp2 = onRestoreVersion;
                                                      if (null != onRestoreVersion) {
                                                        fn = () => {
                                                          const obj = projectId(groupStart[22]);
                                                          const obj2 = { onConfirm() { /* body not rendered: F160767 */ } };
                                                          return obj.confirmRestoreVersion(obj2);
                                                        };
                                                      }
                                                    }
                                                    obj.onRestoreVersion = fn;
                                                    fn2 = undefined;
                                                    if (null != closure_19) {
                                                      fn2 = () => {
                                                        const obj = projectId(groupStart[23]);
                                                        return obj.requestConjureTrace(closure_1_0, closure_1_19);
                                                      };
                                                    }
                                                    obj.onViewTrace = fn2;
                                                    return showConjureMessageActions(obj);
                                                  }
                                                }
                                                cResult[81] = message.projectEvent;
                                                cResult[82] = projectId;
                                                cResult[83] = tmp101;
                                                tmp99 = tmp101;
                                              }
                                            }
                                            if ("publish_notice" === message.kind) {
                                              if (null != message.publishNotice) {
                                                if (cResult[87] === message.publishNotice) {
                                                  let tmp92;
                                                  if (cResult[88] === projectId) {
                                                    tmp92 = cResult[89];
                                                  }
                                                  if (cResult[90] === tmp31) {
                                                    let tmp95;
                                                    if (cResult[91] === tmp92) {
                                                      tmp95 = cResult[92];
                                                    }
                                                    return tmp95;
                                                  }
                                                  const obj17 = { style: tmp31, children: null };
                                                  class Re {
                                                    constructor() {
                                                      tmp = closure_0(closure_2[20]);
                                                      obj = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                      showConjureMessageActions = tmp.showConjureMessageActions;
                                                      obj2 = closure_0(closure_2[21]);
                                                      obj.onQueuedAction = obj2.queuedMessageActionHandler(projectId, message, closure_17);
                                                      fn = undefined;
                                                      if (null != closure_18) {
                                                        tmp2 = onRestoreVersion;
                                                        if (null != onRestoreVersion) {
                                                          fn = () => {
                                                            const obj = projectId(groupStart[22]);
                                                            const obj2 = { onConfirm() { /* body not rendered: F160767 */ } };
                                                            return obj.confirmRestoreVersion(obj2);
                                                          };
                                                        }
                                                      }
                                                      obj.onRestoreVersion = fn;
                                                      fn2 = undefined;
                                                      if (null != closure_19) {
                                                        fn2 = () => {
                                                          const obj = projectId(groupStart[23]);
                                                          return obj.requestConjureTrace(closure_1_0, closure_1_19);
                                                        };
                                                      }
                                                      obj.onViewTrace = fn2;
                                                      return showConjureMessageActions(obj);
                                                    }
                                                  }
                                                  const tmp98 = replied(planSuperseded, obj17);
                                                  cResult[90] = tmp31;
                                                  cResult[91] = tmp92;
                                                  cResult[92] = tmp98;
                                                  tmp95 = tmp98;
                                                }
                                                const obj18 = { projectId, notice: message.publishNotice };
                                                const tmp94 = replied(message(tmp2[33]), obj18);
                                                class Re {
                                                  constructor() {
                                                    tmp = closure_0(closure_2[20]);
                                                    obj = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                    showConjureMessageActions = tmp.showConjureMessageActions;
                                                    obj2 = closure_0(closure_2[21]);
                                                    obj.onQueuedAction = obj2.queuedMessageActionHandler(projectId, message, closure_17);
                                                    fn = undefined;
                                                    if (null != closure_18) {
                                                      tmp2 = onRestoreVersion;
                                                      if (null != onRestoreVersion) {
                                                        fn = () => {
                                                          const obj = projectId(groupStart[22]);
                                                          const obj2 = { onConfirm() { /* body not rendered: F160767 */ } };
                                                          return obj.confirmRestoreVersion(obj2);
                                                        };
                                                      }
                                                    }
                                                    obj.onRestoreVersion = fn;
                                                    fn2 = undefined;
                                                    if (null != closure_19) {
                                                      fn2 = () => {
                                                        const obj = projectId(groupStart[23]);
                                                        return obj.requestConjureTrace(closure_1_0, closure_1_19);
                                                      };
                                                    }
                                                    obj.onViewTrace = fn2;
                                                    return showConjureMessageActions(obj);
                                                  }
                                                }
                                                cResult[87] = message.publishNotice;
                                                cResult[88] = projectId;
                                                cResult[89] = tmp94;
                                                tmp92 = tmp94;
                                              }
                                            }
                                            if (true === message.interrupted) {
                                              let tmp84;
                                              const _Symbol4 = Symbol;
                                              const activityBox = tmp4.activityBox;
                                              if (cResult[93] === Symbol.for("react.memo_cache_sentinel")) {
                                                const intl = tmp(tmp2[26]).intl;
                                                cResult[93] = intl.string(message(tmp2[34]).oOmBdX);
                                                const stringResult = intl.string(message(tmp2[34]).oOmBdX);
                                              }
                                              const _Symbol5 = Symbol;
                                              class Re {
                                                constructor() {
                                                  tmp = closure_0(closure_2[20]);
                                                  obj = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                  showConjureMessageActions = tmp.showConjureMessageActions;
                                                  obj2 = closure_0(closure_2[21]);
                                                  obj.onQueuedAction = obj2.queuedMessageActionHandler(projectId, message, closure_17);
                                                  fn = undefined;
                                                  if (null != closure_18) {
                                                    tmp2 = onRestoreVersion;
                                                    if (null != onRestoreVersion) {
                                                      fn = () => {
                                                        const obj = projectId(groupStart[22]);
                                                        const obj2 = { onConfirm() { /* body not rendered: F160767 */ } };
                                                        return obj.confirmRestoreVersion(obj2);
                                                      };
                                                    }
                                                  }
                                                  obj.onRestoreVersion = fn;
                                                  fn2 = undefined;
                                                  if (null != closure_19) {
                                                    fn2 = () => {
                                                      const obj = projectId(groupStart[23]);
                                                      return obj.requestConjureTrace(closure_1_0, closure_1_19);
                                                    };
                                                  }
                                                  obj.onViewTrace = fn2;
                                                  return showConjureMessageActions(obj);
                                                }
                                              }
                                              if (cResult[95] !== tmp4.activityBox) {
                                                const obj19 = { style: activityBox, children: tmp83 };
                                                const tmp87 = replied(planSuperseded, obj19);
                                                class Re {
                                                  constructor() {
                                                    tmp = closure_0(closure_2[20]);
                                                    obj = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                    showConjureMessageActions = tmp.showConjureMessageActions;
                                                    obj2 = closure_0(closure_2[21]);
                                                    obj.onQueuedAction = obj2.queuedMessageActionHandler(projectId, message, closure_17);
                                                    fn = undefined;
                                                    if (null != closure_18) {
                                                      tmp2 = onRestoreVersion;
                                                      if (null != onRestoreVersion) {
                                                        fn = () => {
                                                          const obj = projectId(groupStart[22]);
                                                          const obj2 = { onConfirm() { /* body not rendered: F160767 */ } };
                                                          return obj.confirmRestoreVersion(obj2);
                                                        };
                                                      }
                                                    }
                                                    obj.onRestoreVersion = fn;
                                                    fn2 = undefined;
                                                    if (null != closure_19) {
                                                      fn2 = () => {
                                                        const obj = projectId(groupStart[23]);
                                                        return obj.requestConjureTrace(closure_1_0, closure_1_19);
                                                      };
                                                    }
                                                    obj.onViewTrace = fn2;
                                                    return showConjureMessageActions(obj);
                                                  }
                                                }
                                                cResult[95] = tmp4.activityBox;
                                                cResult[96] = tmp87;
                                                tmp84 = tmp87;
                                              } else {
                                                tmp84 = cResult[96];
                                              }
                                              if (cResult[97] === tmp31) {
                                                let tmp88;
                                                if (cResult[98] === tmp84) {
                                                  tmp88 = cResult[99];
                                                }
                                                return tmp88;
                                              }
                                              const obj20 = { style: tmp31, children: tmp84 };
                                              const tmp91 = replied(planSuperseded, obj20);
                                              cResult[97] = tmp31;
                                              cResult[98] = tmp84;
                                              cResult[99] = tmp91;
                                              tmp88 = tmp91;
                                            } else {
                                              let proposal;
                                              if ("proposal" === message.kind) {
                                                proposal = message.proposal;
                                              }
                                              const tmpResult22 = tmp(tmp2[11]);
                                              const turnSettledResult2 = tmpResult22.turnSettled(message);
                                              class Re {
                                                constructor() {
                                                  tmp = closure_0(closure_2[20]);
                                                  obj = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                  showConjureMessageActions = tmp.showConjureMessageActions;
                                                  obj2 = closure_0(closure_2[21]);
                                                  obj.onQueuedAction = obj2.queuedMessageActionHandler(projectId, message, closure_17);
                                                  fn = undefined;
                                                  if (null != closure_18) {
                                                    tmp2 = onRestoreVersion;
                                                    if (null != onRestoreVersion) {
                                                      fn = () => {
                                                        const obj = projectId(groupStart[22]);
                                                        const obj2 = { onConfirm() { /* body not rendered: F160767 */ } };
                                                        return obj.confirmRestoreVersion(obj2);
                                                      };
                                                    }
                                                  }
                                                  obj.onRestoreVersion = fn;
                                                  fn2 = undefined;
                                                  if (null != closure_19) {
                                                    fn2 = () => {
                                                      const obj = projectId(groupStart[23]);
                                                      return obj.requestConjureTrace(closure_1_0, closure_1_19);
                                                    };
                                                  }
                                                  obj.onViewTrace = fn2;
                                                  return showConjureMessageActions(obj);
                                                }
                                              }
                                              let tmp47 = null;
                                              if (turnSettledResult2) {
                                                let publishCta = message.publishCta;
                                                if (publishCta == null) {
                                                  publishCta = null;
                                                }
                                                tmp47 = publishCta;
                                              }
                                              let tmp49 = null;
                                              if (turnSettledResult2) {
                                                let secretRequest = message.secretRequest;
                                                if (secretRequest == null) {
                                                  secretRequest = null;
                                                }
                                                tmp49 = secretRequest;
                                              }
                                              if (cResult[100] === isNewest) {
                                                if (cResult[101] === message) {
                                                  let provisionalTodo;
                                                  let tmp66;
                                                  let tmp65;
                                                  let tmp54 = null;
                                                  if (turnSettledResult2) {
                                                    let settingsRequest = message.settingsRequest;
                                                    if (settingsRequest == null) {
                                                      settingsRequest = null;
                                                    }
                                                    tmp54 = settingsRequest;
                                                  }
                                                  let restoreProposal = message.restoreProposal;
                                                  if (restoreProposal == null) {
                                                    restoreProposal = null;
                                                  }
                                                  class Re {
                                                    constructor() {
                                                      tmp = closure_0(closure_2[20]);
                                                      obj = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                      showConjureMessageActions = tmp.showConjureMessageActions;
                                                      obj2 = closure_0(closure_2[21]);
                                                      obj.onQueuedAction = obj2.queuedMessageActionHandler(projectId, message, closure_17);
                                                      fn = undefined;
                                                      if (null != closure_18) {
                                                        tmp2 = onRestoreVersion;
                                                        if (null != onRestoreVersion) {
                                                          fn = () => {
                                                            const obj = projectId(groupStart[22]);
                                                            const obj2 = { onConfirm() { /* body not rendered: F160767 */ } };
                                                            return obj.confirmRestoreVersion(obj2);
                                                          };
                                                        }
                                                      }
                                                      obj.onRestoreVersion = fn;
                                                      fn2 = undefined;
                                                      if (null != closure_19) {
                                                        fn2 = () => {
                                                          const obj = projectId(groupStart[23]);
                                                          return obj.requestConjureTrace(closure_1_0, closure_1_19);
                                                        };
                                                      }
                                                      obj.onViewTrace = fn2;
                                                      return showConjureMessageActions(obj);
                                                    }
                                                  }
                                                  let clarification = null;
                                                  if (isNewest) {
                                                    clarification = null;
                                                    if (!clarificationDismissed) {
                                                      clarification = null;
                                                      if (null != message.clarification) {
                                                        clarification = null;
                                                        if (message.clarification.questions.length > 0) {
                                                          clarification = message.clarification;
                                                        }
                                                      }
                                                    }
                                                  }
                                                  let tmp59 = null;
                                                  if (isNewest) {
                                                    tmp59 = null;
                                                    if (turnSettledResult2) {
                                                      tmp59 = null;
                                                      if (!appBuildRequestDismissed) {
                                                        let appBuildRequest = message.appBuildRequest;
                                                        if (appBuildRequest == null) {
                                                          appBuildRequest = null;
                                                        }
                                                        tmp59 = appBuildRequest;
                                                      }
                                                    }
                                                  }
                                                  appBuildRequest = tmp59;
                                                  if (tmp14 == null) {
                                                    let todos = null;
                                                    if (null != message.todos) {
                                                      todos = null;
                                                      if (message.todos.length > 0) {
                                                        todos = message.todos;
                                                      }
                                                    }
                                                    tmp14 = todos;
                                                  }
                                                  if (null == tmp14) {
                                                    if (null != message.provisionalTodo) {
                                                      if ("" !== message.provisionalTodo) {
                                                        provisionalTodo = message.provisionalTodo;
                                                      }
                                                    }
                                                  }
                                                  if (cResult[104] === tmp59) {
                                                    if (cResult[105] === tmp29) {
                                                      if (cResult[106] === clarification) {
                                                        if (cResult[107] === tmp25) {
                                                          if (cResult[108] === null) {
                                                            if (cResult[109] === message.steps) {
                                                              if (cResult[110] === proposal) {
                                                                if (cResult[111] === provisionalTodo) {
                                                                  if (cResult[112] === tmp47) {
                                                                    if (cResult[113] === tmp57) {
                                                                      if (cResult[114] === restoreProposal) {
                                                                        if (cResult[115] === tmp49) {
                                                                          if (cResult[116] === tmp54) {
                                                                            if (cResult[117] === tmp14) {
                                                                              if (cResult[118] === tmp8.steps.length) {
                                                                                if (cResult[119] === tmp8.tasks) {
                                                                                  replyKey = cResult[121];
                                                                                  tmp65 = cResult[123];
                                                                                  tmp66 = cResult[124];
                                                                                }
                                                                                const _Symbol3 = Symbol;
                                                                                if (tmp66 !== Symbol.for("react.early_return_sentinel")) {
                                                                                  return tmp66;
                                                                                } else {
                                                                                  let tmp72;
                                                                                  let closure_24 = tmp65;
                                                                                  if (cResult[125] !== arr) {
                                                                                    const found = arr.filter((hasWork) => hasWork.hasWork);
                                                                                    const atResult = found.at(-1);
                                                                                    let index;
                                                                                    if (atResult != null) {
                                                                                      index = atResult.index;
                                                                                    }
                                                                                    class Re {
                                                                                      constructor() {
                                                                                        tmp = closure_0(closure_2[20]);
                                                                                        obj = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                                        showConjureMessageActions = tmp.showConjureMessageActions;
                                                                                        obj2 = closure_0(closure_2[21]);
                                                                                        obj.onQueuedAction = obj2.queuedMessageActionHandler(projectId, message, closure_17);
                                                                                        fn = undefined;
                                                                                        if (null != closure_18) {
                                                                                          tmp2 = onRestoreVersion;
                                                                                          if (null != onRestoreVersion) {
                                                                                            fn = () => {
                                                                                              const obj = projectId(groupStart[22]);
                                                                                              const obj2 = { onConfirm() { /* body not rendered: F160767 */ } };
                                                                                              return obj.confirmRestoreVersion(obj2);
                                                                                            };
                                                                                          }
                                                                                        }
                                                                                        obj.onRestoreVersion = fn;
                                                                                        fn2 = undefined;
                                                                                        if (null != closure_19) {
                                                                                          fn2 = () => {
                                                                                            const obj = projectId(groupStart[23]);
                                                                                            return obj.requestConjureTrace(closure_1_0, closure_1_19);
                                                                                          };
                                                                                        }
                                                                                        obj.onViewTrace = fn2;
                                                                                        return showConjureMessageActions(obj);
                                                                                      }
                                                                                    }
                                                                                    cResult[126] = index;
                                                                                    tmp72 = index;
                                                                                  } else {
                                                                                    tmp72 = cResult[126];
                                                                                  }
                                                                                  let closure_25 = tmp72;
                                                                                  if (cResult[127] !== message) {
                                                                                    const tmpResult23 = tmp(tmp2[11]);
                                                                                    cResult[127] = message;
                                                                                    cResult[128] = tmpResult23.turnSettled(message);
                                                                                    tmpResult23.turnSettled(message);
                                                                                    class Re {
                                                                                      constructor() {
                                                                                        tmp = closure_0(closure_2[20]);
                                                                                        obj = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                                        showConjureMessageActions = tmp.showConjureMessageActions;
                                                                                        obj2 = closure_0(closure_2[21]);
                                                                                        obj.onQueuedAction = obj2.queuedMessageActionHandler(projectId, message, closure_17);
                                                                                        fn = undefined;
                                                                                        if (null != closure_18) {
                                                                                          tmp2 = onRestoreVersion;
                                                                                          if (null != onRestoreVersion) {
                                                                                            fn = () => {
                                                                                              const obj = projectId(groupStart[22]);
                                                                                              const obj2 = { onConfirm() { /* body not rendered: F160767 */ } };
                                                                                              return obj.confirmRestoreVersion(obj2);
                                                                                            };
                                                                                          }
                                                                                        }
                                                                                        obj.onRestoreVersion = fn;
                                                                                        fn2 = undefined;
                                                                                        if (null != closure_19) {
                                                                                          fn2 = () => {
                                                                                            const obj = projectId(groupStart[23]);
                                                                                            return obj.requestConjureTrace(closure_1_0, closure_1_19);
                                                                                          };
                                                                                        }
                                                                                        obj.onViewTrace = fn2;
                                                                                        return showConjureMessageActions(obj);
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                  let closure_26 = tmp77;
                                                                                  class Re {
                                                                                    constructor() {
                                                                                      tmp = closure_0(closure_2[20]);
                                                                                      obj = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                                      showConjureMessageActions = tmp.showConjureMessageActions;
                                                                                      obj2 = closure_0(closure_2[21]);
                                                                                      obj.onQueuedAction = obj2.queuedMessageActionHandler(projectId, message, closure_17);
                                                                                      fn = undefined;
                                                                                      if (null != closure_18) {
                                                                                        tmp2 = onRestoreVersion;
                                                                                        if (null != onRestoreVersion) {
                                                                                          fn = () => {
                                                                                            const obj = projectId(groupStart[22]);
                                                                                            const obj2 = { onConfirm() { /* body not rendered: F160767 */ } };
                                                                                            return obj.confirmRestoreVersion(obj2);
                                                                                          };
                                                                                        }
                                                                                      }
                                                                                      obj.onRestoreVersion = fn;
                                                                                      fn2 = undefined;
                                                                                      if (null != closure_19) {
                                                                                        fn2 = () => {
                                                                                          const obj = projectId(groupStart[23]);
                                                                                          return obj.requestConjureTrace(closure_1_0, closure_1_19);
                                                                                        };
                                                                                      }
                                                                                      obj.onViewTrace = fn2;
                                                                                      return showConjureMessageActions(obj);
                                                                                    }
                                                                                  }
                                                                                  const obj21 = { turnActive: !tmp75 };
                                                                                  const tmpResult24 = tmp(tmp2[12]);
                                                                                  cResult[129] = !tmp75;
                                                                                  cResult[130] = arr;
                                                                                  cResult[131] = tmpResult24.turnLifecycle(arr, obj21);
                                                                                  const turnLifecycleResult = tmpResult24.turnLifecycle(arr, obj21);
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                  const _Symbol2 = Symbol;
                                                  const forResult = Symbol.for("react.early_return_sentinel");
                                                  const obj22 = { steps: message.steps, content: tmp25, hasProposal: null != proposal, hasLiveClarification: null != clarification, hasAttachments: null != tmp29 };
                                                  const tmpResult25 = tmp(tmp2[37]);
                                                  const turnPresentation = tmpResult25.resolveTurnPresentation(obj22);
                                                  ({ showsClosingMessage, closingContent, replyKey } = turnPresentation);
                                                  if (!(tmp8.steps.length > 0 || tmp8.tasks.length > 0)) {
                                                    if (0 === turnPresentation.streamed.length) {
                                                      if ("" === tmp25) {
                                                        if (null == proposal) {
                                                          if (null == null) {
                                                            if (null == tmp14) {
                                                              if (null == provisionalTodo) {
                                                                if (null == tmp49) {
                                                                  if (null == tmp54) {
                                                                    if (null == tmp29) {
                                                                      if (null == clarification) {
                                                                        if (null == restoreProposal) {
                                                                          if (null == tmp57) {
                                                                            let tmp70;
                                                                            if (null == tmp59) {
                                                                              tmp70 = null;
                                                                            }
                                                                            cResult[104] = tmp59;
                                                                            cResult[105] = tmp29;
                                                                            class Re {
                                                                              constructor() {
                                                                                tmp = closure_0(closure_2[20]);
                                                                                obj = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                                showConjureMessageActions = tmp.showConjureMessageActions;
                                                                                obj2 = closure_0(closure_2[21]);
                                                                                obj.onQueuedAction = obj2.queuedMessageActionHandler(projectId, message, closure_17);
                                                                                fn = undefined;
                                                                                if (null != closure_18) {
                                                                                  tmp2 = onRestoreVersion;
                                                                                  if (null != onRestoreVersion) {
                                                                                    fn = () => {
                                                                                      const obj = projectId(groupStart[22]);
                                                                                      const obj2 = { onConfirm() { /* body not rendered: F160767 */ } };
                                                                                      return obj.confirmRestoreVersion(obj2);
                                                                                    };
                                                                                  }
                                                                                }
                                                                                obj.onRestoreVersion = fn;
                                                                                fn2 = undefined;
                                                                                if (null != closure_19) {
                                                                                  fn2 = () => {
                                                                                    const obj = projectId(groupStart[23]);
                                                                                    return obj.requestConjureTrace(closure_1_0, closure_1_19);
                                                                                  };
                                                                                }
                                                                                obj.onViewTrace = fn2;
                                                                                return showConjureMessageActions(obj);
                                                                              }
                                                                            }
                                                                            cResult[107] = tmp25;
                                                                            cResult[108] = null;
                                                                            cResult[109] = message.steps;
                                                                            cResult[110] = proposal;
                                                                            cResult[111] = provisionalTodo;
                                                                            cResult[112] = tmp47;
                                                                            cResult[113] = tmp57;
                                                                            cResult[114] = restoreProposal;
                                                                            cResult[115] = tmp49;
                                                                            cResult[116] = tmp54;
                                                                            cResult[117] = tmp14;
                                                                            cResult[118] = tmp8.steps.length;
                                                                            cResult[119] = tmp8.tasks;
                                                                            cResult[120] = closingContent;
                                                                            cResult[121] = replyKey;
                                                                            cResult[122] = showsClosingMessage;
                                                                            cResult[123] = turnLeadsWithStretchResult;
                                                                            cResult[124] = tmp70;
                                                                            tmp66 = tmp70;
                                                                            tmp65 = turnLeadsWithStretchResult;
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                  const tmpResult26 = tmp(tmp2[37]);
                                                  turnLeadsWithStretchResult = tmpResult26.turnLeadsWithStretch(tmp8.steps.length > 0 || tmp8.tasks.length > 0, turnPresentation);
                                                  tmp70 = forResult;
                                                }
                                              }
                                              let tmp52;
                                              if ("open" === secretRequestStatus) {
                                                const tmpResult27 = tmp(tmp2[36]);
                                                tmp52 = tmpResult27.activeAwaitingUser(message, isNewest);
                                                const activeAwaitingUserResult = tmpResult27.activeAwaitingUser(message, isNewest);
                                              }
                                              cResult[100] = isNewest;
                                              cResult[101] = message;
                                              cResult[102] = secretRequestStatus;
                                              cResult[103] = tmp52;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        class Re {
                          constructor() {
                            tmp = closure_0(closure_2[20]);
                            obj = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                            showConjureMessageActions = tmp.showConjureMessageActions;
                            obj2 = closure_0(closure_2[21]);
                            obj.onQueuedAction = obj2.queuedMessageActionHandler(projectId, message, closure_17);
                            fn = undefined;
                            if (null != closure_18) {
                              tmp2 = onRestoreVersion;
                              if (null != onRestoreVersion) {
                                fn = () => {
                                  const obj = projectId(groupStart[22]);
                                  const obj2 = { onConfirm() { /* body not rendered: F160767 */ } };
                                  return obj.confirmRestoreVersion(obj2);
                                };
                              }
                            }
                            obj.onRestoreVersion = fn;
                            fn2 = undefined;
                            if (null != closure_19) {
                              fn2 = () => {
                                const obj = projectId(groupStart[23]);
                                return obj.requestConjureTrace(closure_1_0, closure_1_19);
                              };
                            }
                            obj.onViewTrace = fn2;
                            return showConjureMessageActions(obj);
                          }
                        }
                        cResult[41] = user_id;
                        cResult[42] = tmp25;
                        cResult[43] = stateFromStores;
                        cResult[44] = message;
                        cResult[45] = onRestoreVersion;
                        cResult[46] = projectId;
                        cResult[47] = tmp41;
                        cResult[48] = tmp38;
                        cResult[49] = Re;
                      }
                      let turnRestoreEntryResult = null;
                      if (null != onRestoreVersion) {
                        const tmpResult28 = tmp(tmp2[18]);
                        turnRestoreEntryResult = tmpResult28.turnRestoreEntry(message);
                      }
                      cResult[38] = message;
                      cResult[39] = onRestoreVersion;
                      cResult[40] = turnRestoreEntryResult;
                      tmp38 = turnRestoreEntryResult;
                    }
                    const items3 = [, groupStart && !first && tmp4.rowGroupStart];
                    cResult[33] = tmp4.row;
                    cResult[34] = groupStart && !first && tmp4.rowGroupStart;
                    cResult[35] = items3;
                    tmp31 = items3;
                  }
                }
                if ("user" === message.role) {
                  const tmpResult29 = tmp(tmp2[16]);
                  attachments = tmpResult29.withoutInlineFileMentions(message.attachments, message.content);
                } else {
                  attachments = message.attachments;
                }
                cResult[29] = message.attachments;
                cResult[30] = message.content;
                cResult[31] = message.role;
                cResult[32] = attachments;
                arr2 = attachments;
              }
              function se() {
                if (null != replied) {
                  if (onJumpToReplied != null) {
                    tmp2(tmp.id);
                  }
                }
              }
              cResult[22] = onJumpToReplied;
              cResult[24] = se;
              tmp20 = se;
            }
          }
          function re() {
            return onTogglePlan(message.render_id, planSuperseded);
          }
          cResult[18] = message.render_id;
          cResult[20] = planSuperseded;
          cResult[21] = re;
          tmp19 = re;
        }
      }
      function le() {
        return onToggleChecklist(message.render_id, checklistSuperseded);
      }
      cResult[14] = checklistSuperseded;
      cResult[15] = message.render_id;
      cResult[16] = onToggleChecklist;
      cResult[17] = le;
    }
    const obj23 = { turnActive: !tmp10 };
    const turnSegmentsResult = obj5.turnSegments(steps2, obj23);
    cResult[7] = message.steps;
    cResult[8] = !tmp10;
    cResult[9] = turnSegmentsResult;
    arr = turnSegmentsResult;
  }
  const tmpResult30 = tmp(tmp2[12]);
  const timelineTree = tmpResult30.buildTimelineTree(steps, { turnActive: tmp7 });
  cResult[2] = message.steps;
  cResult[3] = tmp7;
  cResult[4] = timelineTree;
  tmp8 = timelineTree;
}) : (function ConjureMessageRow(projectId) {
  let StopIcon;
  let Text2;
  let appBuildRequestDismissed;
  let c23;
  let canSend;
  let checklistExpanded;
  let checklistSuperseded;
  let clarificationDismissed;
  let closure_9;
  let first;
  let fn;
  let intl;
  let intl2;
  let isNewest;
  let items12;
  let items13;
  let items17;
  let obj14;
  let obj16;
  let obj18;
  let obj20;
  let obj21;
  let obj22;
  let obj29;
  let obj33;
  let obj39;
  let obj5;
  let obj7;
  let onAnswerClarification;
  let onApprovePlan;
  let onCardInputFocusChange;
  let onPickIdea;
  let onRestoreVersion;
  let onToggleChecklist;
  let planExpanded;
  let planVersion;
  let result;
  let secretRequestStatus;
  let showsClosingMessage;
  let tmp11Result18;
  let tmp11Result19;
  let tmp11Result20;
  let tmp18Result;
  let tmp51;
  projectId = projectId.projectId;
  const message = projectId.message;
  const groupStart = projectId.groupStart;
  ({ isNewest, checklistSuperseded } = projectId);
  ({ secretRequestStatus, onToggleChecklist } = projectId);
  const planSuperseded = projectId.planSuperseded;
  const onTogglePlan = projectId.onTogglePlan;
  const replied = projectId.replied;
  const onJumpToReplied = projectId.onJumpToReplied;
  ({ onDismissClarification: closure_9, onCardInputFocusChange, onDismissAppBuildRequest: closure_10, onRestoreVersion } = projectId);
  let trimmed;
  let user_id;
  let stateFromStores;
  let memo5;
  let closure_19;
  let restoreProposal;
  let clarification;
  let appBuildRequest;
  c23 = undefined;
  let c24;
  let index;
  let closure_26;
  let open;
  ({ first, checklistExpanded, planVersion, planExpanded, onApprovePlan, onPickIdea, onAnswerClarification, clarificationDismissed, canSend, appBuildRequestDismissed } = projectId);
  let tmp = closure_10();
  const spoken = tmp;
  let obj = checklistSuperseded;
  const items = [message];
  const memo = checklistSuperseded.useMemo(() => {
    let obj2;
    const obj = { turnActive: !obj2.turnSettled(message) };
    const buildTimelineTree = ConjureTimelineTree.buildTimelineTree;
    const steps = message.steps;
    ConjureTimelineTree;
    obj2 = conjureChatTurns;
    return buildTimelineTree(steps, obj);
  }, items);
  const items1 = [message];
  const memo1 = checklistSuperseded.useMemo(() => {
    let obj2;
    const obj = { turnActive: !obj2.turnSettled(message) };
    const turnSegments = ConjureTimelineTree.turnSegments;
    const steps = message.steps;
    ConjureTimelineTree;
    obj2 = conjureChatTurns;
    return turnSegments(steps, obj);
  }, items1);
  const items2 = [message];
  const memo2 = checklistSuperseded.useMemo(() => {
    const obj = ConjureTimelineTree;
    return obj.latestTodos(message.steps);
  }, items2);
  const items3 = [memo];
  const items4 = [onToggleChecklist, message.render_id, checklistSuperseded];
  const memo3 = checklistSuperseded.useMemo(() => {
    const obj = ConjureTodoAgents;
    return obj.runningTodoAgents(memo.tasks);
  }, items3);
  const items5 = [onTogglePlan, message.render_id, planSuperseded];
  const callback = checklistSuperseded.useCallback(() => onToggleChecklist(message.render_id, checklistSuperseded), items4);
  const items6 = [onJumpToReplied, replied];
  const callback1 = checklistSuperseded.useCallback(() => onTogglePlan(message.render_id, planSuperseded), items5);
  const items7 = [message.content];
  const callback2 = checklistSuperseded.useCallback(() => {
    if (null != replied) {
      if (onJumpToReplied != null) {
        tmp2(tmp.id);
      }
    }
  }, items6);
  const memo4 = checklistSuperseded.useMemo(() => {
    const obj = ConjureDesignFeedback;
    return obj.parseConjureDesignRemark(message.content);
  }, items7);
  let body;
  if (memo4 != null) {
    body = memo4.body;
  }
  if (body == null) {
    body = message.content;
  }
  trimmed = body.trim();
  const tmp12 = groupStart;
  let obj2 = projectId(groupStart[15]);
  const conjureMentionNames = obj2.useConjureMentionNames(trimmed);
  if ("user" === message.role) {
    const tmp11Result = projectId(tmp12[16]);
    result = tmp11Result.withoutInlineFileMentions(message.attachments, message.content);
  } else {
    result = message.attachments;
  }
  let tmp14 = null;
  if (null != result) {
    tmp14 = null;
    if (result.length > 0) {
      tmp14 = result;
    }
  }
  const items8 = [tmp.row, groupStart && !first && tmp.rowGroupStart];
  user_id = undefined;
  if ("user" === message.role) {
    user_id = message.user_id;
  }
  const items9 = [onTogglePlan];
  const tmp11Result11 = projectId(tmp12[17]);
  stateFromStores = tmp11Result11.useStateFromStores(items9, () => {
    const currentUser = onTogglePlan.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items10 = [message, onRestoreVersion];
  memo5 = obj.useMemo(() => {
    let turnRestoreEntryResult = null;
    if (null != onRestoreVersion) {
      const obj = ConjureChatRestore;
      turnRestoreEntryResult = obj.turnRestoreEntry(message);
    }
    return turnRestoreEntryResult;
  }, items10);
  const tmp19 = message(tmp12[19])(projectId, message);
  closure_19 = tmp19;
  const items11 = [trimmed, user_id, projectId, message, stateFromStores, memo5, onRestoreVersion, tmp19];
  const callback3 = obj.useCallback(() => {
    let fn;
    let fn2;
    let obj2;
    let obj = { content: trimmed, userId: user_id, onQueuedAction: obj2.queuedMessageActionHandler(projectId, message, stateFromStores), onRestoreVersion: fn, onViewTrace: fn2 };
    const showConjureMessageActions = ConjureMessageActionSheet.showConjureMessageActions;
    ConjureMessageActionSheet;
    obj2 = conjureQueuedMessage;
    fn = undefined;
    if (null != memo5) {
      if (null != onRestoreVersion) {
        fn = () => {
          const obj = projectId(groupStart[22]);
          const obj2 = {
            onConfirm() {
              return closure_1_11(closure_1_18);
            }
          };
          return obj.confirmRestoreVersion(obj2);
        };
      }
    }
    fn2 = undefined;
    if (null != closure_19) {
      fn2 = () => {
        const obj = projectId(groupStart[23]);
        return obj.requestConjureTrace(closure_1_0, closure_1_19);
      };
    }
    return showConjureMessageActions(obj);
  }, items11);
  if ("" === trimmed) {
    if (null == user_id) {
      if ("user" === message.role) {
        let tmp89Result;
        if ("" === trimmed) {
          let tmp89Result2;
          if (null == memo4) {
            tmp89Result2 = null;
          }
          return tmp89Result2;
        }
        let obj3 = { style: items8, onLongPress: tmp22, accessible: false, children: items12 };
        let tmp91 = null;
        const tmp90 = onToggleChecklist;
        if (groupStart) {
          let obj4 = { style: tmp.avatar, children: replied(tmp11(tmp12[24]).ConjureUserAvatar, obj5) };
          obj5 = { userId: message.user_id };
          tmp91 = replied(planSuperseded, obj4);
        }
        items12 = [tmp91, , , , ];
        let tmp94 = null;
        if (groupStart) {
          const obj6 = { style: tmp.header, children: replied(projectId(tmp12[24]).ConjureUserHeader, obj7) };
          obj7 = { userId: null, at: null };
          ({ user_id: obj56.userId, created_at: obj56.at } = message);
          tmp94 = replied(planSuperseded, obj6);
        }
        items12[1] = tmp94;
        if ("" !== trimmed) {
          let combined;
          const Text3 = tmp11(tmp12[25]).Text;
          if (!groupStart) {
            const intl3 = tmp11(tmp12[26]).intl;
            const _HermesInternal = HermesInternal;
            combined = "" + intl3.string(tmp11(tmp12[26]).t.KD6OJJ) + ": " + conjureMentionNames;
          }
          let tmp100 = null;
          const obj8 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: items13 };
          if (null != memo4) {
            const obj9 = { label: memo4.label, variant: "text-md/medium" };
            tmp100 = replied(tmp18(tmp12[27]), obj9);
          }
          items13 = [tmp100, , ];
          let str5 = null;
          if (null != memo4) {
            str5 = null;
            if ("" !== trimmed) {
              str5 = " ";
            }
          }
          items13[1] = str5;
          const obj10 = { text: trimmed, variant: "text-md/normal" };
          items13[2] = replied(message(tmp12[28]), obj10);
          tmp89Result = tmp89(Text3, obj8);
        } else {
          tmp89Result = null;
        }
        items12[2] = tmp89Result;
        let tmp103 = null;
        if (null != tmp14) {
          const obj11 = { projectId, attachments: tmp14 };
          tmp103 = replied(tmp18(tmp12[29]), obj11);
        }
        items12[3] = tmp103;
        let tmp105 = null;
        if (null != message.agentReaction) {
          const obj12 = { reaction: message.agentReaction };
          tmp105 = replied(tmp18(tmp12[30]), obj12);
        }
        items12[4] = tmp105;
        tmp89Result2 = tmp89(tmp90, obj3);
      } else if ("context_boundary" === message.kind) {
        let tmp85 = null;
        if (null != message.contextSwitch) {
          const obj13 = { style: tmp.boundaryRow, children: replied(message(tmp12[31]), obj14) };
          obj14 = { projectId, contextSwitch: message.contextSwitch };
          tmp85 = replied(planSuperseded, obj13);
        }
        return tmp85;
      } else {
        if ("project_event" === message.kind) {
          if (null != message.projectEvent) {
            const obj15 = { style: items8, children: replied(message(tmp12[32]), obj16) };
            obj16 = { projectId, event: message.projectEvent };
            return replied(planSuperseded, obj15);
          }
        }
        if ("publish_notice" === message.kind) {
          if (null != message.publishNotice) {
            const obj17 = { style: items8, children: replied(message(tmp12[33]), obj18) };
            obj18 = { projectId, notice: message.publishNotice };
            return replied(planSuperseded, obj17);
          }
        }
        if (true === message.interrupted) {
          const obj19 = { style: items8, children: replied(planSuperseded, obj20) };
          obj20 = { style: tmp.activityBox, children: replied(tmp18Result, obj21) };
          obj21 = { line: intl2.string(message(tmp12[34]).oOmBdX), live: false, settled: true, inGutter: true, glyph: replied(StopIcon, obj22) };
          tmp18Result = message(tmp12[5]);
          intl2 = tmp11(tmp12[26]).intl;
          obj22 = { size: "refresh_sm", color: message(tmp12[8]).colors.TEXT_MUTED };
          StopIcon = tmp11(tmp12[35]).StopIcon;
          return replied(planSuperseded, obj19);
        } else {
          let provisionalTodo;
          let tmp52Result19;
          let proposal;
          if ("proposal" === message.kind) {
            proposal = message.proposal;
          }
          const tmp11Result12 = projectId(tmp12[11]);
          const turnSettledResult = tmp11Result12.turnSettled(message);
          let ideas = null;
          if (turnSettledResult) {
            ideas = null;
            if (null != message.ideas) {
              ideas = null;
              if (message.ideas.length > 0) {
                ideas = message.ideas;
              }
            }
          }
          let tmp26 = null;
          if (turnSettledResult) {
            let publishCta = message.publishCta;
            if (publishCta == null) {
              publishCta = null;
            }
            tmp26 = publishCta;
          }
          let tmp28 = null;
          if (turnSettledResult) {
            let secretRequest = message.secretRequest;
            if (secretRequest == null) {
              secretRequest = null;
            }
            tmp28 = secretRequest;
          }
          if ("open" === secretRequestStatus) {
            const tmp11Result13 = projectId(tmp12[36]);
            tmp11Result13.activeAwaitingUser(message, isNewest);
          }
          let tmp32 = null;
          if (turnSettledResult) {
            let settingsRequest = message.settingsRequest;
            if (settingsRequest == null) {
              settingsRequest = null;
            }
            tmp32 = settingsRequest;
          }
          restoreProposal = message.restoreProposal;
          if (restoreProposal == null) {
            restoreProposal = null;
          }
          let prop = message.publishScheduleProposal;
          if (prop == null) {
            prop = null;
          }
          clarification = null;
          if (isNewest) {
            clarification = null;
            if (!clarificationDismissed) {
              clarification = null;
              if (null != message.clarification) {
                clarification = null;
                if (message.clarification.questions.length > 0) {
                  clarification = message.clarification;
                }
              }
            }
          }
          let tmp37 = null;
          if (isNewest) {
            tmp37 = null;
            if (turnSettledResult) {
              tmp37 = null;
              if (!appBuildRequestDismissed) {
                appBuildRequest = message.appBuildRequest;
                if (appBuildRequest == null) {
                  appBuildRequest = null;
                }
                tmp37 = appBuildRequest;
              }
            }
          }
          appBuildRequest = tmp37;
          let items18 = memo2;
          if (memo2 == null) {
            let todos = null;
            if (null != message.todos) {
              todos = null;
              if (message.todos.length > 0) {
                todos = message.todos;
              }
            }
            items18 = todos;
          }
          if (null == items18) {
            if (null != message.provisionalTodo) {
              if ("" !== message.provisionalTodo) {
                provisionalTodo = message.provisionalTodo;
              }
            }
          }
          const obj23 = { steps: message.steps, content: trimmed, hasProposal: null != proposal, hasLiveClarification: null != clarification, hasAttachments: null != tmp14 };
          const tmp11Result14 = projectId(tmp12[37]);
          const turnPresentation = tmp11Result14.resolveTurnPresentation(obj23);
          ({ showsClosingMessage, replyKey: c23 } = turnPresentation);
          let tmp41 = memo.steps.length > 0;
          const closingContent = turnPresentation.closingContent;
          if (!tmp41) {
            tmp41 = memo.tasks.length > 0;
          }
          if (!tmp41) {
            if (0 === turnPresentation.streamed.length) {
              if ("" === trimmed) {
                if (null == proposal) {
                  if (null == ideas) {
                    if (null == items18) {
                      if (null == provisionalTodo) {
                        if (null == tmp28) {
                          if (null == tmp32) {
                            if (null == tmp14) {
                              if (null == clarification) {
                                if (null == restoreProposal) {
                                  if (null == prop) {
                                    if (null == tmp37) {
                                      if (null == tmp26) {
                                        return null;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const tmp11Result15 = projectId(tmp12[37]);
          const turnLeadsWithStretchResult = tmp11Result15.turnLeadsWithStretch(tmp41, turnPresentation);
          c24 = turnLeadsWithStretchResult;
          const found = memo1.filter((hasWork) => hasWork.hasWork);
          const atResult = found.at(-1);
          index = undefined;
          if (atResult != null) {
            index = atResult.index;
          }
          const tmp11Result16 = projectId(tmp12[11]);
          const tmp45 = !tmp11Result16.turnSettled(message);
          closure_26 = tmp45;
          const obj24 = { turnActive: tmp45 };
          const tmp11Result17 = projectId(tmp12[12]);
          open = tmp11Result17.turnLifecycle(memo1, obj24).open;
          let avatarSpokenReplying = groupStart && null != replied;
          let tmp49Result = null;
          const tmp47 = closure_9;
          if (avatarSpokenReplying) {
            const obj25 = { replied, onJump: tmp51 };
            tmp51 = undefined;
            const tmp18Result6 = message(tmp12[7]);
            const tmp49 = replied;
            if (null != onJumpToReplied) {
              tmp51 = callback2;
            }
            tmp49Result = tmp49(tmp18Result6, obj25);
          }
          const items14 = [tmp49Result, , ];
          const items15 = [, , ];
          ({ avatar: arr17[0], avatarSpoken: arr17[1] } = tmp);
          if (avatarSpokenReplying) {
            avatarSpokenReplying = tmp.avatarSpokenReplying;
          }
          const obj26 = { children: items14 };
          items15[2] = avatarSpokenReplying;
          const obj27 = { style: items15, children: replied(projectId(tmp12[24]).ConjureAvatar, {}) };
          items14[1] = replied(planSuperseded, obj27);
          const obj28 = { style: tmp.header, children: replied(projectId(tmp12[24]).ConjureHeader, obj29) };
          obj29 = { at: message.created_at };
          items14[2] = replied(planSuperseded, obj28);
          const tmp46Result = onJumpToReplied(tmp47, obj26);
          const obj30 = { style: items8, onLongPress: tmp22, accessible: false, children: null };
          let tmp52Result = null;
          const tmp55 = onToggleChecklist;
          if (turnLeadsWithStretchResult) {
            tmp52Result = null;
            if (groupStart) {
              const obj31 = { style: tmp.spoken, children: tmp46Result };
              tmp52Result = tmp52(tmp53, obj31);
            }
          }
          const items16 = [
            tmp52Result,
            memo1.map((prose, index) => {
                      let ConjureRevealedMarkdown;
                      let obj2;
                      let obj4;
                      let tmp16;
                      let tmp5;
                      let tmp19Result = null;
                      const Fragment = react.Fragment;
                      const tmp = metroImportAll;
                      if (null != prose.prose) {
                        tmp19Result = null;
                        if (prose.prose.key !== c23) {
                          const obj3 = { style: spoken.spoken, children: metroImportDefault(ConjureRevealedMarkdown, obj4) };
                          obj4 = { source: prose.prose.content, streaming: tmp5 };
                          tmp5 = closure_26;
                          ConjureRevealedMarkdown = ConjureNativeMarkdown.ConjureRevealedMarkdown;
                          const tmp20 = hasOwnProperty;
                          if (closure_26) {
                            tmp5 = index === memo1.length - 1;
                          }
                          if (tmp5) {
                            tmp5 = !prose.hasWork;
                          }
                          tmp19Result = tmp19(tmp20, obj3);
                        }
                      }
                      const children = [tmp19Result, ];
                      let tmp7Result = null;
                      if (prose.hasWork) {
                        const obj = { projectId, tree: obj2.stretchOf(memo, prose.index, prose.index === index), turnActive: prose.index === open, besideAvatar: tmp16 };
                        const tmp10 = ConjureActivityBoxDefault;
                        tmp16 = c24 && groupStart;
                        obj2 = ConjureActivityBox;
                        const tmp7 = metroImportDefault;
                        if (tmp16) {
                          tmp16 = 0 === index;
                        }
                        if (tmp16) {
                          tmp16 = null == prose.prose || prose.prose.key === c23;
                          const tmp17 = null == prose.prose || prose.prose.key === c23;
                        }
                        tmp7Result = tmp7(tmp10, obj);
                      }
                      children[1] = tmp7Result;
                      return tmp(Fragment, { children }, prose.key);
                    }),
  ,

          ];
          if (!showsClosingMessage) {
            if (null == proposal) {
              if (null == clarification) {
                if (null == restoreProposal) {
                  if (null == prop) {
                    if (null == tmp37) {
                      if (null == ideas) {
                        if (null == tmp28) {
                          if (null == tmp32) {
                            if (null == tmp14) {
                              if (null == items18) {
                                let tmp46Result2;
                                if (null == provisionalTodo) {
                                  tmp46Result2 = null;
                                }
                                items16[2] = tmp46Result2;
                                let tmp52Result15 = null;
                                if (null != tmp30) {
                                  const obj32 = { style: tmp.spoken, children: replied(Text2, obj33) };
                                  obj33 = { variant: "text-xs/normal", color: "text-muted", children: intl.string(message(tmp12[34]).YR8A2v) };
                                  Text2 = tmp11(tmp12[25]).Text;
                                  intl = tmp11(tmp12[26]).intl;
                                  tmp52Result15 = tmp52(tmp53, obj32);
                                }
                                items16[3] = tmp52Result15;
                                obj30.children = items16;
                                return onJumpToReplied(tmp55, obj30);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          let tmp58 = null;
          const obj34 = { style: tmp.spoken, children: items17 };
          if (groupStart) {
            tmp58 = null;
            if (!turnLeadsWithStretchResult) {
              tmp58 = tmp46Result;
            }
          }
          items17 = [tmp58, , , , , , , , , , , , , ];
          let tmp52Result16 = null;
          if (showsClosingMessage) {
            const obj35 = { source: closingContent };
            tmp52Result16 = tmp52(tmp18(tmp12[38]), obj35);
          }
          items17[1] = tmp52Result16;
          let tmp52Result17 = null;
          if ("side_reply" === message.kind) {
            const obj36 = { variant: "text-xs/normal", color: "text-muted", children: tmp11Result18.midTurnCaption(message.acknowledges) };
            const Text = tmp11(tmp12[25]).Text;
            tmp11Result18 = projectId(tmp12[40]);
            tmp52Result17 = tmp52(Text, obj36);
          }
          items17[2] = tmp52Result17;
          let tmp52Result18 = null;
          if (null != tmp14) {
            const obj37 = { projectId, attachments: tmp14 };
            tmp52Result18 = tmp52(tmp18(tmp12[29]), obj37);
          }
          items17[3] = tmp52Result18;
          if (null != items18) {
            const tmp18Result7 = message(tmp12[41]);
            const tmp18Result8 = message(tmp12[42]);
            if (items18 == null) {
              items18 = [];
            }
            const obj38 = { children: replied(tmp18Result8, obj39) };
            obj39 = { todos: items18, provisional: provisionalTodo, agents: memo3, live: tmp11Result19.checklistLive(message), superseded: checklistSuperseded, expanded: checklistExpanded, onToggleExpanded: callback };
            tmp11Result19 = projectId(tmp12[43]);
            tmp52Result19 = tmp52(tmp18Result7, obj38);
          } else {
            tmp52Result19 = null;
          }
          items17[4] = tmp52Result19;
          let tmp52Result20 = null;
          if (null != proposal) {
            const obj40 = { projectId, proposal, version: planVersion, superseded: planSuperseded, expanded: planExpanded, onToggleExpanded: callback1, onApprove: onApprovePlan };
            tmp52Result20 = tmp52(tmp18(tmp12[44]), obj40);
          }
          items17[5] = tmp52Result20;
          let tmp66 = null;
          if (null != clarification) {
            let tmp52Result21;
            if (null != clarification.install_scope_switch) {
              const obj41 = {
                projectId,
                clarification,
                offer: clarification.install_scope_switch,
                onKept() {
                              return closure_9(clarification.id);
                            },
                onInputFocusChange: onCardInputFocusChange
              };
              tmp52Result21 = tmp52(tmp18(tmp12[45]), obj41, clarification.id);
            } else {
              const obj42 = {
                projectId,
                clarification,
                onSubmit: onAnswerClarification,
                onDismiss() {
                              return closure_9(clarification.id);
                            },
                onInputFocusChange: onCardInputFocusChange
              };
              tmp52Result21 = tmp52(tmp18(tmp12[46]), obj42);
            }
            tmp66 = tmp52Result21;
          }
          items17[6] = tmp66;
          let tmp52Result22 = null;
          if (null != tmp37) {
            const obj43 = {
              projectId,
              request: tmp37,
              canSend,
              onDismiss() {
                          return closure_10(appBuildRequest.id);
                        },
              onInputFocusChange: onCardInputFocusChange
            };
            tmp52Result22 = tmp52(tmp18(tmp12[47]), obj43);
          }
          items17[7] = tmp52Result22;
          let tmp52Result23 = null;
          if (null != tmp28) {
            const obj44 = { projectId, cardId: message.render_id, request: tmp28, status: secretRequestStatus, awaiting: tmp30 };
            tmp52Result23 = tmp52(tmp18(tmp12[48]), obj44);
          }
          items17[8] = tmp52Result23;
          let tmp52Result24 = null;
          if (null != tmp32) {
            const obj45 = { projectId, request: tmp32, askId: message.id };
            tmp52Result24 = tmp52(tmp18(tmp12[49]), obj45);
          }
          items17[9] = tmp52Result24;
          let tmp52Result25 = null;
          if (null != tmp26) {
            const obj46 = { projectId, turnId: tmp11Result20.turnIdOfSegment(message), cta: tmp26 };
            const tmp18Result9 = message(tmp12[50]);
            tmp11Result20 = projectId(tmp12[11]);
            tmp52Result25 = tmp52(tmp18Result9, obj46);
          }
          items17[10] = tmp52Result25;
          let tmp52Result26 = null;
          if (null != ideas) {
            const obj47 = { ideas, onPick: onPickIdea };
            tmp52Result26 = tmp52(tmp18(tmp12[51]), obj47);
          }
          items17[11] = tmp52Result26;
          let tmp52Result27 = null;
          if (null != restoreProposal) {
            const obj48 = { proposal: restoreProposal, onRestore: fn };
            fn = undefined;
            const tmp18Result10 = message(tmp12[52]);
            if (isNewest) {
              if (null != onRestoreVersion) {
                fn = () => {
                  let obj = ConjureVersionRestoreConfirm;
                  const obj2 = {
                    onConfirm() {
                      const obj = projectId(groupStart[18]);
                      return onRestoreVersion(obj.proposalRestoreEntry(restoreProposal));
                    }
                  };
                  return obj.confirmRestoreVersion(obj2);
                };
              }
            }
            tmp52Result27 = tmp52(tmp18Result10, obj48);
          }
          items17[12] = tmp52Result27;
          let tmp52Result28 = null;
          if (null != prop) {
            const obj49 = { projectId, proposal: prop, current: isNewest };
            tmp52Result28 = tmp52(tmp18(tmp12[53]), obj49);
          }
          items17[13] = tmp52Result28;
          tmp46Result2 = tmp46(tmp53, obj34);
        }
      }
    }
  }
}));
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMessageRow.tsx");

export default memoResult;
