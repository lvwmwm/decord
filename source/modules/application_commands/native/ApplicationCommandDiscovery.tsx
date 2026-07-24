// Module ID: 11466
// Function ID: 89199
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 27, 4566, 11467, 9594, 653, 33, 11468, 4130, 689, 4549, 11469, 8233, 1881, 8015, 3843, 1212, 4324, 22, 11470, 6755, 11471, 11472, 1273, 9670, 2]
// Exports: default

// Module 11466 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import TRUE_OPTION_NAME from "TRUE_OPTION_NAME";
import { ITEM_HEIGHT } from "ICON_SIZE";
import { AUTOCOMPLETE_ROW_HEIGHT } from "AUTOCOMPLETE_ROW_HEIGHT";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_6;
let closure_7;
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
({ View: closure_6, SectionList: closure_7 } = get_ActivityIndicator);
({ BuiltInSectionId: closure_8, DISCOVERY_COMMANDS_QUERY_LIMIT: closure_9 } = TRUE_OPTION_NAME);
({ AnalyticEvents: closure_12, SectionListElementType: closure_13 } = ME);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
_createForOfIteratorHelperLoose = { discoveryWrapper: { flex: 1 }, noCommandsImage: { height: 50, width: 50, marginBottom: 16 }, noCommandsContainer: { padding: 0, height: 100 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
_createForOfIteratorHelperLoose.commandsList = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/application_commands/native/ApplicationCommandDiscovery.tsx");

export default function ApplicationCommandDiscovery(channel) {
  let c11;
  let c13;
  let c15;
  let commandsByActiveSection;
  let filterSection;
  let filteredSectionId;
  let onHeightChange;
  let require;
  ({ onPressSlashItem: require, onHeightChange } = channel);
  channel = channel.channel;
  const canOnlyUseTextCommands = channel.canOnlyUseTextCommands;
  let sectionDescriptors;
  c11 = undefined;
  commandsByActiveSection = undefined;
  c13 = undefined;
  filteredSectionId = undefined;
  c15 = undefined;
  filterSection = undefined;
  let callback;
  let memo;
  let closure_19;
  let tmp = callback();
  const dependencyMap = tmp;
  let obj = require(4549) /* getFontScale */;
  const bound = Math.max(obj.useFontScale() * c11, c11);
  ref = ref.useRef(null);
  const tmp4 = bound(ref.useState(0), 2);
  const first = tmp4[0];
  let closure_7 = tmp6;
  let closure_8 = ref.useRef(false);
  let obj1 = require(11469) /* useCommandDiscoveryManager */;
  const commandDiscoveryManager = obj1.useCommandDiscoveryManager((initialSectionId) => initialSectionId.initialSectionId);
  let obj2 = channel(8233);
  obj = { context: { channel, type: "channel" } };
  obj = {};
  let items = [require(1881) /* PermissionOverwriteType */.ApplicationCommandType.CHAT];
  obj.commandTypes = items;
  const BuiltInCommandFilter = require(8015) /* ScoreMethod */.BuiltInCommandFilter;
  obj.builtIns = canOnlyUseTextCommands ? BuiltInCommandFilter.ONLY_TEXT : BuiltInCommandFilter.ALLOW;
  obj.applicationCommands = !canOnlyUseTextCommands;
  obj.filters = obj;
  obj1 = { placeholderCount: 3, limit: commandDiscoveryManager, includeFrecency: true };
  obj.options = obj1;
  obj.allowFetch = true;
  const discovery = obj2.useDiscovery(obj);
  sectionDescriptors = discovery.sectionDescriptors;
  ({ activeSections: c11, commandsByActiveSection } = discovery);
  ({ hasMoreAfter: c13, filteredSectionId } = discovery);
  ({ scrollDown: c15, filterSection } = discovery);
  const items1 = [filterSection, commandDiscoveryManager, tmp4[1], sectionDescriptors];
  const effect = ref.useEffect(() => {
    if (null != commandDiscoveryManager) {
      filterSection(commandDiscoveryManager);
      const findIndexResult = sectionDescriptors.findIndex((id) => id.id === outer1_9);
      let num2 = 0;
      if (-1 !== findIndexResult) {
        num2 = findIndexResult;
      }
      closure_7(num2);
      const tmp6 = closure_7;
    }
  }, items1);
  const effect1 = ref.useEffect(() => {
    const AccessibilityAnnouncer = outer1_0(tmp[16]).AccessibilityAnnouncer;
    const intl = outer1_0(tmp[17]).intl;
    AccessibilityAnnouncer.announce(intl.string(outer1_0(tmp[17]).t["2wfLMm"]));
    outer1_0(tmp[18]).trackWithMetadata(commandsByActiveSection.APPLICATION_COMMAND_BROWSER_OPENED);
    return () => {
      const result = outer2_0(table[12]).updateInitialSectionId(undefined);
    };
  }, []);
  const items2 = [commandsByActiveSection, onHeightChange, bound];
  const effect2 = ref.useEffect(() => {
    if (null != onHeightChange) {
      onHeightChange((function heightForSections(commandsByActiveSection, bound) {
        let closure_0 = bound;
        let num = 0;
        if (0 !== commandsByActiveSection.length) {
          num = commandsByActiveSection.reduce((arg0, data) => {
            if (0 === data.data.length) {
              let sum = outer3_0(11468).APPLICATION_SECTION_HEADER_HEIGHT + 160;
            } else {
              sum = arg0 + (outer3_0(11468).APPLICATION_SECTION_HEADER_HEIGHT + (closure_0 + sectionDescriptors) * data.data.length);
            }
            return sum;
          }, 0);
        }
        return num;
      })(commandsByActiveSection, bound));
    }
  }, items2);
  const items3 = [sectionDescriptors, filterSection, filteredSectionId];
  callback = ref.useCallback((arg0) => {
    if (sectionDescriptors[arg0].id !== filteredSectionId) {
      if (tmp.id !== ref.FRECENCY) {
        filterSection(tmp.id);
        tmp6 = tmp6(arg0);
      }
      const result = outer1_0(tmp[12]).updateInitialSectionId(undefined);
    }
    filterSection(null);
    tmp6(0);
  }, items3);
  const callback1 = ref.useCallback(() => {
    closure_8.current = true;
    outer1_0(tmp[18]).trackWithMetadata(commandsByActiveSection.APPLICATION_COMMAND_BROWSER_SCROLLED);
  }, []);
  const callback2 = ref.useCallback((nativeEvent) => {
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
  const callback3 = ref.useCallback(() => {
    closure_8.current = false;
  }, []);
  memo = ref.useMemo(() => {
    let done;
    let c0 = 0;
    const items = [];
    function _loop(value) {
      let closure_0 = value;
      const findIndexResult = outer1_12.findIndex((section) => section.section.id === value.id);
      if (findIndexResult >= 0) {
        const result = outer1_12[findIndexResult].data.length * outer1_4;
        const sum = result + outer2_0(table[8]).APPLICATION_SECTION_HEADER_HEIGHT + closure_0;
        items.push(sum);
        closure_0 = sum;
      } else {
        items.push(closure_0);
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
  const items5 = [memo];
  closure_19 = ref.useMemo(() => onHeightChange(tmp[19]).throttle((arg0) => {
    let num = 0;
    if (0 < outer1_18.length) {
      let num2 = 0;
      let num3 = 0;
      if (0 === outer1_18[0]) {
        const sum = num2 + 1;
        const sum1 = num3 + 1;
        num = sum;
        while (sum1 < outer1_18.length) {
          let tmp6 = outer1_18;
          num2 = sum;
          num3 = sum1;
          if (0 === outer1_18[sum1]) {
            continue;
          } else {
            let tmp7 = outer1_18;
            num2 = sum;
            num3 = sum1;
            num = sum;
            if (arg0 < outer1_18[sum1]) {
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
    outer1_7(num);
  }, 100), items5);
  const items6 = [bound];
  const items7 = [channel.guild_id, callback, sectionDescriptors, first];
  const callback4 = ref.useCallback((arg0, index) => {
    if (null == arg0) {
      let obj = { length: 0, offset: 0, index };
      return obj;
    } else {
      const ROW2 = _undefined2.ROW;
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
          ROW = _undefined2.HEADER;
          num4 = num;
          num5 = num2;
        } else if (index === num + num2 + value.data.length + num3 + 1) {
          num4 = num + 1;
          num5 = num2 + value.data.length;
          ROW = _undefined2.FOOTER;
        } else {
          const sum = num + 1;
          num5 = num2 + (index - sum - num2 - num3);
          ROW = _undefined2.ROW;
          num4 = sum;
        }
      }
      if (_undefined2.ROW === ROW) {
        let num6 = bound;
      } else if (_undefined2.HEADER === ROW) {
        num6 = outer1_0(tmp[8]).APPLICATION_SECTION_HEADER_HEIGHT;
      } else {
        const FOOTER = _undefined2.FOOTER;
        num6 = 0;
      }
      obj = { length: num6, offset: num4 * outer1_0(tmp[8]).APPLICATION_SECTION_HEADER_HEIGHT + num5 * bound, index };
      return obj;
    }
  }, items6);
  obj2 = { style: items8 };
  items8 = [tmp.discoveryWrapper, channel.style];
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
      callback(y);
      if (!ref.current) {
        if (_undefined.length > 0) {
          if (y < contentInset.top) {
            const current = ref.current;
            if (null != current) {
              current.scrollToLocation({ sectionIndex: 0, itemIndex: 0, viewPosition: 0, animated: false });
            }
          } else if (y > contentSize.height - layoutMeasurement.height - contentInset.bottom) {
            const current2 = ref.current;
            if (null != current2) {
              const obj = { sectionIndex: _undefined.length - 1 };
              const _Math = Math;
              obj.itemIndex = Math.max(commandsByActiveSection[commandsByActiveSection.length - 1].data.length - 1, 0);
              obj.viewPosition = 1;
              obj.animated = false;
              current2.scrollToLocation(obj);
            }
          }
        }
      }
      let tmp6 = c13;
      if (c13) {
        tmp6 = y + layoutMeasurement.height >= contentSize.height - 3 * bound;
      }
      if (tmp6) {
        _undefined3();
      }
    },
    scrollEventThrottle: 16,
    keyExtractor(id) {
      return id.id;
    }
  };
  let tmp23 = null;
  const memo1 = ref.useMemo(() => filteredSectionId(onHeightChange(tmp[20]), { onPressSection: callback, sections: sectionDescriptors, selectedIndex: first, guildId: channel.guild_id }), items7);
  if (discovery.loading) {
    const obj4 = { minIndexForVisible: 1 };
    tmp23 = obj4;
  }
  obj3.maintainVisibleContentPosition = tmp23;
  obj3.renderItem = function renderItem(item) {
    item = item.item;
    const section = item.section;
    let found;
    if (item.inputType === outer1_0(tmp[21]).ApplicationCommandInputType.PLACEHOLDER) {
      return filteredSectionId(onHeightChange(filteredSectionId[22]), {});
    } else {
      found = sectionDescriptors.find((id) => id.id === item.applicationId);
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
        guildId: found.guild_id
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
      const intl = outer1_0(tmp[17]).intl;
      const obj1 = { applicationName: section.section.name };
      obj.body = intl.format(outer1_0(tmp[17]).t.WoQXT6, obj1);
      ({ noCommandsContainer: obj3.containerStyle, noCommandsImage: obj3.imageStyle } = tmp);
      tmp3 = filteredSectionId(outer1_0(tmp[24]).ThemedEmptyState, obj);
    }
    items[1] = tmp3;
    obj.children = items;
    return filterSection(c15, obj);
  };
  obj3.getItemLayout = callback4;
  obj3.stickySectionHeadersEnabled = true;
  const items9 = [filteredSectionId(closure_7, obj3), memo1];
  obj2.children = items9;
  return filterSection(first, obj2);
};
