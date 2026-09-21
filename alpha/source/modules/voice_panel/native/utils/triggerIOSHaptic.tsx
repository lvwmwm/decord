// Module ID: 17558
// Function ID: 17559
// Name: utils/triggerIOSHaptic
// Dependencies: [12526, 4724, 2]
// Exports: default

// Module 17558 (utils/triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4724 */;
import VoicePanelConstants from "VoicePanelConstants" /* 12526 */;
import size from "module_2" /* 2 */;

const IS_IOS = VoicePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
