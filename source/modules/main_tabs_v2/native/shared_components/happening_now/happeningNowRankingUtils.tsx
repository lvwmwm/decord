// Module ID: 14977
// Function ID: 114144
// Name: cardSize
// Dependencies: [3767, 4146, 14233, 1327, 22, 2]
// Exports: filterHappeningNowCards, sortHappeningNowCards

// Module 14977 (cardSize)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
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
                            require(1327) /* isDiscordFrontendDevelopment */.assertNever(kind);
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
({ HAPPENING_NOW_CARD_WIDTH_NORMAL_WITH_MARGIN: closure_5, HAPPENING_NOW_CARD_WIDTH_SMALL_WITH_MARGIN: closure_6, HAPPENING_NOW_CARD_WIDTH_XSMALL_WITH_MARGIN: closure_7 } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
const result = require("HAPPENING_NOW_PANELS_CONTAINER_PADDING").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/happeningNowRankingUtils.tsx");

export { cardSize };
export const HappeningNowWeights = { Stage: 7, Voice: 6, Stream: 5, Game: 4, Listening: 3, CustomStatus: 3, User: 2, Base: 1 };
export const HAPPENING_NOW_OFFLINE_PENALTY = -1000;
export const filterHappeningNowCards = function filterHappeningNowCards(first) {
  function hasNoDiscoverableVoiceStates(voiceState) {
    return (function cardHasNoDiscoverableVoiceStates(voiceState) {
      if ("voiceState" in voiceState) {
        if (null != voiceState.voiceState) {
          const channelId = voiceState.voiceState.channelId;
          if (null == channelId) {
            return false;
          } else {
            const _Object = Object;
            const values = Object.values(outer2_4.getVoiceStatesForChannel(channelId));
            return values.length > 0 && values.every((discoverable) => false === discoverable.discoverable);
          }
        }
      }
      return false;
    })(voiceState);
  }
  function hasBlockedOrIgnoredUserInChannel(voiceState) {
    return (function cardHasBlockedOrIgnoredUserInVoiceChannel(voiceState) {
      if ("voiceState" in voiceState) {
        if (null != voiceState.voiceState) {
          const channelId = voiceState.voiceState.channelId;
          if (null == channelId) {
            return false;
          } else {
            const voiceStatesForChannel = outer2_4.getVoiceStatesForChannel(channelId);
            let someResult = null != voiceStatesForChannel;
            if (someResult) {
              const mapped = hasBlockedOrIgnoredUserInChannel(outer2_2[4])(voiceStatesForChannel).map((userId) => userId.userId);
              const found = mapped.filter(hasNoDiscoverableVoiceStates(outer2_2[3]).isNotNullish);
              someResult = found.some((arg0) => outer3_3.isBlockedOrIgnored(arg0));
              const arr = hasBlockedOrIgnoredUserInChannel(outer2_2[4])(voiceStatesForChannel);
            }
            return someResult;
          }
        }
      }
      return false;
    })(voiceState);
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
      if (outer1_8(arg0) === outer1_5) {
        num = 0;
      }
      return num;
    },
    (voiceState) => (function cardHasNonDiscoverableVoiceStates(voiceState) {
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
              const values = Object.values(outer2_4.getVoiceStatesForChannel(channelId));
              someResult = values.some((discoverable) => false === discoverable.discoverable);
            }
            return someResult;
          }
        }
      }
      return false;
    })(voiceState)
  ];
  return require(22) /* apply */.orderBy(result, items, ["asc", "asc"]);
};
