// Module ID: 7067
// Function ID: 56479
// Name: updatePoggermodeSettings
// Dependencies: []
// Exports: clearMessageCombo, updateCombo, updateComboOnMessageSend, updatePoggermodeSettings

// Module 7067 (updatePoggermodeSettings)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/poggermode/PoggermodeActionCreators.tsx");

export const updatePoggermodeSettings = function updatePoggermodeSettings(settings) {
  let obj = importDefault(dependencyMap[3]);
  obj = { type: "POGGERMODE_SETTINGS_UPDATE", settings };
  obj.dispatch(obj);
  obj = {};
  const merged = Object.assign(state.getState());
  const merged1 = Object.assign(settings);
  importDefault(dependencyMap[4])(obj);
};
export const updateCombo = function updateCombo(arg0) {
  let obj = importDefault(dependencyMap[3]);
  obj = { type: "POGGERMODE_UPDATE_COMBO" };
  const merged = Object.assign(arg0);
  obj.dispatch(obj);
};
export const clearMessageCombo = function clearMessageCombo(arg0) {
  let obj = importDefault(dependencyMap[3]);
  obj = { type: "POGGERMODE_UPDATE_MESSAGE_COMBO" };
  obj = {};
  const merged = Object.assign(arg0);
  obj["displayed"] = true;
  obj.comboMessage = obj;
  obj.dispatch(obj);
};
export const updateComboOnMessageSend = function updateComboOnMessageSend(channelId, id) {
  id = id.getId();
  const iter = userCombo.getUserCombo(id, channelId);
  if (null != iter) {
    let obj = importDefault(dependencyMap[3]);
    obj = { type: "POGGERMODE_UPDATE_MESSAGE_COMBO" };
    obj = { combo: iter, channelId, messageId: id, displayed: false };
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
  const obj1 = { type: "POGGERMODE_UPDATE_COMBO", channelId, userId: id, multiplier: num2, value: 0 };
  importDefault(dependencyMap[3]).dispatch(obj1);
};
