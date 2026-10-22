// Module ID: 10164
// Function ID: 10165
// Name: HorizontalAutocompleteWrapper
// Dependencies: [19, 1087, 21, 558, 576, 10165, 10377, 5038, 5192, 7206, 2]

// Module 10164 (HorizontalAutocompleteWrapper)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1087 */;
import timing from "timing" /* 5192 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let item, obj1, tmp, tmp10, tmp13, tmp16, tmp17, tmp18, tmp21, tmp23, tmp24, tmp3, tmp5, tmp6, tmp7, tmp9;

function getItemKey(type) {
  type = type.type;
  if (AutoCompleteResultTypes.USER === type) {
    const _HermesInternal4 = HermesInternal;
    return "" + type.type + ":" + type.user.id;
  } else if (AutoCompleteResultTypes.ROLE === type) {
    const _HermesInternal3 = HermesInternal;
    return "" + type.type + ":" + type.id;
  } else if (AutoCompleteResultTypes.CHANNEL === type) {
    const _HermesInternal2 = HermesInternal;
    return "" + type.type + ":" + type.channel.id;
  } else if (AutoCompleteResultTypes.EMOJI === type) {
    const _HermesInternal = HermesInternal;
    return "" + type.type + ":" + type.url + ":" + type.name;
  } else {
    return type.type;
  }
}
const AutoCompleteResultTypes = Constants.AutoCompleteResultTypes;
let jsx = Fragment.jsx;
const __initData = { code: "function HorizontalAutocompleteWrapperTsx1(){const{withTiming,toValue}=this.__closure;return{opacity:withTiming(toValue)};}" };
const __initData2 = { code: "function HorizontalAutocompleteWrapperTsx2(){const{withTiming,toValue}=this.__closure;return{opacity:withTiming(toValue)};}" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function HorizontalAutocompleteWrapper(onPressAutocompleteItem) {
  let autocompleteSelectionStart;
  let channel;
  let closure_5;
  let selection;
  let style;
  let text;
  let tmp2 = autocompleteSelectionStart;
  let obj = channel(autocompleteSelectionStart[4]);
  const cResult = obj.c(25);
  ({ style, channel } = onPressAutocompleteItem);
  onPressAutocompleteItem = onPressAutocompleteItem.onPressAutocompleteItem;
  ({ text, selection } = onPressAutocompleteItem);
  if (cResult[0] === channel) {
    if (cResult[1] === selection) {
      let tmp4;
      let tmp11;
      if (cResult[2] === text) {
        tmp4 = cResult[3];
      }
      const tmpResult = channel(tmp2[5]);
      const horizontalAutocompleteResults = tmpResult.useHorizontalAutocompleteResults(tmp4);
      ({ results, autocompleteSelectionStart } = horizontalAutocompleteResults);
      const query = horizontalAutocompleteResults.query;
      let obj4 = query;
      const ref = query.useRef(null);
      const first = results[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      const _Symbol = Symbol;
      let str = "react.memo_cache_sentinel";
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function f() {
          const current = ref.current;
          if (current != null) {
            current.scrollToOffset({ offset: 0, animated: false });
          }
        };
        let num = 4;
        cResult[4] = fn;
        tmp11 = fn;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] === query) {
        let tmp12;
        if (cResult[6] === type) {
          tmp12 = cResult[7];
        }
        const effect = obj4.useEffect(tmp11, tmp12);
        if (cResult[8] === autocompleteSelectionStart) {
          if (cResult[9] === onPressAutocompleteItem) {
            let tmp14;
            if (cResult[10] === query) {
              tmp14 = cResult[11];
            }
            jsx = tmp14;
            if (cResult[12] === channel.guild_id) {
              let tmp15;
              if (cResult[13] === tmp14) {
                tmp15 = cResult[14];
              }
              let num12 = 0;
              if (results.length > 0) {
                num12 = 1;
              }
              class H {
                constructor(arg0) {
                  item = onPressAutocompleteItem.item;
                  type = item.type;
                  tmp = closure_4;
                  if (closure_4.USER === type) {
                    tmp22 = closure_5;
                    tmp23 = onPressAutocompleteItem;
                    tmp24 = closure_2;
                    obj1 = {};
                    tmp25 = obj1;
                    tmp26 = item;
                    User = onPressAutocompleteItem(closure_2[6]).User;
                    merged = Object.assign(item);
                    tmp28 = item;
                    obj1.guildId = item.guild_id;
                    obj1.onPress = function onPress(arg0) {
                      return closure_5(arg0, item);
                    };
                    return closure_5(User, obj1);
                  } else if (tmp.ROLE === type) {
                    tmp15 = closure_5;
                    tmp16 = onPressAutocompleteItem;
                    tmp17 = closure_2;
                    obj5 = {};
                    tmp18 = obj5;
                    tmp19 = item;
                    Role = onPressAutocompleteItem(closure_2[6]).Role;
                    merged1 = Object.assign(item);
                    tmp21 = item;
                    obj5.guildId = item.guild_id;
                    obj5.onPress = function onPress(arg0) {
                      return closure_5(arg0, item);
                    };
                    return closure_5(Role, obj5);
                  } else if (tmp.CHANNEL === type) {
                    tmp9 = closure_5;
                    tmp10 = onPressAutocompleteItem;
                    tmp11 = closure_2;
                    obj6 = {};
                    tmp12 = obj6;
                    tmp13 = item;
                    Channel = onPressAutocompleteItem(closure_2[6]).Channel;
                    merged2 = Object.assign(item);
                    obj6.onPress = function onPress(arg0) {
                      return closure_5(arg0, item);
                    };
                    return closure_5(Channel, obj6);
                  } else if (tmp.EMOJI === type) {
                    tmp3 = closure_5;
                    tmp4 = onPressAutocompleteItem;
                    tmp5 = closure_2;
                    obj = {};
                    tmp6 = obj;
                    tmp7 = item;
                    Emoji = onPressAutocompleteItem(closure_2[6]).Emoji;
                    merged3 = Object.assign(item);
                    obj.onPress = function onPress(arg0) {
                      return closure_5(arg0, item);
                    };
                    return closure_5(Emoji, obj);
                  } else {
                    tmp2 = null;
                    return null;
                  }
                }
              }
              const fn2 = function x() {
                let obj2;
                const obj = { opacity: obj2.withTiming(getItemKey) };
                obj2 = timing;
                return obj;
              };
              let obj2 = { withTiming: tmp(tmp2[8]).withTiming, toValue: num12 };
              const useAnimatedStyle = tmp(tmp2[7]).useAnimatedStyle;
              channel(tmp2[7]);
              fn2.__closure = obj2;
              fn2.__workletHash = 7895652904738;
              fn2.__initData = __initData;
              const animatedStyle = useAnimatedStyle(fn2);
              if (cResult[15] === animatedStyle) {
                let tmp19;
                if (cResult[16] === style) {
                  tmp19 = cResult[17];
                }
                const _Symbol2 = Symbol;
                class H {
                  constructor(arg0) {
                    item = onPressAutocompleteItem.item;
                    type = item.type;
                    tmp = closure_4;
                    if (closure_4.USER === type) {
                      tmp22 = closure_5;
                      tmp23 = onPressAutocompleteItem;
                      tmp24 = closure_2;
                      obj1 = {};
                      tmp25 = obj1;
                      tmp26 = item;
                      User = onPressAutocompleteItem(closure_2[6]).User;
                      merged = Object.assign(item);
                      tmp28 = item;
                      obj1.guildId = item.guild_id;
                      obj1.onPress = function onPress(arg0) {
                        return closure_5(arg0, item);
                      };
                      return closure_5(User, obj1);
                    } else if (tmp.ROLE === type) {
                      tmp15 = closure_5;
                      tmp16 = onPressAutocompleteItem;
                      tmp17 = closure_2;
                      obj5 = {};
                      tmp18 = obj5;
                      tmp19 = item;
                      Role = onPressAutocompleteItem(closure_2[6]).Role;
                      merged1 = Object.assign(item);
                      tmp21 = item;
                      obj5.guildId = item.guild_id;
                      obj5.onPress = function onPress(arg0) {
                        return closure_5(arg0, item);
                      };
                      return closure_5(Role, obj5);
                    } else if (tmp.CHANNEL === type) {
                      tmp9 = closure_5;
                      tmp10 = onPressAutocompleteItem;
                      tmp11 = closure_2;
                      obj6 = {};
                      tmp12 = obj6;
                      tmp13 = item;
                      Channel = onPressAutocompleteItem(closure_2[6]).Channel;
                      merged2 = Object.assign(item);
                      obj6.onPress = function onPress(arg0) {
                        return closure_5(arg0, item);
                      };
                      return closure_5(Channel, obj6);
                    } else if (tmp.EMOJI === type) {
                      tmp3 = closure_5;
                      tmp4 = onPressAutocompleteItem;
                      tmp5 = closure_2;
                      obj = {};
                      tmp6 = obj;
                      tmp7 = item;
                      Emoji = onPressAutocompleteItem(closure_2[6]).Emoji;
                      merged3 = Object.assign(item);
                      obj.onPress = function onPress(arg0) {
                        return closure_5(arg0, item);
                      };
                      return closure_5(Emoji, obj);
                    } else {
                      tmp2 = null;
                      return null;
                    }
                  }
                }
                if (cResult[19] === tmp15) {
                  let tmp22;
                  if (cResult[20] === results) {
                    tmp22 = cResult[21];
                  }
                  if (cResult[22] === tmp19) {
                    let tmp26;
                    if (cResult[23] === tmp22) {
                      tmp26 = cResult[24];
                    }
                    return tmp26;
                  }
                  class H {
                    constructor(arg0) {
                      item = onPressAutocompleteItem.item;
                      type = item.type;
                      tmp = closure_4;
                      if (closure_4.USER === type) {
                        tmp22 = closure_5;
                        tmp23 = onPressAutocompleteItem;
                        tmp24 = closure_2;
                        obj1 = {};
                        tmp25 = obj1;
                        tmp26 = item;
                        User = onPressAutocompleteItem(closure_2[6]).User;
                        merged = Object.assign(item);
                        tmp28 = item;
                        obj1.guildId = item.guild_id;
                        obj1.onPress = function onPress(arg0) {
                          return closure_5(arg0, item);
                        };
                        return closure_5(User, obj1);
                      } else if (tmp.ROLE === type) {
                        tmp15 = closure_5;
                        tmp16 = onPressAutocompleteItem;
                        tmp17 = closure_2;
                        obj5 = {};
                        tmp18 = obj5;
                        tmp19 = item;
                        Role = onPressAutocompleteItem(closure_2[6]).Role;
                        merged1 = Object.assign(item);
                        tmp21 = item;
                        obj5.guildId = item.guild_id;
                        obj5.onPress = function onPress(arg0) {
                          return closure_5(arg0, item);
                        };
                        return closure_5(Role, obj5);
                      } else if (tmp.CHANNEL === type) {
                        tmp9 = closure_5;
                        tmp10 = onPressAutocompleteItem;
                        tmp11 = closure_2;
                        obj6 = {};
                        tmp12 = obj6;
                        tmp13 = item;
                        Channel = onPressAutocompleteItem(closure_2[6]).Channel;
                        merged2 = Object.assign(item);
                        obj6.onPress = function onPress(arg0) {
                          return closure_5(arg0, item);
                        };
                        return closure_5(Channel, obj6);
                      } else if (tmp.EMOJI === type) {
                        tmp3 = closure_5;
                        tmp4 = onPressAutocompleteItem;
                        tmp5 = closure_2;
                        obj = {};
                        tmp6 = obj;
                        tmp7 = item;
                        Emoji = onPressAutocompleteItem(closure_2[6]).Emoji;
                        merged3 = Object.assign(item);
                        obj.onPress = function onPress(arg0) {
                          return closure_5(arg0, item);
                        };
                        return closure_5(Emoji, obj);
                      } else {
                        tmp2 = null;
                        return null;
                      }
                    }
                  }
                  const tmp28 = jsx(onPressAutocompleteItem(tmp2[7]).View, { style: tmp19, children: tmp22 });
                  cResult[22] = tmp19;
                  cResult[23] = tmp22;
                  cResult[24] = tmp28;
                  tmp26 = tmp28;
                }
                const tmp25 = jsx(channel(tmp2[9]).FlashList, { ref, keyboardShouldPersistTaps: "always", horizontal: true, keyExtractor: getItemKey, getItemType: tmp21, data: results, renderItem: tmp15 });
                cResult[19] = tmp15;
                cResult[20] = results;
                cResult[21] = tmp25;
                tmp22 = tmp25;
              }
              const items = [style, animatedStyle];
              cResult[15] = animatedStyle;
              cResult[16] = style;
              cResult[17] = items;
              tmp19 = items;
            }
            class H {
              constructor(arg0) {
                item = onPressAutocompleteItem.item;
                type = item.type;
                tmp = closure_4;
                if (closure_4.USER === type) {
                  tmp22 = closure_5;
                  tmp23 = onPressAutocompleteItem;
                  tmp24 = closure_2;
                  obj1 = {};
                  tmp25 = obj1;
                  tmp26 = item;
                  User = onPressAutocompleteItem(closure_2[6]).User;
                  merged = Object.assign(item);
                  tmp28 = item;
                  obj1.guildId = item.guild_id;
                  obj1.onPress = function onPress(arg0) {
                    return closure_5(arg0, item);
                  };
                  return closure_5(User, obj1);
                } else if (tmp.ROLE === type) {
                  tmp15 = closure_5;
                  tmp16 = onPressAutocompleteItem;
                  tmp17 = closure_2;
                  obj5 = {};
                  tmp18 = obj5;
                  tmp19 = item;
                  Role = onPressAutocompleteItem(closure_2[6]).Role;
                  merged1 = Object.assign(item);
                  tmp21 = item;
                  obj5.guildId = item.guild_id;
                  obj5.onPress = function onPress(arg0) {
                    return closure_5(arg0, item);
                  };
                  return closure_5(Role, obj5);
                } else if (tmp.CHANNEL === type) {
                  tmp9 = closure_5;
                  tmp10 = onPressAutocompleteItem;
                  tmp11 = closure_2;
                  obj6 = {};
                  tmp12 = obj6;
                  tmp13 = item;
                  Channel = onPressAutocompleteItem(closure_2[6]).Channel;
                  merged2 = Object.assign(item);
                  obj6.onPress = function onPress(arg0) {
                    return closure_5(arg0, item);
                  };
                  return closure_5(Channel, obj6);
                } else if (tmp.EMOJI === type) {
                  tmp3 = closure_5;
                  tmp4 = onPressAutocompleteItem;
                  tmp5 = closure_2;
                  obj = {};
                  tmp6 = obj;
                  tmp7 = item;
                  Emoji = onPressAutocompleteItem(closure_2[6]).Emoji;
                  merged3 = Object.assign(item);
                  obj.onPress = function onPress(arg0) {
                    return closure_5(arg0, item);
                  };
                  return closure_5(Emoji, obj);
                } else {
                  tmp2 = null;
                  return null;
                }
              }
            }
            cResult[12] = channel.guild_id;
            cResult[13] = tmp14;
            cResult[14] = H;
            tmp15 = H;
          }
        }
        class E {
          constructor(stopPropagation, arg1) {
            stopPropagation.stopPropagation();
            let num = autocompleteSelectionStart;
            const tmp2 = onPressAutocompleteItem;
            if (autocompleteSelectionStart == null) {
              num = 0;
            }
            let str = query;
            if (query == null) {
              str = "";
            }
            tmp2(arg1, num, str);
          }
        }
        cResult[8] = autocompleteSelectionStart;
        cResult[9] = onPressAutocompleteItem;
        cResult[10] = query;
        cResult[11] = E;
        tmp14 = E;
      }
      const items1 = [query, type];
      cResult[5] = query;
      cResult[6] = type;
      cResult[7] = items1;
      tmp12 = items1;
    }
  }
  const obj6 = { channel, text, selection };
  cResult[0] = channel;
  cResult[1] = selection;
  cResult[2] = text;
  cResult[3] = obj6;
  tmp4 = obj6;
}) : (function HorizontalAutocompleteWrapper(channel) {
  let autocompleteSelectionStart;
  let items3;
  let obj5;
  let selection;
  let style;
  let text;
  channel = channel.channel;
  const onPressAutocompleteItem = channel.onPressAutocompleteItem;
  autocompleteSelectionStart = undefined;
  let callback;
  let num;
  let tmp2 = autocompleteSelectionStart;
  ({ style, text, selection } = channel);
  let obj = channel(autocompleteSelectionStart[5]);
  const horizontalAutocompleteResults = obj.useHorizontalAutocompleteResults({ channel, text, selection });
  ({ results, autocompleteSelectionStart } = horizontalAutocompleteResults);
  const query = horizontalAutocompleteResults.query;
  let obj2 = query;
  const ref = query.useRef(null);
  const first = results[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  const items = [query, type];
  const effect = obj2.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items);
  const items1 = [onPressAutocompleteItem, autocompleteSelectionStart, query];
  callback = obj2.useCallback((stopPropagation, arg1) => {
    stopPropagation.stopPropagation();
    num = autocompleteSelectionStart;
    const tmp2 = onPressAutocompleteItem;
    if (autocompleteSelectionStart == null) {
      num = 0;
    }
    let str = query;
    if (query == null) {
      str = "";
    }
    tmp2(arg1, num, str);
  }, items1);
  const items2 = [channel.guild_id, callback];
  num = 0;
  const callback1 = obj2.useCallback((item) => {
    item = item.item;
    const type = item.type;
    if (ref.USER === type) {
      const obj2 = {
        guildId: item.guild_id,
        onPress(arg0) {
            return callback(arg0, item);
          }
      };
      const User = onPressAutocompleteItem(autocompleteSelectionStart[6]).User;
      const merged = Object.assign(item);
      return callback(User, obj2);
    } else if (ref.ROLE === type) {
      const obj3 = {
        guildId: item.guild_id,
        onPress(arg0) {
            return callback(arg0, item);
          }
      };
      const Role = onPressAutocompleteItem(autocompleteSelectionStart[6]).Role;
      const merged1 = Object.assign(item);
      return callback(Role, obj3);
    } else if (ref.CHANNEL === type) {
      const obj4 = {
        onPress(arg0) {
            return callback(arg0, item);
          }
      };
      const Channel = onPressAutocompleteItem(autocompleteSelectionStart[6]).Channel;
      const merged2 = Object.assign(item);
      return callback(Channel, obj4);
    } else if (ref.EMOJI === type) {
      const obj = {
        onPress(arg0) {
            return callback(arg0, item);
          }
      };
      const Emoji = onPressAutocompleteItem(autocompleteSelectionStart[6]).Emoji;
      const merged3 = Object.assign(item);
      return callback(Emoji, obj);
    } else {
      return null;
    }
  }, items2);
  if (results.length > 0) {
    num = 1;
  }
  const tmpResult = channel(tmp2[7]);
  class T {
    constructor() {
      let obj2;
      const obj = { opacity: obj2.withTiming(num) };
      obj2 = timing;
      return obj;
    }
  }
  let obj3 = { withTiming: tmp(tmp2[8]).withTiming, toValue: num };
  T.__closure = obj3;
  T.__workletHash = 6537603880065;
  T.__initData = __initData2;
  const animatedStyle = tmpResult.useAnimatedStyle(T);
  let obj4 = { style: items3, children: callback(tmp(tmp2[9]).FlashList, obj5) };
  items3 = [style, animatedStyle];
  const View = onPressAutocompleteItem(tmp2[7]).View;
  obj5 = {
    ref,
    keyboardShouldPersistTaps: "always",
    horizontal: true,
    keyExtractor: num,
    getItemType(type) {
      return type.type;
    },
    data: results,
    renderItem: callback1
  };
  return callback(View, obj4);
});
const result = size.fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocompleteWrapper.tsx");

export default tmp2;
