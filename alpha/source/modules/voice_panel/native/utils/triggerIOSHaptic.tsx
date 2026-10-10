// Module ID: 17738
// Function ID: 17739
// Name: triggerIOSHaptic
// Dependencies: [11970, 5057, 2]
// Exports: default

// Module 17738 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5057 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11970 */;
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
