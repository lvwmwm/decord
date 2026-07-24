// Module ID: 11943
// Function ID: 92430
// Name: UserProfileTextButtonGroup
// Dependencies: [31, 27, 5510, 33, 4130, 1450, 2]
// Exports: default

// Module 11943 (UserProfileTextButtonGroup)
import "result";
import { View } from "get ActivityIndicator";
import { PROFILE_SIDE_PADDING } from "ARBITRARY_LARGE_OFFSET";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ container: { flexDirection: "row", flexWrap: "wrap", gap: 12 }, buttonArea: { flexGrow: 1 } });
let result = require("ARBITRARY_LARGE_OFFSET").fileFinishedImporting("modules/user_profile/native/UserProfileTextButtonGroup.tsx");

export default function UserProfileTextButtonGroup(arg0) {
  let maxWidth;
  let primaryButton;
  let secondaryButton;
  let style;
  ({ primaryButton, secondaryButton, maxWidth, style } = arg0);
  let items = callback3();
  const width = importDefault(1450)().width;
  let bound = width;
  if (null != maxWidth) {
    const _Math = Math;
    bound = Math.min(width, maxWidth);
  }
  const result = (bound - 2 * PROFILE_SIDE_PADDING - 12) / 2;
  if (null == primaryButton) {
    if (null == secondaryButton) {
      return null;
    }
  }
  if (null == primaryButton) {
    let obj = {};
    items = [, ];
    items[0] = items.container;
    items[1] = style;
    obj.style = items;
    obj.children = secondaryButton;
    callback(View, obj);
  } else if (null == secondaryButton) {
    obj = {};
    const items1 = [items.container, style];
    obj.style = items1;
    obj.children = primaryButton;
    callback(View, obj);
  } else {
    obj = {};
    const items2 = [items.container, style];
    obj.style = items2;
    const obj1 = {};
    const items3 = [items.buttonArea, ];
    const obj2 = { minWidth: result };
    items3[1] = obj2;
    obj1.style = items3;
    obj1.children = primaryButton;
    const items4 = [callback(View, obj1), ];
    const obj3 = {};
    const items5 = [items.buttonArea, ];
    const obj4 = { minWidth: result };
    items5[1] = obj4;
    obj3.style = items5;
    obj3.children = secondaryButton;
    items4[1] = callback(View, obj3);
    obj.children = items4;
    callback2(View, obj);
  }
};
