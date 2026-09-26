// Module ID: 17375
// Function ID: 17376
// Name: GuildSettingsStickerCreateModal
// Dependencies: [19, 21, 10382, 10385, 1115, 17376, 2]
// Exports: default

// Module 17375 (GuildSettingsStickerCreateModal)
import util from "util" /* 1115 */;
import GuildSettingsStickerCreateDefault from "GuildSettingsStickerCreate" /* 17376 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreateModal.tsx");

export default function GuildSettingsStickerCreateModal(arg0) {
  ({ guildId: require, stickerId } = arg0);
  dependencyMap = undefined;
  c3 = undefined;
  ({ onGoBack: c2, ref: c3 } = stickerId(10382)());
  const tmp2 = stickerId(10382)();
  const tmp3 = c3;
  const intl = util.intl;
  if (null != stickerId) {
    let tdhW5b = tmp5(1115).t.tdhW5b;
  } else {
    tdhW5b = tmp5(1115).t["3DzNjU"];
  }
  const tmp4 = stickerId(10385);
  return tmp3(tmp4, {
    screenKey: "guild-settings-sticker-create",
    title: intl.string(tdhW5b),
    render() {
      return jsx(GuildSettingsStickerCreateDefault, { ref, guildId, stickerId, onFinish });
    }
  });
};
