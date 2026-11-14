// Module ID: 7365
// Function ID: 7366
// Name: ConjureConnectionStore
// Dependencies: [32, 5, 1388, 7321, 7366, 7017, 7369, 7370, 7371, 7373, 7374, 7375, 7376, 7377, 7378, 7379, 7380, 7381, 572, 7382, 7385, 7386, 7388, 7390, 7391, 7392, 7393, 13150, 13167, 13246, 10980, 13218, 13200, 15979, 15980, 15981, 7383, 15982, 15978, 7336, 13586, 559, 15983, 7335, 15984, 7396, 13794, 8852, 13220, 504, 2]
// Exports: closeConnection, ensureConnection, interruptTurn, loadOlderHistory, optimisticMessageId, prepareTemplate, resetHistoryPaging, sendUserMessage, showUserMessage, stageModelSettings, subscribeDebugBacklog, withdrawUserMessage

// Module 7365 (ConjureConnectionStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ConjureChatStore2 from "ConjureChatStore" /* 7321 */;
import conjureProjectSockets from "conjureProjectSockets" /* 7335 */;
import conjureChatConnection from "conjureChatConnection" /* 7382 */;
import conjureBrowserSessionsConnection from "conjureBrowserSessionsConnection" /* 7385 */;
import conjureDebugConnection from "conjureDebugConnection" /* 7386 */;
import ConjureHostApproval from "ConjureHostApproval" /* 7388 */;
import conjureLiveReloadConnection from "conjureLiveReloadConnection" /* 7390 */;
import conjureManagedCopyConnection from "conjureManagedCopyConnection" /* 7391 */;
import conjureModelSettingsConnection from "conjureModelSettingsConnection" /* 7392 */;
import conjurePreviewConnection from "conjurePreviewConnection" /* 7393 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 7396 */;
import createNonce from "createNonce" /* 8852 */;
import conjureRemixConnection from "conjureRemixConnection" /* 10980 */;
import conjurePublishConnection from "conjurePublishConnection" /* 13150 */;
import conjurePublishEvalConnection from "conjurePublishEvalConnection" /* 13167 */;
import conjureSmartContextConnection from "conjureSmartContextConnection" /* 13200 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 13218 */;
import conjureMediaTickets from "conjureMediaTickets" /* 13220 */;
import conjurePublishScheduleRequests from "conjurePublishScheduleRequests" /* 13246 */;
import conjureLinkEmbeds from "conjureLinkEmbeds" /* 13794 */;
import conjurePreviewClaims from "conjurePreviewClaims" /* 15978 */;
import conjureAppBuildRequestConnection from "conjureAppBuildRequestConnection" /* 15979 */;
import conjureProjectConnection from "conjureProjectConnection" /* 15980 */;
import conjureUsageConnection from "conjureUsageConnection" /* 15981 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1388 */;
import ConjureDebugStore from "ConjureDebugStore" /* 7366 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;
import ConjureBrowserSessionsStore from "ConjureBrowserSessionsStore" /* 7369 */;
import ConjureSmartContextStore from "ConjureSmartContextStore" /* 7370 */;
import ConjureDebugLogStore from "ConjureDebugLogStore" /* 7371 */;
import ConjureLiveReloadStore from "ConjureLiveReloadStore" /* 7373 */;
import ConjureManagedCopyStore from "ConjureManagedCopyStore" /* 7374 */;
import ConjureModelSettingsStore from "ConjureModelSettingsStore" /* 7375 */;
import ConjureOverlayBackgroundStore from "ConjureOverlayBackgroundStore" /* 7376 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7377 */;
import ConjureRemixStore from "ConjureRemixStore" /* 7378 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 7379 */;
import ConjureSpendLimitStore from "ConjureSpendLimitStore" /* 7380 */;
import ConjureVoiceChannelPinStore from "ConjureVoiceChannelPinStore" /* 7381 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureChatStore = ConjureChatStore2;
let _require, c7, c8;

function setConnState(projectId, open) {
  obj = DispatcherDefault;
  obj2 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: open };
  obj.dispatch(obj2);
}
function appendLocalUserMessage(projectId, nonce) {
  let attachments;
  let content;
  let date;
  let id1;
  nonce = nonce.nonce;
  ({ content, attachments } = nonce);
  set = map2.set;
  const currentUser = UserStore.getCurrentUser();
  let id;
  obj = UserStore;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const result = set(nonce, id);
  const tmp5 = DispatcherDefault;
  const dispatch = tmp5.dispatch;
  obj2 = { type: "CONJURE_CHAT_MESSAGE_APPEND", projectId, content, id: "optimistic:" + nonce, userId: id1, timestamp: date.toISOString(), attachments };
  const currentUser1 = obj.getCurrentUser();
  id1 = undefined;
  if (currentUser1 != null) {
    id1 = currentUser1.id;
  }
  date = new Date();
  dispatch(obj2);
}
function appendFailedUserMessage(projectId, nonce, message) {
  let attachments;
  let content;
  let date;
  let id1;
  nonce = nonce.nonce;
  ({ content, attachments } = nonce);
  set = map2.set;
  const currentUser = UserStore.getCurrentUser();
  let id;
  obj = UserStore;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const result = set(nonce, id);
  const tmp6 = DispatcherDefault;
  const dispatch = tmp6.dispatch;
  obj2 = { type: "CONJURE_CHAT_MESSAGE_APPEND", projectId, content, id: "optimistic:" + nonce, userId: id1, timestamp: date.toISOString(), attachments };
  const currentUser1 = obj.getCurrentUser();
  id1 = undefined;
  if (currentUser1 != null) {
    id1 = currentUser1.id;
  }
  date = new Date();
  dispatch(obj2);
  const obj4 = conjureChatConnection;
  obj4.sendFailedStep(projectId, message);
}
function failPendingSends(projectId, value, message) {
  value.pendingSends = [];
  const tmp = value.pendingSends[Symbol.iterator]();
  while (tmp !== undefined) {
    let tmp4 = appendFailedUserMessage(projectId, tmp2, message);
    continue;
  }
}
function handleEvent(projectId, pendingEvents, type) {
  let messages;
  let tmp21;
  let tmp48;
  function flushPendingSends(projectId, ws) {
    let attachments;
    let content;
    let nonce;
    ws.pendingSends = [];
    const iter = ws.pendingSends[Symbol.iterator]();
    const nextResult = iter.next();
    if (iter !== undefined) {
      appendLocalUserMessage(projectId, nextResult);
      try {
        ws = ws.ws;
        ({ content, nonce, attachments } = nextResult);
        let mapped;
        const sendUserMessage = ws.sendUserMessage;
        if (attachments != null) {
          mapped = attachments.map((id) => id.id);
        }
        obj = { templateId: null, remix: null, copy: null, clarificationAnswers: null, linkEmbeds: null };
        ({ templateId: obj.templateId, remix: obj.remix, copy: obj.copy, clarificationAnswers: obj.clarificationAnswers, linkEmbeds: obj.linkEmbeds } = nextResult);
        sendUserMessage(content, nonce, mapped, obj);
      } catch (tmp14) {
        const _Error = Error;
        let str = "send failed";
        if (tmp14 instanceof Error) {
          str = tmp14.message;
        }
        obj2 = require("conjureChatConnection");
        obj2.sendFailedStep(projectId, str);
      }
    }
  }
  function appendAcceptedUserMessage(projectId, content) {
    let value;
    let hasItem = null != content.nonce && map.has(content.nonce);
    if (hasItem) {
      if (null != content.nonce) {
        value = map.get(content.nonce);
      }
    }
    if (hasItem) {
      hasItem = null == value || null == content.user_id || value === content.user_id;
    }
    const tmp6 = hasItem && null != content.nonce;
    if (tmp6) {
      map.delete(content.nonce);
    }
    DispatcherDefault;
    obj = { type: "CONJURE_CHAT_MESSAGE_APPEND", projectId, content: content.content, id: content.id };
    if (hasItem) {
      let obj3;
      if (null != content.nonce) {
        const _HermesInternal = HermesInternal;
        obj3 = { optimisticId: "optimistic:" + content.nonce };
        obj2 = { optimisticId: "optimistic:" + content.nonce };
      }
      const merged = Object.assign(obj3);
      ({ user_id: obj.userId, ts: obj.timestamp, attachments: obj.attachments } = content);
      tmp10(obj);
    }
    obj3 = {};
  }
  function handleStep(kind, projectId) {
    projectId = projectId.projectId;
    if ("error" === kind.kind) {
      obj = require("conjurePublishConnection");
      const result = obj.failPendingSafetyRecheck(projectId);
    }
    if ("turn_result" === kind.kind) {
      const obj4 = require("ConjureAnalytics");
      const result1 = obj4.trackConjureTurnResulted(projectId, kind);
      if ("deployed" === kind.result) {
        const obj3 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: kind.turn_id, patch: { kind: "plan_implemented" } };
        const obj5 = DispatcherDefault;
        obj5.dispatch(obj3);
      }
      const obj6 = { type: "CONJURE_CHAT_TURN_FINISHED", projectId, turnId: null, summary: null };
      ({ turn_id: obj8.turnId, summary: obj8.summary } = kind);
      const obj7 = DispatcherDefault;
      obj7.dispatch(obj6);
      let deleteResult = set.delete(projectId);
      const tmp16 = importDefault;
      if (deleteResult) {
        deleteResult = "cancelled" === kind.result;
      }
      if (deleteResult) {
        const obj9 = { type: "CONJURE_CHAT_INTERRUPTED", projectId };
        const tmp16Result = tmp16(dependencyMap[18]);
        tmp16Result.dispatch(obj9);
      }
    } else if (null != closure_1_19[kind.kind]) {
      closure_1_19[kind.kind](kind, projectId);
    } else {
      obj2 = require("conjureKnownStepKinds");
      const tmp7 = _require;
      const tmp8 = dependencyMap;
      if (obj2.isKnownStepKind(kind.kind)) {
        const tmp7Result = tmp7(tmp8[19]);
        tmp7Result.appendTurnStep(projectId, kind);
      }
    }
  }
  if (!set1.has(type.type)) {
    let str = "open";
    if ("open" !== map1.get(projectId)) {
      const pendingEvents1 = pendingEvents.pendingEvents;
      pendingEvents1.push(type);
    }
  }
  obj = { projectId, ws: pendingEvents.ws };
  type = type.type;
  if ("history_page" === type) {
    let obj3 = map4;
    if (type.requested === map4.get(projectId)) {
      let deleteResult = obj3.delete(projectId);
      if (true !== type.failed) {
        obj2 = { type: "CONJURE_CHAT_HISTORY_PREPEND", projectId, entries: messages.slice(), cursor: tmp48 };
        messages = type.messages;
        const dispatch2 = DispatcherDefault.dispatch;
        DispatcherDefault;
        if (messages == null) {
          messages = [];
        }
        tmp48 = null;
        if (true === type.has_more) {
          let cursor = type.cursor;
          if (cursor == null) {
            cursor = null;
          }
          tmp48 = cursor;
        }
        dispatch2(obj2);
      }
    }
  } else if ("hello" === type) {
    pendingEvents.helloSeen = true;
    pendingEvents.warmTemplateId = null;
    pendingEvents.debugOnDemand = true === type.debug_on_demand;
    const backoff = pendingEvents.backoff;
    backoff.succeed();
    if (true === type.heartbeat) {
      const heartbeat = pendingEvents.heartbeat;
      heartbeat.start();
    }
  } else if ("history" === type) {
    let messages1 = type.messages;
    let tmp16 = null;
    if (messages1 == null) {
      messages1 = [];
    }
    const substr = messages1.slice();
    let obj4 = { type: "CONJURE_CHAT_HISTORY_SET", projectId, entries: substr, cursor: tmp21, degraded: true === type.degraded };
    tmp21 = null;
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (true === type.has_more) {
      let cursor1 = type.cursor;
      if (cursor1 == null) {
        cursor1 = null;
      }
      tmp21 = cursor1;
    }
    dispatch(obj4);
    if (undefined !== type.active_turn_id) {
      setRunningTurn(projectId, pendingEvents, type.active_turn_id);
    }
    map4.delete(projectId);
    pendingEvents = pendingEvents.pendingEvents;
    pendingEvents.pendingEvents = [];
    setConnState(projectId, "open");
    for (const item10089 of pendingEvents) {
      let tmp33 = handleEvent(projectId, pendingEvents, item10089);
      continue;
    }
    let num5 = map3.get(projectId);
    if (num5 == null) {
      num5 = 0;
    }
    if (num5 > 0) {
      requestDebugBacklog(0, pendingEvents);
    }
    const pendingModelSettings = pendingEvents.pendingModelSettings;
    pendingEvents.pendingModelSettings = null;
    if (null != pendingModelSettings) {
      try {
        let ws = pendingEvents.ws;
        ws.sendModelSettings(pendingModelSettings);
      } catch (err) {
      }
    }
    const pendingTemplatePrep = pendingEvents.pendingTemplatePrep;
    pendingEvents.pendingTemplatePrep = null;
    if (null != pendingTemplatePrep) {
      sendTemplatePrep(pendingEvents, pendingTemplatePrep);
    }
    flushPendingSends(projectId, pendingEvents);
  } else if ("user_message" === type) {
    appendAcceptedUserMessage(projectId, type);
  } else if ("step" === type) {
    const tmp5 = handleStep(type, obj);
    const turn_id = type.turn_id;
    if (undefined !== pendingEvents.runningTurnId) {
      let tmp6 = null;
      if (null != turn_id) {
        if ("turn_result" === type.kind) {
          const endedTurnIds2 = pendingEvents.endedTurnIds;
          endedTurnIds2.add(turn_id);
          if (turn_id === pendingEvents.runningTurnId) {
            setRunningTurn(projectId, pendingEvents, null);
          }
          const tmp14 = tmp11;
        } else {
          let hasItem = turn_id === pendingEvents.runningTurnId;
          if (!hasItem) {
            const endedTurnIds = pendingEvents.endedTurnIds;
            hasItem = endedTurnIds.has(turn_id);
          }
          if (!hasItem) {
            let tmp8 = setRunningTurn;
            setRunningTurn(projectId, pendingEvents, turn_id);
          }
        }
      }
    }
  } else {
    let log = obj[type.type];
    if (log == null) {
      log = obj.log;
    }
    if (log != null) {
      log(type, obj);
    }
  }
}
function setRunningTurn(projectId, pendingEvents, active_turn_id) {
  pendingEvents.runningTurnId = active_turn_id;
  obj = DispatcherDefault;
  obj2 = { type: "CONJURE_CHAT_RUNNING_TURN_SET", projectId, turnId: active_turn_id };
  obj.dispatch(obj2);
}
function handleSocketClosed(projectId, value) {
  _require = projectId;
  const heartbeat = value.heartbeat;
  heartbeat.stop();
  obj = require("conjurePublishConnection");
  obj.rejectPendingPublish(projectId, "Connection closed before the publish result arrived");
  obj2 = require("conjurePublishScheduleRequests");
  const result = obj2.rejectPendingPublishSchedule(projectId);
  const obj3 = require("conjurePublishEvalConnection");
  const result1 = obj3.rejectPendingPublishEval(projectId);
  const obj4 = require("conjurePublishConnection");
  const result2 = obj4.rejectPendingPatchNotesDraft(projectId, "Connection closed before the draft arrived");
  const obj5 = require("conjurePublishConnection");
  const result3 = obj5.failPendingSafetyRecheck(projectId);
  const obj6 = require("conjurePreviewClaims");
  const result4 = obj6.clearConjurePreviewClaims(projectId);
  if (value.disposed) {
    const obj8 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
    const obj11 = DispatcherDefault;
    obj11.dispatch(obj8);
  } else if (value.helloSeen) {
    value.reconnectPending = true;
    const obj10 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "connecting" };
    const obj9 = DispatcherDefault;
    obj9.dispatch(obj10);
    const backoff = value.backoff;
    backoff.fail(() => {
      connect(projectId);
    });
  } else {
    const obj12 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
    const obj7 = DispatcherDefault;
    obj7.dispatch(obj12);
    failPendingSends(projectId, value, "Connection closed before the message was sent");
    value.pendingModelSettings = null;
    value.pendingTemplatePrep = null;
  }
}
let obj = function _openWithFreshTicket() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_5;
    let str2;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c6;
      try {
        let templateId;
        let ticket;
        let open;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            let closure_4 = tmp;
            templateId = undefined;
            ticket = undefined;
            const ws2 = closure_1.ws;
            open = ws2.close();
            if (closure_1.helloSeen) {
              open = require("ConjureWorkerTickets");
              open.forgetEarlyTicket(closure_0);
            }
            c6 = 1;
            const obj10 = require("ConjureWorkerTickets");
            open = obj10.mintWorkerTicket(tmp82);
            c7 = 2;
            c8 = 1;
            const obj11 = { value: open, done: false };
            return obj11;
          }
        } else {
          if (1 === tmp4) {
            open = tmp70;
            c6 = 0;
            if (closure_1.disposed) {
              c8 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              closure_132_13(closure_0, "failed");
              open = closure_1;
              const _Error = Error;
              let str = "ws open failed";
              const tmp21 = closure_132_17;
              const tmp22 = closure_0;
              if (tmp70 instanceof Error) {
                str = tmp70.message;
              }
              tmp21(tmp22, open, str);
              closure_1.pendingModelSettings = null;
              closure_1.pendingTemplatePrep = null;
              const obj3 = closure_132_0(closure_132_2[27]);
              obj3.rejectPendingPublish(closure_0, "Connection failed before the publish result arrived");
              const obj4 = closure_132_0(closure_132_2[29]);
              const result = obj4.rejectPendingPublishSchedule(closure_0);
              const obj5 = closure_132_0(closure_132_2[28]);
              const result1 = obj5.rejectPendingPublishEval(closure_0);
              const obj6 = closure_132_0(closure_132_2[28]);
              const result2 = obj6.releasePublishEvalOnTicketRefused(closure_0, tmp70);
              const obj7 = closure_132_0(closure_132_2[27]);
              const result3 = obj7.rejectPendingPatchNotesDraft(closure_0, "Connection failed before the draft arrived");
              const obj8 = closure_132_0(closure_132_2[27]);
              const result4 = obj8.failPendingSafetyRecheck(closure_0);
              open = closure_0;
              const obj12 = { location: "connection", code: closure_132_0(closure_132_2[36]).ConjureErrorCodes.WS_OPEN_FAILED, message: str2 };
              const trackConjureErrored = closure_132_0(closure_132_2[36]).trackConjureErrored;
              const tmp58 = closure_132_0(closure_132_2[36]);
              const _Error2 = Error;
              str2 = "ws open failed";
              if (tmp70 instanceof Error) {
                str2 = tmp70.message;
              }
              trackConjureErrored(open, obj12);
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            templateId = value;
            ticket = templateId.ticket;
            open = templateId.baseUrl;
            if (closure_1.disposed) {
              c6 = 0;
              c8 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              const ws = closure_1.ws;
              open = ws.open;
              obj = {
                url: open,
                ticket,
                templateId,
                onEvent(arg0) {
                            const heartbeat = closure_1_1.heartbeat;
                            heartbeat.received();
                            closure_2_21(closure_1_0, closure_1_1, arg0);
                          },
                onPong() {
                            const heartbeat = closure_1_1.heartbeat;
                            return heartbeat.pong();
                          },
                onClose() {
                            closure_2_23(closure_1_0, closure_1_1);
                          },
                onError() {

                          }
              };
              const warmTemplateId = closure_1.warmTemplateId;
              templateId = warmTemplateId;
              if (warmTemplateId == null) {
                templateId = undefined;
              }
              open(obj);
              c6 = 0;
            }
          }
          c8 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp70) {
        if (0 === c6) {
          c8 = 3;
          throw tmp70;
        } else {
          c7 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function connect(projectId) {
  let conjureSocketHeartbeat;
  let tmp12;
  function openWithFreshTicket() {
    return obj(...arguments);
  }
  _require = projectId;
  let warmTemplateId = arg1;
  if (arg1 === undefined) {
    warmTemplateId = null;
  }
  let conjureWebSocket;
  obj = map;
  let value = map.get(projectId);
  if (null == value) {
    const self = this;
    const self2 = this;
    conjureWebSocket = new require("ConjureWebSocket").ConjureWebSocket();
    const obj3 = { ws: conjureWebSocket, backoff: tmp12, heartbeat: conjureSocketHeartbeat, helloSeen: false, disposed: false, reconnectPending: false, pendingSends: [], pendingEvents: [], pendingModelSettings: null, pendingTemplatePrep: null, warmTemplateId: null, debugOnDemand: false, endedTurnIds: set };
    const self3 = this;
    const self4 = this;
    const self5 = this;
    const self6 = this;
    tmp12 = new conjureWebSocket(559)(1000, 30000);
    conjureSocketHeartbeat = new require("ConjureSocketHeartbeat").ConjureSocketHeartbeat(() => conjureWebSocket.sendPing(), () => {
      const value = map.get(projectId);
      const tmp = projectId;
      if (null != value) {
        const ws = value.ws;
        ws.close();
        handleSocketClosed(tmp, value);
      }
    });
    const _Set = Set;
    const self7 = this;
    const self8 = this;
    set = new Set();
    const result = obj.set(projectId, obj3);
    const obj5 = require("conjureProjectSockets");
    obj5.setConjureSocket(projectId, obj3.ws);
    const obj6 = require("conjureWakeSignals");
    obj6.listenForConjureWake(handleWake);
    value = obj3;
  }
  if (warmTemplateId == null) {
    warmTemplateId = value.warmTemplateId;
  }
  value.warmTemplateId = warmTemplateId;
  value.pendingEvents = [];
  value.helloSeen = false;
  value.debugOnDemand = false;
  value.runningTurnId = undefined;
  const endedTurnIds = value.endedTurnIds;
  endedTurnIds.clear();
  value.disposed = false;
  value.reconnectPending = false;
  const heartbeat = value.heartbeat;
  heartbeat.stop();
  obj2 = conjureWebSocket(572);
  const obj4 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "connecting" };
  obj2.dispatch(obj4);
  openWithFreshTicket(projectId, value);
}
function handleWake() {
  let tmp6;
  let tmp7;
  const arr = Array.from(map.entries());
  const tmp2 = arr[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let tmp8 = tmp7;
    if (tmp7.reconnectPending) {
      let backoff = tmp8.backoff;
      let succeedResult = backoff.succeed();
      let tmp14 = connect(tmp6);
    } else {
      let heartbeat = tmp8.heartbeat;
      let expediteResult = heartbeat.expedite();
    }
    continue;
  }
}
function requestDebugBacklog(arg0, debugOnDemand) {
  if (debugOnDemand.debugOnDemand) {
    const ws = debugOnDemand.ws;
    ws.sendDebugSubscribe();
  }
}
function teardown(projectId) {
  const value = map.get(projectId);
  let flag = null != value;
  obj = map;
  if (flag) {
    value.disposed = true;
    const backoff = value.backoff;
    backoff.cancel();
    const heartbeat = value.heartbeat;
    heartbeat.stop();
    obj2 = conjurePublishConnection;
    obj2.rejectPendingPublish(projectId, "Connection closed before the publish result arrived");
    const obj3 = conjurePublishScheduleRequests;
    const result = obj3.rejectPendingPublishSchedule(projectId);
    const obj4 = conjurePublishEvalConnection;
    const result1 = obj4.rejectPendingPublishEval(projectId);
    const obj5 = conjurePublishConnection;
    const result2 = obj5.rejectPendingPatchNotesDraft(projectId, "Connection closed before the draft arrived");
    const obj6 = conjurePublishConnection;
    const result3 = obj6.failPendingSafetyRecheck(projectId);
    const ws = value.ws;
    ws.close();
    obj.delete(projectId);
    const obj7 = conjureProjectSockets;
    obj7.deleteConjureSocket(projectId);
    map4.delete(projectId);
    const obj8 = ConjurePlatformUtilsDefault;
    const result4 = obj8.releasePreviewControl(projectId);
    const obj9 = conjurePreviewClaims;
    const result5 = obj9.clearConjurePreviewClaims(projectId);
    const obj11 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
    const obj10 = DispatcherDefault;
    obj10.dispatch(obj11);
    flag = true;
  }
  return flag;
}
function sendTemplatePrep(value, pendingTemplatePrep) {
  try {
    const ws = value.ws;
    ws.sendPrepareTemplate(pendingTemplatePrep);
  } catch (err) {
  }
}
function closeAllConnections() {
  const arr = Array.from(map.keys());
  const tmp2 = arr[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = teardown(tmp3);
    continue;
  }
  map2.clear();
  obj = conjureMediaTickets;
  obj.clearMediaTickets();
}
const getOlderHistoryCursor = ConjureChatStore2.getOlderHistoryCursor;
const map = new Map();
const map1 = new Map();
let set = new Set();
const map2 = new Map();
obj = {};
let merged = Object.assign(conjureBrowserSessionsConnection.browserSessionsFrameHandlers);
let merged1 = Object.assign(conjureChatConnection.chatFrameHandlers);
const merged2 = Object.assign(conjureDebugConnection.debugFrameHandlers);
const merged3 = Object.assign(ConjureHostApproval.hostAccessFrameHandlers);
const merged4 = Object.assign(conjureLiveReloadConnection.liveReloadFrameHandlers);
const merged5 = Object.assign(conjureManagedCopyConnection.managedCopyFrameHandlers);
const merged6 = Object.assign(conjureModelSettingsConnection.modelSettingsFrameHandlers);
const merged7 = Object.assign(conjurePreviewConnection.previewFrameHandlers);
const merged8 = Object.assign(conjurePublishConnection.publishFrameHandlers);
const merged9 = Object.assign(conjurePublishEvalConnection.publishEvalFrameHandlers);
const merged10 = Object.assign(conjurePublishScheduleRequests.publishScheduleFrameHandlers);
const merged11 = Object.assign(conjureRemixConnection.remixFrameHandlers);
const merged12 = Object.assign(conjureSettingsConnection.settingsFrameHandlers);
const merged13 = Object.assign(conjureSmartContextConnection.smartContextFrameHandlers);
let obj2 = {};
const merged14 = Object.assign(conjureAppBuildRequestConnection.appBuildRequestStepHandlers);
const merged15 = Object.assign(conjureChatConnection.chatStepHandlers);
const merged16 = Object.assign(conjureDebugConnection.debugStepHandlers);
const merged17 = Object.assign(conjurePreviewConnection.previewStepHandlers);
const merged18 = Object.assign(conjureProjectConnection.projectStepHandlers);
const merged19 = Object.assign(conjurePublishConnection.publishStepHandlers);
const merged20 = Object.assign(conjureUsageConnection.usageStepHandlers);
const set1 = new Set(["hello", "history", "capture_preview", "control_preview", "control_claim", "control_abort", "capture_claim", "preview_operation", "request_upstream_ticket", "host_approvals"]);
const map3 = new Map();
const map4 = new Map();
const Store = get_initializedDefault.Store;
class ConjureConnectionStore extends Store {
  initialize() {
    this.waitFor(ConjureChatStore, ConjureDebugStore, ConjureProjectStore, UserStore);
  }
  getConnState(projectId) {
    let str = map1.get(projectId);
    if (str == null) {
      str = "connecting";
    }
    return str;
  }
}
const prototype = ConjureConnectionStore.prototype;
let obj3 = {
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    if ("active" === state.state) {
      handleWake();
    }
    return false;
  },
  CONJURE_CHAT_CONN_STATE: function handleChatConnState(arg0) {
    let connState;
    let projectId;
    ({ projectId, connState } = arg0);
    obj = map1;
    if (map1.get(projectId) === connState) {
      return false;
    } else {
      const result = obj.set(projectId, connState);
      const tmp2 = "closed" !== connState && "failed" !== connState;
      if (!tmp2) {
        set.delete(projectId);
      }
    }
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    if (!teardown(projectId.projectId)) {
      return false;
    }
  },
  CONJURE_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess() {
    let flag = false;
    const arr = Array.from(map.keys());
    const iter = arr[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp5 = null == ConjureProjectStore.getProject(nextResult);
      if (tmp5) {
        tmp5 = teardown(tmp3);
      }
      if (tmp5) {
        flag = true;
      }
      continue;
    }
    return flag ? undefined : false;
  },
  LOGOUT: function handleLogout() {
    obj = conjureMediaTickets;
    obj.clearMediaTickets();
    if (0 === map.size) {
      return false;
    } else {
      closeAllConnections();
    }
  }
};
const conjureConnectionStore = new ConjureConnectionStore(DispatcherDefault, obj3);
let result = size.fileFinishedImporting("modules/conjure/connection/ConjureConnectionStore.tsx");

export default conjureConnectionStore;
export function optimisticMessageId(arg0) {
  return "optimistic:" + arg0;
}
export function subscribeDebugBacklog(projectId) {
  let closure_0 = projectId;
  obj = map3;
  let num = map3.get(projectId);
  if (num == null) {
    num = 0;
  }
  let result = obj.set(projectId, num + 1);
  const value = map.get(projectId);
  const tmp3 = 0 === num && null != value && "open" === map1.get(projectId);
  if (tmp3) {
    if (value.debugOnDemand) {
      const ws = value.ws;
      ws.sendDebugSubscribe();
    }
  }
  return () => {
    let num = map3.get(projectId);
    if (num == null) {
      num = 1;
    }
    const diff = num - 1;
    if (0 < diff) {
      const result = obj.set(tmp, diff);
    } else {
      map3.delete(projectId);
    }
  };
}
export function ensureConnection(arg0) {
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let templateId = obj.templateId;
  const value = map.get(arg0);
  if (null != value) {
    const value2 = map1.get(arg0);
    const reconnectPending = "closed" !== value2 && "failed" !== value2 || value.reconnectPending;
    if (!reconnectPending) {
      connect(arg0);
    }
  } else {
    const tmp3 = connect;
    if (templateId == null) {
      templateId = null;
    }
    tmp3(arg0, templateId);
  }
}
export function sendUserMessage(projectId, trimmed, arg2) {
  let attachments;
  let clarificationAnswers;
  let content;
  let copy;
  let nonce;
  let nonce1;
  let nonce2;
  let obj5;
  let obj7;
  let remix;
  let templateId;
  obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  ({ copy, clarificationAnswers, nonce, templateId, remix } = obj);
  trimmed = trimmed.trim();
  let tmp2;
  if (null != arg2) {
    if (arg2.length > 0) {
      tmp2 = arg2;
    }
  }
  if ("" === trimmed) {
    if (null == tmp2) {
      if (true !== copy) {
        return false;
      }
    }
  }
  obj2 = conjureLinkEmbeds;
  const result = obj2.readyConjureLinkEmbeds(trimmed);
  const obj3 = { content: trimmed, nonce: nonce1, attachments: tmp2, templateId, remix, copy };
  nonce1 = nonce;
  if (nonce == null) {
    const tmp3Result = createNonce;
    nonce1 = tmp3Result.createNonce();
  }
  if (null != clarificationAnswers) {
    obj5 = { clarificationAnswers };
    const obj4 = { clarificationAnswers };
  } else {
    obj5 = {};
  }
  const merged = Object.assign(obj5);
  if (null != result) {
    obj7 = { linkEmbeds: result };
    const obj6 = { linkEmbeds: result };
  } else {
    obj7 = {};
  }
  const merged1 = Object.assign(obj7);
  const value = map.get(projectId);
  if (null != value) {
    const pendingSends = value.pendingSends;
    pendingSends.push(obj3);
    return true;
  }
  appendLocalUserMessage(projectId, obj3);
  try {
    if (null == value) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Not connected");
      throw error;
    } else {
      const ws = value.ws;
      ({ content, nonce: nonce2, attachments } = obj3);
      let mapped;
      const sendUserMessage = ws.sendUserMessage;
      if (attachments != null) {
        mapped = attachments.map((id) => id.id);
      }
      const obj8 = { templateId: null, remix: null, copy: null, clarificationAnswers: null, linkEmbeds: null };
      ({ templateId: obj9.templateId, remix: obj9.remix, copy: obj9.copy, clarificationAnswers: obj9.clarificationAnswers, linkEmbeds: obj9.linkEmbeds } = obj3);
      sendUserMessage(content, nonce2, mapped, obj8);
      return true;
    }
  } catch (tmp22) {
    const _Error2 = Error;
    let str3 = "send failed";
    if (tmp22 instanceof Error) {
      str3 = tmp22.message;
    }
    if (null == nonce) {
      const tmp3Result2 = conjureChatConnection;
      tmp3Result2.sendFailedStep(projectId, str3);
    }
    return false;
  }
}
export function showUserMessage(projectId, str, arg2) {
  let date;
  let id1;
  obj = createNonce;
  const nonce = obj.createNonce();
  let tmp4;
  const trimmed = str.trim();
  if (null != arg2) {
    if (arg2.length > 0) {
      tmp4 = arg2;
    }
  }
  set = map2.set;
  const currentUser = UserStore.getCurrentUser();
  let id;
  obj2 = UserStore;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const result = set(nonce, id);
  const tmp9 = DispatcherDefault;
  const dispatch = tmp9.dispatch;
  const obj3 = { type: "CONJURE_CHAT_MESSAGE_APPEND", projectId, content: trimmed, id: "optimistic:" + nonce, userId: id1, timestamp: date.toISOString(), attachments: tmp4 };
  const currentUser1 = obj2.getCurrentUser();
  id1 = undefined;
  if (currentUser1 != null) {
    id1 = currentUser1.id;
  }
  date = new Date();
  dispatch(obj3);
  const obj4 = { nonce, messageKey: "optimistic:" + nonce };
  return obj4;
}
export function withdrawUserMessage(projectId, arg1) {
  map2.delete(arg1);
  obj = DispatcherDefault;
  obj2 = { type: "CONJURE_CHAT_MESSAGE_CANCELLED", projectId, id: "optimistic:" + arg1, withdrawn: true };
  obj.dispatch(obj2);
}
export function interruptTurn(projectId) {
  const value = map.get(projectId);
  try {
    if (null == value) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Not connected");
      throw error;
    } else {
      const ws = value.ws;
      ws.sendInterrupt();
      if (ConjureChatStore.isThinking(projectId)) {
        set.add(projectId);
        obj2 = { type: "CONJURE_CHAT_STOP_REQUESTED", projectId };
        obj = DispatcherDefault;
        obj.dispatch(obj2);
      }
    }
  } catch (err) {
  }
}
export function stageModelSettings(arg0, pendingModelSettings) {
  const value = map.get(arg0);
  if (null != value) {
    value.pendingModelSettings = pendingModelSettings;
  }
}
export function prepareTemplate(arg0, pendingTemplatePrep) {
  const value = map.get(arg0);
  if (null != value) {
    if ("open" === map1.get(arg0)) {
      sendTemplatePrep(value, pendingTemplatePrep);
    } else {
      value.pendingTemplatePrep = pendingTemplatePrep;
    }
  }
}
export function loadOlderHistory(arg0) {
  const tmp = getOlderHistoryCursor(arg0);
  if (null == tmp) {
    return false;
  } else {
    obj = map4;
    if (map4.get(arg0) === tmp) {
      return true;
    } else {
      const value = map.get(arg0);
      let flag = null != value && "open" === map1.get(arg0);
      if (flag) {
        const result = obj.set(arg0, tmp);
        const ws = value.ws;
        ws.sendLoadHistory(tmp);
        flag = true;
      }
      return flag;
    }
  }
}
export function resetHistoryPaging(arg0) {
  map4.delete(arg0);
}
export function closeConnection(projectId) {
  teardown(projectId);
}
export { closeAllConnections };
