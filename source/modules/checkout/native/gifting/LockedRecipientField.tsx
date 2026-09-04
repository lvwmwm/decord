// Module ID: 10787
// Function ID: 10788
// Name: LockedRecipientField
// Dependencies: [19, 17, 21, 4481, 709, 1296, 4477, 4325, 2]
// Exports: default

// Module 10787 (LockedRecipientField)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import Button from "Button" /* 1296 */;
import nameFromUserDefault from "nameFromUser" /* 4325 */;
import Text from "Text" /* 4477 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, avatar: null };
createCacheKey = { flexDirection: "row", alignItems: "center", marginLeft: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginEnd: ThemesDefault.space.PX_8 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const obj1 = { marginEnd: ThemesDefault.space.PX_8 };
const result = require("set").fileFinishedImporting("modules/checkout/native/gifting/LockedRecipientField.tsx");

export default function LockedRecipientField(user) {
  user = user.user;
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.avatar, user, guildId: "Array", size: true };
  obj[3] = Button.AvatarSizes.NORMAL;
  const items = [callback(Button.Avatar, obj), ];
  obj = { variant: "text-md/semibold", children: nameFromUserDefault.getName(user) };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
};
