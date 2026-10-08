// Module ID: 18111
// Function ID: 18112
// Name: GuildSettingsRoleCreateModalActionCreators
// Dependencies: [5940, 18112, 1999, 2]

// Module 18111 (GuildSettingsRoleCreateModalActionCreators)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import size from "module_2" /* 2 */;

const GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY = "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY";
let obj = {
  open() {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(18112, dependencyMap.paths), undefined, GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default obj;
