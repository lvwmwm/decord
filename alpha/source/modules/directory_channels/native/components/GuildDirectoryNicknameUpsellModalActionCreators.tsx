// Module ID: 13669
// Function ID: 13670
// Name: GuildDirectoryNicknameUpsellModalActionCreators
// Dependencies: [6657, 13670, 2002, 2]

// Module 13669 (GuildDirectoryNicknameUpsellModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import size from "module_2" /* 2 */;

const GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
let obj = {
  open(merged) {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(13670, dependencyMap.paths), merged, GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default obj;
