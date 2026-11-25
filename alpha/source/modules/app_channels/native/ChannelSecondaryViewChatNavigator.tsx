// Module ID: 19141
// Function ID: 19142
// Name: ChannelSecondaryViewChatNavigator
// Dependencies: [19, 21, 9005, 5012, 575, 8962, 1378, 10547, 11725, 18560, 5184, 7324, 14035, 8974, 5073, 2]
// Exports: default

// Module 19141 (ChannelSecondaryViewChatNavigator)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import HeaderShared from "HeaderShared" /* 8962 */;
import ChannelContainer2 from "ChannelContainer" /* 10547 */;
import ChatViewDefault from "ChatView" /* 11725 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 18560 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 9005 */;
import createStyles from "createStyles" /* 5012 */;
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
  const tmp2 = params(5184)();
  let obj = navigation(7324);
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
  const ThemeContextProvider = navigation(5073).ThemeContextProvider;
  Navigator = closure_6.Navigator;
  return channelId(ThemeContextProvider, obj2);
};
