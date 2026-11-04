// Module ID: 19469
// Function ID: 19470
// Name: triggerIOSHaptic
// Dependencies: [11410, 5384, 2]
// Exports: default

// Module 19469 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5384 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11410 */;
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
