// Module ID: 9768
// Function ID: 9769
// Name: HorizontalAutocompleteWrapper
// Dependencies: [19, 17, 1085, 21, 558, 576, 9769, 9982, 4811, 5092, 2]

// Module 9768 (HorizontalAutocompleteWrapper)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import timing from "timing" /* 5092 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let item, obj1, obj6, tmp, tmp10, tmp12, tmp13, tmp16, tmp17, tmp22, tmp23, tmp24, tmp25, tmp26, tmp28, tmp3, tmp5, tmp9;

const FlatList = react_native.FlatList;
Constants.AutoCompleteResultTypes;
const jsx = Fragment.jsx;
const __initData = { code: "function HorizontalAutocompleteWrapperTsx1(){const{withTiming,toValue}=this.__closure;return{opacity:withTiming(toValue)};}" };
const __initData2 = { code: "function HorizontalAutocompleteWrapperTsx2(){const{withTiming,toValue}=this.__closure;return{opacity:withTiming(toValue)};}" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function HorizontalAutocompleteWrapper(onPressAutocompleteItem) {
  let autocompleteSelectionStart;
  let channel;
  let results;
  let selection;
  let style;
  let text;
  let tmp2 = autocompleteSelectionStart;
  let obj = channel(autocompleteSelectionStart[5]);
  const cResult = obj.c(21);
  ({ style, channel } = onPressAutocompleteItem);
  onPressAutocompleteItem = onPressAutocompleteItem.onPressAutocompleteItem;
  ({ text, selection } = onPressAutocompleteItem);
  if (cResult[0] === channel) {
    if (cResult[1] === selection) {
      let tmp4;
      if (cResult[2] === text) {
        tmp4 = cResult[3];
      }
      const tmpResult = channel(tmp2[6]);
      const horizontalAutocompleteResults = tmpResult.useHorizontalAutocompleteResults(tmp4);
      ({ results, autocompleteSelectionStart } = horizontalAutocompleteResults);
      const query = horizontalAutocompleteResults.query;
      if (cResult[4] === autocompleteSelectionStart) {
        if (cResult[5] === onPressAutocompleteItem) {
          let tmp6;
          if (cResult[6] === query) {
            tmp6 = cResult[7];
          }
          let closure_4 = tmp6;
          if (cResult[8] === channel.guild_id) {
            let tmp7;
            if (cResult[9] === tmp6) {
              tmp7 = cResult[10];
            }
            let num8 = 0;
            if (results.length > 0) {
              num8 = 1;
            }
            class S {
              constructor(arg0) {
                item = onPressAutocompleteItem.item;
                type = item.type;
                tmp = c5;
                if (c5.USER === type) {
                  tmp22 = closure_1_6;
                  tmp23 = onPressAutocompleteItem;
                  tmp24 = closure_2;
                  obj1 = {};
                  tmp25 = obj1;
                  tmp26 = item;
                  User = onPressAutocompleteItem(closure_2[7]).User;
                  merged = Object.assign(item);
                  tmp28 = item;
                  obj1.guildId = item.guild_id;
                  obj1.onPress = function onPress(arg0) {
                    return closure_4(arg0, item);
                  };
                  return closure_1_6(User, obj1);
                } else if (tmp.ROLE === type) {
                  tmp15 = closure_1_6;
                  tmp16 = onPressAutocompleteItem;
                  tmp17 = closure_2;
                  obj5 = {};
                  tmp18 = obj5;
                  tmp19 = item;
                  Role = onPressAutocompleteItem(closure_2[7]).Role;
                  merged1 = Object.assign(item);
                  tmp21 = item;
                  obj5.guildId = item.guild_id;
                  obj5.onPress = function onPress(arg0) {
                    return closure_4(arg0, item);
                  };
                  return closure_1_6(Role, obj5);
                } else if (tmp.CHANNEL === type) {
                  tmp9 = closure_1_6;
                  tmp10 = onPressAutocompleteItem;
                  tmp11 = closure_2;
                  obj6 = {};
                  tmp12 = obj6;
                  tmp13 = item;
                  Channel = onPressAutocompleteItem(closure_2[7]).Channel;
                  merged2 = Object.assign(item);
                  obj6.onPress = function onPress(arg0) {
                    return closure_4(arg0, item);
                  };
                  return closure_1_6(Channel, obj6);
                } else if (tmp.EMOJI === type) {
                  tmp3 = closure_1_6;
                  tmp4 = onPressAutocompleteItem;
                  tmp5 = closure_2;
                  obj = {};
                  tmp6 = obj;
                  tmp7 = item;
                  Emoji = onPressAutocompleteItem(closure_2[7]).Emoji;
                  merged3 = Object.assign(item);
                  obj.onPress = function onPress(arg0) {
                    return closure_4(arg0, item);
                  };
                  return closure_1_6(Emoji, obj);
                } else {
                  tmp2 = null;
                  return null;
                }
              }
            }
            const tmpResult2 = channel(tmp2[8]);
            class H {
              constructor() {
                let obj2;
                const obj = { opacity: obj2.withTiming(constants) };
                obj2 = timing;
                return obj;
              }
            }
            let obj2 = { withTiming: tmp(tmp2[9]).withTiming, toValue: num8 };
            const useAnimatedStyle = tmpResult2.useAnimatedStyle;
            H.__closure = obj2;
            H.__workletHash = 7895652904738;
            H.__initData = __initData;
            const animatedStyle = useAnimatedStyle(H);
            if (cResult[11] === animatedStyle) {
              let tmp11;
              if (cResult[12] === style) {
                tmp11 = cResult[13];
              }
              const _Symbol = Symbol;
              class S {
                constructor(arg0) {
                  item = onPressAutocompleteItem.item;
                  type = item.type;
                  tmp = c5;
                  if (c5.USER === type) {
                    tmp22 = closure_1_6;
                    tmp23 = onPressAutocompleteItem;
                    tmp24 = closure_2;
                    obj1 = {};
                    tmp25 = obj1;
                    tmp26 = item;
                    User = onPressAutocompleteItem(closure_2[7]).User;
                    merged = Object.assign(item);
                    tmp28 = item;
                    obj1.guildId = item.guild_id;
                    obj1.onPress = function onPress(arg0) {
                      return closure_4(arg0, item);
                    };
                    return closure_1_6(User, obj1);
                  } else if (tmp.ROLE === type) {
                    tmp15 = closure_1_6;
                    tmp16 = onPressAutocompleteItem;
                    tmp17 = closure_2;
                    obj5 = {};
                    tmp18 = obj5;
                    tmp19 = item;
                    Role = onPressAutocompleteItem(closure_2[7]).Role;
                    merged1 = Object.assign(item);
                    tmp21 = item;
                    obj5.guildId = item.guild_id;
                    obj5.onPress = function onPress(arg0) {
                      return closure_4(arg0, item);
                    };
                    return closure_1_6(Role, obj5);
                  } else if (tmp.CHANNEL === type) {
                    tmp9 = closure_1_6;
                    tmp10 = onPressAutocompleteItem;
                    tmp11 = closure_2;
                    obj6 = {};
                    tmp12 = obj6;
                    tmp13 = item;
                    Channel = onPressAutocompleteItem(closure_2[7]).Channel;
                    merged2 = Object.assign(item);
                    obj6.onPress = function onPress(arg0) {
                      return closure_4(arg0, item);
                    };
                    return closure_1_6(Channel, obj6);
                  } else if (tmp.EMOJI === type) {
                    tmp3 = closure_1_6;
                    tmp4 = onPressAutocompleteItem;
                    tmp5 = closure_2;
                    obj = {};
                    tmp6 = obj;
                    tmp7 = item;
                    Emoji = onPressAutocompleteItem(closure_2[7]).Emoji;
                    merged3 = Object.assign(item);
                    obj.onPress = function onPress(arg0) {
                      return closure_4(arg0, item);
                    };
                    return closure_1_6(Emoji, obj);
                  } else {
                    tmp2 = null;
                    return null;
                  }
                }
              }
              class H {
                constructor() {
                  let obj2;
                  const obj = { opacity: obj2.withTiming(constants) };
                  obj2 = timing;
                  return obj;
                }
              }
              if (cResult[15] === tmp7) {
                let tmp15;
                if (cResult[16] === results) {
                  tmp15 = cResult[17];
                }
                if (cResult[18] === tmp11) {
                  let tmp19;
                  if (cResult[19] === tmp15) {
                    tmp19 = cResult[20];
                  }
                  return tmp19;
                }
                class S {
                  constructor(arg0) {
                    item = onPressAutocompleteItem.item;
                    type = item.type;
                    tmp = c5;
                    if (c5.USER === type) {
                      tmp22 = closure_1_6;
                      tmp23 = onPressAutocompleteItem;
                      tmp24 = closure_2;
                      obj1 = {};
                      tmp25 = obj1;
                      tmp26 = item;
                      User = onPressAutocompleteItem(closure_2[7]).User;
                      merged = Object.assign(item);
                      tmp28 = item;
                      obj1.guildId = item.guild_id;
                      obj1.onPress = function onPress(arg0) {
                        return closure_4(arg0, item);
                      };
                      return closure_1_6(User, obj1);
                    } else if (tmp.ROLE === type) {
                      tmp15 = closure_1_6;
                      tmp16 = onPressAutocompleteItem;
                      tmp17 = closure_2;
                      obj5 = {};
                      tmp18 = obj5;
                      tmp19 = item;
                      Role = onPressAutocompleteItem(closure_2[7]).Role;
                      merged1 = Object.assign(item);
                      tmp21 = item;
                      obj5.guildId = item.guild_id;
                      obj5.onPress = function onPress(arg0) {
                        return closure_4(arg0, item);
                      };
                      return closure_1_6(Role, obj5);
                    } else if (tmp.CHANNEL === type) {
                      tmp9 = closure_1_6;
                      tmp10 = onPressAutocompleteItem;
                      tmp11 = closure_2;
                      obj6 = {};
                      tmp12 = obj6;
                      tmp13 = item;
                      Channel = onPressAutocompleteItem(closure_2[7]).Channel;
                      merged2 = Object.assign(item);
                      obj6.onPress = function onPress(arg0) {
                        return closure_4(arg0, item);
                      };
                      return closure_1_6(Channel, obj6);
                    } else if (tmp.EMOJI === type) {
                      tmp3 = closure_1_6;
                      tmp4 = onPressAutocompleteItem;
                      tmp5 = closure_2;
                      obj = {};
                      tmp6 = obj;
                      tmp7 = item;
                      Emoji = onPressAutocompleteItem(closure_2[7]).Emoji;
                      merged3 = Object.assign(item);
                      obj.onPress = function onPress(arg0) {
                        return closure_4(arg0, item);
                      };
                      return closure_1_6(Emoji, obj);
                    } else {
                      tmp2 = null;
                      return null;
                    }
                  }
                }
                class H {
                  constructor() {
                    let obj2;
                    const obj = { opacity: obj2.withTiming(constants) };
                    obj2 = timing;
                    return obj;
                  }
                }
                const tmp21 = jsx(onPressAutocompleteItem(tmp2[8]).View, { style: null, children: tmp15 });
                cResult[18] = tmp11;
                cResult[19] = tmp15;
                cResult[20] = tmp21;
                tmp19 = tmp21;
              }
              const tmp18 = <closure_4 keyboardShouldPersistTaps="always" horizontal keyExtractor={tmp14} data={results} renderItem={tmp7} />;
              cResult[15] = tmp7;
              cResult[16] = results;
              cResult[17] = tmp18;
              tmp15 = tmp18;
            }
            const items = [style, animatedStyle];
            cResult[11] = animatedStyle;
            cResult[12] = style;
            cResult[13] = items;
            tmp11 = items;
          }
          class S {
            constructor(arg0) {
              item = onPressAutocompleteItem.item;
              type = item.type;
              tmp = c5;
              if (c5.USER === type) {
                tmp22 = closure_1_6;
                tmp23 = onPressAutocompleteItem;
                tmp24 = closure_2;
                obj1 = {};
                tmp25 = obj1;
                tmp26 = item;
                User = onPressAutocompleteItem(closure_2[7]).User;
                merged = Object.assign(item);
                tmp28 = item;
                obj1.guildId = item.guild_id;
                obj1.onPress = function onPress(arg0) {
                  return closure_4(arg0, item);
                };
                return closure_1_6(User, obj1);
              } else if (tmp.ROLE === type) {
                tmp15 = closure_1_6;
                tmp16 = onPressAutocompleteItem;
                tmp17 = closure_2;
                obj5 = {};
                tmp18 = obj5;
                tmp19 = item;
                Role = onPressAutocompleteItem(closure_2[7]).Role;
                merged1 = Object.assign(item);
                tmp21 = item;
                obj5.guildId = item.guild_id;
                obj5.onPress = function onPress(arg0) {
                  return closure_4(arg0, item);
                };
                return closure_1_6(Role, obj5);
              } else if (tmp.CHANNEL === type) {
                tmp9 = closure_1_6;
                tmp10 = onPressAutocompleteItem;
                tmp11 = closure_2;
                obj6 = {};
                tmp12 = obj6;
                tmp13 = item;
                Channel = onPressAutocompleteItem(closure_2[7]).Channel;
                merged2 = Object.assign(item);
                obj6.onPress = function onPress(arg0) {
                  return closure_4(arg0, item);
                };
                return closure_1_6(Channel, obj6);
              } else if (tmp.EMOJI === type) {
                tmp3 = closure_1_6;
                tmp4 = onPressAutocompleteItem;
                tmp5 = closure_2;
                obj = {};
                tmp6 = obj;
                tmp7 = item;
                Emoji = onPressAutocompleteItem(closure_2[7]).Emoji;
                merged3 = Object.assign(item);
                obj.onPress = function onPress(arg0) {
                  return closure_4(arg0, item);
                };
                return closure_1_6(Emoji, obj);
              } else {
                tmp2 = null;
                return null;
              }
            }
          }
          cResult[9] = tmp6;
          cResult[10] = S;
          tmp7 = S;
        }
      }
      const fn = function w(stopPropagation, arg1) {
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
      };
      let num = 4;
      cResult[4] = autocompleteSelectionStart;
      cResult[5] = onPressAutocompleteItem;
      cResult[6] = query;
      cResult[7] = fn;
      tmp6 = fn;
    }
  }
  const obj5 = { channel, text, selection };
  cResult[0] = channel;
  cResult[1] = selection;
  cResult[2] = text;
  cResult[3] = obj5;
  tmp4 = obj5;
}) : (function HorizontalAutocompleteWrapper(channel) {
  let autocompleteSelectionStart;
  let results;
  let selection;
  let style;
  let text;
  channel = channel.channel;
  const onPressAutocompleteItem = channel.onPressAutocompleteItem;
  autocompleteSelectionStart = undefined;
  let tmp2 = autocompleteSelectionStart;
  ({ style, text, selection } = channel);
  let obj = channel(autocompleteSelectionStart[6]);
  const horizontalAutocompleteResults = obj.useHorizontalAutocompleteResults({ channel, text, selection });
  ({ results, autocompleteSelectionStart } = horizontalAutocompleteResults);
  const query = horizontalAutocompleteResults.query;
  const items = [onPressAutocompleteItem, autocompleteSelectionStart, query];
  const callback = query.useCallback((stopPropagation, arg1) => {
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
  }, items);
  const items1 = [channel.guild_id, callback];
  let num = 0;
  const callback1 = query.useCallback((item) => {
    item = item.item;
    const type = item.type;
    if (num.USER === type) {
      const User = onPressAutocompleteItem(autocompleteSelectionStart[7]).User;
      const merged = Object.assign(item);
      return <User guildId={item.guild_id} onPress={function onPress(arg0) {
        return callback(arg0, item);
      }} />;
    } else if (num.ROLE === type) {
      const Role = onPressAutocompleteItem(autocompleteSelectionStart[7]).Role;
      const merged1 = Object.assign(item);
      return <Role guildId={item.guild_id} onPress={function onPress(arg0) {
        return callback(arg0, item);
      }} />;
    } else if (num.CHANNEL === type) {
      const Channel = onPressAutocompleteItem(autocompleteSelectionStart[7]).Channel;
      const merged2 = Object.assign(item);
      return <Channel onPress={function onPress(arg0) {
        return callback(arg0, item);
      }} />;
    } else if (num.EMOJI === type) {
      const Emoji = onPressAutocompleteItem(autocompleteSelectionStart[7]).Emoji;
      const merged3 = Object.assign(item);
      return <Emoji onPress={function onPress(arg0) {
        return callback(arg0, item);
      }} />;
    } else {
      return null;
    }
  }, items1);
  if (results.length > 0) {
    num = 1;
  }
  const fn = function _() {
    let obj2;
    const obj = { opacity: obj2.withTiming(num) };
    obj2 = timing;
    return obj;
  };
  const tmpResult = channel(tmp2[8]);
  let obj2 = { withTiming: tmp(tmp2[9]).withTiming, toValue: num };
  fn.__closure = obj2;
  fn.__workletHash = 6537603880065;
  fn.__initData = __initData2;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const items2 = [style, animatedStyle];
  const View = onPressAutocompleteItem(tmp2[8]).View;
  return <View style={items2}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocompleteWrapper.tsx");

export default tmp2;
