// Module ID: 19285
// Function ID: 19286
// Name: triggerIOSHaptic
// Dependencies: [11635, 5133, 2]
// Exports: default

// Module 19285 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5133 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11635 */;
import size from "module_2" /* 2 */;

const IS_IOS = VoicePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  const tmp = IS_IOS;
  if (tmp) {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
