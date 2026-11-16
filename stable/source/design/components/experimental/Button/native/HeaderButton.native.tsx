// Module ID: 9108
// Function ID: 9109
// Name: Button/HeaderButton
// Dependencies: [19, 21, 5796, 5783, 5170, 5791, 2]

// Module 9108 (Button/HeaderButton)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5783 */;
import BaseTextButton2 from "BaseTextButton" /* 5791 */;
import ButtonConstants from "ButtonConstants" /* 5796 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5170 */;
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
