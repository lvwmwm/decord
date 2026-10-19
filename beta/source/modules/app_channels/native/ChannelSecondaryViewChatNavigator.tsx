// Module ID: 18013
// Function ID: 18014
// Name: ChannelSecondaryViewChatNavigator
// Dependencies: [19, 21, 9644, 5191, 587, 9599, 1384, 558, 576, 10671, 13509, 5068, 6965, 13790, 9611, 4922, 2]

// Module 18013 (ChannelSecondaryViewChatNavigator)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import HeaderShared from "HeaderShared" /* 9599 */;
import ChannelActionsDefault from "ChannelActions" /* 9611 */;
import ChatViewDefault from "ChatView" /* 10671 */;
import ChannelHeaderDefault from "ChannelHeader" /* 13790 */;
import react from "react" /* 19 */;
import NativeStackView from "NativeStackView" /* 9644 */;
import createStyles from "createStyles" /* 5191 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault;

let obj2;
let tmp;
const ChannelContainer2 = tmp(13509);
function renderChannelSecondaryViewChatHeader(arg0) {
  let obj2;
  const obj = { shouldHandleSafeArea: obj2.isAndroid() };
  const renderHeader = HeaderShared.renderHeader;
  HeaderShared;
  const merged = Object.assign(arg0);
  obj2 = PlatformUtils;
  return renderHeader(obj);
}
const jsx = Fragment.jsx;
let closure_5 = NativeStackView.createNativeStackNavigator();
let obj = { actions: obj2 };
obj2 = { marginRight: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelSecondaryViewChatScreen(arg0) {
  let channelId;
  let guildId;
  const obj = react2;
  const cResult = obj.c(7);
  ({ channelId, guildId } = arg0);
  const ref = react.useRef(null);
  if (cResult[0] === channelId) {
    let tmp5;
    if (cResult[1] === guildId) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === channelId) {
      if (cResult[4] === guildId) {
        let tmp7;
        if (cResult[5] === tmp5) {
          tmp7 = cResult[6];
        }
        return tmp7;
      }
    }
    const tmp9 = jsx(ChannelContainer2.ChannelContainer, { guildId, channelId, children: tmp5 });
    cResult[3] = channelId;
    cResult[4] = guildId;
    cResult[5] = tmp5;
    cResult[6] = tmp9;
    tmp7 = tmp9;
  }
  const tmp6 = jsx(ChatViewDefault, { guildId, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "channel-secondary-view-chat" });
  cResult[0] = channelId;
  cResult[1] = guildId;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function ChannelSecondaryViewChatScreen(arg0) {
  let channelId;
  let guildId;
  ({ channelId, guildId } = arg0);
  react.useRef(null);
  const ChannelContainer = ChannelContainer2.ChannelContainer;
  return <ChannelContainer guildId={guildId} channelId={channelId}>{null}</ChannelContainer>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelSecondaryViewChatNavigator(navigation) {
  let actions;
  let channelId;
  let params;
  let tmp7;
  const obj = params(channelId[8]);
  const cResult = obj.c(21);
  navigation = navigation.navigation;
  params = navigation.route.params;
  const tmp4 = closure_6();
  importDefault = tmp4;
  const tmp5 = require("useColorThemeBackground")();
  const obj2 = params(channelId[12]);
  const accessibilityNativeStackOptions = obj2.useAccessibilityNativeStackOptions();
  channelId = params.channelId;
  if (cResult[0] !== channelId) {
    const fn = function o() {
      return jsx(ChannelHeaderDefault, { channelId, screenIndex: "channel-secondary-view-chat", isNavigationScreen: true });
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
              const tmp26 = jsx(params(channelId[15]).ThemeContextProvider, { gradient: tmp5, children: tmp20 });
              cResult[18] = tmp5;
              cResult[19] = tmp20;
              cResult[20] = tmp26;
              tmp24 = tmp26;
            }
            const tmp23 = <closure_5.Navigator screenOptions={tmp11}>{tmp16}</closure_5.Navigator>;
            cResult[15] = tmp11;
            cResult[16] = tmp16;
            cResult[17] = tmp23;
            tmp20 = tmp23;
          }
          const tmp19 = <closure_5.Screen name="chat">{function children() {
            return <closure_8 channelId={params.channelId} guildId={params.guildId} />;
          }}</closure_5.Screen>;
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
  const fn2 = function s() {
    return jsx(ChannelActionsDefault, { containerStyle: actions.actions, channelId, screenIndex: "channel-secondary-view-chat" });
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
  const tmp = closure_6();
  dependencyMap = tmp;
  const tmp2 = params(5068)();
  let obj = navigation(6965);
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
        return channelId(params(actions[13]), obj);
      },
      headerRight() {
        const obj = { containerStyle: actions.actions, channelId, screenIndex: "channel-secondary-view-chat" };
        return channelId(params(actions[14]), obj);
      },
      headerLeft: obj2.getRenderBackImage(navigation)
    };
    obj2 = HeaderShared;
    const merged = Object.assign(accessibilityNativeStackOptions);
    return obj;
  }, items);
  let obj2 = { gradient: tmp2, children: channelId(Navigator, obj3) };
  obj3 = { screenOptions: memo, children: channelId(closure_5.Screen, obj4) };
  obj4 = {
    name: "chat",
    children() {
      return <closure_8 channelId={params.channelId} guildId={params.guildId} />;
    }
  };
  const ThemeContextProvider = navigation(4922).ThemeContextProvider;
  Navigator = closure_5.Navigator;
  return channelId(ThemeContextProvider, obj2);
});
const result = size.fileFinishedImporting("modules/app_channels/native/ChannelSecondaryViewChatNavigator.tsx");

export default tmp2;
