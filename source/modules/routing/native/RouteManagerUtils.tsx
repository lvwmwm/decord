// Module ID: 10793
// Function ID: 83810
// Name: matchPathToRoutes
// Dependencies: []
// Exports: cleanupRouteManager, initializeRouteManagerIfNeeded, popVoiceRoute, transitionToVoiceRoute

// Module 10793 (matchPathToRoutes)
let Routes;
function matchPathToRoutes(pathname, items) {
  let obj = items(dependencyMap[11]);
  obj = { paddingLeft: "absolute", alignItems: -1, flexDirection: -1, path: items };
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
    const defaultChannel = defaultChannel.getDefaultChannel(guildId);
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
  arg1(dependencyMap[14]).saveLastRoute(pathname.pathname);
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
    const result = arg1(dependencyMap[14]).saveLastNonVoiceRoute(Routes.CHANNEL(tmp6.guildId, tmp6.channelId));
    const obj2 = arg1(dependencyMap[14]);
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
        const obj15 = importDefault(dependencyMap[15]);
        obj15.popWithKey(arg1(dependencyMap[16]).getVoiceChannelKey(channel.id));
        const obj16 = arg1(dependencyMap[16]);
      }
      const guild = importDefault(dependencyMap[17]).selectGuild(guildId);
      const obj17 = importDefault(dependencyMap[17]);
      obj = { guildId, channelId, messageId, jumpType, skipMessageFetch: tmp };
      const channel1 = importDefault(dependencyMap[12]).selectChannel(obj);
    }
  }
  const channel2 = store.getChannel(voiceChannelId);
  const arg1 = channel2;
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
  let obj3 = arg1(dependencyMap[18]);
  if (!obj3.isVoicePanelEnabled(channel2)) {
    const guild1 = importDefault(dependencyMap[17]).selectGuild(voiceGuildId);
    const obj5 = importDefault(dependencyMap[17]);
    obj3 = { guildId: voiceGuildId, channelId: voiceChannelId, messageId: voiceMessageId, jumpType };
    const channel3 = importDefault(dependencyMap[12]).selectChannel(obj3);
    const obj6 = importDefault(dependencyMap[12]);
  }
  const obj8 = arg1(dependencyMap[19]);
  if (!obj8.isModalOpen(obj9.getVoiceChannelKey(channel2.id))) {
    const obj10 = importDefault(dependencyMap[15]);
    obj10.popAboveKey(arg1(dependencyMap[16]).getVoiceChannelKey(channel2.id));
    const obj11 = arg1(dependencyMap[16]);
    importDefault(dependencyMap[20]).wait(() => {
      channel2(closure_2[16]).openGuildVoiceModal(channel2);
    });
    const obj12 = importDefault(dependencyMap[20]);
  }
  const obj9 = arg1(dependencyMap[16]);
  if (tmp20) {
    setVoiceChatDrawerState(channel2.id, VoiceChatDrawerState.OPEN);
    if (tmp24) {
      const obj13 = importDefault(dependencyMap[21]);
      const result = obj13.jumpToVoiceChannelMessage(voiceGuildId, voiceChannelId, voiceMessageId, jumpType);
    }
    const tmp24 = null != voiceGuildId && null != voiceChannelId && null != voiceMessageId;
  }
}
function extractParams(arg0) {
  let _location;
  let channelId;
  let guildId;
  let match;
  ({ match, location: _location } = arg0);
  if (null == match) {
    let obj = { count: false, alignButton: false, align: false, label: false, isDestructive: false, guildId: closure_11, jumpType: arg1(dependencyMap[22]).JumpType.ANIMATED };
    return obj;
  } else {
    const params = match.params;
    ({ guildId, channelId } = params);
    if (_location.jumpType === arg1(dependencyMap[22]).JumpType.INSTANT) {
      let ANIMATED = arg1(dependencyMap[22]).JumpType.INSTANT;
    } else {
      ANIMATED = arg1(dependencyMap[22]).JumpType.ANIMATED;
    }
    obj = {};
    if (!obj2.isValidGuildId(guildId)) {
      guildId = closure_11;
    }
    obj.guildId = guildId;
    const obj2 = arg1(dependencyMap[10]);
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
let closure_3 = [967407828, 1889808960];
let closure_4 = importDefault(dependencyMap[0]);
const setVoiceChatDrawerState = arg1(dependencyMap[1]).setVoiceChatDrawerState;
let closure_6 = arg1(dependencyMap[2]).isGuildSelectableChannelType;
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[7]);
({ ME: closure_11, Routes } = tmp2);
const ChannelTypes = tmp2.ChannelTypes;
const VoiceChatDrawerState = arg1(dependencyMap[8]).VoiceChatDrawerState;
let importDefaultResult = importDefault(dependencyMap[9]);
importDefaultResult = new importDefaultResult("RouteUtils");
let closure_16 = false;
const RouteParam = arg1(dependencyMap[10]).RouteParam;
const RouteParam2 = arg1(dependencyMap[10]).RouteParam;
const CHANNELResult = Routes.CHANNEL(RouteParam.guildId(), RouteParam2.channelId({ optional: true }), ":messageId?");
const RouteParam3 = arg1(dependencyMap[10]).RouteParam;
const guildIdResult = RouteParam.guildId();
const RouteParam4 = arg1(dependencyMap[10]).RouteParam;
const items = ["" + CHANNELResult + Routes.VOICE_CHAT_CHANNEL_PARTIAL(RouteParam3.guildId({ name: "voiceGuildId" }), RouteParam4.channelId({ name: "voiceChannelId" }), ":voiceMessageId?"), CHANNELResult];
const guildIdResult1 = RouteParam3.guildId({ name: "voiceGuildId" });
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/routing/native/RouteManagerUtils.tsx");

export const MAIN_DRAWER_ROUTES = CHANNELResult;
export { extractParamsFromVoiceModalRoute };
export const popVoiceRoute = function popVoiceRoute(guildId) {
  const lastNonVoiceRoute = closure_8.lastNonVoiceRoute;
  importDefaultResult.log("popVoiceRoute: last non-voice route is " + lastNonVoiceRoute);
  let obj = importDefault(dependencyMap[12]);
  obj = { guildId, channelId: selectLastVisitedTextChannel(guildId) };
  const channel = obj.selectChannel(obj);
  arg1(dependencyMap[13]).transitionTo(lastNonVoiceRoute);
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
    arg1(dependencyMap[13]).transitionToGuild(arg0, arg1);
    const obj2 = arg1(dependencyMap[13]);
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
  if (!closure_16) {
    importDefault(dependencyMap[23]).addRouteRewriter(voiceRouteRewriter);
    const obj = importDefault(dependencyMap[23]);
    const result = importDefault(dependencyMap[23]).addRouteChangeListener(saveLastRouteListener);
    const obj2 = importDefault(dependencyMap[23]);
    const result1 = importDefault(dependencyMap[23]).addRouteChangeListener(saveLastNonVoiceRouteListener);
    const obj3 = importDefault(dependencyMap[23]);
    const result2 = importDefault(dependencyMap[23]).addRouteChangeListener(updateSelectedChannelListener);
    const obj4 = importDefault(dependencyMap[23]);
    const result3 = importDefault(dependencyMap[23]).addRouteChangeListener(logRouteChange);
    const obj5 = importDefault(dependencyMap[23]);
    importDefault(dependencyMap[23]).initialize();
    closure_16 = true;
    const obj6 = importDefault(dependencyMap[23]);
  }
};
export const cleanupRouteManager = function cleanupRouteManager() {
  if (closure_16) {
    importDefault(dependencyMap[23]).removeRouteRewriter(voiceRouteRewriter);
    const obj = importDefault(dependencyMap[23]);
    const result = importDefault(dependencyMap[23]).removeRouteChangeListener(saveLastRouteListener);
    const obj2 = importDefault(dependencyMap[23]);
    const result1 = importDefault(dependencyMap[23]).removeRouteChangeListener(saveLastNonVoiceRouteListener);
    const obj3 = importDefault(dependencyMap[23]);
    const result2 = importDefault(dependencyMap[23]).removeRouteChangeListener(updateSelectedChannelListener);
    const obj4 = importDefault(dependencyMap[23]);
    const result3 = importDefault(dependencyMap[23]).removeRouteChangeListener(logRouteChange);
    const obj5 = importDefault(dependencyMap[23]);
    importDefault(dependencyMap[23]).cleanup();
    closure_16 = false;
    const obj6 = importDefault(dependencyMap[23]);
  }
};
