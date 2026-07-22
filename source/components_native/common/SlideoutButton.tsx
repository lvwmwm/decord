// Module ID: 9423
// Function ID: 73363
// Name: SlideoutButton
// Dependencies: []

// Module 9423 (SlideoutButton)
class SlideoutButton {
  constructor(arg0) {
    ({ title, height } = global);
    ({ onPress, color, IconComponent } = global);
    if (height === undefined) {
      height = 60;
    }
    tmp = closure_6();
    obj = { accessibilityRole: "button", onPress };
    obj = { style: items };
    items = [, ];
    items[0] = tmp.button;
    obj1 = { backgroundColor: color, width: 72 };
    obj1.height = height;
    items[1] = obj1;
    obj2 = {};
    obj2.color = importDefault(dependencyMap[6]).colors.WHITE;
    items1 = [, ];
    items1[0] = jsx(IconComponent, obj2);
    obj3 = { style: tmp.buttonText };
    obj3.children = title.toUpperCase();
    items1[1] = jsx(arg1(dependencyMap[8]).LegacyText, obj3);
    obj.children = items1;
    obj.children = jsxs(View, obj);
    return jsx(arg1(dependencyMap[7]).PressableOpacity, obj);
  }
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { button: {} };
obj = { 0: "<string:17891332>", 9223372036854775807: "external", 9223372036854775807: "<string:3477143808>", 0: "<string:285213921>", 9223372036854775807: "<string:553217>", 0: "<string:1090584576>" };
const tmp3 = arg1(dependencyMap[3]);
obj.color = arg1(dependencyMap[5]).hexWithOpacity(importDefault(dependencyMap[6]).unsafe_rawColors.WHITE, 0.6);
obj.fontFamily = arg1(dependencyMap[2]).Fonts.PRIMARY_SEMIBOLD;
obj.buttonText = obj;
let closure_6 = obj.createStyles(obj);
SlideoutButton.width = 72;
const obj4 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("components_native/common/SlideoutButton.tsx");

export default SlideoutButton;
