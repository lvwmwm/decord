// Module ID: 15122
// Function ID: 15123
// Name: frozen
// Dependencies: [2]

// Module 15122 (frozen)
import set from "set" /* 2 */;

const frozen = Object.freeze({ VOICE_ACTIVITY: "Voice Activity" });
const result = set.fileFinishedImporting("modules/user_settings/notifications/native/codegen/MobileNotifSettingsSections.tsx");

export const MobileNotifSettingsSections = frozen;
