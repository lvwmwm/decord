// Module ID: 19506
// Function ID: 19507
// Name: triggerIOSHaptic
// Dependencies: [11381, 5406, 2]
// Exports: default

// Module 19506 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5406 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11381 */;
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
