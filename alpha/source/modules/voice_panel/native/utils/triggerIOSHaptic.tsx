// Module ID: 17835
// Function ID: 17836
// Name: triggerIOSHaptic
// Dependencies: [12524, 5061, 2]
// Exports: default

// Module 17835 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5061 */;
import VoicePanelConstants from "VoicePanelConstants" /* 12524 */;
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
