// Module ID: 11315
// Function ID: 88009
// Name: DEFAULT_CONTENT_PADDING
// Dependencies: [31, 27, 1455, 33, 4130, 689, 11251, 1557, 10884, 11171, 6755, 4660, 1212, 5091, 4126, 1273, 11212, 11176, 11249, 11217, 11220, 11221, 11172, 8182, 2]
// Exports: default

// Module 11315 (DEFAULT_CONTENT_PADDING)
import result from "result";
import { View } from "get ActivityIndicator";
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
const DEFAULT_CONTENT_PADDING = APP_LAUNCHER_BUILT_IN_SECTION_ICON.DEFAULT_CONTENT_PADDING;
let closure_6 = APP_LAUNCHER_BUILT_IN_SECTION_ICON.FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = { bottom: 4 };
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, flex: 1, flexDirection: "column", paddingBottom: 12 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 24, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, paddingHorizontal: DEFAULT_CONTENT_PADDING, marginBottom: 12 };
_createForOfIteratorHelperLoose.header = obj1;
_createForOfIteratorHelperLoose.list = { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj2 = { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.backButton = { width: require("AppLauncherBackButton").BACK_BUTTON_SIZE, height: require("AppLauncherBackButton").BACK_BUTTON_SIZE, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { width: require("AppLauncherBackButton").BACK_BUTTON_SIZE, height: require("AppLauncherBackButton").BACK_BUTTON_SIZE, alignItems: "center", justifyContent: "center" };
let result = require("APP_LAUNCHER_BUILT_IN_SECTION_ICON").fileFinishedImporting("modules/app_launcher/native/screens/app_list_view/AppLauncherViewAllScreen.tsx");

export default function AppLauncherViewAllScreen(route) {
  let bottomVisibilityInsetRef;
  let flashListRef;
  let sectionName;
  let sectionOverallPosition;
  const params = route.route.params;
  const context = params.context;
  const analyticsLocation = params.analyticsLocation;
  ({ sectionName, sectionOverallPosition } = params);
  const applications = params.applications;
  const commands = params.commands;
  const sectionDescriptors = params.sectionDescriptors;
  const title = params.title;
  const promotedApplicationIds = params.promotedApplicationIds;
  const navigation = route.navigation;
  let str;
  let _createForOfIteratorHelperLoose;
  let c11;
  let chatInputRef;
  let keyboardCloseReasonRef;
  let entrypoint;
  let callback;
  let callback1;
  let callback2;
  let callback4;
  let trackAppLauncherItemImpressionOnFirstView;
  str = "frecency_view_all";
  if (null != sectionName) {
    str = sectionName;
  }
  let tmp = _createForOfIteratorHelperLoose();
  _createForOfIteratorHelperLoose = tmp;
  const sum = analyticsLocation(sectionOverallPosition[7])().bottom + sectionDescriptors;
  c11 = sum;
  let obj = context(sectionOverallPosition[8]);
  const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
  chatInputRef = requiredAppLauncherContext.chatInputRef;
  keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  entrypoint = requiredAppLauncherContext.entrypoint;
  let items = [chatInputRef, keyboardCloseReasonRef, navigation];
  callback = applications.useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.pop();
    } else {
      keyboardCloseReasonRef.current = context(sectionOverallPosition[8]).AppLauncherKeyboardCloseReason.BACK;
      const current = chatInputRef.current;
      if (null != current) {
        current.closeCustomKeyboard();
      }
    }
  }, items);
  const items1 = [analyticsLocation, context, entrypoint, navigation];
  callback1 = applications.useCallback((arg0) => {
    let application;
    let sectionName;
    ({ application, sectionName } = arg0);
    let obj = context(sectionOverallPosition[9]);
    obj = {};
    if (null != analyticsLocation) {
      let APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = analyticsLocation;
    } else {
      APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = context(sectionOverallPosition[10]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT;
    }
    obj.location = APP_LAUNCHER_APPLICATION_VIEW_FRECENCT;
    obj.application = application;
    obj.navigation = navigation;
    obj.context = context;
    obj.sectionName = sectionName;
    obj.entrypoint = entrypoint;
    const result = obj.handleApplicationSelected(obj);
  }, items1);
  const items2 = [analyticsLocation, context, entrypoint, navigation, sectionDescriptors];
  callback2 = applications.useCallback((command, section, sectionName) => {
    let obj = context(sectionOverallPosition[9]);
    obj = {};
    if (null != analyticsLocation) {
      let APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = analyticsLocation;
    } else {
      APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = context(sectionOverallPosition[10]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT;
    }
    obj.location = APP_LAUNCHER_APPLICATION_VIEW_FRECENCT;
    obj.context = context;
    obj.command = command;
    obj.section = section;
    obj.sectionDescriptors = sectionDescriptors;
    obj.query = "";
    obj.navigation = navigation;
    obj.sectionName = sectionName;
    obj.entrypoint = entrypoint;
    const result = obj.handleApplicationCommandSelected(obj);
  }, items2);
  const items3 = [callback, , , ];
  ({ backButton: arr5[1], header: arr5[2] } = tmp);
  items3[3] = title;
  const items4 = [applications, promotedApplicationIds, callback1, str];
  const memo = applications.useMemo(() => {
    let obj = { style: _undefined.header };
    obj = { style: _undefined.backButton };
    const intl = context(sectionOverallPosition[12]).intl;
    obj.accessibilityLabel = intl.string(context(sectionOverallPosition[12]).t["13/7kX"]);
    obj.accessibilityRole = "button";
    obj.onPress = callback;
    obj = { color: analyticsLocation(sectionOverallPosition[5]).colors.INTERACTIVE_TEXT_DEFAULT };
    obj.children = promotedApplicationIds(context(sectionOverallPosition[13]).ArrowLargeLeftIcon, obj);
    const items = [promotedApplicationIds(context(sectionOverallPosition[11]).PressableOpacity, obj), , ];
    const obj1 = { lineClamp: 1, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: title };
    items[1] = promotedApplicationIds(context(sectionOverallPosition[14]).Text, obj1);
    const obj2 = { size: context(sectionOverallPosition[6]).BACK_BUTTON_SIZE };
    items[2] = promotedApplicationIds(context(sectionOverallPosition[15]).Spacer, obj2);
    obj.children = items;
    return navigation(commands, obj);
  }, items3);
  const items5 = [chatInputRef, keyboardCloseReasonRef];
  const callback3 = applications.useCallback((item) => {
    item = item.item;
    const index = item.index;
    let tmp = null != applications;
    if (tmp) {
      tmp = index === applications.length - 1;
    }
    const obj = {
      application: item,
      onPress() {
        return outer1_16({ application: item, sectionName: outer1_9 });
      },
      isFirstRow: 0 === index,
      isLastRow: tmp
    };
    let hasItem;
    if (null != promotedApplicationIds) {
      hasItem = promotedApplicationIds.has(item.id);
    }
    obj.showsPromoted = hasItem;
    return promotedApplicationIds(analyticsLocation(sectionOverallPosition[16]), obj, item.id);
  }, items4);
  callback4 = applications.useCallback(() => {
    const current = chatInputRef.current;
    if (null != current) {
      current.closeCustomKeyboard();
    }
    keyboardCloseReasonRef.current = context(sectionOverallPosition[8]).AppLauncherKeyboardCloseReason.COMMAND;
  }, items5);
  const items6 = [sectionDescriptors, context, commands.length, callback4, str, callback2];
  const callback5 = applications.useCallback((item) => {
    item = item.item;
    const index = item.index;
    let found;
    found = undefined;
    if (null != sectionDescriptors) {
      found = sectionDescriptors.find((id) => id.id === item.applicationId);
    }
    let obj = context(sectionOverallPosition[9]);
    let application;
    if (null != found) {
      application = found.application;
    }
    const appLauncherIconSource = obj.getAppLauncherIconSource(application);
    if (null == found) {
      return null;
    } else {
      let tmp9 = null != appLauncherIconSource;
      if (tmp9) {
        obj = { iconSource: appLauncherIconSource, iconSize: 36 };
        tmp9 = promotedApplicationIds(analyticsLocation(sectionOverallPosition[17]), obj);
      }
      obj = {
        command: item,
        onPressCommand() {
            return outer1_17(item, found, outer1_9);
          },
        onExecuteCommand: callback4,
        isFirstRow: 0 === index,
        isLastRow: index === tmp5,
        context: item,
        section: found,
        location: context(sectionOverallPosition[10]).ApplicationCommandTriggerLocations.APP_LAUNCHER_FRECENTS_VIEW_ALL,
        sectionName: str,
        icon: tmp9
      };
      return promotedApplicationIds(context(sectionOverallPosition[18]).CommandRow, obj);
    }
  }, items6);
  let obj1 = context(sectionOverallPosition[19]);
  const bottomSheetFlashListBottomViewabilityInset = obj1.useBottomSheetFlashListBottomViewabilityInset();
  ({ flashListRef, bottomVisibilityInsetRef } = bottomSheetFlashListBottomViewabilityInset);
  trackAppLauncherItemImpressionOnFirstView = context(sectionOverallPosition[20]).useTrackAppLauncherItemImpressionOnFirstView().trackAppLauncherItemImpressionOnFirstView;
  const obj3 = context(sectionOverallPosition[20]);
  const appLauncherFlashListProps = context(sectionOverallPosition[21]).useAppLauncherFlashListProps();
  const items7 = [sum, tmp.list];
  const memo1 = applications.useMemo(() => {
    const obj = {};
    const merged = Object.assign(_undefined.list);
    obj["paddingBottom"] = c11;
    return obj;
  }, items7);
  const items8 = [str, sectionOverallPosition, trackAppLauncherItemImpressionOnFirstView];
  const items9 = [str, sectionOverallPosition, trackAppLauncherItemImpressionOnFirstView];
  const memo2 = applications.useMemo(() => {
    const items = [
      {
        viewabilityConfig: title,
        onViewableItemsChanged(viewableItems) {
          viewableItems = viewableItems.viewableItems;
          let item = viewableItems.forEach((item) => {
            item = item.item;
            outer2_19({ itemKey: "applicationId:" + item.id, sectionName: outer2_9, sectionPosition: item.index, sectionOverallPosition: outer2_2, applicationId: item.id });
          });
        }
      }
    ];
    return items;
  }, items8);
  const memo3 = applications.useMemo(() => {
    const items = [
      {
        viewabilityConfig: title,
        onViewableItemsChanged(viewableItems) {
          viewableItems = viewableItems.viewableItems;
          let item = viewableItems.forEach((item) => {
            item = item.item;
            outer2_19({ itemKey: "commandId:" + item.id, sectionName: outer2_9, sectionPosition: item.index, sectionOverallPosition: outer2_2, applicationId: item.applicationId, commandId: item.id });
          });
        }
      }
    ];
    return items;
  }, items9);
  if (params.sectionItemType === context(sectionOverallPosition[22]).SectionItemType.APPS) {
    obj = {
      preserveScrollMomentum: true,
      contentContainerStyle: memo1,
      scrollIndicatorInsets: str,
      keyExtractor(id) {
          return id.id;
        },
      data: applications,
      renderItem: callback3,
      accessibilityRole: "radiogroup"
    };
    if (entrypoint === context(sectionOverallPosition[23]).AppLauncherEntrypoint.VOICE) {
      flashListRef = appLauncherFlashListProps.scrollerRef;
    }
    obj.ref = flashListRef;
    obj.bottomViewabilityInsetRef = bottomVisibilityInsetRef;
    obj.viewabilityConfigCallbackPairs = memo2;
    ({ onScroll: obj5.animatedOnScroll, gestureRef: obj5.simultaneousHandlers, animatedProps: obj5.animatedProps } = appLauncherFlashListProps);
    let tmp23Result = promotedApplicationIds(analyticsLocation(sectionOverallPosition[21]), obj);
    const tmp17 = promotedApplicationIds;
    const tmp20 = analyticsLocation(sectionOverallPosition[21]);
  } else {
    obj = {
      preserveScrollMomentum: true,
      contentContainerStyle: memo1,
      scrollIndicatorInsets: str,
      keyExtractor(id) {
          return id.id;
        },
      data: commands,
      renderItem: callback5,
      accessibilityRole: "radiogroup"
    };
    let scrollerRef = flashListRef;
    if (entrypoint === context(sectionOverallPosition[23]).AppLauncherEntrypoint.VOICE) {
      scrollerRef = appLauncherFlashListProps.scrollerRef;
    }
    obj.ref = scrollerRef;
    obj.bottomViewabilityInsetRef = bottomVisibilityInsetRef;
    obj.viewabilityConfigCallbackPairs = memo3;
    ({ onScroll: obj7.animatedOnScroll, gestureRef: obj7.simultaneousHandlers, animatedProps: obj7.animatedProps } = appLauncherFlashListProps);
    tmp23Result = promotedApplicationIds(analyticsLocation(sectionOverallPosition[21]), obj);
    const tmp23 = promotedApplicationIds;
    const tmp26 = analyticsLocation(sectionOverallPosition[21]);
  }
  obj1 = { style: tmp.container, children: items10 };
  items10 = [memo, tmp23Result];
  return navigation(commands, obj1);
};
