// Module ID: 11254
// Function ID: 11255
// Name: ConjurePublishActionCreators
// Dependencies: [5, 1085, 11234, 1295, 11207, 584, 6853, 11255, 11257, 11258, 2]
// Exports: refreshPublishedProject, trackPublishFailed, unpublishProject

// Module 11254 (ConjurePublishActionCreators)
import Constants from "Constants" /* 1085 */;
import ConjureAnalytics from "ConjureAnalytics" /* 11234 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let also_remove_preview_bot, closure_2, closure_3, closure_4;

let obj = function _unpublishProject() {
  obj = _asyncToGenerator(async (arg0, guild_id) => {
    let closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (async (arg0, value) => {
      let c1;
      let c2;
      let obj7;
      if (c7 === 2) {
        c7 = 3;
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
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              guild_id = undefined;
              also_remove_preview_bot = undefined;
              ({ guildId: c1, alsoRemovePreviewBot: c2 } = closure_1);
              c6 = 1;
              c7 = 1;
              return { value: "Set", done: true };
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              c5 = 1;
              const HTTP = closure_131_0(closure_131_2[3]).HTTP;
              const request = { url: closure_131_4.CONJURE_PROJECT_UNPUBLISH(closure_0), body: obj7, rejectWithError: false };
              const post = HTTP.post;
              c6 = 3;
              c7 = 1;
              obj7 = { guild_id, also_remove_preview_bot };
              const obj8 = { value: post(request), done: false };
              return obj8;
            }
          } else if (2 === c6) {
            c5 = 0;
            const obj5 = closure_131_0(closure_131_2[4]);
            const result = obj5.refreshConjureInstallState(closure_0);
            throw closure_4;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            const obj3 = closure_131_0(closure_131_2[4]);
            const result1 = obj3.refreshConjureInstallState(closure_0);
            c7 = 3;
            return { value, done: true };
          } else {
            c5 = 0;
            obj = closure_131_0(closure_131_2[4]);
            const result2 = obj.refreshConjureInstallState(closure_0);
            c7 = 3;
            return { value, done: true };
          }
        } catch (tmp27) {
          closure_4 = tmp27;
          if (0 === c5) {
            c7 = 3;
            throw tmp27;
          } else {
            c6 = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _refreshPublishedProject() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_0 = arg0;
    let isPreview = arg1;
    let c4 = 0;
    let c5 = 0;
    const iter = (async (arg0, value) => {
      let obj11;
      let obj14;
      if (c5 === 2) {
        c5 = 3;
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
        try {
          let body;
          let bot_permissions_changed;
          let integration_installed;
          let application_id;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              closure_2 = tmp;
              isPreview = undefined;
              isPreview = isPreview.isPreview;
              body = undefined;
              bot_permissions_changed = undefined;
              integration_installed = undefined;
              let project;
              application_id = undefined;
              c4 = 1;
              c5 = 1;
              return { value: "Set", done: true };
            }
          } else if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              c4 = 2;
              c5 = 1;
              const obj8 = { value: obj14.getProject(closure_0), done: false };
              obj14 = closure_131_0(closure_131_2[4]);
              return obj8;
            }
          } else {
            if (2 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                return { value, done: true };
              } else {
                body = value.body;
                bot_permissions_changed = body.bot_permissions_changed;
                integration_installed = body.integration_installed;
                project = body.project;
                if (isPreview) {
                  application_id = tmp61.preview_application_id;
                } else {
                  application_id = tmp61.application_id;
                }
                if (null != application_id) {
                  const obj12 = { type: "APPLICATION_COMMAND_INDEX_APPLICATION_STALE", applicationId: application_id };
                  const obj9 = closure_131_1(closure_131_2[5]);
                  obj9.dispatch(obj12);
                  c4 = 3;
                  c5 = 1;
                  const obj13 = { value: obj11.fetchApplication(application_id), done: false };
                  obj11 = closure_131_0(closure_131_2[6]);
                  return obj13;
                }
              }
            } else if (3 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                return { value, done: true };
              } else {
                const obj4 = closure_131_0(closure_131_2[7]);
                const widgetConfigs = obj4.fetchWidgetConfigs(application_id, { force: true });
                c4 = 4;
                c5 = 1;
                const obj16 = {
                  value: widgetConfigs.catch(() => {

                            }),
                  done: false
                };
                return obj16;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              const tmp54 = isPreview;
              if (tmp54) {
                const tmp10 = integration_installed && !bot_permissions_changed;
                if (tmp10) {
                  const obj2 = closure_131_0(closure_131_2[9]);
                  const result = obj2.reloadAppFramesAfterDeploy(application_id);
                }
              } else {
                obj = closure_131_0(closure_131_2[8]);
                const result1 = obj.reloadConjureAppFrames(application_id);
              }
            }
            const obj18 = { isPreview };
            const obj7 = closure_131_0(closure_131_2[2]);
            obj7.trackConjureDeployed(closure_0, obj18);
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp49) {
          c5 = 3;
          throw tmp49;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("modules/conjure/publish/ConjurePublishActionCreators.tsx");

export const trackPublishFailed = function trackPublishFailed(projectId, message, isPreview) {
  let str;
  const tmp = ConjureAnalytics;
  const trackConjureErrored = tmp.trackConjureErrored;
  obj = { location: "publish", code: ConjureAnalytics.ConjureErrorCodes.PUBLISH_FAILED, message: "publish" + str + " failed", details: message, isPreview };
  str = "";
  if (isPreview) {
    str = "-preview";
  }
  trackConjureErrored(projectId, obj);
};
export const unpublishProject = function unpublishProject() {
  return obj(...arguments);
};
export const refreshPublishedProject = function refreshPublishedProject() {
  return obj(...arguments);
};
