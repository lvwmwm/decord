// Module ID: 12521
// Function ID: 12522
// Name: selectConjureChannel
// Dependencies: [4874, 4830, 6634, 2]
// Exports: default

// Module 12521 (selectConjureChannel)
import ChannelConstants from "ChannelConstants" /* 4830 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6634 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4874 */;
import size from "module_2" /* 2 */;

const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/conjure/builder/selectConjureChannel.tsx");

export default function selectConjureChannel(guildId, messageId) {
  const tmp = null != messageId && SelectedChannelStore.getCurrentlySelectedChannelId() !== StaticChannelRoute.CONJURE;
  if (tmp) {
    const obj2 = { guildId, channelId: StaticChannelRoute.CONJURE, messageId, opensChannel: false };
    const obj = SelectedChannelActionCreatorsDefault;
    const channel = obj.selectChannel(obj2);
  }
};
