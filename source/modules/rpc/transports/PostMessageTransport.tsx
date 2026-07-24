// Module ID: 10523
// Function ID: 81456
// Name: _isNativeReflectConstruct
// Dependencies: [5, 57, 6, 7, 15, 17, 18, 1347, 4033, 653, 664, 10524, 675, 3748, 10525, 10527, 1934, 10528, 1207, 631, 2]

// Module 10523 (_isNativeReflectConstruct)
import _getPrototypeOf from "_getPrototypeOf";
import _slicedToArray from "_slicedToArray";
import _inherits from "_inherits";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_inherits";
import createRpcJoiSchemaObject from "createRpcJoiSchemaObject";
import reportDevtoolsEvent from "reportDevtoolsEvent";
import closure_10 from "_createForOfIteratorHelperLoose";
import { RPC_EMBEDDED_APP_SCOPE } from "RPC_SCOPE_CONFIG";
import ME from "ME";
import set from "_classCallCheck";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ AnalyticEvents: closure_12, ComponentActions: closure_13, RPCCloseCodes: closure_14, RPCErrors: closure_15 } = ME);
let closure_16 = 10 * require("set").Millis.SECOND;
const map = new Map();
let set = new Set();
function postClose(origin, arg1, postMessageToRPCClient) {
  const items = [importDefault(10524).CLOSE, arg1];
  postMessageToRPCClient(items, origin);
}
let result = set.fileFinishedImporting("modules/rpc/transports/PostMessageTransport.tsx");

export default ((EventEmitter) => {
  class PostMessageTransport {
    constructor(arg0, arg1, arg2, arg3) {
      self = this;
      tmp = outer1_5(this, apply);
      obj = outer1_8(apply);
      tmp2 = outer1_7;
      if (outer1_20()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_8;
        constructResult = Reflect.construct(obj, [], outer1_8(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
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
        let found = Array.from(outer2_17.entries()).find((arg0) => {
          let tmp;
          [, tmp] = arg0;
          return tmp === closure_0;
        });
        if (null == found) {
          found = [null, null];
        }
        const first = outer2_4(found, 1)[0];
        if (null != first) {
          outer2_17.delete(first);
        }
      };
      tmp2Result.handleIFrameMount = (id) => {
        outer2_18.add(id.id);
        closure_0.handshakeFailureTimeoutId = setTimeout(() => {
          const selfEmbeddedActivities = outer3_10.getSelfEmbeddedActivities();
          const item = Array.from(selfEmbeddedActivities.entries()).forEach((arg0) => {
            let tmp;
            let tmp2;
            [tmp, tmp2] = arg0;
            let obj = outer4_1(outer4_2[12]);
            obj = { application_id: tmp, channel_id: PostMessageTransport(outer4_2[13]).getEmbeddedActivityLocationChannelId(tmp2.location) };
            const obj3 = PostMessageTransport(outer4_2[13]);
            obj.guild_id = PostMessageTransport(outer4_2[13]).getEmbeddedActivityLocationGuildId(tmp2.location);
            obj.timeout_ms = outer4_16;
            obj.track(outer4_12.ACTIVITY_HANDSHAKE_TIMED_OUT, obj);
          });
        }, outer2_16);
      };
      tmp2Result.handleIFrameUnmount = (id) => {
        id = id.id;
        outer2_18.delete(id);
        let found = Array.from(outer2_17.entries()).find((arg0) => {
          let tmp;
          [, tmp] = arg0;
          return tmp.frameId === id;
        });
        if (null == found) {
          found = [null, null];
        }
        const tmp2 = outer2_4(found, 2);
        const first = tmp2[0];
        if (tmp5) {
          const obj = { code: outer2_14.CLOSE_NORMAL, message: "iFrame gone" };
          id.disconnectSocket(tmp4, obj, true);
          outer2_17.delete(first);
        }
      };
      tmp2Result.handleMessage = (arg0, arg1, arg2) => {
        const value = outer2_17.get(arg1);
        tmp2Result.routeEvent(value, arg1, arg0, arg2);
      };
      tmp2Result.handleFrame = (arg0, origin) => {
        if (arg0 !== origin.origin) {
          let tmp17 = outer2_1(outer2_2[14]);
          const obj = { closeCode: outer2_14.INVALID_ORIGIN };
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
      tmp2Result.handleHandshake = (() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = outer2_3(tmp);
        return function() {
          return callback(...arguments);
        };
      })();
      tmp2Result.handleClose = (() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = outer2_3(tmp);
        return function() {
          return callback(...arguments);
        };
      })();
      ComponentDispatch = PostMessageTransport(outer1_2[18]).ComponentDispatch;
      subscription = ComponentDispatch.subscribe(outer1_13.IFRAME_MOUNT, tmp2Result.handleIFrameMount);
      ComponentDispatch2 = PostMessageTransport(outer1_2[18]).ComponentDispatch;
      subscription1 = ComponentDispatch2.subscribe(outer1_13.IFRAME_UNMOUNT, tmp2Result.handleIFrameUnmount);
      tmp2Result.validateSocketClient = EventEmitter;
      tmp2Result.logger = arg1;
      tmp2Result.createPostMessageProxySocket = arg2;
      tmp2Result.onFrameHandled = arg3;
      return tmp2Result;
    }
  }
  callback2(PostMessageTransport, EventEmitter);
  const items = [
    {
      key: "routeEvent",
      value(arg0, arg1, arg2, arg3) {
        const self = this;
        if (Array.isArray(arg2)) {
          const tmp2 = outer1_4(arg2, 2);
          const first = tmp2[0];
          if (outer1_1(outer1_2[11]).HANDSHAKE === first) {
            if (null != arg0) {
              let tmp40 = outer1_1(outer1_2[14]);
              let obj = { closeCode: outer1_14.CLOSE_UNSUPPORTED };
              const prototype4 = tmp40.prototype;
              tmp40 = new tmp40(obj, "Already connected");
              throw tmp40;
            } else {
              return self.handleHandshake(arg1, tmp4, arg3);
            }
          } else if (outer1_1(outer1_2[11]).FRAME === first) {
            if (null == arg0) {
              let tmp29 = outer1_1(outer1_2[14]);
              obj = { closeCode: outer1_14.CLOSE_UNSUPPORTED };
              const prototype3 = tmp29.prototype;
              tmp29 = new tmp29(obj, "Not connected");
              throw tmp29;
            } else {
              return self.handleFrame(arg1, arg0, tmp4);
            }
          } else if (outer1_1(outer1_2[11]).CLOSE === first) {
            if (null == arg0) {
              let tmp19 = outer1_1(outer1_2[14]);
              const obj1 = { closeCode: outer1_14.CLOSE_UNSUPPORTED };
              const prototype2 = tmp19.prototype;
              tmp19 = new tmp19(obj1, "Not connected");
              throw tmp19;
            } else {
              return self.handleClose(arg0, tmp4);
            }
          } else {
            let tmp9 = outer1_1(outer1_2[14]);
            obj = { closeCode: outer1_14.CLOSE_UNSUPPORTED };
            const prototype = tmp9.prototype;
            tmp9 = new tmp9(obj, "Invalid opcode");
            throw tmp9;
          }
        }
      }
    }
  ];
  return callback(PostMessageTransport, items);
})(require("EventEmitter").EventEmitter);
