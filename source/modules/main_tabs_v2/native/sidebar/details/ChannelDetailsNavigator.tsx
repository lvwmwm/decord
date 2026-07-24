// Module ID: 15541
// Function ID: 119595
// Name: ConnectedCreateThreadHeaderButton
// Dependencies: [31, 27, 1348, 9140, 653, 15385, 33, 9149, 624, 5650, 9843, 9158, 1212, 11831, 675, 15542, 5517, 5093, 3982, 1557, 15590, 477, 15591, 15592, 15593, 15594, 15442, 2]

// Module 15541 (ConnectedCreateThreadHeaderButton)
import importAllResult from "result";
import { View } from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ChannelDetailsNavigatorScreens as closure_6 } from "ChannelDetailsNavigatorScreens";
import { AnalyticEvents } from "ME";
import { SearchNavigatorScreens } from "SearchNavigatorScreens";
import jsxProd from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";

let closure_10;
let closure_9;
const require = arg1;
function ConnectedCreateThreadHeaderButton(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(624);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getChannel(channelId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { channel: stateFromStores };
    tmp2 = callback(CreateThreadHeaderButton, obj);
  }
  return tmp2;
}
function CreateThreadHeaderButton(channel) {
  channel = channel.channel;
  let obj = channel(5650);
  [][0] = channel;
  const canStartThread = obj.useCanStartThread(channel);
  let tmp3 = null;
  if (canStartThread) {
    obj = {};
    const intl = channel(1212).intl;
    obj.accessibilityLabel = intl.string(channel(1212).t.rBIGBL);
    obj.onPress = tmp2;
    obj.source = importDefault(11831);
    tmp3 = callback(channel(9158).HeaderIconButton, obj);
  }
  return tmp3;
}
function getHeaderLeft(navigation) {
  navigation = navigation.navigation;
  if (navigation.initialRouteName === navigation.routeName) {
    let renderModalCloseImage = require(9158) /* GenericHeaderTitle */.getRenderModalCloseImage(navigation);
    const obj2 = require(9158) /* GenericHeaderTitle */;
  } else {
    renderModalCloseImage = require(9158) /* GenericHeaderTitle */.getRenderModalBackImage(navigation);
    const obj = require(9158) /* GenericHeaderTitle */;
  }
  return renderModalCloseImage;
}
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = Object.freeze({});
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = importAllResult.memo((route) => {
  let applicationId;
  let expandTopic;
  let search;
  let params = route.route.params;
  const channelId = params.channelId;
  const source = params.source;
  let DETAILS = params.initialRouteName;
  ({ applicationId, search, expandTopic } = params);
  if (DETAILS === undefined) {
    DETAILS = constants.DETAILS;
  }
  let channelSettingsScreensStyles;
  let guildId;
  const items = [channelId, DETAILS, source];
  const effect = channelSettingsScreensStyles.useEffect(() => {
    const channel = outer1_5.getChannel(channelId);
    if (null != channel) {
      const obj = { channel_id: channel.id, guild_id: channel.getGuildId(), channel_type: channel.type, initial_route_name: DETAILS, source };
      source(DETAILS[14]).track(outer1_7.CHANNEL_SIDEBAR_VIEWED, obj);
      const obj2 = source(DETAILS[14]);
    }
  }, items);
  let obj = channelId(DETAILS[15]);
  channelSettingsScreensStyles = obj.useChannelSettingsScreensStyles();
  const items1 = [channelId];
  const memo = channelSettingsScreensStyles.useMemo(() => {
    const initialParams = { channelId };
    return { initialParams };
  }, items1);
  let obj1 = channelId(DETAILS[16]);
  const accessibilityNativeStackOptions = obj1.useAccessibilityNativeStackOptions();
  channel = channel.getChannel(channelId);
  guildId = undefined;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  const items2 = [channelId, guildId, channelSettingsScreensStyles];
  const memo1 = channelSettingsScreensStyles.useMemo(() => {
    if (null != guildId) {
      let channelSettingsScreens = channelId(DETAILS[15]).getChannelSettingsScreens(channelId, guildId, channelSettingsScreensStyles);
      const obj2 = channelId(DETAILS[15]);
    } else {
      channelSettingsScreens = {};
    }
    return channelSettingsScreens;
  }, items2);
  let obj3 = channelId(DETAILS[17]);
  obj3.useNavigatorBackPressHandler(() => {
    const rootNavigationRef = channelId(DETAILS[18]).getRootNavigationRef();
    const tmp = null == rootNavigationRef || !rootNavigationRef.isReady();
    let tmp2 = !tmp;
    if (!tmp) {
      const tmp3 = !rootNavigationRef.canGoBack();
      let flag = !tmp3;
      if (!tmp3) {
        rootNavigationRef.goBack();
        flag = true;
      }
      tmp2 = flag;
    }
    return tmp2;
  });
  const rect = source(DETAILS[19])();
  obj = { style: items3 };
  items3 = [channelSettingsScreensStyles.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj = { id: "channel-details-navigator" };
  obj1 = { headerTitle: channelId(DETAILS[11]).renderGenericTitle };
  let merged = Object.assign(accessibilityNativeStackOptions);
  obj.screenOptions = obj1;
  obj.initialRouteName = DETAILS;
  const items4 = [
    callback(createNativeStackNavigator.Screen, {
      initialParams: { channelId, search, expandTopic },
      name: constants.DETAILS,
      options: { headerShown: false },
      getComponent() {
        return channelId(DETAILS[20]).default;
      }
    }),
  ,
  ,
  ,
  ,

  ];
  obj3 = {
    name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
    options(route) {
      route = route.route;
      let obj = {
        header(arg0) {
          let obj = channelId(DETAILS[11]);
          obj = {};
          const merged = Object.assign(arg0);
          obj["shouldHandleSafeArea"] = channelId(DETAILS[21]).isAndroid();
          return obj.renderHeader(obj);
        },
        headerTitle() {
          return outer2_9(source(DETAILS[22]), { channelId: route.params.channelId });
        },
        headerLeft: channelId(DETAILS[11]).getRenderBackImage(route.navigation)
      };
      return obj;
    },
    getComponent() {
      return channelId(DETAILS[23]).default;
    }
  };
  items4[1] = callback(createNativeStackNavigator.Screen, obj3);
  items4[2] = callback(createNativeStackNavigator.Screen, {
    name: constants.PINNED_MESSAGES,
    initialParams: { channelId },
    options(arg0) {
      let navigation;
      let route;
      let obj = {};
      ({ navigation, route } = arg0);
      const intl = channelId(DETAILS[12]).intl;
      obj.title = intl.string(channelId(DETAILS[12]).t["mp1N/2"]);
      obj = { navigation, initialRouteName: DETAILS, routeName: route.name };
      obj.headerLeft = outer1_15(obj);
      return obj;
    },
    getComponent() {
      return channelId(DETAILS[24]).default;
    }
  });
  items4[3] = callback(createNativeStackNavigator.Screen, {
    initialParams: { channelId, applicationId },
    name: constants.MUTE,
    options(arg0) {
      let navigation;
      let route;
      let obj = {};
      ({ navigation, route } = arg0);
      const intl = channelId(DETAILS[12]).intl;
      obj.title = intl.string(channelId(DETAILS[12]).t.w4m945);
      obj = { navigation, initialRouteName: DETAILS, routeName: route.name };
      obj.headerLeft = outer1_15(obj);
      return obj;
    },
    getComponent() {
      return channelId(DETAILS[25]).default;
    }
  });
  const obj6 = {};
  const merged1 = Object.assign(memo);
  obj6["name"] = constants.THREADS;
  obj6["options"] = function options(navigation) {
    const route = navigation.route;
    let obj = {};
    const intl = channelId(DETAILS[12]).intl;
    obj.title = intl.string(channelId(DETAILS[12]).t.B2panI);
    obj = { navigation: navigation.navigation, initialRouteName: DETAILS, routeName: route.name };
    obj.headerLeft = outer1_15(obj);
    obj.headerRight = function headerRight() {
      return outer2_9(outer2_13, { channelId: route.params.channelId });
    };
    return obj;
  };
  obj6["getComponent"] = function getComponent() {
    return channelId(DETAILS[26]).default;
  };
  items4[4] = callback(createNativeStackNavigator.Screen, obj6);
  const entries = Object.entries(memo1);
  items4[5] = entries.map((arg0) => {
    let tmp;
    [tmp, ] = arg0;
    return outer1_9(outer1_12.Screen, {
      name: tmp,
      options(navigation) {
        obj = { title: closure_1.title, headerLeft: outer2_15(obj) };
        obj = { navigation: navigation.navigation, initialRouteName: outer1_2, routeName: closure_0 };
        return obj;
      },
      children(route) {
        let params = route.route.params;
        if (null == params) {
          params = outer2_11;
        }
        return closure_1.render(params, route.navigation);
      }
    }, tmp);
  });
  obj.children = items4;
  obj.children = callback2(createNativeStackNavigator.Navigator, obj);
  return callback(guildId, obj);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsNavigator.tsx");

export default memoResult;
