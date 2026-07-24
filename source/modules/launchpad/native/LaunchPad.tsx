// Module ID: 15697
// Function ID: 121008
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 27, 3823, 6757, 5722, 5039, 1352, 1194, 1348, 6960, 6878, 12729, 4142, 4970, 4325, 4146, 653, 33, 689, 4130, 4660, 4126, 566, 3991, 3989, 5772, 1212, 11960, 10234, 14454, 477, 13556, 11837, 7104, 3981, 7105, 7093, 1450, 1557, 7094, 10840, 675, 15698, 15705, 13557, 15724, 15725, 2]

// Module 15697 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import importAllResult from "set";
import { View } from "getSystemLocale";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_12 from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_isNativeReflectConstruct";
import closure_21 from "_isNativeReflectConstruct";
import closure_22 from "_isNativeReflectConstruct";
import closure_23 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import jsxProd from "hideLaunchPad";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_13;
let closure_14;
let closure_25;
let closure_26;
let closure_8;
let closure_9;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function TabButton(selected) {
  let accessibilityLabel;
  let icon;
  let onPress;
  let style;
  selected = selected.selected;
  ({ onPress, icon, accessibilityLabel, style } = selected);
  const tmp = callback3();
  const obj = { onPress };
  const items = [tmp.tab, style, ];
  let tabSelected;
  if (selected) {
    tabSelected = tmp.tabSelected;
  }
  items[2] = tabSelected;
  obj.style = items;
  obj.accessibilityLabel = accessibilityLabel;
  obj.accessibilityRole = "tab";
  obj.accessibilityState = { selected };
  const colors = importDefault(689).colors;
  obj.children = icon(selected ? colors.INTERACTIVE_TEXT_ACTIVE : colors.INTERACTIVE_TEXT_DEFAULT);
  return closure_25(require(4660) /* PressableBase */.PressableHighlight, obj);
}
function TabHeader(text) {
  const obj = { style: callback3().subheader, variant: "heading-md/extrabold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: text.text };
  return callback2(require(4126) /* Text */.Text, obj);
}
function createAndAppendChannel(arg0, has, arr) {
  if (!has.has(arg0)) {
    const tmp3 = importDefault(7104)(arg0);
    if (null != tmp3) {
      arr.push(tmp3);
      has.add(arg0);
    }
  }
}
function useInitialResults(disabled) {
  disabled = disabled.disabled;
  const visible = disabled.visible;
  let obj = disabled(selectedGuildFromRoute[35]);
  selectedGuildFromRoute = obj.getSelectedGuildFromRoute();
  const selectedChannelFromRoute = disabled(selectedGuildFromRoute[35]).getSelectedChannelFromRoute();
  const tmp3 = selectedChannelFromRoute(first.useState(undefined), 2);
  first = tmp3[0];
  const View = tmp5;
  let items = [visible];
  const effect = first.useEffect(() => {
    if (!visible) {
      tmp5(undefined);
    }
  }, items);
  let _isNativeReflectConstruct = first.useRef([]);
  const obj2 = disabled(selectedGuildFromRoute[35]);
  let items1 = [closure_19];
  const stateFromStores = disabled(selectedGuildFromRoute[23]).useStateFromStores(items1, () => {
    if (visible) {
      let current = outer1_19.getUnreadPrivateChannelIds();
    } else {
      current = ref.current;
    }
    return current;
  });
  const effect1 = first.useEffect(() => {
    _isNativeReflectConstruct.current = stateFromStores;
  });
  let closure_8 = first.useRef([]);
  const obj3 = disabled(selectedGuildFromRoute[23]);
  let items2 = [closure_18, closure_21];
  let items3 = [visible, selectedGuildFromRoute];
  const stateFromStoresArray = disabled(selectedGuildFromRoute[23]).useStateFromStoresArray(items2, () => {
    let iter2;
    if (visible) {
      const items = [];
      const items1 = [];
      const tmp4 = outer1_36(outer1_21.getFlattenedGuildIds());
      let iter = tmp4();
      if (!iter.done) {
        do {
          let value = iter.value;
          let tmp5 = selectedGuildFromRoute;
          if (value !== selectedGuildFromRoute) {
            let tmp6 = outer1_18;
            if (outer1_18.getMentionCount(value) > 0) {
              let arr = items.push(value);
            } else {
              let tmp7 = outer1_18;
              if (outer1_18.hasUnread(value)) {
                arr = items1.push(value);
              }
            }
          }
          iter2 = tmp4();
          iter = iter2;
        } while (!iter2.done);
      }
      const push = items.push;
      const items2 = [];
      HermesBuiltin.arraySpread(items1, 0);
      HermesBuiltin.apply(items2, items);
      return items;
    } else {
      return ref2.current;
    }
  }, items3);
  const effect2 = first.useEffect(() => {
    closure_8.current = stateFromStoresArray;
  });
  let closure_10 = first.useRef([]);
  const obj4 = disabled(selectedGuildFromRoute[23]);
  let items4 = [stateFromStores, closure_23, closure_20, closure_22, closure_12];
  let items5 = [disabled, selectedGuildFromRoute, visible, first];
  const stateFromStoresArray1 = disabled(selectedGuildFromRoute[23]).useStateFromStoresArray(items4, () => {
    let tmp = null != first ? first : items2;
    if (!items) {
      if (null != tmp) {
        if (items1) {
          items = [];
          items1 = [];
          items2 = [];
          const items3 = [];
          const _Object = Object;
          const values = Object.values(ref4.getActiveJoinedUnreadThreadsForGuild(tmp));
          for (let num2 = 0; num2 < values.length; num2 = num2 + 1) {
            let tmp5 = values[num2];
            let tmp6 = tmp5;
            for (const key10024 in tmp5) {
              let tmp31 = key10024;
              let arr = items1.push(key10024);
              continue;
            }
          }
          const guildChannels = stateFromStores.getGuild(tmp).guildChannels;
          guildChannels.forEachChannel((type) => {
            const tmp = callback(type.type);
            if (tmp) {
              if (!outer2_22.isChannelMuted(type.guild_id, type.id)) {
                if (null == type.parent_id) {
                  let num = 0;
                  if (outer2_20.getMentionCount(type.id) > 0) {
                    items.push(type.id);
                  } else {
                    if (!tmp) {
                      num = disabled(selectedGuildFromRoute[36]).getHasImportantUnread(type);
                      if (num) {
                        items1.push(type.id);
                      }
                      const obj = disabled(selectedGuildFromRoute[36]);
                    }
                    if (tmp) {
                      const keys = Object.keys();
                      if (keys !== undefined) {
                        if (keys[num] !== undefined) {
                          items3.push(type.id);
                        }
                      }
                    } else if (outer2_20.hasUnread(type.id)) {
                      items2.push(type.id);
                    }
                  }
                }
              }
            }
          }, { ignoreRecents: true, withThreads: true });
          const push = items.push;
          const items4 = [];
          HermesBuiltin.arraySpread(items1, 0);
          HermesBuiltin.apply(items4, items);
          const push2 = items.push;
          const items5 = [];
          HermesBuiltin.arraySpread(items3, 0);
          HermesBuiltin.apply(items5, items);
          const push3 = items.push;
          const items6 = [];
          HermesBuiltin.arraySpread(items2, 0);
          HermesBuiltin.apply(items6, items);
          return items;
        } else {
          return ref3.current;
        }
      }
    }
    return [];
  }, items5);
  const effect3 = first.useEffect(() => {
    closure_10.current = stateFromStoresArray1;
  });
  closure_12 = first.useRef([]);
  let items6 = [disabled, visible, selectedGuildFromRoute, stateFromStoresArray];
  const memo = first.useMemo(() => {
    if (!disabled) {
      if (visible) {
        const _Set = Set;
        const set = new Set(stateFromStoresArray);
        if (null != selectedGuildFromRoute) {
          set.add(selectedGuildFromRoute);
        }
        let arr = ref3();
        const items = [];
        const _Set2 = Set;
        const set1 = new Set();
        let diff = arr.length - 1;
        if (diff >= 0) {
          while (null != arr[diff]) {
            let tmp26 = closure_8;
            if (obj3.startsWith(closure_8)) {
              let tmp18 = outer1_16;
              let tmp19 = stateFromStoresArray;
              let channel = outer1_16.getChannel(stateFromStoresArray(obj3));
              let guild_id;
              if (null != channel) {
                guild_id = channel.guild_id;
              }
              let tmp17 = guild_id;
              let tmp22 = channel;
            } else {
              let tmp16 = stateFromStoresArray;
              tmp17 = stateFromStoresArray(obj3);
            }
            let tmp23 = null == tmp17 || set.has(tmp17) || set1.has(tmp17);
            if (!tmp23) {
              let addResult1 = set1.add(tmp17);
              arr = items.push(tmp17);
            }
            if (items.length >= 20) {
              break;
            } else {
              diff = diff - 1;
              if (diff < 0) {
                break;
              }
            }
          }
        }
        return items;
      }
    }
    return ref4.current;
  }, items6);
  const effect4 = first.useEffect(() => {
    closure_12.current = memo;
  });
  let closure_14 = first.useRef(undefined);
  const items7 = [disabled, visible, stateFromStoresArray1, selectedChannelFromRoute, first];
  const memo1 = first.useMemo(() => {
    let done;
    let done2;
    if (!disabled) {
      if (visible) {
        let arr = ref3();
        if (null != selectedChannelFromRoute) {
          const _HermesInternal = HermesInternal;
          const combined = "" + closure_8 + selectedChannelFromRoute;
        }
        const items = [];
        let diff = arr.length - 1;
        if (diff >= 0) {
          let obj = arr[diff];
          while (null != obj) {
            let tmp10 = stateFromStoresArray1;
            if (!obj.startsWith(stateFromStoresArray1)) {
              if (obj !== combined) {
                let tmp11 = stateFromStoresArray;
                arr = items.push(stateFromStoresArray(obj));
                if (items.length >= 20) {
                  break;
                }
              }
              break;
            }
            diff = diff - 1;
            if (diff < 0) {
              break;
            }
          }
        }
        const items1 = [];
        const items2 = [];
        if (null == first) {
          const _Set = Set;
          const set = new Set();
          const tmp20 = outer1_36(items);
          let iter = tmp20();
          if (!iter.done) {
            do {
              let tmp21 = outer1_40;
              let tmp22 = stateFromStoresArray;
              let tmp23 = outer1_40(stateFromStoresArray(iter.value), set, items2);
              let iter2 = tmp20();
              iter = iter2;
              done = iter2.done;
            } while (!done);
          }
        }
        const _Set2 = Set;
        const set1 = new Set();
        if (stateFromStoresArray1.length > 0) {
          const tmp32 = outer1_36(stateFromStoresArray1);
          let iter3 = tmp32();
          if (!iter3.done) {
            do {
              let tmp33 = outer1_40;
              let tmp34 = outer1_40(iter3.value, set1, items1);
              let iter4 = tmp32();
              iter3 = iter4;
              done2 = iter4.done;
            } while (!done2);
          }
        }
        if (items2.length > 0) {
          obj = { channelHistory: items2, unreads: items1 };
          const tmp35 = obj;
        }
        return tmp35;
      } else {
        return ref5.current;
      }
    }
  }, items7);
  const effect5 = first.useEffect(() => {
    closure_14.current = memo1;
  });
  obj = { initialResults: first.useDeferredValue(memo1), unreadPrivateChannelIds: stateFromStores, unreadGuilds: stateFromStoresArray, guildHistory: memo, selectedUnreadGuild: first, setSelectedUnreadGuild: tmp5 };
  return obj;
}
({ CHANNEL_PREFIX: closure_8, getIdFromHistoryItem: closure_9, getNavigationHistory: closure_10, GUILD_PREFIX: closure_11 } = _createForOfIteratorHelperLoose);
({ isGuildSelectableChannelType: closure_13, isGuildVocalChannelType: closure_14 } = _callSuper);
({ jsx: closure_25, jsxs: closure_26 } = jsxProd);
const md = require("_createForOfIteratorHelperLoose").radii.md;
let obj = {};
obj = { flexGrow: 0, marginHorizontal: 16, marginBottom: 16, flexShrink: 1, borderRadius: 24, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flexDirection: "column", justifyContent: "flex-start", alignItems: "stretch", overflow: "hidden" };
obj.wrapper = obj;
obj.launchPadContent = { flex: -1, overflow: "hidden", borderBottomLeftRadius: 24, borderBottomRightRadius: 24 };
obj.header = { paddingHorizontal: 16, paddingTop: 16, flexDirection: "row", flexShrink: 0, flexGrow: 0 };
obj.subheader = { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", alignSelf: "center", paddingStart: 8 };
_createForOfIteratorHelperLoose = { marginStart: 8, flexDirection: "row", flexShrink: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.INPUT_BACKGROUND_DEFAULT, borderRadius: md, padding: 5, alignItems: "stretch", justifyContent: "center", gap: 5, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.INPUT_BORDER_DEFAULT };
obj.tabs = _createForOfIteratorHelperLoose;
let obj2 = { width: 32, height: 32, borderRadius: md - 5, alignItems: "center", justifyContent: "center" };
obj.tab = obj2;
obj.tabSelected = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
let closure_27 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_28 = { SEARCH: 0, [0]: "SEARCH", MEMBERS: 1, [1]: "MEMBERS", NOTIFICATIONS: 2, [2]: "NOTIFICATIONS", DEV_TOOLS: 3, [3]: "DEV_TOOLS" };
let closure_29 = { code: "function LaunchPadTsx1(){const{sharedState}=this.__closure;return sharedState.get();}" };
let closure_30 = { code: "function LaunchPadTsx2(sharedState){const{keyboardShown,runOnJS,setFocused}=this.__closure;if(!keyboardShown.get()&&sharedState>0.75){runOnJS(setFocused)(true);}else if(keyboardShown.get()&&sharedState<=0){runOnJS(setFocused)(false);}}" };
let closure_31 = importAllResult.memo((tab) => {
  let importDefault;
  let sharedState;
  tab = tab.tab;
  ({ setTab: importDefault, sharedState } = tab);
  const searchRef = tab.searchRef;
  let tmp = callback3();
  let obj = tab(sharedState[23]);
  const items = [closure_17];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_17.isDeveloper);
  importAllResult = importAllResult.useRef(false);
  let obj1 = tab(sharedState[24]);
  const sharedValue = obj1.useSharedValue(false);
  let _isNativeReflectConstruct = importAllResult.useRef(tab);
  const effect = importAllResult.useEffect(() => {
    _isNativeReflectConstruct.current = tab;
  });
  const items1 = [sharedValue, searchRef];
  const callback = importAllResult.useCallback((arg0, arg1) => {
    if (arg0) {
      if (ref2.current === outer1_28.SEARCH) {
        let isFocusedResult;
        const bestActiveInput = tab(sharedState[25]).getBestActiveInput();
        if (null != bestActiveInput) {
          isFocusedResult = bestActiveInput.isFocused();
        }
        ref.current = true === isFocusedResult;
        if (null != searchRef.current) {
          const result = sharedValue.set(true);
          const current2 = searchRef.current;
          if (null != current2) {
            current2.focus();
          }
        }
        const obj3 = tab(sharedState[25]);
        const tmp15 = ref;
      }
    }
    if (!arg0) {
      if (ref.current) {
        if (!arg1) {
          const bestActiveInput1 = tab(sharedState[25]).getBestActiveInput();
          if (null != bestActiveInput1) {
            bestActiveInput1.focus();
          }
          const obj = tab(sharedState[25]);
        }
      }
      const current = searchRef.current;
      if (null != current) {
        current.blur();
      }
      ref.current = false;
      const result1 = sharedValue.set(false);
    }
  }, items1);
  let obj2 = tab(sharedState[23]);
  const items2 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => ref2.isOpen());
  const items3 = [stateFromStores1, callback];
  const effect1 = importAllResult.useEffect(() => {
    callback(!stateFromStores1, stateFromStores1);
  }, items3);
  const items4 = [tab, sharedState, callback];
  const effect2 = importAllResult.useEffect(() => {
    let tmp = tab === outer1_28.SEARCH;
    if (tmp) {
      tmp = 1 === sharedState.get();
    }
    if (tmp) {
      callback(true);
    }
  }, items4);
  let obj3 = tab(sharedState[24]);
  const fn = function v() {
    return sharedState.get();
  };
  fn.__closure = { sharedState };
  fn.__workletHash = 17067823098320;
  fn.__initData = closure_29;
  class S {
    constructor(arg0) {
      if (!closure_5.get()) {
        num = 0.75;
        if (tab > 0.75) {
          tmp = tab;
          tmp2 = sharedState;
          num2 = 24;
          obj = tab(sharedState[24]);
          tmp3 = closure_7;
          flag = true;
          tmp4 = obj.runOnJS(closure_7)(true);
        }
        return;
      }
      value = closure_5.get();
      if (value) {
        num3 = 0;
        value = tab <= 0;
      }
      if (value) {
        tmp6 = tab;
        tmp7 = sharedState;
        num4 = 24;
        obj2 = tab(sharedState[24]);
        tmp8 = closure_7;
        flag2 = false;
        tmp9 = obj2.runOnJS(closure_7)(false);
      }
      return;
    }
  }
  obj = { keyboardShown: sharedValue, runOnJS: tab(sharedState[24]).runOnJS, setFocused: callback };
  S.__closure = obj;
  S.__workletHash = 3784684686013;
  S.__initData = closure_30;
  const animatedReaction = obj3.useAnimatedReaction(fn, S);
  obj = { style: tmp.header };
  if (tab === constants.SEARCH) {
    obj1 = { size: "md", returnKeyType: "done", ref: searchRef, onChange: tab.updateQuery, autoComplete: "off", spellCheck: false, autoFocus: false };
    let tmp15 = callback2(tab(sharedState[26]).SearchField, obj1);
  } else if (tab === constants.MEMBERS) {
    obj2 = {};
    const intl2 = tab(sharedState[27]).intl;
    obj2.text = intl2.string(tab(sharedState[27]).t["9Oq93m"]);
    tmp15 = callback2(TabHeader, obj2);
  } else if (tab === constants.NOTIFICATIONS) {
    obj3 = {};
    const intl = tab(sharedState[27]).intl;
    obj3.text = intl.string(tab(sharedState[27]).t.HcoRu0);
    tmp15 = callback2(TabHeader, obj3);
  } else {
    const obj4 = { text: "Dev Tools" };
    tmp15 = callback2(TabHeader, obj4);
  }
  const items5 = [tmp15, ];
  const obj5 = { style: tmp.tabs };
  const obj6 = {
    icon(color) {
      return outer1_25(tab(sharedState[28]).FlashIcon, { size: "sm", color });
    }
  };
  const intl3 = tab(sharedState[27]).intl;
  obj6.accessibilityLabel = intl3.string(tab(sharedState[27]).t.JqV7IC);
  obj6.onPress = function onPress() {
    callback(outer1_28.SEARCH);
    const current = searchRef.current;
    if (null != current) {
      current.focus();
    }
  };
  obj6.selected = tab === constants.SEARCH;
  const items6 = [callback2(TabButton, obj6), , ];
  const obj7 = {
    icon(color) {
      return outer1_25(tab(sharedState[29]).BellIcon, { size: "sm", color });
    }
  };
  const intl4 = tab(sharedState[27]).intl;
  obj7.accessibilityLabel = intl4.string(tab(sharedState[27]).t.HcoRu0);
  obj7.onPress = function onPress() {
    callback(outer1_28.NOTIFICATIONS);
    const current = searchRef.current;
    if (null != current) {
      current.blur();
    }
  };
  obj7.selected = tab === constants.NOTIFICATIONS;
  items6[1] = callback2(TabButton, obj7);
  let tmp29 = null;
  if (stateFromStores) {
    const obj8 = {
      icon(color) {
          return outer1_25(tab(sharedState[30]).StaffBadgeIcon, { size: "sm", color });
        },
      accessibilityLabel: "Dev Tools",
      selected: tab === constants.DEV_TOOLS,
      onPress() {
          if (obj.isAndroid()) {
            tab(sharedState[32]).navigateToDevTools();
            outer1_1(sharedState[33])();
            const obj2 = tab(sharedState[32]);
          } else {
            callback(outer1_28.DEV_TOOLS);
          }
          const current = searchRef.current;
          if (null != current) {
            current.blur();
          }
        }
    };
    tmp29 = callback2(TabButton, obj8);
  }
  items6[2] = tmp29;
  obj5.children = items6;
  items5[1] = closure_26(sharedValue, obj5);
  obj.children = items5;
  return closure_26(sharedValue, obj);
});
let closure_32 = [];
let items = [require("sortByMatchScore").AutocompleterResultTypes.GUILD, require("sortByMatchScore").AutocompleterResultTypes.TEXT_CHANNEL, require("sortByMatchScore").AutocompleterResultTypes.GROUP_DM, require("sortByMatchScore").AutocompleterResultTypes.VOICE_CHANNEL, require("sortByMatchScore").AutocompleterResultTypes.USER];
let closure_34 = { code: "function LaunchPadTsx3(){const{sharedState}=this.__closure;return sharedState.get()===0;}" };
let closure_35 = { code: "function LaunchPadTsx4(hidden,prevHidden){const{runOnJS,clearQuery,cancelTimeout}=this.__closure;if(hidden===prevHidden)return;if(hidden&&hidden!==prevHidden){runOnJS(clearQuery)();}else if(!hidden&&hidden!==prevHidden){runOnJS(cancelTimeout)();}}" };
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
const memoResult = importAllResult.memo(function LaunchPad(arg0) {
  let guildHistory;
  let initialResults;
  let queryResults;
  let selectedUnreadGuild;
  let setSelectedUnreadGuild;
  let sharedState;
  let tmp11;
  let tmp12;
  let unreadGuilds;
  let unreadPrivateChannelIds;
  let updateQuery;
  let visible;
  ({ visible, sharedState } = arg0);
  let tmp2 = callback(importAllResult.useState(false), 2);
  const _require = tmp2[1];
  callback = importAllResult.useCallback(() => callback((arg0) => !arg0), []);
  const ref = importAllResult.useRef(null);
  const tmp5 = (function useAutocompleterResults(visible) {
    let closure_0 = visible;
    let tmp = tmp9(outer1_4.useState(""), 2);
    let closure_1 = tmp[1];
    const tmp2 = tmp9(outer1_4.useState(outer1_32), 2);
    let closure_2 = tmp2[1];
    const first = tmp9(outer1_4.useState(() => {
      let tmp = str(first[40]);
      tmp = new tmp((arg0, str) => {
        if ("" === str.trim()) {
          outer1_2(outer3_32);
        } else {
          outer1_2(arg0);
        }
      }, outer2_33, undefined, { frecencyBoosters: true });
      return tmp;
    }), 1)[0];
    let items = [first];
    const effect = outer1_4.useEffect(() => () => outer1_3.clean(), items);
    const items1 = [first];
    const effect1 = outer1_4.useEffect(() => str(first[41]).addRouteChangeListener(() => {
      const items = ["user:" + outer3_15.getId()];
      const set = new Set(items);
      const selectedGuildFromRoute = callback(first[35]).getSelectedGuildFromRoute();
      if (null != selectedGuildFromRoute) {
        const _HermesInternal = HermesInternal;
        set.add("guild:" + selectedGuildFromRoute);
      }
      outer1_3.setOptions({ blacklist: set }, true);
    }), items1);
    const items2 = [visible, first];
    const effect2 = outer1_4.useEffect(() => {
      if (closure_0) {
        obj.resume();
      } else {
        obj.pause();
      }
    }, items2);
    const items3 = [first];
    return {
      queryResults: tmp2[0],
      query: tmp[0],
      updateQuery: outer1_4.useCallback((arg0) => {
        callback(arg0);
        first.search(arg0);
      }, items3)
    };
  })(visible);
  const str = tmp5.query;
  ({ updateQuery, queryResults } = tmp5);
  let obj = { disabled: str.trim().length > 0, visible };
  const tmp6 = useInitialResults(obj);
  ({ initialResults, selectedUnreadGuild } = tmp6);
  ({ unreadPrivateChannelIds, unreadGuilds, guildHistory, setSelectedUnreadGuild } = tmp6);
  const tmp7 = callback(importAllResult.useState(false), 2);
  let first = tmp7[0];
  callback = tmp9;
  let tmp = callback3();
  [tmp11, tmp12] = callback(importAllResult.useState(constants.SEARCH), 2);
  let items = [str, tmp7[1], first];
  const tmp10 = callback(importAllResult.useState(constants.SEARCH), 2);
  let effect = importAllResult.useEffect(() => {
    if (str.length > 0) {
      if (!first) {
        str(first[42]).track(outer1_24.LAUNCHPAD_SEARCHED);
        tmp9(true);
        const obj = str(first[42]);
      }
    }
    if (0 === str.length) {
      tmp9 = tmp9(false);
    }
  }, items);
  (function useDeferredQueryClear(updateQuery, ref, sharedState) {
    let callback = updateQuery;
    let closure_1 = ref;
    let closure_2 = sharedState;
    let _slicedToArray = outer1_4.useRef(-1);
    const items = [updateQuery, ref];
    callback = outer1_4.useCallback(() => {
      clearTimeout(ref.current);
      ref.current = setTimeout(() => {
        clearTimeout(outer1_3.current);
        outer1_0("");
        const current = outer1_1.current;
        if (null != current) {
          current.setText("");
        }
      }, 100);
    }, items);
    const callback1 = outer1_4.useCallback(() => {
      clearTimeout(ref.current);
    }, []);
    const effect = outer1_4.useEffect(() => () => clearTimeout(outer1_3.current), []);
    let obj = callback(first[24]);
    const fn = function u() {
      return 0 === sharedState.get();
    };
    fn.__closure = { sharedState };
    fn.__workletHash = 7315121230879;
    fn.__initData = outer1_34;
    const fn2 = function a(arg0, arg1) {
      if (arg0 !== arg1) {
        if (arg0) {
          if (tmp) {
            updateQuery(first[24]).runOnJS(callback)();
            const obj2 = updateQuery(first[24]);
          }
        }
        let tmp2 = arg0;
        if (!arg0) {
          tmp2 = arg0 === arg1;
        }
        if (!tmp2) {
          updateQuery(first[24]).runOnJS(callback1)();
          const obj = updateQuery(first[24]);
        }
      }
    };
    obj = { runOnJS: callback(first[24]).runOnJS, clearQuery: callback, cancelTimeout: callback1 };
    fn2.__closure = obj;
    fn2.__workletHash = 6379173436444;
    fn2.__initData = outer1_35;
    const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  })(updateQuery, ref, sharedState);
  obj = {
    style: (function useWrapperStyles() {
      const tmp = outer1_27();
      let closure_0 = tmp;
      const height = str(first[38])().height;
      const rect = str(first[39])();
      const top = rect.top;
      const bottom = rect.bottom;
      let items = [height, top, bottom, tmp];
      return outer1_4.useMemo(() => {
        const items = [tmp.wrapper, { maxHeight: height - top - bottom - 16 }];
        return items;
      }, items);
    })()
  };
  const tmp13 = (function useWrapperStyles() {
    const tmp = outer1_27();
    let closure_0 = tmp;
    const height = str(first[38])().height;
    const rect = str(first[39])();
    const top = rect.top;
    const bottom = rect.bottom;
    let items = [height, top, bottom, tmp];
    return outer1_4.useMemo(() => {
      const items = [tmp.wrapper, { maxHeight: height - top - bottom - 16 }];
      return items;
    }, items);
  })();
  let items1 = [callback2(closure_31, { tab: tmp11, setTab: tmp12, updateQuery, searchRef: ref, sharedState }), , ];
  let tmp19 = 0 === str.trim().length;
  if (tmp19) {
    tmp19 = tmp11 === constants.SEARCH;
  }
  if (tmp19) {
    obj = { selectedGuildId: selectedUnreadGuild, setSelectedGuild: setSelectedUnreadGuild, unreadPrivateChannelIds, unreadGuilds, guildHistory, visible };
    tmp19 = callback2(str(first[43]), obj);
  }
  items1[1] = tmp19;
  const obj1 = { style: tmp.launchPadContent };
  if (tmp11 === constants.SEARCH) {
    if (tmp16) {
      let obj2 = { results: queryResults, query: str };
      let tmp37Result = callback2(_require(first[44]).SearchResults, obj2);
      const tmp42 = callback2;
    }
    obj1.children = tmp37Result;
    items1[2] = tmp24(tmp25, obj1);
    obj.children = items1;
    return closure_26(View, obj);
  }
  if (tmp11 === constants.SEARCH) {
    const obj3 = { selectedGuildId: selectedUnreadGuild };
    let unreads;
    if (null != initialResults) {
      unreads = initialResults.unreads;
    }
    if (null == unreads) {
      unreads = closure_32;
    }
    obj3.unreads = unreads;
    let channelHistory;
    if (null != initialResults) {
      channelHistory = initialResults.channelHistory;
    }
    if (null == channelHistory) {
      channelHistory = closure_32;
    }
    obj3.history = channelHistory;
    obj3.expandedHistory = tmp2[0];
    obj3.toggleExpandedHistory = callback;
    tmp37Result = callback2(_require(first[44]).InitialResults, obj3);
    const tmp37 = callback2;
  } else if (tmp11 === constants.DEV_TOOLS) {
    tmp37Result = callback2(str(first[45]), {});
  } else if (tmp11 === constants.MEMBERS) {
    tmp37Result = callback2(str(first[46]), {});
  } else {
    tmp37Result = callback2(str(first[47]), {});
  }
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/launchpad/native/LaunchPad.tsx");

export default memoResult;
