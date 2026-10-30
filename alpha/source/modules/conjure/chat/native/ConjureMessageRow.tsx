// Module ID: 12595
// Function ID: 12596
// Name: ConjureMessageRow
// Dependencies: [19, 17, 1384, 21, 5009, 12587, 12596, 12597, 575, 12552, 10832, 12566, 12054, 12599, 12449, 504, 12607, 12608, 12602, 12542, 12496, 12046, 12600, 5619, 10836, 1114, 12606, 12609, 12610, 12611, 12612, 12613, 12621, 3865, 12628, 12630, 12631, 12503, 12632, 12681, 12442, 12682, 12551, 12684, 12712, 12720, 12728, 12730, 12618, 12733, 12738, 12739, 12740, 2]

// Module 12595 (ConjureMessageRow)
import nativeDefault from "native" /* 575 */;
import conjureChatTurns from "conjureChatTurns" /* 10832 */;
import ConjureDesignFeedback from "ConjureDesignFeedback" /* 12054 */;
import ConjureVersionRestoreConfirm from "ConjureVersionRestoreConfirm" /* 12496 */;
import ConjureNativeMarkdown from "ConjureNativeMarkdown" /* 12503 */;
import conjureQueuedMessage from "conjureQueuedMessage" /* 12542 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 12552 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 12566 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 12587 */;
import conjureNativeChatLayout from "conjureNativeChatLayout" /* 12596 */;
import ConjureRepliedMessage from "ConjureRepliedMessage" /* 12597 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 12602 */;
import ConjureChatRestore from "ConjureChatRestore" /* 12607 */;
import ConjureActivityBox from "ConjureActivityBox" /* 12632 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1384 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
  let combined;
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
  let tmp11Result20;
  let tmp11Result21;
  let tmp11Result22;
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
  ({ first, checklistExpanded, planVersion, planExpanded, onApprovePlan, onPickIdea, onAnswerClarification, clarificationLive, clarificationDismissed, canSend, appBuildRequestDismissed } = projectId);
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
  const tmp11Result12 = projectId(tmp12[15]);
  stateFromStores = tmp11Result12.useStateFromStores(items9, () => {
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
          let obj4 = { style: tmp.avatar, children: replied(tmp11(tmp12[22]).ConjureUserAvatar, obj5) };
          obj5 = { userId: message.user_id };
          tmp91 = replied(planSuperseded, obj4);
        }
        items12 = [tmp91, , , , ];
        let tmp94 = null;
        if (groupStart) {
          const obj6 = { style: tmp.header, children: replied(projectId(tmp12[22]).ConjureUserHeader, obj7) };
          obj7 = { userId: null, at: null };
          ({ user_id: obj56.userId, created_at: obj56.at } = message);
          tmp94 = replied(planSuperseded, obj6);
        }
        items12[1] = tmp94;
        if ("" !== trimmed) {
          const Text3 = tmp11(tmp12[23]).Text;
          let str4 = "text-default";
          const tmp11Result13 = projectId(tmp12[24]);
          if (tmp11Result13.isConjureAgentHiddenMessage(trimmed)) {
            str4 = "text-muted";
          }
          const obj8 = { variant: "text-md/normal", color: str4, accessibilityLabel: combined, children: items13 };
          combined = undefined;
          if (!groupStart) {
            const intl3 = tmp11(tmp12[25]).intl;
            const _HermesInternal = HermesInternal;
            combined = "" + intl3.string(tmp11(tmp12[25]).t.KD6OJJ) + ": " + conjureMentionNames;
          }
          let tmp100 = null;
          if (null != memo4) {
            const obj9 = { label: memo4.label, variant: "text-md/medium" };
            tmp100 = replied(tmp18(tmp12[26]), obj9);
          }
          items13 = [tmp100, , ];
          let str6 = null;
          if (null != memo4) {
            str6 = null;
            if ("" !== trimmed) {
              str6 = " ";
            }
          }
          items13[1] = str6;
          const obj10 = { text: trimmed, variant: "text-md/normal" };
          items13[2] = replied(message(tmp12[27]), obj10);
          tmp89Result = tmp89(Text3, obj8);
        } else {
          tmp89Result = null;
        }
        items12[2] = tmp89Result;
        let tmp103 = null;
        if (null != tmp14) {
          const obj11 = { projectId, attachments: tmp14 };
          tmp103 = replied(tmp18(tmp12[28]), obj11);
        }
        items12[3] = tmp103;
        let tmp105 = null;
        if (null != message.agentReaction) {
          const obj12 = { reaction: message.agentReaction };
          tmp105 = replied(tmp18(tmp12[29]), obj12);
        }
        items12[4] = tmp105;
        tmp89Result2 = tmp89(tmp90, obj3);
      } else if ("context_boundary" === message.kind) {
        let tmp85 = null;
        if (null != message.contextSwitch) {
          const obj13 = { style: tmp.boundaryRow, children: replied(message(tmp12[30]), obj14) };
          obj14 = { projectId, contextSwitch: message.contextSwitch };
          tmp85 = replied(planSuperseded, obj13);
        }
        return tmp85;
      } else {
        if ("project_event" === message.kind) {
          if (null != message.projectEvent) {
            const obj15 = { style: items8, children: replied(message(tmp12[31]), obj16) };
            obj16 = { projectId, event: message.projectEvent };
            return replied(planSuperseded, obj15);
          }
        }
        if ("publish_notice" === message.kind) {
          if (null != message.publishNotice) {
            const obj17 = { style: items8, children: replied(message(tmp12[32]), obj18) };
            obj18 = { projectId, notice: message.publishNotice };
            return replied(planSuperseded, obj17);
          }
        }
        if (true === message.interrupted) {
          const obj19 = { style: items8, children: replied(planSuperseded, obj20) };
          obj20 = { style: tmp.activityBox, children: replied(tmp18Result, obj21) };
          obj21 = { line: intl2.string(message(tmp12[33]).oOmBdX), live: false, settled: true, inGutter: true, glyph: replied(StopIcon, obj22) };
          tmp18Result = message(tmp12[5]);
          intl2 = tmp11(tmp12[25]).intl;
          obj22 = { size: "refresh_sm", color: message(tmp12[8]).colors.TEXT_MUTED };
          StopIcon = tmp11(tmp12[34]).StopIcon;
          return replied(planSuperseded, obj19);
        } else {
          let provisionalTodo;
          let tmp52Result19;
          let proposal;
          if ("proposal" === message.kind) {
            proposal = message.proposal;
          }
          const tmp11Result14 = projectId(tmp12[10]);
          const turnSettledResult = tmp11Result14.turnSettled(message);
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
            const tmp11Result15 = projectId(tmp12[35]);
            tmp11Result15.activeAwaitingUser(message, isNewest);
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
          if (clarificationLive) {
            clarification = null;
            if (!clarificationDismissed) {
              clarification = null;
              if (null != message.clarification) {
                clarification = message.clarification;
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
          const tmp11Result16 = projectId(tmp12[36]);
          const turnPresentation = tmp11Result16.resolveTurnPresentation(obj23);
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
          const tmp11Result17 = projectId(tmp12[36]);
          const turnLeadsWithStretchResult = tmp11Result17.turnLeadsWithStretch(tmp41, turnPresentation);
          c24 = turnLeadsWithStretchResult;
          const found = memo1.filter((hasWork) => hasWork.hasWork);
          const atResult = found.at(-1);
          index = undefined;
          if (atResult != null) {
            index = atResult.index;
          }
          const tmp11Result18 = projectId(tmp12[10]);
          const tmp45 = !tmp11Result18.turnSettled(message);
          closure_26 = tmp45;
          const obj24 = { turnActive: tmp45 };
          const tmp11Result19 = projectId(tmp12[9]);
          open = tmp11Result19.turnLifecycle(memo1, obj24).open;
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
          const obj27 = { style: items15, children: replied(projectId(tmp12[22]).ConjureAvatar, {}) };
          items14[1] = replied(planSuperseded, obj27);
          const obj28 = { style: tmp.header, children: replied(projectId(tmp12[22]).ConjureHeader, obj29) };
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
                                  obj33 = { variant: "text-xs/normal", color: "text-muted", children: intl.string(message(tmp12[33]).YR8A2v) };
                                  Text2 = tmp11(tmp12[23]).Text;
                                  intl = tmp11(tmp12[25]).intl;
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
            tmp52Result16 = tmp52(tmp18(tmp12[37]), obj35);
          }
          items17[1] = tmp52Result16;
          let tmp52Result17 = null;
          if ("side_reply" === message.kind) {
            const obj36 = { variant: "text-xs/normal", color: "text-muted", children: tmp11Result20.midTurnCaption(message.acknowledges) };
            const Text = tmp11(tmp12[23]).Text;
            tmp11Result20 = projectId(tmp12[39]);
            tmp52Result17 = tmp52(Text, obj36);
          }
          items17[2] = tmp52Result17;
          let tmp52Result18 = null;
          if (null != tmp14) {
            const obj37 = { projectId, attachments: tmp14 };
            tmp52Result18 = tmp52(tmp18(tmp12[28]), obj37);
          }
          items17[3] = tmp52Result18;
          if (null != items18) {
            const tmp18Result7 = message(tmp12[40]);
            const tmp18Result8 = message(tmp12[41]);
            if (items18 == null) {
              items18 = [];
            }
            const obj38 = { children: replied(tmp18Result8, obj39) };
            obj39 = { todos: items18, provisional: provisionalTodo, agents: memo3, live: tmp11Result21.checklistLive(message), superseded: checklistSuperseded, expanded: checklistExpanded, onToggleExpanded: callback };
            tmp11Result21 = projectId(tmp12[42]);
            tmp52Result19 = tmp52(tmp18Result7, obj38);
          } else {
            tmp52Result19 = null;
          }
          items17[4] = tmp52Result19;
          let tmp52Result20 = null;
          if (null != proposal) {
            const obj40 = { projectId, proposal, version: planVersion, superseded: planSuperseded, expanded: planExpanded, onToggleExpanded: callback1, onApprove: onApprovePlan };
            tmp52Result20 = tmp52(tmp18(tmp12[43]), obj40);
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
              tmp52Result21 = tmp52(tmp18(tmp12[44]), obj41, clarification.id);
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
              tmp52Result21 = tmp52(tmp18(tmp12[45]), obj42);
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
            tmp52Result22 = tmp52(tmp18(tmp12[46]), obj43);
          }
          items17[7] = tmp52Result22;
          let tmp52Result23 = null;
          if (null != tmp28) {
            const obj44 = { projectId, cardId: message.render_id, request: tmp28, status: secretRequestStatus, awaiting: tmp30 };
            tmp52Result23 = tmp52(tmp18(tmp12[47]), obj44);
          }
          items17[8] = tmp52Result23;
          let tmp52Result24 = null;
          if (null != tmp32) {
            const obj45 = { projectId, request: tmp32, askId: message.id };
            tmp52Result24 = tmp52(tmp18(tmp12[48]), obj45);
          }
          items17[9] = tmp52Result24;
          let tmp52Result25 = null;
          if (null != tmp26) {
            const obj46 = { projectId, turnId: tmp11Result22.turnIdOfSegment(message), cta: tmp26 };
            const tmp18Result9 = message(tmp12[49]);
            tmp11Result22 = projectId(tmp12[10]);
            tmp52Result25 = tmp52(tmp18Result9, obj46);
          }
          items17[10] = tmp52Result25;
          let tmp52Result26 = null;
          if (null != ideas) {
            const obj47 = { ideas, onPick: onPickIdea };
            tmp52Result26 = tmp52(tmp18(tmp12[50]), obj47);
          }
          items17[11] = tmp52Result26;
          let tmp52Result27 = null;
          if (null != restoreProposal) {
            const obj48 = { proposal: restoreProposal, onRestore: fn };
            fn = undefined;
            const tmp18Result10 = message(tmp12[51]);
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
            tmp52Result27 = tmp52(tmp18Result10, obj48);
          }
          items17[12] = tmp52Result27;
          let tmp52Result28 = null;
          if (null != prop) {
            const obj49 = { projectId, proposal: prop, current: isNewest };
            tmp52Result28 = tmp52(tmp18(tmp12[52]), obj49);
          }
          items17[13] = tmp52Result28;
          tmp46Result2 = tmp46(tmp53, obj34);
        }
      }
    }
  }
});
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMessageRow.tsx");

export default memoResult;
