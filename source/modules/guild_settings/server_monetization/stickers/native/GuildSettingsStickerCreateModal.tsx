// Module ID: 16326
// Function ID: 127136
// Name: GuildSettingsStickerCreateModal
// Dependencies: [31, 33, 9037, 9040, 1212, 16327, 2]
// Exports: default

// Module 16326 (GuildSettingsStickerCreateModal)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useNavigatorConfirmChangesOnBack").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreateModal.tsx");

export default function GuildSettingsStickerCreateModal(arg0) {
  let dependencyMap;
  let jsx;
  let require;
  let stickerId;
  ({ guildId: require, stickerId } = arg0);
  ({ onGoBack: dependencyMap, ref: jsx } = stickerId(9037)());
  const obj = { screenKey: "guild-settings-sticker-create" };
  const tmp = stickerId(9037)();
  const tmp2 = jsx;
  const intl = require(1212) /* getSystemLocale */.intl;
  if (null != stickerId) {
  } else {
  }
  obj.title = intl.string(_3DzNjU);
  obj.render = function render() {
    return outer1_3(stickerId(outer1_2[5]), { ref: closure_3, guildId: closure_0, stickerId, onFinish: closure_2 });
  };
  return tmp2(stickerId(9040), obj);
};
