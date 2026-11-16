// Module ID: 16349
// Function ID: 16350
// Name: GameOrganizationStore
// Dependencies: [12370, 504, 572, 2]

// Module 16349 (GameOrganizationStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import GameOrganizationModels from "GameOrganizationModels" /* 12370 */;
import size from "module_2" /* 2 */;

const React2 = {};
const _false = {};
const React3 = {};
const hasOwnProperty = {};
const metroRequire = {};
const Store = get_initializedDefault.Store;
class GameOrganizationStore extends Store {
  getGameOrganization(arg0) {
    return closure_4[arg0];
  }
  getGameOrganizationByGuildId(arg0) {
    let tmp = null;
    if (null != arg0) {
      let tmp3 = closure_5[arg0];
      if (tmp3 == null) {
        tmp3 = null;
      }
      tmp = tmp3;
    }
    return tmp;
  }
  getDisplayNounByGuildId(guildId) {
    let tmp = null;
    if (null != guildId) {
      let tmp3 = closure_6[guildId];
      if (tmp3 == null) {
        tmp3 = null;
      }
      tmp = tmp3;
    }
    return tmp;
  }
  isLoadingForGuild(arg0) {
    let tmp = null != arg0;
    if (tmp) {
      let flag = closure_2[arg0];
      if (flag == null) {
        flag = false;
      }
      tmp = flag;
    }
    return tmp;
  }
  getErrorForGuild(arg0) {
    let tmp = null;
    if (null != arg0) {
      let tmp3 = closure_3[arg0];
      if (tmp3 == null) {
        tmp3 = null;
      }
      tmp = tmp3;
    }
    return tmp;
  }
}
const prototype = GameOrganizationStore.prototype;
GameOrganizationStore.displayName = "GameOrganizationStore";
let obj = {
  GAME_ORGANIZATION_FETCH_START: function handleGameOrganizationFetchStart(guildId) {
    closure_2[guildId.guildId] = true;
  },
  GAME_ORGANIZATION_FETCH_SUCCESS: function handleGameOrganizationFetchSuccess(gameOrganization) {
    gameOrganization = gameOrganization.gameOrganization;
    closure_4[gameOrganization.id] = gameOrganization;
    closure_5[gameOrganization.guildId] = gameOrganization;
    const displayNoun = gameOrganization.displayNoun;
    delete closure_3[gameOrganization.guildId];
    delete closure_2[gameOrganization.guildId];
    closure_6[gameOrganization.guildId] = displayNoun;
  },
  GAME_ORGANIZATION_FETCH_FAILURE: function handleGameOrganizationFetchFailure(arg0) {
    let error;
    let guildId;
    ({ guildId, error } = arg0);
    delete closure_2[guildId];
    closure_3[guildId] = error;
  },
  GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS: function handleGameOrganizationInviteResolveSuccess(invite) {
    invite = invite.invite;
    const application_config = invite.application_config;
    const game_organization = invite.game_organization;
    const obj = GameOrganizationModels;
    const result = obj.gameOrganizationFromServer(game_organization);
    closure_4[result.id] = result;
    closure_5[result.guildId] = result;
    delete closure_3[tmp.guildId];
    delete closure_2[tmp.guildId];
    if (null != application_config) {
      closure_6[result.guildId] = application_config.display_noun;
    }
    delete closure_3[tmp.guildId];
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    guild = guild.guild;
    let flag = null != tmp2;
    const tmp = closure_5;
    if (flag) {
      const linked_game_organization = guild.linked_game_organization;
      let application_id;
      if (linked_game_organization != null) {
        application_id = linked_game_organization.application_id;
      }
      let tmp4 = application_id !== tmp2.applicationId;
      if (!tmp4) {
        const linked_game_organization2 = guild.linked_game_organization;
        let game_organization_id;
        if (linked_game_organization2 != null) {
          game_organization_id = linked_game_organization2.game_organization_id;
        }
        let id;
        if (closure_5[guild.id] != null) {
          id = tmp2.id;
        }
        tmp4 = game_organization_id !== id;
      }
      flag = tmp4;
    }
    if (flag) {
      delete closure_4[closure_5[guild.id].id];
      delete tmp[closure_5[guild.id].guildId];
      delete closure_6[closure_5[guild.id].guildId];
      delete closure_3[closure_5[guild.id].guildId];
      delete closure_2[closure_5[guild.id].guildId];
      flag = true;
    }
    return flag;
  },
  GUILD_DELETE: function handleGuildDelete(arg0) {
    let flag = null != tmp2;
    if (flag) {
      delete closure_4[closure_5[arg0.guild.id].id];
      delete tmp[closure_5[arg0.guild.id].guildId];
      delete closure_6[closure_5[arg0.guild.id].guildId];
      delete closure_3[closure_5[arg0.guild.id].guildId];
      delete closure_2[closure_5[arg0.guild.id].guildId];
      flag = true;
    }
    return flag;
  }
};
const gameOrganizationStore = new GameOrganizationStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/game_organizations/GameOrganizationStore.tsx");

export default gameOrganizationStore;
