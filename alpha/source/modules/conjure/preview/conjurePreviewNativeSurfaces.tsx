// Module ID: 11112
// Function ID: 11113
// Name: conjurePreviewNativeSurfaces
// Dependencies: [6984, 1072, 11113, 11117, 11118, 9491, 2]
// Exports: beginNativeSurfaceSessionForFrame, holdPreviewGameCaptureAnswers

// Module 11112 (conjurePreviewNativeSurfaces)
import Constants from "Constants" /* 1072 */;
import RpcCommandInterception from "RpcCommandInterception" /* 9491 */;
import FramesStore from "FramesStore" /* 6984 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0;

function asString(str) {
  let tmp;
  if (typeof str === "string") {
    if ("" !== str) {
      tmp = str;
    }
  }
  return tmp;
}
function menuOptionIds(items, items2) {
  items = items2;
  if (items2 === undefined) {
    items = [];
  }
  if (Array.isArray(items)) {
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp6 = nextResult;
      if (items.length >= 40) {
        iter.return();
        break;
      } else {
        if (null != tmp6) {
          if (typeof tmp6 === "object") {
            let tmp17 = asString(tmp6.id);
            if (null != tmp17) {
              let arr = items.push(tmp18);
            }
            let tmp13 = menuOptionIds(tmp6.items, items);
          }
        }
        continue;
      }
      return items;
    }
  } else {
    return items;
  }
}
function answerFor(cmd) {
  let answered;
  let obj4;
  let options;
  let prop;
  let result;
  let subject;
  let tmp3;
  let tmp9Result;
  _require = cmd;
  const found = closure_8.find((iframeId) => iframeId.iframeId === cmd.iframeId);
  let applicationId;
  if (cmd.cmd === RPCCommands.CAPTURE_SCREEN) {
    const frameByIframeId = FramesStore.getFrameByIframeId(cmd.iframeId);
    applicationId = undefined;
    if (frameByIframeId != null) {
      applicationId = frameByIframeId.applicationId;
    }
    let tmp8 = null;
    if (null != applicationId) {
      obj = require("conjurePreviewGameCapture");
      tmp8 = null;
      if (obj.hasConjurePreviewGameCapture(applicationId)) {
        let obj3;
        if (cmd.cmd === RPCCommands.CAPTURE_SCREEN) {
          let obj2 = { result: tmp9Result.readConjurePreviewGameCapture(applicationId), answered: "returned the selected game capture" };
          obj3 = obj2;
          tmp9Result = require("conjurePreviewGameCapture");
        } else {
          obj3 = { result: obj4, answered: "screen capture allowed for the selected game capture" };
          obj4 = {
            permissions: prop.map((permission) => {
                      let conjureDevicePermissionStatus;
                      if ("screen_capture" === permission) {
                        conjureDevicePermissionStatus = { permission, state: "granted" };
                        const obj2 = { permission, state: "granted" };
                      } else {
                        obj = applicationId(dependencyMap[4]);
                        conjureDevicePermissionStatus = obj.getConjureDevicePermissionStatus(applicationId, permission);
                      }
                      return conjureDevicePermissionStatus;
                    })
          };
          prop = tmp9(11117).CONJURE_DEVICE_PERMISSION_NAMES;
        }
        tmp8 = obj3;
      }
    }
    tmp3 = tmp8;
  } else {
    tmp3 = null;
  }
  if (tmp3 == null) {
    let tmp11 = null;
    if (null != found) {
      let tmp12Result;
      if (obj[cmd.cmd] != null) {
        tmp12Result = tmp12(cmd);
      }
      if (tmp12Result == null) {
        tmp12Result = null;
      }
      tmp11 = tmp12Result;
    }
    tmp3 = tmp11;
  }
  if (null == tmp3) {
    return null;
  } else {
    ({ options, subject } = tmp3);
    let tmp14 = null != found;
    ({ result, answered } = tmp3);
    if (tmp14) {
      tmp14 = cmd.cmd !== tmp2.GET_DEVICE_PERMISSIONS;
    }
    if (tmp14) {
      tmp14 = found.recorded.length < 20;
    }
    if (tmp14) {
      const recorded = found.recorded;
      const obj5 = { command: cmd.cmd, answered };
      if (null != options) {
        let obj9;
        let obj8;
        if (options.length > 0) {
          obj9 = { options };
          const obj6 = { options };
        }
        const merged = Object.assign(obj9);
        if (null != subject) {
          obj8 = { subject };
          const obj7 = { subject };
        } else {
          obj8 = {};
        }
        const merged1 = Object.assign(obj8);
        tmp15(obj5);
      }
      obj9 = {};
    }
    return { result };
  }
}
const RPCCommands = Constants.RPCCommands;
let obj = {
  [RPCCommands.OPEN_CONTEXT_MENU]: (args) => {
    if ("custom" !== args.args.type) {
      obj = { result: { opened: true }, answered: "opened, no selection to make" };
      const obj2 = { result: { opened: true }, answered: "opened, no selection to make" };
    } else {
      obj = { result: { opened: true, selected_id: null }, answered: "dismissed", options: menuOptionIds(args.args.items) };
    }
    return obj;
  },
  [RPCCommands.SHOW_CONFIRM_MODAL]: (args) => {
    let tmp;
    const title = args.args.title;
    obj = { result: "confirm" === args.args.type ? { confirmed: false } : { acknowledged: false }, answered: "dismissed", subject: tmp };
    tmp = undefined;
    if (typeof title === "string") {
      if ("" !== title) {
        tmp = title;
      }
    }
    return obj;
  },
  [RPCCommands.OPEN_EXTERNAL_LINK]: (args) => {
    let tmp;
    const url = args.args.url;
    obj = { result: { opened: false }, answered: "cancelled \u2014 an agent may not open external links", subject: tmp };
    tmp = undefined;
    if (typeof url === "string") {
      if ("" !== url) {
        tmp = url;
      }
    }
    return obj;
  },
  [RPCCommands.SHARE_CONTENT]: (args) => {
    let tmp;
    const preview_title = args.args.preview_title;
    obj = { result: { success: false, didCopyLink: false, didSendMessage: false }, answered: "closed without sharing \u2014 an agent may not send a message for the user", subject: tmp };
    tmp = undefined;
    if (typeof preview_title === "string") {
      if ("" !== preview_title) {
        tmp = preview_title;
      }
    }
    if (tmp == null) {
      const content = args.args.content;
      let tmp2;
      if (typeof content === "string") {
        if ("" !== content) {
          tmp2 = content;
        }
      }
      tmp = tmp2;
    }
    return obj;
  },
  [RPCCommands.REQUEST_DEVICE_PERMISSIONS]: (args) => {
    let found;
    const f99632 = (permission) => ({ permission, state: "denied" });
    if (Array.isArray(args.args.permissions)) {
      const permissions = args.args.permissions;
      found = permissions.filter((item) => typeof item === "string");
    } else {
      found = [];
    }
    obj = { result: { permissions: found.map(f99632) }, answered: "denied; an agent may not grant device access", options: found };
    ({ permissions: found.map(f99632) });
    return obj;
  },
  [RPCCommands.CAPTURE_SCREEN]: () => ({ result: { status: "permission_denied" }, answered: "denied; an agent may not capture the screen" }),
  [RPCCommands.SELECT_VOICE_CHANNEL]: (args) => {
    const channel_id = args.args.channel_id;
    let subject;
    if (typeof channel_id === "string") {
      if ("" !== channel_id) {
        subject = channel_id;
      }
    }
    return { result: null, answered: "not joined; an agent may not move the user in or out of voice", subject };
  },
  [RPCCommands.OPEN_USER_PROFILE]: () => ({ result: { opened: true }, answered: "opened" }),
  [RPCCommands.OPEN_USER_POPOUT]: () => ({ result: { opened: true }, answered: "opened" }),
  [RPCCommands.OPEN_GAME_PROFILE]: () => ({ result: { opened: true }, answered: "opened" }),
  [RPCCommands.SHOW_TOOLTIP]: () => ({ result: { shown: true }, answered: "shown" }),
  [RPCCommands.HIDE_TOOLTIP]: () => ({ result: { hidden: true }, answered: "hidden" }),
  [RPCCommands.OPEN_MEDIA_VIEWER]: () => ({ result: { opened: true }, answered: "opened" }),
  [RPCCommands.SHOW_TOAST]: () => ({ result: { shown: true }, answered: "shown" }),
  [RPCCommands.OPEN_INVITE_DIALOG]: () => ({ result: "id", answered: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000406775211 }),
  [RPCCommands.OPEN_SHARE_MOMENT_DIALOG]: () => ({ result: "id", answered: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000406775211 })
};
let closure_7 = {
  drain() {
    return [];
  },
  end() {

  },
  iframeId: null
};
let closure_8 = [];
let closure_10 = 0;
const keys = Object.keys(obj);
let result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewNativeSurfaces.tsx");

export const ANSWERED_NATIVE_COMMANDS = keys;
export function beginNativeSurfaceSessionForFrame(iframeId, beneathBatches) {
  if (null == iframeId) {
    return closure_7;
  } else {
    let arr;
    let tmp10;
    const obj2 = { iframeId, recorded: [] };
    beneathBatches = undefined;
    if (beneathBatches != null) {
      beneathBatches = beneathBatches.beneathBatches;
    }
    if (true === beneathBatches) {
      closure_8.push(obj2);
      arr = closure_8;
    } else {
      closure_8.unshift(obj2);
      arr = closure_8;
    }
    let tmp7 = dependencyMap;
    let setRpcCommandInterceptor = obj2(9491).setRpcCommandInterceptor;
    obj2(9491);
    if (arr.length > 0) {
      tmp10 = answerFor;
    } else {
      tmp10 = null;
    }
    let result = setRpcCommandInterceptor(tmp10);
    return {
      iframeId,
      drain() {
          const recorded = obj2.recorded;
          return recorded.splice(0, obj2.recorded.length);
        },
      end() {
          const index = closure_8.indexOf(obj2);
          if (-1 !== index) {
            let tmp7;
            closure_8.splice(index, 1);
            const setRpcCommandInterceptor = RpcCommandInterception.setRpcCommandInterceptor;
            RpcCommandInterception;
            if (closure_8.length > 0) {
              tmp7 = answerFor;
            } else {
              tmp7 = null;
            }
            const result = setRpcCommandInterceptor(tmp7);
          }
        }
    };
  }
}
export function holdPreviewGameCaptureAnswers() {
  let tmp3;
  closure_10 = closure_10 + 1;
  let tmp = require("RpcCommandInterception");
  let setRpcCommandInterceptor = tmp.setRpcCommandInterceptor;
  if (length.length > 0) {
    tmp3 = answerFor;
  } else {
    tmp3 = null;
  }
  let result = setRpcCommandInterceptor(tmp3);
  _require = false;
  return () => {
    const tmp = c0;
    if (!tmp) {
      let tmp8;
      c0 = true;
      closure_10 = closure_10 - 1;
      const setRpcCommandInterceptor = RpcCommandInterception.setRpcCommandInterceptor;
      RpcCommandInterception;
      if (length.length > 0) {
        tmp8 = answerFor;
      } else {
        tmp8 = null;
      }
      const result = setRpcCommandInterceptor(tmp8);
    }
  };
}
