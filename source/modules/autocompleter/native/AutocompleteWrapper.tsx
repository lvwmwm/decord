// Module ID: 11420
// Function ID: 88820
// Name: isSlashAutocompleteType
// Dependencies: []

// Module 11420 (isSlashAutocompleteType)
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
  const obj = { length: index(dependencyMap[17]).AUTOCOMPLETE_STICKER_NODE_SIZE };
  const result = index * (index(dependencyMap[17]).AUTOCOMPLETE_STICKER_NODE_SIZE + index(dependencyMap[17]).AUTOCOMPLETE_STICKER_NODE_MARGIN);
  const diff = index - 1;
  obj.offset = result + diff * index(dependencyMap[17]).AUTOCOMPLETE_STICKER_NODE_MARGIN;
  obj.index = index;
  return obj;
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
({ View: closure_5, FlatList: closure_6 } = tmp2);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
({ AutoCompleteResultTypes: closure_11, WHITESPACE_RE: closure_12, AnalyticEvents: closure_13, UpsellTypes: closure_14 } = arg1(dependencyMap[7]));
const BOOLEAN_CHOICES = arg1(dependencyMap[8]).BOOLEAN_CHOICES;
const tmp3 = arg1(dependencyMap[7]);
({ AUTOCOMPLETE_EMOJI_ROW_HEIGHT: closure_16, AUTOCOMPLETE_ROW_HEIGHT: closure_17 } = arg1(dependencyMap[9]));
const tmp4 = arg1(dependencyMap[9]);
({ MENTION_SENTINEL: closure_18, CHANNEL_SENTINEL: closure_19, EMOJI_SENTINEL: closure_20 } = arg1(dependencyMap[10]));
const AutocompleteTypes = arg1(dependencyMap[11]).AutocompleteTypes;
const EmojiInteractionPoint = arg1(dependencyMap[12]).EmojiInteractionPoint;
const tmp5 = arg1(dependencyMap[10]);
({ jsx: closure_23, Fragment: closure_24, jsxs: closure_25 } = arg1(dependencyMap[13]));
const hairlineWidth = tmp2.StyleSheet.hairlineWidth;
const tmp6 = arg1(dependencyMap[13]);
let closure_27 = arg1(dependencyMap[14]).createStyles((borderRadius, borderWidth, borderTopWidth, marginHorizontal, marginBottom) => {
  let obj = { autocompletePositionRelative: { position: "relative" } };
  obj = {};
  let obj2 = borderWidth(dependencyMap[15]);
  let str = "absolute";
  if (obj2.isAndroid()) {
    str = "relative";
  }
  obj.position = str;
  obj.marginHorizontal = marginHorizontal;
  obj.marginBottom = marginBottom;
  obj.autocompleteWrapper = obj;
  obj.autocompleteWrapperAbsolute = {};
  obj = { backgroundColor: importDefault(dependencyMap[16]).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, borderRadius, borderWidth, borderTopWidth, borderColor: importDefault(dependencyMap[16]).colors.MOBILE_FLOATING_ACCESSORY_BORDER, overflow: "hidden" };
  obj.autocompleteContainer = obj;
  obj.autocomplete = { backgroundColor: importDefault(dependencyMap[16]).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
  obj2 = { backgroundColor: importDefault(dependencyMap[16]).colors.MOBILE_FLOATING_ACCESSORY_BORDER, marginLeft: -16 };
  obj.sectionDivider = obj2;
  const obj3 = { "Null": null, "Null": "260617da8a2932d3af6bc2abf2ba2716", marginBottom: "rejected-alert", paddingHorizontal: "png", backgroundColor: importDefault(dependencyMap[16]).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
  obj.sectionTitle = obj3;
  const obj1 = { backgroundColor: importDefault(dependencyMap[16]).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
  obj.stickersAutocompleteList = { paddingLeft: 12 - borderWidth(dependencyMap[17]).AUTOCOMPLETE_STICKER_NODE_MARGIN, marginBottom: 12, height: borderWidth(dependencyMap[17]).AUTOCOMPLETE_STICKER_NODE_SIZE, flexShrink: 0 };
  return obj;
});
const obj = { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, stickerResults: [], nonStickerResults: [] };
const forwardRefResult = importAllResult.forwardRef((analyticsLocations) => {
  let canOnlyUseTextCommands;
  let screenIndex;
  let tmp14;
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
  let tmp39Result;
  let isScreenReaderEnabled;
  let callback2;
  let callback4;
  let first3;
  let closure_48;
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
  const token = obj1.useToken(importDefault(dependencyMap[16]).modules.mobile.TABLE_ROW_HEIGHT);
  let closure_10 = token;
  let obj2 = arg1(dependencyMap[23]);
  const scaledTextLineHeight = obj2.useScaledTextLineHeight("text-sm/semibold");
  const IncludeStickersInAutocomplete = arg1(dependencyMap[24]).IncludeStickersInAutocomplete;
  const setting = IncludeStickersInAutocomplete.getSetting();
  const tmp5 = callback(onChangeAutoCompleteVisibility.useState(obj), 2);
  const first = tmp5[0];
  const resultCount = first.resultCount;
  const stickerResults = first.stickerResults;
  const BOOLEAN_CHOICES = nonStickerResults;
  let hasStickerResults = first.hasStickerResults;
  let hasNonStickerResults = first.hasNonStickerResults;
  let closure_18 = tmp5[1];
  let obj3 = arg1(dependencyMap[21]);
  const items1 = [closure_8];
  const stateFromStores = obj3.useStateFromStores(items1, () => activeOption.loadState);
  let obj4 = arg1(dependencyMap[21]);
  const items2 = [closure_10];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => token.loadState);
  const context = importAllResult.useContext(arg1(dependencyMap[25]).RedesignCompatContext);
  const items3 = [channel, setting];
  const memo = importAllResult.useMemo(() => analyticsLocations(canMentionEveryone[26]).getAutocompleteOptions(channel, true, setting), items3);
  const tmp11 = callback(onChangeAutoCompleteVisibility.useState({ id: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", name: null, cost: false, id: null }), 2);
  const first1 = tmp11[0];
  const focused = first1.focused;
  const AutocompleteTypes = focused;
  const text = first1.text;
  const EmojiInteractionPoint = text;
  const selectionStart = first1.selectionStart;
  const selectionEnd = first1.selectionEnd;
  callback2 = tmp11[1];
  [tmp14, closure_26] = callback(onChangeAutoCompleteVisibility.useState(0), 2);
  const effect = importAllResult.useEffect(() => {
    let closure_0 = false;
    const result = activeCommand.addConditionalChangeListener(() => {
      let tmp = !callback;
      if (!callback) {
        let flag;
        if (connected.isConnected()) {
          const obj = callback(closure_2[27]);
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
      setChatInputHeight: closure_26,
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
          let obj1 = analyticsLocations(canMentionEveryone[28]);
          let applicationCommandOptionQueryOptions = obj1.getApplicationCommandOptionQueryOptions(activeOption);
        } else {
          applicationCommandOptionQueryOptions = { <string:74012607>: "<string:30179328>", <string:1627969113>: "<string:30645248>", <string:3832889527>: "hno-Arab-PK", <string:3884872643>: "isArray", <string:4283688289>: "isArray", <string:1294625142>: "isArray", <string:3708314371>: "<string:3211264>", <string:3119272427>: "isArray", canMentionEveryone, canMentionHere: canMentionEveryone };
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
                  if (analyticsLocations(canMentionEveryone[29]).ApplicationCommandOptionType.BOOLEAN === type) {
                    let analyticsLocations = "";
                    let CHOICES = focused.CHOICES;
                    let choices = nonStickerResults;
                    let flag = true;
                    let str = "";
                  } else if (analyticsLocations(canMentionEveryone[29]).ApplicationCommandOptionType.CHANNEL === type) {
                    analyticsLocations = context;
                    CHOICES = focused.CHANNELS;
                    const channelTypes = activeOption.channelTypes;
                    flag = true;
                    str = context;
                  } else {
                    if (analyticsLocations(canMentionEveryone[29]).ApplicationCommandOptionType.ROLE !== type) {
                      if (analyticsLocations(canMentionEveryone[29]).ApplicationCommandOptionType.USER !== type) {
                        flag = false;
                      }
                    }
                    analyticsLocations = closure_18;
                    CHOICES = focused.MENTIONS;
                    flag = true;
                    str = closure_18;
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
              CHOICES = focused.CHOICES;
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
          let tmp38 = setting;
          let tmp39 = text;
          let num9 = 0;
          let isMatch = setting.test(text[tmp - 1]);
          if (tmp37) {
            num9 = sum;
          }
          if (tmp === num9) {
            let tmp42 = text;
            let tmp43 = selectionEnd;
            let substr1 = text.slice(tmp, selectionEnd);
            let tmp45 = analyticsLocations;
            let tmp46 = canMentionEveryone;
            let obj2 = analyticsLocations(canMentionEveryone[30]);
            let prefix = obj2.getPrefix(substr1);
            analyticsLocations = prefix;
            let obj3 = analyticsLocations(canMentionEveryone[30]);
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
              let tmp49 = setting;
              tmp50 = tmp11;
              tmp51 = query;
              tmp52 = tmp;
              if (setting.test(query)) {
                break;
              }
            }
            let tmp57 = focused;
            let tmp58 = tmp51;
            if (tmp50 === focused.SLASHES) {
              let tmp59 = analyticsLocations;
              let tmp60 = canMentionEveryone;
              let num11 = 31;
              let obj5 = analyticsLocations(canMentionEveryone[31]);
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
    return { 1367204962: "mn", -77364717: "description", "Bool(false)": "Array" };
  }, items4);
  const autocompleteType = memo1.autocompleteType;
  let closure_27 = autocompleteType;
  const query = memo1.query;
  obj = query;
  const queryOptions = memo1.queryOptions;
  const isSlashAutocompleteType = queryOptions;
  const autocompleteSelectionStart = memo1.autocompleteSelectionStart;
  const getAutocompletesHeight = autocompleteSelectionStart;
  const showOptionValuesPicker = memo1.showOptionValuesPicker;
  const getStickersItemLayout = showOptionValuesPicker;
  const items5 = [autocompleteType, query, queryOptions, memo];
  callback = importAllResult.useCallback((arg0) => {
    if (null != autocompleteType) {
      if (null != query) {
        let obj = memo[closure_27];
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
    callback(query);
  }, items5);
  const items6 = [autocompleteType, callback, memo];
  const effect1 = importAllResult.useEffect(() => {
    let tmp = null;
    if (null != autocompleteType) {
      let stores;
      if (null != memo) {
        stores = memo[closure_27].stores;
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
  const items8 = [stickerResults, first.nonStickerResults];
  const callback1 = importAllResult.useCallback(() => ({ numStickerResults: stickerResults.length, numEmojiResults: nonStickerResults.filter((type) => type.type === constants.EMOJI).length }), items8);
  const items9 = [autocompleteType, focused, keyboardType, resultCount];
  const memo2 = importAllResult.useMemo(() => {
    let tmp = !focused;
    if (!tmp) {
      let tmp3 = 0 === resultCount;
      if (tmp3) {
        tmp3 = !queryOptions(autocompleteType);
      }
      tmp = tmp3;
    }
    let tmp6 = !tmp;
    if (!tmp) {
      tmp6 = keyboardType === analyticsLocations(canMentionEveryone[32]).KeyboardTypes.SYSTEM;
    }
    return tmp6;
  }, items9);
  let closure_35 = importAllResult.useRef(false);
  const items10 = [autocompleteType, activeCommand];
  const effect3 = importAllResult.useEffect(() => {
    let tmp2 = queryOptions(autocompleteType);
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
        let obj = analyticsLocations(canMentionEveryone[33]);
        obj = { location: "slash_ui" };
        obj.trackWithMetadata(resultCount.APPLICATION_COMMAND_TOP_OF_FUNNEL, obj);
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
      const result = analyticsLocations(canMentionEveryone[34]).iOSTrackAutocompleteOpen(autocompleteType, channel, callback1());
      const obj = analyticsLocations(canMentionEveryone[34]);
    }
  }, items11);
  const tmp13 = callback(onChangeAutoCompleteVisibility.useState(0), 2);
  const insets = importDefault(dependencyMap[19])({ includeKeyboardHeight: true }).insets;
  const diff = importDefault(dependencyMap[18])({ ignoreKeyboard: true }).height - insets.top - insets.bottom;
  const diff1 = diff - arg1(dependencyMap[20]).NAV_BAR_HEIGHT - tmp14;
  const items12 = [autocompleteType, stickerResults.length, diff1, scaledTextLineHeight];
  const memo3 = importAllResult.useMemo(() => {
    const sum = scaledTextLineHeight + 24;
    let num = 200;
    const sum1 = 200 + sum;
    if (stickerResults.length > 0) {
      num = sum1 + sum + analyticsLocations(canMentionEveryone[17]).AUTOCOMPLETE_STICKER_NODE_SIZE + 12 + closure_26;
    } else if (autocompleteType === focused.EMOJIS_AND_STICKERS) {
      num = sum1;
    }
    return Math.min(diff1, num);
  }, items12);
  const tmp29 = callback(onChangeAutoCompleteVisibility.useState(null), 2);
  const first2 = tmp29[0];
  const tmp31 = tmp29[1];
  const items13 = [resultCount, autocompleteType, memo2, hasStickerResults, hasNonStickerResults, first.nonStickerResults.length, memo3, first2, context, token, scaledTextLineHeight];
  const memo4 = importAllResult.useMemo(() => {
    if (autocompleteType === focused.EMOJIS_AND_STICKERS) {
      const tmp17 = autocompleteSelectionStart(nonStickerResults.length, autocompleteType, context, token);
      let sum = tmp17;
      if (hasNonStickerResults) {
        sum = tmp17 + (scaledTextLineHeight + 24);
      }
      let sum2 = sum;
      if (hasStickerResults) {
        const sum1 = scaledTextLineHeight + 24;
        sum2 = sum + (sum1 + analyticsLocations(canMentionEveryone[17]).AUTOCOMPLETE_STICKER_NODE_SIZE + 12);
      }
      let tmp27 = hasStickerResults;
      if (hasStickerResults) {
        tmp27 = hasNonStickerResults;
      }
      let sum3 = sum2;
      if (tmp27) {
        sum3 = sum2 + closure_26;
      }
      let num = sum3;
    } else if (queryOptions(autocompleteType)) {
      let num2 = 0;
      if (null != first2) {
        num2 = first2;
      }
      num = num2;
    } else {
      num = 0;
      if (null != autocompleteType) {
        num = autocompleteSelectionStart(resultCount, autocompleteType, context, token);
      }
    }
    let num7 = 0;
    if (memo2) {
      num7 = num;
    }
    return Math.min(num7, memo3);
  }, items13);
  let obj5 = arg1(dependencyMap[35]);
  const chatInputFloating = obj5.useMobileVisualRefreshConfig({ location: "AutocompleteWrapper" }).chatInputFloating;
  const tmp33 = memo4 > 0;
  let obj6 = arg1(dependencyMap[22]);
  const token1 = obj6.useToken(importDefault(dependencyMap[16]).modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS);
  let obj7 = arg1(dependencyMap[22]);
  const token2 = obj7.useToken(importDefault(dependencyMap[16]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH);
  let obj8 = arg1(dependencyMap[22]);
  const token3 = obj8.useToken(importDefault(dependencyMap[16]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH);
  let obj9 = arg1(dependencyMap[22]);
  const token4 = obj9.useToken(importDefault(dependencyMap[16]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_HORIZONTAL);
  let obj10 = arg1(dependencyMap[22]);
  const token5 = obj10.useToken(importDefault(dependencyMap[16]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM);
  let num = 0;
  if (tmp33) {
    num = token2;
  }
  let num2 = 0;
  if (tmp33) {
    num2 = token3;
  }
  if (tmp33) {
    let num3 = token5;
  } else {
    num3 = 0;
    if (null != activeCommand) {
      num3 = 0;
    }
  }
  tmp39Result = closure_27(token1, num, num2, token4, num3);
  let obj11 = arg1(dependencyMap[36]);
  isScreenReaderEnabled = obj11.useIsScreenReaderEnabled();
  let obj12 = arg1(dependencyMap[15]);
  let isAndroidResult = obj12.isAndroid();
  if (!isAndroidResult) {
    let obj13 = arg1(dependencyMap[15]);
    let isIOSResult = obj13.isIOS();
    if (isIOSResult) {
      let tmp46 = isScreenReaderEnabled;
      if (!isScreenReaderEnabled) {
        tmp46 = chatInputFloating;
      }
      isIOSResult = tmp46;
    }
    isAndroidResult = isIOSResult;
  }
  const items14 = [isScreenReaderEnabled, chatInputFloating, tmp39Result.autocompletePositionRelative];
  const items15 = [tmp33, token5];
  const memo5 = importAllResult.useMemo(() => {
    let prop = null;
    if (obj.isIOS()) {
      if (isScreenReaderEnabled) {
        prop = tmp39Result.autocompletePositionRelative;
      } else {
        prop = null;
      }
    }
    return prop;
  }, items14);
  const memo6 = importAllResult.useMemo(() => {
    let tmp;
    if (tmp33) {
      const obj = { marginTop: token5 };
      tmp = obj;
    }
    return tmp;
  }, items15);
  const items16 = [analyticsLocations, channel, chatInputRef];
  const tmp25 = importDefault(dependencyMap[18])({ ignoreKeyboard: true });
  const tmp39 = closure_27;
  callback2 = importAllResult.useCallback((type) => {
    if (type.type !== scaledTextLineHeight.EMOJI_PREMIUM_UPSELL) {
      let result;
      const autocompleteResultText = analyticsLocations(canMentionEveryone[30]).getAutocompleteResultText(type, channel);
      const current = chatInputRef.current;
      const applicationCommandManager = current.getApplicationCommandManager();
      if (null != applicationCommandManager) {
        result = applicationCommandManager.setAutoCompleteResult(channel.id, autocompleteResultText, arg2, type);
      }
      if (!result) {
        const current2 = chatInputRef.current;
        current2.insertText(autocompleteResultText, arg1, type.type !== scaledTextLineHeight.STICKER);
        if (type.type === scaledTextLineHeight.STICKER) {
          const current3 = chatInputRef.current;
          current3.handleSelectSticker(type.sticker, arg1);
        }
      }
      const obj3 = analyticsLocations(canMentionEveryone[30]);
    } else {
      let obj = channel(canMentionEveryone[38]);
      obj = { initialUpsellKey: stickerResults.EMOJI_AUTOCOMPLETE, analyticsLocations };
      const result1 = obj.handleShowUpsellAlert(obj);
    }
  }, items16);
  const items17 = [chatInputRef, optionStates, channel];
  const items18 = [autocompleteSelectionStart, autocompleteType, callback1, channel, callback2, showOptionValuesPicker];
  const callback3 = importAllResult.useCallback((type) => {
    const current = chatInputRef.current;
    const applicationCommandManager = current.getApplicationCommandManager();
    if (type.type === analyticsLocations(canMentionEveryone[29]).ApplicationCommandOptionType.ATTACHMENT) {
      if (null != optionStates[type.name].lastValidationResult) {
        if (lastValidationResult.success) {
          const result = analyticsLocations(canMentionEveryone[39]).openCommandAttachmentPreview(applicationCommandManager, tmp5, type.name);
          const obj2 = analyticsLocations(canMentionEveryone[39]);
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
    let obj = analyticsLocations(canMentionEveryone[34]);
    obj = { selectionType: selectionType.type };
    let id = null;
    if (selectionType.type === scaledTextLineHeight.STICKER) {
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
  const tmp53 = callback(onChangeAutoCompleteVisibility.useState(null), 2);
  first3 = tmp53[0];
  closure_48 = tmp53[1];
  const items19 = [autocompleteType, callback4, first3, channel, activeCommand];
  const callback5 = importAllResult.useCallback((item) => {
    item = item.item;
    const analyticsLocations = item;
    const type = item.type;
    if (scaledTextLineHeight.USER === type) {
      let obj = {};
      const merged = Object.assign(item);
      obj["guildId"] = channel.guild_id;
      obj["onPress"] = function onPress() {
        return callback(item);
      };
      return selectionStart(channel(canMentionEveryone[17]).User, obj);
    } else if (scaledTextLineHeight.GLOBAL === type) {
      obj = {};
      const merged1 = Object.assign(item);
      obj["onPress"] = function onPress() {
        return callback(item);
      };
      return selectionStart(channel(canMentionEveryone[17]).Global, obj);
    } else if (scaledTextLineHeight.ROLE === type) {
      const obj1 = {};
      const merged2 = Object.assign(item);
      obj1["onPress"] = function onPress() {
        return callback(item);
      };
      let tmp53 = autocompleteType === focused.MENTIONS;
      if (tmp53) {
        tmp53 = null == activeCommand;
      }
      obj1["showDescription"] = tmp53;
      return selectionStart(channel(canMentionEveryone[17]).Role, obj1);
    } else if (scaledTextLineHeight.CHANNEL === type) {
      const obj2 = {};
      const merged3 = Object.assign(item);
      obj2["onPress"] = function onPress() {
        return callback(item);
      };
      return selectionStart(channel(canMentionEveryone[17]).Channel, obj2);
    } else if (scaledTextLineHeight.EMOJI === type) {
      const obj3 = {};
      const merged4 = Object.assign(item);
      obj3["onPress"] = function onPress() {
        return callback(item);
      };
      return selectionStart(channel(canMentionEveryone[17]).Emoji, obj3);
    } else if (scaledTextLineHeight.EMOJI_PREMIUM_UPSELL === type) {
      const obj4 = {};
      const merged5 = Object.assign(item);
      obj4["onPress"] = function onPress() {
        return callback(item);
      };
      return selectionStart(channel(canMentionEveryone[17]).EmojiPremiumUpsell, obj4);
    } else if (scaledTextLineHeight.CHOICE === type) {
      const obj5 = {};
      const merged6 = Object.assign(item);
      obj5["onPress"] = function onPress() {
        return callback(item);
      };
      return selectionStart(channel(canMentionEveryone[17]).Choice, obj5);
    } else if (scaledTextLineHeight.CHOICE_LOADING === type) {
      return selectionStart(channel(canMentionEveryone[17]).ChoiceLoading, {});
    } else if (scaledTextLineHeight.STICKER === type) {
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
      return selectionStart(channel(canMentionEveryone[17]).Sticker, obj6, "" + item.sticker.id + "-" + first3 === item.sticker.id);
    } else if (scaledTextLineHeight.LABEL === type) {
      obj = {};
      const merged8 = Object.assign(item);
      return selectionStart(channel(canMentionEveryone[17]).Label, obj);
    } else {
      return null;
    }
  }, items19);
  const items20 = [tmp39Result.autocomplete, { maxHeight: memo3 }];
  obj = {};
  const items21 = [tmp39Result.autocompleteWrapper, , ];
  let autocompleteWrapperAbsolute = !isAndroidResult;
  if (autocompleteWrapperAbsolute) {
    autocompleteWrapperAbsolute = tmp39Result.autocompleteWrapperAbsolute;
  }
  items21[1] = autocompleteWrapperAbsolute;
  items21[2] = memo5;
  obj.style = items21;
  obj = { style: items22 };
  const items22 = [tmp39Result.autocompleteContainer, importDefault(dependencyMap[37])(memo4, screenIndex)];
  let tmp60Result = null != autocompleteType;
  if (tmp60Result) {
    obj1 = {};
    let tmp63 = autocompleteType === AutocompleteTypes.SLASHES_DISCOVERY;
    if (tmp63) {
      obj2 = {
        channel,
        onPressSlashItem(command, section, visualSection) {
              let num = 0;
              if (null != autocompleteSelectionStart) {
                num = autocompleteSelectionStart;
              }
              callback2({ command, section, type: scaledTextLineHeight.SLASH, visualSection, location: analyticsLocations(canMentionEveryone[42]).ApplicationCommandTriggerLocations.DISCOVERY }, num);
            },
        onHeightChange: tmp31,
        canOnlyUseTextCommands
      };
      tmp63 = selectionStart(importDefault(dependencyMap[41]), obj2);
    }
    const items23 = [tmp63, , , ];
    let tmp69Result = autocompleteType === AutocompleteTypes.SLASHES;
    if (tmp69Result) {
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
        callback2({ command, section: arg1, type: scaledTextLineHeight.SLASH, location: analyticsLocations(canMentionEveryone[42]).ApplicationCommandTriggerLocations.DISCOVERY, query }, num);
      };
      obj3.style = items20;
      obj3.ItemSeparatorComponent = arg1(dependencyMap[30]).getItemSeparator;
      obj3.getItemLayout = arg1(dependencyMap[30]).getItemLayout;
      obj3.onCommandsChange = function onCommandsChange(arg0) {
        tmp31(autocompleteSelectionStart(arg0, autocompleteType, context, token));
      };
      tmp69Result = selectionStart(importDefault(dependencyMap[43]), obj3);
      const tmp69 = selectionStart;
      const tmp72 = importDefault(dependencyMap[43]);
    }
    items23[1] = tmp69Result;
    let tmp77Result = autocompleteType === AutocompleteTypes.EMOJIS_AND_STICKERS;
    if (tmp77Result) {
      obj4 = {};
      let tmp79 = hasStickerResults;
      if (hasStickerResults) {
        obj5 = {};
        obj6 = {};
        const items24 = [tmp39Result.sectionTitle, ];
        obj7 = { height: scaledTextLineHeight };
        items24[1] = obj7;
        obj6.style = items24;
        obj8 = { variant: "text-sm/semibold" };
        const intl = arg1(dependencyMap[45]).intl;
        obj9 = { prefix: query };
        obj8.children = intl.format(arg1(dependencyMap[45]).t.uferGG, obj9);
        obj6.children = selectionStart(arg1(dependencyMap[44]).Text, obj8);
        const items25 = [selectionStart(commandsDisabled, obj6), ];
        obj10 = { horizontal: true };
        obj11 = {};
        const merged = Object.assign(items20);
        const merged1 = Object.assign(tmp39Result.stickersAutocompleteList);
        obj10.style = obj11;
        obj10.keyExtractor = function keyExtractor(sticker) {
          return sticker.sticker.id;
        };
        obj10.data = stickerResults;
        obj10.renderItem = callback5;
        obj10.showsHorizontalScrollIndicator = false;
        obj10.getItemLayout = getStickersItemLayout;
        obj12 = { right: 12 };
        obj10.contentInset = obj12;
        items25[1] = selectionStart(chatInputRef, obj10);
        obj5.children = items25;
        tmp79 = callback2(selectionEnd, obj5);
      }
      const items26 = [tmp79, , ];
      if (hasStickerResults) {
        hasStickerResults = hasNonStickerResults;
      }
      if (hasStickerResults) {
        obj13 = { style: tmp39Result.sectionDivider };
        hasStickerResults = selectionStart(importDefault(dependencyMap[46]), obj13);
      }
      items26[1] = hasStickerResults;
      if (hasNonStickerResults) {
        const obj14 = {};
        const items27 = [tmp39Result.sectionTitle, ];
        const obj15 = { height: scaledTextLineHeight };
        items27[1] = obj15;
        obj14.style = items27;
        const obj16 = { variant: "text-sm/semibold" };
        const intl2 = arg1(dependencyMap[45]).intl;
        const obj17 = {};
        stateFromStoresObject = memo;
        stateFromStoresObject = globalThis;
        const _HermesInternal = HermesInternal;
        obj17.prefix = "" + memo + query;
        obj16.children = intl2.format(arg1(dependencyMap[45]).t.ksAVYt, obj17);
        obj14.children = selectionStart(arg1(dependencyMap[44]).Text, obj16);
        hasNonStickerResults = selectionStart(commandsDisabled, obj14);
      }
      items26[2] = hasNonStickerResults;
      obj4.children = items26;
      tmp77Result = callback2(selectionEnd, obj4);
      const tmp77 = callback2;
      const tmp78 = selectionEnd;
    }
    items23[2] = tmp77Result;
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
    stateFromStoresObject = arg1;
    stateFromStoresObject = dependencyMap;
    obj18.ItemSeparatorComponent = arg1(dependencyMap[30]).getItemSeparator;
    obj18.getItemLayout = arg1(dependencyMap[30]).getItemLayout;
    items23[3] = selectionStart(chatInputRef, obj18);
    obj1.children = items23;
    tmp60Result = callback2(selectionEnd, obj1);
    const tmp60 = callback2;
    const tmp61 = selectionEnd;
  }
  obj.children = tmp60Result;
  const items28 = [selectionStart(importDefault(dependencyMap[40]).View, obj), ];
  stateFromStoresObject = null != activeCommand && !commandsDisabled;
  if (stateFromStoresObject) {
    stateFromStoresObject = selectionStart;
    stateFromStoresObject = commandsDisabled;
    const obj19 = { style: memo6 };
    stateFromStoresObject = importDefault;
    stateFromStoresObject = dependencyMap;
    const obj20 = { command: activeCommand, section: stateFromStoresObject.activeSection, guildId: channel.guild_id, onPressOption: callback3, currentOption: activeOption, optionStates };
    obj19.children = selectionStart(importDefault(dependencyMap[47]), obj20);
    stateFromStoresObject = selectionStart(commandsDisabled, obj19);
  }
  items28[1] = stateFromStoresObject;
  obj.children = items28;
  const tmp49 = importDefault(dependencyMap[37])(memo4, screenIndex);
  const tmp56 = callback2;
  const tmp57 = commandsDisabled;
  const tmp58 = selectionStart;
  return selectionStart(commandsDisabled, { style: tmp39Result.autocompletePositionRelative, children: callback2(commandsDisabled, obj) });
});
forwardRefResult.displayName = "AutocompleteWrapper";
const obj2 = arg1(dependencyMap[14]);
const memoResult = importAllResult.memo(forwardRefResult);
const result = arg1(dependencyMap[48]).fileFinishedImporting("modules/autocompleter/native/AutocompleteWrapper.tsx");

export default memoResult;
