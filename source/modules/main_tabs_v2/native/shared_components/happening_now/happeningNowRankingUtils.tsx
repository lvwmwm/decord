// Module ID: 14806
// Function ID: 111612
// Name: cardSize
// Dependencies: []
// Exports: filterHappeningNowCards, sortHappeningNowCards

// Module 14806 (cardSize)
function cardSize(kind) {
  kind = kind.kind;
  if ("placeholder" !== kind) {
    if ("voice" !== kind) {
      if ("activity" !== kind) {
        if ("guild-event" !== kind) {
          if ("active-channel" !== kind) {
            if ("live-guild-stage" !== kind) {
              if ("embedded-activity" !== kind) {
                if ("unified-vc" !== kind) {
                  if ("user" === kind) {
                    return closure_7;
                  } else {
                    if ("invite" !== kind) {
                      if ("create-channel" !== kind) {
                        if ("customize-guild" !== kind) {
                          if ("student-hub-add-channel" !== kind) {
                            arg1(dependencyMap[3]).assertNever(kind);
                          }
                        }
                      }
                    }
                    return closure_6;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return closure_5;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ HAPPENING_NOW_CARD_WIDTH_NORMAL_WITH_MARGIN: closure_5, HAPPENING_NOW_CARD_WIDTH_SMALL_WITH_MARGIN: closure_6, HAPPENING_NOW_CARD_WIDTH_XSMALL_WITH_MARGIN: closure_7 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/happeningNowRankingUtils.tsx");

export { cardSize };
export const HappeningNowWeights = { 1398160228: "value", 101339574: "r", 1554667107: "isArray", 170317394: "constructor", -619359482: "String", -1414107454: "isArray", -1025829550: "isArray", 1860658030: "isArray" };
export const HAPPENING_NOW_OFFLINE_PENALTY = -1000;
export const filterHappeningNowCards = function filterHappeningNowCards(first) {
  function hasNoDiscoverableVoiceStates(voiceState) {
    return function cardHasNoDiscoverableVoiceStates(voiceState) {
      if ("voiceState" in voiceState) {
        if (null != voiceState.voiceState) {
          const channelId = voiceState.voiceState.channelId;
          if (null == channelId) {
            return false;
          } else {
            const _Object = Object;
            const values = Object.values(voiceStatesForChannel.getVoiceStatesForChannel(channelId));
            return values.length > 0 && values.every((discoverable) => false === discoverable.discoverable);
          }
        }
      }
      return false;
    }(voiceState);
  }
  function hasBlockedOrIgnoredUserInChannel(voiceState) {
    return function cardHasBlockedOrIgnoredUserInVoiceChannel(voiceState) {
      if ("voiceState" in voiceState) {
        if (null != voiceState.voiceState) {
          const channelId = voiceState.voiceState.channelId;
          if (null == channelId) {
            return false;
          } else {
            const voiceStatesForChannel = voiceStatesForChannel.getVoiceStatesForChannel(channelId);
            let someResult = null != voiceStatesForChannel;
            if (someResult) {
              const mapped = callback2(closure_2[4])(voiceStatesForChannel).map((userId) => userId.userId);
              const found = mapped.filter(callback(closure_2[3]).isNotNullish);
              someResult = found.some((arg0) => blockedOrIgnored.isBlockedOrIgnored(arg0));
              const arr = callback2(closure_2[4])(voiceStatesForChannel);
            }
            return someResult;
          }
        }
      }
      return false;
    }(voiceState);
  }
  return first.filter((voiceState) => {
    let tmp = !hasNoDiscoverableVoiceStates(voiceState);
    if (tmp) {
      tmp = !hasBlockedOrIgnoredUserInChannel(voiceState);
    }
    return tmp;
  });
};
export const sortHappeningNowCards = function sortHappeningNowCards(result) {
  const items = [
    (arg0) => {
      let num = 1;
      if (callback(arg0) === closure_5) {
        num = 0;
      }
      return num;
    },
    (voiceState) => function cardHasNonDiscoverableVoiceStates(voiceState) {
      if ("voiceState" in voiceState) {
        if (null != voiceState.voiceState) {
          voiceState = voiceState.voiceState;
          if (false === voiceState.discoverable) {
            return true;
          } else {
            const channelId = voiceState.channelId;
            let someResult = null != channelId;
            if (someResult) {
              const _Object = Object;
              const values = Object.values(voiceStatesForChannel.getVoiceStatesForChannel(channelId));
              someResult = values.some((discoverable) => false === discoverable.discoverable);
            }
            return someResult;
          }
        }
      }
      return false;
    }(voiceState)
  ];
  return arg1(dependencyMap[4]).orderBy(result, items, [null, null]);
};
