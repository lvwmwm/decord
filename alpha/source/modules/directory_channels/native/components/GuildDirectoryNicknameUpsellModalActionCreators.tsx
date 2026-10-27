// Module ID: 13749
// Function ID: 13750
// Name: GuildDirectoryNicknameUpsellModalActionCreators
// Dependencies: [6673, 13750, 1999, 2]

// Module 13749 (GuildDirectoryNicknameUpsellModalActionCreators)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import size from "module_2" /* 2 */;

const GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
let obj = {
  open(merged) {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(13750, dependencyMap.paths), merged, GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default obj;
