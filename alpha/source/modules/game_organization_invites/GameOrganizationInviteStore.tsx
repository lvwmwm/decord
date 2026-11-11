// Module ID: 12279
// Function ID: 12280
// Name: GameOrganizationInviteStore
// Dependencies: [12280, 12281, 12282, 504, 572, 2]

// Module 12279 (GameOrganizationInviteStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import GameOrganizationModels from "GameOrganizationModels" /* 12281 */;
import fromServerGameOrganization from "fromServerGameOrganization" /* 12282 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 12280 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ GameOrganizationCharacterMode: c2, GameOrganizationInviteStates: c3 } = GameOrganizationInviteConstants);
let map = new Map();
let set = new Set();
const Store = get_initializedDefault.Store;
class GameOrganizationInviteStore extends Store {
  getInvite(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getInvites() {
    return map;
  }
  isJoinFlowPending(code) {
    return set.has(code);
  }
  getPendingJoinFlowCodes() {
    return set;
  }
}
const prototype = GameOrganizationInviteStore.prototype;
GameOrganizationInviteStore.displayName = "GameOrganizationInviteStore";
let obj = {
  GAME_ORGANIZATION_INVITE_RESOLVE: function handleResolve(code) {
    code = code.code;
    const value = map.get(code);
    let state;
    if (value != null) {
      state = value.state;
    }
    if (state === constants2.RESOLVED) {
      return false;
    } else {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map(map);
      const obj = { code, state: tmp3.RESOLVING };
      const result = map.set(code, obj);
    }
  },
  GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS: function handleResolveSuccess(invite) {
    let application;
    let character_mode;
    let display_noun;
    let game_organization;
    let guild;
    let obj2;
    let obj3;
    let tmp2Result;
    invite = invite.invite;
    const code = invite.code;
    map = new Map(map);
    const application_config = invite.application_config;
    const obj = { code: invite.code, state: constants2.RESOLVED, inviterId: invite.inviter_id, accepted: invite.accepted, guildId: invite.guild.id, organization: obj2.gameOrganizationFromServer(game_organization), application: obj3.fromServerGameOrganizationApplication(application), displayNoun: display_noun, characterMode: character_mode, linkedGuild: tmp2Result.fromServerGameOrganizationGuild(guild) };
    set = map.set;
    ({ game_organization, application, guild } = invite);
    obj2 = GameOrganizationModels;
    display_noun = undefined;
    obj3 = fromServerGameOrganization;
    if (application_config != null) {
      display_noun = application_config.display_noun;
    }
    if (display_noun == null) {
      display_noun = null;
    }
    character_mode = undefined;
    if (application_config != null) {
      character_mode = application_config.character_mode;
    }
    if (character_mode == null) {
      character_mode = constants.SINGLE;
    }
    tmp2Result = fromServerGameOrganization;
    const result = set(code, obj);
  },
  GAME_ORGANIZATION_INVITE_RESOLVE_FAILURE: function handleResolveFailure(code) {
    code = code.code;
    const error = code.error;
    const value = map.get(code);
    let state;
    if (value != null) {
      state = value.state;
    }
    if (state === constants2.RESOLVED) {
      return false;
    } else {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map(map);
      const obj = { code, state: tmp3.ERROR, error };
      const result = map.set(code, obj);
    }
  },
  GAME_ORGANIZATION_INVITE_ACCEPT_SUCCESS: function handleAcceptSuccess(code) {
    code = code.code;
    const value = map.get(code);
    let state;
    if (value != null) {
      state = value.state;
    }
    if (state !== constants2.RESOLVED) {
      return false;
    } else {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map(map);
      const obj = { accepted: true };
      set = map.set;
      const merged = Object.assign(value);
      const result = set(code, obj);
    }
  },
  GAME_ORGANIZATION_JOIN_FLOW_PENDING: function handleJoinFlowPending(arg0) {
    let code;
    let pending;
    ({ code, pending } = arg0);
    if (set.has(code) === pending) {
      return false;
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(set);
      if (pending) {
        set.add(code);
      } else {
        set.delete(code);
      }
    }
  }
};
const gameOrganizationInviteStore = new GameOrganizationInviteStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationInviteStore.tsx");

export default gameOrganizationInviteStore;
