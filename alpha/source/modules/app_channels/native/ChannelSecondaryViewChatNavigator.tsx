// Module ID: 19048
// Function ID: 19049
// Name: ChannelSecondaryViewChatNavigator
// Dependencies: [19, 21, 8550, 4823, 575, 8473, 1380, 11058, 11701, 18461, 4995, 7003, 14305, 8485, 4884, 2]
// Exports: default

// Module 19048 (ChannelSecondaryViewChatNavigator)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import HeaderShared from "HeaderShared" /* 8473 */;
import ChannelContainer2 from "ChannelContainer" /* 11058 */;
import ChatViewDefault from "ChatView" /* 11701 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 18461 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 8550 */;
import createStyles from "createStyles" /* 4823 */;
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
  const tmp2 = params(4995)();
  let obj = navigation(7003);
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
  const ThemeContextProvider = navigation(4884).ThemeContextProvider;
  Navigator = closure_6.Navigator;
  return channelId(ThemeContextProvider, obj2);
};
