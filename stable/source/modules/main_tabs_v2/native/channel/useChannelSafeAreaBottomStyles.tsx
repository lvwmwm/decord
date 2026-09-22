// Module ID: 11494
// Function ID: 11495
// Name: useChannelSafeAreaBottomStyles
// Dependencies: [19, 5358, 4276, 1957, 1908, 4659, 1074, 1964, 4636, 576, 11495, 5088, 4504, 563, 1609, 1363, 4338, 7975, 2]
// Exports: default

// Module 11494 (useChannelSafeAreaBottomStyles)
import nativeDefault from "native" /* 576 */;
import KeyboardTypes from "KeyboardTypes" /* 1609 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5358 */;
import LurkingStore from "LurkingStore" /* 4276 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4659 */;

const require = globalThis.__r;

require = fn;
const InputModes = fn(1074).InputModes;
const StaticChannelRoute = fn(1964).StaticChannelRoute;
let closure_11 = { LURKER: "lurker", VOICE: "voice", CHAT: "chat", DIRECTORY: "directory", EXPRESSION_PICKER: "expression", MEDIA: "media", APPS: "apps", NONE: "none" };
const createStyles = fn(4636);
let closure_12 = createStyles.createStyles((backgroundColor) => {
  const obj = { lurker: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, chat: { backgroundColor }, voice: { backgroundColor }, expressionPickerBackground: { backgroundColor } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/useChannelSafeAreaBottomStyles.tsx");

export default function useChannelSafeAreaBottomStyles(arg0) {
  let backgroundColor = gradientBottom(stateFromStores[16]).useToken(require("native").colors.MOBILE_KEYBOARD_GAP_BACKGROUND);
  let obj = gradientBottom(stateFromStores[16]);
  const tmp = gradientBottom;
  gradientBottom = gradientBottom(stateFromStores[17]).useGradientBottom();
  let backgroundColor1;
  if (gradientBottom != null) {
    backgroundColor1 = gradientBottom.backgroundColor;
  }
  if (null != backgroundColor1) {
    backgroundColor = gradientBottom.backgroundColor;
  }
  const tmp6 = closure_12(backgroundColor);
  importDefault = tmp6;
  closure_129_0 = arg0;
  closure_129_1 = null != tmp3(tmp2[10])(arg0);
  closure_129_2 = tmp3(tmp2[11])(arg0).needSubscriptionToAccess;
  closure_129_3 = tmp3(tmp2[12])();
  let obj2 = gradientBottom(stateFromStores[17]);
  const items = [GatewayConnectionStore, ChannelStore, LurkingStore, MediaEngineStore, RTCConnectionStore];
  stateFromStores = tmp(stateFromStores[13]).useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(gradientBottom);
    if (channel != null) {
      const guildId = channel.getGuildId();
    }
    if (gradientBottom !== StaticChannelRoute.GUILD_HOME) {
      if (tmp !== StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
        if (!stateFromStores) {
          if (GatewayConnectionStore.isConnected()) {
            if (MediaEngineStore.getMode() !== InputModes.PUSH_TO_TALK) {
              if (noop === KeyboardTypes.KeyboardTypes.EXPRESSION) {
                if (tmp10Result.isAndroid()) {
                  let VOICE = constants.EXPRESSION_PICKER;
                }
                tmp10Result = tmp10(1363);
              }
              if (noop === KeyboardTypes.KeyboardTypes.MEDIA) {
                if (tmp10Result3.isAndroid()) {
                  VOICE = constants.MEDIA;
                }
                tmp10Result3 = tmp10(1363);
              }
              if (noop === KeyboardTypes.KeyboardTypes.APP_LAUNCHER) {
                if (tmp10Result4.isAndroid()) {
                  VOICE = constants.APPS;
                }
                tmp10Result4 = tmp10(1363);
              }
              let isDirectoryResult;
              if (channel != null) {
                isDirectoryResult = channel.isDirectory();
              }
              if (true === isDirectoryResult) {
                VOICE = constants.DIRECTORY;
              } else {
                if (null != guildId) {
                  if (LurkingStore.isLurking(guildId)) {
                    VOICE = constants.LURKER;
                  }
                }
                let isForumLikeChannelResult;
                if (channel != null) {
                  isForumLikeChannelResult = channel.isForumLikeChannel();
                }
                if (true === isForumLikeChannelResult) {
                  if (!closure_1) {
                    VOICE = constants.CHAT;
                  }
                }
                if (null != tmp) {
                  let NONE2 = constants.CHAT;
                } else {
                  NONE2 = constants.NONE;
                }
              }
            }
            VOICE = constants.VOICE;
          } else if (null == tmp) {
            let NONE = constants.NONE;
          } else {
            NONE = constants.CHAT;
          }
        }
        return NONE;
      }
    }
    NONE = constants.NONE;
  });
  const items1 = [tmp6, gradientBottom, stateFromStores];
  return noop.useMemo(() => {
    if (stateFromStores !== constants.NONE) {
      if (tmp !== tmp2.DIRECTORY) {
        if (tmp !== tmp2.EXPRESSION_PICKER) {
          if (tmp !== tmp2.MEDIA) {
            if (tmp !== tmp2.APPS) {
              if (tmp === tmp2.CHAT) {
                const obj = {};
                const merged = Object.assign(closure_1.chat);
                const merged1 = Object.assign(gradientBottom);
                let prop = obj;
              } else if (tmp === tmp2.VOICE) {
                const obj2 = {};
                const merged2 = Object.assign(closure_1.voice);
                const merged3 = Object.assign(gradientBottom);
                prop = obj2;
              } else {
                prop = {};
                const merged4 = Object.assign(closure_1[tmp]);
                const merged5 = Object.assign(gradientBottom);
              }
            }
            return prop;
          }
        }
        prop = closure_1.expressionPickerBackground;
      }
    }
  }, items1);
};
