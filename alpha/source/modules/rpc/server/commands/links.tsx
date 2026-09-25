// Module ID: 14019
// Function ID: 14020
// Name: links
// Dependencies: [5, 2043, 5056, 4735, 1074, 2004, 13999, 14020, 1364, 4823, 1241, 8819, 4455, 14021, 4516, 7810, 14022, 8762, 8765, 8767, 6795, 14014, 8313, 14023, 2]

// Module 14019 (links)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4455 */;
import CrossPlatformNativeUtilsDefault from "CrossPlatformNativeUtils" /* 4823 */;
import RPCErrorDefault from "RPCError" /* 8762 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 8765 */;
import RPCHelpers from "RPCHelpers" /* 8767 */;
import validateEmbeddedAppFrame from "validateEmbeddedAppFrame" /* 13999 */;
import fetchIsLinkTrusted from "fetchIsLinkTrusted" /* 14021 */;
import openActivityShareLinkModal from "openActivityShareLinkModal" /* 14023 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2043 */;
import ApplicationStore from "ApplicationStore" /* 5056 */;

const openUserSettings = tmp(6795);
const ApplicationFlagUtils = tmp(8313);
require = fn;
let closure_13 = async function _openExternalLink(arg0, value) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
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
          let application = tmp3;
          dependencyMap = tmp5;
          closure_130_0 = closure_0;
          closure_130_1 = closure_1;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          let embeddedActivityLocationChannelId;
          let internalDeepLink = null;
          if (null != obj18.tryValidateEmbeddedAppFrame(closure_0)) {
            internalDeepLink = tmp84(14020).resolveInternalDeepLink(tmp83);
            const tmp84Result = tmp84(14020);
          }
          if (null != internalDeepLink) {
            if (tmp84(1364).isPlatformEmbedded) {
              CrossPlatformNativeUtilsDefault.focus(null, true);
            }
            if (tmp84Result5.openInternalDeepLink(internalDeepLink)) {
              const application3 = tmp82.application;
              let id;
              if (application3 != null) {
                id = application3.id;
              }
              const obj4 = { application_id: id, url: tmp83, opened: true };
              AnalyticsUtilsDefault.track(constants2.RPC_OPEN_EXTERNAL_LINK_CALLED, obj4);
              c7 = 3;
              const obj5 = { value: { opened: true }, done: true };
              return obj5;
            }
            tmp84Result5 = tmp84(14020);
          }
          currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
          c5 = 1;
          const _URL = URL;
          const str = new URL(closure_1);
          const str1 = str.toString();
          closure_130_2 = str1;
          if (PlatformUtils.isPlatformEmbedded) {
            let ACTIVITY_POPOUT = null;
            if (tmp84Result6.shouldOpenActivityInPopoutWindow()) {
              ACTIVITY_POPOUT = constants.ACTIVITY_POPOUT;
            }
            tmp84Result6 = tmp84(8819);
            CrossPlatformNativeUtilsDefault.focus(ACTIVITY_POPOUT, true);
          }
          const application2 = tmp82.application;
          let id1;
          if (application2 != null) {
            id1 = application2.id;
          }
          const application1 = application.getApplication(id1);
          closure_130_3 = application1;
          obj18 = validateEmbeddedAppFrame;
          let _location;
          if (currentEmbeddedActivity != null) {
            _location = currentEmbeddedActivity.location;
          }
          embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
          const tmp84Result7 = embeddedActivityLocationUtils;
          let id2;
          if (application1 != null) {
            id2 = application1.id;
          }
          c6 = 2;
          c7 = 1;
          const obj7 = { value: fetchIsLinkTrusted.fetchIsLinkTrusted(id2, str1), done: false };
          return obj7;
        }
      } else if (1 === tmp8) {
        c5 = 0;
        const obj8 = { errorCode: closure_131_8.INVALID_COMMAND };
        const _HermesInternal = HermesInternal;
        const tmp312 = new closure_131_1(closure_131_2[17])(obj8, "Invalid URL: " + closure_130_1);
        throw tmp312;
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj10 = { value, done: true };
        return obj10;
      } else {
        if (value) {
          closure_131_1(closure_131_2[14])(closure_130_2);
          application = closure_130_0.application;
          let id3;
          if (application != null) {
            id3 = application.id;
          }
          const obj11 = { application_id: id3, url: closure_130_2, opened: true };
          closure_131_1(closure_131_2[10]).track(closure_131_10.RPC_OPEN_EXTERNAL_LINK_CALLED, obj11);
          const resolved = Promise.resolve({ opened: true });
          let obj = closure_131_1(closure_131_2[10]);
        } else {
          new Promise((arg0) => {
            closure_0 = arg0;
            const obj = closure_1_0(7810);
            const obj2 = {
              href: dependencyMap,
              shouldConfirm: true,
              onClick() {
                return false;
              },
              onConfirm() {
                closure_1(4516)(dependencyMap);
                application = closure_2_0.application;
                let id;
                if (application != null) {
                  id = application.id;
                }
                closure_1(1241).track(constants.RPC_OPEN_EXTERNAL_LINK_CALLED, { application_id: id, url: dependencyMap, opened: true });
                closure_0({ opened: true });
              },
              onCancel() {
                application = closure_2_0.application;
                let id;
                if (application != null) {
                  id = application.id;
                }
                closure_1(1241).track(constants.RPC_OPEN_EXTERNAL_LINK_CALLED, { application_id: id, url: dependencyMap, opened: false });
                closure_0({ opened: false });
              }
            };
            return obj.handleClick(obj2, undefined, undefined, closure_1_0(14022).getActivitiesModalContextKey({ application, channelId }));
          });
        }
        c5 = 0;
        c7 = 3;
      }
    } catch (tmp72) {
      const channelId = tmp72;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp72;
      } else {
        c6 = tmp;
      }
    }
  }
};
let Constants = fn(4735);
({ RPC_AUTHENTICATED_SCOPE, RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = Constants);
Constants = fn(1074);
({ ApplicationFlags: metroRequire, PopoutWindowKeys: closure_7, RPCCommands, RPCErrors: closure_8, UserSettingsSections: closure_9, AnalyticEvents: c10 } = Constants);
Constants = fn(2004);
const items = [, ];
({ AM_HARMONY_PRD_APPLICATION_ID: arr[0], AM_HARMONY_STG_APPLICATION_ID: arr[1] } = Constants);
const set = new Set(items);
const weakMap = new WeakMap();
let obj = { [RPCCommands.OPEN_EXTERNAL_LINK]: obj2, [RPCCommands.NAVIGATE_TO_CONNECTIONS]: obj3 };
obj2 = {
  scope: null,
  validation(string) {
    const obj = createRpcJoiSchemaObjectDefault(string);
    const obj2 = { url: null };
    const requiredResult = createRpcJoiSchemaObjectDefault(string).required();
    obj2.url = string.string().required();
    return requiredResult.keys(obj2);
  },
  handler(socket) {
    socket = socket.socket;
    const url = socket.args.url;
    return (async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp6;
              closure_129_0 = undefined;
              const result = socket(c2[19]).validatePostMessageTransport(socket.transport);
              value = weakMap.get(socket);
              socket = value;
              if (value == null) {
                socket = { inFlight: false, readyAt: 0 };
              }
              closure_129_0 = socket;
              if (!socket.inFlight) {
                const _Date4 = Date;
                if (Date.now() >= tmp18.readyAt) {
                  tmp18.inFlight = true;
                  const result1 = weakMap.set(tmp32, tmp18);
                  c4 = 1;
                  c2 = 2;
                  c5 = 1;
                  const obj4 = {
                    value: (function openExternalLink() {
                                  const self = this;
                                  const apply = closure_1_13.apply;
                                  if (typeof apply === "unknown") {
                                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                  } else {
                                    applyArgumentsResult = apply(self, arguments);
                                  }
                                  return applyArgumentsResult;
                                })(tmp32, url),
                    done: false
                  };
                  return obj4;
                }
              }
              c5 = 3;
              const obj5 = { value: { opened: false }, done: true };
              return obj5;
            }
          } else if (1 === tmp6) {
            c4 = 0;
            closure_129_0.inFlight = false;
            const _Date3 = Date;
            closure_129_0.readyAt = Date.now() + 1000;
            throw closure_3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_129_0.inFlight = false;
            const _Date2 = Date;
            closure_129_0.readyAt = Date.now() + 1000;
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c4 = 0;
            closure_129_0.inFlight = false;
            const _Date = Date;
            closure_129_0.readyAt = Date.now() + 1000;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp21) {
          closure_3 = tmp21;
          if (tmp3 === c4) {
            c5 = tmp2;
            throw tmp21;
          } else {
            c2 = tmp;
          }
        }
      }
    })();
  }
};
const items1 = [RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE];
obj2.scope = { [RPC_SCOPE_CONFIG.ANY]: items1 };
obj3 = {
  validation(arg0) {
    return createRpcJoiSchemaObjectDefault(arg0);
  },
  scope: null,
  handler(socket) {
    socket = socket.socket;
    const result = RPCHelpers.validatePostMessageTransport(socket.transport);
    if (set.has(obj2.validateApplication(socket.application))) {
      const obj3 = { screen: constants3.CONNECTIONS };
      openUserSettings.openUserSettings(obj3);
    } else {
      const obj4 = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
      const tmp9 = new RPCErrorDefault(obj4, "Command not available for this application");
      throw tmp9;
    }
    obj2 = RPCHelpers;
  }
};
const items2 = [RPC_AUTHENTICATED_SCOPE];
obj3.scope = { [RPC_SCOPE_CONFIG.ANY]: items2 };
const CONTEXT_MENU_ICON_NAMES = fn(14014);
let obj5 = {
  scope: null,
  handler(arg0) {
    ({ socket, args } = arg0);
    ({ custom_id: require, message: importDefault, link_id: dependencyMap } = args);
    let result = RPCHelpers.validatePostMessageTransport(socket.transport);
    const validateApplicationResult = RPCHelpers.validateApplication(socket.application);
    c3 = validateApplicationResult;
    if (null == validateApplicationResult) {
      const obj3 = { errorCode: constants2.INVALID_COMMAND };
      const tmp22 = new RPCErrorDefault(obj3, "No application.");
      throw tmp22;
    } else {
      if (tmpResult.hasApplicationFlag(socket.application, constants.EMBEDDED)) {
        const promise = new Promise((arg0) => {
          closure_0 = arg0;
          const result = openActivityShareLinkModal.openActivityShareLinkModal({
            applicationId,
            customId,
            linkId,
            message,
            onShare(stateFromStores, didCopyLink) {
              let tmp2 = didCopyLink;
              if (!didCopyLink) {
                tmp2 = stateFromStores;
              }
              closure_0({ success: tmp2, didCopyLink, didSendMessage: stateFromStores });
            }
          });
        });
        return promise;
      } else {
        const obj4 = { errorCode: constants2.INVALID_COMMAND };
        const tmp10 = new RPCErrorDefault(obj4, "This application cannot access this API");
        throw tmp10;
      }
      tmpResult = ApplicationFlagUtils;
    }
  }
};
const items3 = [RPC_AUTHENTICATED_SCOPE];
obj5.scope = { [RPC_SCOPE_CONFIG.ANY]: items3 };
obj[RPCCommands.SHARE_LINK] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SHARE_LINK, obj5);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/links.tsx");

export default obj;
