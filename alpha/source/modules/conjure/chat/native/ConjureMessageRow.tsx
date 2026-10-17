// Module ID: 12152
// Function ID: 12153
// Name: ConjureMessageRow
// Dependencies: [19, 17, 1392, 21, 5191, 12143, 12153, 12154, 587, 558, 576, 10964, 12112, 12122, 11669, 12156, 12105, 504, 12164, 12165, 12160, 12166, 12091, 11690, 12158, 5187, 1128, 12163, 12167, 12172, 12173, 12174, 12177, 3883, 12182, 12184, 12185, 12186, 12192, 12242, 12149, 12243, 12111, 12245, 12268, 12281, 12283, 12287, 12288, 12290, 12291, 12292, 2]

// Module 12152 (ConjureMessageRow)
import nativeDefault from "native" /* 587 */;
import conjureChatTurns from "conjureChatTurns" /* 10964 */;
import ConjureDesignFeedback from "ConjureDesignFeedback" /* 11669 */;
import ConjureVersionRestoreConfirm from "ConjureVersionRestoreConfirm" /* 12091 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 12112 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 12122 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 12143 */;
import conjureNativeChatLayout from "conjureNativeChatLayout" /* 12153 */;
import chat_ConjureRepliedMessage from "chat/ConjureRepliedMessage" /* 12154 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 12160 */;
import ConjureChatRestore from "ConjureChatRestore" /* 12164 */;
import conjureQueuedMessage from "conjureQueuedMessage" /* 12166 */;
import ConjureNativeMarkdown from "ConjureNativeMarkdown" /* 12186 */;
import ConjureActivityBox from "ConjureActivityBox" /* 12192 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1392 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5191 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ConjureActivityBoxDefault = ConjureActivityBox;

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
  let first;
  let groupStart;
  let id2;
  let isNewest;
  let onAnswerClarification;
  let onApprovePlan;
  let onDismissAppBuildRequest;
  let onDismissClarification;
  let onPickIdea;
  let onToggleChecklist;
  let onTogglePlan;
  let planExpanded;
  let planSuperseded;
  let planVersion;
  let secretRequestStatus;
  let tmp5;
  let tmp = projectId;
  const tmp2 = groupStart;
  let obj = projectId(groupStart[10]);
  const cResult = obj.c(232);
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
  ({ canSend, onDismissAppBuildRequest } = projectId);
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
      const tmpResult11 = tmp(tmp2[11]);
      const turnSettledResult1 = tmpResult11.turnSettled(message);
      cResult[5] = message;
      cResult[6] = turnSettledResult1;
      tmp10 = turnSettledResult1;
    } else {
      tmp10 = cResult[6];
    }
    if (cResult[7] === message.steps) {
      let tmp13;
      if (cResult[8] === !tmp10) {
        tmp13 = cResult[9];
      }
      const length = tmp13;
      if (cResult[10] !== message.steps) {
        const tmpResult12 = tmp(tmp2[12]);
        const latestTodosResult = tmpResult12.latestTodos(message.steps);
        cResult[10] = message.steps;
        cResult[11] = latestTodosResult;
      }
      if (cResult[12] !== tmp8.tasks) {
        const tmpResult13 = tmp(tmp2[13]);
        const runningTodoAgentsResult = tmpResult13.runningTodoAgents(tmp8.tasks);
        cResult[12] = tmp8.tasks;
        cResult[13] = runningTodoAgentsResult;
        let tmp17 = runningTodoAgentsResult;
      } else {
        tmp17 = cResult[13];
      }
      if (cResult[14] === checklistSuperseded) {
        if (cResult[15] === message.render_id) {
          if (cResult[16] === onToggleChecklist) {
            let tmp19 = cResult[17];
          }
          if (cResult[18] === message.render_id) {
            if (cResult[19] === onTogglePlan) {
              if (cResult[20] === planSuperseded) {
                let tmp20 = cResult[21];
              }
              if (cResult[22] === onJumpToReplied) {
                let tmp22;
                let tmp26;
                let attachments;
                if (cResult[25] !== message.content) {
                  const tmpResult14 = tmp(tmp2[14]);
                  const result = tmpResult14.parseConjureDesignRemark(message.content);
                  cResult[25] = message.content;
                  cResult[26] = result;
                  tmp22 = result;
                } else {
                  tmp22 = cResult[26];
                }
                let body;
                if (tmp22 != null) {
                  body = tmp22.body;
                }
                if (body == null) {
                  body = message.content;
                }
                if (cResult[27] !== body) {
                  const trimmed = body.trim();
                  cResult[27] = body;
                  cResult[28] = trimmed;
                  tmp26 = trimmed;
                } else {
                  tmp26 = cResult[28];
                }
                const content = tmp26;
                const tmpResult15 = tmp(tmp2[15]);
                const conjureMentionNames = tmpResult15.useConjureMentionNames(tmp26);
                if (cResult[29] === message.attachments) {
                  if (cResult[30] === message.content) {
                    if (cResult[33] === tmp4.row) {
                      let tmp36;
                      let tmp35;
                      let user_id;
                      if ("user" === message.role) {
                        user_id = message.user_id;
                      }
                      const _Symbol = Symbol;
                      if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                        const items = [onTogglePlan];
                        class Se {
                          constructor() {
                            const currentUser = onTogglePlan.getCurrentUser();
                            id = undefined;
                            if (currentUser != null) {
                              id = currentUser.id;
                            }
                            return id;
                          }
                        }
                        cResult[36] = items;
                        cResult[37] = Se;
                        tmp36 = Se;
                        tmp35 = items;
                      } else {
                        tmp35 = cResult[36];
                        tmp36 = cResult[37];
                      }
                      const tmpResult16 = tmp(tmp2[17]);
                      const stateFromStores = tmpResult16.useStateFromStores(tmp35, tmp36);
                      if (cResult[38] === message) {
                        let tmp39;
                        if (cResult[39] === onRestoreVersion) {
                          tmp39 = cResult[40];
                        }
                        let closure_18 = tmp39;
                        class Se {
                          constructor() {
                            const currentUser = onTogglePlan.getCurrentUser();
                            id = undefined;
                            if (currentUser != null) {
                              id = currentUser.id;
                            }
                            return id;
                          }
                        }
                        let closure_19 = tmp42;
                        if (cResult[41] === user_id) {
                          if (cResult[42] === tmp26) {
                            if (cResult[43] === stateFromStores) {
                              if (cResult[44] === message) {
                                if (cResult[45] === onRestoreVersion) {
                                  if (cResult[46] === projectId) {
                                    if (cResult[47] === tmp42) {
                                      class Se {
                                        constructor() {
                                          const currentUser = onTogglePlan.getCurrentUser();
                                          id = undefined;
                                          if (currentUser != null) {
                                            id = currentUser.id;
                                          }
                                          return id;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        function be() {
                          let fn;
                          let fn2;
                          let obj2;
                          let obj = { content, userId: user_id, onQueuedAction: obj2.queuedMessageActionHandler(projectId, message, stateFromStores), onRestoreVersion: fn, onViewTrace: fn2 };
                          const showConjureMessageActions = ConjureMessageActionSheet.showConjureMessageActions;
                          ConjureMessageActionSheet;
                          obj2 = conjureQueuedMessage;
                          fn = undefined;
                          if (null != closure_18) {
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
                        }
                        cResult[41] = user_id;
                        cResult[42] = tmp26;
                        cResult[43] = stateFromStores;
                        cResult[44] = message;
                        cResult[45] = onRestoreVersion;
                        cResult[46] = projectId;
                        cResult[47] = tmp42;
                        cResult[48] = tmp39;
                        cResult[49] = be;
                      }
                      let turnRestoreEntryResult = null;
                      if (null != onRestoreVersion) {
                        const tmpResult17 = tmp(tmp2[18]);
                        turnRestoreEntryResult = tmpResult17.turnRestoreEntry(message);
                      }
                      cResult[38] = message;
                      cResult[39] = onRestoreVersion;
                      cResult[40] = turnRestoreEntryResult;
                      tmp39 = turnRestoreEntryResult;
                    }
                    const items1 = [tmp4.row, groupStart && !first && tmp4.rowGroupStart];
                    cResult[33] = tmp4.row;
                    cResult[34] = groupStart && !first && tmp4.rowGroupStart;
                    cResult[35] = items1;
                  }
                }
                if ("user" === message.role) {
                  const tmpResult18 = tmp(tmp2[16]);
                  attachments = tmpResult18.withoutInlineFileMentions(message.attachments, message.content);
                } else {
                  attachments = message.attachments;
                }
                cResult[29] = message.attachments;
                cResult[30] = message.content;
                cResult[31] = message.role;
                cResult[32] = attachments;
              }
              function oe() {
                if (null != replied) {
                  if (onJumpToReplied != null) {
                    tmp2(tmp.id);
                  }
                }
              }
              cResult[22] = onJumpToReplied;
              cResult[23] = replied;
              cResult[24] = oe;
            }
          }
          function te() {
            return onTogglePlan(message.render_id, planSuperseded);
          }
          cResult[18] = message.render_id;
          cResult[19] = onTogglePlan;
          cResult[20] = planSuperseded;
          cResult[21] = te;
          tmp20 = te;
        }
      }
      function le() {
        return onToggleChecklist(message.render_id, checklistSuperseded);
      }
      cResult[14] = checklistSuperseded;
      cResult[15] = message.render_id;
      cResult[16] = onToggleChecklist;
      cResult[17] = le;
      tmp19 = le;
    }
    let obj2 = { turnActive: tmp12 };
    const tmpResult19 = tmp(tmp2[12]);
    const turnSegmentsResult = tmpResult19.turnSegments(steps2, obj2);
    cResult[7] = message.steps;
    cResult[8] = !tmp10;
    cResult[9] = turnSegmentsResult;
    tmp13 = turnSegmentsResult;
  }
  const tmpResult20 = tmp(tmp2[12]);
  const timelineTree = tmpResult20.buildTimelineTree(steps, { turnActive: tmp7 });
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
  let obj13;
  let obj15;
  let obj17;
  let obj19;
  let obj20;
  let obj21;
  let obj28;
  let obj32;
  let obj38;
  let obj5;
  let obj7;
  let onAnswerClarification;
  let onApprovePlan;
  let onPickIdea;
  let onRestoreVersion;
  let onToggleChecklist;
  let planExpanded;
  let planVersion;
  let result;
  let secretRequestStatus;
  let showsClosingMessage;
  let tmp11Result17;
  let tmp11Result18;
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
  ({ onDismissClarification: closure_9, onDismissAppBuildRequest: closure_10, onRestoreVersion } = projectId);
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
  let obj2 = projectId(groupStart[15]);
  const conjureMentionNames = obj2.useConjureMentionNames(trimmed);
  if ("user" === message.role) {
    const tmp11Result = projectId(groupStart[16]);
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
  const tmp11Result10 = projectId(groupStart[17]);
  stateFromStores = tmp11Result10.useStateFromStores(items9, () => {
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
        let tmp88Result;
        if ("" === trimmed) {
          let tmp88Result2;
          if (null == memo4) {
            tmp88Result2 = null;
          }
          return tmp88Result2;
        }
        let obj3 = { style: items8, onLongPress: tmp22, accessible: false, children: items12 };
        let tmp90 = null;
        const tmp89 = onToggleChecklist;
        if (groupStart) {
          let obj4 = { style: tmp.avatar, children: replied(tmp11(tmp12[24]).ConjureUserAvatar, obj5) };
          obj5 = { userId: message.user_id };
          tmp90 = replied(planSuperseded, obj4);
        }
        items12 = [tmp90, , , ];
        let tmp93 = null;
        if (groupStart) {
          const obj6 = { style: tmp.header, children: replied(projectId(groupStart[24]).ConjureUserHeader, obj7) };
          obj7 = { userId: null, at: null };
          ({ user_id: obj55.userId, created_at: obj55.at } = message);
          tmp93 = replied(planSuperseded, obj6);
        }
        items12[1] = tmp93;
        if ("" !== trimmed) {
          let combined;
          const Text3 = tmp11(tmp12[25]).Text;
          if (!groupStart) {
            const intl3 = tmp11(tmp12[26]).intl;
            const _HermesInternal = HermesInternal;
            combined = "" + intl3.string(tmp11(tmp12[26]).t.KD6OJJ) + ": " + conjureMentionNames;
          }
          let tmp99 = null;
          const obj8 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: items13 };
          if (null != memo4) {
            const obj9 = { label: memo4.label, variant: "text-md/medium" };
            tmp99 = replied(tmp18(tmp12[27]), obj9);
          }
          items13 = [tmp99, , ];
          let str6 = null;
          if (null != memo4) {
            str6 = null;
            if ("" !== trimmed) {
              str6 = " ";
            }
          }
          items13[1] = str6;
          const obj10 = { text: trimmed, variant: "text-md/normal" };
          items13[2] = replied(message(groupStart[28]), obj10);
          tmp88Result = tmp88(Text3, obj8);
        } else {
          tmp88Result = null;
        }
        items12[2] = tmp88Result;
        let tmp102 = null;
        if (null != tmp14) {
          const obj11 = { projectId, attachments: tmp14 };
          tmp102 = replied(tmp18(tmp12[29]), obj11);
        }
        items12[3] = tmp102;
        tmp88Result2 = tmp88(tmp89, obj3);
      } else if ("context_boundary" === message.kind) {
        let tmp84 = null;
        if (null != message.contextSwitch) {
          const obj12 = { style: tmp.boundaryRow, children: replied(message(groupStart[30]), obj13) };
          obj13 = { projectId, contextSwitch: message.contextSwitch };
          tmp84 = replied(planSuperseded, obj12);
        }
        return tmp84;
      } else {
        if ("project_event" === message.kind) {
          if (null != message.projectEvent) {
            const obj14 = { style: items8, children: replied(message(groupStart[31]), obj15) };
            obj15 = { projectId, event: message.projectEvent };
            return replied(planSuperseded, obj14);
          }
        }
        if ("publish_notice" === message.kind) {
          if (null != message.publishNotice) {
            const obj16 = { style: items8, children: replied(message(groupStart[32]), obj17) };
            obj17 = { projectId, notice: message.publishNotice };
            return replied(planSuperseded, obj16);
          }
        }
        if (true === message.interrupted) {
          const obj18 = { style: items8, children: replied(planSuperseded, obj19) };
          obj19 = { style: tmp.activityBox, children: replied(tmp18Result, obj20) };
          obj20 = { line: intl2.string(message(groupStart[33]).oOmBdX), live: false, settled: true, inGutter: true, glyph: replied(StopIcon, obj21) };
          tmp18Result = message(groupStart[5]);
          intl2 = tmp11(tmp12[26]).intl;
          obj21 = { size: "refresh_sm", color: message(groupStart[8]).colors.TEXT_MUTED };
          StopIcon = tmp11(tmp12[34]).StopIcon;
          return replied(planSuperseded, obj18);
        } else {
          let provisionalTodo;
          let tmp52Result20;
          let steps = message.steps;
          const found = steps.find((kind) => "error" === kind.kind || "terminal_error" === kind.kind);
          let proposal;
          if ("proposal" === message.kind) {
            proposal = message.proposal;
          }
          const tmp11Result11 = projectId(groupStart[11]);
          const turnSettledResult = tmp11Result11.turnSettled(message);
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
            const tmp11Result12 = projectId(groupStart[35]);
            tmp11Result12.activeAwaitingUser(message, isNewest);
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
          const obj22 = { steps: message.steps, content: trimmed, hasProposal: null != proposal, hasLiveClarification: null != clarification, hasAttachments: null != tmp14 };
          const tmp11Result13 = projectId(groupStart[36]);
          const turnPresentation = tmp11Result13.resolveTurnPresentation(obj22);
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
                  if (null == found) {
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
          }
          const tmp11Result14 = projectId(groupStart[36]);
          const turnLeadsWithStretchResult = tmp11Result14.turnLeadsWithStretch(tmp41, turnPresentation);
          c24 = turnLeadsWithStretchResult;
          const found1 = memo1.filter((hasWork) => hasWork.hasWork);
          const atResult = found1.at(-1);
          index = undefined;
          if (atResult != null) {
            index = atResult.index;
          }
          const tmp11Result15 = projectId(groupStart[11]);
          const tmp45 = !tmp11Result15.turnSettled(message);
          closure_26 = tmp45;
          const obj23 = { turnActive: tmp45 };
          const tmp11Result16 = projectId(groupStart[12]);
          open = tmp11Result16.turnLifecycle(memo1, obj23).open;
          let avatarSpokenReplying = groupStart && null != replied;
          let tmp49Result = null;
          const tmp47 = closure_9;
          if (avatarSpokenReplying) {
            const obj24 = { replied, onJump: tmp51 };
            tmp51 = undefined;
            const tmp18Result5 = message(groupStart[7]);
            const tmp49 = replied;
            if (null != onJumpToReplied) {
              tmp51 = callback2;
            }
            tmp49Result = tmp49(tmp18Result5, obj24);
          }
          const items14 = [tmp49Result, , ];
          const items15 = [, , ];
          ({ avatar: arr17[0], avatarSpoken: arr17[1] } = tmp);
          if (avatarSpokenReplying) {
            avatarSpokenReplying = tmp.avatarSpokenReplying;
          }
          const obj25 = { children: items14 };
          items15[2] = avatarSpokenReplying;
          const obj26 = { style: items15, children: replied(projectId(groupStart[24]).ConjureAvatar, {}) };
          items14[1] = replied(planSuperseded, obj26);
          const obj27 = { style: tmp.header, children: replied(projectId(groupStart[24]).ConjureHeader, obj28) };
          obj28 = { at: message.created_at };
          items14[2] = replied(planSuperseded, obj27);
          const tmp46Result = onJumpToReplied(tmp47, obj25);
          const obj29 = { style: items8, onLongPress: tmp22, accessible: false, children: null };
          let tmp52Result = null;
          const tmp55 = onToggleChecklist;
          if (turnLeadsWithStretchResult) {
            tmp52Result = null;
            if (groupStart) {
              const obj30 = { style: tmp.spoken, children: tmp46Result };
              tmp52Result = tmp52(tmp53, obj30);
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
                              if (null == found) {
                                if (null == items18) {
                                  let tmp46Result2;
                                  if (null == provisionalTodo) {
                                    tmp46Result2 = null;
                                  }
                                  items16[2] = tmp46Result2;
                                  let tmp52Result16 = null;
                                  if (null != tmp30) {
                                    const obj31 = { style: tmp.spoken, children: replied(Text2, obj32) };
                                    obj32 = { variant: "text-xs/normal", color: "text-muted", children: intl.string(message(groupStart[33]).YR8A2v) };
                                    Text2 = tmp11(tmp12[25]).Text;
                                    intl = tmp11(tmp12[26]).intl;
                                    tmp52Result16 = tmp52(tmp53, obj31);
                                  }
                                  items16[3] = tmp52Result16;
                                  obj29.children = items16;
                                  return onJumpToReplied(tmp55, obj29);
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
          let tmp58 = null;
          const obj33 = { style: tmp.spoken, children: items17 };
          if (groupStart) {
            tmp58 = null;
            if (!turnLeadsWithStretchResult) {
              tmp58 = tmp46Result;
            }
          }
          items17 = [tmp58, , , , , , , , , , , , , , ];
          let tmp52Result17 = null;
          if (showsClosingMessage) {
            const obj34 = { source: closingContent };
            tmp52Result17 = tmp52(tmp18(tmp12[37]), obj34);
          }
          items17[1] = tmp52Result17;
          let tmp52Result18 = null;
          if ("side_reply" === message.kind) {
            const obj35 = { variant: "text-xs/normal", color: "text-muted", children: tmp11Result17.midTurnCaption(message.acknowledges) };
            const Text = tmp11(tmp12[25]).Text;
            tmp11Result17 = projectId(groupStart[39]);
            tmp52Result18 = tmp52(Text, obj35);
          }
          items17[2] = tmp52Result18;
          let tmp52Result19 = null;
          if (null != tmp14) {
            const obj36 = { projectId, attachments: tmp14 };
            tmp52Result19 = tmp52(tmp18(tmp12[29]), obj36);
          }
          items17[3] = tmp52Result19;
          if (null != items18) {
            const tmp18Result6 = message(groupStart[40]);
            const tmp18Result7 = message(groupStart[41]);
            if (items18 == null) {
              items18 = [];
            }
            const obj37 = { children: replied(tmp18Result7, obj38) };
            obj38 = { todos: items18, provisional: provisionalTodo, agents: memo3, live: tmp11Result18.checklistLive(message), superseded: checklistSuperseded, expanded: checklistExpanded, onToggleExpanded: callback };
            tmp11Result18 = projectId(groupStart[42]);
            tmp52Result20 = tmp52(tmp18Result6, obj37);
          } else {
            tmp52Result20 = null;
          }
          items17[4] = tmp52Result20;
          let tmp52Result21 = null;
          if (null != proposal) {
            const obj39 = { projectId, proposal, version: planVersion, superseded: planSuperseded, expanded: planExpanded, onToggleExpanded: callback1, onApprove: onApprovePlan };
            tmp52Result21 = tmp52(tmp18(tmp12[43]), obj39);
          }
          items17[5] = tmp52Result21;
          let tmp52Result22 = null;
          if (null != clarification) {
            const obj40 = {
              projectId,
              clarification,
              onSubmit: onAnswerClarification,
              onDismiss() {
                          return closure_9(clarification.id);
                        }
            };
            tmp52Result22 = tmp52(tmp18(tmp12[44]), obj40);
          }
          items17[6] = tmp52Result22;
          let tmp52Result23 = null;
          if (null != tmp37) {
            const obj41 = {
              projectId,
              request: tmp37,
              canSend,
              onDismiss() {
                          return closure_10(appBuildRequest.id);
                        }
            };
            tmp52Result23 = tmp52(tmp18(tmp12[45]), obj41);
          }
          items17[7] = tmp52Result23;
          let tmp52Result24 = null;
          if (null != tmp28) {
            const obj42 = { projectId, cardId: message.render_id, request: tmp28, status: secretRequestStatus, awaiting: tmp30 };
            tmp52Result24 = tmp52(tmp18(tmp12[46]), obj42);
          }
          items17[8] = tmp52Result24;
          let tmp52Result25 = null;
          if (null != tmp32) {
            const obj43 = { projectId, request: tmp32 };
            tmp52Result25 = tmp52(tmp18(tmp12[47]), obj43);
          }
          items17[9] = tmp52Result25;
          let tmp52Result26 = null;
          if (null != tmp26) {
            const obj44 = { projectId };
            tmp52Result26 = tmp52(tmp18(tmp12[48]), obj44);
          }
          items17[10] = tmp52Result26;
          let tmp52Result27 = null;
          if (null != ideas) {
            const obj45 = { ideas, onPick: onPickIdea };
            tmp52Result27 = tmp52(tmp18(tmp12[49]), obj45);
          }
          items17[11] = tmp52Result27;
          let tmp52Result28 = null;
          if (null != restoreProposal) {
            const obj46 = { proposal: restoreProposal, onRestore: fn };
            fn = undefined;
            const tmp18Result8 = message(groupStart[50]);
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
            tmp52Result28 = tmp52(tmp18Result8, obj46);
          }
          items17[12] = tmp52Result28;
          let tmp52Result29 = null;
          if (null != prop) {
            const obj47 = { projectId, proposal: prop, current: isNewest };
            tmp52Result29 = tmp52(tmp18(tmp12[51]), obj47);
          }
          items17[13] = tmp52Result29;
          let tmp52Result30 = null;
          if (null != found) {
            tmp52Result30 = null;
            if ("message" in found) {
              const obj48 = { variant: "text-sm/normal", color: "text-feedback-critical", children: found.message };
              tmp52Result30 = tmp52(tmp11(tmp12[25]).Text, obj48);
            }
          }
          items17[14] = tmp52Result30;
          tmp46Result2 = tmp46(tmp53, obj33);
        }
      }
    }
  }
}));
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMessageRow.tsx");

export default memoResult;
