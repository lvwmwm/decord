// Module ID: 19396
// Function ID: 19397
// Name: triggerIOSHaptic
// Dependencies: [11734, 5228, 2]
// Exports: default

// Module 19396 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5228 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11734 */;
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
