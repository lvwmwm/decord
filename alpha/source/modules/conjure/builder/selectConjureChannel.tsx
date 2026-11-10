// Module ID: 13046
// Function ID: 13047
// Name: selectConjureChannel
// Dependencies: [5045, 4998, 6763, 2]
// Exports: default

// Module 13046 (selectConjureChannel)
import ChannelConstants from "ChannelConstants" /* 4998 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6763 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5045 */;
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
