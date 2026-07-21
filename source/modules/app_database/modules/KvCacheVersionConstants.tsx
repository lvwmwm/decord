// Module ID: 476
// Function ID: 6166
// Name: HELLO_KEY
// Dependencies: [284214097]

// Module 476 (HELLO_KEY)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/app_database/modules/KvCacheVersionConstants.tsx");

export const HELLO_KEY = "hello";
export const VERSION_TO_SKIP_READING_THE_DATABASE_KEY = "version";
export const VERSION_TO_FORCE_RESYNCING_ALL_DATA_KEY = "force-resync-version";
export const VERSION_TO_SKIP_READING_THE_DATABASE = 3;
export const VERSION_TO_FORCE_RESYNCING_ALL_DATA = "stable-298";
