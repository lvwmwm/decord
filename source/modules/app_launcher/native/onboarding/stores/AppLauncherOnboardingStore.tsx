// Module ID: 11155
// Function ID: 86765
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11155 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_5 = importDefault(dependencyMap[0]);
let closure_6 = importDefault(dependencyMap[1]);
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let tmp2 = (Store) => {
  class AppLauncherOnboardingStore {
    constructor() {
      self = this;
      tmp = closure_5(this, AppLauncherOnboardingStore);
      obj = closure_8(AppLauncherOnboardingStore);
      tmp2 = closure_7;
      if (closure_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_8;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_8(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = AppLauncherOnboardingStore;
  callback2(AppLauncherOnboardingStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_10);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getRecentMessageMetadata",
    value() {
      return closure_3;
    }
  };
  items[1] = obj;
  obj = {
    key: "getRecentApplicationCommandMetadata",
    value() {
      return closure_4;
    }
  };
  items[2] = obj;
  return callback(AppLauncherOnboardingStore, items);
}(importDefault(dependencyMap[9]).Store);
tmp2.displayName = "AppLauncherOnboardingStore";
tmp2 = new tmp2(importDefault(dependencyMap[10]), {
  APPLICATION_COMMAND_USED: function handleApplicationCommandUsed(context) {
    let command;
    let commandOrigin;
    context = context.context;
    ({ command, commandOrigin } = context);
    let tmp = commandOrigin !== arg1(dependencyMap[8]).CommandOrigin.APPLICATION_LAUNCHER;
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
    const currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      if (null != currentUser.id) {
        if (null != message.author) {
          if (currentUser.id === message.author.id) {
            let obj = importDefault(dependencyMap[6]);
            const extractTimestampResult = obj.extractTimestamp(message.id);
            const _Date = Date;
            const timestamp = Date.now();
            if (timestamp <= extractTimestampResult + arg1(dependencyMap[7]).RECENT_MESSAGE_MS) {
              obj = { timeMs: extractTimestampResult, guildId, channelId };
            }
          }
        }
      }
    }
  }
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingStore.tsx");

export default tmp2;
