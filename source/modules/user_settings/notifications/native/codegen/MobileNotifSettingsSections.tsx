// Module ID: 15744
// Function ID: 15745
// Name: frozen
// Dependencies: [2]

// Module 15744 (frozen)
import set from "set" /* 2 */;

const frozen = Object.freeze({ NOTIF_REALTIME: "Realtime", NOTIF_CATEGORY_SOCIAL: "Category social", NOTIF_CATEGORY_SERVER: "Category server", NOTIF_CATEGORY_OTHER: "Category other" });
const result = set.fileFinishedImporting("modules/user_settings/notifications/native/codegen/MobileNotifSettingsSections.tsx");

export const MobileNotifSettingsSections = frozen;
