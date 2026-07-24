// Module ID: 9675
// Function ID: 75279
// Name: toGameResults
// Dependencies: [7020, 7021, 7090, 5035, 1348, 1917, 1838, 653, 4566, 4567, 9676, 1852, 22, 8228, 4974, 5728, 7099, 9637, 5732, 1392, 1212, 2]
// Exports: getAutocompleteOptions

// Module 9675 (toGameResults)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import ME from "ME";
import regExp from "regExp";
import { AutocompleteTypes } from "AutocompleteTypes";
import set from "set";
import closure_21 from "_createForOfIteratorHelperLoose";
import set from "_isNativeReflectConstruct";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let closure_19;
const require = arg1;
function toGameResults(arr) {
  const substr = arr.slice(0, arg1);
  return substr.map((game) => ({ type: outer1_10.GAME_MENTION, game }));
}
({ AutoCompleteResultTypes: closure_10, MAX_AUTOCOMPLETE_RESULTS: closure_11 } = ME);
({ MENTION_SENTINEL: closure_12, EMOJI_SENTINEL: closure_13, CHANNEL_SENTINEL: closure_14, COMMAND_SENTINEL: closure_15 } = regExp);
({ EmojiIntention: closure_17, EMOJI_MAX_LENGTH: closure_18, EMOJI_URL_BASE_SIZE: closure_19 } = set);
let c20 = false;
let result = set.fileFinishedImporting("modules/autocompleter/native/AutocompleteOptions.tsx");

export const getAutocompleteOptions = function getAutocompleteOptions(channel, arg1, setting) {
  let flag = arg1;
  let flag2 = setting;
  let closure_0 = channel;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = true;
  }
  let obj = {
    stores: items,
    queryResults(query, canMentionEveryone, request) {
      let globals;
      let roles;
      let users;
      let obj = flag(flag2[14]);
      obj = { query, channel: _private };
      canMentionEveryone = undefined;
      if (null != canMentionEveryone) {
        canMentionEveryone = canMentionEveryone.canMentionEveryone;
      }
      obj.canMentionEveryone = canMentionEveryone;
      let canMentionHere;
      if (null != canMentionEveryone) {
        canMentionHere = canMentionEveryone.canMentionHere;
      }
      obj.canMentionHere = canMentionHere;
      let canMentionUsers;
      if (null != canMentionEveryone) {
        canMentionUsers = canMentionEveryone.canMentionUsers;
      }
      obj.canMentionUsers = canMentionUsers;
      let canMentionRoles;
      if (null != canMentionEveryone) {
        canMentionRoles = canMentionEveryone.canMentionRoles;
      }
      obj.canMentionRoles = canMentionRoles;
      let prop;
      if (null != canMentionEveryone) {
        prop = canMentionEveryone.canMentionAnyGuildUser;
      }
      obj.includeAllGuildUsers = prop;
      let prop1;
      if (null != canMentionEveryone) {
        prop1 = canMentionEveryone.canMentionNonMentionableRoles;
      }
      obj.includeNonMentionableRoles = prop1;
      obj.request = request;
      ({ users, globals, roles } = obj.queryMentionResults(obj));
      const queryMentionResultsResult = obj.queryMentionResults(obj);
      const gameMentionsAutocompleteConfig = _private(flag2[15]).getGameMentionsAutocompleteConfig("mentions autocomplete");
      let canMentionGames;
      if (null != canMentionEveryone) {
        canMentionGames = canMentionEveryone.canMentionGames;
      }
      if (true === canMentionGames) {
        if (gameMentionsAutocompleteConfig.enabled) {
          if (gameMentionsAutocompleteConfig.combineMentionAutocomplete) {
            if (query.length > 0) {
              if (null != canMentionEveryone) {
                let items = [];
                let arraySpreadResult = HermesBuiltin.arraySpread(users.map((arg0) => {
                  const merged = Object.assign(arg0);
                  return { type: outer2_10.USER };
                }), 0);
                arraySpreadResult = HermesBuiltin.arraySpread(globals.map((arg0) => {
                  const merged = Object.assign(arg0);
                  return { type: outer2_10.GLOBAL };
                }), arraySpreadResult);
                HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(roles.map((arg0) => {
                  const merged = Object.assign(arg0);
                  return { type: outer2_10.ROLE };
                }), arraySpreadResult));
                const tmp15 = flag(flag2[12]);
                return flag(flag2[12])(items).value();
              }
              let result = _private(flag2[16]).queryGamesAutocomplete(query);
              if (null == result) {
                result = [];
              }
              items = outer1_22(result, 1);
              const obj4 = _private(flag2[16]);
              const tmp10 = outer1_22;
            }
          }
        }
      }
      items = [];
    },
    matches(arg0, arg1) {
      return flag(flag2[14]).matchSentinel(arg0, arg1, outer1_12);
    }
  };
  items = [closure_8, closure_5];
  obj = {
    stores: items1,
    queryResults(query) {
      const gameMentionsAutocompleteConfig = _private(flag2[15]).getGameMentionsAutocompleteConfig("game_mentions autocomplete");
      if (gameMentionsAutocompleteConfig.enabled) {
        if (!gameMentionsAutocompleteConfig.combineMentionAutocomplete) {
          if (0 !== query.length) {
            let result = _private(flag2[16]).queryGamesAutocomplete(query);
            if (null == result) {
              result = [];
            }
            outer1_22(result, outer1_11);
            const obj2 = _private(flag2[16]);
            const tmp2 = outer1_22;
          }
          return [];
        }
      }
    },
    matches() {
      return false;
    }
  };
  items1 = [closure_5];
  obj = {
    queryResults(query, channelTypes) {
      if (null != channelTypes) {
        channelTypes = channelTypes.channelTypes;
      }
      if (null != channelTypes) {
        if (channelTypes.isActiveApplicationCommand) {
          let obj = { query, channel: closure_0, channelTypes };
          let result = flag(flag2[14]).queryApplicationCommandChannelResults(obj);
          const obj3 = flag(flag2[14]);
        }
        const channels = result.channels;
        return channels.map((channel) => ({ type: outer2_10.CHANNEL, channel, category: outer2_7.getChannel(channel.parent_id) }));
      }
      obj = flag(flag2[14]);
      obj = { query, channel: closure_0 };
      result = obj.queryChannelResults(obj);
    },
    matches(arg0, arg1) {
      let matchSentinelResult = !_private.isPrivate();
      if (matchSentinelResult) {
        matchSentinelResult = flag(flag2[14]).matchSentinel(arg0, arg1, outer1_14);
        const obj = flag(flag2[14]);
      }
      return matchSentinelResult;
    }
  };
  let items2 = [closure_4, _isNativeReflectConstruct];
  return {
    [closure_16.MENTIONS]: obj,
    [closure_16.GAME_MENTIONS]: obj,
    [closure_16.CHANNELS]: obj,
    [closure_16.EMOJIS_AND_STICKERS]: {
      queryResults(query, includeEmojiPremiumUpsell) {
        let num = 40;
        if (flag2) {
          num = 0;
        }
        let obj = flag(flag2[14]);
        obj = { query, channel: _private, intention: outer1_17.CHAT, maxCount: outer1_11 + num };
        const queryEmojiResultsResult = obj.queryEmojiResults(obj);
        if (null != includeEmojiPremiumUpsell) {
          if (includeEmojiPremiumUpsell.includeEmojiPremiumUpsell) {
            if (queryEmojiResultsResult.emojis.locked.length > 0) {
              if (queryEmojiResultsResult.emojis.unlocked.length < 4) {
                obj = { type: outer1_10.EMOJI_PREMIUM_UPSELL, results: queryEmojiResultsResult.emojis.locked };
                const items = [obj];
                let items5 = items;
              }
              let items1 = [];
              if (flag2) {
                let hasLoadedStickerPacks = outer1_20;
                if (!outer1_20) {
                  hasLoadedStickerPacks = outer1_6.hasLoadedStickerPacks;
                }
                if (!hasLoadedStickerPacks) {
                  outer1_20 = true;
                  const stickerPacks = _private(flag2[17]).fetchStickerPacks();
                  const obj4 = _private(flag2[17]);
                }
                const items2 = [query];
                const items3 = [_private, (arg0, arg1) => arg1 === callback(flag2[18]).StickerSendability.SENDABLE];
                items1 = flag(flag2[14]).queryStickers(items2, true, items3);
                const obj5 = flag(flag2[14]);
              }
              const items4 = [];
              const unlocked = queryEmojiResultsResult.emojis.unlocked;
              let arraySpreadResult = HermesBuiltin.arraySpread(items1.map((sticker) => {
                sticker = sticker.sticker;
                return { type: outer2_10.STICKER, name: sticker.name, sticker };
              }), 0);
              arraySpreadResult = HermesBuiltin.arraySpread(items5, HermesBuiltin.arraySpread(unlocked.map((name) => {
                let obj = { type: outer2_10.EMOJI, name: name.name };
                if (null != name.id) {
                  obj = {};
                  ({ id: obj3.id, animated: obj3.animated } = name);
                  obj.size = outer2_19;
                  let url = flag(flag2[19]).getEmojiURL(obj);
                  const obj2 = flag(flag2[19]);
                } else {
                  url = name.url;
                }
                obj.url = url;
                let surrogates;
                if (null == name.id) {
                  surrogates = name.surrogates;
                }
                obj.surrogates = surrogates;
                return obj;
              }), arraySpreadResult));
              return items4;
            }
          }
        }
        items5 = [];
      },
      matches(arg0, arr) {
        let tmp = arg0 === outer1_13;
        if (tmp) {
          let tmp2 = arr.length < 2;
          if (!tmp2) {
            tmp2 = arr.length > outer1_18;
          }
          let tmp4 = !tmp2;
          if (!tmp2) {
            tmp4 = !arr.includes(outer1_13);
          }
          tmp = tmp4;
        }
        return tmp;
      }
    },
    [closure_16.SLASHES]: {
      queryResults() {
        return [];
      },
      matches(arg0, arg1, arg2) {
        let tmp = 0 === arg2;
        if (tmp) {
          tmp = arg0 === outer1_15;
        }
        if (tmp) {
          let tmp4 = flag;
          if (flag) {
            tmp4 = 0 === arg1.length;
          }
          tmp = !tmp4;
        }
        return tmp;
      }
    },
    [closure_16.SLASHES_DISCOVERY]: {
      queryResults() {
        return [];
      },
      matches(arg0, arg1, arg2) {
        let tmp = flag;
        if (flag) {
          tmp = 0 === arg2;
        }
        if (tmp) {
          tmp = arg0 === outer1_15;
        }
        if (tmp) {
          tmp = 0 === arg1.length;
        }
        return tmp;
      }
    },
    [closure_16.CHOICES]: {
      stores: items2,
      queryResults(query, option) {
        if (null != option) {
          option = option.option;
          if (null != option) {
            if (option.autocomplete) {
              let activeCommand;
              if (null != option) {
                activeCommand = option.activeCommand;
              }
              if (null != activeCommand) {
                let optionValues;
                if (null != option) {
                  optionValues = option.optionValues;
                }
                if (null != optionValues) {
                  let obj = {};
                  ({ activeCommand: obj3.command, optionValues: obj3.optionValues } = option);
                  obj = { channel: _private, guild: outer1_9.getGuild(_private.guild_id) };
                  const obj1 = { name: option.option.name, query };
                  obj.autocomplete = obj1;
                  obj.context = obj;
                  outer1_21(obj);
                  const autocompleteChoices = outer1_3.getAutocompleteChoices(_private.id, option.option.name, query);
                  if (null == autocompleteChoices) {
                    const _Array = Array;
                    const array = new Array(4);
                    const obj2 = { type: outer1_10.CHOICE_LOADING };
                    let fillResult = array.fill(obj2);
                  } else if (0 === autocompleteChoices.length) {
                    const obj3 = { type: outer1_10.LABEL };
                    const intl = _private(flag2[20]).intl;
                    obj3.label = intl.string(_private(flag2[20]).t["41014u"]);
                    const items = [obj3];
                    fillResult = items;
                  } else {
                    fillResult = autocompleteChoices.map((choice) => ({ type: outer2_10.CHOICE, choice }));
                  }
                  return fillResult;
                }
              }
            }
          }
        }
        let choices;
        if (null != option) {
          choices = option.choices;
        }
        if (null == choices) {
          let items1 = [];
        } else {
          obj = flag(flag2[14]);
          const obj4 = { query, choices };
          const choices1 = obj.queryChoiceResults(obj4).choices;
          items1 = choices1.map((choice) => ({ type: outer2_10.CHOICE, choice }));
        }
        return items1;
      },
      matches() {
        return false;
      }
    }
  };
};
