// Module ID: 8853
// Function ID: 69694
// Name: LockedRecipientField
// Dependencies: [31, 27, 33, 4130, 689, 1273, 4126, 3969, 2]
// Exports: default

// Module 8853 (LockedRecipientField)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", marginLeft: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.avatar = { marginEnd: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { marginEnd: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("jsxProd").fileFinishedImporting("modules/checkout/native/gifting/LockedRecipientField.tsx");

export default function LockedRecipientField(user) {
  user = user.user;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  obj = { style: tmp.avatar, user, guildId: undefined, size: require(1273) /* Button */.AvatarSizes.NORMAL };
  const items = [callback(require(1273) /* Button */.Avatar, obj), ];
  obj = { variant: "text-md/semibold", children: importDefault(3969).getName(user) };
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(View, obj);
};
