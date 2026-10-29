// Module ID: 19015
// Function ID: 19016
// Name: triggerIOSHaptic
// Dependencies: [10974, 5249, 2]
// Exports: default

// Module 19015 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5249 */;
import VoicePanelConstants from "VoicePanelConstants" /* 10974 */;
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
