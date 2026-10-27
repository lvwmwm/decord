// Module ID: 13379
// Function ID: 13380
// Name: ChatInputGuardLurking
// Dependencies: [19, 4905, 4824, 12520, 1084, 21, 558, 576, 504, 1111, 5712, 13380, 9062, 1208, 7449, 6832, 7321, 1125, 13372, 2]

// Module 13379 (ChatInputGuardLurking)
import Fragment from "Fragment" /* 21 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1208 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5712 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6832 */;
import JoinGuildRefusedError from "JoinGuildRefusedError" /* 7321 */;
import GuildDiscoveryUtilsAll from "GuildDiscoveryUtils" /* 7449 */;
import HubProgressActionCreators from "HubProgressActionCreators" /* 9062 */;
import ChatInputConstants from "ChatInputConstants" /* 12520 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 13372 */;
import showChannelFollowingActionSheet from "showChannelFollowingActionSheet" /* 13380 */;
import react from "react" /* 19 */;
import LurkingStore from "LurkingStore" /* 4905 */;
import ChannelStore from "ChannelStore" /* 4824 */;
import Constants from "Constants" /* 1084 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let c9;
let metroImportAll;
const TextAreaCta = ChatInputConstants.TextAreaCta;
({ AnalyticEvents: metroImportAll, JoinGuildSources: c9 } = Constants);
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChatInputGuardLurking(channel) {
  let closure_1;
  let isLurking;
  let isReadonlyAnnouncementsChannel;
  let lurkingSource;
  let obj3;
  let obj4;
  let pendingGameProfileReturn;
  let tmp11;
  let tmp4;
  let tmp6;
  let tmp8;
  let tmp9;
  const tmp = channel;
  let obj = channel(576);
  const cResult = obj.c(36);
  channel = channel.channel;
  ({ pendingGameProfileReturn, isReadonlyAnnouncementsChannel } = channel);
  if (cResult[0] !== channel) {
    let guildId = channel.getGuildId();
    cResult[0] = channel;
    cResult[1] = guildId;
    tmp4 = guildId;
  } else {
    tmp4 = cResult[1];
  }
  importDefault = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LurkingStore];
    cResult[2] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    class C {
      constructor() {
        const isLurkingResult = null != closure_1 && LurkingStore.isLurking(tmp);
        const obj = { isLurking: isLurkingResult, lurkingSource: LurkingStore.getLurkingSourceForGuild(closure_1) };
        return obj;
      }
    }
    const items1 = [tmp4];
    cResult[3] = tmp4;
    cResult[4] = C;
    cResult[5] = items1;
    tmp9 = items1;
    tmp8 = C;
  } else {
    class C {
      constructor() {
        const isLurkingResult = null != closure_1 && LurkingStore.isLurking(tmp);
        const obj = { isLurking: isLurkingResult, lurkingSource: LurkingStore.getLurkingSourceForGuild(closure_1) };
        return obj;
      }
    }
    tmp9 = cResult[5];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp6, tmp8, tmp9);
  ({ isLurking, lurkingSource } = stateFromStoresObject);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        const obj = channel(dependencyMap[9]);
        const history = obj.getHistory();
        history.goBack();
      }
    }
    cResult[6] = R;
    tmp11 = R;
  } else {
    class R {
      constructor() {
        const obj = channel(dependencyMap[9]);
        const history = obj.getHistory();
        history.goBack();
      }
    }
  }
  if (cResult[7] === channel.id) {
    class R {
      constructor() {
        const obj = channel(dependencyMap[9]);
        const history = obj.getHistory();
        history.goBack();
      }
    }
    if (cResult[10] !== tmp4) {
      class E {
        constructor() {
          if (null != closure_1) {
            const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(tmp);
            let type;
            if (lurkingSourceForGuild != null) {
              type = lurkingSourceForGuild.type;
            }
            const tmp3 = constants;
            if (type === constants.DIRECTORY_ENTRY) {
              channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
              if (null != channel) {
                const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                HubProgressActionCreators;
                const guildId = channel.getGuildId();
                const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
              }
            }
            const obj2 = GuildDiscoveryUtilsAll;
            const result1 = obj2.trackGuildJoinClicked(tmp);
            const obj = { cta_type: TextAreaCta.JOIN_GUILD };
            const obj3 = AppAnalyticsUtilsDefault;
            obj3.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj);
            const obj4 = { source: tmp3.CHAT_INPUT_BLOCKER };
            const obj5 = GuildActionCreatorsDefault;
            const joinGuildResult = obj5.joinGuild(closure_1, obj4);
            joinGuildResult.catch(JoinGuildRefusedError.ignoreJoinGuildRefused);
          }
        }
      }
      cResult[10] = tmp4;
      cResult[11] = E;
    } else {
      class E {
        constructor() {
          if (null != closure_1) {
            const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(tmp);
            let type;
            if (lurkingSourceForGuild != null) {
              type = lurkingSourceForGuild.type;
            }
            const tmp3 = constants;
            if (type === constants.DIRECTORY_ENTRY) {
              channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
              if (null != channel) {
                const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                HubProgressActionCreators;
                const guildId = channel.getGuildId();
                const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
              }
            }
            const obj2 = GuildDiscoveryUtilsAll;
            const result1 = obj2.trackGuildJoinClicked(tmp);
            const obj = { cta_type: TextAreaCta.JOIN_GUILD };
            const obj3 = AppAnalyticsUtilsDefault;
            obj3.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj);
            const obj4 = { source: tmp3.CHAT_INPUT_BLOCKER };
            const obj5 = GuildActionCreatorsDefault;
            const joinGuildResult = obj5.joinGuild(closure_1, obj4);
            joinGuildResult.catch(JoinGuildRefusedError.ignoreJoinGuildRefused);
          }
        }
      }
    }
    if (lurkingSource != null) {
      class E {
        constructor() {
          if (null != closure_1) {
            const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(tmp);
            let type;
            if (lurkingSourceForGuild != null) {
              type = lurkingSourceForGuild.type;
            }
            const tmp3 = constants;
            if (type === constants.DIRECTORY_ENTRY) {
              channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
              if (null != channel) {
                const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                HubProgressActionCreators;
                const guildId = channel.getGuildId();
                const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
              }
            }
            const obj2 = GuildDiscoveryUtilsAll;
            const result1 = obj2.trackGuildJoinClicked(tmp);
            const obj = { cta_type: TextAreaCta.JOIN_GUILD };
            const obj3 = AppAnalyticsUtilsDefault;
            obj3.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj);
            const obj4 = { source: tmp3.CHAT_INPUT_BLOCKER };
            const obj5 = GuildActionCreatorsDefault;
            const joinGuildResult = obj5.joinGuild(closure_1, obj4);
            joinGuildResult.catch(JoinGuildRefusedError.ignoreJoinGuildRefused);
          }
        }
      }
    }
    if (undefined === constants2.DIRECTORY_ENTRY) {
      let tmp17;
      let tmp16;
      let tmp20;
      let tmp22;
      class E {
        constructor() {
          if (null != closure_1) {
            const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(tmp);
            let type;
            if (lurkingSourceForGuild != null) {
              type = lurkingSourceForGuild.type;
            }
            const tmp3 = constants;
            if (type === constants.DIRECTORY_ENTRY) {
              channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
              if (null != channel) {
                const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                HubProgressActionCreators;
                const guildId = channel.getGuildId();
                const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
              }
            }
            const obj2 = GuildDiscoveryUtilsAll;
            const result1 = obj2.trackGuildJoinClicked(tmp);
            const obj = { cta_type: TextAreaCta.JOIN_GUILD };
            const obj3 = AppAnalyticsUtilsDefault;
            obj3.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj);
            const obj4 = { source: tmp3.CHAT_INPUT_BLOCKER };
            const obj5 = GuildActionCreatorsDefault;
            const joinGuildResult = obj5.joinGuild(closure_1, obj4);
            joinGuildResult.catch(JoinGuildRefusedError.ignoreJoinGuildRefused);
          }
        }
      }
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            if (null != closure_1) {
              const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(tmp);
              let type;
              if (lurkingSourceForGuild != null) {
                type = lurkingSourceForGuild.type;
              }
              const tmp3 = constants;
              if (type === constants.DIRECTORY_ENTRY) {
                channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
                if (null != channel) {
                  const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                  HubProgressActionCreators;
                  const guildId = channel.getGuildId();
                  const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
                }
              }
              const obj2 = GuildDiscoveryUtilsAll;
              const result1 = obj2.trackGuildJoinClicked(tmp);
              const obj = { cta_type: TextAreaCta.JOIN_GUILD };
              const obj3 = AppAnalyticsUtilsDefault;
              obj3.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj);
              const obj4 = { source: tmp3.CHAT_INPUT_BLOCKER };
              const obj5 = GuildActionCreatorsDefault;
              const joinGuildResult = obj5.joinGuild(closure_1, obj4);
              joinGuildResult.catch(JoinGuildRefusedError.ignoreJoinGuildRefused);
            }
          }
        }
        const stringResult = obj3.string(tmp(1125).t.G42YmG);
        const intl = tmp(1125).intl;
        const stringResult1 = intl.string(tmp(1125).t.GlKb5i);
        cResult[12] = stringResult;
        cResult[13] = stringResult1;
        tmp17 = stringResult1;
        tmp16 = stringResult;
      } else {
        class E {
          constructor() {
            if (null != closure_1) {
              const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(tmp);
              let type;
              if (lurkingSourceForGuild != null) {
                type = lurkingSourceForGuild.type;
              }
              const tmp3 = constants;
              if (type === constants.DIRECTORY_ENTRY) {
                channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
                if (null != channel) {
                  const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                  HubProgressActionCreators;
                  const guildId = channel.getGuildId();
                  const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
                }
              }
              const obj2 = GuildDiscoveryUtilsAll;
              const result1 = obj2.trackGuildJoinClicked(tmp);
              const obj = { cta_type: TextAreaCta.JOIN_GUILD };
              const obj3 = AppAnalyticsUtilsDefault;
              obj3.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj);
              const obj4 = { source: tmp3.CHAT_INPUT_BLOCKER };
              const obj5 = GuildActionCreatorsDefault;
              const joinGuildResult = obj5.joinGuild(closure_1, obj4);
              joinGuildResult.catch(JoinGuildRefusedError.ignoreJoinGuildRefused);
            }
          }
        }
        tmp17 = cResult[13];
      }
      const _Symbol = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            if (null != closure_1) {
              const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(tmp);
              let type;
              if (lurkingSourceForGuild != null) {
                type = lurkingSourceForGuild.type;
              }
              const tmp3 = constants;
              if (type === constants.DIRECTORY_ENTRY) {
                channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
                if (null != channel) {
                  const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                  HubProgressActionCreators;
                  const guildId = channel.getGuildId();
                  const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
                }
              }
              const obj2 = GuildDiscoveryUtilsAll;
              const result1 = obj2.trackGuildJoinClicked(tmp);
              const obj = { cta_type: TextAreaCta.JOIN_GUILD };
              const obj3 = AppAnalyticsUtilsDefault;
              obj3.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj);
              const obj4 = { source: tmp3.CHAT_INPUT_BLOCKER };
              const obj5 = GuildActionCreatorsDefault;
              const joinGuildResult = obj5.joinGuild(closure_1, obj4);
              joinGuildResult.catch(JoinGuildRefusedError.ignoreJoinGuildRefused);
            }
          }
        }
        const stringResult2 = obj4.string(tmp(1125).t.RLch70);
        cResult[14] = stringResult2;
        tmp20 = stringResult2;
      } else {
        class E {
          constructor() {
            if (null != closure_1) {
              const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(tmp);
              let type;
              if (lurkingSourceForGuild != null) {
                type = lurkingSourceForGuild.type;
              }
              const tmp3 = constants;
              if (type === constants.DIRECTORY_ENTRY) {
                channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
                if (null != channel) {
                  const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                  HubProgressActionCreators;
                  const guildId = channel.getGuildId();
                  const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
                }
              }
              const obj2 = GuildDiscoveryUtilsAll;
              const result1 = obj2.trackGuildJoinClicked(tmp);
              const obj = { cta_type: TextAreaCta.JOIN_GUILD };
              const obj3 = AppAnalyticsUtilsDefault;
              obj3.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj);
              const obj4 = { source: tmp3.CHAT_INPUT_BLOCKER };
              const obj5 = GuildActionCreatorsDefault;
              const joinGuildResult = obj5.joinGuild(closure_1, obj4);
              joinGuildResult.catch(JoinGuildRefusedError.ignoreJoinGuildRefused);
            }
          }
        }
      }
      if (cResult[15] !== tmp12) {
        class E {
          constructor() {
            if (null != closure_1) {
              const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(tmp);
              let type;
              if (lurkingSourceForGuild != null) {
                type = lurkingSourceForGuild.type;
              }
              const tmp3 = constants;
              if (type === constants.DIRECTORY_ENTRY) {
                channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
                if (null != channel) {
                  const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                  HubProgressActionCreators;
                  const guildId = channel.getGuildId();
                  const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
                }
              }
              const obj2 = GuildDiscoveryUtilsAll;
              const result1 = obj2.trackGuildJoinClicked(tmp);
              const obj = { cta_type: TextAreaCta.JOIN_GUILD };
              const obj3 = AppAnalyticsUtilsDefault;
              obj3.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj);
              const obj4 = { source: tmp3.CHAT_INPUT_BLOCKER };
              const obj5 = GuildActionCreatorsDefault;
              const joinGuildResult = obj5.joinGuild(closure_1, obj4);
              joinGuildResult.catch(JoinGuildRefusedError.ignoreJoinGuildRefused);
            }
          }
        }
        const tmp24 = jsx(ChatInputGuardDefault, { type: "button-action", message: tmp16, buttonSecondaryText: tmp17, buttonSecondaryOnPress: tmp11, buttonPrimaryText: tmp20, buttonPrimaryOnPress: tmp12 });
        cResult[15] = tmp12;
        cResult[16] = tmp24;
        tmp22 = tmp24;
      } else {
        class E {
          constructor() {
            if (null != closure_1) {
              const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(tmp);
              let type;
              if (lurkingSourceForGuild != null) {
                type = lurkingSourceForGuild.type;
              }
              const tmp3 = constants;
              if (type === constants.DIRECTORY_ENTRY) {
                channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
                if (null != channel) {
                  const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                  HubProgressActionCreators;
                  const guildId = channel.getGuildId();
                  const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
                }
              }
              const obj2 = GuildDiscoveryUtilsAll;
              const result1 = obj2.trackGuildJoinClicked(tmp);
              const obj = { cta_type: TextAreaCta.JOIN_GUILD };
              const obj3 = AppAnalyticsUtilsDefault;
              obj3.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj);
              const obj4 = { source: tmp3.CHAT_INPUT_BLOCKER };
              const obj5 = GuildActionCreatorsDefault;
              const joinGuildResult = obj5.joinGuild(closure_1, obj4);
              joinGuildResult.catch(JoinGuildRefusedError.ignoreJoinGuildRefused);
            }
          }
        }
      }
      return tmp22;
    } else {
      class E {
        constructor() {
          if (null != closure_1) {
            const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(tmp);
            let type;
            if (lurkingSourceForGuild != null) {
              type = lurkingSourceForGuild.type;
            }
            const tmp3 = constants;
            if (type === constants.DIRECTORY_ENTRY) {
              channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
              if (null != channel) {
                const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                HubProgressActionCreators;
                const guildId = channel.getGuildId();
                const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
              }
            }
            const obj2 = GuildDiscoveryUtilsAll;
            const result1 = obj2.trackGuildJoinClicked(tmp);
            const obj = { cta_type: TextAreaCta.JOIN_GUILD };
            const obj3 = AppAnalyticsUtilsDefault;
            obj3.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj);
            const obj4 = { source: tmp3.CHAT_INPUT_BLOCKER };
            const obj5 = GuildActionCreatorsDefault;
            const joinGuildResult = obj5.joinGuild(closure_1, obj4);
            joinGuildResult.catch(JoinGuildRefusedError.ignoreJoinGuildRefused);
          }
        }
      }
    }
  }
  const fn = function k() {
    if (null != closure_1) {
      const obj2 = { cta_type: TextAreaCta.FOLLOW_ANNOUNCEMENT };
      const obj = AppAnalyticsUtilsDefault;
      obj.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj2);
      const obj3 = showChannelFollowingActionSheet;
      const result = obj3.showChannelFollowingActionSheet(channel.id, tmp);
    }
  };
  cResult[7] = channel.id;
  cResult[8] = tmp4;
  cResult[9] = fn;
}) : (function ChatInputGuardLurking(channel) {
  let intl;
  let intl2;
  let intl3;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let isLurking;
  let lurkingSource;
  let stringResult;
  let tmp10;
  let tmp15Result;
  channel = channel.channel;
  const isReadonlyAnnouncementsChannel = channel.isReadonlyAnnouncementsChannel;
  let guildId = channel.getGuildId();
  let tmp3 = dependencyMap;
  let obj = channel(504);
  const items = [LurkingStore];
  const items1 = [guildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const isLurkingResult = null != guildId && LurkingStore.isLurking(tmp);
    const obj = { isLurking: isLurkingResult, lurkingSource: LurkingStore.getLurkingSourceForGuild(guildId) };
    return obj;
  }, items1);
  ({ isLurking, lurkingSource } = stateFromStoresObject);
  const items2 = [guildId, channel.id];
  const callback = react.useCallback(() => {
    const obj = channel(dependencyMap[9]);
    const history = obj.getHistory();
    history.goBack();
  }, []);
  const items3 = [guildId];
  const callback1 = react.useCallback(() => {
    if (null != guildId) {
      const obj2 = { cta_type: TextAreaCta.FOLLOW_ANNOUNCEMENT };
      const obj = AppAnalyticsUtilsDefault;
      obj.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj2);
      const obj3 = showChannelFollowingActionSheet;
      const result = obj3.showChannelFollowingActionSheet(channel.id, tmp);
    }
  }, items2);
  const callback2 = react.useCallback(() => {
    if (null != guildId) {
      const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(tmp);
      let type;
      if (lurkingSourceForGuild != null) {
        type = lurkingSourceForGuild.type;
      }
      const tmp3 = constants;
      if (type === constants.DIRECTORY_ENTRY) {
        channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
        if (null != channel) {
          const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
          HubProgressActionCreators;
          guildId = channel.getGuildId();
          const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
        }
      }
      const obj2 = GuildDiscoveryUtilsAll;
      const result1 = obj2.trackGuildJoinClicked(tmp);
      const obj = { cta_type: TextAreaCta.JOIN_GUILD };
      const obj3 = AppAnalyticsUtilsDefault;
      obj3.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj);
      const obj4 = { source: tmp3.CHAT_INPUT_BLOCKER };
      const obj5 = GuildActionCreatorsDefault;
      const joinGuildResult = obj5.joinGuild(guildId, obj4);
      joinGuildResult.catch(JoinGuildRefusedError.ignoreJoinGuildRefused);
    }
  }, items3);
  let type;
  if (lurkingSource != null) {
    type = lurkingSource.type;
  }
  if (type === constants2.DIRECTORY_ENTRY) {
    guildId(13372);
    const intl9 = tmp2(1125).intl;
    const intl10 = tmp2(1125).intl;
    const intl11 = tmp2(1125).intl;
    tmp15Result = <tmp14 type="button-action" message={intl9.string(tmp2(1125).t.G42YmG)} buttonSecondaryText={intl10.string(tmp2(1125).t.GlKb5i)} buttonSecondaryOnPress={callback} buttonPrimaryText={intl11.string(tmp2(1125).t.RLch70)} buttonPrimaryOnPress={callback2} />;
  } else {
    let obj9;
    const tmp15 = jsx;
    const tmp17 = guildId(13372);
    if (null != channel.pendingGameProfileReturn) {
      let obj3 = { type: "button-action", message: intl6.string(tmp2(1125).t.G42YmG), buttonSecondaryText: intl7.string(tmp2(1125).t.DjifDP), buttonSecondaryOnPress: null, buttonSecondaryLoading: null, buttonPrimaryText: intl8.string(tmp2(1125).t.RLch70), buttonPrimaryOnPress: callback2 };
      intl6 = tmp2(1125).intl;
      intl7 = tmp2(1125).intl;
      ({ onReturnToGameProfile: obj4.buttonSecondaryOnPress, isReturning: obj4.buttonSecondaryLoading } = channel.pendingGameProfileReturn);
      intl8 = tmp2(1125).intl;
      obj9 = obj3;
    } else if (isReadonlyAnnouncementsChannel) {
      let obj5 = { type: "button-action", message: intl3.string(tmp2(1125).t.Hl0Mqh), buttonSecondaryText: stringResult, buttonSecondaryOnPress: tmp10, buttonPrimaryText: intl5.string(tmp2(1125).t["3aOv+h"]), buttonPrimaryOnPress: callback1 };
      intl3 = tmp2(1125).intl;
      stringResult = undefined;
      if (isLurking) {
        const intl4 = tmp2(1125).intl;
        stringResult = intl4.string(tmp2(1125).t.VJlc0S);
      }
      tmp10 = undefined;
      if (isLurking) {
        tmp10 = callback2;
      }
      intl5 = tmp2(1125).intl;
      obj9 = obj5;
    } else {
      obj9 = { type: "button-action", message: intl.string(tmp2(1125).t.G42YmG), buttonPrimaryText: intl2.string(tmp2(1125).t.RLch70), buttonPrimaryOnPress: callback2 };
      intl = tmp2(1125).intl;
      intl2 = tmp2(1125).intl;
    }
    tmp15Result = tmp15(tmp17, obj9);
  }
  return tmp15Result;
}));
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardLurking.tsx");

export default memoResult;
