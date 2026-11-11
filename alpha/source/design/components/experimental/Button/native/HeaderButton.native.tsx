// Module ID: 7935
// Function ID: 7936
// Name: Button/HeaderButton
// Dependencies: [19, 21, 5879, 5866, 5243, 5874, 2]

// Module 7935 (Button/HeaderButton)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5866 */;
import BaseTextButton2 from "BaseTextButton" /* 5874 */;
import ButtonConstants from "ButtonConstants" /* 5879 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

class HeaderButton {
  constructor(arg0) {
    const tmp = closure_4();
    const BaseTextButton = BaseTextButton2.BaseTextButton;
    const merged = Object.assign(arg0);
    return <BaseTextButton accessibilityRole="header" pillStyle={tmp.pill} size="sm" textVariant={textVariant} variant="secondary-overlay" />;
  }
}
const jsx = Fragment.jsx;
const _false = "heading-sm/semibold";
const diff = ButtonConstants.SMALL_BUTTON_HEIGHT - 2 * ButtonConstants.BUTTON_BORDER_WIDTH;
const diff1 = diff - Text_Text.TextStyleSheet["heading-sm/semibold"].lineHeight;
const obj = { pill: { paddingVertical: diff1 / 2 } };
const React3 = createStyles.createStyles(obj);
HeaderButton.Icon = BaseTextButton2.BaseTextButton.Icon;
const result = size.fileFinishedImporting("design/components/experimental/Button/native/HeaderButton.native.tsx");

export { HeaderButton };
