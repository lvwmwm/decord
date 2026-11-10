// Module ID: 19202
// Function ID: 19203
// Name: triggerIOSHaptic
// Dependencies: [11223, 5260, 2]
// Exports: default

// Module 19202 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5260 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11223 */;
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
