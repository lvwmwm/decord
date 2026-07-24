// Module ID: 10418
// Function ID: 80296
// Name: isSelectedFromHomeChannel
// Dependencies: [5659, 1906, 1355, 3982, 3981, 2]
// Exports: default

// Module 10418 (isSelectedFromHomeChannel)
import "_isNativeReflectConstruct";
import "_isNativeReflectConstruct";
import { isGuildHomeChannel } from "set";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_onboarding_home/isSelectedFromHomeChannel.native.tsx");

export default function isSelectedFromHomeChannel(id) {
  let coerceChannelRouteResult1;
  const rootNavigationRef = require(3982) /* getRootNavigationRef */.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      if (null == rootState) {
        return false;
      } else {
        const coerceMainRouteResult = require(3981) /* _createForOfIteratorHelperLoose */.coerceMainRoute(rootState.routes[rootState.index]);
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
                let tmp2 = state.routes[index];
                let tmp3 = tmp13;
                if (null != tmp2) {
                  let tmp4 = require;
                  let tmp5 = dependencyMap;
                  let obj3 = require(3981) /* _createForOfIteratorHelperLoose */;
                  let coerceChannelRouteResult = obj3.coerceChannelRoute(tmp2);
                  let tmp7 = coerceChannelRouteResult;
                  tmp3 = tmp13;
                  if (null != coerceChannelRouteResult) {
                    let tmp8 = coerceChannelRouteResult;
                    tmp3 = tmp13;
                    if (coerceChannelRouteResult.params.channelId === id.id) {
                      let tmp9 = require;
                      let tmp10 = dependencyMap;
                      let obj4 = require(3981) /* _createForOfIteratorHelperLoose */;
                      coerceChannelRouteResult1 = obj4.coerceChannelRoute(state.routes[index - 1]);
                      let tmp12 = coerceChannelRouteResult;
                      tmp3 = coerceChannelRouteResult1;
                      if (null != coerceChannelRouteResult1) {
                        break;
                      }
                    }
                  }
                }
                index = index - 1;
                tmp13 = tmp3;
              }
              let tmp14 = coerceChannelRouteResult1.params.guildId === id.guild_id;
              if (tmp14) {
                tmp14 = isGuildHomeChannel(coerceChannelRouteResult1.params.channelId);
              }
              return tmp14;
            }
            return false;
          }
        }
        const obj5 = require(3981) /* _createForOfIteratorHelperLoose */;
      }
    }
  }
  return false;
};
