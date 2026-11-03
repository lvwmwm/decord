// Module ID: 19365
// Function ID: 19366
// Name: triggerIOSHaptic
// Dependencies: [11360, 5383, 2]
// Exports: default

// Module 19365 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5383 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11360 */;
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
