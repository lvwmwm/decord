// Module ID: 9878
// Function ID: 76502
// Name: getQuickSwitcherOptions
// Dependencies: []
// Exports: search, selectResult, switchToResult, toggle

// Module 9878 (getQuickSwitcherOptions)
let Layers;
function getQuickSwitcherOptions(str) {
  const GameProfileInQuickswitcherExperiment = arg1(dependencyMap[13]).GameProfileInQuickswitcherExperiment;
  const enabled = GameProfileInQuickswitcherExperiment.getConfig({ location: "QuickSwitcherActionCreators.getQueryMode" }).enabled;
  const tmp3 = enabled ? closure_20 : frozen[str.charAt(str, 0)];
  let tmp4 = null;
  if (null != tmp3) {
    tmp4 = tmp3;
  }
  const items = [str.replace(enabled ? regExp1 : regExp, ""), tmp4];
  const tmp5 = callback2(items, 2);
  return { query: tmp5[0], queryMode: tmp5[1] };
}
function trackOpen(source) {
  if (!uiStore.isOpen()) {
    const guildId = store2.getGuildId();
    const channelId = store.getChannelId(guildId);
    let tmp6;
    if (null != channelId) {
      const channel = authStore.getChannel(channelId);
      let type = null;
      if (null != channel) {
        type = channel.type;
      }
      tmp6 = type;
    }
    let obj = importDefault(dependencyMap[14]);
    obj = { source, current_guild_id: guildId, current_channel_id: channelId, current_channel_type: tmp6 };
    obj.track(constants.QUICKSWITCHER_OPENED, obj);
  }
}
function trackClose(QUICKSWITCHER_CLOSED, record) {
  let query;
  let queryMode;
  let results;
  let score;
  let type;
  function getResultType(record) {
    let type = record;
    if (null == record) {
      return null;
    } else if (type.type === callback(closure_2[12]).AutocompleterResultTypes.IN_APP_NAVIGATION) {
      const text = `${type.type}_`;
      type = type.record.type;
      let type2 = `${type.type}_${type}`;
    } else {
      type2 = type.type;
    }
  }
  const props = uiStore.getProps();
  ({ results, queryMode, query } = props);
  const guildId = store2.getGuildId();
  const channelId = store.getChannelId(guildId);
  let obj = record(dependencyMap[12]);
  const isEmailResult = importDefault(dependencyMap[15]).isEmail(query);
  const obj2 = importDefault(dependencyMap[15]);
  const isPhoneNumberResult = importDefault(dependencyMap[15]).isPhoneNumber(query);
  const obj3 = importDefault(dependencyMap[15]);
  const isUserTagLikeResult = importDefault(dependencyMap[15]).isUserTagLike(query);
  let tmp8 = null != channelId;
  if (tmp8) {
    tmp8 = isStaticChannelRoute(channelId);
  }
  obj = {};
  let tmp10;
  if (!tmp8) {
    tmp10 = channelId;
  }
  obj.current_channel_id = tmp10;
  let tmp11;
  if (tmp8) {
    tmp11 = channelId;
  }
  obj.current_channel_static_route = tmp11;
  obj.current_guild_id = guildId;
  let str = "GENERAL";
  if (null != queryMode) {
    str = queryMode;
  }
  obj.query_mode = str;
  obj.query_length = query.length;
  obj.max_query_length = props.maxQueryLength;
  obj.is_email_like = isEmailResult;
  obj.is_phone_like = isPhoneNumberResult;
  obj.is_username_like = isUserTagLikeResult;
  let tmp12 = null;
  if (!isEmailResult) {
    tmp12 = null;
    if (!isPhoneNumberResult) {
      tmp12 = null;
      if (!isUserTagLikeResult) {
        tmp12 = query;
      }
    }
  }
  obj.query = tmp12;
  obj.top_result_type = getResultType(results[obj.findNextSelectedResult(obj, closure_0(undefined, closure_2[12]).FindResultDirections.DOWN, -1, results)]);
  score = null;
  if (null != results[obj.findNextSelectedResult(obj, closure_0(undefined, closure_2[12]).FindResultDirections.DOWN, -1, results)]) {
    score = tmp4.score;
  }
  obj.top_result_score = score;
  obj.num_results_total = uiStore.getResultTotals();
  obj.num_results_users = uiStore.getResultTotals(record(dependencyMap[12]).AutocompleterResultTypes.USER);
  obj.num_results_text_channels = uiStore.getResultTotals(record(dependencyMap[12]).AutocompleterResultTypes.TEXT_CHANNEL);
  obj.num_results_voice_channels = uiStore.getResultTotals(record(dependencyMap[12]).AutocompleterResultTypes.VOICE_CHANNEL);
  obj.num_results_guilds = uiStore.getResultTotals(record(dependencyMap[12]).AutocompleterResultTypes.GUILD);
  obj.num_results_group_dms = uiStore.getResultTotals(record(dependencyMap[12]).AutocompleterResultTypes.GROUP_DM);
  if (null != channelId) {
    const channel = authStore.getChannel(channelId);
    type = null;
    if (null != channel) {
      type = channel.type;
    }
    obj.current_channel_type = type;
  }
  if (null != record) {
    ({ type, record, score } = record);
    obj.selected_type = getResultType(record);
    obj.selected_score = score;
    obj.selected_index = results.indexOf(record);
    if (record(dependencyMap[12]).AutocompleterResultTypes.GUILD === type) {
      obj.selected_guild_id = record.id;
    } else {
      if (record(dependencyMap[12]).AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (record(dependencyMap[12]).AutocompleterResultTypes.VOICE_CHANNEL !== type) {
          if (record(dependencyMap[12]).AutocompleterResultTypes.GROUP_DM === type) {
            obj.selected_channel_id = record.id;
          } else if (record(dependencyMap[12]).AutocompleterResultTypes.USER === type) {
            obj.selected_user_id = record.id;
          }
        }
      }
      if (record instanceof ChannelRecordBase) {
        let guild_id = null;
        if (null != record.guild_id) {
          guild_id = record.guild_id;
        }
        obj.selected_guild_id = guild_id;
      }
      obj.selected_channel_id = record.id;
    }
  }
  const obj4 = importDefault(dependencyMap[15]);
  importDefault(dependencyMap[14]).track(QUICKSWITCHER_CLOSED, obj);
}
function hideQuickSwitcher() {
  importDefault(dependencyMap[16]).dispatch({ type: "QUICKSWITCHER_HIDE" });
}
function show() {
  let str = arg0;
  let str2 = arg1;
  if (arg0 === undefined) {
    str = "KEYBIND";
  }
  if (str2 === undefined) {
    str2 = "";
  }
  trackOpen(str);
  let obj = importDefault(dependencyMap[16]);
  obj = { type: "QUICKSWITCHER_SHOW" };
  const merged = Object.assign(getQuickSwitcherOptions(str2));
  obj.dispatch(obj);
}
function hide() {
  trackClose(constants.QUICKSWITCHER_CLOSED);
  hideQuickSwitcher();
}
function _openInviteFromQuickSwitcher() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _openInviteFromQuickSwitcher = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const InAppNavigationType = arg1(dependencyMap[2]).InAppNavigationType;
const ChannelRecordBase = arg1(dependencyMap[3]).ChannelRecordBase;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
({ Layers, ME: closure_12, AppContext: closure_13, AnalyticEvents: closure_14, AnalyticsLocations: closure_15, AnalyticsPages: closure_16 } = arg1(dependencyMap[9]));
const isStaticChannelRoute = arg1(dependencyMap[10]).isStaticChannelRoute;
const CollectibleShopTab = arg1(dependencyMap[11]).CollectibleShopTab;
let obj = {};
obj[arg1(dependencyMap[12]).AutocompleterQuerySymbols.USER] = arg1(dependencyMap[12]).AutocompleterResultTypes.USER;
obj[arg1(dependencyMap[12]).AutocompleterQuerySymbols.TEXT_CHANNEL] = arg1(dependencyMap[12]).AutocompleterResultTypes.TEXT_CHANNEL;
obj[arg1(dependencyMap[12]).AutocompleterQuerySymbols.VOICE_CHANNEL] = arg1(dependencyMap[12]).AutocompleterResultTypes.VOICE_CHANNEL;
obj[arg1(dependencyMap[12]).AutocompleterQuerySymbols.GUILD] = arg1(dependencyMap[12]).AutocompleterResultTypes.GUILD;
const frozen = Object.freeze(obj);
obj = {};
const merged = Object.assign(frozen);
obj[arg1(dependencyMap[12]).AutocompleterQuerySymbols.GAME_PROFILE] = arg1(dependencyMap[12]).AutocompleterResultTypes.GAME_PROFILE;
let closure_20 = Object.freeze(obj);
const regExp = new RegExp("^" + arg1(dependencyMap[12]).AutocompleterQuerySymbols.USER + "|" + arg1(dependencyMap[12]).AutocompleterQuerySymbols.TEXT_CHANNEL + "|" + arg1(dependencyMap[12]).AutocompleterQuerySymbols.VOICE_CHANNEL + "|\\" + arg1(dependencyMap[12]).AutocompleterQuerySymbols.GUILD);
const regExp1 = new RegExp("^" + arg1(dependencyMap[12]).AutocompleterQuerySymbols.USER + "|" + arg1(dependencyMap[12]).AutocompleterQuerySymbols.TEXT_CHANNEL + "|" + arg1(dependencyMap[12]).AutocompleterQuerySymbols.VOICE_CHANNEL + "|\\" + arg1(dependencyMap[12]).AutocompleterQuerySymbols.GUILD + "|\\" + arg1(dependencyMap[12]).AutocompleterQuerySymbols.GAME_PROFILE);
const tmp2 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/quickswitcher/QuickSwitcherActionCreators.tsx");

export { getQuickSwitcherOptions };
export { trackOpen };
export { trackClose };
export { show };
export { hide };
export const toggle = function toggle() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "KEYBIND";
  }
  if (uiStore.isOpen()) {
    hide();
  } else {
    show(str);
  }
};
export const search = function search(arg0) {
  let obj = importDefault(dependencyMap[16]);
  obj = { type: "QUICKSWITCHER_SEARCH" };
  const merged = Object.assign(getQuickSwitcherOptions(arg0));
  obj.dispatch(obj);
};
export const selectResult = function selectResult(selectedIndex) {
  let obj = importDefault(dependencyMap[16]);
  obj = { type: "QUICKSWITCHER_SELECT", selectedIndex };
  obj.dispatch(obj);
};
export const switchToResult = function switchToResult(record) {
  let QUICK_SWITCHER;
  let QUICK_SWITCHER2;
  let type;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  hideQuickSwitcher();
  trackClose(constants.QUICKSWITCHER_RESULT_SELECTED, record);
  ({ type, record } = record);
  let obj = { page: constants2.QUICK_SWITCHER };
  if (arg1(dependencyMap[12]).AutocompleterResultTypes.GUILD === type) {
    obj = { navigationReplace: true };
    arg1(dependencyMap[17]).transitionToGuild(record.id, obj);
    const obj24 = arg1(dependencyMap[17]);
  } else if (arg1(dependencyMap[12]).AutocompleterResultTypes.TEXT_CHANNEL === type) {
    const channel = authStore.getChannel(record.id);
    if (null != channel) {
      obj = {};
      const obj1 = { analyticsSource: obj };
      obj.state = obj1;
      obj.navigationReplace = true;
      arg1(dependencyMap[18]).transitionToChannel(channel.id, obj);
      const obj21 = arg1(dependencyMap[18]);
    }
  } else if (arg1(dependencyMap[12]).AutocompleterResultTypes.VOICE_CHANNEL === type) {
    const channel1 = authStore.getChannel(record.id);
    if (null != channel1) {
      if (flag) {
        let tmp76Result = tmp76(tmp77[19]);
        tmp76Result.updateChatOpen(record.id, true);
      } else {
        tmp76Result = tmp76(tmp77[20]);
        const voiceChannel = tmp76Result.selectVoiceChannel(record.id);
      }
      let obj2 = {};
      const obj3 = { analyticsSource: obj };
      obj2.state = obj3;
      obj2.navigationReplace = true;
      arg1(dependencyMap[18]).transitionToChannel(channel1.id, obj2);
      const obj18 = arg1(dependencyMap[18]);
    }
  } else if (arg1(dependencyMap[12]).AutocompleterResultTypes.USER === type) {
    let obj4 = {};
    const items = [record.id];
    obj4.recipientIds = items;
    obj4.location = "Quickswitcher";
    importDefault(dependencyMap[21]).openPrivateChannel(obj4);
    const obj13 = importDefault(dependencyMap[21]);
    importDefault(dependencyMap[22]).channelListScrollTo(closure_12, authStore.getDMFromUserId(record.id));
    const obj15 = importDefault(dependencyMap[22]);
  } else if (arg1(dependencyMap[12]).AutocompleterResultTypes.GROUP_DM === type) {
    let obj9 = arg1(dependencyMap[18]);
    const obj5 = { navigationReplace: true };
    obj9.transitionToChannel(record.id, obj5);
    let obj11 = importDefault(dependencyMap[22]);
    obj11.channelListScrollTo(closure_12, record.id);
  } else if (arg1(dependencyMap[12]).AutocompleterResultTypes.APPLICATION === type) {
    const activeLibraryApplication = activeLibraryApplication.getActiveLibraryApplication(record.id);
    const id = record.id;
    ({ QUICK_SWITCHER, QUICK_SWITCHER: QUICK_SWITCHER2 } = closure_15);
    const resolved = Promise.resolve();
  } else if (arg1(dependencyMap[12]).AutocompleterResultTypes.GAME_PROFILE === type) {
    let obj6 = importDefault(dependencyMap[23]);
    obj6 = { gameId: record.id };
    const obj7 = { shouldOpenGameProfile: true, gameId: record.id };
    obj6.gameProfileModalChecks = obj7;
    obj6.source = arg1(dependencyMap[24]).GameProfileSources.QuickSwitcher;
    obj6.openGameProfileModal(obj6);
  } else if (arg1(dependencyMap[12]).AutocompleterResultTypes.LINK === type) {
    if (null != record.inviteCode) {
      function openInviteFromQuickSwitcher(inviteCode) {
        return callback(...arguments);
      }(record.inviteCode);
    } else {
      const obj8 = { navigationReplace: true };
      importDefault(dependencyMap[25])(record.path, obj8);
    }
  } else if (arg1(dependencyMap[12]).AutocompleterResultTypes.IN_APP_NAVIGATION === type) {
    if (record.record.type !== InAppNavigationType.SETTINGS) {
      if (record.record.type === InAppNavigationType.PLAYGROUND) {
        obj4 = arg1(dependencyMap[26]);
      } else if (record.record.type === InAppNavigationType.SHOP_ORBS_TAB) {
        obj2 = arg1(dependencyMap[27]);
        obj9 = { tab: CollectibleShopTab.ORBS };
        const items1 = [importDefault(dependencyMap[28]).QUICK_SWITCHER];
        obj9.analyticsLocations = items1;
        obj9.analyticsSource = importDefault(dependencyMap[28]).QUICK_SWITCHER;
        obj2.openCollectiblesShop(obj9);
      } else {
        const obj10 = { navigationReplace: true };
        importDefault(dependencyMap[25])(record.path, obj10);
      }
    }
  }
  obj11 = { type: "QUICKSWITCHER_SWITCH_TO", result: record };
  importDefault(dependencyMap[16]).dispatch(obj11);
};
