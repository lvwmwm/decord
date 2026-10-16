// Module ID: 15435
// Function ID: 15436
// Name: links
// Dependencies: [5, 2067, 5502, 5857, 1087, 2026, 4798, 1384, 15436, 15405, 15437, 5148, 1267, 15438, 4859, 8717, 15439, 11250, 15422, 11259, 11253, 7317, 2032, 15440, 2]

// Module 15435 (links)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4798 */;
import CrossPlatformNativeUtilsDefault from "CrossPlatformNativeUtils" /* 5148 */;
import RPCErrorDefault from "RPCError" /* 11250 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 11253 */;
import RPCHelpers from "RPCHelpers" /* 11259 */;
import validateEmbeddedAppFrame from "validateEmbeddedAppFrame" /* 15405 */;
import getEmbeddedActivityPopoutWindowKeyDefault from "getEmbeddedActivityPopoutWindowKey" /* 15436 */;
import internalDeepLinks from "internalDeepLinks" /* 15437 */;
import fetchIsLinkTrusted2 from "fetchIsLinkTrusted" /* 15438 */;
import openActivityShareLinkModal from "openActivityShareLinkModal" /* 15440 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2067 */;
import ApplicationStore from "ApplicationStore" /* 5502 */;
import Constants_mod from "Constants" /* 5857 */;
import Constants_mod2 from "Constants" /* 1087 */;
import Constants_mod3 from "Constants" /* 2026 */;
import CONTEXT_MENU_ICON_NAMES_mod from "CONTEXT_MENU_ICON_NAMES" /* 15422 */;
import size from "module_2" /* 2 */;

let c2, c6, c7, currentEmbeddedActivity, getApplication;

let RPCCommands;
let RPC_AUTHENTICATED_SCOPE;
let RPC_EMBEDDED_APP_SCOPE;
let RPC_SCOPE_CONFIG;
let items1;
let items2;
let items3;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp;
const EmbeddedSurfaceUtils = tmp(2032);
const openUserSettings = tmp(7317);
let obj = function _openExternalLink() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_1;
    let closure_3;
    let tmp;
    let closure_0 = arg0;
    url = value;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        let str1;
        let self3;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            const channelId = tmp;
            let application1;
            let embeddedActivityLocationChannelId;
            str1 = undefined;
            const application3 = closure_0.application;
            let id;
            getApplication = getApplication.getApplication;
            if (application3 != null) {
              id = application3.id;
            }
            application1 = getApplication(id);
            const getEmbeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId;
            currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
            let _location;
            if (currentEmbeddedActivity != null) {
              _location = currentEmbeddedActivity.location;
            }
            embeddedActivityLocationChannelId = getEmbeddedActivityLocationChannelId(_location);
            let tmp40;
            if (PlatformUtils.isPlatformEmbedded) {
              const obj4 = { application: application1, channelId: embeddedActivityLocationChannelId };
              tmp40 = getEmbeddedActivityPopoutWindowKeyDefault(obj4);
            }
            let internalDeepLink = null;
            const tmp32Result = validateEmbeddedAppFrame;
            if (null != tmp32Result.tryValidateEmbeddedAppFrame(closure_0)) {
              const tmp32Result4 = internalDeepLinks;
              internalDeepLink = tmp32Result4.resolveInternalDeepLink(tmp73);
            }
            if (null != internalDeepLink) {
              if (null != tmp40) {
                const obj8 = CrossPlatformNativeUtilsDefault;
                obj8.focus(null, true);
              }
              const tmp32Result5 = internalDeepLinks;
              if (tmp32Result5.openInternalDeepLink(internalDeepLink)) {
                self3 = constants.RPC_OPEN_EXTERNAL_LINK_CALLED;
                const application2 = tmp72.application;
                let id1;
                const track2 = AnalyticsUtilsDefault.track;
                if (application2 != null) {
                  id1 = application2.id;
                }
                const obj5 = { application_id: id1, url, opened: true };
                track2(self3, obj5);
                c7 = 3;
                const obj6 = { value: { opened: true }, done: true };
                return obj6;
              }
            }
            c5 = 1;
            const _URL = URL;
            const self5 = this;
            const self6 = this;
            const str = new URL(url);
            str1 = str.toString();
            if (null != tmp40) {
              const obj10 = CrossPlatformNativeUtilsDefault;
              self3 = obj10.focus(tmp40, true);
            }
            self3 = undefined;
            const fetchIsLinkTrusted = fetchIsLinkTrusted2.fetchIsLinkTrusted;
            const tmp32Result6 = fetchIsLinkTrusted2;
            if (application1 != null) {
              self3 = application1.id;
            }
            c6 = 2;
            c7 = 1;
            const obj7 = { value: fetchIsLinkTrusted(self3, str1), done: false };
            return obj7;
          }
        } else if (1 === tmp4) {
          c5 = 0;
          const obj9 = { errorCode: closure_131_6.INVALID_COMMAND };
          const _HermesInternal = HermesInternal;
          self3 = this;
          const self4 = this;
          const tmp24 = closure_131_1(closure_131_2[17]);
          const tmp242 = new tmp24(obj9, "Invalid URL: " + url);
          throw tmp242;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          if (value) {
            closure_131_1(closure_131_2[14])(str1);
            let application = closure_0.application;
            let id2;
            let track = closure_131_1(closure_131_2[12]).track;
            let RPC_OPEN_EXTERNAL_LINK_CALLED = closure_131_8.RPC_OPEN_EXTERNAL_LINK_CALLED;
            const tmp12 = closure_131_1(closure_131_2[12]);
            if (application != null) {
              id2 = application.id;
            }
            obj = { application_id: id2, url: str1, opened: true };
            const trackResult = track(RPC_OPEN_EXTERNAL_LINK_CALLED, obj);
            self3 = Promise.resolve({ opened: true });
          } else {
            const self = this;
            const self2 = this;
            self3 = new Promise((arg0) => {
              closure_0 = arg0;
              let tmp = closure_1_0(application[15]);
              obj = {
                href,
                shouldConfirm: true,
                onClick() {
                  return false;
                },
                onConfirm() {
                  closure_1(self3[14])(closure_2_4);
                  application = closure_2_0.application;
                  let id;
                  const track = closure_1(self3[12]).track;
                  const RPC_OPEN_EXTERNAL_LINK_CALLED = constants.RPC_OPEN_EXTERNAL_LINK_CALLED;
                  closure_1(self3[12]);
                  const tmp = closure_2_4;
                  if (application != null) {
                    id = application.id;
                  }
                  track(RPC_OPEN_EXTERNAL_LINK_CALLED, { application_id: id, url: tmp, opened: true });
                  closure_0({ opened: true });
                },
                onCancel() {
                  application = closure_2_0.application;
                  let id;
                  const track = closure_1(self3[12]).track;
                  const RPC_OPEN_EXTERNAL_LINK_CALLED = constants.RPC_OPEN_EXTERNAL_LINK_CALLED;
                  closure_1(self3[12]);
                  if (application != null) {
                    id = application.id;
                  }
                  obj = { application_id: id, url, opened: false };
                  track(RPC_OPEN_EXTERNAL_LINK_CALLED, obj);
                  closure_0({ opened: false });
                }
              };
              const handleClick = tmp.handleClick;
              const obj2 = closure_1_0(application[16]);
              const obj3 = { application, channelId };
              return handleClick(obj, undefined, undefined, obj2.getActivitiesModalContextKey(obj3));
            });
          }
          c5 = 0;
          c7 = 3;
          const obj12 = { value: self3, done: true };
          return obj12;
        }
      } catch (tmp63) {
        let closure_4 = tmp63;
        if (0 === c5) {
          c7 = 3;
          throw tmp63;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
let Constants = Constants_mod2;
({ RPC_AUTHENTICATED_SCOPE, RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = Constants);
Constants = Constants_mod2;
({ RPCCommands, RPCErrors: metroRequire, UserSettingsSections: metroImportDefault, AnalyticEvents: metroImportAll } = Constants);
Constants = Constants_mod2;
const items = [, ];
({ AM_HARMONY_PRD_APPLICATION_ID: arr[0], AM_HARMONY_STG_APPLICATION_ID: arr[1] } = Constants);
const set = new Set(items);
const weakMap = new WeakMap();
obj = {};
const OPEN_EXTERNAL_LINK = RPCCommands.OPEN_EXTERNAL_LINK;
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj2 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items1 },
  handler(socket) {
    socket = socket.socket;
    const url = socket.args.url;
    return (async (arg0, value) => {
      let closure_0;
      function openExternalLink() {
        return closure_1_11(...arguments);
      }
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
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
              let closure_1 = tmp3;
              socket = undefined;
              const obj7 = socket(c2[19]);
              const result = obj7.validatePostMessageTransport(socket.transport);
              value = weakMap.get(socket);
              socket = value;
              const obj8 = weakMap;
              if (value == null) {
                socket = { inFlight: false, readyAt: 0 };
              }
              if (!socket.inFlight) {
                const _Date4 = Date;
                if (Date.now() >= socket.readyAt) {
                  socket.inFlight = true;
                  const result1 = obj8.set(tmp28, tmp15);
                  c4 = 1;
                  c2 = 2;
                  c5 = 1;
                  const obj4 = { value: openExternalLink(socket, url), done: false };
                  return obj4;
                }
              }
              c5 = 3;
              const obj5 = { value: { opened: false }, done: true };
              return obj5;
            }
          } else if (1 === c2) {
            c4 = 0;
            socket.inFlight = false;
            const _Date3 = Date;
            socket.readyAt = Date.now() + 1000;
            throw closure_3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            socket.inFlight = false;
            const _Date2 = Date;
            socket.readyAt = Date.now() + 1000;
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c4 = 0;
            socket.inFlight = false;
            const _Date = Date;
            socket.readyAt = Date.now() + 1000;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp18) {
          closure_3 = tmp18;
          if (0 === c4) {
            c5 = 3;
            throw tmp18;
          } else {
            c2 = 1;
          }
        }
      }
    })();
  }
};
items1 = [RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE];
obj[OPEN_EXTERNAL_LINK] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.OPEN_EXTERNAL_LINK, obj2);
let obj3 = {
  validation(arg0) {
    return createRpcJoiSchemaObjectDefault(arg0);
  },
  scope: { [RPC_SCOPE_CONFIG.ANY]: items2 },
  handler(socket) {
    socket = socket.socket;
    obj = RPCHelpers;
    const result = obj.validatePostMessageTransport(socket.transport);
    const obj2 = RPCHelpers;
    if (set.has(obj2.validateApplication(socket.application))) {
      const obj3 = { screen: metroImportDefault.CONNECTIONS };
      openUserSettings.openUserSettings(obj3);
    } else {
      const self = this;
      const self2 = this;
      const obj4 = { errorCode: metroRequire.UNAUTHORIZED_FOR_APPLICATION };
      const tmp7 = new RPCErrorDefault(obj4, "Command not available for this application");
      throw tmp7;
    }
  }
};
items2 = [RPC_AUTHENTICATED_SCOPE];
obj[RPCCommands.NAVIGATE_TO_CONNECTIONS] = obj3;
const SHARE_LINK = RPCCommands.SHARE_LINK;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj4 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items3 },
  handler(arg0) {
    let applicationId;
    let args;
    let customId;
    let linkId;
    let message;
    let socket;
    ({ socket, args } = arg0);
    ({ custom_id: require, message: importDefault, link_id: dependencyMap } = args);
    let tmp2 = dependencyMap;
    let tmp = require;
    obj = RPCHelpers;
    let result = obj.validatePostMessageTransport(socket.transport);
    let obj2 = RPCHelpers;
    const validateApplicationResult = obj2.validateApplication(socket.application);
    let c3 = validateApplicationResult;
    if (null == validateApplicationResult) {
      const self5 = this;
      const self6 = this;
      const obj3 = { errorCode: constants.INVALID_COMMAND };
      const tmp16 = new RPCErrorDefault(obj3, "No application.");
      throw tmp16;
    } else {
      const tmpResult = EmbeddedSurfaceUtils;
      if (tmpResult.isEmbeddedApplication(socket.application)) {
        const self3 = this;
        const self4 = this;
        const promise = new Promise((arg0) => {
          let closure_0 = arg0;
          obj = openActivityShareLinkModal;
          const obj2 = {
            applicationId,
            customId: require,
            linkId: dependencyMap,
            message: importDefault,
            onShare(stateFromStores, didCopyLink) {
              let tmp2 = didCopyLink;
              const tmp = closure_0;
              if (!didCopyLink) {
                tmp2 = stateFromStores;
              }
              obj = { success: tmp2, didCopyLink, didSendMessage: stateFromStores };
              tmp(obj);
            }
          };
          const result = obj.openActivityShareLinkModal(obj2);
        });
        return promise;
      } else {
        const self = this;
        const self2 = this;
        const obj4 = { errorCode: constants.INVALID_COMMAND };
        const tmp8 = new RPCErrorDefault(obj4, "This application cannot access this API");
        throw tmp8;
      }
    }
  }
};
items3 = [RPC_AUTHENTICATED_SCOPE];
obj[SHARE_LINK] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SHARE_LINK, obj4);
let result = size.fileFinishedImporting("modules/rpc/server/commands/links.tsx");

export default obj;
