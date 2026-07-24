// Module ID: 11713
// Function ID: 90871
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 11713 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
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
let obj = {};
let closure_6 = {};
let closure_7 = {};
let c8 = false;
let c9 = false;
let c10 = false;
let tmp2 = ((Store) => {
  class WelcomeScreenStore {
    constructor() {
      self = this;
      tmp = WelcomeScreenStore(this, WelcomeScreenStore);
      obj = outer1_3(WelcomeScreenStore);
      tmp2 = outer1_2;
      if (outer1_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(WelcomeScreenStore, Store);
  let obj = {
    key: "get",
    value(arg0) {
      if (null != arg0) {
        return outer1_6[arg0];
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "isFetching",
    value() {
      return outer1_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasError",
    value() {
      return outer1_10;
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
        let tmp3 = outer1_8;
      } else {
        tmp3 = outer1_7[arg0] || false;
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
})(require("initialize").Store);
tmp2.displayName = "WelcomeScreenStore";
obj = {
  INVITE_RESOLVE_SUCCESS: handleInviteData,
  INVITE_ACCEPT_SUCCESS: handleInviteData,
  WELCOME_SCREEN_SUBMIT_SUCCESS: handleWelcomeScreenUpdate,
  WELCOME_SCREEN_UPDATE: handleWelcomeScreenUpdate,
  WELCOME_SCREEN_VIEW: function handleWelcomeScreenView(guildId) {
    closure_7[guildId.guildId] = true;
    if (guildId.isLurking) {
      let c8 = true;
    }
  },
  GUILD_STOP_LURKING: function handleGuildStopLurking() {
    let c8 = false;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    closure_7[guild.guild.id] = false;
  },
  WELCOME_SCREEN_FETCH_START: function handleFetchWelcomeScreen() {
    let c9 = true;
    let c10 = false;
  },
  WELCOME_SCREEN_FETCH_SUCCESS: function handleFetchWelcomeScreenSuccess(welcomeScreen) {
    let c9 = false;
    let c10 = false;
    welcomeScreen = welcomeScreen.welcomeScreen;
    if (null == welcomeScreen) {
      welcomeScreen = obj;
    }
    closure_6[welcomeScreen.guildId] = welcomeScreen;
  },
  WELCOME_SCREEN_FETCH_FAIL: function handleFetchWelcomeScreenFail() {
    let c9 = false;
    let c10 = true;
  }
};
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/welcome_screen/WelcomeScreenStore.tsx");

export default tmp2;
export const NO_WELCOME_SCREEN = obj;
