// Module ID: 3983
// Function ID: 33074
// Name: wrapRouteForRootNavigator
// Dependencies: [57, 1194, 3951, 1906, 653, 3, 3984, 1198, 3952, 3965, 3987, 2]
// Exports: computeInitialNavigationState, default, getInitialAuthState

// Module 3983 (wrapRouteForRootNavigator)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import ME from "ME";
import importDefaultResult from "_isNativeReflectConstruct";

let closure_6;
let closure_7;
let require = arg1;
function wrapRouteForRootNavigator(items) {
  items = [{ name: "main", state: { routes: items, index: items.length - 1 } }];
  return items;
}
function getInitialGuildState(closure_6, channelId, flag2, flag) {
  if (flag === undefined) {
    flag = false;
  }
  if (null == channelId) {
    channelId = channelId.getChannelId(closure_6);
  }
  let tmp3;
  if (null != channelId) {
    tmp3 = channelId;
  }
  let obj = require(3984) /* useChatLayout */;
  const isChatLockedOpen = obj.getChatLayout().isChatLockedOpen;
  if (flag2) {
    if (null != tmp3) {
      if (!isChatLockedOpen) {
        if (!flag) {
          let items = [true, ];
          obj = { index: 0 };
          obj = { name: "tabs" };
          const obj1 = {};
          const obj2 = { name: "guilds" };
          const obj3 = { guildId: closure_6, channelId: tmp3 };
          obj2.params = obj3;
          const items1 = [obj2];
          obj1.routes = items1;
          obj1.index = 0;
          obj.state = obj1;
          const items2 = [obj, ];
          const obj4 = { name: "channel" };
          const obj5 = { guildId: closure_6, channelId: tmp3 };
          obj4.params = obj5;
          items2[1] = obj4;
          obj.routes = wrapRouteForRootNavigator(items2);
          items[1] = obj;
        }
        return items;
      }
    }
  }
  let tmp6 = !tmp5;
  if (!!isChatLockedOpen) {
    tmp6 = null != tmp3;
  }
  const items3 = [tmp6, ];
  const obj7 = { guildId: closure_6, channelId: tmp3, drawerOpen: flag };
  const items4 = [{ name: "guilds", params: obj7 }];
  const items5 = [{ name: "tabs", state: { routes: items4, index: 0 } }];
  items3[1] = { index: 0, routes: wrapRouteForRootNavigator(items5) };
  items = items3;
}
function getInitialMessagesState(flag) {
  if (flag === undefined) {
    flag = false;
  }
  return getInitialGuildState(closure_6, undefined, false, flag)[1];
}
function computeInitialNavigationStateWithoutLogging() {
  let channelId;
  let guildId;
  if (null != token.getToken()) {
    let obj3 = require(1198) /* shouldNavigate */;
    const _location = obj3.getHistory().location;
    let obj4 = require(3952) /* matchPath */;
    let obj = {};
    const RouteParam = require(3965) /* isPseudoGuildId */.RouteParam;
    const RouteParam2 = require(3965) /* isPseudoGuildId */.RouteParam;
    obj = { optional: true };
    obj.path = closure_7.CHANNEL(RouteParam.guildId(), RouteParam2.channelId(obj), ":messageId?");
    let matchPathResult = obj4.matchPath(_location.pathname, obj);
    const MobileHomeDrawerExperiment = require(3987) /* MobileHomeDrawerExperiment */.MobileHomeDrawerExperiment;
    const obj1 = { location: "app-start" };
    const tmp6 = MobileHomeDrawerExperiment.getConfig(obj1).landOnHome && null == matchPathResult;
    if (null == matchPathResult) {
      let obj8 = require(3952) /* matchPath */;
      const obj2 = {};
      const RouteParam3 = require(3965) /* isPseudoGuildId */.RouteParam;
      const RouteParam4 = require(3965) /* isPseudoGuildId */.RouteParam;
      obj3 = { optional: true };
      obj2.path = closure_7.CHANNEL(RouteParam3.guildId(), RouteParam4.channelId(obj3), ":messageId?");
      matchPathResult = obj8.matchPath(lastNonVoiceRoute.lastNonVoiceRoute, obj2);
      let flag2 = false;
      const guildIdResult1 = RouteParam3.guildId();
    } else {
      const openChannel = _location.openChannel;
      flag2 = null != openChannel && openChannel;
    }
    let params;
    if (null != matchPathResult) {
      params = matchPathResult.params;
    }
    if (null == params) {
      params = {};
    }
    ({ channelId, guildId } = params);
    if (null == guildId) {
      obj4 = { page: "private-channels" };
      const items = [obj4, getInitialMessagesState(tmp6)];
      return items;
    } else {
      if (!flag2) {
        flag2 = guildId !== closure_6;
      }
      const tmp19 = callback(getInitialGuildState(guildId, channelId, flag2, tmp6), 2);
      let str5 = "other";
      if (!tmp19[0]) {
        let str6 = "guild-channels";
        if (guildId === closure_6) {
          str6 = "private-channels";
        }
        str5 = str6;
      }
      if ("private-channels" === str5) {
        const obj5 = { page: str5 };
        const items1 = [obj5, tmp20];
        let items2 = items1;
      } else {
        const obj6 = { page: str5, guildId };
        items2 = [obj6, tmp20];
      }
      return items2;
    }
    const guildIdResult = RouteParam.guildId();
  } else {
    obj = { page: "other" };
    const items3 = [obj, ];
    const obj7 = {};
    obj8 = { name: "auth" };
    const items4 = [obj8];
    obj7.routes = items4;
    obj7.index = 0;
    items3[1] = obj7;
    return items3;
  }
}
({ ME: closure_6, Routes: closure_7 } = ME);
importDefaultResult = new importDefaultResult("getInitialNavigationState");
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/getInitialNavigationState.tsx");

export default function getInitialNavigationState(arr) {
  const tmp = computeInitialNavigationStateWithoutLogging()[1];
  const require = tmp;
  if (null != arr) {
    const item = arr.forEach((arg0) => {
      const routes = tmp.routes;
      return routes.push(arg0);
    });
  }
  return tmp;
};
export { wrapRouteForRootNavigator };
export const getInitialAuthState = function getInitialAuthState() {
  const routes = [{ name: "auth" }];
  return { routes, index: 0 };
};
export { getInitialGuildState };
export const computeInitialNavigationState = function computeInitialNavigationState() {
  const tmp = computeInitialNavigationStateWithoutLogging();
  importDefaultResult.log("Initial State:", tmp);
  return tmp;
};
