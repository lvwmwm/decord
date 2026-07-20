// Module ID: 11412
// Function ID: 88771
// Name: isSlashAutocompleteType
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 11412 (isSlashAutocompleteType)
import closure_3 from "result";
import importAllResult from "result";
import result from "result";
import closure_7 from "result";
import closure_8 from "result";
import closure_9 from "result";
import closure_10 from "result";
import result from "result";
import result from "result";
import result from "result";
import { AutocompleteTypes } from "result";
import { EmojiInteractionPoint } from "result";
import result from "result";
import result from "result";
import result from "result";

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
  const obj = { length: index(dependencyMap[14]).AUTOCOMPLETE_STICKER_NODE_SIZE };
  const result = index * (index(dependencyMap[14]).AUTOCOMPLETE_STICKER_NODE_SIZE + index(dependencyMap[14]).AUTOCOMPLETE_STICKER_NODE_MARGIN);
  const diff = index - 1;
  obj.offset = result + diff * index(dependencyMap[14]).AUTOCOMPLETE_STICKER_NODE_MARGIN;
  obj.index = index;
  return obj;
}
({ View: closure_5, FlatList: closure_6 } = result);
({ AutoCompleteResultTypes: closure_11, WHITESPACE_RE: closure_12, AnalyticEvents: closure_13, UpsellTypes: closure_14 } = result);
const BOOLEAN_CHOICES = arg1(dependencyMap[8]).BOOLEAN_CHOICES;
({ AUTOCOMPLETE_EMOJI_ROW_HEIGHT: closure_16, AUTOCOMPLETE_ROW_HEIGHT: closure_17 } = result);
({ MENTION_SENTINEL: closure_18, CHANNEL_SENTINEL: closure_19, EMOJI_SENTINEL: closure_20 } = result);
({ jsx: closure_23, Fragment: closure_24, jsxs: closure_25 } = result);
const hairlineWidth = result.StyleSheet.hairlineWidth;
let closure_27 = 284 + require("result").AUTOCOMPLETE_STICKER_NODE_SIZE + 12 + hairlineWidth;
let closure_28 = result.createStyles((borderRadius, borderWidth, borderTopWidth, marginHorizontal, marginBottom) => {
  let obj = { autocompletePositionRelative: { position: "relative" } };
  obj = {};
  let obj2 = borderWidth(dependencyMap[16]);
  let str = "absolute";
  if (obj2.isAndroid()) {
    str = "relative";
  }
  obj.position = str;
  obj.marginHorizontal = marginHorizontal;
  obj.marginBottom = marginBottom;
  obj.autocompleteWrapper = obj;
  obj.autocompleteWrapperAbsolute = {};
  obj = { backgroundColor: importDefault(dependencyMap[17]).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, borderRadius, borderWidth, borderTopWidth, borderColor: importDefault(dependencyMap[17]).colors.MOBILE_FLOATING_ACCESSORY_BORDER, overflow: "hidden" };
  obj.autocompleteContainer = obj;
  const obj1 = { backgroundColor: importDefault(dependencyMap[17]).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, height: 0.000000000000000000000000000000000000000000000000000000011294471302334573 };
  obj.autocomplete = obj1;
  obj2 = { backgroundColor: importDefault(dependencyMap[17]).colors.MOBILE_FLOATING_ACCESSORY_BORDER, marginLeft: -16 };
  obj.sectionDivider = obj2;
  const obj3 = { 474931905: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000018913127811932393, 1618910850: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000196126008089384, 1658424913: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006919344807266252, -1504596905: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016935767297406707, 1608213249: 9126805512.125, backgroundColor: importDefault(dependencyMap[17]).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
  obj.sectionTitle = obj3;
  obj.stickersAutocompleteList = { paddingLeft: 12 - borderWidth(dependencyMap[14]).AUTOCOMPLETE_STICKER_NODE_MARGIN, marginBottom: 12, height: borderWidth(dependencyMap[14]).AUTOCOMPLETE_STICKER_NODE_SIZE, flexShrink: 0 };
  return obj;
});
const obj = { 1440178548: -0.000000000000000000000000000000000000000000000000000000000000000006151499469494149, -1813475108: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000601989533400987, 1139532895: 32458000.001047716, 1415959180: 10869384.00053664, <string:4033009840>: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004594611443144745, stickerResults: [], nonStickerResults: [] };
const forwardRefResult = importAllResult.forwardRef((analyticsLocations) => {
  let canOnlyUseTextCommands;
  let screenIndex;
  let tmp13;
  analyticsLocations = analyticsLocations.analyticsLocations;
  const arg1 = analyticsLocations;
  const channel = analyticsLocations.channel;
  const importDefault = channel;
  const canMentionEveryone = analyticsLocations.canMentionEveryone;
  const dependencyMap = canMentionEveryone;
  const keyboardType = analyticsLocations.keyboardType;
  let callback = keyboardType;
  const onChangeAutoCompleteVisibility = analyticsLocations.onChangeAutoCompleteVisibility;
  const commandsDisabled = analyticsLocations.commandsDisabled;
  const chatInputRef = analyticsLocations.chatInputRef;
  let tmp38Result;
  let isScreenReaderEnabled;
  let callback2;
  let callback4;
  let first3;
  let closure_47;
  ({ canOnlyUseTextCommands, screenIndex } = analyticsLocations);
  let obj = arg1(dependencyMap[21]);
  const items = [closure_7];
  let stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ optionStates: optionStates.getOptionStates(channel.id), activeOption: optionStates.getActiveOption(channel.id), activeCommand: optionStates.getActiveCommand(channel.id), activeSection: optionStates.getActiveCommandSection(channel.id) }));
  const optionStates = stateFromStoresObject.optionStates;
  closure_7 = optionStates;
  const activeOption = stateFromStoresObject.activeOption;
  let closure_8 = activeOption;
  const activeCommand = stateFromStoresObject.activeCommand;
  let closure_9 = activeCommand;
  let obj1 = arg1(dependencyMap[22]);
  const token = obj1.useToken(importDefault(dependencyMap[17]).modules.mobile.TABLE_ROW_HEIGHT);
  let closure_10 = token;
  const IncludeStickersInAutocomplete = arg1(dependencyMap[23]).IncludeStickersInAutocomplete;
  const setting = IncludeStickersInAutocomplete.getSetting();
  const tmp4 = callback(onChangeAutoCompleteVisibility.useState(obj), 2);
  const first = tmp4[0];
  const resultCount = first.resultCount;
  const stickerResults = first.stickerResults;
  const nonStickerResults = first.nonStickerResults;
  let hasStickerResults = first.hasStickerResults;
  const BOOLEAN_CHOICES = hasStickerResults;
  let hasNonStickerResults = first.hasNonStickerResults;
  let closure_17 = tmp4[1];
  let obj2 = arg1(dependencyMap[21]);
  const items1 = [closure_8];
  const stateFromStores = obj2.useStateFromStores(items1, () => activeOption.loadState);
  let obj3 = arg1(dependencyMap[21]);
  const items2 = [closure_10];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => token.loadState);
  const context = importAllResult.useContext(arg1(dependencyMap[24]).RedesignCompatContext);
  const items3 = [channel, setting];
  const memo = importAllResult.useMemo(() => analyticsLocations(canMentionEveryone[25]).getAutocompleteOptions(channel, true, setting), items3);
  const tmp10 = callback(onChangeAutoCompleteVisibility.useState({ end: "<string:2046820935>", ref: "<string:3372221001>", channel: "<string:3036676549>", paddingHorizontal: "<string:50331913>" }), 2);
  const first1 = tmp10[0];
  const focused = first1.focused;
  const text = first1.text;
  const AutocompleteTypes = text;
  const selectionStart = first1.selectionStart;
  const EmojiInteractionPoint = selectionStart;
  const selectionEnd = first1.selectionEnd;
  let closure_24 = tmp10[1];
  [tmp13, closure_25] = callback(onChangeAutoCompleteVisibility.useState(0), 2);
  const effect = importAllResult.useEffect(() => {
    let closure_0 = false;
    const result = activeCommand.addConditionalChangeListener(() => {
      let tmp = !callback;
      if (!callback) {
        let flag;
        if (connected.isConnected()) {
          const obj = callback(closure_2[26]);
          const result = obj.initiateEmojiInteraction(obj.AutocompleteWrapperShown);
          flag = false;
        }
        tmp = flag;
      }
      return tmp;
    });
    return () => {
      let closure_0 = true;
    };
  }, []);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, importAllResult.useMemo(() => {
    let closure_0 = -1;
    return () => ({
      setChatInputHeight: closure_25,
      setData(channelIds, combined) {
        ({ focused: closure_0, text: closure_1, selectionStart: closure_2, selectionEnd: closure_3 } = channelIds);
        if (-1 !== timeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(timeout);
        }
        const timeout = setTimeout(() => {
          callback(() => { ... });
        }, 16);
      }
    });
  }, []));
  const items4 = [selectionStart, selectionEnd, text, activeCommand, optionStates, activeOption, canMentionEveryone, commandsDisabled, memo, stateFromStores, stateFromStores1];
  const memo1 = importAllResult.useMemo(() => {
    let text;
    let tmp = selectionStart;
    let canMentionEveryone = selectionStart;
    if (null != text) {
      if (0 !== text.trim().length) {
        if (null != activeOption) {
          let obj1 = analyticsLocations(canMentionEveryone[27]);
          let applicationCommandOptionQueryOptions = obj1.getApplicationCommandOptionQueryOptions(activeOption);
        } else {
          applicationCommandOptionQueryOptions = { url: "y", rejectWithError: "%Float16Array%", oldFormErrors: "MD", retries: "isArray", id: "DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN", name: "GTM", cost: "%NumberPrototype%", id: "isArrayBuffer", canMentionEveryone, canMentionHere: canMentionEveryone };
        }
        let tmp7;
        if (null != activeOption) {
          tmp7 = optionStates[closure_8.name];
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
              let channel = substr;
              if (null == activeOption.choices) {
                if (!activeOption.autocomplete) {
                  const type = activeOption.type;
                  if (analyticsLocations(canMentionEveryone[28]).ApplicationCommandOptionType.BOOLEAN === type) {
                    let analyticsLocations = "";
                    let CHOICES = text.CHOICES;
                    let choices = hasStickerResults;
                    let flag = true;
                    let str = "";
                  } else if (analyticsLocations(canMentionEveryone[28]).ApplicationCommandOptionType.CHANNEL === type) {
                    analyticsLocations = memo;
                    CHOICES = text.CHANNELS;
                    const channelTypes = activeOption.channelTypes;
                    flag = true;
                    str = memo;
                  } else {
                    if (analyticsLocations(canMentionEveryone[28]).ApplicationCommandOptionType.ROLE !== type) {
                      if (analyticsLocations(canMentionEveryone[28]).ApplicationCommandOptionType.USER !== type) {
                        flag = false;
                      }
                    }
                    analyticsLocations = context;
                    CHOICES = text.MENTIONS;
                    flag = true;
                    str = context;
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
                  let tmp65 = substr;
                  if (startsWithResult) {
                    let str6 = "";
                    if (substr.length > str.length) {
                      str6 = substr.substring(str.length);
                    }
                    channel = str6;
                    tmp65 = str6;
                  }
                  let obj = {};
                  const keyboardType = obj;
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
                  obj = { query: tmp65, autocompleteType: CHOICES, autocompleteSelectionStart: num2 + num3 };
                  obj1 = { activeCommand, optionValues: obj, isActiveApplicationCommand: flag, option: activeOption, choices, channelTypes };
                  const merged = Object.assign(applicationCommandOptionQueryOptions);
                  obj.queryOptions = obj1;
                  obj.showOptionValuesPicker = flag;
                  return obj;
                }
              }
              analyticsLocations = "";
              CHOICES = text.CHOICES;
              choices = activeOption.choices;
              flag = true;
              str = "";
            }
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
          let tmp38 = resultCount;
          let tmp39 = text;
          let num9 = 0;
          let isMatch = resultCount.test(text[tmp - 1]);
          if (tmp37) {
            num9 = sum;
          }
          if (tmp === num9) {
            let tmp42 = text;
            let tmp43 = selectionEnd;
            let substr1 = text.slice(tmp, selectionEnd);
            let tmp45 = analyticsLocations;
            let tmp46 = canMentionEveryone;
            let obj2 = analyticsLocations(canMentionEveryone[29]);
            let prefix = obj2.getPrefix(substr1);
            analyticsLocations = prefix;
            let obj3 = analyticsLocations(canMentionEveryone[29]);
            let query = obj3.getQuery(substr1);
            channel = query;
            if (null == query) {
              let _Object = Object;
              let tmp53 = memo;
              let keys = Object.keys(memo);
              let found = keys.find((arg0) => {
                let tmp = arg0 !== constants.SLASHES;
                if (tmp) {
                  tmp = arg0 !== constants.SLASHES_DISCOVERY;
                }
                if (!tmp) {
                  let tmp5 = null == closure_9;
                  if (tmp5) {
                    tmp5 = !closure_5;
                  }
                  tmp = tmp5;
                }
                if (tmp) {
                  let matchesResult = undefined !== prefix;
                  if (matchesResult) {
                    matchesResult = undefined !== text;
                  }
                  if (matchesResult) {
                    matchesResult = obj.matches(prefix, text, diff);
                  }
                  tmp = matchesResult;
                }
                return tmp;
              });
              let tmp54 = prefix;
              tmp12 = query;
              let tmp51 = query;
              let tmp52 = tmp;
              let tmp50 = found;
              if (null != found) {
                break;
              }
            } else {
              let tmp49 = resultCount;
              tmp50 = tmp11;
              tmp51 = query;
              tmp52 = tmp;
              if (resultCount.test(query)) {
                break;
              }
            }
            let tmp57 = text;
            let tmp58 = tmp51;
            if (tmp50 === text.SLASHES) {
              let tmp59 = analyticsLocations;
              let tmp60 = canMentionEveryone;
              let num11 = 30;
              let obj5 = analyticsLocations(canMentionEveryone[30]);
              let str4 = "";
              if (null != tmp51) {
                str4 = tmp51;
              }
              text = obj5.getTextBeforeFirstOption(str4).text;
              channel = text;
              tmp58 = text;
            }
            obj2 = { query: tmp58, autocompleteType: tmp50, autocompleteSelectionStart: tmp52 };
            obj3 = {};
            let tmp61 = obj3;
            let tmp62 = applicationCommandOptionQueryOptions;
            let merged1 = Object.assign(applicationCommandOptionQueryOptions);
            obj2.queryOptions = obj3;
            return obj2;
          } else {
            found = tmp11;
          }
          let diff = tmp - 1;
          canMentionEveryone = diff;
          let tmp56 = tmp12;
          let num10 = 0;
          if (tmp37) {
            num10 = sum;
          }
          tmp11 = found;
          tmp = diff;
          tmp50 = found;
          tmp51 = tmp12;
          tmp52 = diff;
          if (diff < num10) {
            break;
          }
        }
      }
    }
    return { "Bool(true)": "Normal", "Bool(true)": true, "Bool(true)": "AbortSignal" };
  }, items4);
  const autocompleteType = memo1.autocompleteType;
  const hairlineWidth = autocompleteType;
  const query = memo1.query;
  let closure_27 = query;
  const queryOptions = memo1.queryOptions;
  let closure_28 = queryOptions;
  const autocompleteSelectionStart = memo1.autocompleteSelectionStart;
  obj = autocompleteSelectionStart;
  const showOptionValuesPicker = memo1.showOptionValuesPicker;
  const isSlashAutocompleteType = showOptionValuesPicker;
  const items5 = [autocompleteType, query, queryOptions, memo];
  callback = importAllResult.useCallback((arg0) => {
    if (null != autocompleteType) {
      if (null != query) {
        let obj = memo[closure_26];
        const queryResultsResult = obj.queryResults(query, queryOptions, arg0);
        const items = [];
        const analyticsLocations = items;
        const items1 = [];
        const channel = items1;
        const item = queryResultsResult.forEach((type) => {
          if (type.type === constants.STICKER) {
            items.push(type);
          } else {
            items1.push(type);
          }
        });
        obj = { resultCount: queryResultsResult.length, stickerResults: items, nonStickerResults: items1, hasStickerResults: items.length > 0, hasNonStickerResults: items1.length > 0 };
        callback(obj);
      }
    }
    callback(autocompleteSelectionStart);
  }, items5);
  const getAutocompletesHeight = callback;
  const items6 = [autocompleteType, callback, memo];
  const effect1 = importAllResult.useEffect(() => {
    let tmp = null;
    if (null != autocompleteType) {
      let stores;
      if (null != memo) {
        stores = memo[closure_26].stores;
      }
      tmp = stores;
    }
    if (null != tmp) {
      const BatchedStoreListener = analyticsLocations(canMentionEveryone[21]).BatchedStoreListener;
      const prototype = BatchedStoreListener.prototype;
      const batchedStoreListener = new BatchedStoreListener(tmp, () => callback(false));
      const analyticsLocations = batchedStoreListener;
      batchedStoreListener.attach("AutocompleteWrapper");
      return () => batchedStoreListener.detach();
    }
  }, items6);
  const items7 = [callback];
  const effect2 = importAllResult.useEffect(() => {
    callback(true);
  }, items7);
  const items8 = [stickerResults, nonStickerResults];
  const callback1 = importAllResult.useCallback(() => ({ numStickerResults: stickerResults.length, numEmojiResults: nonStickerResults.filter((type) => type.type === constants.EMOJI).length }), items8);
  const getStickersItemLayout = callback1;
  const items9 = [autocompleteType, focused, keyboardType, resultCount];
  const memo2 = importAllResult.useMemo(() => {
    let tmp = !focused;
    if (!tmp) {
      let tmp3 = 0 === resultCount;
      if (tmp3) {
        tmp3 = !showOptionValuesPicker(autocompleteType);
      }
      tmp = tmp3;
    }
    let tmp6 = !tmp;
    if (!tmp) {
      tmp6 = keyboardType === analyticsLocations(canMentionEveryone[31]).KeyboardTypes.SYSTEM;
    }
    return tmp6;
  }, items9);
  let closure_34 = importAllResult.useRef(false);
  const items10 = [autocompleteType, activeCommand];
  const effect3 = importAllResult.useEffect(() => {
    let tmp2 = showOptionValuesPicker(autocompleteType);
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
        let obj = analyticsLocations(canMentionEveryone[32]);
        obj = { location: "slash_ui" };
        obj.trackWithMetadata(stickerResults.APPLICATION_COMMAND_TOP_OF_FUNNEL, obj);
      }
    }
  }, items10);
  const items11 = [onChangeAutoCompleteVisibility, activeCommand, memo2, autocompleteType, channel, callback1];
  const effect4 = importAllResult.useEffect(() => {
    let tmp = memo2;
    if (!memo2) {
      tmp = null != activeCommand;
    }
    if (null != onChangeAutoCompleteVisibility) {
      onChangeAutoCompleteVisibility(tmp);
    }
    if (tmp) {
      const result = analyticsLocations(canMentionEveryone[33]).iOSTrackAutocompleteOpen(autocompleteType, channel, callback1());
      const obj = analyticsLocations(canMentionEveryone[33]);
    }
  }, items11);
  const tmp12 = callback(onChangeAutoCompleteVisibility.useState(0), 2);
  const insets = importDefault(dependencyMap[19])({ includeKeyboardHeight: true }).insets;
  const diff = importDefault(dependencyMap[18])({ ignoreKeyboard: true }).height - insets.top - insets.bottom;
  const diff1 = diff - arg1(dependencyMap[20]).NAV_BAR_HEIGHT - tmp13;
  const items12 = [autocompleteType, stickerResults.length, diff1];
  const memo3 = importAllResult.useMemo(() => {
    if (stickerResults.length > 0) {
      let num = query;
    } else {
      num = 200;
      if (autocompleteType === text.EMOJIS_AND_STICKERS) {
        num = 242;
      }
    }
    return Math.min(diff1, num);
  }, items12);
  const tmp28 = callback(onChangeAutoCompleteVisibility.useState(null), 2);
  const first2 = tmp28[0];
  const tmp30 = tmp28[1];
  const items13 = [resultCount, autocompleteType, memo2, hasStickerResults, hasNonStickerResults, nonStickerResults.length, memo3, first2, context, token];
  const memo4 = importAllResult.useMemo(() => {
    if (autocompleteType === text.EMOJIS_AND_STICKERS) {
      const tmp17 = callback(nonStickerResults.length, autocompleteType, context, token);
      let sum = tmp17;
      if (hasNonStickerResults) {
        sum = tmp17 + 42;
      }
      let sum1 = sum;
      if (hasStickerResults) {
        sum1 = sum + (42 + analyticsLocations(canMentionEveryone[14]).AUTOCOMPLETE_STICKER_NODE_SIZE + 12);
      }
      let tmp24 = hasStickerResults;
      if (hasStickerResults) {
        tmp24 = hasNonStickerResults;
      }
      let sum2 = sum1;
      if (tmp24) {
        sum2 = sum1 + autocompleteType;
      }
      let num = sum2;
    } else if (showOptionValuesPicker(autocompleteType)) {
      let num2 = 0;
      if (null != first2) {
        num2 = first2;
      }
      num = num2;
    } else {
      num = 0;
      if (null != autocompleteType) {
        num = callback(resultCount, autocompleteType, context, token);
      }
    }
    let num7 = 0;
    if (memo2) {
      num7 = num;
    }
    return Math.min(num7, memo3);
  }, items13);
  let obj4 = arg1(dependencyMap[34]);
  const chatInputFloating = obj4.useMobileVisualRefreshConfig({ location: "AutocompleteWrapper" }).chatInputFloating;
  const tmp32 = memo4 > 0;
  let obj5 = arg1(dependencyMap[22]);
  const token1 = obj5.useToken(importDefault(dependencyMap[17]).modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS);
  let obj6 = arg1(dependencyMap[22]);
  const token2 = obj6.useToken(importDefault(dependencyMap[17]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH);
  let obj7 = arg1(dependencyMap[22]);
  const token3 = obj7.useToken(importDefault(dependencyMap[17]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH);
  let obj8 = arg1(dependencyMap[22]);
  const token4 = obj8.useToken(importDefault(dependencyMap[17]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_HORIZONTAL);
  let obj9 = arg1(dependencyMap[22]);
  const token5 = obj9.useToken(importDefault(dependencyMap[17]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM);
  let num = 0;
  if (tmp32) {
    num = token2;
  }
  let num2 = 0;
  if (tmp32) {
    num2 = token3;
  }
  if (tmp32) {
    let num3 = token5;
  } else {
    num3 = 0;
    if (null != activeCommand) {
      num3 = 0;
    }
  }
  tmp38Result = closure_28(token1, num, num2, token4, num3);
  let obj10 = arg1(dependencyMap[35]);
  isScreenReaderEnabled = obj10.useIsScreenReaderEnabled();
  let obj11 = arg1(dependencyMap[16]);
  let isAndroidResult = obj11.isAndroid();
  if (!isAndroidResult) {
    let obj12 = arg1(dependencyMap[16]);
    let isIOSResult = obj12.isIOS();
    if (isIOSResult) {
      let tmp45 = isScreenReaderEnabled;
      if (!isScreenReaderEnabled) {
        tmp45 = chatInputFloating;
      }
      isIOSResult = tmp45;
    }
    isAndroidResult = isIOSResult;
  }
  const items14 = [isScreenReaderEnabled, chatInputFloating, tmp38Result.autocompletePositionRelative];
  const items15 = [tmp32, token5];
  const memo5 = importAllResult.useMemo(() => {
    let prop = null;
    if (obj.isIOS()) {
      if (isScreenReaderEnabled) {
        prop = tmp38Result.autocompletePositionRelative;
      } else {
        prop = null;
      }
    }
    return prop;
  }, items14);
  const memo6 = importAllResult.useMemo(() => {
    let tmp;
    if (tmp32) {
      const obj = { marginTop: token5 };
      tmp = obj;
    }
    return tmp;
  }, items15);
  const items16 = [analyticsLocations, channel, chatInputRef];
  const tmp24 = importDefault(dependencyMap[18])({ ignoreKeyboard: true });
  const tmp38 = closure_28;
  callback2 = importAllResult.useCallback((type) => {
    if (type.type !== setting.EMOJI_PREMIUM_UPSELL) {
      let result;
      const autocompleteResultText = analyticsLocations(canMentionEveryone[29]).getAutocompleteResultText(type, channel);
      const current = chatInputRef.current;
      const applicationCommandManager = current.getApplicationCommandManager();
      if (null != applicationCommandManager) {
        result = applicationCommandManager.setAutoCompleteResult(channel.id, autocompleteResultText, arg2, type);
      }
      if (!result) {
        const current2 = chatInputRef.current;
        current2.insertText(autocompleteResultText, arg1, type.type !== setting.STICKER);
        if (type.type === setting.STICKER) {
          const current3 = chatInputRef.current;
          current3.handleSelectSticker(type.sticker, arg1);
        }
      }
      const obj3 = analyticsLocations(canMentionEveryone[29]);
    } else {
      let obj = channel(canMentionEveryone[37]);
      obj = { initialUpsellKey: nonStickerResults.EMOJI_AUTOCOMPLETE, analyticsLocations };
      const result1 = obj.handleShowUpsellAlert(obj);
    }
  }, items16);
  const items17 = [chatInputRef, optionStates, channel];
  const items18 = [autocompleteSelectionStart, autocompleteType, callback1, channel, callback2, showOptionValuesPicker];
  const callback3 = importAllResult.useCallback((type) => {
    const current = chatInputRef.current;
    const applicationCommandManager = current.getApplicationCommandManager();
    if (type.type === analyticsLocations(canMentionEveryone[28]).ApplicationCommandOptionType.ATTACHMENT) {
      if (null != optionStates[type.name].lastValidationResult) {
        if (lastValidationResult.success) {
          const result = analyticsLocations(canMentionEveryone[38]).openCommandAttachmentPreview(applicationCommandManager, tmp5, type.name);
          const obj2 = analyticsLocations(canMentionEveryone[38]);
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
  callback4 = importAllResult.useCallback((selectionType) => {
    let obj = analyticsLocations(canMentionEveryone[33]);
    obj = { selectionType: selectionType.type };
    let id = null;
    if (selectionType.type === setting.STICKER) {
      id = selectionType.sticker.id;
    }
    obj.stickerId = id;
    const merged = Object.assign(callback1());
    const result = obj.iOSTrackAutocompleteSelect(autocompleteType, channel, obj);
    let num = 0;
    if (null != autocompleteSelectionStart) {
      num = autocompleteSelectionStart;
    }
    callback2(selectionType, num, showOptionValuesPicker);
  }, items18);
  const tmp52 = callback(onChangeAutoCompleteVisibility.useState(null), 2);
  first3 = tmp52[0];
  closure_47 = tmp52[1];
  const items19 = [autocompleteType, callback4, first3, channel, activeCommand];
  const callback5 = importAllResult.useCallback((item) => {
    item = item.item;
    const analyticsLocations = item;
    const type = item.type;
    if (setting.USER === type) {
      let obj = {};
      const merged = Object.assign(item);
      obj["guildId"] = channel.guild_id;
      obj["onPress"] = function onPress() {
        return callback(item);
      };
      return selectionEnd(channel(canMentionEveryone[14]).User, obj);
    } else if (setting.GLOBAL === type) {
      obj = {};
      const merged1 = Object.assign(item);
      obj["onPress"] = function onPress() {
        return callback(item);
      };
      return selectionEnd(channel(canMentionEveryone[14]).Global, obj);
    } else if (setting.ROLE === type) {
      const obj1 = {};
      const merged2 = Object.assign(item);
      obj1["onPress"] = function onPress() {
        return callback(item);
      };
      let tmp53 = autocompleteType === text.MENTIONS;
      if (tmp53) {
        tmp53 = null == activeCommand;
      }
      obj1["showDescription"] = tmp53;
      return selectionEnd(channel(canMentionEveryone[14]).Role, obj1);
    } else if (setting.CHANNEL === type) {
      const obj2 = {};
      const merged3 = Object.assign(item);
      obj2["onPress"] = function onPress() {
        return callback(item);
      };
      return selectionEnd(channel(canMentionEveryone[14]).Channel, obj2);
    } else if (setting.EMOJI === type) {
      const obj3 = {};
      const merged4 = Object.assign(item);
      obj3["onPress"] = function onPress() {
        return callback(item);
      };
      return selectionEnd(channel(canMentionEveryone[14]).Emoji, obj3);
    } else if (setting.EMOJI_PREMIUM_UPSELL === type) {
      const obj4 = {};
      const merged5 = Object.assign(item);
      obj4["onPress"] = function onPress() {
        return callback(item);
      };
      return selectionEnd(channel(canMentionEveryone[14]).EmojiPremiumUpsell, obj4);
    } else if (setting.CHOICE === type) {
      const obj5 = {};
      const merged6 = Object.assign(item);
      obj5["onPress"] = function onPress() {
        return callback(item);
      };
      return selectionEnd(channel(canMentionEveryone[14]).Choice, obj5);
    } else if (setting.CHOICE_LOADING === type) {
      return selectionEnd(channel(canMentionEveryone[14]).ChoiceLoading, {});
    } else if (setting.STICKER === type) {
      const obj6 = {};
      const merged7 = Object.assign(item);
      obj6["onPress"] = function onPress() {
        return callback(item);
      };
      obj6["onLongPress"] = function onLongPress() {
        return callback2(item.sticker.id);
      };
      obj6["isInteracting"] = first3 === item.sticker.id;
      const _HermesInternal = HermesInternal;
      return selectionEnd(channel(canMentionEveryone[14]).Sticker, obj6, "" + item.sticker.id + "-" + first3 === item.sticker.id);
    } else if (setting.LABEL === type) {
      obj = {};
      const merged8 = Object.assign(item);
      return selectionEnd(channel(canMentionEveryone[14]).Label, obj);
    } else {
      return null;
    }
  }, items19);
  const items20 = [tmp38Result.autocomplete, { maxHeight: memo3 }];
  obj = {};
  const items21 = [tmp38Result.autocompleteWrapper, , ];
  let autocompleteWrapperAbsolute = !isAndroidResult;
  if (autocompleteWrapperAbsolute) {
    autocompleteWrapperAbsolute = tmp38Result.autocompleteWrapperAbsolute;
  }
  items21[1] = autocompleteWrapperAbsolute;
  items21[2] = memo5;
  obj.style = items21;
  obj = { style: items22 };
  const items22 = [tmp38Result.autocompleteContainer, importDefault(dependencyMap[36])(memo4, screenIndex)];
  let tmp59Result = null != autocompleteType;
  if (tmp59Result) {
    obj1 = {};
    let tmp62 = autocompleteType === AutocompleteTypes.SLASHES_DISCOVERY;
    if (tmp62) {
      obj2 = {
        channel,
        onPressSlashItem(command, section, visualSection) {
              let num = 0;
              if (null != autocompleteSelectionStart) {
                num = autocompleteSelectionStart;
              }
              callback2({ command, section, type: setting.SLASH, visualSection, location: analyticsLocations(canMentionEveryone[41]).ApplicationCommandTriggerLocations.DISCOVERY }, num);
            },
        onHeightChange: tmp30,
        canOnlyUseTextCommands
      };
      tmp62 = selectionEnd(importDefault(dependencyMap[40]), obj2);
    }
    const items23 = [tmp62, , , ];
    let tmp68Result = autocompleteType === AutocompleteTypes.SLASHES;
    if (tmp68Result) {
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
        callback2({ command, section: arg1, type: setting.SLASH, location: analyticsLocations(canMentionEveryone[41]).ApplicationCommandTriggerLocations.DISCOVERY, query }, num);
      };
      obj3.style = items20;
      obj3.ItemSeparatorComponent = arg1(dependencyMap[29]).getItemSeparator;
      obj3.getItemLayout = arg1(dependencyMap[29]).getItemLayout;
      obj3.onCommandsChange = function onCommandsChange(arg0) {
        tmp30(callback(arg0, autocompleteType, context, token));
      };
      tmp68Result = selectionEnd(importDefault(dependencyMap[42]), obj3);
      const tmp68 = selectionEnd;
      const tmp71 = importDefault(dependencyMap[42]);
    }
    items23[1] = tmp68Result;
    let tmp76Result = autocompleteType === AutocompleteTypes.EMOJIS_AND_STICKERS;
    if (tmp76Result) {
      obj4 = {};
      let tmp78 = hasStickerResults;
      if (hasStickerResults) {
        obj5 = {};
        obj6 = { style: tmp38Result.sectionTitle, variant: "text-sm/semibold" };
        const intl = arg1(dependencyMap[44]).intl;
        obj7 = { prefix: query };
        obj6.children = intl.format(arg1(dependencyMap[44]).t.uferGG, obj7);
        const items24 = [selectionEnd(arg1(dependencyMap[43]).Text, obj6), ];
        obj8 = { horizontal: true };
        obj9 = {};
        const merged = Object.assign(items20);
        const merged1 = Object.assign(tmp38Result.stickersAutocompleteList);
        obj8.style = obj9;
        obj8.keyExtractor = function keyExtractor(sticker) {
          return sticker.sticker.id;
        };
        obj8.data = stickerResults;
        obj8.renderItem = callback5;
        obj8.showsHorizontalScrollIndicator = false;
        obj8.getItemLayout = getStickersItemLayout;
        obj10 = { right: 12 };
        obj8.contentInset = obj10;
        items24[1] = selectionEnd(chatInputRef, obj8);
        obj5.children = items24;
        tmp78 = callback2(closure_24, obj5);
      }
      const items25 = [tmp78, , ];
      if (hasStickerResults) {
        hasStickerResults = hasNonStickerResults;
      }
      if (hasStickerResults) {
        obj11 = { style: tmp38Result.sectionDivider };
        hasStickerResults = selectionEnd(importDefault(dependencyMap[45]), obj11);
      }
      items25[1] = hasStickerResults;
      if (hasNonStickerResults) {
        obj12 = { style: tmp38Result.sectionTitle, variant: "text-sm/semibold" };
        const intl2 = arg1(dependencyMap[44]).intl;
        const obj13 = {};
        const _HermesInternal = HermesInternal;
        obj13.prefix = "" + focused + query;
        obj12.children = intl2.format(arg1(dependencyMap[44]).t.ksAVYt, obj13);
        hasNonStickerResults = selectionEnd(arg1(dependencyMap[43]).Text, obj12);
      }
      items25[2] = hasNonStickerResults;
      obj4.children = items25;
      tmp76Result = callback2(closure_24, obj4);
      const tmp76 = callback2;
      const tmp77 = closure_24;
    }
    items23[2] = tmp76Result;
    stateFromStoresObject = chatInputRef;
    const obj14 = {
      style: items20,
      keyExtractor(arg0, arg1) {
          return String(arg1);
        },
      data: nonStickerResults,
      renderItem: callback5
    };
    stateFromStoresObject = arg1;
    stateFromStoresObject = dependencyMap;
    obj14.ItemSeparatorComponent = arg1(dependencyMap[29]).getItemSeparator;
    obj14.getItemLayout = arg1(dependencyMap[29]).getItemLayout;
    items23[3] = selectionEnd(chatInputRef, obj14);
    obj1.children = items23;
    tmp59Result = callback2(closure_24, obj1);
    const tmp59 = callback2;
    const tmp60 = closure_24;
  }
  obj.children = tmp59Result;
  const items26 = [selectionEnd(importDefault(dependencyMap[39]).View, obj), ];
  stateFromStoresObject = null != activeCommand && !commandsDisabled;
  if (stateFromStoresObject) {
    stateFromStoresObject = selectionEnd;
    stateFromStoresObject = commandsDisabled;
    const obj15 = { style: memo6 };
    stateFromStoresObject = importDefault;
    stateFromStoresObject = dependencyMap;
    const obj16 = { command: activeCommand, section: stateFromStoresObject.activeSection, guildId: channel.guild_id, onPressOption: callback3, currentOption: activeOption, optionStates };
    obj15.children = selectionEnd(importDefault(dependencyMap[46]), obj16);
    stateFromStoresObject = selectionEnd(commandsDisabled, obj15);
  }
  items26[1] = stateFromStoresObject;
  obj.children = items26;
  const tmp48 = importDefault(dependencyMap[36])(memo4, screenIndex);
  const tmp55 = callback2;
  const tmp56 = commandsDisabled;
  const tmp57 = selectionEnd;
  return selectionEnd(commandsDisabled, { style: tmp38Result.autocompletePositionRelative, children: callback2(commandsDisabled, obj) });
});
forwardRefResult.displayName = "AutocompleteWrapper";
result = result.fileFinishedImporting("modules/autocompleter/native/AutocompleteWrapper.tsx");

export default importAllResult.memo(forwardRefResult);
