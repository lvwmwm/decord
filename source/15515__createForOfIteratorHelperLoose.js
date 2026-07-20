// Module ID: 15515
// Function ID: 118407
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 15515 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const tmp = callback4();
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
  const colors = importDefault(dependencyMap[19]).colors;
  obj.children = icon(selected ? colors.INTERACTIVE_TEXT_ACTIVE : colors.INTERACTIVE_TEXT_DEFAULT);
  return closure_25(arg1(dependencyMap[21]).PressableHighlight, obj);
}
function TabHeader(text) {
  const obj = { paddingHorizontal: "5.9.4", from: 24, ks: 0, TypeError: 83, style: callback4().subheader, children: text.text };
  return callback3(arg1(dependencyMap[22]).Text, obj);
}
function createAndAppendChannel(arg0, has, arr) {
  if (!has.has(arg0)) {
    const tmp3 = importDefault(dependencyMap[34])(arg0);
    if (null != tmp3) {
      arr.push(tmp3);
      has.add(arg0);
    }
  }
}
function useInitialResults(disabled) {
  disabled = disabled.disabled;
  const arg1 = disabled;
  const visible = disabled.visible;
  const importDefault = visible;
  let obj = arg1(dependencyMap[35]);
  const selectedGuildFromRoute = obj.getSelectedGuildFromRoute();
  const dependencyMap = selectedGuildFromRoute;
  const selectedChannelFromRoute = arg1(dependencyMap[35]).getSelectedChannelFromRoute();
  const callback2 = selectedChannelFromRoute;
  const tmp3 = callback2(importAllResult.useState(undefined), 2);
  const first = tmp3[0];
  const View = tmp5;
  const items = [visible];
  const effect = importAllResult.useEffect(() => {
    if (!visible) {
      tmp5(undefined);
    }
  }, items);
  let closure_6 = importAllResult.useRef([]);
  const obj2 = arg1(dependencyMap[35]);
  const items1 = [closure_19];
  const stateFromStores = arg1(dependencyMap[23]).useStateFromStores(items1, () => {
    if (visible) {
      let current = unreadPrivateChannelIds.getUnreadPrivateChannelIds();
    } else {
      current = ref.current;
    }
    return current;
  });
  let closure_7 = stateFromStores;
  const effect1 = importAllResult.useEffect(() => {
    closure_6.current = stateFromStores;
  });
  let closure_8 = importAllResult.useRef([]);
  const obj3 = arg1(dependencyMap[23]);
  const items2 = [closure_18, closure_21];
  const items3 = [visible, selectedGuildFromRoute];
  const stateFromStoresArray = arg1(dependencyMap[23]).useStateFromStoresArray(items2, () => {
    let iter2;
    if (visible) {
      const items = [];
      const items1 = [];
      const tmp4 = callback(flattenedGuildIds.getFlattenedGuildIds());
      let iter = tmp4();
      if (!iter.done) {
        do {
          let value = iter.value;
          let tmp5 = closure_2;
          if (value !== closure_2) {
            let tmp6 = closure_18;
            if (closure_18.getMentionCount(value) > 0) {
              let arr = items.push(value);
            } else {
              let tmp7 = closure_18;
              if (closure_18.hasUnread(value)) {
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
  const effect2 = importAllResult.useEffect(() => {
    closure_8.current = stateFromStoresArray;
  });
  let closure_10 = importAllResult.useRef([]);
  const obj4 = arg1(dependencyMap[23]);
  const items4 = [closure_7, closure_23, closure_20, closure_22, closure_12];
  const items5 = [disabled, selectedGuildFromRoute, visible, first];
  const stateFromStoresArray1 = arg1(dependencyMap[23]).useStateFromStoresArray(items4, () => {
    const tmp = null != first ? first : selectedGuildFromRoute;
    if (!disabled) {
      if (null != tmp) {
        if (visible) {
          const items = [];
          const disabled = items;
          const items1 = [];
          const visible = items1;
          const items2 = [];
          const selectedGuildFromRoute = items2;
          const items3 = [];
          const selectedChannelFromRoute = items3;
          const _Object = Object;
          const values = Object.values(ref4.getActiveJoinedUnreadThreadsForGuild(tmp));
          for (let num2 = 0; num2 < values.length; num2 = num2 + 1) {
            let tmp5 = values[num2];
            let tmp6 = tmp5;
            for (const key10024 in tmp5) {
              let tmp31 = key10024;
              let arr = items1.push(key10024);
            }
          }
          const guildChannels = stateFromStores.getGuild(tmp).guildChannels;
          guildChannels.forEachChannel((type) => {
            const tmp = callback2(type.type);
            if (tmp) {
              if (!closure_22.isChannelMuted(type.guild_id, type.id)) {
                if (null == type.parent_id) {
                  let num = 0;
                  if (closure_20.getMentionCount(type.id) > 0) {
                    items.push(type.id);
                  } else {
                    if (!tmp) {
                      num = items(items2[36]).getHasImportantUnread(type);
                      if (num) {
                        items1.push(type.id);
                      }
                      const obj = items(items2[36]);
                    }
                    if (tmp) {
                      const keys = Object.keys();
                      if (keys !== undefined) {
                        if (keys[num] !== undefined) {
                          items3.push(type.id);
                        }
                      }
                    } else if (closure_20.hasUnread(type.id)) {
                      items2.push(type.id);
                    }
                  }
                }
              }
            }
          }, { "Null": null, "Null": null });
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
  const effect3 = importAllResult.useEffect(() => {
    closure_10.current = stateFromStoresArray1;
  });
  closure_12 = importAllResult.useRef([]);
  const items6 = [disabled, visible, selectedGuildFromRoute, stateFromStoresArray];
  const memo = importAllResult.useMemo(() => {
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
              let tmp18 = channel;
              let tmp19 = stateFromStoresArray;
              let channel = channel.getChannel(stateFromStoresArray(obj3));
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
  const effect4 = importAllResult.useEffect(() => {
    closure_12.current = memo;
  });
  let closure_14 = importAllResult.useRef(undefined);
  const items7 = [disabled, visible, stateFromStoresArray1, selectedChannelFromRoute, first];
  const memo1 = importAllResult.useMemo(() => {
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
          const tmp20 = callback(items);
          let iter = tmp20();
          if (!iter.done) {
            do {
              let tmp21 = closure_40;
              let tmp22 = closure_9;
              let tmp23 = closure_40(closure_9(iter.value), set, items2);
              let iter2 = tmp20();
              iter = iter2;
              done = iter2.done;
            } while (!done);
          }
        }
        const _Set2 = Set;
        const set1 = new Set();
        if (stateFromStoresArray1.length > 0) {
          const tmp32 = callback(stateFromStoresArray1);
          let iter3 = tmp32();
          if (!iter3.done) {
            do {
              let tmp33 = closure_40;
              let tmp34 = closure_40(iter3.value, set1, items1);
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
  let closure_15 = memo1;
  const effect5 = importAllResult.useEffect(() => {
    closure_14.current = memo1;
  });
  obj = { initialResults: importAllResult.useDeferredValue(memo1), unreadPrivateChannelIds: stateFromStores, unreadGuilds: stateFromStoresArray, guildHistory: memo, selectedUnreadGuild: first, setSelectedUnreadGuild: tmp5 };
  return obj;
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ CHANNEL_PREFIX: closure_8, getIdFromHistoryItem: closure_9, getNavigationHistory: closure_10, GUILD_PREFIX: closure_11 } = arg1(dependencyMap[5]));
let closure_12 = importDefault(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[5]);
({ isGuildSelectableChannelType: closure_13, isGuildVocalChannelType: closure_14 } = arg1(dependencyMap[7]));
let closure_15 = importDefault(dependencyMap[8]);
let closure_16 = importDefault(dependencyMap[9]);
let closure_17 = importDefault(dependencyMap[10]);
let closure_18 = importDefault(dependencyMap[11]);
let closure_19 = importDefault(dependencyMap[12]);
let closure_20 = importDefault(dependencyMap[13]);
let closure_21 = importDefault(dependencyMap[14]);
let closure_22 = importDefault(dependencyMap[15]);
let closure_23 = importDefault(dependencyMap[16]);
const AnalyticEvents = arg1(dependencyMap[17]).AnalyticEvents;
const tmp3 = arg1(dependencyMap[7]);
({ jsx: closure_25, jsxs: closure_26 } = arg1(dependencyMap[18]));
const md = importDefault(dependencyMap[19]).radii.md;
let obj1 = arg1(dependencyMap[20]);
let obj = {};
obj = { color: "\u{1F9D1}\u200D\u{1F692}", lineHeight: true, flexGrow: 12.1, alignSelf: 127, paddingVertical: null, paddingHorizontal: 1, paddingTop: "center", marginBottom: "center", MINUTES_30: 64, HOURS_1: 16, backgroundColor: importDefault(dependencyMap[19]).colors.BACKGROUND_BASE_LOW };
obj.wrapper = obj;
obj.launchPadContent = {};
obj.header = { "Bool(true)": 0, "Bool(true)": 0, "Bool(true)": 0, "Bool(true)": 0, "Bool(true)": 0 };
obj.subheader = { <string:2397978275>: true, <string:2386645960>: true, <string:4135902548>: true, <string:2208235863>: true, <string:3080651359>: true, "Bool(true)": true };
obj1 = { backgroundColor: importDefault(dependencyMap[19]).colors.INPUT_BACKGROUND_DEFAULT, borderRadius: md, borderColor: importDefault(dependencyMap[19]).colors.INPUT_BORDER_DEFAULT };
obj.tabs = obj1;
const obj2 = { "Bool(false)": "boolean", "Bool(false)": "string", "Bool(false)": "boolean", "Bool(false)": "artboard", "Bool(false)": "artboard", borderRadius: md - 5 };
obj.tab = obj2;
const tmp4 = arg1(dependencyMap[18]);
obj.tabSelected = { backgroundColor: importDefault(dependencyMap[19]).colors.BACKGROUND_BASE_LOW };
let closure_27 = obj1.createStyles(obj);
let closure_28 = { SEARCH: 0, [0]: "SEARCH", MEMBERS: 1, [1]: "MEMBERS", NOTIFICATIONS: 2, [2]: "NOTIFICATIONS", DEV_TOOLS: 3, [3]: "DEV_TOOLS" };
let closure_29 = { code: "function LaunchPadTsx1(){const{sharedState}=this.__closure;return sharedState.get();}" };
let closure_30 = { code: "function LaunchPadTsx2(sharedState){const{keyboardShown,runOnJS,setFocused}=this.__closure;if(!keyboardShown.get()&&sharedState>0.75){runOnJS(setFocused)(true);}else if(keyboardShown.get()&&sharedState<=0){runOnJS(setFocused)(false);}}" };
let closure_31 = importAllResult.memo((tab) => {
  let sharedState;
  tab = tab.tab;
  const arg1 = tab;
  ({ setTab: closure_1, sharedState } = tab);
  const dependencyMap = sharedState;
  const searchRef = tab.searchRef;
  let closure_3 = searchRef;
  const tmp = callback4();
  let obj = arg1(dependencyMap[23]);
  const items = [closure_17];
  const stateFromStores = obj.useStateFromStores(items, () => isDeveloper.isDeveloper);
  const React = React.useRef(false);
  let obj1 = arg1(dependencyMap[24]);
  const sharedValue = obj1.useSharedValue(false);
  const View = sharedValue;
  let closure_6 = React.useRef(tab);
  const effect = React.useEffect(() => {
    closure_6.current = tab;
  });
  const items1 = [sharedValue, searchRef];
  const callback = React.useCallback((arg0, arg1) => {
    if (arg0) {
      if (ref2.current === constants.SEARCH) {
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
  let closure_7 = callback;
  let obj2 = arg1(dependencyMap[23]);
  const items2 = [closure_6];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => ref2.isOpen());
  const items3 = [stateFromStores1, callback];
  const effect1 = React.useEffect(() => {
    callback(!stateFromStores1, stateFromStores1);
  }, items3);
  const items4 = [tab, sharedState, callback];
  const effect2 = React.useEffect(() => {
    let tmp = tab === constants.SEARCH;
    if (tmp) {
      tmp = 1 === sharedState.get();
    }
    if (tmp) {
      callback(true);
    }
  }, items4);
  let obj3 = arg1(dependencyMap[24]);
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
  obj = { keyboardShown: sharedValue, runOnJS: arg1(dependencyMap[24]).runOnJS, setFocused: callback };
  S.__closure = obj;
  S.__workletHash = 3784684686013;
  S.__initData = closure_30;
  const animatedReaction = obj3.useAnimatedReaction(fn, S);
  obj = { style: tmp.header };
  if (tab === constants.SEARCH) {
    obj1 = { ref: searchRef, onChange: tab.updateQuery };
    let tmp15 = callback3(arg1(dependencyMap[26]).SearchField, obj1);
  } else if (tab === constants.MEMBERS) {
    obj2 = {};
    const intl2 = arg1(dependencyMap[27]).intl;
    obj2.text = intl2.string(arg1(dependencyMap[27]).t.9Oq93m);
    tmp15 = callback3(TabHeader, obj2);
  } else if (tab === constants.NOTIFICATIONS) {
    obj3 = {};
    const intl = arg1(dependencyMap[27]).intl;
    obj3.text = intl.string(arg1(dependencyMap[27]).t.HcoRu0);
    tmp15 = callback3(TabHeader, obj3);
  } else {
    const obj4 = { text: "Dev Tools" };
    tmp15 = callback3(TabHeader, obj4);
  }
  const items5 = [tmp15, ];
  const obj5 = { style: tmp.tabs };
  const obj6 = {
    icon(color) {
      return callback2(tab(sharedState[28]).FlashIcon, { size: "sm", color });
    }
  };
  const intl3 = arg1(dependencyMap[27]).intl;
  obj6.accessibilityLabel = intl3.string(arg1(dependencyMap[27]).t.JqV7IC);
  obj6.onPress = function onPress() {
    callback(constants.SEARCH);
    const current = searchRef.current;
    if (null != current) {
      current.focus();
    }
  };
  obj6.selected = tab === constants.SEARCH;
  const items6 = [callback3(TabButton, obj6), , ];
  const obj7 = {
    icon(color) {
      return callback2(tab(sharedState[29]).BellIcon, { size: "sm", color });
    }
  };
  const intl4 = arg1(dependencyMap[27]).intl;
  obj7.accessibilityLabel = intl4.string(arg1(dependencyMap[27]).t.HcoRu0);
  obj7.onPress = function onPress() {
    callback(constants.NOTIFICATIONS);
    const current = searchRef.current;
    if (null != current) {
      current.blur();
    }
  };
  obj7.selected = tab === constants.NOTIFICATIONS;
  items6[1] = callback3(TabButton, obj7);
  let tmp29 = null;
  if (stateFromStores) {
    const obj8 = {
      icon(color) {
          return callback2(tab(sharedState[30]).StaffBadgeIcon, { size: "sm", color });
        },
      accessibilityLabel: "Dev Tools",
      selected: tab === constants.DEV_TOOLS,
      onPress() {
          if (obj.isAndroid()) {
            tab(sharedState[32]).navigateToDevTools();
            callback(sharedState[33])();
            const obj2 = tab(sharedState[32]);
          } else {
            callback(constants.DEV_TOOLS);
          }
          const current = searchRef.current;
          if (null != current) {
            current.blur();
          }
        }
    };
    tmp29 = callback3(TabButton, obj8);
  }
  items6[2] = tmp29;
  obj5.children = items6;
  items5[1] = closure_26(View, obj5);
  obj.children = items5;
  return closure_26(View, obj);
});
let closure_32 = [];
const items = [arg1(dependencyMap[37]).AutocompleterResultTypes.GUILD, arg1(dependencyMap[37]).AutocompleterResultTypes.TEXT_CHANNEL, arg1(dependencyMap[37]).AutocompleterResultTypes.GROUP_DM, arg1(dependencyMap[37]).AutocompleterResultTypes.VOICE_CHANNEL, arg1(dependencyMap[37]).AutocompleterResultTypes.USER];
let closure_34 = { code: "function LaunchPadTsx3(){const{sharedState}=this.__closure;return sharedState.get()===0;}" };
let closure_35 = { code: "function LaunchPadTsx4(hidden,prevHidden){const{runOnJS,clearQuery,cancelTimeout}=this.__closure;if(hidden===prevHidden)return;if(hidden&&hidden!==prevHidden){runOnJS(clearQuery)();}else if(!hidden&&hidden!==prevHidden){runOnJS(cancelTimeout)();}}" };
const obj3 = { backgroundColor: importDefault(dependencyMap[19]).colors.BACKGROUND_BASE_LOW };
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
  const tmp2 = callback2(importAllResult.useState(false), 2);
  let callback = tmp2[1];
  callback = importAllResult.useCallback(() => callback((arg0) => !arg0), []);
  const ref = importAllResult.useRef(null);
  const tmp5 = function useAutocompleterResults(visible) {
    let closure_0 = visible;
    const tmp = tmp9(React.useState(""), 2);
    let closure_1 = tmp[1];
    const tmp2 = tmp9(React.useState(closure_32), 2);
    let closure_2 = tmp2[1];
    const first = tmp9(React.useState(() => {
      let tmp = callback(closure_2[40]);
      tmp = new tmp((arg0, str) => {
        if ("" === str.trim()) {
          callback(closure_32);
        } else {
          callback(arg0);
        }
      }, closure_33, undefined, { frecencyBoosters: true });
      return tmp;
    }), 1)[0];
    const items = [first];
    const effect = React.useEffect(() => () => closure_3.clean(), items);
    const items1 = [first];
    const effect1 = React.useEffect(() => callback(closure_2[41]).addRouteChangeListener(() => {
      const items = ["user:" + id.getId()];
      const set = new Set(items);
      const selectedGuildFromRoute = callback(closure_2[35]).getSelectedGuildFromRoute();
      if (null != selectedGuildFromRoute) {
        const _HermesInternal = HermesInternal;
        set.add("guild:" + selectedGuildFromRoute);
      }
      options.setOptions({ blacklist: set }, true);
    }), items1);
    const items2 = [visible, first];
    const effect2 = React.useEffect(() => {
      if (arg0) {
        obj.resume();
      } else {
        obj.pause();
      }
    }, items2);
    const items3 = [first];
    return {
      queryResults: tmp2[0],
      query: tmp[0],
      updateQuery: React.useCallback((arg0) => {
        callback(arg0);
        first.search(arg0);
      }, items3)
    };
  }(visible);
  const importDefault = str;
  ({ updateQuery, queryResults } = tmp5);
  let obj = { disabled: str.trim().length > 0, visible };
  const tmp6 = useInitialResults(obj);
  ({ initialResults, selectedUnreadGuild } = tmp6);
  ({ unreadPrivateChannelIds, unreadGuilds, guildHistory, setSelectedUnreadGuild } = tmp6);
  const tmp7 = callback2(importAllResult.useState(false), 2);
  const first = tmp7[0];
  const dependencyMap = first;
  const callback2 = tmp9;
  const tmp = callback4();
  [tmp11, tmp12] = callback2(importAllResult.useState(constants.SEARCH), 2);
  const items = [tmp5.query, tmp7[1], first];
  const tmp10 = callback2(importAllResult.useState(constants.SEARCH), 2);
  const effect = importAllResult.useEffect(() => {
    if (str.length > 0) {
      if (!first) {
        str(first[42]).track(constants.LAUNCHPAD_SEARCHED);
        tmp9(true);
        const obj = str(first[42]);
      }
    }
    if (0 === str.length) {
      const tmp9 = tmp9(false);
    }
  }, items);
  function useDeferredQueryClear(updateQuery, ref, sharedState) {
    let callback = updateQuery;
    const first = sharedState;
    let closure_3 = callback.useRef(-1);
    const items = [updateQuery, ref];
    callback = callback.useCallback(() => {
      clearTimeout(ref.current);
      ref.current = setTimeout(() => {
        clearTimeout(ref2.current);
        callback("");
        const current = ref.current;
        if (null != current) {
          current.setText("");
        }
      }, 100);
    }, items);
    const callback1 = callback.useCallback(() => {
      clearTimeout(ref.current);
    }, []);
    const effect = callback.useEffect(() => () => clearTimeout(ref.current), []);
    let obj = callback(first[24]);
    const fn = function u() {
      return 0 === arg2.get();
    };
    fn.__closure = { sharedState };
    fn.__workletHash = 7315121230879;
    fn.__initData = closure_34;
    const fn2 = function a(arg0, arg1) {
      if (arg0 !== arg1) {
        if (arg0) {
          if (tmp) {
            arg0(arg2[24]).runOnJS(callback)();
            const obj2 = arg0(arg2[24]);
          }
        }
        let tmp2 = arg0;
        if (!arg0) {
          tmp2 = arg0 === arg1;
        }
        if (!tmp2) {
          arg0(arg2[24]).runOnJS(callback1)();
          const obj = arg0(arg2[24]);
        }
      }
    };
    obj = { runOnJS: callback(first[24]).runOnJS, clearQuery: callback, cancelTimeout: callback1 };
    fn2.__closure = obj;
    fn2.__workletHash = 6379173436444;
    fn2.__initData = closure_35;
    const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  }(updateQuery, ref, sharedState);
  obj = {
    style: function useWrapperStyles() {
      const tmp = callback2();
      let closure_0 = tmp;
      const height = str(first[38])().height;
      const rect = str(first[39])();
      const top = rect.top;
      const first = top;
      const bottom = rect.bottom;
      const items = [height, top, bottom, tmp];
      return React.useMemo(() => {
        const items = [tmp.wrapper, { maxHeight: height - top - bottom - 16 }];
        return items;
      }, items);
    }()
  };
  const tmp13 = function useWrapperStyles() {
    const tmp = callback2();
    let closure_0 = tmp;
    const height = str(first[38])().height;
    const rect = str(first[39])();
    const top = rect.top;
    const first = top;
    const bottom = rect.bottom;
    const items = [height, top, bottom, tmp];
    return React.useMemo(() => {
      const items = [tmp.wrapper, { maxHeight: height - top - bottom - 16 }];
      return items;
    }, items);
  }();
  const items1 = [callback3(closure_31, { tab: tmp11, setTab: tmp12, updateQuery, searchRef: ref, sharedState }), , ];
  let tmp19 = 0 === str.trim().length;
  if (tmp19) {
    tmp19 = tmp11 === constants.SEARCH;
  }
  if (tmp19) {
    obj = { selectedGuildId: selectedUnreadGuild, setSelectedGuild: setSelectedUnreadGuild, unreadPrivateChannelIds, unreadGuilds, guildHistory, visible };
    tmp19 = callback3(importDefault(dependencyMap[43]), obj);
  }
  items1[1] = tmp19;
  const obj1 = { style: tmp.launchPadContent };
  if (tmp11 === constants.SEARCH) {
    if (tmp16) {
      const obj2 = { results: queryResults, query: str };
      let tmp37Result = callback3(callback(dependencyMap[44]).SearchResults, obj2);
      const tmp42 = callback3;
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
    tmp37Result = callback3(callback(dependencyMap[44]).InitialResults, obj3);
    const tmp37 = callback3;
  } else if (tmp11 === constants.DEV_TOOLS) {
    tmp37Result = callback3(importDefault(dependencyMap[45]), {});
  } else if (tmp11 === constants.MEMBERS) {
    tmp37Result = callback3(importDefault(dependencyMap[46]), {});
  } else {
    tmp37Result = callback3(importDefault(dependencyMap[47]), {});
  }
});
const result = arg1(dependencyMap[48]).fileFinishedImporting("modules/launchpad/native/LaunchPad.tsx");

export default memoResult;
