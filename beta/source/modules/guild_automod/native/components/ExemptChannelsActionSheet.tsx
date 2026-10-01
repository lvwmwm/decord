// Module ID: 17340
// Function ID: 17341
// Name: ExemptChannelsActionSheet
// Dependencies: [19, 6532, 2067, 4479, 1372, 21, 504, 6533, 4989, 5335, 5917, 17339, 1115, 2]
// Exports: default

// Module 17340 (ExemptChannelsActionSheet)
import Fragment from "Fragment" /* 21 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5335 */;
import react from "react" /* 19 */;
import GuildCategoryStore from "GuildCategoryStore" /* 6532 */;
import GuildStore from "GuildStore" /* 2067 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

let tmp;
const TableRow = tmp(5917);
function getChannelOptionId(channel) {
  return channel.channel.id;
}
function getChannelOptionName(name) {
  return name.name;
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_automod/native/components/ExemptChannelsActionSheet.tsx");

export default function ExemptChannelsActionSheet(guildId) {
  let categories;
  let exemptChannels;
  let onSave;
  guildId = guildId.guildId;
  ({ exemptChannels, onSave } = guildId);
  let obj = guildId(504);
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  let obj2 = guildId(504);
  const items2 = [GuildCategoryStore];
  const items3 = [guildId];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => categories.getCategories(guildId), items3);
  const items4 = [stateFromStores1];
  const items5 = [stateFromStores];
  const memo = react.useMemo(() => {
    const arr = stateFromStores(dependencyMap[7])(stateFromStores1._categories, stateFromStores1, (channel) => {
      channel = channel.channel;
      return !channel.isThread();
    });
    return arr.map((channel) => {
      let obj2;
      channel = channel.channel;
      const obj = { channel, name: obj2.computeChannelName(channel, closure_1_7, closure_1_6) };
      obj2 = guildId(closure_1_2[8]);
      return obj;
    });
  }, items4);
  const callback = react.useCallback((channel) => {
    channel = channel.channel;
    const obj = utils_ChannelUtils;
    const channelIconComponentWithGuild = obj.getChannelIconComponentWithGuild(channel, stateFromStores);
    let tmp4 = null;
    if (null != channelIconComponentWithGuild) {
      tmp4 = jsx(TableRow.TableRow.Icon, { IconComponent: channelIconComponentWithGuild });
    }
    return tmp4;
  }, items5);
  stateFromStores(17339);
  const intl = guildId(1115).intl;
  const intl2 = guildId(1115).intl;
  return <tmp5 title={intl.string(guildId(1115).t.OGiMXJ)} searchPlaceholder={intl2.string(guildId(1115).t.vephiL)} listId="automod-exempt-channels" items={memo} initialSelected={exemptChannels} getId={getChannelOptionId} getSearchText={getChannelOptionName} renderLabel={getChannelOptionName} renderIcon={callback} onSave={onSave} />;
};
