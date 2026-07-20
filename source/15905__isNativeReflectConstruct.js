// Module ID: 15905
// Function ID: 121870
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15905 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleConnectionOpen() {
  let closure_22 = true;
  resetTimer(closure_19, true);
}
function handleAppStateUpdate(state) {
  let tmp = closure_22;
  if (closure_22) {
    tmp = "active" !== state.state;
  }
  if (tmp) {
    const _clearTimeout = clearTimeout;
    clearTimeout(closure_21);
    closure_21 = null;
    saveProtos(false);
  }
}
function handleConnectionClosed() {
  if (closure_22) {
    const _clearTimeout = clearTimeout;
    clearTimeout(closure_21);
    closure_21 = null;
    saveProtos(false);
  }
}
function saveProtos(arg0) {
  return _saveProtos(...arguments);
}
function _saveProtos() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _saveProtos = obj;
  return obj(...arguments);
}
function resetTimer(closure_19, arg1) {
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
  }
  const timeout = setTimeout(() => callback(arg1), closure_19);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
const MAX_NUM_SELECTED_ITEMS = arg1(dependencyMap[11]).MAX_NUM_SELECTED_ITEMS;
let closure_16 = importDefault(dependencyMap[12]);
const UserSettingsTypes = arg1(dependencyMap[13]).UserSettingsTypes;
const FREQUENCY_ITEM_LIMIT = arg1(dependencyMap[14]).FREQUENCY_ITEM_LIMIT;
const random = Math.random();
let closure_19 = 10 + random * (10 * importDefault(dependencyMap[15]).Millis.SECOND);
const result = 2 * importDefault(dependencyMap[15]).Millis.HOUR;
const random1 = Math.random();
let closure_20 = result + Math.floor(random1 * (10 * importDefault(dependencyMap[15]).Millis.MINUTE));
let closure_21 = null;
let closure_22 = false;
let tmp5 = (arg0) => {
  class FrecencyUserSettingsManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, FrecencyUserSettingsManager);
      items1 = [...items];
      obj = closure_7(FrecencyUserSettingsManager);
      tmp2 = closure_6;
      if (closure_23()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = { POST_CONNECTION_OPEN: closure_24, CONNECTION_RESUMED: closure_24, CONNECTION_CLOSED: closure_26, APP_STATE_UPDATE: closure_25 };
      tmp2Result.actions = obj;
      return tmp2Result;
    }
  }
  const arg1 = FrecencyUserSettingsManager;
  callback3(FrecencyUserSettingsManager, arg0);
  const items = [
    {
      key: "_initialize",
      value() {
        let obj = {
          hasChanges() {
            return false;
          },
          processProto() {
            callback2(closure_20, false);
          }
        };
        FrecencyUserSettingsManager(closure_2[16]).FrecencyUserSettingsActionCreators.beforeSendCallbacks.push(obj);
        const beforeSendCallbacks = FrecencyUserSettingsManager(closure_2[16]).FrecencyUserSettingsActionCreators.beforeSendCallbacks;
        obj = {
          hasChanges() {
            let hasPendingUsageResult = closure_13.hasPendingUsage();
            if (hasPendingUsageResult) {
              hasPendingUsageResult = closure_16.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
            }
            return hasPendingUsageResult;
          },
          processProto(stickerFrecency) {
            let hasPendingUsageResult = closure_13.hasPendingUsage();
            if (hasPendingUsageResult) {
              hasPendingUsageResult = closure_16.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
            }
            if (hasPendingUsageResult) {
              const StickerFrecency = callback(closure_2[17]).StickerFrecency;
              stickerFrecency.stickerFrecency = StickerFrecency.create();
              stickerFrecency.stickerFrecency.stickers = callback(closure_2[18]).serializeUsageHistory(closure_13.stickerFrecencyWithoutFetchingLatest.usageHistory, 100);
              const obj = callback(closure_2[18]);
            }
          }
        };
        FrecencyUserSettingsManager(closure_2[16]).FrecencyUserSettingsActionCreators.beforeSendCallbacks.push(obj);
        const beforeSendCallbacks1 = FrecencyUserSettingsManager(closure_2[16]).FrecencyUserSettingsActionCreators.beforeSendCallbacks;
        obj = {
          hasChanges() {
            let hasPendingUsageResult = closure_11.hasPendingUsage();
            if (hasPendingUsageResult) {
              hasPendingUsageResult = closure_16.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
            }
            return hasPendingUsageResult;
          },
          processProto(emojiFrecency) {
            let hasPendingUsageResult = closure_11.hasPendingUsage();
            if (hasPendingUsageResult) {
              hasPendingUsageResult = closure_16.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
            }
            if (hasPendingUsageResult) {
              const EmojiFrecency = callback(closure_2[17]).EmojiFrecency;
              emojiFrecency.emojiFrecency = EmojiFrecency.create();
              const EmojiFrecency2 = callback(closure_2[17]).EmojiFrecency;
              emojiFrecency.emojiReactionFrecency = EmojiFrecency2.create();
              emojiFrecency.emojiFrecency.emojis = callback(closure_2[18]).serializeUsageHistory(closure_11.emojiFrecencyWithoutFetchingLatest.usageHistory, 100);
              const obj = callback(closure_2[18]);
              emojiFrecency.emojiReactionFrecency.emojis = callback(closure_2[18]).serializeUsageHistory(closure_11.emojiReactionFrecencyWithoutFetchingLatest.usageHistory, 100);
              const obj2 = callback(closure_2[18]);
            }
          }
        };
        FrecencyUserSettingsManager(closure_2[16]).FrecencyUserSettingsActionCreators.beforeSendCallbacks.push(obj);
        const beforeSendCallbacks2 = FrecencyUserSettingsManager(closure_2[16]).FrecencyUserSettingsActionCreators.beforeSendCallbacks;
        FrecencyUserSettingsManager(closure_2[16]).FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
          hasChanges() {
            let hasPendingUsageResult = closure_12.hasPendingUsage();
            if (hasPendingUsageResult) {
              hasPendingUsageResult = closure_16.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
            }
            return hasPendingUsageResult;
          },
          processProto(playedSoundFrecency) {
            let hasPendingUsageResult = closure_12.hasPendingUsage();
            if (hasPendingUsageResult) {
              hasPendingUsageResult = closure_16.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
            }
            if (hasPendingUsageResult) {
              const PlayedSoundFrecency = callback(closure_2[17]).PlayedSoundFrecency;
              playedSoundFrecency.playedSoundFrecency = PlayedSoundFrecency.create();
              playedSoundFrecency.playedSoundFrecency.playedSounds = callback(closure_2[18]).serializeUsageHistory(closure_12.playedSoundFrecencyWithoutFetchingLatest.usageHistory, closure_18);
              const obj = callback(closure_2[18]);
            }
          }
        });
        const beforeSendCallbacks3 = FrecencyUserSettingsManager(closure_2[16]).FrecencyUserSettingsActionCreators.beforeSendCallbacks;
        const obj1 = {
          hasChanges() {
            let hasPendingUsageResult = closure_12.hasPendingUsage();
            if (hasPendingUsageResult) {
              hasPendingUsageResult = closure_16.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
            }
            return hasPendingUsageResult;
          },
          processProto(playedSoundFrecency) {
            let hasPendingUsageResult = closure_12.hasPendingUsage();
            if (hasPendingUsageResult) {
              hasPendingUsageResult = closure_16.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
            }
            if (hasPendingUsageResult) {
              const PlayedSoundFrecency = callback(closure_2[17]).PlayedSoundFrecency;
              playedSoundFrecency.playedSoundFrecency = PlayedSoundFrecency.create();
              playedSoundFrecency.playedSoundFrecency.playedSounds = callback(closure_2[18]).serializeUsageHistory(closure_12.playedSoundFrecencyWithoutFetchingLatest.usageHistory, closure_18);
              const obj = callback(closure_2[18]);
            }
          }
        };
        FrecencyUserSettingsManager(closure_2[16]).FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
          hasChanges() {
            let hasPendingUsageResult = closure_9.hasPendingUsage();
            if (hasPendingUsageResult) {
              hasPendingUsageResult = closure_16.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
            }
            return hasPendingUsageResult;
          },
          processProto(applicationCommandFrecency) {
            let hasPendingUsageResult = closure_9.hasPendingUsage();
            if (hasPendingUsageResult) {
              hasPendingUsageResult = closure_16.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
            }
            if (hasPendingUsageResult) {
              const ApplicationCommandFrecency = callback(closure_2[17]).ApplicationCommandFrecency;
              applicationCommandFrecency.applicationCommandFrecency = ApplicationCommandFrecency.create();
              applicationCommandFrecency.applicationCommandFrecency.applicationCommands = callback(closure_2[18]).serializeUsageHistory(closure_9.getCommandFrecencyWithoutLoadingLatest().usageHistory, 500);
              const obj = callback(closure_2[18]);
            }
          }
        });
        const beforeSendCallbacks4 = FrecencyUserSettingsManager(closure_2[16]).FrecencyUserSettingsActionCreators.beforeSendCallbacks;
        const obj2 = {
          hasChanges() {
            let hasPendingUsageResult = closure_9.hasPendingUsage();
            if (hasPendingUsageResult) {
              hasPendingUsageResult = closure_16.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
            }
            return hasPendingUsageResult;
          },
          processProto(applicationCommandFrecency) {
            let hasPendingUsageResult = closure_9.hasPendingUsage();
            if (hasPendingUsageResult) {
              hasPendingUsageResult = closure_16.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
            }
            if (hasPendingUsageResult) {
              const ApplicationCommandFrecency = callback(closure_2[17]).ApplicationCommandFrecency;
              applicationCommandFrecency.applicationCommandFrecency = ApplicationCommandFrecency.create();
              applicationCommandFrecency.applicationCommandFrecency.applicationCommands = callback(closure_2[18]).serializeUsageHistory(closure_9.getCommandFrecencyWithoutLoadingLatest().usageHistory, 500);
              const obj = callback(closure_2[18]);
            }
          }
        };
        FrecencyUserSettingsManager(closure_2[16]).FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
          hasChanges() {
            let hasPendingUsageResult = closure_10.hasPendingUsage();
            if (hasPendingUsageResult) {
              hasPendingUsageResult = closure_16.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
            }
            return hasPendingUsageResult;
          },
          processProto(applicationFrecency) {
            let hasPendingUsageResult = closure_10.hasPendingUsage();
            if (hasPendingUsageResult) {
              hasPendingUsageResult = closure_16.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
            }
            if (hasPendingUsageResult) {
              const ApplicationFrecency = callback(closure_2[17]).ApplicationFrecency;
              applicationFrecency.applicationFrecency = ApplicationFrecency.create();
              applicationFrecency.applicationFrecency.applications = callback(closure_2[18]).serializeUsageHistory(closure_10.getApplicationFrecencyWithoutLoadingLatest().usageHistory, closure_18);
              const obj = callback(closure_2[18]);
            }
          }
        });
        const beforeSendCallbacks5 = FrecencyUserSettingsManager(closure_2[16]).FrecencyUserSettingsActionCreators.beforeSendCallbacks;
        const obj3 = {
          hasChanges() {
            let hasPendingUsageResult = closure_10.hasPendingUsage();
            if (hasPendingUsageResult) {
              hasPendingUsageResult = closure_16.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
            }
            return hasPendingUsageResult;
          },
          processProto(applicationFrecency) {
            let hasPendingUsageResult = closure_10.hasPendingUsage();
            if (hasPendingUsageResult) {
              hasPendingUsageResult = closure_16.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
            }
            if (hasPendingUsageResult) {
              const ApplicationFrecency = callback(closure_2[17]).ApplicationFrecency;
              applicationFrecency.applicationFrecency = ApplicationFrecency.create();
              applicationFrecency.applicationFrecency.applications = callback(closure_2[18]).serializeUsageHistory(closure_10.getApplicationFrecencyWithoutLoadingLatest().usageHistory, closure_18);
              const obj = callback(closure_2[18]);
            }
          }
        };
        FrecencyUserSettingsManager(closure_2[16]).FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
          hasChanges() {
            let hasPendingUsageResult = closure_14.hasPendingUsage();
            if (hasPendingUsageResult) {
              hasPendingUsageResult = closure_16.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
            }
            return hasPendingUsageResult;
          },
          processProto(guildAndChannelFrecency) {
            let hasPendingUsageResult = closure_14.hasPendingUsage();
            if (hasPendingUsageResult) {
              hasPendingUsageResult = closure_16.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
            }
            if (hasPendingUsageResult) {
              const GuildAndChannelFrecency = callback(closure_2[17]).GuildAndChannelFrecency;
              guildAndChannelFrecency.guildAndChannelFrecency = GuildAndChannelFrecency.create();
              guildAndChannelFrecency.guildAndChannelFrecency.guildAndChannels = callback(closure_2[18]).serializeUsageHistory(closure_14.frecencyWithoutFetchingLatest.usageHistory, closure_15);
              const obj = callback(closure_2[18]);
            }
          }
        });
      }
    }
  ];
  return callback2(FrecencyUserSettingsManager, items);
}(importDefault(dependencyMap[19]));
tmp5 = new tmp5();
const result1 = arg1(dependencyMap[21]).fileFinishedImporting("modules/user_settings/FrecencyUserSettingsManager.tsx");

export default tmp5;
