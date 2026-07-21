// Module ID: 9631
// Function ID: 75014
// Name: getAutocompleteOptions
// Dependencies: []
// Exports: getAutocompleteOptions

// Module 9631 (getAutocompleteOptions)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ AutoCompleteResultTypes: closure_9, MAX_AUTOCOMPLETE_RESULTS: closure_10 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
({ MENTION_SENTINEL: closure_11, EMOJI_SENTINEL: closure_12, CHANNEL_SENTINEL: closure_13, COMMAND_SENTINEL: closure_14 } = arg1(dependencyMap[8]));
const AutocompleteTypes = arg1(dependencyMap[9]).AutocompleteTypes;
const tmp3 = arg1(dependencyMap[8]);
({ EmojiIntention: closure_16, EMOJI_MAX_LENGTH: closure_17, EMOJI_URL_BASE_SIZE: closure_18 } = arg1(dependencyMap[10]));
let closure_19 = false;
const tmp4 = arg1(dependencyMap[10]);
let closure_20 = importDefault(dependencyMap[11]).debounce(importDefault(dependencyMap[12]), arg1(dependencyMap[7]).AUTOCOMPLETE_OPTION_DEBOUNCE_TIME, { -809188780: null, 163101889: null });
const importDefaultResult = importDefault(dependencyMap[11]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/autocompleter/native/AutocompleteOptions.tsx");

export const getAutocompleteOptions = function getAutocompleteOptions(channel, arg1, setting) {
  let flag = arg1;
  let flag2 = setting;
  arg1 = channel;
  if (arg1 === undefined) {
    flag = false;
  }
  const importDefault = flag;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const dependencyMap = flag2;
  let obj = {
    stores: items,
    queryResults(query, canMentionEveryone, request) {
      let globals;
      let roles;
      let users;
      let obj = flag(flag2[13]);
      obj = { query, channel: query };
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
      const items = [
        ...users.map((arg0) => {
          const merged = Object.assign(arg0);
          return { type: constants.USER };
        }),
        ...globals.map((arg0) => {
          const merged = Object.assign(arg0);
          return { type: constants.GLOBAL };
        }),
        ...roles.map((arg0) => {
          const merged = Object.assign(arg0);
          return { type: constants.ROLE };
        })
      ];
      const tmp8 = flag(flag2[11]);
      return flag(flag2[11])(items).value();
    },
    matches(arg0, arg1) {
      return flag(flag2[13]).matchSentinel(arg0, arg1, closure_11);
    }
  };
  const items = [closure_7];
  obj = {
    queryResults(query, channelTypes) {
      if (null != channelTypes) {
        channelTypes = channelTypes.channelTypes;
      }
      if (null != channelTypes) {
        if (channelTypes.isActiveApplicationCommand) {
          let obj = { query, channel: query, channelTypes };
          let result = flag(flag2[13]).queryApplicationCommandChannelResults(obj);
          const obj3 = flag(flag2[13]);
        }
        const channels = result.channels;
        return channels.map((channel) => ({ type: constants.CHANNEL, channel, category: channel.getChannel(channel.parent_id) }));
      }
      obj = flag(flag2[13]);
      obj = { query, channel: query };
      result = obj.queryChannelResults(obj);
    },
    matches(arg0, arg1) {
      let matchSentinelResult = !arg0.isPrivate();
      if (matchSentinelResult) {
        matchSentinelResult = flag(flag2[13]).matchSentinel(arg0, arg1, closure_13);
        const obj = flag(flag2[13]);
      }
      return matchSentinelResult;
    }
  };
  obj = {
    queryResults(query, includeEmojiPremiumUpsell) {
      let num = 40;
      if (flag2) {
        num = 0;
      }
      let obj = flag(flag2[13]);
      obj = { query, channel: query, intention: constants2.CHAT, maxCount: closure_10 + num };
      const queryEmojiResultsResult = obj.queryEmojiResults(obj);
      if (null != includeEmojiPremiumUpsell) {
        if (includeEmojiPremiumUpsell.includeEmojiPremiumUpsell) {
          if (queryEmojiResultsResult.emojis.locked.length > 0) {
            if (queryEmojiResultsResult.emojis.unlocked.length < 4) {
              obj = { type: constants.EMOJI_PREMIUM_UPSELL, results: queryEmojiResultsResult.emojis.locked };
              const items = [obj];
              let items5 = items;
            }
            let items1 = [];
            if (flag2) {
              let hasLoadedStickerPacks = closure_19;
              if (!closure_19) {
                hasLoadedStickerPacks = obj.hasLoadedStickerPacks;
              }
              if (!hasLoadedStickerPacks) {
                closure_19 = true;
                const stickerPacks = query(flag2[14]).fetchStickerPacks();
                const obj4 = query(flag2[14]);
              }
              const items2 = [query];
              const items3 = [query, (arg0, arg1) => arg1 === callback(closure_2[15]).StickerSendability.SENDABLE];
              items1 = flag(flag2[13]).queryStickers(items2, true, items3);
              const obj5 = flag(flag2[13]);
            }
            const items4 = [];
            const unlocked = queryEmojiResultsResult.emojis.unlocked;
            let arraySpreadResult = HermesBuiltin.arraySpread(items1.map((sticker) => {
              sticker = sticker.sticker;
              return { type: constants.STICKER, name: sticker.name, sticker };
            }), 0);
            arraySpreadResult = HermesBuiltin.arraySpread(items5, HermesBuiltin.arraySpread(unlocked.map((name) => {
              let obj = { type: constants.EMOJI, name: name.name };
              if (null != name.id) {
                obj = {};
                ({ id: obj3.id, animated: obj3.animated } = name);
                obj.size = closure_18;
                let url = callback2(closure_2[16]).getEmojiURL(obj);
                const obj2 = callback2(closure_2[16]);
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
      let tmp = arg0 === closure_12;
      if (tmp) {
        let tmp2 = arr.length < 2;
        if (!tmp2) {
          tmp2 = arr.length > closure_17;
        }
        let tmp4 = !tmp2;
        if (!tmp2) {
          tmp4 = !arr.includes(closure_12);
        }
        tmp = tmp4;
      }
      return tmp;
    }
  };
  const items1 = [closure_4, closure_3];
  return {
    [closure_15.MENTIONS]: obj,
    [closure_15.CHANNELS]: obj,
    [closure_15.EMOJIS_AND_STICKERS]: obj,
    [closure_15.SLASHES]: {
      queryResults() {
        return [];
      },
      matches(arg0, arg1, arg2) {
        let tmp = 0 === arg2;
        if (tmp) {
          tmp = arg0 === closure_14;
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
    [closure_15.SLASHES_DISCOVERY]: {
      queryResults() {
        return [];
      },
      matches(arg0, arg1, arg2) {
        let tmp = flag;
        if (flag) {
          tmp = 0 === arg2;
        }
        if (tmp) {
          tmp = arg0 === closure_14;
        }
        if (tmp) {
          tmp = 0 === arg1.length;
        }
        return tmp;
      }
    },
    [closure_15.CHOICES]: {
      stores: items1,
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
                  obj = { channel: query, guild: guild.getGuild(query.guild_id) };
                  const obj1 = { name: option.option.name, query };
                  obj.autocomplete = obj1;
                  obj.context = obj;
                  callback(obj);
                  const autocompleteChoices = autocompleteChoices.getAutocompleteChoices(query.id, option.option.name, query);
                  if (null == autocompleteChoices) {
                    const _Array = Array;
                    const array = new Array(4);
                    const obj2 = { type: constants.CHOICE_LOADING };
                    let fillResult = array.fill(obj2);
                  } else if (0 === autocompleteChoices.length) {
                    const obj3 = { type: constants.LABEL };
                    const intl = query(flag2[17]).intl;
                    obj3.label = intl.string(query(flag2[17]).t.41014u);
                    const items = [obj3];
                    fillResult = items;
                  } else {
                    fillResult = autocompleteChoices.map((choice) => ({ type: constants.CHOICE, choice }));
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
          obj = flag(flag2[13]);
          const obj4 = { query, choices };
          const choices1 = obj.queryChoiceResults(obj4).choices;
          items1 = choices1.map((choice) => ({ type: constants.CHOICE, choice }));
        }
        return items1;
      },
      matches() {
        return false;
      }
    }
  };
};
