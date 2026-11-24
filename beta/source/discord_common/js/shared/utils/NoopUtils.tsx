// Module ID: 1085
// Function ID: 1086
// Name: NoopUtils
// Dependencies: [2]
// Exports: NOOP, NOOP_NULL, NOOP_PROMISE, NOOP_TRUE

// Module 1085 (NoopUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/NoopUtils.tsx");

export function NOOP() {

}
export const NOOP_NULL = () => null;
export const NOOP_PROMISE = () => Promise.resolve();
export const NOOP_TRUE = () => true;
