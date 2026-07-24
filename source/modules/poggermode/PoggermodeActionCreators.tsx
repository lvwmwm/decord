// Module ID: 7071
// Function ID: 56533
// Name: updatePoggermodeSettings
// Dependencies: [1194, 6919, 7072, 686, 7074, 2]
// Exports: clearMessageCombo, updateCombo, updateComboOnMessageSend, updatePoggermodeSettings

// Module 7071 (updatePoggermodeSettings)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/poggermode/PoggermodeActionCreators.tsx");

export const updatePoggermodeSettings = function updatePoggermodeSettings(settings) {
  let obj = importDefault(686);
  obj = { type: "POGGERMODE_SETTINGS_UPDATE", settings };
  obj.dispatch(obj);
  obj = {};
  const merged = Object.assign(state.getState());
  const merged1 = Object.assign(settings);
  importDefault(7074)(obj);
};
export const updateCombo = function updateCombo(arg0) {
  let obj = importDefault(686);
  obj = { type: "POGGERMODE_UPDATE_COMBO" };
  const merged = Object.assign(arg0);
  obj.dispatch(obj);
};
export const clearMessageCombo = function clearMessageCombo(arg0) {
  let obj = importDefault(686);
  obj = { type: "POGGERMODE_UPDATE_MESSAGE_COMBO" };
  obj = {};
  const merged = Object.assign(arg0);
  obj["displayed"] = true;
  obj.comboMessage = obj;
  obj.dispatch(obj);
};
export const updateComboOnMessageSend = function updateComboOnMessageSend(outer1_0, id) {
  id = id.getId();
  const iter = userCombo.getUserCombo(id, outer1_0);
  if (null != iter) {
    let obj = importDefault(686);
    obj = { type: "POGGERMODE_UPDATE_MESSAGE_COMBO" };
    obj = { combo: iter, channelId: outer1_0, messageId: id, displayed: false };
    obj.comboMessage = obj;
    obj.dispatch(obj);
  }
  let num2 = 1;
  if (null != iter) {
    let value;
    if (null != iter) {
      value = iter.value;
    }
    num2 = 1;
    if (value > 0) {
      let multiplier;
      if (null != iter) {
        multiplier = iter.multiplier;
      }
      let num4 = 0;
      if (null != multiplier) {
        num4 = multiplier;
      }
      num2 = num4 + 1;
    }
  }
  const obj1 = { type: "POGGERMODE_UPDATE_COMBO", channelId: outer1_0, userId: id, multiplier: num2, value: 0 };
  importDefault(686).dispatch(obj1);
};
