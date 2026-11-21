// Module ID: 13573
// Function ID: 13574
// Name: GuildDirectoryNicknameUpsellModalActionCreators
// Dependencies: [6429, 13574, 2119, 2]

// Module 13573 (GuildDirectoryNicknameUpsellModalActionCreators)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

const GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
let obj = {
  open(merged) {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(13574, dependencyMap.paths), merged, GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default obj;
