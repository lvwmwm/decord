// Module ID: 15004
// Function ID: 112987
// Name: goBack
// Dependencies: []
// Exports: ThemedNotificationsModal

// Module 15004 (goBack)
function goBack() {
  const navigation = arg1(dependencyMap[7]).getRootNavigationRef();
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
    tmp = closure_9();
    tmp2 = importDefault(dependencyMap[18]);
    layoutEffect = Object.useLayoutEffect(() => callback(closure_2[20]).trackAppUIViewed(), []);
    callback = Object.useCallback(() => {
      callback2();
      return true;
    }, []);
    obj = arg1(dependencyMap[21]);
    navigatorBackPressHandler = obj.useNavigatorBackPressHandler(callback);
    obj = { zIndex: 1 };
    obj1 = { value: tmp2(importDefault(dependencyMap[19]).NOTIFICATIONS).analyticsLocations };
    obj2 = { style: items };
    items = [, ];
    items[0] = tmp.container;
    items[1] = global.style;
    obj3 = {};
    obj3.nestedInLaunchPad = flag;
    obj3.inNestedNavigator = flag2;
    items1 = [, , , ];
    items1[0] = jsx(HeaderInner, obj3);
    items1[1] = jsx(importDefault(dependencyMap[23]), {});
    obj4 = {};
    obj4.nestedInLaunchPad = flag;
    items1[2] = jsx(arg1(dependencyMap[24]).NotificationCenterForYou, obj4);
    items1[3] = jsx(arg1(dependencyMap[25]).TTIFirstContentfulPaint, { label: "notifications" });
    obj2.children = items1;
    obj1.children = jsxs(View, obj2);
    obj.children = jsx(arg1(dependencyMap[18]).AnalyticsLocationProvider, obj1);
    return jsx(arg1(dependencyMap[22]).LayerScope, obj);
  }
}
class ThemedNotifications {
  constructor(arg0) {
    tmp = importDefault(dependencyMap[26])();
    top = importDefault(dependencyMap[27])().top;
    arg1 = top;
    tmp2 = importDefault(dependencyMap[8])();
    importDefault = tmp2;
    tmp3 = closure_9();
    dependencyMap = tmp3;
    items = [, , ];
    items[0] = tmp3;
    items[1] = tmp2;
    items[2] = top;
    memo = Object.useMemo(() => {
      if (tmp2) {
        const items = [tmp.containerOuterTablet, ];
        const obj = { paddingTop: top };
        items[1] = obj;
        let containerOuter = items;
        const tmp2 = top;
      } else {
        containerOuter = tmp.containerOuter;
      }
      return containerOuter;
    }, items);
    obj = arg1(dependencyMap[28]);
    trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.NOTIFICATIONS);
    obj = { style: memo };
    tmp6 = jsxs;
    tmp7 = View;
    items1 = [, ];
    items1[0] = jsx(importDefault(dependencyMap[29]), { absolute: true });
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
    items1[1] = tmp8(arg1(dependencyMap[30]).ThemeContextProvider, obj1);
    obj.children = items1;
    return tmp6(tmp7, obj);
  }
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const YouBarNavigatorScreens = arg1(dependencyMap[2]).YouBarNavigatorScreens;
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = { containerOuter: { flex: 1 } };
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_8, flex: 1 };
obj.containerOuterTablet = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, borderTopLeftRadius: importDefault(dependencyMap[6]).radii.sm, borderTopRightRadius: importDefault(dependencyMap[6]).radii.sm, flexGrow: 1 };
obj.container = obj1;
obj.headerTitle = { "Bool(true)": null, "Bool(true)": "flex-start", "Bool(true)": "hidden", "Bool(true)": 1 };
obj.actionButtons = {};
const tmp2 = arg1(dependencyMap[4]);
obj.headerClose = { marginRight: importDefault(dependencyMap[6]).space.PX_16, height: importDefault(dependencyMap[6]).space.PX_32, width: importDefault(dependencyMap[6]).space.PX_32, alignItems: "center", justifyContent: "center", borderRadius: importDefault(dependencyMap[6]).radii.lg };
obj.headerText = { right: null, height: null };
const obj2 = { marginRight: importDefault(dependencyMap[6]).space.PX_16, height: importDefault(dependencyMap[6]).space.PX_32, width: importDefault(dependencyMap[6]).space.PX_32, alignItems: "center", justifyContent: "center", borderRadius: importDefault(dependencyMap[6]).radii.lg };
obj.headerBorder = { backgroundColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE };
let closure_9 = obj1.createStyles(obj);
let closure_10 = importAllResult.memo(function HeaderInner(nestedInLaunchPad) {
  nestedInLaunchPad = nestedInLaunchPad.nestedInLaunchPad;
  const tmp = callback3();
  let obj = importDefault(dependencyMap[9]);
  const ref = importAllResult.useRef(null);
  const tmp4 = importDefault(dependencyMap[10])(ref);
  const arg1 = tmp4;
  const items = [tmp4];
  obj = {};
  const callback = importAllResult.useCallback(() => tmp4(constants.TAKE_ACTION), items);
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
    const intl = arg1(dependencyMap[13]).intl;
    obj2.accessibilityLabel = intl.string(arg1(dependencyMap[13]).t.13/7kX);
    obj2.onPress = goBack;
    obj2.children = callback(arg1(dependencyMap[14]).LeftBackIconWithBadge, {});
    const items1 = [callback(arg1(dependencyMap[12]).PressableOpacity, obj2), , ];
    const obj3 = { style: tmp.headerText };
    const intl2 = arg1(dependencyMap[13]).intl;
    obj3.children = intl2.string(arg1(dependencyMap[13]).t.HcoRu0);
    items1[1] = callback(arg1(dependencyMap[15]).Text, obj3);
    const obj4 = { style: tmp.actionButtons };
    let tmp21 = null;
    if (obj.useConfig({ location: "NativeNotifications" }).enabled) {
      const obj5 = { ref, onOpen: callback };
      tmp21 = callback(importDefault(dependencyMap[16]), obj5);
    }
    const items2 = [tmp21, callback(importDefault(dependencyMap[17]), {})];
    obj4.children = items2;
    items1[2] = closure_8(View, obj4);
    obj1.children = items1;
    tmp11Result = closure_8(View, obj1);
    const tmp11 = closure_8;
    const tmp12 = View;
    const tmp19 = closure_8;
    const tmp20 = View;
  }
  obj.children = tmp11Result;
  const items3 = [callback(arg1(dependencyMap[11]).SafeAreaPaddingView, obj), ];
  const items4 = [tmp.headerBorder];
  items3[1] = callback(View, { style: items4 });
  obj.children = items3;
  return closure_8(View, obj);
});
const obj3 = { backgroundColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx");

export default Notifications;
export { goBack };
export { ThemedNotifications };
export const ThemedNotificationsModal = function ThemedNotificationsModal() {
  return callback(ThemedNotifications, { inNestedNavigator: true });
};
