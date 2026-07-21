// Module ID: 4340
// Function ID: 38339
// Name: NativePermissionStatus
// Dependencies: []

// Module 4340 (NativePermissionStatus)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/native_permissions/NativePermissionConstants.tsx");

export const NativePermissionStatus = { AUTHORIZED: "authorized", DENIED: "denied", RESTRICTED: "restricted", LIMITED: "limited", UNDETERMINED: "undetermined" };
export const NativePermissionStates = { DISMISSED: "dismissed", DENIED: "denied", ACCEPTED: "accepted", NO_DEVICES: "no_devices", ERROR: "error", NONE: "none" };
export const NativePermissionTypes = { AUDIO: "audio", CAMERA: "camera", HEADSET_CAMERA: "headset_camera", STORAGE: "storage", NOTIFICATIONS: "notifications", PHOTOS: "photos", CONTACTS: "contacts", INPUT_MONITORING: "input_monitoring", SCREEN_RECORDING: "screen_recording" };
export const NotificationAuthorizationStatus = { UNDETERMINED: 0, [0]: "UNDETERMINED", DENIED: 1, [1]: "DENIED", AUTHORIZED: 2, [2]: "AUTHORIZED", PROVISIONAL: 3, [3]: "PROVISIONAL", EPHEMERAL: 4, [4]: "EPHEMERAL" };
