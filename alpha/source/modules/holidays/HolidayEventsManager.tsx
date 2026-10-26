// Module ID: 18822
// Function ID: 18823
// Name: HolidayEventsManager
// Dependencies: [1261, 11526, 502, 11527, 7214, 18823, 18827, 18828, 18829, 11528, 2]

// Module 18822 (HolidayEventsManager)
import Constants from "Constants" /* 11527 */;
import HolidayEventsConfigDefault from "HolidayEventsConfig" /* 18823 */;
import HolidayEventsUtilsDefault from "HolidayEventsUtils" /* 18827 */;
import SoundpackActions from "SoundpackActions" /* 18828 */;
import react_native from "react-native" /* 18829 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1261 */;
import SoundpackStore from "SoundpackStore" /* 11526 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7214 */;
import size from "module_2" /* 2 */;

let map;

let tmp;
const getSoundsForPackDefault = tmp(11528);
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
      isEligibleResult = null != tmp3(18823).soundpack;
    }
    if (isEligibleResult) {
      isEligibleResult = name !== lastSoundpackExperimentId;
    }
    if (isEligibleResult) {
      isEligibleResult = soundpack !== tmp3(18823).soundpack;
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
