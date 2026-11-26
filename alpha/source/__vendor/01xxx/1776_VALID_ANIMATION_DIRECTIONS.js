// Module ID: 1776
// Function ID: 1777
// Name: VALID_ANIMATION_DIRECTIONS
// Dependencies: []

// Module 1776 (VALID_ANIMATION_DIRECTIONS)
const set = new Set(["normal", "reverse", "alternate", "alternate-reverse"]);
const set1 = new Set(["none", "forwards", "backwards", "both"]);
new Set(["running", "paused"]);

export const VALID_ANIMATION_DIRECTIONS = set;
export const VALID_FILL_MODES = new Set(["none", "forwards", "backwards", "both"]);
export const VALID_PLAY_STATES = new Set(["running", "paused"]);
