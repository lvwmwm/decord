// Module ID: 11430
// Function ID: 88870
// Name: isSlashAutocompleteType
// Dependencies: [57, 31, 27, 7022, 4991, 4808, 5035, 653, 4566, 9558, 4567, 9640, 1852, 33, 4130, 477, 689, 11431, 1450, 5160, 5084, 566, 3834, 9889, 3803, 5164, 9639, 9327, 6753, 1881, 9557, 11433, 1555, 4324, 11435, 1324, 4528, 11436, 7941, 11337, 3991, 11437, 6755, 11444, 4126, 1212, 7191, 11445, 2]

// Module 11430 (isSlashAutocompleteType)
import _slicedToArray from "_slicedToArray";
import importAllResult from "_createForOfIteratorHelperLoose";
import get_ActivityIndicator from "toggleGuildExpandedState";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import ME from "ME";
import { BOOLEAN_CHOICES } from "TRUE_OPTION_NAME";
import AUTOCOMPLETE_ROW_HEIGHT from "AUTOCOMPLETE_ROW_HEIGHT";
import MENTION_SENTINEL from "MENTION_SENTINEL";
import { AutocompleteTypes } from "AutocompleteTypes";
import { EmojiInteractionPoint } from "set";
import jsxProd from "_createForOfIteratorHelperLoose";
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
let closure_23;
let closure_24;
let closure_25;
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
  const obj = { length: require(11431) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_SIZE };
  const result = index * (require(11431) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_SIZE + require(11431) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_MARGIN);
  const diff = index - 1;
  obj.offset = result + diff * require(11431) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_MARGIN;
  obj.index = index;
  return obj;
}
({ View: closure_5, FlatList: closure_6 } = get_ActivityIndicator);
({ AutoCompleteResultTypes: closure_11, WHITESPACE_RE: closure_12, AnalyticEvents: closure_13, UpsellTypes: closure_14 } = ME);
({ AUTOCOMPLETE_EMOJI_ROW_HEIGHT: closure_16, AUTOCOMPLETE_ROW_HEIGHT: closure_17 } = AUTOCOMPLETE_ROW_HEIGHT);
({ MENTION_SENTINEL: closure_18, CHANNEL_SENTINEL: closure_19, EMOJI_SENTINEL: closure_20 } = MENTION_SENTINEL);
({ jsx: closure_23, Fragment: closure_24, jsxs: closure_25 } = jsxProd);
const hairlineWidth = get_ActivityIndicator.StyleSheet.hairlineWidth;
let closure_27 = _createForOfIteratorHelperLoose.createStyles((borderRadius, borderWidth, borderTopWidth, marginHorizontal, marginBottom) => {
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
  obj.stickersAutocompleteList = { paddingLeft: 12 - require(11431) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_MARGIN, marginBottom: 12, height: require(11431) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_SIZE, flexShrink: 0 };
  return obj;
});
let obj = { resultCount: 0, stickerResults: [], nonStickerResults: [], hasStickerResults: false, hasNonStickerResults: false };
const forwardRefResult = importAllResult.forwardRef((analyticsLocations) => {
  let canOnlyUseTextCommands;
  let hairlineWidth;
  let screenIndex;
  let tmp14;
  analyticsLocations = analyticsLocations.analyticsLocations;
  const channel = analyticsLocations.channel;
  let canMentionEveryone = analyticsLocations.canMentionEveryone;
  const keyboardType = analyticsLocations.keyboardType;
  const onChangeAutoCompleteVisibility = analyticsLocations.onChangeAutoCompleteVisibility;
  const commandsDisabled = analyticsLocations.commandsDisabled;
  const chatInputRef = analyticsLocations.chatInputRef;
  let c43;
  let isScreenReaderEnabled;
  let callback2;
  let callback4;
  let first3;
  let closure_48;
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
  const IncludeStickersInAutocomplete = analyticsLocations(canMentionEveryone[24]).IncludeStickersInAutocomplete;
  const setting = IncludeStickersInAutocomplete.getSetting();
  let tmp5 = keyboardType(onChangeAutoCompleteVisibility.useState(query), 2);
  const first = tmp5[0];
  const resultCount = first.resultCount;
  const stickerResults = first.stickerResults;
  const nonStickerResults = first.nonStickerResults;
  let hasStickerResults = first.hasStickerResults;
  let hasNonStickerResults = first.hasNonStickerResults;
  let closure_18 = tmp5[1];
  let obj3 = analyticsLocations(canMentionEveryone[21]);
  let items1 = [activeOption];
  const stateFromStores = obj3.useStateFromStores(items1, () => activeOption.loadState);
  let obj4 = analyticsLocations(canMentionEveryone[21]);
  const items2 = [token];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => token.loadState);
  const context = onChangeAutoCompleteVisibility.useContext(analyticsLocations(canMentionEveryone[25]).RedesignCompatContext);
  const items3 = [channel, setting];
  const memo = onChangeAutoCompleteVisibility.useMemo(() => analyticsLocations(canMentionEveryone[26]).getAutocompleteOptions(channel, true, setting), items3);
  let tmp11 = keyboardType(onChangeAutoCompleteVisibility.useState({ focused: false, text: "", selectionStart: 0, selectionEnd: 0 }), 2);
  const first1 = tmp11[0];
  const focused = first1.focused;
  let text = first1.text;
  const EmojiInteractionPoint = text;
  const selectionStart = first1.selectionStart;
  const selectionEnd = first1.selectionEnd;
  let callback = tmp11[1];
  [tmp14, hairlineWidth] = keyboardType(onChangeAutoCompleteVisibility.useState(0), 2);
  const effect = onChangeAutoCompleteVisibility.useEffect(() => {
    let c0 = false;
    let result = activeCommand.addConditionalChangeListener(() => {
      let tmp = !c0;
      if (!c0) {
        let flag;
        if (activeCommand.isConnected()) {
          const result = analyticsLocations(canMentionEveryone[27]).initiateEmojiInteraction(text.AutocompleteWrapperShown);
          flag = false;
          const obj = analyticsLocations(canMentionEveryone[27]);
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
      setChatInputHeight: outer1_26,
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
          outer3_25(() => { ... });
        }, 16);
      }
    });
  }, []));
  const items4 = [selectionStart, selectionEnd, text, activeCommand, optionStates, activeOption, canMentionEveryone, commandsDisabled, memo, stateFromStores, stateFromStores1];
  const memo1 = onChangeAutoCompleteVisibility.useMemo(() => {
    let text;
    let tmp = selectionStart;
    let canMentionEveryone = selectionStart;
    if (null != text) {
      if (0 !== text.trim().length) {
        if (null != activeOption) {
          let obj1 = analyticsLocations(canMentionEveryone[28]);
          let applicationCommandOptionQueryOptions = obj1.getApplicationCommandOptionQueryOptions(activeOption);
        } else {
          applicationCommandOptionQueryOptions = { canMentionEveryone, canMentionHere: canMentionEveryone, canMentionChannels: true, canMentionUsers: true, canMentionRoles: true, canMentionAnyGuildUser: false, canMentionNonMentionableRoles: false, canMentionOtherGlobals: true };
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
                  if (analyticsLocations(canMentionEveryone[29]).ApplicationCommandOptionType.BOOLEAN === type) {
                    let prefix = "";
                    let CHOICES = focused.CHOICES;
                    let choices = nonStickerResults;
                    let flag = true;
                    let str = "";
                  } else if (analyticsLocations(canMentionEveryone[29]).ApplicationCommandOptionType.CHANNEL === type) {
                    prefix = context;
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
                    prefix = closure_18;
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
                    query = str6;
                    tmp65 = str6;
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
                  obj = { query: tmp65, autocompleteType: CHOICES, autocompleteSelectionStart: num2 + num3 };
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
            prefix = obj2.getPrefix(substr1);
            let obj3 = analyticsLocations(canMentionEveryone[30]);
            query = obj3.getQuery(substr1);
            if (null == query) {
              let _Object = Object;
              let tmp53 = memo;
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
              query = text;
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
    return { query: null, autocompleteType: null, autocompleteSelectionStart: null };
  }, items4);
  const autocompleteType = memo1.autocompleteType;
  query = memo1.query;
  const queryOptions = memo1.queryOptions;
  const autocompleteSelectionStart = memo1.autocompleteSelectionStart;
  const showOptionValuesPicker = memo1.showOptionValuesPicker;
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
    callback(query);
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
      const batchedStoreListener = new BatchedStoreListener(tmp, () => outer1_32(false));
      batchedStoreListener.attach("AutocompleteWrapper");
      return () => batchedStoreListener.detach();
    }
  }, items6);
  const items7 = [callback];
  const effect2 = onChangeAutoCompleteVisibility.useEffect(() => {
    callback(true);
  }, items7);
  const items8 = [stickerResults, nonStickerResults];
  const callback1 = onChangeAutoCompleteVisibility.useCallback(() => ({ numStickerResults: stickerResults.length, numEmojiResults: nonStickerResults.filter((type) => type.type === scaledTextLineHeight.EMOJI).length }), items8);
  const items9 = [autocompleteType, focused, keyboardType, resultCount];
  const memo2 = onChangeAutoCompleteVisibility.useMemo(() => {
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
  let closure_35 = onChangeAutoCompleteVisibility.useRef(false);
  const items10 = [autocompleteType, activeCommand];
  const effect3 = onChangeAutoCompleteVisibility.useEffect(() => {
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
  const effect4 = onChangeAutoCompleteVisibility.useEffect(() => {
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
  const tmp13 = keyboardType(onChangeAutoCompleteVisibility.useState(0), 2);
  const insets = channel(canMentionEveryone[19])({ includeKeyboardHeight: true }).insets;
  let diff = channel(canMentionEveryone[18])({ ignoreKeyboard: true }).height - insets.top - insets.bottom;
  const diff1 = diff - analyticsLocations(canMentionEveryone[20]).NAV_BAR_HEIGHT - tmp14;
  const items12 = [autocompleteType, stickerResults.length, diff1, scaledTextLineHeight];
  const memo3 = onChangeAutoCompleteVisibility.useMemo(() => {
    const sum = scaledTextLineHeight + 24;
    let num = 200;
    const sum1 = 200 + sum;
    if (stickerResults.length > 0) {
      num = sum1 + sum + analyticsLocations(canMentionEveryone[17]).AUTOCOMPLETE_STICKER_NODE_SIZE + 12 + outer1_26;
    } else if (autocompleteType === focused.EMOJIS_AND_STICKERS) {
      num = sum1;
    }
    return Math.min(diff1, num);
  }, items12);
  const tmp29 = keyboardType(onChangeAutoCompleteVisibility.useState(null), 2);
  const first2 = tmp29[0];
  let closure_39 = tmp31;
  const items13 = [resultCount, autocompleteType, memo2, hasStickerResults, hasNonStickerResults, nonStickerResults.length, memo3, first2, context, token, scaledTextLineHeight];
  const memo4 = onChangeAutoCompleteVisibility.useMemo(() => {
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
        sum3 = sum2 + outer1_26;
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
  let obj5 = analyticsLocations(canMentionEveryone[35]);
  const chatInputFloating = obj5.useMobileVisualRefreshConfig({ location: "AutocompleteWrapper" }).chatInputFloating;
  let closure_41 = tmp33;
  let obj6 = analyticsLocations(canMentionEveryone[22]);
  const token1 = obj6.useToken(channel(canMentionEveryone[16]).modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS);
  let obj7 = analyticsLocations(canMentionEveryone[22]);
  const token2 = obj7.useToken(channel(canMentionEveryone[16]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH);
  let obj8 = analyticsLocations(canMentionEveryone[22]);
  const token3 = obj8.useToken(channel(canMentionEveryone[16]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH);
  let obj9 = analyticsLocations(canMentionEveryone[22]);
  const token4 = obj9.useToken(channel(canMentionEveryone[16]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_HORIZONTAL);
  let obj10 = analyticsLocations(canMentionEveryone[22]);
  const token5 = obj10.useToken(channel(canMentionEveryone[16]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM);
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
  const tmp39Result = autocompleteType(token1, num, num2, token4, num3);
  c43 = tmp39Result;
  let obj11 = analyticsLocations(canMentionEveryone[36]);
  isScreenReaderEnabled = obj11.useIsScreenReaderEnabled();
  let obj12 = analyticsLocations(canMentionEveryone[15]);
  let isAndroidResult = obj12.isAndroid();
  if (!isAndroidResult) {
    let obj13 = analyticsLocations(canMentionEveryone[15]);
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
  const items15 = [memo4 > 0, token5];
  const memo5 = onChangeAutoCompleteVisibility.useMemo(() => {
    let prop = null;
    if (obj.isIOS()) {
      if (isScreenReaderEnabled) {
        prop = _undefined.autocompletePositionRelative;
      } else {
        prop = null;
      }
    }
    return prop;
  }, items14);
  const memo6 = onChangeAutoCompleteVisibility.useMemo(() => {
    let tmp;
    if (closure_41) {
      const obj = { marginTop: token5 };
      tmp = obj;
    }
    return tmp;
  }, items15);
  const items16 = [analyticsLocations, channel, chatInputRef];
  const tmp25 = channel(canMentionEveryone[18])({ ignoreKeyboard: true });
  let tmp39 = autocompleteType;
  callback2 = onChangeAutoCompleteVisibility.useCallback((type) => {
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
  const callback3 = onChangeAutoCompleteVisibility.useCallback((type) => {
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
  callback4 = onChangeAutoCompleteVisibility.useCallback((selectionType) => {
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
  let tmp53 = keyboardType(onChangeAutoCompleteVisibility.useState(null), 2);
  first3 = tmp53[0];
  closure_48 = tmp53[1];
  const items19 = [autocompleteType, callback4, first3, channel, activeCommand];
  const callback5 = onChangeAutoCompleteVisibility.useCallback((item) => {
    item = item.item;
    const type = item.type;
    if (scaledTextLineHeight.USER === type) {
      let obj = {};
      const merged = Object.assign(item);
      obj["guildId"] = channel.guild_id;
      obj["onPress"] = function onPress() {
        return outer1_46(item);
      };
      return selectionStart(channel(canMentionEveryone[17]).User, obj);
    } else if (scaledTextLineHeight.GLOBAL === type) {
      obj = {};
      const merged1 = Object.assign(item);
      obj["onPress"] = function onPress() {
        return outer1_46(item);
      };
      return selectionStart(channel(canMentionEveryone[17]).Global, obj);
    } else if (scaledTextLineHeight.ROLE === type) {
      const obj1 = {};
      const merged2 = Object.assign(item);
      obj1["onPress"] = function onPress() {
        return outer1_46(item);
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
        return outer1_46(item);
      };
      return selectionStart(channel(canMentionEveryone[17]).Channel, obj2);
    } else if (scaledTextLineHeight.EMOJI === type) {
      const obj3 = {};
      const merged4 = Object.assign(item);
      obj3["onPress"] = function onPress() {
        return outer1_46(item);
      };
      return selectionStart(channel(canMentionEveryone[17]).Emoji, obj3);
    } else if (scaledTextLineHeight.EMOJI_PREMIUM_UPSELL === type) {
      const obj4 = {};
      const merged5 = Object.assign(item);
      obj4["onPress"] = function onPress() {
        return outer1_46(item);
      };
      return selectionStart(channel(canMentionEveryone[17]).EmojiPremiumUpsell, obj4);
    } else if (scaledTextLineHeight.CHOICE === type) {
      const obj5 = {};
      const merged6 = Object.assign(item);
      obj5["onPress"] = function onPress() {
        return outer1_46(item);
      };
      return selectionStart(channel(canMentionEveryone[17]).Choice, obj5);
    } else if (scaledTextLineHeight.CHOICE_LOADING === type) {
      return selectionStart(channel(canMentionEveryone[17]).ChoiceLoading, {});
    } else if (scaledTextLineHeight.STICKER === type) {
      const obj6 = {};
      const merged7 = Object.assign(item);
      obj6["onPress"] = function onPress() {
        return outer1_46(item);
      };
      obj6["onLongPress"] = function onLongPress() {
        return outer1_48(item.sticker.id);
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
  items22 = [tmp39Result.autocompleteContainer, channel(canMentionEveryone[37])(memo4, screenIndex)];
  let tmp60Result = null != autocompleteType;
  if (tmp60Result) {
    obj1 = {};
    let tmp63 = autocompleteType === focused.SLASHES_DISCOVERY;
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
      tmp63 = selectionStart(channel(canMentionEveryone[41]), obj2);
    }
    const items23 = [tmp63, , , ];
    let tmp69Result = autocompleteType === focused.SLASHES;
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
      obj3.ItemSeparatorComponent = analyticsLocations(canMentionEveryone[30]).getItemSeparator;
      obj3.getItemLayout = analyticsLocations(canMentionEveryone[30]).getItemLayout;
      obj3.onCommandsChange = function onCommandsChange(arg0) {
        tmp31(autocompleteSelectionStart(arg0, autocompleteType, context, token));
      };
      tmp69Result = selectionStart(channel(canMentionEveryone[43]), obj3);
      const tmp69 = selectionStart;
      const tmp72 = channel(canMentionEveryone[43]);
    }
    items23[1] = tmp69Result;
    let tmp77Result = autocompleteType === focused.EMOJIS_AND_STICKERS;
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
        const intl = analyticsLocations(canMentionEveryone[45]).intl;
        obj9 = { prefix: query };
        obj8.children = intl.format(analyticsLocations(canMentionEveryone[45]).t.uferGG, obj9);
        obj6.children = selectionStart(analyticsLocations(canMentionEveryone[44]).Text, obj8);
        const items25 = [selectionStart(commandsDisabled, obj6), ];
        obj10 = { horizontal: true };
        obj11 = {};
        let merged = Object.assign(items20);
        let merged1 = Object.assign(tmp39Result.stickersAutocompleteList);
        obj10.style = obj11;
        obj10.keyExtractor = function keyExtractor(sticker) {
          return sticker.sticker.id;
        };
        obj10.data = stickerResults;
        obj10.renderItem = callback5;
        obj10.showsHorizontalScrollIndicator = false;
        obj10.getItemLayout = showOptionValuesPicker;
        obj12 = { right: 12 };
        obj10.contentInset = obj12;
        items25[1] = selectionStart(chatInputRef, obj10);
        obj5.children = items25;
        tmp79 = callback(selectionEnd, obj5);
      }
      const items26 = [tmp79, , ];
      if (hasStickerResults) {
        hasStickerResults = hasNonStickerResults;
      }
      if (hasStickerResults) {
        obj13 = { style: tmp39Result.sectionDivider };
        hasStickerResults = selectionStart(channel(canMentionEveryone[46]), obj13);
      }
      items26[1] = hasStickerResults;
      if (hasNonStickerResults) {
        const obj14 = {};
        const items27 = [tmp39Result.sectionTitle, ];
        const obj15 = { height: scaledTextLineHeight };
        items27[1] = obj15;
        obj14.style = items27;
        const obj16 = { variant: "text-sm/semibold" };
        const intl2 = analyticsLocations(canMentionEveryone[45]).intl;
        const obj17 = {};
        stateFromStoresObject = memo;
        stateFromStoresObject = globalThis;
        let _HermesInternal = HermesInternal;
        obj17.prefix = "" + memo + query;
        obj16.children = intl2.format(analyticsLocations(canMentionEveryone[45]).t.ksAVYt, obj17);
        obj14.children = selectionStart(analyticsLocations(canMentionEveryone[44]).Text, obj16);
        hasNonStickerResults = selectionStart(commandsDisabled, obj14);
      }
      items26[2] = hasNonStickerResults;
      obj4.children = items26;
      tmp77Result = callback(selectionEnd, obj4);
      const tmp77 = callback;
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
    stateFromStoresObject = analyticsLocations;
    stateFromStoresObject = canMentionEveryone;
    obj18.ItemSeparatorComponent = analyticsLocations(canMentionEveryone[30]).getItemSeparator;
    obj18.getItemLayout = analyticsLocations(canMentionEveryone[30]).getItemLayout;
    items23[3] = selectionStart(chatInputRef, obj18);
    obj1.children = items23;
    tmp60Result = callback(selectionEnd, obj1);
    let tmp60 = callback;
    let tmp61 = selectionEnd;
  }
  obj.children = tmp60Result;
  const items28 = [selectionStart(channel(canMentionEveryone[40]).View, obj), ];
  stateFromStoresObject = null != activeCommand && !commandsDisabled;
  if (stateFromStoresObject) {
    stateFromStoresObject = selectionStart;
    stateFromStoresObject = commandsDisabled;
    const obj19 = { style: memo6 };
    stateFromStoresObject = channel;
    stateFromStoresObject = canMentionEveryone;
    const obj20 = { command: activeCommand, section: stateFromStoresObject.activeSection, guildId: channel.guild_id, onPressOption: callback3, currentOption: activeOption, optionStates };
    obj19.children = selectionStart(channel(canMentionEveryone[47]), obj20);
    stateFromStoresObject = selectionStart(commandsDisabled, obj19);
  }
  items28[1] = stateFromStoresObject;
  obj.children = items28;
  let tmp49 = channel(canMentionEveryone[37])(memo4, screenIndex);
  let tmp56 = callback;
  let tmp57 = commandsDisabled;
  let tmp58 = selectionStart;
  return selectionStart(commandsDisabled, { style: tmp39Result.autocompletePositionRelative, children: callback(commandsDisabled, obj) });
});
forwardRefResult.displayName = "AutocompleteWrapper";
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/autocompleter/native/AutocompleteWrapper.tsx");

export default memoResult;
