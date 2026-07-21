// Module ID: 11426
// Function ID: 88917
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 11426 (_createForOfIteratorHelperLoose)
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
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
({ View: closure_6, SectionList: closure_7 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ BuiltInSectionId: closure_8, DISCOVERY_COMMANDS_QUERY_LIMIT: closure_9 } = arg1(dependencyMap[3]));
const ITEM_HEIGHT = arg1(dependencyMap[4]).ITEM_HEIGHT;
const AUTOCOMPLETE_ROW_HEIGHT = arg1(dependencyMap[5]).AUTOCOMPLETE_ROW_HEIGHT;
const tmp3 = arg1(dependencyMap[3]);
({ AnalyticEvents: closure_12, SectionListElementType: closure_13 } = arg1(dependencyMap[6]));
const tmp4 = arg1(dependencyMap[6]);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[9]);
obj = { discoveryWrapper: { flex: 1 }, noCommandsImage: {}, noCommandsContainer: {} };
obj = { backgroundColor: importDefault(dependencyMap[10]).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
obj.commandsList = obj;
let closure_17 = obj.createStyles(obj);
const tmp5 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/application_commands/native/ApplicationCommandDiscovery.tsx");

export default function ApplicationCommandDiscovery(channel) {
  let commandsByActiveSection;
  let filterSection;
  let filteredSectionId;
  let onHeightChange;
  ({ onPressSlashItem: closure_0, onHeightChange } = channel);
  const importDefault = onHeightChange;
  channel = channel.channel;
  const importAll = channel;
  const canOnlyUseTextCommands = channel.canOnlyUseTextCommands;
  let ITEM_HEIGHT;
  let closure_11;
  commandsByActiveSection = undefined;
  let closure_13;
  filteredSectionId = undefined;
  let closure_15;
  filterSection = undefined;
  let callback2;
  let _createForOfIteratorHelperLoose;
  let closure_19;
  const tmp = callback2();
  const dependencyMap = tmp;
  let obj = arg1(dependencyMap[11]);
  const bound = Math.max(obj.useFontScale() * closure_11, closure_11);
  let callback = bound;
  const ref = React.useRef(null);
  const React = ref;
  const tmp4 = callback(React.useState(0), 2);
  const first = tmp4[0];
  const tmp6 = tmp4[1];
  let closure_8 = React.useRef(false);
  let obj1 = arg1(dependencyMap[12]);
  const commandDiscoveryManager = obj1.useCommandDiscoveryManager((initialSectionId) => initialSectionId.initialSectionId);
  let obj2 = importAll(dependencyMap[13]);
  obj = { context: { channel, type: "channel" } };
  obj = {};
  const items = [arg1(dependencyMap[14]).ApplicationCommandType.CHAT];
  obj.commandTypes = items;
  const BuiltInCommandFilter = arg1(dependencyMap[15]).BuiltInCommandFilter;
  obj.builtIns = canOnlyUseTextCommands ? BuiltInCommandFilter.ONLY_TEXT : BuiltInCommandFilter.ALLOW;
  obj.applicationCommands = !canOnlyUseTextCommands;
  obj.filters = obj;
  obj1 = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, limit: commandDiscoveryManager };
  obj.options = obj1;
  obj.allowFetch = true;
  const discovery = obj2.useDiscovery(obj);
  const sectionDescriptors = discovery.sectionDescriptors;
  ITEM_HEIGHT = sectionDescriptors;
  ({ activeSections: closure_11, commandsByActiveSection } = discovery);
  ({ hasMoreAfter: closure_13, filteredSectionId } = discovery);
  ({ scrollDown: closure_15, filterSection } = discovery);
  const items1 = [filterSection, commandDiscoveryManager, tmp6, sectionDescriptors];
  const effect = React.useEffect(() => {
    if (null != commandDiscoveryManager) {
      filterSection(commandDiscoveryManager);
      const findIndexResult = sectionDescriptors.findIndex((id) => id.id === closure_9);
      let num2 = 0;
      if (-1 !== findIndexResult) {
        num2 = findIndexResult;
      }
      tmp6(num2);
    }
  }, items1);
  const effect1 = React.useEffect(() => {
    const AccessibilityAnnouncer = callback(tmp[16]).AccessibilityAnnouncer;
    const intl = callback(tmp[17]).intl;
    AccessibilityAnnouncer.announce(intl.string(callback(tmp[17]).t.2wfLMm));
    callback(tmp[18]).trackWithMetadata(commandsByActiveSection.APPLICATION_COMMAND_BROWSER_OPENED);
    return () => {
      const result = callback(closure_3[12]).updateInitialSectionId(undefined);
    };
  }, []);
  const items2 = [commandsByActiveSection, onHeightChange, bound];
  const effect2 = React.useEffect(() => {
    if (null != onHeightChange) {
      onHeightChange(function heightForSections(commandsByActiveSection, bound) {
        let num = 0;
        if (0 !== commandsByActiveSection.length) {
          num = commandsByActiveSection.reduce((arg0, data) => {
            if (0 === data.data.length) {
              let sum = data(closure_3[8]).APPLICATION_SECTION_HEADER_HEIGHT + 160;
            } else {
              sum = arg0 + (data(closure_3[8]).APPLICATION_SECTION_HEADER_HEIGHT + (data + closure_10) * data.data.length);
            }
            return sum;
          }, 0);
        }
        return num;
      }(commandsByActiveSection, bound));
    }
  }, items2);
  const items3 = [sectionDescriptors, filterSection, filteredSectionId];
  callback = React.useCallback((arg0) => {
    if (sectionDescriptors[arg0].id !== filteredSectionId) {
      if (tmp.id !== ref.FRECENCY) {
        filterSection(tmp.id);
        const tmp6 = tmp6(arg0);
      }
      const result = callback(tmp[12]).updateInitialSectionId(undefined);
    }
    filterSection(null);
    tmp6(0);
  }, items3);
  callback2 = callback;
  const callback1 = React.useCallback(() => {
    closure_8.current = true;
    callback(tmp[18]).trackWithMetadata(commandsByActiveSection.APPLICATION_COMMAND_BROWSER_SCROLLED);
  }, []);
  callback2 = React.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const targetContentOffset = nativeEvent.targetContentOffset;
    let y;
    if (null != targetContentOffset) {
      y = targetContentOffset.y;
    }
    if (nativeEvent.contentOffset.y === y) {
      closure_8.current = false;
    }
  }, []);
  const items4 = [sectionDescriptors, commandsByActiveSection, bound];
  const callback3 = React.useCallback(() => {
    closure_8.current = false;
  }, []);
  const memo = React.useMemo(() => {
    let done;
    let closure_0 = 0;
    const items = [];
    const onHeightChange = items;
    function _loop(value) {
      let v0 = value;
      const findIndexResult = closure_12.findIndex((section) => section.section.id === sum.id);
      if (findIndexResult >= 0) {
        const result = closure_12[findIndexResult].data.length * closure_4;
        const sum = result + v0(closure_3[8]).APPLICATION_SECTION_HEADER_HEIGHT + v0;
        items.push(sum);
        v0 = sum;
      } else {
        items.push(v0);
      }
    }
    const tmp = memo(sectionDescriptors);
    let iter = tmp();
    if (!iter.done) {
      do {
        let _loopResult = _loop(iter.value);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    return items;
  }, items4);
  _createForOfIteratorHelperLoose = memo;
  const items5 = [memo];
  closure_19 = React.useMemo(() => onHeightChange(tmp[19]).throttle((arg0) => {
    let num = 0;
    if (0 < closure_18.length) {
      let num2 = 0;
      let num3 = 0;
      if (0 === closure_18[0]) {
        const sum = num2 + 1;
        const sum1 = num3 + 1;
        num = sum;
        while (sum1 < closure_18.length) {
          let tmp6 = closure_18;
          num2 = sum;
          num3 = sum1;
          if (0 === closure_18[sum1]) {
            continue;
          } else {
            let tmp7 = closure_18;
            num2 = sum;
            num3 = sum1;
            num = sum;
            if (arg0 < closure_18[sum1]) {
              break;
            }
          }
          continue;
        }
      } else {
        num2 = 0;
        num3 = 0;
        num = 0;
      }
    }
    callback(num);
  }, 100), items5);
  const items6 = [bound];
  const items7 = [channel.guild_id, callback, sectionDescriptors, first];
  const callback4 = React.useCallback((arg0, index) => {
    if (null == arg0) {
      let obj = { "Null": -536870861, "Null": -299892737, index };
      return obj;
    } else {
      const ROW2 = constants.ROW;
      const tmp18 = memo(arg0);
      const iter3 = tmp18();
      let iter2 = iter3;
      let num = 0;
      let num2 = 0;
      let num3 = 0;
      let num4 = 0;
      let num5 = 0;
      let ROW = ROW2;
      if (!iter3.done) {
        const value = iter2.value;
        while (num + num2 + value.data.length + num3 + 1 < index) {
          num = num + 1;
          num2 = num2 + value.data.length;
          num3 = num3 + 1;
          let iter = tmp18();
          iter2 = iter;
          num4 = num;
          num5 = num2;
          ROW = ROW2;
        }
        if (index === num + num2 + num3) {
          ROW = constants.HEADER;
          num4 = num;
          num5 = num2;
        } else if (index === num + num2 + value.data.length + num3 + 1) {
          num4 = num + 1;
          num5 = num2 + value.data.length;
          ROW = constants.FOOTER;
        } else {
          const sum = num + 1;
          num5 = num2 + (index - sum - num2 - num3);
          ROW = constants.ROW;
          num4 = sum;
        }
      }
      if (constants.ROW === ROW) {
        let num6 = bound;
      } else if (constants.HEADER === ROW) {
        num6 = callback(tmp[8]).APPLICATION_SECTION_HEADER_HEIGHT;
      } else {
        const FOOTER = constants.FOOTER;
        num6 = 0;
      }
      obj = { length: num6, offset: num4 * callback(tmp[8]).APPLICATION_SECTION_HEADER_HEIGHT + num5 * bound, index };
      return obj;
    }
  }, items6);
  obj2 = { style: items8 };
  const items8 = [tmp.discoveryWrapper, channel.style];
  const obj3 = {
    ref,
    sections: commandsByActiveSection,
    style: tmp.commandsList,
    onScrollBeginDrag: callback1,
    onScrollEndDrag: callback2,
    onMomentumScrollEnd: callback3,
    onScroll(nativeEvent) {
      let contentInset;
      let contentSize;
      let layoutMeasurement;
      nativeEvent = nativeEvent.nativeEvent;
      ({ layoutMeasurement, contentSize, contentInset } = nativeEvent);
      const y = nativeEvent.contentOffset.y;
      callback2(y);
      if (!ref.current) {
        if (_undefined.length > 0) {
          if (y < contentInset.top) {
            const current = ref.current;
            if (null != current) {
              current.scrollToLocation({});
            }
          } else if (y > contentSize.height - layoutMeasurement.height - contentInset.bottom) {
            const current2 = ref.current;
            if (null != current2) {
              const obj = { sectionIndex: _undefined.length - 1 };
              const _Math = Math;
              obj.itemIndex = Math.max(commandsByActiveSection[closure_12.length - 1].data.length - 1, 0);
              obj.viewPosition = 1;
              obj.animated = false;
              current2.scrollToLocation(obj);
            }
          }
        }
      }
      let tmp6 = closure_13;
      if (closure_13) {
        tmp6 = y + layoutMeasurement.height >= contentSize.height - 3 * bound;
      }
      if (tmp6) {
        _undefined2();
      }
    },
    scrollEventThrottle: 16,
    keyExtractor(id) {
      return id.id;
    }
  };
  let tmp23 = null;
  const memo1 = React.useMemo(() => filteredSectionId(onHeightChange(tmp[20]), { onPressSection: callback, sections: sectionDescriptors, selectedIndex: first, guildId: channel.guild_id }), items7);
  if (discovery.loading) {
    const obj4 = { minIndexForVisible: 1 };
    tmp23 = obj4;
  }
  obj3.maintainVisibleContentPosition = tmp23;
  obj3.renderItem = function renderItem(item) {
    item = item.item;
    const section = item.section;
    const onHeightChange = section;
    let channel;
    if (item.inputType === item(tmp[21]).ApplicationCommandInputType.PLACEHOLDER) {
      return filteredSectionId(onHeightChange(filteredSectionId[22]), {});
    } else {
      const found = sectionDescriptors.find((id) => id.id === item.applicationId);
      channel = found;
      const obj = {
        command: item,
        onPress() {
            let tmp;
            if (null != item) {
              tmp = item(item, found, section.section);
            }
            return tmp;
          },
        section: found,
        showIcon: item.applicationId !== section.section.id,
        guildId: channel.guild_id
      };
      return filteredSectionId(onHeightChange(tmp[23]), obj);
    }
  };
  obj3.renderSectionHeader = function renderSectionHeader(section) {
    section = section.section;
    let obj = {};
    obj = { section: section.section, guildId: channel.guild_id };
    const items = [filteredSectionId(onHeightChange(filterSection[8]), obj, section.section.id), ];
    let tmp3 = 0 === section.data.length;
    if (tmp3) {
      obj = { lightSource: onHeightChange(tmp[25]), darkSource: onHeightChange(tmp[25]) };
      const intl = callback(tmp[17]).intl;
      const obj1 = { applicationName: section.section.name };
      obj.body = intl.format(callback(tmp[17]).t.WoQXT6, obj1);
      ({ noCommandsContainer: obj3.containerStyle, noCommandsImage: obj3.imageStyle } = tmp);
      tmp3 = filteredSectionId(callback(tmp[24]).ThemedEmptyState, obj);
    }
    items[1] = tmp3;
    obj.children = items;
    return filterSection(closure_15, obj);
  };
  obj3.getItemLayout = callback4;
  obj3.stickySectionHeadersEnabled = true;
  const items9 = [filteredSectionId(tmp6, obj3), memo1];
  obj2.children = items9;
  return filterSection(first, obj2);
};
