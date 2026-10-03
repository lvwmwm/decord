// Module ID: 17180
// Function ID: 17181
// Name: triggerIOSHaptic
// Dependencies: [11902, 4855, 2]
// Exports: default

// Module 17180 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4855 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11902 */;
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
