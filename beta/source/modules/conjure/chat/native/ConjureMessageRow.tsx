// Module ID: 17197
// Function ID: 17198
// Name: ConjureMessageRow
// Dependencies: [19, 17, 1390, 21, 5092, 17198, 17200, 17201, 587, 558, 576, 13004, 17180, 17191, 17109, 504, 17209, 17210, 17205, 17211, 17163, 17125, 17212, 17215, 17202, 17221, 5088, 1126, 17208, 17222, 17223, 17224, 3849, 17226, 17228, 17229, 17216, 17230, 17281, 17282, 17283, 17179, 17285, 17304, 17312, 17316, 17317, 17318, 17319, 2]

// Module 17197 (ConjureMessageRow)
import nativeDefault from "native" /* 587 */;
import conjureChatTurns from "conjureChatTurns" /* 13004 */;
import ConjureDesignFeedback from "ConjureDesignFeedback" /* 17109 */;
import ConjureVersionRestoreConfirm from "ConjureVersionRestoreConfirm" /* 17163 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 17180 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 17191 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 17198 */;
import conjureNativeChatLayout from "conjureNativeChatLayout" /* 17200 */;
import chat_ConjureRepliedMessage from "chat/ConjureRepliedMessage" /* 17201 */;
import ConjureMessageAuthor from "ConjureMessageAuthor" /* 17202 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 17205 */;
import ConjureChatRestore from "ConjureChatRestore" /* 17209 */;
import conjureQueuedMessage from "conjureQueuedMessage" /* 17211 */;
import ConjurePublishNoticeLineDefault from "ConjurePublishNoticeLine" /* 17212 */;
import ConjureIdeasOfferDefault from "ConjureIdeasOffer" /* 17215 */;
import ConjureNativeMarkdown from "ConjureNativeMarkdown" /* 17216 */;
import ConjureActivityBox from "ConjureActivityBox" /* 17230 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1390 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ConjureActivityBoxDefault = ConjureActivityBox;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj10;
let obj11;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
let rect1;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
let Fragment = Fragment_mod;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, rowGroupStart: obj3, boundaryRow: obj4, avatar: rect, spoken: obj5, avatarSpoken: rect1, avatarSpokenReplying: obj6, reminderSlot: obj7, reminderTip: obj8, reminderSeparated: obj9, header: obj10, activityBox: obj11 };
obj2 = { position: "relative", paddingLeft: ConjureNativeStatusLine.MESSAGE_CONTENT_INSET, paddingRight: ConjureNativeStatusLine.MESSAGE_EDGE_INSET, paddingVertical: conjureNativeChatLayout.ROW_PAD, gap: conjureNativeChatLayout.BLOCK_GAP };
createStyles = createStyles.createStyles;
obj3 = { marginTop: conjureNativeChatLayout.GROUP_GAP };
obj4 = { paddingHorizontal: ConjureNativeStatusLine.MESSAGE_EDGE_INSET, paddingVertical: conjureNativeChatLayout.ROW_PAD };
rect = { position: "absolute", left: ConjureNativeStatusLine.MESSAGE_EDGE_INSET, top: conjureNativeChatLayout.ROW_PAD };
obj5 = { position: "relative", gap: conjureNativeChatLayout.BLOCK_GAP };
rect1 = { left: ConjureNativeStatusLine.MESSAGE_EDGE_INSET - ConjureNativeStatusLine.MESSAGE_CONTENT_INSET, top: 0 };
obj6 = { top: chat_ConjureRepliedMessage.REPLY_PREVIEW_HEIGHT + conjureNativeChatLayout.BLOCK_GAP };
obj7 = { marginTop: -conjureNativeChatLayout.BLOCK_GAP };
obj8 = { paddingTop: conjureNativeChatLayout.BLOCK_GAP };
obj9 = { paddingTop: conjureNativeChatLayout.GROUP_GAP + 2 * conjureNativeChatLayout.ROW_PAD };
obj10 = { marginBottom: -nativeDefault.space.PX_4 };
obj11 = { marginLeft: -conjureNativeChatLayout.RAIL_INDENT };
let closure_10 = createStyles(obj);
let memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureMessageRow(projectId) {
  let StopIcon;
  let checklistExpanded;
  let checklistSuperseded;
  let clarificationDismissed;
  let first;
  let groupStart;
  let hostsReminder;
  let isNewest;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj12;
  let obj19;
  let obj7;
  let obj9;
  let onAnswerClarification;
  let onApprovePlan;
  let onAskForIdeas;
  let onDismissClarification;
  let onPickIdea;
  let onToggleChecklist;
  let onTogglePlan;
  let planExpanded;
  let planSuperseded;
  let planVersion;
  let reminder;
  let secretRequestStatus;
  let tmp5;
  let tmp = projectId;
  const tmp2 = groupStart;
  let obj = projectId(groupStart[10]);
  const cResult = obj.c(239);
  projectId = projectId.projectId;
  const message = projectId.message;
  groupStart = projectId.groupStart;
  ({ isNewest, hostsReminder, reminder, checklistSuperseded } = projectId);
  ({ checklistExpanded, secretRequestStatus, onToggleChecklist } = projectId);
  ({ planVersion, planSuperseded } = projectId);
  ({ planExpanded, onTogglePlan } = projectId);
  const replied = projectId.replied;
  const onJumpToReplied = projectId.onJumpToReplied;
  ({ onApprovePlan, onPickIdea, onAskForIdeas } = projectId);
  ({ onAnswerClarification, onDismissClarification } = projectId);
  const onRestoreVersion = projectId.onRestoreVersion;
  ({ first, clarificationDismissed } = projectId);
  const tmp4 = onDismissClarification();
  let closure_12 = tmp4;
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
        const tmpResult10 = tmp(tmp2[12]);
        const latestTodosResult = tmpResult10.latestTodos(message.steps);
        cResult[10] = message.steps;
        cResult[11] = latestTodosResult;
      }
      if (cResult[12] !== tmp8.tasks) {
        const tmpResult11 = tmp(tmp2[13]);
        const runningTodoAgentsResult = tmpResult11.runningTodoAgents(tmp8.tasks);
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
                if (cResult[25] !== message.content) {
                  const tmpResult12 = tmp(tmp2[14]);
                  const result = tmpResult12.parseConjureDesignRemark(message.content);
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
                let attachments = null;
                if (null != message.attachments) {
                  attachments = null;
                  if (message.attachments.length > 0) {
                    attachments = message.attachments;
                  }
                }
                if (cResult[29] === tmp4.row) {
                  let tmp30;
                  let tmp34;
                  let tmp33;
                  if (cResult[30] === (groupStart && !first && tmp4.rowGroupStart)) {
                    tmp30 = cResult[31];
                  }
                  let user_id;
                  if ("user" === message.role) {
                    user_id = message.user_id;
                  }
                  const _Symbol = Symbol;
                  if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                    let items = [onTogglePlan];
                    function ke() {
                      const currentUser = onTogglePlan.getCurrentUser();
                      id = undefined;
                      if (currentUser != null) {
                        id = currentUser.id;
                      }
                      return id;
                    }
                    cResult[32] = items;
                    cResult[33] = ke;
                    tmp34 = ke;
                    tmp33 = items;
                  } else {
                    tmp33 = cResult[32];
                    tmp34 = cResult[33];
                  }
                  const tmpResult13 = tmp(tmp2[15]);
                  const stateFromStores = tmpResult13.useStateFromStores(tmp33, tmp34);
                  if (cResult[34] === message) {
                    let tmp37;
                    if (cResult[35] === onRestoreVersion) {
                      tmp37 = cResult[36];
                    }
                    let closure_18 = tmp37;
                    const tmp40 = message(tmp2[17])(projectId, message);
                    let closure_19 = tmp40;
                    if (cResult[37] === user_id) {
                      if (cResult[38] === tmp26) {
                        if (cResult[39] === stateFromStores) {
                          if (cResult[40] === message) {
                            if (cResult[41] === onRestoreVersion) {
                              if (cResult[42] === projectId) {
                                if (cResult[43] === tmp40) {
                                  if ("" === tmp26) {
                                    if (null == user_id) {
                                      if (cResult[46] === onAskForIdeas) {
                                        if (cResult[47] === projectId) {
                                          if (cResult[48] === tmp4.avatar) {
                                            if (cResult[49] === tmp4.avatarSpoken) {
                                              if (cResult[50] === tmp4.header) {
                                                if (cResult[51] === tmp4.reminderSeparated) {
                                                  if (cResult[52] === tmp4.reminderTip) {
                                                    let tmp44;
                                                    if (cResult[53] === tmp4.spoken) {
                                                      tmp44 = cResult[54];
                                                    }
                                                    if (cResult[55] === hostsReminder) {
                                                      if (cResult[56] === reminder) {
                                                        if (cResult[57] === tmp44) {
                                                          let tmp45;
                                                          if (cResult[58] === tmp4.reminderSlot) {
                                                            tmp45 = cResult[59];
                                                          }
                                                          if ("user" === message.role) {
                                                            let tmp91;
                                                            if ("" === tmp26) {
                                                              if (null == tmp22) {
                                                                tmp91 = null;
                                                              }
                                                              return tmp91;
                                                            }
                                                            if (cResult[60] === groupStart) {
                                                              if (cResult[61] === message.user_id) {
                                                                let tmp92;
                                                                if (cResult[62] === tmp4.avatar) {
                                                                  tmp92 = cResult[63];
                                                                }
                                                                if (cResult[64] === groupStart) {
                                                                  if (cResult[65] === message.created_at) {
                                                                    if (cResult[66] === message.user_id) {
                                                                      let tmp96;
                                                                      let tmp102Result;
                                                                      if (cResult[67] === tmp4.header) {
                                                                        tmp96 = cResult[68];
                                                                      }
                                                                      if (cResult[69] === tmp26) {
                                                                        if (cResult[70] === groupStart) {
                                                                          let tmp100;
                                                                          if (cResult[71] === tmp22) {
                                                                            tmp100 = cResult[72];
                                                                          }
                                                                          if (cResult[73] === attachments) {
                                                                            let tmp106;
                                                                            if (cResult[74] === projectId) {
                                                                              tmp106 = cResult[75];
                                                                            }
                                                                            if (cResult[76] === tmp43) {
                                                                              if (cResult[77] === tmp30) {
                                                                                if (cResult[78] === tmp92) {
                                                                                  if (cResult[79] === tmp96) {
                                                                                    if (cResult[80] === tmp100) {
                                                                                      let tmp109;
                                                                                      if (cResult[81] === tmp106) {
                                                                                        tmp109 = cResult[82];
                                                                                      }
                                                                                      tmp91 = tmp109;
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                            let obj2 = { style: tmp30, onLongPress: tmp43, accessible: false, children: items1 };
                                                                            items1 = [tmp92, tmp96, tmp100, tmp106];
                                                                            const tmp112 = onAskForIdeas(onToggleChecklist, obj2);
                                                                            cResult[76] = tmp43;
                                                                            cResult[77] = tmp30;
                                                                            cResult[78] = tmp92;
                                                                            cResult[79] = tmp96;
                                                                            cResult[80] = tmp100;
                                                                            cResult[81] = tmp106;
                                                                            cResult[82] = tmp112;
                                                                            tmp109 = tmp112;
                                                                          }
                                                                          let tmp107 = null;
                                                                          if (null != attachments) {
                                                                            let obj3 = { projectId, attachments };
                                                                            tmp107 = replied(tmp39(tmp2[29]), obj3);
                                                                          }
                                                                          cResult[73] = attachments;
                                                                          cResult[74] = projectId;
                                                                          cResult[75] = tmp107;
                                                                          tmp106 = tmp107;
                                                                        }
                                                                      }
                                                                      if ("" !== tmp26) {
                                                                        let combined;
                                                                        const Text = tmp(tmp2[26]).Text;
                                                                        const tmp102 = onAskForIdeas;
                                                                        if (!groupStart) {
                                                                          const intl2 = tmp(tmp2[27]).intl;
                                                                          const _HermesInternal = HermesInternal;
                                                                          combined = "" + intl2.string(tmp(tmp2[27]).t.KD6OJJ) + ": " + tmp26;
                                                                        }
                                                                        let obj4 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: items2 };
                                                                        let tmp104 = null;
                                                                        if (null != tmp22) {
                                                                          let obj5 = { label: tmp22.label, variant: "text-md/medium" };
                                                                          tmp104 = replied(tmp39(tmp2[28]), obj5);
                                                                        }
                                                                        items2 = [tmp104, , ];
                                                                        let str8 = null;
                                                                        if (null != tmp22) {
                                                                          str8 = null;
                                                                          if ("" !== tmp26) {
                                                                            str8 = " ";
                                                                          }
                                                                        }
                                                                        items2[1] = str8;
                                                                        items2[2] = tmp26;
                                                                        tmp102Result = tmp102(Text, obj4);
                                                                      } else {
                                                                        tmp102Result = null;
                                                                      }
                                                                      cResult[69] = tmp26;
                                                                      cResult[70] = groupStart;
                                                                      cResult[71] = tmp22;
                                                                      cResult[72] = tmp102Result;
                                                                      tmp100 = tmp102Result;
                                                                    }
                                                                  }
                                                                }
                                                                let tmp97 = null;
                                                                if (groupStart) {
                                                                  let obj6 = { style: tmp4.header, children: replied(tmp(tmp2[24]).ConjureUserHeader, obj7) };
                                                                  obj7 = { userId: null, at: null };
                                                                  ({ user_id: obj28.userId, created_at: obj28.at } = message);
                                                                  tmp97 = replied(planSuperseded, obj6);
                                                                }
                                                                cResult[64] = groupStart;
                                                                cResult[65] = message.created_at;
                                                                cResult[66] = message.user_id;
                                                                cResult[67] = tmp4.header;
                                                                cResult[68] = tmp97;
                                                                tmp96 = tmp97;
                                                              }
                                                            }
                                                            let tmp93 = null;
                                                            if (groupStart) {
                                                              let obj8 = { style: tmp4.avatar, children: replied(tmp(tmp2[24]).ConjureUserAvatar, obj9) };
                                                              obj9 = { userId: message.user_id };
                                                              tmp93 = replied(planSuperseded, obj8);
                                                            }
                                                            cResult[60] = groupStart;
                                                            cResult[61] = message.user_id;
                                                            cResult[62] = tmp4.avatar;
                                                            cResult[63] = tmp93;
                                                            tmp92 = tmp93;
                                                          } else if ("context_boundary" === message.kind) {
                                                            if (cResult[83] === message.contextSwitch) {
                                                              if (cResult[84] === projectId) {
                                                                let tmp87;
                                                                if (cResult[85] === tmp4.boundaryRow) {
                                                                  tmp87 = cResult[86];
                                                                }
                                                                return tmp87;
                                                              }
                                                            }
                                                            let tmp88 = null;
                                                            if (null != message.contextSwitch) {
                                                              const obj10 = { style: tmp4.boundaryRow, children: replied(message(tmp2[30]), obj12) };
                                                              obj12 = { projectId, contextSwitch: message.contextSwitch };
                                                              tmp88 = replied(planSuperseded, obj10);
                                                            }
                                                            cResult[83] = message.contextSwitch;
                                                            cResult[84] = projectId;
                                                            cResult[85] = tmp4.boundaryRow;
                                                            cResult[86] = tmp88;
                                                            tmp87 = tmp88;
                                                          } else {
                                                            if ("project_event" === message.kind) {
                                                              if (null != message.projectEvent) {
                                                                if (cResult[87] === message.projectEvent) {
                                                                  let tmp80;
                                                                  if (cResult[88] === projectId) {
                                                                    tmp80 = cResult[89];
                                                                  }
                                                                  if (cResult[90] === tmp30) {
                                                                    let tmp83;
                                                                    if (cResult[91] === tmp80) {
                                                                      tmp83 = cResult[92];
                                                                    }
                                                                    return tmp83;
                                                                  }
                                                                  const obj13 = { style: tmp30, children: tmp80 };
                                                                  const tmp86 = replied(planSuperseded, obj13);
                                                                  cResult[90] = tmp30;
                                                                  cResult[91] = tmp80;
                                                                  cResult[92] = tmp86;
                                                                  tmp83 = tmp86;
                                                                }
                                                                const obj15 = { projectId, event: message.projectEvent };
                                                                const tmp82 = replied(message(tmp2[31]), obj15);
                                                                cResult[87] = message.projectEvent;
                                                                cResult[88] = projectId;
                                                                cResult[89] = tmp82;
                                                                tmp80 = tmp82;
                                                              }
                                                            }
                                                            if ("publish_notice" === message.kind) {
                                                              if (null != message.publishNotice) {
                                                                if (cResult[93] === message.publishNotice) {
                                                                  let tmp73;
                                                                  if (cResult[94] === projectId) {
                                                                    tmp73 = cResult[95];
                                                                  }
                                                                  if (cResult[96] === tmp45) {
                                                                    if (cResult[97] === tmp30) {
                                                                      let tmp76;
                                                                      if (cResult[98] === tmp73) {
                                                                        tmp76 = cResult[99];
                                                                      }
                                                                      return tmp76;
                                                                    }
                                                                  }
                                                                  const obj16 = { style: tmp30, children: items3 };
                                                                  items3 = [tmp73, tmp45];
                                                                  const tmp79 = onAskForIdeas(planSuperseded, obj16);
                                                                  cResult[96] = tmp45;
                                                                  cResult[97] = tmp30;
                                                                  cResult[98] = tmp73;
                                                                  cResult[99] = tmp79;
                                                                  tmp76 = tmp79;
                                                                }
                                                                const obj17 = { projectId, notice: message.publishNotice };
                                                                const tmp75 = replied(message(tmp2[22]), obj17);
                                                                cResult[93] = message.publishNotice;
                                                                cResult[94] = projectId;
                                                                cResult[95] = tmp75;
                                                                tmp73 = tmp75;
                                                              }
                                                            }
                                                            if (true === message.interrupted) {
                                                              let tmp59;
                                                              let tmp61;
                                                              let tmp65;
                                                              const _Symbol3 = Symbol;
                                                              const activityBox = tmp4.activityBox;
                                                              if (cResult[100] === Symbol.for("react.memo_cache_sentinel")) {
                                                                const intl = tmp(tmp2[27]).intl;
                                                                const stringResult = intl.string(message(tmp2[32]).oOmBdX);
                                                                cResult[100] = stringResult;
                                                                tmp59 = stringResult;
                                                              } else {
                                                                tmp59 = cResult[100];
                                                              }
                                                              const _Symbol4 = Symbol;
                                                              if (cResult[101] === Symbol.for("react.memo_cache_sentinel")) {
                                                                const obj18 = { line: tmp59, live: false, settled: true, inGutter: true, glyph: replied(StopIcon, obj19) };
                                                                obj19 = { size: "refresh_sm", color: message(tmp2[8]).colors.TEXT_MUTED };
                                                                const tmp39Result = message(tmp2[5]);
                                                                StopIcon = tmp(tmp2[33]).StopIcon;
                                                                const tmp64 = replied(tmp39Result, obj18);
                                                                cResult[101] = tmp64;
                                                                tmp61 = tmp64;
                                                              } else {
                                                                tmp61 = cResult[101];
                                                              }
                                                              if (cResult[102] !== tmp4.activityBox) {
                                                                const obj20 = { style: activityBox, children: tmp61 };
                                                                const tmp68 = replied(planSuperseded, obj20);
                                                                cResult[102] = tmp4.activityBox;
                                                                cResult[103] = tmp68;
                                                                tmp65 = tmp68;
                                                              } else {
                                                                tmp65 = cResult[103];
                                                              }
                                                              if (cResult[104] === tmp45) {
                                                                if (cResult[105] === tmp30) {
                                                                  let tmp69;
                                                                  if (cResult[106] === tmp65) {
                                                                    tmp69 = cResult[107];
                                                                  }
                                                                  return tmp69;
                                                                }
                                                              }
                                                              const obj21 = { style: tmp30, children: items4 };
                                                              items4 = [tmp65, tmp45];
                                                              const tmp72 = onAskForIdeas(planSuperseded, obj21);
                                                              cResult[104] = tmp45;
                                                              cResult[105] = tmp30;
                                                              cResult[106] = tmp65;
                                                              cResult[107] = tmp72;
                                                              tmp69 = tmp72;
                                                            } else {
                                                              if (cResult[108] !== message.steps) {
                                                                let tmp48;
                                                                const _Symbol2 = Symbol;
                                                                if (cResult[110] === Symbol.for("react.memo_cache_sentinel")) {
                                                                  class Ve {
                                                                    constructor(kind) {
                                                                      return "error" === kind.kind || "terminal_error" === kind.kind;
                                                                    }
                                                                  }
                                                                  cResult[110] = Ve;
                                                                  tmp48 = Ve;
                                                                } else {
                                                                  class Ve {
                                                                    constructor(kind) {
                                                                      return "error" === kind.kind || "terminal_error" === kind.kind;
                                                                    }
                                                                  }
                                                                }
                                                                const steps1 = message.steps;
                                                                const found = steps1.find(tmp48);
                                                                cResult[108] = message.steps;
                                                                cResult[109] = found;
                                                              } else {
                                                                class Ve {
                                                                  constructor(kind) {
                                                                    return "error" === kind.kind || "terminal_error" === kind.kind;
                                                                  }
                                                                }
                                                              }
                                                              if ("proposal" === message.kind) {
                                                                class Ve {
                                                                  constructor(kind) {
                                                                    return "error" === kind.kind || "terminal_error" === kind.kind;
                                                                  }
                                                                }
                                                              }
                                                              const tmpResult14 = tmp(tmp2[11]);
                                                              const turnSettledResult2 = tmpResult14.turnSettled(message);
                                                              if (turnSettledResult2) {
                                                                class Ve {
                                                                  constructor(kind) {
                                                                    return "error" === kind.kind || "terminal_error" === kind.kind;
                                                                  }
                                                                }
                                                                if (null != message.ideas) {
                                                                  class Ve {
                                                                    constructor(kind) {
                                                                      return "error" === kind.kind || "terminal_error" === kind.kind;
                                                                    }
                                                                  }
                                                                  if (message.ideas.length > 0) {
                                                                    class Ve {
                                                                      constructor(kind) {
                                                                        return "error" === kind.kind || "terminal_error" === kind.kind;
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              if (turnSettledResult2) {
                                                                class Ve {
                                                                  constructor(kind) {
                                                                    return "error" === kind.kind || "terminal_error" === kind.kind;
                                                                  }
                                                                }
                                                                if (tmp53 == null) {
                                                                  class Ve {
                                                                    constructor(kind) {
                                                                      return "error" === kind.kind || "terminal_error" === kind.kind;
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              if (turnSettledResult2) {
                                                                class Ve {
                                                                  constructor(kind) {
                                                                    return "error" === kind.kind || "terminal_error" === kind.kind;
                                                                  }
                                                                }
                                                                if (tmp55 == null) {
                                                                  class Ve {
                                                                    constructor(kind) {
                                                                      return "error" === kind.kind || "terminal_error" === kind.kind;
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              if (cResult[111] === isNewest) {
                                                                class Ve {
                                                                  constructor(kind) {
                                                                    return "error" === kind.kind || "terminal_error" === kind.kind;
                                                                  }
                                                                }
                                                              }
                                                              let tmp57;
                                                              if ("open" === secretRequestStatus) {
                                                                class Ve {
                                                                  constructor(kind) {
                                                                    return "error" === kind.kind || "terminal_error" === kind.kind;
                                                                  }
                                                                }
                                                                const activeAwaitingUserResult = obj14.activeAwaitingUser(message, isNewest);
                                                                if (activeAwaitingUserResult == null) {
                                                                  class Ve {
                                                                    constructor(kind) {
                                                                      return "error" === kind.kind || "terminal_error" === kind.kind;
                                                                    }
                                                                  }
                                                                }
                                                                tmp57 = activeAwaitingUserResult;
                                                              }
                                                              cResult[111] = isNewest;
                                                              cResult[112] = message;
                                                              cResult[113] = secretRequestStatus;
                                                              cResult[114] = tmp57;
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    let tmp46 = null;
                                                    if (hostsReminder) {
                                                      class Ve {
                                                        constructor(kind) {
                                                          return "error" === kind.kind || "terminal_error" === kind.kind;
                                                        }
                                                      }
                                                      const obj22 = { style: tmp4.reminderSlot, reminder, renderReminder: tmp44 };
                                                      tmp46 = replied(tmp39(tmp2[25]), obj22);
                                                    }
                                                    cResult[55] = hostsReminder;
                                                    cResult[56] = reminder;
                                                    cResult[57] = tmp44;
                                                    cResult[58] = tmp4.reminderSlot;
                                                    cResult[59] = tmp46;
                                                    tmp45 = tmp46;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      function renderReminder(arg0) {
                                        let items;
                                        let items1;
                                        let obj3;
                                        let obj4;
                                        let obj5;
                                        let obj6;
                                        let tmp7;
                                        if ("outdated" === arg0) {
                                          const obj2 = { style: closure_12.reminderTip, children: metroImportDefault(hasOwnProperty, obj3) };
                                          obj3 = { style: closure_12.spoken, children: metroImportDefault(ConjurePublishNoticeLineDefault, obj4) };
                                          obj4 = { projectId, notice: "outdated" };
                                          return metroImportDefault(hasOwnProperty, obj2);
                                        } else if ("ideas" === arg0) {
                                          const obj = { style: closure_12.reminderSeparated, children: metroImportDefault(tmp7, obj5) };
                                          obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: React4(metroImportAll, obj6) };
                                          obj6 = { children: items1 };
                                          const obj7 = { style: items, children: metroImportDefault(ConjureMessageAuthor.ConjureAvatar, {}) };
                                          items = [, ];
                                          ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                          tmp7 = ConjureIdeasOfferDefault;
                                          items1 = [metroImportDefault(hasOwnProperty, obj7), ];
                                          const obj8 = { style: closure_12.header, children: metroImportDefault(ConjureMessageAuthor.ConjureHeader, {}) };
                                          items1[1] = metroImportDefault(hasOwnProperty, obj8);
                                          return metroImportDefault(hasOwnProperty, obj);
                                        }
                                      }
                                      cResult[46] = onAskForIdeas;
                                      cResult[47] = projectId;
                                      cResult[48] = tmp4.avatar;
                                      cResult[49] = tmp4.avatarSpoken;
                                      cResult[50] = tmp4.header;
                                      cResult[51] = tmp4.reminderSeparated;
                                      cResult[52] = tmp4.reminderTip;
                                      cResult[53] = tmp4.spoken;
                                      cResult[54] = renderReminder;
                                      tmp44 = renderReminder;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    function xe() {
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
                    }
                    cResult[37] = user_id;
                    cResult[38] = tmp26;
                    cResult[39] = stateFromStores;
                    cResult[40] = message;
                    cResult[41] = onRestoreVersion;
                    cResult[42] = projectId;
                    cResult[43] = tmp40;
                    cResult[44] = tmp37;
                    cResult[45] = xe;
                  }
                  let turnRestoreEntryResult = null;
                  if (null != onRestoreVersion) {
                    class Ve {
                      constructor(kind) {
                        return "error" === kind.kind || "terminal_error" === kind.kind;
                      }
                    }
                    turnRestoreEntryResult = obj11.turnRestoreEntry(message);
                  }
                  cResult[34] = message;
                  cResult[35] = onRestoreVersion;
                  cResult[36] = turnRestoreEntryResult;
                  tmp37 = turnRestoreEntryResult;
                }
                const items5 = [tmp4.row, groupStart && !first && tmp4.rowGroupStart];
                cResult[29] = tmp4.row;
                cResult[30] = groupStart && !first && tmp4.rowGroupStart;
                cResult[31] = items5;
                tmp30 = items5;
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
      function ne() {
        return onToggleChecklist(message.render_id, checklistSuperseded);
      }
      cResult[14] = checklistSuperseded;
      cResult[15] = message.render_id;
      cResult[16] = onToggleChecklist;
      cResult[17] = ne;
      tmp19 = ne;
    }
    const obj23 = { turnActive: !tmp10 };
    const tmpResult15 = tmp(tmp2[12]);
    const turnSegmentsResult = tmpResult15.turnSegments(steps2, obj23);
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
  let c22;
  let checklistExpanded;
  let checklistSuperseded;
  let clarificationDismissed;
  let closure_9;
  let first;
  let fn;
  let hostsReminder;
  let intl;
  let intl2;
  let isNewest;
  let items12;
  let items13;
  let items14;
  let items15;
  let items19;
  let obj13;
  let obj15;
  let obj20;
  let obj21;
  let obj28;
  let obj32;
  let obj38;
  let obj6;
  let obj8;
  let onAnswerClarification;
  let onApprovePlan;
  let onPickIdea;
  let onRestoreVersion;
  let onToggleChecklist;
  let planExpanded;
  let planVersion;
  let reminder;
  let secretRequestStatus;
  let showsClosingMessage;
  let tmp13Result13;
  let tmp13Result14;
  let tmp17Result;
  let tmp49;
  projectId = projectId.projectId;
  const message = projectId.message;
  const groupStart = projectId.groupStart;
  ({ isNewest, reminder, checklistSuperseded } = projectId);
  ({ secretRequestStatus, onToggleChecklist } = projectId);
  const planSuperseded = projectId.planSuperseded;
  const onTogglePlan = projectId.onTogglePlan;
  const replied = projectId.replied;
  const onJumpToReplied = projectId.onJumpToReplied;
  ({ onAskForIdeas: closure_9, onDismissClarification: closure_10, onRestoreVersion } = projectId);
  let trimmed;
  let user_id;
  let stateFromStores;
  let memo5;
  let closure_19;
  let restoreProposal;
  let clarification;
  c22 = undefined;
  let c23;
  let index;
  let closure_25;
  let open;
  ({ first, hostsReminder, checklistExpanded, planVersion, planExpanded, onApprovePlan, onPickIdea, onAnswerClarification, clarificationDismissed } = projectId);
  let tmp = closure_10();
  let closure_12 = tmp;
  let obj = checklistSuperseded;
  let items = [message];
  const memo = checklistSuperseded.useMemo(() => {
    let obj2;
    const obj = { turnActive: !obj2.turnSettled(message) };
    const buildTimelineTree = ConjureTimelineTree.buildTimelineTree;
    const steps = message.steps;
    ConjureTimelineTree;
    obj2 = conjureChatTurns;
    return buildTimelineTree(steps, obj);
  }, items);
  let items1 = [message];
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
  closure_19 = tmp18;
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
  if (!tmp20) {
    if (null == user_id) {
      let tmp22 = null;
      if (hostsReminder) {
        let obj3 = {
          style: tmp.reminderSlot,
          reminder,
          renderReminder(arg0) {
                  let items;
                  let items1;
                  let obj3;
                  let obj4;
                  let obj5;
                  let obj6;
                  let tmp7;
                  if ("outdated" === arg0) {
                    const obj2 = { style: closure_12.reminderTip, children: metroImportDefault(hasOwnProperty, obj3) };
                    obj3 = { style: closure_12.spoken, children: metroImportDefault(ConjurePublishNoticeLineDefault, obj4) };
                    obj4 = { projectId, notice: "outdated" };
                    return metroImportDefault(hasOwnProperty, obj2);
                  } else if ("ideas" === arg0) {
                    const obj = { style: closure_12.reminderSeparated, children: metroImportDefault(tmp7, obj5) };
                    obj5 = { style: closure_12.spoken, onAsk, attribution: React4(metroImportAll, obj6) };
                    obj6 = { children: items1 };
                    const obj7 = { style: items, children: metroImportDefault(ConjureMessageAuthor.ConjureAvatar, {}) };
                    items = [, ];
                    ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                    tmp7 = ConjureIdeasOfferDefault;
                    items1 = [metroImportDefault(hasOwnProperty, obj7), ];
                    const obj8 = { style: closure_12.header, children: metroImportDefault(ConjureMessageAuthor.ConjureHeader, {}) };
                    items1[1] = metroImportDefault(hasOwnProperty, obj8);
                    return metroImportDefault(hasOwnProperty, obj);
                  }
                }
        };
        tmp22 = replied(tmp17(tmp14[25]), obj3);
      }
      if ("user" === message.role) {
        let tmp86Result;
        if ("" === trimmed) {
          let tmp86Result2;
          if (null == memo4) {
            tmp86Result2 = null;
          }
          return tmp86Result2;
        }
        let obj4 = { style: items8, onLongPress: tmp21, accessible: false, children: items12 };
        let tmp88 = null;
        const tmp87 = onToggleChecklist;
        if (groupStart) {
          let obj5 = { style: tmp.avatar, children: replied(tmp13(tmp14[24]).ConjureUserAvatar, obj6) };
          obj6 = { userId: message.user_id };
          tmp88 = replied(planSuperseded, obj5);
        }
        items12 = [tmp88, , , ];
        let tmp91 = null;
        if (groupStart) {
          let obj7 = { style: tmp.header, children: replied(tmp13(tmp14[24]).ConjureUserHeader, obj8) };
          obj8 = { userId: null, at: null };
          ({ user_id: obj52.userId, created_at: obj52.at } = message);
          tmp91 = replied(planSuperseded, obj7);
        }
        items12[1] = tmp91;
        if (tmp20) {
          let combined;
          const Text3 = tmp13(tmp14[26]).Text;
          if (!groupStart) {
            const intl3 = tmp13(tmp14[27]).intl;
            const _HermesInternal = HermesInternal;
            combined = "" + intl3.string(tmp13(tmp14[27]).t.KD6OJJ) + ": " + trimmed;
          }
          let tmp97 = null;
          const obj9 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: items13 };
          if (null != memo4) {
            const obj10 = { label: memo4.label, variant: "text-md/medium" };
            tmp97 = replied(tmp17(tmp14[28]), obj10);
          }
          items13 = [tmp97, , ];
          let str6 = null;
          if (null != memo4) {
            str6 = null;
            if (tmp20) {
              str6 = " ";
            }
          }
          items13[1] = str6;
          items13[2] = trimmed;
          tmp86Result = tmp86(Text3, obj9);
        } else {
          tmp86Result = null;
        }
        items12[2] = tmp86Result;
        let tmp99 = null;
        if (null != attachments) {
          const obj11 = { projectId, attachments };
          tmp99 = replied(tmp17(tmp14[29]), obj11);
        }
        items12[3] = tmp99;
        tmp86Result2 = tmp86(tmp87, obj4);
      } else if ("context_boundary" === message.kind) {
        let tmp82 = null;
        if (null != message.contextSwitch) {
          const obj12 = { style: tmp.boundaryRow, children: replied(tmp17(groupStart[30]), obj13) };
          obj13 = { projectId, contextSwitch: message.contextSwitch };
          tmp82 = replied(planSuperseded, obj12);
        }
        return tmp82;
      } else {
        if ("project_event" === message.kind) {
          if (null != message.projectEvent) {
            const obj14 = { style: items8, children: replied(tmp17(groupStart[31]), obj15) };
            obj15 = { projectId, event: message.projectEvent };
            return replied(planSuperseded, obj14);
          }
        }
        if ("publish_notice" === message.kind) {
          if (null != message.publishNotice) {
            const obj16 = { style: items8, children: items14 };
            const obj17 = { projectId, notice: message.publishNotice };
            items14 = [replied(tmp17(tmp14[22]), obj17), tmp22];
            return onAsk(planSuperseded, obj16);
          }
        }
        if (true === message.interrupted) {
          const obj18 = { style: items8, children: items15 };
          const obj19 = { style: tmp.activityBox, children: replied(tmp17Result, obj20) };
          obj20 = { line: intl2.string(tmp17(groupStart[32]).oOmBdX), live: false, settled: true, inGutter: true, glyph: replied(StopIcon, obj21) };
          tmp17Result = tmp17(groupStart[5]);
          intl2 = tmp13(tmp14[27]).intl;
          obj21 = { size: "refresh_sm", color: tmp17(groupStart[8]).colors.TEXT_MUTED };
          StopIcon = tmp13(tmp14[33]).StopIcon;
          items15 = [replied(planSuperseded, obj19), tmp22];
          return onAsk(planSuperseded, obj18);
        } else {
          let provisionalTodo;
          let tmp50Result18;
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
          let tmp27 = null;
          if (turnSettledResult) {
            let publishCta = message.publishCta;
            if (publishCta == null) {
              publishCta = null;
            }
            tmp27 = publishCta;
          }
          let tmp29 = null;
          if (turnSettledResult) {
            let secretRequest = message.secretRequest;
            if (secretRequest == null) {
              secretRequest = null;
            }
            tmp29 = secretRequest;
          }
          if ("open" === secretRequestStatus) {
            const tmp13Result8 = projectId(groupStart[34]);
            tmp13Result8.activeAwaitingUser(message, isNewest);
          }
          let tmp33 = null;
          if (turnSettledResult) {
            let settingsRequest = message.settingsRequest;
            if (settingsRequest == null) {
              settingsRequest = null;
            }
            tmp33 = settingsRequest;
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
          let items20 = memo2;
          if (memo2 == null) {
            let todos = null;
            if (null != message.todos) {
              todos = null;
              if (message.todos.length > 0) {
                todos = message.todos;
              }
            }
            items20 = todos;
          }
          if (null == items20) {
            if (null != message.provisionalTodo) {
              if ("" !== message.provisionalTodo) {
                provisionalTodo = message.provisionalTodo;
              }
            }
          }
          const obj22 = { steps: message.steps, content: trimmed, hasProposal: null != proposal, hasLiveClarification: null != clarification, hasAttachments: null != attachments };
          const tmp13Result9 = projectId(groupStart[35]);
          const turnPresentation = tmp13Result9.resolveTurnPresentation(obj22);
          ({ showsClosingMessage, replyKey: c22 } = turnPresentation);
          let tmp39 = memo.steps.length > 0;
          const closingContent = turnPresentation.closingContent;
          if (!tmp39) {
            tmp39 = memo.tasks.length > 0;
          }
          if (!tmp39) {
            if (0 === turnPresentation.streamed.length) {
              if ("" === trimmed) {
                if (null == proposal) {
                  if (null == found) {
                    if (null == ideas) {
                      if (null == items20) {
                        if (null == provisionalTodo) {
                          if (null == tmp29) {
                            if (null == tmp33) {
                              if (null == attachments) {
                                if (null == clarification) {
                                  if (null == restoreProposal) {
                                    if (null == tmp27) {
                                      if (null == reminder) {
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
          const tmp13Result10 = projectId(groupStart[35]);
          const turnLeadsWithStretchResult = tmp13Result10.turnLeadsWithStretch(tmp39, turnPresentation);
          c23 = turnLeadsWithStretchResult;
          const found1 = memo1.filter((hasWork) => hasWork.hasWork);
          const atResult = found1.at(-1);
          index = undefined;
          if (atResult != null) {
            index = atResult.index;
          }
          const tmp13Result11 = projectId(groupStart[11]);
          const tmp43 = !tmp13Result11.turnSettled(message);
          closure_25 = tmp43;
          const obj23 = { turnActive: tmp43 };
          const tmp13Result12 = projectId(groupStart[12]);
          open = tmp13Result12.turnLifecycle(memo1, obj23).open;
          let avatarSpokenReplying = groupStart && null != replied;
          let tmp47Result = null;
          const tmp45 = onJumpToReplied;
          if (avatarSpokenReplying) {
            const obj24 = { replied, onJump: tmp49 };
            tmp49 = undefined;
            const tmp17Result5 = tmp17(groupStart[7]);
            const tmp47 = replied;
            if (null != onJumpToReplied) {
              tmp49 = callback2;
            }
            tmp47Result = tmp47(tmp17Result5, obj24);
          }
          const items16 = [tmp47Result, , ];
          const items17 = [, , ];
          ({ avatar: arr16[0], avatarSpoken: arr16[1] } = tmp);
          if (avatarSpokenReplying) {
            avatarSpokenReplying = tmp.avatarSpokenReplying;
          }
          const obj25 = { children: items16 };
          items17[2] = avatarSpokenReplying;
          const obj26 = { style: items17, children: replied(projectId(groupStart[24]).ConjureAvatar, {}) };
          items16[1] = replied(planSuperseded, obj26);
          const obj27 = { style: tmp.header, children: replied(projectId(groupStart[24]).ConjureHeader, obj28) };
          obj28 = { at: message.created_at };
          items16[2] = replied(planSuperseded, obj27);
          const tmp44Result = onAsk(tmp45, obj25);
          const obj29 = { style: items8, onLongPress: tmp21, accessible: false, children: null };
          let tmp50Result = null;
          const tmp53 = onToggleChecklist;
          if (turnLeadsWithStretchResult) {
            tmp50Result = null;
            if (groupStart) {
              const obj30 = { style: tmp.spoken, children: tmp44Result };
              tmp50Result = tmp50(tmp51, obj30);
            }
          }
          const items18 = [
            tmp50Result,
            memo1.map((prose, index) => {
                      let ConjureRevealedMarkdown;
                      let obj2;
                      let obj4;
                      let tmp16;
                      let tmp5;
                      let tmp19Result = null;
                      const Fragment = react.Fragment;
                      const tmp = React4;
                      if (null != prose.prose) {
                        tmp19Result = null;
                        if (prose.prose.key !== c22) {
                          const obj3 = { style: closure_12.spoken, children: metroImportDefault(ConjureRevealedMarkdown, obj4) };
                          obj4 = { source: prose.prose.content, streaming: tmp5 };
                          tmp5 = closure_25;
                          ConjureRevealedMarkdown = ConjureNativeMarkdown.ConjureRevealedMarkdown;
                          const tmp20 = hasOwnProperty;
                          if (closure_25) {
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
                        tmp16 = c23 && groupStart;
                        obj2 = ConjureActivityBox;
                        const tmp7 = metroImportDefault;
                        if (tmp16) {
                          tmp16 = 0 === index;
                        }
                        if (tmp16) {
                          tmp16 = null == prose.prose || prose.prose.key === c22;
                          const tmp17 = null == prose.prose || prose.prose.key === c22;
                        }
                        tmp7Result = tmp7(tmp10, obj);
                      }
                      children[1] = tmp7Result;
                      return tmp(Fragment, { children }, prose.key);
                    }),
  ,
  ,

          ];
          if (!showsClosingMessage) {
            if (null == proposal) {
              if (null == clarification) {
                if (null == restoreProposal) {
                  if (null == ideas) {
                    if (null == tmp29) {
                      if (null == tmp33) {
                        if (null == attachments) {
                          if (null == found) {
                            if (null == items20) {
                              let tmp44Result2;
                              if (null == provisionalTodo) {
                                tmp44Result2 = null;
                              }
                              items18[2] = tmp44Result2;
                              let tmp50Result14 = null;
                              if (null != tmp31) {
                                const obj31 = { style: tmp.spoken, children: replied(Text2, obj32) };
                                obj32 = { variant: "text-xs/normal", color: "text-muted", children: intl.string(tmp17(groupStart[32]).YR8A2v) };
                                Text2 = tmp13(tmp14[26]).Text;
                                intl = tmp13(tmp14[27]).intl;
                                tmp50Result14 = tmp50(tmp51, obj31);
                              }
                              items18[3] = tmp50Result14;
                              items18[4] = tmp22;
                              obj29.children = items18;
                              return onAsk(tmp53, obj29);
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
          let tmp56 = null;
          const obj33 = { style: tmp.spoken, children: items19 };
          if (groupStart) {
            tmp56 = null;
            if (!turnLeadsWithStretchResult) {
              tmp56 = tmp44Result;
            }
          }
          items19 = [tmp56, , , , , , , , , , , , ];
          let tmp50Result15 = null;
          if (showsClosingMessage) {
            const obj34 = { source: closingContent };
            tmp50Result15 = tmp50(tmp17(tmp14[36]), obj34);
          }
          items19[1] = tmp50Result15;
          let tmp50Result16 = null;
          if ("side_reply" === message.kind) {
            const obj35 = { variant: "text-xs/normal", color: "text-muted", children: tmp13Result13.midTurnCaption(message.acknowledges) };
            const Text = tmp13(tmp14[26]).Text;
            tmp13Result13 = projectId(groupStart[38]);
            tmp50Result16 = tmp50(Text, obj35);
          }
          items19[2] = tmp50Result16;
          let tmp50Result17 = null;
          if (null != attachments) {
            const obj36 = { projectId, attachments };
            tmp50Result17 = tmp50(tmp17(tmp14[29]), obj36);
          }
          items19[3] = tmp50Result17;
          if (null != items20) {
            const tmp17Result6 = tmp17(groupStart[39]);
            const tmp17Result7 = tmp17(groupStart[40]);
            if (items20 == null) {
              items20 = [];
            }
            const obj37 = { children: replied(tmp17Result7, obj38) };
            obj38 = { todos: items20, provisional: provisionalTodo, agents: memo3, live: tmp13Result14.checklistLive(message), superseded: checklistSuperseded, expanded: checklistExpanded, onToggleExpanded: callback };
            tmp13Result14 = projectId(groupStart[41]);
            tmp50Result18 = tmp50(tmp17Result6, obj37);
          } else {
            tmp50Result18 = null;
          }
          items19[4] = tmp50Result18;
          let tmp50Result19 = null;
          if (null != proposal) {
            const obj39 = { projectId, proposal, version: planVersion, superseded: planSuperseded, expanded: planExpanded, onToggleExpanded: callback1, onApprove: onApprovePlan };
            tmp50Result19 = tmp50(tmp17(tmp14[42]), obj39);
          }
          items19[5] = tmp50Result19;
          let tmp50Result20 = null;
          if (null != clarification) {
            const obj40 = {
              projectId,
              clarification,
              onSubmit: onAnswerClarification,
              onDismiss() {
                          return closure_10(clarification.id);
                        }
            };
            tmp50Result20 = tmp50(tmp17(tmp14[43]), obj40);
          }
          items19[6] = tmp50Result20;
          let tmp50Result21 = null;
          if (null != tmp29) {
            const obj41 = { projectId, cardId: message.render_id, request: tmp29, status: secretRequestStatus, awaiting: tmp31 };
            tmp50Result21 = tmp50(tmp17(tmp14[44]), obj41);
          }
          items19[7] = tmp50Result21;
          let tmp50Result22 = null;
          if (null != tmp33) {
            const obj42 = { projectId, request: tmp33 };
            tmp50Result22 = tmp50(tmp17(tmp14[45]), obj42);
          }
          items19[8] = tmp50Result22;
          let tmp50Result23 = null;
          if (null != tmp27) {
            const obj43 = { projectId };
            tmp50Result23 = tmp50(tmp17(tmp14[46]), obj43);
          }
          items19[9] = tmp50Result23;
          let tmp50Result24 = null;
          if (null != ideas) {
            const obj44 = { ideas, onPick: onPickIdea };
            tmp50Result24 = tmp50(tmp17(tmp14[47]), obj44);
          }
          items19[10] = tmp50Result24;
          let tmp50Result25 = null;
          if (null != restoreProposal) {
            const obj45 = { proposal: restoreProposal, onRestore: fn };
            fn = undefined;
            const tmp17Result8 = tmp17(groupStart[48]);
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
            tmp50Result25 = tmp50(tmp17Result8, obj45);
          }
          items19[11] = tmp50Result25;
          let tmp50Result26 = null;
          if (null != found) {
            tmp50Result26 = null;
            if ("message" in found) {
              const obj46 = { variant: "text-sm/normal", color: "text-feedback-critical", children: found.message };
              tmp50Result26 = tmp50(tmp13(tmp14[26]).Text, obj46);
            }
          }
          items19[12] = tmp50Result26;
          tmp44Result2 = tmp44(tmp51, obj33);
        }
      }
    }
  }
}));
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMessageRow.tsx");

export default memoResult;
