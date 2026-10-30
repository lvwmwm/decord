// Module ID: 11616
// Function ID: 11617
// Name: InvitableGameOrganizationStore
// Dependencies: [1072, 11328, 504, 572, 2]

// Module 11616 (InvitableGameOrganizationStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import fromServerGameOrganization from "fromServerGameOrganization" /* 11328 */;
import size from "module_2" /* 2 */;

function fromServerInvitableGameOrganization(game_organization) {
  let display_noun;
  let obj2;
  let obj3;
  const obj = { organization: obj2.fromServerGameOrganization(game_organization.game_organization), application: obj3.fromServerGameOrganizationApplication(game_organization.application), displayNoun: display_noun };
  obj2 = fromServerGameOrganization;
  display_noun = game_organization.application_config.display_noun;
  obj3 = fromServerGameOrganization;
  if (display_noun == null) {
    display_noun = null;
  }
  return obj;
}
const QueryIds = Constants.QueryIds;
let closure_3 = [];
const map = new Map();
let c5 = null;
const Store = get_initializedDefault.Store;
class InvitableGameOrganizationStore extends Store {
  getInvitableGameOrganizations(guildIds) {
    let value;
    const result = QueryIds.INVITABLE_GAME_ORGANIZATIONS(guildIds);
    if (null == result) {
      value = closure_3;
    } else {
      value = map.get(result);
      if (value == null) {
        value = c5;
      }
    }
    return value;
  }
}
const prototype = InvitableGameOrganizationStore.prototype;
InvitableGameOrganizationStore.displayName = "InvitableGameOrganizationStore";
let obj = {
  INVITABLE_GAME_ORGANIZATIONS_FETCH_SUCCESS: function handleFetchSuccess(gameOrganizations) {
    gameOrganizations = gameOrganizations.gameOrganizations;
    const result = QueryIds.INVITABLE_GAME_ORGANIZATIONS(gameOrganizations.guildIds);
    if (null == result) {
      return false;
    } else {
      c5 = gameOrganizations.map(fromServerInvitableGameOrganization);
      const result1 = map.set(result, c5);
    }
  },
  LOGOUT: function handleLogout() {
    if (null == c5) {
      return false;
    } else {
      map.clear();
      c5 = null;
    }
  }
};
const invitableGameOrganizationStore = new InvitableGameOrganizationStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/game_organization_invites/InvitableGameOrganizationStore.tsx");

export default invitableGameOrganizationStore;
