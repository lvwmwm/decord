// Module ID: 6994
// Function ID: 55921
// Name: ServiceNotificationPriority
// Dependencies: [284214097]

// Module 6994 (ServiceNotificationPriority)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/foreground_service/mobile/ForegroundServiceManagerTypes.tsx");

export const ServiceNotificationPriority = { HIGH: 0, [0]: "HIGH", MEDIUM: 1, [1]: "MEDIUM", LOW: 2, [2]: "LOW" };
export const ServiceNotificationType = { FILE_UPLOAD: 0, [0]: "FILE_UPLOAD", VOICE_CALL: 1, [1]: "VOICE_CALL", SCREEN_SHARE: 2, [2]: "SCREEN_SHARE" };
export const ServiceNotificationIcon = { DEFAULT: 0, [0]: "DEFAULT", DEAFENED: 1, [1]: "DEAFENED", IDLE: 2, [2]: "IDLE", MUTED: 3, [3]: "MUTED", SPEAKING: 4, [4]: "SPEAKING" };
