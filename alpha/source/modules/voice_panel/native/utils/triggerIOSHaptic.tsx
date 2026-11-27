// Module ID: 19475
// Function ID: 19476
// Name: triggerIOSHaptic
// Dependencies: [11790, 5259, 2]
// Exports: default

// Module 19475 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5259 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11790 */;
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
