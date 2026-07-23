// Module ID: 12088
// Function ID: 94686
// Name: ImageSkeleton
// Dependencies: [31, 27, 33, 4130, 689, 4126, 2]
// Exports: ImageSkeleton, TextSkeleton

// Module 12088 (ImageSkeleton)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL };
_createForOfIteratorHelperLoose.skeleton = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetSkeletons.tsx");

export const ImageSkeleton = function ImageSkeleton(style) {
  const obj = {};
  const items = [_createForOfIteratorHelperLoose().skeleton, style.style];
  obj.style = items;
  return <View />;
};
export const APPROX_CHAR_WIDTH_RATIO = 0.46;
export const TextSkeleton = function TextSkeleton(widthChars) {
  let num = widthChars.widthChars;
  if (num === undefined) {
    num = 15;
  }
  const tmp2 = require(4126) /* Text */.TextStyleSheet[widthChars.variant];
  const style = [_createForOfIteratorHelperLoose().skeleton, ];
  const obj = { width: 0.46 * tmp2.fontSize * num, height: 0.8 * tmp2.lineHeight };
  style[1] = obj;
  return <View style={style} />;
};
