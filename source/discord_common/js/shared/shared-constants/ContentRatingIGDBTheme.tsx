// Module ID: 6868
// Function ID: 54311
// Name: set
// Dependencies: [284214097]

// Module 6868 (set)
const obj = { ALL: new Set([100, 1, 250, 2.5, 0, 0, 500, 5, 9001, 10, 25, 0.5, 50, 1, 100, 2, 250, 4, 500, 8, 1000]) };
const set = new Set([100, 1, 250, 2.5, 0, 0, 500, 5, 9001, 10, 25, 0.5, 50, 1, 100, 2, 250, 4, 500, 8, 1000]);
obj.ADULT_THEMES = new Set([]);
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/shared-constants/ContentRatingIGDBTheme.tsx");

export const ContentRatingIGDBTheme = { UNKNOWN_THEME: 0, [0]: "UNKNOWN_THEME", THRILLER: 1, [1]: "THRILLER", SCIENCE_FICTION: 2, [2]: "SCIENCE_FICTION", ACTION: 3, [3]: "ACTION", HORROR: 4, [4]: "HORROR", SURVIVAL: 5, [5]: "SURVIVAL", FANTASY: 6, [6]: "FANTASY", HISTORICAL: 7, [7]: "HISTORICAL", STEALTH: 8, [8]: "STEALTH", COMEDY: 9, [9]: "COMEDY", BUSINESS: 10, [10]: "BUSINESS", DRAMA: 11, [11]: "DRAMA", NON_FICTION: 12, [12]: "NON_FICTION", KIDS: 13, [13]: "KIDS", SANDBOX: 14, [14]: "SANDBOX", OPEN_WORLD: 15, [15]: "OPEN_WORLD", WARFARE: 16, [16]: "WARFARE", EDUCATIONAL: 17, [17]: "EDUCATIONAL", MYSTERY: 18, [18]: "MYSTERY", PARTY: 19, [19]: "PARTY", ROMANCE: 20, [20]: "ROMANCE", EROTIC: 21, [21]: "EROTIC" };
export const ContentRatingIGDBThemeSets = obj;
