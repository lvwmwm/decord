// Module ID: 10387
// Function ID: 80098
// Name: useChannelSafeAreaBottomStyles
// Dependencies: []
// Exports: default

// Module 10387 (useChannelSafeAreaBottomStyles)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const InputModes = arg1(dependencyMap[6]).InputModes;
const StaticChannelRoute = arg1(dependencyMap[7]).StaticChannelRoute;
let closure_11 = { LURKER: "lurker", VOICE: "voice", CHAT: "chat", DIRECTORY: "directory", EXPRESSION_PICKER: "expression", MEDIA: "media", APPS: "apps", NONE: "none" };
let closure_12 = arg1(dependencyMap[8]).createStyles((backgroundColor) => {
  let obj = {};
  obj = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOWER };
  obj.lurker = obj;
  obj.chat = { backgroundColor };
  obj.voice = { backgroundColor };
  obj = { backgroundColor: importDefault(dependencyMap[9]).colors.MOBILE_KEYBOARD_GAP_BACKGROUND };
  obj.expressionPickerBackground = obj;
  return obj;
});
const obj = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/main_tabs_v2/native/channel/useChannelSafeAreaBottomStyles.tsx");

export default function useChannelSafeAreaBottomStyles(arg0) {
  const obj = arg1(dependencyMap[16]);
  const refreshToken = arg1(dependencyMap[16]).resolveRefreshToken(importDefault(dependencyMap[9]).modules.mobile.CHANNEL_SAFE_AREA_BOTTOM_BACKGROUND, obj.useMobileVisualRefreshConfig({ location: "useChannelSafeAreaBottomStyles" }).chatInputFloating);
  const obj2 = arg1(dependencyMap[16]);
  const tmp2 = callback(arg1(dependencyMap[17]).useToken(refreshToken));
  const arg1 = tmp2;
  const obj3 = arg1(dependencyMap[17]);
  const gradientBottom = arg1(dependencyMap[18]).useGradientBottom();
  const importDefault = gradientBottom;
  const tmp4 = function useChannelSafeAreaBottomType(arg0) {
    const gradientBottom = null != gradientBottom(tmp4[10])(arg0);
    const tmp4 = gradientBottom(tmp4[11])(arg0).needSubscriptionToAccess;
    let closure_3 = gradientBottom(tmp4[12])();
    const items = [closure_4, closure_6, closure_5, closure_7, closure_8];
    return arg0(tmp4[13]).useStateFromStores(items, () => {
      const channel = channel.getChannel(arg0);
      if (null != channel) {
        const guildId = channel.getGuildId();
      }
      if (arg0 !== constants2.GUILD_HOME) {
        if (arg0 !== constants2.ROLE_SUBSCRIPTIONS) {
          if (!needSubscriptionToAccess) {
            if (connected.isConnected()) {
              if (mode.getMode() !== constants.PUSH_TO_TALK) {
                if (closure_3 === arg0(needSubscriptionToAccess[14]).KeyboardTypes.EXPRESSION) {
                  if (obj2.isAndroid()) {
                    let VOICE = constants3.EXPRESSION_PICKER;
                  }
                  const obj2 = arg0(needSubscriptionToAccess[15]);
                }
                if (closure_3 === arg0(needSubscriptionToAccess[14]).KeyboardTypes.MEDIA) {
                  if (obj3.isAndroid()) {
                    VOICE = constants3.MEDIA;
                  }
                  const obj3 = arg0(needSubscriptionToAccess[15]);
                }
                if (closure_3 === arg0(needSubscriptionToAccess[14]).KeyboardTypes.APP_LAUNCHER) {
                  if (obj4.isAndroid()) {
                    VOICE = constants3.APPS;
                  }
                  const obj4 = arg0(needSubscriptionToAccess[15]);
                }
                let isDirectoryResult;
                if (null != channel) {
                  isDirectoryResult = channel.isDirectory();
                }
                if (true === isDirectoryResult) {
                  VOICE = constants3.DIRECTORY;
                } else {
                  if (null != guildId) {
                    if (lurking.isLurking(guildId)) {
                      VOICE = constants3.LURKER;
                    }
                  }
                  let isForumLikeChannelResult;
                  if (null != channel) {
                    isForumLikeChannelResult = channel.isForumLikeChannel();
                  }
                  if (true === isForumLikeChannelResult) {
                    if (!closure_1) {
                      VOICE = constants3.CHAT;
                    }
                  }
                  if (null != arg0) {
                    let NONE2 = constants3.CHAT;
                  } else {
                    NONE2 = constants3.NONE;
                  }
                }
              }
              VOICE = constants3.VOICE;
            } else if (null == arg0) {
              let NONE = constants3.NONE;
            } else {
              NONE = constants3.CHAT;
            }
          }
          return NONE;
        }
      }
      NONE = constants3.NONE;
    });
  }(arg0);
  const dependencyMap = tmp4;
  const items = [tmp2, gradientBottom, tmp4];
  return React.useMemo(() => {
    if (tmp4 !== constants.NONE) {
      if (tmp4 !== constants.DIRECTORY) {
        if (constants !== constants.EXPRESSION_PICKER) {
          if (tmp4 !== constants.MEDIA) {
            if (tmp4 !== constants.APPS) {
              if (tmp4 === constants.CHAT) {
                let obj = {};
                const merged = Object.assign(tmp2.chat);
                const merged1 = Object.assign(gradientBottom);
                let prop = obj;
              } else if (tmp4 === constants.VOICE) {
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
