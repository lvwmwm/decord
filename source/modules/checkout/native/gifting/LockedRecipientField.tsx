// Module ID: 8807
// Function ID: 69438
// Name: LockedRecipientField
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 8807 (LockedRecipientField)
import "__exportStarResult1";
import { View } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

({ jsx: closure_4, jsxs: closure_5 } = __exportStarResult1);
__exportStarResult1 = {};
__exportStarResult1 = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F", marginLeft: require("__exportStarResult1").space.PX_16 };
__exportStarResult1.container = __exportStarResult1;
__exportStarResult1.avatar = { marginEnd: require("__exportStarResult1").space.PX_8 };
__exportStarResult1 = __exportStarResult1.createStyles(__exportStarResult1);
const result = __exportStarResult1.fileFinishedImporting("modules/checkout/native/gifting/LockedRecipientField.tsx");

export default function LockedRecipientField(user) {
  user = user.user;
  const tmp = __exportStarResult1();
  let obj = { style: tmp.container };
  obj = { style: tmp.avatar, user, guildId: undefined, size: arg1(dependencyMap[5]).AvatarSizes.NORMAL };
  const items = [callback(arg1(dependencyMap[5]).Avatar, obj), ];
  obj = { variant: "text-md/semibold", children: importDefault(dependencyMap[7]).getName(user) };
  items[1] = callback(arg1(dependencyMap[6]).Text, obj);
  obj.children = items;
  return callback2(View, obj);
};
