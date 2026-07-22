// Module ID: 10225
// Function ID: 79023
// Name: set
// Dependencies: []

// Module 10225 (set)
const obj = { duration: 220 };
const Easing = require(dependencyMap[1]).Easing;
obj.easing = Easing.bezier(0.16, 1, 0.3, 1);
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationConstants.tsx");
const items = [-100, 0, 100];

export const REACTION_MILESTONE_COUNTS = new Set([]);
export const IN_APP_NOTIFICATION_MAX_HEIGHT = 96;
export const NOTIFICATION_MAX_WIDTH = 480;
export const NOTIFICATION_PREVIEW_LINE_CLAMP = 2;
export const EXPANDABLE_MIN_WINDOW_HEIGHT = 500;
export const RIGHT_ACCESSORY_LEFT_MARGIN = importDefault(dependencyMap[0]).space.PX_12;
export const PAN_INPUT_RANGE = items;
export const NOTIFICATION_BOB_RANGE = 20;
export const MIN_SWIPE_DISTANCE = 25;
export const MIN_SWIPE_VELOCITY = 100;
export const STARTED_SWIPE_THRESHOLD = 5;
export const extrapolateConfig = { useRedactableMediaAttachmentsForMessage: 24, fetchHarvestStatus: 24 };
export const DEFAULT_ANIMATION_TIMING = obj;
