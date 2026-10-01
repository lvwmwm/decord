// Module ID: 10899
// Function ID: 10900
// Name: useChannelSafeAreaBottomStyles
// Dependencies: [19, 5589, 4470, 2045, 1993, 4859, 1074, 2052, 4836, 576, 10900, 5314, 4703, 563, 1611, 1364, 4531, 7297, 2]
// Exports: default

// Module 10899 (useChannelSafeAreaBottomStyles)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5589 */;
import LurkingStore from "LurkingStore" /* 4470 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import createStyles from "createStyles" /* 4836 */;
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
