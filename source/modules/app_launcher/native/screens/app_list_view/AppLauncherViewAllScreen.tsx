// Module ID: 11304
// Function ID: 87934
// Name: DEFAULT_CONTENT_PADDING
// Dependencies: []
// Exports: default

// Module 11304 (DEFAULT_CONTENT_PADDING)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const tmp2 = arg1(dependencyMap[2]);
const DEFAULT_CONTENT_PADDING = tmp2.DEFAULT_CONTENT_PADDING;
let closure_6 = tmp2.FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = { bottom: 4 };
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { "Bool(false)": "center", "Bool(false)": 0, "Bool(false)": 8, "Bool(false)": "absolute", "Bool(false)": "100%", backgroundColor: importDefault(dependencyMap[5]).colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj.container = obj;
const obj1 = { <string:1677984849>: 858992897, <string:1415337531>: 858993459, <string:1392708177>: -649969709, <string:2230503431>: 1795162442, <string:4217505302>: 1358955085, <string:1446667498>: 822177008, <string:2007798867>: 858993459, backgroundColor: importDefault(dependencyMap[5]).colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, paddingHorizontal: DEFAULT_CONTENT_PADDING };
obj.header = obj1;
const tmp3 = arg1(dependencyMap[3]);
obj.list = { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingBottom: importDefault(dependencyMap[5]).space.PX_4 };
const obj2 = { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingBottom: importDefault(dependencyMap[5]).space.PX_4 };
obj.backButton = { width: arg1(dependencyMap[6]).BACK_BUTTON_SIZE, height: arg1(dependencyMap[6]).BACK_BUTTON_SIZE, alignItems: "center", justifyContent: "center" };
let closure_10 = obj.createStyles(obj);
const obj3 = { width: arg1(dependencyMap[6]).BACK_BUTTON_SIZE, height: arg1(dependencyMap[6]).BACK_BUTTON_SIZE, alignItems: "center", justifyContent: "center" };
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/app_launcher/native/screens/app_list_view/AppLauncherViewAllScreen.tsx");

export default function AppLauncherViewAllScreen(route) {
  let bottomVisibilityInsetRef;
  let flashListRef;
  let sectionName;
  let sectionOverallPosition;
  const params = route.route.params;
  const context = params.context;
  const arg1 = context;
  const analyticsLocation = params.analyticsLocation;
  const importDefault = analyticsLocation;
  ({ sectionName, sectionOverallPosition } = params);
  const dependencyMap = sectionOverallPosition;
  const applications = params.applications;
  const React = applications;
  const commands = params.commands;
  const View = commands;
  const sectionDescriptors = params.sectionDescriptors;
  const DEFAULT_CONTENT_PADDING = sectionDescriptors;
  const title = params.title;
  let closure_6 = title;
  const promotedApplicationIds = params.promotedApplicationIds;
  const navigation = route.navigation;
  let closure_9;
  let callback;
  let sum;
  let chatInputRef;
  let keyboardCloseReasonRef;
  let entrypoint;
  callback = undefined;
  let callback1;
  let callback2;
  let callback4;
  let trackAppLauncherItemImpressionOnFirstView;
  let str = "frecency_view_all";
  if (null != sectionName) {
    str = sectionName;
  }
  closure_9 = str;
  const tmp = callback();
  callback = tmp;
  sum = importDefault(dependencyMap[7])().bottom + DEFAULT_CONTENT_PADDING;
  let obj = arg1(dependencyMap[8]);
  const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
  chatInputRef = requiredAppLauncherContext.chatInputRef;
  keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  entrypoint = requiredAppLauncherContext.entrypoint;
  const items = [chatInputRef, keyboardCloseReasonRef, navigation];
  callback = React.useCallback(() => {
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
  callback1 = React.useCallback((arg0) => {
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
  callback2 = React.useCallback((command, section, sectionName) => {
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
  const memo = React.useMemo(() => {
    let obj = { style: tmp.header };
    obj = { style: tmp.backButton };
    const intl = context(sectionOverallPosition[12]).intl;
    obj.accessibilityLabel = intl.string(context(sectionOverallPosition[12]).t.13/7kX);
    obj.accessibilityRole = "button";
    obj.onPress = callback;
    obj = { color: analyticsLocation(sectionOverallPosition[5]).colors.INTERACTIVE_TEXT_DEFAULT };
    obj.children = promotedApplicationIds(context(sectionOverallPosition[13]).ArrowLargeLeftIcon, obj);
    const items = [promotedApplicationIds(context(sectionOverallPosition[11]).PressableOpacity, obj), promotedApplicationIds(context(sectionOverallPosition[14]).Text, { children: title }), ];
    const obj2 = { size: context(sectionOverallPosition[6]).BACK_BUTTON_SIZE };
    items[2] = promotedApplicationIds(context(sectionOverallPosition[15]).Spacer, obj2);
    obj.children = items;
    return navigation(commands, obj);
  }, items3);
  const items5 = [chatInputRef, keyboardCloseReasonRef];
  const callback3 = React.useCallback((item) => {
    item = item.item;
    const context = item;
    const index = item.index;
    let tmp = null != applications;
    if (tmp) {
      tmp = index === applications.length - 1;
    }
    const obj = {
      application: item,
      onPress() {
        return callback({ application: item, sectionName: closure_9 });
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
  callback4 = React.useCallback(() => {
    const current = chatInputRef.current;
    if (null != current) {
      current.closeCustomKeyboard();
    }
    keyboardCloseReasonRef.current = context(sectionOverallPosition[8]).AppLauncherKeyboardCloseReason.COMMAND;
  }, items5);
  const items6 = [sectionDescriptors, context, commands.length, callback4, str, callback2];
  const callback5 = React.useCallback((item) => {
    item = item.item;
    const context = item;
    const index = item.index;
    let analyticsLocation;
    let found;
    if (null != sectionDescriptors) {
      found = sectionDescriptors.find((id) => id.id === item.applicationId);
    }
    analyticsLocation = found;
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
            return callback(item, found, closure_9);
          },
        onExecuteCommand: callback4,
        isFirstRow: 0 === index,
        isLastRow: index === tmp5,
        context,
        section: found,
        location: context(sectionOverallPosition[10]).ApplicationCommandTriggerLocations.APP_LAUNCHER_FRECENTS_VIEW_ALL,
        sectionName: str,
        icon: tmp9
      };
      return promotedApplicationIds(context(sectionOverallPosition[18]).CommandRow, obj);
    }
  }, items6);
  let obj1 = arg1(dependencyMap[19]);
  const bottomSheetFlashListBottomViewabilityInset = obj1.useBottomSheetFlashListBottomViewabilityInset();
  ({ flashListRef, bottomVisibilityInsetRef } = bottomSheetFlashListBottomViewabilityInset);
  trackAppLauncherItemImpressionOnFirstView = arg1(dependencyMap[20]).useTrackAppLauncherItemImpressionOnFirstView().trackAppLauncherItemImpressionOnFirstView;
  const obj3 = arg1(dependencyMap[20]);
  const appLauncherFlashListProps = arg1(dependencyMap[21]).useAppLauncherFlashListProps();
  const items7 = [sum, tmp.list];
  const memo1 = React.useMemo(() => {
    const obj = {};
    const merged = Object.assign(tmp.list);
    obj["paddingBottom"] = sum;
    return obj;
  }, items7);
  const items8 = [str, sectionOverallPosition, trackAppLauncherItemImpressionOnFirstView];
  const items9 = [str, sectionOverallPosition, trackAppLauncherItemImpressionOnFirstView];
  const memo2 = React.useMemo(() => {
    const items = [
      {
        viewabilityConfig: title,
        onViewableItemsChanged(viewableItems) {
          viewableItems = viewableItems.viewableItems;
          const item = viewableItems.forEach((item) => {
            item = item.item;
            callback({ itemKey: "applicationId:" + item.id, sectionName: closure_9, sectionPosition: item.index, sectionOverallPosition: closure_2, applicationId: item.id });
          });
        }
      }
    ];
    return items;
  }, items8);
  const memo3 = React.useMemo(() => {
    const items = [
      {
        viewabilityConfig: title,
        onViewableItemsChanged(viewableItems) {
          viewableItems = viewableItems.viewableItems;
          const item = viewableItems.forEach((item) => {
            item = item.item;
            callback({ itemKey: "commandId:" + item.id, sectionName: closure_9, sectionPosition: item.index, sectionOverallPosition: closure_2, applicationId: item.applicationId, commandId: item.id });
          });
        }
      }
    ];
    return items;
  }, items9);
  if (params.sectionItemType === arg1(dependencyMap[22]).SectionItemType.APPS) {
    obj = {
      preserveScrollMomentum: true,
      contentContainerStyle: memo1,
      scrollIndicatorInsets: closure_9,
      keyExtractor(id) {
          return id.id;
        },
      data: applications,
      renderItem: callback3,
      accessibilityRole: "radiogroup"
    };
    if (entrypoint === arg1(dependencyMap[23]).AppLauncherEntrypoint.VOICE) {
      flashListRef = appLauncherFlashListProps.scrollerRef;
    }
    obj.ref = flashListRef;
    obj.bottomViewabilityInsetRef = bottomVisibilityInsetRef;
    obj.viewabilityConfigCallbackPairs = memo2;
    ({ onScroll: obj5.animatedOnScroll, gestureRef: obj5.simultaneousHandlers, animatedProps: obj5.animatedProps } = appLauncherFlashListProps);
    let tmp23Result = promotedApplicationIds(importDefault(dependencyMap[21]), obj);
    const tmp17 = promotedApplicationIds;
    const tmp20 = importDefault(dependencyMap[21]);
  } else {
    obj = {
      preserveScrollMomentum: true,
      contentContainerStyle: memo1,
      scrollIndicatorInsets: closure_9,
      keyExtractor(id) {
          return id.id;
        },
      data: commands,
      renderItem: callback5,
      accessibilityRole: "radiogroup"
    };
    let scrollerRef = flashListRef;
    if (entrypoint === arg1(dependencyMap[23]).AppLauncherEntrypoint.VOICE) {
      scrollerRef = appLauncherFlashListProps.scrollerRef;
    }
    obj.ref = scrollerRef;
    obj.bottomViewabilityInsetRef = bottomVisibilityInsetRef;
    obj.viewabilityConfigCallbackPairs = memo3;
    ({ onScroll: obj7.animatedOnScroll, gestureRef: obj7.simultaneousHandlers, animatedProps: obj7.animatedProps } = appLauncherFlashListProps);
    tmp23Result = promotedApplicationIds(importDefault(dependencyMap[21]), obj);
    const tmp23 = promotedApplicationIds;
    const tmp26 = importDefault(dependencyMap[21]);
  }
  obj1 = { style: tmp.container, children: items10 };
  const items10 = [memo, tmp23Result];
  return navigation(View, obj1);
};
