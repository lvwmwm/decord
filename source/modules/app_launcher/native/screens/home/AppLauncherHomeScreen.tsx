// Module ID: 11185
// Function ID: 87078
// Name: AppRowLabel
// Dependencies: []
// Exports: default

// Module 11185 (AppRowLabel)
function AppRowLabel(renderedName) {
  renderedName = renderedName.renderedName;
  const tmp = callback4();
  if (renderedName.showsPromoted) {
    let obj = { style: tmp.appRowLabelWithPromotedContainer };
    obj = { style: tmp.appRowLabelWithPromotedTextContainer, children: renderedName };
    const items = [callback2(arg1(dependencyMap[16]).Text, obj), ];
    const obj1 = { style: tmp.promotedLabel };
    const obj2 = {};
    const intl = arg1(dependencyMap[17]).intl;
    obj2.children = intl.string(arg1(dependencyMap[17]).t./eVltv);
    obj1.children = callback2(arg1(dependencyMap[16]).Text, obj2);
    items[1] = callback2(View, obj1);
    obj.children = items;
    let tmp5 = callback3(View, obj);
  } else {
    obj = { children: renderedName };
    tmp5 = callback2(arg1(dependencyMap[16]).Text, obj);
  }
  return tmp5;
}
class BaseAppRow {
  constructor(arg0) {
    application = global.application;
    arg1 = application;
    ({ iconSource, isFirstRow } = global);
    if (isFirstRow === undefined) {
      isFirstRow = false;
    }
    flag = global.isLastRow;
    if (flag === undefined) {
      flag = false;
    }
    flag2 = global.showsPromoted;
    if (flag2 === undefined) {
      flag2 = false;
    }
    tmp = null != iconSource;
    if (tmp) {
      tmp2 = jsx;
      tmp3 = importDefault;
      tmp4 = dependencyMap;
      num = 18;
      obj = {};
      obj.iconSource = iconSource;
      tmp = jsx(importDefault(dependencyMap[18]), obj);
    }
    obj2 = arg1(dependencyMap[19]);
    FAKE_BUILT_IN_APP = application;
    if (null == application) {
      tmp5 = arg1;
      tmp6 = dependencyMap;
      FAKE_BUILT_IN_APP = arg1(dependencyMap[19]).FAKE_BUILT_IN_APP;
    }
    sectionName = obj2.getSectionName(FAKE_BUILT_IN_APP);
    if (!flag2) {
      tmp8 = arg1;
      tmp9 = dependencyMap;
      obj3 = arg1(dependencyMap[19]);
      FAKE_BUILT_IN_APP2 = application;
      if (null == application) {
        tmp10 = arg1;
        tmp11 = dependencyMap;
        FAKE_BUILT_IN_APP2 = arg1(dependencyMap[19]).FAKE_BUILT_IN_APP;
      }
      flag2 = obj3.isPromotedApplication(FAKE_BUILT_IN_APP2);
    }
    items = [];
    items[0] = application;
    memo = closure_5.useMemo(() => {
      let obj = application(closure_3[19]);
      if (null != application) {
        let FAKE_BUILT_IN_APP = application;
      } else {
        FAKE_BUILT_IN_APP = application(closure_3[19]).FAKE_BUILT_IN_APP;
      }
      const sectionDescription = obj.getSectionDescription(FAKE_BUILT_IN_APP);
      let result = null;
      if (null != sectionDescription) {
        result = null;
        if ("" !== sectionDescription) {
          obj = { content: sectionDescription, muted: false, layout: application(closure_3[21]).ChannelListLayoutTypes.COMPACT, color: "text-muted" };
          result = application(closure_3[20]).renderMessagePreviewMarkup(obj);
          const obj2 = application(closure_3[20]);
        }
      }
      return result;
    }, items);
    obj = {};
    obj.icon = tmp;
    obj1 = { renderedName: sectionName };
    obj1.showsPromoted = flag2;
    obj.label = jsx(AppRowLabel, obj1);
    obj.labelLineClamp = 1;
    obj.subLabel = memo;
    obj.subLabelLineClamp = 1;
    obj.start = isFirstRow;
    obj.end = flag;
    obj.arrow = true;
    obj.onPress = global.onPress;
    return jsx(arg1(dependencyMap[22]).TableRow, obj);
  }
}
function AppRow(isLastRow) {
  let isFirstRow;
  let section;
  ({ section, isFirstRow } = isLastRow);
  if (isFirstRow === undefined) {
    isFirstRow = false;
  }
  let flag = isLastRow.isLastRow;
  if (flag === undefined) {
    flag = false;
  }
  let obj = arg1(dependencyMap[23]);
  obj = { application: section.application, iconSource: obj.getAppLauncherIconSource(section.application), onPress: isLastRow.onPress, isFirstRow, isLastRow: flag };
  return callback2(BaseAppRow, obj);
}
function ActivityRow(section) {
  section = section.section;
  const arg1 = section;
  const onPress = section.onPress;
  const importDefault = onPress;
  let flag = section.isFirstRow;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = section.isLastRow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj = importDefault(dependencyMap[24]);
  obj = { id: section.application.id, icon: section.application.icon };
  const application = section.application;
  let bot;
  if (null != application) {
    bot = application.bot;
  }
  obj.bot = bot;
  obj.botIconFirst = true;
  const applicationIconSource = obj.getApplicationIconSource(obj);
  let tmp3 = null != applicationIconSource;
  if (tmp3) {
    obj = { iconSource: applicationIconSource };
    tmp3 = callback2(importDefault(dependencyMap[18]), obj);
  }
  const items = [section];
  const items1 = [section, onPress];
  const memo = React.useMemo(() => {
    const description = section.application.description;
    let result = null;
    if (null != description) {
      result = null;
      if ("" !== description) {
        let obj = section(closure_3[20]);
        obj = { content: description, muted: false, layout: section(closure_3[21]).ChannelListLayoutTypes.COMPACT, color: "text-muted" };
        result = obj.renderMessagePreviewMarkup(obj);
      }
    }
    return result;
  }, items);
  const callback = React.useCallback(() => {
    onPress(section);
  }, items1);
  const obj1 = { icon: tmp3, label: section.application.name, subLabel: memo, subLabelLineClamp: 1, start: flag, end: flag2, arrow: true, onPress: callback };
  return callback2(arg1(dependencyMap[22]).TableRow, obj1);
}
function ActivityItemTuple(arg0) {
  let containerWidth;
  let context;
  let entrypoint;
  let isLastTuple;
  let onActivityItemSelected;
  let onPress;
  let sectionName;
  let shelfItem1;
  let shelfItem2;
  let usesHandleActivityItemSelected;
  ({ context, sectionName, onPress, usesHandleActivityItemSelected, onActivityItemSelected, shelfItem2, entrypoint, containerWidth } = arg0);
  const arg1 = containerWidth;
  ({ shelfItem1, isLastTuple } = arg0);
  const tmp = callback4();
  const items = [containerWidth];
  const size = React.useMemo(() => {
    if (null == containerWidth) {
      let obj = { width: undefined, height: undefined };
      return obj;
    } else {
      const tmp5 = callback(closure_3[25])(containerWidth / 2 - closure_14 - 6);
      obj = { width: tmp5, height: callback(closure_3[25])(tmp5 / closure_22) };
      return obj;
    }
  }, items);
  let obj = {};
  const items1 = [tmp.activityItemTupleContainer, ];
  obj = { marginBottom: 12 };
  items1[1] = obj;
  obj.style = items1;
  obj = { style: tmp.activityItemTupleShelfItemContainer, children: callback2(ActivityItem, obj1) };
  const items2 = [callback2(View, obj), ];
  let tmp4 = null != shelfItem2;
  if (tmp4) {
    const obj2 = { style: tmp.activityItemTupleShelfItemContainer };
    const obj3 = { context, sectionName, onPress, usesHandleActivityItemSelected, onActivityItemSelected, shelfItem: shelfItem2, entrypoint };
    ({ width: obj6.imageWidth, height: obj6.imageHeight } = size);
    obj2.children = callback2(ActivityItem, obj3);
    tmp4 = callback2(View, obj2);
  }
  items2[1] = tmp4;
  obj.children = items2;
  return closure_20(View, obj);
}
function ActivityItem(context) {
  let entrypoint;
  let imageHeight;
  let imageWidth;
  let onActivityItemSelected;
  context = context.context;
  const arg1 = context;
  const shelfItem = context.shelfItem;
  const importDefault = shelfItem;
  const onPress = context.onPress;
  const importAll = onPress;
  let flag = context.usesHandleActivityItemSelected;
  if (flag === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  ({ imageWidth, imageHeight } = context);
  let callback;
  let React;
  ({ onActivityItemSelected, entrypoint } = context);
  const tmp = callback4();
  let obj = arg1(dependencyMap[26]);
  const heroMediaDimensions = obj.useHeroMediaDimensions();
  const tmp3 = callback(React.useState(false), 2);
  callback = tmp3[1];
  obj = { applicationId: shelfItem.application.id };
  let width = imageWidth;
  if (null == imageWidth) {
    width = heroMediaDimensions.width;
  }
  obj.size = width;
  obj.names = ["PREMIUM_STANDARD"];
  const tmp4Result = importDefault(dependencyMap[27])(obj);
  const id = React.useId();
  let obj2 = arg1(dependencyMap[28]);
  const items = [closure_7];
  const tmp7 = callback(obj2.useStateFromStoresArray(items, () => {
    const items = [closure_7.isLaunchingActivity(), ];
    let id;
    if ("channel" === context.type) {
      id = context.channel.id;
    }
    items[1] = closure_7.getLaunchState(shelfItem.application.id, id);
    return items;
  }), 2);
  let isLaunching = null != tmp8;
  if (isLaunching) {
    isLaunching = tmp8.isLaunching;
  }
  if (isLaunching) {
    isLaunching = tmp8.componentId === id;
  }
  let obj3 = arg1(dependencyMap[19]);
  const shelfBadgeTypeIfActive = obj3.getShelfBadgeTypeIfActive(shelfItem.application);
  let obj4 = arg1(dependencyMap[23]);
  obj = { applicationId: shelfItem.application.id, context, sectionName: context.sectionName, onActivityItemSelected, location: arg1(dependencyMap[29]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, entrypoint, launchingComponentId: id, fetchesApplication: false };
  const handleActivityItemSelected = obj4.useHandleActivityItemSelected(obj).handleActivityItemSelected;
  React = handleActivityItemSelected;
  const items1 = [handleActivityItemSelected, onPress, shelfItem, flag];
  let first = "not-found" === tmp4Result.state;
  callback = React.useCallback(() => {
    if (flag) {
      handleActivityItemSelected();
    }
    onPress(shelfItem);
  }, items1);
  if (!first) {
    first = tmp3[0];
  }
  if (first) {
    let tmp13 = callback2(importDefault(dependencyMap[30]), {});
  } else {
    tmp13 = null;
    if (!tmp12) {
      const obj1 = {
        onError() {
              return callback(true);
            },
        style: tmp.activityItemImage
      };
      obj2 = { uri: tmp4Result.url };
      obj1.source = obj2;
      obj1.resizeMode = "cover";
      tmp13 = callback2(importDefault(dependencyMap[31]), obj1);
    }
  }
  obj3 = { style: tmp.activityItemContainer, disabled: tmp7[0], onPress: callback };
  obj4 = {};
  const items2 = [tmp.activityImageContainer, ];
  let tmp23 = null != imageWidth;
  if (tmp23) {
    tmp23 = null != imageHeight;
  }
  if (tmp23) {
    const obj5 = { width: imageWidth, height: imageHeight };
    tmp23 = obj5;
  }
  items2[1] = tmp23;
  obj4.style = items2;
  const items3 = [tmp13, callback2(importDefault(dependencyMap[33]), { labelType: shelfBadgeTypeIfActive }), ];
  const obj6 = { submitting: isLaunching, style: tmp.submittingOverlay };
  items3[2] = callback2(arg1(dependencyMap[34]).SubmittingOverlay, obj6);
  obj4.children = items3;
  const items4 = [closure_20(View, obj4), ];
  const tmp12 = "loading" === tmp4Result.state || null == tmp4Result.url;
  const tmp20 = closure_20;
  const tmp21 = closure_20;
  const tmp22 = View;
  const tmp4 = importDefault(dependencyMap[27]);
  const obj8 = { INTEGRATION_CREATE: "disclaimer_text_localized", ConstraintReasonCode: "message", children: shelfItem.application.name };
  items4[1] = callback2(View, { style: tmp.activityDetailsContainer, children: callback2(arg1(dependencyMap[16]).Text, obj8) });
  obj3.children = items4;
  return tmp20(arg1(dependencyMap[32]).PressableScale, obj3);
}
function RecommendationItemTuple(arg0) {
  let containerWidth;
  let context;
  let entrypoint;
  let isLastTuple;
  let item1;
  let item2;
  let onPress;
  let sectionName;
  ({ context, sectionName, onPress, item2, entrypoint, containerWidth } = arg0);
  const arg1 = containerWidth;
  ({ item1, isLastTuple } = arg0);
  const tmp = callback4();
  const items = [containerWidth];
  const size = React.useMemo(() => {
    if (null == containerWidth) {
      let obj = { width: undefined, height: undefined };
      return obj;
    } else {
      const tmp5 = callback(closure_3[25])(containerWidth / 2 - closure_14 - 6);
      obj = { width: tmp5, height: callback(closure_3[25])(tmp5 / closure_22) };
      return obj;
    }
  }, items);
  let obj = {};
  const items1 = [tmp.activityItemTupleContainer, ];
  obj = { marginBottom: 12 };
  items1[1] = obj;
  obj.style = items1;
  obj = { style: tmp.activityItemTupleShelfItemContainer, children: callback2(RecommendationItem, obj1) };
  const items2 = [callback2(View, obj), ];
  let tmp4 = null != item2;
  if (tmp4) {
    const obj2 = { style: tmp.activityItemTupleShelfItemContainer };
    const obj3 = { context, sectionName, onPress, item: item2, entrypoint };
    ({ width: obj6.imageWidth, height: obj6.imageHeight } = size);
    obj2.children = callback2(RecommendationItem, obj3);
    tmp4 = callback2(View, obj2);
  }
  items2[1] = tmp4;
  obj.children = items2;
  return closure_20(View, obj);
}
function RecommendationItem(onPress) {
  let context;
  let entrypoint;
  let imageHeight;
  let imageWidth;
  let item;
  let sectionName;
  ({ item, sectionName } = onPress);
  const arg1 = sectionName;
  onPress = onPress.onPress;
  const importDefault = onPress;
  ({ imageWidth, imageHeight, context, entrypoint } = onPress);
  const tmp = callback4();
  let obj = arg1(dependencyMap[26]);
  const heroMediaDimensions = obj.useHeroMediaDimensions();
  const tmp3 = callback(React.useState(false), 2);
  let closure_2 = tmp3[1];
  const application = item.application;
  const dependencyMap = application;
  let obj1 = arg1(dependencyMap[19]);
  let isEmbeddedAppResult = obj1.isEmbeddedApp(application);
  obj = { applicationId: application.id };
  let width = imageWidth;
  if (null == imageWidth) {
    width = heroMediaDimensions.width;
  }
  obj.size = width;
  obj.names = ["PREMIUM_STANDARD"];
  let tmp5Result = importDefault(dependencyMap[27])(obj);
  if (null != item.overrideImageUrl) {
    obj = { state: "loaded", url: item.overrideImageUrl };
    tmp5Result = obj;
  }
  const items = [onPress, application, sectionName];
  let first = "not-found" === tmp5Result.state;
  const callback = React.useCallback(() => {
    onPress(application, sectionName);
  }, items);
  if (!first) {
    first = tmp3[0];
  }
  if (first) {
    let tmp10 = callback2(importDefault(dependencyMap[30]), {});
  } else {
    tmp10 = null;
    if (!tmp9) {
      obj1 = {
        onError() {
              return callback(true);
            },
        style: tmp.activityItemImage
      };
      const obj2 = { uri: tmp5Result.url };
      obj1.source = obj2;
      obj1.resizeMode = "cover";
      tmp10 = callback2(importDefault(dependencyMap[31]), obj1);
    }
  }
  const obj3 = { style: tmp.activityItemContainer, onPress: callback };
  const obj4 = {};
  const items1 = [tmp.activityImageContainer, ];
  let tmp20 = null != imageWidth;
  if (tmp20) {
    tmp20 = null != imageHeight;
  }
  if (tmp20) {
    const obj5 = { width: imageWidth, height: imageHeight };
    tmp20 = obj5;
  }
  items1[1] = tmp20;
  obj4.style = items1;
  const items2 = [tmp10, ];
  if (isEmbeddedAppResult) {
    const obj6 = {};
    const tmp24 = importDefault(dependencyMap[33]);
    obj6.labelType = arg1(dependencyMap[19]).getShelfBadgeTypeIfActive(application);
    isEmbeddedAppResult = callback2(tmp24, obj6);
    const obj11 = arg1(dependencyMap[19]);
  }
  items2[1] = isEmbeddedAppResult;
  obj4.children = items2;
  const items3 = [closure_20(View, obj4), ];
  const tmp17 = closure_20;
  const tmp18 = closure_20;
  const tmp19 = View;
  const tmp5 = importDefault(dependencyMap[27]);
  const tmp9 = "loading" === tmp5Result.state || null == tmp5Result.url;
  const obj8 = { INTEGRATION_CREATE: "disclaimer_text_localized", ConstraintReasonCode: "message", children: application.name };
  items3[1] = callback2(View, { style: tmp.activityDetailsContainer, children: callback2(arg1(dependencyMap[16]).Text, obj8) });
  obj3.children = items3;
  return tmp17(arg1(dependencyMap[32]).PressableScale, obj3);
}
function Divider() {
  const rect = importDefault(dependencyMap[35])();
  const style = [callback4().divider, { marginLeft: -DEFAULT_CONTENT_PADDING - rect.left, marginRight: -DEFAULT_CONTENT_PADDING - rect.right }];
  return callback2(View, { style });
}
function RecommendationSectionHeader(arg0) {
  let children;
  let index;
  ({ index, children } = arg0);
  let obj = {};
  const items = [callback4().sectionHeader, ];
  let tmp3 = null;
  if (0 !== index) {
    obj = { marginTop: 24 };
    tmp3 = obj;
  }
  items[1] = tmp3;
  obj.style = items;
  obj.children = children;
  return closure_19(arg1(dependencyMap[16]).Text, obj);
}
function getRecommendationItemsWithViewAll(arr, sectionName, section) {
  let COLLAPSED_LIST_ITEM_MAX = arg3;
  if (arg3 === undefined) {
    COLLAPSED_LIST_ITEM_MAX = sectionName(dependencyMap[81]).COLLAPSED_LIST_ITEM_MAX;
  }
  const importDefault = tmp;
  let importAll;
  let dependencyMap;
  let closure_4;
  if (0 === arr.length) {
    return [];
  } else {
    const _Math = Math;
    const bound = Math.min(length, COLLAPSED_LIST_ITEM_MAX);
    importAll = bound;
    dependencyMap = tmp13;
    const items = [];
    closure_4 = items;
    let obj = { type: sectionName(dependencyMap[44]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER, section, sectionName, numItems: length, numVisibleItems: bound };
    items.push(obj);
    const substr = arr.slice(0, bound);
    const item = substr.forEach((application, sectionPosition) => {
      const obj = { type: sectionPosition(tmp13[44]).AppLauncherHomeListItemType.RECOMMENDATION_APP, application: application.application, showsPromoted: application.showsPromoted, isFirstRow: 0 === sectionPosition };
      let tmp2 = sectionPosition === bound - 1;
      if (tmp2) {
        tmp2 = !tmp13;
      }
      obj.isLastRow = tmp2;
      obj.sectionName = sectionPosition;
      obj.sectionPosition = sectionPosition;
      obj.sectionOverallPosition = items;
      items.push(obj);
    });
    if (bound < length) {
      obj = { type: sectionName(dependencyMap[44]).AppLauncherHomeListItemType.VIEW_ALL, applications: arr.map((application) => application.application) };
      const _Set = Set;
      const set = new Set();
      obj.promotedApplicationIds = arr.reduce((add, showsPromoted) => {
        if (showsPromoted.showsPromoted) {
          add.add(showsPromoted.application.id);
        }
        return add;
      }, set);
      obj.sectionName = sectionName;
      obj.sectionOverallPosition = tmp;
      obj.title = section;
      items.push(obj);
    }
    return items;
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
const View = tmp2.View;
let closure_7 = importDefault(dependencyMap[3]);
({ useContextIndexState: closure_8, useUserIndexState: closure_9 } = arg1(dependencyMap[4]));
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]);
const tmp4 = arg1(dependencyMap[9]);
const DEFAULT_CONTENT_PADDING = tmp4.DEFAULT_CONTENT_PADDING;
let closure_15 = tmp4.FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG;
const tmp3 = arg1(dependencyMap[4]);
({ AnalyticEvents: closure_16, Permissions: closure_17 } = arg1(dependencyMap[10]));
const ContentDismissActionType = arg1(dependencyMap[11]).ContentDismissActionType;
const tmp5 = arg1(dependencyMap[10]);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = arg1(dependencyMap[12]));
let closure_22 = 1.7777777777777777;
let closure_23 = [];
const APP_LAUNCHER_IN_TEXT = arg1(dependencyMap[14]).ApplicationCollectionSurface.APP_LAUNCHER_IN_TEXT;
let obj = arg1(dependencyMap[15]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[13]).colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, flex: 1 };
obj.container = obj;
const obj1 = { autoFocus: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006526886468733086, startExpanded: 8594617760.001091, disconnectAnimatedNodes: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001883504684687393, SECONDLY: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002156349352822252, renderSettingSearchResultItem: 12032021538162901000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, CHANNEL_INTEGRATION: -115216157560385040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, backgroundColor: importDefault(dependencyMap[13]).colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj.topBackgroundFill = obj1;
obj.sectionHeader = {};
const tmp6 = arg1(dependencyMap[12]);
obj.list = { paddingHorizontal: DEFAULT_CONTENT_PADDING, backgroundColor: importDefault(dependencyMap[13]).colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj.searchBarContainer = { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingBottom: DEFAULT_CONTENT_PADDING };
const obj2 = { paddingHorizontal: DEFAULT_CONTENT_PADDING, backgroundColor: importDefault(dependencyMap[13]).colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj.divider = { borderColor: importDefault(dependencyMap[13]).colors.BORDER_STRONG, borderTopWidth: 1, marginTop: importDefault(dependencyMap[13]).space.PX_24 };
const obj4 = { display: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006693633811139321, alignItems: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014927302692811424, flexDirection: 869553810591452500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, gap: importDefault(dependencyMap[13]).space.PX_4 };
obj.appRowLabelWithPromotedContainer = obj4;
obj.appRowLabelWithPromotedTextContainer = { flexShrink: 1 };
const obj3 = { borderColor: importDefault(dependencyMap[13]).colors.BORDER_STRONG, borderTopWidth: 1, marginTop: importDefault(dependencyMap[13]).space.PX_24 };
obj.promotedLabel = { paddingHorizontal: importDefault(dependencyMap[13]).space.PX_4, backgroundColor: importDefault(dependencyMap[13]).colors.INTERACTIVE_BACKGROUND_ACTIVE, borderRadius: importDefault(dependencyMap[13]).radii.lg };
const obj6 = { style: "adjustable", pointerEvents: true, accessibilityElementsHidden: "/assets/design/components/Icon/native/redesign/generated/images", importantForAccessibility: 24, data: 24, borderRadius: importDefault(dependencyMap[13]).radii.md, backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_SURFACE_HIGH, borderColor: importDefault(dependencyMap[13]).colors.BORDER_SUBTLE };
obj.activityItemContainer = obj6;
const obj5 = { paddingHorizontal: importDefault(dependencyMap[13]).space.PX_4, backgroundColor: importDefault(dependencyMap[13]).colors.INTERACTIVE_BACKGROUND_ACTIVE, borderRadius: importDefault(dependencyMap[13]).radii.lg };
obj.activityImageContainer = { backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWEST, borderBottomWidth: tmp2.StyleSheet.hairlineWidth, borderBottomColor: importDefault(dependencyMap[13]).colors.BORDER_SUBTLE };
const obj8 = { "Null": null, "Null": null, "Null": null, padding: importDefault(dependencyMap[13]).space.PX_12 };
obj.activityDetailsContainer = obj8;
obj.activityItemTupleContainer = {};
obj.activityItemTupleShelfItemContainer = { 9223372036854775807: false, 9223372036854775807: false };
obj.activityItemImage = { <string:1140607356>: 30271555, <string:1751293292>: 22092032 };
obj.submittingOverlay = { marginRight: false, padding: false, width: false, display: false, alignItems: false };
let closure_25 = obj.createStyles(obj);
const obj7 = { backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWEST, borderBottomWidth: tmp2.StyleSheet.hairlineWidth, borderBottomColor: importDefault(dependencyMap[13]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[86]).fileFinishedImporting("modules/app_launcher/native/screens/home/AppLauncherHomeScreen.tsx");

export default function AppLauncherHomeScreen(route) {
  let hasViewedActivityItem;
  let hasViewedLearnMoreItem;
  let loading;
  let showNoPermsState;
  let showsEmptyState;
  const params = route.route.params;
  const context = params.context;
  const arg1 = context;
  const initialSearchQuery = params.initialSearchQuery;
  const importDefault = initialSearchQuery;
  const navigation = route.navigation;
  const importAll = navigation;
  let ActivityRow;
  let ActivityItemTuple;
  let ActivityItem;
  let closure_32;
  let RecommendationItem;
  let Divider;
  let RecommendationSectionHeader;
  let getRecommendationItemsWithViewAll;
  let obj = arg1(dependencyMap[36]);
  const viewableAppLauncherHomeItems = obj.useViewableAppLauncherHomeItems();
  const handleViewableItemsChanged = viewableAppLauncherHomeItems.handleViewableItemsChanged;
  const dependencyMap = handleViewableItemsChanged;
  ({ hasViewedActivityItem, hasViewedLearnMoreItem } = viewableAppLauncherHomeItems);
  const tmp2 = importDefault(dependencyMap[37])(hasViewedActivityItem);
  const tmp3 = importDefault(dependencyMap[37])(hasViewedLearnMoreItem);
  let callback = tmp3;
  const tmp4 = callback4();
  const React = tmp4;
  const tmp5 = importDefault(dependencyMap[38])();
  const View = tmp5;
  let obj1 = arg1(dependencyMap[39]);
  const requiredAppLauncherContext = obj1.useRequiredAppLauncherContext();
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  let closure_7 = chatInputRef;
  const keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  const width = requiredAppLauncherContext.width;
  const entrypoint = requiredAppLauncherContext.entrypoint;
  let closure_10 = entrypoint;
  const onActivityItemSelected = requiredAppLauncherContext.onActivityItemSelected;
  let closure_11 = onActivityItemSelected;
  const size = importDefault(dependencyMap[40])();
  let closure_12 = tmp7;
  const items = [entrypoint];
  const effect = React.useEffect(() => {
    if (entrypoint === context(handleViewableItemsChanged[41]).AppLauncherEntrypoint.VOICE) {
      const result = navigation(handleViewableItemsChanged[42]).dismissNewActivityIndicator();
      const obj = navigation(handleViewableItemsChanged[42]);
    }
  }, items);
  const items1 = [chatInputRef, keyboardCloseReasonRef];
  const items2 = [context, entrypoint, navigation];
  callback = React.useCallback(() => {
    keyboardCloseReasonRef.current = context(handleViewableItemsChanged[39]).AppLauncherKeyboardCloseReason.COMMAND;
    const current = chatInputRef.current;
    if (null != current) {
      current.closeCustomKeyboard();
    }
  }, items1);
  const callback1 = React.useCallback((application, sectionName) => {
    let obj = context(handleViewableItemsChanged[23]);
    obj = { location: context(handleViewableItemsChanged[29]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME };
    let FAKE_BUILT_IN_APP = application.application;
    if (null == FAKE_BUILT_IN_APP) {
      FAKE_BUILT_IN_APP = context(handleViewableItemsChanged[19]).FAKE_BUILT_IN_APP;
    }
    obj.application = FAKE_BUILT_IN_APP;
    obj.navigation = navigation;
    obj.context = context;
    obj.sectionName = sectionName;
    obj.entrypoint = entrypoint;
    const result = obj.handleApplicationSelected(obj);
  }, items2);
  let closure_13 = callback1;
  const items3 = [context, entrypoint, navigation];
  const callback2 = React.useCallback((navigates) => {
    let sectionName;
    let shelfData;
    let flag = navigates.navigates;
    ({ shelfData, sectionName } = navigates);
    if (flag === undefined) {
      flag = true;
    }
    let obj = context(handleViewableItemsChanged[23]);
    obj = { location: context(handleViewableItemsChanged[29]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, application: shelfData.application, navigation, context, sectionName, navigates: flag, entrypoint };
    const result = obj.handleApplicationSelected(obj);
  }, items3);
  const DEFAULT_CONTENT_PADDING = callback2;
  const tmp12 = function useHomeData(context) {
    let frecencyCommands;
    let loading;
    let sectionDescriptors;
    context = context.context;
    let entrypoint = context.entrypoint;
    const initialSearchQuery = entrypoint;
    let navigation;
    let handleViewableItemsChanged;
    let tmp4;
    let tmp5;
    let chatInputRef;
    let keyboardCloseReasonRef;
    let width;
    entrypoint = undefined;
    let onActivityItemSelected;
    let tmp7;
    let callback1;
    let callback2;
    let list;
    frecencyCommands = undefined;
    let obj = context(handleViewableItemsChanged[73]);
    const fetchDeveloperActivityShelfItems = obj.useFetchDeveloperActivityShelfItems();
    obj = {};
    let guild_id;
    if ("channel" === context.type) {
      guild_id = context.channel.guild_id;
    }
    obj.guildId = guild_id;
    const tmp2Result = initialSearchQuery(handleViewableItemsChanged[74])(obj);
    navigation = tmp2Result;
    tmp4 = entrypoint === context(handleViewableItemsChanged[41]).AppLauncherEntrypoint.VOICE;
    handleViewableItemsChanged = tmp4;
    tmp5 = initialSearchQuery(handleViewableItemsChanged[75])({ context, onlyActivityApps: tmp4 });
    const frecentApps = tmp5.frecentApps;
    ({ frecencyCommands, sectionDescriptors, loading } = tmp5);
    const tmp6 = entrypoint === context(handleViewableItemsChanged[41]).AppLauncherEntrypoint.TEXT;
    tmp4 = tmp6;
    const appsInThisServer = initialSearchQuery(handleViewableItemsChanged[76])({ context }).appsInThisServer;
    tmp5 = appsInThisServer;
    const items = [appsInThisServer, tmp6];
    const items1 = [frecentApps];
    const memo = tmp4.useMemo(() => {
      const intl = context(tmp4[17]).intl;
      const mapped = tmp6 ? appsInThisServer : closure_23.map((application) => ({ application: application.application }));
      return callback(mapped, "in_this_server", intl.string(context(tmp4[17]).t.oJyzCu), context(tmp4[67]).IN_THIS_SERVER_ITEM_MAX);
    }, items);
    const items2 = [tmp6, frecentApps];
    const memo1 = tmp4.useMemo(() => frecentApps.map((applicationId) => ({ type: callback(closure_3[44]).AppLauncherHomeListItemType.APP, applicationId: applicationId.id, section: applicationId, isFirstRow: 0 === arg1, isLastRow: arg1 === length.length - 1, sectionName: "recents" })), items1);
    const memo2 = tmp4.useMemo(() => {
      let tmp = !tmp6;
      if (tmp6) {
        tmp = !frecentApps.some((application) => null != application.application);
      }
      return tmp;
    }, items2);
    const tmp2 = initialSearchQuery(handleViewableItemsChanged[74]);
    let id;
    if ("channel" === context.type) {
      id = context.channel.id;
    }
    const isActivitiesInTextEnabled = context(handleViewableItemsChanged[77]).useIsActivitiesInTextEnabled(id);
    chatInputRef = isActivitiesInTextEnabled;
    const items3 = [isActivitiesInTextEnabled, context, entrypoint];
    const effect = tmp4.useEffect(() => {
      let tmp = isActivitiesInTextEnabled;
      if (!isActivitiesInTextEnabled) {
        tmp = entrypoint === context(tmp4[41]).AppLauncherEntrypoint.VOICE;
      }
      if (tmp) {
        let guild_id;
        let obj = context(tmp4[42]);
        obj = {};
        if ("channel" === context.type) {
          guild_id = context.channel.guild_id;
        }
        obj.guildId = guild_id;
        obj.force = true;
        const shelf = obj.fetchShelf(obj);
      }
    }, items3);
    const tmp13 = function useAppCollectionsActiveState() {
      const items = [memo3];
      const stateFromStores = context(tmp4[28]).useStateFromStores(items, () => closure_10.get("only_show_preview_app_collections"));
      const obj = context(tmp4[28]);
      const ApplicationCollectionActiveState = context(tmp4[72]).ApplicationCollectionActiveState;
      if (stateFromStores) {
        return ApplicationCollectionActiveState.PREVIEW;
      } else if (obj2.getConfig({ location: "App Launcher Home (Mobile)" }).enabled) {
        return ApplicationCollectionActiveState.NON_STAFF_PREVIEW;
      } else {
        return ApplicationCollectionActiveState.ACTIVE;
      }
      const obj2 = entrypoint(tmp4[71]);
    }();
    keyboardCloseReasonRef = tmp13;
    const obj3 = context(handleViewableItemsChanged[77]);
    const items4 = [onActivityItemSelected];
    const stateFromStores = context(handleViewableItemsChanged[28]).useStateFromStores(items4, () => memo4.getCollections({ surface: closure_24, activeState: tmp13 }));
    width = stateFromStores;
    const items5 = [stateFromStores, tmp4];
    const memo3 = tmp4.useMemo(() => {
      if (tmp4) {
        let result = context(tmp4[19]).ensureRecommendationSectionsOnlyContainActivities(stateFromStores);
        const obj = context(tmp4[19]);
      } else {
        result = stateFromStores;
      }
      return result;
    }, items5);
    entrypoint = memo3;
    const items6 = [tmp13, entrypoint];
    const effect1 = tmp4.useEffect(() => {
      let obj = context(tmp4[19]);
      if (obj.appLauncherShowsRecommendations(entrypoint)) {
        obj = { surface: closure_24, activeState: tmp13 };
        const collections = context(tmp4[78]).fetchCollections(obj);
        const obj2 = context(tmp4[78]);
      }
    }, items6);
    const items7 = [entrypoint, tmp2Result];
    const memo4 = tmp4.useMemo(() => {
      let diff;
      function getTupleItem(arg0) {
        let shelfItem1;
        let shelfItem1SectionPosition;
        let shelfItem2;
        let shelfItem2SectionPosition;
        ({ shelfItem1, shelfItem2, shelfItem1SectionPosition, shelfItem2SectionPosition } = arg0);
        return { type: callback(closure_3[44]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE, shelfItem1, shelfItem2, sectionName: "activities", shelfItem1SectionPosition, shelfItem2SectionPosition, sectionOverallPosition: 0, isLastTuple: false };
      }
      if (0 !== tmp2Result.length) {
        if (entrypoint === context(tmp4[41]).AppLauncherEntrypoint.VOICE) {
          const items = [];
          let num = 0;
          if (0 < tmp2Result.length - 1) {
            do {
              let sum = num + 1;
              let obj = {};
              let tmp2 = closure_2;
              obj.shelfItem1 = closure_2[num];
              let tmp3 = closure_2;
              obj.shelfItem2 = closure_2[sum];
              obj.shelfItem1SectionPosition = num;
              obj.shelfItem2SectionPosition = sum;
              let arr = items.push(getTupleItem(obj));
              num = num + 2;
              let tmp5 = closure_2;
              diff = closure_2.length - 1;
            } while (num < diff);
          }
          if (tmp2Result.length % 2 === 1) {
            obj = { shelfItem1: tmp2Result[closure_2.length - 1], shelfItem2: undefined, shelfItem1SectionPosition: tmp2Result.length - 1, shelfItem2SectionPosition: undefined };
            items.push(getTupleItem(obj));
          }
          items[items.length - 1].isLastTuple = true;
          obj = { type: context(tmp4[44]).AppLauncherHomeListItemType.SECTION_HEADER };
          const intl = context(tmp4[17]).intl;
          obj.section = intl.string(context(tmp4[17]).t.aeuOoh);
          obj.sectionName = "activities";
          obj.numItems = tmp2Result.length;
          obj.numVisibleItems = tmp2Result.length;
          const items1 = [obj];
          HermesBuiltin.arraySpread(items, 1);
          return items1;
        }
      }
      return [];
    }, items7);
    onActivityItemSelected = memo4;
    const tmp18 = keyboardCloseReasonRef(context, true, false);
    tmp7 = tmp18;
    const tmp19 = width(true, false);
    callback1 = tmp19;
    const result = tmp18.result;
    let sections;
    if (null != result) {
      sections = result.sections;
    }
    const items8 = [sections, ];
    const result2 = tmp19.result;
    let sections1;
    if (null != result2) {
      sections1 = result2.sections;
    }
    items8[1] = sections1;
    const memo5 = tmp4.useMemo(() => {
      function hasCommands(sections) {
        const values = Object.values(sections);
        return values.some((commands) => Object.keys(commands.commands).length > 0);
      }
      const result = tmp18.result;
      let sections;
      if (null != result) {
        sections = result.sections;
      }
      if (null == sections) {
        sections = {};
      }
      const result2 = tmp19.result;
      let sections1;
      if (null != result2) {
        sections1 = result2.sections;
      }
      if (null == sections1) {
        sections1 = {};
      }
      return hasCommands(sections) || hasCommands(sections1);
    }, items8);
    const obj4 = context(handleViewableItemsChanged[28]);
    const items9 = [tmp7];
    let channel = null;
    const stateFromStores1 = context(handleViewableItemsChanged[28]).useStateFromStores(items9, () => {
      let tmp = "channel" === context.type;
      if (tmp) {
        const channel = context.channel;
        let isDMResult = channel.isDM();
        if (!isDMResult) {
          const channel2 = context.channel;
          isDMResult = channel2.isMultiUserDM();
        }
        if (!isDMResult) {
          isDMResult = tmp18.can(constants.USE_APPLICATION_COMMANDS, context.channel);
        }
        tmp = isDMResult;
      }
      return tmp;
    });
    if ("channel" === context.type) {
      channel = context.channel;
    }
    let tmp26 = memo5;
    if (memo5) {
      tmp26 = memo2;
    }
    if (!tmp26) {
      tmp26 = !stateFromStores1;
    }
    let tmp27 = memo2;
    if (memo2) {
      tmp27 = !tmp26;
    }
    if (tmp27) {
      tmp27 = !(null != channel && channel.isPrivate());
      const tmp28 = null != channel && channel.isPrivate();
    }
    if (tmp27) {
      tmp27 = !tmp4;
    }
    let tmp29 = memo2;
    if (memo2) {
      tmp29 = tmp26;
    }
    if (tmp29) {
      tmp29 = !(null != channel && channel.isPrivate());
      const tmp30 = null != channel && channel.isPrivate();
    }
    if (tmp29) {
      tmp29 = !tmp4;
    }
    callback2 = tmp29;
    const items10 = [memo3, tmp2Result, tmp29];
    const memo6 = tmp4.useMemo(() => {
      const items = [];
      if (tmp29) {
        return items;
      } else {
        const context = items;
        const _Set = Set;
        const set = new Set();
        const entrypoint = set;
        const item = memo3.forEach((application_directory_collection_items) => {
          const prop = application_directory_collection_items.application_directory_collection_items;
          const item = prop.forEach((type) => {
            if (type.type === callback(closure_3[79]).ApplicationDirectoryCollectionItemType.APPLICATION) {
              set.add(type.application.id);
            }
          });
        });
        const item1 = tmp2Result.forEach((application) => {
          if (!set.has(application.application.id)) {
            items.push(application);
          }
        });
        return items;
      }
    }, items10);
    list = memo6;
    const items11 = [memo6, memo3, tmp29];
    const memo7 = tmp4.useMemo(() => {
      let items = [];
      const context = items;
      if (tmp29) {
        items = [];
      } else {
        const item = memo3.forEach((title, sectionOverallPosition) => {
          let application_directory_collection_items;
          let type;
          ({ type, application_directory_collection_items } = title);
          if (type === items(closure_3[80]).ApplicationDirectoryCollectionType.BANNER_CARDS) {
            const _Math = Math;
            let obj = {};
            const bound = Math.min(length, items(closure_3[81]).COLLAPSED_LIST_ITEM_MAX);
            obj.type = items(closure_3[44]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER;
            ({ title: obj.section, title: obj.sectionName } = title);
            obj.numItems = application_directory_collection_items.length;
            obj.numVisibleItems = bound;
            items.push(obj);
            let num4 = 0;
            if (0 < application_directory_collection_items.length) {
              do {
                let tmp21 = application_directory_collection_items[num4];
                let sum = num4 + 1;
                if (sum < application_directory_collection_items.length) {
                  let tmp23 = application_directory_collection_items[sum];
                }
                let tmp24 = closure_0;
                let tmp25 = closure_3;
                let tmp26 = tmp20;
                if (tmp21.type === closure_0(closure_3[79]).ApplicationDirectoryCollectionItemType.APPLICATION) {
                  let tmp27 = null != tmp21.id && null != tmp21.image_hash;
                  let collectionItemAssetUrl;
                  if (tmp27) {
                    let tmp29 = closure_0;
                    let tmp30 = closure_3;
                    let obj1 = closure_0(closure_3[82]);
                    obj = {};
                    ({ id: obj3.itemId, image_hash: obj3.hash } = tmp21);
                    collectionItemAssetUrl = obj1.getCollectionItemAssetUrl(obj);
                  }
                  obj = { application: tmp21.application };
                  let tmp31 = closure_0;
                  let tmp32 = closure_3;
                  let obj5 = closure_0(closure_3[83]);
                  obj.showsPromoted = obj5.hasFlag(tmp21.flags, closure_0(closure_3[84]).ApplicationCollectionItemFlags.PROMOTED);
                  obj.overrideImageUrl = collectionItemAssetUrl;
                  let tmp33;
                  let tmp34 = tmp20;
                  if (null != tmp23) {
                    let tmp35 = closure_0;
                    let tmp36 = closure_3;
                    tmp34 = tmp20;
                    if (tmp23.type === closure_0(closure_3[79]).ApplicationDirectoryCollectionItemType.APPLICATION) {
                      let tmp37 = null != tmp23.id && null != tmp23.image_hash;
                      let collectionItemAssetUrl1;
                      if (tmp37) {
                        let tmp39 = closure_0;
                        let tmp40 = closure_3;
                        let obj6 = closure_0(closure_3[82]);
                        obj1 = {};
                        ({ id: obj7.itemId, image_hash: obj7.hash } = tmp23);
                        collectionItemAssetUrl1 = obj6.getCollectionItemAssetUrl(obj1);
                      }
                      let obj2 = { application: tmp23.application };
                      let tmp41 = closure_0;
                      let tmp42 = closure_3;
                      let obj9 = closure_0(closure_3[83]);
                      obj2.showsPromoted = obj9.hasFlag(tmp23.flags, closure_0(closure_3[84]).ApplicationCollectionItemFlags.PROMOTED);
                      obj2.overrideImageUrl = collectionItemAssetUrl1;
                      tmp34 = collectionItemAssetUrl1;
                      tmp33 = obj2;
                    }
                  }
                  let obj3 = {};
                  let tmp44 = closure_0;
                  let tmp45 = closure_3;
                  let tmp43 = closure_0;
                  obj3.type = closure_0(closure_3[44]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE;
                  obj3.sectionName = title.title;
                  obj3.sectionOverallPosition = sectionOverallPosition;
                  obj3.item1 = obj;
                  obj3.item2 = tmp33;
                  obj3.isLastTuple = num4 + 2 >= application_directory_collection_items.length;
                  obj3.item1SectionPosition = num4;
                  let tmp46;
                  if (null != tmp33) {
                    tmp46 = sum;
                  }
                  obj3.item2SectionPosition = tmp46;
                  let arr = closure_0.push(obj3);
                  let tmp48 = collectionItemAssetUrl;
                  let tmp49 = obj;
                  let tmp50 = tmp33;
                  tmp26 = tmp34;
                }
                num4 = num4 + 2;
                let tmp20 = tmp26;
              } while (num4 < application_directory_collection_items.length);
            }
          } else if (type === items(closure_3[80]).ApplicationDirectoryCollectionType.EXPANDABLE_LIST) {
            const prop = title.application_directory_collection_items;
            const mapped = prop.map((type) => {
              if (type.type === found(closure_3[79]).ApplicationDirectoryCollectionItemType.APPLICATION) {
                const obj = { application: type.application, showsPromoted: found(closure_3[83]).hasFlag(type.flags, found(closure_3[84]).ApplicationCollectionItemFlags.PROMOTED) };
                return obj;
              }
            });
            const found = mapped.filter(items(closure_3[66]).isNotNullish);
            let items = found;
            if (obj11.hasFlag(title.flags, items(closure_3[85]).ApplicationCollectionFlags.APPENDS_REMAINING_ACTIVITIES)) {
              const item = closure_15.forEach((application) => {
                found.push({ application: application.application, showsPromoted: false });
              });
            }
            const push = items.push;
            items = [];
            HermesBuiltin.arraySpread(callback(found, title.title, title.title, undefined, sectionOverallPosition), 0);
            HermesBuiltin.apply(items, items);
            const obj11 = items(closure_3[83]);
          }
        });
      }
      return items;
    }, items11);
    frecencyCommands = memo7;
    const items12 = [entrypoint, memo7, memo4];
    obj = {
      list: tmp4.useMemo(() => {
        let obj = context(tmp4[19]);
        if (obj.appLauncherShowsRecommendations(entrypoint)) {
          obj = { type: context(context[44]).AppLauncherHomeListItemType.LEARN_MORE };
          const items = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(memo7, 0);
          items[arraySpreadResult] = obj;
          const sum = arraySpreadResult + 1;
          return items;
        } else {
          const items1 = [];
          arraySpreadResult = HermesBuiltin.arraySpread(memo4, 0);
          return items1;
        }
      }, items12),
      frecencyCommands,
      frecencyUsedAppList: memo1,
      sectionDescriptors,
      loading,
      hasNoCommands: memo2,
      hasNoShelfItems: 0 === tmp2Result.length,
      showsEmptyState: tmp27,
      showNoPermsState: tmp29,
      inThisServerItems: memo
    };
    return obj;
  }({ context, entrypoint });
  const list = tmp12.list;
  let closure_15 = list;
  const frecencyCommands = tmp12.frecencyCommands;
  const frecencyUsedAppList = tmp12.frecencyUsedAppList;
  const sectionDescriptors = tmp12.sectionDescriptors;
  const ContentDismissActionType = sectionDescriptors;
  const inThisServerItems = tmp12.inThisServerItems;
  const items4 = [context, entrypoint, navigation, sectionDescriptors];
  ({ loading, showsEmptyState, showNoPermsState } = tmp12);
  const callback3 = React.useCallback((application) => {
    application = application.application;
    const context = application;
    let obj = context(handleViewableItemsChanged[19]);
    let tmp = !obj.isEmbeddedApp(application);
    if (tmp) {
      tmp = null != sectionDescriptors.find((id) => id.id === application.id);
    }
    obj = { location: context(handleViewableItemsChanged[29]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, application, navigation, context, installOnDemand: !tmp, sectionName: application.sectionName, entrypoint };
    const result = context(handleViewableItemsChanged[23]).handleApplicationSelected(obj);
  }, items4);
  let obj2 = arg1(dependencyMap[43]);
  const clickOnHomeActivityOpensAppDetails = obj2.useClickOnHomeActivityOpensAppDetails();
  const items5 = [clickOnHomeActivityOpensAppDetails, context, entrypoint, tmp3, size.width > size.height, list.length, navigation, onActivityItemSelected, callback2, callback1, callback3, tmp5, tmp4.sectionHeader, width];
  let callback4 = React.useCallback((item) => {
    item = item.item;
    const context = item;
    const index = item.index;
    const type = item.type;
    if (context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
      let obj = { isFirstRow: 0 === index, isLastRow: index === list.length - 1 };
      obj = { height: tmp5 };
      obj.style = obj;
      return inThisServerItems(initialSearchQuery(handleViewableItemsChanged[45]), obj);
    } else if (context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
      const obj1 = { 9223372036854775807: "238a115f1ad03e07bad0181bb5c110d4", 9223372036854775807: "ic_playstation_device_ps5_32px", 9223372036854775807: "png" };
      const items = [tmp4.sectionHeader, ];
      let tmp50 = null;
      if (0 !== index) {
        const obj2 = { marginTop: 24 };
        tmp50 = obj2;
      }
      items[1] = tmp50;
      obj1.style = items;
      obj1.children = item.section;
      return inThisServerItems(context(handleViewableItemsChanged[16]).Text, obj1);
    } else if (context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
      const obj3 = {
        section: item.section,
        onPress(shelfData) {
            callback2({ shelfData, sectionName: item.sectionName });
          }
      };
      ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
      return inThisServerItems(pinnedSearchBarBottomBorder, obj3, item.section.application.id);
    } else if (context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
      const obj4 = {
        context,
        sectionName: context(handleViewableItemsChanged[41]).AppLauncherSectionName.ACTIVITIES,
        onPress(shelfData) {
            const obj = { shelfData, sectionName: item.sectionName };
            let tmp3 = !tmp2;
            if (!closure_21) {
              tmp3 = closure_10 !== item(closure_3[41]).AppLauncherEntrypoint.VOICE;
            }
            obj.navigates = tmp3;
            closure_14(obj);
          }
      };
      let tmp37 = !clickOnHomeActivityOpensAppDetails;
      if (tmp37) {
        tmp37 = entrypoint === context(handleViewableItemsChanged[41]).AppLauncherEntrypoint.VOICE;
      }
      obj4.usesHandleActivityItemSelected = tmp37;
      obj4.onActivityItemSelected = onActivityItemSelected;
      ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
      obj4.entrypoint = entrypoint;
      obj4.containerWidth = width;
      return inThisServerItems(ref1, obj4, item.shelfItem1.application.id);
    } else if (context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
      const obj5 = {
        context,
        sectionName: item.sectionName,
        onPress(application, sectionName) {
            return callback3({ application, sectionName });
          }
      };
      ({ item1: obj8.item1, item2: obj8.item2, isLastTuple: obj8.isLastTuple } = item);
      obj5.entrypoint = entrypoint;
      obj5.containerWidth = width;
      return inThisServerItems(closure_32, obj5);
    } else if (context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.APP === type) {
      const obj6 = {
        section: item.section,
        onPress() {
            callback(item.section, item(closure_3[41]).AppLauncherSectionName.INSTALLED);
          }
      };
      ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
      const obj7 = { height: tmp5 };
      obj6.style = obj7;
      return inThisServerItems(closure_28, obj6, item.section.id);
    } else if (context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
      const obj8 = { index, children: item.section };
      return inThisServerItems(trackAppLauncherHomeItemImpression, obj8);
    } else if (context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
      const obj9 = { application: item.item.application };
      ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
      obj9.onPress = function onPress() {
        return callback3({ application: item.item.application, sectionName: item.sectionName });
      };
      obj9.isLandscape = tmp7;
      ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
      return inThisServerItems(initialSearchQuery(handleViewableItemsChanged[46]), obj9);
    } else if (context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
      const obj10 = {};
      ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
      obj10.onPress = function onPress() {
        return callback3({ application: item.application, sectionName: item.sectionName });
      };
      obj10.showsPromoted = item.showsPromoted;
      return inThisServerItems(initialSearchQuery(handleViewableItemsChanged[47]), obj10, item.application.id);
    } else if (context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.VIEW_ALL === type) {
      const obj11 = {
        title: item.title,
        onPress() {
            const applications = item.applications;
            const mapped = applications.map((arg0) => arg0);
            let obj = item(closure_3[23]);
            obj = { location: item(closure_3[29]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation: closure_2, context: item, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: item(closure_3[49]).SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((application) => callback(closure_3[50]).getApplicationCommandSection(application)), title: item.title, promotedApplicationIds: item.promotedApplicationIds };
            const result = obj.handleViewAllSelected(obj);
          }
      };
      return inThisServerItems(initialSearchQuery(handleViewableItemsChanged[48]), obj11);
    } else if (context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
      return inThisServerItems(callback6, {});
    } else if (context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.LEARN_MORE === type) {
      obj = {};
      const tmp7 = initialSearchQuery(handleViewableItemsChanged[51]);
      obj.visible = tmp3.valueOf();
      return inThisServerItems(tmp7, obj);
    } else {
      return null;
    }
  }, items5);
  const ref = React.useRef(null);
  let closure_22 = ref;
  const tmp17 = callback(React.useState(false), 2);
  const first = tmp17[0];
  let closure_23 = tmp17[1];
  const items6 = [entrypoint];
  const memo = React.useMemo(() => initialSearchQuery(handleViewableItemsChanged[52]).debounce((query) => {
    let obj = callback(closure_3[53]);
    obj = { query, source: closure_10 };
    obj.trackWithMetadata(constants.APP_LAUNCHER_SEARCH_QUERY_TYPED, obj);
  }, 400, { "Bool(false)": true, "Bool(false)": true }), items6);
  const APP_LAUNCHER_IN_TEXT = memo;
  callback4 = React.useRef(null);
  const effect1 = React.useEffect(() => () => {
    const current = ref.current;
    if (null != current) {
      current.cancel();
    }
  }, []);
  const items7 = [memo];
  const callback5 = React.useCallback((arg0) => {
    const context = arg0;
    callback(0 !== arg0.length);
    const current = ref.current;
    if (null != current) {
      current.cancel();
    }
    ref.current = context(handleViewableItemsChanged[54]).runAfterInteractions(() => {
      const current = ref.current;
      if (null != current) {
        current.setQuery(arg0);
      }
    }, 100);
    memo(arg0);
  }, items7);
  const AppRowLabel = callback5;
  let closure_27 = React.useRef(callback5);
  const items8 = [callback5];
  const effect2 = React.useEffect(() => {
    closure_27.current = callback5;
  }, items8);
  const items9 = [entrypoint];
  let closure_28 = React.useCallback(() => {
    let obj = context(handleViewableItemsChanged[53]);
    obj = { source: entrypoint };
    obj.trackWithMetadata(frecencyCommands.APP_LAUNCHER_SEARCH_FOCUSED, obj);
  }, items9);
  let obj3 = arg1(dependencyMap[55]);
  obj = {};
  let str = "home-scroller";
  if (first) {
    str = "search-scroller";
  }
  obj.key = str;
  obj.triggerScrollHeight = 5;
  const pinnedSearchBarBottomBorder = obj3.usePinnedSearchBarBottomBorder(obj);
  ActivityRow = pinnedSearchBarBottomBorder;
  const ref1 = React.useRef(null);
  ActivityItemTuple = ref1;
  const items10 = [initialSearchQuery];
  const layoutEffect = React.useLayoutEffect(() => {
    if (null != initialSearchQuery) {
      const current = ref1.current;
      if (null != current) {
        current.setText(initialSearchQuery);
      }
      const current2 = ref1.current;
      if (null != current2) {
        current2.focus();
      }
      ref2.current(initialSearchQuery);
    }
  }, items10);
  const sum = importDefault(dependencyMap[35])().bottom + DEFAULT_CONTENT_PADDING;
  ActivityItem = sum;
  let obj5 = arg1(dependencyMap[56]);
  const bottomSheetFlashListBottomViewabilityInset = obj5.useBottomSheetFlashListBottomViewabilityInset();
  let scrollerRef = bottomSheetFlashListBottomViewabilityInset.flashListRef;
  obj = { type: arg1(dependencyMap[58]).ImpressionTypes.VIEW, name: arg1(dependencyMap[58]).ImpressionNames.APP_LAUNCHER_HOME_ACTIVITY_ITEM };
  obj1 = { disableTrack: !tmp2 };
  const items11 = [tmp2];
  importDefault(dependencyMap[57])(obj, obj1, items11);
  const tmp30 = callback(React.useState(false), 2);
  closure_32 = tmp30[1];
  const effect3 = React.useEffect(() => {
    callback3(true);
  }, []);
  let obj8 = arg1(dependencyMap[28]);
  const items12 = [closure_13];
  const stateFromStores = obj8.useStateFromStores(items12, () => callback1.getTriggeredOnboardingContentMetadata().willShowGlobalSearchOnboarding);
  RecommendationItem = stateFromStores;
  const items13 = [stateFromStores];
  const callback6 = React.useCallback((arg0) => {
    if (stateFromStores) {
      let obj = context(handleViewableItemsChanged[59]);
      obj = { dismissAction: tmp };
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(context(handleViewableItemsChanged[60]).DismissibleContent.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING, obj);
      obj = {};
      const merged = Object.assign(callback1.getTriggeredOnboardingContentMetadata());
      obj["willShowGlobalSearchOnboarding"] = false;
      const result1 = context(handleViewableItemsChanged[61]).setTriggeredOnboardingContentMetadata(obj);
      const obj3 = context(handleViewableItemsChanged[61]);
    }
  }, items13);
  Divider = callback6;
  let obj9 = arg1(dependencyMap[62]);
  const trackAppLauncherHomeItemImpression = obj9.useTrackAppLauncherHomeItemImpression().trackAppLauncherHomeItemImpression;
  RecommendationSectionHeader = trackAppLauncherHomeItemImpression;
  const items14 = [sum, tmp4.list];
  const items15 = [sum];
  const memo1 = React.useMemo(() => {
    const obj = {};
    const merged = Object.assign(tmp4.list);
    obj["paddingBottom"] = sum;
    return obj;
  }, items14);
  const memo2 = React.useMemo(() => ({ bottom: sum }), items15);
  const items16 = [pinnedSearchBarBottomBorder];
  const callback7 = React.useCallback((type) => type.type, []);
  const callback8 = React.useCallback((arg0) => {
    pinnedSearchBarBottomBorder.scrollHandler(arg0);
  }, items16);
  getRecommendationItemsWithViewAll = callback8;
  const items17 = [callback8];
  const callback9 = React.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    callback8({ width: nativeEvent.layoutMeasurement.width, height: nativeEvent.layoutMeasurement.height, offset: nativeEvent.contentOffset.y, contentWidth: nativeEvent.contentSize.width, contentHeight: nativeEvent.contentSize.height });
  }, items17);
  let obj10 = arg1(dependencyMap[63]);
  const appLauncherFlashListProps = obj10.useAppLauncherFlashListProps({ onScrollHandler: callback8 });
  const items18 = [handleViewableItemsChanged, trackAppLauncherHomeItemImpression];
  obj2 = { style: tmp4.container };
  obj3 = { style: tmp4.topBackgroundFill };
  const memo3 = React.useMemo(() => {
    let obj = { viewabilityConfig: {}, onViewableItemsChanged: handleViewableItemsChanged };
    const items = [obj, ];
    obj = { viewabilityConfig: list, onViewableItemsChanged: trackAppLauncherHomeItemImpression };
    items[1] = obj;
    return items;
  }, items18);
  const items19 = [inThisServerItems(View, obj3), , , ];
  const obj4 = {};
  obj5 = { style: tmp4.searchBarContainer };
  const obj6 = { ref: ref1 };
  if (entrypoint === arg1(dependencyMap[41]).AppLauncherEntrypoint.VOICE) {
    const intl2 = arg1(dependencyMap[17]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[17]).t.pw+r5b);
  } else {
    const intl = arg1(dependencyMap[17]).intl;
    stringResult = intl.string(arg1(dependencyMap[17]).t.ziyFv2);
  }
  obj6.placeholder = stringResult;
  obj6.isRound = true;
  obj6.size = "md";
  obj6.onChange = callback5;
  obj6.onFocus = function onFocus() {
    callback2();
    callback6({ actionType: sectionDescriptors.TAKE_ACTION });
  };
  obj5.children = inThisServerItems(arg1(dependencyMap[64]).SearchField, obj6);
  const items20 = [inThisServerItems(View, obj5), pinnedSearchBarBottomBorder.bottomBorderComponent];
  obj4.children = items20;
  items19[1] = callback3(clickOnHomeActivityOpensAppDetails, obj4);
  if (first) {
    const obj7 = { ref, context, onScroll: callback9, onSend: callback, entrypoint };
    let tmp53Result = tmp53(arg1(dependencyMap[65]).SearchLocalAndGlobalContentView, obj7);
  } else {
    obj8 = {};
    obj9 = {};
    obj10 = {
      context,
      sectionDescriptors,
      commands: frecencyCommands,
      loading,
      apps: frecencyUsedAppList,
      onAppSelected: callback3,
      onCommandSelected(command, section) {
          let obj = context(handleViewableItemsChanged[23]);
          obj = { location: context(handleViewableItemsChanged[29]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, context, command, section, sectionDescriptors, query: "", navigation, sectionName: context(handleViewableItemsChanged[41]).AppLauncherSectionName.RECENT_COMMANDS, entrypoint };
          const result = obj.handleApplicationCommandSelected(obj);
        },
      onViewAllSelected(sectionItemType) {
          let obj = context(handleViewableItemsChanged[23]);
          obj = { location: context(handleViewableItemsChanged[29]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, navigation, context };
          let str = "recent_apps_view_more";
          if (sectionItemType === context(handleViewableItemsChanged[49]).SectionItemType.COMMANDS) {
            str = "recent_commands_view_more";
          }
          obj.sectionName = str;
          const mapped = frecencyUsedAppList.map((section) => {
            section = section.section;
            let application;
            if (null != section) {
              application = section.application;
            }
            return application;
          });
          obj.applications = mapped.filter(context(handleViewableItemsChanged[66]).isNotNullish);
          obj.sectionItemType = sectionItemType;
          obj.commands = frecencyCommands;
          obj.sectionDescriptors = sectionDescriptors;
          if (entrypoint === context(handleViewableItemsChanged[41]).AppLauncherEntrypoint.VOICE) {
            const intl3 = context(handleViewableItemsChanged[17]).intl;
            let stringResult = intl3.string(context(handleViewableItemsChanged[17]).t.2pFD8L);
          } else if (sectionItemType === context(handleViewableItemsChanged[49]).SectionItemType.COMMANDS) {
            const intl2 = context(handleViewableItemsChanged[17]).intl;
            stringResult = intl2.string(context(handleViewableItemsChanged[17]).t.V3Sq95);
          } else {
            const intl = context(handleViewableItemsChanged[17]).intl;
            stringResult = intl.string(context(handleViewableItemsChanged[17]).t.SCViVk);
          }
          obj.title = stringResult;
          const result = obj.handleViewAllSelected(obj);
        }
    };
    const items21 = [inThisServerItems(importDefault(dependencyMap[49]), obj10), , , ];
    const obj11 = {
      items: inThisServerItems,
      onAppSelected: callback3,
      onViewAllSelected() {
          const found = inThisServerItems.find((type) => type.type === callback(closure_3[44]).AppLauncherHomeListItemType.VIEW_ALL);
          let mapped;
          if (null != found) {
            const applications = found.applications;
            if (null != applications) {
              mapped = applications.map((arg0) => arg0);
            }
          }
          if (null != mapped) {
            let obj = context(handleViewableItemsChanged[23]);
            obj = { location: context(handleViewableItemsChanged[29]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: context(handleViewableItemsChanged[41]).AppLauncherSectionName.APPS_IN_THIS_SERVER, applications: mapped, sectionItemType: context(handleViewableItemsChanged[49]).SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((application) => callback(closure_3[50]).getApplicationCommandSection(application)) };
            const intl = context(handleViewableItemsChanged[17]).intl;
            obj.title = intl.string(context(handleViewableItemsChanged[17]).t.oJyzCu);
            const result = obj.handleViewAllSelected(obj);
          }
        }
    };
    items21[1] = inThisServerItems(importDefault(dependencyMap[67]), obj11);
    let tmp61 = null;
    if (showsEmptyState) {
      tmp61 = null;
      if (tmp30[0]) {
        tmp61 = inThisServerItems(importDefault(dependencyMap[68]), {});
      }
    }
    items21[2] = tmp61;
    let tmp65 = null;
    if (showNoPermsState) {
      tmp65 = inThisServerItems(importDefault(dependencyMap[69]), {});
    }
    items21[3] = tmp65;
    obj9.children = items21;
    obj8.ListHeaderComponent = callback3(clickOnHomeActivityOpensAppDetails, obj9);
    obj8.contentContainerStyle = memo1;
    obj8.scrollIndicatorInsets = memo2;
    obj8.renderItem = callback4;
    obj8.getItemType = callback7;
    obj8.data = list;
    obj8.preserveScrollMomentum = true;
    obj8.automaticallyAdjustsScrollIndicatorInsets = false;
    obj8.keyboardDismissMode = "on-drag";
    obj8.keyboardShouldPersistTaps = "always";
    obj8.showsVerticalScrollIndicator = false;
    obj8.viewabilityConfigCallbackPairs = memo3;
    obj8.bottomViewabilityInsetRef = bottomSheetFlashListBottomViewabilityInset.bottomVisibilityInsetRef;
    if (entrypoint === arg1(dependencyMap[41]).AppLauncherEntrypoint.VOICE) {
      scrollerRef = appLauncherFlashListProps.scrollerRef;
    }
    obj8.ref = scrollerRef;
    obj8.onScroll = callback9;
    ({ onScroll: obj17.animatedOnScroll, gestureRef: obj17.simultaneousHandlers, animatedProps: obj17.animatedProps } = appLauncherFlashListProps);
    tmp53Result = tmp53(importDefault(dependencyMap[63]), obj8);
    const tmp56 = importDefault(dependencyMap[63]);
    const tmp57 = callback3;
    const tmp58 = clickOnHomeActivityOpensAppDetails;
  }
  items19[2] = tmp53Result;
  let tmp74 = entrypoint === arg1(dependencyMap[41]).AppLauncherEntrypoint.TEXT;
  if (tmp74) {
    const obj12 = { windowDimensions: size, visible: stateFromStores, markAsDismissed: callback6 };
    tmp74 = inThisServerItems(importDefault(dependencyMap[70]), obj12);
  }
  items19[3] = tmp74;
  obj2.children = items19;
  return callback3(View, obj2);
};
export { BaseAppRow };
