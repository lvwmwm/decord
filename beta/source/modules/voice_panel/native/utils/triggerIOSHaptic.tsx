// Module ID: 18185
// Function ID: 18186
// Name: triggerIOSHaptic
// Dependencies: [10680, 5156, 2]
// Exports: default

// Module 18185 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5156 */;
import VoicePanelConstants from "VoicePanelConstants" /* 10680 */;
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
