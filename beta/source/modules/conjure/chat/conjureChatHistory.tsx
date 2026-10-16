// Module ID: 13006
// Function ID: 13007
// Name: conjureChatHistory
// Dependencies: [13005, 11, 2]
// Exports: foldDividers, newMessageFromHistory

// Module 13006 (conjureChatHistory)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import conjureStepTimeline from "conjureStepTimeline" /* 13005 */;
import size from "module_2" /* 2 */;

let contextSwitch, map, set;

function newMessage(assistant, content, arg2) {
  let id;
  let obj4;
  let obj6;
  let parsed;
  let ts;
  let turnId;
  let userId;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  ({ ts, id, userId, turnId } = obj);
  const attachments = obj.attachments;
  if (id == null) {
    const sum = c5 + 1;
    c5 = sum;
    id = `m${tmp2}`;
  }
  const obj2 = { id, render_id: id, role: assistant, content, steps: [], created_at: parsed, attachments };
  if (null != userId) {
    obj4 = { user_id: userId };
    const obj3 = { user_id: userId };
  } else {
    obj4 = {};
  }
  const merged = Object.assign(obj4);
  if (null != turnId) {
    obj6 = { turn_id: turnId };
    const obj5 = { turn_id: turnId };
  } else {
    obj6 = {};
  }
  const merged1 = Object.assign(obj6);
  if (null != ts) {
    const _Date2 = Date;
    parsed = Date.parse(ts);
  } else {
    const _Date = Date;
    parsed = Date.now();
  }
  return obj2;
}
let c4 = "turn:";
let c5 = 0;
let result = size.fileFinishedImporting("modules/conjure/chat/conjureChatHistory.tsx");

export { newMessage };
export const newMessageFromHistory = function newMessageFromHistory(ts) {
  let length;
  function snowflakeTimeOf(id) {
    let startsWithResult;
    if (id != null) {
      startsWithResult = id.startsWith(length);
    }
    let substr = id;
    if (true === startsWithResult) {
      substr = id.slice(length.length);
    }
    if (null != substr) {
      const obj = /^\d+$/;
      if (obj.test(substr)) {
        const obj2 = SnowflakeUtilsDefault;
        const extractTimestampResult = obj2.extractTimestamp(substr);
        const _Number = Number;
        let tmp9 = null;
        if (Number.isFinite(extractTimestampResult)) {
          tmp9 = null;
          if (extractTimestampResult > 0) {
            tmp9 = extractTimestampResult;
          }
        }
        return tmp9;
      }
    }
    return null;
  }
  let obj = { ts: ts.ts, id: ts.id, userId: ts.user_id, attachments: ts.attachments };
  const tmp = newMessage(ts.role, ts.content, obj);
  const tmp2 = snowflakeTimeOf(ts.id);
  let tmp3 = null == tmp2;
  if (!tmp3) {
    tmp3 = "assistant" !== ts.role && null != ts.ts;
    const tmp4 = "assistant" !== ts.role && null != ts.ts;
  }
  if (!tmp3) {
    tmp.created_at = tmp2;
  }
  if ("assistant" === ts.role) {
    if (null != ts.ts) {
      const _Date = Date;
      const parsed = Date.parse(ts.ts);
      let _Number = Number;
      if (Number.isFinite(parsed)) {
        tmp.settled_at = parsed;
      }
    }
  }
  if (null != ts.kind) {
    tmp.kind = ts.kind;
  }
  if ("interrupted" === ts.kind) {
    tmp.interrupted = true;
    tmp.content = "";
    tmp.finished = true;
  }
  if (null != ts.proposal) {
    tmp.proposal = ts.proposal;
  }
  const tmp7 = null != ts.ideas && ts.ideas.length > 0;
  if (tmp7) {
    tmp.ideas = ts.ideas;
  }
  if (null != ts.publish_cta) {
    tmp.publishCta = ts.publish_cta;
  }
  if (null != ts.publish_notice) {
    tmp.publishNotice = ts.publish_notice;
  }
  if (null != ts.project_event) {
    tmp.projectEvent = ts.project_event;
  }
  if ("context_boundary" === ts.kind) {
    tmp.finished = true;
  }
  if (null != ts.context_switch) {
    tmp.contextSwitch = ts.context_switch;
  }
  const tmp8 = null != ts.clarification && ts.clarification.questions.length > 0;
  if (tmp8) {
    tmp.clarification = ts.clarification;
  }
  if (null != ts.restore_proposal) {
    tmp.restoreProposal = ts.restore_proposal;
  }
  if (null != ts.source_sha) {
    tmp.sourceSha = ts.source_sha;
  }
  let tmp9 = null == ts.steps && null == ts.events && null != ts.todos && ts.todos.length > 0;
  if (tmp9) {
    tmp.todos = ts.todos;
  }
  if (null != ts.steps) {
    let obj2 = conjureStepTimeline;
    tmp.steps = obj2.replayTimeline(ts.steps);
  } else if (null != ts.events) {
    const events = ts.events;
    tmp.steps = events.flatMap((type) => {
      let items1;
      if ("todos" === type.type) {
        const items = [{ type: "step", kind: "todos", items: type.items }];
        items1 = items;
        const obj = { type: "step", kind: "todos", items: type.items };
      } else {
        items1 = [];
      }
      return items1;
    });
  }
  const tmp12 = null != ts.secret_request && ts.secret_request.fields.length > 0;
  if (tmp12) {
    tmp.secretRequest = ts.secret_request;
  }
  if (null != ts.settings_request) {
    tmp.settingsRequest = ts.settings_request;
  }
  const tmp13 = null != ts.intake && ts.intake.questions.length > 0;
  if (tmp13) {
    tmp.intake = ts.intake;
  }
  let steps = ts.steps;
  if (steps == null) {
    steps = [];
  }
  const iter = steps[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp15 = nextResult;
    let tmp16 = "awaiting_user" === nextResult.kind;
    if (tmp16) {
      tmp16 = "secrets" === tmp15.action;
    }
    if (tmp16) {
      let obj3 = { action: tmp15.action };
      tmp.awaitingUser = obj3;
    }
    continue;
  }
  return tmp;
};
export const foldDividers = function foldDividers(items) {
  map = new Map();
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (null != nextResult.contextSwitch) {
      let result = map.set(tmp2.contextSwitch.id, tmp2.contextSwitch);
    }
    continue;
  }
  if (0 === map.size) {
    return items;
  } else {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    let tmp6 = set;
    return items.flatMap((contextSwitch) => {
      contextSwitch = contextSwitch.contextSwitch;
      let id;
      if (contextSwitch != null) {
        id = contextSwitch.id;
      }
      if (null == id) {
        const items = [contextSwitch];
        return items;
      } else {
        const obj2 = set;
        if (set.has(id)) {
          return [];
        } else {
          let items1;
          obj2.add(id);
          const value = map.get(id);
          let status;
          if (value != null) {
            status = value.status;
          }
          if ("undone" === status) {
            items1 = [];
          } else {
            let tmp6 = contextSwitch;
            if (value !== contextSwitch.contextSwitch) {
              const obj = { contextSwitch: value };
              const merged = Object.assign(contextSwitch);
              tmp6 = obj;
            }
            items1 = [tmp6];
          }
          return items1;
        }
      }
    });
  }
};
export const TURN_ENTRY_PREFIX = "turn:";
