// Module ID: 5164
// Function ID: 5165
// Dependencies: [5165]

// Module 5164
import "PATTERN_CHARS";
import PATTERN_CHARS_mod from "PATTERN_CHARS" /* 5165 */;

let PATTERN_CHARS;
const obj = { success: PATTERN_CHARS.pattern("oO.O"), error: PATTERN_CHARS.pattern("OO.OO"), warning: PATTERN_CHARS.pattern("O.O"), heartbeat: PATTERN_CHARS.pattern("oO--oO"), tripleClick: PATTERN_CHARS.pattern("o.o.o"), notification: PATTERN_CHARS.pattern("o-O=o") };
PATTERN_CHARS = PATTERN_CHARS_mod;

export const Patterns = obj;
