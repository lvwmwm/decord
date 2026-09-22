// Module ID: 17484
// Function ID: 17485
// Name: utils/triggerIOSHaptic
// Dependencies: [12420, 4726, 2]
// Exports: default

// Module 17484 (utils/triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4726 */;
import VoicePanelConstants from "VoicePanelConstants" /* 12420 */;
import size from "module_2" /* 2 */;

const IS_IOS = VoicePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
