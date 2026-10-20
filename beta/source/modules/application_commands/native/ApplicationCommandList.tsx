// Module ID: 13067
// Function ID: 13068
// Name: ApplicationCommandList
// Dependencies: [19, 10016, 21, 558, 576, 2000, 9555, 10107, 7513, 13064, 13065, 7091, 2]

// Module 13067 (ApplicationCommandList)
import Fragment from "Fragment" /* 21 */;
import ApplicationCommandsConstants from "ApplicationCommandsConstants" /* 10016 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_1, item, nativeEvent, tmp8, tmpResult;

const AUTOCOMPLETE_ROW_HEIGHT = ApplicationCommandsConstants.AUTOCOMPLETE_ROW_HEIGHT;
const jsx = Fragment.jsx;
let closure_6 = 3 * AUTOCOMPLETE_ROW_HEIGHT;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ApplicationCommandList(onPressCommandItem) {
  let ItemSeparatorComponent;
  let channel;
  let commands;
  let onCommandsChange;
  let query;
  let style;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  const tmp = channel;
  let obj = channel(commands[4]);
  const cResult = obj.c(27);
  ({ style, channel } = onPressCommandItem);
  onPressCommandItem = onPressCommandItem.onPressCommandItem;
  ({ query, ItemSeparatorComponent, onCommandsChange } = onPressCommandItem);
  if (cResult[0] !== channel) {
    const obj2 = { channel, type: "channel" };
    let num = 0;
    cResult[0] = channel;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp(tmp2[5]).ApplicationCommandType.CHAT];
    cResult[2] = items;
    tmp5 = items;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] !== query) {
    const obj3 = { text: query, commandTypes: tmp5 };
    cResult[3] = query;
    cResult[4] = obj3;
    tmp6 = obj3;
  } else {
    tmp6 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { placeholderCount: 3, limit: 7, scoreMethod: tmp(commands[6]).ScoreMethod.COMMAND_OR_APPLICATION };
    cResult[5] = obj4;
    tmp7 = obj4;
  } else {
    tmp7 = cResult[5];
  }
  const obj5 = onCommandsChange(commands[7]);
  const query1 = obj5.useQuery(tmp4, tmp6, tmp7);
  commands = query1.commands;
  const sections = query1.sections;
  const scrollDown = query1.scrollDown;
  if (cResult[6] === channel.guild_id) {
    if (cResult[7] === onPressCommandItem) {
      let tmp9;
      if (cResult[8] === sections) {
        tmp9 = cResult[9];
      }
      let length;
      const tmp10 = cResult[10];
      if (commands != null) {
        length = commands.length;
      }
      if (tmp10 === length) {
        let tmp13;
        if (cResult[11] === onCommandsChange) {
          tmp13 = cResult[12];
        }
        let length1;
        if (commands != null) {
          length1 = commands.length;
        }
        if (cResult[13] === onCommandsChange) {
          let tmp16;
          let tmp20;
          let tmp22;
          let tmp23;
          if (cResult[14] === length1) {
            tmp16 = cResult[15];
          }
          const effect = sections.useEffect(tmp13, tmp16);
          if (cResult[16] !== scrollDown) {
            class M {
              constructor(arg0) {
                nativeEvent = onPressCommandItem.nativeEvent;
                if (nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height >= nativeEvent.contentSize.height - closure_6) {
                  tmp = scrollDown;
                  tmp2 = scrollDown();
                }
                return;
              }
            }
            cResult[16] = scrollDown;
            cResult[17] = M;
          } else {
            class M {
              constructor(arg0) {
                nativeEvent = onPressCommandItem.nativeEvent;
                if (nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height >= nativeEvent.contentSize.height - closure_6) {
                  tmp = scrollDown;
                  tmp2 = scrollDown();
                }
                return;
              }
            }
          }
          const _Symbol = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            class D {
              constructor(arg0) {
                return onPressCommandItem.id;
              }
            }
            cResult[18] = D;
            tmp20 = D;
          } else {
            class D {
              constructor(arg0) {
                return onPressCommandItem.id;
              }
            }
          }
          const _Symbol2 = Symbol;
          class P {
            constructor() {
              if (onCommandsChange != null) {
                num = undefined;
                if (commands != null) {
                  num = commands.length;
                }
                if (num == null) {
                  num = 0;
                }
                tmpResult = tmp(num);
              }
              return;
            }
          }
          if (tmp21 === Symbol.for("react.memo_cache_sentinel")) {
            class D {
              constructor(arg0) {
                return onPressCommandItem.id;
              }
            }
            class R {
              constructor(arg0) {
                str = "command";
                if (onPressCommandItem.inputType === channel(commands[8]).ApplicationCommandInputType.PLACEHOLDER) {
                  str = "placeholder";
                }
                return str;
              }
            }
            cResult[19] = tmp24;
            cResult[20] = R;
            tmp22 = tmp24;
            tmp23 = R;
          } else {
            class D {
              constructor(arg0) {
                return onPressCommandItem.id;
              }
            }
            class R {
              constructor(arg0) {
                str = "command";
                if (onPressCommandItem.inputType === channel(commands[8]).ApplicationCommandInputType.PLACEHOLDER) {
                  str = "placeholder";
                }
                return str;
              }
            }
          }
          if (cResult[21] === ItemSeparatorComponent) {
            class D {
              constructor(arg0) {
                return onPressCommandItem.id;
              }
            }
          }
          const obj6 = { style, keyExtractor: tmp20, data: commands, maintainVisibleContentPosition: tmp22, getItemType: tmp23, renderItem: tmp9, ItemSeparatorComponent, onScroll: tmp19 };
          cResult[21] = ItemSeparatorComponent;
          cResult[22] = commands;
          cResult[23] = tmp19;
          cResult[24] = tmp9;
          cResult[25] = style;
          cResult[26] = scrollDown(tmp(commands[11]).FlashList, obj6);
          const tmp27 = scrollDown(tmp(commands[11]).FlashList, obj6);
        }
        const items1 = [length1, onCommandsChange];
        class P {
          constructor() {
            if (onCommandsChange != null) {
              num = undefined;
              if (commands != null) {
                num = commands.length;
              }
              if (num == null) {
                num = 0;
              }
              tmpResult = tmp(num);
            }
            return;
          }
        }
        cResult[14] = length1;
        cResult[15] = items1;
        tmp16 = items1;
      }
      if (commands != null) {
        class D {
          constructor(arg0) {
            return onPressCommandItem.id;
          }
        }
      }
      class P {
        constructor() {
          if (onCommandsChange != null) {
            num = undefined;
            if (commands != null) {
              num = commands.length;
            }
            if (num == null) {
              num = 0;
            }
            tmpResult = tmp(num);
          }
          return;
        }
      }
      cResult[10] = undefined;
      cResult[11] = onCommandsChange;
      cResult[12] = P;
      tmp13 = P;
    }
  }
  class T {
    constructor(arg0) {
      item = onPressCommandItem.item;
      tmp = commands;
      index = onPressCommandItem.index;
      if (item.inputType === channel(commands[8]).ApplicationCommandInputType.PLACEHOLDER) {
        tmp7 = scrollDown;
        tmp8 = onPressCommandItem;
        return scrollDown(onPressCommandItem(tmp[9]), {});
      } else {
        arr = sections;
        tmp2 = null;
        found = undefined;
        if (sections != null) {
          found = arr.find(() => { /* body not rendered: F147227 */ });
        }
        closure_1 = found;
        tmp4 = scrollDown;
        tmp5 = onPressCommandItem;
        obj = { command: null, section: null, onPress: null, guildId: null, highlighted: null };
        obj.command = item;
        obj.section = found;
        obj.onPress = function onPress() { /* body not rendered: F147228 */ };
        tmp6 = item;
        obj.guildId = item.guild_id;
        num = 0;
        obj.highlighted = 0 === index;
        return scrollDown(onPressCommandItem(tmp[10]), obj);
      }
    }
  }
  cResult[6] = channel.guild_id;
  cResult[7] = onPressCommandItem;
  cResult[8] = sections;
  cResult[9] = T;
  tmp9 = T;
}) : (function ApplicationCommandList(channel) {
  let ItemSeparatorComponent;
  let items;
  let query;
  let style;
  channel = channel.channel;
  const onPressCommandItem = channel.onPressCommandItem;
  const onCommandsChange = channel.onCommandsChange;
  let commands;
  ({ style, query, ItemSeparatorComponent } = channel);
  const tmp = commands;
  let obj = { text: query, commandTypes: items };
  const useQuery = onCommandsChange(commands[7]).useQuery;
  const tmp2 = onCommandsChange(commands[7]);
  items = [channel(commands[5]).ApplicationCommandType.CHAT];
  const obj2 = { placeholderCount: 3, limit: 7, scoreMethod: channel(commands[6]).ScoreMethod.COMMAND_OR_APPLICATION };
  const query1 = useQuery({ channel, type: "channel" }, obj, obj2);
  commands = query1.commands;
  const sections = query1.sections;
  const scrollDown = query1.scrollDown;
  const items1 = [sections, channel.guild_id, onPressCommandItem];
  let length;
  const callback = sections.useCallback((item) => {
    item = item.item;
    let found;
    const index = item.index;
    if (item.inputType === channel(commands[8]).ApplicationCommandInputType.PLACEHOLDER) {
      return scrollDown(onPressCommandItem(commands[9]), {});
    } else {
      found = undefined;
      const arr = sections;
      if (sections != null) {
        found = arr.find((id) => id.id === item.applicationId);
      }
      const obj = {
        command: item,
        section: found,
        onPress() {
            return onPressCommandItem(item, found);
          },
        guildId: item.guild_id,
        highlighted: 0 === index
      };
      return scrollDown(onPressCommandItem(commands[10]), obj);
    }
  }, items1);
  const useEffect = sections.useEffect;
  const obj3 = sections;
  const tmp3 = channel;
  if (commands != null) {
    length = commands.length;
  }
  const items2 = [length, onCommandsChange];
  const effect = useEffect(() => {
    if (onCommandsChange != null) {
      let num;
      if (commands != null) {
        num = commands.length;
      }
      if (num == null) {
        num = 0;
      }
      tmp(num);
    }
  }, items2);
  const items3 = [scrollDown];
  const callback1 = obj3.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    if (nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height >= nativeEvent.contentSize.height - closure_6) {
      scrollDown();
    }
  }, items3);
  const obj4 = {
    style,
    keyExtractor(id) {
      return id.id;
    },
    data: commands,
    maintainVisibleContentPosition: { disabled: true },
    getItemType(inputType) {
      let str = "command";
      if (inputType.inputType === channel(commands[8]).ApplicationCommandInputType.PLACEHOLDER) {
        str = "placeholder";
      }
      return str;
    },
    renderItem: callback,
    ItemSeparatorComponent,
    onScroll: callback1
  };
  return scrollDown(tmp3(tmp[11]).FlashList, obj4);
});
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandList.tsx");

export default tmp2;
