// Module ID: 19149
// Function ID: 19150
// Name: triggerIOSHaptic
// Dependencies: [11204, 5255, 2]
// Exports: default

// Module 19149 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5255 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11204 */;
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
