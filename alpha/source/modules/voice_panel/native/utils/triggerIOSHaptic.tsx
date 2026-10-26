// Module ID: 18490
// Function ID: 18491
// Name: triggerIOSHaptic
// Dependencies: [10900, 5212, 2]
// Exports: default

// Module 18490 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5212 */;
import VoicePanelConstants from "VoicePanelConstants" /* 10900 */;
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
