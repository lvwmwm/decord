// Module ID: 17639
// Function ID: 17640
// Name: utils/triggerIOSHaptic
// Dependencies: [12606, 4795, 2]
// Exports: default

// Module 17639 (utils/triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4795 */;
import VoicePanelConstants from "VoicePanelConstants" /* 12606 */;
import size from "module_2" /* 2 */;

const IS_IOS = VoicePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
