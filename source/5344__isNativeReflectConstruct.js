// Module ID: 5344
// Function ID: 45657
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5344 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleConnectionOpen() {
  const merged = Object.assign(store.getCollapsedCategories());
  let closure_13 = {};
}
function scheduleSync() {
  clearTimeout(timeout);
  const timeout = setTimeout(() => callback({}), closure_15);
}
function saveUserGuildSettings(id, muteSettings) {
  return _saveUserGuildSettings(...arguments);
}
async function _saveUserGuildSettings(arg0, body, arg2) {
  let tmp = arg0;
  if (null != tmp) {
    if (tmp !== closure_12) {
      if (null != body) {
        let obj = {};
        if (null == tmp) {
          tmp = closure_12;
        }
        obj[tmp] = body;
      } else {
        obj = {};
      }
      return yield closure_21(obj);
    }
  }
  const HTTP = callback(closure_1[10]).HTTP;
  obj = { url: closure_10.USER_GUILD_SETTINGS(closure_12), body, rejectWithError: false };
  yield HTTP.patch(obj);
}
function saveUserGuildSettingsBulk(arg0) {
  return _saveUserGuildSettingsBulk(...arguments);
}
async function _saveUserGuildSettingsBulk(guilds, arg1) {
  clearTimeout(closure_14);
  const tmp2 = 0 !== Object.keys(guilds).length;
  const collapsedCategories = store.getCollapsedCategories();
  let obj = {};
  const collapsedCategories1 = store.getCollapsedCategories();
  for (const key10022 in collapsedCategories1) {
    let tmp19 = key10022;
    let tmp20 = closure_13;
    if (collapsedCategories1[key10022] === closure_13[key10022]) {
      continue;
    } else {
      obj[key10022] = true;
      // continue
    }
    continue;
  }
  for (const key10025 in closure_13) {
    let tmp21 = key10025;
    let tmp22 = closure_13;
    if (collapsedCategories1[key10025] === closure_13[key10025]) {
      continue;
    } else {
      obj[key10025] = true;
      // continue
    }
    continue;
  }
  let flag = tmp2;
  let tmp6 = tmp2;
  const keys = Object.keys();
  if (keys !== undefined) {
    tmp6 = flag;
    while (keys[tmp5] !== undefined) {
      let tmp23 = tmp8;
      let tmp24 = channel;
      let channel = channel.getChannel(tmp8);
      let tmp9 = null != channel && null != channel.guild_id;
      if (!tmp9) {
        continue;
      } else {
        if (!(channel.guild_id in guilds)) {
          guilds[channel.guild_id] = {};
        }
        if (null == guilds[channel.guild_id].channel_overrides) {
          guilds[channel.guild_id].channel_overrides = {};
        }
        obj = {};
        let tmp10 = obj;
        let merged = Object.assign(guilds[channel.guild_id].channel_overrides[channel.id]);
        obj["collapsed"] = channel.id in collapsedCategories;
        guilds[channel.guild_id].channel_overrides[channel.id] = obj;
        flag = true;
        // continue
      }
      continue;
    }
  }
  if (tmp6) {
    obj = {};
    const merged1 = Object.assign(collapsedCategories);
    delete r6[r1];
    const HTTP = callback(closure_1[10]).HTTP;
    const obj1 = { url: constants.USER_GUILD_SETTINGS_BULK };
    const obj2 = { guilds };
    obj1.body = obj2;
    obj1.rejectWithError = false;
    let body = yield HTTP.patch(obj1).body;
  } else {
    body = [];
  }
  return body;
}
function handleUserGuildSettingsFullUpdate() {
  const merged = Object.assign(store.getCollapsedCategories());
  let closure_13 = {};
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
({ Endpoints: closure_10, FAVORITES: closure_11, ME: closure_12 } = arg1(dependencyMap[8]));
let closure_13 = {};
let closure_14 = 0;
let closure_15 = 15 * importDefault(dependencyMap[9]).Millis.SECOND;
let tmp3 = (arg0) => {
  class UserGuildSettingsManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, UserGuildSettingsManager);
      items1 = [...items];
      obj = closure_5(UserGuildSettingsManager);
      tmp2 = closure_4;
      if (closure_16()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = { CATEGORY_COLLAPSE: closure_18, CATEGORY_EXPAND: closure_18, CATEGORY_COLLAPSE_ALL: closure_18, CATEGORY_EXPAND_ALL: closure_18, POST_CONNECTION_OPEN: closure_17, USER_GUILD_SETTINGS_FULL_UPDATE: closure_23 };
      tmp2Result.actions = obj;
      tmp2Result.saveUserGuildSettings = closure_19;
      tmp2Result.saveUserGuildSettingsBulk = closure_21;
      return tmp2Result;
    }
  }
  const arg1 = UserGuildSettingsManager;
  callback2(UserGuildSettingsManager, arg0);
  return callback(UserGuildSettingsManager);
}(importDefault(dependencyMap[11]));
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/user_settings/UserGuildSettingsManager.tsx");

export default tmp3;
