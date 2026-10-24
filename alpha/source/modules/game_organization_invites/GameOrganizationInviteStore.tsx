// Module ID: 11025
// Function ID: 11026
// Name: GameOrganizationInviteStore
// Dependencies: [11026, 11027, 504, 584, 2]

// Module 11025 (GameOrganizationInviteStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11026 */;
import fromServerGameOrganization from "fromServerGameOrganization" /* 11027 */;
import size from "module_2" /* 2 */;

let set;

const constants = GameOrganizationInviteConstants.GameOrganizationInviteStates;
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
    if (state === constants.RESOLVED) {
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
    const obj = { code: invite.code, state: constants.RESOLVED, organization: obj2.fromServerGameOrganization(game_organization), application: obj3.fromServerGameOrganizationApplication(application), displayNoun: display_noun, linkedGuild: tmp2Result.fromServerGameOrganizationGuild(guild) };
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
    if (state === constants.RESOLVED) {
      return false;
    } else {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map(map);
      const obj = { code, state: tmp3.ERROR, error };
      const result = map.set(code, obj);
    }
  }
};
const gameOrganizationInviteStore = new GameOrganizationInviteStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationInviteStore.tsx");

export default gameOrganizationInviteStore;
