// Module ID: 11165
// Function ID: 86815
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1849, 21, 11163, 6755, 566, 686, 2]

// Module 11165 (_isNativeReflectConstruct)
import DISCORD_EPOCH from "DISCORD_EPOCH";
import result from "result";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let tmp2 = ((Store) => {
  class AppLauncherOnboardingStore {
    constructor() {
      self = this;
      tmp = outer1_5(this, AppLauncherOnboardingStore);
      obj = outer1_8(AppLauncherOnboardingStore);
      tmp2 = outer1_7;
      if (outer1_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_8;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_8(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(AppLauncherOnboardingStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_10);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getRecentMessageMetadata",
    value() {
      return outer1_3;
    }
  };
  items[1] = obj;
  obj = {
    key: "getRecentApplicationCommandMetadata",
    value() {
      return outer1_4;
    }
  };
  items[2] = obj;
  return callback(AppLauncherOnboardingStore, items);
})(require("initialize").Store);
tmp2.displayName = "AppLauncherOnboardingStore";
tmp2 = new tmp2(require("dispatcher"), {
  APPLICATION_COMMAND_USED: function handleApplicationCommandUsed(context) {
    let command;
    let commandOrigin;
    context = context.context;
    ({ command, commandOrigin } = context);
    let tmp = commandOrigin !== require(6755) /* ApplicationCommandSectionType */.CommandOrigin.APPLICATION_LAUNCHER;
    if (tmp) {
      tmp = null != context.channel;
    }
    if (tmp) {
      const obj = {};
      const _Date = Date;
      obj.timeMs = Date.now();
      obj.applicationId = command.applicationId;
      const guild = context.guild;
      let id;
      if (null != guild) {
        id = guild.id;
      }
      obj.guildId = id;
      obj.channelId = context.channel.id;
    }
  },
  MESSAGE_CREATE: function handleMessageCreate(message) {
    let channelId;
    let guildId;
    message = message.message;
    ({ channelId, guildId } = message);
    currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      if (null != currentUser.id) {
        if (null != message.author) {
          if (currentUser.id === message.author.id) {
            let obj = importDefault(21);
            const extractTimestampResult = obj.extractTimestamp(message.id);
            const _Date = Date;
            const timestamp = Date.now();
            if (timestamp <= extractTimestampResult + require(11163) /* result */.RECENT_MESSAGE_MS) {
              obj = { timeMs: extractTimestampResult, guildId, channelId };
            }
          }
        }
      }
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingStore.tsx");

export default tmp2;
