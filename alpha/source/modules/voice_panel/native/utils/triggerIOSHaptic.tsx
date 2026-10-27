// Module ID: 18534
// Function ID: 18535
// Name: triggerIOSHaptic
// Dependencies: [10904, 5213, 2]
// Exports: default

// Module 18534 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5213 */;
import VoicePanelConstants from "VoicePanelConstants" /* 10904 */;
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
