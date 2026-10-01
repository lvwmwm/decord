// Module ID: 11565
// Function ID: 11566
// Name: AppLauncherHomeScreen
// Dependencies: [32, 19, 17, 2044, 8591, 4835, 11555, 4469, 11526, 1484, 1074, 2042, 21, 576, 11559, 4836, 4832, 1115, 11538, 8590, 9575, 7304, 5917, 11533, 1397, 10456, 11566, 8933, 504, 6943, 11567, 5899, 8370, 11568, 11542, 6364, 1613, 11569, 7715, 6470, 10785, 1479, 8712, 8782, 11571, 11570, 11572, 11573, 11575, 11576, 11534, 6941, 11577, 12, 5016, 6459, 11579, 11580, 8230, 1249, 4654, 2029, 11581, 11582, 11584, 6471, 11586, 1370, 11592, 11593, 11595, 11598, 11599, 11560, 11600, 11521, 11601, 11604, 8789, 11553, 8720, 11605, 11590, 11606, 1385, 11607, 11608, 2]
// Exports: default

// Module 11565 (AppLauncherHomeScreen)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4654 */;
import Text_Text from "Text/Text" /* 4832 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6364 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 6943 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 7304 */;
import AppLauncherUtils from "AppLauncherUtils" /* 8590 */;
import AppLauncherTypes from "AppLauncherTypes" /* 8712 */;
import EmbeddedActivitiesActionCreatorsAll from "EmbeddedActivitiesActionCreators" /* 8782 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 8933 */;
import MessagePreviewMarkup from "MessagePreviewMarkup" /* 9575 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10456 */;
import AppLauncherContext from "AppLauncherContext" /* 10785 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 11533 */;
import FrecencySection from "FrecencySection" /* 11534 */;
import EntityBorderAppIconDefault from "EntityBorderAppIcon" /* 11538 */;
import ApplicationCollectionSurface from "ApplicationCollectionSurface" /* 11559 */;
import HeroMedia from "HeroMedia" /* 11566 */;
import ActivityShelfBadgeDefault from "ActivityShelfBadge" /* 11568 */;
import AppLauncherHomeTypes from "AppLauncherHomeTypes" /* 11570 */;
import AppLauncherOnboardingActionCreators from "AppLauncherOnboardingActionCreators" /* 11581 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 8591 */;
import DevSettingsStore from "DevSettingsStore" /* 4835 */;
import ApplicationDirectoryCollectionsStore from "ApplicationDirectoryCollectionsStore" /* 11555 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import AppLauncherOnboardingPersistedStore from "AppLauncherOnboardingPersistedStore" /* 11526 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1484 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, nativeEvent, navigation, set;

let StyleSheet;
let c9;
let closure_16;
let closure_17;
let closure_19;
let closure_20;
let closure_21;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let rect;
function AppRowLabel(renderedName) {
  let Text;
  let intl;
  let items;
  let obj5;
  let tmp5;
  renderedName = renderedName.renderedName;
  const showsPromoted = renderedName.showsPromoted;
  const tmp = closure_25();
  if (showsPromoted) {
    const obj2 = { style: tmp.appRowLabelWithPromotedContainer, children: items };
    const obj3 = { style: tmp.appRowLabelWithPromotedTextContainer, variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: renderedName };
    items = [closure_19(Text_Text.Text, obj3), ];
    const obj4 = { style: tmp.promotedLabel, children: closure_19(Text, obj5) };
    obj5 = { variant: "text-xxs/semibold", color: "text-muted", children: intl.string(intl4.t["/eVltv"]) };
    Text = Text_Text.Text;
    intl = intl4.intl;
    items[1] = closure_19(metroRequire, obj4);
    tmp5 = closure_20(metroRequire, obj2);
  } else {
    const obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: renderedName };
    tmp5 = closure_19(Text_Text.Text, obj);
  }
  return tmp5;
}
class BaseAppRow {
  constructor(application) {
    let iconSource;
    let isFirstRow;
    application = application.application;
    ({ iconSource, isFirstRow } = application);
    const onPress = application.onPress;
    if (isFirstRow === undefined) {
      isFirstRow = false;
    }
    let flag = application.isLastRow;
    if (flag === undefined) {
      flag = false;
    }
    let flag2 = application.showsPromoted;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let tmp = null != iconSource;
    if (tmp) {
      let obj = { iconSource };
      tmp = closure_19(EntityBorderAppIconDefault, obj);
    }
    let FAKE_BUILT_IN_APP = application;
    const getSectionName = application(8590).getSectionName;
    application(8590);
    if (application == null) {
      FAKE_BUILT_IN_APP = tmp5(8590).FAKE_BUILT_IN_APP;
    }
    const sectionName = getSectionName(FAKE_BUILT_IN_APP);
    if (!flag2) {
      let FAKE_BUILT_IN_APP2 = application;
      const isPromotedApplication = application(8590).isPromotedApplication;
      application(8590);
      if (application == null) {
        FAKE_BUILT_IN_APP2 = tmp5(8590).FAKE_BUILT_IN_APP;
      }
      flag2 = isPromotedApplication(FAKE_BUILT_IN_APP2);
    }
    const items = [application];
    const memo = react.useMemo(() => {
      let FAKE_BUILT_IN_APP = application;
      const getSectionDescription = AppLauncherUtils.getSectionDescription;
      AppLauncherUtils;
      if (application == null) {
        FAKE_BUILT_IN_APP = tmp(8590).FAKE_BUILT_IN_APP;
      }
      const sectionDescription = getSectionDescription(FAKE_BUILT_IN_APP);
      let result = null;
      if (null != sectionDescription) {
        result = null;
        if ("" !== sectionDescription) {
          const obj = { content: sectionDescription, muted: false, layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COMPACT, color: "text-muted" };
          const renderMessagePreviewMarkup = MessagePreviewMarkup.renderMessagePreviewMarkup;
          MessagePreviewMarkup;
          result = renderMessagePreviewMarkup(obj);
        }
      }
      return result;
    }, items);
    const obj2 = { icon: tmp, label: closure_19(AppRowLabel, { renderedName: sectionName, showsPromoted: flag2 }), labelLineClamp: 1, subLabel: memo, subLabelLineClamp: 1, start: isFirstRow, end: flag, arrow: true, onPress };
    const TableRow = tmp5(5917).TableRow;
    return closure_19(TableRow, obj2);
  }
}
function AppRow(onPress) {
  let isFirstRow;
  let section;
  ({ section, isFirstRow } = onPress);
  onPress = onPress.onPress;
  if (isFirstRow === undefined) {
    isFirstRow = false;
  }
  let flag = onPress.isLastRow;
  if (flag === undefined) {
    flag = false;
  }
  const obj = AppLauncherNativeUtils;
  const obj2 = { application: section.application, iconSource: obj.getAppLauncherIconSource(section.application), onPress, isFirstRow, isLastRow: flag };
  return closure_19(BaseAppRow, obj2);
}
function ActivityRow(section) {
  let bot;
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
  let obj = { id: section.application.id, icon: section.application.icon, bot, botIconFirst: true };
  const application = section.application;
  bot = undefined;
  const getApplicationIconSource = onPress(1397).getApplicationIconSource;
  const tmp = onPress;
  const tmp3 = onPress(1397);
  if (application != null) {
    bot = application.bot;
  }
  const applicationIconSource = getApplicationIconSource(obj);
  let tmp6 = null != applicationIconSource;
  if (tmp6) {
    const obj2 = { iconSource: applicationIconSource };
    tmp6 = closure_19(tmp(11538), obj2);
  }
  const items = [section];
  const items1 = [section, onPress];
  const memo = react.useMemo(() => {
    const description = section.application.description;
    let result = null;
    if (null != description) {
      result = null;
      if ("" !== description) {
        const obj = { content: description, muted: false, layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COMPACT, color: "text-muted" };
        const renderMessagePreviewMarkup = MessagePreviewMarkup.renderMessagePreviewMarkup;
        MessagePreviewMarkup;
        result = renderMessagePreviewMarkup(obj);
      }
    }
    return result;
  }, items);
  const callback = react.useCallback(() => {
    onPress(section);
  }, items1);
  const obj3 = { icon: tmp6, label: section.application.name, subLabel: memo, subLabelLineClamp: 1, start: flag, end: flag2, arrow: true, onPress: callback };
  return closure_19(section(5917).TableRow, obj3);
}
function ActivityItemTuple(arg0) {
  let containerWidth;
  let context;
  let entrypoint;
  let isLastTuple;
  let items2;
  let obj3;
  let obj9;
  let onActivityItemSelected;
  let onPress;
  let sectionName;
  let shelfItem1;
  let shelfItem2;
  let usesHandleActivityItemSelected;
  ({ context, sectionName, onPress, usesHandleActivityItemSelected, onActivityItemSelected, shelfItem2, entrypoint, containerWidth } = arg0);
  ({ shelfItem1, isLastTuple } = arg0);
  const tmp = closure_25();
  const items = [containerWidth];
  size = react.useMemo(() => {
    if (null == containerWidth) {
      return { width: "Array", height: "channel" };
    } else {
      const tmp5 = roundToNearestPixelDefault(tmp / 2 - DEFAULT_CONTENT_PADDING - 6);
      size = { width: tmp5, height: roundToNearestPixelDefault(tmp5 / c22) };
      return size;
    }
  }, items);
  const items1 = [tmp.activityItemTupleContainer, ];
  const obj = { style: items1, children: items2 };
  items1[1] = { marginBottom: 12 };
  let tmp5 = ActivityItem;
  const obj2 = { style: tmp.activityItemTupleShelfItemContainer, children: closure_19(ActivityItem, obj3) };
  obj3 = { context, sectionName, onPress, usesHandleActivityItemSelected, onActivityItemSelected, shelfItem: shelfItem1, entrypoint, imageWidth: size.width, imageHeight: size.height };
  items2 = [closure_19(tmp3, obj2), ];
  let tmp4Result = null != shelfItem2;
  const tmp2 = closure_20;
  if (tmp4Result) {
    const obj4 = { style: tmp.activityItemTupleShelfItemContainer, children: closure_19(tmp5, obj9) };
    obj9 = { context, sectionName, onPress, usesHandleActivityItemSelected, onActivityItemSelected, shelfItem: shelfItem2, entrypoint, imageWidth: null, imageHeight: null };
    ({ width: obj5.imageWidth, height: obj5.imageHeight } = size);
    tmp4Result = tmp4(tmp3, obj4);
  }
  items2[1] = tmp4Result;
  return tmp2(closure_6, obj);
}
function ActivityItem(context) {
  let closure_4;
  let entrypoint;
  let imageHeight;
  let imageWidth;
  let items3;
  let items4;
  let obj11;
  let obj6;
  let onActivityItemSelected;
  let tmp19;
  let width;
  const f93940 = () => {
    const items = [EmbeddedActivitiesStore.isLaunchingActivity(), ];
    let id1;
    const getLaunchState = EmbeddedActivitiesStore.getLaunchState;
    const id = shelfItem.application.id;
    if ("channel" === context.type) {
      id1 = context.channel.id;
    }
    items[1] = getLaunchState(id, id1);
    return items;
  };
  context = context.context;
  const shelfItem = context.shelfItem;
  const onPress = context.onPress;
  let flag = context.usesHandleActivityItemSelected;
  const sectionName = context.sectionName;
  if (flag === undefined) {
    flag = false;
  }
  ({ imageWidth, imageHeight } = context);
  _slicedToArray = undefined;
  let handleActivityItemSelected;
  ({ onActivityItemSelected, entrypoint } = context);
  let tmp = closure_25();
  const obj = context(flag[26]);
  const heroMediaDimensions = obj.useHeroMediaDimensions();
  const tmp6 = _slicedToArray(handleActivityItemSelected.useState(false), 2);
  const tmp5 = _slicedToArray;
  _slicedToArray = tmp6[1];
  const first = tmp6[0];
  const obj3 = { applicationId: shelfItem.application.id, size: width, names: ["embedded_cover"] };
  width = imageWidth;
  const tmp9 = shelfItem(flag[27]);
  if (imageWidth == null) {
    width = heroMediaDimensions.width;
  }
  const tmp9Result = tmp9(obj3);
  let id = obj2.useId();
  let items = [EmbeddedActivitiesStore];
  const tmp2Result = context(flag[28]);
  let isLaunching = null != tmp14;
  const first1 = tmp5(tmp2Result.useStateFromStoresArray(items, f93940), 2)[0];
  const tmp5Result = tmp5(tmp2Result.useStateFromStoresArray(items, f93940), 2);
  if (isLaunching) {
    isLaunching = tmp14.isLaunching;
  }
  if (isLaunching) {
    isLaunching = tmp14.componentId === id;
  }
  const tmp2Result3 = context(flag[19]);
  const shelfBadgeTypeIfActive = tmp2Result3.getShelfBadgeTypeIfActive(shelfItem.application);
  const tmp2Result4 = context(flag[23]);
  const obj4 = { applicationId: shelfItem.application.id, context, sectionName, onActivityItemSelected, location: context(flag[29]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, entrypoint, launchingComponentId: id, fetchesApplication: false };
  handleActivityItemSelected = tmp2Result4.useHandleActivityItemSelected(obj4).handleActivityItemSelected;
  const items1 = [handleActivityItemSelected, onPress, shelfItem, flag];
  let tmp17 = "not-found" === tmp9Result.state;
  const callback = obj2.useCallback(() => {
    const tmp = flag;
    if (tmp) {
      handleActivityItemSelected();
    }
    onPress(shelfItem);
  }, items1);
  if (!tmp17) {
    tmp17 = first;
  }
  const tmp18 = "loading" === tmp9Result.state || null == tmp9Result.url;
  if (tmp17) {
    tmp19 = closure_19(tmp8(tmp3[30]), {});
  } else {
    tmp19 = null;
    if (!tmp18) {
      const obj5 = {
        onError() {
              return closure_4(true);
            },
        style: tmp.activityItemImage,
        source: obj6,
        resizeMode: "cover"
      };
      obj6 = { uri: tmp9Result.url };
      tmp19 = closure_19(tmp8(tmp3[31]), obj5);
    }
  }
  const items2 = [tmp.activityImageContainer, ];
  let tmp24 = null != imageWidth;
  const obj7 = { style: tmp.activityItemContainer, disabled: first1, onPress: callback, children: items4 };
  const PressableScale = tmp2(tmp3[32]).PressableScale;
  if (tmp24) {
    tmp24 = null != imageHeight;
  }
  if (tmp24) {
    size = { width: imageWidth, height: imageHeight };
    tmp24 = size;
  }
  const obj8 = { style: items2, children: items3 };
  items2[1] = tmp24;
  items3 = [tmp19, closure_19(shelfItem(tmp3[33]), { labelType: shelfBadgeTypeIfActive }), ];
  const obj9 = { submitting: isLaunching, style: tmp.submittingOverlay };
  items3[2] = closure_19(context(flag[34]).SubmittingOverlay, obj9);
  items4 = [closure_20(closure_6, obj8), ];
  const obj10 = { style: tmp.activityDetailsContainer, children: closure_19(context(flag[16]).Text, obj11) };
  obj11 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: shelfItem.application.name };
  items4[1] = closure_19(closure_6, obj10);
  return closure_20(PressableScale, obj7);
}
function RecommendationItemTuple(isLastTuple) {
  let closure_5;
  let containerWidth;
  let context;
  let entrypoint;
  let items;
  let onPress;
  let require;
  let sectionName;
  ({ context: require, sectionName: importDefault, onPress: importAll, items, entrypoint: dependencyMap, containerWidth } = isLastTuple);
  let styles;
  isLastTuple = isLastTuple.isLastTuple;
  const tmp = closure_25();
  react = tmp;
  let num = 2;
  if (useIsWindowLargeDefault()) {
    num = 4;
  }
  const items1 = [containerWidth, num];
  styles = react.useMemo(() => {
    if (null == containerWidth) {
      return { width: "Array", height: "channel" };
    } else {
      const tmp6 = roundToNearestPixelDefault((tmp - 2 * DEFAULT_CONTENT_PADDING - 12 * (2 - 1)) / 2);
      size = { width: tmp6, height: roundToNearestPixelDefault(tmp6 / c22) };
      return size;
    }
  }, items1);
  const items2 = [tmp.activityItemTupleContainer, ];
  const tmp2 = closure_19;
  const tmp3 = num;
  let obj = {
    style: items2,
    children: items.map((item, index) => {
      let items;
      let obj3;
      const obj = { style: items, children: closure_19(RecommendationItem, obj3) };
      items = [closure_5.activityItemTupleShelfItemContainer, ];
      const obj2 = { width: styles.width };
      items[1] = obj2;
      obj3 = { context: require, sectionName: importDefault, onPress: importAll, item, entrypoint: dependencyMap, imageWidth: styles.width, imageHeight: styles.height };
      return closure_19(metroRequire, obj, "" + item.application.id + "-" + index);
    })
  };
  items2[1] = { marginBottom: 12 };
  return tmp2(tmp3, obj);
}
function RecommendationItem(onPress) {
  let closure_2;
  let context;
  let entrypoint;
  let first;
  let imageHeight;
  let imageWidth;
  let item;
  let items2;
  let items3;
  let obj12;
  let obj7;
  let sectionName;
  let tmp14;
  let tmp2Result;
  let width;
  ({ item, sectionName } = onPress);
  onPress = onPress.onPress;
  ({ imageWidth, imageHeight, context, entrypoint } = onPress);
  closure_2 = undefined;
  const tmp = closure_25();
  const obj = HeroMedia;
  const heroMediaDimensions = obj.useHeroMediaDimensions();
  [first, closure_2] = react.useState(false);
  const application = item.application;
  const obj3 = AppLauncherUtils;
  let isEmbeddedAppResult = obj3.isEmbeddedApp(application);
  const obj4 = { applicationId: application.id, size: width, names: ["embedded_cover"] };
  width = imageWidth;
  const obj2 = react;
  const tmp9 = useEmbeddedActivityBackgroundDefault;
  if (imageWidth == null) {
    width = heroMediaDimensions.width;
  }
  let tmp9Result = tmp9(obj4);
  if (null != item.overrideImageUrl) {
    tmp9Result = { state: "loaded", url: item.overrideImageUrl };
    const obj5 = { state: "loaded", url: item.overrideImageUrl };
  }
  const items = [onPress, application, sectionName];
  let tmp12 = "not-found" === tmp9Result.state;
  const callback = obj2.useCallback(() => {
    onPress(application, sectionName);
  }, items);
  if (!tmp12) {
    tmp12 = first;
  }
  const tmp13 = "loading" === tmp9Result.state || null == tmp9Result.url;
  if (tmp12) {
    tmp14 = closure_19(tmp8(11567), {});
  } else {
    tmp14 = null;
    if (!tmp13) {
      const obj6 = {
        onError() {
              return closure_2(true);
            },
        style: tmp.activityItemImage,
        source: obj7,
        resizeMode: "cover"
      };
      obj7 = { uri: tmp9Result.url };
      tmp14 = closure_19(tmp8(5899), obj6);
    }
  }
  const items1 = [tmp.activityImageContainer, ];
  let tmp19 = null != imageWidth;
  const obj8 = { style: tmp.activityItemContainer, onPress: callback, children: items3 };
  const PressableScale = tmp2(8370).PressableScale;
  if (tmp19) {
    tmp19 = null != imageHeight;
  }
  if (tmp19) {
    size = { width: imageWidth, height: imageHeight };
    tmp19 = size;
  }
  const obj9 = { style: items1, children: items2 };
  items1[1] = tmp19;
  items2 = [tmp14, ];
  if (isEmbeddedAppResult) {
    const obj10 = { labelType: tmp2Result.getShelfBadgeTypeIfActive(application) };
    const tmp8Result = ActivityShelfBadgeDefault;
    tmp2Result = AppLauncherUtils;
    isEmbeddedAppResult = closure_19(tmp8Result, obj10);
  }
  items2[1] = isEmbeddedAppResult;
  items3 = [closure_20(metroRequire, obj9), ];
  const obj11 = { style: tmp.activityDetailsContainer, children: closure_19(Text_Text.Text, obj12) };
  obj12 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: application.name };
  items3[1] = closure_19(metroRequire, obj11);
  return closure_20(PressableScale, obj8);
}
function Divider() {
  let items;
  const tmp = closure_25();
  const rect = useSafeAreaInsetsDefault();
  const obj = { style: items };
  items = [tmp.divider, ];
  const obj2 = { marginLeft: -DEFAULT_CONTENT_PADDING - rect.left, marginRight: -DEFAULT_CONTENT_PADDING - rect.right };
  items[1] = obj2;
  return closure_19(metroRequire, obj);
}
function RecommendationSectionHeader(arg0) {
  let children;
  let index;
  ({ index, children } = arg0);
  const style = [closure_25().sectionHeader, ];
  let obj = null;
  closure_25();
  const Text = Text_Text.Text;
  const tmp2 = closure_19;
  if (0 !== index) {
    obj = { marginTop: 24 };
  }
  style[1] = obj;
  return tmp2(Text, { accessibilityRole: "header", variant: "heading-lg/bold", color: "mobile-text-heading-primary", style, children });
}
function getRecommendationItemsWithViewAll(arr, sectionName, section, arg3) {
  let closure_3;
  let reduce;
  _require = sectionName;
  let COLLAPSED_LIST_ITEM_MAX = arg3;
  if (arg3 === undefined) {
    let tmp2 = dependencyMap;
    COLLAPSED_LIST_ITEM_MAX = require("ExpandableList").COLLAPSED_LIST_ITEM_MAX;
  }
  const sectionOverallPosition = tmp3;
  let bound;
  dependencyMap = undefined;
  let items;
  if (0 === arr.length) {
    return [];
  } else {
    const _Math = Math;
    bound = Math.min(length, COLLAPSED_LIST_ITEM_MAX);
    dependencyMap = tmp10;
    items = [];
    const obj2 = { type: require("AppLauncherHomeTypes").AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER, section, sectionName, numItems: arr.length, numVisibleItems: bound };
    items.push(obj2);
    const substr = arr.slice(0, bound);
    const item = substr.forEach((application, sectionPosition) => {
      let tmp2;
      const push = items.push;
      const obj = { type: AppLauncherHomeTypes.AppLauncherHomeListItemType.RECOMMENDATION_APP, application: application.application, showsPromoted: application.showsPromoted, isFirstRow: 0 === sectionPosition, isLastRow: tmp2, sectionName, sectionPosition, sectionOverallPosition };
      tmp2 = sectionPosition === bound - 1 && !closure_3;
      push(obj);
    });
    const tmp11 = _require;
    if (bound < arr.length) {
      let obj = {
        type: tmp11(11570).AppLauncherHomeListItemType.VIEW_ALL,
        applications: arr.map((application) => application.application),
        promotedApplicationIds: reduce((add, showsPromoted) => {
              if (showsPromoted.showsPromoted) {
                add.add(showsPromoted.application.id);
              }
              return add;
            }, set),
        sectionName,
        sectionOverallPosition: tmp3,
        title: section
      };
      let push = items.push;
      const _Set = Set;
      const self = this;
      const self2 = this;
      reduce = arr.reduce;
      set = new Set();
      push(obj);
    }
    return items;
  }
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: metroRequire, StyleSheet } = react_native);
({ useContextIndexState: metroImportAll, useUserIndexState: c9 } = ApplicationCommandIndexStore);
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG = AppLauncherNativeConstants.FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG;
({ AnalyticEvents: closure_16, Permissions: closure_17 } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = Fragment);
let c22 = 1.7777777777777777;
let closure_23 = [];
const PX_4 = nativeDefault.space.PX_4;
const APP_LAUNCHER_IN_TEXT = ApplicationCollectionSurface.ApplicationCollectionSurface.APP_LAUNCHER_IN_TEXT;
let createStyles = createStyles_mod;
let obj = { container: obj2, topBackgroundFill: rect, sectionHeader: { marginBottom: 8, marginTop: 8 }, list: obj3, searchBarContainer: { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingBottom: DEFAULT_CONTENT_PADDING }, divider: obj4, appRowLabelWithPromotedContainer: { overflow: "hidden", flexDirection: "row", alignItems: "center", gap: PX_4 }, appRowLabelWithPromotedTextContainer: { flexShrink: 1 }, promotedLabel: obj5, activityItemContainer: obj6, activityImageContainer: obj7, activityDetailsContainer: obj8, activityItemTupleContainer: { flexDirection: "row", gap: 12 }, activityItemTupleShelfItemContainer: { width: "50%", flexShrink: 1 }, activityItemImage: { height: "100%", width: "100%" }, submittingOverlay: { position: "absolute", top: 0, left: 0, height: "100%", width: "100%" } };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, flex: 1 };
createStyles = createStyles.createStyles;
rect = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, position: "absolute", top: -16, left: 0, right: 0, height: 16 };
obj3 = { paddingHorizontal: DEFAULT_CONTENT_PADDING, backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj4 = { borderColor: nativeDefault.colors.BORDER_STRONG, borderTopWidth: 1, marginTop: nativeDefault.space.PX_24 };
obj5 = { alignSelf: "center", justifyContent: "center", paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE, borderRadius: nativeDefault.radii.lg };
obj6 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_CARD_DEFAULT, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj7 = { justifyContent: "center", alignItems: "center", height: 120, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj8 = { padding: nativeDefault.space.PX_12, flexGrow: 1, flexShrink: 1 };
let closure_25 = createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/AppLauncherHomeScreen.tsx");

export default function AppLauncherHomeScreen(route) {
  let SearchField;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let bottomVisibilityInsetRef;
  let c23;
  let c32;
  let closure_4;
  let closure_5;
  let flashListRef;
  let frecencyCommands;
  let frecentApps;
  let hasViewedActivityItem;
  let hasViewedLearnMoreItem;
  let items33;
  let items34;
  let loading;
  let obj10;
  let obj16;
  let sectionDescriptors;
  let stringResult;
  let tmp52;
  let tmp66;
  let tmp79Result;
  const params = route.route.params;
  const context = params.context;
  const initialSearchQuery = params.initialSearchQuery;
  navigation = route.navigation;
  let handleViewableItemsChanged;
  let memo8;
  frecencyCommands = undefined;
  let memo1;
  sectionDescriptors = undefined;
  let memo;
  let callback3;
  let clickOnHomeActivityOpensAppDetails;
  c23 = undefined;
  let memo9;
  let ref;
  let callback5;
  let ref2;
  let closure_28;
  let pinnedSearchBarBottomBorder;
  let ref1;
  let c31;
  c32 = undefined;
  let stateFromStores3;
  let callback6;
  let trackAppLauncherHomeItemImpression;
  let callback8;
  let tmp = context;
  let tmp2 = handleViewableItemsChanged;
  let obj = context(handleViewableItemsChanged[37]);
  const viewableAppLauncherHomeItems = obj.useViewableAppLauncherHomeItems();
  handleViewableItemsChanged = viewableAppLauncherHomeItems.handleViewableItemsChanged;
  let tmp4 = initialSearchQuery;
  ({ hasViewedActivityItem, hasViewedLearnMoreItem } = viewableAppLauncherHomeItems);
  let tmp5 = initialSearchQuery(handleViewableItemsChanged[38])(hasViewedActivityItem);
  let tmp6 = initialSearchQuery(handleViewableItemsChanged[38])(hasViewedLearnMoreItem);
  let tmp7 = ref();
  react = tmp7;
  const tmp8 = initialSearchQuery(handleViewableItemsChanged[39])();
  const bottom = initialSearchQuery(handleViewableItemsChanged[36])().bottom;
  let obj2 = context(handleViewableItemsChanged[40]);
  const requiredAppLauncherContext = obj2.useRequiredAppLauncherContext();
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  const keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  const width = requiredAppLauncherContext.width;
  const entrypoint = requiredAppLauncherContext.entrypoint;
  const onActivityItemSelected = requiredAppLauncherContext.onActivityItemSelected;
  size = initialSearchQuery(handleViewableItemsChanged[41])();
  let tmp10 = size.width > size.height;
  const isLandscape = tmp10;
  let obj3 = react;
  let items = [entrypoint];
  const effect = react.useEffect(() => {
    if (entrypoint === AppLauncherTypes.AppLauncherEntrypoint.VOICE) {
      const obj = EmbeddedActivitiesActionCreatorsAll;
      const result = obj.dismissNewActivityIndicator();
    }
  }, items);
  let items1 = [chatInputRef, keyboardCloseReasonRef];
  const items2 = [context, entrypoint, navigation];
  const callback = react.useCallback(() => {
    keyboardCloseReasonRef.current = AppLauncherContext.AppLauncherKeyboardCloseReason.COMMAND;
    const current = chatInputRef.current;
    if (current != null) {
      current.closeCustomKeyboard();
    }
  }, items1);
  const callback1 = react.useCallback((application, sectionName) => {
    let FAKE_BUILT_IN_APP;
    const tmp3 = AppLauncherNativeUtils;
    const handleApplicationSelected = tmp3.handleApplicationSelected;
    const obj = { location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, application: FAKE_BUILT_IN_APP, navigation, context, sectionName, entrypoint };
    FAKE_BUILT_IN_APP = application.application;
    if (FAKE_BUILT_IN_APP == null) {
      FAKE_BUILT_IN_APP = AppLauncherUtils.FAKE_BUILT_IN_APP;
    }
    const result = handleApplicationSelected(obj);
  }, items2);
  const items3 = [context, entrypoint, navigation];
  const callback2 = react.useCallback((navigates) => {
    let sectionName;
    let shelfData;
    let flag = navigates.navigates;
    ({ shelfData, sectionName } = navigates);
    if (flag === undefined) {
      flag = true;
    }
    const obj = AppLauncherNativeUtils;
    const obj2 = { location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, application: shelfData.application, navigation, context, sectionName, navigates: flag, entrypoint };
    const result = obj.handleApplicationSelected(obj2);
  }, items3);
  let closure_3;
  _slicedToArray = undefined;
  frecentApps = undefined;
  let height;
  let appsInThisServer;
  let isActivitiesInTextEnabled;
  let PREVIEW;
  let stateFromStores1;
  let memo3;
  let memo4;
  let closure_13;
  let closure_14;
  let memo2;
  let memo6;
  let memo7;
  const obj4 = context(handleViewableItemsChanged[74]);
  const fetchDeveloperActivityShelfItems = obj4.useFetchDeveloperActivityShelfItems();
  let num = 2;
  if (initialSearchQuery(handleViewableItemsChanged[35])()) {
    num = 4;
  }
  let guild_id;
  const tmp4Result = tmp4(tmp2[75]);
  if ("channel" === context.type) {
    guild_id = context.channel.guild_id;
  }
  const tmp4ResultResult = tmp4Result({ guildId: guild_id });
  closure_3 = tmp4ResultResult;
  let tmp19 = entrypoint === tmp(tmp2[42]).AppLauncherEntrypoint.VOICE;
  _slicedToArray = tmp19;
  let tmp20 = tmp4(tmp2[76])({ context, onlyActivityApps: tmp19 });
  ({ frecencyCommands, frecentApps } = tmp20);
  ({ sectionDescriptors, loading } = tmp20);
  let tmp21 = entrypoint === tmp(tmp2[42]).AppLauncherEntrypoint.TEXT;
  height = tmp21;
  appsInThisServer = tmp4(tmp2[77])({ context }).appsInThisServer;
  const items4 = [appsInThisServer, tmp21];
  memo = obj3.useMemo(() => {
    const arr = closure_6 ? appsInThisServer : c23;
    const intl = context(handleViewableItemsChanged[17]).intl;
    const stringResult = intl.string(context(handleViewableItemsChanged[17]).t.oJyzCu);
    const mapped = arr.map((application) => ({ application: application.application }));
    return callback8(mapped, "in_this_server", stringResult, context(handleViewableItemsChanged[68]).IN_THIS_SERVER_ITEM_MAX);
  }, items4);
  const items5 = [frecentApps];
  memo1 = obj3.useMemo(() => {
    let length;
    return frecentApps.map((applicationId, index) => {
      const obj = { type: context(closure_3[45]).AppLauncherHomeListItemType.APP, applicationId: applicationId.id, section: applicationId, isFirstRow: 0 === index, isLastRow: index === length.length - 1, sectionName: "recents" };
      return obj;
    });
  }, items5);
  const items6 = [tmp21, frecentApps];
  memo2 = obj3.useMemo(() => {
    let tmp = !closure_6;
    if (closure_6) {
      tmp = !frecentApps.some((application) => null != application.application);
    }
    return tmp;
  }, items6);
  let tmpResult = tmp(tmp2[78]);
  let id;
  const useIsActivitiesInTextEnabled = tmpResult.useIsActivitiesInTextEnabled;
  if ("channel" === context.type) {
    id = context.channel.id;
  }
  isActivitiesInTextEnabled = useIsActivitiesInTextEnabled(id);
  const items7 = [isActivitiesInTextEnabled, context, entrypoint];
  const effect1 = obj3.useEffect(() => {
    const tmp = isActivitiesInTextEnabled || entrypoint === context(handleViewableItemsChanged[42]).AppLauncherEntrypoint.VOICE;
    if (tmp) {
      let guild_id;
      const fetchShelf = context(handleViewableItemsChanged[43]).fetchShelf;
      context(handleViewableItemsChanged[43]);
      if ("channel" === context.type) {
        guild_id = context.channel.guild_id;
      }
      const obj = { guildId: guild_id, force: true };
      const shelf = fetchShelf(obj);
    }
  }, items7);
  const items8 = [entrypoint];
  const tmpResult10 = tmp(tmp2[28]);
  const stateFromStores = tmpResult10.useStateFromStores(items8, () => entrypoint.get("only_show_preview_app_collections"));
  const tmp4Result4 = tmp4(tmp2[72]);
  const enabled = tmp4Result4.getConfig({ location: "App Launcher Home (Mobile)" }).enabled;
  const ApplicationCollectionActiveState = tmp(tmp2[73]).ApplicationCollectionActiveState;
  if (stateFromStores) {
    PREVIEW = ApplicationCollectionActiveState.PREVIEW;
  } else {
    PREVIEW = enabled ? ApplicationCollectionActiveState.NON_STAFF_PREVIEW : ApplicationCollectionActiveState.ACTIVE;
  }
  const items9 = [onActivityItemSelected];
  const tmpResult11 = tmp(tmp2[28]);
  stateFromStores1 = tmpResult11.useStateFromStores(items9, () => {
    const obj = { surface: memo9, activeState: PREVIEW };
    return onActivityItemSelected.getCollections(obj);
  });
  const items10 = [stateFromStores1, tmp19];
  memo3 = obj3.useMemo(() => {
    const tmp = closure_4;
    if (tmp) {
      const obj = context(handleViewableItemsChanged[19]);
      result = obj.ensureRecommendationSectionsOnlyContainActivities(stateFromStores1);
    } else {
      result = stateFromStores1;
    }
    return result;
  }, items10);
  const items11 = [PREVIEW, entrypoint];
  const effect2 = obj3.useEffect(() => {
    const obj = context(handleViewableItemsChanged[19]);
    const tmp = context;
    const tmp2 = handleViewableItemsChanged;
    if (obj.appLauncherShowsRecommendations(entrypoint)) {
      const obj2 = { surface: memo9, activeState: PREVIEW };
      const tmpResult = tmp(tmp2[79]);
      const collections = tmpResult.fetchCollections(obj2);
    }
  }, items11);
  const items12 = [entrypoint, tmp4ResultResult];
  memo4 = obj3.useMemo(() => {
    let diff;
    let diff1;
    let intl;
    let tmp12;
    let tmp4;
    let tmp5;
    let arr = closure_3;
    if (0 !== closure_3.length) {
      let tmp10 = handleViewableItemsChanged;
      const tmp19 = context;
      if (entrypoint === context(handleViewableItemsChanged[42]).AppLauncherEntrypoint.VOICE) {
        const items = [];
        let tmp11 = tmp19;
        num = 0;
        if (0 < arr.length - 1) {
          do {
            let sum = num + 1;
            let obj = { type: context(handleViewableItemsChanged[45]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE, shelfItem1: tmp4, shelfItem2: tmp5, sectionName: "activities", shelfItem1SectionPosition: num, shelfItem2SectionPosition: sum, sectionOverallPosition: 0, isLastTuple: false };
            tmp4 = closure_3[num];
            tmp5 = closure_3[sum];
            let arr2 = items.push(obj);
            num = num + 2;
            tmp10 = handleViewableItemsChanged;
            tmp11 = context;
            arr = closure_3;
            diff = closure_3.length - 1;
          } while (num < diff);
        }
        if (arr.length % 2 === 1) {
          const obj2 = { type: tmp11(tmp10[45]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE, shelfItem1: tmp12, shelfItem2: undefined, sectionName: "activities", shelfItem1SectionPosition: diff1, shelfItem2SectionPosition: undefined, sectionOverallPosition: 0, isLastTuple: false };
          diff1 = arr.length - 1;
          tmp12 = arr[arr.length - 1];
          items.push(obj2);
        }
        items[items.length - 1].isLastTuple = true;
        const obj5 = { type: tmp11(tmp10[45]).AppLauncherHomeListItemType.SECTION_HEADER, section: intl.string(tmp11(tmp10[17]).t.aeuOoh), sectionName: "activities", numItems: null, numVisibleItems: null };
        intl = tmp11(tmp10[17]).intl;
        ({ length: obj3.numItems, length: obj3.numVisibleItems } = arr);
        const items1 = [obj5];
        HermesBuiltin.arraySpread(items1, items, 1);
        return items1;
      }
    }
    return [];
  }, items12);
  const tmp34 = keyboardCloseReasonRef(context, true, false);
  closure_13 = tmp34;
  const tmp35 = width(true, false);
  closure_14 = tmp35;
  let result = tmp34.result;
  let sections;
  const useMemo = obj3.useMemo;
  if (result != null) {
    sections = result.sections;
  }
  const items13 = [sections, ];
  let result2 = tmp35.result;
  let sections1;
  if (result2 != null) {
    sections1 = result2.sections;
  }
  items13[1] = sections1;
  let memo5 = useMemo(() => {
    const f127659 = (commands) => Object.keys(commands.commands).length > 0;
    result = result.result;
    let sections;
    if (result != null) {
      sections = result.sections;
    }
    if (sections == null) {
      sections = {};
    }
    result2 = result2.result;
    let sections1;
    if (result2 != null) {
      sections1 = result2.sections;
    }
    if (sections1 == null) {
      sections1 = {};
    }
    const values = Object.values(sections);
    let someResult = values.some(f127659);
    if (!someResult) {
      const _Object = Object;
      const values2 = Object.values(sections1);
      someResult = values2.some(f127659);
    }
    return someResult;
  }, items13);
  const items14 = [isLandscape];
  let channel = null;
  const tmpResult12 = tmp(tmp2[28]);
  const stateFromStores2 = tmpResult12.useStateFromStores(items14, () => {
    let tmp2 = "channel" === context.type;
    if (tmp2) {
      const channel = tmp.channel;
      let isDMResult = channel.isDM();
      if (!isDMResult) {
        const channel2 = tmp.channel;
        isDMResult = channel2.isMultiUserDM();
      }
      if (!isDMResult) {
        isDMResult = memo4.can(memo1.USE_APPLICATION_COMMANDS, tmp.channel);
      }
      tmp2 = isDMResult;
    }
    return tmp2;
  });
  if ("channel" === context.type) {
    channel = context.channel;
  }
  if (memo5) {
    memo5 = memo2;
  }
  if (!memo5) {
    memo5 = !stateFromStores2;
  }
  let tmp41 = memo2 && !memo5;
  if (tmp41) {
    let isPrivateResult;
    if (channel != null) {
      isPrivateResult = channel.isPrivate();
    }
    tmp41 = !isPrivateResult;
  }
  if (tmp41) {
    tmp41 = !tmp19;
  }
  if (memo2) {
    memo2 = memo5;
  }
  if (memo2) {
    let isPrivateResult1;
    if (channel != null) {
      isPrivateResult1 = channel.isPrivate();
    }
    memo2 = !isPrivateResult1;
  }
  if (memo2) {
    memo2 = !tmp19;
  }
  const items15 = [memo3, tmp4ResultResult, memo2];
  memo6 = obj3.useMemo(function() {
    const items = [];
    if (memo2) {
      return items;
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
      let item = memo3.forEach((application_directory_collection_items) => {
        const prop = application_directory_collection_items.application_directory_collection_items;
        const item = prop.forEach((type) => {
          if (type.type === items(closure_2_3[80]).ApplicationDirectoryCollectionItemType.APPLICATION) {
            set.add(type.application.id);
          }
        });
      });
      const item1 = closure_3.forEach((application) => {
        if (!set.has(application.application.id)) {
          items.push(application);
        }
      });
      return items;
    }
  }, items15);
  const items16 = [num, memo6, memo3, memo2];
  memo7 = obj3.useMemo(() => {
    let items = [];
    const tmp = memo2;
    if (tmp) {
      items = [];
    } else {
      const tmp2 = memo3;
      let item = memo3.forEach((title, sectionOverallPosition) => {
        let application_directory_collection_items;
        let bound;
        let length2;
        let sum;
        let type;
        ({ type, application_directory_collection_items } = title);
        if (type === context(handleViewableItemsChanged[81]).ApplicationDirectoryCollectionType.BANNER_CARDS) {
          const _Math = Math;
          let obj = { type: tmp(tmp2[45]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER, section: null, sectionName: null, numItems: application_directory_collection_items.length, numVisibleItems: bound };
          bound = Math.min(length, tmp(tmp2[82]).COLLAPSED_LIST_ITEM_MAX);
          ({ title: obj.section, title: obj.sectionName } = title);
          items.push(obj);
          const mapped = application_directory_collection_items.map((type, sectionPosition) => {
            let tmpResult2;
            if (type.type === items(closure_1_3[80]).ApplicationDirectoryCollectionItemType.APPLICATION) {
              let collectionItemAssetUrl;
              const tmp4 = null != type.id && null != type.image_hash;
              if (tmp4) {
                const obj = { itemId: null, hash: null };
                ({ id: obj2.itemId, image_hash: obj2.hash } = type);
                const tmpResult = items(closure_1_3[83]);
                collectionItemAssetUrl = tmpResult.getCollectionItemAssetUrl(obj);
              }
              const obj3 = { application: type.application, showsPromoted: tmpResult2.hasFlag(type.flags, items(closure_1_3[85]).ApplicationCollectionItemFlags.PROMOTED), overrideImageUrl: collectionItemAssetUrl, sectionPosition };
              tmpResult2 = items(closure_1_3[84]);
              return obj3;
            }
          });
          const found = mapped.filter(tmp(tmp2[67]).isNotNullish);
          let num3 = 0;
          if (0 < found.length) {
            do {
              let obj2 = { type: context(handleViewableItemsChanged[45]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE, sectionName: title.title, sectionOverallPosition, items: found.slice(num3, sum), isLastTuple: sum >= found.length };
              let push2 = items.push;
              sum = num3 + num;
              let push2Result = push2(obj2);
              num3 = sum;
              length2 = found.length;
            } while (sum < length2);
          }
        } else if (type === context(handleViewableItemsChanged[81]).ApplicationDirectoryCollectionType.EXPANDABLE_LIST) {
          const prop = title.application_directory_collection_items;
          const mapped1 = prop.map((type) => {
            let tmpResult;
            if (type.type === items(closure_1_3[80]).ApplicationDirectoryCollectionItemType.APPLICATION) {
              const obj = { application: type.application, showsPromoted: tmpResult.hasFlag(type.flags, items(closure_1_3[85]).ApplicationCollectionItemFlags.PROMOTED) };
              tmpResult = items(closure_1_3[84]);
              return obj;
            }
          });
          const found1 = mapped1.filter(tmp(tmp2[67]).isNotNullish);
          let tmpResult = tmp(tmp2[84]);
          if (tmpResult.hasFlag(title.flags, context(handleViewableItemsChanged[86]).ApplicationCollectionFlags.APPENDS_REMAINING_ACTIVITIES)) {
            const item = memo6.forEach((application) => {
              const obj = { application: application.application, showsPromoted: false };
              found1.push(obj);
            });
          }
          const push = items.push;
          items = [];
          HermesBuiltin.arraySpread(items, callback8(found1, title.title, title.title, undefined, sectionOverallPosition), 0);
          HermesBuiltin.apply(push, items, items);
        }
      });
    }
    return items;
  }, items16);
  const items17 = [entrypoint, memo7, memo4];
  memo8 = obj3.useMemo(() => {
    const obj = context(handleViewableItemsChanged[19]);
    const tmp2 = context;
    const tmp3 = handleViewableItemsChanged;
    if (obj.appLauncherShowsRecommendations(entrypoint)) {
      const items = [];
      items[HermesBuiltin.arraySpread(items, memo7, 0)] = { type: tmp2(tmp3[45]).AppLauncherHomeListItemType.LEARN_MORE };
      const obj2 = { type: tmp2(tmp3[45]).AppLauncherHomeListItemType.LEARN_MORE };
      return items;
    } else {
      const items1 = [];
      HermesBuiltin.arraySpread(items1, memo4, 0);
      return items1;
    }
  }, items17);
  const items18 = [context, entrypoint, navigation, sectionDescriptors];
  callback3 = obj3.useCallback((application) => {
    application = application.application;
    const sectionName = application.sectionName;
    const obj = AppLauncherUtils;
    let tmp4 = !obj.isEmbeddedApp(application);
    obj.isEmbeddedApp(application);
    if (tmp4) {
      tmp4 = null != sectionDescriptors.find((id) => id.id === application.id);
    }
    const tmpResult = AppLauncherNativeUtils;
    const obj2 = { location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, application, navigation, context, installOnDemand: !tmp4, sectionName, entrypoint };
    const result = tmpResult.handleApplicationSelected(obj2);
  }, items18);
  const tmpResult13 = tmp(tmp2[44]);
  clickOnHomeActivityOpensAppDetails = tmpResult13.useClickOnHomeActivityOpensAppDetails();
  const items19 = [clickOnHomeActivityOpensAppDetails, context, entrypoint, tmp6, tmp10, memo8.length, navigation, onActivityItemSelected, callback2, callback1, callback3, tmp8, tmp7.sectionHeader, width];
  const callback4 = obj3.useCallback((item) => {
    let obj28;
    let obj5;
    let tmp31;
    item = item.item;
    const index = item.index;
    const type = item.type;
    let tmp = context;
    let tmp2 = handleViewableItemsChanged;
    if (context(handleViewableItemsChanged[45]).AppLauncherHomeListItemType.PLACEHOLDER === type) {
      let obj2 = { isFirstRow: 0 === index, isLastRow: index === memo8.length - 1, style: obj5 };
      obj5 = { height };
      return memo(initialSearchQuery(tmp2[46]), obj2);
    } else if (tmp(tmp2[45]).AppLauncherHomeListItemType.SECTION_HEADER === type) {
      const items = [closure_5.sectionHeader, ];
      let obj7 = null;
      const Text = tmp(tmp2[16]).Text;
      const tmp38 = memo;
      if (0 !== index) {
        obj7 = { marginTop: 24 };
      }
      const obj11 = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", style: items, children: item.section };
      items[1] = obj7;
      return tmp38(Text, obj11);
    } else if (tmp(tmp2[45]).AppLauncherHomeListItemType.SHELF_ITEM === type) {
      const obj12 = {
        section: item.section,
        onPress(shelfData) {
            const obj = { shelfData, sectionName: item.sectionName };
            callback2(obj);
          },
        isFirstRow: null,
        isLastRow: null
      };
      ({ isFirstRow: obj10.isFirstRow, isLastRow: obj10.isLastRow } = item);
      return memo(pinnedSearchBarBottomBorder, obj12, item.section.application.id);
    } else if (tmp(tmp2[45]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE === type) {
      const obj13 = {
        context: item,
        sectionName: tmp(tmp2[42]).AppLauncherSectionName.ACTIVITIES,
        onPress(shelfData) {
            let tmp2;
            const obj = { shelfData, sectionName: item.sectionName, navigates: tmp2 };
            tmp2 = clickOnHomeActivityOpensAppDetails;
            const tmp = callback2;
            if (!tmp2) {
              tmp2 = entrypoint !== AppLauncherTypes.AppLauncherEntrypoint.VOICE;
            }
            tmp(obj);
          },
        usesHandleActivityItemSelected: tmp31,
        onActivityItemSelected,
        shelfItem1: null,
        shelfItem2: null,
        isLastTuple: null,
        entrypoint,
        containerWidth: width
      };
      tmp31 = !clickOnHomeActivityOpensAppDetails;
      const tmp27 = memo;
      const tmp28 = ref1;
      if (tmp31) {
        tmp31 = entrypoint === tmp(tmp2[42]).AppLauncherEntrypoint.VOICE;
      }
      ({ shelfItem1: obj9.shelfItem1, shelfItem2: obj9.shelfItem2, isLastTuple: obj9.isLastTuple } = item);
      return tmp27(tmp28, obj13, item.shelfItem1.application.id);
    } else if (tmp(tmp2[45]).AppLauncherHomeListItemType.RECOMMENDATION_TUPLE === type) {
      const obj14 = {
        context: item,
        sectionName: item.sectionName,
        onPress(application, sectionName) {
            const obj = { application, sectionName };
            return callback3(obj);
          },
        items: null,
        isLastTuple: null,
        entrypoint,
        containerWidth: width
      };
      ({ items: obj8.items, isLastTuple: obj8.isLastTuple } = item);
      return memo(c32, obj14);
    } else if (tmp(tmp2[45]).AppLauncherHomeListItemType.APP === type) {
      const obj27 = {
        section: item.section,
        onPress() {
            callback1(item.section, AppLauncherTypes.AppLauncherSectionName.INSTALLED);
          },
        isFirstRow: null,
        isLastRow: null,
        style: obj28
      };
      ({ isFirstRow: obj6.isFirstRow, isLastRow: obj6.isLastRow } = item);
      obj28 = { height };
      return memo(closure_28, obj27, item.section.id);
    } else if (tmp(tmp2[45]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER === type) {
      const obj29 = { index, children: item.section };
      return memo(trackAppLauncherHomeItemImpression, obj29);
    } else if (tmp(tmp2[45]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD === type) {
      const obj30 = {
        application: item.item.application,
        isFirst: null,
        isLast: null,
        onPress() {
            const obj = { application: item.item.application, sectionName: item.sectionName };
            return callback3(obj);
          },
        isLandscape,
        showsPromoted: null,
        overrideImageUrl: null
      };
      ({ isFirst: obj4.isFirst, isLast: obj4.isLast } = item);
      ({ showsPromoted: obj4.showsPromoted, overrideImageUrl: obj4.overrideImageUrl } = item);
      return memo(initialSearchQuery(tmp2[47]), obj30);
    } else if (tmp(tmp2[45]).AppLauncherHomeListItemType.RECOMMENDATION_APP === type) {
      const obj31 = {
        application: null,
        isFirstRow: null,
        isLastRow: null,
        onPress() {
            const obj = { application: item.application, sectionName: item.sectionName };
            return callback3(obj);
          },
        showsPromoted: item.showsPromoted
      };
      ({ application: obj3.application, isFirstRow: obj3.isFirstRow, isLastRow: obj3.isLastRow } = item);
      return memo(initialSearchQuery(tmp2[48]), obj31, item.application.id);
    } else if (tmp(tmp2[45]).AppLauncherHomeListItemType.VIEW_ALL === type) {
      const obj32 = {
        title: item.title,
        onPress() {
            const applications = item.applications;
            const mapped = applications.map((item) => item);
            let obj = AppLauncherNativeUtils;
            const obj2 = {
              location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME,
              navigation,
              context,
              sectionName: item.sectionName,
              sectionOverallPosition: item.sectionOverallPosition,
              applications: mapped,
              sectionItemType: FrecencySection.SectionItemType.APPS,
              commands: [],
              sectionDescriptors: mapped.map((item) => {
                const obj = item(closure_1_3[51]);
                return obj.getApplicationCommandSection(item);
              }),
              title: item.title,
              promotedApplicationIds: item.promotedApplicationIds
            };
            const result = obj.handleViewAllSelected(obj2);
          }
      };
      return memo(initialSearchQuery(tmp2[49]), obj32);
    } else if (tmp(tmp2[45]).AppLauncherHomeListItemType.DIVIDER_ITEM === type) {
      return memo(callback6, {});
    } else if (tmp(tmp2[45]).AppLauncherHomeListItemType.LEARN_MORE === type) {
      let obj = { visible: closure_4.valueOf() };
      const tmp6 = initialSearchQuery(tmp2[52]);
      return memo(tmp6, obj);
    } else {
      return null;
    }
  }, items19);
  obj3.useRef(null);
  [tmp52, c23] = obj3.useState(false);
  const items20 = [entrypoint];
  _slicedToArray(obj3.useState(false), 2);
  memo9 = obj3.useMemo(() => {
    let source;
    let obj = _modDef12;
    return obj.debounce((query) => {
      const obj = context(handleViewableItemsChanged[54]);
      const obj2 = { query, source };
      obj.trackWithMetadata(frecencyCommands.APP_LAUNCHER_SEARCH_QUERY_TYPED, obj2);
    }, 400, { leading: false, trailing: true });
  }, items20);
  ref = obj3.useRef(null);
  const effect3 = obj3.useEffect(() => () => {
    const current = ref.current;
    if (current != null) {
      current.cancel();
    }
  }, []);
  const items21 = [memo9];
  callback5 = obj3.useCallback((arg0) => {
    let closure_0 = arg0;
    _undefined(0 !== arg0.length);
    let current = ref.current;
    const tmp2 = ref;
    if (current != null) {
      current.cancel();
    }
    const obj = context(handleViewableItemsChanged[55]);
    tmp2.current = obj.runAfterInteractions(() => {
      const current = ref.current;
      if (current != null) {
        current.setQuery(closure_0);
      }
    }, 100);
    memo9(arg0);
  }, items21);
  ref2 = obj3.useRef(callback5);
  const items22 = [callback5];
  const effect4 = obj3.useEffect(() => {
    ref2.current = callback5;
  }, items22);
  const items23 = [entrypoint];
  closure_28 = obj3.useCallback(() => {
    const obj = AppAnalyticsUtils;
    const obj2 = { source: entrypoint };
    obj.trackWithMetadata(frecencyCommands.APP_LAUNCHER_SEARCH_FOCUSED, obj2);
  }, items23);
  let str = "home-scroller";
  const usePinnedSearchBarBottomBorder = tmp(tmp2[56]).usePinnedSearchBarBottomBorder;
  tmp(tmp2[56]);
  if (tmp52) {
    str = "search-scroller";
  }
  pinnedSearchBarBottomBorder = usePinnedSearchBarBottomBorder({ key: str, triggerScrollHeight: 5 });
  ref1 = obj3.useRef(null);
  const items24 = [initialSearchQuery];
  const layoutEffect = obj3.useLayoutEffect(() => {
    if (null != initialSearchQuery) {
      const current = ref1.current;
      const tmp2 = ref1;
      if (current != null) {
        current.setText(initialSearchQuery);
      }
      const current2 = tmp2.current;
      if (current2 != null) {
        current2.focus();
      }
      ref2.current(initialSearchQuery);
    }
  }, items24);
  let sum = bottom + callback2;
  c31 = sum;
  const tmpResult15 = tmp(tmp2[57]);
  const bottomSheetFlashListBottomViewabilityInset = tmpResult15.useBottomSheetFlashListBottomViewabilityInset();
  ({ flashListRef, bottomVisibilityInsetRef } = bottomSheetFlashListBottomViewabilityInset);
  let obj5 = { type: tmp(tmp2[59]).ImpressionTypes.VIEW, name: tmp(tmp2[59]).ImpressionNames.APP_LAUNCHER_HOME_ACTIVITY_ITEM };
  const obj6 = { disableTrack: !tmp5 };
  const items25 = [tmp5];
  const tmp4Result5 = tmp4(tmp2[58]);
  tmp4Result5(obj5, obj6, items25);
  [tmp66, c32] = _slicedToArray(obj3.useState(false), 2);
  _slicedToArray(obj3.useState(false), 2);
  const effect5 = obj3.useEffect(() => {
    _undefined3(true);
  }, []);
  const items26 = [callback1];
  const tmpResult16 = tmp(tmp2[28]);
  stateFromStores3 = tmpResult16.useStateFromStores(items26, () => callback1.getTriggeredOnboardingContentMetadata().willShowGlobalSearchOnboarding);
  const items27 = [stateFromStores3];
  callback6 = obj3.useCallback((arg0) => {
    const tmp2 = stateFromStores3;
    if (tmp2) {
      const obj2 = { dismissAction: tmp };
      const obj = DismissibleContentUnsafeUtils;
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING, obj2);
      const obj3 = { willShowGlobalSearchOnboarding: false };
      const setTriggeredOnboardingContentMetadata = AppLauncherOnboardingActionCreators.setTriggeredOnboardingContentMetadata;
      AppLauncherOnboardingActionCreators;
      const merged = Object.assign(AppLauncherOnboardingPersistedStore.getTriggeredOnboardingContentMetadata());
      const result1 = setTriggeredOnboardingContentMetadata(obj3);
    }
  }, items27);
  const tmpResult17 = tmp(tmp2[63]);
  trackAppLauncherHomeItemImpression = tmpResult17.useTrackAppLauncherHomeItemImpression().trackAppLauncherHomeItemImpression;
  const items28 = [sum, tmp7.list];
  const items29 = [sum];
  const memo10 = obj3.useMemo(() => {
    const obj = { paddingBottom: _undefined2 };
    const merged = Object.assign(closure_5.list);
    return obj;
  }, items28);
  const memo11 = obj3.useMemo(() => ({ bottom: _undefined2 }), items29);
  const items30 = [pinnedSearchBarBottomBorder];
  const callback7 = obj3.useCallback((type) => type.type, []);
  callback8 = obj3.useCallback((arg0) => {
    pinnedSearchBarBottomBorder.scrollHandler(arg0);
  }, items30);
  const items31 = [callback8];
  const callback9 = obj3.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    size = { width: nativeEvent.layoutMeasurement.width, height: nativeEvent.layoutMeasurement.height, offset: nativeEvent.contentOffset.y, contentWidth: nativeEvent.contentSize.width, contentHeight: nativeEvent.contentSize.height };
    callback8(size);
  }, items31);
  const tmpResult18 = tmp(tmp2[64]);
  const appLauncherFlashListProps = tmpResult18.useAppLauncherFlashListProps({ onScrollHandler: callback8 });
  const items32 = [handleViewableItemsChanged, trackAppLauncherHomeItemImpression];
  let obj7 = { style: tmp7.container, children: items33 };
  const obj8 = { style: tmp7.topBackgroundFill };
  const memo12 = obj3.useMemo(() => {
    const items = [, ];
    const obj = { viewabilityConfig: {}, onViewableItemsChanged: handleViewableItemsChanged };
    items[0] = obj;
    const obj2 = { viewabilityConfig: FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG, onViewableItemsChanged: trackAppLauncherHomeItemImpression };
    items[1] = obj2;
    return items;
  }, items32);
  items33 = [memo(height, obj8), , , ];
  const obj9 = { style: tmp7.searchBarContainer, children: memo(SearchField, obj10) };
  obj10 = {
    ref: ref1,
    placeholder: stringResult,
    round: true,
    size: "md",
    onChange: callback5,
    onFocus() {
      closure_28();
      const obj = { actionType: ContentDismissActionType.TAKE_ACTION };
      callback6(obj);
    }
  };
  SearchField = tmp(tmp2[65]).SearchField;
  if (entrypoint === tmp(tmp2[42]).AppLauncherEntrypoint.VOICE) {
    let intl2 = tmp(tmp2[17]).intl;
    stringResult = intl2.string(tmp(tmp2[17]).t["pw+r5b"]);
  } else {
    let intl = tmp(tmp2[17]).intl;
    stringResult = intl.string(tmp(tmp2[17]).t.ziyFv2);
  }
  let obj11 = { children: items34 };
  items34 = [memo(height, obj9), pinnedSearchBarBottomBorder.bottomBorderComponent];
  items33[1] = callback3(clickOnHomeActivityOpensAppDetails, obj11);
  if (tmp52) {
    let obj12 = { ref, context, onScroll: callback9, onSend: callback, entrypoint };
    tmp79Result = tmp79(tmp(tmp2[66]).SearchLocalAndGlobalContentView, obj12);
  } else {
    let obj13 = {
      context,
      sectionDescriptors,
      commands: frecencyCommands,
      loading,
      apps: memo1,
      onAppSelected: callback3,
      onCommandSelected(command, section) {
          const obj = AppLauncherNativeUtils;
          const obj2 = { location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, context, command, section, sectionDescriptors, query: "", navigation, sectionName: AppLauncherTypes.AppLauncherSectionName.RECENT_COMMANDS, entrypoint };
          const result = obj.handleApplicationCommandSelected(obj2);
        },
      onViewAllSelected(sectionItemType) {
          let mapped;
          let str;
          let stringResult;
          const tmp3 = AppLauncherNativeUtils;
          const handleViewAllSelected = tmp3.handleViewAllSelected;
          const obj = { location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT, navigation, context, sectionName: str, applications: mapped.filter(GlobalUtils.isNotNullish), sectionItemType, commands: frecencyCommands, sectionDescriptors, title: stringResult };
          str = "recent_apps_view_more";
          if (sectionItemType === FrecencySection.SectionItemType.COMMANDS) {
            str = "recent_commands_view_more";
          }
          mapped = memo1.map((section) => {
            section = section.section;
            let application;
            if (section != null) {
              application = section.application;
            }
            return application;
          });
          if (entrypoint === AppLauncherTypes.AppLauncherEntrypoint.VOICE) {
            const intl3 = tmp(1115).intl;
            stringResult = intl3.string(tmp(1115).t["2pFD8L"]);
          } else if (sectionItemType === FrecencySection.SectionItemType.COMMANDS) {
            const intl2 = tmp(1115).intl;
            stringResult = intl2.string(tmp(1115).t.V3Sq95);
          } else {
            const intl = tmp(1115).intl;
            stringResult = intl.string(tmp(1115).t.SCViVk);
          }
          const result = handleViewAllSelected(obj);
        }
    };
    const items35 = [, , , ];
    const tmp4Result6 = tmp4(tmp2[64]);
    items35[0] = memo(tmp4(tmp2[50]), obj13);
    let obj14 = {
      items: memo,
      onAppSelected: callback3,
      onViewAllSelected() {
          let intl;
          const found = memo.find((type) => type.type === context(handleViewableItemsChanged[45]).AppLauncherHomeListItemType.VIEW_ALL);
          let mapped;
          if (found != null) {
            const applications = found.applications;
            if (applications != null) {
              mapped = applications.map((item) => item);
            }
          }
          if (null != mapped) {
            let obj = {
              location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME,
              navigation,
              context,
              sectionName: AppLauncherTypes.AppLauncherSectionName.APPS_IN_THIS_SERVER,
              applications: mapped,
              sectionItemType: FrecencySection.SectionItemType.APPS,
              commands: [],
              sectionDescriptors: mapped.map((item) => {
                  const obj = context(handleViewableItemsChanged[51]);
                  return obj.getApplicationCommandSection(item);
                }),
              title: intl.string(intl4.t.oJyzCu)
            };
            const handleViewAllSelected = AppLauncherNativeUtils.handleViewAllSelected;
            AppLauncherNativeUtils;
            intl = intl4.intl;
            const result = handleViewAllSelected(obj);
          }
        }
    };
    items35[1] = memo(tmp4(tmp2[68]), obj14);
    let tmp79Result4 = null;
    if (tmp41) {
      tmp79Result4 = null;
      if (tmp66) {
        tmp79Result4 = tmp79(tmp4(tmp2[69]), {});
      }
    }
    items35[2] = tmp79Result4;
    let tmp79Result5 = null;
    if (memo2) {
      tmp79Result5 = tmp79(tmp4(tmp2[70]), {});
    }
    const obj15 = { ListHeaderComponent: callback3(clickOnHomeActivityOpensAppDetails, obj16), contentContainerStyle: memo10, scrollIndicatorInsets: memo11, renderItem: callback4, getItemType: callback7, data: memo8, preserveScrollMomentum: true, automaticallyAdjustsScrollIndicatorInsets: false, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "always", showsVerticalScrollIndicator: false, viewabilityConfigCallbackPairs: memo12, bottomViewabilityInsetRef: bottomVisibilityInsetRef, ref: flashListRef, onScroll: callback9, animatedOnScroll: null, simultaneousHandlers: null, animatedProps: null };
    obj16 = { children: items35 };
    items35[3] = tmp79Result5;
    if (entrypoint === tmp(tmp2[42]).AppLauncherEntrypoint.VOICE) {
      flashListRef = appLauncherFlashListProps.scrollerRef;
    }
    ({ onScroll: obj23.animatedOnScroll, gestureRef: obj23.simultaneousHandlers, animatedProps: obj23.animatedProps } = appLauncherFlashListProps);
    tmp79Result = tmp79(tmp4Result6, obj15);
  }
  items33[2] = tmp79Result;
  let tmp79Result6 = entrypoint === tmp(tmp2[42]).AppLauncherEntrypoint.TEXT;
  if (tmp79Result6) {
    const obj17 = { windowDimensions: size, visible: stateFromStores3, markAsDismissed: callback6 };
    tmp79Result6 = tmp79(tmp4(tmp2[71]), obj17);
  }
  items33[3] = tmp79Result6;
  return callback3(height, obj7);
};
export { BaseAppRow };
