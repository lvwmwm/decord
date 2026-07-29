// Module ID: 8809
// Function ID: 8810
// Name: LockedRecipientField
// Dependencies: [19, 17, 21, 4189, 712, 1297, 4185, 4028, 2]
// Exports: default

// Module 8809 (LockedRecipientField)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, avatar: null };
createCacheKey = { flexDirection: "row", alignItems: "center", marginLeft: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginEnd: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { marginEnd: require("Themes").space.PX_8 };
const result = require("jsxProd").fileFinishedImporting("modules/checkout/native/gifting/LockedRecipientField.tsx");

export default function LockedRecipientField(user) {
  user = user.user;
  const tmp = createCacheKey();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.avatar, user, guildId: "Array", size: "<string:3052339201>" };
  obj[3] = require(1297) /* Button */.AvatarSizes.NORMAL;
  const items = [callback(require(1297) /* Button */.Avatar, obj), ];
  obj = { variant: "text-md/semibold", children: null };
  obj[1] = importDefault(4028).getName(user);
  items[1] = callback(require(4185) /* Text */.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
};
