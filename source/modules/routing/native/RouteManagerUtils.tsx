// Module ID: 10833
// Function ID: 84064
// Name: matchPathToRoutes
// Dependencies: [29, 10240, 1352, 1348, 3951, 1907, 1906, 653, 10241, 3, 3965, 10834, 4944, 1198, 10839, 4337, 4341, 5048, 10662, 3981, 686, 4323, 4062, 10840, 2]
// Exports: cleanupRouteManager, initializeRouteManagerIfNeeded, popVoiceRoute, transitionToVoiceRoute

// Module 10833 (matchPathToRoutes)
import _objectWithoutProperties from "_objectWithoutProperties";
import { setVoiceChatDrawerState } from "resetFocusTimer";
import { isGuildSelectableChannelType as closure_6 } from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import ME from "ME";
import { VoiceChatDrawerState } from "BOX_MODE_ACTIONSHEET_WIDTH";
import importDefaultResult from "_isNativeReflectConstruct";
import { RouteParam } from "isPseudoGuildId";
import { RouteParam as RouteParam2 } from "isPseudoGuildId";
import { RouteParam as RouteParam3 } from "isPseudoGuildId";
import { RouteParam as RouteParam4 } from "isPseudoGuildId";

let Routes;
let closure_11;
const require = arg1;
function matchPathToRoutes(pathname, items) {
  let obj = require(10834) /* MemoryRouter */;
  obj = { path: items, strict: false, exact: false };
  return obj.matchPath(pathname, obj);
}
function extractParamsFromVoiceModalRoute(location) {
  let voiceChannelId;
  let voiceGuildId;
  let voiceMessageId;
  const tmp = matchPathToRoutes(location.pathname, items);
  let params;
  if (null != tmp) {
    params = tmp.params;
  }
  if (null == params) {
    params = {};
  }
  let obj = {};
  obj = { match: tmp, location };
  ({ voiceChannelId, voiceGuildId, voiceMessageId } = params);
  const merged = Object.assign(extractParams(obj));
  obj["voiceChannelId"] = voiceChannelId;
  obj["voiceGuildId"] = voiceGuildId;
  obj["voiceMessageId"] = voiceMessageId;
  return obj;
}
function selectLastVisitedTextChannel(guildId) {
  const channel = store.getChannel(store2.getLastSelectedChannelId());
  let type;
  if (null != channel) {
    type = channel.type;
  }
  if (null != type) {
    let type1;
    if (null != channel) {
      type1 = channel.type;
    }
    if (closure_6(type1)) {
      let id = channel.id;
    }
    return id;
  }
  id = store2.getMostRecentSelectedTextChannelId(guildId);
  if (null == id) {
    defaultChannel = defaultChannel.getDefaultChannel(guildId);
    id = undefined;
    if (null != defaultChannel) {
      id = defaultChannel.id;
    }
  }
}
function voiceRouteRewriter(location) {
  let channelId;
  let guildId;
  let obj = { match: matchPathToRoutes(location.pathname, items), location };
  const tmp = extractParams(obj);
  ({ channelId, guildId } = tmp);
  const tmp2 = callback(tmp, closure_3);
  const channel = store.getChannel(channelId);
  let tmp4 = null;
  if (null != channelId) {
    tmp4 = null;
    if (null != guildId) {
      let type;
      if (null != channel) {
        type = channel.type;
      }
      if (type === ChannelTypes.GUILD_VOICE) {
        obj = {};
        const merged = Object.assign(tmp2);
        obj["channelId"] = channelId;
        obj["guildId"] = guildId;
        tmp4 = obj;
      } else {
        let type1;
        if (null != channel) {
          type1 = channel.type;
        }
        tmp4 = null;
      }
    }
  }
  if (null != tmp4) {
    if (null != importDefaultResult) {
      const _JSON = JSON;
      const _HermesInternal = HermesInternal;
      importDefaultResult.log("voiceRouteRewriter: has voiceChannelParams = " + JSON.stringify(tmp4));
    }
    const _HermesInternal2 = HermesInternal;
    const combined = "" + closure_8.lastNonVoiceRoute + Routes.VOICE_CHAT_CHANNEL_PARTIAL(tmp4.guildId, tmp4.channelId, tmp4.messageId);
    let tmp20 = null;
    if (combined !== location.pathname) {
      if (null != importDefaultResult) {
        const _HermesInternal3 = HermesInternal;
        importDefaultResult.log("voiceRouteRewriter: rewriting route: " + location.pathname + " -> " + combined);
      }
      obj = { path: combined, state: location.state };
      tmp20 = obj;
    }
    return tmp20;
  } else {
    return null;
  }
}
function saveLastRouteListener(pathname) {
  require(10839) /* isLurkingGuildRoute */.saveLastRoute(pathname.pathname);
}
function saveLastNonVoiceRouteListener(pathname) {
  const tmp = matchPathToRoutes(pathname.pathname, items);
  let channelId;
  if (null != tmp) {
    channelId = tmp.params.channelId;
  }
  const channel = store.getChannel(channelId);
  let type;
  if (null != channel) {
    type = channel.type;
  }
  let tmp6 = null;
  if (type !== ChannelTypes.GUILD_VOICE) {
    let type1;
    if (null != channel) {
      type1 = channel.type;
    }
    tmp6 = null;
    if (type1 !== ChannelTypes.GUILD_STAGE_VOICE) {
      const obj = { match: tmp, location: pathname };
      tmp6 = extractParams(obj);
    }
  }
  if (null != tmp6) {
    const result = require(10839) /* isLurkingGuildRoute */.saveLastNonVoiceRoute(Routes.CHANNEL(tmp6.guildId, tmp6.channelId));
    const obj2 = require(10839) /* isLurkingGuildRoute */;
  }
}
function updateSelectedChannelListener(location) {
  let channelId;
  let guildId;
  let jumpType;
  let messageId;
  let voiceChannelId;
  let voiceGuildId;
  let voiceMessageId;
  let obj = extractParamsFromVoiceModalRoute(location);
  if (null == obj) {
    obj = {};
  }
  ({ guildId, channelId, messageId, jumpType, voiceChannelId, voiceGuildId, voiceMessageId } = obj);
  if (null == voiceChannelId) {
    if (null == voiceGuildId) {
      if (null != importDefaultResult) {
        const _JSON5 = JSON;
        const json = JSON.stringify(location);
        const _JSON6 = JSON;
        obj = { guildId, channelId, messageId, jumpType, voiceChannelId, voiceGuildId, voiceMessageId };
        const _HermesInternal3 = HermesInternal;
        importDefaultResult.verbose("UpdateSelectedChannelListener -> no voice route present in " + json + " " + JSON.stringify(obj) + " ");
      }
      const channel = store.getChannel(store2.getLastSelectedChannelId());
      let tmp36 = null != channel && channel.isGuildVoice();
      if (!tmp36) {
        tmp36 = null != channel && channel.isGuildStageVoice();
        const tmp37 = null != channel && channel.isGuildStageVoice();
      }
      if (tmp36) {
        const obj15 = importDefault(4337);
        obj15.popWithKey(channel2(4341).getVoiceChannelKey(channel.id));
        const obj16 = channel2(4341);
      }
      const guild = importDefault(5048).selectGuild(guildId);
      const obj17 = importDefault(5048);
      obj = { guildId, channelId, messageId, jumpType, skipMessageFetch: tmp };
      const channel1 = importDefault(4944).selectChannel(obj);
    }
  }
  channel2 = store.getChannel(voiceChannelId);
  let type;
  if (null != channel2) {
    type = channel2.type;
  }
  if (type !== ChannelTypes.GUILD_VOICE) {
    let type1;
    if (null != channel2) {
      type1 = channel2.type;
    }
    if (type1 !== ChannelTypes.GUILD_STAGE_VOICE) {
      if (null != importDefaultResult) {
        let id;
        if (null != channel2) {
          id = channel2.id;
        }
        const _JSON = JSON;
        const _JSON2 = JSON;
        const obj1 = { guildId, channelId, messageId, jumpType, voiceChannelId, voiceGuildId, voiceMessageId };
        const json1 = JSON.stringify(location);
        const _HermesInternal = HermesInternal;
        importDefaultResult.log("UpdateSelectedChannelListener -> !!!VERY BAD!!! channel.id " + id + " (voiceChannelId " + voiceChannelId + ") is not a voice channel! and yet RouteUtils thinks it is! " + json1 + " " + JSON.stringify(obj1) + " ");
      }
    }
  }
  if (null != importDefaultResult) {
    const _JSON3 = JSON;
    const json2 = JSON.stringify(location);
    const _JSON4 = JSON;
    const obj2 = { guildId, channelId, messageId, jumpType, voiceChannelId, voiceGuildId, voiceMessageId };
    const _HermesInternal2 = HermesInternal;
    importDefaultResult.verbose("UpdateSelectedChannelListener -> voice route present! " + json2 + " " + JSON.stringify(obj2) + " ");
  }
  let obj3 = channel2(10662);
  if (!obj3.isVoicePanelEnabled(channel2)) {
    const guild1 = importDefault(5048).selectGuild(voiceGuildId);
    const obj5 = importDefault(5048);
    obj3 = { guildId: voiceGuildId, channelId: voiceChannelId, messageId: voiceMessageId, jumpType };
    const channel3 = importDefault(4944).selectChannel(obj3);
    const obj6 = importDefault(4944);
  }
  const obj8 = channel2(3981);
  if (!obj8.isModalOpen(obj9.getVoiceChannelKey(channel2.id))) {
    const obj10 = importDefault(4337);
    obj10.popAboveKey(channel2(4341).getVoiceChannelKey(channel2.id));
    const obj11 = channel2(4341);
    importDefault(686).wait(() => {
      channel2(outer1_2[16]).openGuildVoiceModal(channel2);
    });
    const obj12 = importDefault(686);
  }
  obj9 = channel2(4341);
  if (tmp20) {
    setVoiceChatDrawerState(channel2.id, VoiceChatDrawerState.OPEN);
    if (tmp24) {
      const obj13 = importDefault(4323);
      const result = obj13.jumpToVoiceChannelMessage(voiceGuildId, voiceChannelId, voiceMessageId, jumpType);
    }
    tmp24 = null != voiceGuildId && null != voiceChannelId && null != voiceMessageId;
  }
}
function extractParams(arg0) {
  let _location;
  let channelId;
  let guildId;
  let match;
  ({ match, location: _location } = arg0);
  if (null == match) {
    let obj = { guildId: closure_11, channelId: null, messageId: null, jumpType: require(4062) /* GuildThemeSourcePreference */.JumpType.ANIMATED, skipMessageFetch: false };
    return obj;
  } else {
    const params = match.params;
    ({ guildId, channelId } = params);
    if (_location.jumpType === require(4062) /* GuildThemeSourcePreference */.JumpType.INSTANT) {
      let ANIMATED = require(4062) /* GuildThemeSourcePreference */.JumpType.INSTANT;
    } else {
      ANIMATED = require(4062) /* GuildThemeSourcePreference */.JumpType.ANIMATED;
    }
    obj = {};
    if (!obj2.isValidGuildId(guildId)) {
      guildId = closure_11;
    }
    obj.guildId = guildId;
    obj2 = require(3965) /* isPseudoGuildId */;
    let tmp9 = null;
    if (obj3.isValidChannelId(channelId)) {
      tmp9 = channelId;
    }
    obj.channelId = tmp9;
    obj.messageId = params.messageId;
    obj.jumpType = ANIMATED;
    obj.skipMessageFetch = _location.skipMessageFetch;
    return obj;
  }
}
function logRouteChange(pathname) {
  importDefaultResult.log("Navigated to: " + pathname.pathname);
}
let closure_3 = ["channelId", "guildId"];
({ ME: closure_11, Routes } = ME);
const ChannelTypes = ME.ChannelTypes;
importDefaultResult = new importDefaultResult("RouteUtils");
let c16 = false;
const CHANNELResult = Routes.CHANNEL(RouteParam.guildId(), RouteParam2.channelId({ optional: true }), ":messageId?");
const guildIdResult = RouteParam.guildId();
const items = ["" + CHANNELResult + Routes.VOICE_CHAT_CHANNEL_PARTIAL(RouteParam3.guildId({ name: "voiceGuildId" }), RouteParam4.channelId({ name: "voiceChannelId" }), ":voiceMessageId?"), CHANNELResult];
const guildIdResult1 = RouteParam3.guildId({ name: "voiceGuildId" });
let result = require("_callSuper").fileFinishedImporting("modules/routing/native/RouteManagerUtils.tsx");

export const MAIN_DRAWER_ROUTES = CHANNELResult;
export { extractParamsFromVoiceModalRoute };
export const popVoiceRoute = function popVoiceRoute(guildId) {
  const lastNonVoiceRoute = closure_8.lastNonVoiceRoute;
  importDefaultResult.log("popVoiceRoute: last non-voice route is " + lastNonVoiceRoute);
  let obj = importDefault(4944);
  obj = { guildId, channelId: selectLastVisitedTextChannel(guildId) };
  const channel = obj.selectChannel(obj);
  require(1198) /* shouldNavigate */.transitionTo(lastNonVoiceRoute);
};
export const transitionToVoiceRoute = function transitionToVoiceRoute(arg0, arg1) {
  const defaultRoute = closure_8.defaultRoute;
  const tmp = matchPathToRoutes(defaultRoute, items);
  let params;
  if (null != tmp) {
    params = tmp.params;
  }
  if (null == params) {
    params = {};
  }
  const voiceChannelId = params.voiceChannelId;
  importDefaultResult.log("transitionToVoiceRoute(<" + arg0 + ">, <" + arg1 + ">), current route " + defaultRoute + " has voiceChannelId " + voiceChannelId);
  if (voiceChannelId !== arg1) {
    require(1198) /* shouldNavigate */.transitionToGuild(arg0, arg1);
    const obj2 = require(1198) /* shouldNavigate */;
  } else {
    const _HermesInternal = HermesInternal;
    importDefaultResult.log("transitionToVoiceRoute -> " + voiceChannelId + " === " + arg1 + ". staying where we are");
  }
};
export { voiceRouteRewriter };
export { saveLastRouteListener };
export { saveLastNonVoiceRouteListener };
export { updateSelectedChannelListener };
export { extractParams };
export const initializeRouteManagerIfNeeded = function initializeRouteManagerIfNeeded() {
  if (!c16) {
    importDefault(10840).addRouteRewriter(voiceRouteRewriter);
    const obj = importDefault(10840);
    const result = importDefault(10840).addRouteChangeListener(saveLastRouteListener);
    const obj2 = importDefault(10840);
    const result1 = importDefault(10840).addRouteChangeListener(saveLastNonVoiceRouteListener);
    const obj3 = importDefault(10840);
    const result2 = importDefault(10840).addRouteChangeListener(updateSelectedChannelListener);
    const obj4 = importDefault(10840);
    const result3 = importDefault(10840).addRouteChangeListener(logRouteChange);
    const obj5 = importDefault(10840);
    importDefault(10840).initialize();
    c16 = true;
    const obj6 = importDefault(10840);
  }
};
export const cleanupRouteManager = function cleanupRouteManager() {
  if (c16) {
    importDefault(10840).removeRouteRewriter(voiceRouteRewriter);
    const obj = importDefault(10840);
    const result = importDefault(10840).removeRouteChangeListener(saveLastRouteListener);
    const obj2 = importDefault(10840);
    const result1 = importDefault(10840).removeRouteChangeListener(saveLastNonVoiceRouteListener);
    const obj3 = importDefault(10840);
    const result2 = importDefault(10840).removeRouteChangeListener(updateSelectedChannelListener);
    const obj4 = importDefault(10840);
    const result3 = importDefault(10840).removeRouteChangeListener(logRouteChange);
    const obj5 = importDefault(10840);
    importDefault(10840).cleanup();
    c16 = false;
    const obj6 = importDefault(10840);
  }
};
