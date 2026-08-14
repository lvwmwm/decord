// Module ID: 10291
// Function ID: 10292
// Name: isSelectedFromHomeChannel
// Dependencies: [5960, 1979, 1398, 4198, 4197, 2]
// Exports: default

// Module 10291 (isSelectedFromHomeChannel)
import "handlePermissionsChange";
import "handleConnectionOpen";
import { isGuildHomeChannel } from "set";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_onboarding_home/isSelectedFromHomeChannel.native.tsx");

export default function isSelectedFromHomeChannel(id) {
  let coerceChannelRouteResult1;
  const rootNavigationRef = require(4198) /* getRootNavigationRef */.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      if (null == rootState) {
        return false;
      } else {
        const coerceMainRouteResult = require(4197) /* coerceMainRoute */.coerceMainRoute(rootState.routes[rootState.index]);
        if (null == coerceMainRouteResult) {
          return false;
        } else {
          const state = coerceMainRouteResult.state;
          if (null == state) {
            return false;
          } else {
            let index = state.index;
            if (index >= 0) {
              while (true) {
                let tmp4 = state.routes[index];
                let tmp5 = index;
                if (null != tmp4) {
                  let tmp6 = require;
                  let tmp7 = dependencyMap;
                  let obj3 = require(4197) /* coerceMainRoute */;
                  let coerceChannelRouteResult = obj3.coerceChannelRoute(tmp4);
                  if (null != coerceChannelRouteResult) {
                    if (coerceChannelRouteResult.params.channelId === id.id) {
                      let tmp6Result = tmp6(4197);
                      coerceChannelRouteResult1 = tmp6Result.coerceChannelRoute(state.routes[index - 1]);
                      if (null != coerceChannelRouteResult1) {
                        break;
                      }
                    }
                  }
                }
                index = index - 1;
              }
              let tmp10 = coerceChannelRouteResult1.params.guildId === id.guild_id;
              if (tmp10) {
                tmp10 = isGuildHomeChannel(coerceChannelRouteResult1.params.channelId);
              }
              return tmp10;
            }
            return false;
          }
        }
        const tmpResult = require(4197) /* coerceMainRoute */;
      }
    }
  }
  return false;
};
