// Module ID: 10743
// Function ID: 10744
// Name: ConjurePublishActionCreators
// Dependencies: [5, 1392, 6752, 10672, 1087, 10676, 1297, 10678, 584, 8634, 10744, 10698, 10747, 2]
// Exports: refreshPreviewApplication, refreshPublishedProject, trackPublishFailed, unpublishUserApp

// Module 10743 (ConjurePublishActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1087 */;
import ConjureAnalytics from "ConjureAnalytics" /* 10676 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10678 */;
import ConjurePreviewActionCreators from "ConjurePreviewActionCreators" /* 10698 */;
import ApplicationWidgetConfigActions from "ApplicationWidgetConfigActions" /* 10744 */;
import conjureLiveRelaunch from "conjureLiveRelaunch" /* 10747 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1392 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6752 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10672 */;
import size from "module_2" /* 2 */;

let also_remove_preview_bot, closure_4, ok;

function unpublishProject() {
  return obj(...arguments);
}
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
              return { value: "Reflect", done: true };
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
              const HTTP = closure_131_0(closure_131_2[6]).HTTP;
              const request = { url: closure_131_7.CONJURE_PROJECT_UNPUBLISH(closure_0), body: obj7, rejectWithError: false };
              const post = HTTP.post;
              c6 = 3;
              c7 = 1;
              obj7 = { guild_id, also_remove_preview_bot };
              const obj8 = { value: post(request), done: false };
              return obj8;
            }
          } else if (2 === c6) {
            c5 = 0;
            const obj5 = closure_131_0(closure_131_2[7]);
            const result = obj5.refreshConjureInstallState(closure_0);
            throw closure_4;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            const obj3 = closure_131_0(closure_131_2[7]);
            const result1 = obj3.refreshConjureInstallState(closure_0);
            c7 = 3;
            return { value, done: true };
          } else {
            c5 = 0;
            obj = closure_131_0(closure_131_2[7]);
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
obj = function _unpublishUserApp() {
  obj = _asyncToGenerator(async (projectId) => {
    let closure_2;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let promise2;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          let id;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              ok = undefined;
              tmp = undefined;
              id = undefined;
              c3 = 1;
              c4 = 1;
              const obj5 = { value: promise2.catch(() => null), done: false };
              promise2 = unpublishProject(projectId, {});
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            ok = undefined;
            if (ok != null) {
              ok = ok.ok;
            }
            if (true !== ok) {
              c4 = 3;
              return { value: false, done: true };
            } else {
              tmp = closure_130_6.getPublishStatus(projectId);
              if (null != tmp) {
                const obj7 = { type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE", projectId, published: false, hasUnpublishedChanges: false, surface: tmp.surface, previewAppChannels: tmp.previewAppChannels, previewDevicePermissions: tmp.previewDevicePermissions };
                obj = closure_130_1(closure_130_2[8]);
                obj.dispatch(obj7);
              }
              const currentUser = closure_130_4.getCurrentUser();
              id = undefined;
              if (currentUser != null) {
                id = currentUser.id;
              }
              if (null != id) {
                const obj3 = closure_130_0(closure_130_2[9]);
                const profile = obj3.fetchProfile(id);
                profile.catch(() => {

                });
              }
              c4 = 3;
              return { value: true, done: true };
            }
          }
        } catch (tmp30) {
          c4 = 3;
          throw tmp30;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _refreshPublishedProject() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c1;
    let c2;
    let closure_3;
    let obj7;
    let closure_0 = arg0;
    let closure_1 = value;
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
      try {
        let project2;
        let application_id2;
        let closure_5;
        let body;
        let bot_permissions_changed;
        let integration_installed;
        let application_id;
        let obj8;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            c1 = undefined;
            c2 = undefined;
            ({ isPreview: c1, install: c2 } = closure_1);
            project2 = undefined;
            application_id2 = undefined;
            closure_5 = undefined;
            value = undefined;
            body = undefined;
            bot_permissions_changed = undefined;
            integration_installed = undefined;
            let project;
            application_id = undefined;
            obj8 = undefined;
            c4 = 1;
            c5 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            project2 = closure_131_5.getProject(closure_0);
            let tmp32 = null;
            if (null != project2) {
              if (c1) {
                application_id2 = tmp31.preview_application_id;
              } else {
                application_id2 = tmp31.application_id;
              }
              tmp32 = application_id2;
            }
            application_id2 = tmp32;
            const tmp35 = !c1 || null != c2;
            closure_5 = tmp35;
            let tmp43Result = null;
            if (null != application_id2) {
              let tmp47 = null;
              const tmp43 = closure_131_12;
              const tmp44 = application_id2;
              const tmp45 = c1;
              if (closure_5) {
                tmp47 = c2;
              }
              tmp43Result = tmp43(tmp44, tmp45, tmp47);
            }
            value = tmp43Result;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: obj7.getProject(closure_0), done: false };
            obj7 = closure_131_0(closure_131_2[7]);
            return obj5;
          }
        } else {
          if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              body = value.body;
              bot_permissions_changed = body.bot_permissions_changed;
              integration_installed = body.integration_installed;
              project = body.project;
              if (c1) {
                application_id = tmp63.preview_application_id;
              } else {
                application_id = tmp63.application_id;
              }
              if (null != application_id) {
                obj8 = { integrationInstalled: integration_installed, botPermissionsChanged: bot_permissions_changed };
                if (application_id === application_id2) {
                  if (null != value) {
                    c4 = 3;
                    c5 = 1;
                    const obj9 = { value, done: false };
                    return obj9;
                  }
                }
                c4 = 4;
                c5 = 1;
                const obj10 = { value: closure_131_12(application_id, c1, obj8), done: false };
                return obj10;
              }
            }
          } else if (3 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else {
              const tmp6 = closure_5;
              if (!tmp6) {
                closure_131_14(application_id, c1, obj8);
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp53) {
        c5 = 3;
        throw tmp53;
      }
    }
  });
  return obj(...arguments);
};
function refreshPublishedApplication() {
  return obj(...arguments);
}
obj = function _refreshPublishedApplication() {
  obj = _asyncToGenerator(async (applicationId, arg1, arg2) => {
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_3 = tmp2;
              const obj4 = { type: "APPLICATION_COMMAND_INDEX_APPLICATION_STALE", applicationId };
              const obj5 = DispatcherDefault;
              obj5.dispatch(obj4);
              const items = [, ];
              const obj7 = ConjureActionCreators;
              items[0] = obj7.fetchConjureApplication(applicationId);
              const obj8 = ApplicationWidgetConfigActions;
              const widgetConfigs = obj8.fetchWidgetConfigs(applicationId, { force: true });
              items[1] = widgetConfigs.catch(() => {

              });
              c5 = 1;
              c6 = 1;
              const obj6 = { value: all(items), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            if (null !== closure_2) {
              closure_132_14(applicationId, closure_1, closure_2);
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp15) {
          c6 = 3;
          throw tmp15;
        }
      }
    })();
  });
  return obj(...arguments);
};
function reloadAfterPublish(application_id, arg1, integrationInstalled) {
  const tmp = arg1;
  if (tmp) {
    integrationInstalled = undefined;
    if (integrationInstalled != null) {
      integrationInstalled = integrationInstalled.integrationInstalled;
    }
    const tmp8 = true !== integrationInstalled || integrationInstalled.botPermissionsChanged;
    if (!tmp8) {
      const obj2 = conjureLiveRelaunch;
      const result = obj2.reloadAppFramesAfterDeploy(application_id);
    }
  } else {
    obj = ConjurePreviewActionCreators;
    const result1 = obj.reloadConjureAppFrames(application_id);
  }
}
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
export { unpublishProject };
export const unpublishUserApp = function unpublishUserApp() {
  return obj(...arguments);
};
export const refreshPublishedProject = function refreshPublishedProject() {
  return obj(...arguments);
};
export const refreshPreviewApplication = function refreshPreviewApplication(arg0) {
  return refreshPublishedApplication(arg0, true, null);
};
