// Module ID: 14067
// Function ID: 14068
// Name: GameOrganizationCharacterEligibilityStore
// Dependencies: [12371, 504, 572, 2]

// Module 14067 (GameOrganizationCharacterEligibilityStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import fromServerGameOrganization from "fromServerGameOrganization" /* 12371 */;
import size from "module_2" /* 2 */;

let map = new Map();
const Store = get_initializedDefault.Store;
class GameOrganizationCharacterEligibilityStore extends Store {
  getCharacters(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
}
const prototype = GameOrganizationCharacterEligibilityStore.prototype;
GameOrganizationCharacterEligibilityStore.displayName = "GameOrganizationCharacterEligibilityStore";
const obj = {
  GAME_ORGANIZATION_CHARACTER_ELIGIBILITY_FETCH_SUCCESS: function handleFetchSuccess(characters) {
    characters = characters.characters;
    const code = characters.code;
    map = new Map(map);
    const result = map.set(code, characters.map(fromServerGameOrganization.fromServerGameOrganizationCharacter));
  },
  LOGOUT: function handleLogout() {
    if (0 === map.size) {
      return false;
    } else {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
    }
  }
};
const gameOrganizationCharacterEligibilityStore = new GameOrganizationCharacterEligibilityStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationCharacterEligibilityStore.tsx");

export default gameOrganizationCharacterEligibilityStore;
