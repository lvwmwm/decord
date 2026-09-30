// Module ID: 12508
// Function ID: 12509
// Name: convertRouteToNavigation
// Dependencies: [1074, 4725, 4722, 4723, 4690, 4703, 2]
// Exports: convertRouteToNavigation

// Module 12508 (convertRouteToNavigation)
import Constants from "Constants" /* 1074 */;
import RootNavigationRef from "RootNavigationRef" /* 4723 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/routing/convertRouteToNavigation.native.tsx");

export const convertRouteToNavigation = function convertRouteToNavigation(pathname) {
  pathname = pathname.pathname;
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      if (pathname.startsWith("/channels/")) {
        const obj2 = { path: null };
        const RouteParam = tmp(4703).RouteParam;
        const obj5 = Routes;
        const tmpResult = tmp(4690);
        const RouteParam2 = tmp(4703).RouteParam;
        const guildIdResult = RouteParam.guildId();
        const RouteParam3 = tmp(4703).RouteParam;
        const CHANNELResult = Routes.CHANNEL(RouteParam.guildId(), RouteParam2.channelId({ optional: true }));
        const RouteParam4 = tmp(4703).RouteParam;
        const _HermesInternal = HermesInternal;
        obj2.path = "" + CHANNELResult + Routes.VOICE_CHAT_CHANNEL_PARTIAL(RouteParam3.guildId({ name: "voiceGuildId" }), RouteParam4.channelId({ name: "voiceChannelId" }), ":voiceMessageId?");
        if (null != tmpResult.matchPath(pathname, obj2)) {
          return true;
        } else {
          const obj3 = { path: null };
          const RouteParam5 = tmp(4703).RouteParam;
          const tmpResult13 = tmp(4690);
          const RouteParam6 = tmp(4703).RouteParam;
          obj3.path = obj5.CHANNEL(RouteParam5.guildId(), RouteParam6.channelId({ optional: true }), ":messageId?");
          const matchPathResult = tmpResult13.matchPath(pathname, obj3);
          if (null != matchPathResult) {
            ({ channelId, guildId, messageId } = matchPathResult.params);
            ({ navigationReplace, openChannel } = pathname);
            if (tmpResult14.getChatLayout().isChatLockedOpen) {
              if (null != channelId) {
                if (false === navigationReplace) {
                  const tmpResult15 = tmp(4722);
                  const rootNavigationRef1 = tmp(4723).getRootNavigationRef();
                  let currentRoute;
                  if (rootNavigationRef1 != null) {
                    currentRoute = rootNavigationRef1.getCurrentRoute();
                  }
                  const coerceGuildsRouteResult = tmpResult15.coerceGuildsRoute(currentRoute);
                  let channelId1;
                  if (coerceGuildsRouteResult != null) {
                    const params = coerceGuildsRouteResult.params;
                    if (params != null) {
                      channelId1 = params.channelId;
                    }
                  }
                  if (channelId1 === channelId) {
                    const obj4 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                    tmp(4722).navigateToRootTab(obj4);
                    const tmpResult17 = tmp(4722);
                  } else {
                    const obj6 = { channelId, guildId, messageId, replaceChannelAndFixRoot: navigationReplace };
                    tmp(4722).navigateToChannel(obj6);
                    const tmpResult18 = tmp(4722);
                  }
                  const tmpResult16 = tmp(4723);
                }
              }
              const obj7 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
              tmp(4722).navigateToRootTab(obj7);
              const tmpResult19 = tmp(4722);
            } else if (null != channelId) {
              if (true === navigationReplace) {
                if (openChannel) {
                  const obj8 = { channelId, guildId, messageId, replaceChannelAndFixRoot: navigationReplace, openChannel: true };
                  tmp(4722).navigateToChannel(obj8);
                  const tmpResult20 = tmp(4722);
                }
              }
              if (false !== navigationReplace) {
                const obj9 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                tmp(4722).navigateToRootTab(obj9);
                const tmpResult21 = tmp(4722);
              }
              if (tmp12) {
                const obj10 = { channelId, guildId, messageId, replaceChannelAndFixRoot: "a" };
                tmp(4722).navigateToChannel(obj10);
                const tmpResult22 = tmp(4722);
              }
              tmp12 = null != channelId && true !== navigationReplace;
            } else {
              const obj11 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
              tmp(4722).navigateToRootTab(obj11);
              const tmpResult23 = tmp(4722);
            }
            return true;
          }
          const guildIdResult2 = RouteParam5.guildId();
        }
        const guildIdResult1 = RouteParam3.guildId({ name: "voiceGuildId" });
      }
      if (!pathname.startsWith(Routes.LOGIN)) {
        if (!pathname.startsWith(tmp7.REGISTER)) {
          let flag = pathname.startsWith(tmp7.ACCOUNT_STANDING);
          if (flag) {
            rootNavigationRef.navigate("account-standing");
            flag = true;
          }
        }
        return flag;
      }
      tmp(4722).resetToAuthRoute();
      flag = true;
      const tmpResult24 = tmp(4722);
    }
  }
  return true;
};
