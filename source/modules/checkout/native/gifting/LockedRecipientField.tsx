// Module ID: 8818
// Function ID: 8819
// Name: LockedRecipientField
// Dependencies: [19, 17, 21, 4193, 712, 1297, 4189, 4032, 2]
// Exports: default

// Module 8818 (LockedRecipientField)
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
  obj = { style: tmp.avatar, user, guildId: "Array", size: true };
  obj[3] = require(1297) /* Button */.AvatarSizes.NORMAL;
  const items = [callback(require(1297) /* Button */.Avatar, obj), ];
  obj = { variant: "text-md/semibold", children: null };
  obj[1] = importDefault(4032).getName(user);
  items[1] = callback(require(4189) /* Text */.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
};
