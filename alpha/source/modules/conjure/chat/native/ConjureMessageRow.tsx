// Module ID: 12090
// Function ID: 12091
// Name: ConjureMessageRow
// Dependencies: [19, 17, 1392, 21, 5153, 12081, 12091, 12092, 587, 558, 576, 10903, 12051, 12060, 11610, 12094, 504, 12101, 12102, 12097, 12103, 12031, 11631, 12095, 5149, 1128, 12100, 12104, 12105, 12106, 12107, 12110, 3865, 12115, 12117, 12118, 12119, 12124, 12175, 12087, 12176, 12050, 12178, 12201, 12214, 12216, 12220, 12221, 12223, 12224, 2]

// Module 12090 (ConjureMessageRow)
import nativeDefault from "native" /* 587 */;
import conjureChatTurns from "conjureChatTurns" /* 10903 */;
import ConjureDesignFeedback from "ConjureDesignFeedback" /* 11610 */;
import ConjureVersionRestoreConfirm from "ConjureVersionRestoreConfirm" /* 12031 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 12051 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 12060 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 12081 */;
import conjureNativeChatLayout from "conjureNativeChatLayout" /* 12091 */;
import chat_ConjureRepliedMessage from "chat/ConjureRepliedMessage" /* 12092 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 12097 */;
import ConjureChatRestore from "ConjureChatRestore" /* 12101 */;
import conjureQueuedMessage from "conjureQueuedMessage" /* 12103 */;
import ConjureNativeMarkdown from "ConjureNativeMarkdown" /* 12119 */;
import ConjureActivityBox from "ConjureActivityBox" /* 12124 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1392 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5153 */;
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
  let StopIcon;
  let appBuildRequestDismissed;
  let canSend;
  let checklistExpanded;
  let checklistSuperseded;
  let clarificationDismissed;
  let first;
  let groupStart;
  let id2;
  let isNewest;
  let items1;
  let items2;
  let obj10;
  let obj13;
  let obj20;
  let obj8;
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
  const cResult = obj.c(226);
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
      const tmpResult10 = tmp(tmp2[11]);
      const turnSettledResult1 = tmpResult10.turnSettled(message);
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
        const tmpResult11 = tmp(tmp2[12]);
        const latestTodosResult = tmpResult11.latestTodos(message.steps);
        cResult[10] = message.steps;
        cResult[11] = latestTodosResult;
      }
      if (cResult[12] !== tmp8.tasks) {
        const tmpResult12 = tmp(tmp2[13]);
        const runningTodoAgentsResult = tmpResult12.runningTodoAgents(tmp8.tasks);
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
                  const tmpResult13 = tmp(tmp2[14]);
                  const result = tmpResult13.parseConjureDesignRemark(message.content);
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
                const tmpResult14 = tmp(tmp2[15]);
                const conjureMentionNames = tmpResult14.useConjureMentionNames(tmp26);
                let attachments = null;
                if (null != message.attachments) {
                  attachments = null;
                  if (message.attachments.length > 0) {
                    attachments = message.attachments;
                  }
                }
                if (cResult[29] === tmp4.row) {
                  let tmp32;
                  let tmp36;
                  let tmp35;
                  if (cResult[30] === (groupStart && !first && tmp4.rowGroupStart)) {
                    tmp32 = cResult[31];
                  }
                  let user_id;
                  if ("user" === message.role) {
                    user_id = message.user_id;
                  }
                  const _Symbol = Symbol;
                  if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                    const items = [onTogglePlan];
                    function _e() {
                      const currentUser = onTogglePlan.getCurrentUser();
                      id = undefined;
                      if (currentUser != null) {
                        id = currentUser.id;
                      }
                      return id;
                    }
                    cResult[32] = items;
                    cResult[33] = _e;
                    tmp36 = _e;
                    tmp35 = items;
                  } else {
                    tmp35 = cResult[32];
                    tmp36 = cResult[33];
                  }
                  const tmpResult15 = tmp(tmp2[16]);
                  const stateFromStores = tmpResult15.useStateFromStores(tmp35, tmp36);
                  if (cResult[34] === message) {
                    let tmp39;
                    if (cResult[35] === onRestoreVersion) {
                      tmp39 = cResult[36];
                    }
                    let closure_18 = tmp39;
                    const tmp42 = message(tmp2[18])(projectId, message);
                    let closure_19 = tmp42;
                    if (cResult[37] === user_id) {
                      if (cResult[38] === tmp26) {
                        if (cResult[39] === stateFromStores) {
                          if (cResult[40] === message) {
                            if (cResult[41] === onRestoreVersion) {
                              if (cResult[42] === projectId) {
                                if (cResult[43] === tmp42) {
                                  if ("" === tmp26) {
                                    if (null == user_id) {
                                      if ("user" === message.role) {
                                        let tmp90;
                                        if ("" === tmp26) {
                                          if (null == tmp22) {
                                            tmp90 = null;
                                          }
                                          return tmp90;
                                        }
                                        if (cResult[46] === groupStart) {
                                          if (cResult[47] === message.user_id) {
                                            let tmp91;
                                            if (cResult[48] === tmp4.avatar) {
                                              tmp91 = cResult[49];
                                            }
                                            if (cResult[50] === groupStart) {
                                              if (cResult[51] === message.created_at) {
                                                if (cResult[52] === message.user_id) {
                                                  let tmp95;
                                                  let tmp101Result;
                                                  if (cResult[53] === tmp4.header) {
                                                    tmp95 = cResult[54];
                                                  }
                                                  if (cResult[55] === tmp26) {
                                                    if (cResult[56] === groupStart) {
                                                      if (cResult[57] === tmp22) {
                                                        let tmp99;
                                                        if (cResult[58] === conjureMentionNames) {
                                                          tmp99 = cResult[59];
                                                        }
                                                        if (cResult[60] === attachments) {
                                                          let tmp106;
                                                          if (cResult[61] === projectId) {
                                                            tmp106 = cResult[62];
                                                          }
                                                          if (cResult[63] === tmp45) {
                                                            if (cResult[64] === tmp32) {
                                                              if (cResult[65] === tmp91) {
                                                                if (cResult[66] === tmp95) {
                                                                  if (cResult[67] === tmp99) {
                                                                    let tmp109;
                                                                    if (cResult[68] === tmp106) {
                                                                      tmp109 = cResult[69];
                                                                    }
                                                                    tmp90 = tmp109;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                          let obj2 = { style: tmp32, onLongPress: tmp45, accessible: false, children: items1 };
                                                          items1 = [tmp91, tmp95, tmp99, tmp106];
                                                          const tmp112 = onJumpToReplied(onToggleChecklist, obj2);
                                                          cResult[63] = tmp45;
                                                          cResult[64] = tmp32;
                                                          cResult[65] = tmp91;
                                                          cResult[66] = tmp95;
                                                          cResult[67] = tmp99;
                                                          cResult[68] = tmp106;
                                                          cResult[69] = tmp112;
                                                          tmp109 = tmp112;
                                                        }
                                                        let tmp107 = null;
                                                        if (null != attachments) {
                                                          let obj3 = { projectId, attachments };
                                                          tmp107 = replied(tmp41(tmp2[28]), obj3);
                                                        }
                                                        cResult[60] = attachments;
                                                        cResult[61] = projectId;
                                                        cResult[62] = tmp107;
                                                        tmp106 = tmp107;
                                                      }
                                                    }
                                                  }
                                                  if ("" !== tmp26) {
                                                    let combined;
                                                    const Text = tmp(tmp2[24]).Text;
                                                    const tmp101 = onJumpToReplied;
                                                    if (!groupStart) {
                                                      const intl2 = tmp(tmp2[25]).intl;
                                                      const _HermesInternal = HermesInternal;
                                                      combined = "" + intl2.string(tmp(tmp2[25]).t.KD6OJJ) + ": " + conjureMentionNames;
                                                    }
                                                    let obj4 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: items2 };
                                                    let tmp103 = null;
                                                    if (null != tmp22) {
                                                      const obj5 = { label: tmp22.label, variant: "text-md/medium" };
                                                      tmp103 = replied(tmp41(tmp2[26]), obj5);
                                                    }
                                                    items2 = [tmp103, , ];
                                                    let str8 = null;
                                                    if (null != tmp22) {
                                                      str8 = null;
                                                      if ("" !== tmp26) {
                                                        str8 = " ";
                                                      }
                                                    }
                                                    items2[1] = str8;
                                                    const obj6 = { text: tmp26, variant: "text-md/normal" };
                                                    items2[2] = replied(message(tmp2[27]), obj6);
                                                    tmp101Result = tmp101(Text, obj4);
                                                  } else {
                                                    tmp101Result = null;
                                                  }
                                                  cResult[55] = tmp26;
                                                  cResult[56] = groupStart;
                                                  cResult[57] = tmp22;
                                                  cResult[58] = conjureMentionNames;
                                                  cResult[59] = tmp101Result;
                                                  tmp99 = tmp101Result;
                                                }
                                              }
                                            }
                                            let tmp96 = null;
                                            if (groupStart) {
                                              const obj7 = { style: tmp4.header, children: replied(tmp(tmp2[23]).ConjureUserHeader, obj8) };
                                              obj8 = { userId: null, at: null };
                                              ({ user_id: obj28.userId, created_at: obj28.at } = message);
                                              tmp96 = replied(planSuperseded, obj7);
                                            }
                                            cResult[50] = groupStart;
                                            cResult[51] = message.created_at;
                                            cResult[52] = message.user_id;
                                            cResult[53] = tmp4.header;
                                            cResult[54] = tmp96;
                                            tmp95 = tmp96;
                                          }
                                        }
                                        let tmp92 = null;
                                        if (groupStart) {
                                          const obj9 = { style: tmp4.avatar, children: replied(tmp(tmp2[23]).ConjureUserAvatar, obj10) };
                                          obj10 = { userId: message.user_id };
                                          tmp92 = replied(planSuperseded, obj9);
                                        }
                                        cResult[46] = groupStart;
                                        cResult[47] = message.user_id;
                                        cResult[48] = tmp4.avatar;
                                        cResult[49] = tmp92;
                                        tmp91 = tmp92;
                                      } else if ("context_boundary" === message.kind) {
                                        if (cResult[70] === message.contextSwitch) {
                                          if (cResult[71] === projectId) {
                                            let tmp86;
                                            if (cResult[72] === tmp4.boundaryRow) {
                                              tmp86 = cResult[73];
                                            }
                                            return tmp86;
                                          }
                                        }
                                        let tmp87 = null;
                                        if (null != message.contextSwitch) {
                                          const obj11 = { style: tmp4.boundaryRow, children: replied(message(tmp2[29]), obj13) };
                                          obj13 = { projectId, contextSwitch: message.contextSwitch };
                                          tmp87 = replied(planSuperseded, obj11);
                                        }
                                        cResult[70] = message.contextSwitch;
                                        cResult[71] = projectId;
                                        cResult[72] = tmp4.boundaryRow;
                                        cResult[73] = tmp87;
                                        tmp86 = tmp87;
                                      } else {
                                        if ("project_event" === message.kind) {
                                          if (null != message.projectEvent) {
                                            if (cResult[74] === message.projectEvent) {
                                              let tmp79;
                                              if (cResult[75] === projectId) {
                                                tmp79 = cResult[76];
                                              }
                                              if (cResult[77] === tmp32) {
                                                let tmp82;
                                                if (cResult[78] === tmp79) {
                                                  tmp82 = cResult[79];
                                                }
                                                return tmp82;
                                              }
                                              const obj15 = { style: tmp32, children: tmp79 };
                                              const tmp85 = replied(planSuperseded, obj15);
                                              cResult[77] = tmp32;
                                              cResult[78] = tmp79;
                                              cResult[79] = tmp85;
                                              tmp82 = tmp85;
                                            }
                                            const obj16 = { projectId, event: message.projectEvent };
                                            const tmp81 = replied(message(tmp2[30]), obj16);
                                            cResult[74] = message.projectEvent;
                                            cResult[75] = projectId;
                                            cResult[76] = tmp81;
                                            tmp79 = tmp81;
                                          }
                                        }
                                        if ("publish_notice" === message.kind) {
                                          if (null != message.publishNotice) {
                                            if (cResult[80] === message.publishNotice) {
                                              let tmp72;
                                              if (cResult[81] === projectId) {
                                                tmp72 = cResult[82];
                                              }
                                              if (cResult[83] === tmp32) {
                                                let tmp75;
                                                if (cResult[84] === tmp72) {
                                                  tmp75 = cResult[85];
                                                }
                                                return tmp75;
                                              }
                                              const obj17 = { style: tmp32, children: tmp72 };
                                              const tmp78 = replied(planSuperseded, obj17);
                                              cResult[83] = tmp32;
                                              cResult[84] = tmp72;
                                              cResult[85] = tmp78;
                                              tmp75 = tmp78;
                                            }
                                            const obj18 = { projectId, notice: message.publishNotice };
                                            const tmp74 = replied(message(tmp2[31]), obj18);
                                            cResult[80] = message.publishNotice;
                                            cResult[81] = projectId;
                                            cResult[82] = tmp74;
                                            tmp72 = tmp74;
                                          }
                                        }
                                        if (true === message.interrupted) {
                                          let tmp58;
                                          let tmp60;
                                          let tmp64;
                                          const _Symbol3 = Symbol;
                                          const activityBox = tmp4.activityBox;
                                          if (cResult[86] === Symbol.for("react.memo_cache_sentinel")) {
                                            const intl = tmp(tmp2[25]).intl;
                                            const stringResult = intl.string(message(tmp2[32]).oOmBdX);
                                            cResult[86] = stringResult;
                                            tmp58 = stringResult;
                                          } else {
                                            tmp58 = cResult[86];
                                          }
                                          const _Symbol4 = Symbol;
                                          if (cResult[87] === Symbol.for("react.memo_cache_sentinel")) {
                                            const obj19 = { line: tmp58, live: false, settled: true, inGutter: true, glyph: replied(StopIcon, obj20) };
                                            obj20 = { size: "refresh_sm", color: message(tmp2[8]).colors.TEXT_MUTED };
                                            const tmp41Result = message(tmp2[5]);
                                            StopIcon = tmp(tmp2[33]).StopIcon;
                                            const tmp63 = replied(tmp41Result, obj19);
                                            cResult[87] = tmp63;
                                            tmp60 = tmp63;
                                          } else {
                                            tmp60 = cResult[87];
                                          }
                                          if (cResult[88] !== tmp4.activityBox) {
                                            const obj21 = { style: activityBox, children: tmp60 };
                                            const tmp67 = replied(planSuperseded, obj21);
                                            cResult[88] = tmp4.activityBox;
                                            cResult[89] = tmp67;
                                            tmp64 = tmp67;
                                          } else {
                                            tmp64 = cResult[89];
                                          }
                                          if (cResult[90] === tmp32) {
                                            let tmp68;
                                            if (cResult[91] === tmp64) {
                                              tmp68 = cResult[92];
                                            }
                                            return tmp68;
                                          }
                                          const obj22 = { style: tmp32, children: tmp64 };
                                          const tmp71 = replied(planSuperseded, obj22);
                                          cResult[90] = tmp32;
                                          cResult[91] = tmp64;
                                          cResult[92] = tmp71;
                                          tmp68 = tmp71;
                                        } else {
                                          if (cResult[93] !== message.steps) {
                                            let tmp47;
                                            const _Symbol2 = Symbol;
                                            if (cResult[95] === Symbol.for("react.memo_cache_sentinel")) {
                                              class Ge {
                                                constructor(kind) {
                                                  return "error" === kind.kind || "terminal_error" === kind.kind;
                                                }
                                              }
                                              cResult[95] = Ge;
                                              tmp47 = Ge;
                                            } else {
                                              class Ge {
                                                constructor(kind) {
                                                  return "error" === kind.kind || "terminal_error" === kind.kind;
                                                }
                                              }
                                            }
                                            const steps1 = message.steps;
                                            const found = steps1.find(tmp47);
                                            cResult[93] = message.steps;
                                            cResult[94] = found;
                                          } else {
                                            class Ge {
                                              constructor(kind) {
                                                return "error" === kind.kind || "terminal_error" === kind.kind;
                                              }
                                            }
                                          }
                                          if ("proposal" === message.kind) {
                                            class Ge {
                                              constructor(kind) {
                                                return "error" === kind.kind || "terminal_error" === kind.kind;
                                              }
                                            }
                                          }
                                          const tmpResult16 = tmp(tmp2[11]);
                                          const turnSettledResult2 = tmpResult16.turnSettled(message);
                                          if (turnSettledResult2) {
                                            class Ge {
                                              constructor(kind) {
                                                return "error" === kind.kind || "terminal_error" === kind.kind;
                                              }
                                            }
                                            if (null != message.ideas) {
                                              class Ge {
                                                constructor(kind) {
                                                  return "error" === kind.kind || "terminal_error" === kind.kind;
                                                }
                                              }
                                              if (message.ideas.length > 0) {
                                                class Ge {
                                                  constructor(kind) {
                                                    return "error" === kind.kind || "terminal_error" === kind.kind;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          if (turnSettledResult2) {
                                            class Ge {
                                              constructor(kind) {
                                                return "error" === kind.kind || "terminal_error" === kind.kind;
                                              }
                                            }
                                            if (tmp52 == null) {
                                              class Ge {
                                                constructor(kind) {
                                                  return "error" === kind.kind || "terminal_error" === kind.kind;
                                                }
                                              }
                                            }
                                          }
                                          if (turnSettledResult2) {
                                            class Ge {
                                              constructor(kind) {
                                                return "error" === kind.kind || "terminal_error" === kind.kind;
                                              }
                                            }
                                            if (tmp54 == null) {
                                              class Ge {
                                                constructor(kind) {
                                                  return "error" === kind.kind || "terminal_error" === kind.kind;
                                                }
                                              }
                                            }
                                          }
                                          if (cResult[96] === isNewest) {
                                            class Ge {
                                              constructor(kind) {
                                                return "error" === kind.kind || "terminal_error" === kind.kind;
                                              }
                                            }
                                          }
                                          let tmp56;
                                          if ("open" === secretRequestStatus) {
                                            class Ge {
                                              constructor(kind) {
                                                return "error" === kind.kind || "terminal_error" === kind.kind;
                                              }
                                            }
                                            const activeAwaitingUserResult = obj14.activeAwaitingUser(message, isNewest);
                                            if (activeAwaitingUserResult == null) {
                                              class Ge {
                                                constructor(kind) {
                                                  return "error" === kind.kind || "terminal_error" === kind.kind;
                                                }
                                              }
                                            }
                                            tmp56 = activeAwaitingUserResult;
                                          }
                                          cResult[96] = isNewest;
                                          cResult[97] = message;
                                          cResult[98] = secretRequestStatus;
                                          cResult[99] = tmp56;
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
                    function je() {
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
                    }
                    cResult[37] = user_id;
                    cResult[38] = tmp26;
                    cResult[39] = stateFromStores;
                    cResult[40] = message;
                    cResult[41] = onRestoreVersion;
                    cResult[42] = projectId;
                    cResult[43] = tmp42;
                    cResult[44] = tmp39;
                    cResult[45] = je;
                  }
                  let turnRestoreEntryResult = null;
                  if (null != onRestoreVersion) {
                    class Ge {
                      constructor(kind) {
                        return "error" === kind.kind || "terminal_error" === kind.kind;
                      }
                    }
                    turnRestoreEntryResult = obj12.turnRestoreEntry(message);
                  }
                  cResult[34] = message;
                  cResult[35] = onRestoreVersion;
                  cResult[36] = turnRestoreEntryResult;
                  tmp39 = turnRestoreEntryResult;
                }
                const items3 = [tmp4.row, groupStart && !first && tmp4.rowGroupStart];
                cResult[29] = tmp4.row;
                cResult[30] = groupStart && !first && tmp4.rowGroupStart;
                cResult[31] = items3;
                tmp32 = items3;
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
    const tmpResult17 = tmp(tmp2[12]);
    const turnSegmentsResult = tmpResult17.turnSegments(steps2, obj23);
    cResult[7] = message.steps;
    cResult[8] = !tmp10;
    cResult[9] = turnSegmentsResult;
    tmp13 = turnSegmentsResult;
  }
  const tmpResult18 = tmp(tmp2[12]);
  const timelineTree = tmpResult18.buildTimelineTree(steps, { turnActive: tmp7 });
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
  let secretRequestStatus;
  let showsClosingMessage;
  let tmp11Result15;
  let tmp11Result16;
  let tmp18Result;
  let tmp50;
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
  let attachments = null;
  const conjureMentionNames = obj2.useConjureMentionNames(trimmed);
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
  const items9 = [onTogglePlan];
  const tmp11Result = projectId(groupStart[16]);
  stateFromStores = tmp11Result.useStateFromStores(items9, () => {
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
  const tmp19 = message(tmp12[18])(projectId, message);
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
        let tmp86Result;
        if ("" === trimmed) {
          let tmp86Result2;
          if (null == memo4) {
            tmp86Result2 = null;
          }
          return tmp86Result2;
        }
        let obj3 = { style: items8, onLongPress: tmp22, accessible: false, children: items12 };
        let tmp88 = null;
        const tmp87 = onToggleChecklist;
        if (groupStart) {
          let obj4 = { style: tmp.avatar, children: replied(tmp11(tmp12[23]).ConjureUserAvatar, obj5) };
          obj5 = { userId: message.user_id };
          tmp88 = replied(planSuperseded, obj4);
        }
        items12 = [tmp88, , , ];
        let tmp91 = null;
        if (groupStart) {
          const obj6 = { style: tmp.header, children: replied(projectId(groupStart[23]).ConjureUserHeader, obj7) };
          obj7 = { userId: null, at: null };
          ({ user_id: obj53.userId, created_at: obj53.at } = message);
          tmp91 = replied(planSuperseded, obj6);
        }
        items12[1] = tmp91;
        if ("" !== trimmed) {
          let combined;
          const Text3 = tmp11(tmp12[24]).Text;
          if (!groupStart) {
            const intl3 = tmp11(tmp12[25]).intl;
            const _HermesInternal = HermesInternal;
            combined = "" + intl3.string(tmp11(tmp12[25]).t.KD6OJJ) + ": " + conjureMentionNames;
          }
          let tmp97 = null;
          const obj8 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: items13 };
          if (null != memo4) {
            const obj9 = { label: memo4.label, variant: "text-md/medium" };
            tmp97 = replied(tmp18(tmp12[26]), obj9);
          }
          items13 = [tmp97, , ];
          let str6 = null;
          if (null != memo4) {
            str6 = null;
            if ("" !== trimmed) {
              str6 = " ";
            }
          }
          items13[1] = str6;
          const obj10 = { text: trimmed, variant: "text-md/normal" };
          items13[2] = replied(message(groupStart[27]), obj10);
          tmp86Result = tmp86(Text3, obj8);
        } else {
          tmp86Result = null;
        }
        items12[2] = tmp86Result;
        let tmp100 = null;
        if (null != attachments) {
          const obj11 = { projectId, attachments };
          tmp100 = replied(tmp18(tmp12[28]), obj11);
        }
        items12[3] = tmp100;
        tmp86Result2 = tmp86(tmp87, obj3);
      } else if ("context_boundary" === message.kind) {
        let tmp82 = null;
        if (null != message.contextSwitch) {
          const obj12 = { style: tmp.boundaryRow, children: replied(message(groupStart[29]), obj13) };
          obj13 = { projectId, contextSwitch: message.contextSwitch };
          tmp82 = replied(planSuperseded, obj12);
        }
        return tmp82;
      } else {
        if ("project_event" === message.kind) {
          if (null != message.projectEvent) {
            const obj14 = { style: items8, children: replied(message(groupStart[30]), obj15) };
            obj15 = { projectId, event: message.projectEvent };
            return replied(planSuperseded, obj14);
          }
        }
        if ("publish_notice" === message.kind) {
          if (null != message.publishNotice) {
            const obj16 = { style: items8, children: replied(message(groupStart[31]), obj17) };
            obj17 = { projectId, notice: message.publishNotice };
            return replied(planSuperseded, obj16);
          }
        }
        if (true === message.interrupted) {
          const obj18 = { style: items8, children: replied(planSuperseded, obj19) };
          obj19 = { style: tmp.activityBox, children: replied(tmp18Result, obj20) };
          obj20 = { line: intl2.string(message(groupStart[32]).oOmBdX), live: false, settled: true, inGutter: true, glyph: replied(StopIcon, obj21) };
          tmp18Result = message(groupStart[5]);
          intl2 = tmp11(tmp12[25]).intl;
          obj21 = { size: "refresh_sm", color: message(groupStart[8]).colors.TEXT_MUTED };
          StopIcon = tmp11(tmp12[33]).StopIcon;
          return replied(planSuperseded, obj18);
        } else {
          let provisionalTodo;
          let tmp51Result19;
          let steps = message.steps;
          const found = steps.find((kind) => "error" === kind.kind || "terminal_error" === kind.kind);
          let proposal;
          if ("proposal" === message.kind) {
            proposal = message.proposal;
          }
          const tmp11Result9 = projectId(groupStart[11]);
          const turnSettledResult = tmp11Result9.turnSettled(message);
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
            const tmp11Result10 = projectId(groupStart[34]);
            tmp11Result10.activeAwaitingUser(message, isNewest);
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
          let tmp36 = null;
          if (isNewest) {
            tmp36 = null;
            if (turnSettledResult) {
              tmp36 = null;
              if (!appBuildRequestDismissed) {
                appBuildRequest = message.appBuildRequest;
                if (appBuildRequest == null) {
                  appBuildRequest = null;
                }
                tmp36 = appBuildRequest;
              }
            }
          }
          appBuildRequest = tmp36;
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
          const obj22 = { steps: message.steps, content: trimmed, hasProposal: null != proposal, hasLiveClarification: null != clarification, hasAttachments: null != attachments };
          const tmp11Result11 = projectId(groupStart[35]);
          const turnPresentation = tmp11Result11.resolveTurnPresentation(obj22);
          ({ showsClosingMessage, replyKey: c23 } = turnPresentation);
          let tmp40 = memo.steps.length > 0;
          const closingContent = turnPresentation.closingContent;
          if (!tmp40) {
            tmp40 = memo.tasks.length > 0;
          }
          if (!tmp40) {
            if (0 === turnPresentation.streamed.length) {
              if ("" === trimmed) {
                if (null == proposal) {
                  if (null == found) {
                    if (null == ideas) {
                      if (null == items18) {
                        if (null == provisionalTodo) {
                          if (null == tmp28) {
                            if (null == tmp32) {
                              if (null == attachments) {
                                if (null == clarification) {
                                  if (null == restoreProposal) {
                                    if (null == tmp36) {
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
          const tmp11Result12 = projectId(groupStart[35]);
          const turnLeadsWithStretchResult = tmp11Result12.turnLeadsWithStretch(tmp40, turnPresentation);
          c24 = turnLeadsWithStretchResult;
          const found1 = memo1.filter((hasWork) => hasWork.hasWork);
          const atResult = found1.at(-1);
          index = undefined;
          if (atResult != null) {
            index = atResult.index;
          }
          const tmp11Result13 = projectId(groupStart[11]);
          const tmp44 = !tmp11Result13.turnSettled(message);
          closure_26 = tmp44;
          const obj23 = { turnActive: tmp44 };
          const tmp11Result14 = projectId(groupStart[12]);
          open = tmp11Result14.turnLifecycle(memo1, obj23).open;
          let avatarSpokenReplying = groupStart && null != replied;
          let tmp48Result = null;
          const tmp46 = closure_9;
          if (avatarSpokenReplying) {
            const obj24 = { replied, onJump: tmp50 };
            tmp50 = undefined;
            const tmp18Result5 = message(groupStart[7]);
            const tmp48 = replied;
            if (null != onJumpToReplied) {
              tmp50 = callback2;
            }
            tmp48Result = tmp48(tmp18Result5, obj24);
          }
          const items14 = [tmp48Result, , ];
          const items15 = [, , ];
          ({ avatar: arr16[0], avatarSpoken: arr16[1] } = tmp);
          if (avatarSpokenReplying) {
            avatarSpokenReplying = tmp.avatarSpokenReplying;
          }
          const obj25 = { children: items14 };
          items15[2] = avatarSpokenReplying;
          const obj26 = { style: items15, children: replied(projectId(groupStart[23]).ConjureAvatar, {}) };
          items14[1] = replied(planSuperseded, obj26);
          const obj27 = { style: tmp.header, children: replied(projectId(groupStart[23]).ConjureHeader, obj28) };
          obj28 = { at: message.created_at };
          items14[2] = replied(planSuperseded, obj27);
          const tmp45Result = onJumpToReplied(tmp46, obj25);
          const obj29 = { style: items8, onLongPress: tmp22, accessible: false, children: null };
          let tmp51Result = null;
          const tmp54 = onToggleChecklist;
          if (turnLeadsWithStretchResult) {
            tmp51Result = null;
            if (groupStart) {
              const obj30 = { style: tmp.spoken, children: tmp45Result };
              tmp51Result = tmp51(tmp52, obj30);
            }
          }
          const items16 = [
            tmp51Result,
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
                  if (null == tmp36) {
                    if (null == ideas) {
                      if (null == tmp28) {
                        if (null == tmp32) {
                          if (null == attachments) {
                            if (null == found) {
                              if (null == items18) {
                                let tmp45Result2;
                                if (null == provisionalTodo) {
                                  tmp45Result2 = null;
                                }
                                items16[2] = tmp45Result2;
                                let tmp51Result15 = null;
                                if (null != tmp30) {
                                  const obj31 = { style: tmp.spoken, children: replied(Text2, obj32) };
                                  obj32 = { variant: "text-xs/normal", color: "text-muted", children: intl.string(message(groupStart[32]).YR8A2v) };
                                  Text2 = tmp11(tmp12[24]).Text;
                                  intl = tmp11(tmp12[25]).intl;
                                  tmp51Result15 = tmp51(tmp52, obj31);
                                }
                                items16[3] = tmp51Result15;
                                obj29.children = items16;
                                return onJumpToReplied(tmp54, obj29);
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
          let tmp57 = null;
          const obj33 = { style: tmp.spoken, children: items17 };
          if (groupStart) {
            tmp57 = null;
            if (!turnLeadsWithStretchResult) {
              tmp57 = tmp45Result;
            }
          }
          items17 = [tmp57, , , , , , , , , , , , , ];
          let tmp51Result16 = null;
          if (showsClosingMessage) {
            const obj34 = { source: closingContent };
            tmp51Result16 = tmp51(tmp18(tmp12[36]), obj34);
          }
          items17[1] = tmp51Result16;
          let tmp51Result17 = null;
          if ("side_reply" === message.kind) {
            const obj35 = { variant: "text-xs/normal", color: "text-muted", children: tmp11Result15.midTurnCaption(message.acknowledges) };
            const Text = tmp11(tmp12[24]).Text;
            tmp11Result15 = projectId(groupStart[38]);
            tmp51Result17 = tmp51(Text, obj35);
          }
          items17[2] = tmp51Result17;
          let tmp51Result18 = null;
          if (null != attachments) {
            const obj36 = { projectId, attachments };
            tmp51Result18 = tmp51(tmp18(tmp12[28]), obj36);
          }
          items17[3] = tmp51Result18;
          if (null != items18) {
            const tmp18Result6 = message(groupStart[39]);
            const tmp18Result7 = message(groupStart[40]);
            if (items18 == null) {
              items18 = [];
            }
            const obj37 = { children: replied(tmp18Result7, obj38) };
            obj38 = { todos: items18, provisional: provisionalTodo, agents: memo3, live: tmp11Result16.checklistLive(message), superseded: checklistSuperseded, expanded: checklistExpanded, onToggleExpanded: callback };
            tmp11Result16 = projectId(groupStart[41]);
            tmp51Result19 = tmp51(tmp18Result6, obj37);
          } else {
            tmp51Result19 = null;
          }
          items17[4] = tmp51Result19;
          let tmp51Result20 = null;
          if (null != proposal) {
            const obj39 = { projectId, proposal, version: planVersion, superseded: planSuperseded, expanded: planExpanded, onToggleExpanded: callback1, onApprove: onApprovePlan };
            tmp51Result20 = tmp51(tmp18(tmp12[42]), obj39);
          }
          items17[5] = tmp51Result20;
          let tmp51Result21 = null;
          if (null != clarification) {
            const obj40 = {
              projectId,
              clarification,
              onSubmit: onAnswerClarification,
              onDismiss() {
                          return closure_9(clarification.id);
                        }
            };
            tmp51Result21 = tmp51(tmp18(tmp12[43]), obj40);
          }
          items17[6] = tmp51Result21;
          let tmp51Result22 = null;
          if (null != tmp36) {
            const obj41 = {
              projectId,
              request: tmp36,
              canSend,
              onDismiss() {
                          return closure_10(appBuildRequest.id);
                        }
            };
            tmp51Result22 = tmp51(tmp18(tmp12[44]), obj41);
          }
          items17[7] = tmp51Result22;
          let tmp51Result23 = null;
          if (null != tmp28) {
            const obj42 = { projectId, cardId: message.render_id, request: tmp28, status: secretRequestStatus, awaiting: tmp30 };
            tmp51Result23 = tmp51(tmp18(tmp12[45]), obj42);
          }
          items17[8] = tmp51Result23;
          let tmp51Result24 = null;
          if (null != tmp32) {
            const obj43 = { projectId, request: tmp32 };
            tmp51Result24 = tmp51(tmp18(tmp12[46]), obj43);
          }
          items17[9] = tmp51Result24;
          let tmp51Result25 = null;
          if (null != tmp26) {
            const obj44 = { projectId };
            tmp51Result25 = tmp51(tmp18(tmp12[47]), obj44);
          }
          items17[10] = tmp51Result25;
          let tmp51Result26 = null;
          if (null != ideas) {
            const obj45 = { ideas, onPick: onPickIdea };
            tmp51Result26 = tmp51(tmp18(tmp12[48]), obj45);
          }
          items17[11] = tmp51Result26;
          let tmp51Result27 = null;
          if (null != restoreProposal) {
            const obj46 = { proposal: restoreProposal, onRestore: fn };
            fn = undefined;
            const tmp18Result8 = message(groupStart[49]);
            if (isNewest) {
              if (null != onRestoreVersion) {
                fn = () => {
                  let obj = ConjureVersionRestoreConfirm;
                  const obj2 = {
                    onConfirm() {
                      const obj = projectId(groupStart[17]);
                      return onRestoreVersion(obj.proposalRestoreEntry(restoreProposal));
                    }
                  };
                  return obj.confirmRestoreVersion(obj2);
                };
              }
            }
            tmp51Result27 = tmp51(tmp18Result8, obj46);
          }
          items17[12] = tmp51Result27;
          let tmp51Result28 = null;
          if (null != found) {
            tmp51Result28 = null;
            if ("message" in found) {
              const obj47 = { variant: "text-sm/normal", color: "text-feedback-critical", children: found.message };
              tmp51Result28 = tmp51(tmp11(tmp12[24]).Text, obj47);
            }
          }
          items17[13] = tmp51Result28;
          tmp45Result2 = tmp45(tmp52, obj33);
        }
      }
    }
  }
}));
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMessageRow.tsx");

export default memoResult;
