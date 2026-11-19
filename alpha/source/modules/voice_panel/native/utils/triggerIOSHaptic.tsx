// Module ID: 19294
// Function ID: 19295
// Name: triggerIOSHaptic
// Dependencies: [11688, 5008, 2]
// Exports: default

// Module 19294 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5008 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11688 */;
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
