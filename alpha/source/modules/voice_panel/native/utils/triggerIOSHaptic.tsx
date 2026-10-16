// Module ID: 18120
// Function ID: 18121
// Name: triggerIOSHaptic
// Dependencies: [12849, 5119, 2]
// Exports: default

// Module 18120 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5119 */;
import VoicePanelConstants from "VoicePanelConstants" /* 12849 */;
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
