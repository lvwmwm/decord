// Module ID: 17163
// Function ID: 17164
// Name: utils/triggerIOSHaptic
// Dependencies: [11965, 4810, 2]
// Exports: default

// Module 17163 (utils/triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4810 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11965 */;
import size from "module_2" /* 2 */;

const IS_IOS = VoicePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
