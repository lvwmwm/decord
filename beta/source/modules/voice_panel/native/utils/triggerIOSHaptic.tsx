// Module ID: 18528
// Function ID: 18529
// Name: triggerIOSHaptic
// Dependencies: [10932, 5244, 2]
// Exports: default

// Module 18528 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5244 */;
import VoicePanelConstants from "VoicePanelConstants" /* 10932 */;
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
