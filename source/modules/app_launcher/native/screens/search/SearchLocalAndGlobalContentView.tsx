// Module ID: 11212
// Function ID: 87282
// Name: getApplicationIdFromApplicationItem
// Dependencies: []

// Module 11212 (getApplicationIdFromApplicationItem)
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
  let obj = arg1(dependencyMap[9]);
  const appLauncherIconSource = obj.getAppLauncherIconSource(application);
  let tmp2 = null != appLauncherIconSource;
  if (tmp2) {
    obj = { iconSource: appLauncherIconSource };
    tmp2 = callback2(importDefault(dependencyMap[10]), obj);
  }
  obj = { icon: tmp2, label: command.displayName, subLabel: arg1(dependencyMap[12]).getSectionName(application), subLabelLineClamp: 1, start: isFirstRow, end: isLastRow, onPress };
  const obj1 = { command, context, beforeExecuteCommand, onExecuteCommand };
  const obj4 = arg1(dependencyMap[12]);
  obj1.sectionName = arg1(dependencyMap[14]).AppLauncherSectionName.SEARCH;
  obj.trailing = callback2(importDefault(dependencyMap[13]), obj1);
  return callback2(arg1(dependencyMap[11]).TableRow, obj);
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
  let obj = arg1(dependencyMap[15]);
  const placeholderWidth = obj.usePlaceholderWidth(10, 50);
  let obj1 = arg1(dependencyMap[15]);
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
  return callback2(arg1(dependencyMap[11]).TableRow, obj);
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
  const arg1 = commandData;
  const context = expandedOverride.context;
  const importDefault = context;
  const beforeExecuteCommand = expandedOverride.beforeExecuteCommand;
  const dependencyMap = beforeExecuteCommand;
  const onPressCommand = expandedOverride.onPressCommand;
  let closure_3 = onPressCommand;
  const onExecuteCommand = expandedOverride.onExecuteCommand;
  let items = [beforeExecuteCommand, context, commandData, onExecuteCommand, onPressCommand];
  items = onExecuteCommand.useMemo(() => commandData.map((arg0, arg1) => {
    if (arg0 === closure_14) {
      return (isLastRow) => callback(closure_21, { isFirstRow: 0 === arg1, isLastRow: isLastRow.isLastRow });
    } else {
      ({ command: closure_1, application: closure_2 } = arg0);
      return (isLastRow) => callback(closure_20, {
        context: closure_1,
        command: closure_1,
        application: closure_2,
        onPress() {
          return callback2(closure_1, closure_0);
        },
        isFirstRow: 0 === arg1,
        isLastRow: isLastRow.isLastRow,
        beforeExecuteCommand() {
          return callback({ command: closure_1, searchResultsPosition: closure_0 });
        },
        onExecuteCommand: closure_4
      });
    }
  }), items);
  return callback2(importDefault(dependencyMap[30]), { items, expandedOverride: expandedOverride.expanded, showsExpandCTAOverride: false });
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const getSection = arg1(dependencyMap[3]).getSection;
const FetchState = arg1(dependencyMap[4]).FetchState;
const tmp2 = arg1(dependencyMap[5]);
const DEFAULT_CONTENT_PADDING = tmp2.DEFAULT_CONTENT_PADDING;
const useAppLauncherNavigation = tmp2.useAppLauncherNavigation;
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[6]));
let obj = { PLACERHOLDER: 0, [0]: "PLACERHOLDER", LOCAL_APPLICATION: 1, [1]: "LOCAL_APPLICATION", GLOBAL_APPLICATION: 2, [2]: "GLOBAL_APPLICATION" };
let closure_14 = "placeholder";
let array = new Array(6);
let closure_15 = array.fill("placeholder");
array = new Array(3);
obj = { type: obj.PLACERHOLDER };
let closure_16 = array.fill(obj);
let obj5 = arg1(dependencyMap[7]);
const obj1 = { sectionHeader: { marginBottom: 8 } };
const tmp3 = arg1(dependencyMap[6]);
obj1.list = { paddingHorizontal: DEFAULT_CONTENT_PADDING, backgroundColor: importDefault(dependencyMap[8]).colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
const obj3 = { "Null": false, "Null": false, borderRadius: importDefault(dependencyMap[8]).radii.sm, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_SUBTLE };
obj1.loadingCommandAppIcon = obj3;
const obj4 = { enabled: "#370b1a", marginTop: "<string:24183040>", now: "<string:1929379840>", accessible: "isArray", options: null, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_SUBTLE, borderRadius: importDefault(dependencyMap[8]).radii.lg };
obj1.loadingTextPlaceholder = obj4;
obj5 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: importDefault(dependencyMap[8]).radii.lg, alignSelf: "flex-start" };
obj1.loadingTextPlaceholderSmall = obj5;
const obj2 = { paddingHorizontal: DEFAULT_CONTENT_PADDING, backgroundColor: importDefault(dependencyMap[8]).colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj1.divider = { marginTop: importDefault(dependencyMap[8]).space.PX_16 };
obj1.commandsHeaderContainer = {};
const obj6 = { marginTop: importDefault(dependencyMap[8]).space.PX_16 };
obj1.commandsCTA = { borderRadius: importDefault(dependencyMap[8]).radii.sm, paddingHorizontal: importDefault(dependencyMap[8]).space.PX_4, marginBottom: importDefault(dependencyMap[8]).space.PX_4, justifyContent: "center" };
const obj7 = { borderRadius: importDefault(dependencyMap[8]).radii.sm, paddingHorizontal: importDefault(dependencyMap[8]).space.PX_4, marginBottom: importDefault(dependencyMap[8]).space.PX_4, justifyContent: "center" };
obj1.commandsCTAUnderlayColor = { color: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH };
let closure_17 = obj5.createStyles(obj1);
const obj8 = { color: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH };
const forwardRefResult = importAllResult.forwardRef((context) => {
  context = context.context;
  const arg1 = context;
  const onScroll = context.onScroll;
  const importDefault = onScroll;
  const entrypoint = context.entrypoint;
  const dependencyMap = entrypoint;
  let DEFAULT_CONTENT_PADDING;
  let useAppLauncherNavigation;
  let applicationResults;
  let fetchState;
  let applicationResults2;
  let obj;
  let closure_14;
  let closure_15;
  let closure_16;
  const tmp = callback3();
  let callback = tmp;
  const tmp2 = importDefault(dependencyMap[17])();
  const tmp3 = useAppLauncherNavigation();
  const View = tmp3;
  const tmp4 = callback(tmp2.useState(""), 2);
  const first = tmp4[0];
  const getSection = first;
  let closure_7 = tmp4[1];
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({ setQuery: closure_7 }));
  obj = arg1(dependencyMap[18]);
  let id;
  if ("channel" === context.type) {
    id = context.channel.id;
  }
  const isActivitiesInTextEnabled = obj.useIsActivitiesInTextEnabled(id);
  let obj1 = arg1(dependencyMap[19]);
  obj = { context, query: first, commandLimit: 20, applicationLimit: 10, searchesActivities: entrypoint === arg1(dependencyMap[14]).AppLauncherEntrypoint.VOICE || isActivitiesInTextEnabled, searchesCommands: entrypoint === arg1(dependencyMap[14]).AppLauncherEntrypoint.TEXT, searchesBots: entrypoint === arg1(dependencyMap[14]).AppLauncherEntrypoint.TEXT };
  const localSearchResults = obj1.useLocalSearchResults(obj);
  const loading = localSearchResults.loading;
  DEFAULT_CONTENT_PADDING = loading;
  useAppLauncherNavigation = commandResults;
  applicationResults = localSearchResults.applicationResults;
  let obj3 = arg1(dependencyMap[19]);
  const globalSearchResults = obj3.useGlobalSearchResults({ query: first, context, fetches: true, entrypoint });
  fetchState = globalSearchResults.fetchState;
  applicationResults2 = globalSearchResults.applicationResults;
  const fetchNextPage = globalSearchResults.fetchNextPage;
  obj = fetchNextPage;
  const tmp12 = function useCommandsExpanded(first) {
    const tmp = tmp(tmp2.useState(false), 2);
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
  }(first);
  const isCommandsExpanded = tmp12.isCommandsExpanded;
  const items = [context, entrypoint, tmp3, first];
  const items1 = [context, first];
  callback = importAllResult.useCallback((applicationId, searchResultsPosition) => {
    const descriptor = first(context, applicationId.applicationId).descriptor;
    let obj = context(entrypoint[9]);
    obj = { location: context(entrypoint[20]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH, context, command: applicationId, section: descriptor, sectionDescriptors: items, query: first, navigation: tmp3, sectionName: context(entrypoint[14]).AppLauncherSectionName.SEARCH, searchResultsPosition, entrypoint };
    const items = [descriptor];
    const result = obj.handleApplicationCommandSelected(obj);
  }, items);
  const items2 = [tmp3, context, first, entrypoint];
  const callback1 = importAllResult.useCallback((command) => {
    command = command.command;
    let obj = context(entrypoint[21]);
    obj = { command, location: context(entrypoint[20]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH, triggerSection: context(entrypoint[21]).getCommandTriggerSection(first(context, command.applicationId).descriptor), queryLength: first.length, sectionName: context(entrypoint[14]).AppLauncherSectionName.SEARCH, query: first, searchResultsPosition: command.searchResultsPosition };
    obj.trackCommandSelected(obj);
  }, items1);
  const callback2 = importAllResult.useCallback((arg0) => {
    let installOnDemand;
    let searchResultsPosition;
    let section;
    ({ section, installOnDemand, searchResultsPosition } = arg0);
    let obj = context(entrypoint[9]);
    obj = { location: context(entrypoint[20]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH, application: section, navigation: tmp3, context, sectionName: context(entrypoint[14]).AppLauncherSectionName.SEARCH, installOnDemand, query: first, searchResultsPosition, entrypoint };
    const result = obj.handleApplicationSelected(obj);
  }, items2);
  closure_14 = callback2;
  const items3 = [loading, localSearchResults.commandResults];
  const memo = importAllResult.useMemo(() => loading ? memo1 : commandResults, items3);
  let obj4 = arg1(dependencyMap[22]);
  const items4 = [applicationResults, applicationResults2, loading, fetchState];
  const memo1 = importAllResult.useMemo(() => {
    const mapped = applicationResults.map((application) => ({ type: constants.LOCAL_APPLICATION, application }));
    const context = new Set(applicationResults.map((id) => id.id));
    const found = null != applicationResults2 ? applicationResults2 : [].filter((type) => {
      let tmp = type.type !== set(closure_2[23]).ApplicationDirectorySearchResultType.CONNECTION;
      if (tmp) {
        tmp = !set.has(type.data.id);
      }
      return tmp;
    });
    const mapped1 = found.map((application) => ({ type: constants.GLOBAL_APPLICATION, application: application.data }));
    if (loading) {
      let items = sum;
    } else {
      if (null != fetchState) {
        if (fetchState !== constants.FETCHING) {
          items = [];
          HermesBuiltin.arraySpread(mapped1, HermesBuiltin.arraySpread(mapped, 0));
        }
      }
      const items1 = [];
      HermesBuiltin.arraySpread(sum, HermesBuiltin.arraySpread(mapped1, HermesBuiltin.arraySpread(mapped, 0)));
      items = items1;
    }
    return items;
  }, items4);
  closure_15 = memo1;
  const items5 = [first, localSearchResults.commandResults.length, memo1.length, loading, fetchState];
  const effect = importAllResult.useEffect(() => {
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
  const sum = importDefault(dependencyMap[16])().bottom + DEFAULT_CONTENT_PADDING;
  closure_16 = sum;
  const callback3 = importAllResult.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    const context = index;
    let onScroll;
    const type = item.type;
    if (fetchNextPage.PLACERHOLDER === type) {
      let obj = { isFirstRow: 0 === index, isLastRow: index === memo1.length - 1 };
      obj = { height: tmp2 };
      obj.style = obj;
      return applicationResults(onScroll(entrypoint[26]), obj);
    } else {
      if (fetchNextPage.LOCAL_APPLICATION !== type) {
        if (fetchNextPage.GLOBAL_APPLICATION !== type) {
          return null;
        }
      }
      const application = item.application;
      onScroll = application;
      obj = context(entrypoint[9]);
      const appLauncherIconSource = obj.getAppLauncherIconSource(application);
      const obj1 = {
        application,
        iconSource: appLauncherIconSource,
        onPress() {
            return callback({ section: application, installOnDemand: true, searchResultsPosition: index });
          },
        isFirstRow: 0 === index,
        isLastRow: index === memo1.length - 1
      };
      return applicationResults(context(entrypoint[27]).BaseAppRow, obj1);
    }
  }, items6);
  let obj5 = arg1(dependencyMap[28]);
  const appLauncherFlashListProps = obj5.useAppLauncherFlashListProps();
  const items7 = [fetchNextPage, onScroll, tmp2];
  const items8 = [tmp.list, sum];
  const callback4 = importAllResult.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    if (nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >= nativeEvent.contentSize.height - 3 * tmp2) {
      const tmp2 = fetchNextPage();
    }
    if (null != onScroll) {
      onScroll(nativeEvent);
    }
  }, items7);
  const items9 = [sum];
  const memo2 = importAllResult.useMemo(() => {
    const obj = {};
    const merged = Object.assign(tmp.list);
    obj["paddingBottom"] = sum;
    return obj;
  }, items8);
  const memo3 = importAllResult.useMemo(() => ({ bottom: sum }), items9);
  obj = {};
  obj1 = {};
  let tmp57Result = null;
  const tmp16 = 0 === memo.length && 0 === memo1.length;
  const tmp24 = applicationResults;
  const tmp9 = entrypoint === arg1(dependencyMap[14]).AppLauncherEntrypoint.VOICE || isActivitiesInTextEnabled;
  if (0 !== memo.length) {
    const obj2 = {};
    obj3 = { style: tmp.commandsHeaderContainer };
    obj4 = { USER_REGISTRATION: "<string:16777216>", borderColor: "%MapPrototype%", borderWidth: "<string:188694784>", style: tmp.sectionHeader };
    const intl4 = arg1(dependencyMap[24]).intl;
    obj4.children = intl4.string(arg1(dependencyMap[24]).t.0hKkS+);
    const items10 = [applicationResults(arg1(dependencyMap[29]).Text, obj4), ];
    if (memo.length <= arg1(dependencyMap[30]).COLLAPSED_LIST_ITEM_MAX) {
      items10[1] = null;
      obj3.children = items10;
      const items11 = [tmp57(tmp59, obj3), ];
      obj5 = { commandData: memo, context, beforeExecuteCommand: callback1, onPressCommand: callback, onExecuteCommand: context.onSend, expanded: isCommandsExpanded };
      items11[1] = applicationResults(CommandsExpandableList, obj5);
      obj2.children = items11;
      tmp57Result = tmp57(tmp58, obj2);
    } else {
      const obj6 = { style: tmp.commandsCTA, underlayColor: tmp.commandsCTAUnderlayColor.color };
      const intl = arg1(dependencyMap[24]).intl;
      const string = intl.string;
      const t = arg1(dependencyMap[24]).t;
      if (isCommandsExpanded) {
        let stringResult = string(t.nPGLFQ);
      } else {
        stringResult = string(t.xal319);
      }
      obj6.accessibilityLabel = stringResult;
      obj6.onPress = tmp12.toggleCommandsExpanded;
      let obj7 = {};
      const intl2 = arg1(dependencyMap[24]).intl;
      const string2 = intl2.string;
      let nPGLFQ = arg1(dependencyMap[24]).t;
      if (isCommandsExpanded) {
        nPGLFQ = nPGLFQ.nPGLFQ;
        let string2Result = string2(nPGLFQ);
      } else {
        string2Result = string2(nPGLFQ.xal319);
      }
      obj7.children = string2Result;
      obj7 = applicationResults(arg1(dependencyMap[29]).Text, obj7);
      obj6.children = obj7;
      applicationResults(arg1(dependencyMap[31]).AnimatedPressableHighlight, obj6);
      const tmp29 = applicationResults;
      const tmp35 = applicationResults;
    }
    const tmp58 = applicationResults2;
    const tmp59 = View;
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
    const obj9 = { USER_REGISTRATION: "<string:16777216>", borderColor: "%MapPrototype%", borderWidth: "<string:188694784>", style: tmp.sectionHeader };
    const intl3 = arg1(dependencyMap[24]).intl;
    obj9.children = intl3.string(arg1(dependencyMap[24]).t.PHjkRE);
    tmp47 = applicationResults(arg1(dependencyMap[29]).Text, obj9);
  }
  items12[2] = tmp47;
  let tmp51 = null;
  if (tmp16) {
    const obj10 = { query: first, showsGenericMessage: entrypoint === arg1(dependencyMap[14]).AppLauncherEntrypoint.VOICE };
    tmp51 = applicationResults(importDefault(dependencyMap[32]), obj10);
    const tmp55 = importDefault(dependencyMap[32]);
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
  return tmp24(importDefault(dependencyMap[28]), obj, first);
});
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/app_launcher/native/screens/search/SearchLocalAndGlobalContentView.tsx");

export const SearchLocalAndGlobalContentView = forwardRefResult;
