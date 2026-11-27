// Module ID: 18698
// Function ID: 18699
// Name: ConjureMessageRow
// Dependencies: [19, 17, 1387, 21, 5043, 18690, 18699, 18700, 575, 18653, 7660, 18670, 18612, 18701, 18535, 504, 18709, 18710, 18711, 18704, 18648, 18591, 18458, 18702, 5634, 1112, 18708, 18712, 18713, 18714, 18715, 18716, 18726, 4245, 18733, 18735, 18736, 18599, 18737, 18786, 18524, 18787, 18652, 18789, 18820, 18831, 18721, 18833, 18835, 18836, 18837, 18839, 18662, 2]

// Module 18698 (ConjureMessageRow)
import nativeDefault from "native" /* 575 */;
import conjureChatTurns from "conjureChatTurns" /* 7660 */;
import ConjureVersionRestoreConfirm from "ConjureVersionRestoreConfirm" /* 18591 */;
import ConjureNativeMarkdown from "ConjureNativeMarkdown" /* 18599 */;
import ConjureDesignFeedback from "ConjureDesignFeedback" /* 18612 */;
import conjureQueuedMessage from "conjureQueuedMessage" /* 18648 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 18653 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 18662 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 18670 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 18690 */;
import conjureNativeChatLayout from "conjureNativeChatLayout" /* 18699 */;
import ConjureRepliedMessage from "ConjureRepliedMessage" /* 18700 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 18704 */;
import ConjureChatRestore from "ConjureChatRestore" /* 18709 */;
import ConjureActivityBox from "ConjureActivityBox" /* 18737 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1387 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
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
obj6 = { top: ConjureRepliedMessage.REPLY_PREVIEW_HEIGHT + conjureNativeChatLayout.BLOCK_GAP };
obj7 = { marginBottom: -nativeDefault.space.PX_4 };
obj8 = { marginLeft: -conjureNativeChatLayout.RAIL_INDENT };
let closure_10 = createStyles(obj);
const memoResult = react.memo(function ConjureMessageRow(projectId) {
  let StopIcon;
  let Text2;
  let appBuildRequestDismissed;
  let c23;
  let canSend;
  let checklistExpanded;
  let checklistSuperseded;
  let clarificationDismissed;
  let clarificationLive;
  let closure_9;
  let first;
  let fn;
  let fn2;
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
  let tmp12Result17;
  let tmp12Result18;
  let tmp19Result;
  let tmp2;
  let tmp55;
  projectId = projectId.projectId;
  const message = projectId.message;
  const groupStart = projectId.groupStart;
  ({ isNewest, checklistSuperseded } = projectId);
  ({ secretRequestStatus, onToggleChecklist } = projectId);
  const planSuperseded = projectId.planSuperseded;
  const onTogglePlan = projectId.onTogglePlan;
  const replied = projectId.replied;
  const onJumpToReplied = projectId.onJumpToReplied;
  ({ onDismissClarification: closure_9, onCardInputFocusChange, canSend, onDismissAppBuildRequest: closure_10, onRestoreVersion } = projectId);
  let memo;
  let memo1;
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
  ({ first, checklistExpanded, planVersion, planExpanded, onApprovePlan, onPickIdea, onAnswerClarification, clarificationLive, clarificationDismissed, appBuildRequestDismissed } = projectId);
  let tmp = closure_10();
  const spoken = tmp;
  if (isNewest) {
    tmp2 = onCardInputFocusChange;
  }
  let obj = checklistSuperseded;
  const items = [message];
  memo = checklistSuperseded.useMemo(() => {
    let obj2;
    const obj = { turnActive: !obj2.turnSettled(message) };
    const buildTimelineTree = ConjureTimelineTree.buildTimelineTree;
    const steps = message.steps;
    ConjureTimelineTree;
    obj2 = conjureChatTurns;
    return buildTimelineTree(steps, obj);
  }, items);
  const items1 = [message];
  memo1 = checklistSuperseded.useMemo(() => {
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
  const tmp13 = groupStart;
  let obj2 = projectId(groupStart[13]);
  const conjureMentionNames = obj2.useConjureMentionNames(trimmed);
  if ("user" === message.role) {
    const tmp12Result = projectId(tmp13[14]);
    result = tmp12Result.withoutInlineFileMentions(message.attachments, message.content);
  } else {
    result = message.attachments;
  }
  let tmp15 = null;
  if (null != result) {
    tmp15 = null;
    if (result.length > 0) {
      tmp15 = result;
    }
  }
  const items8 = [tmp.row, groupStart && !first && tmp.rowGroupStart];
  user_id = undefined;
  if ("user" === message.role) {
    user_id = message.user_id;
  }
  const items9 = [onTogglePlan];
  const tmp12Result10 = projectId(tmp13[15]);
  stateFromStores = tmp12Result10.useStateFromStores(items9, () => {
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
  const tmp19 = message;
  let tmp20 = message(tmp13[17])(projectId, message);
  closure_19 = tmp20;
  const items11 = [trimmed, user_id, projectId, message, stateFromStores, memo5, onRestoreVersion, tmp20];
  const tmp21 = message(tmp13[18])(projectId);
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
          const obj = projectId(groupStart[21]);
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
        const obj = projectId(groupStart[22]);
        return obj.requestConjureTrace(closure_1_0, closure_1_19);
      };
    }
    return showConjureMessageActions(obj);
  }, items11);
  if ("" === trimmed) {
    if (null == user_id) {
      if ("user" === message.role) {
        let tmp93Result;
        if ("" === trimmed) {
          let tmp93Result2;
          if (null == memo4) {
            tmp93Result2 = null;
          }
          return tmp93Result2;
        }
        let obj3 = { style: items8, onLongPress: tmp24, accessible: false, children: items12 };
        let tmp95 = null;
        const tmp94 = onToggleChecklist;
        if (groupStart) {
          let obj4 = { style: tmp.avatar, children: replied(tmp12(tmp13[23]).ConjureUserAvatar, obj5) };
          obj5 = { userId: message.user_id };
          tmp95 = replied(planSuperseded, obj4);
        }
        items12 = [tmp95, , , , ];
        let tmp98 = null;
        if (groupStart) {
          const obj6 = { style: tmp.header, children: replied(projectId(tmp13[23]).ConjureUserHeader, obj7) };
          obj7 = { userId: null, at: null };
          ({ user_id: obj55.userId, created_at: obj55.at } = message);
          tmp98 = replied(planSuperseded, obj6);
        }
        items12[1] = tmp98;
        if ("" !== trimmed) {
          let combined;
          const Text3 = tmp12(tmp13[24]).Text;
          if (!groupStart) {
            const intl3 = tmp12(tmp13[25]).intl;
            const _HermesInternal = HermesInternal;
            combined = "" + intl3.string(tmp12(tmp13[25]).t.KD6OJJ) + ": " + conjureMentionNames;
          }
          let tmp104 = null;
          const obj8 = { variant: "body-md/normal", color: "text-default", accessibilityLabel: combined, children: items13 };
          if (null != memo4) {
            const obj9 = { label: memo4.label, variant: "body-md/medium" };
            tmp104 = replied(tmp19(tmp13[26]), obj9);
          }
          items13 = [tmp104, , ];
          let str5 = null;
          if (null != memo4) {
            str5 = null;
            if ("" !== trimmed) {
              str5 = " ";
            }
          }
          items13[1] = str5;
          const obj10 = { text: trimmed, variant: "body-md/normal" };
          items13[2] = replied(tmp19(tmp13[27]), obj10);
          tmp93Result = tmp93(Text3, obj8);
        } else {
          tmp93Result = null;
        }
        items12[2] = tmp93Result;
        let tmp107 = null;
        if (null != tmp15) {
          const obj11 = { projectId, attachments: tmp15 };
          tmp107 = replied(tmp19(tmp13[28]), obj11);
        }
        items12[3] = tmp107;
        let tmp109 = null;
        if (null != message.agentReaction) {
          const obj12 = { reaction: message.agentReaction };
          tmp109 = replied(tmp19(tmp13[29]), obj12);
        }
        items12[4] = tmp109;
        tmp93Result2 = tmp93(tmp94, obj3);
      } else if ("context_boundary" === message.kind) {
        let tmp89 = null;
        if (null != message.contextSwitch) {
          const obj13 = { style: tmp.boundaryRow, children: replied(tmp19(tmp13[30]), obj14) };
          obj14 = { projectId, contextSwitch: message.contextSwitch };
          tmp89 = replied(planSuperseded, obj13);
        }
        return tmp89;
      } else {
        if ("project_event" === message.kind) {
          if (null != message.projectEvent) {
            const obj15 = { style: items8, children: replied(tmp19(tmp13[31]), obj16) };
            obj16 = { projectId, askId: null, event: null, onInputFocusChange: tmp2 };
            ({ id: obj48.askId, projectEvent: obj48.event } = message);
            return replied(planSuperseded, obj15);
          }
        }
        if ("publish_notice" === message.kind) {
          if (null != message.publishNotice) {
            const obj17 = { style: items8, children: replied(tmp19(tmp13[32]), obj18) };
            obj18 = { projectId, notice: message.publishNotice };
            return replied(planSuperseded, obj17);
          }
        }
        if (true === message.interrupted) {
          const obj19 = { style: items8, children: replied(planSuperseded, obj20) };
          obj20 = { style: tmp.activityBox, children: replied(tmp19Result, obj21) };
          obj21 = { line: intl2.string(tmp19(tmp13[33]).oOmBdX), live: false, settled: true, inGutter: true, glyph: replied(StopIcon, obj22) };
          tmp19Result = tmp19(tmp13[5]);
          intl2 = tmp12(tmp13[25]).intl;
          obj22 = { size: "refresh_sm", color: tmp19(tmp13[8]).colors.TEXT_MUTED };
          StopIcon = tmp12(tmp13[34]).StopIcon;
          return replied(planSuperseded, obj19);
        } else {
          let provisionalTodo;
          let tmp56Result20;
          let proposal;
          if ("proposal" === message.kind) {
            proposal = message.proposal;
          }
          const tmp12Result11 = projectId(tmp13[10]);
          const turnSettledResult = tmp12Result11.turnSettled(message);
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
          let tmp28 = null;
          if (turnSettledResult) {
            let publishCta = message.publishCta;
            if (publishCta == null) {
              publishCta = null;
            }
            tmp28 = publishCta;
          }
          let tmp30 = null;
          if (turnSettledResult) {
            let secretRequest = message.secretRequest;
            if (secretRequest == null) {
              secretRequest = null;
            }
            tmp30 = secretRequest;
          }
          if ("open" === secretRequestStatus) {
            const tmp12Result12 = projectId(tmp13[35]);
            tmp12Result12.activeAwaitingUser(message, isNewest);
          }
          let tmp34 = null;
          if (turnSettledResult) {
            tmp34 = null;
            if (tmp21) {
              let settingsRequest = message.settingsRequest;
              if (settingsRequest == null) {
                settingsRequest = null;
              }
              tmp34 = settingsRequest;
            }
          }
          restoreProposal = message.restoreProposal;
          if (restoreProposal == null) {
            restoreProposal = null;
          }
          let prop = message.publishScheduleProposal;
          if (prop == null) {
            prop = null;
          }
          let tmp38 = null;
          if (turnSettledResult) {
            let serverChange = message.serverChange;
            if (serverChange == null) {
              serverChange = null;
            }
            tmp38 = serverChange;
          }
          clarification = null;
          if (clarificationLive) {
            clarification = null;
            if (!clarificationDismissed) {
              clarification = null;
              if (null != message.clarification) {
                clarification = message.clarification;
              }
            }
          }
          let tmp41 = null;
          if (isNewest) {
            tmp41 = null;
            if (turnSettledResult) {
              tmp41 = null;
              if (!appBuildRequestDismissed) {
                appBuildRequest = message.appBuildRequest;
                if (appBuildRequest == null) {
                  appBuildRequest = null;
                }
                tmp41 = appBuildRequest;
              }
            }
          }
          appBuildRequest = tmp41;
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
          const obj23 = { steps: message.steps, content: trimmed, hasProposal: null != proposal, hasLiveClarification: null != clarification, hasAttachments: null != tmp15 };
          const tmp12Result13 = projectId(tmp13[36]);
          const turnPresentation = tmp12Result13.resolveTurnPresentation(obj23);
          ({ showsClosingMessage, replyKey: c23 } = turnPresentation);
          let tmp45 = memo.steps.length > 0;
          const closingContent = turnPresentation.closingContent;
          if (!tmp45) {
            tmp45 = memo.tasks.length > 0;
          }
          if (!tmp45) {
            if (0 === turnPresentation.streamed.length) {
              if ("" === trimmed) {
                if (null == proposal) {
                  if (null == ideas) {
                    if (null == items18) {
                      if (null == provisionalTodo) {
                        if (null == tmp30) {
                          if (null == tmp34) {
                            if (null == tmp15) {
                              if (null == clarification) {
                                if (null == restoreProposal) {
                                  if (null == prop) {
                                    if (null == tmp38) {
                                      if (null == tmp41) {
                                        if (null == tmp28) {
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
          const tmp12Result14 = projectId(tmp13[36]);
          const turnLeadsWithStretchResult = tmp12Result14.turnLeadsWithStretch(tmp45, turnPresentation);
          c24 = turnLeadsWithStretchResult;
          const found = memo1.filter((hasWork) => hasWork.hasWork);
          const atResult = found.at(-1);
          index = undefined;
          if (atResult != null) {
            index = atResult.index;
          }
          const tmp12Result15 = projectId(tmp13[10]);
          const tmp49 = !tmp12Result15.turnSettled(message);
          closure_26 = tmp49;
          const obj24 = { turnActive: tmp49 };
          const tmp12Result16 = projectId(tmp13[9]);
          open = tmp12Result16.turnLifecycle(memo1, obj24).open;
          let avatarSpokenReplying = groupStart && null != replied;
          let tmp53Result = null;
          const tmp51 = closure_9;
          if (avatarSpokenReplying) {
            const obj25 = { replied, onJump: tmp55 };
            tmp55 = undefined;
            const tmp19Result6 = tmp19(tmp13[7]);
            const tmp53 = replied;
            if (null != onJumpToReplied) {
              tmp55 = callback2;
            }
            tmp53Result = tmp53(tmp19Result6, obj25);
          }
          const items14 = [tmp53Result, , ];
          const items15 = [, , ];
          ({ avatar: arr17[0], avatarSpoken: arr17[1] } = tmp);
          if (avatarSpokenReplying) {
            avatarSpokenReplying = tmp.avatarSpokenReplying;
          }
          const obj26 = { children: items14 };
          items15[2] = avatarSpokenReplying;
          const obj27 = { style: items15, children: replied(projectId(tmp13[23]).ConjureAvatar, {}) };
          items14[1] = replied(planSuperseded, obj27);
          const obj28 = { style: tmp.header, children: replied(projectId(tmp13[23]).ConjureHeader, obj29) };
          obj29 = { at: message.created_at };
          items14[2] = replied(planSuperseded, obj28);
          const tmp50Result = onJumpToReplied(tmp51, obj26);
          const obj30 = { style: items8, onLongPress: tmp24, accessible: false, children: null };
          let tmp56Result = null;
          const tmp59 = onToggleChecklist;
          if (turnLeadsWithStretchResult) {
            tmp56Result = null;
            if (groupStart) {
              const obj31 = { style: tmp.spoken, children: tmp50Result };
              tmp56Result = tmp56(tmp57, obj31);
            }
          }
          const items16 = [
            tmp56Result,
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
                    if (null == tmp38) {
                      if (null == tmp41) {
                        if (null == ideas) {
                          if (null == tmp30) {
                            if (null == tmp34) {
                              if (null == tmp15) {
                                if (null == items18) {
                                  let tmp50Result2;
                                  if (null == provisionalTodo) {
                                    tmp50Result2 = null;
                                  }
                                  items16[2] = tmp50Result2;
                                  let tmp56Result16 = null;
                                  if (null != tmp32) {
                                    const obj32 = { style: tmp.spoken, children: replied(Text2, obj33) };
                                    obj33 = { variant: "body-xs/normal", color: "text-muted", children: intl.string(tmp19(tmp13[33]).YR8A2v) };
                                    Text2 = tmp12(tmp13[24]).Text;
                                    intl = tmp12(tmp13[25]).intl;
                                    tmp56Result16 = tmp56(tmp57, obj32);
                                  }
                                  items16[3] = tmp56Result16;
                                  obj30.children = items16;
                                  return onJumpToReplied(tmp59, obj30);
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
          let tmp62 = null;
          const obj34 = { style: tmp.spoken, children: items17 };
          if (groupStart) {
            tmp62 = null;
            if (!turnLeadsWithStretchResult) {
              tmp62 = tmp50Result;
            }
          }
          items17 = [tmp62, , , , , , , , , , , , , , ];
          let tmp56Result17 = null;
          if (showsClosingMessage) {
            const obj35 = { source: closingContent };
            tmp56Result17 = tmp56(tmp19(tmp13[37]), obj35);
          }
          items17[1] = tmp56Result17;
          let tmp56Result18 = null;
          if ("side_reply" === message.kind) {
            const obj36 = { variant: "body-xs/normal", color: "text-muted", children: tmp12Result17.midTurnCaption(message.acknowledges) };
            const Text = tmp12(tmp13[24]).Text;
            tmp12Result17 = projectId(tmp13[39]);
            tmp56Result18 = tmp56(Text, obj36);
          }
          items17[2] = tmp56Result18;
          let tmp56Result19 = null;
          if (null != tmp15) {
            const obj37 = { projectId, attachments: tmp15 };
            tmp56Result19 = tmp56(tmp19(tmp13[28]), obj37);
          }
          items17[3] = tmp56Result19;
          if (null != items18) {
            const tmp19Result7 = tmp19(tmp13[40]);
            const tmp19Result8 = tmp19(tmp13[41]);
            if (items18 == null) {
              items18 = [];
            }
            const obj38 = { children: replied(tmp19Result8, obj39) };
            obj39 = { todos: items18, provisional: provisionalTodo, agents: memo3, live: tmp12Result18.checklistLive(message), superseded: checklistSuperseded, expanded: checklistExpanded, onToggleExpanded: callback };
            tmp12Result18 = projectId(tmp13[42]);
            tmp56Result20 = tmp56(tmp19Result7, obj38);
          } else {
            tmp56Result20 = null;
          }
          items17[4] = tmp56Result20;
          let tmp56Result21 = null;
          if (null != proposal) {
            const obj40 = { projectId, proposal, version: planVersion, superseded: planSuperseded, expanded: planExpanded, onToggleExpanded: callback1, onApprove: onApprovePlan };
            tmp56Result21 = tmp56(tmp19(tmp13[43]), obj40);
          }
          items17[5] = tmp56Result21;
          let tmp56Result22 = null;
          if (null != clarification) {
            const obj41 = {
              projectId,
              clarification,
              onSubmit: onAnswerClarification,
              onDismiss() {
                          return closure_9(clarification.id);
                        },
              onInputFocusChange: onCardInputFocusChange
            };
            tmp56Result22 = tmp56(tmp19(tmp13[44]), obj41);
          }
          items17[6] = tmp56Result22;
          let tmp56Result23 = null;
          if (null != tmp41) {
            const obj42 = {
              projectId,
              request: tmp41,
              canSend,
              onDismiss() {
                          return closure_10(appBuildRequest.id);
                        },
              onInputFocusChange: onCardInputFocusChange
            };
            tmp56Result23 = tmp56(tmp19(tmp13[45]), obj42);
          }
          items17[7] = tmp56Result23;
          let tmp56Result24 = null;
          if (null != tmp30) {
            const obj43 = { projectId, kind: "keys", cardId: message.render_id, request: tmp30, status: secretRequestStatus, awaiting: tmp32 };
            tmp56Result24 = tmp56(tmp19(tmp13[46]), obj43);
          }
          items17[8] = tmp56Result24;
          let tmp56Result25 = null;
          if (null != tmp34) {
            const obj44 = { projectId, kind: "settings", request: tmp34, askId: message.id, onInputFocusChange: tmp2 };
            tmp56Result25 = tmp56(tmp19(tmp13[46]), obj44);
          }
          items17[9] = tmp56Result25;
          let tmp56Result26 = null;
          if (null != tmp28) {
            const obj45 = { projectId, cta: tmp28 };
            tmp56Result26 = tmp56(tmp19(tmp13[47]), obj45);
          }
          items17[10] = tmp56Result26;
          let tmp56Result27 = null;
          if (null != ideas) {
            const obj46 = { ideas, onPick: onPickIdea };
            tmp56Result27 = tmp56(tmp19(tmp13[48]), obj46);
          }
          items17[11] = tmp56Result27;
          let tmp56Result28 = null;
          if (null != restoreProposal) {
            const obj47 = { proposal: restoreProposal, onRestore: fn };
            fn = undefined;
            const tmp19Result9 = tmp19(tmp13[49]);
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
            tmp56Result28 = tmp56(tmp19Result9, obj47);
          }
          items17[12] = tmp56Result28;
          let tmp56Result29 = null;
          if (null != prop) {
            const obj49 = { projectId, proposal: prop, current: isNewest };
            tmp56Result29 = tmp56(tmp19(tmp13[50]), obj49);
          }
          items17[13] = tmp56Result29;
          let tmp56Result30 = null;
          if (null != tmp38) {
            const obj50 = { projectId, change: tmp38, current: isNewest, onReply: fn2 };
            fn2 = undefined;
            const tmp19Result10 = tmp19(tmp13[51]);
            if (canSend) {
              fn2 = (implementation_prompt) => {
                const obj = conjureAttachmentDrafts;
                return obj.sendConjureCardReply(projectId, implementation_prompt);
              };
            }
            tmp56Result30 = tmp56(tmp19Result10, obj50);
          }
          items17[14] = tmp56Result30;
          tmp50Result2 = tmp50(tmp57, obj34);
        }
      }
    }
  }
});
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMessageRow.tsx");

export default memoResult;
