// Module ID: 17233
// Function ID: 17234
// Name: triggerIOSHaptic
// Dependencies: [11916, 4861, 2]
// Exports: default

// Module 17233 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4861 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11916 */;
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
