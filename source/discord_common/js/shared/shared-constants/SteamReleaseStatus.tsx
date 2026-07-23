// Module ID: 8606
// Function ID: 68326
// Name: SteamReleaseStatus
// Dependencies: [2]

// Module 8606 (SteamReleaseStatus)
const result = require("set").fileFinishedImporting("../discord_common/js/shared/shared-constants/SteamReleaseStatus.tsx");

export const SteamReleaseStatus = { PRE_RELEASE: 1, [1]: "PRE_RELEASE", DAY_OF_RELEASE: 2, [2]: "DAY_OF_RELEASE", POST_RELEASE: 3, [3]: "POST_RELEASE", RETIRED_ABANDONED: 4, [4]: "RETIRED_ABANDONED", CHILD_APP: 6, [6]: "CHILD_APP" };
