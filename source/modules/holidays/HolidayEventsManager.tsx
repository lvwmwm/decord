// Module ID: 16207
// Function ID: 16208
// Name: updateSoundpack
// Dependencies: [1212, 10272, 10273, 5134, 16208, 16211, 16212, 16213, 10274, 2]

// Module 16207 (updateSoundpack)
import initialize from "initialize";
import Soundpacks from "Soundpacks";
import { Soundpacks } from "Soundpacks";
import "initialize";

let require = arg1;
class HolidayEventsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    map = new Map();
    applyArgumentsResult.stores = map.set(initialize, () => applyArgumentsResult.handleExperimentUpdated());
    applyArgumentsResult.actions = { NOTIFICATIONS_SET_DISABLED_SOUNDS: applyArgumentsResult.updateRingtone };
    applyArgumentsResult.handleExperimentUpdated = function handleExperimentUpdated() {
      if (!outer1_1(outer1_2[4]).isDesktopOnly) {
        applyArgumentsResult.updateSoundpack();
        applyArgumentsResult.updateRingtone();
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = HolidayEventsManager.prototype;
prototype["updateSoundpack"] = function updateSoundpack() {
  const soundpack = store.getSoundpack();
  const lastSoundpackExperimentId = store.getLastSoundpackExperimentId();
  const experiment = importDefault(16208).experiment;
  if (experiment != null) {
    const name = experiment.definition.name;
  }
  let isEligibleResult = importDefault(16211).isEligible();
  if (isEligibleResult) {
    if (isEligibleResult) {
      isEligibleResult = null != tmp3(16208).soundpack;
    }
    if (isEligibleResult) {
      isEligibleResult = name !== lastSoundpackExperimentId;
    }
    if (isEligibleResult) {
      isEligibleResult = soundpack !== tmp3(16208).soundpack;
    }
    if (isEligibleResult) {
      require(16212) /* setSoundpack */.setSoundpack(tmp3(16208).soundpack, name);
      const obj3 = require(16212) /* setSoundpack */;
    }
  } else {
    require(16212) /* setSoundpack */.setSoundpack(Soundpacks.CLASSIC, null);
    const obj2 = require(16212) /* setSoundpack */;
  }
};
prototype["updateRingtone"] = function updateRingtone() {
  if (obj.isEligible()) {
    const tmpResult = importDefault(10274);
    if (null != tmpResultResult.call_ringing) {
      require(16213) /* setIncomingRingtone */.setIncomingRingtone("call_ringing", `${tmp7.call_ringing}.mp3`);
      const obj3 = require(16213) /* setIncomingRingtone */;
    }
    tmpResultResult = importDefault(10274)(store.getSoundpack());
  } else {
    require(16213) /* setIncomingRingtone */.setIncomingRingtone("call_ringing", "call_ringing.mp3");
    const obj2 = require(16213) /* setIncomingRingtone */;
  }
};
const holidayEventsManager = new HolidayEventsManager();
const result = require("Soundpacks").fileFinishedImporting("modules/holidays/HolidayEventsManager.tsx");

export default holidayEventsManager;
