// Module ID: 11887
// Function ID: 11888
// Name: ApplicationCommandDiscovery
// Dependencies: [32, 19, 17, 5305, 11888, 9726, 1074, 21, 11889, 4836, 576, 5288, 11890, 8719, 1979, 8599, 4541, 1115, 5016, 12, 11891, 6943, 11892, 11893, 1177, 9881, 2]
// Exports: default

// Module 11887 (ApplicationCommandDiscovery)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Server from "Server" /* 1979 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import useFontScale from "useFontScale" /* 5288 */;
import ApplicationCommandQueryTypes from "ApplicationCommandQueryTypes" /* 8599 */;
import ApplicationCommandsConstants from "ApplicationCommandsConstants" /* 9726 */;
import AssetRegistryDefault from "AssetRegistry" /* 9881 */;
import ApplicationCommandsCategoriesConstants from "ApplicationCommandsCategoriesConstants" /* 11888 */;
import ApplicationSectionHeader from "ApplicationSectionHeader" /* 11889 */;
import ApplicationCommandDiscoveryManager from "ApplicationCommandDiscoveryManager" /* 11890 */;
import ApplicationCommandsCategoriesDefault from "ApplicationCommandsCategories" /* 11891 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5305 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ApplicationSectionHeaderDefault = ApplicationSectionHeader;
let dependencyMap;

let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: metroRequire, SectionList: metroImportDefault } = react_native);
({ BuiltInSectionId: metroImportAll, DISCOVERY_COMMANDS_QUERY_LIMIT: c9 } = ApplicationCommandConstants);
const ITEM_HEIGHT = ApplicationCommandsCategoriesConstants.ITEM_HEIGHT;
const AUTOCOMPLETE_ROW_HEIGHT = ApplicationCommandsConstants.AUTOCOMPLETE_ROW_HEIGHT;
({ AnalyticEvents: closure_12, SectionListElementType: map1 } = Constants);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = Fragment);
let obj = { discoveryWrapper: { flex: 1 }, noCommandsImage: { height: 50, width: 50, marginBottom: 16 }, noCommandsContainer: { padding: 0, height: 100 }, commandsList: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
let closure_17 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandDiscovery.tsx");

export default function ApplicationCommandDiscovery(channel) {
  let BuiltInCommandFilter;
  let _undefined;
  let _undefined2;
  let c11;
  let c13;
  let c15;
  let closure_3;
  let commandsByActiveSection;
  let filterSection;
  let filteredSectionId;
  let items;
  let items8;
  let items9;
  let obj5;
  let obj6;
  let obj9;
  let onHeightChange;
  ({ onPressSlashItem: require, onHeightChange } = channel);
  channel = channel.channel;
  const canOnlyUseTextCommands = channel.canOnlyUseTextCommands;
  let ref;
  c11 = undefined;
  commandsByActiveSection = undefined;
  c13 = undefined;
  filteredSectionId = undefined;
  c15 = undefined;
  filterSection = undefined;
  let onPressSection;
  const style = channel.style;
  let tmp = onPressSection();
  dependencyMap = tmp;
  let obj = useFontScale;
  const bound = Math.max(obj.useFontScale() * c11, c11);
  const obj2 = ref;
  ref = ref.useRef(null);
  let tmp4 = bound(ref.useState(0), 2);
  const selectedIndex = tmp4[0];
  let tmp6 = tmp4[1];
  let closure_7 = tmp6;
  ref = ref.useRef(false);
  let obj3 = ApplicationCommandDiscoveryManager;
  const commandDiscoveryManager = obj3.useCommandDiscoveryManager((initialSectionId) => initialSectionId.initialSectionId);
  let tmp8 = channel(8719);
  const obj4 = { context: { channel, type: "channel" }, filters: obj5, options: obj6, allowFetch: true };
  obj5 = { commandTypes: items, builtIns: canOnlyUseTextCommands ? BuiltInCommandFilter.ONLY_TEXT : BuiltInCommandFilter.ALLOW, applicationCommands: !canOnlyUseTextCommands };
  const useDiscovery = tmp8.useDiscovery;
  items = [Server.ApplicationCommandType.CHAT];
  BuiltInCommandFilter = ApplicationCommandQueryTypes.BuiltInCommandFilter;
  obj6 = { placeholderCount: 3, limit: commandDiscoveryManager, includeFrecency: true };
  const discovery = useDiscovery(obj4);
  const sectionDescriptors = discovery.sectionDescriptors;
  ({ activeSections: c11, commandsByActiveSection } = discovery);
  ({ hasMoreAfter: c13, filteredSectionId } = discovery);
  ({ scrollDown: c15, filterSection } = discovery);
  const items1 = [filterSection, commandDiscoveryManager, tmp6, sectionDescriptors];
  const loading = discovery.loading;
  const effect = obj2.useEffect(() => {
    if (null != commandDiscoveryManager) {
      filterSection(tmp);
      const findIndexResult = sectionDescriptors.findIndex((id) => id.id === commandDiscoveryManager);
      let num2 = 0;
      const tmp6 = closure_7;
      if (-1 !== findIndexResult) {
        num2 = findIndexResult;
      }
      tmp6(num2);
    }
  }, items1);
  const effect1 = obj2.useEffect(() => {
    const AccessibilityAnnouncer = require("AccessibilityAnnouncer").AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = require("intl").intl;
    announce(intl.string(require("intl").t["2wfLMm"]));
    let obj = require("AppAnalyticsUtils");
    obj.trackWithMetadata(commandsByActiveSection.APPLICATION_COMMAND_BROWSER_OPENED);
    return () => {
      const obj = closure_1_0(closure_1_3[12]);
      const result = obj.updateInitialSectionId(undefined);
    };
  }, []);
  const items2 = [commandsByActiveSection, onHeightChange, bound];
  const effect2 = obj2.useEffect(() => {
    if (onHeightChange != null) {
      let closure_0 = bound;
      let num2 = 0;
      const arr = commandsByActiveSection;
      if (0 !== commandsByActiveSection.length) {
        num2 = arr.reduce((acc, data) => {
          let sum;
          if (0 === data.data.length) {
            sum = closure_2_0(closure_2_3[8]).APPLICATION_SECTION_HEADER_HEIGHT + 160;
          } else {
            sum = acc + (closure_2_0(closure_2_3[8]).APPLICATION_SECTION_HEADER_HEIGHT + (closure_0 + sectionDescriptors) * data.data.length);
          }
          return sum;
        }, 0);
      }
      tmp(num2);
    }
  }, items2);
  const items3 = [sectionDescriptors, filterSection, filteredSectionId];
  onPressSection = obj2.useCallback((arg0) => {
    if (sectionDescriptors[arg0].id !== filteredSectionId) {
      if (sectionDescriptors[arg0].id !== metroImportAll.FRECENCY) {
        filterSection(sectionDescriptors[arg0].id);
        closure_7(arg0);
      }
      const obj = ApplicationCommandDiscoveryManager;
      const result = obj.updateInitialSectionId(undefined);
    }
    filterSection(null);
    closure_7(0);
  }, items3);
  const callback1 = obj2.useCallback(() => {
    ref.current = true;
    const obj = AppAnalyticsUtils;
    obj.trackWithMetadata(commandsByActiveSection.APPLICATION_COMMAND_BROWSER_SCROLLED);
  }, []);
  const callback2 = obj2.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const targetContentOffset = nativeEvent.targetContentOffset;
    let y1;
    const y = nativeEvent.contentOffset.y;
    if (targetContentOffset != null) {
      y1 = targetContentOffset.y;
    }
    if (y === y1) {
      ref.current = false;
    }
  }, []);
  const items4 = [sectionDescriptors, commandsByActiveSection, bound];
  const callback3 = obj2.useCallback(() => {
    ref.current = false;
  }, []);
  const memo = obj2.useMemo(() => {
    function _loop(item10008) {
      let closure_0 = item10008;
      const findIndexResult = commandsByActiveSection.findIndex((section) => section.section.id === id.id);
      const tmp = commandsByActiveSection;
      if (findIndexResult >= 0) {
        const result = tmp[findIndexResult].data.length * bound;
        const sum = result + ApplicationSectionHeader.APPLICATION_SECTION_HEADER_HEIGHT + c0;
        items.push(sum);
        c0 = sum;
      } else {
        items.push(c0);
      }
    }
    let c0 = 0;
    const items = [];
    for (const item10008 of sectionDescriptors) {
      let tmp = _loop(item10008);
      continue;
    }
    return items;
  }, items4);
  const items5 = [memo];
  let closure_19 = obj2.useMemo(() => {
    const obj = _modDef12;
    return obj.throttle((arg0) => {
      let num = 0;
      if (0 < memo.length) {
        let num2 = 0;
        let num3 = 0;
        if (0 === memo[0]) {
          const sum = num3 + 1;
          const sum1 = num2 + 1;
          num = sum;
          while (sum1 < memo.length) {
            num2 = sum1;
            num3 = sum;
            if (0 === tmp5[sum1]) {
              continue;
            } else {
              num2 = sum1;
              num3 = sum;
              num = sum;
              if (arg0 < tmp5[sum1]) {
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
      closure_1_7(num);
    }, 100);
  }, items5);
  const items6 = [bound];
  const items7 = [channel.guild_id, onPressSection, sectionDescriptors, selectedIndex];
  const callback4 = obj2.useCallback((arg0, index) => {
    if (null == arg0) {
      return { length: 0, offset: 0, index };
    } else {
      let num = 0;
      let num2 = 0;
      let num3 = 0;
      let ROW = map1.ROW;
      const iter = arg0[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let num4;
        let tmp4 = nextResult;
        if (num + num2 + nextResult.data.length + num3 + 1 >= index) {
          if (index === num + num2 + num3) {
            ROW = map1.HEADER;
          } else if (index === num + num2 + tmp4.data.length + num3 + 1) {
            num = num + 1;
            num2 = num2 + nextResult.data.length;
            ROW = map1.FOOTER;
          } else {
            let sum = num + 1;
            num = sum;
            num2 = num2 + (index - sum - num2 - num3);
            ROW = map1.ROW;
          }
          iter.return();
          break;
        } else {
          num = num + 1;
          num2 = num2 + tmp4.data.length;
          num3 = num3 + 1;
          continue;
        }
        let tmp28 = map1;
        if (map1.ROW === ROW) {
          num4 = bound;
        } else if (tmp29.HEADER === ROW) {
          num4 = ApplicationSectionHeader.APPLICATION_SECTION_HEADER_HEIGHT;
        } else {
          let FOOTER = tmp28.FOOTER;
          num4 = 0;
        }
        let obj = { length: num4, offset: num * ApplicationSectionHeader.APPLICATION_SECTION_HEADER_HEIGHT + num2 * bound, index };
        return obj;
      }
    }
  }, items6);
  const obj7 = { style: items8, children: items9 };
  items8 = [tmp.discoveryWrapper, style];
  const obj8 = {
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
      closure_19(y);
      const tmp2 = !ref.current && _undefined.length > 0;
      if (tmp2) {
        if (y < contentInset.top) {
          const current = ref.current;
          if (current != null) {
            current.scrollToLocation({ sectionIndex: 0, itemIndex: 0, viewPosition: 0, animated: false });
          }
        } else if (y > contentSize.height - layoutMeasurement.height - contentInset.bottom) {
          const current2 = ref.current;
          if (current2 != null) {
            const _Math = Math;
            const scrollToLocation = current2.scrollToLocation;
            const obj = { sectionIndex: _undefined.length - 1, itemIndex: Math.max(commandsByActiveSection[commandsByActiveSection.length - 1].data.length - 1, 0), viewPosition: 1, animated: false };
            scrollToLocation(obj);
          }
        }
      }
      const tmp7 = c13 && y + layoutMeasurement.height >= contentSize.height - 3 * bound;
      if (tmp7) {
        _undefined2();
      }
    },
    scrollEventThrottle: 16,
    keyExtractor(id) {
      return id.id;
    },
    maintainVisibleContentPosition: obj9,
    renderItem(item) {
      item = item.item;
      const section = item.section;
      let found;
      const tmp = closure_3;
      if (item.inputType === require("ApplicationCommandTypes").ApplicationCommandInputType.PLACEHOLDER) {
        return filteredSectionId(onHeightChange(tmp[22]), {});
      } else {
        found = sectionDescriptors.find((id) => id.id === item.applicationId);
        const obj = {
          command: item,
          onPress() {
              let tmpResult;
              if (require != null) {
                tmpResult = tmp(item, found, section.section);
              }
              return tmpResult;
            },
          section: found,
          showIcon: item.applicationId !== section.section.id,
          guildId: found.guild_id
        };
        return filteredSectionId(onHeightChange(tmp[23]), obj);
      }
    },
    renderSectionHeader(section) {
      let intl;
      let obj5;
      section = section.section;
      const children = [, ];
      const obj = { section: section.section, guildId: channel.guild_id };
      children[0] = authStore2(ApplicationSectionHeaderDefault, obj, section.section.id);
      let tmp3Result = 0 === section.data.length;
      const tmp = authStore3;
      const tmp2 = closure_15;
      const tmp3 = authStore2;
      if (tmp3Result) {
        const obj3 = { lightSource: AssetRegistryDefault, darkSource: AssetRegistryDefault, body: intl.format(intl2.t.WoQXT6, obj5), containerStyle: null, imageStyle: null };
        const ThemedEmptyState = native.ThemedEmptyState;
        intl = intl2.intl;
        obj5 = { applicationName: section.section.name };
        ({ noCommandsContainer: obj2.containerStyle, noCommandsImage: obj2.imageStyle } = closure_3);
        tmp3Result = tmp3(ThemedEmptyState, obj3);
      }
      children[1] = tmp3Result;
      return tmp(tmp2, { children });
    },
    getItemLayout: callback4,
    stickySectionHeadersEnabled: true
  };
  obj9 = null;
  const memo1 = obj2.useMemo(() => {
    const obj = { onPressSection, sections: sectionDescriptors, selectedIndex, guildId: channel.guild_id };
    return authStore2(ApplicationCommandsCategoriesDefault, obj);
  }, items7);
  let tmp20 = filterSection;
  let tmp21 = selectedIndex;
  let tmp22 = filteredSectionId;
  let tmp23 = closure_7;
  if (loading) {
    obj9 = { minIndexForVisible: 1 };
  }
  items9 = [tmp22(tmp23, obj8), memo1];
  return tmp20(tmp21, obj7);
};
