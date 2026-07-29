// Module ID: 11484
// Function ID: 11485
// Name: getStickersItemLayout
// Dependencies: [32, 19, 17, 6091, 5048, 4865, 5092, 676, 4623, 9579, 4624, 9660, 1877, 21, 4189, 500, 712, 11485, 1474, 5215, 5140, 589, 3893, 9911, 11488, 3862, 5219, 9659, 9661, 11489, 9337, 5702, 1906, 9578, 11169, 1579, 4384, 11490, 1348, 4586, 11491, 6191, 11391, 1297, 4050, 11492, 5704, 11499, 4185, 1236, 7641, 11500, 11501, 2]

// Module 11484 (getStickersItemLayout)
import PermissionOverwriteType from "PermissionOverwriteType";
import importAllResult from "useSafeAreaInsetsKeyboardAware";
import get_ActivityIndicator from "AutocompleteLabel";
import handleInit from "handleInit";
import getEmojiToGroupId from "getEmojiToGroupId";
import _handleConnectionOpen from "_handleConnectionOpen";
import loadSavedGuildStickers from "loadSavedGuildStickers";
import ME from "ME";
import { BOOLEAN_CHOICES } from "TRUE_OPTION_NAME";
import AUTOCOMPLETE_ROW_HEIGHT from "AUTOCOMPLETE_ROW_HEIGHT";
import regExp from "regExp";
import { AutocompleteTypes } from "AutocompleteTypes";
import { EmojiInteractionPoint } from "set";
import jsxProd from "initialize";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c5;
let closure_12;
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
let closure_6;
let map1;
let unpackModuleId;
const require = arg1;
function getStickersItemLayout(arg0, arg1) {
  const obj = { length: require(11485) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_SIZE, offset: null, index: null };
  const result = arg1 * (require(11485) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_SIZE + require(11485) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_MARGIN);
  const diff = arg1 - 1;
  obj[1] = result + diff * require(11485) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_MARGIN;
  obj[2] = arg1;
  return obj;
}
let c4 = importAllResult;
({ View: c5, FlatList: closure_6, StyleSheet } = get_ActivityIndicator);
({ AutoCompleteResultTypes: unpackModuleId, WHITESPACE_RE: closure_12, AnalyticEvents: map1, UpsellTypes: closure_14 } = ME);
({ AUTOCOMPLETE_EMOJI_ROW_HEIGHT: closure_16, AUTOCOMPLETE_ROW_HEIGHT: closure_17 } = AUTOCOMPLETE_ROW_HEIGHT);
({ MENTION_SENTINEL: closure_18, CHANNEL_SENTINEL: closure_19, EMOJI_SENTINEL: closure_20, GAME_MENTION_INPUT_PREFIX: closure_21 } = regExp);
({ jsx: closure_24, Fragment: closure_25, jsxs: closure_26 } = jsxProd);
let c27 = "text-sm/semibold";
const hairlineWidth = StyleSheet.hairlineWidth;
let closure_29 = createCacheKey.createStyles((borderRadius, borderWidth, borderTopWidth, marginHorizontal, marginBottom) => {
  let obj = { autocompletePositionRelative: { position: "relative" }, autocompleteWrapper: null, autocompleteWrapperAbsolute: null, autocompleteContainer: null, autocomplete: null, sectionDivider: null, sectionTitle: null, stickersAutocompleteList: null, newTag: null };
  let obj1 = require(500) /* set */;
  let str = "absolute";
  if (obj1.isAndroid()) {
    str = "relative";
  }
  obj[1] = { position: str, marginHorizontal, marginBottom };
  obj[2] = { left: 0, right: 0, bottom: 0 };
  obj = { backgroundColor: importDefault(712).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, borderRadius, borderWidth, borderTopWidth, borderColor: importDefault(712).colors.MOBILE_FLOATING_ACCESSORY_BORDER, overflow: "hidden" };
  obj[3] = obj;
  obj = { flexGrow: 0, flexShrink: 1, backgroundColor: importDefault(712).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
  obj[4] = obj;
  obj1 = { backgroundColor: importDefault(712).colors.MOBILE_FLOATING_ACCESSORY_BORDER, marginLeft: -16 };
  obj[5] = obj1;
  obj[6] = { backgroundColor: importDefault(712).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, paddingLeft: 12, marginVertical: 12, justifyContent: "center" };
  const obj2 = { backgroundColor: importDefault(712).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, paddingLeft: 12, marginVertical: 12, justifyContent: "center" };
  obj[7] = { paddingLeft: 12 - require(11485) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_MARGIN, marginBottom: 12, height: require(11485) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_SIZE, flexShrink: 0 };
  const obj3 = { paddingLeft: 12 - require(11485) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_MARGIN, marginBottom: 12, height: require(11485) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_SIZE, flexShrink: 0 };
  obj[8] = { backgroundColor: importDefault(712).colors.BADGE_BACKGROUND_BRAND };
  return obj;
});
let closure_31 = { resultCount: 0, stickerResults: [], nonStickerResults: [], hasStickerResults: false, hasNonStickerResults: false };
const forwardRefResult = importAllResult.forwardRef((analyticsLocations, ref) => {
  let c27;
  let canOnlyUseTextCommands;
  let screenIndex;
  let tmp20;
  analyticsLocations = analyticsLocations.analyticsLocations;
  const channel = analyticsLocations.channel;
  let canMentionEveryone = analyticsLocations.canMentionEveryone;
  const keyboardType = analyticsLocations.keyboardType;
  const onChangeAutoCompleteVisibility = analyticsLocations.onChangeAutoCompleteVisibility;
  const commandsDisabled = analyticsLocations.commandsDisabled;
  const chatInputRef = analyticsLocations.chatInputRef;
  let optionStates;
  let activeOption;
  let activeCommand;
  let token;
  let scaledTextLineHeight;
  let c12;
  let setting;
  let resultCount;
  let stickerResults;
  let nonStickerResults;
  let hasStickerResults;
  let hasNonStickerResults;
  let closure_19;
  let context;
  let memo;
  let focused;
  let c23;
  let selectionStart;
  let selectionEnd;
  let closure_26;
  c27 = undefined;
  let gameMentionsAutocompleteConfig;
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
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ optionStates: optionStates.getOptionStates(channel.id), activeOption: optionStates.getActiveOption(channel.id), activeCommand: optionStates.getActiveCommand(channel.id), activeSection: optionStates.getActiveCommandSection(channel.id) }));
  optionStates = stateFromStoresObject.optionStates;
  activeOption = stateFromStoresObject.activeOption;
  activeCommand = stateFromStoresObject.activeCommand;
  let obj1 = analyticsLocations(canMentionEveryone[22]);
  token = obj1.useToken(channel(canMentionEveryone[16]).modules.mobile.TABLE_ROW_HEIGHT);
  let obj2 = analyticsLocations(canMentionEveryone[23]);
  scaledTextLineHeight = obj2.useScaledTextLineHeight(c27);
  let tmp8 = channel(canMentionEveryone[24])();
  c12 = tmp8;
  const IncludeStickersInAutocomplete = analyticsLocations(canMentionEveryone[25]).IncludeStickersInAutocomplete;
  setting = IncludeStickersInAutocomplete.getSetting();
  let obj3 = onChangeAutoCompleteVisibility;
  let tmp11 = keyboardType(onChangeAutoCompleteVisibility.useState(beginSearch), 2);
  const first = tmp11[0];
  resultCount = first.resultCount;
  stickerResults = first.stickerResults;
  nonStickerResults = first.nonStickerResults;
  hasStickerResults = first.hasStickerResults;
  hasNonStickerResults = first.hasNonStickerResults;
  closure_19 = tmp11[1];
  let obj4 = analyticsLocations(canMentionEveryone[21]);
  let items1 = [activeOption];
  const stateFromStores = obj4.useStateFromStores(items1, () => activeOption.loadState);
  let obj5 = analyticsLocations(canMentionEveryone[21]);
  const items2 = [token];
  const stateFromStores1 = obj5.useStateFromStores(items2, () => token.loadState);
  context = onChangeAutoCompleteVisibility.useContext(analyticsLocations(canMentionEveryone[26]).RedesignCompatContext);
  const items3 = [channel, setting];
  memo = onChangeAutoCompleteVisibility.useMemo(() => analyticsLocations(canMentionEveryone[27]).getAutocompleteOptions(channel, true, setting), items3);
  let tmp17 = keyboardType(onChangeAutoCompleteVisibility.useState({ focused: false, text: "", selectionStart: 0, selectionEnd: 0 }), 2);
  const first1 = tmp17[0];
  focused = first1.focused;
  let text = first1.text;
  c23 = text;
  selectionStart = first1.selectionStart;
  selectionEnd = first1.selectionEnd;
  closure_26 = tmp17[1];
  [tmp20, c27] = keyboardType(onChangeAutoCompleteVisibility.useState(0), 2);
  let obj6 = analyticsLocations(canMentionEveryone[28]);
  gameMentionsAutocompleteConfig = obj6.getGameMentionsAutocompleteConfig("AutocompleteWrapper game search");
  c29 = tmp22;
  const tmp23 = channel(canMentionEveryone[29])(text, selectionEnd, chatInputRef, gameMentionsAutocompleteConfig.enabled && !gameMentionsAutocompleteConfig.combineMentionAutocomplete, memo);
  anchor = tmp23.anchor;
  beginSearch = tmp23.beginSearch;
  const effect = obj3.useEffect(() => {
    let c0 = false;
    let result = activeCommand.addConditionalChangeListener(() => {
      let tmp = !callback;
      if (!callback) {
        let flag;
        if (outer1_9.isConnected()) {
          const result = callback(outer1_2[30]).initiateEmojiInteraction(outer1_23.AutocompleteWrapperShown);
          flag = false;
          const obj = callback(outer1_2[30]);
        }
        tmp = flag;
      }
      return tmp;
    });
    return () => {
      let c0 = true;
    };
  }, []);
  const imperativeHandle = obj3.useImperativeHandle(ref, obj3.useMemo(() => {
    let c0 = -1;
    return () => ({
      setChatInputHeight: outer1_27,
      setData(arg0) {
        let closure_0;
        let closure_1;
        let closure_2;
        let PermissionOverwriteType;
        ({ focused: closure_0, text: closure_1, selectionStart: closure_2, selectionEnd: PermissionOverwriteType } = arg0);
        if (-1 !== timeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
          outer1_26(() => { ... });
        }, 16);
      }
    });
  }, []));
  const items4 = [selectionStart, selectionEnd, text, activeCommand, optionStates, activeOption, canMentionEveryone, commandsDisabled, memo, stateFromStores, stateFromStores1, gameMentionsAutocompleteConfig.enabled && !gameMentionsAutocompleteConfig.combineMentionAutocomplete, anchor];
  const memo1 = obj3.useMemo(() => {
    let canMentionEveryone = selectionStart;
    if (null != c23) {
      if (0 !== str.trim().length) {
        if (null != activeOption) {
          let obj1 = analyticsLocations(canMentionEveryone[31]);
          let applicationCommandOptionQueryOptions = obj1.getApplicationCommandOptionQueryOptions(tmp69);
        } else {
          applicationCommandOptionQueryOptions = { canMentionEveryone: null, canMentionHere: null, canMentionChannels: true, canMentionUsers: true, canMentionRoles: true, canMentionAnyGuildUser: false, canMentionNonMentionableRoles: false, canMentionOtherGlobals: true, canMentionGames: true };
          applicationCommandOptionQueryOptions[0] = canMentionEveryone;
          applicationCommandOptionQueryOptions[1] = canMentionEveryone;
        }
        let tmp5;
        if (null != activeOption) {
          tmp5 = optionStates[tmp69.name];
        }
        if (null != activeCommand) {
          if (null != tmp69) {
            if (null != tmp5) {
              let num = tmp5.location;
              if (num == null) {
                num = 0;
              }
              let num2 = tmp5.length;
              if (num2 == null) {
                num2 = 0;
              }
              let substr;
              if (tmp >= num + num2) {
                substr = str.substring(num + num2, tmp);
              }
              let query = substr;
              if (null == tmp69.choices) {
                if (!tmp69.autocomplete) {
                  const type = tmp69.type;
                  if (analyticsLocations(canMentionEveryone[32]).ApplicationCommandOptionType.BOOLEAN === type) {
                    let prefix = "";
                    let CHOICES = focused.CHOICES;
                    let choices = stickerResults;
                    let flag = true;
                    let str2 = "";
                  } else if (analyticsLocations(canMentionEveryone[32]).ApplicationCommandOptionType.CHANNEL === type) {
                    prefix = closure_19;
                    CHOICES = focused.CHANNELS;
                    const channelTypes = tmp69.channelTypes;
                    flag = true;
                    str2 = closure_19;
                  } else {
                    if (analyticsLocations(canMentionEveryone[32]).ApplicationCommandOptionType.ROLE !== type) {
                      if (analyticsLocations(canMentionEveryone[32]).ApplicationCommandOptionType.USER !== type) {
                        flag = false;
                      }
                    }
                    prefix = hasNonStickerResults;
                    CHOICES = focused.MENTIONS;
                    flag = true;
                    str2 = hasNonStickerResults;
                  }
                }
                let tmp8 = substr;
                let tmp9 = CHOICES;
                if (flag) {
                  let startsWithResult = null != str2;
                  if (startsWithResult) {
                    startsWithResult = "" !== str2;
                  }
                  if (startsWithResult) {
                    startsWithResult = null != substr;
                  }
                  if (startsWithResult) {
                    startsWithResult = substr.startsWith(str2);
                  }
                  let tmp62 = substr;
                  if (startsWithResult) {
                    let str8 = "";
                    if (substr.length > str2.length) {
                      str8 = substr.substring(str2.length);
                    }
                    query = str8;
                    tmp62 = str8;
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
                  obj = { query: null, autocompleteType: null, autocompleteSelectionStart: null, queryOptions: null, showOptionValuesPicker: null };
                  obj[0] = tmp62;
                  obj[1] = CHOICES;
                  obj[2] = num + num2;
                  obj1 = { activeCommand: null, optionValues: null, isActiveApplicationCommand: null, option: null, choices: null, channelTypes: null };
                  obj1[0] = tmp7;
                  obj1[1] = obj;
                  obj1[2] = flag;
                  obj1[3] = tmp69;
                  obj1[4] = choices;
                  obj1[5] = channelTypes;
                  const merged = Object.assign(applicationCommandOptionQueryOptions);
                  obj[3] = obj1;
                  obj[4] = flag;
                  return obj;
                }
              }
              prefix = "";
              CHOICES = focused.CHOICES;
              choices = tmp69.choices;
              flag = true;
              str2 = "";
            }
          }
        }
        if (c29) {
          if (null != anchor) {
            let obj2 = { query: null, autocompleteType: null, autocompleteSelectionStart: null, queryOptions: null };
            obj2[0] = str.slice(tmp24 + memo.length, selectionEnd).toLowerCase();
            obj2[1] = focused.GAME_MENTIONS;
            obj2[2] = tmp24;
            let obj3 = {};
            const merged1 = Object.assign(applicationCommandOptionQueryOptions);
            obj2[3] = obj3;
            return obj2;
          }
        }
        let sum = null;
        if (null != tmp5) {
          let num3 = tmp5.location;
          if (num3 == null) {
            num3 = 0;
          }
          let num4 = tmp5.length;
          if (num4 == null) {
            num4 = 0;
          }
          sum = num3 + num4;
        }
        let tmp28 = tmp;
        while (true) {
          let tmp29 = analyticsLocations;
          let tmp30 = canMentionEveryone;
          obj2 = analyticsLocations(canMentionEveryone[33]);
          let arr = c23;
          let tmp32 = tmp28;
          let tmp33 = tmp8;
          let tmp34 = tmp9;
          let num5 = sum;
          let result = obj2.isWhitespaceSeparatingBoundary(c23, tmp28);
          if (tmp27) {
            num5 = 0;
          }
          if (tmp28 === num5) {
            let tmp36 = selectionEnd;
            let substr1 = arr.slice(tmp28, selectionEnd);
            let tmp38 = analyticsLocations;
            let tmp39 = canMentionEveryone;
            obj3 = analyticsLocations(canMentionEveryone[33]);
            prefix = obj3.getPrefix(substr1);
            let tmp40 = analyticsLocations;
            let tmp41 = canMentionEveryone;
            let obj4 = analyticsLocations(canMentionEveryone[33]);
            query = obj4.getQuery(substr1);
            if (null == query) {
              let _Object = Object;
              let tmp46 = memo;
              let keys = Object.keys(memo);
              let found = keys.find((arg0) => {
                let tmp = arg0 !== focused.SLASHES && arg0 !== focused.SLASHES_DISCOVERY;
                if (!tmp) {
                  let tmp4 = null == outer1_9;
                  if (tmp4) {
                    tmp4 = !outer1_5;
                  }
                  tmp = tmp4;
                }
                if (tmp) {
                  let matchesResult = undefined !== closure_0;
                  if (matchesResult) {
                    matchesResult = undefined !== query;
                  }
                  if (matchesResult) {
                    matchesResult = obj.matches(tmp6, query, closure_2);
                  }
                  tmp = matchesResult;
                  tmp6 = closure_0;
                }
                return tmp;
              });
              tmp33 = query;
              let tmp44 = tmp28;
              let tmp45 = query;
              tmp34 = found;
              if (null != found) {
                break;
              }
            } else {
              let tmp43 = _undefined;
              tmp44 = tmp28;
              tmp45 = query;
              if (_undefined.test(query)) {
                break;
              }
            }
            let tmp48 = focused;
            let tmp49 = tmp45;
            if (tmp34 === focused.SLASHES) {
              let tmp50 = analyticsLocations;
              let tmp51 = canMentionEveryone;
              let obj5 = analyticsLocations(canMentionEveryone[34]);
              let str5 = tmp45;
              if (tmp45 == null) {
                str5 = "";
              }
              let text = obj5.getTextBeforeFirstOption(str5).text;
              query = text;
              tmp49 = text;
            }
            obj4 = { query: null, autocompleteType: null, autocompleteSelectionStart: null, queryOptions: null };
            obj4[0] = tmp49;
            obj4[1] = tmp34;
            obj4[2] = tmp44;
            obj5 = {};
            let tmp52 = obj5;
            let tmp53 = applicationCommandOptionQueryOptions;
            let merged2 = Object.assign(applicationCommandOptionQueryOptions);
            obj4[3] = obj5;
            return obj4;
          } else {
            found = tmp34;
          }
          let diff = tmp28 - 1;
          canMentionEveryone = diff;
          let num6 = sum;
          if (tmp27) {
            num6 = 0;
          }
          tmp28 = diff;
          tmp8 = tmp33;
          tmp9 = found;
          tmp45 = tmp33;
          tmp34 = found;
          tmp44 = diff;
          if (diff < num6) {
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
  callback = obj3.useCallback((arg0) => {
    if (null != autocompleteType) {
      if (null != query) {
        let obj = memo[tmp];
        const queryResultsResult = obj.queryResults(tmp2, queryOptions, arg0);
        const items = [];
        const items1 = [];
        const item = queryResultsResult.forEach((type) => {
          if (type.type === outer1_11.STICKER) {
            items.push(type);
          } else {
            items1.push(type);
          }
        });
        obj = { resultCount: null, stickerResults: null, nonStickerResults: null, hasStickerResults: null, hasNonStickerResults: null };
        obj[0] = queryResultsResult.length;
        obj[1] = items;
        obj[2] = items1;
        obj[3] = items.length > 0;
        obj[4] = items1.length > 0;
        callback(obj);
      }
    }
    callback(beginSearch);
  }, items5);
  const items6 = [autocompleteType, callback, memo];
  const effect1 = obj3.useEffect(() => {
    let tmp2 = null;
    if (null != autocompleteType) {
      let stores;
      if (memo != null) {
        stores = memo[tmp].stores;
      }
      tmp2 = stores;
    }
    if (null != tmp2) {
      const batchedStoreListener = new analyticsLocations(canMentionEveryone[21]).BatchedStoreListener(tmp2, () => callback(false));
      batchedStoreListener.attach("AutocompleteWrapper");
      return () => batchedStoreListener.detach();
    }
  }, items6);
  const items7 = [callback];
  const effect2 = obj3.useEffect(() => {
    callback(true);
  }, items7);
  const items8 = [stickerResults, nonStickerResults];
  callback1 = obj3.useCallback(() => ({ numStickerResults: stickerResults.length, numEmojiResults: nonStickerResults.filter((type) => type.type === constants.EMOJI).length }), items8);
  const items9 = [autocompleteType, focused, keyboardType, resultCount];
  memo2 = obj3.useMemo(() => {
    let tmp = resultCount > 0;
    if (!tmp) {
      tmp = autocompleteType === focused.SLASHES || tmp2 === focused.SLASHES_DISCOVERY;
      const tmp3 = autocompleteType === focused.SLASHES || tmp2 === focused.SLASHES_DISCOVERY;
    }
    if (!tmp) {
      tmp = autocompleteType === focused.GAME_MENTIONS;
    }
    let tmp7 = focused;
    if (focused) {
      tmp7 = tmp;
    }
    if (tmp7) {
      tmp7 = keyboardType === analyticsLocations(canMentionEveryone[35]).KeyboardTypes.SYSTEM;
    }
    return tmp7;
  }, items9);
  closure_40 = obj3.useRef(false);
  const items10 = [autocompleteType, activeCommand];
  const effect3 = obj3.useEffect(() => {
    let tmp4 = autocompleteType === focused.SLASHES;
    if (ref.current) {
      if (!tmp4) {
        tmp4 = tmp2 === tmp3.SLASHES_DISCOVERY;
      }
      if (!tmp4) {
        tmp4 = null != activeCommand;
      }
      tmp.current = tmp4;
    } else {
      let tmp5 = tmp4;
      if (!tmp4) {
        tmp5 = tmp2 === tmp3.SLASHES_DISCOVERY;
      }
      if (!tmp5) {
        tmp5 = null != activeCommand;
      }
      tmp.current = tmp5;
      if (tmp.current) {
        analyticsLocations(canMentionEveryone[36]).trackWithMetadata(setting.APPLICATION_COMMAND_TOP_OF_FUNNEL, { location: "slash_ui" });
        const obj = analyticsLocations(canMentionEveryone[36]);
      }
    }
  }, items10);
  closure_41 = obj3.useRef(null);
  const items11 = [onChangeAutoCompleteVisibility, activeCommand, memo2, autocompleteType, channel, callback1, gameMentionsAutocompleteConfig.enabled];
  const effect4 = obj3.useEffect(() => {
    let tmp = memo2;
    if (!memo2) {
      tmp = null != activeCommand;
    }
    if (onChangeAutoCompleteVisibility != null) {
      tmp4(tmp);
    }
    if (tmp) {
      let str = autocompleteType;
      if (autocompleteType == null) {
        str = "";
      }
      const _HermesInternal = HermesInternal;
      const combined = "" + channel.id + ":" + str;
      if (ref2.current !== combined) {
        ref2.current = combined;
        let obj = analyticsLocations(canMentionEveryone[37]);
        obj = {};
        const merged = Object.assign(callback1());
        let enabled;
        if (tmp8 === focused.MENTIONS) {
          enabled = gameMentionsAutocompleteConfig.enabled;
        }
        obj.gameMentionsAvailable = enabled;
        const result = obj.iOSTrackAutocompleteOpen(tmp8, tmp7, obj);
      }
      tmp7 = channel;
    } else {
      ref2.current = null;
    }
  }, items11);
  const tmp19 = keyboardType(onChangeAutoCompleteVisibility.useState(0), 2);
  const insets = tmp4(tmp2[19])({ includeKeyboardHeight: true }).insets;
  let diff = channel(canMentionEveryone[18])({ ignoreKeyboard: true }).height - insets.top - insets.bottom;
  diff1 = diff - tmp(tmp2[20]).NAV_BAR_HEIGHT - tmp20;
  const items12 = [autocompleteType, stickerResults.length, diff1, scaledTextLineHeight, tmp8];
  memo3 = obj3.useMemo(() => {
    const sum = scaledTextLineHeight + 24;
    const sum1 = 200 + sum;
    if (stickerResults.length > 0) {
      let sum2 = sum1 + sum + analyticsLocations(canMentionEveryone[17]).AUTOCOMPLETE_STICKER_NODE_SIZE + 12 + gameMentionsAutocompleteConfig;
    } else {
      sum2 = sum1;
      if (autocompleteType !== focused.EMOJIS_AND_STICKERS) {
        let num = 200;
        if (tmp3 === focused.GAME_MENTIONS) {
          num = 200 + c12;
        }
        sum2 = num;
      }
    }
    return Math.min(diff1, sum2);
  }, items12);
  let tmp10Result = tmp10(obj3.useState(null), 2);
  first2 = tmp10Result[0];
  c45 = tmp40;
  const items13 = [resultCount, autocompleteType, memo2, hasStickerResults, hasNonStickerResults, nonStickerResults.length, memo3, first2, context, token, scaledTextLineHeight, tmp8];
  const memo4 = obj3.useMemo(() => {
    if (autocompleteType === focused.EMOJIS_AND_STICKERS) {
      let num6 = 0;
      if (0 !== nonStickerResults.length) {
        if (context) {
          num6 = length * token + (length - 1) * gameMentionsAutocompleteConfig;
        }
      }
      let sum = num6;
      if (hasNonStickerResults) {
        sum = num6 + (scaledTextLineHeight + 24);
      }
      let tmp14 = hasStickerResults;
      let sum2 = sum;
      if (hasStickerResults) {
        const sum1 = scaledTextLineHeight + 24;
        sum2 = sum + (sum1 + analyticsLocations(canMentionEveryone[17]).AUTOCOMPLETE_STICKER_NODE_SIZE + 12);
      }
      if (tmp14) {
        tmp14 = tmp11;
      }
      let sum3 = sum2;
      if (tmp14) {
        sum3 = sum2 + gameMentionsAutocompleteConfig;
      }
      let num2 = sum3;
      tmp11 = hasNonStickerResults;
    } else {
      if (tmp3) {
        let num5 = first2;
        if (first2 == null) {
          num5 = 0;
        }
        num2 = num5;
      } else {
        num2 = 0;
        if (null != tmp) {
          let num3 = 0;
          if (0 !== resultCount) {
            if (context) {
              num3 = tmp5 * token + (tmp5 - 1) * gameMentionsAutocompleteConfig;
            }
          }
          num2 = num3;
          if (tmp === tmp2.GAME_MENTIONS) {
            num2 = num3 + c12;
          }
        }
      }
      tmp3 = tmp === tmp2.SLASHES || tmp === tmp2.SLASHES_DISCOVERY;
    }
    let num11 = 0;
    if (memo2) {
      num11 = num2;
    }
    return Math.min(num11, memo3);
  }, items13);
  let tmpResult = tmp(tmp2[38]);
  chatInputFloating = tmpResult.useMobileVisualRefreshConfig({ location: "AutocompleteWrapper" }).chatInputFloating;
  c47 = tmp42;
  tmpResult = tmp(tmp2[22]);
  const token1 = tmpResult.useToken(tmp4(tmp2[16]).modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS);
  let tmp34 = channel(canMentionEveryone[18])({ ignoreKeyboard: true });
  const token2 = analyticsLocations(canMentionEveryone[22]).useToken(tmp4(tmp2[16]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH);
  const tmpResult1 = analyticsLocations(canMentionEveryone[22]);
  const token3 = analyticsLocations(canMentionEveryone[22]).useToken(tmp4(tmp2[16]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH);
  const tmpResult2 = analyticsLocations(canMentionEveryone[22]);
  const token4 = analyticsLocations(canMentionEveryone[22]).useToken(tmp4(tmp2[16]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_HORIZONTAL);
  const tmpResult3 = analyticsLocations(canMentionEveryone[22]);
  token5 = analyticsLocations(canMentionEveryone[22]).useToken(tmp4(tmp2[16]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM);
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
  const tmp48Result = c29(token1, num, num2, token4, num3);
  c49 = tmp48Result;
  let tmp48 = c29;
  const tmpResult4 = analyticsLocations(canMentionEveryone[22]);
  isScreenReaderEnabled = analyticsLocations(canMentionEveryone[39]).useIsScreenReaderEnabled();
  const tmpResult5 = analyticsLocations(canMentionEveryone[39]);
  let isAndroidResult = analyticsLocations(canMentionEveryone[15]).isAndroid();
  if (!isAndroidResult) {
    let isIOSResult = tmp(tmp2[15]).isIOS();
    if (isIOSResult) {
      let tmp53 = isScreenReaderEnabled;
      if (!isScreenReaderEnabled) {
        tmp53 = chatInputFloating;
      }
      isIOSResult = tmp53;
    }
    isAndroidResult = isIOSResult;
    const tmpResult7 = tmp(tmp2[15]);
  }
  const items14 = [isScreenReaderEnabled, chatInputFloating, tmp48Result.autocompletePositionRelative];
  const items15 = [memo4 > 0, token5];
  const memo5 = obj3.useMemo(() => {
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
  const memo6 = obj3.useMemo(() => {
    let tmp;
    if (c47) {
      const obj = { marginTop: null };
      obj[0] = token5;
      tmp = obj;
    }
    return tmp;
  }, items15);
  const items16 = [analyticsLocations, beginSearch, channel, chatInputRef];
  const tmpResult6 = analyticsLocations(canMentionEveryone[15]);
  callback2 = obj3.useCallback((type) => {
    if (type.type !== scaledTextLineHeight.EMOJI_PREMIUM_UPSELL) {
      if (type.type === tmp.GLOBAL) {
        if ("gameMentionInput" === type.inlineAutocompleteType) {
          const current4 = chatInputRef.current;
          current4.insertText(memo, arg1, false);
          beginSearch(arg1);
        }
      }
      const autocompleteResultText = analyticsLocations(canMentionEveryone[33]).getAutocompleteResultText(type, channel);
      const current = chatInputRef.current;
      const applicationCommandManager = current.getApplicationCommandManager();
      if (type.type === tmp.GAME_MENTION) {
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
      }
      let result;
      if (applicationCommandManager != null) {
        result = applicationCommandManager.setAutoCompleteResult(tmp10.id, autocompleteResultText, arg2, type);
      }
      if (!result) {
        const current2 = tmp12.current;
        current2.insertText(autocompleteResultText, arg1, type.type !== tmp.STICKER, tmp13);
        if (type.type === tmp.STICKER) {
          const current3 = tmp12.current;
          current3.handleSelectSticker(type.sticker, arg1);
        }
      }
      const obj3 = analyticsLocations(canMentionEveryone[33]);
      tmp10 = channel;
    } else {
      let obj = channel(canMentionEveryone[41]);
      obj = { initialUpsellKey: null, analyticsLocations: null };
      obj[0] = resultCount.EMOJI_AUTOCOMPLETE;
      obj[1] = analyticsLocations;
      const result1 = obj.handleShowUpsellAlert(obj);
    }
  }, items16);
  const items17 = [chatInputRef, optionStates, channel];
  const items18 = [autocompleteSelectionStart, autocompleteType, callback1, channel, callback2, showOptionValuesPicker];
  const callback3 = obj3.useCallback((type) => {
    const current = chatInputRef.current;
    const applicationCommandManager = current.getApplicationCommandManager();
    if (type.type === analyticsLocations(canMentionEveryone[32]).ApplicationCommandOptionType.ATTACHMENT) {
      let success;
      if (optionStates[type.name].lastValidationResult != null) {
        success = lastValidationResult.success;
      }
      if (success) {
        const result = analyticsLocations(canMentionEveryone[42]).openCommandAttachmentPreview(applicationCommandManager, channel.id, type.name);
        const tmpResult = analyticsLocations(canMentionEveryone[42]);
      } else if (applicationCommandManager != null) {
        const result1 = applicationCommandManager.insertOrJumpCommandOption(type);
      }
    } else {
      if (applicationCommandManager != null) {
        const length = applicationCommandManager.props.text.length;
      }
      if (applicationCommandManager != null) {
        const result2 = applicationCommandManager.insertOrJumpCommandOption(type, length);
      }
    }
  }, items17);
  callback4 = obj3.useCallback((type) => {
    if (type.type === scaledTextLineHeight.GLOBAL) {
      if ("gameMentionInput" === type.inlineAutocompleteType) {
        type = tmp.GAME_MENTION;
      }
      let obj = analyticsLocations(canMentionEveryone[37]);
      obj = { selectionType: null, stickerId: null, gameId: null };
      obj[0] = type;
      let id = null;
      if (type.type === tmp.STICKER) {
        id = type.sticker.id;
      }
      obj[1] = id;
      let id1 = null;
      if (type.type === tmp.GAME_MENTION) {
        id1 = type.game.id;
      }
      obj[2] = id1;
      const merged = Object.assign(callback1());
      const result = obj.iOSTrackAutocompleteSelect(autocompleteType, channel, obj);
      let num = autocompleteSelectionStart;
      if (autocompleteSelectionStart == null) {
        num = 0;
      }
      callback2(type, num, showOptionValuesPicker);
    }
    type = type.type;
  }, items18);
  tmp10Result = tmp10(obj3.useState(null), 2);
  first3 = tmp10Result[0];
  closure_54 = tmp10Result[1];
  const items19 = [autocompleteType, callback4, first3, channel, activeCommand, gameMentionsAutocompleteConfig.showNewTag, tmp48Result];
  const callback5 = obj3.useCallback((item) => {
    item = item.item;
    const type = item.type;
    if (scaledTextLineHeight.USER === type) {
      let obj = {};
      const merged = Object.assign(item);
      obj.guildId = channel.guild_id;
      obj.onPress = function onPress() {
        return outer1_52(item);
      };
      return selectionStart(channel(canMentionEveryone[17]).User, obj);
    } else if (tmp.GLOBAL === type) {
      obj = {};
      const merged1 = Object.assign(item);
      obj.onPress = function onPress() {
        return outer1_52(item);
      };
      let tmp62Result;
      if ("gameMentionInput" === item.inlineAutocompleteType) {
        if (gameMentionsAutocompleteConfig.showNewTag) {
          const obj1 = { containerStyle: null, variant: "text-xs/bold", color: "badge-text-brand" };
          obj1[0] = _undefined2.newTag;
          tmp62Result = tmp62(analyticsLocations(canMentionEveryone[43]).NewTag, obj1);
        }
      }
      obj.badge = tmp62Result;
      return selectionStart(channel(canMentionEveryone[17]).Global, obj);
    } else if (tmp.ROLE === type) {
      const obj2 = {};
      const merged2 = Object.assign(item);
      obj2.onPress = function onPress() {
        return outer1_52(item);
      };
      let tmp59 = autocompleteType === focused.MENTIONS;
      if (tmp59) {
        tmp59 = null == activeCommand;
      }
      obj2.showDescription = tmp59;
      return selectionStart(channel(canMentionEveryone[17]).Role, obj2);
    } else if (tmp.CHANNEL === type) {
      const obj3 = {};
      const merged3 = Object.assign(item);
      obj3.onPress = function onPress() {
        return outer1_52(item);
      };
      return selectionStart(channel(canMentionEveryone[17]).Channel, obj3);
    } else if (tmp.EMOJI === type) {
      const obj4 = {};
      const merged4 = Object.assign(item);
      obj4.onPress = function onPress() {
        return outer1_52(item);
      };
      return selectionStart(channel(canMentionEveryone[17]).Emoji, obj4);
    } else if (tmp.EMOJI_PREMIUM_UPSELL === type) {
      const obj5 = {};
      const merged5 = Object.assign(item);
      obj5.onPress = function onPress() {
        return outer1_52(item);
      };
      return selectionStart(channel(canMentionEveryone[17]).EmojiPremiumUpsell, obj5);
    } else if (tmp.CHOICE === type) {
      const obj6 = {};
      const merged6 = Object.assign(item);
      obj6.onPress = function onPress() {
        return outer1_52(item);
      };
      return selectionStart(channel(canMentionEveryone[17]).Choice, obj6);
    } else if (tmp.CHOICE_LOADING === type) {
      return selectionStart(channel(canMentionEveryone[17]).ChoiceLoading, {});
    } else if (tmp.STICKER === type) {
      const obj7 = {};
      const merged7 = Object.assign(item);
      obj7.onPress = function onPress() {
        return outer1_52(item);
      };
      obj7.onLongPress = function onLongPress() {
        return outer1_54(item.sticker.id);
      };
      obj7.isInteracting = first3 === item.sticker.id;
      const _HermesInternal = HermesInternal;
      return selectionStart(channel(canMentionEveryone[17]).Sticker, obj7, "" + item.sticker.id + "-" + first3 === item.sticker.id);
    } else if (tmp.GAME_MENTION === type) {
      const obj8 = {};
      const merged8 = Object.assign(item);
      obj8.onPress = function onPress() {
        return outer1_52(item);
      };
      return selectionStart(channel(canMentionEveryone[17]).Game, obj8);
    } else if (tmp.LABEL === type) {
      obj = {};
      const merged9 = Object.assign(item);
      return selectionStart(channel(canMentionEveryone[17]).Label, obj);
    } else {
      return null;
    }
  }, items19);
  const items20 = [tmp48Result.autocomplete, { maxHeight: memo3 }];
  const items21 = [tmp48Result.autocompleteWrapper, , ];
  let autocompleteWrapperAbsolute = !isAndroidResult;
  if (!isAndroidResult) {
    autocompleteWrapperAbsolute = tmp48Result.autocompleteWrapperAbsolute;
  }
  obj = { style: items21, children: null };
  items21[1] = autocompleteWrapperAbsolute;
  items21[2] = memo5;
  obj = { style: items22, children: null };
  items22 = [tmp48Result.autocompleteContainer, channel(canMentionEveryone[40])(memo4, screenIndex)];
  let tmp63Result1 = null != autocompleteType;
  if (tmp63Result1) {
    let tmp65Result = autocompleteType === focused.SLASHES_DISCOVERY;
    if (tmp65Result) {
      obj1 = { channel: null, onPressSlashItem: null, onHeightChange: null, canOnlyUseTextCommands: null };
      obj1[0] = channel;
      obj1[1] = function onPressSlashItem(command, section, visualSection) {
        let num = autocompleteSelectionStart;
        if (autocompleteSelectionStart == null) {
          num = 0;
        }
        callback2({ command, section, type: scaledTextLineHeight.SLASH, visualSection, location: analyticsLocations(canMentionEveryone[46]).ApplicationCommandTriggerLocations.DISCOVERY }, num);
      };
      obj1[2] = tmp40;
      obj1[3] = canOnlyUseTextCommands;
      tmp65Result = tmp65(tmp4(tmp2[45]), obj1);
    }
    const items23 = [tmp65Result, , , , ];
    tmp65Result = autocompleteType === tmp68.SLASHES;
    if (tmp65Result) {
      obj2 = { channel: null, query: null, onPressCommandItem: null, style: null, ItemSeparatorComponent: null, getItemLayout: null, onCommandsChange: null };
      obj2[0] = channel;
      let str = query;
      if (query == null) {
        str = "";
      }
      obj2[1] = str;
      obj2[2] = function onPressCommandItem(command) {
        let num = autocompleteSelectionStart;
        if (autocompleteSelectionStart == null) {
          num = 0;
        }
        callback2({ command, section: arg1, type: scaledTextLineHeight.SLASH, location: analyticsLocations(canMentionEveryone[46]).ApplicationCommandTriggerLocations.DISCOVERY, query }, num);
      };
      obj2[3] = items20;
      obj2[4] = tmp(tmp2[33]).getItemSeparator;
      obj2[5] = tmp(tmp2[33]).getItemLayout;
      obj2[6] = function onCommandsChange(arg0) {
        let num = 0;
        if (0 !== arg0) {
          if (context) {
            num = arg0 * token + (arg0 - 1) * gameMentionsAutocompleteConfig;
          }
        }
        c45(num);
      };
      tmp65Result = tmp65(tmp4(tmp2[47]), obj2);
      const tmp4Result = tmp4(tmp2[47]);
    }
    items23[1] = tmp65Result;
    let tmp63Result = autocompleteType === tmp68.EMOJIS_AND_STICKERS;
    if (tmp63Result) {
      tmp63Result = hasStickerResults;
      if (hasStickerResults) {
        obj3 = { children: null };
        obj4 = { style: null, children: null };
        const items24 = [tmp48Result.sectionTitle, ];
        obj5 = { height: null };
        obj5[0] = scaledTextLineHeight;
        items24[1] = obj5;
        obj4[0] = items24;
        obj6 = { variant: null, children: null };
        obj6[0] = tmp6;
        const intl = tmp(tmp2[49]).intl;
        let obj7 = { prefix: null };
        obj7[0] = query;
        obj6[1] = intl.format(tmp(tmp2[49]).t.uferGG, obj7);
        obj4[1] = tmp65(tmp(tmp2[48]).Text, obj6);
        const items25 = [tmp65(tmp64, obj4), ];
        let obj8 = { horizontal: true, style: null, keyExtractor: null, data: null, renderItem: null, showsHorizontalScrollIndicator: false, getItemLayout: null, contentInset: null };
        const obj9 = {};
        let merged = Object.assign(items20);
        let merged1 = Object.assign(tmp48Result.stickersAutocompleteList);
        obj8[1] = obj9;
        obj8[2] = function keyExtractor(sticker) {
          return sticker.sticker.id;
        };
        obj8[3] = stickerResults;
        obj8[4] = callback5;
        obj8[6] = anchor;
        obj8[7] = { right: 12 };
        items25[1] = tmp65(chatInputRef, obj8);
        obj3[0] = items25;
        tmp63Result = tmp63(tmp67, obj3);
      }
      const items26 = [tmp63Result, , ];
      if (hasStickerResults) {
        hasStickerResults = hasNonStickerResults;
      }
      if (hasStickerResults) {
        const obj10 = { style: null };
        obj10[0] = tmp48Result.sectionDivider;
        hasStickerResults = tmp65(tmp4(tmp2[50]), obj10);
      }
      items26[1] = hasStickerResults;
      if (hasNonStickerResults) {
        const obj11 = { style: null, children: null };
        const items27 = [tmp48Result.sectionTitle, ];
        const obj12 = { height: null };
        obj12[0] = scaledTextLineHeight;
        items27[1] = obj12;
        obj11[0] = items27;
        const obj13 = { variant: null, children: null };
        obj13[0] = tmp6;
        const intl2 = tmp(tmp2[49]).intl;
        const obj14 = { prefix: null };
        let _HermesInternal = HermesInternal;
        obj14[0] = "" + context + query;
        obj13[1] = intl2.format(tmp(tmp2[49]).t.ksAVYt, obj14);
        obj11[1] = tmp65(tmp(tmp2[48]).Text, obj13);
        hasNonStickerResults = tmp65(tmp64, obj11);
      }
      const obj15 = { children: null };
      items26[2] = hasNonStickerResults;
      obj15[0] = items26;
      tmp63Result = tmp63(tmp67, obj15);
    }
    items23[2] = tmp63Result;
    const obj16 = { children: null };
    items23[3] = autocompleteType === focused.GAME_MENTIONS && tmp65(tmp4(tmp2[51]), {});
    const obj17 = { style: null, keyExtractor: null, data: null, renderItem: null, ItemSeparatorComponent: null, getItemLayout: null };
    obj17[0] = items20;
    obj17[1] = function keyExtractor(arg0, arg1) {
      return String(arg1);
    };
    obj17[2] = nonStickerResults;
    obj17[3] = callback5;
    obj17[4] = tmp(tmp2[33]).getItemSeparator;
    obj17[5] = tmp(tmp2[33]).getItemLayout;
    items23[4] = tmp65(chatInputRef, obj17);
    obj16[0] = items23;
    tmp63Result1 = tmp63(tmp67, obj16);
    const tmp83 = autocompleteType === focused.GAME_MENTIONS && tmp65(tmp4(tmp2[51]), {});
  }
  obj[1] = tmp63Result1;
  const items28 = [selectionStart(channel(canMentionEveryone[44]).View, obj), ];
  let tmp65Result1 = null != activeCommand && !commandsDisabled;
  if (tmp65Result1) {
    const obj18 = { style: null, children: null };
    obj18[0] = memo6;
    const obj19 = { command: null, section: null, guildId: null, onPressOption: null, currentOption: null, optionStates: null };
    obj19[0] = activeCommand;
    obj19[1] = stateFromStoresObject.activeSection;
    obj19[2] = channel.guild_id;
    obj19[3] = callback3;
    obj19[4] = activeOption;
    obj19[5] = optionStates;
    obj18[1] = tmp65(tmp4(tmp2[52]), obj19);
    tmp65Result1 = tmp65(tmp64, obj18);
  }
  items28[1] = tmp65Result1;
  obj[1] = items28;
  const tmp56 = channel(canMentionEveryone[40])(memo4, screenIndex);
  return selectionStart(commandsDisabled, { style: tmp48Result.autocompletePositionRelative, children: closure_26(commandsDisabled, obj) });
});
forwardRefResult.displayName = "AutocompleteWrapper";
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/autocompleter/native/AutocompleteWrapper.tsx");

export default memoResult;
