// Module ID: 11591
// Function ID: 11592
// Name: useConjurePublishAction
// Dependencies: [5, 19, 5500, 7537, 2065, 4804, 2087, 4806, 10885, 10901, 1085, 7166, 7165, 10911, 11592, 6284, 10918, 10907, 10974, 11593, 1126, 3862, 10963, 584, 8524, 11594, 10905, 11589, 11595, 504, 2]
// Exports: default, isConjureLiveNameOutdated, publishGuildId, saveConjureFirstPublishDetails

// Module 11591 (useConjurePublishAction)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6284 */;
import ConjureUtils from "ConjureUtils" /* 7165 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 7166 */;
import UserActionCreators from "UserActionCreators" /* 8524 */;
import conjureAppInServer from "conjureAppInServer" /* 10911 */;
import conjurePublishFailureMessage from "conjurePublishFailureMessage" /* 11593 */;
import conjurePublishAction2 from "conjurePublishAction" /* 11594 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5500 */;
import UserProfileStore from "UserProfileStore" /* 7537 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildChannelStore from "GuildChannelStore" /* 4804 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4806 */;
import ConjureProjectStore_mod from "ConjureProjectStore" /* 10885 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10901 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const conjurePublishFailureMessageDefault = conjurePublishFailureMessage;
let _null, _require, c4, closure_10, closure_11, closure_13, f156143, integrationInstalled, promptFirstPublish;

let closure_12;
let tmp;
let unpackModuleId;
const _modDef3862 = tmp(3862);
const f109093 = () => {

};
function readPublishSubject(projectId, arg1) {
  let canResult;
  let canResult1;
  let flag;
  let name;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  let tmp9;
  const project = ConjureProjectStore.getProject(projectId);
  obj = ConjureProjectStore;
  if (null == project) {
    return null;
  } else {
    let tmp2 = null;
    if ("user" !== project.install_scope) {
      let guild_id = project.guild_id;
      if (guild_id == null) {
        guild_id = arg1;
      }
      tmp2 = guild_id;
    }
    let findConjureChannelIdResult = null;
    if (null != tmp2) {
      const obj2 = ConjureUtils;
      findConjureChannelIdResult = obj2.findConjureChannelId(tmp2, project.application_id);
    }
    let guild = null;
    if (null != tmp2) {
      guild = GuildStore.getGuild(tmp2);
    }
    const obj3 = { project, guildId: tmp2, appChannelId: findConjureChannelIdResult, input: obj4 };
    obj4 = { installScope: project.install_scope, status: ConjurePublishStatusStore.getPublishStatus(projectId), integrationStatus: obj.getIntegrationStatus(projectId), guildName: name, appChannelName: tmp9, appChannelPending: obj5.isAppChannelPending(projectId), canManageGuild: canResult, canManageChannels: canResult1, usesAppChannels: obj6.projectUsesAppChannels(project), botInGuild: obj7.readConjureBotInGuild(project, tmp2), liveNameOutdated: flag };
    name = undefined;
    obj5 = ConjurePublishStatusStore;
    if (guild != null) {
      name = guild.name;
    }
    if (name == null) {
      name = null;
    }
    tmp9 = null;
    if (null != findConjureChannelIdResult) {
      const channel = ChannelStore.getChannel(findConjureChannelIdResult);
      let name1;
      if (channel != null) {
        name1 = channel.name;
      }
      if (name1 == null) {
        name1 = null;
      }
      tmp9 = name1;
    }
    canResult = null;
    if (null != guild) {
      canResult = PermissionStore.can(Permissions.MANAGE_GUILD, guild);
    }
    canResult1 = null;
    if (null != guild) {
      canResult1 = PermissionStore.can(Permissions.MANAGE_CHANNELS, guild);
    }
    obj6 = ConjureProjectTypes;
    flag = false;
    obj7 = conjureAppInServer;
    const obj8 = ConjureProjectTypes;
    if (!obj8.isPreviewlessProject(project)) {
      const application = ApplicationStore.getApplication(project.application_id);
      let name2;
      if (application != null) {
        name2 = application.name;
      }
      flag = null != name2 && name2 !== project.name;
    }
    return obj3;
  }
}
function requestConjureInstallConsent() {
  return obj(...arguments);
}
let obj = function _requestConjureInstallConsent() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_2;
    let closure_3;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let guildId;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const applicationId = tmp2;
            project = undefined;
            guildId = undefined;
            const obj15 = project;
            project = project.getProject(closure_0);
            let prop;
            const tmp31 = closure_0;
            const tmp32 = closure_1;
            if (project != null) {
              prop = project.preview_application_id;
            }
            if (null != project) {
              if (null != prop) {
                const obj9 = require("ConjureInstallTarget");
                guildId = obj9.conjureInstallGuildId(project, obj15.getIntegrationStatus(tmp31), tmp32);
                if (null == application.getApplication(prop)) {
                  const obj11 = require("ApplicationActionCreators");
                  application = obj11.fetchApplication(prop);
                  c4 = 1;
                  c5 = 1;
                  const obj6 = {
                    value: application.catch(() => {

                                  }),
                    done: false
                  };
                  return obj6;
                }
              }
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          }
        } else if (2 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            const obj5 = closure_131_0(closure_131_2[14]);
            let result = obj5.repairConjureGuildHints(project, guildId);
            c4 = 3;
            c5 = 1;
            const obj10 = {
              value: result.catch(() => {

                      }),
              done: false
            };
            return obj10;
          }
        } else if (3 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            const obj2 = closure_131_0(closure_131_2[17]);
            const project1 = obj2.getProject(closure_0);
            c4 = 4;
            c5 = 1;
            const obj13 = {
              value: project1.catch(() => {

                      }),
              done: false
            };
            return obj13;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
        const self = this;
        const self2 = this;
        const promise = new Promise((onClose) => {
          obj = { applicationId, application, guildId, onClose };
          const openConjureAppInstallModal = closure_1(applicationId[16]).openConjureAppInstallModal;
          closure_1(applicationId[16]);
          application = application.getApplication(applicationId);
          if (application == null) {
            application = null;
          }
          const result = openConjureAppInstallModal(obj);
        });
        c4 = 2;
        c5 = 1;
        const obj14 = { value: promise, done: false };
        return obj14;
      } catch (tmp27) {
        c5 = 3;
        throw tmp27;
      }
    }
  });
  return obj(...arguments);
};
obj = function _saveConjureFirstPublishDetails() {
  obj = _asyncToGenerator(async (arg0, name, icon) => {
    let closure_4;
    let closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (async (arg0, value, arg2) => {
      let c1;
      let c2;
      let c3;
      let obj3;
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
          let tmp;
          let closure_5;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              name = undefined;
              icon = undefined;
              c3 = undefined;
              ({ name: c1, icon: c2, description: c3 } = closure_1);
              tmp = closure_2;
              closure_5 = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "test", done: true };
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_5 = {};
              if (name !== tmp.name) {
                closure_5.name = name;
              }
              if (null != icon) {
                closure_5.icon = icon;
              }
              const str = tmp.description;
              const trimmed = c3.trim();
              if (trimmed !== str.trim()) {
                closure_5.description = c3.trim();
              }
              const _Object = Object;
              if (0 === Object.keys(closure_5).length) {
                c7 = 3;
                return { value: true, done: true };
              } else {
                c5 = 1;
                c6 = 3;
                c7 = 1;
                const obj6 = { value: obj3.updateProjectSettings(closure_0, closure_5), done: false };
                obj3 = closure_132_0(closure_132_2[17]);
                return obj6;
              }
            }
          } else if (2 === c6) {
            c5 = 0;
            c7 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            c5 = 0;
            c7 = 3;
            return { value: value.ok, done: true };
          }
        } catch (tmp31) {
          if (0 === c5) {
            c7 = 3;
            throw tmp31;
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
function firstPublishDescription() {
  return obj(...arguments);
}
obj = function _firstPublishDescription() {
  let hydrated;
  obj = _asyncToGenerator(async (arg0, value) => {
    function savedConjureDescription(id) {
      project = project.getProject(id);
      let prop;
      if (project != null) {
        prop = project.preview_application_id;
      }
      let str = "";
      if (null != prop) {
        application = application.getApplication(prop);
        let str2;
        if (application != null) {
          str2 = application.description;
        }
        if (str2 == null) {
          str2 = "";
        }
        str = str2;
      }
      return str;
    }
    let closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp;
            const preview_application_id = closure_0.preview_application_id;
            const isHydratedResult = null == preview_application_id || hydrated.isHydrated(preview_application_id);
            if (!isHydratedResult) {
              const obj2 = require("ApplicationActionCreators");
              let application = obj2.fetchApplication(preview_application_id);
              c2 = 1;
              c3 = 1;
              const obj5 = {
                value: application.catch(() => {

                          }),
                done: false
              };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        }
        c3 = 3;
        const obj6 = { value: savedConjureDescription(closure_0.id), done: true };
        return obj6;
      } catch (tmp11) {
        c3 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
function startPublish(project, isUpdate, arg2) {
  _require = project;
  project = project.project;
  ({ platform: dependencyMap, guildId: _asyncToGenerator } = arg2);
  const id = project.id;
  let tmp = null != project.guildId;
  if (tmp) {
    const status = project.input.status;
    let surface;
    if (status != null) {
      surface = status.surface;
    }
    tmp = "activity" === surface;
  }
  if (tmp) {
    tmp = null == project.appChannelId;
  }
  if (tmp) {
    tmp = !isUpdate.isUpdate;
  }
  let closure_5 = tmp;
  if (closure_5) {
    obj = project(584);
    let obj2 = { type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: id, pending: true };
    obj.dispatch(obj2);
  }
  const obj3 = require("conjurePublishConnection");
  const publishProjectResult = obj3.publishProject(id);
  let nextPromise = publishProjectResult.then(function(ok) {
    if (true === ok.ok) {
      return ok;
    } else {
      const tmp7 = require;
      if (ok.code === conjurePublishFailureMessage.PREVIEW_BOT_NOT_INSTALLED_CODE) {
        const tmp7Result = tmp7(10907);
        project = tmp7Result.getProject(id);
        project.catch(() => {

        });
      }
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error(conjurePublishFailureMessageDefault(ok));
      throw error;
    }
  });
  nextPromise.then((result) => {
    let channel_skipped;
    let projectId;
    project = result;
    let tmp = project;
    const showConfirmation = dependencyMap.showConfirmation;
    const intl = project(dependencyMap[20]).intl;
    showConfirmation(intl.string(project(dependencyMap[21]).S6Px3n));
    if (null != project.guildId) {
      const fetchProfile = tmp(tmp2[24]).fetchProfile;
      tmp(dependencyMap[24]);
      const tmpResult3 = tmp(dependencyMap[13]);
      const profile = fetchProfile(tmpResult3.conjureProductionBotUserId(project), { withMutualGuilds: true });
      profile.catch(f109093);
    }
    const tmpResult4 = tmp(dependencyMap[22]);
    result = tmpResult4.refreshPublishedProject(id, { isPreview: false });
    const catchPromise1 = result.catch(() => {

    });
    const nextPromise = catchPromise1.then(() => {
      function waitForAppChannel() {
        return closure_1_24(...arguments);
      }
      let tmp;
      if (closure_5) {
        if (true !== channel_skipped.channel_skipped) {
          tmp = waitForAppChannel(id, _asyncToGenerator);
        }
      }
      return tmp;
    });
    const cleanupPromise = nextPromise.finally(() => {
      obj = project(dependencyMap[23]);
      const obj2 = { type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: false };
      obj.dispatch(obj2);
    });
    cleanupPromise.catch(() => {

    });
  }, (message) => {
    obj = DispatcherDefault;
    const obj2 = { type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: id, pending: false };
    obj.dispatch(obj2);
    const showError = dependencyMap.showError;
    if (message instanceof Error) {
      message = message.message;
    } else {
      const intl = intl2.intl;
      message = intl.string(_modDef3862.gMWZeG);
    }
    showError(message);
  });
}
obj = function _waitForAppChannel() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_0 = arg0;
    let closure_1 = value;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
            let closure_3 = tmp;
            let closure_2 = tmp2;
            let appChannelId;
            const _Date3 = Date;
            const sum = Date.now() + 5000;
            let c2 = sum;
            const tmp30 = readPublishSubject(closure_0, closure_1);
            if (tmp30 != null) {
              appChannelId = tmp30.appChannelId;
            }
            if (null == appChannelId) {
              const _Date = Date;
              if (Date.now() < sum) {
                const self = this;
                const self2 = this;
                const promise = new Promise((arg0) => setTimeout(arg0, 250));
                c4 = 1;
                c5 = 1;
                const obj4 = { value: promise, done: false };
                return obj4;
              }
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const tmp11 = closure_131_17(closure_0, closure_1);
          let appChannelId1;
          if (tmp11 != null) {
            appChannelId1 = tmp11.appChannelId;
          }
          if (null == appChannelId1) {
            const _Date2 = Date;
          }
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp18) {
        c5 = 3;
        throw tmp18;
      }
    }
  });
  return obj(...arguments);
};
function runConjurePublishAction() {
  return obj(...arguments);
}
obj = function _runConjurePublishAction() {
  let projectPublishing;
  obj = _asyncToGenerator(async (arg0, value, arg2) => {
    let publishState;
    let surface;
    let closure_0 = arg0;
    let closure_2 = arg2;
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
      try {
        c5 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = closure_2;
            const platform = closure_2.platform;
            if (true !== closure_2.busy) {
              if (!set.has(closure_0)) {
                const tmp5 = readPublishSubject(closure_0, tmp23);
                if (null != tmp5) {
                  if (!projectPublishing.isProjectPublishing(closure_0)) {
                    const status = tmp5.input.status;
                    let publishing;
                    if (status != null) {
                      publishing = status.publishing;
                    }
                    if (true !== publishing) {
                      const obj5 = require("conjurePublishAction");
                      const conjurePublishAction = obj5.resolveConjurePublishAction(tmp5.input);
                      const obj4 = { entryPoint: tmp21, publishState, surface, installScope: tmp5.project.install_scope, action: conjurePublishAction.action };
                      const status3 = tmp5.input.status;
                      let state;
                      const trackConjurePublishActionClicked = require("ConjureAnalytics").trackConjurePublishActionClicked;
                      const tmp29 = require("ConjureAnalytics");
                      if (status3 != null) {
                        state = status3.state;
                      }
                      publishState = state;
                      if (state == null) {
                        publishState = null;
                      }
                      const status2 = tmp5.input.status;
                      surface = undefined;
                      if (status2 != null) {
                        surface = status2.surface;
                      }
                      if (surface == null) {
                        surface = null;
                      }
                      const result = trackConjurePublishActionClicked(tmp20, obj4);
                      if (null == conjurePublishAction.disabledReason) {
                        if (null == conjurePublishAction.confirmReason) {
                          c6 = 1;
                          c5 = 1;
                          const obj6 = { value: continuePublish(closure_0, conjurePublishAction, tmp22), done: false };
                          return obj6;
                        } else {
                          platform.showPublishBlocked(require("conjurePublishBlockedReason").ConjurePublishBlockedReason.MISSING_MANAGE_CHANNELS, conjurePublishAction.confirmReason, () => {
                            const promise = closure_2_28(closure_0, conjurePublishAction, closure_1);
                            promise.catch(() => {

                            });
                          });
                        }
                      } else {
                        platform.showPublishBlocked(require("conjurePublishBlockedReason").ConjurePublishBlockedReason.MISSING_MANAGE_SERVER, conjurePublishAction.disabledReason);
                      }
                    }
                  }
                }
              }
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
      } catch (tmp16) {
        c5 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
function continuePublish() {
  return obj(...arguments);
}
obj = function _continuePublish() {
  let projectPublishing;
  obj = _asyncToGenerator(async (projectId, arg1, arg2) => {
    const intent = arg1;
    let closure_2 = arg2;
    let c14 = 0;
    let c15 = 0;
    let c12 = 0;
    return (async (arg0, value, arg2) => {
      let preview_ready;
      let prop1;
      if (c15 === 2) {
        c15 = 3;
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
          let closure_6;
          let guildId;
          c15 = 2;
          if (0 === c14) {
            if (arg0 === 1) {
              c15 = 3;
              throw value;
            } else if (arg0 === 2) {
              c15 = 3;
              return { value, done: true };
            } else {
              closure_11 = tmp;
              closure_10 = tmp4;
              closure_6 = undefined;
              obj4 = undefined;
              promptFirstPublish = undefined;
              guildId = closure_2.guildId;
              platform = closure_2.platform;
              _null = readPublishSubject(projectId, guildId);
              if (null != _null) {
                if (!projectPublishing.isProjectPublishing(projectId)) {
                  if (null != platform.promptFirstPublish) {
                    const status = _null.input.status;
                    let state;
                    if (status != null) {
                      state = status.state;
                    }
                    if ("unpublished" === state) {
                      if (closure_2_12(_null.project)) {
                        set.add(projectId);
                        c12 = 1;
                        promptFirstPublish = platform.promptFirstPublish;
                        obj4 = { projectId, name: _null.project.name };
                        c14 = 2;
                        c15 = 1;
                        const obj5 = { value: firstPublishDescription(_null.project), done: false };
                        return obj5;
                      }
                    }
                  }
                }
              }
              c15 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (1 === c14) {
            c12 = 0;
            closure_139_25.delete(projectId);
            throw closure_13;
          } else if (2 === c14) {
            if (arg0 === 1) {
              c15 = 3;
              throw value;
            } else if (arg0 === 2) {
              c12 = 0;
              closure_139_25.delete(projectId);
              c15 = 3;
              return { value, done: true };
            } else {
              obj4.description = value;
              c14 = 3;
              c15 = 1;
              const obj7 = { value: promptFirstPublish(obj4), done: false };
              return obj7;
            }
          } else if (3 === c14) {
            if (arg0 === 1) {
              c15 = 3;
              throw value;
            } else if (arg0 === 2) {
              c12 = 0;
              closure_139_25.delete(projectId);
              c15 = 3;
              return { value, done: true };
            } else {
              closure_6 = value;
              c12 = 0;
              closure_139_25.delete(projectId);
              const tmp129 = closure_6;
              if (tmp129) {
                if (!closure_139_14.isProjectPublishing(projectId)) {
                  const tmp47 = closure_139_17(projectId, guildId);
                  closure_3 = tmp47;
                  if (tmp47 == null) {
                    closure_3 = _null;
                  }
                  _null = closure_3;
                }
              }
              c15 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (4 === c14) {
            c12 = 0;
            closure_139_25.delete(projectId);
            throw closure_13;
          } else if (arg0 === 1) {
            c15 = 3;
            throw value;
          } else if (arg0 === 2) {
            c12 = 0;
            closure_139_25.delete(projectId);
            c15 = 3;
            return { value, done: true };
          } else {
            c12 = 0;
            closure_139_25.delete(projectId);
            if (closure_139_14.isProjectPublishing(projectId)) {
              c15 = 3;
              return { value: "IconComponent", done: null };
            } else {
              obj4 = closure_139_17(projectId, guildId);
              let integrationStatus;
              if (obj4 != null) {
                integrationStatus = obj4.input.integrationStatus;
              }
              let c5 = integrationStatus;
              if (integrationStatus == null) {
                c5 = null;
              }
              promptFirstPublish = c5;
              if (null != obj4) {
                const obj9 = { installScope: obj4.project.install_scope, previewReady: true === preview_ready, integrationInstalled, botPermissionsChanged: true === prop1 };
                preview_ready = undefined;
                const requiresPermissionReview = closure_139_0(closure_139_2[28]).requiresPermissionReview;
                closure_139_0(closure_139_2[28]);
                if (promptFirstPublish != null) {
                  preview_ready = promptFirstPublish.preview_ready;
                }
                let prop;
                if (promptFirstPublish != null) {
                  prop = promptFirstPublish.integration_installed;
                }
                integrationInstalled = prop;
                if (prop == null) {
                  integrationInstalled = null;
                }
                prop1 = undefined;
                if (promptFirstPublish != null) {
                  prop1 = promptFirstPublish.bot_permissions_changed;
                }
                if (!requiresPermissionReview(obj9)) {
                  closure_139_23(obj4, intent, closure_2);
                }
              }
              c15 = 3;
              return { value: "IconComponent", done: null };
            }
          }
          if ("consent_then_publish" !== intent.intent) {
            closure_139_23(_null, intent, closure_2);
          } else {
            closure_139_25.add(projectId);
            c12 = 2;
            const requestConsent = platform.requestConsent;
            f156143 = requestConsent;
            if (requestConsent == null) {
              f156143 = (arg0) => closure_2_18(arg0, closure_1_3);
            }
            c14 = 5;
            c15 = 1;
            const obj10 = { value: f156143(projectId), done: false };
            return obj10;
          }
        } catch (tmp101) {
          closure_13 = tmp101;
          if (0 === c12) {
            c15 = 3;
            throw tmp101;
          } else if (1 === tmp103) {
            c14 = 1;
          } else {
            c14 = 4;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
let ConjureProjectStore = ConjureProjectStore_mod;
({ canPublishProject: unpackModuleId, isProjectOwner: closure_12 } = ConjureProjectStore);
ConjureProjectStore = ConjureProjectStore_mod;
const Permissions = Constants.Permissions;
let context = react.createContext(null);
const set = new Set();
let result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishAction.tsx");

export default function useConjurePublishAction(arg0, arg1) {
  let appChannelId;
  let appChannelName;
  let appChannelPending;
  let botInGuild;
  let canPublish;
  let closure_0;
  let guildId;
  let guildName;
  let installScope;
  let integrationStatus;
  let label;
  let memo;
  let project;
  let publishing;
  let status;
  let status1;
  let usesAppChannels;
  _require = arg0;
  context = arg1;
  obj = guildId;
  if (arg1 == null) {
    context = guildId.useContext(memo);
  }
  let guildId1;
  if (context != null) {
    guildId1 = context.guildId;
  }
  if (guildId1 == null) {
    guildId1 = null;
  }
  const tmp3 = _require;
  let obj2 = require("get initialized");
  const items = [usesAppChannels, botInGuild, appChannelName, guildName, integrationStatus, appChannelPending, status, installScope];
  const items1 = [arg0, guildId1];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let appChannelId;
    let flag2;
    let flag3;
    let flag4;
    let tmp10;
    let tmp2 = null;
    if (null != closure_0) {
      tmp2 = null;
      if (null != guildId1) {
        tmp2 = readPublishSubject(tmp, tmp3);
      }
    }
    obj = { canPublish: null != tmp2 && unpackModuleId(tmp2.project), project, guildId, appChannelId, publishing: tmp10, installScope, status, integrationStatus, guildName, appChannelName, appChannelPending: flag2, canManageGuild, canManageChannels, usesAppChannels: flag3, botInGuild, liveNameOutdated: flag4 };
    project = undefined;
    if (tmp2 != null) {
      project = tmp2.project;
    }
    if (project == null) {
      project = null;
    }
    guildId = undefined;
    if (tmp2 != null) {
      guildId = tmp2.guildId;
    }
    if (guildId == null) {
      guildId = null;
    }
    appChannelId = undefined;
    if (tmp2 != null) {
      appChannelId = tmp2.appChannelId;
    }
    if (appChannelId == null) {
      appChannelId = null;
    }
    tmp10 = null != tmp;
    if (tmp10) {
      let isProjectPublishingResult = ConjurePublishStatusStore.isProjectPublishing(tmp);
      const obj2 = ConjurePublishStatusStore;
      if (!isProjectPublishingResult) {
        const publishStatus = obj2.getPublishStatus(tmp);
        let publishing;
        if (publishStatus != null) {
          publishing = publishStatus.publishing;
        }
        isProjectPublishingResult = true === publishing;
      }
      tmp10 = isProjectPublishingResult;
    }
    installScope = undefined;
    if (tmp2 != null) {
      installScope = tmp2.input.installScope;
    }
    if (installScope == null) {
      installScope = null;
    }
    status = undefined;
    if (tmp2 != null) {
      status = tmp2.input.status;
    }
    if (status == null) {
      status = null;
    }
    integrationStatus = undefined;
    if (tmp2 != null) {
      integrationStatus = tmp2.input.integrationStatus;
    }
    if (integrationStatus == null) {
      integrationStatus = null;
    }
    guildName = undefined;
    if (tmp2 != null) {
      guildName = tmp2.input.guildName;
    }
    if (guildName == null) {
      guildName = null;
    }
    appChannelName = undefined;
    if (tmp2 != null) {
      appChannelName = tmp2.input.appChannelName;
    }
    if (appChannelName == null) {
      appChannelName = null;
    }
    flag2 = undefined;
    if (tmp2 != null) {
      flag2 = tmp2.input.appChannelPending;
    }
    if (flag2 == null) {
      flag2 = false;
    }
    canManageGuild = undefined;
    if (tmp2 != null) {
      canManageGuild = tmp2.input.canManageGuild;
    }
    if (canManageGuild == null) {
      canManageGuild = null;
    }
    canManageChannels = undefined;
    if (tmp2 != null) {
      canManageChannels = tmp2.input.canManageChannels;
    }
    if (canManageChannels == null) {
      canManageChannels = null;
    }
    flag3 = undefined;
    if (tmp2 != null) {
      flag3 = tmp2.input.usesAppChannels;
    }
    if (flag3 == null) {
      flag3 = false;
    }
    botInGuild = undefined;
    if (tmp2 != null) {
      botInGuild = tmp2.input.botInGuild;
    }
    if (botInGuild == null) {
      botInGuild = null;
    }
    flag4 = undefined;
    if (tmp2 != null) {
      flag4 = tmp2.input.liveNameOutdated;
    }
    if (flag4 == null) {
      flag4 = false;
    }
    return obj;
  }, items1);
  ({ publishing, project } = stateFromStoresObject);
  guildId = stateFromStoresObject.guildId;
  installScope = stateFromStoresObject.installScope;
  status = stateFromStoresObject.status;
  integrationStatus = stateFromStoresObject.integrationStatus;
  guildName = stateFromStoresObject.guildName;
  appChannelName = stateFromStoresObject.appChannelName;
  appChannelPending = stateFromStoresObject.appChannelPending;
  let canManageGuild = stateFromStoresObject.canManageGuild;
  let canManageChannels = stateFromStoresObject.canManageChannels;
  usesAppChannels = stateFromStoresObject.usesAppChannels;
  botInGuild = stateFromStoresObject.botInGuild;
  const liveNameOutdated = stateFromStoresObject.liveNameOutdated;
  const items2 = [project, installScope, status, integrationStatus, guildName, appChannelName, appChannelPending, canManageGuild, canManageChannels, usesAppChannels, botInGuild, liveNameOutdated];
  ({ canPublish, appChannelId } = stateFromStoresObject);
  memo = obj.useMemo(() => {
    let tmp = null;
    if (null != project) {
      tmp = { installScope, status, integrationStatus, guildName, appChannelName, appChannelPending, canManageGuild, canManageChannels, usesAppChannels, botInGuild, liveNameOutdated };
      obj = { installScope, status, integrationStatus, guildName, appChannelName, appChannelPending, canManageGuild, canManageChannels, usesAppChannels, botInGuild, liveNameOutdated };
    }
    return tmp;
  }, items2);
  let state;
  if (memo != null) {
    const status2 = memo.status;
    if (status2 != null) {
      state = status2.state;
    }
  }
  if (state == null) {
    state = null;
  }
  let installScope1;
  if (memo != null) {
    installScope1 = memo.installScope;
  }
  let tmp9 = "guild" === installScope1;
  if (tmp9) {
    const status3 = memo.status;
    let surface;
    if (status3 != null) {
      surface = status3.surface;
    }
    tmp9 = "bot" === surface;
  }
  let closure_18 = tmp9;
  let id;
  const useEffect = obj.useEffect;
  if (project != null) {
    id = project.id;
  }
  const items3 = [id, guildId, tmp9, state];
  const effect = useEffect(() => {
    let tmp2 = null != project;
    const tmp = project;
    if (tmp2) {
      tmp2 = null != guildId;
    }
    if (tmp2) {
      tmp2 = closure_18;
    }
    if (tmp2) {
      tmp2 = null != state;
    }
    if (tmp2) {
      tmp2 = "unpublished" !== state;
    }
    if (tmp2) {
      const fetchProfile = UserActionCreators.fetchProfile;
      UserActionCreators;
      obj = conjureAppInServer;
      const profile = fetchProfile(obj.conjureProductionBotUserId(tmp), { withMutualGuilds: true });
      profile.catch(f109093);
    }
  }, items3);
  let application_id;
  if (project != null) {
    application_id = project.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  let closure_20 = tmp14;
  const items4 = [application_id, tmp14];
  const effect1 = obj.useEffect(() => {
    const tmp2 = null != application_id && closure_20 && null == ApplicationStore.getApplication(tmp) && !ApplicationStore.isFetchingApplication(tmp);
    if (tmp2) {
      obj = ApplicationActionCreators;
      const application = obj.fetchApplication(tmp);
      application.catch(() => {

      });
    }
  }, items4);
  const items5 = [memo];
  const memo1 = obj.useMemo(() => {
    let conjurePublishAction = null;
    if (null != memo) {
      obj = conjurePublishAction2;
      conjurePublishAction = obj.resolveConjurePublishAction(tmp);
    }
    return conjurePublishAction;
  }, items5);
  const items6 = [arg0, context];
  let tmp18 = null;
  if (null != context) {
    tmp18 = null;
    if (canPublish) {
      tmp18 = null;
      if (null != memo1) {
        const obj3 = { status: status1, guildId, appChannelId, publishing, label, disabled: publishing, run: tmp17 };
        const merged = Object.assign(memo1);
        status1 = undefined;
        if (memo != null) {
          status1 = memo.status;
        }
        if (status1 == null) {
          status1 = null;
        }
        if (publishing) {
          const intl = tmp3(tmp4[20]).intl;
          label = intl.string(context(tmp4[21]).Rhx0rn);
        } else {
          label = memo1.label;
        }
        if (!publishing) {
          publishing = true === context.busy;
        }
        tmp18 = obj3;
      }
    }
  }
  return tmp18;
};
export const ConjurePublishActionContext = context;
export const publishGuildId = function publishGuildId(project, fallbackGuildId) {
  let tmp = null;
  if ("user" !== project.install_scope) {
    let guild_id = project.guild_id;
    if (guild_id == null) {
      guild_id = fallbackGuildId;
    }
    tmp = guild_id;
  }
  return tmp;
};
export const isConjureLiveNameOutdated = function isConjureLiveNameOutdated(application_id) {
  obj = ConjureProjectTypes;
  if (obj.isPreviewlessProject(application_id)) {
    return false;
  } else {
    const application = ApplicationStore.getApplication(application_id.application_id);
    let name;
    if (application != null) {
      name = application.name;
    }
    return null != name && name !== application_id.name;
  }
};
export { requestConjureInstallConsent };
export const saveConjureFirstPublishDetails = function saveConjureFirstPublishDetails() {
  return obj(...arguments);
};
export { runConjurePublishAction };
