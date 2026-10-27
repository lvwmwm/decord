// Module ID: 10705
// Function ID: 10706
// Name: conjureChatHistory
// Dependencies: [32, 10704, 11, 2]
// Exports: foldDividers, messagesFromHistory

// Module 10705 (conjureChatHistory)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import conjureStepTimeline from "conjureStepTimeline" /* 10704 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let closure_3, contextSwitch, map, set;

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
    const sum = c7 + 1;
    c7 = sum;
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
function newMessageFromHistory(ts) {
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
    let extractTimestampResult = null;
    if (null != substr) {
      extractTimestampResult = null;
      const obj = SnowflakeUtilsDefault;
      const tmp6 = importDefault;
      const tmp7 = dependencyMap;
      if (obj.isProbablyAValidSnowflake(substr)) {
        const tmp6Result = tmp6(tmp7[2]);
        extractTimestampResult = tmp6Result.extractTimestamp(substr);
      }
    }
    return extractTimestampResult;
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
      const _Number = Number;
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
  let tmp7 = null != ts.ideas && ts.ideas.length > 0;
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
  if (null != ts.publish_schedule_proposal) {
    tmp.publishScheduleProposal = ts.publish_schedule_proposal;
  }
  if (null != ts.app_build_request) {
    tmp.appBuildRequest = ts.app_build_request;
  }
  if (null != ts.source_sha) {
    tmp.sourceSha = ts.source_sha;
  }
  const tmp9 = null == ts.steps && null == ts.events && null != ts.todos && ts.todos.length > 0;
  if (tmp9) {
    tmp.todos = ts.todos;
  }
  if (null != ts.steps) {
    const obj2 = conjureStepTimeline;
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
    let tmp16 = "publish_schedule_proposal" === nextResult.kind;
    if (tmp16) {
      tmp16 = null != tmp15.publish_schedule_proposal;
    }
    if (tmp16) {
      tmp.publishScheduleProposal = tmp15.publish_schedule_proposal;
    }
    let tmp20 = "awaiting_user" === tmp15.kind;
    if (tmp20) {
      tmp20 = "secrets" === tmp15.action;
    }
    if (tmp20) {
      let obj3 = { action: tmp15.action };
      tmp.awaitingUser = obj3;
    }
    continue;
  }
  return tmp;
}
let _slicedToArray = _slicedToArray_mod;
let c6 = "turn:";
let c7 = 0;
let result = size.fileFinishedImporting("modules/conjure/chat/conjureChatHistory.tsx");

export { newMessage };
export { newMessageFromHistory };
export const messagesFromHistory = function messagesFromHistory(entries) {
  let tmp4;
  const mapped = entries.map(newMessageFromHistory);
  map = new Map();
  _slicedToArray = [];
  function _loop(id) {
    let obj2;
    let obj4;
    let tmp22;
    let tmp23;
    function interruptionAt(kind, created_at) {
      let tmp2;
      if ("publish_notice" === kind.kind) {
        created_at = null;
        if (null != kind.ts) {
          created_at = created_at.created_at;
        }
        tmp2 = created_at;
      } else {
        tmp2 = null;
        if ("user" === kind.role) {
          let steered_at = kind.steered_at;
          if (steered_at == null) {
            steered_at = null;
          }
          tmp2 = steered_at;
        }
      }
      return tmp2;
    }
    function stepsAroundTimes(steps, arr) {
      if (null == steps) {
        return null;
      } else {
        const items = [[]];
        HermesBuiltin.arraySpread(items, arr.map(() => []), 1);
        let num = 0;
        const iter = steps[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp5 = nextResult;
          if (null == nextResult.ts) {
            iter.return();
            return null;
          } else {
            if (num < arr.length) {
              if (arr[num] <= tmp5.ts) {
                let sum = num + 1;
                num = sum;
                while (sum < arr.length) {
                  if (arr[num] > tmp5.ts) {
                    break;
                  }
                }
              }
            }
            arr = items[num];
            let arr2 = arr.push(tmp5);
            continue;
          }
        }
        return items;
      }
    }
    entries = id;
    let tmp2 = entries;
    const tmp4 = interruptionAt(entries[index], id);
    if (null != tmp4) {
      const obj3 = { index, at: tmp4 };
      let arr = closure_3.push(obj3);
      return 0;
    } else {
      id = id.id;
      const arr6 = c6;
      if (id.startsWith(c6)) {
        let num = id.settled_at;
        if (num == null) {
          num = -Infinity;
        }
        let tmp5 = closure_3;
        const found = closure_3.filter((item) => created_at.created_at < item.at && item.at < num);
        closure_3 = [];
        let items = [];
        let tmp7 = items;
        let tmp8 = found;
        HermesBuiltin.arraySpread(items, found, 0);
        const sorted = items.sort((arg0, arg1) => arg0.at - arg1.at);
        let tmp11 = null;
        if (0 !== sorted.length) {
          tmp11 = stepsAroundTimes(tmp2[tmp3].steps, tmp10);
        }
        if (null != tmp11) {
          const substr = tmp11.slice(0, -1);
          if (!substr.every((item) => 0 === item.length)) {
            const id1 = id.id;
            const substr1 = id1.slice(arr6.length);
            let at = id.created_at;
            entries = sorted.entries();
            let tmp14 = entries;
            let tmp16 = globalThis;
            const tmp15 = entries[Symbol.iterator]();
            while (tmp15 !== undefined) {
              let items2;
              let tmp21 = _slicedToArray(tmp18, 2);
              [tmp22, tmp23] = tmp21;
              let tmp24 = tmp23;
              let _HermesInternal = HermesInternal;
              let combined = "" + id.id + ":" + tmp22;
              let obj = { id: combined, render_id: combined, role: "assistant", content: "", turn_id: substr1, steps: obj2.replayTimeline(tmp11[tmp22]), created_at: at, continued: true, finished_at: tmp23.at };
              obj2 = conjureStepTimeline;
              set = map.set;
              index = found[tmp22].index;
              if (tmp11[tmp22].length > 0) {
                let items1 = [tmp29, ];
                items1[1] = mapped[tmp24.index];
                items2 = items1;
              } else {
                items2 = [mapped[tmp24.index]];
              }
              let result = set(index, items2);
              at = tmp24.at;
              continue;
            }
            const obj5 = { turn_id: substr1, steps: obj4.replayTimeline(tmp11[sorted.length]), created_at: at };
            const merged = Object.assign(id);
            mapped[index] = obj5;
            obj4 = conjureStepTimeline;
          }
        }
        return 0;
      } else {
        return 0;
      }
    }
  }
  entries = mapped.entries();
  const tmp3 = entries[Symbol.iterator]();
  while (tmp3 !== undefined) {
    let tmp5 = _slicedToArray;
    let tmp6 = _slicedToArray(tmp4, 2);
    let index = tmp6[0];
    let _loopResult = _loop(tmp6[1]);
    continue;
  }
  let flatMapResult = mapped;
  if (0 !== map.size) {
    flatMapResult = mapped.flatMap((item, index) => {
      let value = map.get(index);
      if (value == null) {
        const items = [item];
        value = items;
      }
      return value;
    });
  }
  return flatMapResult;
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
