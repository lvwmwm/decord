// Module ID: 18896
// Function ID: 18897
// Name: ChannelSecondaryViewChatNavigator
// Dependencies: [19, 21, 9835, 5009, 575, 9791, 1376, 10988, 11195, 12183, 5189, 7163, 14520, 9803, 5075, 2]
// Exports: default

// Module 18896 (ChannelSecondaryViewChatNavigator)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import HeaderShared from "HeaderShared" /* 9791 */;
import ChannelContainer2 from "ChannelContainer" /* 10988 */;
import ChatViewDefault from "ChatView" /* 11195 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 12183 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 9835 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
let obj2;
function renderChannelSecondaryViewChatHeader(arg0) {
  let obj2;
  const obj = { shouldHandleSafeArea: obj2.isAndroid() };
  const renderHeader = HeaderShared.renderHeader;
  HeaderShared;
  const merged = Object.assign(arg0);
  obj2 = PlatformUtils;
  return renderHeader(obj);
}
function ChannelSecondaryViewChatScreen(arg0) {
  let channelId;
  let guildId;
  let items;
  ({ channelId, guildId } = arg0);
  const obj = { guildId, channelId, children: items };
  const ref = react.useRef(null);
  const ChannelContainer = ChannelContainer2.ChannelContainer;
  items = [React3(ChatViewDefault, { guildId, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "channel-secondary-view-chat" }), ];
  const obj2 = PlatformUtils;
  items[1] = obj2.isIOS() && React3(PortalKeyboardRenderer.PortalKeyboardRenderer, { portal: false });
  obj2.isIOS() && React3(PortalKeyboardRenderer.PortalKeyboardRenderer, { portal: false });
  return hasOwnProperty(ChannelContainer, obj);
}
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = NativeStackView.createNativeStackNavigator();
let obj = { actions: obj2 };
obj2 = { marginRight: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/app_channels/native/ChannelSecondaryViewChatNavigator.tsx");

export default function ChannelSecondaryViewChatNavigator(navigation) {
  let Navigator;
  let closure_2;
  let obj3;
  let obj4;
  navigation = navigation.navigation;
  const params = navigation.route.params;
  const tmp = closure_7();
  dependencyMap = tmp;
  const tmp2 = params(5189)();
  let obj = navigation(7163);
  const accessibilityNativeStackOptions = obj.useAccessibilityNativeStackOptions();
  const channelId = params.channelId;
  const items = [channelId, tmp, navigation, accessibilityNativeStackOptions];
  const memo = accessibilityNativeStackOptions.useMemo(() => {
    let actions;
    let obj2;
    let obj = {
      header: renderChannelSecondaryViewChatHeader,
      headerTitle() {
        const obj = { channelId, screenIndex: "channel-secondary-view-chat", isNavigationScreen: true };
        return channelId(params(actions[12]), obj);
      },
      headerRight() {
        const obj = { containerStyle: actions.actions, channelId, screenIndex: "channel-secondary-view-chat" };
        return channelId(params(actions[13]), obj);
      },
      headerLeft: obj2.getRenderBackImage(navigation)
    };
    obj2 = HeaderShared;
    const merged = Object.assign(accessibilityNativeStackOptions);
    return obj;
  }, items);
  let obj2 = { gradient: tmp2, children: channelId(Navigator, obj3) };
  obj3 = { screenOptions: memo, children: channelId(closure_6.Screen, obj4) };
  obj4 = {
    name: "chat",
    children() {
      const obj = { channelId: params.channelId, guildId: params.guildId };
      return React3(ChannelSecondaryViewChatScreen, obj);
    }
  };
  const ThemeContextProvider = navigation(5075).ThemeContextProvider;
  Navigator = closure_6.Navigator;
  return channelId(ThemeContextProvider, obj2);
};
