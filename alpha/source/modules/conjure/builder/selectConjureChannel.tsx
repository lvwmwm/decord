// Module ID: 18678
// Function ID: 18679
// Name: selectConjureChannel
// Dependencies: [4726, 4679, 6437, 2]
// Exports: default

// Module 18678 (selectConjureChannel)
import ChannelConstants from "ChannelConstants" /* 4679 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6437 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4726 */;
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
