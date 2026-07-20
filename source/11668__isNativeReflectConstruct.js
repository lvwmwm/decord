// Module ID: 11668
// Function ID: 90536
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11668 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleInviteData(invite) {
  const guild = invite.invite.guild;
  let welcome_screen;
  if (null != guild) {
    welcome_screen = guild.welcome_screen;
  }
  let flag = null != welcome_screen;
  if (flag) {
    closure_6[guild.id] = guild.welcome_screen;
    flag = true;
  }
  return flag;
}
function handleWelcomeScreenUpdate(welcomeScreen) {
  welcomeScreen = welcomeScreen.welcomeScreen;
  if (null == welcomeScreen) {
    welcomeScreen = obj;
  }
  closure_6[welcomeScreen.guildId] = welcomeScreen;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let obj = {};
let closure_6 = {};
let closure_7 = {};
let closure_8 = false;
let closure_9 = false;
let closure_10 = false;
let tmp2 = (Store) => {
  class WelcomeScreenStore {
    constructor() {
      self = this;
      tmp = WelcomeScreenStore(this, WelcomeScreenStore);
      obj = closure_3(WelcomeScreenStore);
      tmp2 = closure_2;
      if (closure_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = WelcomeScreenStore;
  callback2(WelcomeScreenStore, Store);
  let obj = {
    key: "get",
    value(arg0) {
      if (null != arg0) {
        return closure_6[arg0];
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "isFetching",
    value() {
      return closure_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasError",
    value() {
      return closure_10;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasSeen",
    value(arg0) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      if (null == arg0) {
        return tmp;
      } else if (flag) {
        let tmp3 = closure_8;
      } else {
        tmp3 = closure_7[arg0] || false;
      }
    }
  };
  items[4] = {
    key: "isEmpty",
    value(arg0) {
      if (null == arg0) {
        return true;
      } else {
        let tmp3 = null == tmp2;
        if (!tmp3) {
          tmp3 = 0 === tmp2.welcome_channels.length;
        }
        return tmp3;
      }
    }
  };
  return callback(WelcomeScreenStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "WelcomeScreenStore";
obj = {
  INVITE_RESOLVE_SUCCESS: handleInviteData,
  INVITE_ACCEPT_SUCCESS: handleInviteData,
  WELCOME_SCREEN_SUBMIT_SUCCESS: handleWelcomeScreenUpdate,
  WELCOME_SCREEN_UPDATE: handleWelcomeScreenUpdate,
  WELCOME_SCREEN_VIEW: function handleWelcomeScreenView(guildId) {
    closure_7[guildId.guildId] = true;
    if (guildId.isLurking) {
      let closure_8 = true;
    }
  },
  GUILD_STOP_LURKING: function handleGuildStopLurking() {
    let closure_8 = false;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    closure_7[guild.guild.id] = false;
  },
  WELCOME_SCREEN_FETCH_START: function handleFetchWelcomeScreen() {
    let closure_9 = true;
    let closure_10 = false;
  },
  WELCOME_SCREEN_FETCH_SUCCESS: function handleFetchWelcomeScreenSuccess(welcomeScreen) {
    let closure_9 = false;
    let closure_10 = false;
    welcomeScreen = welcomeScreen.welcomeScreen;
    if (null == welcomeScreen) {
      welcomeScreen = obj;
    }
    closure_6[welcomeScreen.guildId] = welcomeScreen;
  },
  WELCOME_SCREEN_FETCH_FAIL: function handleFetchWelcomeScreenFail() {
    let closure_9 = false;
    let closure_10 = true;
  }
};
tmp2 = new tmp2(importDefault(dependencyMap[6]), obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/welcome_screen/WelcomeScreenStore.tsx");

export default tmp2;
export const NO_WELCOME_SCREEN = obj;
