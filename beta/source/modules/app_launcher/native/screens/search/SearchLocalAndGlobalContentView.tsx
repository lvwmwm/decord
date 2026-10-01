// Module ID: 11586
// Function ID: 11587
// Name: SearchLocalAndGlobalContentView
// Dependencies: [32, 19, 17, 8591, 11550, 1484, 21, 4836, 576, 11533, 11538, 11587, 8712, 1115, 5917, 8590, 11536, 1613, 6470, 8789, 11549, 6943, 6941, 11588, 11589, 4541, 11572, 11565, 11584, 4832, 11590, 8370, 11591, 2]

// Module 11586 (SearchLocalAndGlobalContentView)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4541 */;
import TableRow2 from "TableRow" /* 5917 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 6941 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 6943 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 8591 */;
import AppLauncherTypes from "AppLauncherTypes" /* 8712 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 11533 */;
import react2 from "react" /* 11536 */;
import ApplicationDirectorySearchStore from "ApplicationDirectorySearchStore" /* 11550 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1484 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let nativeEvent, navigation, set;

let c10;
let closure_12;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let unpackModuleId;
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
  let applicationId;
  if (type.type !== obj.PLACERHOLDER) {
    if (null != type.application) {
      applicationId = type.application.id;
    }
  }
  return { applicationId };
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
  let tmpResult2;
  ({ command, application } = arg0);
  let hasOptions;
  let onPressSend;
  let tmp = hasOptions;
  ({ context, onPress, isFirstRow, isLastRow, beforeExecuteCommand, onExecuteCommand } = arg0);
  obj = hasOptions(11533);
  const appLauncherIconSource = obj.getAppLauncherIconSource(application);
  let tmp4 = null != appLauncherIconSource;
  if (tmp4) {
    const obj2 = { iconSource: appLauncherIconSource };
    tmp4 = closure_10(onPressSend(11538), obj2);
  }
  const tmpResult = tmp(11587);
  const obj3 = { command, context, beforeExecuteCommand, onExecuteCommand, sectionName: tmp(8712).AppLauncherSectionName.SEARCH };
  const commandRowSend = tmpResult.useCommandRowSend(obj3);
  hasOptions = commandRowSend.hasOptions;
  onPressSend = commandRowSend.onPressSend;
  let items = [hasOptions];
  const sending = commandRowSend.sending;
  const items1 = [onPressSend];
  const memo = react.useMemo(() => {
    let intl;
    let tmp;
    if (!hasOptions) {
      obj = { name: "send", label: intl.string(intl5.t.TXNS7S) };
      intl = intl5.intl;
      const items = [obj];
      tmp = items;
    }
    return tmp;
  }, items);
  const callback = react.useCallback((nativeEvent) => {
    if ("send" === nativeEvent.nativeEvent.actionName) {
      onPressSend();
    }
  }, items1);
  const obj4 = { icon: tmp4, label: command.displayName, subLabel: tmpResult2.getSectionName(application), subLabelLineClamp: 1, start: isFirstRow, end: isLastRow, onPress, accessibilityActions: memo, onAccessibilityAction: callback, trailing: closure_10(onPressSend(11587), { hasOptions, sending, onPressSend }) };
  const TableRow = tmp(5917).TableRow;
  tmpResult2 = tmp(8590);
  return closure_10(TableRow, obj4);
}
function PlaceholderCommandRow(isFirstRow) {
  let items;
  let items1;
  let obj4;
  let obj5;
  let obj7;
  let flag = isFirstRow.isFirstRow;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isFirstRow.isLastRow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = closure_19();
  obj = react2;
  const placeholderWidth = obj.usePlaceholderWidth(10, 50);
  const obj2 = react2;
  const placeholderWidth1 = obj2.usePlaceholderWidth(30, 90);
  const obj3 = {
    icon: authStore(View, obj4),
    label: authStore(View, obj5),
    subLabel: authStore(View, obj7),
    subLabelLineClamp: 1,
    start: flag,
    end: flag2,
    onPress() {

    }
  };
  obj4 = { style: tmp.loadingCommandAppIcon };
  const TableRow = TableRow2.TableRow;
  obj5 = { style: items };
  items = [tmp.loadingTextPlaceholder, { width: "" + placeholderWidth + "%" }];
  ({ width: "" + placeholderWidth + "%" });
  obj7 = { style: items1 };
  items1 = [tmp.loadingTextPlaceholderSmall, { width: "" + placeholderWidth1 + "%" }];
  ({ width: "" + placeholderWidth1 + "%" });
  return authStore(TableRow, obj3);
}
function keyExtractor(type, arg1) {
  let id;
  if (type.type === obj.PLACERHOLDER) {
    id = arg1.toString();
  } else {
    id = type.application.id;
  }
  return id;
}
function CommandsExpandableList(commandData) {
  commandData = commandData.commandData;
  const context = commandData.context;
  const beforeExecuteCommand = commandData.beforeExecuteCommand;
  const onPressCommand = commandData.onPressCommand;
  const onExecuteCommand = commandData.onExecuteCommand;
  const items = [beforeExecuteCommand, context, commandData, onExecuteCommand, onPressCommand];
  const expandedOverride = commandData.expanded;
  const items1 = onExecuteCommand.useMemo(() => commandData.map((item, index) => {
    let application;
    let closure_1;
    let closure_2;
    let command;
    let closure_0 = index;
    if (item === closure_1_16) {
      return (isLastRow) => {
        obj = { isFirstRow: 0 === index, isLastRow: isLastRow.isLastRow };
        return closure_3_10(PlaceholderCommandRow, obj);
      };
    } else {
      ({ command: closure_1, application: closure_2 } = item);
      return (isLastRow) => {
        obj = {
          context,
          command,
          application,
          onPress() {
            return closure_2_3(command, searchResultsPosition);
          },
          isFirstRow: 0 === searchResultsPosition,
          isLastRow: isLastRow.isLastRow,
          beforeExecuteCommand() {
            obj = { command, searchResultsPosition };
            return closure_2(obj);
          },
          onExecuteCommand
        };
        return closure_3_10(CommandRow, obj);
      };
    }
  }), items);
  return closure_10(context(beforeExecuteCommand[30]), { items: items1, expandedOverride, showsExpandCTAOverride: false });
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const getSection = ApplicationCommandIndexStore.getSection;
const FetchState = ApplicationDirectorySearchStore.FetchState;
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const useAppLauncherNavigation = AppLauncherNativeConstants.useAppLauncherNavigation;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let obj = { PLACERHOLDER: 0, [0]: "PLACERHOLDER", LOCAL_APPLICATION: 1, [1]: "LOCAL_APPLICATION", GLOBAL_APPLICATION: 2, [2]: "GLOBAL_APPLICATION" };
const placeholder = "placeholder";
const array = new Array(6);
let closure_17 = array.fill("placeholder");
const array2 = new Array(3);
let obj2 = { type: obj.PLACERHOLDER };
let closure_18 = array2.fill(obj2);
let createStyles = createStyles_mod;
let obj3 = { sectionHeader: { marginBottom: 8 }, list: obj4, loadingCommandAppIcon: size, loadingTextPlaceholder: obj5, loadingTextPlaceholderSmall: obj6, divider: obj7, commandsHeaderContainer: { justifyContent: "space-between", flexDirection: "row" }, commandsCTA: obj8, commandsCTAUnderlayColor: obj9 };
obj4 = { paddingHorizontal: DEFAULT_CONTENT_PADDING, backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
createStyles = createStyles.createStyles;
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, marginBottom: 4, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
obj7 = { marginTop: nativeDefault.space.PX_16 };
obj8 = { borderRadius: nativeDefault.radii.sm, paddingHorizontal: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_4, justifyContent: "center" };
obj9 = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_19 = createStyles(obj3);
const forwardRefResult = react.forwardRef((context, ref) => {
  let Text;
  let _undefined;
  let c0;
  let height;
  let intl3;
  let intl4;
  let items11;
  let items12;
  let list;
  let obj6;
  let query;
  let setQuery;
  let stringResult;
  let tmp15;
  let tmp19;
  context = context.context;
  const onScroll = context.onScroll;
  const entrypoint = context.entrypoint;
  query = undefined;
  setQuery = undefined;
  let loading;
  let commandResults;
  let applicationResults;
  let fetchState;
  let applicationResults2;
  let fetchNextPage;
  let callback3;
  let memo1;
  let c16;
  const onSend = context.onSend;
  let tmp = closure_19();
  _slicedToArray = tmp;
  const tmp3 = entrypoint;
  const bottom = onScroll(entrypoint[17])().bottom;
  let tmp4 = onScroll(entrypoint[18])();
  react = tmp4;
  const tmp5 = commandResults();
  navigation = tmp5;
  obj = react;
  [query, setQuery] = react.useState("");
  const imperativeHandle = react.useImperativeHandle(ref, () => ({ setQuery }));
  let id;
  const useIsActivitiesInTextEnabled = context(entrypoint[19]).useIsActivitiesInTextEnabled;
  const tmp11 = context(entrypoint[19]);
  if ("channel" === context.type) {
    id = context.channel.id;
  }
  const isActivitiesInTextEnabled = useIsActivitiesInTextEnabled(id);
  let obj2 = { context, query, commandLimit: 20, applicationLimit: 10, searchesActivities: tmp15, searchesCommands: entrypoint === tmp10(tmp3[12]).AppLauncherEntrypoint.TEXT, searchesBots: entrypoint === tmp10(tmp3[12]).AppLauncherEntrypoint.TEXT };
  const useLocalSearchResults = context(tmp3[20]).useLocalSearchResults;
  tmp15 = entrypoint === context(tmp3[12]).AppLauncherEntrypoint.VOICE || isActivitiesInTextEnabled;
  const localSearchResults = useLocalSearchResults(obj2);
  loading = localSearchResults.loading;
  commandResults = localSearchResults.commandResults;
  applicationResults = localSearchResults.applicationResults;
  const tmp10Result4 = context(tmp3[20]);
  const globalSearchResults = tmp10Result4.useGlobalSearchResults({ query, context, fetches: true, entrypoint });
  fetchState = globalSearchResults.fetchState;
  applicationResults2 = globalSearchResults.applicationResults;
  fetchNextPage = globalSearchResults.fetchNextPage;
  c0 = undefined;
  [tmp19, c0] = _slicedToArray(obj.useState(false), 2);
  let items = [query];
  _slicedToArray(obj.useState(false), 2);
  const effect = obj.useEffect(() => {
    _undefined(false);
  }, items);
  let items1 = [context, entrypoint, tmp5, query];
  const callback = obj.useCallback(() => {
    _undefined((arg0) => !arg0);
  }, []);
  let items2 = [context, query];
  const callback1 = obj.useCallback((applicationId, searchResultsPosition) => {
    let items;
    const descriptor = getSection(context, applicationId.applicationId).descriptor;
    obj = AppLauncherNativeUtils;
    const obj2 = { location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH, context, command: applicationId, section: descriptor, sectionDescriptors: items, query, navigation, sectionName: AppLauncherTypes.AppLauncherSectionName.SEARCH, searchResultsPosition, entrypoint };
    items = [descriptor];
    const result = obj.handleApplicationCommandSelected(obj2);
  }, items1);
  const items3 = [tmp5, context, query, entrypoint];
  const callback2 = obj.useCallback((command) => {
    let obj2;
    command = command.command;
    const searchResultsPosition = command.searchResultsPosition;
    const descriptor = getSection(context, command.applicationId).descriptor;
    const tmp = ApplicationCommandUtils;
    const trackCommandSelected = tmp.trackCommandSelected;
    obj = { command, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH, triggerSection: obj2.getCommandTriggerSection(descriptor), queryLength: query.length, sectionName: AppLauncherTypes.AppLauncherSectionName.SEARCH, query, searchResultsPosition };
    obj2 = ApplicationCommandUtils;
    trackCommandSelected(obj);
  }, items2);
  callback3 = obj.useCallback((arg0) => {
    let installOnDemand;
    let searchResultsPosition;
    let section;
    ({ section, installOnDemand, searchResultsPosition } = arg0);
    obj = AppLauncherNativeUtils;
    const obj2 = { location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH, application: section, navigation, context, sectionName: AppLauncherTypes.AppLauncherSectionName.SEARCH, installOnDemand, query, searchResultsPosition, entrypoint };
    const result = obj.handleApplicationSelected(obj2);
  }, items3);
  const items4 = [loading, commandResults];
  const memo = obj.useMemo(() => loading ? closure_17 : commandResults, items4);
  const items5 = [applicationResults, applicationResults2, loading, fetchState];
  const tmp10Result5 = context(tmp3[23]);
  const handleViewableItemsChanged = tmp10Result5.useTrackSearchItems(callback3, memo1, query).handleViewableItemsChanged;
  memo1 = obj.useMemo(function() {
    let items1;
    const mapped = applicationResults.map((application) => ({ type: constants.LOCAL_APPLICATION, application }));
    const self = this;
    set = new Set(applicationResults.map((id) => id.id));
    let items = applicationResults2;
    if (applicationResults2 == null) {
      items = [];
    }
    const found = items.filter((type) => {
      const tmp = type.type !== context(entrypoint[24]).ApplicationDirectorySearchResultType.CONNECTION && !set.has(type.data.id);
      return tmp;
    });
    const mapped1 = found.map((application) => ({ type: constants.GLOBAL_APPLICATION, application: application.data }));
    const tmp4 = loading;
    if (tmp4) {
      items1 = closure_18;
    } else {
      if (null != fetchState) {
        if (tmp5 !== FetchState.FETCHING) {
          items1 = [];
          HermesBuiltin.arraySpread(items1, mapped1, HermesBuiltin.arraySpread(items1, mapped, 0));
        }
      }
      const items2 = [];
      HermesBuiltin.arraySpread(items2, closure_18, HermesBuiltin.arraySpread(items2, mapped1, HermesBuiltin.arraySpread(items2, mapped, 0)));
      items1 = items2;
    }
    return items1;
  }, items5);
  const items6 = [, , , , ];
  const tmp25 = 0 === memo.length && 0 === memo1.length;
  items6[0] = query;
  items6[1] = commandResults.length;
  items6[2] = memo1.length;
  items6[3] = loading;
  items6[4] = fetchState;
  const effect1 = obj.useEffect(() => {
    if (0 !== first.length) {
      const tmp7 = loading;
      if (!tmp7) {
        if (fetchState !== FetchState.FETCHING) {
          const sum = commandResults.length + memo1.length;
          if (sum > 0) {
            const intl = intl5.intl;
            obj = { count: sum };
            const formatToPlainStringResult = intl.formatToPlainString(intl5.t.ZGVL3g, obj);
            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(formatToPlainStringResult, "polite");
          }
        }
      }
    }
  }, items6);
  const items7 = [memo1.length, callback3, tmp4];
  let sum = bottom + loading;
  c16 = sum;
  const callback4 = obj.useCallback((arg0) => {
    let index;
    let item;
    let obj3;
    ({ item, index } = arg0);
    let application;
    const type = item.type;
    if (fetchNextPage.PLACERHOLDER === type) {
      const obj2 = { isFirstRow: 0 === index, isLastRow: index === memo1.length - 1, style: obj3 };
      obj3 = { height };
      return applicationResults(onScroll(entrypoint[26]), obj2);
    } else {
      if (fetchNextPage.LOCAL_APPLICATION !== type) {
        if (fetchNextPage.GLOBAL_APPLICATION !== type) {
          return null;
        }
      }
      application = item.application;
      obj = context(entrypoint[9]);
      const appLauncherIconSource = obj.getAppLauncherIconSource(application);
      const obj4 = {
        application,
        iconSource: appLauncherIconSource,
        onPress() {
            obj = { section: application, installOnDemand: true, searchResultsPosition: index };
            return callback3(obj);
          },
        isFirstRow: 0 === index,
        isLastRow: index === memo1.length - 1
      };
      return applicationResults(context(entrypoint[27]).BaseAppRow, obj4);
    }
  }, items7);
  const tmp10Result6 = context(tmp3[28]);
  const appLauncherFlashListProps = tmp10Result6.useAppLauncherFlashListProps();
  const items8 = [fetchNextPage, onScroll, tmp4];
  const items9 = [tmp.list, sum];
  const callback5 = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    if (nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >= nativeEvent.contentSize.height - 3 * height) {
      fetchNextPage();
    }
    if (onScroll != null) {
      tmp3(nativeEvent);
    }
  }, items8);
  const items10 = [sum];
  const memo2 = obj.useMemo(() => {
    obj = { paddingBottom: _undefined };
    const merged = Object.assign(list.list);
    return obj;
  }, items9);
  const memo3 = obj.useMemo(() => ({ bottom: _undefined }), items10);
  let tmp35Result = null;
  const tmp2Result = onScroll(tmp3[28]);
  if (0 !== memo.length) {
    let obj3 = { style: tmp.commandsHeaderContainer, children: items11 };
    let obj4 = { accessibilityRole: "header", variant: "text-md/medium", color: "text-default", style: tmp.sectionHeader, children: intl4.string(tmp10(tmp3[13]).t["0hKkS+"]) };
    const Text3 = tmp10(tmp3[29]).Text;
    intl4 = tmp10(tmp3[13]).intl;
    items11 = [applicationResults(Text3, obj4), ];
    let tmp33Result = null;
    const tmp47 = navigation;
    if (memo.length > context(tmp3[30]).COLLAPSED_LIST_ITEM_MAX) {
      let string2Result;
      const obj5 = { style: tmp.commandsCTA, underlayColor: tmp.commandsCTAUnderlayColor.color, accessibilityLabel: stringResult, onPress: callback, children: applicationResults(Text, obj6) };
      const AnimatedPressableHighlight = tmp10(tmp3[31]).AnimatedPressableHighlight;
      let intl = tmp10(tmp3[13]).intl;
      const string = intl.string;
      const t = tmp10(tmp3[13]).t;
      if (tmp19) {
        stringResult = string(t.nPGLFQ);
      } else {
        stringResult = string(t.xal319);
      }
      Text = tmp10(tmp3[29]).Text;
      const intl2 = tmp10(tmp3[13]).intl;
      const string2 = intl2.string;
      const t2 = tmp10(tmp3[13]).t;
      if (tmp19) {
        string2Result = string2(t2.nPGLFQ);
      } else {
        string2Result = string2(t2.xal319);
      }
      obj6 = { color: "text-brand", variant: "text-md/semibold", children: string2Result };
      tmp33Result = tmp33(AnimatedPressableHighlight, obj5);
    }
    const obj7 = { children: items12 };
    items11[1] = tmp33Result;
    items12 = [fetchState(tmp47, obj3), ];
    const obj8 = { commandData: memo, context, beforeExecuteCommand: callback2, onPressCommand: callback1, onExecuteCommand: onSend, expanded: tmp19 };
    items12[1] = applicationResults(CommandsExpandableList, obj8);
    tmp35Result = tmp35(tmp36, obj7);
  }
  const items13 = [tmp35Result, , , ];
  let tmp33Result4 = null;
  if (memo.length > 0) {
    tmp33Result4 = null;
    if (memo1.length > 0) {
      const obj9 = { style: tmp.divider };
      tmp33Result4 = tmp33(navigation, obj9);
    }
  }
  items13[1] = tmp33Result4;
  let tmp33Result5 = null;
  if (0 !== memo1.length) {
    const obj10 = { accessibilityRole: "header", variant: "text-md/medium", color: "text-default", style: tmp.sectionHeader, children: intl3.string(context(tmp3[13]).t.PHjkRE) };
    const Text2 = tmp10(tmp3[29]).Text;
    intl3 = tmp10(tmp3[13]).intl;
    tmp33Result5 = tmp33(Text2, obj10);
  }
  items13[2] = tmp33Result5;
  let tmp33Result6 = null;
  if (tmp25) {
    const obj11 = { query, showsGenericMessage: entrypoint === context(tmp3[12]).AppLauncherEntrypoint.VOICE };
    const tmp2Result2 = onScroll(tmp3[32]);
    tmp33Result6 = tmp33(tmp2Result2, obj11);
  }
  items13[3] = tmp33Result6;
  const obj12 = { ListHeaderComponent: fetchState(applicationResults2, { children: items13 }), contentContainerStyle: memo2, scrollIndicatorInsets: memo3, renderItem: callback4, keyExtractor, data: memo1, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "always", automaticallyAdjustsScrollIndicatorInsets: false, showsVerticalScrollIndicator: false, onViewableItemsChanged: handleViewableItemsChanged, preserveScrollMomentum: true, onScroll: callback5, animatedOnScroll: appLauncherFlashListProps.onScroll, ref: appLauncherFlashListProps.scrollerRef, simultaneousHandlers: appLauncherFlashListProps.gestureRef, animatedProps: appLauncherFlashListProps.animatedProps };
  return applicationResults(tmp2Result, obj12, query);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/search/SearchLocalAndGlobalContentView.tsx");

export const SearchLocalAndGlobalContentView = forwardRefResult;
