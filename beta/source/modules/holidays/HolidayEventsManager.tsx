// Module ID: 17785
// Function ID: 17786
// Name: HolidayEventsManager
// Dependencies: [1235, 10159, 10160, 7363, 17786, 17790, 17791, 17792, 10161, 2]

// Module 17785 (HolidayEventsManager)
import getSoundsForPackDefault from "getSoundsForPack" /* 10161 */;
import HolidayEventsConfigDefault from "HolidayEventsConfig" /* 17786 */;
import HolidayEventsUtilsDefault from "HolidayEventsUtils" /* 17790 */;
import SoundpackActions from "SoundpackActions" /* 17791 */;
import setIncomingRingtone from "setIncomingRingtone" /* 17792 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1235 */;
import SoundpackStore from "SoundpackStore" /* 10159 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7363 */;

require = fn;
const Soundpacks = fn(10160).Soundpacks;
class HolidayEventsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    map = new Map();
    applyArgumentsResult.stores = map.set(closure_3, () => applyArgumentsResult.handleExperimentUpdated());
    applyArgumentsResult.actions = { NOTIFICATIONS_SET_DISABLED_SOUNDS: applyArgumentsResult.updateRingtone };
    applyArgumentsResult.handleExperimentUpdated = function handleExperimentUpdated() {
      if (!HolidayEventsConfigDefault.isDesktopOnly) {
        applyArgumentsResult.updateSoundpack();
        applyArgumentsResult.updateRingtone();
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = HolidayEventsManager.prototype;
prototype["updateSoundpack"] = function updateSoundpack() {
  const soundpack = SoundpackStore.getSoundpack();
  const lastSoundpackExperimentId = SoundpackStore.getLastSoundpackExperimentId();
  const experiment = HolidayEventsConfigDefault.experiment;
  if (experiment != null) {
    const name = experiment.definition.name;
  }
  let isEligibleResult = HolidayEventsUtilsDefault.isEligible();
  if (isEligibleResult) {
    if (isEligibleResult) {
      isEligibleResult = null != tmp3(17786).soundpack;
    }
    if (isEligibleResult) {
      isEligibleResult = name !== lastSoundpackExperimentId;
    }
    if (isEligibleResult) {
      isEligibleResult = soundpack !== tmp3(17786).soundpack;
    }
    if (isEligibleResult) {
      SoundpackActions.setSoundpack(tmp3(17786).soundpack, name);
    }
  } else {
    SoundpackActions.setSoundpack(Soundpacks.CLASSIC, null);
  }
};
prototype["updateRingtone"] = function updateRingtone() {
  if (obj.isEligible()) {
    const tmpResult = getSoundsForPackDefault;
    if (null != tmpResultResult.call_ringing) {
      setIncomingRingtone.setIncomingRingtone("call_ringing", `${tmp7.call_ringing}.mp3`);
    }
    tmpResultResult = getSoundsForPackDefault(SoundpackStore.getSoundpack());
  } else {
    setIncomingRingtone.setIncomingRingtone("call_ringing", "call_ringing.mp3");
  }
};
const holidayEventsManager = new HolidayEventsManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/holidays/HolidayEventsManager.tsx");

export default holidayEventsManager;
