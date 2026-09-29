// Module ID: 9219
// Function ID: 9220
// Name: Button/HeaderButton
// Dependencies: [19, 21, 5223, 4784, 4788, 5219, 2]

// Module 9219 (Button/HeaderButton)
import BaseTextButton from "BaseTextButton" /* 5219 */;
import noop from "module_19" /* 19 */;

require = fn;
class HeaderButton {
  constructor(arg0) {
    tmp = closure_4();
    obj = { accessibilityRole: "header" };
    merged = Object.assign(global);
    obj.pillStyle = tmp.pill;
    obj.size = "sm";
    obj.textVariant = c3;
    obj.variant = "secondary-overlay";
    return jsx(closure_0(closure_1[5]).BaseTextButton, obj);
  }
}
const jsx = fn(21).jsx;
const React3 = "heading-md/bold";
const diff = fn(5223).SMALL_BUTTON_HEIGHT - 2 * fn(5223).BUTTON_BORDER_WIDTH;
const diff1 = diff - fn(4784).TextStyleSheet["heading-md/bold"].lineHeight;
const createStyles = fn(4788);
const React4 = createStyles.createStyles({ pill: { paddingVertical: diff1 / 2 } });
HeaderButton.Icon = fn(5219).BaseTextButton.Icon;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/Button/native/HeaderButton.native.tsx");

export { HeaderButton };
