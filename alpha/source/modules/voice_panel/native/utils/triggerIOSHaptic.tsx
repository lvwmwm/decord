// Module ID: 18216
// Function ID: 18217
// Name: triggerIOSHaptic
// Dependencies: [10693, 5173, 2]
// Exports: default

// Module 18216 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5173 */;
import VoicePanelConstants from "VoicePanelConstants" /* 10693 */;
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
