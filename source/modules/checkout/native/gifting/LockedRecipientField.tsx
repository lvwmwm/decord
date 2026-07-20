// Module ID: 8802
// Function ID: 69403
// Name: LockedRecipientField
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 8802 (LockedRecipientField)
import "result";
import { View } from "result";
import result from "result";
import result from "result";
import result from "result";

({ jsx: closure_4, jsxs: closure_5 } = result);
result = {};
result = { -9223372036854775808: true, filter: true, marginLeft: require("result").space.PX_16 };
result.container = result;
result.avatar = { marginEnd: require("result").space.PX_8 };
result = result.createStyles(result);
result = result.fileFinishedImporting("modules/checkout/native/gifting/LockedRecipientField.tsx");

export default function LockedRecipientField(user) {
  user = user.user;
  const tmp = result();
  let obj = { style: tmp.container };
  obj = { style: tmp.avatar, user, guildId: undefined, size: arg1(dependencyMap[5]).AvatarSizes.NORMAL };
  const items = [callback(arg1(dependencyMap[5]).Avatar, obj), ];
  obj = { variant: "text-md/semibold", children: importDefault(dependencyMap[7]).getName(user) };
  items[1] = callback(arg1(dependencyMap[6]).Text, obj);
  obj.children = items;
  return callback2(View, obj);
};
