// Module ID: 11570
// Function ID: 11571
// Name: set
// Dependencies: [2]

// Module 11570 (set)
import set from "set";

const obj = { ALL: null };
let set = new Set([1, 2, 3]);
obj[0] = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ApplicationDirectoryCollectionItemType.tsx");

export const ApplicationDirectoryCollectionItemType = { APPLICATION: 1, [1]: "APPLICATION", LINK: 2, [2]: "LINK", APPLICATION_BANNER: 3, [3]: "APPLICATION_BANNER" };
export const ApplicationDirectoryCollectionItemTypeSets = obj;
