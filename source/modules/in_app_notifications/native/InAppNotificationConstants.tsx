// Module ID: 10267
// Function ID: 79286
// Name: set
// Dependencies: [689, 3991, 2]

// Module 10267 (set)
import { Easing } from "module_3991";
import set from "set";

let set = new Set([10, 25]);
const obj = { duration: 220 };
obj.easing = Easing.bezier(0.16, 1, 0.3, 1);
const result = set.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationConstants.tsx");
const items = [-100, 0, 100];

export const REACTION_MILESTONE_COUNTS = set;
export const IN_APP_NOTIFICATION_MAX_HEIGHT = 96;
export const NOTIFICATION_MAX_WIDTH = 480;
export const NOTIFICATION_PREVIEW_LINE_CLAMP = 2;
export const EXPANDABLE_MIN_WINDOW_HEIGHT = 500;
export const RIGHT_ACCESSORY_LEFT_MARGIN = require("_createForOfIteratorHelperLoose").space.PX_8;
export const NOTIFICATION_CONTAINER_MARGIN = require("_createForOfIteratorHelperLoose").space.PX_16;
export const PAN_INPUT_RANGE = items;
export const NOTIFICATION_BOB_RANGE = 20;
export const MIN_SWIPE_DISTANCE = 25;
export const MIN_SWIPE_VELOCITY = 100;
export const STARTED_SWIPE_THRESHOLD = 5;
export const extrapolateConfig = { extrapolateRight: "clamp", extrapolateLeft: "clamp" };
export const DEFAULT_ANIMATION_TIMING = obj;
