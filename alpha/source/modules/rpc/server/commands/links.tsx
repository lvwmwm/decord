// Module ID: 15736
// Function ID: 15737
// Name: links
// Dependencies: [5, 4822, 2045, 6378, 1087, 2026, 1267, 4892, 1384, 15737, 15710, 15738, 4977, 15739, 5656, 8860, 15740, 9264, 15725, 11479, 11476, 7490, 2031, 15741, 15744, 2]

// Module 15736 (links)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4892 */;
import CrossPlatformNativeUtilsDefault from "CrossPlatformNativeUtils" /* 4977 */;
import RPCErrorDefault from "RPCError" /* 9264 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 11476 */;
import RPCHelpers from "RPCHelpers" /* 11479 */;
import validateEmbeddedAppFrame from "validateEmbeddedAppFrame" /* 15710 */;
import getEmbeddedActivityPopoutWindowKeyDefault from "getEmbeddedActivityPopoutWindowKey" /* 15737 */;
import internalDeepLinks from "internalDeepLinks" /* 15738 */;
import fetchIsLinkTrusted2 from "fetchIsLinkTrusted" /* 15739 */;
import openActivityShareLinkModal2 from "openActivityShareLinkModal" /* 15741 */;
import getFrameChannelIdDefault from "getFrameChannelId" /* 15744 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4822 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import Constants_mod from "Constants" /* 6378 */;
import Constants_mod2 from "Constants" /* 1087 */;
import Constants_mod3 from "Constants" /* 2026 */;
import CONTEXT_MENU_ICON_NAMES_mod from "CONTEXT_MENU_ICON_NAMES" /* 15725 */;
import size from "module_2" /* 2 */;

let c2, currentEmbeddedActivity, getApplication;

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
const openUserSettings = tmp(7490);
function trackExternalLink(application, arg1, arg2) {
  const str = new URL(arg1);
  const tmp = "client.vibeyard.tools" === str.hostname && "/link" === str.pathname;
  if (tmp) {
    str.search = "";
    str.hash = "";
    str.username = "";
    str.password = "";
  }
  application = application.application;
  let id;
  const track = AnalyticsUtilsDefault.track;
  const RPC_OPEN_EXTERNAL_LINK_CALLED = metroImportAll.RPC_OPEN_EXTERNAL_LINK_CALLED;
  AnalyticsUtilsDefault;
  if (application != null) {
    id = application.id;
  }
  obj = { application_id: id, url: str.toString(), opened: true };
  track(RPC_OPEN_EXTERNAL_LINK_CALLED, obj);
}
let obj = function _openExternalLink() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_2;
    let closure_3;
    let closure_4;
    let application = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      let tmp;
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
        try {
          let str1;
          c7 = 2;
          let tmp4 = c6;
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
              application = tmp4;
              let application1;
              let embeddedActivityLocationChannelId;
              str1 = undefined;
              application = application.application;
              let id;
              getApplication = getApplication.getApplication;
              if (application != null) {
                id = application.id;
              }
              application1 = getApplication(id);
              const getEmbeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId;
              embeddedActivityLocationUtils;
              currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
              let _location;
              if (currentEmbeddedActivity != null) {
                _location = currentEmbeddedActivity.location;
              }
              embeddedActivityLocationChannelId = getEmbeddedActivityLocationChannelId(_location);
              let tmp36;
              if (PlatformUtils.isPlatformEmbedded) {
                const obj4 = { application: application1, channelId: embeddedActivityLocationChannelId };
                tmp36 = getEmbeddedActivityPopoutWindowKeyDefault(obj4);
              }
              let internalDeepLink = null;
              const tmp28Result = validateEmbeddedAppFrame;
              if (null != tmp28Result.tryValidateEmbeddedAppFrame(application)) {
                const tmp28Result4 = internalDeepLinks;
                internalDeepLink = tmp28Result4.resolveInternalDeepLink(tmp67);
              }
              if (null != internalDeepLink) {
                if (null != tmp36) {
                  const obj7 = CrossPlatformNativeUtilsDefault;
                  obj7.focus(null, true);
                }
                const tmp28Result5 = internalDeepLinks;
                if (tmp28Result5.openInternalDeepLink(internalDeepLink)) {
                  trackExternalLink(application, closure_1, true);
                  c7 = 3;
                  return { value: { opened: true }, done: true };
                }
              }
              c5 = 1;
              const _URL = URL;
              const self5 = this;
              const self6 = this;
              let str = new URL(tmp67);
              str1 = str.toString();
              if (null != tmp36) {
                const obj9 = CrossPlatformNativeUtilsDefault;
                obj9.focus(tmp36, true);
              }
              let id1;
              const fetchIsLinkTrusted = fetchIsLinkTrusted2.fetchIsLinkTrusted;
              fetchIsLinkTrusted2;
              if (application1 != null) {
                id1 = application1.id;
              }
              c6 = 2;
              c7 = 1;
              const obj6 = { value: fetchIsLinkTrusted(id1, str1), done: false };
              return obj6;
            }
          } else if (1 === tmp4) {
            c5 = 0;
            const _HermesInternal = HermesInternal;
            const self3 = this;
            const self4 = this;
            const obj8 = { errorCode: closure_131_6.INVALID_COMMAND };
            const tmp20 = closure_131_1(closure_131_2[17]);
            const tmp202 = new tmp20(obj8, "Invalid URL: " + closure_1);
            throw tmp202;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            let resolved;
            if (value) {
              closure_131_1(closure_131_2[14])(str1);
              closure_131_11(application, str1, true);
              resolved = Promise.resolve({ opened: true });
            } else {
              const self = this;
              const self2 = this;
              resolved = new Promise((arg0) => {
                let closure_0 = arg0;
                let tmp = closure_1_0(application[15]);
                obj = {
                  href,
                  shouldConfirm: true,
                  onClick() {
                    return false;
                  },
                  onConfirm() {
                    closure_1(closure_2[14])(href);
                    const str = new URL(href);
                    let tmp5 = "client.vibeyard.tools" === str.hostname;
                    const tmp4 = closure_2_0;
                    if (tmp5) {
                      tmp5 = "/link" === str.pathname;
                    }
                    if (tmp5) {
                      str.search = "";
                      str.hash = "";
                      str.username = "";
                      str.password = "";
                    }
                    application = tmp4.application;
                    let id;
                    const track = tmp(tmp2[6]).track;
                    const RPC_OPEN_EXTERNAL_LINK_CALLED = constants.RPC_OPEN_EXTERNAL_LINK_CALLED;
                    closure_1(closure_2[6]);
                    if (application != null) {
                      id = application.id;
                    }
                    obj = { application_id: id, url: str.toString(), opened: true };
                    track(RPC_OPEN_EXTERNAL_LINK_CALLED, obj);
                    closure_0({ opened: true });
                  },
                  onCancel() {
                    const str = new URL(href);
                    let tmp2 = "client.vibeyard.tools" === str.hostname;
                    const tmp = closure_2_0;
                    if (tmp2) {
                      tmp2 = "/link" === str.pathname;
                    }
                    if (tmp2) {
                      str.search = "";
                      str.hash = "";
                      str.username = "";
                      str.password = "";
                    }
                    application = tmp.application;
                    let id;
                    const track = closure_1(closure_2[6]).track;
                    const RPC_OPEN_EXTERNAL_LINK_CALLED = constants.RPC_OPEN_EXTERNAL_LINK_CALLED;
                    closure_1(closure_2[6]);
                    if (application != null) {
                      id = application.id;
                    }
                    obj = { application_id: id, url: str.toString(), opened: false };
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
            obj = { value: resolved, done: true };
            return obj;
          }
        } catch (tmp57) {
          const href = tmp57;
          if (0 === c5) {
            c7 = 3;
            throw tmp57;
          } else {
            c6 = 1;
          }
        }
      }
    })();
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
        return closure_1_12(...arguments);
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
  handler(socket) {
    let applicationId;
    let customId;
    let linkId;
    let message;
    socket = socket.socket;
    ({ custom_id: importDefault, message: dependencyMap, link_id: _asyncToGenerator } = socket.args);
    let tmp2 = dependencyMap;
    let tmp = socket;
    obj = socket(11479);
    let result = obj.validatePostMessageTransport(socket.transport);
    let obj2 = socket(11479);
    const validateApplicationResult = obj2.validateApplication(socket.application);
    let c4 = validateApplicationResult;
    if (null == validateApplicationResult) {
      const self5 = this;
      const self6 = this;
      const obj3 = { errorCode: constants.INVALID_COMMAND };
      const tmp16 = new RPCErrorDefault(obj3, "No application.");
      throw tmp16;
    } else {
      const tmpResult = tmp(2031);
      if (tmpResult.isEmbeddedApplication(socket.application)) {
        const self3 = this;
        const self4 = this;
        const promise = new Promise((arg0) => {
          let obj2;
          let tmp2;
          let closure_0 = arg0;
          let tmp = openActivityShareLinkModal2;
          obj = {
            applicationId,
            customId: importDefault,
            linkId: _asyncToGenerator,
            channelId: tmp2(obj2.tryValidateEmbeddedAppFrame(socket)),
            message: dependencyMap,
            onShare(didSendMessage, didCopyLink) {
              let tmp2 = didCopyLink;
              const tmp = closure_0;
              if (!didCopyLink) {
                tmp2 = didSendMessage;
              }
              obj = { success: tmp2, didCopyLink, didSendMessage };
              tmp(obj);
            }
          };
          const openActivityShareLinkModal = tmp.openActivityShareLinkModal;
          tmp2 = getFrameChannelIdDefault;
          obj2 = validateEmbeddedAppFrame;
          const result = openActivityShareLinkModal(obj);
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
