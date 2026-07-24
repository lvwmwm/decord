// Module ID: 5075
// Function ID: 44139
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 5, 5076, 1348, 653, 664, 507, 5078, 2]

// Module 5075 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import asyncGeneratorStep from "asyncGeneratorStep";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";
import tmp3 from "AutomaticLifecycleManager";

let closure_10;
let closure_11;
let closure_12;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleConnectionOpen() {
  const obj = {};
  const merged = Object.assign(store.getCollapsedCategories());
}
function scheduleSync() {
  clearTimeout(timeout);
  timeout = setTimeout(() => outer1_21({}), closure_15);
}
function saveUserGuildSettings(id, muteSettings) {
  return _saveUserGuildSettings(...arguments);
}
async function _saveUserGuildSettings(arg0, arg1, arg2) {
  let tmp = arg0;
  if (null != tmp) {
    if (tmp !== outer2_12) {
      if (null != arg1) {
        let obj = {};
        if (null == tmp) {
          tmp = outer2_12;
        }
        obj[tmp] = arg1;
      } else {
        obj = {};
      }
      return yield outer2_21(obj);
    }
  }
  const HTTP = outer2_0(outer2_1[10]).HTTP;
  obj = { url: outer2_10.USER_GUILD_SETTINGS(outer2_12), body: arg1, rejectWithError: false };
  yield HTTP.patch(obj);
}
function saveUserGuildSettingsBulk(arg0) {
  return _saveUserGuildSettingsBulk(...arguments);
}
async function _saveUserGuildSettingsBulk(arg0, arg1) {
  clearTimeout(outer2_14);
  const tmp4 = 0 !== Object.keys(arg0).length;
  const collapsedCategories = outer2_8.getCollapsedCategories();
  let obj = {};
  const collapsedCategories1 = outer2_8.getCollapsedCategories();
  for (const key10022 in collapsedCategories1) {
    let tmp21 = key10022;
    let tmp22 = outer2_13;
    if (collapsedCategories1[key10022] === outer2_13[key10022]) {
      continue;
    } else {
      obj[key10022] = true;
      continue;
    }
    continue;
  }
  for (const key10025 in outer2_13) {
    let tmp23 = key10025;
    let tmp24 = outer2_13;
    if (collapsedCategories1[key10025] === outer2_13[key10025]) {
      continue;
    } else {
      obj[key10025] = true;
      continue;
    }
    continue;
  }
  let flag = tmp4;
  let tmp8 = tmp4;
  const keys = Object.keys();
  if (keys !== undefined) {
    tmp8 = flag;
    while (keys[tmp7] !== undefined) {
      let tmp25 = tmp10;
      let tmp26 = outer2_9;
      let channel = outer2_9.getChannel(tmp10);
      let tmp11 = null != channel && null != channel.guild_id;
      if (!tmp11) {
        continue;
      } else {
        if (!(channel.guild_id in arg0)) {
          arg0[channel.guild_id] = {};
        }
        if (null == arg0[channel.guild_id].channel_overrides) {
          arg0[channel.guild_id].channel_overrides = {};
        }
        obj = {};
        let tmp12 = obj;
        let merged = Object.assign(arg0[channel.guild_id].channel_overrides[channel.id]);
        obj["collapsed"] = channel.id in collapsedCategories;
        arg0[channel.guild_id].channel_overrides[channel.id] = obj;
        flag = true;
        continue;
      }
      continue;
    }
  }
  if (tmp8) {
    obj = {};
    const merged1 = Object.assign(collapsedCategories);
    const outer2_13 = obj;
    delete tmp2[tmp];
    const HTTP = outer2_0(outer2_1[10]).HTTP;
    const obj1 = { url: outer2_10.USER_GUILD_SETTINGS_BULK };
    const obj2 = { guilds: arg0 };
    obj1.body = obj2;
    obj1.rejectWithError = false;
    let body = yield HTTP.patch(obj1).body;
  } else {
    body = [];
  }
  return body;
}
function handleUserGuildSettingsFullUpdate() {
  const obj = {};
  const merged = Object.assign(store.getCollapsedCategories());
}
({ Endpoints: closure_10, FAVORITES: closure_11, ME: closure_12 } = ME);
let closure_13 = {};
let c14 = 0;
let closure_15 = 15 * require("set").Millis.SECOND;
tmp3 = new tmp3();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/user_settings/UserGuildSettingsManager.tsx");

export default tmp3;
