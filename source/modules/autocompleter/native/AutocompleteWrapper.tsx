// Module ID: 11458
// Function ID: 89109
// Name: isSlashAutocompleteType
// Dependencies: [57, 31, 27, 7021, 4991, 4808, 5035, 653, 4566, 9594, 4567, 9676, 1852, 33, 4130, 477, 689, 11459, 1450, 5160, 5084, 566, 3834, 9921, 11462, 3803, 5164, 9675, 5728, 11463, 9363, 6753, 1881, 9593, 11146, 1555, 4324, 11464, 1324, 4528, 11465, 8028, 11366, 1273, 3991, 11466, 6755, 11473, 4126, 1212, 7191, 11474, 11475, 2]

// Module 11458 (isSlashAutocompleteType)
import _slicedToArray from "_slicedToArray";
import importAllResult from "_createForOfIteratorHelperLoose";
import get_ActivityIndicator from "toGameResults";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import ME from "ME";
import { BOOLEAN_CHOICES } from "TRUE_OPTION_NAME";
import AUTOCOMPLETE_ROW_HEIGHT from "AUTOCOMPLETE_ROW_HEIGHT";
import regExp from "regExp";
import { AutocompleteTypes } from "AutocompleteTypes";
import { EmojiInteractionPoint } from "set";
import jsxProd from "getMentionTextWithUser";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_24;
let closure_25;
let closure_26;
let closure_5;
let closure_6;
const require = arg1;
function isSlashAutocompleteType(arg0) {
  let tmp = arg0 === AutocompleteTypes.SLASHES;
  if (!tmp) {
    tmp = arg0 === AutocompleteTypes.SLASHES_DISCOVERY;
  }
  return tmp;
}
function getAutocompletesHeight(arg0, arg1, arg2, arg3) {
  let num = 0;
  if (0 !== arg0) {
    if (arg2) {
      num = arg0 * arg3 + (arg0 - 1) * hairlineWidth;
    }
  }
  return num;
}
function getStickersItemLayout(arg0, index) {
  const obj = { length: require(11459) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_SIZE };
  const result = index * (require(11459) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_SIZE + require(11459) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_MARGIN);
  const diff = index - 1;
  obj.offset = result + diff * require(11459) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_MARGIN;
  obj.index = index;
  return obj;
}
({ View: closure_5, FlatList: closure_6 } = get_ActivityIndicator);
({ AutoCompleteResultTypes: closure_11, WHITESPACE_RE: closure_12, AnalyticEvents: closure_13, UpsellTypes: closure_14 } = ME);
({ AUTOCOMPLETE_EMOJI_ROW_HEIGHT: closure_16, AUTOCOMPLETE_ROW_HEIGHT: closure_17 } = AUTOCOMPLETE_ROW_HEIGHT);
({ MENTION_SENTINEL: closure_18, CHANNEL_SENTINEL: closure_19, EMOJI_SENTINEL: closure_20, GAME_MENTION_INPUT_PREFIX: closure_21 } = regExp);
({ jsx: closure_24, Fragment: closure_25, jsxs: closure_26 } = jsxProd);
const hairlineWidth = get_ActivityIndicator.StyleSheet.hairlineWidth;
let closure_28 = _createForOfIteratorHelperLoose.createStyles((borderRadius, borderWidth, borderTopWidth, marginHorizontal, marginBottom) => {
  let obj = { autocompletePositionRelative: { position: "relative" } };
  obj = {};
  let obj2 = require(477) /* set */;
  let str = "absolute";
  if (obj2.isAndroid()) {
    str = "relative";
  }
  obj.position = str;
  obj.marginHorizontal = marginHorizontal;
  obj.marginBottom = marginBottom;
  obj.autocompleteWrapper = obj;
  obj.autocompleteWrapperAbsolute = { left: 0, right: 0, bottom: 0 };
  obj = { backgroundColor: importDefault(689).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, borderRadius, borderWidth, borderTopWidth, borderColor: importDefault(689).colors.MOBILE_FLOATING_ACCESSORY_BORDER, overflow: "hidden" };
  obj.autocompleteContainer = obj;
  const obj1 = { flexGrow: 0, flexShrink: 1, backgroundColor: importDefault(689).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
  obj.autocomplete = obj1;
  obj2 = { backgroundColor: importDefault(689).colors.MOBILE_FLOATING_ACCESSORY_BORDER, marginLeft: -16 };
  obj.sectionDivider = obj2;
  const obj3 = { backgroundColor: importDefault(689).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, paddingLeft: 12, marginVertical: 12, justifyContent: "center" };
  obj.sectionTitle = obj3;
  obj.stickersAutocompleteList = { paddingLeft: 12 - require(11459) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_MARGIN, marginBottom: 12, height: require(11459) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_SIZE, flexShrink: 0 };
  const obj4 = { paddingLeft: 12 - require(11459) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_MARGIN, marginBottom: 12, height: require(11459) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_SIZE, flexShrink: 0 };
  obj.newTag = { backgroundColor: importDefault(689).colors.BADGE_BACKGROUND_BRAND };
  return obj;
});
let obj = { resultCount: 0, stickerResults: [], nonStickerResults: [], hasStickerResults: false, hasNonStickerResults: false };
const forwardRefResult = importAllResult.forwardRef((analyticsLocations) => {
  let canOnlyUseTextCommands;
  let screenIndex;
  analyticsLocations = analyticsLocations.analyticsLocations;
  const channel = analyticsLocations.channel;
  let canMentionEveryone = analyticsLocations.canMentionEveryone;
  const keyboardType = analyticsLocations.keyboardType;
  const onChangeAutoCompleteVisibility = analyticsLocations.onChangeAutoCompleteVisibility;
  const commandsDisabled = analyticsLocations.commandsDisabled;
  const chatInputRef = analyticsLocations.chatInputRef;
  let c29;
  let anchor;
  let beginSearch;
  let autocompleteType;
  let query;
  let queryOptions;
  let autocompleteSelectionStart;
  let showOptionValuesPicker;
  let callback;
  let callback1;
  let memo2;
  let closure_40;
  let closure_41;
  let diff1;
  let memo3;
  let first2;
  let c45;
  let chatInputFloating;
  let c47;
  let token5;
  let c49;
  let isScreenReaderEnabled;
  let callback2;
  let callback4;
  let first3;
  let closure_54;
  ({ canOnlyUseTextCommands, screenIndex } = analyticsLocations);
  let obj = analyticsLocations(canMentionEveryone[21]);
  let items = [optionStates];
  let stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ optionStates: optionStates.getOptionStates(channel.id), activeOption: optionStates.getActiveOption(channel.id), activeCommand: optionStates.getActiveCommand(channel.id), activeSection: optionStates.getActiveCommandSection(channel.id) }));
  optionStates = stateFromStoresObject.optionStates;
  const activeOption = stateFromStoresObject.activeOption;
  const activeCommand = stateFromStoresObject.activeCommand;
  let obj1 = analyticsLocations(canMentionEveryone[22]);
  const token = obj1.useToken(channel(canMentionEveryone[16]).modules.mobile.TABLE_ROW_HEIGHT);
  let obj2 = analyticsLocations(canMentionEveryone[23]);
  const scaledTextLineHeight = obj2.useScaledTextLineHeight("text-sm/semibold");
  const tmp4 = channel(canMentionEveryone[24])();
  let closure_12 = tmp4;
  const IncludeStickersInAutocomplete = analyticsLocations(canMentionEveryone[25]).IncludeStickersInAutocomplete;
  const setting = IncludeStickersInAutocomplete.getSetting();
  const tmp6 = keyboardType(onChangeAutoCompleteVisibility.useState(c29), 2);
  const first = tmp6[0];
  const resultCount = first.resultCount;
  const stickerResults = first.stickerResults;
  const nonStickerResults = first.nonStickerResults;
  let hasStickerResults = first.hasStickerResults;
  let hasNonStickerResults = first.hasNonStickerResults;
  let closure_19 = tmp6[1];
  let obj3 = analyticsLocations(canMentionEveryone[21]);
  let items1 = [activeOption];
  const stateFromStores = obj3.useStateFromStores(items1, () => activeOption.loadState);
  let obj4 = analyticsLocations(canMentionEveryone[21]);
  const items2 = [token];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => token.loadState);
  const context = onChangeAutoCompleteVisibility.useContext(analyticsLocations(canMentionEveryone[26]).RedesignCompatContext);
  const items3 = [channel, setting];
  const memo = onChangeAutoCompleteVisibility.useMemo(() => analyticsLocations(canMentionEveryone[27]).getAutocompleteOptions(channel, true, setting), items3);
  let tmp12 = keyboardType(onChangeAutoCompleteVisibility.useState({ focused: false, text: "", selectionStart: 0, selectionEnd: 0 }), 2);
  const first1 = tmp12[0];
  const focused = first1.focused;
  let text = first1.text;
  const EmojiInteractionPoint = text;
  const selectionStart = first1.selectionStart;
  const selectionEnd = first1.selectionEnd;
  callback = tmp12[1];
  const tmp14 = keyboardType(onChangeAutoCompleteVisibility.useState(0), 2);
  let closure_27 = tmp14[1];
  let obj5 = analyticsLocations(canMentionEveryone[28]);
  const gameMentionsAutocompleteConfig = obj5.getGameMentionsAutocompleteConfig("AutocompleteWrapper game search");
  c29 = tmp16;
  let tmp17 = channel(canMentionEveryone[29])(text, selectionEnd, chatInputRef, gameMentionsAutocompleteConfig.enabled && !gameMentionsAutocompleteConfig.combineMentionAutocomplete, memo);
  anchor = tmp17.anchor;
  beginSearch = tmp17.beginSearch;
  const effect = onChangeAutoCompleteVisibility.useEffect(() => {
    let c0 = false;
    let result = activeCommand.addConditionalChangeListener(() => {
      let tmp = !c0;
      if (!c0) {
        let flag;
        if (activeCommand.isConnected()) {
          const result = analyticsLocations(canMentionEveryone[30]).initiateEmojiInteraction(text.AutocompleteWrapperShown);
          flag = false;
          const obj = analyticsLocations(canMentionEveryone[30]);
        }
        tmp = flag;
      }
      return tmp;
    });
    return () => {
      let c0 = true;
    };
  }, []);
  const imperativeHandle = onChangeAutoCompleteVisibility.useImperativeHandle(arg1, onChangeAutoCompleteVisibility.useMemo(() => {
    let c0 = -1;
    return () => ({
      setChatInputHeight: outer1_27,
      setData(channelIds, combined) {
        let closure_0;
        let closure_1;
        let closure_2;
        let _slicedToArray;
        ({ focused: closure_0, text: closure_1, selectionStart: closure_2, selectionEnd: _slicedToArray } = channelIds);
        if (-1 !== outer1_0) {
          const _clearTimeout = clearTimeout;
          clearTimeout(outer1_0);
        }
        outer1_0 = setTimeout(() => {
          outer3_26(() => { ... });
        }, 16);
      }
    });
  }, []));
  const items4 = [selectionStart, selectionEnd, text, activeCommand, optionStates, activeOption, canMentionEveryone, commandsDisabled, memo, stateFromStores, stateFromStores1, gameMentionsAutocompleteConfig.enabled && !gameMentionsAutocompleteConfig.combineMentionAutocomplete, anchor];
  const memo1 = onChangeAutoCompleteVisibility.useMemo(() => {
    let text;
    let tmp = selectionStart;
    let canMentionEveryone = selectionStart;
    if (null != text) {
      if (0 !== text.trim().length) {
        if (null != activeOption) {
          let obj1 = analyticsLocations(canMentionEveryone[31]);
          let applicationCommandOptionQueryOptions = obj1.getApplicationCommandOptionQueryOptions(activeOption);
        } else {
          applicationCommandOptionQueryOptions = { canMentionEveryone, canMentionHere: canMentionEveryone, canMentionChannels: true, canMentionUsers: true, canMentionRoles: true, canMentionAnyGuildUser: false, canMentionNonMentionableRoles: false, canMentionOtherGlobals: true, canMentionGames: true };
        }
        let tmp7;
        if (null != activeOption) {
          tmp7 = optionStates[activeOption.name];
        }
        if (null != activeCommand) {
          if (null != activeOption) {
            if (null != tmp7) {
              const _location = tmp7.location;
              let num2 = 0;
              if (null != _location) {
                num2 = _location;
              }
              let num3 = 0;
              if (null != tmp7.length) {
                num3 = length;
              }
              let substr;
              if (selectionStart >= num2 + num3) {
                substr = text.substring(num2 + num3, selectionStart);
              }
              let query = substr;
              if (null == activeOption.choices) {
                if (!activeOption.autocomplete) {
                  const type = activeOption.type;
                  if (analyticsLocations(canMentionEveryone[32]).ApplicationCommandOptionType.BOOLEAN === type) {
                    let prefix = "";
                    let CHOICES = focused.CHOICES;
                    let choices = stickerResults;
                    let flag = true;
                    let str = "";
                  } else if (analyticsLocations(canMentionEveryone[32]).ApplicationCommandOptionType.CHANNEL === type) {
                    prefix = closure_19;
                    CHOICES = focused.CHANNELS;
                    const channelTypes = activeOption.channelTypes;
                    flag = true;
                    str = closure_19;
                  } else {
                    if (analyticsLocations(canMentionEveryone[32]).ApplicationCommandOptionType.ROLE !== type) {
                      if (analyticsLocations(canMentionEveryone[32]).ApplicationCommandOptionType.USER !== type) {
                        flag = false;
                      }
                    }
                    prefix = hasNonStickerResults;
                    CHOICES = focused.MENTIONS;
                    flag = true;
                    str = hasNonStickerResults;
                  }
                }
                let tmp11 = CHOICES;
                let tmp12 = substr;
                if (flag) {
                  let startsWithResult = null != str;
                  if (startsWithResult) {
                    startsWithResult = "" !== str;
                  }
                  if (startsWithResult) {
                    startsWithResult = null != substr;
                  }
                  if (startsWithResult) {
                    startsWithResult = substr.startsWith(str);
                  }
                  let tmp78 = substr;
                  if (startsWithResult) {
                    let str7 = "";
                    if (substr.length > str.length) {
                      str7 = substr.substring(str.length);
                    }
                    query = str7;
                    tmp78 = str7;
                  }
                  let obj = {};
                  const _Object2 = Object;
                  const entries = Object.entries(optionStates);
                  const item = entries.forEach((arg0) => {
                    let tmp;
                    let tmp2;
                    [tmp, tmp2] = arg0;
                    if (null != tmp2.optionValue) {
                      obj[tmp] = tmp2.optionValue;
                    }
                  });
                  obj = { query: tmp78, autocompleteType: CHOICES, autocompleteSelectionStart: num2 + num3 };
                  obj1 = { activeCommand, optionValues: obj, isActiveApplicationCommand: flag, option: activeOption, choices, channelTypes };
                  const merged = Object.assign(applicationCommandOptionQueryOptions);
                  obj.queryOptions = obj1;
                  obj.showOptionValuesPicker = flag;
                  return obj;
                }
              }
              prefix = "";
              CHOICES = focused.CHOICES;
              choices = activeOption.choices;
              flag = true;
              str = "";
            }
          }
        }
        if (c29) {
          if (null != anchor) {
            let obj2 = { query: text.slice(anchor + memo.length, selectionEnd).toLowerCase(), autocompleteType: focused.GAME_MENTIONS, autocompleteSelectionStart: anchor };
            let obj3 = {};
            const merged1 = Object.assign(applicationCommandOptionQueryOptions);
            obj2.queryOptions = obj3;
            return obj2;
          }
        }
        let sum = null;
        if (null != tmp7) {
          const _location2 = tmp7.location;
          let num5 = 0;
          if (null != _location2) {
            num5 = _location2;
          }
          let num6 = 0;
          if (null != tmp7.length) {
            num6 = length2;
          }
          sum = num5 + num6;
        }
        while (true) {
          let tmp40 = analyticsLocations;
          let tmp41 = canMentionEveryone;
          obj2 = analyticsLocations(canMentionEveryone[33]);
          let tmp42 = text;
          let tmp44 = tmp;
          let num8 = 0;
          let result = obj2.isWhitespaceSeparatingBoundary(text, tmp);
          if (tmp39) {
            num8 = sum;
          }
          if (tmp === num8) {
            let tmp46 = text;
            let tmp47 = selectionEnd;
            let substr1 = text.slice(tmp, selectionEnd);
            let tmp49 = analyticsLocations;
            let tmp50 = canMentionEveryone;
            obj3 = analyticsLocations(canMentionEveryone[33]);
            prefix = obj3.getPrefix(substr1);
            let obj4 = analyticsLocations(canMentionEveryone[33]);
            query = obj4.getQuery(substr1);
            if (null == query) {
              let _Object = Object;
              let tmp57 = memo;
              let keys = Object.keys(memo);
              let found = keys.find((arg0) => {
                let tmp = arg0 !== focused.SLASHES;
                if (tmp) {
                  tmp = arg0 !== focused.SLASHES_DISCOVERY;
                }
                if (!tmp) {
                  let tmp5 = null == outer1_9;
                  if (tmp5) {
                    tmp5 = !outer1_5;
                  }
                  tmp = tmp5;
                }
                if (tmp) {
                  let matchesResult = undefined !== prefix;
                  if (matchesResult) {
                    matchesResult = undefined !== query;
                  }
                  if (matchesResult) {
                    matchesResult = obj.matches(prefix, query, closure_2);
                  }
                  tmp = matchesResult;
                }
                return tmp;
              });
              let tmp58 = prefix;
              tmp12 = query;
              let tmp55 = query;
              let tmp56 = tmp;
              let tmp54 = found;
              if (null != found) {
                break;
              }
            } else {
              let tmp53 = tmp4;
              tmp54 = tmp11;
              tmp55 = query;
              tmp56 = tmp;
              if (tmp4.test(query)) {
                break;
              }
            }
            let tmp61 = focused;
            let tmp62 = tmp55;
            if (tmp54 === focused.SLASHES) {
              let tmp63 = analyticsLocations;
              let tmp64 = canMentionEveryone;
              let num10 = 34;
              let obj5 = analyticsLocations(canMentionEveryone[34]);
              let str4 = "";
              if (null != tmp55) {
                str4 = tmp55;
              }
              text = obj5.getTextBeforeFirstOption(str4).text;
              query = text;
              tmp62 = text;
            }
            obj4 = { query: tmp62, autocompleteType: tmp54, autocompleteSelectionStart: tmp56 };
            obj5 = {};
            let tmp65 = obj5;
            let tmp66 = applicationCommandOptionQueryOptions;
            let merged2 = Object.assign(applicationCommandOptionQueryOptions);
            obj4.queryOptions = obj5;
            return obj4;
          } else {
            found = tmp11;
          }
          let diff = tmp - 1;
          canMentionEveryone = diff;
          let tmp60 = tmp12;
          let num9 = 0;
          if (tmp39) {
            num9 = sum;
          }
          tmp11 = found;
          tmp = diff;
          tmp54 = found;
          tmp55 = tmp12;
          tmp56 = diff;
          if (diff < num9) {
            break;
          }
        }
      }
    }
    return { query: null, autocompleteType: null, autocompleteSelectionStart: null };
  }, items4);
  autocompleteType = memo1.autocompleteType;
  query = memo1.query;
  queryOptions = memo1.queryOptions;
  autocompleteSelectionStart = memo1.autocompleteSelectionStart;
  showOptionValuesPicker = memo1.showOptionValuesPicker;
  const items5 = [autocompleteType, query, queryOptions, memo];
  callback = onChangeAutoCompleteVisibility.useCallback((arg0) => {
    if (null != autocompleteType) {
      if (null != query) {
        let obj = memo[autocompleteType];
        const queryResultsResult = obj.queryResults(query, queryOptions, arg0);
        const items = [];
        const items1 = [];
        const item = queryResultsResult.forEach((type) => {
          if (type.type === scaledTextLineHeight.STICKER) {
            items.push(type);
          } else {
            items1.push(type);
          }
        });
        obj = { resultCount: queryResultsResult.length, stickerResults: items, nonStickerResults: items1, hasStickerResults: items.length > 0, hasNonStickerResults: items1.length > 0 };
        callback(obj);
      }
    }
    callback(c29);
  }, items5);
  const items6 = [autocompleteType, callback, memo];
  const effect1 = onChangeAutoCompleteVisibility.useEffect(() => {
    let tmp = null;
    if (null != autocompleteType) {
      let stores;
      if (null != memo) {
        stores = memo[autocompleteType].stores;
      }
      tmp = stores;
    }
    if (null != tmp) {
      const BatchedStoreListener = analyticsLocations(canMentionEveryone[21]).BatchedStoreListener;
      const prototype = BatchedStoreListener.prototype;
      const batchedStoreListener = new BatchedStoreListener(tmp, () => outer1_37(false));
      batchedStoreListener.attach("AutocompleteWrapper");
      return () => batchedStoreListener.detach();
    }
  }, items6);
  const items7 = [callback];
  const effect2 = onChangeAutoCompleteVisibility.useEffect(() => {
    callback(true);
  }, items7);
  const items8 = [stickerResults, nonStickerResults];
  callback1 = onChangeAutoCompleteVisibility.useCallback(() => ({ numStickerResults: stickerResults.length, numEmojiResults: nonStickerResults.filter((type) => type.type === scaledTextLineHeight.EMOJI).length }), items8);
  const items9 = [autocompleteType, focused, keyboardType, resultCount];
  memo2 = onChangeAutoCompleteVisibility.useMemo(() => {
    let tmp = resultCount > 0;
    if (!tmp) {
      tmp = anchor(autocompleteType);
    }
    if (!tmp) {
      tmp = autocompleteType === focused.GAME_MENTIONS;
    }
    let tmp7 = focused;
    if (focused) {
      tmp7 = tmp;
    }
    if (tmp7) {
      tmp7 = tmp6;
    }
    return tmp7;
  }, items9);
  closure_40 = onChangeAutoCompleteVisibility.useRef(false);
  const items10 = [autocompleteType, activeCommand];
  const effect3 = onChangeAutoCompleteVisibility.useEffect(() => {
    let tmp2 = anchor(autocompleteType);
    if (ref.current) {
      if (!tmp2) {
        tmp2 = null != activeCommand;
      }
      tmp.current = tmp2;
    } else {
      let tmp3 = tmp2;
      if (!tmp2) {
        tmp3 = null != activeCommand;
      }
      tmp.current = tmp3;
      if (ref.current) {
        let obj = analyticsLocations(canMentionEveryone[36]);
        obj = { location: "slash_ui" };
        obj.trackWithMetadata(setting.APPLICATION_COMMAND_TOP_OF_FUNNEL, obj);
      }
    }
  }, items10);
  closure_41 = onChangeAutoCompleteVisibility.useRef(null);
  const items11 = [onChangeAutoCompleteVisibility, activeCommand, memo2, autocompleteType, channel, callback1, gameMentionsAutocompleteConfig.enabled];
  const effect4 = onChangeAutoCompleteVisibility.useEffect(() => {
    let tmp = memo2;
    if (!memo2) {
      tmp = null != activeCommand;
    }
    if (null != onChangeAutoCompleteVisibility) {
      onChangeAutoCompleteVisibility(tmp);
    }
    if (tmp) {
      let str2 = "";
      if (null != autocompleteType) {
        str2 = autocompleteType;
      }
      const _HermesInternal = HermesInternal;
      const combined = "" + channel.id + ":" + str2;
      if (ref2.current !== combined) {
        ref2.current = combined;
        let enabled;
        let obj = analyticsLocations(canMentionEveryone[37]);
        obj = {};
        const merged = Object.assign(callback1());
        if (autocompleteType === focused.MENTIONS) {
          enabled = gameMentionsAutocompleteConfig.enabled;
        }
        obj["gameMentionsAvailable"] = enabled;
        const result = obj.iOSTrackAutocompleteOpen(autocompleteType, channel, obj);
        const tmp16 = autocompleteType;
        const tmp17 = channel;
      }
    } else {
      ref2.current = null;
    }
  }, items11);
  const insets = channel(canMentionEveryone[19])({ includeKeyboardHeight: true }).insets;
  let diff = channel(canMentionEveryone[18])({ ignoreKeyboard: true }).height - insets.top - insets.bottom;
  diff1 = diff - analyticsLocations(canMentionEveryone[20]).NAV_BAR_HEIGHT - tmp14[0];
  const items12 = [autocompleteType, stickerResults.length, diff1, scaledTextLineHeight, tmp4];
  memo3 = onChangeAutoCompleteVisibility.useMemo(() => {
    const sum = scaledTextLineHeight + 24;
    const sum1 = 200 + sum;
    if (stickerResults.length > 0) {
      let sum2 = sum1 + sum + analyticsLocations(canMentionEveryone[17]).AUTOCOMPLETE_STICKER_NODE_SIZE + 12 + closure_27;
    } else {
      sum2 = sum1;
      if (autocompleteType !== focused.EMOJIS_AND_STICKERS) {
        let num = 200;
        if (autocompleteType === focused.GAME_MENTIONS) {
          num = 200 + closure_12;
        }
        sum2 = num;
      }
    }
    return Math.min(diff1, sum2);
  }, items12);
  const tmp32 = keyboardType(onChangeAutoCompleteVisibility.useState(null), 2);
  first2 = tmp32[0];
  c45 = tmp34;
  const items13 = [resultCount, autocompleteType, memo2, hasStickerResults, hasNonStickerResults, nonStickerResults.length, memo3, first2, context, token, scaledTextLineHeight, tmp4];
  const memo4 = onChangeAutoCompleteVisibility.useMemo(() => {
    if (autocompleteType === focused.EMOJIS_AND_STICKERS) {
      const tmp18 = beginSearch(nonStickerResults.length, autocompleteType, context, token);
      let sum = tmp18;
      if (hasNonStickerResults) {
        sum = tmp18 + (scaledTextLineHeight + 24);
      }
      let sum2 = sum;
      if (hasStickerResults) {
        const sum1 = scaledTextLineHeight + 24;
        sum2 = sum + (sum1 + analyticsLocations(canMentionEveryone[17]).AUTOCOMPLETE_STICKER_NODE_SIZE + 12);
      }
      let tmp28 = hasStickerResults;
      if (hasStickerResults) {
        tmp28 = hasNonStickerResults;
      }
      let sum3 = sum2;
      if (tmp28) {
        sum3 = sum2 + closure_27;
      }
      let num = sum3;
    } else if (anchor(autocompleteType)) {
      let num2 = 0;
      if (null != first2) {
        num2 = first2;
      }
      num = num2;
    } else {
      num = 0;
      if (null != autocompleteType) {
        const tmp8 = beginSearch(resultCount, autocompleteType, context, token);
        num = tmp8;
        if (autocompleteType === focused.GAME_MENTIONS) {
          num = tmp8 + closure_12;
        }
      }
    }
    let num7 = 0;
    if (memo2) {
      num7 = num;
    }
    return Math.min(num7, memo3);
  }, items13);
  let obj6 = analyticsLocations(canMentionEveryone[38]);
  chatInputFloating = obj6.useMobileVisualRefreshConfig({ location: "AutocompleteWrapper" }).chatInputFloating;
  c47 = tmp36;
  let obj7 = analyticsLocations(canMentionEveryone[22]);
  const token1 = obj7.useToken(channel(canMentionEveryone[16]).modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS);
  let obj8 = analyticsLocations(canMentionEveryone[22]);
  const token2 = obj8.useToken(channel(canMentionEveryone[16]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH);
  let obj9 = analyticsLocations(canMentionEveryone[22]);
  const token3 = obj9.useToken(channel(canMentionEveryone[16]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH);
  let obj10 = analyticsLocations(canMentionEveryone[22]);
  const token4 = obj10.useToken(channel(canMentionEveryone[16]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_HORIZONTAL);
  let obj11 = analyticsLocations(canMentionEveryone[22]);
  token5 = obj11.useToken(channel(canMentionEveryone[16]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM);
  let num = 0;
  if (memo4 > 0) {
    num = token2;
  }
  let num2 = 0;
  if (memo4 > 0) {
    num2 = token3;
  }
  if (memo4 > 0) {
    let num3 = token5;
  } else {
    num3 = 0;
    if (null != activeCommand) {
      num3 = 0;
    }
  }
  const tmp42Result = gameMentionsAutocompleteConfig(token1, num, num2, token4, num3);
  c49 = tmp42Result;
  let obj12 = analyticsLocations(canMentionEveryone[39]);
  isScreenReaderEnabled = obj12.useIsScreenReaderEnabled();
  let obj13 = analyticsLocations(canMentionEveryone[15]);
  let isAndroidResult = obj13.isAndroid();
  if (!isAndroidResult) {
    let obj14 = analyticsLocations(canMentionEveryone[15]);
    let isIOSResult = obj14.isIOS();
    if (isIOSResult) {
      let tmp49 = isScreenReaderEnabled;
      if (!isScreenReaderEnabled) {
        tmp49 = chatInputFloating;
      }
      isIOSResult = tmp49;
    }
    isAndroidResult = isIOSResult;
  }
  const items14 = [isScreenReaderEnabled, chatInputFloating, tmp42Result.autocompletePositionRelative];
  const items15 = [memo4 > 0, token5];
  const memo5 = onChangeAutoCompleteVisibility.useMemo(() => {
    let prop = null;
    if (obj.isIOS()) {
      if (isScreenReaderEnabled) {
        prop = _undefined2.autocompletePositionRelative;
      } else {
        prop = null;
      }
    }
    return prop;
  }, items14);
  const memo6 = onChangeAutoCompleteVisibility.useMemo(() => {
    let tmp;
    if (c47) {
      const obj = { marginTop: token5 };
      tmp = obj;
    }
    return tmp;
  }, items15);
  const items16 = [analyticsLocations, beginSearch, channel, chatInputRef];
  let tmp28 = channel(canMentionEveryone[18])({ ignoreKeyboard: true });
  let tmp42 = gameMentionsAutocompleteConfig;
  callback2 = onChangeAutoCompleteVisibility.useCallback((type) => {
    if (type.type !== scaledTextLineHeight.EMOJI_PREMIUM_UPSELL) {
      if (type.type === scaledTextLineHeight.GLOBAL) {
        if ("gameMentionInput" === type.inlineAutocompleteType) {
          const current5 = chatInputRef.current;
          current5.insertText(memo, arg1, false);
          beginSearch(arg1);
        }
      }
      const autocompleteResultText = analyticsLocations(canMentionEveryone[33]).getAutocompleteResultText(type, channel);
      if (type.type === scaledTextLineHeight.GAME_MENTION) {
        const current = chatInputRef.current;
        const applicationCommandManager = current.getApplicationCommandManager();
        if (null != applicationCommandManager) {
          applicationCommandManager.addGameMention(type.game);
        }
      }
      const current2 = chatInputRef.current;
      const applicationCommandManager1 = current2.getApplicationCommandManager();
      let result;
      if (null != applicationCommandManager1) {
        result = applicationCommandManager1.setAutoCompleteResult(channel.id, autocompleteResultText, arg2, type);
      }
      if (!result) {
        const current3 = chatInputRef.current;
        current3.insertText(autocompleteResultText, arg1, type.type !== scaledTextLineHeight.STICKER);
        if (type.type === scaledTextLineHeight.STICKER) {
          const current4 = chatInputRef.current;
          current4.handleSelectSticker(type.sticker, arg1);
        }
      }
      const obj3 = analyticsLocations(canMentionEveryone[33]);
    } else {
      let obj = channel(canMentionEveryone[41]);
      obj = { initialUpsellKey: resultCount.EMOJI_AUTOCOMPLETE, analyticsLocations };
      const result1 = obj.handleShowUpsellAlert(obj);
    }
  }, items16);
  const items17 = [chatInputRef, optionStates, channel];
  const items18 = [autocompleteSelectionStart, autocompleteType, callback1, channel, callback2, showOptionValuesPicker];
  const callback3 = onChangeAutoCompleteVisibility.useCallback((type) => {
    const current = chatInputRef.current;
    const applicationCommandManager = current.getApplicationCommandManager();
    if (type.type === analyticsLocations(canMentionEveryone[32]).ApplicationCommandOptionType.ATTACHMENT) {
      if (null != optionStates[type.name].lastValidationResult) {
        if (lastValidationResult.success) {
          const result = analyticsLocations(canMentionEveryone[42]).openCommandAttachmentPreview(applicationCommandManager, tmp5, type.name);
          const obj2 = analyticsLocations(canMentionEveryone[42]);
        }
      }
      if (null != applicationCommandManager) {
        const result1 = applicationCommandManager.insertOrJumpCommandOption(type);
      }
    } else {
      if (null != applicationCommandManager) {
        const length = applicationCommandManager.props.text.length;
      }
      if (null != applicationCommandManager) {
        const result2 = applicationCommandManager.insertOrJumpCommandOption(type, length);
      }
    }
  }, items17);
  callback4 = onChangeAutoCompleteVisibility.useCallback((type) => {
    if (type.type === scaledTextLineHeight.GLOBAL) {
      if ("gameMentionInput" === type.inlineAutocompleteType) {
        type = scaledTextLineHeight.GAME_MENTION;
      }
      let obj = analyticsLocations(canMentionEveryone[37]);
      obj = { selectionType: type };
      let id = null;
      if (type.type === scaledTextLineHeight.STICKER) {
        id = type.sticker.id;
      }
      obj.stickerId = id;
      let id1 = null;
      if (type.type === scaledTextLineHeight.GAME_MENTION) {
        id1 = type.game.id;
      }
      obj.gameId = id1;
      const merged = Object.assign(callback1());
      const result = obj.iOSTrackAutocompleteSelect(autocompleteType, channel, obj);
      let num2 = 0;
      if (null != autocompleteSelectionStart) {
        num2 = autocompleteSelectionStart;
      }
      callback2(type, num2, showOptionValuesPicker);
    }
    type = type.type;
  }, items18);
  let tmp56 = keyboardType(onChangeAutoCompleteVisibility.useState(null), 2);
  first3 = tmp56[0];
  closure_54 = tmp56[1];
  const items19 = [autocompleteType, callback4, first3, channel, activeCommand, gameMentionsAutocompleteConfig.showNewTag, tmp42Result];
  const callback5 = onChangeAutoCompleteVisibility.useCallback((item) => {
    item = item.item;
    const type = item.type;
    if (scaledTextLineHeight.USER === type) {
      let obj = {};
      const merged = Object.assign(item);
      obj["guildId"] = channel.guild_id;
      obj["onPress"] = function onPress() {
        return outer1_52(item);
      };
      return selectionStart(channel(canMentionEveryone[17]).User, obj);
    } else if (scaledTextLineHeight.GLOBAL === type) {
      obj = {};
      const merged1 = Object.assign(item);
      obj["onPress"] = function onPress() {
        return outer1_52(item);
      };
      let tmp68;
      if ("gameMentionInput" === item.inlineAutocompleteType) {
        if (gameMentionsAutocompleteConfig.showNewTag) {
          const obj1 = { containerStyle: _undefined2.newTag, variant: "text-xs/bold", color: "badge-text-brand" };
          tmp68 = selectionStart(analyticsLocations(canMentionEveryone[43]).NewTag, obj1);
        }
      }
      obj["badge"] = tmp68;
      return selectionStart(channel(canMentionEveryone[17]).Global, obj);
    } else if (scaledTextLineHeight.ROLE === type) {
      const obj2 = {};
      const merged2 = Object.assign(item);
      obj2["onPress"] = function onPress() {
        return outer1_52(item);
      };
      let tmp59 = autocompleteType === focused.MENTIONS;
      if (tmp59) {
        tmp59 = null == activeCommand;
      }
      obj2["showDescription"] = tmp59;
      return selectionStart(channel(canMentionEveryone[17]).Role, obj2);
    } else if (scaledTextLineHeight.CHANNEL === type) {
      const obj3 = {};
      const merged3 = Object.assign(item);
      obj3["onPress"] = function onPress() {
        return outer1_52(item);
      };
      return selectionStart(channel(canMentionEveryone[17]).Channel, obj3);
    } else if (scaledTextLineHeight.EMOJI === type) {
      const obj4 = {};
      const merged4 = Object.assign(item);
      obj4["onPress"] = function onPress() {
        return outer1_52(item);
      };
      return selectionStart(channel(canMentionEveryone[17]).Emoji, obj4);
    } else if (scaledTextLineHeight.EMOJI_PREMIUM_UPSELL === type) {
      const obj5 = {};
      const merged5 = Object.assign(item);
      obj5["onPress"] = function onPress() {
        return outer1_52(item);
      };
      return selectionStart(channel(canMentionEveryone[17]).EmojiPremiumUpsell, obj5);
    } else if (scaledTextLineHeight.CHOICE === type) {
      const obj6 = {};
      const merged6 = Object.assign(item);
      obj6["onPress"] = function onPress() {
        return outer1_52(item);
      };
      return selectionStart(channel(canMentionEveryone[17]).Choice, obj6);
    } else if (scaledTextLineHeight.CHOICE_LOADING === type) {
      return selectionStart(channel(canMentionEveryone[17]).ChoiceLoading, {});
    } else if (scaledTextLineHeight.STICKER === type) {
      const obj7 = {};
      const merged7 = Object.assign(item);
      obj7["onPress"] = function onPress() {
        return outer1_52(item);
      };
      obj7["onLongPress"] = function onLongPress() {
        return outer1_54(item.sticker.id);
      };
      obj7["isInteracting"] = first3 === item.sticker.id;
      const _HermesInternal = HermesInternal;
      return selectionStart(channel(canMentionEveryone[17]).Sticker, obj7, "" + item.sticker.id + "-" + first3 === item.sticker.id);
    } else if (scaledTextLineHeight.GAME_MENTION === type) {
      const obj8 = {};
      const merged8 = Object.assign(item);
      obj8["onPress"] = function onPress() {
        return outer1_52(item);
      };
      return selectionStart(channel(canMentionEveryone[17]).Game, obj8);
    } else if (scaledTextLineHeight.LABEL === type) {
      obj = {};
      const merged9 = Object.assign(item);
      return selectionStart(channel(canMentionEveryone[17]).Label, obj);
    } else {
      return null;
    }
  }, items19);
  const items20 = [tmp42Result.autocomplete, { maxHeight: memo3 }];
  obj = {};
  const items21 = [tmp42Result.autocompleteWrapper, , ];
  let autocompleteWrapperAbsolute = !isAndroidResult;
  if (autocompleteWrapperAbsolute) {
    autocompleteWrapperAbsolute = tmp42Result.autocompleteWrapperAbsolute;
  }
  items21[1] = autocompleteWrapperAbsolute;
  items21[2] = memo5;
  obj.style = items21;
  obj = { style: items22 };
  items22 = [tmp42Result.autocompleteContainer, channel(canMentionEveryone[40])(memo4, screenIndex)];
  let tmp63Result = null != autocompleteType;
  if (tmp63Result) {
    obj1 = {};
    let tmp66 = autocompleteType === focused.SLASHES_DISCOVERY;
    if (tmp66) {
      obj2 = {
        channel,
        onPressSlashItem(command, section, visualSection) {
              let num = 0;
              if (null != autocompleteSelectionStart) {
                num = autocompleteSelectionStart;
              }
              callback2({ command, section, type: scaledTextLineHeight.SLASH, visualSection, location: analyticsLocations(canMentionEveryone[46]).ApplicationCommandTriggerLocations.DISCOVERY }, num);
            },
        onHeightChange: tmp34,
        canOnlyUseTextCommands
      };
      tmp66 = selectionStart(channel(canMentionEveryone[45]), obj2);
    }
    const items23 = [tmp66, , , , ];
    let tmp72Result = autocompleteType === focused.SLASHES;
    if (tmp72Result) {
      obj3 = { channel };
      let str = "";
      if (null != query) {
        str = query;
      }
      obj3.query = str;
      obj3.onPressCommandItem = function onPressCommandItem(command) {
        let num = 0;
        if (null != autocompleteSelectionStart) {
          num = autocompleteSelectionStart;
        }
        callback2({ command, section: arg1, type: scaledTextLineHeight.SLASH, location: analyticsLocations(canMentionEveryone[46]).ApplicationCommandTriggerLocations.DISCOVERY, query }, num);
      };
      obj3.style = items20;
      obj3.ItemSeparatorComponent = analyticsLocations(canMentionEveryone[33]).getItemSeparator;
      obj3.getItemLayout = analyticsLocations(canMentionEveryone[33]).getItemLayout;
      obj3.onCommandsChange = function onCommandsChange(arg0) {
        _undefined(beginSearch(arg0, autocompleteType, context, token));
      };
      tmp72Result = selectionStart(channel(canMentionEveryone[47]), obj3);
      const tmp72 = selectionStart;
      const tmp75 = channel(canMentionEveryone[47]);
    }
    items23[1] = tmp72Result;
    let tmp80Result = autocompleteType === focused.EMOJIS_AND_STICKERS;
    if (tmp80Result) {
      obj4 = {};
      let tmp82 = hasStickerResults;
      if (hasStickerResults) {
        obj5 = {};
        obj6 = {};
        const items24 = [tmp42Result.sectionTitle, ];
        obj7 = { height: scaledTextLineHeight };
        items24[1] = obj7;
        obj6.style = items24;
        obj8 = { variant: "text-sm/semibold" };
        const intl = analyticsLocations(canMentionEveryone[49]).intl;
        obj9 = { prefix: query };
        obj8.children = intl.format(analyticsLocations(canMentionEveryone[49]).t.uferGG, obj9);
        obj6.children = selectionStart(analyticsLocations(canMentionEveryone[48]).Text, obj8);
        const items25 = [selectionStart(commandsDisabled, obj6), ];
        obj10 = { horizontal: true };
        obj11 = {};
        let merged = Object.assign(items20);
        let merged1 = Object.assign(tmp42Result.stickersAutocompleteList);
        obj10.style = obj11;
        obj10.keyExtractor = function keyExtractor(sticker) {
          return sticker.sticker.id;
        };
        obj10.data = stickerResults;
        obj10.renderItem = callback5;
        obj10.showsHorizontalScrollIndicator = false;
        obj10.getItemLayout = autocompleteType;
        obj12 = { right: 12 };
        obj10.contentInset = obj12;
        items25[1] = selectionStart(chatInputRef, obj10);
        obj5.children = items25;
        tmp82 = callback(selectionEnd, obj5);
      }
      const items26 = [tmp82, , ];
      if (hasStickerResults) {
        hasStickerResults = hasNonStickerResults;
      }
      if (hasStickerResults) {
        obj13 = { style: tmp42Result.sectionDivider };
        hasStickerResults = selectionStart(channel(canMentionEveryone[50]), obj13);
      }
      items26[1] = hasStickerResults;
      if (hasNonStickerResults) {
        stateFromStoresObject = commandsDisabled;
        obj14 = {};
        const items27 = [tmp42Result.sectionTitle, ];
        const obj15 = { height: scaledTextLineHeight };
        items27[1] = obj15;
        obj14.style = items27;
        stateFromStoresObject = analyticsLocations;
        stateFromStoresObject = canMentionEveryone;
        const obj16 = { variant: "text-sm/semibold" };
        const intl2 = analyticsLocations(canMentionEveryone[49]).intl;
        const obj17 = {};
        stateFromStoresObject = context;
        stateFromStoresObject = globalThis;
        let _HermesInternal = HermesInternal;
        obj17.prefix = "" + context + query;
        obj16.children = intl2.format(analyticsLocations(canMentionEveryone[49]).t.ksAVYt, obj17);
        obj14.children = selectionStart(analyticsLocations(canMentionEveryone[48]).Text, obj16);
        hasNonStickerResults = selectionStart(commandsDisabled, obj14);
      }
      items26[2] = hasNonStickerResults;
      obj4.children = items26;
      tmp80Result = callback(selectionEnd, obj4);
      const tmp80 = callback;
      const tmp81 = selectionEnd;
    }
    items23[2] = tmp80Result;
    stateFromStoresObject = focused;
    stateFromStoresObject = autocompleteType === focused.GAME_MENTIONS;
    if (stateFromStoresObject) {
      stateFromStoresObject = selectionStart;
      stateFromStoresObject = channel;
      stateFromStoresObject = canMentionEveryone;
      stateFromStoresObject = selectionStart(channel(canMentionEveryone[51]), {});
    }
    items23[3] = stateFromStoresObject;
    stateFromStoresObject = selectionStart;
    stateFromStoresObject = chatInputRef;
    const obj18 = {
      style: items20,
      keyExtractor(arg0, arg1) {
          return String(arg1);
        },
      data: nonStickerResults,
      renderItem: callback5
    };
    stateFromStoresObject = analyticsLocations;
    stateFromStoresObject = canMentionEveryone;
    obj18.ItemSeparatorComponent = analyticsLocations(canMentionEveryone[33]).getItemSeparator;
    obj18.getItemLayout = analyticsLocations(canMentionEveryone[33]).getItemLayout;
    items23[4] = selectionStart(chatInputRef, obj18);
    obj1.children = items23;
    tmp63Result = callback(selectionEnd, obj1);
    let tmp63 = callback;
    let tmp64 = selectionEnd;
  }
  obj.children = tmp63Result;
  const items28 = [selectionStart(channel(canMentionEveryone[44]).View, obj), ];
  stateFromStoresObject = null != activeCommand && !commandsDisabled;
  if (stateFromStoresObject) {
    stateFromStoresObject = selectionStart;
    stateFromStoresObject = commandsDisabled;
    const obj19 = { style: memo6 };
    stateFromStoresObject = channel;
    stateFromStoresObject = canMentionEveryone;
    const obj20 = { command: activeCommand, section: stateFromStoresObject.activeSection, guildId: channel.guild_id, onPressOption: callback3, currentOption: activeOption, optionStates };
    obj19.children = selectionStart(channel(canMentionEveryone[52]), obj20);
    stateFromStoresObject = selectionStart(commandsDisabled, obj19);
  }
  items28[1] = stateFromStoresObject;
  obj.children = items28;
  const tmp52 = channel(canMentionEveryone[40])(memo4, screenIndex);
  let tmp59 = callback;
  let tmp60 = commandsDisabled;
  let tmp61 = selectionStart;
  return selectionStart(commandsDisabled, { style: tmp42Result.autocompletePositionRelative, children: callback(commandsDisabled, obj) });
});
forwardRefResult.displayName = "AutocompleteWrapper";
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/autocompleter/native/AutocompleteWrapper.tsx");

export default memoResult;
