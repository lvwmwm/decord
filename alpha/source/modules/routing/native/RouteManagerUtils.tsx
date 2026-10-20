// Module ID: 11611
// Function ID: 11612
// Name: RouteManagerUtils
// Dependencies: [109, 10686, 4804, 4800, 4975, 4878, 4851, 1087, 10687, 3, 4989, 11612, 6585, 1114, 11617, 6623, 7815, 6781, 6757, 9644, 5111, 584, 5672, 5162, 11618, 2]
// Exports: cleanupRouteManager, extractParamsFromVoiceModalRoute, initializeRouteManagerIfNeeded, popVoiceRoute, transitionToVoiceRoute

// Module 11611 (RouteManagerUtils)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import router_utils from "router_utils" /* 1114 */;
import ChannelRecord from "ChannelRecord" /* 4804 */;
import RouteUtils from "RouteUtils" /* 4989 */;
import flow_Client from "flow/Client" /* 5162 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5672 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6585 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6781 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7815 */;
import ChannelCallStore from "ChannelCallStore" /* 10686 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10687 */;
import _mod11612 from "module_11612" /* 11612 */;
import DefaultRouteActionCreators from "DefaultRouteActionCreators" /* 11617 */;
import RouteManagerDefault from "RouteManager" /* 11618 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import ChannelStore from "ChannelStore" /* 4800 */;
import DefaultRouteStore from "DefaultRouteStore" /* 4975 */;
import GuildChannelStore from "GuildChannelStore" /* 4878 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4851 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

let Routes;
let unpackModuleId;
function voiceRouteRewriter(location) {
  let channelId;
  let obj2;
  let obj3;
  let pathname;
  let state;
  const obj = { match: obj2.matchPath(pathname, obj3), location };
  ({ state, pathname } = location);
  obj2 = _mod11612;
  obj3 = { path: items, strict: false, exact: false };
  const tmp = extractParams(obj);
  ({ channelId, guildId } = tmp);
  const tmp2 = _objectWithoutProperties(tmp, closure_3);
  const channel = ChannelStore.getChannel(channelId);
  let tmp4 = null;
  if (null != channelId) {
    tmp4 = null;
    if (null != guildId) {
      let type;
      if (channel != null) {
        type = channel.type;
      }
      if (type === ChannelTypes.GUILD_VOICE) {
        const obj4 = { channelId, guildId };
        const merged = Object.assign(tmp2);
        tmp4 = obj4;
      } else {
        let type1;
        if (channel != null) {
          type1 = channel.type;
        }
        tmp4 = null;
      }
    }
  }
  if (null != tmp4) {
    if (logger != null) {
      const _JSON = JSON;
      const _HermesInternal = HermesInternal;
      logger.log("voiceRouteRewriter: has voiceChannelParams = " + JSON.stringify(tmp4));
    }
    const _HermesInternal2 = HermesInternal;
    const combined = "" + DefaultRouteStore.lastNonVoiceRoute + Routes.VOICE_CHAT_CHANNEL_PARTIAL(tmp4.guildId, tmp4.channelId, tmp4.messageId);
    let tmp17 = null;
    if (combined !== location.pathname) {
      if (logger != null) {
        const _HermesInternal3 = HermesInternal;
        logger.log("voiceRouteRewriter: rewriting route: " + location.pathname + " -> " + combined);
      }
      tmp17 = { path: combined, state };
      const obj6 = { path: combined, state };
    }
    return tmp17;
  } else {
    return null;
  }
}
function saveLastRouteListener(pathname) {
  const obj = DefaultRouteActionCreators;
  obj.saveLastRoute(pathname.pathname);
}
function saveLastNonVoiceRouteListener(pathname) {
  pathname = pathname.pathname;
  const obj = _mod11612;
  const obj2 = { path: items, strict: false, exact: false };
  const matchPathResult = obj.matchPath(pathname, obj2);
  let channelId;
  const getChannel = ChannelStore.getChannel;
  if (matchPathResult != null) {
    channelId = matchPathResult.params.channelId;
  }
  const channel = getChannel(channelId);
  let type;
  if (channel != null) {
    type = channel.type;
  }
  let tmp9 = null;
  if (type !== ChannelTypes.GUILD_VOICE) {
    let type1;
    if (channel != null) {
      type1 = channel.type;
    }
    tmp9 = null;
    if (type1 !== tmp8.GUILD_STAGE_VOICE) {
      const obj3 = { match: matchPathResult, location: pathname };
      tmp9 = extractParams(obj3);
    }
  }
  if (null != tmp9) {
    const tmpResult = DefaultRouteActionCreators;
    const result = tmpResult.saveLastNonVoiceRoute(Routes.CHANNEL(tmp9.guildId, tmp9.channelId));
  }
}
function updateSelectedChannelListener(location, arg1) {
  let channel1;
  let channelId;
  let jumpType;
  let messageId;
  let tmp21;
  let tmp53;
  let tmp55;
  let voiceChannelId;
  let voiceChannelId2;
  let voiceGuildId;
  let voiceGuildId2;
  let voiceMessageId;
  let voiceMessageId2;
  const pathname = location.pathname;
  let obj = channel1(11612);
  const obj2 = { path: items, strict: false, exact: false };
  const matchPathResult = obj.matchPath(pathname, obj2);
  let params;
  if (matchPathResult != null) {
    params = matchPathResult.params;
  }
  if (params == null) {
    params = {};
  }
  const obj3 = { voiceChannelId, voiceGuildId, voiceMessageId };
  const obj4 = { match: matchPathResult, location };
  ({ voiceChannelId, voiceGuildId, voiceMessageId } = params);
  const merged = Object.assign(extractParams(obj4));
  ({ guildId, channelId, messageId, jumpType, voiceChannelId: voiceChannelId2, voiceGuildId: voiceGuildId2, voiceMessageId: voiceMessageId2 } = obj3);
  if (null == voiceChannelId2) {
    if (null == voiceGuildId2) {
      const tmp42 = closure_15;
      if (closure_15 != null) {
        const _JSON5 = JSON;
        const verbose2 = tmp42.verbose;
        const json = JSON.stringify(location);
        const _JSON6 = JSON;
        const _HermesInternal3 = HermesInternal;
        const obj5 = { guildId, channelId, messageId, jumpType, voiceChannelId: voiceChannelId2, voiceGuildId: voiceGuildId2, voiceMessageId: voiceMessageId2 };
        verbose2("UpdateSelectedChannelListener -> no voice route present in " + json + " " + JSON.stringify(obj5) + " ");
      }
      const channel = ChannelStore.getChannel(SelectedChannelStore.getLastSelectedChannelId());
      let isGuildVoiceResult;
      if (channel != null) {
        isGuildVoiceResult = channel.isGuildVoice();
      }
      if (!isGuildVoiceResult) {
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        isGuildVoiceResult = isGuildStageVoiceResult;
      }
      if (isGuildVoiceResult) {
        const popWithKey = ModalActionCreatorsDefault.popWithKey;
        ModalActionCreatorsDefault;
        const tmpResult = channel1(7815);
        popWithKey(tmpResult.getVoiceChannelKey(channel.id));
      }
      const obj17 = GuildActionCreatorsDefault;
      const guild = obj17.selectGuild(guildId);
      const obj6 = { guildId, channelId, messageId, jumpType, skipMessageFetch: tmp5, opensChannel: tmp53, isAppStartupNavigation: tmp55 };
      tmp53 = null != channelId;
      const selectChannel2 = SelectedChannelActionCreatorsDefault.selectChannel;
      SelectedChannelActionCreatorsDefault;
      const tmp50 = importDefault;
      if (tmp53) {
        tmp53 = true !== location.navigationReplace || true === location.openChannel;
      }
      tmp55 = true === location.isAppStartupNavigation && "POP" !== arg1;
      const channel2 = selectChannel2(obj6);
      const tmp57 = null != messageId && null != guildId && null != channelId && tmp50(6757)(channelId);
      if (tmp57) {
        const tmpResult5 = channel1(9644);
        const result = tmpResult5.presentChannelSecondaryViewChat(guildId, channelId);
      }
    }
  }
  channel1 = ChannelStore.getChannel(voiceChannelId2);
  let type;
  if (channel1 != null) {
    type = channel1.type;
  }
  if (type !== ChannelTypes.GUILD_VOICE) {
    let type1;
    if (channel1 != null) {
      type1 = channel1.type;
    }
    if (type1 !== tmp7.GUILD_STAGE_VOICE) {
      const tmp59 = closure_15;
      if (closure_15 != null) {
        let id;
        const log = tmp59.log;
        if (channel1 != null) {
          id = channel1.id;
        }
        const _JSON = JSON;
        const _JSON2 = JSON;
        const obj7 = { guildId, channelId, messageId, jumpType, voiceChannelId: voiceChannelId2, voiceGuildId: voiceGuildId2, voiceMessageId: voiceMessageId2 };
        const json1 = JSON.stringify(location);
        const _HermesInternal = HermesInternal;
        log("UpdateSelectedChannelListener -> !!!VERY BAD!!! channel.id " + id + " (voiceChannelId " + voiceChannelId2 + ") is not a voice channel! and yet RouteUtils thinks it is! " + json1 + " " + JSON.stringify(obj7) + " ");
      }
    }
  }
  const tmp15 = closure_15;
  if (closure_15 != null) {
    const _JSON3 = JSON;
    const verbose = tmp15.verbose;
    const json2 = JSON.stringify(location);
    const _JSON4 = JSON;
    const _HermesInternal2 = HermesInternal;
    const obj9 = { guildId, channelId, messageId, jumpType, voiceChannelId: voiceChannelId2, voiceGuildId: voiceGuildId2, voiceMessageId: voiceMessageId2 };
    verbose("UpdateSelectedChannelListener -> voice route present! " + json2 + " " + JSON.stringify(obj9) + " ");
  }
  const isGuildStageVoiceResult1 = channel1.isGuildStageVoice() && SelectedChannelStore.getVoiceChannelId() === channel1.id;
  if (isGuildStageVoiceResult1) {
    const obj8 = GuildActionCreatorsDefault;
    const guild1 = obj8.selectGuild(voiceGuildId2);
    const obj10 = { guildId: voiceGuildId2, channelId: voiceChannelId2, messageId: voiceMessageId2, jumpType, isAppStartupNavigation: tmp21 };
    tmp21 = true === location.isAppStartupNavigation;
    const selectChannel = SelectedChannelActionCreatorsDefault.selectChannel;
    SelectedChannelActionCreatorsDefault;
    if (tmp21) {
      tmp21 = "POP" !== arg1;
    }
    const channel3 = selectChannel(obj10);
  }
  const isModalOpen = channel1(5111).isModalOpen;
  channel1(5111);
  const tmpResult7 = channel1(7815);
  if (!isModalOpen(tmpResult7.getVoiceChannelKey(channel1.id))) {
    const popAboveKey = ModalActionCreatorsDefault.popAboveKey;
    ModalActionCreatorsDefault;
    const tmpResult8 = channel1(7815);
    popAboveKey(tmpResult8.getVoiceChannelKey(channel1.id));
    const obj12 = DispatcherDefault;
    obj12.wait(() => {
      const obj = PrivateChannelCallUtils;
      obj.openGuildVoiceModal(channel1);
    });
  }
  const tmp28 = channel1.isGuildVoice() && null != voiceMessageId2 || channel1.isGuildStageVoice();
  if (tmp28) {
    if (isGuildStageVoiceResult1) {
      setVoiceChatDrawerState(channel1.id, VoiceChatDrawerState.OPEN);
    } else {
      const obj13 = ChannelRTCActionCreatorsDefault;
      obj13.updateChatOpen(channel1.id, true);
    }
    const tmp34 = null != voiceGuildId2 && null != voiceChannelId2 && null != voiceMessageId2;
    if (tmp34) {
      const obj14 = ChannelRTCActionCreatorsDefault;
      const result1 = obj14.jumpToVoiceChannelMessage(voiceGuildId2, voiceChannelId2, voiceMessageId2, jumpType);
    }
  }
}
function extractParams(arg0) {
  let _location;
  let channelId;
  let match;
  let tmp;
  ({ match, location: _location } = arg0);
  if (null == match) {
    const obj = { guildId: unpackModuleId, channelId: null, messageId: null, jumpType: flow_Client.JumpType.ANIMATED, skipMessageFetch: false };
    return obj;
  } else {
    let ANIMATED;
    const params = match.params;
    ({ guildId, channelId } = params);
    const messageId = params.messageId;
    if (_location.jumpType === flow_Client.JumpType.INSTANT) {
      ANIMATED = tmp5(5162).JumpType.INSTANT;
    } else {
      ANIMATED = tmp5(5162).JumpType.ANIMATED;
    }
    RouteUtils;
    const obj2 = { guildId: unpackModuleId, channelId: tmp, messageId, jumpType: ANIMATED, skipMessageFetch: _location.skipMessageFetch };
    tmp = null;
    const tmp5Result2 = RouteUtils;
    if (tmp5Result2.isValidChannelId(channelId)) {
      tmp = channelId;
    }
    return obj2;
  }
}
function logRouteChange(pathname) {
  logger.log("Navigated to: " + pathname.pathname);
}
let closure_3 = ["channelId", "guildId"];
const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
let closure_6 = ChannelRecord.isGuildSelectableChannelType;
({ ME: unpackModuleId, Routes } = Constants);
const ChannelTypes = Constants.ChannelTypes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
const tmp3 = new LoggerDefault("RouteUtils");
const logger = tmp3;
let c16 = false;
const CHANNEL = Routes.CHANNEL;
const RouteParam = RouteUtils.RouteParam;
const guildIdResult = RouteParam.guildId();
const RouteParam2 = RouteUtils.RouteParam;
const CHANNELResult = CHANNEL(guildIdResult, RouteParam2.channelId({ optional: true }), ":messageId?");
const VOICE_CHAT_CHANNEL_PARTIAL = Routes.VOICE_CHAT_CHANNEL_PARTIAL;
const RouteParam3 = RouteUtils.RouteParam;
const guildIdResult1 = RouteParam3.guildId({ name: "voiceGuildId" });
const RouteParam4 = RouteUtils.RouteParam;
const items = ["" + CHANNELResult + VOICE_CHAT_CHANNEL_PARTIAL(guildIdResult1, RouteParam4.channelId({ name: "voiceChannelId" }), ":voiceMessageId?"), CHANNELResult];
let result = size.fileFinishedImporting("modules/routing/native/RouteManagerUtils.tsx");

export const MAIN_DRAWER_ROUTES = CHANNELResult;
export const extractParamsFromVoiceModalRoute = function extractParamsFromVoiceModalRoute(location) {
  let voiceChannelId;
  let voiceGuildId;
  let voiceMessageId;
  const pathname = location.pathname;
  const obj = _mod11612;
  const obj2 = { path: items, strict: false, exact: false };
  const matchPathResult = obj.matchPath(pathname, obj2);
  let params;
  if (matchPathResult != null) {
    params = matchPathResult.params;
  }
  if (params == null) {
    params = {};
  }
  const obj3 = { voiceChannelId, voiceGuildId, voiceMessageId };
  const obj4 = { match: matchPathResult, location };
  ({ voiceChannelId, voiceGuildId, voiceMessageId } = params);
  const merged = Object.assign(extractParams(obj4));
  return obj3;
};
export const popVoiceRoute = function popVoiceRoute(guildId) {
  let id;
  const lastNonVoiceRoute = DefaultRouteStore.lastNonVoiceRoute;
  logger.log("popVoiceRoute: last non-voice route is " + lastNonVoiceRoute);
  const obj = { guildId, channelId: null };
  const selectChannel = SelectedChannelActionCreatorsDefault.selectChannel;
  SelectedChannelActionCreatorsDefault;
  const channel = ChannelStore.getChannel(SelectedChannelStore.getLastSelectedChannelId());
  let type;
  const obj2 = SelectedChannelStore;
  if (channel != null) {
    type = channel.type;
  }
  if (null != type) {
    let type1;
    const tmp6 = closure_6;
    if (channel != null) {
      type1 = channel.type;
    }
    if (tmp6(type1)) {
      id = channel.id;
    }
    obj.channelId = id;
    const channel1 = selectChannel(obj);
    const obj3 = router_utils;
    obj3.transitionTo(lastNonVoiceRoute);
  }
  id = obj2.getMostRecentSelectedTextChannelId(guildId);
  if (id == null) {
    const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
    let id1;
    if (defaultChannel != null) {
      id1 = defaultChannel.id;
    }
    id = id1;
  }
};
export const transitionToVoiceRoute = function transitionToVoiceRoute(arg0, arg1) {
  const defaultRoute = DefaultRouteStore.defaultRoute;
  const obj = _mod11612;
  const obj2 = { path: items, strict: false, exact: false };
  const matchPathResult = obj.matchPath(defaultRoute, obj2);
  let params;
  if (matchPathResult != null) {
    params = matchPathResult.params;
  }
  if (params == null) {
    params = {};
  }
  const voiceChannelId = params.voiceChannelId;
  logger.log("transitionToVoiceRoute(<" + arg0 + ">, <" + arg1 + ">), current route " + defaultRoute + " has voiceChannelId " + voiceChannelId);
  const obj4 = logger;
  if (voiceChannelId !== arg1) {
    const tmpResult = router_utils;
    tmpResult.transitionToGuild(arg0, arg1);
  } else {
    const _HermesInternal = HermesInternal;
    obj4.log("transitionToVoiceRoute -> " + voiceChannelId + " === " + arg1 + ". staying where we are");
  }
};
export { voiceRouteRewriter };
export { saveLastRouteListener };
export { saveLastNonVoiceRouteListener };
export { updateSelectedChannelListener };
export { extractParams };
export const initializeRouteManagerIfNeeded = function initializeRouteManagerIfNeeded() {
  const tmp = c16;
  if (!tmp) {
    const obj = RouteManagerDefault;
    obj.addRouteRewriter(voiceRouteRewriter);
    const obj2 = RouteManagerDefault;
    const result = obj2.addRouteChangeListener(saveLastRouteListener);
    const obj3 = RouteManagerDefault;
    const result1 = obj3.addRouteChangeListener(saveLastNonVoiceRouteListener);
    const obj4 = RouteManagerDefault;
    const result2 = obj4.addRouteChangeListener(updateSelectedChannelListener);
    const obj5 = RouteManagerDefault;
    const result3 = obj5.addRouteChangeListener(logRouteChange);
    const obj6 = RouteManagerDefault;
    obj6.initialize();
    c16 = true;
  }
};
export const cleanupRouteManager = function cleanupRouteManager() {
  const tmp = c16;
  if (tmp) {
    const obj = RouteManagerDefault;
    obj.removeRouteRewriter(voiceRouteRewriter);
    const obj2 = RouteManagerDefault;
    const result = obj2.removeRouteChangeListener(saveLastRouteListener);
    const obj3 = RouteManagerDefault;
    const result1 = obj3.removeRouteChangeListener(saveLastNonVoiceRouteListener);
    const obj4 = RouteManagerDefault;
    const result2 = obj4.removeRouteChangeListener(updateSelectedChannelListener);
    const obj5 = RouteManagerDefault;
    const result3 = obj5.removeRouteChangeListener(logRouteChange);
    const obj6 = RouteManagerDefault;
    obj6.cleanup();
    c16 = false;
  }
};
