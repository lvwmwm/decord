// Module ID: 10483
// Function ID: 81190
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4031, 653, 10485, 10484, 10495, 2, 6, 7, 653, 22, 10485, 2, 7, 6, 15, 17]

// Module 10483 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import closure_6 from "_getPrototypeOf";
import _inherits from "_inherits";
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG";
import ME from "ME";
import module_10485 from "module_10485";
import { RPC_EMBEDDED_APP_SCOPE } from "module_10484";
import BaseSocket from "BaseSocket";
import _getPrototypeOf from "_getPrototypeOf";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ AnalyticEvents: closure_12, ComponentActions: closure_13, RPCCloseCodes: closure_14, RPCErrors: closure_15 } = BaseSocket);
let closure_16 = 10 * require("result2").Millis.SECOND;
const map = new Map();
const set = new Set();
function postClose(origin, arg1, postMessageToRPCClient) {
  const items = [importDefault(dependencyMap[11]).CLOSE, arg1];
  postMessageToRPCClient(items, origin);
}
const result = _getPrototypeOf.fileFinishedImporting("modules/rpc/transports/PostMessageTransport.tsx");

export default (EventEmitter) => {
  class PostMessageTransport {
    constructor(arg0, arg1, arg2, arg3) {
      self = this;
      tmp = _possibleConstructorReturn(this, PostMessageTransport);
      obj = RPC_SCOPE_CONFIG(PostMessageTransport);
      tmp2 = _inherits;
      if (closure_20()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = RPC_SCOPE_CONFIG;
        constructResult = Reflect.construct(obj, [], RPC_SCOPE_CONFIG(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      PostMessageTransport = tmp2Result;
      tmp2Result.disconnectSocket = (close, message) => {
        let flag = arg2;
        if (arg2 === undefined) {
          flag = false;
        }
        let tmp2;
        if (!flag) {
          tmp2 = message;
        }
        close.emit("disconnect", close, tmp2);
        message = message.message;
        let str = "Unknown";
        if (null != message) {
          str = message;
        }
        close.close(message.code, str);
        let found = Array.from(map.entries()).find((arg0) => {
          let tmp;
          [, tmp] = arg0;
          return tmp === arg0;
        });
        if (null == found) {
          found = [null, null];
        }
        const first = callback3(found, 1)[0];
        if (null != first) {
          map.delete(first);
        }
      };
      tmp2Result.handleIFrameMount = (id) => {
        set.add(id.id);
        tmp2Result.handshakeFailureTimeoutId = setTimeout(() => {
          const selfEmbeddedActivities = selfEmbeddedActivities.getSelfEmbeddedActivities();
          const item = Array.from(selfEmbeddedActivities.entries()).forEach((arg0) => {
            let tmp;
            let tmp2;
            [tmp, tmp2] = arg0;
            let obj = callback2(closure_2[12]);
            obj = { application_id: tmp, channel_id: callback(closure_2[13]).getEmbeddedActivityLocationChannelId(tmp2.location) };
            const obj3 = callback(closure_2[13]);
            obj.guild_id = callback(closure_2[13]).getEmbeddedActivityLocationGuildId(tmp2.location);
            obj.timeout_ms = closure_16;
            obj.track(constants.ACTIVITY_HANDSHAKE_TIMED_OUT, obj);
          });
        }, closure_16);
      };
      tmp2Result.handleIFrameUnmount = (id) => {
        id = id.id;
        set.delete(id);
        let found = Array.from(map.entries()).find((arg0) => {
          let tmp;
          [, tmp] = arg0;
          return tmp.frameId === id;
        });
        if (null == found) {
          found = [null, null];
        }
        const tmp2 = callback3(found, 2);
        const first = tmp2[0];
        if (tmp5) {
          const obj = { code: constants.CLOSE_NORMAL, message: "iFrame gone" };
          tmp2Result.disconnectSocket(tmp4, obj, true);
          map.delete(first);
        }
      };
      tmp2Result.handleMessage = (arg0, arg1, arg2) => {
        const value = map.get(arg1);
        tmp2Result.routeEvent(value, arg1, arg0, arg2);
      };
      tmp2Result.handleFrame = (arg0, origin) => {
        if (arg0 !== origin.origin) {
          let tmp17 = callback(closure_2[14]);
          const obj = { closeCode: constants.INVALID_ORIGIN };
          const prototype = tmp17.prototype;
          tmp17 = new tmp17(obj, "Origin has changed");
          throw tmp17;
        } else {
          if ("string" === typeof arg2) {
            const _JSON = JSON;
            let parsed = JSON.parse(arg2);
          } else {
            parsed = arg2;
          }
          if (null != tmp2Result.onFrameHandled) {
            tmp2Result.onFrameHandled(tmp4, tmp2Result.logger, tmp);
          }
          tmp2Result.emit("request", tmp, parsed);
        }
      };
      tmp2Result.handleHandshake = () => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback2(tmp);
        return function() {
          return callback(...arguments);
        };
      }();
      tmp2Result.handleClose = () => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback2(tmp);
        return function() {
          return callback(...arguments);
        };
      }();
      ComponentDispatch = PostMessageTransport(closure_2[18]).ComponentDispatch;
      subscription = ComponentDispatch.subscribe(closure_13.IFRAME_MOUNT, tmp2Result.handleIFrameMount);
      ComponentDispatch2 = PostMessageTransport(closure_2[18]).ComponentDispatch;
      subscription1 = ComponentDispatch2.subscribe(closure_13.IFRAME_UNMOUNT, tmp2Result.handleIFrameUnmount);
      tmp2Result.validateSocketClient = EventEmitter;
      tmp2Result.logger = arg1;
      tmp2Result.createPostMessageProxySocket = arg2;
      tmp2Result.onFrameHandled = arg3;
      return tmp2Result;
    }
  }
  const arg1 = PostMessageTransport;
  callback2(PostMessageTransport, EventEmitter);
  const items = [
    {
      key: "routeEvent",
      value(arg0, arg1, arg2, arg3) {
        const self = this;
        if (Array.isArray(arg2)) {
          const tmp2 = callback2(arg2, 2);
          const first = tmp2[0];
          if (callback(closure_2[11]).HANDSHAKE === first) {
            if (null != arg0) {
              let tmp40 = callback(closure_2[14]);
              let obj = { closeCode: constants2.CLOSE_UNSUPPORTED };
              const prototype4 = tmp40.prototype;
              tmp40 = new tmp40(obj, "Already connected");
              throw tmp40;
            } else {
              return self.handleHandshake(arg1, tmp4, arg3);
            }
          } else if (callback(closure_2[11]).FRAME === first) {
            if (null == arg0) {
              let tmp29 = callback(closure_2[14]);
              obj = { closeCode: constants2.CLOSE_UNSUPPORTED };
              const prototype3 = tmp29.prototype;
              tmp29 = new tmp29(obj, "Not connected");
              throw tmp29;
            } else {
              return self.handleFrame(arg1, arg0, tmp4);
            }
          } else if (callback(closure_2[11]).CLOSE === first) {
            if (null == arg0) {
              let tmp19 = callback(closure_2[14]);
              const obj1 = { closeCode: constants2.CLOSE_UNSUPPORTED };
              const prototype2 = tmp19.prototype;
              tmp19 = new tmp19(obj1, "Not connected");
              throw tmp19;
            } else {
              return self.handleClose(arg0, tmp4);
            }
          } else {
            let tmp9 = callback(closure_2[14]);
            obj = { closeCode: constants2.CLOSE_UNSUPPORTED };
            const prototype = tmp9.prototype;
            tmp9 = new tmp9(obj, "Invalid opcode");
            throw tmp9;
          }
        }
      }
    }
  ];
  return callback(PostMessageTransport, items);
}(require("_possibleConstructorReturn").EventEmitter);
