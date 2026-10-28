// Module ID: 11803
// Function ID: 11804
// Name: useConjurePublishAction
// Dependencies: [5, 19, 2042, 7738, 4856, 4934, 4878, 4936, 6808, 10749, 1084, 6809, 7382, 10768, 11801, 6845, 10779, 10757, 10832, 1125, 3863, 11804, 10823, 584, 8707, 10842, 10838, 1999, 11805, 10755, 10840, 11796, 504, 11806, 2]
// Exports: default, isConjureLiveNameOutdated, publishGuildId

// Module 11803 (useConjurePublishAction)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1084 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6809 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6845 */;
import ConjureUtils from "ConjureUtils" /* 7382 */;
import UserActionCreators from "UserActionCreators" /* 8707 */;
import conjureAppInServer from "conjureAppInServer" /* 10768 */;
import ConjurePublishTypes from "ConjurePublishTypes" /* 10842 */;
import conjurePublishAction2 from "conjurePublishAction" /* 11805 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2042 */;
import UserProfileStore from "UserProfileStore" /* 7738 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import GuildChannelStore from "GuildChannelStore" /* 4934 */;
import GuildStore from "GuildStore" /* 4878 */;
import PermissionStore from "PermissionStore" /* 4936 */;
import ConjureProjectStore_mod from "ConjureProjectStore" /* 6808 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10749 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c11, c12, c4, closure_4, closure_6, intent;

let closure_12;
let unpackModuleId;
const f112373 = () => {

};
function approvalPending(projectId) {
  obj = ConjurePublishStatusStore;
  if (null == ConjurePublishStatusStore.getPublishApprovalUrl(projectId)) {
    return false;
  } else {
    const publishProgress = obj.getPublishProgress(projectId);
    let stage;
    if (publishProgress != null) {
      stage = publishProgress.stage;
    }
    return null == stage || "preparing" === stage || "approval" === stage;
  }
}
function readPublishSubject(id, arg1) {
  let canResult;
  let canResult1;
  let flag;
  let name;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  let tmp9;
  const project = ConjureProjectStore.getProject(id);
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
    obj4 = { installScope: project.install_scope, status: ConjurePublishStatusStore.getPublishStatus(id), integrationStatus: obj.getIntegrationStatus(id), guildName: name, appChannelName: tmp9, appChannelPending: obj5.isAppChannelPending(id), canManageGuild: canResult, canManageChannels: canResult1, usesAppChannels: obj6.projectUsesAppChannels(project), botInGuild: obj7.readConjureBotInGuild(project, tmp2), liveNameOutdated: flag };
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
            const tmp30 = closure_0;
            const tmp31 = closure_1;
            if (project != null) {
              prop = project.preview_application_id;
            }
            if (null != project) {
              if (null != prop) {
                const obj10 = require("ConjureInstallTarget");
                guildId = obj10.conjureInstallGuildId(project, obj15.getIntegrationStatus(tmp30), tmp31);
                const obj11 = require("ApplicationActionCreators");
                let application = obj11.fetchApplication(prop);
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
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
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
            const obj8 = { value: promise, done: false };
            return obj8;
          }
        } else if (2 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            const obj5 = closure_131_0(closure_131_2[14]);
            let result = obj5.repairConjureGuildHints(project, guildId);
            c4 = 3;
            c5 = 1;
            const obj12 = {
              value: result.catch(() => {

                      }),
              done: false
            };
            return obj12;
          }
        } else if (3 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            const obj2 = closure_131_0(closure_131_2[17]);
            const project1 = obj2.getProject(closure_0);
            c4 = 4;
            c5 = 1;
            const obj14 = {
              value: project1.catch(() => {

                      }),
              done: false
            };
            return obj14;
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
      } catch (tmp26) {
        c5 = 3;
        throw tmp26;
      }
    }
  });
  return obj(...arguments);
};
function startPublish() {
  return obj(...arguments);
}
obj = function _startPublish() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    const isUpdate = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2, arg3) => {
      let c5;
      let c6;
      let obj9;
      let projectId;
      let tmp;
      if (c9 === 2) {
        c9 = 3;
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
          let closure_8;
          let closure_9;
          let id;
          c9 = 2;
          const tmp4 = c8;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              closure_4 = tmp4;
              closure_2 = closure_3;
              selected_destination_id = undefined;
              tmp = undefined;
              c6 = undefined;
              closure_8 = undefined;
              closure_9 = undefined;
              let project = closure_0.project;
              ({ platform: c5, guildId: c6 } = closure_2);
              id = project.id;
              set.add(id);
              c7 = 2;
              c8 = 3;
              c9 = 1;
              const obj5 = { value: obj9.requestPublishOptions(id), done: false };
              obj9 = require("conjurePublishConnection");
              return obj5;
            }
          } else if (1 === tmp4) {
            c7 = 0;
            closure_133_25.delete(id);
            throw closure_6;
          } else if (2 === tmp4) {
            c7 = 1;
            message = closure_6;
            let _Error = Error;
            const showError2 = tmp.showError;
            if (message instanceof Error) {
              message = message.message;
            } else {
              const intl2 = closure_133_0(closure_133_2[19]).intl;
              message = intl2.string(closure_133_1(closure_133_2[20]).gMWZeG);
            }
            showError2(message);
            c7 = 0;
            closure_133_25.delete(id);
            c9 = 3;
            return { value: undefined, done: true };
          } else {
            if (3 === tmp4) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 0;
                closure_133_25.delete(id);
                c9 = 3;
                return { value, done: true };
              } else {
                closure_8 = value;
                if (1 === closure_8.destinations.length) {
                  const tmp8 = closure_4;
                  selected_destination_id = closure_8.selected_destination_id;
                } else {
                  let tmp7 = closure_8;
                  c8 = 4;
                  c9 = 1;
                  const obj8 = { value: tmp.promptPublishDestination(closure_8), done: false };
                  return obj8;
                }
              }
            } else if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else {
              selected_destination_id = value;
              if (arg0 === 2) {
                c7 = 0;
                closure_133_25.delete(id);
                c9 = 3;
                obj = { value, done: true };
                return obj;
              }
            }
            c7 = 0;
            closure_133_25.delete(id);
            if (null != selected_destination_id) {
              if (!closure_133_14.isProjectPublishing(id)) {
                const publishStatus = closure_133_14.getPublishStatus(id);
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
                  closure_9 = tmp26;
                  const tmp32 = closure_9;
                  if (tmp32) {
                    closure_133_23(id, true);
                  }
                  const obj3 = closure_133_0(closure_133_2[18]);
                  const publishProjectResult = obj3.publishProject(id, selected_destination_id, closure_2);
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
                    const showConfirmation = closure_5.showConfirmation;
                    const intl = closure_1_0(closure_1_2[19]).intl;
                    showConfirmation(intl.string(isUpdate(closure_1_2[20]).S6Px3n));
                    if (null != channel_skipped.guildId) {
                      const fetchProfile = tmp(tmp2[24]).fetchProfile;
                      tmp(closure_1_2[24]);
                      const tmpResult3 = tmp(closure_1_2[13]);
                      const profile = fetchProfile(tmpResult3.conjureProductionBotUserId(closure_4), { withMutualGuilds: true });
                      profile.catch(f112373);
                    }
                    const tmpResult4 = tmp(closure_1_2[22]);
                    result = tmpResult4.refreshPublishedProject(projectId, { isPreview: false });
                    const catchPromise1 = result.catch(() => {

                    });
                    const nextPromise = catchPromise1.then(() => {
                      function waitForAppChannel() {
                        return closure_1_24(...arguments);
                      }
                      let tmp;
                      if (closure_2_9) {
                        if (true !== channel_skipped.channel_skipped) {
                          tmp = waitForAppChannel(projectId, closure_2_6);
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
                    const tmp = projectId;
                    if (message instanceof Error) {
                      message = message.message;
                    } else {
                      const intl = closure_0(tmp3[19]).intl;
                      message = intl.string(tmp2(tmp3[20]).gMWZeG);
                    }
                    const tmp2Result = isUpdate(closure_2[23]);
                    tmp2Result.dispatch({ type: "CONJURE_PROJECT_PUBLISH_FAILED", projectId: tmp, message });
                    closure_1_5.showError(message);
                  });
                }
              }
              const showError = tmp.showError;
              let intl = closure_133_0(closure_133_2[19]).intl;
              showError(intl.string(closure_133_1(closure_133_2[20])["TD/ze/"]));
            }
            c9 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp83) {
          closure_6 = tmp83;
          if (0 === c7) {
            c9 = 3;
            throw tmp83;
          } else if (1 === tmp85) {
            c8 = 1;
          } else {
            c8 = 2;
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
          const tmp11 = closure_131_18(closure_0, closure_1);
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
  obj = _asyncToGenerator(async (arg0, entryPoint, arg2) => {
    let closure_5;
    let closure_0 = arg0;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c7 = 0;
    let c8 = 0;
    const iter = (async (arg0, value, arg2) => {
      let flag;
      let publishApprovalUrl;
      if (1 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          return { value, done: true };
        } else {
          const guildId = closure_2.guildId;
          const platform = closure_2.platform;
          if (true !== closure_2.busy) {
            if (!closure_134_25.has(closure_0)) {
              closure_6 = closure_134_18(closure_0, guildId);
              let publishState;
              if (closure_6 != null) {
                const status = closure_6.input.status;
                if (status != null) {
                  publishState = status.publishState;
                }
              }
              if (null != closure_6) {
                if (null != publishState) {
                  const obj9 = closure_134_0(closure_134_2[25]);
                  if (obj9.canPublish(publishState)) {
                    publishApprovalUrl = null;
                    if (closure_134_17(closure_0)) {
                      publishApprovalUrl = closure_134_14.getPublishApprovalUrl(closure_0);
                    }
                    if (null != publishApprovalUrl) {
                      if (closure_134_12(closure_6.project)) {
                        c7 = 2;
                        c8 = 1;
                        const obj6 = { value: closure_134_0(closure_134_2[27])(closure_134_2[26], closure_134_2.paths), done: false };
                        return obj6;
                      }
                    }
                    if (!closure_134_14.isProjectPublishing(closure_0)) {
                      const status2 = closure_6.input.status;
                      let publishing;
                      if (status2 != null) {
                        publishing = status2.publishing;
                      }
                      if (true !== publishing) {
                        const obj10 = closure_134_0(closure_134_2[28]);
                        let closure_9 = obj10.resolveConjurePublishAction(closure_6.input);
                        const status3 = closure_6.input.status;
                        const obj7 = { entryPoint, publishState, surface, installScope: closure_6.project.install_scope, action: closure_9.action };
                        surface = undefined;
                        const trackConjurePublishActionClicked = closure_134_0(closure_134_2[29]).trackConjurePublishActionClicked;
                        closure_134_0(closure_134_2[29]);
                        const tmp109 = closure_0;
                        if (status3 != null) {
                          surface = status3.surface;
                        }
                        if (surface == null) {
                          surface = null;
                        }
                        const result = trackConjurePublishActionClicked(tmp109, obj7);
                        if (null == closure_9.disabledReason) {
                          const obj3 = closure_134_0(closure_134_2[18]);
                          obj3.preparePublish(closure_0);
                          if (null == closure_9.confirmReason) {
                            c7 = 3;
                            c8 = 1;
                            const obj8 = { value: closure_134_28(closure_0, closure_9, closure_2, flag), done: false };
                            return obj8;
                          } else {
                            platform.showPublishBlocked(closure_134_0(closure_134_2[30]).ConjurePublishBlockedReason.MISSING_MANAGE_CHANNELS, closure_9.confirmReason, () => {
                              const promise = closure_2_28(closure_1_0, closure_1_9, closure_1_2, closure_1_3);
                              promise.catch(() => {

                              });
                            });
                          }
                        } else {
                          platform.showPublishBlocked(closure_134_0(closure_134_2[30]).ConjurePublishBlockedReason.MISSING_MANAGE_SERVER, closure_9.disabledReason);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else if (2 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          return { value, done: true };
        } else {
          const result1 = value.promptPublishApproval(publishApprovalUrl);
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 3;
        return { value, done: true };
      }
      await "IconComponent";
      closure_6 = tmp4;
      flag = closure_3;
      if (closure_3 === undefined) {
        flag = false;
      }
      return "Reflect";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
function continuePublish() {
  return obj(...arguments);
}
obj = function _continuePublish() {
  let projectPublishing;
  obj = _asyncToGenerator(async (arg0, value, arg2, arg3) => {
    let closure_1;
    let preview_ready;
    let prop1;
    let closure_0 = arg0;
    intent = value;
    let closure_2 = arg2;
    let closure_3 = arg3;
    if (c12 === 2) {
      c12 = 3;
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
      let c10;
      try {
        let _null;
        let integrationInstalled;
        let guildId;
        c12 = 2;
        if (0 === c11) {
          if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else if (arg0 === 2) {
            c12 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_8 = tmp;
            let closure_7 = tmp4;
            _null = undefined;
            integrationInstalled = undefined;
            guildId = closure_2.guildId;
            const platform = closure_2.platform;
            const tmp74 = readPublishSubject(closure_0, guildId);
            if (null != tmp74) {
              if (!projectPublishing.isProjectPublishing(closure_0)) {
                if ("consent_then_publish" !== intent.intent) {
                  c11 = 1;
                  c12 = 1;
                  const obj4 = { value: startPublish(tmp74, intent, closure_2, closure_3), done: false };
                  return obj4;
                } else {
                  set.add(closure_0);
                  c10 = 1;
                  const requestConsent = platform.requestConsent;
                  let f161543 = requestConsent;
                  if (requestConsent == null) {
                    f161543 = (arg0) => closure_2_19(arg0, closure_1_4);
                  }
                  c11 = 3;
                  c12 = 1;
                  const obj5 = { value: f161543(closure_0), done: false };
                  return obj5;
                }
              }
            }
          }
        } else if (1 === c11) {
          if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else if (arg0 === 2) {
            c12 = 3;
            const obj6 = { value, done: true };
            return obj6;
          }
        } else if (2 === c11) {
          c10 = 0;
          closure_136_25.delete(closure_0);
          throw closure_9;
        } else if (3 === c11) {
          if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 0;
            closure_136_25.delete(closure_0);
            c12 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            c10 = 0;
            closure_136_25.delete(closure_0);
            if (closure_136_14.isProjectPublishing(closure_0)) {
              c12 = 3;
              return { value: "IconComponent", done: null };
            } else {
              _null = closure_136_18(closure_0, guildId);
              let integrationStatus;
              if (_null != null) {
                integrationStatus = _null.input.integrationStatus;
              }
              let c5 = integrationStatus;
              if (integrationStatus == null) {
                c5 = null;
              }
              integrationInstalled = c5;
              if (null != _null) {
                const obj8 = { installScope: _null.project.install_scope, previewReady: true === preview_ready, integrationInstalled, botPermissionsChanged: true === prop1 };
                preview_ready = undefined;
                const requiresPermissionReview = closure_136_0(closure_136_2[31]).requiresPermissionReview;
                const tmp67 = closure_136_0(closure_136_2[31]);
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
                  c11 = 4;
                  c12 = 1;
                  const obj9 = { value: closure_136_21(_null, intent, closure_2, closure_3), done: false };
                  return obj9;
                }
              }
              c12 = 3;
              return { value: "IconComponent", done: null };
            }
          }
        } else if (arg0 === 1) {
          c12 = 3;
          throw value;
        } else if (arg0 === 2) {
          c12 = 3;
          obj = { value, done: true };
          return obj;
        }
        c12 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp47) {
        closure_9 = tmp47;
        if (0 === c10) {
          c12 = 3;
          throw tmp47;
        } else {
          c11 = 2;
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
  let closure_0;
  let failure;
  let guildId;
  let guildName;
  let installScope;
  let integrationStatus;
  let memo;
  let project;
  let publishOffered;
  let publishing;
  let status;
  let status1;
  let tmp26;
  let usesAppChannels;
  let viewerCanPublish;
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
    let canPublishResult;
    let flag5;
    let flag6;
    let flag7;
    let publishApprovalUrl;
    let publishFailure;
    let status1;
    let tmp14;
    let tmp2 = null;
    if (null != closure_0) {
      tmp2 = null;
      if (null != guildId1) {
        tmp2 = readPublishSubject(tmp, tmp3);
      }
    }
    status = undefined;
    obj = { viewerCanPublish: null != tmp2 && unpackModuleId(tmp2.project), publishOffered: canPublishResult, project, guildId, appChannelId, publishing: tmp14, failure: publishFailure, approvalUrl: publishApprovalUrl, installScope, status: status1, integrationStatus, guildName, appChannelName, appChannelPending: flag5, canManageGuild, canManageChannels, usesAppChannels: flag6, botInGuild, liveNameOutdated: flag7 };
    if (tmp2 != null) {
      status = tmp2.input.status;
    }
    canPublishResult = null != status;
    if (canPublishResult) {
      const obj2 = ConjurePublishTypes;
      canPublishResult = obj2.canPublish(tmp2.input.status.publishState);
    }
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
    tmp14 = null != tmp;
    if (tmp14) {
      let flag2 = false;
      const obj3 = ConjurePublishStatusStore;
      if (null != ConjurePublishStatusStore.getPublishApprovalUrl(closure_0)) {
        const publishProgress = obj3.getPublishProgress(tmp);
        let stage;
        if (publishProgress != null) {
          stage = publishProgress.stage;
        }
        flag2 = null == stage || "preparing" === stage || "approval" === stage;
        const tmp17 = null == stage || "preparing" === stage || "approval" === stage;
      }
      tmp14 = false === flag2;
    }
    if (tmp14) {
      let isProjectPublishingResult = ConjurePublishStatusStore.isProjectPublishing(tmp);
      if (!isProjectPublishingResult) {
        const publishStatus = ConjurePublishStatusStore.getPublishStatus(tmp);
        let publishing;
        if (publishStatus != null) {
          publishing = publishStatus.publishing;
        }
        isProjectPublishingResult = true === publishing;
      }
      tmp14 = isProjectPublishingResult;
    }
    publishFailure = null;
    if (null != closure_0) {
      publishFailure = ConjurePublishStatusStore.getPublishFailure(tmp);
    }
    publishApprovalUrl = null;
    if (null != closure_0) {
      let flag4 = false;
      const obj4 = ConjurePublishStatusStore;
      if (null != ConjurePublishStatusStore.getPublishApprovalUrl(closure_0)) {
        const publishProgress1 = obj4.getPublishProgress(tmp);
        let stage1;
        if (publishProgress1 != null) {
          stage1 = publishProgress1.stage;
        }
        flag4 = null == stage1 || "preparing" === stage1 || "approval" === stage1;
        const tmp28 = null == stage1 || "preparing" === stage1 || "approval" === stage1;
      }
      publishApprovalUrl = null;
      if (flag4) {
        publishApprovalUrl = ConjurePublishStatusStore.getPublishApprovalUrl(tmp);
      }
    }
    installScope = undefined;
    if (tmp2 != null) {
      installScope = tmp2.input.installScope;
    }
    if (installScope == null) {
      installScope = null;
    }
    status1 = undefined;
    if (tmp2 != null) {
      status1 = tmp2.input.status;
    }
    if (status1 == null) {
      status1 = null;
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
    flag5 = undefined;
    if (tmp2 != null) {
      flag5 = tmp2.input.appChannelPending;
    }
    if (flag5 == null) {
      flag5 = false;
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
    flag6 = undefined;
    if (tmp2 != null) {
      flag6 = tmp2.input.usesAppChannels;
    }
    if (flag6 == null) {
      flag6 = false;
    }
    botInGuild = undefined;
    if (tmp2 != null) {
      botInGuild = tmp2.input.botInGuild;
    }
    if (botInGuild == null) {
      botInGuild = null;
    }
    flag7 = undefined;
    if (tmp2 != null) {
      flag7 = tmp2.input.liveNameOutdated;
    }
    if (flag7 == null) {
      flag7 = false;
    }
    return obj;
  }, items1);
  ({ publishing, approvalUrl, project } = stateFromStoresObject);
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
  ({ viewerCanPublish, publishOffered, failure, appChannelId } = stateFromStoresObject);
  memo = obj.useMemo(() => {
    let tmp = null;
    if (null != project) {
      tmp = { installScope, status, integrationStatus, guildName, appChannelName, appChannelPending, canManageGuild, canManageChannels, usesAppChannels, botInGuild, liveNameOutdated };
      obj = { installScope, status, integrationStatus, guildName, appChannelName, appChannelPending, canManageGuild, canManageChannels, usesAppChannels, botInGuild, liveNameOutdated };
    }
    return tmp;
  }, items2);
  let publishState;
  if (memo != null) {
    const status2 = memo.status;
    if (status2 != null) {
      publishState = status2.publishState;
    }
  }
  if (publishState == null) {
    publishState = null;
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
  const items3 = [id, guildId, tmp9, publishState];
  const effect = useEffect(() => {
    isConjureLiveResult = null != project;
    const tmp = project;
    if (isConjureLiveResult) {
      isConjureLiveResult = null != guildId;
    }
    if (isConjureLiveResult) {
      isConjureLiveResult = closure_18;
    }
    if (isConjureLiveResult) {
      isConjureLiveResult = null != publishState;
    }
    if (isConjureLiveResult) {
      obj = ConjurePublishTypes;
      isConjureLiveResult = obj.isConjureLive(publishState);
    }
    if (isConjureLiveResult) {
      const fetchProfile = UserActionCreators.fetchProfile;
      UserActionCreators;
      const obj2 = conjureAppInServer;
      const profile = fetchProfile(obj2.conjureProductionBotUserId(tmp), { withMutualGuilds: true });
      profile.catch(f112373);
    }
  }, items3);
  let application_id;
  if (project != null) {
    application_id = project.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  let isConjureLiveResult = null != publishState;
  if (isConjureLiveResult) {
    const tmp3Result = tmp3(guildId1[25]);
    isConjureLiveResult = tmp3Result.isConjureLive(publishState);
  }
  obj = isConjureLiveResult;
  const items4 = [application_id, isConjureLiveResult];
  const effect1 = obj.useEffect(() => {
    const tmp2 = null != application_id && isConjureLiveResult && null == ApplicationStore.getApplication(tmp) && !ApplicationStore.isFetchingApplication(tmp);
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
  let tmp17 = context;
  let tmp19 = null;
  const tmp18 = context(guildId1[33]);
  if (publishing) {
    tmp19 = arg0;
  }
  let stringResult = tmp18(tmp19);
  const items6 = [arg0, context];
  if (null != context) {
    if (viewerCanPublish) {
      if (null != memo1) {
        let label;
        if (!publishOffered) {
          if (!publishing) {
            return null;
          }
        }
        if (null == approvalUrl) {
          label = memo1.label;
        } else {
          const intl = tmp3(tmp4[19]).intl;
          label = intl.string(tmp17(tmp4[20]).qru9M5);
        }
        let obj3 = { status: status1, guildId, appChannelId, publishing, failure: tmp26, showsProgress: null != stringResult, awaitingApproval: null != approvalUrl, label, disabled: publishing, run: tmp21 };
        const merged = Object.assign(memo1);
        status1 = undefined;
        if (memo != null) {
          status1 = memo.status;
        }
        if (status1 == null) {
          status1 = null;
        }
        tmp26 = null;
        if (!publishing) {
          tmp26 = failure;
        }
        if (publishing) {
          if (stringResult == null) {
            const intl2 = tmp3(tmp4[19]).intl;
            stringResult = intl2.string(tmp17(tmp4[20]).Rhx0rn);
          }
          label = stringResult;
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
