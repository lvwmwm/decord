// Module ID: 18213
// Function ID: 18214
// Name: DirectoryChannel
// Dependencies: [19, 4858, 4939, 11027, 6770, 21, 5009, 575, 563, 1100, 10782, 18118, 9066, 2]

// Module 18213 (DirectoryChannel)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import router_utils from "router_utils" /* 1100 */;
import ReadStateConstants from "ReadStateConstants" /* 6770 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10782 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11027 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildChannelStore from "GuildChannelStore" /* 4939 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let obj2;
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
let closure_8 = createStyles.createStyles(obj);
const memoResult = react.memo(function DirectoryChannel(guildId) {
  guildId = guildId.guildId;
  let selected = guildId.selected;
  const selectedChannelId = guildId.selectedChannelId;
  const tmp = closure_8();
  let obj = guildId(563);
  const items = [ChannelStore, GuildChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const directoryChannelIds = GuildChannelStore.getDirectoryChannelIds(guildId);
    let channel = null;
    if (0 !== directoryChannelIds.length) {
      channel = ChannelStore.getChannel(directoryChannelIds[0]);
    }
    return channel;
  });
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  if (!selected) {
    selected = id === selectedChannelId;
  }
  const items1 = [guildId, id];
  [][0] = id;
  const callback = react.useCallback(() => {
    const obj = router_utils;
    obj.transitionToGuild(guildId, id);
  }, items1);
  let tmp7 = null;
  if (null != stateFromStores) {
    const obj3 = { channel: stateFromStores };
    id(18118);
    const obj4 = { selected };
    tmp7 = <tmp10 onPress={callback} onLongPress={tmp6} style={tmp.container} accessible accessibilityRole="button" accessibilityLabel={id(9066)(obj3)} accessibilityState={obj4} channel={stateFromStores} selected={selected} resolvedUnreadSetting={UnreadSetting.ONLY_MENTIONS} />;
  }
  return tmp7;
});
let result = size.fileFinishedImporting("modules/guild_sidebar/native/DirectoryChannel.tsx");

export default memoResult;
