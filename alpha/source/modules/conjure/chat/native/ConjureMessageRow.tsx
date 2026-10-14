// Module ID: 11841
// Function ID: 11842
// Name: ConjureMessageRow
// Dependencies: [19, 17, 1390, 21, 5096, 11832, 11842, 11843, 587, 558, 576, 10665, 11802, 11811, 11363, 504, 11851, 11852, 11847, 11853, 11782, 11383, 11844, 5092, 1126, 11850, 11854, 11855, 11856, 11859, 3849, 11864, 11866, 11867, 11868, 11873, 11924, 11838, 11925, 11801, 11927, 11950, 11964, 11968, 11969, 11971, 11972, 2]

// Module 11841 (ConjureMessageRow)
import nativeDefault from "native" /* 587 */;
import conjureChatTurns from "conjureChatTurns" /* 10665 */;
import ConjureDesignFeedback from "ConjureDesignFeedback" /* 11363 */;
import ConjureVersionRestoreConfirm from "ConjureVersionRestoreConfirm" /* 11782 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 11802 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 11811 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 11832 */;
import conjureNativeChatLayout from "conjureNativeChatLayout" /* 11842 */;
import chat_ConjureRepliedMessage from "chat/ConjureRepliedMessage" /* 11843 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 11847 */;
import ConjureChatRestore from "ConjureChatRestore" /* 11851 */;
import conjureQueuedMessage from "conjureQueuedMessage" /* 11853 */;
import ConjureNativeMarkdown from "ConjureNativeMarkdown" /* 11868 */;
import ConjureActivityBox from "ConjureActivityBox" /* 11873 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1390 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5096 */;
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
  let checklistExpanded;
  let checklistSuperseded;
  let clarificationDismissed;
  let first;
  let groupStart;
  let isNewest;
  let onAnswerClarification;
  let onApprovePlan;
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
  const cResult = obj.c(221);
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
  const onRestoreVersion = projectId.onRestoreVersion;
  ({ first, clarificationDismissed } = projectId);
  const tmp4 = onRestoreVersion();
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
    let closure_12 = tmp8;
    const steps2 = message.steps;
    if (cResult[5] !== message) {
      const tmpResult9 = tmp(tmp2[11]);
      const turnSettledResult1 = tmpResult9.turnSettled(message);
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
        cResult[10] = message.steps;
        const tmpResult10 = tmp(tmp2[12]);
        const latestTodosResult = tmpResult10.latestTodos(message.steps);
        class Q {
          constructor() {
            return onToggleChecklist(message.render_id, checklistSuperseded);
          }
        }
      }
      if (cResult[12] !== tmp8.tasks) {
        cResult[12] = tmp8.tasks;
        const tmpResult11 = tmp(tmp2[13]);
        const runningTodoAgentsResult = tmpResult11.runningTodoAgents(tmp8.tasks);
        class Q {
          constructor() {
            return onToggleChecklist(message.render_id, checklistSuperseded);
          }
        }
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
                if (cResult[25] !== message.content) {
                  const tmpResult12 = tmp(tmp2[14]);
                  const result = tmpResult12.parseConjureDesignRemark(message.content);
                  cResult[25] = message.content;
                  class Q {
                    constructor() {
                      return onToggleChecklist(message.render_id, checklistSuperseded);
                    }
                  }
                  tmp22 = result;
                } else {
                  tmp22 = cResult[26];
                }
                let body;
                if (tmp22 != null) {
                  body = tmp22.body;
                }
                class Q {
                  constructor() {
                    return onToggleChecklist(message.render_id, checklistSuperseded);
                  }
                }
                if (cResult[27] !== body) {
                  const trimmed = body.trim();
                  cResult[27] = body;
                  cResult[28] = trimmed;
                  class Q {
                    constructor() {
                      return onToggleChecklist(message.render_id, checklistSuperseded);
                    }
                  }
                }
                const content = tmp26;
                let attachments = null;
                if (null != message.attachments) {
                  attachments = null;
                  if (message.attachments.length > 0) {
                    attachments = message.attachments;
                  }
                }
                if (cResult[29] === tmp4.row) {
                  let tmp33;
                  let tmp32;
                  let user_id;
                  if ("user" === message.role) {
                    user_id = message.user_id;
                  }
                  class Q {
                    constructor() {
                      return onToggleChecklist(message.render_id, checklistSuperseded);
                    }
                  }
                  const _Symbol = Symbol;
                  if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                    const items = [onTogglePlan];
                    function ve() {
                      const currentUser = onTogglePlan.getCurrentUser();
                      id = undefined;
                      if (currentUser != null) {
                        id = currentUser.id;
                      }
                      return id;
                    }
                    class Q {
                      constructor() {
                        return onToggleChecklist(message.render_id, checklistSuperseded);
                      }
                    }
                    cResult[33] = ve;
                    tmp33 = ve;
                    tmp32 = items;
                  } else {
                    tmp32 = cResult[32];
                    tmp33 = cResult[33];
                  }
                  const tmpResult13 = tmp(tmp2[15]);
                  const stateFromStores = tmpResult13.useStateFromStores(tmp32, tmp33);
                  if (cResult[34] === message) {
                    let tmp36;
                    if (cResult[35] === onRestoreVersion) {
                      tmp36 = cResult[36];
                    }
                    let closure_17 = tmp36;
                    const tmp39 = message(tmp2[17])(projectId, message);
                    let closure_18 = tmp39;
                    class Q {
                      constructor() {
                        return onToggleChecklist(message.render_id, checklistSuperseded);
                      }
                    }
                    function ye() {
                      let fn;
                      let fn2;
                      let obj2;
                      let obj = { content, userId: user_id, onQueuedAction: obj2.queuedMessageActionHandler(projectId, message, stateFromStores), onRestoreVersion: fn, onViewTrace: fn2 };
                      const showConjureMessageActions = ConjureMessageActionSheet.showConjureMessageActions;
                      ConjureMessageActionSheet;
                      obj2 = conjureQueuedMessage;
                      fn = undefined;
                      if (null != closure_17) {
                        if (null != onRestoreVersion) {
                          fn = () => {
                            const obj = projectId(groupStart[20]);
                            const obj2 = {
                              onConfirm() {
                                return closure_1_10(closure_1_17);
                              }
                            };
                            return obj.confirmRestoreVersion(obj2);
                          };
                        }
                      }
                      fn2 = undefined;
                      if (null != closure_18) {
                        fn2 = () => {
                          const obj = projectId(groupStart[21]);
                          return obj.requestConjureTrace(closure_1_0, closure_1_18);
                        };
                      }
                      return showConjureMessageActions(obj);
                    }
                    cResult[37] = user_id;
                    cResult[38] = tmp26;
                    cResult[39] = stateFromStores;
                    cResult[40] = message;
                    cResult[41] = onRestoreVersion;
                    cResult[42] = projectId;
                    cResult[43] = tmp39;
                    cResult[44] = tmp36;
                    cResult[45] = ye;
                  }
                  let turnRestoreEntryResult = null;
                  if (null != onRestoreVersion) {
                    const tmpResult14 = tmp(tmp2[16]);
                    turnRestoreEntryResult = tmpResult14.turnRestoreEntry(message);
                  }
                  cResult[34] = message;
                  cResult[35] = onRestoreVersion;
                  cResult[36] = turnRestoreEntryResult;
                  tmp36 = turnRestoreEntryResult;
                }
                const items1 = [tmp4.row, groupStart && !first && tmp4.rowGroupStart];
                cResult[29] = tmp4.row;
                cResult[30] = groupStart && !first && tmp4.rowGroupStart;
                cResult[31] = items1;
              }
              function ne() {
                if (null != replied) {
                  if (onJumpToReplied != null) {
                    tmp2(tmp.id);
                  }
                }
              }
              cResult[22] = onJumpToReplied;
              class Q {
                constructor() {
                  return onToggleChecklist(message.render_id, checklistSuperseded);
                }
              }
              cResult[23] = replied;
              cResult[24] = ne;
            }
          }
          function ee() {
            return onTogglePlan(message.render_id, planSuperseded);
          }
          cResult[18] = message.render_id;
          class Q {
            constructor() {
              return onToggleChecklist(message.render_id, checklistSuperseded);
            }
          }
          cResult[19] = onTogglePlan;
          cResult[20] = planSuperseded;
          cResult[21] = ee;
          tmp20 = ee;
        }
      }
      class Q {
        constructor() {
          return onToggleChecklist(message.render_id, checklistSuperseded);
        }
      }
      cResult[14] = checklistSuperseded;
      cResult[15] = message.render_id;
      cResult[16] = onToggleChecklist;
      cResult[17] = Q;
      tmp19 = Q;
    }
    let obj2 = { turnActive: tmp12 };
    const tmpResult15 = tmp(tmp2[12]);
    const turnSegmentsResult = tmpResult15.turnSegments(steps2, obj2);
    cResult[7] = message.steps;
    cResult[8] = !tmp10;
    cResult[9] = turnSegmentsResult;
    tmp13 = turnSegmentsResult;
  }
  const tmpResult16 = tmp(tmp2[12]);
  const timelineTree = tmpResult16.buildTimelineTree(steps, { turnActive: tmp7 });
  cResult[2] = message.steps;
  cResult[3] = tmp7;
  cResult[4] = timelineTree;
  tmp8 = timelineTree;
}) : (function ConjureMessageRow(projectId) {
  let StopIcon;
  let Text2;
  let c21;
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
  let obj12;
  let obj14;
  let obj16;
  let obj18;
  let obj19;
  let obj20;
  let obj27;
  let obj31;
  let obj37;
  let obj5;
  let obj7;
  let onAnswerClarification;
  let onApprovePlan;
  let onPickIdea;
  let onRestoreVersion;
  let onToggleChecklist;
  let planExpanded;
  let planVersion;
  let secretRequestStatus;
  let showsClosingMessage;
  let tmp13Result13;
  let tmp13Result14;
  let tmp17Result;
  let tmp47;
  projectId = projectId.projectId;
  const message = projectId.message;
  const groupStart = projectId.groupStart;
  ({ isNewest, checklistSuperseded } = projectId);
  ({ secretRequestStatus, onToggleChecklist } = projectId);
  const planSuperseded = projectId.planSuperseded;
  const onTogglePlan = projectId.onTogglePlan;
  const replied = projectId.replied;
  const onJumpToReplied = projectId.onJumpToReplied;
  ({ onDismissClarification: closure_9, onRestoreVersion } = projectId);
  let trimmed;
  let user_id;
  let stateFromStores;
  let memo5;
  let closure_18;
  let restoreProposal;
  let clarification;
  c21 = undefined;
  let c22;
  let index;
  let closure_24;
  let open;
  ({ first, checklistExpanded, planVersion, planExpanded, onApprovePlan, onPickIdea, onAnswerClarification, clarificationDismissed } = projectId);
  let tmp = onRestoreVersion();
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
  let attachments = null;
  if (null != message.attachments) {
    attachments = null;
    if (message.attachments.length > 0) {
      attachments = message.attachments;
    }
  }
  const items8 = [tmp.row, groupStart && !first && tmp.rowGroupStart];
  user_id = undefined;
  if ("user" === message.role) {
    user_id = message.user_id;
  }
  let obj2 = projectId(groupStart[15]);
  const items9 = [onTogglePlan];
  stateFromStores = obj2.useStateFromStores(items9, () => {
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
  let tmp17 = message;
  const tmp18 = message(groupStart[17])(projectId, message);
  closure_18 = tmp18;
  const items11 = [trimmed, user_id, projectId, message, stateFromStores, memo5, onRestoreVersion, tmp18];
  let tmp20 = "" !== trimmed;
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
          const obj = projectId(groupStart[20]);
          const obj2 = {
            onConfirm() {
              return closure_1_10(closure_1_17);
            }
          };
          return obj.confirmRestoreVersion(obj2);
        };
      }
    }
    fn2 = undefined;
    if (null != closure_18) {
      fn2 = () => {
        const obj = projectId(groupStart[21]);
        return obj.requestConjureTrace(closure_1_0, closure_1_18);
      };
    }
    return showConjureMessageActions(obj);
  }, items11);
  if (!tmp20) {
    if (null == user_id) {
      if ("user" === message.role) {
        let tmp82Result;
        if ("" === trimmed) {
          let tmp82Result2;
          if (null == memo4) {
            tmp82Result2 = null;
          }
          return tmp82Result2;
        }
        let obj3 = { style: items8, onLongPress: tmp21, accessible: false, children: items12 };
        let tmp84 = null;
        const tmp83 = onToggleChecklist;
        if (groupStart) {
          let obj4 = { style: tmp.avatar, children: replied(tmp13(tmp14[22]).ConjureUserAvatar, obj5) };
          obj5 = { userId: message.user_id };
          tmp84 = replied(planSuperseded, obj4);
        }
        items12 = [tmp84, , , ];
        let tmp87 = null;
        if (groupStart) {
          const obj6 = { style: tmp.header, children: replied(projectId(groupStart[22]).ConjureUserHeader, obj7) };
          obj7 = { userId: null, at: null };
          ({ user_id: obj51.userId, created_at: obj51.at } = message);
          tmp87 = replied(planSuperseded, obj6);
        }
        items12[1] = tmp87;
        if (tmp20) {
          let combined;
          const Text3 = tmp13(tmp14[23]).Text;
          if (!groupStart) {
            const intl3 = tmp13(tmp14[24]).intl;
            const _HermesInternal = HermesInternal;
            combined = "" + intl3.string(tmp13(tmp14[24]).t.KD6OJJ) + ": " + trimmed;
          }
          let tmp93 = null;
          const obj8 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: items13 };
          if (null != memo4) {
            const obj9 = { label: memo4.label, variant: "text-md/medium" };
            tmp93 = replied(tmp17(tmp14[25]), obj9);
          }
          items13 = [tmp93, , ];
          let str6 = null;
          if (null != memo4) {
            str6 = null;
            if (tmp20) {
              str6 = " ";
            }
          }
          items13[1] = str6;
          items13[2] = trimmed;
          tmp82Result = tmp82(Text3, obj8);
        } else {
          tmp82Result = null;
        }
        items12[2] = tmp82Result;
        let tmp95 = null;
        if (null != attachments) {
          const obj10 = { projectId, attachments };
          tmp95 = replied(tmp17(tmp14[26]), obj10);
        }
        items12[3] = tmp95;
        tmp82Result2 = tmp82(tmp83, obj3);
      } else if ("context_boundary" === message.kind) {
        let tmp78 = null;
        if (null != message.contextSwitch) {
          const obj11 = { style: tmp.boundaryRow, children: replied(tmp17(groupStart[27]), obj12) };
          obj12 = { projectId, contextSwitch: message.contextSwitch };
          tmp78 = replied(planSuperseded, obj11);
        }
        return tmp78;
      } else {
        if ("project_event" === message.kind) {
          if (null != message.projectEvent) {
            const obj13 = { style: items8, children: replied(tmp17(groupStart[28]), obj14) };
            obj14 = { projectId, event: message.projectEvent };
            return replied(planSuperseded, obj13);
          }
        }
        if ("publish_notice" === message.kind) {
          if (null != message.publishNotice) {
            const obj15 = { style: items8, children: replied(tmp17(groupStart[29]), obj16) };
            obj16 = { projectId, notice: message.publishNotice };
            return replied(planSuperseded, obj15);
          }
        }
        if (true === message.interrupted) {
          const obj17 = { style: items8, children: replied(planSuperseded, obj18) };
          obj18 = { style: tmp.activityBox, children: replied(tmp17Result, obj19) };
          obj19 = { line: intl2.string(tmp17(groupStart[30]).oOmBdX), live: false, settled: true, inGutter: true, glyph: replied(StopIcon, obj20) };
          tmp17Result = tmp17(groupStart[5]);
          intl2 = tmp13(tmp14[24]).intl;
          obj20 = { size: "refresh_sm", color: tmp17(groupStart[8]).colors.TEXT_MUTED };
          StopIcon = tmp13(tmp14[31]).StopIcon;
          return replied(planSuperseded, obj17);
        } else {
          let provisionalTodo;
          let tmp48Result18;
          let steps = message.steps;
          const found = steps.find((kind) => "error" === kind.kind || "terminal_error" === kind.kind);
          let proposal;
          if ("proposal" === message.kind) {
            proposal = message.proposal;
          }
          const tmp13Result = projectId(groupStart[11]);
          const turnSettledResult = tmp13Result.turnSettled(message);
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
          let tmp25 = null;
          if (turnSettledResult) {
            let publishCta = message.publishCta;
            if (publishCta == null) {
              publishCta = null;
            }
            tmp25 = publishCta;
          }
          let tmp27 = null;
          if (turnSettledResult) {
            let secretRequest = message.secretRequest;
            if (secretRequest == null) {
              secretRequest = null;
            }
            tmp27 = secretRequest;
          }
          if ("open" === secretRequestStatus) {
            const tmp13Result8 = projectId(groupStart[32]);
            tmp13Result8.activeAwaitingUser(message, isNewest);
          }
          let tmp31 = null;
          if (turnSettledResult) {
            let settingsRequest = message.settingsRequest;
            if (settingsRequest == null) {
              settingsRequest = null;
            }
            tmp31 = settingsRequest;
          }
          restoreProposal = message.restoreProposal;
          if (restoreProposal == null) {
            restoreProposal = null;
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
          const obj21 = { steps: message.steps, content: trimmed, hasProposal: null != proposal, hasLiveClarification: null != clarification, hasAttachments: null != attachments };
          const tmp13Result9 = projectId(groupStart[33]);
          const turnPresentation = tmp13Result9.resolveTurnPresentation(obj21);
          ({ showsClosingMessage, replyKey: c21 } = turnPresentation);
          let tmp37 = memo.steps.length > 0;
          const closingContent = turnPresentation.closingContent;
          if (!tmp37) {
            tmp37 = memo.tasks.length > 0;
          }
          if (!tmp37) {
            if (0 === turnPresentation.streamed.length) {
              if ("" === trimmed) {
                if (null == proposal) {
                  if (null == found) {
                    if (null == ideas) {
                      if (null == items18) {
                        if (null == provisionalTodo) {
                          if (null == tmp27) {
                            if (null == tmp31) {
                              if (null == attachments) {
                                if (null == clarification) {
                                  if (null == restoreProposal) {
                                    if (null == tmp25) {
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
          const tmp13Result10 = projectId(groupStart[33]);
          const turnLeadsWithStretchResult = tmp13Result10.turnLeadsWithStretch(tmp37, turnPresentation);
          c22 = turnLeadsWithStretchResult;
          const found1 = memo1.filter((hasWork) => hasWork.hasWork);
          const atResult = found1.at(-1);
          index = undefined;
          if (atResult != null) {
            index = atResult.index;
          }
          const tmp13Result11 = projectId(groupStart[11]);
          const tmp41 = !tmp13Result11.turnSettled(message);
          closure_24 = tmp41;
          const obj22 = { turnActive: tmp41 };
          const tmp13Result12 = projectId(groupStart[12]);
          open = tmp13Result12.turnLifecycle(memo1, obj22).open;
          let avatarSpokenReplying = groupStart && null != replied;
          let tmp45Result = null;
          const tmp43 = closure_9;
          if (avatarSpokenReplying) {
            const obj23 = { replied, onJump: tmp47 };
            tmp47 = undefined;
            const tmp17Result5 = tmp17(groupStart[7]);
            const tmp45 = replied;
            if (null != onJumpToReplied) {
              tmp47 = callback2;
            }
            tmp45Result = tmp45(tmp17Result5, obj23);
          }
          const items14 = [tmp45Result, , ];
          const items15 = [, , ];
          ({ avatar: arr16[0], avatarSpoken: arr16[1] } = tmp);
          if (avatarSpokenReplying) {
            avatarSpokenReplying = tmp.avatarSpokenReplying;
          }
          const obj24 = { children: items14 };
          items15[2] = avatarSpokenReplying;
          const obj25 = { style: items15, children: replied(projectId(groupStart[22]).ConjureAvatar, {}) };
          items14[1] = replied(planSuperseded, obj25);
          const obj26 = { style: tmp.header, children: replied(projectId(groupStart[22]).ConjureHeader, obj27) };
          obj27 = { at: message.created_at };
          items14[2] = replied(planSuperseded, obj26);
          const tmp42Result = onJumpToReplied(tmp43, obj24);
          const obj28 = { style: items8, onLongPress: tmp21, accessible: false, children: null };
          let tmp48Result = null;
          const tmp51 = onToggleChecklist;
          if (turnLeadsWithStretchResult) {
            tmp48Result = null;
            if (groupStart) {
              const obj29 = { style: tmp.spoken, children: tmp42Result };
              tmp48Result = tmp48(tmp49, obj29);
            }
          }
          const items16 = [
            tmp48Result,
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
                        if (prose.prose.key !== c21) {
                          const obj3 = { style: spoken.spoken, children: metroImportDefault(ConjureRevealedMarkdown, obj4) };
                          obj4 = { source: prose.prose.content, streaming: tmp5 };
                          tmp5 = closure_24;
                          ConjureRevealedMarkdown = ConjureNativeMarkdown.ConjureRevealedMarkdown;
                          const tmp20 = hasOwnProperty;
                          if (closure_24) {
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
                        tmp16 = c22 && groupStart;
                        obj2 = ConjureActivityBox;
                        const tmp7 = metroImportDefault;
                        if (tmp16) {
                          tmp16 = 0 === index;
                        }
                        if (tmp16) {
                          tmp16 = null == prose.prose || prose.prose.key === c21;
                          const tmp17 = null == prose.prose || prose.prose.key === c21;
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
                  if (null == ideas) {
                    if (null == tmp27) {
                      if (null == tmp31) {
                        if (null == attachments) {
                          if (null == found) {
                            if (null == items18) {
                              let tmp42Result2;
                              if (null == provisionalTodo) {
                                tmp42Result2 = null;
                              }
                              items16[2] = tmp42Result2;
                              let tmp48Result14 = null;
                              if (null != tmp29) {
                                const obj30 = { style: tmp.spoken, children: replied(Text2, obj31) };
                                obj31 = { variant: "text-xs/normal", color: "text-muted", children: intl.string(tmp17(groupStart[30]).YR8A2v) };
                                Text2 = tmp13(tmp14[23]).Text;
                                intl = tmp13(tmp14[24]).intl;
                                tmp48Result14 = tmp48(tmp49, obj30);
                              }
                              items16[3] = tmp48Result14;
                              obj28.children = items16;
                              return onJumpToReplied(tmp51, obj28);
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
          let tmp54 = null;
          const obj32 = { style: tmp.spoken, children: items17 };
          if (groupStart) {
            tmp54 = null;
            if (!turnLeadsWithStretchResult) {
              tmp54 = tmp42Result;
            }
          }
          items17 = [tmp54, , , , , , , , , , , , ];
          let tmp48Result15 = null;
          if (showsClosingMessage) {
            const obj33 = { source: closingContent };
            tmp48Result15 = tmp48(tmp17(tmp14[34]), obj33);
          }
          items17[1] = tmp48Result15;
          let tmp48Result16 = null;
          if ("side_reply" === message.kind) {
            const obj34 = { variant: "text-xs/normal", color: "text-muted", children: tmp13Result13.midTurnCaption(message.acknowledges) };
            const Text = tmp13(tmp14[23]).Text;
            tmp13Result13 = projectId(groupStart[36]);
            tmp48Result16 = tmp48(Text, obj34);
          }
          items17[2] = tmp48Result16;
          let tmp48Result17 = null;
          if (null != attachments) {
            const obj35 = { projectId, attachments };
            tmp48Result17 = tmp48(tmp17(tmp14[26]), obj35);
          }
          items17[3] = tmp48Result17;
          if (null != items18) {
            const tmp17Result6 = tmp17(groupStart[37]);
            const tmp17Result7 = tmp17(groupStart[38]);
            if (items18 == null) {
              items18 = [];
            }
            const obj36 = { children: replied(tmp17Result7, obj37) };
            obj37 = { todos: items18, provisional: provisionalTodo, agents: memo3, live: tmp13Result14.checklistLive(message), superseded: checklistSuperseded, expanded: checklistExpanded, onToggleExpanded: callback };
            tmp13Result14 = projectId(groupStart[39]);
            tmp48Result18 = tmp48(tmp17Result6, obj36);
          } else {
            tmp48Result18 = null;
          }
          items17[4] = tmp48Result18;
          let tmp48Result19 = null;
          if (null != proposal) {
            const obj38 = { projectId, proposal, version: planVersion, superseded: planSuperseded, expanded: planExpanded, onToggleExpanded: callback1, onApprove: onApprovePlan };
            tmp48Result19 = tmp48(tmp17(tmp14[40]), obj38);
          }
          items17[5] = tmp48Result19;
          let tmp48Result20 = null;
          if (null != clarification) {
            const obj39 = {
              projectId,
              clarification,
              onSubmit: onAnswerClarification,
              onDismiss() {
                          return closure_9(clarification.id);
                        }
            };
            tmp48Result20 = tmp48(tmp17(tmp14[41]), obj39);
          }
          items17[6] = tmp48Result20;
          let tmp48Result21 = null;
          if (null != tmp27) {
            const obj40 = { projectId, cardId: message.render_id, request: tmp27, status: secretRequestStatus, awaiting: tmp29 };
            tmp48Result21 = tmp48(tmp17(tmp14[42]), obj40);
          }
          items17[7] = tmp48Result21;
          let tmp48Result22 = null;
          if (null != tmp31) {
            const obj41 = { projectId, request: tmp31 };
            tmp48Result22 = tmp48(tmp17(tmp14[43]), obj41);
          }
          items17[8] = tmp48Result22;
          let tmp48Result23 = null;
          if (null != tmp25) {
            const obj42 = { projectId };
            tmp48Result23 = tmp48(tmp17(tmp14[44]), obj42);
          }
          items17[9] = tmp48Result23;
          let tmp48Result24 = null;
          if (null != ideas) {
            const obj43 = { ideas, onPick: onPickIdea };
            tmp48Result24 = tmp48(tmp17(tmp14[45]), obj43);
          }
          items17[10] = tmp48Result24;
          let tmp48Result25 = null;
          if (null != restoreProposal) {
            const obj44 = { proposal: restoreProposal, onRestore: fn };
            fn = undefined;
            const tmp17Result8 = tmp17(groupStart[46]);
            if (isNewest) {
              if (null != onRestoreVersion) {
                fn = () => {
                  let obj = ConjureVersionRestoreConfirm;
                  const obj2 = {
                    onConfirm() {
                      const obj = projectId(groupStart[16]);
                      return onRestoreVersion(obj.proposalRestoreEntry(restoreProposal));
                    }
                  };
                  return obj.confirmRestoreVersion(obj2);
                };
              }
            }
            tmp48Result25 = tmp48(tmp17Result8, obj44);
          }
          items17[11] = tmp48Result25;
          let tmp48Result26 = null;
          if (null != found) {
            tmp48Result26 = null;
            if ("message" in found) {
              const obj45 = { variant: "text-sm/normal", color: "text-feedback-critical", children: found.message };
              tmp48Result26 = tmp48(tmp13(tmp14[23]).Text, obj45);
            }
          }
          items17[12] = tmp48Result26;
          tmp42Result2 = tmp42(tmp49, obj32);
        }
      }
    }
  }
}));
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMessageRow.tsx");

export default memoResult;
