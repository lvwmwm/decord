// Module ID: 18969
// Function ID: 18970
// Name: DirectoryChannel
// Dependencies: [19, 5159, 5240, 6056, 6957, 21, 5310, 575, 563, 1099, 15146, 18879, 8429, 2]

// Module 18969 (DirectoryChannel)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import router_utils from "router_utils" /* 1099 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 6056 */;
import ReadStateConstants from "ReadStateConstants" /* 6957 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 15146 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5159 */;
import GuildChannelStore from "GuildChannelStore" /* 5240 */;
import createStyles from "createStyles" /* 5310 */;
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
    id(18879);
    const obj4 = { selected };
    tmp7 = <tmp10 onPress={callback} onLongPress={tmp6} style={tmp.container} accessible accessibilityRole="button" accessibilityLabel={id(8429)(obj3)} accessibilityState={obj4} channel={stateFromStores} selected={selected} resolvedUnreadSetting={UnreadSetting.ONLY_MENTIONS} />;
  }
  return tmp7;
});
let result = size.fileFinishedImporting("modules/guild_sidebar/native/DirectoryChannel.tsx");

export default memoResult;
