// Module ID: 16057
// Function ID: 16058
// Name: useProfileSelection
// Dependencies: [32, 19, 9437, 6164, 1081, 6137, 504, 9439, 2]
// Exports: default

// Module 16057 (useProfileSelection)
import UserSettingsConstants from "UserSettingsConstants" /* 1081 */;
import Constants from "Constants" /* 6137 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 9439 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9437 */;
import SortedGuildStore from "SortedGuildStore" /* 6164 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_6 = UserSettingsConstants.ProfileCustomizationSubsection;
const UserProfileSections = Constants.UserProfileSections;
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/useProfileSelection.tsx");

export default function useProfileSelection() {
  let closure_0;
  let first;
  let flattenedGuildIds;
  let items;
  let obj2;
  const tmp = _slicedToArray(react.useState(false), 2);
  _require = tmp[1];
  let obj = {
    hasGuilds: obj2.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds().length > 0),
    hasSwitchedProfile: first,
    handleSelectMainProfile: react.useCallback(() => {
      closure_0(true);
      const obj = { subsection: constants.USER_PROFILE };
      ProfileCustomizationNavigationStore.setState(obj);
    }, []),
    handleSelectGuild: react.useCallback((id) => {
      closure_0(true);
      const obj = GuildIdentityActionCreators;
      obj.setCurrentGuild(id.id);
      const obj2 = { subsection: constants.GUILD, editingTab: UserProfileSections.MAIN };
      ProfileCustomizationNavigationStore.setState(obj2);
    }, [])
  };
  first = tmp[0];
  obj2 = require("get initialized");
  items = [SortedGuildStore];
  return obj;
};
