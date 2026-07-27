// Module ID: 14897
// Function ID: 113671
// Name: transitionGuildsBarToGuildOrOpenSelectedChannel
// Dependencies: [1907, 3948, 653, 3983, 3982, 4139, 6633, 2]
// Exports: default

// Module 14897 (transitionGuildsBarToGuildOrOpenSelectedChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { ME } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/guilds_bar/native/utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx");

export default function transitionGuildsBarToGuildOrOpenSelectedChannel(guildId) {
  const rootNavigationRef = require(3983) /* getRootNavigationRef */.getRootNavigationRef();
  let isReadyResult;
  if (null != rootNavigationRef) {
    isReadyResult = rootNavigationRef.isReady();
  }
  let tmp2;
  if (true === isReadyResult) {
    const coerceGuildsRouteResult = require(3982) /* _createForOfIteratorHelperLoose */.coerceGuildsRoute(rootNavigationRef.getCurrentRoute());
    let drawerOpen;
    if (null != coerceGuildsRouteResult) {
      const params = coerceGuildsRouteResult.params;
      if (null != params) {
        drawerOpen = params.drawerOpen;
      }
    }
    if (true !== drawerOpen) {
      let tmp5 = null;
      if (guildId !== ME) {
        tmp5 = guildId;
      }
      guildId = guildId.getGuildId();
      let tmp8 = null;
      if (null != guildId) {
        tmp8 = guildId;
      }
      if (tmp8 === tmp5) {
        channelId = channelId.getChannelId(guildId, false);
        let tmp11;
        if (null != channelId) {
          tmp11 = channelId;
        }
        tmp2 = tmp11;
      }
    }
    const obj5 = require(3982) /* _createForOfIteratorHelperLoose */;
  }
  if (null != tmp2) {
    require(4139) /* transitionToChannel */.transitionToChannel(tmp2);
    const obj4 = require(4139) /* transitionToChannel */;
  } else {
    require(6633) /* transitionToGuild */.transitionToGuild(guildId);
    const obj3 = require(6633) /* transitionToGuild */;
  }
};
