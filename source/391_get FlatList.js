// Module ID: 391
// Function ID: 5733
// Name: get FlatList
// Dependencies: [262, 392, 345, 393, 394, 395, 398, 400, 401]

// Module 391 (get FlatList)
const require = arg1;
if (require("get Version").isDisableAnimations) {
  let importDefaultResult = require("mockAnimationStart");
} else {
  importDefaultResult = require("_combineCallbacks");
}
const obj = {};
Object.defineProperty(obj, "FlatList", { get: () => require(393).default, set: undefined });
Object.defineProperty(obj, "Image", { get: () => require(394).default, set: undefined });
Object.defineProperty(obj, "ScrollView", { get: () => require(395) /* AnimatedScrollViewWithInvertedRefreshControl */.default, set: undefined });
Object.defineProperty(obj, "SectionList", { get: () => require(398).default, set: undefined });
Object.defineProperty(obj, "Text", { get: () => require(400).default, set: undefined });
Object.defineProperty(obj, "View", { get: () => require(401).default, set: undefined });

export default Object.assign(obj, importDefaultResult);
