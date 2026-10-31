// Module ID: 14025
// Function ID: 14026
// Name: ChatInputGuardReadonly
// Dependencies: [19, 4867, 4863, 4944, 4946, 6842, 4956, 1383, 12806, 1072, 21, 13821, 504, 1379, 1113, 5652, 5760, 1099, 11, 14006, 2]

// Module 14025 (ChatInputGuardReadonly)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import Fragment from "Fragment" /* 21 */;
import router_utils from "router_utils" /* 1099 */;
import GlobalUtils from "GlobalUtils" /* 1379 */;
import ChannelRecord from "ChannelRecord" /* 4867 */;
import GuildChannelStore2 from "GuildChannelStore" /* 4944 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5760 */;
import ChatInputConstants from "ChatInputConstants" /* 12806 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import ReadStateStore from "ReadStateStore" /* 6842 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import UserStore from "UserStore" /* 1383 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildChannelStore = GuildChannelStore2;
let importDefault;

let closure_12;
let map1;
function sortChannelsByLastMessageId(id, id2) {
  const compare = SnowflakeUtilsDefault.compare;
  SnowflakeUtilsDefault;
  const lastMessageIdResult = ReadStateStore.lastMessageId(id2.id);
  return compare(lastMessageIdResult, ReadStateStore.lastMessageId(id.id));
}
const isTextChannel = ChannelRecord.isTextChannel;
let closure_6 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
const TextAreaCta = ChatInputConstants.TextAreaCta;
({ AnalyticEvents: closure_12, Permissions: map1 } = Constants);
const jsx = Fragment.jsx;
const memoResult = react.memo(function ChatInputGuardReadonly(guildId) {
  let formatToPlainString;
  let handlePress;
  let intl;
  let obj3;
  let obj5;
  let obj6;
  let q1krfU;
  let text;
  let tmpResult7;
  guildId = guildId.guildId;
  importDefault = undefined;
  let stateFromStores;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  const channel = guildId.channel;
  let obj = guildId(stateFromStores[11]);
  const channelAction = obj.useMemberActionsForChannel(guildId, channel).channelAction;
  let channelId;
  const useNextMemberAction = guildId(stateFromStores[11]).useNextMemberAction;
  guildId(stateFromStores[11]);
  if (channelAction != null) {
    channelId = channelAction.channelId;
  }
  importDefault = useNextMemberAction(guildId, channelId);
  const items = [stateFromStoresArray1];
  const tmpResult = guildId(stateFromStores[12]);
  stateFromStores = tmpResult.useStateFromStores(items, () => {
    channelId = undefined;
    const getChannel = ChannelStore.getChannel;
    if (channelId != null) {
      channelId = channelId.channelId;
    }
    return getChannel(channelId);
  });
  const items1 = [GuildChannelStore];
  const tmpResult5 = guildId(stateFromStores[12]);
  stateFromStoresArray = tmpResult5.useStateFromStoresArray(items1, () => {
    const arr = GuildChannelStore.getChannels(guildId)[closure_6];
    const mapped = arr.map((channel) => channel.channel);
    return mapped.sort(sortChannelsByLastMessageId);
  });
  const items2 = [PermissionStore];
  const items3 = [stateFromStoresArray];
  const tmpResult6 = guildId(stateFromStores[12]);
  stateFromStoresArray1 = tmpResult6.useStateFromStoresArray(items2, () => {
    const found = stateFromStoresArray.filter(GlobalUtils.isNotNullish);
    const found1 = found.filter((type) => stateFromStoresArray(type.type));
    return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
  }, items3);
  if (null != stateFromStores) {
    let obj2 = {
      text: formatToPlainString(q1krfU, obj3),
      handlePress() {
          const obj = AppAnalyticsUtilsDefault;
          const obj2 = { cta_type: TextAreaCta.CHANNEL_LINK };
          obj.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, obj2);
          const obj3 = router_utils;
          obj3.transitionToGuild(guildId, stateFromStores.id);
        }
    };
    const intl2 = tmp(tmp2[14]).intl;
    formatToPlainString = intl2.formatToPlainString;
    obj3 = { channelName: tmpResult7.computeChannelName(stateFromStores, UserStore, RelationshipStore) };
    q1krfU = tmp(tmp2[14]).t.q1krfU;
    obj5 = obj2;
    tmpResult7 = guildId(stateFromStores[15]);
  } else if (0 === stateFromStoresArray1.length) {
    const obj4 = {
      text: intl.string(guildId(stateFromStores[14]).t["gHD/nZ"]),
      handlePress() {
          const obj = AppAnalyticsUtilsDefault;
          const obj2 = { cta_type: TextAreaCta.CHANNEL_LIST };
          obj.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, obj2);
          const obj3 = router_utils;
          obj3.transitionToGuild(guildId, undefined);
        }
    };
    intl = tmp(tmp2[14]).intl;
    obj5 = obj4;
  } else {
    const intl4 = tmp(tmp2[14]).intl;
    const formatToPlainString2 = intl4.formatToPlainString;
    let str = "";
    const q1krfU2 = tmp(tmp2[14]).t.q1krfU;
    if (null != stateFromStoresArray1[0]) {
      const tmpResult8 = guildId(stateFromStores[15]);
      str = tmpResult8.computeChannelName(stateFromStoresArray1[0], UserStore, RelationshipStore);
    }
    obj5 = {
      text: formatToPlainString2(q1krfU2, obj6),
      handlePress() {
          const obj = AppAnalyticsUtilsDefault;
          const obj2 = { cta_type: TextAreaCta.CHANNEL_LINK };
          obj.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, obj2);
          const obj3 = router_utils;
          obj3.transitionToGuild(guildId, stateFromStoresArray1[0].id);
        }
    };
    obj6 = { channelName: str };
  }
  ({ text, handlePress } = obj5);
  require("ChatInputGuard");
  const intl3 = tmp(tmp2[14]).intl;
  return <tmp11 type="simple-action" actionOnPress={handlePress} actionLabel={intl3.string(guildId(stateFromStores[14]).t["9cs5LM"])} message={text} />;
});
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardReadonly.tsx");

export default memoResult;
