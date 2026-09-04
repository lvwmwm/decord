// Module ID: 17527
// Function ID: 17528
// Dependencies: [4731, 17528, 2008, 2]

// Module 17527
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;

const GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY = "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY";
const result = set.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default {
  open() {
    _modDef4731.pushLazy(asyncRequireImpl(17528, dependencyMap.paths), undefined, GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
  close() {
    _modDef4731.popWithKey(GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  }
};
