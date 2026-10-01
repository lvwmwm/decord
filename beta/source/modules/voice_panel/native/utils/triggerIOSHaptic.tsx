// Module ID: 16919
// Function ID: 16920
// Name: triggerIOSHaptic
// Dependencies: [11755, 4801, 2]
// Exports: default

// Module 16919 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4801 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
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
