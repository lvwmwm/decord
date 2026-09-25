// Module ID: 16886
// Function ID: 16887
// Name: utils/triggerIOSHaptic
// Dependencies: [11741, 4797, 2]
// Exports: default

// Module 16886 (utils/triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4797 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11741 */;
import size from "module_2" /* 2 */;

const IS_IOS = VoicePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
