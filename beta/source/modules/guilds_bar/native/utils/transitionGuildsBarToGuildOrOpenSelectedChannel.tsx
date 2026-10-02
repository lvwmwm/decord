// Module ID: 15946
// Function ID: 15947
// Name: transitionGuildsBarToGuildOrOpenSelectedChannel
// Dependencies: [2102, 4657, 1086, 4695, 4694, 4848, 6761, 2]
// Exports: default

// Module 15946 (transitionGuildsBarToGuildOrOpenSelectedChannel)
import Constants from "Constants" /* 1086 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4694 */;
import RootNavigationRef from "RootNavigationRef" /* 4695 */;
import transitionToChannel from "transitionToChannel" /* 4848 */;
import transitionToGuild from "transitionToGuild" /* 6761 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2102 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4657 */;
import size from "module_2" /* 2 */;

const ME = Constants.ME;
const result = size.fileFinishedImporting("modules/guilds_bar/native/utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx");

export default function transitionGuildsBarToGuildOrOpenSelectedChannel(arg0) {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  let isReadyResult;
  if (rootNavigationRef != null) {
    isReadyResult = rootNavigationRef.isReady();
  }
  let tmp4;
  if (true === isReadyResult) {
    const tmpResult = NavigationRouteUtils;
    const coerceGuildsRouteResult = tmpResult.coerceGuildsRoute(rootNavigationRef.getCurrentRoute());
    let drawerOpen;
    if (coerceGuildsRouteResult != null) {
      const params = coerceGuildsRouteResult.params;
      if (params != null) {
        drawerOpen = params.drawerOpen;
      }
    }
    if (true !== drawerOpen) {
      let tmp7 = null;
      if (arg0 !== ME) {
        tmp7 = arg0;
      }
      let guildId = SelectedGuildStore.getGuildId();
      if (guildId == null) {
        guildId = null;
      }
      let tmp10;
      if (guildId === tmp7) {
        const channelId = SelectedChannelStore.getChannelId(arg0, false);
        tmp10 = channelId;
      }
      tmp4 = tmp10;
    }
  }
  if (null != tmp4) {
    const tmpResult3 = transitionToChannel;
    tmpResult3.transitionToChannel(tmp4);
  } else {
    const tmpResult4 = transitionToGuild;
    tmpResult4.transitionToGuild(arg0);
  }
};
