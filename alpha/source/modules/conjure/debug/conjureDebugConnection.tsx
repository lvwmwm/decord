// Module ID: 10989
// Function ID: 10990
// Name: conjureDebugConnection
// Dependencies: [10967, 584, 10982, 10981, 10990, 2]
// Exports: forceCompaction, pollConjureDebugInstance, requestConjureDebugGitInfo, requestDebugStatus, restartConjureAgent, restartConjureSandbox

// Module 10989 (conjureDebugConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ConjureAnalytics from "ConjureAnalytics" /* 10981 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10982 */;
import ConjurePerfTraceLayout from "ConjurePerfTraceLayout" /* 10990 */;
import ConjureDebugStore from "ConjureDebugStore" /* 10967 */;
import size from "module_2" /* 2 */;

let obj4;
let obj5;
let obj = {
  log(log, projectId) {
    projectId = projectId.projectId;
    const obj = DispatcherDefault;
    const obj2 = { type: "CONJURE_LOG_APPEND", projectId, log };
    obj.dispatch(obj2);
    if (true !== log.historical) {
      if ("error" === log.level) {
        let tmp4;
        if (null != log.source) {
          tmp4 = obj3[log.source];
        }
        if (null != tmp4) {
          let value = map.get(projectId);
          const obj6 = map;
          if (null == value) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set();
            const result = obj6.set(projectId, set);
            value = set;
          }
          const source = log.source;
          const str = log.message;
          const replaced = str.replace(/\d+/g, "#");
          const _HermesInternal = HermesInternal;
          const combined = "" + source + ":" + replaced.slice(0, 200);
          if (!value.has(combined)) {
            if (value.size < c5) {
              value.add(combined);
              obj3 = { location: null, code: null, message: null, details: null };
              ({ location: obj5.location, code: obj5.code } = tmp4);
              ({ message: obj5.message, source: obj5.details } = log);
              const obj4 = ConjureAnalytics;
              obj4.trackConjureErrored(projectId, obj3);
            }
          }
        }
      }
    }
  },
  debug_git_info(lite, projectId) {
    let date;
    let date1;
    let tmp11;
    projectId = projectId.projectId;
    if (true !== lite.lite) {
      const obj2 = { type: "CONJURE_DEBUG_GIT_INFO_RESULT", projectId, info: lite.info, error: tmp11, instanceSince: lite.instance_since, observedAt: date.toISOString() };
      tmp11 = undefined;
      const dispatch2 = DispatcherDefault.dispatch;
      DispatcherDefault;
      if (null == lite.info) {
        let str = lite.error;
        if (str == null) {
          str = "No answer";
        }
        tmp11 = str;
      }
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      date = new Date();
      dispatch2(obj2);
    } else {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const obj = { type: "CONJURE_DEBUG_INSTANCE_SEEN", projectId, instanceSince: lite.instance_since, observedAt: date1.toISOString() };
      const dispatch = DispatcherDefault.dispatch;
      DispatcherDefault;
      date1 = new Date();
      dispatch(obj);
    }
  },
  restart_agent_result(outcome, projectId) {
    let date;
    let str;
    projectId = projectId.projectId;
    const obj = { type: "CONJURE_RESTART_AGENT_RESULT", projectId, outcome: str, reason: null, instanceSince: null, observedAt: date.toISOString() };
    str = "failed";
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if ("restarting" === outcome.outcome) {
      str = "restarting";
    }
    ({ reason: obj.reason, instance_since: obj.instanceSince } = outcome);
    date = new Date();
    dispatch(obj);
  },
  debug_status(status, projectId) {
    projectId = projectId.projectId;
    const obj = { type: "CONJURE_DEBUG_STATUS_SET", projectId, status, failed: true === status.failed || null == status.status };
    status = status.status;
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (status == null) {
      status = null;
    }
    dispatch(obj);
  },
  debug_backlog(backlog, projectId) {
    let date;
    projectId = projectId.projectId;
    const obj = { type: "CONJURE_DEBUG_BACKLOG", projectId, backlog, observedAt: date.toISOString() };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    date = new Date();
    dispatch(obj);
  },
  timing_trace_events(batch, projectId) {
    projectId = projectId.projectId;
    const obj = DispatcherDefault;
    const obj2 = { type: "CONJURE_DEBUG_TIMING_TRACE", projectId, batch: batch.batch, live: batch.live };
    obj.dispatch(obj2);
    const trace_id = batch.batch.trace_id;
    const timingTrace = ConjureDebugStore.getTimingTrace(projectId, trace_id);
    if (null != timingTrace) {
      obj3 = ConjurePerfTraceLayout;
      if (obj3.perfTraceFinished(timingTrace)) {
        const obj4 = set;
        if (!set.has(trace_id)) {
          obj4.add(trace_id);
        }
      }
    }
  },
  debug_history_state(scope, projectId) {
    projectId = projectId.projectId;
    const obj = DispatcherDefault;
    const obj2 = { type: "CONJURE_HISTORY_LOAD_SETTLE", projectId, scope: scope.scope, status: scope.status, count: scope.count, truncated: true === scope.truncated };
    obj.dispatch(obj2);
  }
};
let obj2 = {
  debug_compaction_declined(projected, projectId) {
    let date;
    let headroom;
    let num;
    let num2;
    let tmp = null != projected.projected;
    projectId = projectId.projectId;
    if (tmp) {
      tmp = null != projected.threshold;
    }
    if (tmp) {
      const obj = { type: "CONJURE_DEBUG_COMPACTION_DECLINED", projectId, promptCeiling: num, threshold: null, projected: null, headroom, retainedMessages: num2, observedAt: date.toISOString() };
      num = projected.prompt_ceiling;
      const dispatch = DispatcherDefault.dispatch;
      DispatcherDefault;
      if (num == null) {
        num = 0;
      }
      ({ threshold: obj.threshold, projected: obj.projected, headroom } = projected);
      if (headroom == null) {
        headroom = projected.threshold - projected.projected;
      }
      num2 = projected.retained_messages;
      if (num2 == null) {
        num2 = 0;
      }
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date();
      dispatch(obj);
    }
  },
  force_compaction_result(outcome, projectId) {
    let date;
    outcome = outcome.outcome;
    let tmp = "compacted" !== outcome;
    projectId = projectId.projectId;
    if (tmp) {
      tmp = "declined" !== outcome;
    }
    if (tmp) {
      tmp = "failed" !== outcome;
    }
    if (tmp) {
      tmp = "busy" !== outcome;
    }
    if (!tmp) {
      const obj = { type: "CONJURE_DEBUG_FORCE_COMPACTION_RESULT", projectId, outcome, reason: outcome.reason, observedAt: date.toISOString() };
      const tmp5 = true === outcome.pending_turn ? { pendingTurn: true } : {};
      const dispatch = DispatcherDefault.dispatch;
      DispatcherDefault;
      const merged = Object.assign(tmp5);
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date();
      dispatch(obj);
    }
  },
  restart_sandbox_result(outcome, projectId) {
    let date;
    let tmp = "restarted" !== outcome.outcome;
    projectId = projectId.projectId;
    if (tmp) {
      tmp = "failed" !== outcome.outcome;
    }
    if (!tmp) {
      const obj = { type: "CONJURE_SANDBOX_RESTART_RESULT", projectId, outcome: null, reason: null, observedAt: date.toISOString() };
      ({ outcome: obj.outcome, reason: obj.reason } = outcome);
      const _Date = Date;
      const self = this;
      const self2 = this;
      const dispatch = DispatcherDefault.dispatch;
      DispatcherDefault;
      date = new Date();
      dispatch(obj);
    }
  },
  debug_compaction_report(tokens_before, projectId) {
    let date;
    let num;
    let retained_messages;
    let tmp = null != tokens_before.tokens_before;
    projectId = projectId.projectId;
    if (tmp) {
      tmp = null != tokens_before.tokens_after;
    }
    if (tmp) {
      const obj = { type: "CONJURE_DEBUG_COMPACTION_REPORT", projectId, tokensBefore: null, tokensAfter: null, retainedMessages: retained_messages, promptCeiling: num, observedAt: date.toISOString() };
      ({ tokens_before: obj.tokensBefore, tokens_after: obj.tokensAfter, retained_messages } = tokens_before);
      const dispatch = DispatcherDefault.dispatch;
      DispatcherDefault;
      if (retained_messages == null) {
        retained_messages = 0;
      }
      num = tokens_before.prompt_ceiling;
      if (num == null) {
        num = 0;
      }
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date();
      dispatch(obj);
    }
  }
};
let obj3 = { web: obj4, preview: obj5 };
obj4 = { location: "runtime_frame", code: ConjureAnalytics.ConjureErrorCodes.RUNTIME_FRAME_ERROR };
obj5 = { location: "runtime_worker", code: ConjureAnalytics.ConjureErrorCodes.RUNTIME_WORKER_ERROR };
let c5 = 10;
const map = new Map();
let set = new Set();
let result = size.fileFinishedImporting("modules/conjure/debug/conjureDebugConnection.tsx");

export const debugFrameHandlers = obj;
export const debugStepHandlers = obj2;
export const requestDebugStatus = function requestDebugStatus(projectId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_DEBUG_STATUS_REQUESTED", projectId };
  obj.dispatch(obj2);
  obj3 = conjureProjectSockets;
  const conjureSocket = obj3.getConjureSocket(projectId);
  try {
    if (null == conjureSocket) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Not connected");
      throw error;
    } else {
      const result = conjureSocket.sendDebugStatusRequest();
    }
  } catch (err) {
    const obj4 = { type: "CONJURE_DEBUG_STATUS_SET", projectId, status: null, failed: true };
    const tmpResult = DispatcherDefault;
    tmpResult.dispatch(obj4);
  }
};
export const forceCompaction = function forceCompaction(projectId, flag) {
  let date;
  if (flag === undefined) {
    flag = false;
  }
  const obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_DEBUG_FORCE_COMPACTION_REQUESTED", projectId };
  obj.dispatch(obj2);
  obj3 = conjureProjectSockets;
  const conjureSocket = obj3.getConjureSocket(projectId);
  try {
    if (null == conjureSocket) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Not connected");
      throw error;
    } else {
      conjureSocket.sendForceCompaction(flag);
    }
  } catch (err) {
    const _Date = Date;
    const self3 = this;
    const self4 = this;
    const obj4 = { type: "CONJURE_DEBUG_FORCE_COMPACTION_RESULT", projectId, outcome: "failed", reason: "Not connected", observedAt: date.toISOString() };
    const dispatch = tmp(584).dispatch;
    DispatcherDefault;
    date = new Date();
    dispatch(obj4);
  }
};
export const restartConjureSandbox = function restartConjureSandbox(projectId) {
  let date;
  const obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_SANDBOX_RESTART_REQUESTED", projectId };
  obj.dispatch(obj2);
  obj3 = conjureProjectSockets;
  const conjureSocket = obj3.getConjureSocket(projectId);
  try {
    if (null == conjureSocket) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Not connected");
      throw error;
    } else {
      conjureSocket.sendRestartSandbox();
    }
  } catch (err) {
    const _Date = Date;
    const self3 = this;
    const self4 = this;
    const obj4 = { type: "CONJURE_SANDBOX_RESTART_RESULT", projectId, outcome: "failed", reason: "Not connected", observedAt: date.toISOString() };
    const dispatch = tmp(584).dispatch;
    DispatcherDefault;
    date = new Date();
    dispatch(obj4);
  }
};
export const pollConjureDebugInstance = function pollConjureDebugInstance(projectId) {
  const obj = conjureProjectSockets;
  const conjureSocket = obj.getConjureSocket(projectId);
  if (null != conjureSocket) {
    try {
      const result = conjureSocket.sendDebugGitInfoRequest(true);
      const _Date = Date;
      const obj2 = { type: "CONJURE_DEBUG_INSTANCE_POLL_REQUESTED", projectId, requestedAt: Date.now() };
      const dispatch = DispatcherDefault.dispatch;
      DispatcherDefault;
      dispatch(obj2);
    } catch (err) {
    }
  }
};
export const requestConjureDebugGitInfo = function requestConjureDebugGitInfo(projectId) {
  let date;
  const obj = conjureProjectSockets;
  const conjureSocket = obj.getConjureSocket(projectId);
  try {
    if (null == conjureSocket) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Not connected");
      throw error;
    } else {
      const result = conjureSocket.sendDebugGitInfoRequest();
      const obj2 = { type: "CONJURE_DEBUG_GIT_INFO_REQUESTED", projectId };
      obj3 = DispatcherDefault;
      obj3.dispatch(obj2);
    }
  } catch (err) {
    const _Date = Date;
    const self3 = this;
    const self4 = this;
    const obj4 = { type: "CONJURE_DEBUG_GIT_INFO_RESULT", projectId, error: "Not connected", observedAt: date.toISOString() };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    date = new Date();
    dispatch(obj4);
  }
};
export const restartConjureAgent = function restartConjureAgent(projectId, first1) {
  let date;
  const obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_RESTART_AGENT_REQUESTED", projectId };
  obj.dispatch(obj2);
  obj3 = conjureProjectSockets;
  const conjureSocket = obj3.getConjureSocket(projectId);
  try {
    if (null == conjureSocket) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Not connected");
      throw error;
    } else {
      conjureSocket.sendRestartAgent(first1);
    }
  } catch (err) {
    const _Date = Date;
    const self3 = this;
    const self4 = this;
    const obj4 = { type: "CONJURE_RESTART_AGENT_RESULT", projectId, outcome: "failed", reason: "Not connected", observedAt: date.toISOString() };
    const dispatch = tmp(584).dispatch;
    DispatcherDefault;
    date = new Date();
    dispatch(obj4);
  }
};
