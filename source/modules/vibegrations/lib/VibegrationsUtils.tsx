// Module ID: 5682
// Function ID: 5683
// Name: _publishPreviewAndReauthorizeIfPermissionsChanged
// Dependencies: [5, 4226, 1862, 3817, 5683, 676, 5684, 589, 5685, 12613, 2]
// Exports: canManageVibegrations, isVibegrationsChannelCandidate, publishPreviewAndReauthorizeIfPermissionsChanged, useCanManageVibegrations, useIsVibegrationsChannelCandidate, vibegrationsAppIdFromTopic, vibegrationsTopicForApp

// Module 5682 (_publishPreviewAndReauthorizeIfPermissionsChanged)
import closure_3 from "ME";
import addApplication from "addApplication";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import handleProjectUpsert from "handleProjectUpsert";
import ME from "ME";

let c10;
let c9;
let metroImportAll;
const require = arg1;
function _publishPreviewAndReauthorizeIfPermissionsChanged() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (application === 2) {
        application = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          application = 2;
          if (0 === id) {
            if (arg0 === 1) {
              application = 3;
              throw arg1;
            } else if (arg0 === 2) {
              application = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let body = tmp5;
              let lib = tmp2;
              let preview_guild_id;
              lib = undefined;
              body = undefined;
              id = undefined;
              application = undefined;
              let integration_installed;
              let preview_application_id;
              let application2;
              const project = outer1_7.getProject(preview_guild_id);
              preview_guild_id = undefined;
              if (project != null) {
                preview_guild_id = project.preview_guild_id;
              }
              id = 1;
              application = 1;
              let obj1 = { value: null, done: false };
              obj1[0] = callback(outer1_2[8]).publishPreviewProject(preview_guild_id);
              return obj1;
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                application = 3;
                throw arg1;
              } else if (arg0 === 2) {
                application = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                lib = arg1;
                if (lib.ok) {
                  body = lib.body;
                  id = body.application;
                  application = body.bot_permissions_changed;
                  integration_installed = body.integration_installed;
                  preview_application_id = body.project.preview_application_id;
                  if (null != preview_guild_id) {
                    if (null != preview_application_id) {
                      if (!integration_installed) {
                        application2 = application.getApplication(preview_application_id);
                        if (null != application2) {
                          obj1 = lib(body[9]);
                          const obj3 = { applicationId: null, application: null, guildId: null };
                          obj3[0] = id.id;
                          obj3[1] = application2;
                          obj3[2] = preview_guild_id;
                          id = 2;
                          application = 1;
                          const obj4 = { value: null, done: false };
                          obj4[0] = obj1.openVibegrationsAppInstallModal(obj3);
                          return obj4;
                        }
                      }
                    }
                  }
                }
              }
            } else if (arg0 === 1) {
              application = 3;
              throw arg1;
            } else if (arg0 === 2) {
              application = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            application = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp33) {
          application = tmp;
          throw tmp33;
        }
      }
    })();
  });
  const _publishPreviewAndReauthorizeIfPermissionsChanged = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Permissions: metroImportAll, ChannelTypes: c9, GuildFeatures: c10 } = ME);
let c11 = "vibegrations_application_id=";
const re12 = /^\d{17,20}$/;
let result = require("createGuildRecordFromRust").fileFinishedImporting("modules/vibegrations/lib/VibegrationsUtils.tsx");

export const vibegrationsAppIdFromTopic = function vibegrationsAppIdFromTopic(str) {
  if (null != str) {
    if (str.startsWith(c11)) {
      const substr = str.slice(28);
      let tmp4 = null;
      if (regex.test(substr)) {
        tmp4 = substr;
      }
      return tmp4;
    }
  }
  return null;
};
export const vibegrationsTopicForApp = function vibegrationsTopicForApp(arg0) {
  return "" + c11 + arg0;
};
export const canManageVibegrations = function canManageVibegrations(closure_2, isAccessibleChannelOrThreadPath) {
  let obj = require(5684) /* useIsVibegrationsGuildEnabled */;
  obj = { guildId: closure_2.id, location: isAccessibleChannelOrThreadPath };
  let result = obj.isVibegrationsGuildEnabled(obj);
  if (result) {
    result = getUncachedChannelPermissions.can(constants.MANAGE_CHANNELS, closure_2);
  }
  if (result) {
    result = getUncachedChannelPermissions.can(constants.MANAGE_GUILD, closure_2);
  }
  if (result) {
    const features = closure_2.features;
    result = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  }
  return result;
};
export const useCanManageVibegrations = function useCanManageVibegrations(guildId, useGuildActionRows) {
  const _require = guildId;
  let obj = _require(589);
  const items = [getUncachedChannelPermissions];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.can(outer1_8.MANAGE_CHANNELS, closure_0) && outer1_6.can(outer1_8.MANAGE_GUILD, closure_0), items1);
  obj = { guildId: guildId.id, location: useGuildActionRows };
  let isVibegrationsGuildEnabled = _require(5684).useIsVibegrationsGuildEnabled(obj);
  const features = guildId.features;
  const hasItem = features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  if (isVibegrationsGuildEnabled) {
    isVibegrationsGuildEnabled = stateFromStores;
  }
  if (isVibegrationsGuildEnabled) {
    isVibegrationsGuildEnabled = !hasItem;
  }
  return isVibegrationsGuildEnabled;
};
export const publishPreviewAndReauthorizeIfPermissionsChanged = function publishPreviewAndReauthorizeIfPermissionsChanged() {
  const self = this;
  const apply = _publishPreviewAndReauthorizeIfPermissionsChanged.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const isVibegrationsChannelCandidate = function isVibegrationsChannelCandidate(channel, ActivitySounds) {
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  guild = guild.getGuild(guild_id);
  let result = null != channel;
  if (result) {
    result = channel.type === constants2.GUILD_TEXT;
  }
  if (result) {
    const topic = channel.topic;
    let tmp6 = null;
    if (null != topic) {
      tmp6 = null;
      if (topic.startsWith(c11)) {
        const substr = topic.slice(28);
        let tmp10 = null;
        if (regex.test(substr)) {
          tmp10 = substr;
        }
        tmp6 = tmp10;
      }
    }
    result = null != tmp6;
  }
  if (result) {
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
    }
    result = !hasItem;
  }
  if (result) {
    let obj = require(5684) /* useIsVibegrationsGuildEnabled */;
    let guild_id1;
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    obj = { guildId: null, location: null };
    obj[0] = guild_id1;
    obj[1] = ActivitySounds;
    result = obj.isVibegrationsGuildEnabled(obj);
  }
  return result;
};
export const useIsVibegrationsChannelCandidate = function useIsVibegrationsChannelCandidate(guild_id, location) {
  const _require = guild_id;
  let obj = _require(589);
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild_id;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    return outer1_5.getGuild(guild_id);
  });
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  obj = { guildId: guild_id, location };
  let tmp4 = null != guild_id;
  const isVibegrationsGuildEnabled = _require(5684).useIsVibegrationsGuildEnabled(obj);
  if (tmp4) {
    tmp4 = guild_id.type === constants2.GUILD_TEXT;
  }
  if (tmp4) {
    const topic = guild_id.topic;
    let tmp6 = null;
    if (null != topic) {
      tmp6 = null;
      if (topic.startsWith(c11)) {
        const substr = topic.slice(28);
        let tmp10 = null;
        if (regex.test(substr)) {
          tmp10 = substr;
        }
        tmp6 = tmp10;
      }
    }
    tmp4 = null != tmp6;
  }
  if (tmp4) {
    let hasItem;
    if (stateFromStores != null) {
      const features = stateFromStores.features;
      hasItem = features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
    }
    tmp4 = !hasItem;
  }
  if (tmp4) {
    tmp4 = isVibegrationsGuildEnabled;
  }
  return tmp4;
};
