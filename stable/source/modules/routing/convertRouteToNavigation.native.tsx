// Module ID: 12305
// Function ID: 12306
// Name: convertRouteToNavigation
// Dependencies: [1086, 4697, 4694, 4695, 4662, 4675, 2]
// Exports: convertRouteToNavigation

// Module 12305 (convertRouteToNavigation)
import Constants from "Constants" /* 1086 */;
import matchPathCompat from "matchPathCompat" /* 4662 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4694 */;
import RootNavigationRef from "RootNavigationRef" /* 4695 */;
import useChatLayout from "useChatLayout" /* 4697 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
let result = size.fileFinishedImporting("modules/routing/convertRouteToNavigation.native.tsx");

export const convertRouteToNavigation = function convertRouteToNavigation(pathname) {
  let CHANNEL2;
  let CHANNELResult;
  let GUILD_MEMBER_VERIFICATION;
  let RouteParam4;
  let RouteParam5;
  let RouteParam7;
  let VOICE_CHAT_CHANNEL_PARTIAL;
  let channelId;
  let guildId;
  let guildIdResult1;
  let guildIdResult2;
  let messageId;
  let navigationReplace;
  let openChannel;
  pathname = pathname.pathname;
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      if (pathname.startsWith("/channels/")) {
        const obj2 = { path: "" + CHANNELResult + VOICE_CHAT_CHANNEL_PARTIAL(guildIdResult1, RouteParam4.channelId({ name: "voiceChannelId" }), ":voiceMessageId?") };
        const matchPath = matchPathCompat.matchPath;
        const CHANNEL = Routes.CHANNEL;
        matchPathCompat;
        const RouteParam = tmp(4675).RouteParam;
        const guildIdResult = RouteParam.guildId();
        const RouteParam2 = tmp(4675).RouteParam;
        VOICE_CHAT_CHANNEL_PARTIAL = Routes.VOICE_CHAT_CHANNEL_PARTIAL;
        CHANNELResult = CHANNEL(guildIdResult, RouteParam2.channelId({ optional: true }));
        const RouteParam3 = tmp(4675).RouteParam;
        guildIdResult1 = RouteParam3.guildId({ name: "voiceGuildId" });
        RouteParam4 = tmp(4675).RouteParam;
        const _HermesInternal = HermesInternal;
        const tmp4 = Routes;
        if (null != matchPath(pathname, obj2)) {
          return true;
        } else {
          const obj3 = { path: CHANNEL2(guildIdResult2, RouteParam7.channelId({ optional: true }), ":messageId?") };
          const matchPath3 = matchPathCompat.matchPath;
          CHANNEL2 = tmp4.CHANNEL;
          matchPathCompat;
          const RouteParam6 = tmp(4675).RouteParam;
          guildIdResult2 = RouteParam6.guildId();
          RouteParam7 = tmp(4675).RouteParam;
          const matchPath3Result = matchPath3(pathname, obj3);
          if (null != matchPath3Result) {
            ({ channelId, guildId, messageId } = matchPath3Result.params);
            ({ navigationReplace, openChannel } = pathname);
            const tmpResult16 = useChatLayout;
            if (tmpResult16.getChatLayout().isChatLockedOpen) {
              if (null != channelId) {
                if (false === navigationReplace) {
                  const coerceGuildsRoute = NavigationRouteUtils.coerceGuildsRoute;
                  NavigationRouteUtils;
                  const tmpResult18 = RootNavigationRef;
                  const rootNavigationRef1 = tmpResult18.getRootNavigationRef();
                  let currentRoute;
                  if (rootNavigationRef1 != null) {
                    currentRoute = rootNavigationRef1.getCurrentRoute();
                  }
                  const coerceGuildsRouteResult = coerceGuildsRoute(currentRoute);
                  let channelId1;
                  if (coerceGuildsRouteResult != null) {
                    const params = coerceGuildsRouteResult.params;
                    if (params != null) {
                      channelId1 = params.channelId;
                    }
                  }
                  if (channelId1 === channelId) {
                    const obj4 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                    const tmpResult19 = NavigationRouteUtils;
                    tmpResult19.navigateToRootTab(obj4);
                  } else {
                    const obj5 = { channelId, guildId, messageId, replaceChannelAndFixRoot: navigationReplace };
                    const tmpResult20 = NavigationRouteUtils;
                    tmpResult20.navigateToChannel(obj5);
                  }
                }
              }
              const obj6 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
              const tmpResult21 = NavigationRouteUtils;
              tmpResult21.navigateToRootTab(obj6);
            } else if (null != channelId) {
              if (true === navigationReplace) {
                if (openChannel) {
                  const obj7 = { channelId, guildId, messageId, replaceChannelAndFixRoot: navigationReplace, openChannel: true };
                  const tmpResult22 = NavigationRouteUtils;
                  tmpResult22.navigateToChannel(obj7);
                }
              }
              if (false !== navigationReplace) {
                const obj8 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                const tmpResult23 = NavigationRouteUtils;
                tmpResult23.navigateToRootTab(obj8);
              }
              const tmp18 = null != channelId && true !== navigationReplace;
              if (tmp18) {
                const obj9 = { channelId, guildId, messageId, replaceChannelAndFixRoot: "a" };
                const tmpResult24 = NavigationRouteUtils;
                tmpResult24.navigateToChannel(obj9);
              }
            } else {
              const obj10 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
              const tmpResult25 = NavigationRouteUtils;
              tmpResult25.navigateToRootTab(obj10);
            }
            return true;
          }
        }
      }
      if (pathname.startsWith("/member-verification/")) {
        const obj11 = { path: GUILD_MEMBER_VERIFICATION(RouteParam5.guildId()) };
        const matchPath2 = matchPathCompat.matchPath;
        GUILD_MEMBER_VERIFICATION = Routes.GUILD_MEMBER_VERIFICATION;
        matchPathCompat;
        RouteParam5 = tmp(4675).RouteParam;
        const matchPath2Result = matchPath2(pathname, obj11);
        if (null != matchPath2Result) {
          const tmpResult27 = NavigationRouteUtils;
          const result = tmpResult27.navigateToMemberVerification(matchPath2Result.params.guildId, matchPath2Result.params.inviteCode);
        }
        return true;
      } else {
        if (!pathname.startsWith(Routes.LOGIN)) {
          let flag;
          if (!pathname.startsWith(Routes.REGISTER)) {
            flag = pathname.startsWith(tmp9.ACCOUNT_STANDING);
            if (flag) {
              rootNavigationRef.navigate("account-standing");
              flag = true;
            }
          }
          return flag;
        }
        const tmpResult28 = NavigationRouteUtils;
        tmpResult28.resetToAuthRoute();
        flag = true;
      }
    }
  }
  return true;
};
