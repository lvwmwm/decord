// Module ID: 16143
// Function ID: 124429
// Name: GuildSettingsStickerCreateModal
// Dependencies: [0, 0, 4294967295, 4294967295, 0, 0]
// Exports: default

// Module 16143 (GuildSettingsStickerCreateModal)
import "result";
import { jsx } from "result";

const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreateModal.tsx");

export default function GuildSettingsStickerCreateModal(arg0) {
  let stickerId;
  ({ guildId: closure_0, stickerId } = arg0);
  const importDefault = stickerId;
  ({ onGoBack: closure_2, ref: closure_3 } = importDefault(dependencyMap[2])());
  const obj = { screenKey: "guild-settings-sticker-create" };
  const tmp = importDefault(dependencyMap[2])();
  const tmp2 = jsx;
  const intl = arg1(dependencyMap[4]).intl;
  if (null != stickerId) {
  } else {
  }
  obj.title = intl.string(_3DzNjU);
  obj.render = function render() {
    return callback(stickerId(closure_2[5]), { ref: callback, guildId: closure_0, stickerId, onFinish: closure_2 });
  };
  return tmp2(importDefault(dependencyMap[3]), obj);
};
