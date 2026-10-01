// Module ID: 11677
// Function ID: 11678
// Name: AppLauncherViewAllScreen
// Dependencies: [19, 17, 1484, 21, 4836, 576, 11613, 1613, 10785, 11533, 6943, 5435, 1115, 5940, 4832, 1177, 11575, 11538, 11611, 11580, 11583, 11584, 11534, 8712, 2]
// Exports: default

// Module 11677 (AppLauncherViewAllScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import ArrowLargeLeftIcon2 from "ArrowLargeLeftIcon" /* 5940 */;
import AppLauncherContext from "AppLauncherContext" /* 10785 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 11533 */;
import AppLauncherBackButton from "AppLauncherBackButton" /* 11613 */;
import react from "react" /* 19 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1484 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let navigation;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let size;
let tmp;
const ApplicationCommandTypes = tmp(6943);
const View = react_native.View;
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG = AppLauncherNativeConstants.FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = { bottom: 4 };
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, list: obj4, backButton: size };
obj2 = { height: "100%", backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, flex: 1, flexDirection: "column", paddingBottom: 12 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 24, backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, paddingHorizontal: DEFAULT_CONTENT_PADDING, marginBottom: 12 };
obj4 = { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingBottom: nativeDefault.space.PX_4 };
size = { width: AppLauncherBackButton.BACK_BUTTON_SIZE, height: AppLauncherBackButton.BACK_BUTTON_SIZE, alignItems: "center", justifyContent: "center" };
let closure_10 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/app_list_view/AppLauncherViewAllScreen.tsx");

export default function AppLauncherViewAllScreen(route) {
  let bottomVisibilityInsetRef;
  let flashListRef;
  let items10;
  let paddingBottom;
  let scrollerRef;
  let sectionName;
  let sectionOverallPosition;
  let tmp23Result;
  const params = route.route.params;
  const context = params.context;
  const analyticsLocation = params.analyticsLocation;
  ({ sectionName, sectionOverallPosition } = params);
  const applications = params.applications;
  const commands = params.commands;
  const sectionDescriptors = params.sectionDescriptors;
  const title = params.title;
  const promotedApplicationIds = params.promotedApplicationIds;
  navigation = route.navigation;
  sectionName = undefined;
  closure_10 = undefined;
  let c11;
  let chatInputRef;
  let keyboardCloseReasonRef;
  let entrypoint;
  let onPress;
  let callback1;
  let callback2;
  let callback4;
  let trackAppLauncherItemImpressionOnFirstView;
  const sectionItemType = params.sectionItemType;
  if (sectionName == null) {
    sectionName = "frecency_view_all";
  }
  let tmp = closure_10();
  closure_10 = tmp;
  let tmp2 = analyticsLocation;
  let tmp3 = sectionOverallPosition;
  const sum = analyticsLocation(sectionOverallPosition[7])().bottom + sectionDescriptors;
  c11 = sum;
  let obj = context(sectionOverallPosition[8]);
  const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
  chatInputRef = requiredAppLauncherContext.chatInputRef;
  keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  entrypoint = requiredAppLauncherContext.entrypoint;
  let items = [chatInputRef, keyboardCloseReasonRef, navigation];
  onPress = applications.useCallback(() => {
    const arr = navigation;
    if (navigation.canGoBack()) {
      arr.pop();
    } else {
      keyboardCloseReasonRef.current = AppLauncherContext.AppLauncherKeyboardCloseReason.BACK;
      const current = chatInputRef.current;
      if (current != null) {
        current.closeCustomKeyboard();
      }
    }
  }, items);
  const items1 = [analyticsLocation, context, entrypoint, navigation];
  callback1 = applications.useCallback((arg0) => {
    let application;
    ({ application, sectionName } = arg0);
    let APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = analyticsLocation;
    const handleApplicationSelected = AppLauncherNativeUtils.handleApplicationSelected;
    AppLauncherNativeUtils;
    if (analyticsLocation == null) {
      APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT;
    }
    const obj = { location: APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, application, navigation, context, sectionName, entrypoint };
    const result = handleApplicationSelected(obj);
  }, items1);
  const items2 = [analyticsLocation, context, entrypoint, navigation, sectionDescriptors];
  callback2 = applications.useCallback((command, section, sectionName) => {
    let APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = analyticsLocation;
    const handleApplicationCommandSelected = AppLauncherNativeUtils.handleApplicationCommandSelected;
    AppLauncherNativeUtils;
    if (analyticsLocation == null) {
      APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT;
    }
    const obj = { location: APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, context, command, section, sectionDescriptors, query: "", navigation, sectionName, entrypoint };
    const result = handleApplicationCommandSelected(obj);
  }, items2);
  const items3 = [onPress, , , ];
  ({ backButton: arr5[1], header: arr5[2] } = tmp);
  items3[3] = title;
  const items4 = [applications, promotedApplicationIds, callback1, sectionName];
  const memo = applications.useMemo(() => {
    let ArrowLargeLeftIcon;
    let intl;
    let items;
    let obj3;
    const obj = { style: closure_10.header, children: items };
    const obj2 = { style: closure_10.backButton, accessibilityLabel: intl.string(intl2.t["13/7kX"]), accessibilityRole: "button", onPress, children: metroImportDefault(ArrowLargeLeftIcon, obj3) };
    const PressableOpacity = Pressables.PressableOpacity;
    intl = intl2.intl;
    obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
    ArrowLargeLeftIcon = ArrowLargeLeftIcon2.ArrowLargeLeftIcon;
    items = [metroImportDefault(PressableOpacity, obj2), , ];
    const obj4 = { accessibilityRole: "header", lineClamp: 1, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: title };
    items[1] = metroImportDefault(Text_Text.Text, obj4);
    const obj5 = { size: AppLauncherBackButton.BACK_BUTTON_SIZE };
    const Spacer = native.Spacer;
    items[2] = metroImportDefault(Spacer, obj5);
    return metroImportAll(View, obj);
  }, items3);
  const items5 = [chatInputRef, keyboardCloseReasonRef];
  const callback3 = applications.useCallback((item) => {
    let hasItem;
    item = item.item;
    const index = item.index;
    let obj = {
      application: item,
      onPress() {
        const obj = { application: item, sectionName };
        return callback1(obj);
      },
      isFirstRow: 0 === index,
      isLastRow: null != applications && index === applications.length - 1,
      showsPromoted: hasItem
    };
    hasItem = undefined;
    const tmp = null != applications && index === applications.length - 1;
    const obj2 = promotedApplicationIds;
    const tmp2 = promotedApplicationIds;
    const tmp3 = analyticsLocation(sectionOverallPosition[16]);
    if (promotedApplicationIds != null) {
      hasItem = obj2.has(item.id);
    }
    return tmp2(tmp3, obj, item.id);
  }, items4);
  callback4 = applications.useCallback(() => {
    const current = chatInputRef.current;
    if (current != null) {
      current.closeCustomKeyboard();
    }
    keyboardCloseReasonRef.current = AppLauncherContext.AppLauncherKeyboardCloseReason.COMMAND;
  }, items5);
  const items6 = [sectionDescriptors, context, commands.length, callback4, sectionName, callback2];
  const callback5 = applications.useCallback((item) => {
    let tmp11;
    item = item.item;
    const index = item.index;
    let found;
    const arr = sectionDescriptors;
    if (sectionDescriptors != null) {
      found = arr.find((id) => id.id === item.applicationId);
    }
    let application;
    const getAppLauncherIconSource = context(sectionOverallPosition[9]).getAppLauncherIconSource;
    context(sectionOverallPosition[9]);
    if (found != null) {
      application = found.application;
    }
    const appLauncherIconSource = getAppLauncherIconSource(application);
    if (null == found) {
      return null;
    } else {
      let tmp10 = null != appLauncherIconSource;
      if (tmp10) {
        const obj = { iconSource: appLauncherIconSource, iconSize: 36 };
        tmp10 = promotedApplicationIds(analyticsLocation(tmp3[17]), obj);
      }
      const obj2 = {
        command: item,
        onPressCommand() {
            return callback2(item, found, sectionName);
          },
        onExecuteCommand: callback4,
        isFirstRow: 0 === index,
        isLastRow: tmp11,
        context: item,
        section: found,
        location: context(sectionOverallPosition[10]).ApplicationCommandTriggerLocations.APP_LAUNCHER_FRECENTS_VIEW_ALL,
        sectionName,
        icon: tmp10
      };
      tmp11 = index === tmp7;
      const CommandRow = tmp2(tmp3[18]).CommandRow;
      return promotedApplicationIds(CommandRow, obj2);
    }
  }, items6);
  let obj2 = context(sectionOverallPosition[19]);
  const bottomSheetFlashListBottomViewabilityInset = obj2.useBottomSheetFlashListBottomViewabilityInset();
  ({ flashListRef, bottomVisibilityInsetRef } = bottomSheetFlashListBottomViewabilityInset);
  let obj3 = context(sectionOverallPosition[20]);
  trackAppLauncherItemImpressionOnFirstView = obj3.useTrackAppLauncherItemImpressionOnFirstView().trackAppLauncherItemImpressionOnFirstView;
  let obj4 = context(sectionOverallPosition[21]);
  const appLauncherFlashListProps = obj4.useAppLauncherFlashListProps();
  const items7 = [sum, tmp.list];
  const memo1 = applications.useMemo(() => {
    const obj = { paddingBottom };
    const merged = Object.assign(closure_10.list);
    return obj;
  }, items7);
  const items8 = [sectionName, sectionOverallPosition, trackAppLauncherItemImpressionOnFirstView];
  const items9 = [sectionName, sectionOverallPosition, trackAppLauncherItemImpressionOnFirstView];
  const memo2 = applications.useMemo(() => {
    let obj = {
      viewabilityConfig: FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG,
      onViewableItemsChanged(viewableItems) {
        viewableItems = viewableItems.viewableItems;
        let item = viewableItems.forEach((sectionPosition) => {
          const item = sectionPosition.item;
          const obj = { itemKey: "applicationId:" + item.id, sectionName, sectionPosition: sectionPosition.index, sectionOverallPosition, applicationId: item.id };
          closure_1_19(obj);
        });
      }
    };
    const items = [obj];
    return items;
  }, items8);
  const memo3 = applications.useMemo(() => {
    let obj = {
      viewabilityConfig: FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG,
      onViewableItemsChanged(viewableItems) {
        viewableItems = viewableItems.viewableItems;
        let item = viewableItems.forEach((sectionPosition) => {
          const item = sectionPosition.item;
          const obj = { itemKey: "commandId:" + item.id, sectionName, sectionPosition: sectionPosition.index, sectionOverallPosition, applicationId: item.applicationId, commandId: item.id };
          closure_1_19(obj);
        });
      }
    };
    const items = [obj];
    return items;
  }, items9);
  if (sectionItemType === context(sectionOverallPosition[22]).SectionItemType.APPS) {
    const obj6 = {
      preserveScrollMomentum: true,
      contentContainerStyle: memo1,
      scrollIndicatorInsets: sectionName,
      keyExtractor(id) {
          return id.id;
        },
      data: applications,
      renderItem: callback3,
      accessibilityRole: "radiogroup",
      ref: flashListRef,
      bottomViewabilityInsetRef: bottomVisibilityInsetRef,
      viewabilityConfigCallbackPairs: memo2,
      animatedOnScroll: null,
      simultaneousHandlers: null,
      animatedProps: null
    };
    const tmp20 = promotedApplicationIds;
    const tmp2Result = tmp2(tmp3[21]);
    if (entrypoint === context(tmp3[23]).AppLauncherEntrypoint.VOICE) {
      flashListRef = appLauncherFlashListProps.scrollerRef;
    }
    ({ onScroll: obj5.animatedOnScroll, gestureRef: obj5.simultaneousHandlers, animatedProps: obj5.animatedProps } = appLauncherFlashListProps);
    tmp23Result = tmp20(tmp2Result, obj6);
  } else {
    const obj10 = {
      preserveScrollMomentum: true,
      contentContainerStyle: memo1,
      scrollIndicatorInsets: sectionName,
      keyExtractor(id) {
          return id.id;
        },
      data: commands,
      renderItem: callback5,
      accessibilityRole: "radiogroup",
      ref: scrollerRef,
      bottomViewabilityInsetRef: bottomVisibilityInsetRef,
      viewabilityConfigCallbackPairs: memo3,
      animatedOnScroll: null,
      simultaneousHandlers: null,
      animatedProps: null
    };
    scrollerRef = flashListRef;
    const tmp23 = promotedApplicationIds;
    const tmp2Result2 = tmp2(tmp3[21]);
    if (entrypoint === context(tmp3[23]).AppLauncherEntrypoint.VOICE) {
      scrollerRef = appLauncherFlashListProps.scrollerRef;
    }
    ({ onScroll: obj7.animatedOnScroll, gestureRef: obj7.simultaneousHandlers, animatedProps: obj7.animatedProps } = appLauncherFlashListProps);
    tmp23Result = tmp23(tmp2Result2, obj10);
  }
  const obj11 = { style: tmp.container, children: items10 };
  items10 = [memo, tmp23Result];
  return navigation(commands, obj11);
};
