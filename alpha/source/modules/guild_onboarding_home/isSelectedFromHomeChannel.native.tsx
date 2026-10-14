// Module ID: 10376
// Function ID: 10377
// Name: isSelectedFromHomeChannel
// Dependencies: [6066, 2116, 2072, 4979, 4978, 2]
// Exports: default

// Module 10376 (isSelectedFromHomeChannel)
import ChannelConstants from "ChannelConstants" /* 2072 */;
import RootNavigationRef from "RootNavigationRef" /* 4979 */;
import ChannelSectionStore from "ChannelSectionStore" /* 6066 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationRouteUtils = tmp(4978);
const isGuildHomeChannel = ChannelConstants.isGuildHomeChannel;
const result = size.fileFinishedImporting("modules/guild_onboarding_home/isSelectedFromHomeChannel.native.tsx");

export default function isSelectedFromHomeChannel(id) {
  let coerceChannelRouteResult1;
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      if (null == rootState) {
        return false;
      } else {
        const tmpResult = NavigationRouteUtils;
        const coerceMainRouteResult = tmpResult.coerceMainRoute(rootState.routes[rootState.index]);
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
                if (null != tmp4) {
                  let tmp6 = require;
                  let obj3 = NavigationRouteUtils;
                  let coerceChannelRouteResult = obj3.coerceChannelRoute(tmp4);
                  if (null != coerceChannelRouteResult) {
                    if (coerceChannelRouteResult.params.channelId === id.id) {
                      let tmp6Result = tmp6(4978);
                      coerceChannelRouteResult1 = tmp6Result.coerceChannelRoute(state.routes[index - 1]);
                      if (null != coerceChannelRouteResult1) {
                        break;
                      }
                    }
                  }
                }
                index = index - 1;
              }
              const tmp10 = coerceChannelRouteResult1.params.guildId === id.guild_id && isGuildHomeChannel(coerceChannelRouteResult1.params.channelId);
              return tmp10;
            }
            return false;
          }
        }
      }
    }
  }
  return false;
};
