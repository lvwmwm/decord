// Module ID: 15175
// Function ID: 15176
// Name: PoggermodeActionCreators
// Dependencies: [502, 7813, 15176, 572, 15178, 2]
// Exports: clearMessageCombo, updateCombo, updateComboOnMessageSend, updatePoggermodeSettings

// Module 15175 (PoggermodeActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import trackPoggermodeSettingsUpdatedDefault from "trackPoggermodeSettingsUpdated" /* 15178 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PoggermodeSettingsStore from "PoggermodeSettingsStore" /* 7813 */;
import PoggermodeStore from "PoggermodeStore" /* 15176 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/poggermode/PoggermodeActionCreators.tsx");

export function updatePoggermodeSettings(settings) {
  const obj = DispatcherDefault;
  const obj2 = { type: "POGGERMODE_SETTINGS_UPDATE", settings };
  obj.dispatch(obj2);
  const obj3 = {};
  const merged = Object.assign(PoggermodeSettingsStore.getState());
  const merged1 = Object.assign(settings);
  trackPoggermodeSettingsUpdatedDefault(obj3);
}
export function updateCombo(arg0) {
  const dispatch = DispatcherDefault.dispatch;
  const obj = { type: "POGGERMODE_UPDATE_COMBO" };
  DispatcherDefault;
  const merged = Object.assign(arg0);
  dispatch(obj);
}
export function clearMessageCombo(arg0) {
  let obj2;
  const obj = { type: "POGGERMODE_UPDATE_MESSAGE_COMBO", comboMessage: obj2 };
  obj2 = { displayed: true };
  const dispatch = DispatcherDefault.dispatch;
  DispatcherDefault;
  const merged = Object.assign(arg0);
  dispatch(obj);
}
export function updateComboOnMessageSend(channelId, id) {
  let obj3;
  id = AuthenticationStore.getId();
  const iter = PoggermodeStore.getUserCombo(id, channelId);
  if (null != iter) {
    const obj2 = { type: "POGGERMODE_UPDATE_MESSAGE_COMBO", comboMessage: obj3 };
    obj3 = { combo: iter, channelId, messageId: id, displayed: false };
    const obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
  let num = 1;
  if (null != iter) {
    let value;
    if (iter != null) {
      value = iter.value;
    }
    num = 1;
    if (value > 0) {
      let num3;
      if (iter != null) {
        num3 = iter.multiplier;
      }
      if (num3 == null) {
        num3 = 0;
      }
      num = num3 + 1;
    }
  }
  const obj4 = DispatcherDefault;
  const obj5 = { type: "POGGERMODE_UPDATE_COMBO", channelId, userId: id, multiplier: num, value: 0 };
  obj4.dispatch(obj5);
}
