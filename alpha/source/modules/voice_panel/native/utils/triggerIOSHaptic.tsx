// Module ID: 19243
// Function ID: 19244
// Name: triggerIOSHaptic
// Dependencies: [11750, 5129, 2]
// Exports: default

// Module 19243 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5129 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11750 */;
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
