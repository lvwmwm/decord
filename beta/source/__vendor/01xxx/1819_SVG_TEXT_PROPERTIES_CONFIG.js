// Module ID: 1819
// Function ID: 1820
// Name: SVG_TEXT_PROPERTIES_CONFIG
// Dependencies: [1800, 1801]

// Module 1819 (SVG_TEXT_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1800 */;
import processSVGPath from "processSVGPath" /* 1801 */;

const obj = { x: { process: processSVGPath.processNumberArray }, y: { process: processSVGPath.processNumberArray }, dx: { process: processSVGPath.processNumberArray }, dy: { process: processSVGPath.processNumberArray }, rotate: { process: processSVGPath.processNumberArray }, lengthAdjust: false, textLength: false, children: false, inlineSize: false, alignmentBaseline: false, baselineShift: false, verticalAlign: false, fontData: false, fontFeatureSettings: false, font: false, fontStyle: false, fontVariant: false, fontWeight: false, fontStretch: false, fontSize: false, fontFamily: false, textAnchor: false, textDecoration: false, letterSpacing: false, wordSpacing: false, kerning: false, fontVariantLigatures: false, fontVariationSettings: false };
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
({ process: processSVGPath.processNumberArray });
({ process: processSVGPath.processNumberArray });
({ process: processSVGPath.processNumberArray });
({ process: processSVGPath.processNumberArray });
({ process: processSVGPath.processNumberArray });

export const SVG_TEXT_PROPERTIES_CONFIG = obj;
