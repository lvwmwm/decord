// Module ID: 1802
// Function ID: 1803
// Name: SVG_COMMON_PROPERTIES_CONFIG
// Dependencies: [1803]

// Module 1802 (SVG_COMMON_PROPERTIES_CONFIG)
import processSVGPath_mod from "processSVGPath" /* 1803 */;

let obj10;
let obj11;
let obj12;
let obj6;
let processSVGPath;
const obj = { process: processSVGPath.processColorOrPlatformColorSVG };
const obj2 = { clipRule: true, clipPath: true, translate: true, translateX: true, translateY: true, origin: true, originX: true, originY: true, scale: true, scaleX: true, scaleY: true, skew: true, skewX: true, skewY: true, rotation: true, x: true, y: true, transform: true, pointerEvents: true, marker: true, markerStart: true, markerMid: true, markerEnd: true, mask: true, filter: true, opacity: { process: processSVGPath.processPercentage } };
const obj3 = { color: obj };
const merged = Object.assign(obj3);
const obj4 = { fill: obj, fillOpacity: { process: processSVGPath.processPercentage }, fillRule: obj6 };
obj6 = { process: processSVGPath.convertStringToNumber({ evenodd: 0, nonzero: 1 }) };
({ process: processSVGPath.processPercentage });
processSVGPath = processSVGPath_mod;
const merged1 = Object.assign(obj4);
const obj7 = { stroke: obj, strokeWidth: true, strokeOpacity: { process: processSVGPath.processPercentage }, strokeDasharray: { process: processSVGPath.processStrokeDashArray }, strokeDashoffset: true, strokeLinecap: obj10, strokeLinejoin: obj11, strokeMiterlimit: true, vectorEffect: obj12 };
({ process: processSVGPath.processPercentage });
obj10 = { process: processSVGPath.convertStringToNumber({ butt: 0, square: 2, round: 1 }) };
({ process: processSVGPath.processStrokeDashArray });
processSVGPath = processSVGPath_mod;
obj11 = { process: processSVGPath.convertStringToNumber({ miter: 0, bevel: 2, round: 1 }) };
processSVGPath = processSVGPath_mod;
obj12 = { process: processSVGPath.convertStringToNumber({ none: 0, default: 0, nonScalingStroke: 1, "non-scaling-stroke": 1, inherit: 2, uri: 3 }) };
processSVGPath = processSVGPath_mod;
const merged2 = Object.assign(obj7);
({ process: processSVGPath.processPercentage });

export const SVG_COMMON_PROPERTIES_CONFIG = obj2;
