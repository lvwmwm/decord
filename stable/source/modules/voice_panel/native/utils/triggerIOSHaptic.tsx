// Module ID: 17205
// Function ID: 17206
// Name: utils/triggerIOSHaptic
// Dependencies: [12406, 4604, 2]
// Exports: default

// Module 17205 (utils/triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4604 */;
import VoicePanelConstants from "VoicePanelConstants" /* 12406 */;
import size from "module_2" /* 2 */;

const IS_IOS = VoicePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
