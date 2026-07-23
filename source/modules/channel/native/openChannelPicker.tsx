// Module ID: 10374
// Function ID: 80032
// Name: openChannelPicker
// Dependencies: [1907, 1838, 4098, 10375, 1934, 1212, 2]
// Exports: default

// Module 10374 (openChannelPicker)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const result = require("showActionSheet").fileFinishedImporting("modules/channel/native/openChannelPicker.tsx");

export default function openChannelPicker(onClose) {
  let channelType;
  let filterFn;
  let guildId;
  let selectedChannel;
  ({ guildId, filterFn } = onClose);
  ({ selectedChannel, channelType } = onClose);
  if (filterFn === undefined) {
    filterFn = function h() {
      return true;
    };
  }
  let obj = { selectedChannel: 0, guildId: 0, channelType: 0, filterFn: 0, onClose: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(onClose, obj);
  guild = guild.getGuild(guildId);
  let items = channels.getChannels(guildId)[channelType];
  if (null == items) {
    items = [];
  }
  obj = {};
  obj = {};
  const obj2 = importDefault(4098);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.r2ptsz);
  obj.onClose = onClose.onClose;
  obj.header = obj;
  obj.guild = guild;
  const found = items.filter(filterFn);
  obj.channels = found.map((channel) => channel.channel);
  obj.selectedChannel = selectedChannel;
  const merged1 = Object.assign(merged);
  obj2.openLazy(require(1934) /* maybeLoadBundle */(10375, dependencyMap.paths), "ChannelPicker", obj);
};
