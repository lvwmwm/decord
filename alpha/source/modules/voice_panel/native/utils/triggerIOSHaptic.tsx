// Module ID: 18110
// Function ID: 18111
// Name: triggerIOSHaptic
// Dependencies: [12843, 5119, 2]
// Exports: default

// Module 18110 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5119 */;
import VoicePanelConstants from "VoicePanelConstants" /* 12843 */;
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
