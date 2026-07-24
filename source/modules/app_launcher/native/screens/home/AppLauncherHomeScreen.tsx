// Module ID: 11232
// Function ID: 87445
// Name: AppRowLabel
// Dependencies: [57, 31, 27, 1347, 8007, 4129, 11223, 3758, 11194, 1455, 653, 1345, 33, 689, 11227, 4130, 4126, 1212, 11206, 8006, 10287, 3808, 5165, 11201, 1392, 9923, 11233, 10643, 566, 6755, 11234, 5085, 8416, 11235, 11210, 1557, 11236, 8321, 8871, 10911, 1450, 8226, 10515, 11238, 11237, 11239, 11240, 11242, 11243, 11202, 6753, 11244, 22, 4324, 5582, 11246, 11247, 8604, 480, 3946, 1334, 11248, 11249, 11251, 5772, 11253, 1327, 11259, 11260, 11262, 11265, 11266, 11228, 11267, 11189, 11268, 11271, 8005, 11221, 8234, 11272, 11257, 11273, 1360, 11274, 11275, 2]
// Exports: default

// Module 11232 (AppRowLabel)
import trackImpression from "trackImpression";
import preload from "preload";
import get_ActivityIndicator from "useEmbeddedActivityBackground";
import closure_7 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "ActivityShelfBadge";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_16;
let closure_17;
let closure_19;
let closure_20;
let closure_21;
let closure_8;
let closure_9;
const require = arg1;
function AppRowLabel(renderedName) {
  renderedName = renderedName.renderedName;
  const tmp = _createForOfIteratorHelperLoose();
  if (renderedName.showsPromoted) {
    let obj = { style: tmp.appRowLabelWithPromotedContainer };
    obj = { style: tmp.appRowLabelWithPromotedTextContainer, variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: renderedName };
    const items = [callback2(require(4126) /* Text */.Text, obj), ];
    const obj1 = { style: tmp.promotedLabel };
    const obj2 = { variant: "text-xxs/semibold", color: "text-muted" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj2.children = intl.string(require(1212) /* getSystemLocale */.t["/eVltv"]);
    obj1.children = callback2(require(4126) /* Text */.Text, obj2);
    items[1] = callback2(View, obj1);
    obj.children = items;
    let tmp5 = callback3(View, obj);
  } else {
    obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: renderedName };
    tmp5 = callback2(require(4126) /* Text */.Text, obj);
  }
  return tmp5;
}
class BaseAppRow {
  constructor(arg0) {
    application = global.application;
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
      tmp3 = closure_1;
      tmp4 = closure_3;
      num = 18;
      obj = {};
      obj.iconSource = iconSource;
      tmp = jsx(require("EntityBorderAppIcon"), obj);
    }
    obj2 = require("_createForOfIteratorHelperLoose");
    FAKE_BUILT_IN_APP = application;
    if (null == application) {
      tmp5 = application;
      tmp6 = closure_3;
      FAKE_BUILT_IN_APP = require("_createForOfIteratorHelperLoose").FAKE_BUILT_IN_APP;
    }
    sectionName = obj2.getSectionName(FAKE_BUILT_IN_APP);
    if (!flag2) {
      tmp8 = application;
      tmp9 = closure_3;
      obj3 = require("_createForOfIteratorHelperLoose");
      FAKE_BUILT_IN_APP2 = application;
      if (null == application) {
        tmp10 = application;
        tmp11 = closure_3;
        FAKE_BUILT_IN_APP2 = require("_createForOfIteratorHelperLoose").FAKE_BUILT_IN_APP;
      }
      flag2 = obj3.isPromotedApplication(FAKE_BUILT_IN_APP2);
    }
    items = [];
    items[0] = application;
    memo = preload.useMemo(() => {
      let obj = application(outer1_3[19]);
      if (null != application) {
        let FAKE_BUILT_IN_APP = application;
      } else {
        FAKE_BUILT_IN_APP = application(outer1_3[19]).FAKE_BUILT_IN_APP;
      }
      const sectionDescription = obj.getSectionDescription(FAKE_BUILT_IN_APP);
      let result = null;
      if (null != sectionDescription) {
        result = null;
        if ("" !== sectionDescription) {
          obj = { content: sectionDescription, muted: false, layout: application(outer1_3[21]).ChannelListLayoutTypes.COMPACT, color: "text-muted" };
          result = application(outer1_3[20]).renderMessagePreviewMarkup(obj);
          const obj2 = application(outer1_3[20]);
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
    return jsx(require("TableRowInner").TableRow, obj);
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
  let obj = require(11201) /* handleApplicationSelected */;
  obj = { application: section.application, iconSource: obj.getAppLauncherIconSource(section.application), onPress: isLastRow.onPress, isFirstRow, isLastRow: flag };
  return callback2(BaseAppRow, obj);
}
function ActivityRow(section) {
  section = section.section;
  const onPress = section.onPress;
  let flag = section.isFirstRow;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = section.isLastRow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj = onPress(1392);
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
    tmp3 = callback2(onPress(11206), obj);
  }
  const items = [section];
  const items1 = [section, onPress];
  const memo = React.useMemo(() => {
    const description = section.application.description;
    let result = null;
    if (null != description) {
      result = null;
      if ("" !== description) {
        let obj = section(outer1_3[20]);
        obj = { content: description, muted: false, layout: section(outer1_3[21]).ChannelListLayoutTypes.COMPACT, color: "text-muted" };
        result = obj.renderMessagePreviewMarkup(obj);
      }
    }
    return result;
  }, items);
  const callback = React.useCallback(() => {
    onPress(section);
  }, items1);
  const obj1 = { icon: tmp3, label: section.application.name, subLabel: memo, subLabelLineClamp: 1, start: flag, end: flag2, arrow: true, onPress: callback };
  return callback2(section(5165).TableRow, obj1);
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
  ({ shelfItem1, isLastTuple } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const items = [containerWidth];
  const size = React.useMemo(() => {
    if (null == containerWidth) {
      let obj = { width: undefined, height: undefined };
      return obj;
    } else {
      const tmp5 = outer1_1(outer1_3[25])(containerWidth / 2 - outer1_14 - 6);
      obj = { width: tmp5, height: outer1_1(outer1_3[25])(tmp5 / outer1_22) };
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
  const shelfItem = context.shelfItem;
  const onPress = context.onPress;
  let flag = context.usesHandleActivityItemSelected;
  if (flag === undefined) {
    flag = false;
  }
  ({ imageWidth, imageHeight } = context);
  let callback;
  let handleActivityItemSelected;
  ({ onActivityItemSelected, entrypoint } = context);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = context(flag[26]);
  const heroMediaDimensions = obj.useHeroMediaDimensions();
  const tmp3 = callback(handleActivityItemSelected.useState(false), 2);
  callback = tmp3[1];
  obj = { applicationId: shelfItem.application.id };
  let width = imageWidth;
  if (null == imageWidth) {
    width = heroMediaDimensions.width;
  }
  obj.size = width;
  obj.names = ["embedded_cover"];
  const tmp4Result = shelfItem(flag[27])(obj);
  let id = handleActivityItemSelected.useId();
  let obj2 = context(flag[28]);
  let items = [closure_7];
  const tmp7 = callback(obj2.useStateFromStoresArray(items, () => {
    const items = [outer1_7.isLaunchingActivity(), ];
    let id;
    if ("channel" === context.type) {
      id = context.channel.id;
    }
    items[1] = outer1_7.getLaunchState(shelfItem.application.id, id);
    return items;
  }), 2);
  let isLaunching = null != tmp8;
  if (isLaunching) {
    isLaunching = tmp8.isLaunching;
  }
  if (isLaunching) {
    isLaunching = tmp8.componentId === id;
  }
  let obj3 = context(flag[19]);
  const shelfBadgeTypeIfActive = obj3.getShelfBadgeTypeIfActive(shelfItem.application);
  let obj4 = context(flag[23]);
  obj = { applicationId: shelfItem.application.id, context, sectionName: context.sectionName, onActivityItemSelected, location: context(flag[29]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, entrypoint, launchingComponentId: id, fetchesApplication: false };
  handleActivityItemSelected = obj4.useHandleActivityItemSelected(obj).handleActivityItemSelected;
  const items1 = [handleActivityItemSelected, onPress, shelfItem, flag];
  let first = "not-found" === tmp4Result.state;
  callback = handleActivityItemSelected.useCallback(() => {
    if (flag) {
      handleActivityItemSelected();
    }
    onPress(shelfItem);
  }, items1);
  if (!first) {
    first = tmp3[0];
  }
  if (first) {
    let tmp13 = callback2(shelfItem(flag[30]), {});
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
      tmp13 = callback2(shelfItem(flag[31]), obj1);
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
  const items3 = [tmp13, callback2(shelfItem(flag[33]), { labelType: shelfBadgeTypeIfActive }), ];
  const obj6 = { submitting: isLaunching, style: tmp.submittingOverlay };
  items3[2] = callback2(context(flag[34]).SubmittingOverlay, obj6);
  obj4.children = items3;
  const items4 = [closure_20(View, obj4), ];
  tmp12 = "loading" === tmp4Result.state || null == tmp4Result.url;
  const tmp20 = closure_20;
  const tmp21 = closure_20;
  const tmp22 = View;
  const tmp4 = shelfItem(flag[27]);
  const obj8 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: shelfItem.application.name };
  items4[1] = callback2(View, { style: tmp.activityDetailsContainer, children: callback2(context(flag[16]).Text, obj8) });
  obj3.children = items4;
  return tmp20(context(flag[32]).PressableScale, obj3);
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
  ({ item1, isLastTuple } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const items = [containerWidth];
  const size = React.useMemo(() => {
    if (null == containerWidth) {
      let obj = { width: undefined, height: undefined };
      return obj;
    } else {
      const tmp5 = outer1_1(outer1_3[25])(containerWidth / 2 - outer1_14 - 6);
      obj = { width: tmp5, height: outer1_1(outer1_3[25])(tmp5 / outer1_22) };
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
  onPress = onPress.onPress;
  ({ imageWidth, imageHeight, context, entrypoint } = onPress);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = sectionName(application[26]);
  const heroMediaDimensions = obj.useHeroMediaDimensions();
  const tmp3 = callback(React.useState(false), 2);
  let closure_2 = tmp3[1];
  application = item.application;
  let obj1 = sectionName(application[19]);
  let isEmbeddedAppResult = obj1.isEmbeddedApp(application);
  obj = { applicationId: application.id };
  let width = imageWidth;
  if (null == imageWidth) {
    width = heroMediaDimensions.width;
  }
  obj.size = width;
  obj.names = ["embedded_cover"];
  let tmp5Result = onPress(application[27])(obj);
  if (null != item.overrideImageUrl) {
    obj = { state: "loaded", url: item.overrideImageUrl };
    tmp5Result = obj;
  }
  const items = [onPress, application, sectionName];
  let first = "not-found" === tmp5Result.state;
  callback = React.useCallback(() => {
    onPress(application, sectionName);
  }, items);
  if (!first) {
    first = tmp3[0];
  }
  if (first) {
    let tmp10 = callback2(onPress(application[30]), {});
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
      tmp10 = callback2(onPress(application[31]), obj1);
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
    const tmp24 = onPress(application[33]);
    obj6.labelType = sectionName(application[19]).getShelfBadgeTypeIfActive(application);
    isEmbeddedAppResult = callback2(tmp24, obj6);
    const obj11 = sectionName(application[19]);
  }
  items2[1] = isEmbeddedAppResult;
  obj4.children = items2;
  const items3 = [closure_20(View, obj4), ];
  const tmp17 = closure_20;
  const tmp18 = closure_20;
  const tmp19 = View;
  const tmp5 = onPress(application[27]);
  tmp9 = "loading" === tmp5Result.state || null == tmp5Result.url;
  const obj8 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: application.name };
  items3[1] = callback2(View, { style: tmp.activityDetailsContainer, children: callback2(sectionName(application[16]).Text, obj8) });
  obj3.children = items3;
  return tmp17(sectionName(application[32]).PressableScale, obj3);
}
function Divider() {
  const rect = importDefault(1557)();
  const style = [_createForOfIteratorHelperLoose().divider, { marginLeft: -DEFAULT_CONTENT_PADDING - rect.left, marginRight: -DEFAULT_CONTENT_PADDING - rect.right }];
  return callback2(View, { style });
}
function RecommendationSectionHeader(arg0) {
  let children;
  let index;
  ({ index, children } = arg0);
  let obj = { accessibilityRole: "header", variant: "heading-lg/bold", color: "mobile-text-heading-primary" };
  const items = [_createForOfIteratorHelperLoose().sectionHeader, ];
  let tmp3 = null;
  if (0 !== index) {
    obj = { marginTop: 24 };
    tmp3 = obj;
  }
  items[1] = tmp3;
  obj.style = items;
  obj.children = children;
  return closure_19(require(4126) /* Text */.Text, obj);
}
function getRecommendationItemsWithViewAll(arr, sectionName, section) {
  let COLLAPSED_LIST_ITEM_MAX = arg3;
  const _require = sectionName;
  if (arg3 === undefined) {
    COLLAPSED_LIST_ITEM_MAX = _require(11257).COLLAPSED_LIST_ITEM_MAX;
  }
  const importDefault = tmp;
  let bound;
  let dependencyMap;
  let items;
  if (0 === arr.length) {
    return [];
  } else {
    const _Math = Math;
    bound = Math.min(length, COLLAPSED_LIST_ITEM_MAX);
    dependencyMap = tmp13;
    items = [];
    let obj = { type: _require(11237).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER, section, sectionName, numItems: length, numVisibleItems: bound };
    items.push(obj);
    const substr = arr.slice(0, bound);
    const item = substr.forEach((application, sectionPosition) => {
      const obj = { type: sectionName(_undefined[44]).AppLauncherHomeListItemType.RECOMMENDATION_APP, application: application.application, showsPromoted: application.showsPromoted, isFirstRow: 0 === sectionPosition };
      let tmp2 = sectionPosition === bound - 1;
      if (tmp2) {
        tmp2 = !_undefined;
      }
      obj.isLastRow = tmp2;
      obj.sectionName = sectionName;
      obj.sectionPosition = sectionPosition;
      obj.sectionOverallPosition = closure_1;
      items.push(obj);
    });
    if (bound < length) {
      obj = { type: _require(11237).AppLauncherHomeListItemType.VIEW_ALL, applications: arr.map((application) => application.application) };
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
let View = get_ActivityIndicator.View;
({ useContextIndexState: closure_8, useUserIndexState: closure_9 } = _isNativeReflectConstruct);
const DEFAULT_CONTENT_PADDING = APP_LAUNCHER_BUILT_IN_SECTION_ICON.DEFAULT_CONTENT_PADDING;
let closure_15 = APP_LAUNCHER_BUILT_IN_SECTION_ICON.FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG;
({ AnalyticEvents: closure_16, Permissions: closure_17 } = ME);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
let c22 = 1.7777777777777777;
let closure_23 = [];
const APP_LAUNCHER_IN_TEXT = require("ApplicationCollectionSurface").ApplicationCollectionSurface.APP_LAUNCHER_IN_TEXT;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, flex: 1 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, position: "absolute", top: -16, left: 0, right: 0, height: 16 };
_createForOfIteratorHelperLoose.topBackgroundFill = obj1;
_createForOfIteratorHelperLoose.sectionHeader = { marginBottom: 8, marginTop: 8 };
_createForOfIteratorHelperLoose.list = { paddingHorizontal: DEFAULT_CONTENT_PADDING, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
_createForOfIteratorHelperLoose.searchBarContainer = { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingBottom: DEFAULT_CONTENT_PADDING };
let obj2 = { paddingHorizontal: DEFAULT_CONTENT_PADDING, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
_createForOfIteratorHelperLoose.divider = { borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG, borderTopWidth: 1, marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj4 = { overflow: "hidden", flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.appRowLabelWithPromotedContainer = obj4;
_createForOfIteratorHelperLoose.appRowLabelWithPromotedTextContainer = { flexShrink: 1 };
let obj5 = { alignSelf: "center", justifyContent: "center", paddingVertical: 2, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_4, backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_ACTIVE, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.promotedLabel = obj5;
let obj6 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md, overflow: "hidden", height: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_APP_LAUNCHER_CARD_DEFAULT, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.activityItemContainer = obj6;
let obj7 = { justifyContent: "center", alignItems: "center", height: 120, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderBottomWidth: get_ActivityIndicator.StyleSheet.hairlineWidth, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.activityImageContainer = obj7;
let obj8 = { padding: require("_createForOfIteratorHelperLoose").space.PX_12, flexGrow: 1, flexShrink: 1 };
_createForOfIteratorHelperLoose.activityDetailsContainer = obj8;
_createForOfIteratorHelperLoose.activityItemTupleContainer = { flexDirection: "row", gap: 12 };
_createForOfIteratorHelperLoose.activityItemTupleShelfItemContainer = { width: "50%", flexShrink: 1 };
_createForOfIteratorHelperLoose.activityItemImage = { height: "100%", width: "100%" };
_createForOfIteratorHelperLoose.submittingOverlay = { position: "absolute", top: 0, left: 0, height: "100%", width: "100%" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG, borderTopWidth: 1, marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/app_launcher/native/screens/home/AppLauncherHomeScreen.tsx");

export default function AppLauncherHomeScreen(route) {
  let hasViewedActivityItem;
  let hasViewedLearnMoreItem;
  let loading;
  let showNoPermsState;
  let showsEmptyState;
  const params = route.route.params;
  let context = params.context;
  const initialSearchQuery = params.initialSearchQuery;
  const navigation = route.navigation;
  let pinnedSearchBarBottomBorder;
  let ref1;
  let c31;
  let closure_32;
  let stateFromStores;
  let callback6;
  let trackAppLauncherHomeItemImpression;
  let callback8;
  let obj = context(handleViewableItemsChanged[36]);
  const viewableAppLauncherHomeItems = obj.useViewableAppLauncherHomeItems();
  handleViewableItemsChanged = viewableAppLauncherHomeItems.handleViewableItemsChanged;
  ({ hasViewedActivityItem, hasViewedLearnMoreItem } = viewableAppLauncherHomeItems);
  let tmp2 = initialSearchQuery(handleViewableItemsChanged[37])(hasViewedActivityItem);
  let tmp3 = initialSearchQuery(handleViewableItemsChanged[37])(hasViewedLearnMoreItem);
  let callback = tmp3;
  let tmp4 = _createForOfIteratorHelperLoose();
  const React = tmp4;
  let tmp5 = initialSearchQuery(handleViewableItemsChanged[38])();
  const View = tmp5;
  let obj1 = context(handleViewableItemsChanged[39]);
  const requiredAppLauncherContext = obj1.useRequiredAppLauncherContext();
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  const keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  const width = requiredAppLauncherContext.width;
  let entrypoint = requiredAppLauncherContext.entrypoint;
  const onActivityItemSelected = requiredAppLauncherContext.onActivityItemSelected;
  const size = initialSearchQuery(handleViewableItemsChanged[40])();
  let closure_12 = tmp7;
  let items = [entrypoint];
  let effect = React.useEffect(() => {
    if (entrypoint === context(handleViewableItemsChanged[41]).AppLauncherEntrypoint.VOICE) {
      const result = navigation(handleViewableItemsChanged[42]).dismissNewActivityIndicator();
      const obj = navigation(handleViewableItemsChanged[42]);
    }
  }, items);
  let items1 = [chatInputRef, keyboardCloseReasonRef];
  let items2 = [context, entrypoint, navigation];
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
  let items3 = [context, entrypoint, navigation];
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
  const tmp12 = (function useHomeData(context) {
    let frecencyCommands;
    let loading;
    let sectionDescriptors;
    context = context.context;
    const entrypoint = context.entrypoint;
    let c2;
    let c3;
    let frecentApps;
    let c5;
    let appsInThisServer;
    let isActivitiesInTextEnabled;
    let c8;
    let stateFromStores;
    let memo3;
    let memo4;
    let c12;
    let c13;
    let c14;
    let memo6;
    let memo7;
    let obj = context(handleViewableItemsChanged[73]);
    const fetchDeveloperActivityShelfItems = obj.useFetchDeveloperActivityShelfItems();
    obj = {};
    let guild_id;
    if ("channel" === context.type) {
      guild_id = context.channel.guild_id;
    }
    obj.guildId = guild_id;
    const tmp2Result = initialSearchQuery(handleViewableItemsChanged[74])(obj);
    c2 = tmp2Result;
    const tmp4 = entrypoint === context(handleViewableItemsChanged[41]).AppLauncherEntrypoint.VOICE;
    c3 = tmp4;
    let tmp5 = initialSearchQuery(handleViewableItemsChanged[75])({ context, onlyActivityApps: tmp4 });
    frecentApps = tmp5.frecentApps;
    ({ frecencyCommands, sectionDescriptors, loading } = tmp5);
    const tmp6 = entrypoint === context(handleViewableItemsChanged[41]).AppLauncherEntrypoint.TEXT;
    c5 = tmp6;
    appsInThisServer = initialSearchQuery(handleViewableItemsChanged[76])({ context }).appsInThisServer;
    let items = [appsInThisServer, tmp6];
    let items1 = [frecentApps];
    const memo = tmp4.useMemo(() => {
      const intl = context(handleViewableItemsChanged[17]).intl;
      const mapped = c5 ? appsInThisServer : closure_23.map((application) => ({ application: application.application }));
      return callback8(mapped, "in_this_server", intl.string(context(handleViewableItemsChanged[17]).t.oJyzCu), context(handleViewableItemsChanged[67]).IN_THIS_SERVER_ITEM_MAX);
    }, items);
    const items2 = [tmp6, frecentApps];
    const memo1 = tmp4.useMemo(() => frecentApps.map((applicationId) => ({ type: context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.APP, applicationId: applicationId.id, section: applicationId, isFirstRow: 0 === arg1, isLastRow: arg1 === outer1_4.length - 1, sectionName: "recents" })), items1);
    const memo2 = tmp4.useMemo(() => {
      let tmp = !c5;
      if (c5) {
        tmp = !frecentApps.some((application) => null != application.application);
      }
      return tmp;
    }, items2);
    let tmp2 = initialSearchQuery(handleViewableItemsChanged[74]);
    let id;
    if ("channel" === context.type) {
      id = context.channel.id;
    }
    isActivitiesInTextEnabled = context(handleViewableItemsChanged[77]).useIsActivitiesInTextEnabled(id);
    const items3 = [isActivitiesInTextEnabled, context, entrypoint];
    const effect = tmp4.useEffect(() => {
      let tmp = isActivitiesInTextEnabled;
      if (!isActivitiesInTextEnabled) {
        tmp = entrypoint === context(handleViewableItemsChanged[41]).AppLauncherEntrypoint.VOICE;
      }
      if (tmp) {
        let guild_id;
        let obj = context(handleViewableItemsChanged[42]);
        obj = {};
        if ("channel" === context.type) {
          guild_id = context.channel.guild_id;
        }
        obj.guildId = guild_id;
        obj.force = true;
        const shelf = obj.fetchShelf(obj);
      }
    }, items3);
    const tmp13 = (function useAppCollectionsActiveState() {
      const items = [entrypoint];
      const stateFromStores = context(handleViewableItemsChanged[28]).useStateFromStores(items, () => entrypoint.get("only_show_preview_app_collections"));
      const obj = context(handleViewableItemsChanged[28]);
      const ApplicationCollectionActiveState = context(handleViewableItemsChanged[72]).ApplicationCollectionActiveState;
      if (stateFromStores) {
        return ApplicationCollectionActiveState.PREVIEW;
      } else if (obj2.getConfig({ location: "App Launcher Home (Mobile)" }).enabled) {
        return ApplicationCollectionActiveState.NON_STAFF_PREVIEW;
      } else {
        return ApplicationCollectionActiveState.ACTIVE;
      }
      obj2 = initialSearchQuery(handleViewableItemsChanged[71]);
    })();
    c8 = tmp13;
    let obj3 = context(handleViewableItemsChanged[77]);
    const items4 = [onActivityItemSelected];
    stateFromStores = context(handleViewableItemsChanged[28]).useStateFromStores(items4, () => onActivityItemSelected.getCollections({ surface: memo, activeState: c8 }));
    const items5 = [stateFromStores, tmp4];
    memo3 = tmp4.useMemo(() => {
      if (c3) {
        let result = context(handleViewableItemsChanged[19]).ensureRecommendationSectionsOnlyContainActivities(stateFromStores);
        const obj = context(handleViewableItemsChanged[19]);
      } else {
        result = stateFromStores;
      }
      return result;
    }, items5);
    const items6 = [tmp13, entrypoint];
    const effect1 = tmp4.useEffect(() => {
      let obj = context(handleViewableItemsChanged[19]);
      if (obj.appLauncherShowsRecommendations(entrypoint)) {
        obj = { surface: memo, activeState: c8 };
        const collections = context(handleViewableItemsChanged[78]).fetchCollections(obj);
        const obj2 = context(handleViewableItemsChanged[78]);
      }
    }, items6);
    const items7 = [entrypoint, tmp2Result];
    memo4 = tmp4.useMemo(() => {
      let diff;
      function getTupleItem(arg0) {
        let shelfItem1;
        let shelfItem1SectionPosition;
        let shelfItem2;
        let shelfItem2SectionPosition;
        ({ shelfItem1, shelfItem2, shelfItem1SectionPosition, shelfItem2SectionPosition } = arg0);
        return { type: context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE, shelfItem1, shelfItem2, sectionName: "activities", shelfItem1SectionPosition, shelfItem2SectionPosition, sectionOverallPosition: 0, isLastTuple: false };
      }
      if (0 !== _undefined.length) {
        if (entrypoint === context(handleViewableItemsChanged[41]).AppLauncherEntrypoint.VOICE) {
          const items = [];
          let num = 0;
          if (0 < _undefined.length - 1) {
            do {
              let sum = num + 1;
              let obj = {};
              let tmp2 = _undefined;
              obj.shelfItem1 = _undefined[num];
              let tmp3 = _undefined;
              obj.shelfItem2 = _undefined[sum];
              obj.shelfItem1SectionPosition = num;
              obj.shelfItem2SectionPosition = sum;
              let arr = items.push(getTupleItem(obj));
              num = num + 2;
              let tmp5 = _undefined;
              diff = _undefined.length - 1;
            } while (num < diff);
          }
          if (_undefined.length % 2 === 1) {
            obj = { shelfItem1: _undefined[_undefined.length - 1], shelfItem2: undefined, shelfItem1SectionPosition: _undefined.length - 1, shelfItem2SectionPosition: undefined };
            items.push(getTupleItem(obj));
          }
          items[items.length - 1].isLastTuple = true;
          obj = { type: context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.SECTION_HEADER };
          const intl = context(handleViewableItemsChanged[17]).intl;
          obj.section = intl.string(context(handleViewableItemsChanged[17]).t.aeuOoh);
          obj.sectionName = "activities";
          obj.numItems = _undefined.length;
          obj.numVisibleItems = _undefined.length;
          const items1 = [obj];
          HermesBuiltin.arraySpread(items, 1);
          return items1;
        }
      }
      return [];
    }, items7);
    const tmp18 = keyboardCloseReasonRef(context, true, false);
    c12 = tmp18;
    const tmp19 = width(true, false);
    c13 = tmp19;
    let result = tmp18.result;
    let sections;
    if (null != result) {
      sections = result.sections;
    }
    const items8 = [sections, ];
    let result2 = tmp19.result;
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
      const result = _undefined2.result;
      let sections;
      if (null != result) {
        sections = result.sections;
      }
      if (null == sections) {
        sections = {};
      }
      const result2 = _undefined3.result;
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
    const items9 = [closure_12];
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
          isDMResult = _undefined2.can(frecencyUsedAppList.USE_APPLICATION_COMMANDS, context.channel);
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
      let tmp30 = null != channel && channel.isPrivate();
    }
    if (tmp29) {
      tmp29 = !tmp4;
    }
    c14 = tmp29;
    const items10 = [memo3, tmp2Result, tmp29];
    memo6 = tmp4.useMemo(() => {
      const items = [];
      if (c14) {
        return items;
      } else {
        const _Set = Set;
        const set = new Set();
        let item = memo3.forEach((application_directory_collection_items) => {
          const prop = application_directory_collection_items.application_directory_collection_items;
          const item = prop.forEach((type) => {
            if (type.type === context(handleViewableItemsChanged[79]).ApplicationDirectoryCollectionItemType.APPLICATION) {
              outer1_1.add(type.application.id);
            }
          });
        });
        const item1 = _undefined.forEach((application) => {
          if (!set.has(application.application.id)) {
            items.push(application);
          }
        });
        return items;
      }
    }, items10);
    const items11 = [memo6, memo3, tmp29];
    memo7 = tmp4.useMemo(() => {
      let items = [];
      if (c14) {
        items = [];
      } else {
        let item = memo3.forEach((title, sectionOverallPosition) => {
          let application_directory_collection_items;
          let type;
          ({ type, application_directory_collection_items } = title);
          if (type === context(handleViewableItemsChanged[80]).ApplicationDirectoryCollectionType.BANNER_CARDS) {
            const _Math = Math;
            let obj = {};
            const bound = Math.min(length, context(handleViewableItemsChanged[81]).COLLAPSED_LIST_ITEM_MAX);
            obj.type = context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER;
            ({ title: obj.section, title: obj.sectionName } = title);
            obj.numItems = application_directory_collection_items.length;
            obj.numVisibleItems = bound;
            found.push(obj);
            let num4 = 0;
            if (0 < application_directory_collection_items.length) {
              do {
                let tmp21 = application_directory_collection_items[num4];
                let sum = num4 + 1;
                if (sum < application_directory_collection_items.length) {
                  let tmp23 = application_directory_collection_items[sum];
                }
                let tmp24 = context;
                let tmp25 = handleViewableItemsChanged;
                let tmp26 = tmp20;
                if (tmp21.type === context(handleViewableItemsChanged[79]).ApplicationDirectoryCollectionItemType.APPLICATION) {
                  let tmp27 = null != tmp21.id && null != tmp21.image_hash;
                  let collectionItemAssetUrl;
                  if (tmp27) {
                    let tmp29 = context;
                    let tmp30 = handleViewableItemsChanged;
                    let obj1 = context(handleViewableItemsChanged[82]);
                    obj = {};
                    ({ id: obj3.itemId, image_hash: obj3.hash } = tmp21);
                    collectionItemAssetUrl = obj1.getCollectionItemAssetUrl(obj);
                  }
                  obj = { application: tmp21.application };
                  let tmp31 = context;
                  let tmp32 = handleViewableItemsChanged;
                  let obj5 = context(handleViewableItemsChanged[83]);
                  obj.showsPromoted = obj5.hasFlag(tmp21.flags, context(handleViewableItemsChanged[84]).ApplicationCollectionItemFlags.PROMOTED);
                  obj.overrideImageUrl = collectionItemAssetUrl;
                  let tmp33;
                  let tmp34 = tmp20;
                  if (null != tmp23) {
                    let tmp35 = context;
                    let tmp36 = handleViewableItemsChanged;
                    tmp34 = tmp20;
                    if (tmp23.type === context(handleViewableItemsChanged[79]).ApplicationDirectoryCollectionItemType.APPLICATION) {
                      let tmp37 = null != tmp23.id && null != tmp23.image_hash;
                      let collectionItemAssetUrl1;
                      if (tmp37) {
                        let tmp39 = context;
                        let tmp40 = handleViewableItemsChanged;
                        let obj6 = context(handleViewableItemsChanged[82]);
                        obj1 = {};
                        ({ id: obj7.itemId, image_hash: obj7.hash } = tmp23);
                        collectionItemAssetUrl1 = obj6.getCollectionItemAssetUrl(obj1);
                      }
                      let obj2 = { application: tmp23.application };
                      let tmp41 = context;
                      let tmp42 = handleViewableItemsChanged;
                      let obj9 = context(handleViewableItemsChanged[83]);
                      obj2.showsPromoted = obj9.hasFlag(tmp23.flags, context(handleViewableItemsChanged[84]).ApplicationCollectionItemFlags.PROMOTED);
                      obj2.overrideImageUrl = collectionItemAssetUrl1;
                      tmp34 = collectionItemAssetUrl1;
                      tmp33 = obj2;
                    }
                  }
                  let obj3 = {};
                  let tmp44 = context;
                  let tmp45 = handleViewableItemsChanged;
                  let tmp43 = found;
                  obj3.type = context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE;
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
                  let arr = found.push(obj3);
                  let tmp48 = collectionItemAssetUrl;
                  let tmp49 = obj;
                  let tmp50 = tmp33;
                  tmp26 = tmp34;
                }
                num4 = num4 + 2;
                tmp20 = tmp26;
              } while (num4 < application_directory_collection_items.length);
            }
          } else if (type === context(handleViewableItemsChanged[80]).ApplicationDirectoryCollectionType.EXPANDABLE_LIST) {
            const prop = title.application_directory_collection_items;
            const mapped = prop.map((type) => {
              if (type.type === context(handleViewableItemsChanged[79]).ApplicationDirectoryCollectionItemType.APPLICATION) {
                const obj = { application: type.application, showsPromoted: context(handleViewableItemsChanged[83]).hasFlag(type.flags, context(handleViewableItemsChanged[84]).ApplicationCollectionItemFlags.PROMOTED) };
                return obj;
              }
            });
            found = mapped.filter(context(handleViewableItemsChanged[66]).isNotNullish);
            if (obj11.hasFlag(title.flags, context(handleViewableItemsChanged[85]).ApplicationCollectionFlags.APPENDS_REMAINING_ACTIVITIES)) {
              const item = outer1_15.forEach((application) => {
                found.push({ application: application.application, showsPromoted: false });
              });
            }
            const push = found.push;
            const items = [];
            HermesBuiltin.arraySpread(callback8(found, title.title, title.title, undefined, sectionOverallPosition), 0);
            HermesBuiltin.apply(items, found);
            obj11 = context(handleViewableItemsChanged[83]);
          }
        });
      }
      return items;
    }, items11);
    const items12 = [entrypoint, memo7, memo4];
    obj = {
      list: tmp4.useMemo(() => {
        let obj = context(handleViewableItemsChanged[19]);
        if (obj.appLauncherShowsRecommendations(entrypoint)) {
          obj = { type: context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.LEARN_MORE };
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
  })({ context, entrypoint });
  const list = tmp12.list;
  const frecencyCommands = tmp12.frecencyCommands;
  const frecencyUsedAppList = tmp12.frecencyUsedAppList;
  const sectionDescriptors = tmp12.sectionDescriptors;
  const inThisServerItems = tmp12.inThisServerItems;
  let items4 = [context, entrypoint, navigation, sectionDescriptors];
  ({ loading, showsEmptyState, showNoPermsState } = tmp12);
  const callback3 = React.useCallback((application) => {
    application = application.application;
    let obj = context(handleViewableItemsChanged[19]);
    let tmp = !obj.isEmbeddedApp(application);
    if (tmp) {
      tmp = null != sectionDescriptors.find((id) => id.id === application.id);
    }
    obj = { location: context(handleViewableItemsChanged[29]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, application, navigation, context: application, installOnDemand: !tmp, sectionName: application.sectionName, entrypoint };
    const result = context(handleViewableItemsChanged[23]).handleApplicationSelected(obj);
  }, items4);
  let obj2 = context(handleViewableItemsChanged[43]);
  const clickOnHomeActivityOpensAppDetails = obj2.useClickOnHomeActivityOpensAppDetails();
  let items5 = [clickOnHomeActivityOpensAppDetails, context, entrypoint, tmp3, size.width > size.height, list.length, navigation, onActivityItemSelected, callback2, callback1, callback3, tmp5, tmp4.sectionHeader, width];
  const callback4 = React.useCallback((item) => {
    item = item.item;
    const index = item.index;
    const type = item.type;
    if (context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
      let obj = { isFirstRow: 0 === index, isLastRow: index === list.length - 1 };
      obj = { height: closure_6 };
      obj.style = obj;
      return inThisServerItems(initialSearchQuery(handleViewableItemsChanged[45]), obj);
    } else if (context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
      const obj1 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary" };
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
            outer1_14({ shelfData, sectionName: item.sectionName });
          }
      };
      ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
      return inThisServerItems(pinnedSearchBarBottomBorder, obj3, item.section.application.id);
    } else if (context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
      const obj4 = {
        context: item,
        sectionName: context(handleViewableItemsChanged[41]).AppLauncherSectionName.ACTIVITIES,
        onPress(shelfData) {
            const obj = { shelfData, sectionName: item.sectionName };
            let tmp3 = !tmp2;
            if (!outer1_21) {
              tmp3 = outer1_10 !== context(handleViewableItemsChanged[41]).AppLauncherEntrypoint.VOICE;
            }
            obj.navigates = tmp3;
            outer1_14(obj);
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
        context: item,
        sectionName: item.sectionName,
        onPress(application, sectionName) {
            return outer1_20({ application, sectionName });
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
            outer1_13(item.section, context(handleViewableItemsChanged[41]).AppLauncherSectionName.INSTALLED);
          }
      };
      ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
      const obj7 = { height: closure_6 };
      obj6.style = obj7;
      return inThisServerItems(closure_28, obj6, item.section.id);
    } else if (context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
      const obj8 = { index, children: item.section };
      return inThisServerItems(trackAppLauncherHomeItemImpression, obj8);
    } else if (context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
      const obj9 = { application: item.item.application };
      ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
      obj9.onPress = function onPress() {
        return outer1_20({ application: item.item.application, sectionName: item.sectionName });
      };
      obj9.isLandscape = closure_12;
      ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
      return inThisServerItems(initialSearchQuery(handleViewableItemsChanged[46]), obj9);
    } else if (context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
      const obj10 = {};
      ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
      obj10.onPress = function onPress() {
        return outer1_20({ application: item.application, sectionName: item.sectionName });
      };
      obj10.showsPromoted = item.showsPromoted;
      return inThisServerItems(initialSearchQuery(handleViewableItemsChanged[47]), obj10, item.application.id);
    } else if (context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.VIEW_ALL === type) {
      const obj11 = {
        title: item.title,
        onPress() {
            const applications = item.applications;
            const mapped = applications.map((arg0) => arg0);
            let obj = context(handleViewableItemsChanged[23]);
            obj = { location: context(handleViewableItemsChanged[29]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation: outer1_2, context: item, sectionName: item.sectionName, sectionOverallPosition: item.sectionOverallPosition, applications: mapped, sectionItemType: context(handleViewableItemsChanged[49]).SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((application) => context(handleViewableItemsChanged[50]).getApplicationCommandSection(application)), title: item.title, promotedApplicationIds: item.promotedApplicationIds };
            const result = obj.handleViewAllSelected(obj);
          }
      };
      return inThisServerItems(initialSearchQuery(handleViewableItemsChanged[48]), obj11);
    } else if (context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
      return inThisServerItems(callback6, {});
    } else if (context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.LEARN_MORE === type) {
      obj = { visible: tmp3.valueOf() };
      return inThisServerItems(initialSearchQuery(handleViewableItemsChanged[51]), obj);
    } else {
      return null;
    }
  }, items5);
  const ref = React.useRef(null);
  const tmp17 = callback(React.useState(false), 2);
  const first = tmp17[0];
  let closure_23 = tmp17[1];
  let items6 = [entrypoint];
  let memo = React.useMemo(() => initialSearchQuery(handleViewableItemsChanged[52]).debounce((query) => {
    let obj = context(handleViewableItemsChanged[53]);
    obj = { query, source: outer1_10 };
    obj.trackWithMetadata(frecencyCommands.APP_LAUNCHER_SEARCH_QUERY_TYPED, obj);
  }, 400, { leading: false, trailing: true }), items6);
  _createForOfIteratorHelperLoose = React.useRef(null);
  let effect1 = React.useEffect(() => () => {
    const current = outer1_25.current;
    if (null != current) {
      current.cancel();
    }
  }, []);
  let items7 = [memo];
  const callback5 = React.useCallback((arg0) => {
    let closure_0 = arg0;
    callback(0 !== arg0.length);
    let current = ref.current;
    if (null != current) {
      current.cancel();
    }
    ref.current = context(handleViewableItemsChanged[54]).runAfterInteractions(() => {
      const current = outer1_22.current;
      if (null != current) {
        current.setQuery(closure_0);
      }
    }, 100);
    memo(arg0);
  }, items7);
  let closure_27 = React.useRef(callback5);
  let items8 = [callback5];
  const effect2 = React.useEffect(() => {
    closure_27.current = callback5;
  }, items8);
  let items9 = [entrypoint];
  let closure_28 = React.useCallback(() => {
    let obj = context(handleViewableItemsChanged[53]);
    obj = { source: entrypoint };
    obj.trackWithMetadata(frecencyCommands.APP_LAUNCHER_SEARCH_FOCUSED, obj);
  }, items9);
  let obj3 = context(handleViewableItemsChanged[55]);
  obj = {};
  let str = "home-scroller";
  if (first) {
    str = "search-scroller";
  }
  obj.key = str;
  obj.triggerScrollHeight = 5;
  pinnedSearchBarBottomBorder = obj3.usePinnedSearchBarBottomBorder(obj);
  ref1 = React.useRef(null);
  let items10 = [initialSearchQuery];
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
  let sum = initialSearchQuery(handleViewableItemsChanged[35])().bottom + callback2;
  c31 = sum;
  let obj5 = context(handleViewableItemsChanged[56]);
  const bottomSheetFlashListBottomViewabilityInset = obj5.useBottomSheetFlashListBottomViewabilityInset();
  let scrollerRef = bottomSheetFlashListBottomViewabilityInset.flashListRef;
  obj = { type: context(handleViewableItemsChanged[58]).ImpressionTypes.VIEW, name: context(handleViewableItemsChanged[58]).ImpressionNames.APP_LAUNCHER_HOME_ACTIVITY_ITEM };
  obj1 = { disableTrack: !tmp2 };
  let items11 = [tmp2];
  initialSearchQuery(handleViewableItemsChanged[57])(obj, obj1, items11);
  let tmp30 = callback(React.useState(false), 2);
  closure_32 = tmp30[1];
  const effect3 = React.useEffect(() => {
    callback3(true);
  }, []);
  let obj8 = context(handleViewableItemsChanged[28]);
  let items12 = [callback1];
  stateFromStores = obj8.useStateFromStores(items12, () => callback1.getTriggeredOnboardingContentMetadata().willShowGlobalSearchOnboarding);
  const items13 = [stateFromStores];
  callback6 = React.useCallback((arg0) => {
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
  let obj9 = context(handleViewableItemsChanged[62]);
  trackAppLauncherHomeItemImpression = obj9.useTrackAppLauncherHomeItemImpression().trackAppLauncherHomeItemImpression;
  const items14 = [sum, tmp4.list];
  const items15 = [sum];
  let memo1 = React.useMemo(() => {
    const obj = {};
    const merged = Object.assign(tmp4.list);
    obj["paddingBottom"] = c31;
    return obj;
  }, items14);
  let memo2 = React.useMemo(() => ({ bottom: c31 }), items15);
  const items16 = [pinnedSearchBarBottomBorder];
  const callback7 = React.useCallback((type) => type.type, []);
  callback8 = React.useCallback((arg0) => {
    pinnedSearchBarBottomBorder.scrollHandler(arg0);
  }, items16);
  const items17 = [callback8];
  const callback9 = React.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    callback8({ width: nativeEvent.layoutMeasurement.width, height: nativeEvent.layoutMeasurement.height, offset: nativeEvent.contentOffset.y, contentWidth: nativeEvent.contentSize.width, contentHeight: nativeEvent.contentSize.height });
  }, items17);
  let obj10 = context(handleViewableItemsChanged[63]);
  const appLauncherFlashListProps = obj10.useAppLauncherFlashListProps({ onScrollHandler: callback8 });
  const items18 = [handleViewableItemsChanged, trackAppLauncherHomeItemImpression];
  obj2 = { style: tmp4.container };
  obj3 = { style: tmp4.topBackgroundFill };
  let memo3 = React.useMemo(() => {
    let obj = { viewabilityConfig: {}, onViewableItemsChanged: handleViewableItemsChanged };
    const items = [obj, ];
    obj = { viewabilityConfig: list, onViewableItemsChanged: trackAppLauncherHomeItemImpression };
    items[1] = obj;
    return items;
  }, items18);
  const items19 = [inThisServerItems(View, obj3), , , ];
  let obj4 = {};
  obj5 = { style: tmp4.searchBarContainer };
  let obj6 = { ref: ref1 };
  if (entrypoint === context(handleViewableItemsChanged[41]).AppLauncherEntrypoint.VOICE) {
    let intl2 = context(handleViewableItemsChanged[17]).intl;
    let stringResult = intl2.string(context(handleViewableItemsChanged[17]).t["pw+r5b"]);
  } else {
    let intl = context(handleViewableItemsChanged[17]).intl;
    stringResult = intl.string(context(handleViewableItemsChanged[17]).t.ziyFv2);
  }
  obj6.placeholder = stringResult;
  obj6.isRound = true;
  obj6.size = "md";
  obj6.onChange = callback5;
  obj6.onFocus = function onFocus() {
    callback2();
    callback6({ actionType: sectionDescriptors.TAKE_ACTION });
  };
  obj5.children = inThisServerItems(context(handleViewableItemsChanged[64]).SearchField, obj6);
  const items20 = [inThisServerItems(View, obj5), pinnedSearchBarBottomBorder.bottomBorderComponent];
  obj4.children = items20;
  items19[1] = callback3(clickOnHomeActivityOpensAppDetails, obj4);
  if (first) {
    let obj7 = { ref, context, onScroll: callback9, onSend: callback, entrypoint };
    let tmp53Result = tmp53(context(handleViewableItemsChanged[65]).SearchLocalAndGlobalContentView, obj7);
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
            let stringResult = intl3.string(context(handleViewableItemsChanged[17]).t["2pFD8L"]);
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
    const items21 = [inThisServerItems(initialSearchQuery(handleViewableItemsChanged[49]), obj10), , , ];
    let obj11 = {
      items: inThisServerItems,
      onAppSelected: callback3,
      onViewAllSelected() {
          const found = inThisServerItems.find((type) => type.type === context(handleViewableItemsChanged[44]).AppLauncherHomeListItemType.VIEW_ALL);
          let mapped;
          if (null != found) {
            const applications = found.applications;
            if (null != applications) {
              mapped = applications.map((arg0) => arg0);
            }
          }
          if (null != mapped) {
            let obj = context(handleViewableItemsChanged[23]);
            obj = { location: context(handleViewableItemsChanged[29]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, navigation, context, sectionName: context(handleViewableItemsChanged[41]).AppLauncherSectionName.APPS_IN_THIS_SERVER, applications: mapped, sectionItemType: context(handleViewableItemsChanged[49]).SectionItemType.APPS, commands: [], sectionDescriptors: mapped.map((application) => context(handleViewableItemsChanged[50]).getApplicationCommandSection(application)) };
            const intl = context(handleViewableItemsChanged[17]).intl;
            obj.title = intl.string(context(handleViewableItemsChanged[17]).t.oJyzCu);
            const result = obj.handleViewAllSelected(obj);
          }
        }
    };
    items21[1] = inThisServerItems(initialSearchQuery(handleViewableItemsChanged[67]), obj11);
    let tmp61 = null;
    if (showsEmptyState) {
      tmp61 = null;
      if (tmp30[0]) {
        tmp61 = inThisServerItems(initialSearchQuery(handleViewableItemsChanged[68]), {});
      }
    }
    items21[2] = tmp61;
    let tmp65 = null;
    if (showNoPermsState) {
      tmp65 = inThisServerItems(initialSearchQuery(handleViewableItemsChanged[69]), {});
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
    if (entrypoint === context(handleViewableItemsChanged[41]).AppLauncherEntrypoint.VOICE) {
      scrollerRef = appLauncherFlashListProps.scrollerRef;
    }
    obj8.ref = scrollerRef;
    obj8.onScroll = callback9;
    ({ onScroll: obj17.animatedOnScroll, gestureRef: obj17.simultaneousHandlers, animatedProps: obj17.animatedProps } = appLauncherFlashListProps);
    tmp53Result = tmp53(initialSearchQuery(handleViewableItemsChanged[63]), obj8);
    const tmp56 = initialSearchQuery(handleViewableItemsChanged[63]);
    const tmp57 = callback3;
    const tmp58 = clickOnHomeActivityOpensAppDetails;
  }
  items19[2] = tmp53Result;
  let tmp74 = entrypoint === context(handleViewableItemsChanged[41]).AppLauncherEntrypoint.TEXT;
  if (tmp74) {
    const obj12 = { windowDimensions: size, visible: stateFromStores, markAsDismissed: callback6 };
    tmp74 = inThisServerItems(initialSearchQuery(handleViewableItemsChanged[70]), obj12);
  }
  items19[3] = tmp74;
  obj2.children = items19;
  return callback3(View, obj2);
};
export { BaseAppRow };
