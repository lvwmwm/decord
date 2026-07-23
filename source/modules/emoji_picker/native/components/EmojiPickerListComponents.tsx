// Module ID: 9363
// Function ID: 73076
// Name: LABEL_TOP_PADDING
// Dependencies: [31, 27, 9329, 33, 4130, 689, 1273, 7837, 4126, 1212, 9361, 2]

// Module 9363 (LABEL_TOP_PADDING)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import IMAGE_SIZE from "IMAGE_SIZE";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let LABEL_BOTTOM_PADDING;
let LABEL_TOP_PADDING;
let NSFW_ROW_HEIGHT;
let closure_4;
let closure_5;
const require = arg1;
({ LABEL_BOTTOM_PADDING, LABEL_TOP_PADDING, NSFW_ROW_HEIGHT } = IMAGE_SIZE);
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let obj = {};
obj = { justifyContent: "center", overflow: "hidden", backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT, paddingTop: LABEL_TOP_PADDING, paddingBottom: LABEL_BOTTOM_PADDING };
obj.section = obj;
_createForOfIteratorHelperLoose = { flexDirection: "row", height: NSFW_ROW_HEIGHT, alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginLeft: 12, marginRight: 12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL };
obj.nsfwContainer = _createForOfIteratorHelperLoose;
obj.nsfwText = { marginLeft: 4, textAlign: "center" };
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(() => {
  const tmp = callback3();
  let obj = { style: tmp.nsfwContainer };
  obj = { source: importDefault(7837), size: require(1273) /* Button */.Icon.Sizes.SMALL };
  const items = [callback(require(1273) /* Button */.Icon, obj), ];
  obj = { style: tmp.nsfwText, variant: "text-sm/normal", color: "interactive-text-active" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.SLzV5z);
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(View, obj);
});
const memoResult1 = importAllResult.memo((useTier0UpsellContent) => {
  let isSectionNitroLocked;
  let label;
  ({ label, isSectionNitroLocked } = useTier0UpsellContent);
  let obj = { style: callback3().section };
  if (isSectionNitroLocked) {
    obj = { useTier0UpsellContent: useTier0UpsellContent.useTier0UpsellContent };
    isSectionNitroLocked = callback(require(9361) /* PremiumUpsellGradientBackground */.PremiumUpsellGradientBackground, obj);
  }
  const items = [isSectionNitroLocked, ];
  let tmp6 = null;
  if ("" !== label) {
    obj = { lineClamp: 1, color: "interactive-text-default", variant: "heading-sm/semibold", children: label };
    tmp6 = callback(require(4126) /* Text */.Text, obj);
  }
  items[1] = tmp6;
  obj.children = items;
  return closure_5(View, obj);
});
const result = require("IMAGE_SIZE").fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponents.tsx");

export const NSFWRow = memoResult;
export const Section = memoResult1;
