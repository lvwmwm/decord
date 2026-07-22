// Module ID: 11507
// Function ID: 89681
// Name: GameServerStatus
// Dependencies: []

// Module 11507 (GameServerStatus)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/shared-constants/GameServerStatus.tsx");

export const GameServerStatus = { STARTING: "starting", STARTUP_FAILED: "startup_failed", MISSING_STOCK: "missing_stock", SLEEPING: "sleeping", OFFLINE: "offline", ONLINE: "online", DELETED: "deleted", PROVIDER_ERRORED: "provider_errored" };
