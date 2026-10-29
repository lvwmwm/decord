// Module ID: 18836
// Function ID: 18837
// Name: ChannelSecondaryViewChatNavigator
// Dependencies: [19, 21, 9809, 5005, 587, 9765, 1381, 558, 576, 10965, 11997, 14209, 5183, 7155, 14487, 9777, 5071, 2]

// Module 18836 (ChannelSecondaryViewChatNavigator)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import HeaderShared from "HeaderShared" /* 9765 */;
import ChannelActionsDefault from "ChannelActions" /* 9777 */;
import ChatViewDefault from "ChatView" /* 10965 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 11997 */;
import ChannelContainer2 from "ChannelContainer" /* 14209 */;
import ChannelHeaderDefault from "ChannelHeader" /* 14487 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 9809 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault;

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
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = NativeStackView.createNativeStackNavigator();
let obj = { actions: obj2 };
obj2 = { marginRight: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelSecondaryViewChatScreen(arg0) {
  let channelId;
  let guildId;
  let items;
  const obj = react2;
  const cResult = obj.c(8);
  ({ channelId, guildId } = arg0);
  const ref = react.useRef(null);
  if (cResult[0] === channelId) {
    let tmp5;
    let tmp8;
    if (cResult[1] === guildId) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmpResult = PlatformUtils;
      const isIOSResult = tmpResult.isIOS() && React3(tmp(11997).PortalKeyboardRenderer, { portal: false });
      cResult[3] = isIOSResult;
      tmp8 = isIOSResult;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] === channelId) {
      if (cResult[5] === guildId) {
        let tmp11;
        if (cResult[6] === tmp5) {
          tmp11 = cResult[7];
        }
        return tmp11;
      }
    }
    const obj2 = { guildId, channelId, children: items };
    items = [tmp5, tmp8];
    const tmp13 = hasOwnProperty(ChannelContainer2.ChannelContainer, obj2);
    cResult[4] = channelId;
    cResult[5] = guildId;
    cResult[6] = tmp5;
    cResult[7] = tmp13;
    tmp11 = tmp13;
  }
  const tmp6 = React3(ChatViewDefault, { guildId, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "channel-secondary-view-chat" });
  cResult[0] = channelId;
  cResult[1] = guildId;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function ChannelSecondaryViewChatScreen(arg0) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelSecondaryViewChatNavigator(navigation) {
  let actions;
  let channelId;
  let params;
  let tmp7;
  let obj = params(channelId[8]);
  const cResult = obj.c(21);
  navigation = navigation.navigation;
  params = navigation.route.params;
  const tmp4 = closure_7();
  importDefault = tmp4;
  const tmp5 = require("useColorThemeBackground")();
  const obj2 = params(channelId[13]);
  const accessibilityNativeStackOptions = obj2.useAccessibilityNativeStackOptions();
  channelId = params.channelId;
  if (cResult[0] !== channelId) {
    const fn = function c() {
      const obj = { channelId, screenIndex: "channel-secondary-view-chat", isNavigationScreen: true };
      return React3(ChannelHeaderDefault, obj);
    };
    cResult[0] = channelId;
    cResult[1] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === channelId) {
    let tmp8;
    let tmp9;
    if (cResult[3] === tmp4) {
      tmp8 = cResult[4];
    }
    if (cResult[5] !== navigation) {
      const tmpResult = params(channelId[5]);
      const renderBackImage = tmpResult.getRenderBackImage(navigation);
      cResult[5] = navigation;
      cResult[6] = renderBackImage;
      tmp9 = renderBackImage;
    } else {
      tmp9 = cResult[6];
    }
    if (cResult[7] === accessibilityNativeStackOptions) {
      if (cResult[8] === tmp7) {
        if (cResult[9] === tmp8) {
          let tmp11;
          if (cResult[10] === tmp9) {
            tmp11 = cResult[11];
          }
          if (cResult[12] === params.channelId) {
            let tmp16;
            if (cResult[13] === params.guildId) {
              tmp16 = cResult[14];
            }
            if (cResult[15] === tmp11) {
              let tmp20;
              if (cResult[16] === tmp16) {
                tmp20 = cResult[17];
              }
              if (cResult[18] === tmp5) {
                let tmp24;
                if (cResult[19] === tmp20) {
                  tmp24 = cResult[20];
                }
                return tmp24;
              }
              const obj3 = { gradient: tmp5, children: tmp20 };
              const tmp26 = closure_4(params(channelId[16]).ThemeContextProvider, obj3);
              cResult[18] = tmp5;
              cResult[19] = tmp20;
              cResult[20] = tmp26;
              tmp24 = tmp26;
            }
            const obj4 = { screenOptions: tmp11, children: tmp16 };
            const tmp23 = closure_4(closure_6.Navigator, obj4);
            cResult[15] = tmp11;
            cResult[16] = tmp16;
            cResult[17] = tmp23;
            tmp20 = tmp23;
          }
          const obj5 = {
            name: "chat",
            children() {
                      const obj = { channelId: params.channelId, guildId: params.guildId };
                      return React3(closure_9, obj);
                    }
          };
          const tmp19 = closure_4(closure_6.Screen, obj5);
          cResult[12] = params.channelId;
          cResult[13] = params.guildId;
          cResult[14] = tmp19;
          tmp16 = tmp19;
        }
      }
    }
    const obj6 = { header: renderChannelSecondaryViewChatHeader, headerTitle: tmp7, headerRight: tmp8, headerLeft: tmp9 };
    const merged = Object.assign(accessibilityNativeStackOptions);
    cResult[7] = accessibilityNativeStackOptions;
    cResult[8] = tmp7;
    cResult[9] = tmp8;
    cResult[10] = tmp9;
    cResult[11] = obj6;
    tmp11 = obj6;
  }
  const fn2 = function l() {
    const obj = { containerStyle: actions.actions, channelId, screenIndex: "channel-secondary-view-chat" };
    return React3(ChannelActionsDefault, obj);
  };
  cResult[2] = channelId;
  cResult[3] = tmp4;
  cResult[4] = fn2;
  tmp8 = fn2;
}) : (function ChannelSecondaryViewChatNavigator(navigation) {
  let Navigator;
  let closure_2;
  let obj3;
  let obj4;
  navigation = navigation.navigation;
  const params = navigation.route.params;
  const tmp = closure_7();
  dependencyMap = tmp;
  const tmp2 = params(5183)();
  let obj = navigation(7155);
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
        return channelId(params(actions[14]), obj);
      },
      headerRight() {
        const obj = { containerStyle: actions.actions, channelId, screenIndex: "channel-secondary-view-chat" };
        return channelId(params(actions[15]), obj);
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
      return React3(closure_9, obj);
    }
  };
  const ThemeContextProvider = navigation(5071).ThemeContextProvider;
  Navigator = closure_6.Navigator;
  return channelId(ThemeContextProvider, obj2);
});
const result = size.fileFinishedImporting("modules/app_channels/native/ChannelSecondaryViewChatNavigator.tsx");

export default tmp3;
