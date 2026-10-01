// Module ID: 11664
// Function ID: 11665
// Name: UsernameText
// Dependencies: [19, 21, 4988, 4832, 2]
// Exports: default

// Module 11664 (UsernameText)
import NicknameUtils from "NicknameUtils" /* 4988 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
({ jsxs: c2, Fragment: c3, jsx: closure_4 } = Fragment);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/UsernameText.tsx");

export default function UsernameText(guildId) {
  let items;
  let items1;
  let items2;
  let items3;
  let str1;
  let tmp13;
  let user;
  let variant;
  ({ user, variant } = guildId);
  guildId = guildId.guildId;
  if (variant === undefined) {
    variant = "text-md/medium";
  }
  let str = guildId.color;
  if (str === undefined) {
    str = "text-default";
  }
  const obj = { variant, color: str };
  const obj2 = NicknameUtils;
  const name = obj2.getName(guildId, null, user);
  const tmp4 = null != name && name !== user.toString();
  if (user.hasUniqueUsername()) {
    str1 = user.toString();
  } else {
    const obj3 = { children: items };
    items = [user.toString(), ];
    const obj4 = { color: "text-muted", children: items1 };
    const Text = tmp(4832).Text;
    const merged = Object.assign(obj);
    items1 = ["#", user.discriminator];
    items[1] = React2(Text, obj4);
    str1 = React2(_false, obj3);
  }
  const obj5 = { children: tmp13 };
  const Text2 = tmp(4832).Text;
  const merged1 = Object.assign(obj);
  tmp13 = str1;
  const tmp11 = React3;
  if (tmp4) {
    const obj6 = { children: items2 };
    items2 = [name, " ", ];
    const obj7 = { color: "text-muted", children: items3 };
    const Text3 = tmp(4832).Text;
    const merged2 = Object.assign(obj);
    items3 = ["(", str1, ")"];
    items2[2] = React2(Text3, obj7);
    tmp13 = React2(_false, obj6);
  }
  return tmp11(Text2, obj5);
};
