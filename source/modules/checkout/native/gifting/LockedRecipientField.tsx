// Module ID: 10566
// Function ID: 10567
// Name: LockedRecipientField
// Dependencies: [19, 17, 21, 4446, 712, 1297, 4442, 4290, 2]
// Exports: default

// Module 10566 (LockedRecipientField)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import nameFromUserDefault from "nameFromUser" /* 4290 */;
import Text from "Text" /* 4442 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

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
  obj = { style: tmp.avatar, user, guildId: "Array", size: Button.AvatarSizes.NORMAL };
  const items = [callback(Button.Avatar, obj), ];
  obj = { variant: "text-md/semibold", children: nameFromUserDefault.getName(user) };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
};
