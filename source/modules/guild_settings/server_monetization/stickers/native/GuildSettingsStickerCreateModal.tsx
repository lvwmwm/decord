// Module ID: 16753
// Function ID: 16754
// Name: GuildSettingsStickerCreateModal
// Dependencies: [19, 21, 9735, 9737, 1236, 16754, 2]
// Exports: default

// Module 16753 (GuildSettingsStickerCreateModal)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useNavigatorConfirmChangesOnBack").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreateModal.tsx");

export default function GuildSettingsStickerCreateModal(arg0) {
  let c2;
  let c3;
  let require;
  let stickerId;
  ({ guildId: require, stickerId } = arg0);
  let dependencyMap;
  c3 = undefined;
  ({ onGoBack: c2, ref: c3 } = stickerId(9735)());
  const tmp2 = stickerId(9735)();
  const tmp3 = c3;
  const intl = require(1236) /* getSystemLocale */.intl;
  if (null != stickerId) {
  } else {
  }
  const tmp4 = stickerId(9737);
  return tmp3(tmp4, {
    screenKey: "guild-settings-sticker-create",
    title: intl.string(_3DzNjU),
    render() {
      return _undefined2(stickerId(_undefined[5]), { ref: _undefined2, guildId: closure_0, stickerId, onFinish: _undefined });
    }
  });
};
