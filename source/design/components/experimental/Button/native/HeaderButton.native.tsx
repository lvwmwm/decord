// Module ID: 8368
// Function ID: 66691
// Name: HeaderButton
// Dependencies: []

// Module 8368 (HeaderButton)
class HeaderButton {
  constructor(arg0) {
    tmp = closure_4();
    obj = { accessibilityRole: "header" };
    merged = Object.assign(global);
    obj["pillStyle"] = tmp.pill;
    obj["size"] = "sm";
    obj["textVariant"] = closure_3;
    obj["variant"] = "secondary-overlay";
    return jsx(arg1(dependencyMap[5]).BaseTextButton, obj);
  }
}
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_3 = "heading-md/bold";
const diff = arg1(dependencyMap[2]).SMALL_BUTTON_HEIGHT - 2 * arg1(dependencyMap[2]).BUTTON_BORDER_WIDTH;
const diff1 = diff - arg1(dependencyMap[3]).TextStyleSheet.heading-md/bold.lineHeight;
let obj = arg1(dependencyMap[4]);
obj = { paddingVertical: diff1 / 2 };
let closure_4 = obj.createStyles({ pill: obj });
HeaderButton.Icon = arg1(dependencyMap[5]).BaseTextButton.Icon;
const result = arg1(dependencyMap[6]).fileFinishedImporting("design/components/experimental/Button/native/HeaderButton.native.tsx");

export { HeaderButton };
