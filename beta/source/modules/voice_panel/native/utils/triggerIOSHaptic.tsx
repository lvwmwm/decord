// Module ID: 17494
// Function ID: 17495
// Name: utils/triggerIOSHaptic
// Dependencies: [12456, 4758, 2]
// Exports: default

// Module 17494 (utils/triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4758 */;
import VoicePanelConstants from "VoicePanelConstants" /* 12456 */;
import size from "module_2" /* 2 */;

const IS_IOS = VoicePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
