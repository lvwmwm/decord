// Module ID: 10796
// Function ID: 83863
// Name: convertRouteToNavigation
// Dependencies: []
// Exports: convertRouteToNavigation

// Module 10796 (convertRouteToNavigation)
const Routes = require(dependencyMap[0]).Routes;
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/routing/convertRouteToNavigation.native.tsx");

export const convertRouteToNavigation = function convertRouteToNavigation(pathname) {
  let channelId;
  let guildId;
  let messageId;
  pathname = pathname.pathname;
  let obj = require(dependencyMap[3]);
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      if (pathname.startsWith("/channels/")) {
        let obj2 = require(dependencyMap[4]);
        obj = {};
        const RouteParam = require(dependencyMap[5]).RouteParam;
        const RouteParam2 = require(dependencyMap[5]).RouteParam;
        obj = { optional: true };
        const guildIdResult = RouteParam.guildId();
        const RouteParam3 = require(dependencyMap[5]).RouteParam;
        const obj1 = { name: "voiceGuildId" };
        const CHANNELResult = Routes.CHANNEL(RouteParam.guildId(), RouteParam2.channelId(obj));
        const RouteParam4 = require(dependencyMap[5]).RouteParam;
        obj2 = { name: "voiceChannelId" };
        const _HermesInternal = HermesInternal;
        obj.path = "" + CHANNELResult + Routes.VOICE_CHAT_CHANNEL_PARTIAL(RouteParam3.guildId(obj1), RouteParam4.channelId(obj2), ":voiceMessageId?");
        if (null != obj2.matchPath(pathname, obj)) {
          return true;
        } else {
          const obj3 = {};
          const RouteParam6 = require(dependencyMap[5]).RouteParam;
          const obj28 = require(dependencyMap[4]);
          const RouteParam7 = require(dependencyMap[5]).RouteParam;
          const obj4 = { optional: true };
          obj3.path = Routes.CHANNEL(RouteParam6.guildId(), RouteParam7.channelId(obj4), ":messageId?");
          const matchPathResult = obj28.matchPath(pathname, obj3);
          if (null != matchPathResult) {
            ({ channelId, guildId, messageId } = matchPathResult.params);
            const navigationReplace = pathname.navigationReplace;
            let obj12 = require(dependencyMap[1]);
            if (obj12.getChatLayout().isChatLockedOpen) {
              if (null != channelId) {
                if (false === navigationReplace) {
                  const obj31 = require(dependencyMap[2]);
                  const rootNavigationRef1 = require(dependencyMap[3]).getRootNavigationRef();
                  let currentRoute;
                  if (null != rootNavigationRef1) {
                    currentRoute = rootNavigationRef1.getCurrentRoute();
                  }
                  const coerceGuildsRouteResult = obj31.coerceGuildsRoute(currentRoute);
                  channelId = undefined;
                  if (null != coerceGuildsRouteResult) {
                    const params = coerceGuildsRouteResult.params;
                    if (null != params) {
                      channelId = params.channelId;
                    }
                  }
                  if (channelId === channelId) {
                    const obj5 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                    require(dependencyMap[2]).navigateToRootTab(obj5);
                    const obj24 = require(dependencyMap[2]);
                  } else {
                    const obj6 = { channelId, guildId, messageId, replaceChannelAndFixRoot: navigationReplace };
                    require(dependencyMap[2]).navigateToChannel(obj6);
                    const obj22 = require(dependencyMap[2]);
                  }
                  const obj32 = require(dependencyMap[3]);
                }
              }
              const obj7 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
              require(dependencyMap[2]).navigateToRootTab(obj7);
              const obj26 = require(dependencyMap[2]);
            } else if (null != channelId) {
              if (true === navigationReplace) {
                if (pathname.openChannel) {
                  let obj8 = { channelId, guildId, messageId, replaceChannelAndFixRoot: navigationReplace, openChannel: true };
                  require(dependencyMap[2]).navigateToChannel(obj8);
                  const obj20 = require(dependencyMap[2]);
                }
              }
              if (false !== navigationReplace) {
                let obj9 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                require(dependencyMap[2]).navigateToRootTab(obj9);
                const obj16 = require(dependencyMap[2]);
              }
              if (tmp31) {
                const obj10 = { channelId, guildId, messageId, replaceChannelAndFixRoot: undefined };
                require(dependencyMap[2]).navigateToChannel(obj10);
                const obj18 = require(dependencyMap[2]);
              }
              const tmp31 = null != channelId && true !== navigationReplace;
            } else {
              let obj13 = require(dependencyMap[2]);
              let obj11 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
              obj13.navigateToRootTab(obj11);
            }
            return true;
          }
          const guildIdResult2 = RouteParam6.guildId();
        }
        const guildIdResult1 = RouteParam3.guildId(obj1);
      }
      if (pathname.startsWith("/member-verification/")) {
        obj9 = require(dependencyMap[4]);
        obj12 = {};
        const RouteParam5 = require(dependencyMap[5]).RouteParam;
        obj12.path = Routes.GUILD_MEMBER_VERIFICATION(RouteParam5.guildId());
        const matchPathResult1 = obj9.matchPath(pathname, obj12);
        if (null != matchPathResult1) {
          obj11 = require(dependencyMap[2]);
          const result = obj11.navigateToMemberVerification(matchPathResult1.params.guildId, matchPathResult1.params.inviteCode);
        }
        return true;
      } else {
        if (!pathname.startsWith(Routes.LOGIN)) {
          if (!pathname.startsWith(Routes.REGISTER)) {
            const tmp11 = !pathname.startsWith(Routes.ACCOUNT_STANDING);
            let flag2 = !tmp11;
            if (!tmp11) {
              obj13 = { name: "account-standing", params: undefined };
              rootNavigationRef.navigate(obj13);
              flag2 = true;
            }
          }
          return flag2;
        }
        obj8 = require(dependencyMap[2]);
        obj8.resetToAuthRoute();
        flag2 = true;
      }
    }
  }
  return true;
};
