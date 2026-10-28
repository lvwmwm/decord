// Module ID: 18782
// Function ID: 18783
// Name: triggerIOSHaptic
// Dependencies: [10939, 5248, 2]
// Exports: default

// Module 18782 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5248 */;
import VoicePanelConstants from "VoicePanelConstants" /* 10939 */;
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
