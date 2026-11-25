// Module ID: 11409
// Function ID: 11410
// Name: publishConjureCopy
// Dependencies: [5, 6903, 1071, 11410, 11412, 11414, 11429, 1112, 4244, 572, 11424, 1098, 8558, 2]
// Exports: openConjureCopy, publishConjureCopy

// Module 11409 (publishConjureCopy)
import Constants from "Constants" /* 1071 */;
import router_utils from "router_utils" /* 1098 */;
import transitionToGuild from "transitionToGuild" /* 8558 */;
import conjurePreviewModes from "conjurePreviewModes" /* 11410 */;
import useConjurePublishAction from "useConjurePublishAction" /* 11412 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6903 */;
import size from "module_2" /* 2 */;

let closure_6, message, ok;

function needsInstallConsent(arg0) {
  let preview_ready;
  let prop;
  let prop1;
  const integrationStatus = ConjureProjectStore.getIntegrationStatus(arg0);
  const requiresPermissionReview = conjurePreviewModes.requiresPermissionReview;
  conjurePreviewModes;
  const project = ConjureProjectStore.getProject(arg0);
  let install_scope;
  if (project != null) {
    install_scope = project.install_scope;
  }
  if (install_scope == null) {
    install_scope = null;
  }
  obj = { installScope: install_scope, previewReady: true === preview_ready, integrationInstalled: prop, botPermissionsChanged: true === prop1 };
  preview_ready = undefined;
  if (integrationStatus != null) {
    preview_ready = integrationStatus.preview_ready;
  }
  prop = undefined;
  if (integrationStatus != null) {
    prop = integrationStatus.integration_installed;
  }
  if (prop == null) {
    prop = null;
  }
  prop1 = undefined;
  if (integrationStatus != null) {
    prop1 = integrationStatus.bot_permissions_changed;
  }
  return requiresPermissionReview(obj);
}
let obj = function _publishConjureCopy() {
  obj = _asyncToGenerator(async (projectId, arg1) => {
    let closure_2;
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj12;
      let obj14;
      let obj4;
      let obj8;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              message = undefined;
              ok = undefined;
              integrationStatus = integrationStatus.getIntegrationStatus(projectId);
              let preview_ready;
              const tmp69 = closure_1;
              if (integrationStatus != null) {
                preview_ready = integrationStatus.preview_ready;
              }
              if (true !== preview_ready) {
                c8 = 3;
                return { value: null, done: true };
              } else if (needsInstallConsent(projectId)) {
                c5 = 1;
                c7 = 3;
                c8 = 1;
                const obj5 = { value: obj14.requestConjureInstallConsent(projectId, tmp69), done: false };
                obj14 = useConjurePublishAction;
                return obj5;
              }
            }
          } else if (1 === c7) {
            c5 = 0;
            c8 = 3;
            return { value: null, done: true };
          } else {
            if (2 === c7) {
              c5 = 0;
              message = closure_6;
              const _Error = Error;
              if (message instanceof Error) {
                message = message.message;
              } else {
                const intl = closure_132_0(closure_132_2[7]).intl;
                message = intl.string(closure_132_1(closure_132_2[8]).gMWZeG);
              }
            } else if (3 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c8 = 3;
                return { value, done: true };
              } else if ("approved" !== value) {
                c5 = 0;
                c8 = 3;
                return { value: null, done: true };
              } else {
                c5 = 0;
                if (closure_132_6(projectId)) {
                  c8 = 3;
                  return { value: null, done: true };
                }
              }
            } else if (4 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c8 = 3;
                return { value, done: true };
              } else {
                ok = value;
                let tmp15 = null;
                if (true !== ok.ok) {
                  tmp15 = closure_132_1(closure_132_2[6])(ok);
                }
                message = tmp15;
                c5 = 0;
              }
            } else {
              if (5 === c7) {
                c5 = 0;
              } else if (6 === c7) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c8 = 3;
                  return { value, done: true };
                } else {
                  message.appChannelId = value;
                  c8 = 3;
                  return { value: message, done: true };
                }
              } else if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c8 = 3;
                return { value, done: true };
              } else {
                c5 = 0;
              }
              message = {};
              c7 = 6;
              c8 = 1;
              const obj13 = { value: obj4.waitForAppChannel(projectId, closure_1), done: false };
              obj4 = closure_132_0(closure_132_2[4]);
              return obj13;
            }
            if (null != message) {
              const obj15 = { type: "CONJURE_PROJECT_PUBLISH_FAILED", projectId, message };
              const obj10 = closure_132_1(closure_132_2[9]);
              obj10.dispatch(obj15);
              c8 = 3;
              return { value: null, done: true };
            } else {
              c5 = 3;
              c7 = 7;
              c8 = 1;
              const obj16 = { value: obj8.refreshPublishedProject(projectId, { isPreview: false }), done: false };
              obj8 = closure_132_0(closure_132_2[10]);
              return obj16;
            }
          }
          c5 = 2;
          c7 = 4;
          c8 = 1;
          const obj17 = { value: obj12.publishProject(projectId), done: false };
          obj12 = closure_132_0(closure_132_2[5]);
          return obj17;
        } catch (tmp60) {
          closure_6 = tmp60;
          if (0 === c5) {
            c8 = 3;
            throw tmp60;
          } else if (1 === c5) {
            c7 = 1;
          } else if (2 === c5) {
            c7 = 2;
          } else {
            c7 = 5;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/conjure/remix/publishConjureCopy.tsx");

export function publishConjureCopy() {
  return obj(...arguments);
}
export function openConjureCopy(guildId, appChannelId) {
  if (null != appChannelId) {
    const obj2 = router_utils;
    obj2.transitionTo(Routes.CHANNEL(guildId, appChannelId));
  } else {
    obj = transitionToGuild;
    obj.transitionToGuild(guildId);
  }
}
