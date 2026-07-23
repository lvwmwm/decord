// Module ID: 290
// Function ID: 4483
// Name: NativeText
// Dependencies: [291, 107, 46]

// Module 290 (NativeText)
const require = arg1;
let closure_2 = { validAttributes: { isHighlighted: true, isPressable: true, numberOfLines: true, ellipsizeMode: true, allowFontScaling: true, dynamicTypeRamp: true, maxFontSizeMultiplier: true, disabled: true, selectable: true, selectionColor: true, adjustsFontSizeToFit: true, minimumFontScale: true, textBreakStrategy: true, onTextLayout: true, dataDetectorType: true, android_hyphenationFrequency: true, lineBreakStrategyIOS: true, gradientColors: true, gradientAngle: true, gradientLength: true, gradientWidth: true, gradientMode: true, textStrokeWidth: true, textStrokeColor: true }, directEventTypes: { topTextLayout: { registrationName: "onTextLayout" } }, uiViewClassName: "RCTText" };
let closure_3 = { validAttributes: { isHighlighted: true, isPressable: true, maxFontSizeMultiplier: true, gradientColors: true, gradientAngle: true, gradientLength: true, gradientWidth: true, gradientMode: true, textStrokeWidth: true, textStrokeColor: true }, uiViewClassName: "RCTVirtualText" };
const tmp2 = require("createReactNativeComponentClass")("RCTText", () => require(107) /* composeIndexers */.createViewConfig(closure_2));
if (global.RN$Bridgeless) {
  let tmp3 = require("createReactNativeComponentClass")("RCTVirtualText", () => require(107) /* composeIndexers */.createViewConfig(closure_3));
} else {
  tmp3 = tmp2;
  const importDefaultResult = require("isFabricReactTag");
}

export const NativeText = tmp2;
export const NativeVirtualText = tmp3;
