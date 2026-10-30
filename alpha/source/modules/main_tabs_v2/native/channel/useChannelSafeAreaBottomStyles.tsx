// Module ID: 11224
// Function ID: 11225
// Name: useChannelSafeAreaBottomStyles
// Dependencies: [19, 6562, 4942, 4858, 2007, 5759, 1072, 4865, 5009, 575, 11225, 6040, 5204, 563, 1624, 1376, 5591, 9800, 2]
// Exports: default

// Module 11224 (useChannelSafeAreaBottomStyles)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import ChannelConstants from "ChannelConstants" /* 4865 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6562 */;
import LurkingStore from "LurkingStore" /* 4942 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import MediaEngineStore from "MediaEngineStore" /* 2007 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5759 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let channel, importDefault;

const InputModes = Constants.InputModes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let closure_11 = { LURKER: "lurker", VOICE: "voice", CHAT: "chat", DIRECTORY: "directory", EXPRESSION_PICKER: "expression", MEDIA: "media", APPS: "apps", NONE: "none" };
let closure_12 = createStyles.createStyles((backgroundColor) => {
  const obj = { lurker: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, chat: { backgroundColor }, voice: { backgroundColor }, expressionPickerBackground: { backgroundColor } };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER });
  return obj;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/useChannelSafeAreaBottomStyles.tsx");

export default function useChannelSafeAreaBottomStyles(arg0) {
  let channelId;
  let closure_1;
  let connected;
  let constants2;
  let constants3;
  let gradientBottom;
  let lurking;
  let mode;
  let stateFromStores;
  const tmp = gradientBottom;
  let obj = gradientBottom(stateFromStores[16]);
  let backgroundColor = obj.useToken(require("native").colors.MOBILE_KEYBOARD_GAP_BACKGROUND);
  let obj2 = gradientBottom(stateFromStores[17]);
  gradientBottom = obj2.useGradientBottom();
  let backgroundColor1;
  if (gradientBottom != null) {
    backgroundColor1 = gradientBottom.backgroundColor;
  }
  if (null != backgroundColor1) {
    backgroundColor = gradientBottom.backgroundColor;
  }
  const tmp6 = closure_12(backgroundColor);
  let closure_0 = arg0;
  importDefault = null != tmp3(tmp2[10])(arg0);
  const needSubscriptionToAccess = tmp3(tmp2[11])(arg0).needSubscriptionToAccess;
  let closure_3 = tmp3(tmp2[12])();
  const items = [GatewayConnectionStore, ChannelStore, LurkingStore, MediaEngineStore, RTCConnectionStore];
  const tmpResult = tmp(stateFromStores[13]);
  stateFromStores = tmpResult.useStateFromStores(items, () => {
    let guildId;
    channel = channel.getChannel(closure_0);
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    if (closure_0 !== constants2.GUILD_HOME) {
      if (closure_0 !== constants2.ROLE_SUBSCRIPTIONS) {
        let NONE;
        const tmp25 = needSubscriptionToAccess;
        if (!tmp25) {
          if (connected.isConnected()) {
            let CHAT;
            if (mode.getMode() === constants.PUSH_TO_TALK) {
              if (null != channelId.getChannelId()) {
                CHAT = constants3.VOICE;
              }
              NONE = CHAT;
            }
            if (closure_3 === gradientBottom(stateFromStores[14]).KeyboardTypes.EXPRESSION) {
              const tmp10Result = gradientBottom(stateFromStores[15]);
              if (tmp10Result.isAndroid()) {
                CHAT = constants3.EXPRESSION_PICKER;
              }
            }
            if (closure_3 === gradientBottom(stateFromStores[14]).KeyboardTypes.MEDIA) {
              const tmp10Result3 = gradientBottom(stateFromStores[15]);
              if (tmp10Result3.isAndroid()) {
                CHAT = constants3.MEDIA;
              }
            }
            if (closure_3 === gradientBottom(stateFromStores[14]).KeyboardTypes.APP_LAUNCHER) {
              const tmp10Result4 = gradientBottom(stateFromStores[15]);
              if (tmp10Result4.isAndroid()) {
                CHAT = constants3.APPS;
              }
            }
            let isDirectoryResult;
            if (channel != null) {
              isDirectoryResult = channel.isDirectory();
            }
            if (true === isDirectoryResult) {
              CHAT = constants3.DIRECTORY;
            } else {
              let NONE2;
              if (null != guildId) {
                if (lurking.isLurking(guildId)) {
                  CHAT = constants3.LURKER;
                }
              }
              let isForumLikeChannelResult;
              if (channel != null) {
                isForumLikeChannelResult = channel.isForumLikeChannel();
              }
              if (true === isForumLikeChannelResult) {
                const tmp15 = closure_1;
                if (!tmp15) {
                  CHAT = constants3.CHAT;
                }
              }
              if (null != closure_0) {
                NONE2 = constants3.CHAT;
              } else {
                NONE2 = constants3.NONE;
              }
              CHAT = NONE2;
            }
          } else if (null == closure_0) {
            NONE = constants3.NONE;
          } else {
            NONE = constants3.CHAT;
          }
        }
        return NONE;
      }
    }
    NONE = constants3.NONE;
  });
  const items1 = [tmp6, gradientBottom, stateFromStores];
  return react.useMemo(() => {
    if (stateFromStores !== constants3.NONE) {
      if (stateFromStores !== constants3.DIRECTORY) {
        if (stateFromStores !== constants3.EXPRESSION_PICKER) {
          if (stateFromStores !== constants3.MEDIA) {
            let prop;
            if (stateFromStores !== constants3.APPS) {
              if (stateFromStores === constants3.CHAT) {
                const obj = {};
                const merged = Object.assign(closure_1.chat);
                const merged1 = Object.assign(gradientBottom);
                prop = obj;
              } else if (stateFromStores === constants3.VOICE) {
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
