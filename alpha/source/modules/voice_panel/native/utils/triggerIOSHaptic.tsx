// Module ID: 17666
// Function ID: 17667
// Name: triggerIOSHaptic
// Dependencies: [11926, 5056, 2]
// Exports: default

// Module 17666 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5056 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11926 */;
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
