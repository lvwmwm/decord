// Module ID: 18018
// Function ID: 18019
// Name: GuildSettingsStickerCreateModal
// Dependencies: [19, 21, 11214, 11217, 1115, 18019, 2]
// Exports: default

// Module 18018 (GuildSettingsStickerCreateModal)
import util from "util" /* 1115 */;
import GuildSettingsStickerCreateDefault from "GuildSettingsStickerCreate" /* 18019 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreateModal.tsx");

export default function GuildSettingsStickerCreateModal(arg0) {
  ({ guildId: require, stickerId } = arg0);
  dependencyMap = undefined;
  c3 = undefined;
  ({ onGoBack: c2, ref: c3 } = stickerId(11214)());
  const tmp2 = stickerId(11214)();
  const tmp3 = c3;
  const intl = util.intl;
  if (null != stickerId) {
    let tdhW5b = tmp5(1115).t.tdhW5b;
  } else {
    tdhW5b = tmp5(1115).t["3DzNjU"];
  }
  const tmp4 = stickerId(11217);
  return tmp3(tmp4, {
    screenKey: "guild-settings-sticker-create",
    title: intl.string(tdhW5b),
    render() {
      return jsx(GuildSettingsStickerCreateDefault, { ref, guildId, stickerId, onFinish });
    }
  });
};
