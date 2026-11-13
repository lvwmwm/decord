// Module ID: 19616
// Function ID: 19617
// Name: triggerIOSHaptic
// Dependencies: [11395, 5408, 2]
// Exports: default

// Module 19616 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5408 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11395 */;
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
