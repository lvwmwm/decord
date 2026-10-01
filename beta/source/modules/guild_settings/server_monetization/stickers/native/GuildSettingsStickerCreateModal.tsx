// Module ID: 17379
// Function ID: 17380
// Name: GuildSettingsStickerCreateModal
// Dependencies: [19, 21, 10382, 10385, 1115, 17380, 2]
// Exports: default

// Module 17379 (GuildSettingsStickerCreateModal)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import GuildSettingsStickerCreateDefault from "GuildSettingsStickerCreate" /* 17380 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreateModal.tsx");

export default function GuildSettingsStickerCreateModal(arg0) {
  let c2;
  let c3;
  let guildId;
  let onFinish;
  let ref;
  let stickerId;
  let tdhW5b;
  ({ guildId: require, stickerId } = arg0);
  dependencyMap = undefined;
  c3 = undefined;
  ({ onGoBack: c2, ref: c3 } = stickerId(10382)());
  stickerId(10382)();
  const tmp4 = stickerId(10385);
  const intl = intl2.intl;
  const string = intl.string;
  const tmp3 = c3;
  if (null != stickerId) {
    tdhW5b = tmp5(1115).t.tdhW5b;
  } else {
    tdhW5b = tmp5(1115).t["3DzNjU"];
  }
  const obj = {
    screenKey: "guild-settings-sticker-create",
    title: string(tdhW5b),
    render() {
      return jsx(GuildSettingsStickerCreateDefault, { ref, guildId: require, stickerId, onFinish });
    }
  };
  return tmp3(tmp4, obj);
};
