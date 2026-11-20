// Module ID: 5018
// Function ID: 5019
// Dependencies: [5019]

// Module 5018
import "PATTERN_CHARS";
import PATTERN_CHARS_mod from "PATTERN_CHARS" /* 5019 */;

let PATTERN_CHARS;
const obj = { success: PATTERN_CHARS.pattern("oO.O"), error: PATTERN_CHARS.pattern("OO.OO"), warning: PATTERN_CHARS.pattern("O.O"), heartbeat: PATTERN_CHARS.pattern("oO--oO"), tripleClick: PATTERN_CHARS.pattern("o.o.o"), notification: PATTERN_CHARS.pattern("o-O=o") };
PATTERN_CHARS = PATTERN_CHARS_mod;

export const Patterns = obj;
