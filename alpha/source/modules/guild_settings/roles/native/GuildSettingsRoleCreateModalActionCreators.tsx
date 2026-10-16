// Module ID: 18724
// Function ID: 18725
// Name: GuildSettingsRoleCreateModalActionCreators
// Dependencies: [6152, 18725, 2002, 2]

// Module 18724 (GuildSettingsRoleCreateModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import size from "module_2" /* 2 */;

const GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY = "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY";
let obj = {
  open() {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(18725, dependencyMap.paths), undefined, GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default obj;
