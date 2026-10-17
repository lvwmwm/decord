// Module ID: 18181
// Function ID: 18182
// Name: triggerIOSHaptic
// Dependencies: [12914, 5156, 2]
// Exports: default

// Module 18181 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5156 */;
import VoicePanelConstants from "VoicePanelConstants" /* 12914 */;
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
