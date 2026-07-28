// Module ID: 8215
// Function ID: 65730
// Name: HeaderButton
// Dependencies: [31, 33, 4582, 4161, 4165, 4579, 2]

// Module 8215 (HeaderButton)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
class HeaderButton {
  constructor(arg0) {
    tmp = c4();
    obj = { accessibilityRole: "header" };
    merged = Object.assign(global);
    obj["pillStyle"] = tmp.pill;
    obj["size"] = "sm";
    obj["textVariant"] = c3;
    obj["variant"] = "secondary-overlay";
    return jsx(require("CollapsingText").BaseTextButton, obj);
  }
}
let c3 = "heading-md/bold";
const diff = require("getButtonPadding").SMALL_BUTTON_HEIGHT - 2 * require("getButtonPadding").BUTTON_BORDER_WIDTH;
const diff1 = diff - require("Text").TextStyleSheet["heading-md/bold"].lineHeight;
_createForOfIteratorHelperLoose = { paddingVertical: diff1 / 2 };
let closure_4 = _createForOfIteratorHelperLoose.createStyles({ pill: _createForOfIteratorHelperLoose });
HeaderButton.Icon = require("CollapsingText").BaseTextButton.Icon;
const result = require("getButtonPadding").fileFinishedImporting("design/components/experimental/Button/native/HeaderButton.native.tsx");

export { HeaderButton };
