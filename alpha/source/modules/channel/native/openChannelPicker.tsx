// Module ID: 11963
// Function ID: 11964
// Name: openChannelPicker
// Dependencies: [5236, 5177, 5552, 11964, 2121, 1113, 2]
// Exports: default

// Module 11963 (openChannelPicker)
import intl2 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import GuildChannelStore from "GuildChannelStore" /* 5236 */;
import GuildStore from "GuildStore" /* 5177 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/openChannelPicker.tsx");

export default function openChannelPicker(onClose) {
  let channelType;
  let filterFn;
  let found;
  let guildId;
  let intl;
  let obj2;
  let selectedChannel;
  ({ guildId, filterFn } = onClose);
  ({ selectedChannel, channelType } = onClose);
  if (filterFn === undefined) {
    filterFn = function h() {
      return true;
    };
  }
  onClose = onClose.onClose;
  const merged = Object.assign(onClose, Object.assign({ selectedChannel: 0, guildId: 0, channelType: 0, filterFn: 0, onClose: 0 }));
  const guild = GuildStore.getGuild(guildId);
  let items = GuildChannelStore.getChannels(guildId)[channelType];
  if (items == null) {
    items = [];
  }
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  const obj = { header: obj2, guild, channels: found.map((channel) => channel.channel), selectedChannel };
  obj2 = { title: intl.string(intl2.t.r2ptsz), onClose };
  ActionSheetActionCreatorsDefault;
  const tmp4 = asyncRequire(11964, dependencyMap.paths);
  intl = intl2.intl;
  found = items.filter(filterFn);
  const merged1 = Object.assign(merged);
  openLazy(tmp4, "ChannelPicker", obj);
};
