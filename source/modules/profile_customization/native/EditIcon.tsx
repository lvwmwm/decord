// Module ID: 13583
// Function ID: 104412
// Name: EditIcon
// Dependencies: [31, 27, 33, 4130, 689, 9106, 2]
// Exports: default

// Module 13583 (EditIcon)
import result from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.editIcon = _createForOfIteratorHelperLoose;
const obj1 = { width: 24, height: 24, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose.xs = obj1;
const obj2 = { width: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.sm = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/profile_customization/native/EditIcon.tsx");

export default function EditIcon(style) {
  style = style.style;
  let str = style.size;
  if (str === undefined) {
    str = "xs";
  }
  let React;
  const tmp = _createForOfIteratorHelperLoose();
  React = tmp;
  let items = [tmp, style, str];
  obj = {
    style: React.useMemo(() => {
      const obj = {};
      const items = [_undefined.editIcon, , ];
      if ("sm" === str) {
        let xs = _undefined.sm;
      } else {
        xs = _undefined.xs;
      }
      items[1] = xs;
      items[2] = style;
      obj.iconContainerStyle = items;
      return obj;
    }, items).iconContainerStyle,
    children: jsx(style(str[5]).PencilIcon, obj)
  };
  obj = { size: str };
  return <View size={str} />;
};
