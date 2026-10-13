// Module ID: 18124
// Function ID: 18125
// Name: HolidayEventsManager
// Dependencies: [1259, 10981, 10982, 6808, 18125, 18129, 18130, 18131, 10983, 2]

// Module 18124 (HolidayEventsManager)
import Constants from "Constants" /* 10982 */;
import HolidayEventsConfigDefault from "HolidayEventsConfig" /* 18125 */;
import HolidayEventsUtilsDefault from "HolidayEventsUtils" /* 18129 */;
import SoundpackActions from "SoundpackActions" /* 18130 */;
import react_native from "react-native" /* 18131 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1259 */;
import SoundpackStore from "SoundpackStore" /* 10981 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6808 */;
import size from "module_2" /* 2 */;

let map;

let tmp;
const getSoundsForPackDefault = tmp(10983);
const Soundpacks = Constants.Soundpacks;
class HolidayEventsManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    map = new Map();
    applyArgumentsResult.stores = map.set(ApexExperimentStore, () => require.handleExperimentUpdated());
    applyArgumentsResult.actions = { NOTIFICATIONS_SET_DISABLED_SOUNDS: applyArgumentsResult.updateRingtone };
    applyArgumentsResult.handleExperimentUpdated = function handleExperimentUpdated() {
      const tmp = !HolidayEventsConfigDefault.isDesktopOnly;
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
    if (isEligibleResult) {
      if (isEligibleResult) {
        isEligibleResult = null != tmp3(18125).soundpack;
      }
      if (isEligibleResult) {
        isEligibleResult = name !== lastSoundpackExperimentId;
      }
      if (isEligibleResult) {
        isEligibleResult = soundpack !== tmp3(18125).soundpack;
      }
      if (isEligibleResult) {
        const obj3 = SoundpackActions;
        obj3.setSoundpack(HolidayEventsConfigDefault.soundpack, name);
      }
    } else {
      const obj2 = SoundpackActions;
      obj2.setSoundpack(Soundpacks.CLASSIC, null);
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
