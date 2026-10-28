// Module ID: 10749
// Function ID: 10750
// Name: conjureChatConnection
// Dependencies: [584, 10735, 1128, 3862, 10750, 10751, 10752, 2]
// Exports: appendTurnStep, sendFailedStep, sendQueuedMessageAction

// Module 10749 (conjureChatConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import intl2 from "intl" /* 1128 */;
import _modDef3862 from "module_3862" /* 3862 */;
import conjureAgentReaction from "conjureAgentReaction" /* 10735 */;
import ConjureAnalytics from "ConjureAnalytics" /* 10750 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10751 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10752 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;

let obj6;
let obj7;
function appendFailureStep(turnId, projectId) {
  let stderr_tail;
  projectId = projectId.projectId;
  const obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_CHAT_STEP_APPEND", projectId, turnId: turnId.turn_id, step: turnId };
  obj.dispatch(obj2);
  obj3 = { message: turnId.message, details: stderr_tail, turnId: turnId.turn_id };
  const trackConjureErrored = ConjureAnalytics.trackConjureErrored;
  ConjureAnalytics;
  const merged = Object.assign(obj5[turnId.kind]);
  stderr_tail = undefined;
  if ("build_error" === turnId.kind) {
    stderr_tail = turnId.stderr_tail;
  }
  trackConjureErrored(projectId, obj3);
}
function handleProjectEvent(event, projectId) {
  projectId = projectId.projectId;
  const obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_CHAT_PROJECT_EVENT", projectId, event };
  obj.dispatch(obj2);
  const tmp3 = "app_channel_deleted" !== event.type && "remixed" !== event.type;
  if (tmp3) {
    obj3 = ConjureActionCreators;
    const result = obj3.refreshConjureInstallState(projectId);
  }
}
let obj = {
  message_disposition(disposition, projectId) {
    hasOwnProperty = Object.prototype.hasOwnProperty;
    projectId = projectId.projectId;
    if (hasOwnProperty.call(closure_6, disposition.disposition)) {
      obj3 = { type: "CONJURE_CHAT_MESSAGE_DISPOSITION", projectId, id: null, activeTurnId: null, disposition: null };
      ({ id: obj2.id, active_turn_id: obj2.activeTurnId, disposition: obj2.disposition } = disposition);
      const obj = DispatcherDefault;
      obj.dispatch(obj3);
    }
  },
  message_cancelled(id, projectId) {
    projectId = projectId.projectId;
    const obj = DispatcherDefault;
    const obj2 = { type: "CONJURE_CHAT_MESSAGE_CANCELLED", projectId, id: id.id };
    obj.dispatch(obj2);
  },
  app_removed: handleProjectEvent,
  bot_removed: handleProjectEvent,
  preview_bot_removed: handleProjectEvent,
  app_channel_deleted: handleProjectEvent,
  remixed: handleProjectEvent,
  side_reply(id, projectId) {
    projectId = projectId.projectId;
    const obj = DispatcherDefault;
    const obj2 = { type: "CONJURE_CHAT_SIDE_REPLY", projectId, id: id.id, inReplyTo: id.in_reply_to, content: id.content, timestamp: id.ts };
    obj.dispatch(obj2);
  },
  source_checkpoint(turnId, projectId) {
    projectId = projectId.projectId;
    const obj = DispatcherDefault;
    const obj2 = { type: "CONJURE_CHAT_SOURCE_CHECKPOINT", projectId, turnId: turnId.turn_id, sourceSha: turnId.source_sha };
    obj.dispatch(obj2);
  },
  turn_notification(body, projectId) {
    projectId = projectId.projectId;
    const obj = DispatcherDefault;
    const obj2 = { type: "CONJURE_TURN_NOTIFICATION", projectId, body: body.summary, nonce: body.nonce };
    obj.dispatch(obj2);
  },
  provisional_todo(turnId, projectId) {
    projectId = projectId.projectId;
    const obj = DispatcherDefault;
    const obj2 = { type: "CONJURE_CHAT_PROVISIONAL_TODO", projectId, turnId: turnId.turn_id, text: turnId.text };
    obj.dispatch(obj2);
  }
};
let obj2 = {
  reaction(setting, arg1) {
    const projectId = arg1.projectId;
    const obj = conjureAgentReaction;
    const result = obj.agentReactionFromStep(setting);
    const tmp3 = null != setting.message_id && null != result;
    if (tmp3) {
      obj3 = { type: "CONJURE_CHAT_MESSAGE_REACTION", projectId, id: setting.message_id, reaction: result };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
  },
  reply(message, projectId) {
    let obj2;
    projectId = projectId.projectId;
    let str = message.message;
    if (str == null) {
      str = "";
    }
    if ("" !== str) {
      const obj = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: message.turn_id, patch: obj2 };
      obj2 = { content: str, kind: "message" };
      obj5 = DispatcherDefault;
      obj5.dispatch(obj);
    } else {
      const intl = intl2.intl;
      const stringResult = intl.string(_modDef3862["913RMa"]);
      let tmp = obj4;
      const tmp13 = importDefault;
      if (obj4 === undefined) {
        tmp = obj3;
      }
      obj3 = { type: "CONJURE_CHAT_STEP_APPEND", projectId, step: obj4 };
      obj4 = { type: "step", kind: "terminal_error", message: stringResult };
      const tmp13Result = tmp13(584);
      tmp13Result.dispatch(obj3);
      const obj6 = { message: stringResult };
      const trackConjureErrored = tmp11(10750).trackConjureErrored;
      ConjureAnalytics;
      const merged = Object.assign(tmp);
      trackConjureErrored(projectId, obj6);
    }
  },
  thinking_lifecycle(arg0, projectId) {
    let elapsed_ms;
    let obj2;
    let phase;
    let seq;
    let session;
    let text;
    let ticks;
    ({ phase, session, seq, ticks, elapsed_ms, text } = arg0);
    let tmp = null != phase;
    projectId = projectId.projectId;
    if (tmp) {
      tmp = null != seq;
    }
    if (tmp) {
      tmp = null != session;
    }
    if (tmp) {
      const obj = { type: "CONJURE_CHAT_THINKING_SET", projectId, activity: obj2 };
      obj2 = { phase, session, seq, ticks, elapsedMs: elapsed_ms, text };
      const dispatch = DispatcherDefault.dispatch;
      DispatcherDefault;
      if (ticks == null) {
        ticks = 0;
      }
      if (elapsed_ms == null) {
        elapsed_ms = 0;
      }
      if (text == null) {
        text = "";
      }
      dispatch(obj);
    }
  },
  compaction(phase, projectId) {
    let tmp = "start" !== phase.phase;
    projectId = projectId.projectId;
    if (tmp) {
      tmp = "end" !== phase.phase;
    }
    if (!tmp) {
      const obj2 = { type: "CONJURE_CHAT_COMPACTING_SET", projectId, compacting: "start" === phase.phase };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  },
  saving(phase, projectId) {
    let tmp = "start" !== phase.phase;
    projectId = projectId.projectId;
    if (tmp) {
      tmp = "end" !== phase.phase;
    }
    if (!tmp) {
      const obj2 = { type: "CONJURE_CHAT_SAVING_SET", projectId, saving: "start" === phase.phase };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  },
  todos(turn_id, projectId) {
    projectId = projectId.projectId;
    let items = turn_id.items;
    if (items == null) {
      items = [];
    }
    if (items.length > 0) {
      const obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: turn_id.turn_id, patch: obj3 };
      obj3 = { todos: items };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
      obj5 = { type: "CONJURE_CHAT_STEP_APPEND", projectId, turnId: turn_id.turn_id, step: turn_id };
      obj4 = DispatcherDefault;
      obj4.dispatch(obj5);
    }
  },
  plan_proposed(proposal, projectId) {
    let obj2;
    projectId = projectId.projectId;
    if (null != proposal.proposal) {
      const obj = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: proposal.turn_id, patch: obj2 };
      obj2 = { proposal: proposal.proposal, kind: "proposal" };
      obj5 = DispatcherDefault;
      obj5.dispatch(obj);
    } else {
      const intl = intl2.intl;
      const stringResult = intl.string(_modDef3862["0+RUWx"]);
      let tmp = obj4;
      const tmp13 = importDefault;
      if (obj4 === undefined) {
        tmp = obj3;
      }
      obj3 = { type: "CONJURE_CHAT_STEP_APPEND", projectId, step: obj4 };
      obj4 = { type: "step", kind: "terminal_error", message: stringResult };
      const tmp13Result = tmp13(584);
      tmp13Result.dispatch(obj3);
      const obj6 = { message: stringResult };
      const trackConjureErrored = tmp11(10750).trackConjureErrored;
      ConjureAnalytics;
      const merged = Object.assign(tmp);
      trackConjureErrored(projectId, obj6);
    }
  },
  ideas(ideas, projectId) {
    let tmp = null != ideas.ideas;
    projectId = projectId.projectId;
    if (tmp) {
      tmp = ideas.ideas.length > 0;
    }
    if (tmp) {
      const obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: ideas.turn_id, patch: obj3 };
      obj3 = { ideas: ideas.ideas };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  },
  restore_proposal(restore_proposal, arg1) {
    if (null != restore_proposal.restore_proposal) {
      const obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId: tmp, turnId: restore_proposal.turn_id, patch: obj3 };
      obj3 = { restoreProposal: restore_proposal.restore_proposal };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  },
  publish_schedule_proposal(publish_schedule_proposal, arg1) {
    if (null != publish_schedule_proposal.publish_schedule_proposal) {
      const obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId: tmp, turnId: publish_schedule_proposal.turn_id, patch: obj3 };
      obj3 = { publishScheduleProposal: publish_schedule_proposal.publish_schedule_proposal };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  },
  clarification(onKept, arg1) {
    let tmp = null != onKept.clarification;
    const projectId = arg1.projectId;
    if (tmp) {
      const questions = onKept.clarification.questions;
      let num;
      if (questions != null) {
        num = questions.length;
      }
      if (num == null) {
        num = 0;
      }
      tmp = num > 0;
    }
    if (tmp) {
      const obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: onKept.turn_id, patch: obj3 };
      obj3 = { clarification: onKept.clarification };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  },
  attachment(c2, arg1) {
    let tmp = null != c2.attachments;
    const projectId = arg1.projectId;
    if (tmp) {
      tmp = c2.attachments.length > 0;
    }
    if (tmp) {
      const obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: c2.turn_id, patch: obj3 };
      obj3 = { attachments: c2.attachments };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  },
  collect_secrets(fields, projectId) {
    let obj7;
    fields = fields.fields;
    projectId = projectId.projectId;
    if (fields == null) {
      fields = [];
    }
    if (fields.length > 0) {
      const obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: fields.turn_id, patch: obj3 };
      obj3 = { secretRequest: obj7 };
      obj7 = { request_id: null, over_mcp: null, fields, note: null, copy_values: null };
      ({ request_id: obj4.request_id, over_mcp: obj4.over_mcp } = fields);
      ({ note: obj4.note, copy_values: obj4.copy_values } = fields);
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  },
  collect_settings(keys, projectId) {
    projectId = projectId.projectId;
    const obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: keys.turn_id, patch: obj3 };
    obj3 = { settingsRequest: { keys: keys.keys, note: keys.note } };
    const obj = DispatcherDefault;
    obj.dispatch(obj2);
  },
  awaiting_user(action, arg1) {
    if ("secrets" === action.action) {
      const obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId: tmp, turnId: action.turn_id, patch: obj3 };
      obj3 = { awaitingUser: obj4 };
      obj4 = { action: action.action };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  },
  intake(intake, projectId) {
    let tmp = null != intake.intake;
    projectId = projectId.projectId;
    if (tmp) {
      const questions = intake.intake.questions;
      let num;
      if (questions != null) {
        num = questions.length;
      }
      if (num == null) {
        num = 0;
      }
      tmp = num > 0;
    }
    if (tmp) {
      const obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: intake.turn_id, patch: obj3 };
      obj3 = { intake: intake.intake };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  },
  usage(turn, projectId) {
    let tmp = null != turn.turn;
    projectId = projectId.projectId;
    if (tmp) {
      tmp = null != turn.project;
    }
    if (tmp) {
      obj3 = { type: "CONJURE_CHAT_USAGE_SET", projectId, turn: null, project: null };
      ({ turn: obj2.turn, project: obj2.project } = turn);
      const obj = DispatcherDefault;
      obj.dispatch(obj3);
    }
  },
  build_error: appendFailureStep,
  healthcheck_failed: appendFailureStep,
  error: appendFailureStep
};
let obj3 = { location: "connection", code: ConjureAnalytics.ConjureErrorCodes.SEND_FAILED };
let obj4 = { location: "agent", code: ConjureAnalytics.ConjureErrorCodes.AGENT_ERROR };
let obj5 = { build_error: obj6, healthcheck_failed: obj7, error: { location: "agent", code: ConjureAnalytics.ConjureErrorCodes.AGENT_ERROR } };
obj6 = { location: "build", code: ConjureAnalytics.ConjureErrorCodes.BUILD_FAILED };
obj7 = { location: "healthcheck", code: ConjureAnalytics.ConjureErrorCodes.HEALTHCHECK_FAILED };
let closure_6 = { steered: true, queued: true, restarting: true, answered: true };
({ location: "agent", code: ConjureAnalytics.ConjureErrorCodes.AGENT_ERROR });
let result = size.fileFinishedImporting("modules/conjure/chat/conjureChatConnection.tsx");

export const chatFrameHandlers = obj;
export const chatStepHandlers = obj2;
export const sendFailedStep = function sendFailedStep(projectId, message) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = obj3;
  }
  const obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_CHAT_STEP_APPEND", projectId, step: { type: "step", kind: "terminal_error", message } };
  obj.dispatch(obj2);
  obj3 = { message };
  const trackConjureErrored = ConjureAnalytics.trackConjureErrored;
  ConjureAnalytics;
  const merged = Object.assign(tmp);
  trackConjureErrored(projectId, obj3);
};
export const appendTurnStep = function appendTurnStep(projectId, turnId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_CHAT_STEP_APPEND", projectId, turnId: turnId.turn_id, step: turnId };
  obj.dispatch(obj2);
};
export const sendQueuedMessageAction = function sendQueuedMessageAction(projectId, arg1, arg2) {
  try {
    const obj = conjureProjectSockets;
    const conjureSocket = obj.getConjureSocket(projectId);
    const obj2 = conjureSocket;
    if (null == conjureSocket) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Not connected");
      throw error;
    } else {
      const result = obj2.sendQueuedMessageAction(arg2, arg1);
    }
  } catch (err) {
  }
};
