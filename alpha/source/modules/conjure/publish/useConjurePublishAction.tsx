// Module ID: 17110
// Function ID: 17111
// Name: useConjurePublishAction
// Dependencies: [5, 19, 5440, 7320, 2065, 4748, 2087, 4750, 13213, 10651, 1085, 6946, 6945, 11409, 17111, 17082, 6852, 11413, 11411, 17112, 1126, 3849, 584, 8305, 17113, 11412, 17035, 17079, 504, 2]
// Exports: default, isConjureLiveNameOutdated, openConjurePublishedApp

// Module 17110 (useConjurePublishAction)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6852 */;
import ConjureUtils from "ConjureUtils" /* 6945 */;
import ConjureTypes from "ConjureTypes" /* 6946 */;
import UserActionCreators from "UserActionCreators" /* 8305 */;
import ConjureProjectStore2 from "ConjureProjectStore" /* 10651 */;
import conjureAppInServer from "conjureAppInServer" /* 11409 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11411 */;
import openConjurePublishDestination from "openConjurePublishDestination" /* 17111 */;
import conjurePublishFailureMessageDefault from "conjurePublishFailureMessage" /* 17112 */;
import conjurePublishAction2 from "conjurePublishAction" /* 17113 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5440 */;
import UserProfileStore from "UserProfileStore" /* 7320 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildChannelStore from "GuildChannelStore" /* 4748 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 13213 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureProjectStore = ConjureProjectStore2;
let _require, c10, c11, c5, c6, closure_8, intent;

let closure_12;
let tmp;
let unpackModuleId;
const _modDef3849 = tmp(3849);
const f127888 = () => {

};
function readPublishSubject(projectId, guildId) {
  let canResult;
  let canResult1;
  let flag;
  let name;
  let obj4;
  let obj5;
  let obj6;
  let tmp9;
  const project = ConjureProjectStore.getProject(projectId);
  if (null == project) {
    return null;
  } else {
    let tmp2 = null;
    if ("user" !== project.install_scope) {
      let guild_id = project.guild_id;
      if (guild_id == null) {
        guild_id = guildId;
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
    obj4 = { installScope: project.install_scope, status: ConjureProjectStore.getPublishStatus(projectId), integrationStatus: ConjureProjectStore.getIntegrationStatus(projectId), guildName: name, appChannelName: tmp9, appChannelPending: ConjureProjectStore.isAppChannelPending(projectId), canManageGuild: canResult, canManageChannels: canResult1, usesAppChannels: obj5.projectUsesAppChannels(project), botInGuild: obj6.readConjureBotInGuild(project, tmp2), liveNameOutdated: flag };
    name = undefined;
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
    obj5 = ConjureTypes;
    flag = false;
    obj6 = conjureAppInServer;
    const obj7 = ConjureTypes;
    if (!obj7.isPreviewlessProject(project)) {
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
function openDestinationFor(applicationId, channel, openProfile) {
  obj = openConjurePublishDestination;
  const obj2 = { applicationId: applicationId.project.application_id, guildId: applicationId.guildId, appChannelId: applicationId.appChannelId, openProfile: openProfile.openProfile, openAutomodSettings: openProfile.openAutomodSettings };
  return obj.openConjurePublishDestination(channel, obj2);
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
        return { value: "IconComponent", done: "+51" };
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
            return { value: "IconComponent", done: "+51" };
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
            const obj5 = closure_131_0(closure_131_2[15]);
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
            const obj2 = closure_131_0(closure_131_2[18]);
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
          const openConjureAppInstallModal = closure_1(applicationId[17]).openConjureAppInstallModal;
          closure_1(applicationId[17]);
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
function startPublish(project, navigatesOnPublish, platform) {
  project = project.project;
  platform = platform.platform;
  const guildId = platform.guildId;
  const id = project.id;
  let destination = null;
  if (navigatesOnPublish.navigatesOnPublish) {
    destination = navigatesOnPublish.destination;
  }
  let tmp2 = null;
  if ("user" !== project.install_scope) {
    tmp2 = null;
    if (null == destination) {
      tmp2 = closure_11(id);
    }
  }
  if (tmp2 != null) {
    tmp2.catch(() => {

    });
  }
  if ("channel" === destination) {
    obj = project(platform[22]);
    let obj2 = { type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: id, pending: true };
    const dispatchResult = obj.dispatch(obj2);
  }
  let promise = closure_12(id);
  let nextPromise = promise.then(function(ok) {
    if (true === ok.ok) {
      return ok;
    } else {
      if (20088 === ok.code) {
        obj = ConjureActionCreators;
        project = obj.getProject(id);
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
  promise = nextPromise.then(() => {
    obj = ConjureActionCreators;
    const result = obj.refreshPublishedProject(id, { isPreview: false });
    return result.catch(() => {

    });
  }, () => {

  });
  let nextPromise1 = nextPromise.then((channel_skipped) => {
    let projectId;
    if (null != project.guildId) {
      let tmp = project;
      const fetchProfile = UserActionCreators.fetchProfile;
      UserActionCreators;
      obj = conjureAppInServer;
      const profile = fetchProfile(obj.conjureProductionBotUserId(project), { withMutualGuilds: true });
      profile.catch(f127888);
    }
    if (true === channel_skipped.channel_skipped) {
      let obj2 = DispatcherDefault;
      const obj3 = { type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: id, pending: false };
      obj2.dispatch(obj3);
    }
    const tmp10 = null != destination && true !== channel_skipped.channel_skipped;
    if (tmp10) {
      const nextPromise = promise.then(() => {
        function waitForAppChannel() {
          return closure_1_22(...arguments);
        }
        let tmp;
        if ("channel" === destination) {
          tmp = waitForAppChannel(projectId, guildId);
        }
        return tmp;
      });
      const cleanupPromise = nextPromise.finally(() => {
        obj = project(platform[22]);
        const obj2 = { type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: false };
        obj.dispatch(obj2);
      });
      const nextPromise1 = cleanupPromise.then(() => {
        let tmp = readPublishSubject(projectId, guildId);
        if (tmp == null) {
          tmp = closure_1_0;
        }
        obj = closure_0(platform[14]);
        const obj2 = { applicationId: tmp.project.application_id, guildId: tmp.guildId, appChannelId: tmp.appChannelId, openProfile: closure_1_2.openProfile, openAutomodSettings: closure_1_2.openAutomodSettings };
        return obj.openConjurePublishDestination(destination, obj2);
      });
      nextPromise1.catch(() => {

      });
    }
  }, (message) => {
    obj = DispatcherDefault;
    const obj2 = { type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: id, pending: false };
    obj.dispatch(obj2);
    const showError = platform.showError;
    if (message instanceof Error) {
      message = message.message;
    } else {
      const intl = intl2.intl;
      message = intl.string(_modDef3849.gMWZeG);
    }
    showError(message);
  });
  if (null != tmp2) {
    if (null != project.guildId) {
      const nextPromise2 = nextPromise.then(() => {

      });
      nextPromise2.catch(() => {

      });
      const obj5 = { projectId: id, guildId: project.guildId, applicationId: null, projectName: null, publish: nextPromise2, initialDraft: tmp2 };
      ({ application_id: obj3.applicationId, name: obj3.projectName } = project);
      platform.openPublishNotes(obj5);
    }
  }
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
        return { value: "IconComponent", done: "+51" };
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
        return { value: "IconComponent", done: "+51" };
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
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "+51" };
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = closure_2;
            const platform = closure_2.platform;
            if (true !== closure_2.busy) {
              if (!set.has(closure_0)) {
                const tmp5 = readPublishSubject(closure_0, tmp27);
                if (null != tmp5) {
                  if (!projectPublishing.isProjectPublishing(closure_0)) {
                    const obj2 = require("conjurePublishAction");
                    const conjurePublishAction = obj2.resolveConjurePublishAction(tmp5.input);
                    if (null != conjurePublishAction) {
                      const obj5 = { entryPoint: tmp25, publishState, surface, installScope: tmp5.project.install_scope, action: conjurePublishAction.action };
                      const status2 = tmp5.input.status;
                      let state;
                      const trackConjurePublishActionClicked = require("ConjureAnalytics").trackConjurePublishActionClicked;
                      const tmp7Result = require("ConjureAnalytics");
                      if (status2 != null) {
                        state = status2.state;
                      }
                      publishState = state;
                      if (state == null) {
                        publishState = null;
                      }
                      const status = tmp5.input.status;
                      surface = undefined;
                      if (status != null) {
                        surface = status.surface;
                      }
                      if (surface == null) {
                        surface = null;
                      }
                      const result = trackConjurePublishActionClicked(tmp24, obj5);
                      if ("open" !== conjurePublishAction.intent) {
                        if (null == conjurePublishAction.disabledReason) {
                          const integrationStatus = tmp5.input.integrationStatus;
                          let preview_ready;
                          if (integrationStatus != null) {
                            preview_ready = integrationStatus.preview_ready;
                          }
                          if (true === preview_ready) {
                            if (null == conjurePublishAction.confirmReason) {
                              c6 = 1;
                              c5 = 1;
                              const obj6 = { value: continuePublish(closure_0, conjurePublishAction, tmp26), done: false };
                              return obj6;
                            } else {
                              platform.showPublishBlocked(require("conjurePublishBlockedReason").ConjurePublishBlockedReason.MISSING_MANAGE_CHANNELS, conjurePublishAction.confirmReason, () => {
                                const promise = closure_2_26(closure_0, conjurePublishAction, closure_1);
                                promise.catch(() => {

                                });
                              });
                            }
                          } else {
                            platform.showPublishBlocked(require("conjurePublishBlockedReason").ConjurePublishBlockedReason.NO_PREVIEW);
                          }
                        } else {
                          platform.showPublishBlocked(require("conjurePublishBlockedReason").ConjurePublishBlockedReason.MISSING_MANAGE_SERVER, conjurePublishAction.disabledReason);
                        }
                      } else if (null != conjurePublishAction.destination) {
                        let promise = openDestinationFor(tmp5, conjurePublishAction.destination, platform);
                        const catchPromise = promise.catch(() => {

                        });
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
        return { value: "IconComponent", done: "+51" };
      } catch (tmp20) {
        c5 = 3;
        throw tmp20;
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
  obj = _asyncToGenerator(async (arg0, value, arg2) => {
    let closure_1;
    let preview_ready;
    let prop1;
    let closure_0 = arg0;
    intent = value;
    let closure_2 = arg2;
    if (c11 === 2) {
      c11 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      let c9;
      try {
        let _null;
        let integrationInstalled;
        let guildId;
        c11 = 2;
        if (0 === c10) {
          if (arg0 === 1) {
            c11 = 3;
            throw value;
          } else if (arg0 === 2) {
            c11 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_7 = tmp;
            let closure_6 = tmp4;
            _null = undefined;
            integrationInstalled = undefined;
            guildId = closure_2.guildId;
            const platform = closure_2.platform;
            const tmp71 = readPublishSubject(closure_0, guildId);
            const tmp69 = closure_2;
            if (null != tmp71) {
              if (!projectPublishing.isProjectPublishing(closure_0)) {
                if ("consent_then_publish" !== intent.intent) {
                  startPublish(tmp71, intent, tmp69);
                } else {
                  set.add(closure_0);
                  c9 = 1;
                  const requestConsent = platform.requestConsent;
                  let f156025 = requestConsent;
                  if (requestConsent == null) {
                    f156025 = (arg0) => closure_2_19(arg0, closure_1_3);
                  }
                  c10 = 2;
                  c11 = 1;
                  const obj4 = { value: f156025(closure_0), done: false };
                  return obj4;
                }
              }
            }
          }
        } else if (1 === c10) {
          c9 = 0;
          closure_135_23.delete(closure_0);
          throw closure_8;
        } else if (arg0 === 1) {
          c11 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 0;
          closure_135_23.delete(closure_0);
          c11 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c9 = 0;
          closure_135_23.delete(closure_0);
          if (closure_135_13.isProjectPublishing(closure_0)) {
            c11 = 3;
            return { value: "IconComponent", done: "+51" };
          } else {
            _null = closure_135_17(closure_0, guildId);
            let integrationStatus;
            if (_null != null) {
              integrationStatus = _null.input.integrationStatus;
            }
            let c4 = integrationStatus;
            if (integrationStatus == null) {
              c4 = null;
            }
            integrationInstalled = c4;
            if (null != _null) {
              const obj5 = { installScope: _null.project.install_scope, previewReady: true === preview_ready, integrationInstalled, botPermissionsChanged: true === prop1 };
              preview_ready = undefined;
              const requiresPermissionReview = closure_135_0(closure_135_2[27]).requiresPermissionReview;
              const tmp65 = closure_135_0(closure_135_2[27]);
              if (integrationInstalled != null) {
                preview_ready = integrationInstalled.preview_ready;
              }
              let prop;
              if (integrationInstalled != null) {
                prop = integrationInstalled.integration_installed;
              }
              integrationInstalled = prop;
              if (prop == null) {
                integrationInstalled = null;
              }
              prop1 = undefined;
              if (integrationInstalled != null) {
                prop1 = integrationInstalled.bot_permissions_changed;
              }
              if (!requiresPermissionReview(obj5)) {
                closure_135_21(_null, intent, closure_2);
              }
            }
            c11 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        }
        c11 = 3;
        return { value: "IconComponent", done: "+51" };
      } catch (tmp45) {
        closure_8 = tmp45;
        if (0 === c9) {
          c11 = 3;
          throw tmp45;
        } else {
          c10 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
({ draftPatchNotes: unpackModuleId, publishProject: closure_12 } = ConjureConnectionStore);
const canPublishProject = ConjureProjectStore2.canPublishProject;
const Permissions = Constants.Permissions;
let context = react.createContext(null);
const set = new Set();
let result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishAction.tsx");

export default function useConjurePublishAction(arg0, arg1) {
  let appChannelId;
  let appChannelName;
  let appChannelPending;
  let canPublish;
  let closure_0;
  let guildId;
  let guildName;
  let installScope;
  let integrationStatus;
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
  const items = [usesAppChannels, appChannelName, guildName, integrationStatus, appChannelPending, status, installScope];
  const items1 = [arg0, guildId1];
  const obj2 = require("get initialized");
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let appChannelId;
    let flag;
    let flag2;
    let flag3;
    let isProjectPublishingResult;
    let tmp2 = null;
    if (null != closure_0) {
      tmp2 = null;
      if (null != guildId1) {
        tmp2 = readPublishSubject(tmp, tmp3);
      }
    }
    obj = { canPublish: null != tmp2 && canPublishProject(tmp2.project), project, guildId, appChannelId, publishing: isProjectPublishingResult, installScope, status, integrationStatus, guildName, appChannelName, appChannelPending: flag, canManageGuild, canManageChannels, usesAppChannels: flag2, botInGuild, liveNameOutdated: flag3 };
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
    installScope = undefined;
    isProjectPublishingResult = null != tmp && ConjureProjectStore.isProjectPublishing(tmp);
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
    flag = undefined;
    if (tmp2 != null) {
      flag = tmp2.input.appChannelPending;
    }
    if (flag == null) {
      flag = false;
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
    flag2 = undefined;
    if (tmp2 != null) {
      flag2 = tmp2.input.usesAppChannels;
    }
    if (flag2 == null) {
      flag2 = false;
    }
    botInGuild = undefined;
    if (tmp2 != null) {
      botInGuild = tmp2.input.botInGuild;
    }
    if (botInGuild == null) {
      botInGuild = null;
    }
    flag3 = undefined;
    if (tmp2 != null) {
      flag3 = tmp2.input.liveNameOutdated;
    }
    if (flag3 == null) {
      flag3 = false;
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
  let botInGuild = stateFromStoresObject.botInGuild;
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
  let tmp7 = "guild" === installScope1;
  if (tmp7) {
    const status3 = memo.status;
    let surface;
    if (status3 != null) {
      surface = status3.surface;
    }
    tmp7 = "bot" === surface;
  }
  let closure_18 = tmp7;
  let id;
  const useEffect = obj.useEffect;
  if (project != null) {
    id = project.id;
  }
  const items3 = [id, guildId, tmp7, state];
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
      profile.catch(f127888);
    }
  }, items3);
  let application_id;
  if (project != null) {
    application_id = project.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  let closure_20 = tmp12;
  const items4 = [application_id, tmp12];
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
  let tmp16 = null;
  if (null != context) {
    tmp16 = null;
    if (canPublish) {
      tmp16 = null;
      if (null != memo1) {
        const obj3 = { status: status1, guildId, appChannelId, publishing, disabled: publishing, run: tmp15 };
        const merged = Object.assign(memo1);
        status1 = undefined;
        if (memo != null) {
          status1 = memo.status;
        }
        if (status1 == null) {
          status1 = null;
        }
        if (!publishing) {
          let flag = true;
          publishing = true === context.busy;
        }
        tmp16 = obj3;
      }
    }
  }
  return tmp16;
};
export const ConjurePublishActionContext = context;
export const isConjureLiveNameOutdated = function isConjureLiveNameOutdated(application_id) {
  obj = ConjureTypes;
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
export const openConjurePublishedApp = function openConjurePublishedApp(projectId, guildId) {
  let tmp4;
  const tmp = readPublishSubject(projectId, guildId.guildId);
  if (null != tmp) {
    const obj2 = { status: tmp4 };
    const resolveConjurePublishAction = conjurePublishAction2.resolveConjurePublishAction;
    conjurePublishAction2;
    const merged = Object.assign(tmp.input);
    tmp4 = null;
    const tmp8 = require;
    if (null != tmp.input.status) {
      obj = { state: "up_to_date" };
      const merged1 = Object.assign(tmp.input.status);
      tmp4 = obj;
    }
    const conjurePublishAction = resolveConjurePublishAction(obj2);
    let destination;
    if (conjurePublishAction != null) {
      destination = conjurePublishAction.destination;
    }
    if (null != destination) {
      const platform = guildId.platform;
      const obj4 = { applicationId: tmp.project.application_id, guildId: null, appChannelId: null, openProfile: null, openAutomodSettings: null };
      ({ guildId: obj3.guildId, appChannelId: obj3.appChannelId } = tmp);
      ({ openProfile: obj3.openProfile, openAutomodSettings: obj3.openAutomodSettings } = platform);
      const tmp8Result = tmp8(17111);
      const result = tmp8Result.openConjurePublishDestination(destination, obj4);
      result.catch(() => {

      });
    }
  }
};
export { runConjurePublishAction };
