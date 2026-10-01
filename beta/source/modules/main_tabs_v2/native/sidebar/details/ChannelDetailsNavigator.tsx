// Module ID: 16629
// Function ID: 16630
// Name: ChannelDetailsNavigator
// Dependencies: [19, 17, 2045, 10377, 1074, 16459, 21, 7339, 563, 6687, 10792, 7288, 1115, 12289, 1241, 8085, 16630, 6421, 5942, 4693, 1613, 16681, 1364, 16682, 16683, 7351, 7352, 16684, 16685, 16686, 16535, 2]

// Module 16629 (ChannelDetailsNavigator)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import HeaderShared from "HeaderShared" /* 7288 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10377 */;
import navigateToThreadCreation from "navigateToThreadCreation" /* 10792 */;
import AssetRegistryDefault from "AssetRegistry" /* 12289 */;
import SearchNavigatorConstants from "SearchNavigatorConstants" /* 16459 */;
import ChannelSettingsModal from "ChannelSettingsModal" /* 16630 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 7339 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
function ConnectedCreateThreadHeaderButton(channelId) {
  channelId = channelId.channelId;
  const items = [ChannelStore];
  const obj = channelId(563);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores };
    tmp2 = closure_9(CreateThreadHeaderButton, obj2);
  }
  return tmp2;
}
function CreateThreadHeaderButton(channel) {
  let intl;
  channel = channel.channel;
  let obj = channel(6687);
  [][0] = channel;
  const canStartThread = obj.useCanStartThread(channel);
  let tmp5 = null;
  if (canStartThread) {
    const obj2 = { accessibilityLabel: intl.string(channel(1115).t.rBIGBL), onPress: tmp4, source: AssetRegistryDefault };
    const HeaderIconButton = tmp(7288).HeaderIconButton;
    intl = tmp(1115).intl;
    tmp5 = closure_9(HeaderIconButton, obj2);
  }
  return tmp5;
}
const View = react_native.View;
const constants = ChannelDetailsConstants.ChannelDetailsNavigatorScreens;
const AnalyticEvents = Constants.AnalyticEvents;
const SearchNavigatorScreens = SearchNavigatorConstants.SearchNavigatorScreens;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = Object.freeze({});
let closure_12 = NativeStackView.createNativeStackNavigator();
const memoResult = react.memo((navigation) => {
  let Navigator;
  let Screen;
  let applicationId;
  let expandTopic;
  let items4;
  let items5;
  let obj5;
  let obj6;
  let search;
  navigation = navigation.navigation;
  let params = navigation.route.params;
  const channelId = params.channelId;
  const source = params.source;
  let DETAILS = params.initialRouteName;
  ({ applicationId, search, expandTopic } = params);
  if (DETAILS === undefined) {
    const tmp = constants;
    DETAILS = constants.DETAILS;
  }
  let guildId;
  let obj = DETAILS;
  const items = [channelId, DETAILS, source];
  const effect = DETAILS.useEffect(() => {
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      const obj = { channel_id: channel.id, guild_id: channel.getGuildId(), channel_type: channel.type, initial_route_name: DETAILS, source };
      const track = AnalyticsUtilsDefault.track;
      const CHANNEL_SIDEBAR_VIEWED = AnalyticEvents.CHANNEL_SIDEBAR_VIEWED;
      AnalyticsUtilsDefault;
      track(CHANNEL_SIDEBAR_VIEWED, obj);
    }
  }, items);
  const items1 = [navigation];
  const effect1 = DETAILS.useEffect(() => navigation.addListener("beforeRemove", () => {
    const obj = channelId(source[15]);
    return obj.close();
  }), items1);
  let obj2 = navigation(source[16]);
  const channelSettingsScreensStyles = obj2.useChannelSettingsScreensStyles();
  const items2 = [channelId];
  const memo = DETAILS.useMemo(() => {
    const obj = { initialParams: obj2 };
    return obj;
  }, items2);
  let obj3 = navigation(source[17]);
  const accessibilityNativeStackOptions = obj3.useAccessibilityNativeStackOptions();
  let channel = guildId.getChannel(channelId);
  guildId = undefined;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  const items3 = [channelId, guildId, channelSettingsScreensStyles];
  const memo1 = obj.useMemo(() => {
    let channelSettingsScreens;
    if (null != guildId) {
      const obj2 = ChannelSettingsModal;
      channelSettingsScreens = obj2.getChannelSettingsScreens(channelId, tmp, channelSettingsScreensStyles);
    } else {
      channelSettingsScreens = {};
    }
    return channelSettingsScreens;
  }, items3);
  const tmp4Result = navigation(source[18]);
  tmp4Result.useNavigatorBackPressHandler(() => {
    const obj = navigation(source[19]);
    const rootNavigationRef = obj.getRootNavigationRef();
    let tmp2 = !(null == rootNavigationRef || !rootNavigationRef.isReady());
    null == rootNavigationRef || !rootNavigationRef.isReady();
    if (tmp2) {
      let flag = rootNavigationRef.canGoBack();
      if (flag) {
        rootNavigationRef.goBack();
        flag = true;
      }
      tmp2 = flag;
    }
    return tmp2;
  });
  const rect = channelId(tmp5[20])();
  const obj4 = { style: items4, children: closure_10(Navigator, obj5) };
  items4 = [channelSettingsScreensStyles.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  Navigator = Screen.Navigator;
  obj5 = { id: "channel-details-navigator", screenOptions: obj6, initialRouteName: DETAILS, children: items5 };
  obj6 = { headerTitle: navigation(source[11]).renderGenericTitle, headerTitleAlign: "center" };
  let merged = Object.assign(accessibilityNativeStackOptions);
  items5 = [, , , , , , ];
  const obj7 = {
    initialParams: { channelId, search, expandTopic },
    name: constants.DETAILS,
    options: { headerShown: false },
    getComponent() {
      return navigation(source[21]).default;
    }
  };
  items5[0] = closure_9(Screen.Screen, obj7);
  const obj8 = {
    name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
    options(route) {
      let obj2;
      route = route.route;
      let obj = {
        header(arg0) {
          let obj2;
          const obj = { shouldHandleSafeArea: obj2.isAndroid() };
          const renderHeader = route(source[11]).renderHeader;
          route(source[11]);
          const merged = Object.assign(arg0);
          obj2 = route(source[22]);
          return renderHeader(obj);
        },
        headerTitle() {
          const obj = { channelId: route.params.channelId };
          return closure_2_9(channelId(source[23]), obj);
        },
        headerLeft: obj2.getRenderBackImage(navigation)
      };
      navigation = route.navigation;
      obj2 = route(source[11]);
      return obj;
    },
    getComponent() {
      return navigation(source[24]).default;
    }
  };
  items5[1] = closure_9(Screen.Screen, obj8);
  const obj9 = {
    name: navigation(source[25]).ConversationNavigatorScreens.FOCUS,
    options(arg0) {
      let route;
      ({ route, navigation } = arg0);
      const obj = navigation(source[26]);
      return obj.conversationNavigatorFocusHeaderOptions(route, navigation);
    },
    getComponent() {
      return navigation(source[27]).default;
    }
  };
  items5[2] = closure_9(Screen.Screen, obj9);
  const obj10 = {
    name: constants.PINNED_MESSAGES,
    initialParams: { channelId },
    options(navigation) {
      let intl;
      let renderModalCloseImage;
      navigation = navigation.navigation;
      const route = navigation.route;
      const obj = { title: intl.string(intl2.t["mp1N/2"]), headerLeft: renderModalCloseImage };
      intl = intl2.intl;
      if (DETAILS === route.name) {
        const tmpResult = HeaderShared;
        renderModalCloseImage = tmpResult.getRenderModalCloseImage(navigation);
      } else {
        const tmpResult2 = HeaderShared;
        renderModalCloseImage = tmpResult2.getRenderModalBackImage(navigation);
      }
      return obj;
    },
    getComponent() {
      return navigation(source[28]).default;
    }
  };
  items5[3] = closure_9(Screen.Screen, obj10);
  const obj11 = {
    initialParams: { channelId, applicationId },
    name: constants.MUTE,
    options(navigation) {
      let intl;
      let renderModalCloseImage;
      navigation = navigation.navigation;
      const route = navigation.route;
      const obj = { title: intl.string(intl2.t.w4m945), headerLeft: renderModalCloseImage };
      intl = intl2.intl;
      if (DETAILS === route.name) {
        const tmpResult = HeaderShared;
        renderModalCloseImage = tmpResult.getRenderModalCloseImage(navigation);
      } else {
        const tmpResult2 = HeaderShared;
        renderModalCloseImage = tmpResult2.getRenderModalBackImage(navigation);
      }
      return obj;
    },
    getComponent() {
      return navigation(source[29]).default;
    }
  };
  items5[4] = closure_9(Screen.Screen, obj11);
  Screen = Screen.Screen;
  const obj12 = {
    name: constants.THREADS,
    options(arg0) {
      let intl;
      let renderModalCloseImage;
      let route;
      ({ navigation, route } = arg0);
      let obj = {
        title: intl.string(intl2.t.B2panI),
        headerLeft: renderModalCloseImage,
        headerRight() {
          const obj = { channelId: route.params.channelId };
          return closure_2_9(closure_2_13, obj);
        }
      };
      intl = intl2.intl;
      if (DETAILS === route.name) {
        const tmpResult = HeaderShared;
        renderModalCloseImage = tmpResult.getRenderModalCloseImage(navigation);
      } else {
        const tmpResult2 = HeaderShared;
        renderModalCloseImage = tmpResult2.getRenderModalBackImage(navigation);
      }
      return obj;
    },
    getComponent() {
      return navigation(source[30]).default;
    }
  };
  const merged1 = Object.assign(memo);
  items5[5] = closure_9(Screen, obj12);
  const entries = Object.entries(memo1);
  items5[6] = entries.map((item) => {
    let tmp;
    [tmp, ] = item;
    let obj = {
      name: tmp,
      options(navigation) {
        let renderModalCloseImage;
        navigation = navigation.navigation;
        const obj = { title: channelId.title, headerLeft: renderModalCloseImage };
        if (DETAILS === closure_1_0) {
          const obj3 = HeaderShared;
          renderModalCloseImage = obj3.getRenderModalCloseImage(navigation);
        } else {
          const obj2 = HeaderShared;
          renderModalCloseImage = obj2.getRenderModalBackImage(navigation);
        }
        return obj;
      },
      children(route) {
        let params = route.route.params;
        navigation = route.navigation;
        if (params == null) {
          params = closure_11;
        }
        return channelId.render(params, navigation);
      }
    };
    return closure_1_9(Screen.Screen, obj, tmp);
  });
  return closure_9(channelSettingsScreensStyles, obj4);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsNavigator.tsx");

export default memoResult;
