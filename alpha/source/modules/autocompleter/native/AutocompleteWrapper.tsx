// Module ID: 13929
// Function ID: 13930
// Name: AutocompleteWrapper
// Dependencies: [32, 19, 17, 8346, 6796, 6568, 6837, 1072, 6035, 10225, 6036, 10309, 1386, 21, 8681, 7207, 10320, 5014, 1375, 575, 13930, 1491, 5607, 5586, 504, 5596, 11047, 13937, 13938, 4839, 7059, 10308, 13939, 10224, 6898, 9940, 13940, 7700, 13740, 1992, 7825, 1623, 5760, 9143, 9611, 9144, 13941, 13942, 9785, 8600, 13778, 5095, 13943, 5683, 13950, 5624, 1113, 7294, 8183, 13951, 13952, 2]

// Module 13929 (AutocompleteWrapper)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import EmojiConstants from "EmojiConstants" /* 1386 */;
import KeyboardTypes from "KeyboardTypes" /* 1623 */;
import Server from "Server" /* 1992 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5683 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5760 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 6035 */;
import utils_AutocompleteUtilsDefault from "utils/AutocompleteUtils" /* 6898 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 7207 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 8681 */;
import GameSearchSession from "GameSearchSession" /* 9143 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9785 */;
import autocompleter_AutocompleteUtils from "autocompleter/AutocompleteUtils" /* 10224 */;
import AutocompleteOptions from "AutocompleteOptions" /* 10308 */;
import channel_text_area_ChannelAutocompleteConstants from "channel_text_area/ChannelAutocompleteConstants" /* 10309 */;
import TimestampSuggestionUtils from "TimestampSuggestionUtils" /* 10320 */;
import Autocomplete from "Autocomplete" /* 13930 */;
import ChannelAutocompleteAnalytics from "ChannelAutocompleteAnalytics" /* 13941 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 8346 */;
import EmojiStore from "EmojiStore" /* 6796 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6568 */;
import StickersStore from "StickersStore" /* 6837 */;
import Constants from "Constants" /* 1072 */;
import ApplicationCommandsConstants from "ApplicationCommandsConstants" /* 10225 */;
import ChannelAutocompleteConstants from "ChannelAutocompleteConstants" /* 6036 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let closure_12;
let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_26;
let closure_27;
let closure_28;
let hasOwnProperty;
let map1;
let metroRequire;
let tmp;
let unpackModuleId;
const application_commands_ApplicationCommandUtils = tmp(13778);
function getItemKey(type, arg1) {
  type = type.type;
  if (unpackModuleId.USER === type) {
    const _HermesInternal12 = HermesInternal;
    return "" + type.type + ":" + type.user.id;
  } else if (unpackModuleId.ROLE === type) {
    const _HermesInternal11 = HermesInternal;
    return "" + type.type + ":" + type.id;
  } else if (unpackModuleId.GLOBAL === type) {
    const _HermesInternal10 = HermesInternal;
    return "" + type.type + ":" + type.test;
  } else if (unpackModuleId.CHANNEL === type) {
    const _HermesInternal9 = HermesInternal;
    return "" + type.type + ":" + type.channel.id;
  } else if (unpackModuleId.EMOJI === type) {
    const _HermesInternal8 = HermesInternal;
    return "" + type.type + ":" + type.url + ":" + type.name;
  } else if (unpackModuleId.STICKER === type) {
    const _HermesInternal7 = HermesInternal;
    return "" + type.type + ":" + type.sticker.id;
  } else if (unpackModuleId.SLASH === type) {
    const _HermesInternal6 = HermesInternal;
    return "" + type.type + ":" + type.section.id + ":" + type.command.id;
  } else if (unpackModuleId.CHOICE === type) {
    const _HermesInternal5 = HermesInternal;
    return "" + type.type + ":" + type.choice.name + ":" + type.choice.value;
  } else if (unpackModuleId.CHOICE_LOADING === type) {
    const _HermesInternal4 = HermesInternal;
    return "" + type.type + ":" + arg1;
  } else if (unpackModuleId.LABEL === type) {
    const _HermesInternal3 = HermesInternal;
    return "" + type.type + ":" + type.label;
  } else if (unpackModuleId.GAME_MENTION === type) {
    const _HermesInternal2 = HermesInternal;
    return "" + type.type + ":" + type.game.id;
  } else if (unpackModuleId.TIMESTAMP_MENTION === type) {
    const _HermesInternal = HermesInternal;
    return "" + type.type + ":" + type.mention.timestamp + ":" + type.mention.format;
  } else {
    return unpackModuleId.EMOJI_PREMIUM_UPSELL === type ? type.type : undefined;
  }
}
({ PixelRatio: hasOwnProperty, View: metroRequire, StyleSheet } = react_native);
({ AutoCompleteResultTypes: unpackModuleId, WHITESPACE_RE: closure_12, AnalyticEvents: map1, UpsellTypes: closure_14 } = Constants);
const BOOLEAN_CHOICES = ApplicationCommandConstants.BOOLEAN_CHOICES;
({ AUTOCOMPLETE_EMOJI_ROW_HEIGHT: closure_16, AUTOCOMPLETE_ROW_HEIGHT: closure_17 } = ApplicationCommandsConstants);
({ MENTION_SENTINEL: closure_18, CHANNEL_SENTINEL: closure_19, EMOJI_SENTINEL: closure_20, COMMAND_SENTINEL: closure_21, GAME_MENTION_INPUT_PREFIX: closure_22, TIMESTAMP_MENTION_INPUT_PREFIX: closure_23 } = ChannelAutocompleteConstants);
const AutocompleteTypes = channel_text_area_ChannelAutocompleteConstants.AutocompleteTypes;
const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
({ jsx: closure_26, Fragment: closure_27, jsxs: closure_28 } = Fragment);
let c29 = "text-sm/semibold";
const hairlineWidth = StyleSheet.hairlineWidth;
let c31 = 200;
let closure_32 = { allowSpaces: true, maxQueryLength: 64 };
let obj = { allowSpaces: true, maxQueryLength: GameAutocompleteUtils.GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH };
let closure_34 = createStyles.createStyles((borderRadius, borderWidth, borderTopWidth, marginHorizontal, marginBottom) => {
  let str;
  obj = { autocompletePositionRelative: { position: "relative" }, autocompleteWrapper: { position: str, marginHorizontal, marginBottom }, autocompleteContainer: { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, borderRadius, borderWidth, borderTopWidth, borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, overflow: "hidden" }, autocomplete: { flexGrow: 0, flexShrink: 1, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND }, applicationCommands: { flexGrow: 1 }, resultsList: { flexGrow: 1 }, sectionDivider: { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, marginLeft: -16 }, sectionTitle: { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, paddingLeft: 12, marginVertical: 12, justifyContent: "center" }, stickersAutocompleteList: { marginBottom: 12, height: Autocomplete.AUTOCOMPLETE_STICKER_NODE_SIZE, flexShrink: 0 }, stickersAutocompleteContent: { paddingLeft: 12 - Autocomplete.AUTOCOMPLETE_STICKER_NODE_MARGIN } };
  str = "absolute";
  const obj2 = PlatformUtils;
  if (obj2.isAndroid()) {
    str = "relative";
  }
  ({ backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, borderRadius, borderWidth, borderTopWidth, borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, overflow: "hidden" });
  ({ flexGrow: 0, flexShrink: 1, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND });
  ({ backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, marginLeft: -16 });
  ({ backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, paddingLeft: 12, marginVertical: 12, justifyContent: "center" });
  ({ marginBottom: 12, height: Autocomplete.AUTOCOMPLETE_STICKER_NODE_SIZE, flexShrink: 0 });
  ({ paddingLeft: 12 - Autocomplete.AUTOCOMPLETE_STICKER_NODE_MARGIN });
  return obj;
});
let closure_36 = { resultCount: 0, stickerResults: [], nonStickerResults: [], hasStickerResults: false, hasNonStickerResults: false };
class ACWrapper {
  constructor(analyticsLocations) {
    let Text;
    let Text2;
    let _undefined;
    let _undefined2;
    let c25;
    let c39;
    let c40;
    let canOnlyUseTextCommands;
    let format;
    let intl;
    let items28;
    let items29;
    let items31;
    let items32;
    let items33;
    let items34;
    let items36;
    let items37;
    let items38;
    let ksAVYt;
    let num3;
    let obj15;
    let obj16;
    let obj21;
    let obj22;
    let obj29;
    let ref;
    let screenIndex;
    let setChatInputHeight;
    let str;
    let tmp22;
    let tmp37;
    let tmp45;
    let tmp92Result4;
    const f105302 = (arg0) => {
      closure_0 = arg0;
      if (arg0 > 0) {
        let tmp = commandsDisabled;
        let closure_1 = 1.5 / commandsDisabled.get();
        closure_0((arg0) => {
          let tmp = arg0;
          if (null == arg0) {
            tmp = closure_0;
          } else {
            const _Math = Math;
          }
          return tmp;
        });
      }
    };
    analyticsLocations = analyticsLocations.analyticsLocations;
    const channel = analyticsLocations.channel;
    let canMentionEveryone = analyticsLocations.canMentionEveryone;
    const keyboardType = analyticsLocations.keyboardType;
    const onChangeAutoCompleteVisibility = analyticsLocations.onChangeAutoCompleteVisibility;
    const commandsDisabled = analyticsLocations.commandsDisabled;
    const chatInputRef = analyticsLocations.chatInputRef;
    let optionStates;
    c25 = undefined;
    let beginSearch;
    closure_32 = undefined;
    let setData;
    let queryOptions;
    c39 = undefined;
    c40 = undefined;
    let first5;
    let closure_42;
    let closure_43;
    let callback;
    let callback1;
    let memo2;
    ref = undefined;
    let diff1;
    let memo3;
    let first6;
    let closure_53;
    let closure_54;
    let token5;
    let callback2;
    let callback4;
    let first7;
    let closure_59;
    let ref1;
    let ref2;
    let tmp = analyticsLocations;
    let tmp2 = canMentionEveryone;
    ({ canOnlyUseTextCommands, screenIndex, ref } = analyticsLocations);
    obj = analyticsLocations(canMentionEveryone[24]);
    let items = [optionStates];
    const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
      obj = { optionStates: ApplicationCommandStore.getOptionStates(channel.id), activeOption: ApplicationCommandStore.getActiveOption(channel.id), activeCommand: ApplicationCommandStore.getActiveCommand(channel.id), activeSection: ApplicationCommandStore.getActiveCommandSection(channel.id) };
      return obj;
    });
    optionStates = stateFromStoresObject.optionStates;
    const activeOption = stateFromStoresObject.activeOption;
    const activeCommand = stateFromStoresObject.activeCommand;
    const activeSection = stateFromStoresObject.activeSection;
    let obj2 = analyticsLocations(canMentionEveryone[25]);
    let tmp4 = channel;
    const token = obj2.useToken(channel(canMentionEveryone[19]).modules.mobile.TABLE_ROW_HEIGHT);
    let obj3 = analyticsLocations(canMentionEveryone[26]);
    let tmp6 = beginSearch;
    const scaledTextLineHeight = obj3.useScaledTextLineHeight(beginSearch);
    let tmp8 = channel(canMentionEveryone[27])();
    let obj4 = analyticsLocations(canMentionEveryone[28]);
    let timestampSearchHeaderHeight = obj4.useTimestampSearchHeaderHeight();
    const IncludeStickersInAutocomplete = analyticsLocations(canMentionEveryone[29]).IncludeStickersInAutocomplete;
    const setting = IncludeStickersInAutocomplete.getSetting();
    let obj5 = onChangeAutoCompleteVisibility;
    const tmp12 = keyboardType(onChangeAutoCompleteVisibility.useState(queryOptions), 2);
    const first = tmp12[0];
    const resultCount = first.resultCount;
    const stickerResults = first.stickerResults;
    const nonStickerResults = first.nonStickerResults;
    let hasStickerResults = first.hasStickerResults;
    let hasNonStickerResults = first.hasNonStickerResults;
    let closure_18 = tmp12[1];
    let obj6 = analyticsLocations(canMentionEveryone[24]);
    let items1 = [activeOption];
    const stateFromStores = obj6.useStateFromStores(items1, () => activeOption.loadState);
    let obj7 = analyticsLocations(canMentionEveryone[24]);
    const items2 = [token];
    const stateFromStores1 = obj7.useStateFromStores(items2, () => token.loadState);
    const context = onChangeAutoCompleteVisibility.useContext(analyticsLocations(canMentionEveryone[30]).RedesignCompatContext);
    const items3 = [channel, setting];
    const memo = onChangeAutoCompleteVisibility.useMemo(() => {
      obj = AutocompleteOptions;
      return obj.getAutocompleteOptions(channel, true, setting);
    }, items3);
    let tmp18 = keyboardType(onChangeAutoCompleteVisibility.useState({ focused: false, text: "", selectionStart: 0, selectionEnd: 0 }), 2);
    const first1 = tmp18[0];
    const focused = first1.focused;
    let text = first1.text;
    let c22 = text;
    const selectionStart = first1.selectionStart;
    let selectionEnd = first1.selectionEnd;
    const tmp20 = tmp18[1];
    [tmp22, c25] = keyboardType(onChangeAutoCompleteVisibility.useState(0), 2);
    const tmp21 = keyboardType(onChangeAutoCompleteVisibility.useState(0), 2);
    const IncludeGameMentionsInAutocomplete = analyticsLocations(canMentionEveryone[29]).IncludeGameMentionsInAutocomplete;
    const setting1 = IncludeGameMentionsInAutocomplete.getSetting();
    const tmp24 = channel(canMentionEveryone[32])(text, selectionEnd, setting1, c22, setData);
    const anchor = tmp24.anchor;
    beginSearch = tmp24.beginSearch;
    const tmp25 = channel(canMentionEveryone[32])(text, selectionEnd, true, selectionStart, closure_32);
    const anchor2 = tmp25.anchor;
    const beginSearch2 = tmp25.beginSearch;
    closure_32 = onChangeAutoCompleteVisibility.useRef({ text: "", selectionEnd: 0 });
    const items4 = [activeOption, beginSearch, beginSearch2, chatInputRef, setting1, anchor, anchor2, selectionEnd, selectionStart, text];
    const effect = onChangeAutoCompleteVisibility.useEffect(() => {
      text = closure_32.current.text;
      selectionEnd = closure_32.current.selectionEnd;
      closure_32.current.text = text;
      closure_32.current.selectionEnd = selectionEnd;
      if (text.length >= 6) {
        if (null == activeOption) {
          if (selectionStart === selectionEnd) {
            if (" " === text[selectionEnd - 1]) {
              const obj3 = autocompleter_AutocompleteUtils;
              const result = obj3.findAutoInsertOnSpaceToken(tmp, tmp2, authStore5);
              if (null != result) {
                const obj4 = utils_AutocompleteUtilsDefault;
                const result1 = obj4.findAutoInsertOnSpaceMentionInlineAutocompleteType(result.trigger);
                if ("gameMentionInput" === result1) {
                  const tmp15 = setting1;
                  if (tmp15) {
                    if (null == anchor) {
                      const tmp32Result = autocompleter_AutocompleteUtils;
                      if (tmp32Result.isSpaceJustTypedAtCaret(text, selectionEnd, text, selectionEnd)) {
                        const current2 = chatInputRef.current;
                        current2.insertText(authStore6, result.tokenStart, false, undefined, selectionEnd);
                        beginSearch(result.tokenStart);
                      }
                    }
                  }
                } else if ("timestampMentionInput" === result1) {
                  if (null == anchor2) {
                    const tmp32Result2 = autocompleter_AutocompleteUtils;
                    if (tmp32Result2.isSpaceJustTypedAtCaret(text, selectionEnd, text, selectionEnd)) {
                      const current = chatInputRef.current;
                      current.insertText(closure_23, result.tokenStart, false, undefined, selectionEnd);
                      beginSearch2(result.tokenStart);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }, items4);
    const effect1 = onChangeAutoCompleteVisibility.useEffect(() => {
      let c0 = false;
      let result = activeCommand.addConditionalChangeListener(() => {
        let tmp = !c0;
        if (tmp) {
          let flag;
          if (activeCommand.isConnected()) {
            obj = analyticsLocations(canMentionEveryone[35]);
            const result = obj.initiateEmojiInteraction(c25.AutocompleteWrapperShown);
            flag = false;
          }
          tmp = flag;
        }
        return tmp;
      });
      return () => {
        c0 = true;
      };
    }, []);
    setData = channel(canMentionEveryone[36])(tmp20, 16).setData;
    const items5 = [setData];
    const imperativeHandle = onChangeAutoCompleteVisibility.useImperativeHandle(ref, () => ({ setChatInputHeight, setData }), items5);
    const items6 = [selectionStart, selectionEnd, text, activeCommand, optionStates, activeOption, canMentionEveryone, commandsDisabled, memo, stateFromStores, stateFromStores1, setting1, anchor, anchor2];
    const memo1 = onChangeAutoCompleteVisibility.useMemo(() => {
      let obj10;
      let obj12;
      let obj14;
      let obj8;
      let str6;
      let tmp50;
      let tmp51;
      let tmp52;
      let tmp = selectionStart;
      canMentionEveryone = selectionStart;
      if (null != text) {
        if (0 !== text.trim().length) {
          let applicationCommandOptionQueryOptions;
          let prefix;
          let tmp8;
          let tmp9;
          if (null != activeOption) {
            let tmp4 = canMentionEveryone;
            const obj2 = analyticsLocations(canMentionEveryone[37]);
            applicationCommandOptionQueryOptions = obj2.getApplicationCommandOptionQueryOptions(tmp82);
          } else {
            applicationCommandOptionQueryOptions = { canMentionEveryone, canMentionHere: canMentionEveryone, canMentionChannels: true, canMentionUsers: true, canMentionRoles: true, canMentionAnyGuildUser: false, canMentionNonMentionableRoles: false, canMentionOtherGlobals: true };
            const tmp2 = canMentionEveryone;
          }
          let tmp5;
          if (null != activeOption) {
            let tmp6 = optionStates;
            tmp5 = optionStates[tmp82.name];
          }
          if (null != activeCommand) {
            if (null != activeOption) {
              if (null != tmp5) {
                let num = tmp5.location;
                if (num == null) {
                  num = 0;
                }
                let num2 = tmp5.length;
                if (num2 == null) {
                  num2 = 0;
                }
                const sum = num + num2;
                let substr;
                if (tmp >= sum) {
                  const substring = str.substring;
                  const obj3 = analyticsLocations(canMentionEveryone[38]);
                  substr = substring(sum, obj3.getCommandOptionValueEnd(str, sum, tmp7));
                }
                query = substr;
                if (null == activeOption.choices) {
                  let CHOICES;
                  let choices;
                  let flag;
                  let str2;
                  let channelTypes;
                  if (!activeOption.autocomplete) {
                    const type = tmp82.type;
                    if (analyticsLocations(canMentionEveryone[39]).ApplicationCommandOptionType.BOOLEAN === type) {
                      prefix = "";
                      CHOICES = selectionEnd.CHOICES;
                      choices = nonStickerResults;
                      flag = true;
                      str2 = "";
                    } else if (analyticsLocations(canMentionEveryone[39]).ApplicationCommandOptionType.CHANNEL === type) {
                      prefix = context;
                      CHOICES = selectionEnd.CHANNELS;
                      channelTypes = tmp82.channelTypes;
                      flag = true;
                      str2 = context;
                    } else {
                      if (analyticsLocations(canMentionEveryone[39]).ApplicationCommandOptionType.ROLE !== type) {
                        if (analyticsLocations(canMentionEveryone[39]).ApplicationCommandOptionType.USER !== type) {
                          flag = false;
                        }
                      }
                      prefix = closure_18;
                      CHOICES = selectionEnd.MENTIONS;
                      flag = true;
                      str2 = closure_18;
                    }
                  }
                  tmp8 = substr;
                  tmp9 = CHOICES;
                  if (flag) {
                    let tmp75 = substr;
                    const startsWithResult = null != str2 && "" !== str2 && null != substr && substr.startsWith(str2);
                    if (startsWithResult) {
                      let str8 = "";
                      if (substr.length > str2.length) {
                        str8 = substr.substring(str2.length);
                      }
                      query = str8;
                      tmp75 = str8;
                    }
                    const optionValues = {};
                    const _Object2 = Object;
                    const entries = Object.entries(optionStates);
                    const item = entries.forEach((item) => {
                      let tmp;
                      let tmp2;
                      [tmp, tmp2] = item;
                      if (null != tmp2.optionValue) {
                        obj[tmp] = tmp2.optionValue;
                      }
                    });
                    const obj7 = { query: tmp75, autocompleteType: CHOICES, autocompleteSelectionStart: num + num2, queryOptions: obj8, showOptionValuesPicker: flag };
                    obj8 = { activeCommand, optionValues, isActiveApplicationCommand: flag, option: activeOption, choices, channelTypes };
                    const merged = Object.assign(applicationCommandOptionQueryOptions);
                    return obj7;
                  }
                }
                prefix = "";
                CHOICES = selectionEnd.CHOICES;
                choices = tmp82.choices;
                flag = true;
                str2 = "";
              }
            }
          }
          const tmp26 = setting1;
          if (tmp26) {
            if (null != anchor) {
              const obj9 = { query: str6.toLowerCase(), autocompleteType: selectionEnd.GAME_MENTIONS, autocompleteSelectionStart: anchor, queryOptions: obj10 };
              obj10 = {};
              str6 = text.slice(anchor + text.length, selectionEnd);
              const merged1 = Object.assign(applicationCommandOptionQueryOptions);
              return obj9;
            }
          }
          if (null != anchor2) {
            if (null == activeCommand) {
              const obj11 = { query: text.slice(anchor2 + selectionStart.length, selectionEnd), autocompleteType: selectionEnd.TIMESTAMPS, autocompleteSelectionStart: anchor2, queryOptions: obj12 };
              obj12 = {};
              const merged2 = Object.assign(applicationCommandOptionQueryOptions);
              return obj11;
            }
          }
          let sum1 = null;
          if (null != tmp5) {
            let num3 = tmp5.location;
            if (num3 == null) {
              num3 = 0;
            }
            let num4 = tmp5.length;
            if (num4 == null) {
              num4 = 0;
            }
            sum1 = num3 + num4;
          }
          while (true) {
            let found;
            let obj4 = analyticsLocations(canMentionEveryone[40]);
            let arr = text;
            let tmp36 = tmp8;
            let num5 = sum1;
            let result = obj4.isAutocompleteSeparatingBoundary(text, tmp);
            if (tmp31) {
              num5 = 0;
            }
            if (tmp === num5) {
              let substr1 = arr.slice(tmp, selectionEnd);
              let obj5 = analyticsLocations(canMentionEveryone[33]);
              prefix = obj5.getPrefix(substr1);
              let obj6 = analyticsLocations(canMentionEveryone[33]);
              query = obj6.getQuery(substr1);
              if (null != query) {
                if (prefix !== focused) {
                  tmp36 = query;
                  found = tmp9;
                }
              }
              let _Object = Object;
              let keys = Object.keys(memo);
              found = keys.find((item) => {
                let tmp = item !== AutocompleteTypes.SLASHES && item !== AutocompleteTypes.SLASHES_DISCOVERY;
                obj = memo[item];
                if (!tmp) {
                  tmp = null == activeCommand && !commandsDisabled;
                  const tmp4 = null == activeCommand && !commandsDisabled;
                }
                if (tmp) {
                  let matchesResult = undefined !== prefix;
                  const tmp6 = prefix;
                  if (matchesResult) {
                    matchesResult = undefined !== query;
                  }
                  if (matchesResult) {
                    matchesResult = obj.matches(tmp6, query, canMentionEveryone);
                  }
                  tmp = matchesResult;
                }
                return tmp;
              });
              tmp36 = query;
              tmp50 = tmp;
              tmp51 = query;
              tmp52 = found;
              if (null != found) {
                break;
              }
            } else {
              found = tmp9;
            }
            let diff = tmp - 1;
            canMentionEveryone = diff;
            let num6 = sum1;
            if (tmp31) {
              num6 = 0;
            }
            tmp = diff;
            tmp8 = tmp36;
            tmp9 = found;
            tmp51 = tmp36;
            tmp52 = found;
            tmp50 = diff;
            if (diff < num6) {
              break;
            }
          }
          let tmp55 = tmp51;
          if (tmp52 === selectionEnd.SLASHES) {
            let str5 = tmp51;
            const getTextBeforeFirstOption = analyticsLocations(canMentionEveryone[38]).getTextBeforeFirstOption;
            analyticsLocations(canMentionEveryone[38]);
            if (tmp51 == null) {
              str5 = "";
            }
            text = getTextBeforeFirstOption(str5).text;
            query = text;
            tmp55 = text;
          }
          const obj13 = { query: tmp55, autocompleteType: tmp52, autocompleteSelectionStart: tmp50, queryOptions: obj14 };
          obj14 = {};
          const merged3 = Object.assign(applicationCommandOptionQueryOptions);
          return obj13;
        }
      }
      return { query: null, autocompleteType: null, autocompleteSelectionStart: null };
    }, items6);
    const autocompleteType = memo1.autocompleteType;
    let query = memo1.query;
    queryOptions = memo1.queryOptions;
    const autocompleteSelectionStart = memo1.autocompleteSelectionStart;
    const showOptionValuesPicker = memo1.showOptionValuesPicker;
    const tmp30 = keyboardType(onChangeAutoCompleteVisibility.useState(null), 2);
    let tmp32 = tmp30[1];
    let closure_0 = tmp32;
    const first2 = tmp30[0];
    let tmp33 = keyboardType(onChangeAutoCompleteVisibility.useState(autocompleteType), 2);
    if (tmp33[0] !== autocompleteType) {
      tmp33[1](autocompleteType);
      let tmp32Result = tmp32(null);
    }
    const items7 = [first2, obj5.useCallback(f105302, [])];
    [tmp37, c39] = keyboardType(items7, 2);
    keyboardType(items7, 2);
    const tmp11Result9 = keyboardType(obj5.useState(null), 2);
    closure_0 = tmp40;
    const first3 = tmp11Result9[0];
    const tmp11Result10 = keyboardType(obj5.useState(autocompleteType), 2);
    if (tmp11Result10[0] !== autocompleteType) {
      let tmp42 = tmp11Result10[1](autocompleteType);
      tmp11Result9[1](null);
    }
    const items8 = [first3, obj5.useCallback(f105302, [])];
    [tmp45, c40] = keyboardType(items8, 2);
    keyboardType(items8, 2);
    const tmp11Result12 = keyboardType(obj5.useState(null), 2);
    let tmp48 = tmp11Result12[1];
    closure_0 = tmp48;
    const first4 = tmp11Result12[0];
    const tmp11Result13 = keyboardType(obj5.useState(autocompleteType), 2);
    if (tmp11Result13[0] !== autocompleteType) {
      let tmp50 = tmp11Result13[1](autocompleteType);
      tmp48(null);
    }
    const items9 = [first4, obj5.useCallback(f105302, [])];
    const tmp11Result14 = keyboardType(items9, 2);
    first5 = tmp11Result14[0];
    closure_42 = tmp11Result14[1];
    if (tmp37 == null) {
      tmp37 = tmp8;
    }
    closure_43 = tmp37;
    if (tmp45 == null) {
      tmp45 = timestampSearchHeaderHeight;
    }
    timestampSearchHeaderHeight = tmp45;
    const items10 = [anchor2];
    const effect2 = obj5.useEffect(() => {
      if (null != anchor2) {
        obj = RunAfterInteractionsUtils;
        obj.runAfterInteractions(TimestampSuggestionUtils.preloadTimestampParser);
      }
    }, items10);
    const items11 = [autocompleteType, query, queryOptions, memo];
    callback = obj5.useCallback((arg0) => {
      if (null != autocompleteType) {
        if (null != query) {
          obj = memo[tmp];
          const queryResultsResult = obj.queryResults(tmp2, queryOptions, arg0);
          const items = [];
          const items1 = [];
          const item = queryResultsResult.forEach((type) => {
            if (type.type === constants.STICKER) {
              items.push(type);
            } else {
              items1.push(type);
            }
          });
          const obj2 = { resultCount: queryResultsResult.length, stickerResults: items, nonStickerResults: items1, hasStickerResults: items.length > 0, hasNonStickerResults: items1.length > 0 };
          closure_18(obj2);
        }
      }
      closure_18(closure_36);
    }, items11);
    const items12 = [autocompleteType, callback, memo];
    const effect3 = obj5.useEffect(function() {
      let tmp2 = null;
      if (null != autocompleteType) {
        let stores;
        if (memo != null) {
          stores = memo[tmp].stores;
        }
        tmp2 = stores;
      }
      if (null != tmp2) {
        const self = this;
        const self2 = this;
        const batchedStoreListener = new analyticsLocations(canMentionEveryone[24]).BatchedStoreListener(tmp2, () => callback(false));
        batchedStoreListener.attach("AutocompleteWrapper");
        return () => batchedStoreListener.detach();
      }
    }, items12);
    const items13 = [callback];
    const effect4 = obj5.useEffect(() => {
      callback(true);
    }, items13);
    const items14 = [stickerResults, nonStickerResults];
    callback1 = obj5.useCallback(() => {
      obj = { numStickerResults: stickerResults.length, numEmojiResults: nonStickerResults.filter((type) => type.type === constants.EMOJI).length };
      return obj;
    }, items14);
    const items15 = [autocompleteType, focused, keyboardType, resultCount];
    memo2 = obj5.useMemo(() => {
      let tmp = resultCount > 0;
      if (!tmp) {
        tmp = autocompleteType === AutocompleteTypes.SLASHES || tmp2 === AutocompleteTypes.SLASHES_DISCOVERY;
      }
      if (!tmp) {
        tmp = autocompleteType === AutocompleteTypes.GAME_MENTIONS;
      }
      if (!tmp) {
        tmp = autocompleteType === AutocompleteTypes.TIMESTAMPS;
      }
      let tmp9 = focused;
      const SYSTEM = KeyboardTypes.KeyboardTypes.SYSTEM;
      const tmp8 = keyboardType;
      if (focused) {
        tmp9 = tmp;
      }
      if (tmp9) {
        tmp9 = tmp8 === SYSTEM;
      }
      return tmp9;
    }, items15);
    ref = obj5.useRef(false);
    const items16 = [autocompleteType, activeCommand];
    const effect5 = obj5.useEffect(() => {
      let tmp4 = autocompleteType === AutocompleteTypes.SLASHES;
      if (ref.current) {
        if (!tmp4) {
          tmp4 = tmp2 === tmp3.SLASHES_DISCOVERY;
        }
        if (!tmp4) {
          tmp4 = null != activeCommand;
        }
        ref.current = tmp4;
      } else {
        const tmp5 = tmp4 || tmp2 === tmp3.SLASHES_DISCOVERY || null != activeCommand;
        ref.current = tmp5;
        if (ref.current) {
          obj = AppAnalyticsUtils;
          obj.trackWithMetadata(map1.APPLICATION_COMMAND_TOP_OF_FUNNEL, { location: "slash_ui" });
        }
      }
    }, items16);
    const items17 = [autocompleteType];
    const effect6 = obj5.useEffect(() => autocompleteType === AutocompleteTypes.GAME_MENTIONS ? (() => {
      const getGameSearchSession = analyticsLocations(canMentionEveryone[43]).getGameSearchSession;
      analyticsLocations(canMentionEveryone[43]);
      const gameSearchSession = getGameSearchSession(analyticsLocations(canMentionEveryone[44]).GameSearchSurface.CHAT_MENTION, analyticsLocations(canMentionEveryone[45]).GameSearchFilterGroup.DEFAULT);
      return gameSearchSession.end();
    }) : undefined, items17);
    ref2 = obj5.useRef(null);
    const items18 = [onChangeAutoCompleteVisibility, activeCommand, memo2, autocompleteType, channel, callback1, setting1];
    const effect7 = obj5.useEffect(() => {
      let tmp18;
      if (onChangeAutoCompleteVisibility != null) {
        tmp4(memo2 || null != activeCommand);
      }
      if (memo2 || null != activeCommand) {
        let str = autocompleteType;
        const id = channel.id;
        const tmp7 = channel;
        if (autocompleteType == null) {
          str = "";
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + id + ":" + str;
        if (ref2.current !== combined) {
          ref2.current = combined;
          obj = { gameMentionsAvailable: tmp18 };
          const iOSTrackAutocompleteOpen = ChannelAutocompleteAnalytics.iOSTrackAutocompleteOpen;
          ChannelAutocompleteAnalytics;
          const merged = Object.assign(callback1());
          tmp18 = undefined;
          if (autocompleteType === AutocompleteTypes.MENTIONS) {
            tmp18 = setting1;
          }
          const result = iOSTrackAutocompleteOpen(tmp8, tmp7, obj);
        }
      } else {
        ref2.current = null;
      }
    }, items18);
    const tmp63 = tmp4(tmp2[21])({ ignoreKeyboard: true });
    const insets = tmp4(tmp2[22])({ includeKeyboardHeight: true }).insets;
    let diff = tmp63.height - insets.top - insets.bottom;
    diff1 = diff - tmp(tmp2[23]).NAV_BAR_HEIGHT - tmp22;
    const items19 = [autocompleteType, stickerResults.length, diff1, scaledTextLineHeight, tmp37, tmp45];
    memo3 = obj5.useMemo(() => {
      let sum2;
      const sum = scaledTextLineHeight + 24;
      const sum1 = c31 + sum;
      if (stickerResults.length > 0) {
        sum2 = sum1 + sum + Autocomplete.AUTOCOMPLETE_STICKER_NODE_SIZE + 12 + hairlineWidth;
      } else {
        sum2 = sum1;
        if (autocompleteType !== AutocompleteTypes.EMOJIS_AND_STICKERS) {
          let sum3;
          if (autocompleteType === AutocompleteTypes.GAME_MENTIONS) {
            sum3 = tmp2 + closure_43;
          } else if (autocompleteType === AutocompleteTypes.TIMESTAMPS) {
            sum3 = tmp2 + timestampSearchHeaderHeight;
          } else {
            sum3 = tmp2;
          }
          sum2 = sum3;
        }
      }
      return Math.min(diff1, sum2);
    }, items19);
    const tmp11Result15 = keyboardType(obj5.useState(null), 2);
    first6 = tmp11Result15[0];
    closure_53 = tmp69;
    const items20 = [resultCount, autocompleteType, memo2, hasStickerResults, hasNonStickerResults, nonStickerResults.length, memo3, first6, tmp45, context, token, scaledTextLineHeight, tmp37, first5];
    const memo4 = obj5.useMemo(() => {
      let num2;
      if (autocompleteType === AutocompleteTypes.EMOJIS_AND_STICKERS) {
        let tmp13 = token;
        let num7 = 0;
        if (0 !== nonStickerResults.length) {
          if (!context) {
            tmp13 = tmp === tmp2.EMOJIS_AND_STICKERS ? authStore4 : closure_17;
          }
          num7 = length * tmp13 + (length - 1) * hairlineWidth;
        }
        let sum = num7;
        if (hasNonStickerResults) {
          sum = num7 + (scaledTextLineHeight + 24);
        }
        let tmp18 = hasStickerResults;
        let sum2 = sum;
        if (hasStickerResults) {
          const sum1 = scaledTextLineHeight + 24;
          sum2 = sum + (sum1 + Autocomplete.AUTOCOMPLETE_STICKER_NODE_SIZE + 12);
        }
        if (tmp18) {
          tmp18 = tmp15;
        }
        let sum3 = sum2;
        if (tmp18) {
          sum3 = sum2 + hairlineWidth;
        }
        num2 = sum3;
      } else {
        const tmp3 = autocompleteType === AutocompleteTypes.SLASHES || autocompleteType === AutocompleteTypes.SLASHES_DISCOVERY;
        if (tmp3) {
          let num6 = first6;
          if (first6 == null) {
            num6 = 0;
          }
          num2 = num6;
        } else {
          num2 = 0;
          if (null != autocompleteType) {
            let sum4;
            let num3 = 0;
            if (resultCount > 0) {
              let tmp6 = first5;
              if (first5 == null) {
                let tmp7 = token;
                let num4 = 0;
                if (0 !== resultCount) {
                  if (!context) {
                    tmp7 = tmp === tmp2.EMOJIS_AND_STICKERS ? authStore4 : closure_17;
                  }
                  num4 = tmp5 * tmp7 + (tmp5 - 1) * hairlineWidth;
                }
                tmp6 = num4;
              }
              num3 = tmp6;
            }
            if (autocompleteType === AutocompleteTypes.GAME_MENTIONS) {
              sum4 = num3 + closure_43;
            } else {
              sum4 = num3;
              if (autocompleteType === AutocompleteTypes.TIMESTAMPS) {
                sum4 = num3 + timestampSearchHeaderHeight;
              }
            }
            num2 = sum4;
          }
        }
      }
      let num12 = 0;
      const _Math = Math;
      if (memo2) {
        num12 = num2;
      }
      return min(num12, memo3);
    }, items20);
    closure_54 = tmp71;
    let tmpResult = tmp(tmp2[25]);
    const token1 = tmpResult.useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS);
    const tmpResult6 = tmp(tmp2[25]);
    const token2 = tmpResult6.useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH);
    const tmpResult7 = tmp(tmp2[25]);
    const token3 = tmpResult7.useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH);
    const tmpResult8 = tmp(tmp2[25]);
    const token4 = tmpResult8.useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_HORIZONTAL);
    const tmpResult9 = tmp(tmp2[25]);
    token5 = tmpResult9.useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM);
    let num = 0;
    const tmp77 = autocompleteType;
    if (memo4 > 0) {
      num = token2;
    }
    let num2 = 0;
    if (memo4 > 0) {
      num2 = token3;
    }
    if (memo4 > 0) {
      num3 = token5;
    } else {
      num3 = 0;
      if (null != activeCommand) {
        num3 = 0;
      }
    }
    const tmp77Result = tmp77(token1, num, num2, token4, num3);
    let prop = null;
    const tmpResult10 = tmp(tmp2[18]);
    if (tmpResult10.isIOS()) {
      prop = tmp77Result.autocompletePositionRelative;
    }
    const items21 = [tmp71, token5];
    const memo5 = obj5.useMemo(() => {
      let tmp;
      if (closure_54) {
        tmp = { marginTop: token5 };
        obj = { marginTop: token5 };
      }
      return tmp;
    }, items21);
    const items22 = [analyticsLocations, beginSearch, beginSearch2, channel, chatInputRef];
    const tmp81 = tmp4(tmp2[47])(memo4, screenIndex);
    callback2 = obj5.useCallback((type, tokenStart, arg2) => {
      if (type.type !== unpackModuleId.EMOJI_PREMIUM_UPSELL) {
        if (type.type === unpackModuleId.GLOBAL) {
          if ("gameMentionInput" === type.inlineAutocompleteType) {
            const current5 = chatInputRef.current;
            current5.insertText(authStore6, tokenStart, false);
            beginSearch(tokenStart);
          }
        }
        if (type.type === unpackModuleId.GLOBAL) {
          if ("timestampMentionInput" === type.inlineAutocompleteType) {
            const current4 = chatInputRef.current;
            current4.insertText(closure_23, tokenStart, false);
            beginSearch2(tokenStart);
          }
        }
        const obj3 = autocompleter_AutocompleteUtils;
        const autocompleteResultText = obj3.getAutocompleteResultText(type, channel);
        const current = chatInputRef.current;
        const applicationCommandManager = current.getApplicationCommandManager();
        let tmp13;
        const tmp10 = channel;
        const tmp8 = require;
        if (type.type === unpackModuleId.GAME_MENTION) {
          if (applicationCommandManager != null) {
            applicationCommandManager.addGameMention(type.game);
          }
          let gameMentionNode;
          if (applicationCommandManager != null) {
            gameMentionNode = applicationCommandManager.buildGameMentionNode(type.game);
          }
          let tmp17;
          if (null != gameMentionNode) {
            const items = [gameMentionNode];
            tmp17 = items;
          }
          tmp13 = tmp17;
        }
        let tmp18 = autocompleteResultText;
        let tmp19 = tmp13;
        if (type.type === unpackModuleId.TIMESTAMP_MENTION) {
          tmp18 = autocompleteResultText;
          tmp19 = tmp13;
          if (null != applicationCommandManager) {
            const tmp8Result = tmp8(8600);
            const result = tmp8Result.formatTimestampMention(type.mention);
            tmp18 = autocompleteResultText;
            tmp19 = tmp13;
            if (null != result) {
              const addTimestampMentionResult = applicationCommandManager.addTimestampMention(result.formatted, type.mention);
              const items1 = [applicationCommandManager.buildTimestampMentionNode(addTimestampMentionResult)];
              tmp18 = addTimestampMentionResult;
              tmp19 = items1;
            }
          }
        }
        let result1;
        if (applicationCommandManager != null) {
          result1 = applicationCommandManager.setAutoCompleteResult(tmp10.id, tmp18, arg2, type);
        }
        if (!result1) {
          const current2 = tmp12.current;
          current2.insertText(tmp18, tokenStart, type.type !== unpackModuleId.STICKER, tmp19);
          if (type.type === unpackModuleId.STICKER) {
            const current3 = tmp12.current;
            current3.handleSelectSticker(type.sticker, tokenStart);
          }
        }
      } else {
        const obj2 = { initialUpsellKey: stickerResults.EMOJI_AUTOCOMPLETE, analyticsLocations };
        obj = PremiumUpsellUtilsDefault;
        const result2 = obj.handleShowUpsellAlert(obj2);
      }
    }, items22);
    const items23 = [chatInputRef, optionStates, channel];
    const items24 = [autocompleteSelectionStart, autocompleteType, callback1, channel, callback2, showOptionValuesPicker];
    const callback3 = obj5.useCallback((type) => {
      const current = chatInputRef.current;
      const applicationCommandManager = current.getApplicationCommandManager();
      if (type.type === Server.ApplicationCommandOptionType.ATTACHMENT) {
        let success;
        const id = channel.id;
        if (optionStates[type.name].lastValidationResult != null) {
          success = lastValidationResult.success;
        }
        if (success) {
          const tmpResult = application_commands_ApplicationCommandUtils;
          const result = tmpResult.openCommandAttachmentPreview(applicationCommandManager, id, type.name);
        } else if (applicationCommandManager != null) {
          const result1 = applicationCommandManager.insertOrJumpCommandOption(type);
        }
      } else {
        let length;
        if (applicationCommandManager != null) {
          length = applicationCommandManager.props.text.length;
        }
        if (applicationCommandManager != null) {
          const result2 = applicationCommandManager.insertOrJumpCommandOption(type, length);
        }
      }
    }, items23);
    callback4 = obj5.useCallback((type) => {
      let id;
      let id1;
      if (type.type === unpackModuleId.GLOBAL) {
        if ("gameMentionInput" === type.inlineAutocompleteType) {
          type = tmp.GAME_MENTION;
        }
        obj = { selectionType: type, stickerId: id, gameId: id1 };
        id = null;
        const iOSTrackAutocompleteSelect = ChannelAutocompleteAnalytics.iOSTrackAutocompleteSelect;
        ChannelAutocompleteAnalytics;
        const tmp5 = autocompleteType;
        const tmp6 = channel;
        if (type.type === unpackModuleId.STICKER) {
          id = type.sticker.id;
        }
        id1 = null;
        if (type.type === unpackModuleId.GAME_MENTION) {
          id1 = type.game.id;
        }
        const merged = Object.assign(callback1());
        const result = iOSTrackAutocompleteSelect(tmp5, tmp6, obj);
        if (type.type === unpackModuleId.GAME_MENTION) {
          const getGameSearchSession = GameSearchSession.getGameSearchSession;
          GameSearchSession;
          const gameSearchSession = getGameSearchSession(tmp2(9611).GameSearchSurface.CHAT_MENTION, tmp2(9144).GameSearchFilterGroup.DEFAULT);
          gameSearchSession.select(type.game.id);
        }
        let num = autocompleteSelectionStart;
        const tmp16 = callback2;
        if (autocompleteSelectionStart == null) {
          num = 0;
        }
        tmp16(type, num, showOptionValuesPicker);
      }
      if (type.type === unpackModuleId.GLOBAL) {
        if ("timestampMentionInput" === type.inlineAutocompleteType) {
          type = tmp.TIMESTAMP_MENTION;
        }
      }
      type = type.type;
    }, items24);
    const tmp11Result16 = keyboardType(obj5.useState(null), 2);
    first7 = tmp11Result16[0];
    closure_59 = tmp11Result16[1];
    ref1 = obj5.useRef(null);
    ref2 = obj5.useRef(null);
    const items25 = [query, autocompleteType, ];
    let name;
    const useEffect = obj5.useEffect;
    if (activeOption != null) {
      name = activeOption.name;
    }
    items25[2] = name;
    const effect8 = useEffect(() => {
      const current = ref1.current;
      if (current != null) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
      const current2 = ref2.current;
      if (current2 != null) {
        current2.scrollToOffset({ offset: 0, animated: false });
      }
    }, items25);
    const items26 = [autocompleteType, callback4, first7, channel, activeCommand];
    const callback5 = obj5.useCallback((item) => {
      let tmp65;
      item = item.item;
      const type = item.type;
      if (scaledTextLineHeight.USER === type) {
        const obj2 = {
          guildId: channel.guild_id,
          onPress() {
              return callback4(item);
            }
        };
        const User = channel(canMentionEveryone[20]).User;
        const merged = Object.assign(item);
        return setting1(User, obj2);
      } else if (scaledTextLineHeight.GLOBAL === type) {
        const obj3 = {
          onPress() {
              return callback4(item);
            }
        };
        const Global = channel(canMentionEveryone[20]).Global;
        const merged1 = Object.assign(item);
        return setting1(Global, obj3);
      } else if (scaledTextLineHeight.ROLE === type) {
        const obj4 = {
          onPress() {
              return callback4(item);
            },
          showDescription: tmp65
        };
        const Role = channel(canMentionEveryone[20]).Role;
        const merged2 = Object.assign(item);
        tmp65 = autocompleteType === selectionEnd.MENTIONS;
        const tmp57 = setting1;
        if (tmp65) {
          tmp65 = null == activeCommand;
        }
        return tmp57(Role, obj4);
      } else if (scaledTextLineHeight.CHANNEL === type) {
        const obj5 = {
          onPress() {
              return callback4(item);
            }
        };
        const Channel = channel(canMentionEveryone[20]).Channel;
        const merged3 = Object.assign(item);
        return setting1(Channel, obj5);
      } else if (scaledTextLineHeight.EMOJI === type) {
        const obj6 = {
          onPress() {
              return callback4(item);
            }
        };
        const Emoji = channel(canMentionEveryone[20]).Emoji;
        const merged4 = Object.assign(item);
        return setting1(Emoji, obj6);
      } else if (scaledTextLineHeight.EMOJI_PREMIUM_UPSELL === type) {
        const obj7 = {
          onPress() {
              return callback4(item);
            }
        };
        const EmojiPremiumUpsell = channel(canMentionEveryone[20]).EmojiPremiumUpsell;
        const merged5 = Object.assign(item);
        return setting1(EmojiPremiumUpsell, obj7);
      } else if (scaledTextLineHeight.CHOICE === type) {
        const obj8 = {
          onPress() {
              return callback4(item);
            }
        };
        const Choice = channel(canMentionEveryone[20]).Choice;
        const merged6 = Object.assign(item);
        return setting1(Choice, obj8);
      } else if (scaledTextLineHeight.CHOICE_LOADING === type) {
        return setting1(channel(canMentionEveryone[20]).ChoiceLoading, {});
      } else if (scaledTextLineHeight.STICKER === type) {
        const obj9 = {
          onPress() {
              return callback4(item);
            },
          onLongPress() {
              return closure_59(item.sticker.id);
            },
          isInteracting: first7 === item.sticker.id
        };
        const Sticker = channel(canMentionEveryone[20]).Sticker;
        const merged7 = Object.assign(item);
        const _HermesInternal = HermesInternal;
        return setting1(Sticker, obj9, "" + item.sticker.id + "-" + first7 === item.sticker.id);
      } else if (scaledTextLineHeight.GAME_MENTION === type) {
        const obj10 = {
          onPress() {
              return callback4(item);
            }
        };
        const Game = channel(canMentionEveryone[20]).Game;
        const merged8 = Object.assign(item);
        return setting1(Game, obj10);
      } else if (scaledTextLineHeight.TIMESTAMP_MENTION === type) {
        const obj11 = {
          onPress() {
              return callback4(item);
            }
        };
        const Timestamp = channel(canMentionEveryone[20]).Timestamp;
        const merged9 = Object.assign(item);
        return setting1(Timestamp, obj11);
      } else if (scaledTextLineHeight.LABEL === type) {
        obj = {};
        const Label = channel(canMentionEveryone[20]).Label;
        const merged10 = Object.assign(item);
        return setting1(Label, obj);
      } else {
        return null;
      }
    }, items26);
    const items27 = [tmp77Result.autocomplete, { maxHeight: memo3 }];
    let obj8 = { style: items28, children: items38 };
    items28 = [tmp77Result.autocompleteWrapper, prop];
    let obj9 = { style: items29, children: tmp92Result4 };
    items29 = [tmp77Result.autocompleteContainer, tmp81];
    tmp92Result4 = null != autocompleteType;
    const View = tmp4(tmp2[51]).View;
    if (tmp92Result4) {
      let tmp94Result = autocompleteType === selectionEnd.SLASHES_DISCOVERY;
      if (tmp94Result) {
        let obj10 = {
          channel,
          onPressSlashItem(command, section, visualSection) {
                let num = autocompleteSelectionStart;
                obj = { command, section, type: unpackModuleId.SLASH, visualSection, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.DISCOVERY };
                const tmp = callback2;
                if (autocompleteSelectionStart == null) {
                  num = 0;
                }
                tmp(obj, num);
              },
          onHeightChange: tmp69,
          canOnlyUseTextCommands
        };
        tmp94Result = tmp94(tmp4(tmp2[52]), obj10);
      }
      const items30 = [tmp94Result, , , , , ];
      let tmp94Result6 = autocompleteType === tmp97.SLASHES;
      if (tmp94Result6) {
        let obj11 = {
          channel,
          query: str,
          onPressCommandItem(commands, found) {
                let num = autocompleteSelectionStart;
                obj = { command: commands, section: found, type: unpackModuleId.SLASH, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.DISCOVERY, query };
                const tmp = callback2;
                if (autocompleteSelectionStart == null) {
                  num = 0;
                }
                tmp(obj, num);
              },
          style: items31,
          ItemSeparatorComponent: tmp(tmp2[33]).getItemSeparator,
          onCommandsChange(commands) {
                let tmp3 = token;
                let num = 0;
                const tmp = closure_53;
                if (0 !== commands) {
                  if (!context) {
                    tmp3 = tmp2 === AutocompleteTypes.EMOJIS_AND_STICKERS ? authStore4 : closure_17;
                  }
                  num = commands * tmp3 + (commands - 1) * hairlineWidth;
                }
                tmp(num);
              }
        };
        str = query;
        const tmp4Result = tmp4(tmp2[54]);
        if (query == null) {
          str = "";
        }
        items31 = [];
        let num4 = 0;
        items31[HermesBuiltin.arraySpread(items31, items27, 0)] = tmp77Result.applicationCommands;
        tmp94Result6 = tmp94(tmp4Result, obj11);
      }
      items30[1] = tmp94Result6;
      let tmp92Result3 = autocompleteType === tmp97.EMOJIS_AND_STICKERS;
      if (tmp92Result3) {
        let tmp92Result = hasStickerResults;
        if (tmp92Result) {
          let obj12 = { children: items33 };
          let obj13 = { style: items32, children: setting1(Text, obj15) };
          items32 = [tmp77Result.sectionTitle, ];
          let obj14 = { height: scaledTextLineHeight };
          items32[1] = obj14;
          obj15 = { variant: tmp6, children: intl.format(tmp(tmp2[56]).t.uferGG, obj16) };
          Text = tmp(tmp2[55]).Text;
          intl = tmp(tmp2[56]).intl;
          obj16 = { prefix: query };
          items33 = [setting1(chatInputRef, obj13), ];
          const obj17 = { ref: ref2, maintainVisibleContentPosition: { disabled: true }, horizontal: true, style: items34, contentContainerStyle: tmp77Result.stickersAutocompleteContent, keyExtractor: query, data: stickerResults, extraData: first7, renderItem: callback5, showsHorizontalScrollIndicator: false, contentInset: { right: 12 } };
          items34 = [items27, tmp77Result.stickersAutocompleteList];
          items33[1] = setting1(tmp(tmp2[57]).FlashList, obj17);
          tmp92Result = tmp92(tmp96, obj12);
        }
        const items35 = [tmp92Result, , ];
        if (hasStickerResults) {
          hasStickerResults = hasNonStickerResults;
        }
        if (hasStickerResults) {
          const obj18 = { style: tmp77Result.sectionDivider };
          hasStickerResults = tmp94(tmp4(tmp2[58]), obj18);
        }
        items35[1] = hasStickerResults;
        let tmp94Result7 = hasNonStickerResults;
        if (tmp94Result7) {
          const obj19 = { style: items36, children: setting1(Text2, obj21) };
          items36 = [tmp77Result.sectionTitle, ];
          const obj20 = { height: scaledTextLineHeight };
          items36[1] = obj20;
          obj21 = { variant: tmp6, children: format(ksAVYt, obj22) };
          Text2 = tmp(tmp2[55]).Text;
          const intl2 = tmp(tmp2[56]).intl;
          format = intl2.format;
          let _HermesInternal = HermesInternal;
          let str2 = "";
          obj22 = { prefix: "" + memo + query };
          ksAVYt = tmp(tmp2[56]).t.ksAVYt;
          tmp94Result7 = tmp94(tmp93, obj19);
        }
        const obj23 = { children: items35 };
        items35[2] = tmp94Result7;
        tmp92Result3 = tmp92(tmp96, obj23);
      }
      items30[2] = tmp92Result3;
      let tmp94Result8 = autocompleteType === tmp97.GAME_MENTIONS;
      if (tmp94Result8) {
        const obj24 = {
          onLayout(nativeEvent) {
                return _undefined(nativeEvent.nativeEvent.layout.height);
              },
          children: setting1(tmp4(tmp2[59]), {})
        };
        tmp94Result8 = tmp94(tmp93, obj24);
      }
      items30[3] = tmp94Result8;
      let tmp94Result9 = autocompleteType === tmp97.TIMESTAMPS;
      if (tmp94Result9) {
        const obj25 = {
          onLayout(nativeEvent) {
                return _undefined2(nativeEvent.nativeEvent.layout.height);
              },
          children: setting1(tmp4(tmp2[28]), {})
        };
        tmp94Result9 = tmp94(tmp93, obj25);
      }
      items30[4] = tmp94Result9;
      if (hasNonStickerResults) {
        const obj26 = {
          ref: ref1,
          maintainVisibleContentPosition: { disabled: true },
          style: items37,
          keyExtractor: query,
          getItemType(type) {
                return type.type;
              },
          data: nonStickerResults,
          renderItem: callback5,
          ItemSeparatorComponent: tmp(tmp2[33]).getItemSeparator,
          onContentSizeChange(arg0, arg1) {
                return closure_42(arg1);
              }
        };
        items37 = [items27, tmp77Result.resultsList];
        const FlashList = tmp(tmp2[57]).FlashList;
        hasNonStickerResults = tmp94(FlashList, obj26);
      }
      const obj27 = { children: items30 };
      items30[5] = hasNonStickerResults;
      tmp92Result4 = tmp92(tmp96, obj27);
    }
    items38 = [setting1(View, obj9), ];
    let tmp94Result10 = null != activeCommand && !commandsDisabled;
    if (tmp94Result10) {
      const obj28 = { style: memo5, children: setting1(tmp4(tmp2[60]), obj29) };
      obj29 = { command: activeCommand, section: activeSection, guildId: channel.guild_id, onPressOption: callback3, currentOption: activeOption, optionStates };
      tmp94Result10 = tmp94(tmp93, obj28);
    }
    items38[1] = tmp94Result10;
    const obj30 = { style: tmp77Result.autocompletePositionRelative, children: anchor(chatInputRef, obj8) };
    return setting1(chatInputRef, obj30);
  }
}
ACWrapper.displayName = "AutocompleteWrapper";
const memoResult = react.memo(ACWrapper);
let result = size.fileFinishedImporting("modules/autocompleter/native/AutocompleteWrapper.tsx");

export default memoResult;
