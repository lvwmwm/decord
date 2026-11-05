// Module ID: 19514
// Function ID: 19515
// Name: triggerIOSHaptic
// Dependencies: [11419, 5386, 2]
// Exports: default

// Module 19514 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5386 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11419 */;
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
