// Module ID: 11816
// Function ID: 11817
// Name: useConjurePublishAction
// Dependencies: [5, 19, 2045, 7687, 4821, 4899, 4843, 4901, 6759, 10684, 1087, 6760, 7329, 10701, 11814, 6795, 10712, 10690, 10765, 1128, 3830, 11817, 10755, 584, 8643, 10771, 2002, 11818, 10688, 10773, 11810, 504, 2]
// Exports: default, isConjureLiveNameOutdated, publishGuildId

// Module 11816 (useConjurePublishAction)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1087 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6760 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6795 */;
import ConjureUtils from "ConjureUtils" /* 7329 */;
import UserActionCreators from "UserActionCreators" /* 8643 */;
import conjureAppInServer from "conjureAppInServer" /* 10701 */;
import conjurePublishAction2 from "conjurePublishAction" /* 11818 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import UserProfileStore from "UserProfileStore" /* 7687 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import GuildChannelStore from "GuildChannelStore" /* 4899 */;
import GuildStore from "GuildStore" /* 4843 */;
import PermissionStore from "PermissionStore" /* 4901 */;
import ConjureProjectStore_mod from "ConjureProjectStore" /* 6759 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10684 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c10, c11, closure_4, intent, paths;

let closure_12;
let unpackModuleId;
const f111334 = () => {

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
function startPublish() {
  return obj(...arguments);
}
obj = function _startPublish() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_0 = arg0;
    const isUpdate = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let c4;
      let c5;
      let obj9;
      let projectId;
      let tmp;
      if (c8 === 2) {
        c8 = 3;
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
          let selected_destination_id;
          let closure_7;
          let closure_8;
          let id;
          c8 = 2;
          const tmp4 = c7;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              selected_destination_id = undefined;
              tmp = undefined;
              c5 = undefined;
              closure_7 = undefined;
              closure_8 = undefined;
              let project = closure_0.project;
              ({ platform: c4, guildId: c5 } = closure_2);
              id = project.id;
              set.add(id);
              c6 = 2;
              c7 = 3;
              c8 = 1;
              const obj5 = { value: obj9.requestPublishOptions(id), done: false };
              obj9 = require("conjurePublishConnection");
              return obj5;
            }
          } else if (1 === tmp4) {
            c6 = 0;
            closure_132_24.delete(id);
            throw closure_5;
          } else if (2 === tmp4) {
            c6 = 1;
            message = closure_5;
            let _Error = Error;
            const showError2 = tmp.showError;
            if (message instanceof Error) {
              message = message.message;
            } else {
              const intl2 = closure_132_0(closure_132_2[19]).intl;
              message = intl2.string(closure_132_1(closure_132_2[20]).gMWZeG);
            }
            showError2(message);
            c6 = 0;
            closure_132_24.delete(id);
            c8 = 3;
            return { value: undefined, done: true };
          } else {
            if (3 === tmp4) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                closure_132_24.delete(id);
                c8 = 3;
                return { value, done: true };
              } else {
                closure_7 = value;
                if (1 === closure_7.destinations.length) {
                  const tmp8 = closure_3;
                  selected_destination_id = closure_7.selected_destination_id;
                } else {
                  let tmp7 = closure_7;
                  c7 = 4;
                  c8 = 1;
                  const obj8 = { value: tmp.promptPublishDestination(closure_7), done: false };
                  return obj8;
                }
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else {
              selected_destination_id = value;
              if (arg0 === 2) {
                c6 = 0;
                closure_132_24.delete(id);
                c8 = 3;
                obj = { value, done: true };
                return obj;
              }
            }
            c6 = 0;
            closure_132_24.delete(id);
            if (null != selected_destination_id) {
              if (!closure_132_14.isProjectPublishing(id)) {
                const publishStatus = closure_132_14.getPublishStatus(id);
                let publishing;
                if (publishStatus != null) {
                  publishing = publishStatus.publishing;
                }
                if (true !== publishing) {
                  let tmp26 = null != closure_0.guildId;
                  if (tmp26) {
                    const status = closure_0.input.status;
                    let surface;
                    if (status != null) {
                      surface = status.surface;
                    }
                    tmp26 = "activity" === surface;
                  }
                  if (tmp26) {
                    tmp26 = null == closure_0.appChannelId;
                  }
                  if (tmp26) {
                    tmp26 = !isUpdate.isUpdate;
                  }
                  closure_8 = tmp26;
                  const tmp32 = closure_8;
                  if (tmp32) {
                    closure_132_22(id, true);
                  }
                  const obj3 = closure_132_0(closure_132_2[18]);
                  const publishProjectResult = obj3.publishProject(id, selected_destination_id);
                  let nextPromise = publishProjectResult.then(function(ok) {
                    if (true === ok.ok) {
                      return ok;
                    } else {
                      const tmp7 = closure_0;
                      if (ok.code === closure_0(closure_2[21]).PREVIEW_BOT_NOT_INSTALLED_CODE) {
                        const tmp7Result = tmp7(closure_2[17]);
                        const project = tmp7Result.getProject(projectId);
                        project.catch(() => {

                        });
                      }
                      const _Error = Error;
                      const self = this;
                      const self2 = this;
                      const error = new Error(isUpdate(tmp8[21])(ok));
                      throw error;
                    }
                  });
                  nextPromise.then((result) => {
                    const channel_skipped = result;
                    let tmp = closure_1_0;
                    const showConfirmation = closure_4.showConfirmation;
                    const intl = closure_1_0(closure_1_2[19]).intl;
                    showConfirmation(intl.string(isUpdate(closure_1_2[20]).S6Px3n));
                    if (null != channel_skipped.guildId) {
                      const fetchProfile = tmp(tmp2[24]).fetchProfile;
                      tmp(closure_1_2[24]);
                      const tmpResult3 = tmp(closure_1_2[13]);
                      const profile = fetchProfile(tmpResult3.conjureProductionBotUserId(closure_3), { withMutualGuilds: true });
                      profile.catch(f111334);
                    }
                    const tmpResult4 = tmp(closure_1_2[22]);
                    result = tmpResult4.refreshPublishedProject(projectId, { isPreview: false });
                    const catchPromise1 = result.catch(() => {

                    });
                    const nextPromise = catchPromise1.then(() => {
                      function waitForAppChannel() {
                        return closure_1_23(...arguments);
                      }
                      let tmp;
                      if (closure_2_8) {
                        if (true !== channel_skipped.channel_skipped) {
                          tmp = waitForAppChannel(projectId, closure_2_5);
                        }
                      }
                      return tmp;
                    });
                    const cleanupPromise = nextPromise.finally(() => {
                      obj = isUpdate(closure_2_2[23]);
                      const obj2 = { type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: false };
                      obj.dispatch(obj2);
                    });
                    cleanupPromise.catch(() => {

                    });
                  }, (message) => {
                    obj = isUpdate(closure_2[23]);
                    const obj2 = { type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: false };
                    obj.dispatch(obj2);
                    const showError = closure_1_4.showError;
                    const tmp = isUpdate;
                    if (message instanceof Error) {
                      message = message.message;
                    } else {
                      const intl = closure_0(tmp2[19]).intl;
                      message = intl.string(tmp(tmp2[20]).gMWZeG);
                    }
                    showError(message);
                  });
                }
              }
              let showError = tmp.showError;
              let intl = closure_132_0(closure_132_2[19]).intl;
              showError(intl.string(closure_132_1(closure_132_2[20])["TD/ze/"]));
            }
            c8 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp82) {
          closure_5 = tmp82;
          if (0 === c6) {
            c8 = 3;
            throw tmp82;
          } else if (1 === tmp84) {
            c7 = 1;
          } else {
            c7 = 2;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function setAppChannelPending(projectId, arg1) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: true };
  obj.dispatch(obj2);
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
  obj = _asyncToGenerator(async (arg0, value, arg2) => {
    let closure_2;
    let publishState;
    let surface;
    let closure_0 = arg0;
    paths = arg2;
    if (c7 === 2) {
      c7 = 3;
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
            let closure_5 = tmp;
            let closure_1 = paths;
            publishApprovalUrl = undefined;
            let conjurePublishAction;
            const platform = paths.platform;
            if (true !== paths.busy) {
              if (!set.has(closure_0)) {
                const tmp9 = readPublishSubject(closure_0, tmp31);
                if (null != tmp9) {
                  const obj8 = publishApprovalUrl;
                  publishApprovalUrl = publishApprovalUrl.getPublishApprovalUrl(tmp28);
                  if (null != publishApprovalUrl) {
                    if (authStore2(tmp9.project)) {
                      c6 = 1;
                      c7 = 1;
                      const obj4 = { value: require("asyncRequire")(paths[25], paths.paths), done: false };
                      return obj4;
                    }
                  }
                  if (!obj8.isProjectPublishing(closure_0)) {
                    const status = tmp9.input.status;
                    let publishing;
                    if (status != null) {
                      publishing = status.publishing;
                    }
                    if (true !== publishing) {
                      const obj9 = require("conjurePublishAction");
                      conjurePublishAction = obj9.resolveConjurePublishAction(tmp9.input);
                      const obj5 = { entryPoint: tmp29, publishState, surface, installScope: tmp9.project.install_scope, action: conjurePublishAction.action };
                      const status3 = tmp9.input.status;
                      let state;
                      const trackConjurePublishActionClicked = require("ConjureAnalytics").trackConjurePublishActionClicked;
                      const tmp37 = require("ConjureAnalytics");
                      if (status3 != null) {
                        state = status3.state;
                      }
                      publishState = state;
                      if (state == null) {
                        publishState = null;
                      }
                      const status2 = tmp9.input.status;
                      surface = undefined;
                      if (status2 != null) {
                        surface = status2.surface;
                      }
                      if (surface == null) {
                        surface = null;
                      }
                      const result = trackConjurePublishActionClicked(tmp28, obj5);
                      if (null == conjurePublishAction.disabledReason) {
                        const tmp34Result = require("conjurePublishConnection");
                        tmp34Result.preparePublish(closure_0);
                        if (null == conjurePublishAction.confirmReason) {
                          c6 = 2;
                          c7 = 1;
                          const obj6 = { value: continuePublish(closure_0, conjurePublishAction, tmp30), done: false };
                          return obj6;
                        } else {
                          platform.showPublishBlocked(require("conjurePublishBlockedReason").ConjurePublishBlockedReason.MISSING_MANAGE_CHANNELS, conjurePublishAction.confirmReason, () => {
                            const promise = closure_2_27(closure_1_0, closure_1_3, closure_1_1);
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
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            const result1 = value.promptPublishApproval(publishApprovalUrl);
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        }
        c7 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp24) {
        c7 = 3;
        throw tmp24;
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
        return { value: "IconComponent", done: null };
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
            const tmp68 = readPublishSubject(closure_0, guildId);
            const tmp66 = closure_2;
            if (null != tmp68) {
              if (!projectPublishing.isProjectPublishing(closure_0)) {
                if ("consent_then_publish" !== intent.intent) {
                  c10 = 1;
                  c11 = 1;
                  const obj4 = { value: startPublish(tmp68, intent, tmp66), done: false };
                  return obj4;
                } else {
                  set.add(closure_0);
                  c9 = 1;
                  const requestConsent = platform.requestConsent;
                  let f159172 = requestConsent;
                  if (requestConsent == null) {
                    f159172 = (arg0) => closure_2_18(arg0, closure_1_3);
                  }
                  c10 = 3;
                  c11 = 1;
                  const obj5 = { value: f159172(closure_0), done: false };
                  return obj5;
                }
              }
            }
          }
        } else if (1 === c10) {
          if (arg0 === 1) {
            c11 = 3;
            throw value;
          } else if (arg0 === 2) {
            c11 = 3;
            const obj6 = { value, done: true };
            return obj6;
          }
        } else if (2 === c10) {
          c9 = 0;
          closure_135_24.delete(closure_0);
          throw closure_8;
        } else if (3 === c10) {
          if (arg0 === 1) {
            c11 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 0;
            closure_135_24.delete(closure_0);
            c11 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            c9 = 0;
            closure_135_24.delete(closure_0);
            if (closure_135_14.isProjectPublishing(closure_0)) {
              c11 = 3;
              return { value: "IconComponent", done: null };
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
                const obj8 = { installScope: _null.project.install_scope, previewReady: true === preview_ready, integrationInstalled, botPermissionsChanged: true === prop1 };
                preview_ready = undefined;
                const requiresPermissionReview = closure_135_0(closure_135_2[30]).requiresPermissionReview;
                const tmp62 = closure_135_0(closure_135_2[30]);
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
                if (!requiresPermissionReview(obj8)) {
                  c10 = 4;
                  c11 = 1;
                  const obj9 = { value: closure_135_20(_null, intent, closure_2), done: false };
                  return obj9;
                }
              }
              c11 = 3;
              return { value: "IconComponent", done: null };
            }
          }
        } else if (arg0 === 1) {
          c11 = 3;
          throw value;
        } else if (arg0 === 2) {
          c11 = 3;
          obj = { value, done: true };
          return obj;
        }
        c11 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp42) {
        closure_8 = tmp42;
        if (0 === c9) {
          c11 = 3;
          throw tmp42;
        } else {
          c10 = 2;
        }
      }
    }
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
  let approvalUrl;
  let botInGuild;
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
  const tmp3 = _require;
  const items = [usesAppChannels, botInGuild, appChannelName, guildName, integrationStatus, appChannelPending, status, installScope];
  const items1 = [arg0, guildId1];
  const obj2 = require("get initialized");
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let appChannelId;
    let flag2;
    let flag3;
    let flag4;
    let publishApprovalUrl;
    let tmp10;
    let tmp2 = null;
    if (null != closure_0) {
      tmp2 = null;
      if (null != guildId1) {
        tmp2 = readPublishSubject(tmp, tmp3);
      }
    }
    obj = { canPublish: null != tmp2 && unpackModuleId(tmp2.project), project, guildId, appChannelId, publishing: tmp10, approvalUrl: publishApprovalUrl, installScope, status, integrationStatus, guildName, appChannelName, appChannelPending: flag2, canManageGuild, canManageChannels, usesAppChannels: flag3, botInGuild, liveNameOutdated: flag4 };
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
    tmp10 = null != tmp && null == ConjurePublishStatusStore.getPublishApprovalUrl(tmp);
    if (tmp10) {
      let isProjectPublishingResult = ConjurePublishStatusStore.isProjectPublishing(tmp);
      if (!isProjectPublishingResult) {
        const publishStatus = ConjurePublishStatusStore.getPublishStatus(tmp);
        let publishing;
        if (publishStatus != null) {
          publishing = publishStatus.publishing;
        }
        isProjectPublishingResult = true === publishing;
      }
      tmp10 = isProjectPublishingResult;
    }
    publishApprovalUrl = null;
    if (null != closure_0) {
      publishApprovalUrl = ConjurePublishStatusStore.getPublishApprovalUrl(tmp);
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
  ({ canPublish, approvalUrl, appChannelId } = stateFromStoresObject);
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
      profile.catch(f111334);
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
  if (null != context) {
    if (canPublish) {
      if (null != memo1) {
        let label;
        if (null == approvalUrl) {
          label = memo1.label;
        } else {
          const intl = tmp3(tmp4[19]).intl;
          label = intl.string(context(tmp4[20]).qru9M5);
        }
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
          const intl2 = tmp3(tmp4[19]).intl;
          label = intl2.string(context(tmp4[20]).Rhx0rn);
        }
        if (!publishing) {
          publishing = true === context.busy;
        }
        return obj3;
      }
    }
  }
  return null;
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
export { runConjurePublishAction };
