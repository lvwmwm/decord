// Module ID: 18320
// Function ID: 18321
// Name: triggerIOSHaptic
// Dependencies: [10848, 5194, 2]
// Exports: default

// Module 18320 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5194 */;
import VoicePanelConstants from "VoicePanelConstants" /* 10848 */;
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
