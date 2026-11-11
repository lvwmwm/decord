// Module ID: 14873
// Function ID: 14874
// Name: GuildDirectoryNicknameUpsellModalActionCreators
// Dependencies: [6785, 14874, 2118, 2]

// Module 14873 (GuildDirectoryNicknameUpsellModalActionCreators)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import size from "module_2" /* 2 */;

const GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
let obj = {
  open(merged) {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(14874, dependencyMap.paths), merged, GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default obj;
