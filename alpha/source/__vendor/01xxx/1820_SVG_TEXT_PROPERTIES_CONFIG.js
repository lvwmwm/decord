// Module ID: 1820
// Function ID: 1821
// Name: SVG_TEXT_PROPERTIES_CONFIG
// Dependencies: [1801, 1802]

// Module 1820 (SVG_TEXT_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1801 */;
import processSVGPath from "processSVGPath" /* 1802 */;

const obj = { x: { process: processSVGPath.processNumberArray }, y: { process: processSVGPath.processNumberArray }, dx: { process: processSVGPath.processNumberArray }, dy: { process: processSVGPath.processNumberArray }, rotate: { process: processSVGPath.processNumberArray }, lengthAdjust: false, textLength: false, children: false, inlineSize: false, alignmentBaseline: false, baselineShift: false, verticalAlign: false, fontData: false, fontFeatureSettings: false, font: false, fontStyle: false, fontVariant: false, fontWeight: false, fontStretch: false, fontSize: false, fontFamily: false, textAnchor: false, textDecoration: false, letterSpacing: false, wordSpacing: false, kerning: false, fontVariantLigatures: false, fontVariationSettings: false };
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
({ process: processSVGPath.processNumberArray });
({ process: processSVGPath.processNumberArray });
({ process: processSVGPath.processNumberArray });
({ process: processSVGPath.processNumberArray });
({ process: processSVGPath.processNumberArray });

export const SVG_TEXT_PROPERTIES_CONFIG = obj;
