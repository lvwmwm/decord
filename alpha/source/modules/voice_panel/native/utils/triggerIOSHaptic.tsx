// Module ID: 18454
// Function ID: 18455
// Name: triggerIOSHaptic
// Dependencies: [10896, 5210, 2]
// Exports: default

// Module 18454 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5210 */;
import VoicePanelConstants from "VoicePanelConstants" /* 10896 */;
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
