// Module ID: 17149
// Function ID: 17150
// Name: HolidayEventsManager
// Dependencies: [1247, 9336, 9337, 6540, 17150, 17154, 17155, 17156, 9338, 2]

// Module 17149 (HolidayEventsManager)
import Constants from "Constants" /* 9337 */;
import HolidayEventsConfigDefault from "HolidayEventsConfig" /* 17150 */;
import HolidayEventsUtilsDefault from "HolidayEventsUtils" /* 17154 */;
import SoundpackActions from "SoundpackActions" /* 17155 */;
import react_native from "react-native" /* 17156 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1247 */;
import SoundpackStore from "SoundpackStore" /* 9336 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6540 */;
import size from "module_2" /* 2 */;

let map;

let tmp;
const getSoundsForPackDefault = tmp(9338);
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
        isEligibleResult = null != tmp3(17150).soundpack;
      }
      if (isEligibleResult) {
        isEligibleResult = name !== lastSoundpackExperimentId;
      }
      if (isEligibleResult) {
        isEligibleResult = soundpack !== tmp3(17150).soundpack;
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
