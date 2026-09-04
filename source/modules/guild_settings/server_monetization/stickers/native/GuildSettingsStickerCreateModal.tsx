// Module ID: 17498
// Function ID: 17499
// Name: GuildSettingsStickerCreateModal
// Dependencies: [19, 21, 10852, 10855, 1233, 17499, 2]
// Exports: default

// Module 17498 (GuildSettingsStickerCreateModal)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreateModal.tsx");

export default function GuildSettingsStickerCreateModal(arg0) {
  ({ guildId: require, stickerId } = arg0);
  dependencyMap = undefined;
  c3 = undefined;
  ({ onGoBack: c2, ref: c3 } = stickerId(10852)());
  const tmp2 = stickerId(10852)();
  const tmp3 = c3;
  const intl = getSystemLocale.intl;
  if (null != stickerId) {
  } else {
  }
  const tmp4 = stickerId(10855);
  return tmp3(tmp4, {
    screenKey: "guild-settings-sticker-create",
    title: intl.string(_3DzNjU),
    render() {
      return _undefined2(stickerId(_undefined[5]), { ref: _undefined2, guildId: closure_0, stickerId, onFinish: _undefined });
    }
  });
};
