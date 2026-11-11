// Module ID: 19796
// Function ID: 19797
// Name: triggerIOSHaptic
// Dependencies: [11925, 5491, 2]
// Exports: default

// Module 19796 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5491 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11925 */;
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
