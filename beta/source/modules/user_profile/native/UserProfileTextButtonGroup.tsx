// Module ID: 12570
// Function ID: 12571
// Name: UserProfileTextButtonGroup
// Dependencies: [19, 17, 6629, 21, 4836, 1479, 2]
// Exports: default

// Module 12570 (UserProfileTextButtonGroup)
import react_native from "react-native" /* 17 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import Constants from "Constants" /* 6629 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
const PROFILE_SIDE_PADDING = Constants.PROFILE_SIDE_PADDING;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { flexDirection: "row", flexWrap: "wrap", gap: 12 }, buttonArea: { flexGrow: 1 } });
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTextButtonGroup.tsx");

export default function UserProfileTextButtonGroup(arg0) {
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let maxWidth;
  let primaryButton;
  let secondaryButton;
  let style;
  let tmp5;
  ({ primaryButton, secondaryButton, maxWidth, style } = arg0);
  const tmp = closure_6();
  const width = useWindowDimensionsDefault().width;
  if (null != maxWidth) {
    const _Math = Math;
    const bound = Math.min(width, maxWidth);
  }
  if (null != primaryButton) {
    let tmp8;
    if (null == primaryButton) {
      const obj2 = { style: items, children: secondaryButton };
      items = [tmp.container, style];
      tmp8 = React3(View, obj2);
    } else if (null == secondaryButton) {
      const obj = { style: items1, children: primaryButton };
      items1 = [tmp.container, style];
      tmp8 = React3(View, obj);
    } else {
      const result = (tmp4 - 12) / 2;
      const obj3 = { style: items2, children: items4 };
      items2 = [tmp.container, style];
      const obj4 = { style: items3, children: primaryButton };
      items3 = [tmp.buttonArea, ];
      const obj5 = { minWidth: result };
      items3[1] = obj5;
      items4 = [React3(View, obj4), ];
      const obj6 = { style: items5, children: secondaryButton };
      items5 = [tmp.buttonArea, ];
      const obj7 = { minWidth: result };
      items5[1] = obj7;
      items4[1] = React3(View, obj6);
      tmp8 = hasOwnProperty(View, obj3);
    }
    tmp5 = tmp8;
  } else {
    tmp5 = null;
  }
  return tmp5;
};
