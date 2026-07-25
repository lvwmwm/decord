// Module ID: 13940
// Function ID: 106661
// Name: _updateClipsAllowVoiceRecording
// Dependencies: [5, 7697, 3804, 686, 10059, 1212, 2]

// Module 13940 (_updateClipsAllowVoiceRecording)
import getSystemLocale from "getSystemLocale";
import createToggle from "createToggle";

const require = arg1;
function _updateClipsAllowVoiceRecording() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.AGDDkH);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["wW9/zQ"]);
  },
  parent: require("MobileSetting").MobileSetting.CLIPS,
  useValue: require("explicitContentFromProto").ClipsAllowVoiceRecording.useSetting,
  onValueChange: function updateClipsAllowVoiceRecording() {
    return _updateClipsAllowVoiceRecording(...arguments);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/defs/native/ClipsOptOutOfVoiceRecordingSetting.tsx");

export default createToggle;
