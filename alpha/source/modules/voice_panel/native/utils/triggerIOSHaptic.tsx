// Module ID: 19298
// Function ID: 19299
// Name: triggerIOSHaptic
// Dependencies: [11710, 5039, 2]
// Exports: default

// Module 19298 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5039 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11710 */;
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
