// Module ID: 8236
// Function ID: 8237
// Name: HeaderButton
// Dependencies: [19, 21, 4604, 4185, 4189, 4601, 2]

// Module 8236 (HeaderButton)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
class HeaderButton {
  constructor(arg0) {
    tmp = lineHeight();
    obj = { accessibilityRole: "header" };
    merged = Object.assign(global);
    obj.pillStyle = tmp.pill;
    obj.size = "sm";
    obj.textVariant = c3;
    obj.variant = "secondary-overlay";
    return jsx(require("CollapsingText").BaseTextButton, obj);
  }
}
let c3 = "heading-md/bold";
const diff = require("MINIMUM_HIT_AREA").SMALL_BUTTON_HEIGHT - 2 * require("MINIMUM_HIT_AREA").BUTTON_BORDER_WIDTH;
const diff1 = diff - require("Text").TextStyleSheet["heading-md/bold"].lineHeight;
createCacheKey = { paddingVertical: diff1 / 2 };
let closure_4 = createCacheKey.createStyles({ pill: createCacheKey });
HeaderButton.Icon = require("CollapsingText").BaseTextButton.Icon;
const result = require("MINIMUM_HIT_AREA").fileFinishedImporting("design/components/experimental/Button/native/HeaderButton.native.tsx");

export { HeaderButton };
