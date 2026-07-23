// Module ID: 15128
// Function ID: 115198
// Name: goBack
// Dependencies: [31, 27, 8772, 1345, 33, 4130, 689, 3982, 8133, 9535, 15129, 5121, 4660, 1212, 15130, 4126, 15131, 9533, 15133, 5464, 5484, 6707, 5093, 5449, 15137, 15138, 10025, 3977, 1557, 14799, 4662, 3842, 2]
// Exports: ThemedNotificationsModal

// Module 15128 (goBack)
import importAllResult from "ManaContext";
import { View } from "getGuildThemeName";
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let closure_9;
let require = arg1;
function goBack() {
  const navigation = require(3982) /* getRootNavigationRef */.getRootNavigationRef();
  if (null != navigation) {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate("guilds");
    }
  }
}
class Notifications {
  constructor(arg0) {
    flag = global.nestedInLaunchPad;
    if (flag === undefined) {
      flag = false;
    }
    flag2 = global.inNestedNavigator;
    if (flag2 === undefined) {
      flag2 = false;
    }
    tmp = c10();
    tmp2 = require("mergeLocations");
    layoutEffect = Object.useLayoutEffect(() => outer1_0(outer1_2[21]).trackAppUIViewed(), []);
    callback = Object.useCallback(() => {
      outer1_12();
      return true;
    }, []);
    obj = require("useNavigatorBackPressHandler");
    navigatorBackPressHandler = obj.useNavigatorBackPressHandler(callback);
    obj = { zIndex: 1 };
    obj1 = { value: tmp2(require("QUICK_SWITCHER").NOTIFICATIONS).analyticsLocations };
    obj2 = { style: items };
    items = [, ];
    items[0] = tmp.container;
    items[1] = global.style;
    obj3 = {};
    obj3.nestedInLaunchPad = flag;
    obj3.inNestedNavigator = flag2;
    items1 = [, , , ];
    items1[0] = jsx(HeaderInner, obj3);
    items1[1] = jsx(require("NotificationCenterBannerImpl"), {});
    obj4 = {};
    obj4.nestedInLaunchPad = flag;
    items1[2] = jsx(require("isHoisted").NotificationCenterForYou, obj4);
    items1[3] = jsx(require("TTIFirstContentfulPaint").TTIFirstContentfulPaint, { label: "notifications" });
    obj2.children = items1;
    obj1.children = jsxs(View, obj2);
    obj.children = jsx(require("mergeLocations").AnalyticsLocationProvider, obj1);
    return jsx(require("Layer").LayerScope, obj);
  }
}
class ThemedNotifications {
  constructor(arg0) {
    tmp = require("getGuildThemeName")();
    top = require("useSafeAreaInsets")().top;
    tmp2 = require("useIsWindowLarge")();
    closure_1 = tmp2;
    tmp3 = c10();
    closure_2 = tmp3;
    items = [, , ];
    items[0] = tmp3;
    items[1] = tmp2;
    items[2] = top;
    memo = Object.useMemo(() => {
      if (closure_1) {
        const items = [tmp.containerOuterTablet, ];
        const obj = { paddingTop: top };
        items[1] = obj;
        let containerOuter = items;
      } else {
        containerOuter = tmp.containerOuter;
      }
      return containerOuter;
    }, items);
    obj = require("trackForScreen");
    trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.NOTIFICATIONS);
    obj = { style: memo };
    tmp6 = jsxs;
    tmp7 = View;
    items1 = [, ];
    items1[0] = jsx(require("getThemeMixColor"), { absolute: true });
    tmp8 = jsx;
    obj1 = { gradient: tmp };
    obj2 = {};
    tmp9 = jsx;
    tmp10 = Notifications;
    merged = Object.assign(global);
    route = global.route;
    inNestedNavigator = undefined;
    if (null != route) {
      params = route.params;
      if (null != params) {
        inNestedNavigator = params.inNestedNavigator;
      }
    }
    obj2["inNestedNavigator"] = inNestedNavigator;
    obj1.children = tmp9(tmp10, obj2);
    items1[1] = tmp8(require("ManaContext").ThemeContextProvider, obj1);
    obj.children = items1;
    return tmp6(tmp7, obj);
  }
}
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
let obj = { containerOuter: { flex: 1 } };
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, flex: 1 };
obj.containerOuterTablet = obj;
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.sm, flexGrow: 1 };
obj.container = _createForOfIteratorHelperLoose;
obj.headerTitle = { height: 56, marginHorizontal: 16, flexDirection: "row", alignItems: "center" };
obj.actionButtons = { flexDirection: "row", gap: 12 };
obj.headerClose = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_16, height: require("_createForOfIteratorHelperLoose").space.PX_32, width: require("_createForOfIteratorHelperLoose").space.PX_32, alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
obj.headerText = { flex: 1, marginTop: 2 };
let obj3 = { left: 0, bottom: 0, height: 1, width: "100%", position: "absolute", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
obj.headerBorder = obj3;
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_11 = importAllResult.memo(function HeaderInner(nestedInLaunchPad) {
  nestedInLaunchPad = nestedInLaunchPad.nestedInLaunchPad;
  const tmp = callback3();
  let obj = importDefault(9535);
  const ref = importAllResult.useRef(null);
  const tmp4 = importDefault(15129)(ref);
  const require = tmp4;
  const items = [tmp4];
  const callback = importAllResult.useCallback(() => tmp4(outer1_6.TAKE_ACTION), items);
  obj = {};
  obj = {};
  let tmp9 = !nestedInLaunchPad;
  if (tmp9) {
    tmp9 = !tmp2;
  }
  obj.top = tmp9;
  let tmp11Result = null;
  if (!nestedInLaunchPad) {
    const obj1 = { style: tmp.headerTitle };
    const obj2 = { style: tmp.headerClose };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj2.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t["13/7kX"]);
    obj2.onPress = goBack;
    obj2.children = callback(require(15130) /* IconWithBadge */.LeftBackIconWithBadge, {});
    const items1 = [callback(require(4660) /* PressableBase */.PressableOpacity, obj2), , ];
    const obj3 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", style: tmp.headerText, maxFontSizeMultiplier: 1.75, accessibilityRole: "header" };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj3.children = intl2.string(require(1212) /* getSystemLocale */.t.HcoRu0);
    items1[1] = callback(require(4126) /* Text */.Text, obj3);
    const obj4 = { style: tmp.actionButtons };
    let tmp21 = null;
    if (obj.useConfig({ location: "NativeNotifications" }).enabled) {
      const obj5 = {};
      const obj6 = { ref, type: require(9533) /* savedMessageDataToClient */.SavedMessageSortTypes.BOOKMARK, onOpen: callback };
      const items2 = [callback(importDefault(15131), obj6), ];
      const obj7 = {};
      const tmp27 = importDefault(15131);
      obj7.type = require(9533) /* savedMessageDataToClient */.SavedMessageSortTypes.REMINDER;
      obj7.onOpen = callback;
      items2[1] = callback(importDefault(15131), obj7);
      obj5.children = items2;
      tmp21 = callback2(closure_8, obj5);
      const tmp30 = importDefault(15131);
    }
    const items3 = [tmp21, callback(importDefault(15133), {})];
    obj4.children = items3;
    items1[2] = callback2(View, obj4);
    obj1.children = items1;
    tmp11Result = callback2(View, obj1);
    const tmp11 = callback2;
    const tmp12 = View;
    const tmp19 = callback2;
    const tmp20 = View;
  }
  obj.children = tmp11Result;
  const items4 = [callback(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj), ];
  const items5 = [tmp.headerBorder];
  items4[1] = callback(View, { style: items5 });
  obj.children = items4;
  return callback2(View, obj);
});
let obj2 = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_16, height: require("_createForOfIteratorHelperLoose").space.PX_32, width: require("_createForOfIteratorHelperLoose").space.PX_32, alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
const result = require("MODE_CHANGE_PHYSICS").fileFinishedImporting("modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx");

export default Notifications;
export { goBack };
export { ThemedNotifications };
export const ThemedNotificationsModal = function ThemedNotificationsModal() {
  return callback(ThemedNotifications, { inNestedNavigator: true });
};
