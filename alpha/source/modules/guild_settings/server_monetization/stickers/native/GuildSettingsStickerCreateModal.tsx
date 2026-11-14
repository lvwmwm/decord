// Module ID: 20525
// Function ID: 20526
// Name: GuildSettingsStickerCreateModal
// Dependencies: [19, 21, 10904, 1503, 6332, 10907, 1113, 20526, 2]
// Exports: default

// Module 20525 (GuildSettingsStickerCreateModal)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import Link from "Link" /* 1503 */;
import GuildSettingsStickerCreateDefault from "GuildSettingsStickerCreate" /* 20526 */;
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
  ({ onGoBack: c2, ref: c3 } = stickerId(10904)());
  stickerId(10904)();
  const obj = Link;
  const isFocused = obj.useIsFocused();
  stickerId(6332)(() => {
    onFinish(true);
    return true;
  }, isFocused);
  const tmp7 = stickerId(10907);
  const intl = intl2.intl;
  const string = intl.string;
  const tmp6 = c3;
  if (null != stickerId) {
    tdhW5b = tmp3(1113).t.tdhW5b;
  } else {
    tdhW5b = tmp3(1113).t["3DzNjU"];
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
