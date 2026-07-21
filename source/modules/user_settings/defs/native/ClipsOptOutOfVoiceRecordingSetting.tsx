// Module ID: 13755
// Function ID: 103999
// Name: _updateClipsAllowVoiceRecording
// Dependencies: []

// Module 13755 (_updateClipsAllowVoiceRecording)
function _updateClipsAllowVoiceRecording() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _updateClipsAllowVoiceRecording = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[4]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.AGDDkH);
  },
  useDescription() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.wW9/zQ);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.CLIPS,
  useValue: arg1(dependencyMap[2]).ClipsAllowVoiceRecording.useSetting,
  onValueChange: function updateClipsAllowVoiceRecording() {
    return _updateClipsAllowVoiceRecording(...arguments);
  }
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/defs/native/ClipsOptOutOfVoiceRecordingSetting.tsx");

export default toggle;
