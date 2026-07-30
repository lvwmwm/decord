// Module ID: 16201
// Function ID: 16202
// Name: updateSoundpack
// Dependencies: [1212, 10268, 10269, 5134, 16202, 16205, 16206, 16207, 10270, 2]

// Module 16201 (updateSoundpack)
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
  const experiment = importDefault(16202).experiment;
  if (experiment != null) {
    const name = experiment.definition.name;
  }
  let isEligibleResult = importDefault(16205).isEligible();
  if (isEligibleResult) {
    if (isEligibleResult) {
      isEligibleResult = null != tmp3(16202).soundpack;
    }
    if (isEligibleResult) {
      isEligibleResult = name !== lastSoundpackExperimentId;
    }
    if (isEligibleResult) {
      isEligibleResult = soundpack !== tmp3(16202).soundpack;
    }
    if (isEligibleResult) {
      require(16206) /* setSoundpack */.setSoundpack(tmp3(16202).soundpack, name);
      const obj3 = require(16206) /* setSoundpack */;
    }
  } else {
    require(16206) /* setSoundpack */.setSoundpack(Soundpacks.CLASSIC, null);
    const obj2 = require(16206) /* setSoundpack */;
  }
};
prototype["updateRingtone"] = function updateRingtone() {
  if (obj.isEligible()) {
    const tmpResult = importDefault(10270);
    if (null != tmpResultResult.call_ringing) {
      require(16207) /* setIncomingRingtone */.setIncomingRingtone("call_ringing", `${tmp7.call_ringing}.mp3`);
      const obj3 = require(16207) /* setIncomingRingtone */;
    }
    tmpResultResult = importDefault(10270)(store.getSoundpack());
  } else {
    require(16207) /* setIncomingRingtone */.setIncomingRingtone("call_ringing", "call_ringing.mp3");
    const obj2 = require(16207) /* setIncomingRingtone */;
  }
};
const holidayEventsManager = new HolidayEventsManager();
const result = require("Soundpacks").fileFinishedImporting("modules/holidays/HolidayEventsManager.tsx");

export default holidayEventsManager;
