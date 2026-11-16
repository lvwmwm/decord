// Module ID: 1766
// Function ID: 1767
// Name: NATIVE_PSEUDO_SELECTORS_PRIORITY
// Dependencies: []

// Module 1766 (NATIVE_PSEUDO_SELECTORS_PRIORITY)
const items = [":focus-within", ":focus", ":hover", ":active", ":active-deepest"];
new Set(items);

export const NATIVE_PSEUDO_SELECTORS_PRIORITY = items;
export const NATIVE_PSEUDO_SELECTORS = new Set(items);
export const PRESS_PSEUDO_SELECTORS = [":active", ":active-deepest"];
