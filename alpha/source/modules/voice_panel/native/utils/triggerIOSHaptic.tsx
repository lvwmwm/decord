// Module ID: 20027
// Function ID: 20028
// Name: triggerIOSHaptic
// Dependencies: [12428, 5548, 2]
// Exports: default

// Module 20027 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5548 */;
import VoicePanelConstants from "VoicePanelConstants" /* 12428 */;
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
