// Module ID: 11699
// Function ID: 11700
// Name: GuildIncidentsStore
// Dependencies: [4706, 1224, 2067, 4431, 8310, 504, 577, 2]

// Module 11699 (GuildIncidentsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 577 */;
import GuildAntiRaidUtils from "GuildAntiRaidUtils" /* 8310 */;
import ExperimentStore from "ExperimentStore" /* 4706 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1224 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4431 */;

require = fn;
function computeAlertSettings() {
  let guildsProto = UserSettingsProtoStore.getGuildsProto();
  if (guildsProto == null) {
    guildsProto = {};
  }
  const guildsArray = GuildStore.getGuildsArray();
  closure_7 = {};
  for (const item10012 of guildsArray) {
    let obj = { guildId: null, guildName: null };
    ({ id: obj2.guildId, name: obj2.guildName } = item10012);
    let merged = Object.assign(guildsProto[item10012.id]);
    closure_7[item10012.id] = obj;
    continue;
  }
}
function updateGuildIncident(id) {
  guild = GuildStore.getGuild(id);
  let incidentsData;
  if (guild != null) {
    incidentsData = guild.incidentsData;
  }
  let tmp5;
  if (null != incidentsData) {
    let hasDetectedActivityResult = GuildAntiRaidUtils.hasDetectedActivity(incidentsData);
    if (!hasDetectedActivityResult) {
      hasDetectedActivityResult = tmp6(8310).isUnderLockdown(incidentsData);
      const tmp6Result = tmp6(8310);
    }
    if (hasDetectedActivityResult) {
      tmp5 = incidentsData;
    }
    tmp6 = require;
  }
  let flag = dependencyMap[id] !== tmp5;
  if (flag) {
    if (null == tmp5) {
      delete tmp[tmp2];
      flag = true;
    } else {
      dependencyMap[id] = tmp5;
      flag = true;
    }
  }
  return flag;
}
const dependencyMap = {};
let closure_7 = {};
const Store = initializeDefault.Store;
class GuildIncidentsStore extends Store {
}
const prototype = GuildIncidentsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(UserSettingsProtoStore, GuildStore, PermissionStore, ExperimentStore);
  const items = [UserSettingsProtoStore, GuildStore, PermissionStore, ExperimentStore];
  this.syncWith(items, computeAlertSettings);
};
prototype["getGuildIncident"] = function getGuildIncident(id) {
  return dependencyMap[id];
};
prototype["getIncidentsByGuild"] = function getIncidentsByGuild() {
  return closure_6;
};
prototype["getGuildAlertSettings"] = function getGuildAlertSettings() {
  return closure_7;
};
GuildIncidentsStore.displayName = "GuildIncidentsStore";
const guildIncidentsStore = new GuildIncidentsStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(arg0) {
    closure_6 = {};
    while (tmp !== undefined) {
      let tmp4 = updateGuildIncident(tmp2.id);
      continue;
    }
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    const id = guild.guild.id;
    guild = GuildStore.getGuild(id);
    let incidentsData;
    if (guild != null) {
      incidentsData = guild.incidentsData;
    }
    let tmp5;
    if (null != incidentsData) {
      let hasDetectedActivityResult = GuildAntiRaidUtils.hasDetectedActivity(incidentsData);
      if (!hasDetectedActivityResult) {
        hasDetectedActivityResult = tmp6(8310).isUnderLockdown(incidentsData);
        const tmp6Result = tmp6(8310);
      }
      if (hasDetectedActivityResult) {
        tmp5 = incidentsData;
      }
      tmp6 = require;
    }
    let flag = dependencyMap[id] !== tmp5;
    if (flag) {
      if (null == tmp5) {
        delete tmp[tmp2];
        flag = true;
      } else {
        dependencyMap[id] = tmp5;
        flag = true;
      }
    }
    return flag;
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    const id = guild.guild.id;
    guild = GuildStore.getGuild(id);
    let incidentsData;
    if (guild != null) {
      incidentsData = guild.incidentsData;
    }
    let tmp5;
    if (null != incidentsData) {
      let hasDetectedActivityResult = GuildAntiRaidUtils.hasDetectedActivity(incidentsData);
      if (!hasDetectedActivityResult) {
        hasDetectedActivityResult = tmp6(8310).isUnderLockdown(incidentsData);
        const tmp6Result = tmp6(8310);
      }
      if (hasDetectedActivityResult) {
        tmp5 = incidentsData;
      }
      tmp6 = require;
    }
    let flag = dependencyMap[id] !== tmp5;
    if (flag) {
      if (null == tmp5) {
        delete tmp[tmp2];
        flag = true;
      } else {
        dependencyMap[id] = tmp5;
        flag = true;
      }
    }
    return flag;
  },
  GUILD_DELETE: function handleGuildDelete(arg0) {
    delete tmp2[tmp];
  },
  LOGOUT: function handleLogout() {
    closure_6 = {};
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildIncidentsStore.tsx");

export default guildIncidentsStore;
