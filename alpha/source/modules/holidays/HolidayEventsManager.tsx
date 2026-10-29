// Module ID: 19358
// Function ID: 19359
// Name: HolidayEventsManager
// Dependencies: [1258, 11621, 502, 11622, 7274, 19359, 19363, 19364, 19365, 11623, 2]

// Module 19358 (HolidayEventsManager)
import Constants from "Constants" /* 11622 */;
import HolidayEventsConfigDefault from "HolidayEventsConfig" /* 19359 */;
import HolidayEventsUtilsDefault from "HolidayEventsUtils" /* 19363 */;
import SoundpackActions from "SoundpackActions" /* 19364 */;
import react_native from "react-native" /* 19365 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1258 */;
import SoundpackStore from "SoundpackStore" /* 11621 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7274 */;
import size from "module_2" /* 2 */;

let map;

let tmp;
const getSoundsForPackDefault = tmp(11623);
const Soundpacks = Constants.Soundpacks;
class HolidayEventsManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    map = new Map();
    applyArgumentsResult.stores = map.set(ApexExperimentStore, () => require.handleExperimentUpdated());
    applyArgumentsResult.actions = { NOTIFICATIONS_SET_DISABLED_SOUNDS: applyArgumentsResult.updateRingtone };
    applyArgumentsResult.handleExperimentUpdated = function handleExperimentUpdated() {
      const tmp = !HolidayEventsConfigDefault.isDesktopOnly && null != AuthenticationStore.getId();
      if (tmp) {
        require.updateSoundpack();
        require.updateRingtone();
      }
    };
    return applyArgumentsResult;
  }
  updateSoundpack() {
    let name;
    const soundpack = SoundpackStore.getSoundpack();
    const lastSoundpackExperimentId = SoundpackStore.getLastSoundpackExperimentId();
    const experiment = HolidayEventsConfigDefault.experiment;
    if (experiment != null) {
      name = experiment.definition.name;
    }
    const tmp3Result = HolidayEventsUtilsDefault;
    let isEligibleResult = tmp3Result.isEligible();
    if (!isEligibleResult) {
      if (soundpack !== Soundpacks.CLASSIC) {
        const obj2 = SoundpackActions;
        obj2.setSoundpack(tmp6.CLASSIC, null);
      }
    }
    if (isEligibleResult) {
      isEligibleResult = null != tmp3(19359).soundpack;
    }
    if (isEligibleResult) {
      isEligibleResult = name !== lastSoundpackExperimentId;
    }
    if (isEligibleResult) {
      isEligibleResult = soundpack !== tmp3(19359).soundpack;
    }
    if (isEligibleResult) {
      const obj3 = SoundpackActions;
      obj3.setSoundpack(HolidayEventsConfigDefault.soundpack, name);
    }
  }
  updateRingtone() {
    const obj = HolidayEventsUtilsDefault;
    if (obj.isEligible()) {
      const tmpResult = getSoundsForPackDefault;
      const tmpResultResult = tmpResult(SoundpackStore.getSoundpack());
      if (null != tmpResultResult.call_ringing) {
        const obj3 = react_native;
        obj3.setIncomingRingtone("call_ringing", `${tmp7.call_ringing}.mp3`);
      }
    } else {
      const obj2 = react_native;
      obj2.setIncomingRingtone("call_ringing", "call_ringing.mp3");
    }
  }
}
const prototype = HolidayEventsManager.prototype;
const holidayEventsManager = new HolidayEventsManager();
const result = size.fileFinishedImporting("modules/holidays/HolidayEventsManager.tsx");

export default holidayEventsManager;
