// Module ID: 18388
// Function ID: 18389
// Name: triggerIOSHaptic
// Dependencies: [10865, 5198, 2]
// Exports: default

// Module 18388 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5198 */;
import VoicePanelConstants from "VoicePanelConstants" /* 10865 */;
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
