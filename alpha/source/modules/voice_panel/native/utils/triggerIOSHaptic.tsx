// Module ID: 18075
// Function ID: 18076
// Name: triggerIOSHaptic
// Dependencies: [12817, 5116, 2]
// Exports: default

// Module 18075 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5116 */;
import VoicePanelConstants from "VoicePanelConstants" /* 12817 */;
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
