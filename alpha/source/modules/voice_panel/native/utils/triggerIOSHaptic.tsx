// Module ID: 17514
// Function ID: 17515
// Name: triggerIOSHaptic
// Dependencies: [11989, 5055, 2]
// Exports: default

// Module 17514 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5055 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11989 */;
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
