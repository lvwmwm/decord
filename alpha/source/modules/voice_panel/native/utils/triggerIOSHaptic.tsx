// Module ID: 19979
// Function ID: 19980
// Name: triggerIOSHaptic
// Dependencies: [11985, 5554, 2]
// Exports: default

// Module 19979 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5554 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11985 */;
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
