// Module ID: 11469
// Function ID: 11470
// Name: useConjurePublishAction
// Dependencies: [5, 19, 2165, 6163, 4892, 4973, 4914, 4975, 6934, 7706, 1071, 6935, 7602, 7692, 11470, 6971, 7727, 7667, 11471, 1112, 4245, 11486, 11487, 11481, 572, 6134, 11477, 2120, 11492, 7714, 11479, 504, 11485, 11493, 2]
// Exports: default, isConjureLiveNameOutdated, publishGuildId

// Module 11469 (useConjurePublishAction)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1071 */;
import UserActionCreators from "UserActionCreators" /* 6134 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6935 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6971 */;
import ConjureUtils from "ConjureUtils" /* 7602 */;
import conjureAppInServer from "conjureAppInServer" /* 7692 */;
import ConjurePublishTypes from "ConjurePublishTypes" /* 11485 */;
import conjurePublishAction2 from "conjurePublishAction" /* 11492 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;
import UserProfileStore from "UserProfileStore" /* 6163 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import GuildChannelStore from "GuildChannelStore" /* 4973 */;
import GuildStore from "GuildStore" /* 4914 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import ConjureProjectStore_mod from "ConjureProjectStore" /* 6934 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7706 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_12;
let unpackModuleId;
const f100207 = () => {

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
  let flag2;
  let name;
  let obj4;
  let obj5;
  let obj8;
  let obj9;
  let tmp13;
  let tmp17;
  let tmp8;
  const project = ConjureProjectStore.getProject(id);
  if (null == project) {
    return null;
  } else {
    let tmp2 = null;
    if ("guild" === project.install_scope) {
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
    const obj3 = { project, guildId: tmp2, appChannelId: findConjureChannelIdResult, ownerInstallMissing: tmp8, input: obj4 };
    tmp8 = "user" === project.install_scope && authStore2(project);
    if (tmp8) {
      const integrationStatus = obj.getIntegrationStatus(id);
      let prop;
      if (integrationStatus != null) {
        prop = integrationStatus.owner_authorization_revoked;
      }
      tmp8 = true === prop;
    }
    obj4 = { installScope: project.install_scope, status: ConjurePublishStatusStore.getPublishStatus(id), integrationStatus: ConjureProjectStore.getIntegrationStatus(id), guildName: name, appChannelName: tmp13, appChannelPending: obj5.isAppChannelPending(id), canManageGuild: tmp17, canManageChannels: canResult, usesAppChannels: obj8.projectUsesAppChannels(project), botInGuild: obj9.readConjureBotInGuild(project, tmp2), liveNameOutdated: flag2 };
    name = undefined;
    obj5 = ConjurePublishStatusStore;
    if (guild != null) {
      name = guild.name;
    }
    if (name == null) {
      name = null;
    }
    tmp13 = null;
    if (null != findConjureChannelIdResult) {
      const channel = ChannelStore.getChannel(findConjureChannelIdResult);
      let name1;
      if (channel != null) {
        name1 = channel.name;
      }
      if (name1 == null) {
        name1 = null;
      }
      tmp13 = name1;
    }
    tmp17 = null;
    if (null != guild) {
      let canResult1 = PermissionStore.can(Permissions.MANAGE_GUILD, guild);
      if (!canResult1) {
        let someResult = authStore2(project);
        if (someResult) {
          const obj6 = ConjureProjectTypes;
          const result = obj6.conjureProjectServerIds(project);
          someResult = result.some((item) => {
            guild = guild.getGuild(item);
            const canResult = null != guild && PermissionStore.can(constants.MANAGE_GUILD, guild);
            return canResult;
          });
        }
        canResult1 = someResult;
      }
      tmp17 = canResult1;
    }
    canResult = null;
    if (null != guild) {
      canResult = PermissionStore.can(Permissions.MANAGE_CHANNELS, guild);
    }
    obj8 = ConjureProjectTypes;
    flag2 = false;
    obj9 = conjureAppInServer;
    const obj10 = ConjureProjectTypes;
    if (obj10.usesPreviewApp(project)) {
      const application = ApplicationStore.getApplication(project.application_id);
      let name2;
      if (application != null) {
        name2 = application.name;
      }
      flag2 = null != name2 && name2 !== project.name;
    }
    return obj3;
  }
}
function requestConjureInstallConsent() {
  return obj(...arguments);
}
let obj = function _requestConjureInstallConsent() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_0 = arg0;
    let closure_1 = value;
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c5;
      try {
        let guildId;
        let length;
        let closure_6;
        let close;
        let promise;
        let fail;
        let prop;
        let application;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            project = undefined;
            guildId = undefined;
            length = undefined;
            closure_6 = undefined;
            close = undefined;
            promise = undefined;
            fail = function fail(arg0) {
              closure_1_4.push(arg0);
            };
            project = project.getProject(closure_0);
            prop = undefined;
            const tmp51 = closure_1;
            if (project != null) {
              prop = project.preview_application_id;
            }
            if (null != project) {
              if (null != prop) {
                const obj13 = require("ConjureInstallTarget");
                guildId = obj13.conjureInstallGuildId(project, tmp51);
                length = [];
                const obj14 = require("ApplicationActionCreators");
                application = obj14.fetchApplication(prop);
                c6 = 1;
                c7 = 1;
                const obj5 = { value: application.catch(fail), done: false };
                return obj5;
              }
            }
            c7 = 3;
            return { value: "failed", done: true };
          }
        } else if (1 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            close = function close() {

            };
            const self = this;
            const self2 = this;
            promise = new Promise((arg0) => {
              let closure_1_7 = arg0;
            });
            c5 = 1;
            const obj7 = { applicationId: prop, application, guildId, onClose: close };
            const openConjureAppInstallModal = closure_132_1(closure_132_2[16]).openConjureAppInstallModal;
            const tmp45 = closure_132_1(closure_132_2[16]);
            const application1 = closure_132_5.getApplication(prop);
            application = application1;
            if (application1 == null) {
              application = null;
            }
            c6 = 4;
            c7 = 1;
            const obj9 = { value: openConjureAppInstallModal(obj7), done: false };
            return obj9;
          }
        } else if (2 === c6) {
          c5 = 0;
          c7 = 3;
          return { value: "failed", done: true };
        } else if (3 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            const obj8 = closure_132_0(closure_132_2[17]);
            const project1 = obj8.getProject(closure_0);
            c6 = 6;
            c7 = 1;
            const obj11 = { value: project1.catch(fail), done: false };
            return obj11;
          }
        } else if (4 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            c6 = 5;
            c7 = 1;
            const obj15 = { value: promise, done: false };
            return obj15;
          }
        } else if (5 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj16 = { value, done: true };
            return obj16;
          } else {
            closure_6 = value;
            c5 = 0;
            const obj3 = closure_132_0(closure_132_2[14]);
            const result = obj3.repairConjureGuildHints(project, guildId);
            c6 = 3;
            c7 = 1;
            const obj17 = { value: result.catch(fail), done: false };
            return obj17;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj18 = { value, done: true };
          return obj18;
        } else {
          let str = "cancelled";
          if (closure_6) {
            let str2 = "approved";
            if (length.length > 0) {
              str2 = "failed";
            }
            str = str2;
          }
          c7 = 3;
          obj = { value: str, done: true };
          return obj;
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
  });
  return obj(...arguments);
};
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
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let selected_destination_id;
          let closure_8;
          let closure_9;
          let id;
          c9 = 2;
          let tmp4 = c8;
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
                    closure_133_22(id, true);
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
                    obj = closure_1_0(closure_1_2[22]);
                    const conjurePublishEval = obj.requestConjurePublishEval(projectId);
                    const tmp4 = projectId;
                    if (null != channel_skipped.guildId) {
                      const fetchProfile = tmp(tmp2[25]).fetchProfile;
                      tmp(closure_1_2[25]);
                      const tmpResult3 = tmp(closure_1_2[13]);
                      const profile = fetchProfile(tmpResult3.conjureProductionBotUserId(closure_4), { withMutualGuilds: true });
                      profile.catch(f100207);
                    }
                    const tmpResult4 = tmp(closure_1_2[23]);
                    result = tmpResult4.refreshPublishedProject(tmp4, { isPreview: false });
                    const catchPromise1 = result.catch(() => {

                    });
                    const nextPromise = catchPromise1.then(() => {
                      let tmp;
                      if (closure_2_9) {
                        if (true !== channel_skipped.channel_skipped) {
                          tmp = closure_3_23(projectId, closure_2_6);
                        }
                      }
                      return tmp;
                    });
                    const cleanupPromise = nextPromise.finally(() => {
                      obj = isUpdate(closure_2_2[24]);
                      const obj2 = { type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: false };
                      obj.dispatch(obj2);
                    });
                    cleanupPromise.catch(() => {

                    });
                  }, (message) => {
                    obj = isUpdate(closure_2[24]);
                    const obj2 = { type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: false };
                    obj.dispatch(obj2);
                    const tmp = projectId;
                    if (message instanceof Error) {
                      message = message.message;
                    } else {
                      const intl = closure_0(tmp3[19]).intl;
                      message = intl.string(tmp2(tmp3[20]).gMWZeG);
                    }
                    const tmp2Result = isUpdate(closure_2[24]);
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
            return { value: "HermesInternal", done: null };
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
function waitForAppChannel() {
  return obj(...arguments);
}
obj = function _waitForAppChannel() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_0 = arg0;
    let closure_1 = value;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
            let closure_5 = tmp2;
            let closure_4 = tmp;
            let appChannelId;
            value = undefined;
            const _Date3 = Date;
            const sum = Date.now() + 5000;
            let c2 = sum;
            const tmp36 = readPublishSubject(closure_0, closure_1);
            if (tmp36 != null) {
              appChannelId = tmp36.appChannelId;
            }
            c2 = appChannelId;
            if (appChannelId == null) {
              c2 = null;
            }
            value = c2;
            if (null == value) {
              const _Date = Date;
              if (Date.now() < sum) {
                const self = this;
                const self2 = this;
                const promise = new Promise((arg0) => setTimeout(arg0, 250));
                c6 = 1;
                c7 = 1;
                const obj4 = { value: promise, done: false };
                return obj4;
              }
            }
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const tmp11 = closure_133_18(closure_0, closure_1);
          let appChannelId1;
          if (tmp11 != null) {
            appChannelId1 = tmp11.appChannelId;
          }
          let c3 = appChannelId1;
          if (appChannelId1 == null) {
            c3 = null;
          }
          value = c3;
          if (null == value) {
            const _Date2 = Date;
          }
        }
        c7 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } catch (tmp24) {
        c7 = 3;
        throw tmp24;
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
    let closure_6;
    let closure_0 = arg0;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c9 = 0;
    let c10 = 0;
    let c8 = 0;
    const iter = (async (arg0, value, arg2) => {
      let obj8;
      if (c10 === 2) {
        c10 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let obj4;
          let guildId;
          let platform;
          let tmp;
          let publishState;
          let publishApprovalUrl;
          let closure_9;
          c10 = 2;
          if (0 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp4;
              obj4 = closure_3;
              if (closure_3 === undefined) {
                obj4 = {};
              }
              guildId = undefined;
              platform = undefined;
              tmp = undefined;
              publishState = undefined;
              publishApprovalUrl = undefined;
              closure_9 = undefined;
              c9 = 1;
              c10 = 1;
              return { value: "Path", done: true };
            }
          } else {
            if (1 === c9) {
              if (arg0 === 1) {
                c10 = 3;
                throw value;
              } else if (arg0 === 2) {
                c10 = 3;
                return { value, done: true };
              } else {
                guildId = closure_2.guildId;
                platform = closure_2.platform;
                if (true !== closure_2.busy) {
                  if (!closure_134_25.has(closure_0)) {
                    tmp = closure_134_18(closure_0, guildId);
                    publishState = undefined;
                    if (tmp != null) {
                      const status = tmp.input.status;
                      if (status != null) {
                        publishState = status.publishState;
                      }
                    }
                    let ownerInstallMissing;
                    if (tmp != null) {
                      ownerInstallMissing = tmp.ownerInstallMissing;
                    }
                    if (true === ownerInstallMissing) {
                      closure_134_25.add(closure_0);
                      c8 = 2;
                      c9 = 4;
                      c10 = 1;
                      const obj7 = { value: obj8.installConjureProjectForOwner(closure_0), done: false };
                      obj8 = closure_134_0(closure_134_2[17]);
                      return obj7;
                    }
                  }
                }
                c10 = 3;
                return { value: "HermesInternal", done: null };
              }
            } else if (2 === c9) {
              c8 = 0;
              closure_134_25.delete(closure_0);
              throw closure_7;
            } else if (3 === c9) {
              const showError = platform.showError;
              const intl = closure_134_0(closure_134_2[19]).intl;
              showError(intl.string(closure_134_1(closure_134_2[20]).gMWZeG));
              c8 = 0;
              closure_134_25.delete(closure_0);
              c10 = 3;
              return { value: undefined, done: true };
            } else if (4 === c9) {
              if (arg0 === 1) {
                c10 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 0;
                closure_134_25.delete(closure_0);
                c10 = 3;
                return { value, done: true };
              } else {
                c8 = 0;
                closure_134_25.delete(closure_0);
              }
            } else if (5 === c9) {
              if (arg0 === 1) {
                c10 = 3;
                throw value;
              } else if (arg0 === 2) {
                c10 = 3;
                return { value, done: true };
              } else {
                const result = value.promptPublishApproval(publishApprovalUrl);
              }
            } else if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              return { value, done: true };
            }
            if (null != tmp) {
              if (null != publishState) {
                if ("nothing_built" !== publishState) {
                  const status3 = tmp.input.status;
                  let safetyHold;
                  if (status3 != null) {
                    safetyHold = status3.safetyHold;
                  }
                  if (true !== safetyHold) {
                    publishApprovalUrl = null;
                    if (closure_134_17(closure_0)) {
                      publishApprovalUrl = closure_134_14.getPublishApprovalUrl(closure_0);
                    }
                    if (null != publishApprovalUrl) {
                      if (closure_134_12(tmp.project)) {
                        c9 = 5;
                        c10 = 1;
                        const obj12 = { value: closure_134_0(closure_134_2[27])(closure_134_2[26], closure_134_2.paths), done: false };
                        return obj12;
                      }
                    }
                    if (!closure_134_14.isProjectPublishing(closure_0)) {
                      const status2 = tmp.input.status;
                      let publishing;
                      if (status2 != null) {
                        publishing = status2.publishing;
                      }
                      if (true !== publishing) {
                        const obj14 = closure_134_0(closure_134_2[28]);
                        closure_9 = obj14.resolveConjurePublishAction(tmp.input);
                        const status4 = tmp.input.status;
                        const obj13 = { entryPoint, publishState, surface, installScope: tmp.project.install_scope };
                        surface = undefined;
                        const trackConjurePublishActionClicked = closure_134_0(closure_134_2[29]).trackConjurePublishActionClicked;
                        closure_134_0(closure_134_2[29]);
                        const tmp155 = closure_0;
                        if (status4 != null) {
                          surface = status4.surface;
                        }
                        if (surface == null) {
                          surface = null;
                        }
                        const result1 = trackConjurePublishActionClicked(tmp155, obj13);
                        if (null == closure_9.disabledReason) {
                          const obj5 = closure_134_0(closure_134_2[18]);
                          obj5.preparePublish(closure_0);
                          if (null == closure_9.confirmReason) {
                            c9 = 6;
                            c10 = 1;
                            const obj15 = { value: closure_134_28(closure_0, closure_9, closure_2, obj4), done: false };
                            return obj15;
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
                  } else {
                    platform.showSafetyHold(closure_0);
                  }
                }
              }
            }
          }
        } catch (tmp127) {
          closure_7 = tmp127;
          if (0 === c8) {
            c10 = 3;
            throw tmp127;
          } else if (1 === tmp129) {
            c9 = 2;
          } else {
            c9 = 3;
          }
        }
      }
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
    let c4;
    let platform;
    function startPublish() {
      return closure_1_21(...arguments);
    }
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    let closure_3 = arg3;
    if (c10 === 2) {
      c10 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c8;
      let closure_7;
      try {
        let closure_6;
        c10 = 2;
        if (0 === c9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_5 = tmp4;
            c4 = undefined;
            platform = undefined;
            closure_6 = undefined;
            closure_7 = undefined;
            ({ guildId: c4, platform } = closure_2);
            const tmp53 = closure_1;
            if (!projectPublishing.isProjectPublishing(closure_0)) {
              if ("consent_then_publish" === tmp53.intent) {
                const requestConsent = platform.requestConsent;
                let f139008 = requestConsent;
                if (requestConsent == null) {
                  f139008 = (arg0) => closure_2_19(arg0, closure_1_4);
                }
                set.add(closure_0);
                c8 = 2;
                c9 = 3;
                c10 = 1;
                const obj4 = { value: f139008(closure_0), done: false };
                return obj4;
              } else {
                closure_7 = closure_134_18(closure_0, c4);
                if (null != closure_7) {
                  c9 = 4;
                  c10 = 1;
                  const obj5 = { value: startPublish(closure_7, closure_1, closure_2, closure_3), done: false };
                  return obj5;
                }
              }
            }
          }
        } else if (1 === c9) {
          c8 = 0;
          closure_134_25.delete(closure_0);
          throw closure_7;
        } else if (2 === c9) {
          closure_6 = "failed";
          c8 = 0;
          closure_134_25.delete(closure_0);
          if ("failed" === closure_6) {
            const showError = platform.showError;
            const intl = closure_134_0(closure_134_2[19]).intl;
            showError(intl.string(closure_134_1(closure_134_2[20]).gMWZeG));
            c10 = 3;
            const obj6 = { value: undefined, done: true };
            return obj6;
          } else {
            c10 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (3 === c9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            closure_134_25.delete(closure_0);
            c10 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_6 = value;
            c8 = 1;
          }
        } else if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c10 = 3;
          obj = { value, done: true };
          return obj;
        }
        c10 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp45) {
        closure_7 = tmp45;
        if (0 === c8) {
          c10 = 3;
          throw tmp45;
        } else if (1 === tmp47) {
          c9 = 1;
        } else {
          c9 = 2;
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
  let ownerInstallMissing;
  let project;
  let publishing;
  let status;
  let tmp25;
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
    let flag4;
    let flag5;
    let flag6;
    let ownerInstallMissing;
    let publishApprovalUrl;
    let publishFailure;
    let tmp11;
    let tmp2 = null;
    if (null != closure_0) {
      tmp2 = null;
      if (null != guildId1) {
        tmp2 = readPublishSubject(tmp, tmp3);
      }
    }
    obj = { viewerCanPublish: null != tmp2 && unpackModuleId(tmp2.project), ownerInstallMissing: true === ownerInstallMissing, project, guildId, appChannelId, publishing: tmp11, failure: publishFailure, approvalUrl: publishApprovalUrl, installScope, status, integrationStatus, guildName, appChannelName, appChannelPending: flag4, canManageGuild, canManageChannels, usesAppChannels: flag5, botInGuild, liveNameOutdated: flag6 };
    ownerInstallMissing = undefined;
    if (tmp2 != null) {
      ownerInstallMissing = tmp2.ownerInstallMissing;
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
    tmp11 = null != tmp;
    if (tmp11) {
      let flag2 = false;
      const obj2 = ConjurePublishStatusStore;
      if (null != ConjurePublishStatusStore.getPublishApprovalUrl(closure_0)) {
        const publishProgress = obj2.getPublishProgress(tmp);
        let stage;
        if (publishProgress != null) {
          stage = publishProgress.stage;
        }
        flag2 = null == stage || "preparing" === stage || "approval" === stage;
        const tmp14 = null == stage || "preparing" === stage || "approval" === stage;
      }
      tmp11 = false === flag2;
    }
    if (tmp11) {
      let isProjectPublishingResult = ConjurePublishStatusStore.isProjectPublishing(tmp);
      if (!isProjectPublishingResult) {
        const publishStatus = ConjurePublishStatusStore.getPublishStatus(tmp);
        let publishing;
        if (publishStatus != null) {
          publishing = publishStatus.publishing;
        }
        isProjectPublishingResult = true === publishing;
      }
      tmp11 = isProjectPublishingResult;
    }
    publishFailure = null;
    if (null != closure_0) {
      publishFailure = ConjurePublishStatusStore.getPublishFailure(tmp);
    }
    publishApprovalUrl = null;
    if (null != closure_0) {
      let flag3 = false;
      const obj3 = ConjurePublishStatusStore;
      if (null != ConjurePublishStatusStore.getPublishApprovalUrl(closure_0)) {
        const publishProgress1 = obj3.getPublishProgress(tmp);
        let stage1;
        if (publishProgress1 != null) {
          stage1 = publishProgress1.stage;
        }
        flag3 = null == stage1 || "preparing" === stage1 || "approval" === stage1;
        const tmp25 = null == stage1 || "preparing" === stage1 || "approval" === stage1;
      }
      publishApprovalUrl = null;
      if (flag3) {
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
    flag4 = undefined;
    if (tmp2 != null) {
      flag4 = tmp2.input.appChannelPending;
    }
    if (flag4 == null) {
      flag4 = false;
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
    flag5 = undefined;
    if (tmp2 != null) {
      flag5 = tmp2.input.usesAppChannels;
    }
    if (flag5 == null) {
      flag5 = false;
    }
    botInGuild = undefined;
    if (tmp2 != null) {
      botInGuild = tmp2.input.botInGuild;
    }
    if (botInGuild == null) {
      botInGuild = null;
    }
    flag6 = undefined;
    if (tmp2 != null) {
      flag6 = tmp2.input.liveNameOutdated;
    }
    if (flag6 == null) {
      flag6 = false;
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
  ({ viewerCanPublish, ownerInstallMissing, failure, appChannelId } = stateFromStoresObject);
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
      profile.catch(f100207);
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
    const tmp3Result = tmp3(guildId1[32]);
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
  let tmp19 = null;
  const tmp18 = context(guildId1[33]);
  if (publishing) {
    tmp19 = arg0;
  }
  let stringResult = tmp18(tmp19);
  const items6 = [arg0, context];
  if (null != context) {
    if (null != memo) {
      if (null != memo1) {
        let obj3 = { canPublish: viewerCanPublish, publishing, awaitingApproval: null != approvalUrl, ownerInstallMissing };
        const tmp3Result2 = tmp3(guildId1[28]);
        const result = tmp3Result2.conjurePublishButtonState(memo, obj3);
        if ("hidden" === result) {
          return null;
        } else {
          let label;
          if (null == approvalUrl) {
            label = memo1.label;
          } else {
            const intl = tmp3(tmp4[19]).intl;
            label = intl.string(tmp17(tmp4[20]).qru9M5);
          }
          const obj4 = { state: result, status: memo.status, guildId, appChannelId, failure: tmp25, showsProgress: null != stringResult, label, disabled: publishing, run: tmp21 };
          const merged = Object.assign(memo1);
          tmp25 = null;
          if (!publishing) {
            tmp25 = failure;
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
          return obj4;
        }
      }
    }
  }
  return null;
};
export const ConjurePublishActionContext = context;
export function publishGuildId(project, fallbackGuildId) {
  let tmp = null;
  if ("guild" === project.install_scope) {
    let guild_id = project.guild_id;
    if (guild_id == null) {
      guild_id = fallbackGuildId;
    }
    tmp = guild_id;
  }
  return tmp;
}
export function isConjureLiveNameOutdated(application_id) {
  obj = ConjureProjectTypes;
  if (obj.usesPreviewApp(application_id)) {
    const application = ApplicationStore.getApplication(application_id.application_id);
    let name;
    if (application != null) {
      name = application.name;
    }
    return null != name && name !== application_id.name;
  } else {
    return false;
  }
}
export { approvalPending };
export { requestConjureInstallConsent };
export { waitForAppChannel };
export { runConjurePublishAction };
