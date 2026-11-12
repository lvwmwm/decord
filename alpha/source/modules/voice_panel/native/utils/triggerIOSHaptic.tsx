// Module ID: 19791
// Function ID: 19792
// Name: triggerIOSHaptic
// Dependencies: [11919, 5491, 2]
// Exports: default

// Module 19791 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5491 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11919 */;
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
