// Module ID: 15377
// Function ID: 117099
// Name: ConnectedCreateThreadHeaderButton
// Dependencies: []

// Module 15377 (ConnectedCreateThreadHeaderButton)
function ConnectedCreateThreadHeaderButton(channelId) {
  const arg1 = channelId.channelId;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { channel: stateFromStores };
    tmp2 = callback(CreateThreadHeaderButton, obj);
  }
  return tmp2;
}
function CreateThreadHeaderButton(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let obj = arg1(dependencyMap[9]);
  [][0] = channel;
  const canStartThread = obj.useCanStartThread(channel);
  let tmp3 = null;
  if (canStartThread) {
    obj = {};
    const intl = arg1(dependencyMap[12]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[12]).t.rBIGBL);
    obj.onPress = tmp2;
    obj.source = importDefault(dependencyMap[13]);
    tmp3 = callback(arg1(dependencyMap[11]).HeaderIconButton, obj);
  }
  return tmp3;
}
function getHeaderLeft(navigation) {
  navigation = navigation.navigation;
  if (navigation.initialRouteName === navigation.routeName) {
    let renderModalCloseImage = arg1(dependencyMap[11]).getRenderModalCloseImage(navigation);
    const obj2 = arg1(dependencyMap[11]);
  } else {
    renderModalCloseImage = arg1(dependencyMap[11]).getRenderModalBackImage(navigation);
    const obj = arg1(dependencyMap[11]);
  }
  return renderModalCloseImage;
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).ChannelDetailsNavigatorScreens;
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const SearchNavigatorScreens = arg1(dependencyMap[5]).SearchNavigatorScreens;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
let closure_11 = Object.freeze({});
const tmp2 = arg1(dependencyMap[6]);
let closure_12 = arg1(dependencyMap[7]).createNativeStackNavigator();
const obj2 = arg1(dependencyMap[7]);
const memoResult = importAllResult.memo((route) => {
  let applicationId;
  let expandTopic;
  let search;
  const params = route.route.params;
  const channelId = params.channelId;
  const arg1 = channelId;
  const source = params.source;
  const importDefault = source;
  let DETAILS = params.initialRouteName;
  ({ applicationId, search, expandTopic } = params);
  if (DETAILS === undefined) {
    DETAILS = constants.DETAILS;
  }
  const dependencyMap = DETAILS;
  let importAllResult;
  let View;
  const items = [channelId, DETAILS, source];
  const effect = importAllResult.useEffect(() => {
    const channel = channel.getChannel(channelId);
    if (null != channel) {
      const obj = { channel_id: channel.id, guild_id: channel.getGuildId(), channel_type: channel.type, initial_route_name: DETAILS, source };
      source(DETAILS[14]).track(constants.CHANNEL_SIDEBAR_VIEWED, obj);
      const obj2 = source(DETAILS[14]);
    }
  }, items);
  let obj = arg1(dependencyMap[15]);
  const channelSettingsScreensStyles = obj.useChannelSettingsScreensStyles();
  importAllResult = channelSettingsScreensStyles;
  const items1 = [channelId];
  const memo = importAllResult.useMemo(() => {
    const initialParams = { channelId };
    return { initialParams };
  }, items1);
  let obj1 = arg1(dependencyMap[16]);
  const accessibilityNativeStackOptions = obj1.useAccessibilityNativeStackOptions();
  const channel = channel.getChannel(channelId);
  let guildId;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  View = guildId;
  const items2 = [channelId, guildId, channelSettingsScreensStyles];
  const memo1 = importAllResult.useMemo(() => {
    if (null != guildId) {
      let channelSettingsScreens = channelId(DETAILS[15]).getChannelSettingsScreens(channelId, guildId, channelSettingsScreensStyles);
      const obj2 = channelId(DETAILS[15]);
    } else {
      channelSettingsScreens = {};
    }
    return channelSettingsScreens;
  }, items2);
  let obj3 = arg1(dependencyMap[17]);
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
  const rect = importDefault(dependencyMap[19])();
  obj = { style: items3 };
  const items3 = [channelSettingsScreensStyles.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj = { id: "channel-details-navigator" };
  obj1 = { headerTitle: arg1(dependencyMap[11]).renderGenericTitle };
  const merged = Object.assign(accessibilityNativeStackOptions);
  obj.screenOptions = obj1;
  obj.initialRouteName = DETAILS;
  const items4 = [
    callback(closure_12.Screen, {
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
      const channelId = route.route;
      const obj = {
        header(arg0) {
          let obj = route(closure_2[11]);
          obj = {};
          const merged = Object.assign(arg0);
          obj["shouldHandleSafeArea"] = route(closure_2[21]).isAndroid();
          return obj.renderHeader(obj);
        },
        headerTitle() {
          return callback2(callback(closure_2[22]), { channelId: route.params.channelId });
        },
        headerLeft: channelId(DETAILS[11]).getRenderBackImage(route.navigation)
      };
      return obj;
    },
    getComponent() {
      return channelId(DETAILS[23]).default;
    }
  };
  items4[1] = callback(closure_12.Screen, obj3);
  items4[2] = callback(closure_12.Screen, {
    name: constants.PINNED_MESSAGES,
    initialParams: { channelId },
    options(arg0) {
      let navigation;
      let route;
      let obj = {};
      ({ navigation, route } = arg0);
      const intl = channelId(DETAILS[12]).intl;
      obj.title = intl.string(channelId(DETAILS[12]).t.mp1N/2);
      obj = { navigation, initialRouteName: DETAILS, routeName: route.name };
      obj.headerLeft = callback2(obj);
      return obj;
    },
    getComponent() {
      return channelId(DETAILS[24]).default;
    }
  });
  items4[3] = callback(closure_12.Screen, {
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
      obj.headerLeft = callback2(obj);
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
    const channelId = route;
    let obj = {};
    const intl = channelId(DETAILS[12]).intl;
    obj.title = intl.string(channelId(DETAILS[12]).t.B2panI);
    obj = { navigation: navigation.navigation, initialRouteName: DETAILS, routeName: route.name };
    obj.headerLeft = callback2(obj);
    obj.headerRight = function headerRight() {
      return callback(closure_13, { channelId: route.params.channelId });
    };
    return obj;
  };
  obj6["getComponent"] = function getComponent() {
    return channelId(DETAILS[26]).default;
  };
  items4[4] = callback(closure_12.Screen, obj6);
  const entries = Object.entries(memo1);
  items4[5] = entries.map((arg0) => {
    let tmp;
    [tmp, ] = arg0;
    return callback(Screen.Screen, {
      name: tmp,
      options(navigation) {
        let obj = { title: closure_1.title, headerLeft: callback(obj) };
        obj = { navigation: navigation.navigation, initialRouteName: closure_2, routeName: closure_0 };
        return obj;
      },
      children(route) {
        let params = route.route.params;
        if (null == params) {
          params = closure_11;
        }
        return closure_1.render(params, route.navigation);
      }
    }, tmp);
  });
  obj.children = items4;
  obj.children = callback2(closure_12.Navigator, obj);
  return callback(View, obj);
});
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsNavigator.tsx");

export default memoResult;
