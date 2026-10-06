// Module ID: 16844
// Function ID: 16845
// Name: triggerIOSHaptic
// Dependencies: [11648, 4802, 2]
// Exports: default

// Module 16844 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4802 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11648 */;
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
