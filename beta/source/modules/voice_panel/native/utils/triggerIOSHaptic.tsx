// Module ID: 19256
// Function ID: 19257
// Name: triggerIOSHaptic
// Dependencies: [11755, 5129, 2]
// Exports: default

// Module 19256 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5129 */;
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
