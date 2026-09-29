// Module ID: 17563
// Function ID: 17564
// Name: utils/triggerIOSHaptic
// Dependencies: [12555, 4756, 2]
// Exports: default

// Module 17563 (utils/triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4756 */;
import VoicePanelConstants from "VoicePanelConstants" /* 12555 */;
import size from "module_2" /* 2 */;

const IS_IOS = VoicePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
