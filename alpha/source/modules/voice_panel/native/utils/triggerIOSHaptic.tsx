// Module ID: 17662
// Function ID: 17663
// Name: utils/triggerIOSHaptic
// Dependencies: [12615, 4797, 2]
// Exports: default

// Module 17662 (utils/triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4797 */;
import VoicePanelConstants from "VoicePanelConstants" /* 12615 */;
import size from "module_2" /* 2 */;

const IS_IOS = VoicePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
