// Module ID: 10336
// Function ID: 79877
// Name: openChannelPicker
// Dependencies: [1908, 1838, 4099, 10337, 1935, 1212, 2]
// Exports: default

// Module 10336 (openChannelPicker)
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
  const obj2 = importDefault(4099);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.r2ptsz);
  obj.onClose = onClose.onClose;
  obj.header = obj;
  obj.guild = guild;
  const found = items.filter(filterFn);
  obj.channels = found.map((channel) => channel.channel);
  obj.selectedChannel = selectedChannel;
  const merged1 = Object.assign(merged);
  obj2.openLazy(require(1935) /* maybeLoadBundle */(10337, dependencyMap.paths), "ChannelPicker", obj);
};
