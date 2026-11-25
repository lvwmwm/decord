// Module ID: 19937
// Function ID: 19938
// Name: GuildSettingsStickerCreateModal
// Dependencies: [19, 21, 11368, 1501, 6079, 11371, 1112, 19938, 2]
// Exports: default

// Module 19937 (GuildSettingsStickerCreateModal)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import Link from "Link" /* 1501 */;
import GuildSettingsStickerCreateDefault from "GuildSettingsStickerCreate" /* 19938 */;
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
  ({ onGoBack: c2, ref: c3 } = stickerId(11368)());
  stickerId(11368)();
  const obj = Link;
  const isFocused = obj.useIsFocused();
  stickerId(6079)(() => {
    onFinish(true);
    return true;
  }, isFocused);
  const tmp7 = stickerId(11371);
  const intl = intl2.intl;
  const string = intl.string;
  const tmp6 = c3;
  if (null != stickerId) {
    tdhW5b = tmp3(1112).t.tdhW5b;
  } else {
    tdhW5b = tmp3(1112).t["3DzNjU"];
  }
  const obj2 = {
    screenKey: "guild-settings-sticker-create",
    title: string(tdhW5b),
    render() {
      return jsx(GuildSettingsStickerCreateDefault, { ref, guildId: require, stickerId, onFinish });
    }
  };
  return tmp6(tmp7, obj2);
};
