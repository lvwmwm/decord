// Module ID: 11428
// Function ID: 11429
// Name: PostMessageTransport
// Dependencies: [5, 32, 4820, 6760, 6363, 1087, 6761, 1104, 11429, 580, 1123, 1267, 4890, 9240, 6762, 11430, 10707, 6763, 9236, 2002, 11432, 11433, 2]

// Module 11428 (PostMessageTransport)
import _mod580 from "module_580" /* 580 */;
import DurationsDefault from "Durations" /* 1104 */;
import Constants2 from "Constants" /* 6363 */;
import FramesConstants from "FramesConstants" /* 6761 */;
import RPCErrorDefault from "RPCError" /* 9240 */;
import RPCOpcodesDefault from "RPCOpcodes" /* 11429 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4820 */;
import FramesStore from "FramesStore" /* 6760 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c6, closure_0, closure_5, importDefault, json_str, message2, selfEmbeddedActivities, user;

let c10;
let c9;
let closure_12;
let metroImportAll;
let unpackModuleId;
let _asyncToGenerator = _asyncToGenerator_mod;
const RPC_EMBEDDED_APP_SCOPE = Constants2.RPC_EMBEDDED_APP_SCOPE;
({ AnalyticEvents: metroImportAll, ComponentActions: c9, RPCCloseCodes: c10, RPCErrors: unpackModuleId, RPCCommands: closure_12 } = Constants);
const asLaunched = FramesConstants.asLaunched;
let closure_14 = 10 * DurationsDefault.Millis.SECOND;
const map = new Map();
const map1 = new Map();
const map2 = new Map();
function postClose(source, arg1, postMessageToRPCClient) {
  const items = [RPCOpcodesDefault.CLOSE, arg1];
  postMessageToRPCClient(items, source.origin);
}
const EventEmitter = _mod580.EventEmitter;
class PostMessageTransport extends EventEmitter {
  constructor(validateSocketClient, logger, createPostMessageProxySocket, onFrameHandled) {
    let tmp2;
    const tmp4 = new PostMessageTransport(tmp3, tmp2, tmp);
    tmp4.pendingTicketRefreshes = new Set();
    tmp4.disconnectSocket = function disconnectSocket(value, message, arg2) {
      let flag = arg2;
      if (arg2 === undefined) {
        flag = false;
      }
      let tmp2;
      const emit = closure_0.emit;
      if (!flag) {
        tmp2 = message;
      }
      emit("disconnect", value, tmp2);
      if (!flag) {
        let str = message.message;
        const close = value.close;
        const code = message.code;
        if (str == null) {
          str = "Unknown";
        }
        close(code, str);
      }
      map.delete(value.source.iframeId);
    };
    tmp4.handleIFrameMount = function handleIFrameMount(arg0) {
      let data;
      let id;
      ({ id, data } = arg0);
      const result = map1.set(id, data);
      let obj = { contextSource: data.contextSource };
      const result1 = map2.set(id, obj);
      closure_0.handshakeFailureTimeoutId = setTimeout(() => {
        let timeout_ms;
        selfEmbeddedActivities = selfEmbeddedActivities.getSelfEmbeddedActivities();
        const fromResult = from(selfEmbeddedActivities.entries());
        const item = fromResult.forEach((item) => {
          let obj2;
          let obj3;
          let tmp;
          let tmp2;
          [tmp, tmp2] = item;
          const obj = { application_id: tmp, channel_id: obj2.getEmbeddedActivityLocationChannelId(tmp2.location), guild_id: obj3.getEmbeddedActivityLocationGuildId(tmp2.location), timeout_ms };
          const track = closure_1_1(closure_1_2[11]).track;
          const ACTIVITY_HANDSHAKE_TIMED_OUT = constants.ACTIVITY_HANDSHAKE_TIMED_OUT;
          closure_1_1(closure_1_2[11]);
          obj2 = closure_1_0(closure_1_2[12]);
          obj3 = closure_1_0(closure_1_2[12]);
          track(ACTIVITY_HANDSHAKE_TIMED_OUT, obj);
        });
      }, closure_14);
    };
    tmp4.handleIFrameUnmount = function handleIFrameUnmount(id) {
      id = id.id;
      map1.delete(id);
      map2.delete(id);
      const value = map.get(id);
      if (null != value) {
        const obj = { code: constants.CLOSE_NORMAL, message: "iFrame gone" };
        closure_0.disconnectSocket(value, obj, true);
      }
    };
    tmp4.handleMessage = function handleMessage(arg0, iframeId, postMessageToRPCClient) {
      const value = map.get(iframeId.iframeId);
      try {
        closure_0.routeEvent(value, iframeId, arg0, postMessageToRPCClient);
      } catch (tmp9) {
        if (tmp9 instanceof RPCErrorDefault) {
          if (tmp9.errorCode === unpackModuleId.INVALID_PAYLOAD) {
            throw tmp9;
          }
        }
        if (null != value) {
          const obj3 = { code: null, message: null };
          ({ code: obj2.code, message: obj2.message } = tmp9);
          closure_0.disconnectSocket(value, obj3, true);
        } else {
          const obj = { code: null, message: null };
          ({ code: obj.code, message: obj.message } = tmp9);
          postClose(iframeId, obj, postMessageToRPCClient);
        }
      }
    };
    tmp4.handleFrame = function handleFrame(origin, source, str) {
      if (origin.origin !== source.source.origin) {
        const self3 = this;
        const self4 = this;
        const obj2 = { closeCode: constants.INVALID_ORIGIN };
        const tmp19 = new RPCErrorDefault(obj2, "Origin has changed");
        throw tmp19;
      } else {
        try {
          let parsed = str;
          if (typeof str === "string") {
            const _JSON = JSON;
            parsed = JSON.parse(str);
          }
          const onFrameHandled = closure_0.onFrameHandled;
          if (onFrameHandled != null) {
            onFrameHandled(parsed, closure_0.logger, source);
          }
          closure_0.emit("request", source, parsed);
        } catch (err) {
          const self = this;
          const self2 = this;
          const obj3 = { closeCode: constants.CLOSE_UNSUPPORTED };
          const tmp13 = new RPCErrorDefault(obj3, "Payload not recognized encoding");
          throw tmp13;
        }
      }
    };
    new Set();
    _asyncToGenerator(async (source, arg1, postMessageToRPCClient) => {
      closure_1 = arg1;
      let c8 = 0;
      let c9 = 0;
      let c7 = 0;
      return (async function(arg0, value, arg2) {
        let equalResult;
        let maxResult;
        let stringResult1;
        let stringResult2;
        let stringResult3;
        if (c9 === 2) {
          c9 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c7;
          try {
            let frame_id;
            c9 = 2;
            if (0 === context) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 3;
                return { value, done: true };
              } else {
                closure_5 = tmp;
                json_str = undefined;
                closure_4 = undefined;
                frame_id = undefined;
                contextSource = undefined;
                user = undefined;
                context = undefined;
                if (null != closure_1.handshakeFailureTimeoutId) {
                  const _clearTimeout = clearTimeout;
                  clearTimeout(closure_1.handshakeFailureTimeoutId);
                }
                context = 1;
                c9 = 1;
                const obj5 = { value: source(postMessageToRPCClient[19])(postMessageToRPCClient[18], postMessageToRPCClient.paths), done: false };
                return obj5;
              }
            } else if (1 === context) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 3;
                return { value, done: true };
              } else {
                json_str = value.default;
                const assert = json_str.assert;
                const obj14 = closure_1(postMessageToRPCClient[20])(json_str);
                const obj7 = { v: maxResult.required(), encoding: equalResult.optional(), client_id: stringResult1.required(), frame_id: stringResult2.required(), sdk_version: stringResult3.optional() };
                const keys = obj14.required().keys;
                obj14.required();
                const numberResult = json_str.number();
                const minResult = numberResult.min(1);
                maxResult = minResult.max(1);
                const stringResult = json_str.string();
                equalResult = stringResult.equal("json");
                stringResult1 = json_str.string();
                stringResult2 = json_str.string();
                stringResult3 = json_str.string();
                assert(closure_1, keys(obj7));
                c7 = 0;
                closure_4 = closure_1;
                frame_id = closure_4.frame_id;
                contextSource = map.get(source.iframeId);
                if (frame_id === source.iframeId) {
                  if (null != contextSource) {
                    context = closure_1(postMessageToRPCClient[15])(contextSource.contextSource);
                    if (null == context) {
                      const logger6 = closure_133_1.logger;
                      const _HermesInternal7 = HermesInternal;
                      logger6.error("Could not resolve embedded context for iframe ID " + source.iframeId);
                      const _HermesInternal8 = HermesInternal;
                      const self5 = this;
                      const self6 = this;
                      const obj8 = { closeCode: constants.CLOSE_UNSUPPORTED };
                      const tmp102 = closure_1(postMessageToRPCClient[13]);
                      const tmp1022 = new tmp102(obj8, "Failed to build embedded context for iframe ID " + frame_id);
                      throw tmp1022;
                    } else {
                      if (null != closure_4.sdk_version) {
                        const obj9 = { application_id: closure_4.client_id, sdk_version: closure_4.sdk_version };
                        const obj4 = closure_1(postMessageToRPCClient[11]);
                        obj4.track(context.ACTIVITY_HANDSHAKE, obj9);
                      }
                      c7 = 2;
                      const _Number = Number;
                      const createPostMessageProxySocket = closure_133_1.createPostMessageProxySocket;
                      const encoding = closure_4.encoding;
                      const obj10 = { source, context, postMessageToRPCClient, version: Number(closure_4.v), logger: closure_133_1.logger, postClose, encoding: json_str };
                      json_str = encoding;
                      if (encoding == null) {
                        json_str = "json";
                      }
                      user = createPostMessageProxySocket(obj10);
                      const logger5 = closure_133_1.logger;
                      const _HermesInternal6 = HermesInternal;
                      logger5.info("Socket Opened: " + user.id);
                      c7 = 3;
                      context = 5;
                      c9 = 1;
                      const obj11 = { value: closure_133_1.validateSocketClient(user, source.origin, closure_4.client_id), done: false };
                      return obj11;
                    }
                  }
                }
                const logger7 = closure_133_1.logger;
                const _HermesInternal9 = HermesInternal;
                logger7.error("Unrecognized iframe ID: reported " + frame_id + ", expected " + source.iframeId);
                const _HermesInternal10 = HermesInternal;
                const self7 = this;
                const self8 = this;
                const obj12 = { closeCode: constants.CLOSE_UNSUPPORTED };
                const tmp116 = closure_1(postMessageToRPCClient[13]);
                const tmp1162 = new tmp116(obj12, "Unrecognized iframe ID " + frame_id);
                throw tmp1162;
              }
            } else if (2 === context) {
              c7 = 0;
              message = contextSource;
              const self3 = this;
              const self4 = this;
              const obj13 = { closeCode: constants.CLOSE_UNSUPPORTED };
              const tmp62 = new closure_1(postMessageToRPCClient[13])(obj13, message.message);
              throw tmp62;
            } else if (3 === context) {
              c7 = 0;
              let closure_10 = contextSource;
              const logger4 = closure_133_1.logger;
              const _HermesInternal5 = HermesInternal;
              logger4.error("Error opening window socket " + closure_10);
              throw closure_10;
            } else if (4 === context) {
              c7 = 0;
              message2 = contextSource;
              const logger3 = closure_133_1.logger;
              const _HermesInternal4 = HermesInternal;
              logger3.info("Socket Closed: " + user.id + ", " + message2.message);
              throw message2;
            } else if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              return { value, done: true };
            } else if (map.has(source.iframeId)) {
              const result = closure_1_15.set(source.iframeId, user);
              map.delete(source.iframeId);
              const scopes = user.authorization.scopes;
              scopes.add(c7);
              closure_1(postMessageToRPCClient[21])(user);
              closure_133_1.emit("connect", user);
              const logger2 = closure_133_1.logger;
              const _HermesInternal3 = HermesInternal;
              logger2.info("Socket Validated: " + user.id);
              c7 = 0;
              c9 = 3;
              return { value: "IconComponent", done: null };
            } else {
              const logger = closure_133_1.logger;
              const _HermesInternal = HermesInternal;
              logger.error("Iframe ID " + source.iframeId + " no longer exists");
              const _HermesInternal2 = HermesInternal;
              const self = this;
              const self2 = this;
              const obj = { closeCode: constants.CLOSE_UNSUPPORTED };
              const tmp10 = closure_1(postMessageToRPCClient[13]);
              const tmp106 = new tmp10(obj, "Unrecognized iframe ID " + source.iframeId);
              throw tmp106;
            }
          } catch (tmp128) {
            contextSource = tmp128;
            if (0 === c7) {
              c9 = 3;
              throw tmp128;
            } else if (1 === c7) {
              context = 2;
            } else if (2 === c7) {
              context = 3;
            } else {
              context = 4;
            }
          }
        }
      })();
    });
    tmp4.handleHandshake = function() {
      return closure_0(...arguments);
    };
    let closure_1 = tmp4;
    _require = _asyncToGenerator(async function(arg0, value) {
      let stringResult;
      let validResult;
      closure_0 = arg0;
      closure_1 = value;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c5;
        try {
          let message;
          let closure_2;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              message = tmp;
              closure_2 = undefined;
              c6 = 1;
              c7 = 1;
              const obj4 = { value: closure_0(closure_2[19])(closure_2[18], closure_2.paths), done: false };
              return obj4;
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_2 = value.default;
              const assert = closure_2.assert;
              const obj6 = closure_1(closure_2[20])(closure_2);
              const obj7 = { code: validResult.required(), message: stringResult.optional() };
              const keys = obj6.required().keys;
              const requiredResult = obj6.required();
              const _Object = Object;
              const numberResult = closure_2.number();
              validResult = numberResult.valid(Object.values(constants));
              stringResult = closure_2.string();
              assert(closure_1, keys(obj7));
              c5 = 0;
              closure_131_1.disconnectSocket(closure_0, closure_1);
              c7 = 3;
              return { value: "IconComponent", done: null };
            }
          } else {
            c5 = 0;
            message = closure_4;
            const obj = { closeCode: constants.CLOSE_UNSUPPORTED };
            const self = this;
            const self2 = this;
            const tmp14 = new closure_1(closure_2[13])(obj, message.message);
            throw tmp14;
          }
        } catch (tmp22) {
          closure_4 = tmp22;
          if (0 === c5) {
            c7 = 3;
            throw tmp22;
          } else {
            c6 = 2;
          }
        }
      }
    });
    tmp4.handleClose = function() {
      return closure_0(...arguments);
    };
    const ComponentDispatch = require("ComponentDispatchUtils").ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants.IFRAME_MOUNT, tmp4.handleIFrameMount);
    const ComponentDispatch2 = require("ComponentDispatchUtils").ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(constants.IFRAME_UNMOUNT, tmp4.handleIFrameUnmount);
    tmp4.validateSocketClient = validateSocketClient;
    tmp4.logger = logger;
    tmp4.createPostMessageProxySocket = createPostMessageProxySocket;
    tmp4.onFrameHandled = onFrameHandled;
    return tmp4;
  }
  routeEvent(value, iframeId, arg2, postMessageToRPCClient) {
    let tmp6;
    let tmp7;
    if (Array.isArray(arg2)) {
      const self = this;
      [tmp6, tmp7] = arg2;
      _slicedToArray(arg2, 2);
      if (RPCOpcodesDefault.HANDSHAKE === tmp6) {
        if (null != value) {
          const self8 = this;
          const self9 = this;
          const obj2 = { closeCode: constants2.CLOSE_UNSUPPORTED };
          const tmp32 = new RPCErrorDefault(obj2, "Already connected");
          throw tmp32;
        } else {
          return self.handleHandshake(iframeId, tmp7, postMessageToRPCClient);
        }
      } else if (RPCOpcodesDefault.FRAME === tmp6) {
        if (!self.handleFrameTicketRefresh(value, iframeId, tmp7, postMessageToRPCClient)) {
          if (null == value) {
            const self6 = this;
            const self7 = this;
            const obj3 = { closeCode: constants2.CLOSE_UNSUPPORTED };
            const tmp27 = new RPCErrorDefault(obj3, "Not connected");
            throw tmp27;
          } else {
            return self.handleFrame(iframeId, value, tmp7);
          }
        }
      } else if (RPCOpcodesDefault.CLOSE === tmp6) {
        if (null == value) {
          const self4 = this;
          const self5 = this;
          const obj4 = { closeCode: constants2.CLOSE_UNSUPPORTED };
          const tmp17 = new RPCErrorDefault(obj4, "Not connected");
          throw tmp17;
        } else {
          return self.handleClose(value, tmp7);
        }
      } else {
        const self2 = this;
        const self3 = this;
        const obj = { closeCode: constants2.CLOSE_UNSUPPORTED };
        const tmp12 = new RPCErrorDefault(obj, "Invalid opcode");
        throw tmp12;
      }
    }
  }
  handleFrameTicketRefresh(context, iframeId, cmd, postMessageToRPCClient) {
    let closure_3;
    let closure_8;
    let closure_9;
    let nonce;
    function refresh() {
      return closure_0(...arguments);
    }
    _require = iframeId;
    importDefault = postMessageToRPCClient;
    function stillMounted() {
      const tmp = asLaunched(FramesStore.getFrame(RPC_EMBEDDED_APP_SCOPE));
      const tmp2 = map2.get(iframeId.iframeId) === value2 && null != tmp && tmp.applicationId === closure_8 && tmp.launchRequestId === constants && tmp.data.connectedSince === connectedSince;
      return tmp2;
    }
    const self = this;
    if (typeof cmd === "object") {
      if (null != cmd) {
        if ("cmd" in cmd) {
          let tmp = constants4;
          if (cmd.cmd === constants4.REQUEST_PROXY_TICKET_REFRESH) {
            let source;
            if (context != null) {
              source = context.context.source;
            }
            if (source == null) {
              const tmp3 = map2;
              const value = map2.get(iframeId.iframeId);
              let contextSource;
              if (value != null) {
                contextSource = value.contextSource;
              }
              source = contextSource;
            }
            let type;
            if (source != null) {
              type = source.type;
            }
            const tmp8 = self;
            if (type !== require("EmbeddedAppTypes").EmbeddedContextSourceType.FRAME) {
              return false;
            } else {
              if ("nonce" in cmd) {
                if (typeof cmd.nonce === "string") {
                  if (cmd.nonce.length <= 128) {
                    if (0 !== cmd.nonce.length) {
                      const tmp16 = asLaunched(nonce.getFrame(source.frameId));
                      _asyncToGenerator = tmp16;
                      const tmp18 = require("buildEmbeddedContext")(source);
                      let closure_4 = tmp18;
                      const value2 = map2.get(iframeId.iframeId);
                      if (null != tmp16) {
                        if (null != tmp18) {
                          if (null != value2) {
                            let pendingTicketRefreshes = self.pendingTicketRefreshes;
                            if (pendingTicketRefreshes.has(iframeId.iframeId)) {
                              return true;
                            } else {
                              nonce = cmd.nonce;
                              ({ id: RPC_EMBEDDED_APP_SCOPE, applicationId: closure_8, launchRequestId: closure_9 } = tmp16);
                              const connectedSince = tmp16.data.connectedSince;
                              let pendingTicketRefreshes2 = self.pendingTicketRefreshes;
                              pendingTicketRefreshes2.add(iframeId.iframeId);
                              _require = _asyncToGenerator(async (arg0, value) => {
                                let closure_2;
                                let obj12;
                                let obj4;
                                let obj8;
                                if (c5 === 2) {
                                  c5 = 3;
                                  throw new TypeError("Generator functions may not be called on executing generators");
                                } else if (tmp3 === 3) {
                                  if (arg0 === 1) {
                                    throw value;
                                  } else if (arg0 === 2) {
                                    const obj2 = { value, done: true };
                                    return obj2;
                                  } else {
                                    return { value: "IconComponent", done: null };
                                  }
                                } else {
                                  let c3;
                                  try {
                                    let ticket;
                                    c5 = 2;
                                    if (0 === context) {
                                      if (arg0 === 1) {
                                        c5 = 3;
                                        throw value;
                                      } else if (arg0 === 2) {
                                        c5 = 3;
                                        const obj3 = { value, done: true };
                                        return obj3;
                                      } else {
                                        postMessageToRPCClient = tmp;
                                        ticket = undefined;
                                        c3 = 2;
                                        const obj5 = { source: ticket, context, postMessageToRPCClient, version: 1, encoding: "json", logger: tmp56.logger, postClose };
                                        context = 3;
                                        c5 = 1;
                                        const obj6 = { value: tmp56.validateSocketClient(tmp56.createPostMessageProxySocket(obj5), ticket.origin, c3.applicationId), done: false };
                                        return obj6;
                                      }
                                    } else if (1 === context) {
                                      c3 = 0;
                                      const pendingTicketRefreshes5 = tmp56.pendingTicketRefreshes;
                                      pendingTicketRefreshes5.delete(ticket.iframeId);
                                      throw tmp56;
                                    } else {
                                      if (2 === context) {
                                        c3 = 1;
                                        if (constants()) {
                                          const items = [postMessageToRPCClient(self[8]).FRAME, ];
                                          const obj7 = { cmd: constants2.REQUEST_PROXY_TICKET_REFRESH, nonce, evt: "ERROR", data: obj8 };
                                          obj8 = { code: constants.UNKNOWN_ERROR, message: "Could not renew the app session" };
                                          items[1] = obj7;
                                          postMessageToRPCClient(items, ticket.origin);
                                        }
                                      } else if (3 === context) {
                                        if (arg0 === 1) {
                                          c5 = 3;
                                          throw value;
                                        } else if (arg0 === 2) {
                                          c3 = 0;
                                          const pendingTicketRefreshes3 = tmp56.pendingTicketRefreshes;
                                          pendingTicketRefreshes3.delete(ticket.iframeId);
                                          c5 = 3;
                                          const obj9 = { value, done: true };
                                          return obj9;
                                        } else if (constants()) {
                                          context = 4;
                                          c5 = 1;
                                          const obj10 = { value: obj4.createProxyTicket(c3.applicationId, postMessageToRPCClient(self[17])(context.surface), context.surface.type), done: false };
                                          obj4 = ticket(self[16]);
                                          return obj10;
                                        } else {
                                          c3 = 0;
                                          const pendingTicketRefreshes2 = tmp56.pendingTicketRefreshes;
                                          pendingTicketRefreshes2.delete(ticket.iframeId);
                                          c5 = 3;
                                          return { value: "IconComponent", done: null };
                                        }
                                      } else if (arg0 === 1) {
                                        c5 = 3;
                                        throw value;
                                      } else if (arg0 === 2) {
                                        c3 = 0;
                                        const pendingTicketRefreshes = tmp56.pendingTicketRefreshes;
                                        pendingTicketRefreshes.delete(ticket.iframeId);
                                        c5 = 3;
                                        const obj11 = { value, done: true };
                                        return obj11;
                                      } else {
                                        ticket = value;
                                        if (constants()) {
                                          const items1 = [postMessageToRPCClient(self[8]).FRAME, ];
                                          const obj = { cmd: constants2.REQUEST_PROXY_TICKET_REFRESH, nonce, evt: null, data: obj12 };
                                          obj12 = { ticket };
                                          items1[1] = obj;
                                          postMessageToRPCClient(items1, ticket.origin);
                                        }
                                        c3 = 1;
                                      }
                                      c3 = 0;
                                      const pendingTicketRefreshes4 = tmp56.pendingTicketRefreshes;
                                      pendingTicketRefreshes4.delete(ticket.iframeId);
                                      c5 = 3;
                                      return { value: "IconComponent", done: null };
                                    }
                                  } catch (tmp56) {
                                    if (0 === c3) {
                                      c5 = 3;
                                      throw tmp56;
                                    } else if (1 === tmp58) {
                                      context = 1;
                                    } else {
                                      context = 2;
                                    }
                                  }
                                }
                              });
                              refresh();
                              return true;
                            }
                          }
                        }
                      }
                      return true;
                    }
                  }
                }
              }
              return true;
            }
          }
        }
      }
    }
    return false;
  }
}
const prototype = PostMessageTransport.prototype;
let result = size.fileFinishedImporting("modules/rpc/transports/PostMessageTransport.tsx");

export default PostMessageTransport;
