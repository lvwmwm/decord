// Module ID: 10426
// Function ID: 80340
// Name: useChannelSafeAreaBottomStyles
// Dependencies: [31, 4808, 3759, 1348, 4177, 4202, 653, 1355, 4130, 689, 10427, 4574, 3996, 624, 1555, 477, 1324, 3834, 8868, 2]
// Exports: default

// Module 10426 (useChannelSafeAreaBottomStyles)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { InputModes } from "ME";
import { StaticChannelRoute } from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let require = arg1;
let closure_11 = { LURKER: "lurker", VOICE: "voice", CHAT: "chat", DIRECTORY: "directory", EXPRESSION_PICKER: "expression", MEDIA: "media", APPS: "apps", NONE: "none" };
let closure_12 = _createForOfIteratorHelperLoose.createStyles((backgroundColor) => {
  let obj = {};
  obj = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOWER };
  obj.lurker = obj;
  obj.chat = { backgroundColor };
  obj.voice = { backgroundColor };
  obj = { backgroundColor: importDefault(689).colors.MOBILE_KEYBOARD_GAP_BACKGROUND };
  obj.expressionPickerBackground = obj;
  return obj;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/channel/useChannelSafeAreaBottomStyles.tsx");

export default function useChannelSafeAreaBottomStyles(arg0) {
  let obj = require(1324) /* useIsMobileVisualRefreshExperimentEnabled */;
  const refreshToken = require(1324) /* useIsMobileVisualRefreshExperimentEnabled */.resolveRefreshToken(gradientBottom(689).modules.mobile.CHANNEL_SAFE_AREA_BOTTOM_BACKGROUND, obj.useMobileVisualRefreshConfig({ location: "useChannelSafeAreaBottomStyles" }).chatInputFloating);
  let obj2 = require(1324) /* useIsMobileVisualRefreshExperimentEnabled */;
  const tmp2 = callback(require(3834) /* map */.useToken(refreshToken));
  require = tmp2;
  let obj3 = require(3834) /* map */;
  gradientBottom = require(8868) /* useGradientBottom */.useGradientBottom();
  const tmp4 = (function useChannelSafeAreaBottomType(arg0) {
    let closure_1 = null != gradientBottom(tmp4[10])(arg0);
    const needSubscriptionToAccess = gradientBottom(tmp4[11])(arg0).needSubscriptionToAccess;
    let result = gradientBottom(tmp4[12])();
    const items = [outer1_4, outer1_6, outer1_5, outer1_7, outer1_8];
    return arg0(tmp4[13]).useStateFromStores(items, () => {
      const channel = outer2_6.getChannel(callback);
      if (null != channel) {
        const guildId = channel.getGuildId();
      }
      if (callback !== outer2_10.GUILD_HOME) {
        if (callback !== outer2_10.ROLE_SUBSCRIPTIONS) {
          if (!needSubscriptionToAccess) {
            if (outer2_4.isConnected()) {
              if (outer2_7.getMode() !== outer2_9.PUSH_TO_TALK) {
                if (result === callback(needSubscriptionToAccess[14]).KeyboardTypes.EXPRESSION) {
                  if (obj2.isAndroid()) {
                    let VOICE = outer2_11.EXPRESSION_PICKER;
                  }
                  obj2 = callback(needSubscriptionToAccess[15]);
                }
                if (result === callback(needSubscriptionToAccess[14]).KeyboardTypes.MEDIA) {
                  if (obj3.isAndroid()) {
                    VOICE = outer2_11.MEDIA;
                  }
                  obj3 = callback(needSubscriptionToAccess[15]);
                }
                if (result === callback(needSubscriptionToAccess[14]).KeyboardTypes.APP_LAUNCHER) {
                  if (obj4.isAndroid()) {
                    VOICE = outer2_11.APPS;
                  }
                  obj4 = callback(needSubscriptionToAccess[15]);
                }
                let isDirectoryResult;
                if (null != channel) {
                  isDirectoryResult = channel.isDirectory();
                }
                if (true === isDirectoryResult) {
                  VOICE = outer2_11.DIRECTORY;
                } else {
                  if (null != guildId) {
                    if (outer2_5.isLurking(guildId)) {
                      VOICE = outer2_11.LURKER;
                    }
                  }
                  let isForumLikeChannelResult;
                  if (null != channel) {
                    isForumLikeChannelResult = channel.isForumLikeChannel();
                  }
                  if (true === isForumLikeChannelResult) {
                    if (!closure_1) {
                      VOICE = outer2_11.CHAT;
                    }
                  }
                  if (null != callback) {
                    let NONE2 = outer2_11.CHAT;
                  } else {
                    NONE2 = outer2_11.NONE;
                  }
                }
              }
              VOICE = outer2_11.VOICE;
            } else if (null == callback) {
              let NONE = outer2_11.NONE;
            } else {
              NONE = outer2_11.CHAT;
            }
          }
          return NONE;
        }
      }
      NONE = outer2_11.NONE;
    });
  })(arg0);
  const dependencyMap = tmp4;
  let items = [tmp2, gradientBottom, tmp4];
  return React.useMemo(() => {
    if (closure_2 !== outer1_11.NONE) {
      if (closure_2 !== outer1_11.DIRECTORY) {
        if (closure_2 !== outer1_11.EXPRESSION_PICKER) {
          if (closure_2 !== outer1_11.MEDIA) {
            if (closure_2 !== outer1_11.APPS) {
              if (closure_2 === outer1_11.CHAT) {
                let obj = {};
                const merged = Object.assign(tmp2.chat);
                const merged1 = Object.assign(gradientBottom);
                let prop = obj;
              } else if (closure_2 === outer1_11.VOICE) {
                obj = {};
                const merged2 = Object.assign(tmp2.voice);
                const merged3 = Object.assign(gradientBottom);
                prop = obj;
              } else {
                prop = {};
                const merged4 = Object.assign(tmp2[closure_2]);
                const merged5 = Object.assign(gradientBottom);
              }
            }
            return prop;
          }
        }
        prop = tmp2.expressionPickerBackground;
      }
    }
  }, items);
};
