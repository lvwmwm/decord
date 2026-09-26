// Module ID: 16915
// Function ID: 16916
// Name: utils/triggerIOSHaptic
// Dependencies: [11755, 4801, 2]
// Exports: default

// Module 16915 (utils/triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4801 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import size from "module_2" /* 2 */;

const IS_IOS = VoicePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
