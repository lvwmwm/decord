// Module ID: 11223
// Function ID: 87345
// Name: getApplicationIdFromApplicationItem
// Dependencies: [57, 31, 27, 7920, 11188, 1455, 33, 4130, 689, 11171, 11176, 5165, 7919, 11224, 8182, 11174, 1557, 8832, 7918, 11187, 6755, 6753, 11226, 11227, 1212, 3843, 11209, 11202, 11221, 4126, 11228, 8372, 11229, 2]

// Module 11223 (getApplicationIdFromApplicationItem)
import _slicedToArray from "_slicedToArray";
import importAllResult from "TwinButtons";
import { View } from "AppRowLabel";
import { getSection } from "_isNativeReflectConstruct";
import { FetchState } from "_isNativeReflectConstruct";
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import jsxProd from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
const require = arg1;
function getApplicationIdFromApplicationItem(type) {
  let id;
  if (type.type !== obj.PLACERHOLDER) {
    if (null != type.application) {
      id = type.application.id;
    }
  }
  return id;
}
function getImpressionPropsFromApplicationItem(type) {
  return { applicationId: getApplicationIdFromApplicationItem(type) };
}
function CommandRow(arg0) {
  let application;
  let beforeExecuteCommand;
  let command;
  let context;
  let isFirstRow;
  let isLastRow;
  let onExecuteCommand;
  let onPress;
  ({ command, application } = arg0);
  ({ context, onPress, isFirstRow, isLastRow, beforeExecuteCommand, onExecuteCommand } = arg0);
  let obj = require(11171) /* handleApplicationSelected */;
  const appLauncherIconSource = obj.getAppLauncherIconSource(application);
  let tmp2 = null != appLauncherIconSource;
  if (tmp2) {
    obj = { iconSource: appLauncherIconSource };
    tmp2 = callback2(importDefault(11176), obj);
  }
  obj = { icon: tmp2, label: command.displayName, subLabel: require(7919) /* _createForOfIteratorHelperLoose */.getSectionName(application), subLabelLineClamp: 1, start: isFirstRow, end: isLastRow, onPress };
  const obj1 = { command, context, beforeExecuteCommand, onExecuteCommand };
  const obj4 = require(7919) /* _createForOfIteratorHelperLoose */;
  obj1.sectionName = require(8182) /* AppLauncherEntrypoint */.AppLauncherSectionName.SEARCH;
  obj.trailing = callback2(importDefault(11224), obj1);
  return callback2(require(5165) /* TableRowInner */.TableRow, obj);
}
function PlaceholderCommandRow(isFirstRow) {
  let flag = isFirstRow.isFirstRow;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isFirstRow.isLastRow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = callback3();
  let obj = require(11174) /* usePlaceholderWidth */;
  const placeholderWidth = obj.usePlaceholderWidth(10, 50);
  let obj1 = require(11174) /* usePlaceholderWidth */;
  const placeholderWidth1 = obj1.usePlaceholderWidth(30, 90);
  obj = {};
  obj = { style: tmp.loadingCommandAppIcon };
  obj.icon = callback2(View, obj);
  obj1 = {};
  const items = [tmp.loadingTextPlaceholder, { width: "" + placeholderWidth + "%" }];
  obj1.style = items;
  obj.label = callback2(View, obj1);
  const obj3 = {};
  const items1 = [tmp.loadingTextPlaceholderSmall, ];
  const obj2 = { width: "" + placeholderWidth + "%" };
  items1[1] = { width: "" + placeholderWidth1 + "%" };
  obj3.style = items1;
  obj.subLabel = callback2(View, obj3);
  obj.subLabelLineClamp = 1;
  obj.start = flag;
  obj.end = flag2;
  obj.onPress = function onPress() {

  };
  return callback2(require(5165) /* TableRowInner */.TableRow, obj);
}
function keyExtractor(type) {
  if (type.type === obj.PLACERHOLDER) {
    let id = arg1.toString();
  } else {
    id = type.application.id;
  }
  return id;
}
function CommandsExpandableList(expandedOverride) {
  const commandData = expandedOverride.commandData;
  const context = expandedOverride.context;
  const beforeExecuteCommand = expandedOverride.beforeExecuteCommand;
  const onPressCommand = expandedOverride.onPressCommand;
  const onExecuteCommand = expandedOverride.onExecuteCommand;
  let items = [beforeExecuteCommand, context, commandData, onExecuteCommand, onPressCommand];
  items = onExecuteCommand.useMemo(() => commandData.map((arg0, arg1) => {
    let closure_1;
    let closure_2;
    let closure_0 = arg1;
    if (arg0 === outer2_14) {
      return (isLastRow) => outer3_10(outer3_21, { isFirstRow: 0 === closure_0, isLastRow: isLastRow.isLastRow });
    } else {
      ({ command: closure_1, application: closure_2 } = arg0);
      return (isLastRow) => outer3_10(outer3_20, {
        context: outer2_1,
        command: closure_1,
        application: closure_2,
        onPress() {
          return outer3_3(outer1_1, outer1_0);
        },
        isFirstRow: 0 === closure_0,
        isLastRow: isLastRow.isLastRow,
        beforeExecuteCommand() {
          return outer3_2({ command: outer1_1, searchResultsPosition: outer1_0 });
        },
        onExecuteCommand: outer2_4
      });
    }
  }), items);
  return callback2(context(beforeExecuteCommand[30]), { items, expandedOverride: expandedOverride.expanded, showsExpandCTAOverride: false });
}
const DEFAULT_CONTENT_PADDING = APP_LAUNCHER_BUILT_IN_SECTION_ICON.DEFAULT_CONTENT_PADDING;
const useAppLauncherNavigation = APP_LAUNCHER_BUILT_IN_SECTION_ICON.useAppLauncherNavigation;
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let obj = { PLACERHOLDER: 0, [0]: "PLACERHOLDER", LOCAL_APPLICATION: 1, [1]: "LOCAL_APPLICATION", GLOBAL_APPLICATION: 2, [2]: "GLOBAL_APPLICATION" };
const placeholder = "placeholder";
let array = new Array(6);
let closure_15 = array.fill("placeholder");
array = new Array(3);
obj = { type: obj.PLACERHOLDER };
let closure_16 = array.fill(obj);
let obj1 = { sectionHeader: { marginBottom: 8 }, list: { paddingHorizontal: DEFAULT_CONTENT_PADDING, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND } };
let obj3 = { width: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
obj1.loadingCommandAppIcon = obj3;
let obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, height: 16, marginBottom: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignSelf: "flex-start" };
obj1.loadingTextPlaceholder = obj4;
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignSelf: "flex-start" };
obj1.loadingTextPlaceholderSmall = _createForOfIteratorHelperLoose;
let obj2 = { paddingHorizontal: DEFAULT_CONTENT_PADDING, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj1.divider = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj1.commandsHeaderContainer = { justifyContent: "space-between", flexDirection: "row" };
let obj6 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj1.commandsCTA = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_4, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4, justifyContent: "center" };
let obj7 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_4, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4, justifyContent: "center" };
obj1.commandsCTAUnderlayColor = { color: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
let closure_17 = _createForOfIteratorHelperLoose.createStyles(obj1);
let obj8 = { color: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
const forwardRefResult = importAllResult.forwardRef((context) => {
  context = context.context;
  const onScroll = context.onScroll;
  const entrypoint = context.entrypoint;
  let loading;
  let commandResults;
  let applicationResults;
  let fetchState;
  let applicationResults2;
  let fetchNextPage;
  let callback2;
  let memo1;
  let c16;
  let tmp = callback3();
  let callback = tmp;
  const tmp2 = onScroll(entrypoint[17])();
  const tmp3 = commandResults();
  const View = tmp3;
  const tmp4 = callback(tmp2.useState(""), 2);
  const first = tmp4[0];
  let closure_7 = tmp4[1];
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({ setQuery: closure_7 }));
  let obj = context(entrypoint[18]);
  let id;
  if ("channel" === context.type) {
    id = context.channel.id;
  }
  const isActivitiesInTextEnabled = obj.useIsActivitiesInTextEnabled(id);
  let obj1 = context(entrypoint[19]);
  obj = { context, query: first, commandLimit: 20, applicationLimit: 10, searchesActivities: entrypoint === context(entrypoint[14]).AppLauncherEntrypoint.VOICE || isActivitiesInTextEnabled, searchesCommands: entrypoint === context(entrypoint[14]).AppLauncherEntrypoint.TEXT, searchesBots: entrypoint === context(entrypoint[14]).AppLauncherEntrypoint.TEXT };
  const localSearchResults = obj1.useLocalSearchResults(obj);
  loading = localSearchResults.loading;
  commandResults = localSearchResults.commandResults;
  applicationResults = localSearchResults.applicationResults;
  let obj3 = context(entrypoint[19]);
  const globalSearchResults = obj3.useGlobalSearchResults({ query: first, context, fetches: true, entrypoint });
  fetchState = globalSearchResults.fetchState;
  applicationResults2 = globalSearchResults.applicationResults;
  fetchNextPage = globalSearchResults.fetchNextPage;
  const tmp12 = (function useCommandsExpanded(first) {
    tmp = tmp(tmp2.useState(false), 2);
    let closure_0 = tmp[1];
    const items = [first];
    const effect = tmp2.useEffect(() => {
      callback(false);
    }, items);
    return {
      isCommandsExpanded: tmp[0],
      toggleCommandsExpanded: tmp2.useCallback(() => {
        callback((arg0) => !arg0);
      }, [])
    };
  })(first);
  const isCommandsExpanded = tmp12.isCommandsExpanded;
  let items = [context, entrypoint, tmp3, first];
  let items1 = [context, first];
  callback = importAllResult.useCallback((applicationId, searchResultsPosition) => {
    const descriptor = first(context, applicationId.applicationId).descriptor;
    let obj = context(entrypoint[9]);
    obj = { location: context(entrypoint[20]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH, context, command: applicationId, section: descriptor, sectionDescriptors: items, query: first, navigation: closure_5, sectionName: context(entrypoint[14]).AppLauncherSectionName.SEARCH, searchResultsPosition, entrypoint };
    items = [descriptor];
    const result = obj.handleApplicationCommandSelected(obj);
  }, items);
  const items2 = [tmp3, context, first, entrypoint];
  const callback1 = importAllResult.useCallback((command) => {
    command = command.command;
    let obj = context(entrypoint[21]);
    obj = { command, location: context(entrypoint[20]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH, triggerSection: context(entrypoint[21]).getCommandTriggerSection(first(context, command.applicationId).descriptor), queryLength: first.length, sectionName: context(entrypoint[14]).AppLauncherSectionName.SEARCH, query: first, searchResultsPosition: command.searchResultsPosition };
    obj.trackCommandSelected(obj);
  }, items1);
  callback2 = importAllResult.useCallback((arg0) => {
    let installOnDemand;
    let searchResultsPosition;
    let section;
    ({ section, installOnDemand, searchResultsPosition } = arg0);
    let obj = context(entrypoint[9]);
    obj = { location: context(entrypoint[20]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH, application: section, navigation: closure_5, context, sectionName: context(entrypoint[14]).AppLauncherSectionName.SEARCH, installOnDemand, query: first, searchResultsPosition, entrypoint };
    const result = obj.handleApplicationSelected(obj);
  }, items2);
  const items3 = [loading, commandResults];
  const memo = importAllResult.useMemo(() => loading ? memo1 : commandResults, items3);
  let obj4 = context(entrypoint[22]);
  const items4 = [applicationResults, applicationResults2, loading, fetchState];
  memo1 = importAllResult.useMemo(() => {
    const mapped = applicationResults.map((application) => ({ type: fetchNextPage.LOCAL_APPLICATION, application }));
    const set = new Set(applicationResults.map((id) => id.id));
    const found = null != applicationResults2 ? applicationResults2 : [].filter((type) => {
      let tmp = type.type !== context(entrypoint[23]).ApplicationDirectorySearchResultType.CONNECTION;
      if (tmp) {
        tmp = !set.has(type.data.id);
      }
      return tmp;
    });
    const mapped1 = found.map((application) => ({ type: fetchNextPage.GLOBAL_APPLICATION, application: application.data }));
    if (loading) {
      let items = c16;
    } else {
      if (null != fetchState) {
        if (fetchState !== constants.FETCHING) {
          items = [];
          HermesBuiltin.arraySpread(mapped1, HermesBuiltin.arraySpread(mapped, 0));
        }
      }
      const items1 = [];
      HermesBuiltin.arraySpread(c16, HermesBuiltin.arraySpread(mapped1, HermesBuiltin.arraySpread(mapped, 0)));
      items = items1;
    }
    return items;
  }, items4);
  const items5 = [first, commandResults.length, memo1.length, loading, fetchState];
  let effect = importAllResult.useEffect(() => {
    if (0 !== first.length) {
      if (!loading) {
        if (fetchState !== constants.FETCHING) {
          const sum = commandResults.length + memo1.length;
          if (sum > 0) {
            const intl = context(entrypoint[24]).intl;
            const obj = { count: sum };
            const AccessibilityAnnouncer = context(entrypoint[25]).AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(intl.formatToPlainString(context(entrypoint[24]).t.ZGVL3g, obj), "polite");
            const formatToPlainStringResult = intl.formatToPlainString(context(entrypoint[24]).t.ZGVL3g, obj);
          }
        }
      }
    }
  }, items5);
  const items6 = [memo1.length, callback2, tmp2];
  let sum = onScroll(entrypoint[16])().bottom + loading;
  c16 = sum;
  callback3 = importAllResult.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    let application;
    const type = item.type;
    if (fetchNextPage.PLACERHOLDER === type) {
      let obj = { isFirstRow: 0 === index, isLastRow: index === memo1.length - 1 };
      obj = { height: closure_4 };
      obj.style = obj;
      return applicationResults(onScroll(entrypoint[26]), obj);
    } else {
      if (fetchNextPage.LOCAL_APPLICATION !== type) {
        if (fetchNextPage.GLOBAL_APPLICATION !== type) {
          return null;
        }
      }
      application = item.application;
      obj = context(entrypoint[9]);
      const appLauncherIconSource = obj.getAppLauncherIconSource(application);
      const obj1 = {
        application,
        iconSource: appLauncherIconSource,
        onPress() {
            return outer1_14({ section: application, installOnDemand: true, searchResultsPosition: index });
          },
        isFirstRow: 0 === index,
        isLastRow: index === memo1.length - 1
      };
      return applicationResults(context(entrypoint[27]).BaseAppRow, obj1);
    }
  }, items6);
  let obj5 = context(entrypoint[28]);
  const appLauncherFlashListProps = obj5.useAppLauncherFlashListProps();
  const items7 = [fetchNextPage, onScroll, tmp2];
  const items8 = [tmp.list, sum];
  const callback4 = importAllResult.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    if (nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >= nativeEvent.contentSize.height - 3 * closure_4) {
      fetchNextPage();
    }
    if (null != onScroll) {
      onScroll(nativeEvent);
    }
  }, items7);
  const items9 = [sum];
  const memo2 = importAllResult.useMemo(() => {
    const obj = {};
    const merged = Object.assign(tmp.list);
    obj["paddingBottom"] = c16;
    return obj;
  }, items8);
  const memo3 = importAllResult.useMemo(() => ({ bottom: c16 }), items9);
  obj = {};
  obj1 = {};
  let tmp57Result = null;
  const tmp16 = 0 === memo.length && 0 === memo1.length;
  const tmp24 = applicationResults;
  const tmp9 = entrypoint === context(entrypoint[14]).AppLauncherEntrypoint.VOICE || isActivitiesInTextEnabled;
  if (0 !== memo.length) {
    const obj2 = {};
    obj3 = { style: tmp.commandsHeaderContainer };
    obj4 = { accessibilityRole: "header", variant: "text-md/medium", color: "text-default", style: tmp.sectionHeader };
    const intl4 = context(entrypoint[24]).intl;
    obj4.children = intl4.string(context(entrypoint[24]).t["0hKkS+"]);
    const items10 = [applicationResults(context(entrypoint[29]).Text, obj4), ];
    if (memo.length <= context(entrypoint[30]).COLLAPSED_LIST_ITEM_MAX) {
      items10[1] = null;
      obj3.children = items10;
      const items11 = [tmp57(tmp59, obj3), ];
      obj5 = { commandData: memo, context, beforeExecuteCommand: callback1, onPressCommand: callback, onExecuteCommand: context.onSend, expanded: isCommandsExpanded };
      items11[1] = applicationResults(CommandsExpandableList, obj5);
      obj2.children = items11;
      tmp57Result = tmp57(tmp58, obj2);
    } else {
      const obj6 = { style: tmp.commandsCTA, underlayColor: tmp.commandsCTAUnderlayColor.color };
      let intl = context(entrypoint[24]).intl;
      const string = intl.string;
      const t = context(entrypoint[24]).t;
      if (isCommandsExpanded) {
        let stringResult = string(t.nPGLFQ);
      } else {
        stringResult = string(t.xal319);
      }
      obj6.accessibilityLabel = stringResult;
      obj6.onPress = tmp12.toggleCommandsExpanded;
      let obj7 = { color: "text-brand", variant: "text-md/semibold" };
      const intl2 = context(entrypoint[24]).intl;
      const string2 = intl2.string;
      let nPGLFQ = context(entrypoint[24]).t;
      if (isCommandsExpanded) {
        nPGLFQ = nPGLFQ.nPGLFQ;
        let string2Result = string2(nPGLFQ);
      } else {
        string2Result = string2(nPGLFQ.xal319);
      }
      obj7.children = string2Result;
      obj7 = applicationResults(context(entrypoint[29]).Text, obj7);
      obj6.children = obj7;
      applicationResults(context(entrypoint[31]).AnimatedPressableHighlight, obj6);
      const tmp29 = applicationResults;
      const tmp35 = applicationResults;
    }
    tmp58 = applicationResults2;
    tmp59 = View;
  }
  const items12 = [tmp57Result, , , ];
  let tmp44 = null;
  if (memo.length > 0) {
    tmp44 = null;
    if (memo1.length > 0) {
      const obj8 = { style: tmp.divider };
      tmp44 = applicationResults(View, obj8);
    }
  }
  items12[1] = tmp44;
  let tmp47 = null;
  if (0 !== memo1.length) {
    const obj9 = { accessibilityRole: "header", variant: "text-md/medium", color: "text-default", style: tmp.sectionHeader };
    const intl3 = context(entrypoint[24]).intl;
    obj9.children = intl3.string(context(entrypoint[24]).t.PHjkRE);
    tmp47 = applicationResults(context(entrypoint[29]).Text, obj9);
  }
  items12[2] = tmp47;
  let tmp51 = null;
  if (tmp16) {
    const obj10 = { query: first, showsGenericMessage: entrypoint === context(entrypoint[14]).AppLauncherEntrypoint.VOICE };
    tmp51 = applicationResults(onScroll(entrypoint[32]), obj10);
    const tmp55 = onScroll(entrypoint[32]);
  }
  items12[3] = tmp51;
  obj1.children = items12;
  obj.ListHeaderComponent = fetchState(applicationResults2, obj1);
  obj.contentContainerStyle = memo2;
  obj.scrollIndicatorInsets = memo3;
  obj.renderItem = callback3;
  obj.keyExtractor = keyExtractor;
  obj.data = memo1;
  obj.keyboardDismissMode = "on-drag";
  obj.keyboardShouldPersistTaps = "always";
  obj.automaticallyAdjustsScrollIndicatorInsets = false;
  obj.showsVerticalScrollIndicator = false;
  obj.onViewableItemsChanged = obj4.useTrackSearchItems(getApplicationIdFromApplicationItem, getImpressionPropsFromApplicationItem, first).handleViewableItemsChanged;
  obj.preserveScrollMomentum = true;
  obj.onScroll = callback4;
  ({ onScroll: obj7.animatedOnScroll, scrollerRef: obj7.ref, gestureRef: obj7.simultaneousHandlers, animatedProps: obj7.animatedProps } = appLauncherFlashListProps);
  return tmp24(onScroll(entrypoint[28]), obj, first);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/app_launcher/native/screens/search/SearchLocalAndGlobalContentView.tsx");

export const SearchLocalAndGlobalContentView = forwardRefResult;
