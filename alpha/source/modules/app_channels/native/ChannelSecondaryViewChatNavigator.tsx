// Module ID: 17949
// Function ID: 17950
// Name: ChannelSecondaryViewChatNavigator
// Dependencies: [19, 21, 9580, 5154, 587, 9535, 1384, 558, 576, 10608, 13438, 6912, 13718, 9547, 2]

// Module 17949 (ChannelSecondaryViewChatNavigator)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import HeaderShared from "HeaderShared" /* 9535 */;
import ChannelActionsDefault from "ChannelActions" /* 9547 */;
import ChatViewDefault from "ChatView" /* 10608 */;
import ChannelHeaderDefault from "ChannelHeader" /* 13718 */;
import react from "react" /* 19 */;
import NativeStackView from "NativeStackView" /* 9580 */;
import createStyles from "createStyles" /* 5154 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let obj2;
let tmp;
const ChannelContainer2 = tmp(13438);
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
  let channelId;
  let params;
  let tmp6;
  const obj = params(channelId[8]);
  const cResult = obj.c(18);
  navigation = navigation.navigation;
  const tmp = params;
  params = navigation.route.params;
  const tmp4 = closure_6();
  const actions = tmp4;
  const obj2 = params(channelId[11]);
  const accessibilityNativeStackOptions = obj2.useAccessibilityNativeStackOptions();
  const tmp2 = channelId;
  channelId = params.channelId;
  if (cResult[0] !== channelId) {
    const fn = function o() {
      return jsx(ChannelHeaderDefault, { channelId, screenIndex: "channel-secondary-view-chat", isNavigationScreen: true });
    };
    cResult[0] = channelId;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === channelId) {
    let tmp7;
    let tmp8;
    if (cResult[3] === tmp4) {
      tmp7 = cResult[4];
    }
    if (cResult[5] !== navigation) {
      const tmpResult = tmp(tmp2[5]);
      const renderBackImage = tmpResult.getRenderBackImage(navigation);
      cResult[5] = navigation;
      cResult[6] = renderBackImage;
      tmp8 = renderBackImage;
    } else {
      tmp8 = cResult[6];
    }
    if (cResult[7] === accessibilityNativeStackOptions) {
      if (cResult[8] === tmp6) {
        if (cResult[9] === tmp7) {
          let tmp10;
          if (cResult[10] === tmp8) {
            tmp10 = cResult[11];
          }
          if (cResult[12] === params.channelId) {
            let tmp15;
            if (cResult[13] === params.guildId) {
              tmp15 = cResult[14];
            }
            if (cResult[15] === tmp10) {
              let tmp19;
              if (cResult[16] === tmp15) {
                tmp19 = cResult[17];
              }
              return tmp19;
            }
            const tmp22 = <closure_5.Navigator screenOptions={tmp10}>{tmp15}</closure_5.Navigator>;
            cResult[15] = tmp10;
            cResult[16] = tmp15;
            cResult[17] = tmp22;
            tmp19 = tmp22;
          }
          const tmp18 = <closure_5.Screen name="chat">{function children() {
            return <closure_8 channelId={params.channelId} guildId={params.guildId} />;
          }}</closure_5.Screen>;
          cResult[12] = params.channelId;
          cResult[13] = params.guildId;
          cResult[14] = tmp18;
          tmp15 = tmp18;
        }
      }
    }
    const obj5 = { header: renderChannelSecondaryViewChatHeader, headerTitle: tmp6, headerRight: tmp7, headerLeft: tmp8 };
    const merged = Object.assign(accessibilityNativeStackOptions);
    cResult[7] = accessibilityNativeStackOptions;
    cResult[8] = tmp6;
    cResult[9] = tmp7;
    cResult[10] = tmp8;
    cResult[11] = obj5;
    tmp10 = obj5;
  }
  const fn2 = function s() {
    return jsx(ChannelActionsDefault, { containerStyle: actions.actions, channelId, screenIndex: "channel-secondary-view-chat" });
  };
  cResult[2] = channelId;
  cResult[3] = tmp4;
  cResult[4] = fn2;
  tmp7 = fn2;
}) : (function ChannelSecondaryViewChatNavigator(navigation) {
  let closure_2;
  let obj3;
  navigation = navigation.navigation;
  const params = navigation.route.params;
  const tmp = closure_6();
  dependencyMap = tmp;
  let obj = navigation(6912);
  const accessibilityNativeStackOptions = obj.useAccessibilityNativeStackOptions();
  const channelId = params.channelId;
  const items = [channelId, tmp, navigation, accessibilityNativeStackOptions];
  let obj2 = {
    screenOptions: accessibilityNativeStackOptions.useMemo(() => {
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
    }, items),
    children: channelId(closure_5.Screen, obj3)
  };
  const Navigator = closure_5.Navigator;
  obj3 = {
    name: "chat",
    children() {
      return <closure_8 channelId={params.channelId} guildId={params.guildId} />;
    }
  };
  return channelId(Navigator, obj2);
});
const result = size.fileFinishedImporting("modules/app_channels/native/ChannelSecondaryViewChatNavigator.tsx");

export default tmp2;
