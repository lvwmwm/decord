// Module ID: 18516
// Function ID: 18517
// Name: ConjureMessageRow
// Dependencies: [19, 17, 1388, 21, 4792, 18508, 18517, 18518, 575, 18473, 6807, 18487, 18413, 18519, 18351, 504, 18527, 18528, 18522, 18468, 18393, 18288, 18520, 5383, 1113, 18526, 18529, 18530, 18531, 18532, 18533, 18541, 4089, 18548, 18550, 18551, 18401, 18552, 18601, 18342, 18602, 18472, 18604, 18630, 18642, 18644, 18538, 18647, 18652, 18653, 18654, 18656, 18478, 2]

// Module 18516 (ConjureMessageRow)
import nativeDefault from "native" /* 575 */;
import conjureChatTurns from "conjureChatTurns" /* 6807 */;
import ConjureVersionRestoreConfirm from "ConjureVersionRestoreConfirm" /* 18393 */;
import ConjureNativeMarkdown from "ConjureNativeMarkdown" /* 18401 */;
import ConjureDesignFeedback from "ConjureDesignFeedback" /* 18413 */;
import conjureQueuedMessage from "conjureQueuedMessage" /* 18468 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 18473 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 18478 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 18487 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 18508 */;
import conjureNativeChatLayout from "conjureNativeChatLayout" /* 18517 */;
import ConjureRepliedMessage from "ConjureRepliedMessage" /* 18518 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 18522 */;
import ConjureChatRestore from "ConjureChatRestore" /* 18527 */;
import ConjureActivityBox from "ConjureActivityBox" /* 18552 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1388 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4792 */;
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
  let tmp11Result18;
  let tmp11Result19;
  let tmp11Result20;
  let tmp18Result;
  let tmp53;
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
  let obj2 = projectId(groupStart[13]);
  const conjureMentionNames = obj2.useConjureMentionNames(trimmed);
  if ("user" === message.role) {
    const tmp11Result = projectId(tmp12[14]);
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
  const tmp11Result11 = projectId(tmp12[15]);
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
  const tmp19 = message(tmp12[17])(projectId, message);
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
          const obj = projectId(groupStart[20]);
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
        const obj = projectId(groupStart[21]);
        return obj.requestConjureTrace(closure_1_0, closure_1_19);
      };
    }
    return showConjureMessageActions(obj);
  }, items11);
  if ("" === trimmed) {
    if (null == user_id) {
      if ("user" === message.role) {
        let tmp92Result;
        if ("" === trimmed) {
          let tmp92Result2;
          if (null == memo4) {
            tmp92Result2 = null;
          }
          return tmp92Result2;
        }
        let obj3 = { style: items8, onLongPress: tmp22, accessible: false, children: items12 };
        let tmp94 = null;
        const tmp93 = onToggleChecklist;
        if (groupStart) {
          let obj4 = { style: tmp.avatar, children: replied(tmp11(tmp12[22]).ConjureUserAvatar, obj5) };
          obj5 = { userId: message.user_id };
          tmp94 = replied(planSuperseded, obj4);
        }
        items12 = [tmp94, , , , ];
        let tmp97 = null;
        if (groupStart) {
          const obj6 = { style: tmp.header, children: replied(projectId(tmp12[22]).ConjureUserHeader, obj7) };
          obj7 = { userId: null, at: null };
          ({ user_id: obj56.userId, created_at: obj56.at } = message);
          tmp97 = replied(planSuperseded, obj6);
        }
        items12[1] = tmp97;
        if ("" !== trimmed) {
          let combined;
          const Text3 = tmp11(tmp12[23]).Text;
          if (!groupStart) {
            const intl3 = tmp11(tmp12[24]).intl;
            const _HermesInternal = HermesInternal;
            combined = "" + intl3.string(tmp11(tmp12[24]).t.KD6OJJ) + ": " + conjureMentionNames;
          }
          let tmp103 = null;
          const obj8 = { variant: "body-md/normal", color: "text-default", accessibilityLabel: combined, children: items13 };
          if (null != memo4) {
            const obj9 = { label: memo4.label, variant: "body-md/medium" };
            tmp103 = replied(tmp18(tmp12[25]), obj9);
          }
          items13 = [tmp103, , ];
          let str5 = null;
          if (null != memo4) {
            str5 = null;
            if ("" !== trimmed) {
              str5 = " ";
            }
          }
          items13[1] = str5;
          const obj10 = { text: trimmed, variant: "body-md/normal" };
          items13[2] = replied(message(tmp12[26]), obj10);
          tmp92Result = tmp92(Text3, obj8);
        } else {
          tmp92Result = null;
        }
        items12[2] = tmp92Result;
        let tmp106 = null;
        if (null != tmp14) {
          const obj11 = { projectId, attachments: tmp14 };
          tmp106 = replied(tmp18(tmp12[27]), obj11);
        }
        items12[3] = tmp106;
        let tmp108 = null;
        if (null != message.agentReaction) {
          const obj12 = { reaction: message.agentReaction };
          tmp108 = replied(tmp18(tmp12[28]), obj12);
        }
        items12[4] = tmp108;
        tmp92Result2 = tmp92(tmp93, obj3);
      } else if ("context_boundary" === message.kind) {
        let tmp88 = null;
        if (null != message.contextSwitch) {
          const obj13 = { style: tmp.boundaryRow, children: replied(message(tmp12[29]), obj14) };
          obj14 = { projectId, contextSwitch: message.contextSwitch };
          tmp88 = replied(planSuperseded, obj13);
        }
        return tmp88;
      } else {
        if ("project_event" === message.kind) {
          if (null != message.projectEvent) {
            const obj15 = { style: items8, children: replied(message(tmp12[30]), obj16) };
            obj16 = { projectId, event: message.projectEvent };
            return replied(planSuperseded, obj15);
          }
        }
        if ("publish_notice" === message.kind) {
          if (null != message.publishNotice) {
            const obj17 = { style: items8, children: replied(message(tmp12[31]), obj18) };
            obj18 = { projectId, notice: message.publishNotice };
            return replied(planSuperseded, obj17);
          }
        }
        if (true === message.interrupted) {
          const obj19 = { style: items8, children: replied(planSuperseded, obj20) };
          obj20 = { style: tmp.activityBox, children: replied(tmp18Result, obj21) };
          obj21 = { line: intl2.string(message(tmp12[32]).oOmBdX), live: false, settled: true, inGutter: true, glyph: replied(StopIcon, obj22) };
          tmp18Result = message(tmp12[5]);
          intl2 = tmp11(tmp12[24]).intl;
          obj22 = { size: "refresh_sm", color: message(tmp12[8]).colors.TEXT_MUTED };
          StopIcon = tmp11(tmp12[33]).StopIcon;
          return replied(planSuperseded, obj19);
        } else {
          let provisionalTodo;
          let tmp54Result20;
          let proposal;
          if ("proposal" === message.kind) {
            proposal = message.proposal;
          }
          const tmp11Result12 = projectId(tmp12[10]);
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
            const tmp11Result13 = projectId(tmp12[34]);
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
          let tmp36 = null;
          if (turnSettledResult) {
            let serverChange = message.serverChange;
            if (serverChange == null) {
              serverChange = null;
            }
            tmp36 = serverChange;
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
          let tmp39 = null;
          if (isNewest) {
            tmp39 = null;
            if (turnSettledResult) {
              tmp39 = null;
              if (!appBuildRequestDismissed) {
                appBuildRequest = message.appBuildRequest;
                if (appBuildRequest == null) {
                  appBuildRequest = null;
                }
                tmp39 = appBuildRequest;
              }
            }
          }
          appBuildRequest = tmp39;
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
          const tmp11Result14 = projectId(tmp12[35]);
          const turnPresentation = tmp11Result14.resolveTurnPresentation(obj23);
          ({ showsClosingMessage, replyKey: c23 } = turnPresentation);
          let tmp43 = memo.steps.length > 0;
          const closingContent = turnPresentation.closingContent;
          if (!tmp43) {
            tmp43 = memo.tasks.length > 0;
          }
          if (!tmp43) {
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
                                    if (null == tmp36) {
                                      if (null == tmp39) {
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
          const tmp11Result15 = projectId(tmp12[35]);
          const turnLeadsWithStretchResult = tmp11Result15.turnLeadsWithStretch(tmp43, turnPresentation);
          c24 = turnLeadsWithStretchResult;
          const found = memo1.filter((hasWork) => hasWork.hasWork);
          const atResult = found.at(-1);
          index = undefined;
          if (atResult != null) {
            index = atResult.index;
          }
          const tmp11Result16 = projectId(tmp12[10]);
          const tmp47 = !tmp11Result16.turnSettled(message);
          closure_26 = tmp47;
          const obj24 = { turnActive: tmp47 };
          const tmp11Result17 = projectId(tmp12[9]);
          open = tmp11Result17.turnLifecycle(memo1, obj24).open;
          let avatarSpokenReplying = groupStart && null != replied;
          let tmp51Result = null;
          const tmp49 = closure_9;
          if (avatarSpokenReplying) {
            const obj25 = { replied, onJump: tmp53 };
            tmp53 = undefined;
            const tmp18Result7 = message(tmp12[7]);
            const tmp51 = replied;
            if (null != onJumpToReplied) {
              tmp53 = callback2;
            }
            tmp51Result = tmp51(tmp18Result7, obj25);
          }
          const items14 = [tmp51Result, , ];
          const items15 = [, , ];
          ({ avatar: arr17[0], avatarSpoken: arr17[1] } = tmp);
          if (avatarSpokenReplying) {
            avatarSpokenReplying = tmp.avatarSpokenReplying;
          }
          const obj26 = { children: items14 };
          items15[2] = avatarSpokenReplying;
          const obj27 = { style: items15, children: replied(projectId(tmp12[22]).ConjureAvatar, {}) };
          items14[1] = replied(planSuperseded, obj27);
          const obj28 = { style: tmp.header, children: replied(projectId(tmp12[22]).ConjureHeader, obj29) };
          obj29 = { at: message.created_at };
          items14[2] = replied(planSuperseded, obj28);
          const tmp48Result = onJumpToReplied(tmp49, obj26);
          const obj30 = { style: items8, onLongPress: tmp22, accessible: false, children: null };
          let tmp54Result = null;
          const tmp57 = onToggleChecklist;
          if (turnLeadsWithStretchResult) {
            tmp54Result = null;
            if (groupStart) {
              const obj31 = { style: tmp.spoken, children: tmp48Result };
              tmp54Result = tmp54(tmp55, obj31);
            }
          }
          const items16 = [
            tmp54Result,
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
                    if (null == tmp36) {
                      if (null == tmp39) {
                        if (null == ideas) {
                          if (null == tmp28) {
                            if (null == tmp32) {
                              if (null == tmp14) {
                                if (null == items18) {
                                  let tmp48Result2;
                                  if (null == provisionalTodo) {
                                    tmp48Result2 = null;
                                  }
                                  items16[2] = tmp48Result2;
                                  let tmp54Result16 = null;
                                  if (null != tmp30) {
                                    const obj32 = { style: tmp.spoken, children: replied(Text2, obj33) };
                                    obj33 = { variant: "body-xs/normal", color: "text-muted", children: intl.string(message(tmp12[32]).YR8A2v) };
                                    Text2 = tmp11(tmp12[23]).Text;
                                    intl = tmp11(tmp12[24]).intl;
                                    tmp54Result16 = tmp54(tmp55, obj32);
                                  }
                                  items16[3] = tmp54Result16;
                                  obj30.children = items16;
                                  return onJumpToReplied(tmp57, obj30);
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
          let tmp60 = null;
          const obj34 = { style: tmp.spoken, children: items17 };
          if (groupStart) {
            tmp60 = null;
            if (!turnLeadsWithStretchResult) {
              tmp60 = tmp48Result;
            }
          }
          items17 = [tmp60, , , , , , , , , , , , , , ];
          let tmp54Result17 = null;
          if (showsClosingMessage) {
            const obj35 = { source: closingContent };
            tmp54Result17 = tmp54(tmp18(tmp12[36]), obj35);
          }
          items17[1] = tmp54Result17;
          let tmp54Result18 = null;
          if ("side_reply" === message.kind) {
            const obj36 = { variant: "body-xs/normal", color: "text-muted", children: tmp11Result18.midTurnCaption(message.acknowledges) };
            const Text = tmp11(tmp12[23]).Text;
            tmp11Result18 = projectId(tmp12[38]);
            tmp54Result18 = tmp54(Text, obj36);
          }
          items17[2] = tmp54Result18;
          let tmp54Result19 = null;
          if (null != tmp14) {
            const obj37 = { projectId, attachments: tmp14 };
            tmp54Result19 = tmp54(tmp18(tmp12[27]), obj37);
          }
          items17[3] = tmp54Result19;
          if (null != items18) {
            const tmp18Result8 = message(tmp12[39]);
            const tmp18Result9 = message(tmp12[40]);
            if (items18 == null) {
              items18 = [];
            }
            const obj38 = { children: replied(tmp18Result9, obj39) };
            obj39 = { todos: items18, provisional: provisionalTodo, agents: memo3, live: tmp11Result19.checklistLive(message), superseded: checklistSuperseded, expanded: checklistExpanded, onToggleExpanded: callback };
            tmp11Result19 = projectId(tmp12[41]);
            tmp54Result20 = tmp54(tmp18Result8, obj38);
          } else {
            tmp54Result20 = null;
          }
          items17[4] = tmp54Result20;
          let tmp54Result21 = null;
          if (null != proposal) {
            const obj40 = { projectId, proposal, version: planVersion, superseded: planSuperseded, expanded: planExpanded, onToggleExpanded: callback1, onApprove: onApprovePlan };
            tmp54Result21 = tmp54(tmp18(tmp12[42]), obj40);
          }
          items17[5] = tmp54Result21;
          let tmp54Result22 = null;
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
            tmp54Result22 = tmp54(tmp18(tmp12[43]), obj41);
          }
          items17[6] = tmp54Result22;
          let tmp54Result23 = null;
          if (null != tmp39) {
            const obj42 = {
              projectId,
              request: tmp39,
              canSend,
              onDismiss() {
                          return closure_10(appBuildRequest.id);
                        },
              onInputFocusChange: onCardInputFocusChange
            };
            tmp54Result23 = tmp54(tmp18(tmp12[44]), obj42);
          }
          items17[7] = tmp54Result23;
          let tmp54Result24 = null;
          if (null != tmp28) {
            const obj43 = { projectId, cardId: message.render_id, request: tmp28, status: secretRequestStatus, awaiting: tmp30 };
            tmp54Result24 = tmp54(tmp18(tmp12[45]), obj43);
          }
          items17[8] = tmp54Result24;
          let tmp54Result25 = null;
          if (null != tmp32) {
            const obj44 = { projectId, request: tmp32, askId: message.id };
            tmp54Result25 = tmp54(tmp18(tmp12[46]), obj44);
          }
          items17[9] = tmp54Result25;
          let tmp54Result26 = null;
          if (null != tmp26) {
            const obj45 = { projectId, turnId: tmp11Result20.turnIdOfSegment(message), cta: tmp26 };
            const tmp18Result10 = message(tmp12[47]);
            tmp11Result20 = projectId(tmp12[10]);
            tmp54Result26 = tmp54(tmp18Result10, obj45);
          }
          items17[10] = tmp54Result26;
          let tmp54Result27 = null;
          if (null != ideas) {
            const obj46 = { ideas, onPick: onPickIdea };
            tmp54Result27 = tmp54(tmp18(tmp12[48]), obj46);
          }
          items17[11] = tmp54Result27;
          let tmp54Result28 = null;
          if (null != restoreProposal) {
            const obj47 = { proposal: restoreProposal, onRestore: fn };
            fn = undefined;
            const tmp18Result11 = message(tmp12[49]);
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
            tmp54Result28 = tmp54(tmp18Result11, obj47);
          }
          items17[12] = tmp54Result28;
          let tmp54Result29 = null;
          if (null != prop) {
            const obj48 = { projectId, proposal: prop, current: isNewest };
            tmp54Result29 = tmp54(tmp18(tmp12[50]), obj48);
          }
          items17[13] = tmp54Result29;
          let tmp54Result30 = null;
          if (null != tmp36) {
            const obj49 = { projectId, change: tmp36, current: isNewest, onReply: fn2 };
            fn2 = undefined;
            const tmp18Result12 = message(tmp12[51]);
            if (canSend) {
              fn2 = (implementation_prompt) => {
                const obj = conjureAttachmentDrafts;
                return obj.sendConjureCardReply(projectId, implementation_prompt);
              };
            }
            tmp54Result30 = tmp54(tmp18Result12, obj49);
          }
          items17[14] = tmp54Result30;
          tmp48Result2 = tmp48(tmp55, obj34);
        }
      }
    }
  }
});
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMessageRow.tsx");

export default memoResult;
