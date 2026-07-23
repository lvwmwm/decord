// Module ID: 15456
// Function ID: 118960
// Name: ShowAllRow
// Dependencies: [31, 27, 33, 4130, 689, 5165, 13089, 1273, 4126, 1212, 2]
// Exports: default

// Module 15456 (ShowAllRow)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = { labelContainer: { flexDirection: "row", alignItems: "center" } };
_createForOfIteratorHelperLoose = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.showAllText = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ShowAllRow.tsx");

export default function ShowAllRow(users) {
  let count;
  let onPress;
  users = users.users;
  ({ onPress, count } = users);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { onPress, end: true, height: "100%" };
  obj = { style: tmp.labelContainer };
  obj = { size: require(1273) /* Button */.AvatarSizes.XSMALL_20, "aria-label": "" };
  const substr = users.slice(0, 2);
  obj.children = substr.map((getAvatarSource) => {
    const obj = { source: getAvatarSource.getAvatarSource(null, false, outer1_0(outer1_1[7]).AVATAR_SIZE_MAP[outer1_0(undefined, outer1_1[7]).AvatarSizes.XSMALL]), size: outer1_0(outer1_1[7]).AvatarSizes.XSMALL_20 };
    return outer1_3(outer1_0(outer1_1[7]).Avatar, obj, arg1);
  });
  const items = [callback(require(13089) /* AvatarDuoPile */.AvatarDuoPile, obj), ];
  const obj1 = { style: tmp.showAllText, variant: "text-md/semibold", color: "text-brand" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.format(require(1212) /* getSystemLocale */.t.NrzztX, { count });
  items[1] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items;
  obj.label = callback2(View, obj);
  obj.trailing = callback(require(5165) /* TableRowInner */.TableRow.Arrow, {});
  return callback(require(5165) /* TableRowInner */.TableRow, obj);
};
