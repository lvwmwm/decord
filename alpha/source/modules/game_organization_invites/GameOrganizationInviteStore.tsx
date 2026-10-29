// Module ID: 11121
// Function ID: 11122
// Name: GameOrganizationInviteStore
// Dependencies: [11122, 11123, 504, 584, 2]

// Module 11121 (GameOrganizationInviteStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import fromServerGameOrganization from "fromServerGameOrganization" /* 11123 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11122 */;
import size from "module_2" /* 2 */;

let set;

let c2;
let c3;
({ GameOrganizationCharacterMode: c2, GameOrganizationInviteStates: c3 } = GameOrganizationInviteConstants);
let map = new Map();
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
    const obj = { code: invite.code, state: constants2.RESOLVED, inviterId: invite.inviter_id, accepted: invite.accepted, guildId: invite.guild.id, organization: obj2.fromServerGameOrganization(game_organization), application: obj3.fromServerGameOrganizationApplication(application), displayNoun: display_noun, characterMode: character_mode, linkedGuild: tmp2Result.fromServerGameOrganizationGuild(guild) };
    set = map.set;
    ({ game_organization, application, guild } = invite);
    obj2 = fromServerGameOrganization;
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
  }
};
const gameOrganizationInviteStore = new GameOrganizationInviteStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationInviteStore.tsx");

export default gameOrganizationInviteStore;
