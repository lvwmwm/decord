// Module ID: 18652
// Function ID: 18653
// Name: HolidayEventsManager
// Dependencies: [1261, 11455, 502, 11456, 7193, 18653, 18657, 18658, 18659, 11457, 2]

// Module 18652 (HolidayEventsManager)
import Constants from "Constants" /* 11456 */;
import HolidayEventsConfigDefault from "HolidayEventsConfig" /* 18653 */;
import HolidayEventsUtilsDefault from "HolidayEventsUtils" /* 18657 */;
import SoundpackActions from "SoundpackActions" /* 18658 */;
import react_native from "react-native" /* 18659 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1261 */;
import SoundpackStore from "SoundpackStore" /* 11455 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7193 */;
import size from "module_2" /* 2 */;

let map;

let tmp;
const getSoundsForPackDefault = tmp(11457);
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
      isEligibleResult = null != tmp3(18653).soundpack;
    }
    if (isEligibleResult) {
      isEligibleResult = name !== lastSoundpackExperimentId;
    }
    if (isEligibleResult) {
      isEligibleResult = soundpack !== tmp3(18653).soundpack;
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
