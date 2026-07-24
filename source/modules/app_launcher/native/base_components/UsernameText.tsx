// Module ID: 11334
// Function ID: 88193
// Name: UsernameText
// Dependencies: [31, 33, 4319, 4126, 2]
// Exports: default

// Module 11334 (UsernameText)
import "result";
import jsxProd from "jsxProd";

let closure_2;
let closure_3;
let closure_4;
const require = arg1;
({ jsxs: closure_2, Fragment: closure_3, jsx: closure_4 } = jsxProd);
const result = require("getNickname").fileFinishedImporting("modules/app_launcher/native/base_components/UsernameText.tsx");

export default function UsernameText(color) {
  let user;
  let variant;
  ({ user, variant } = color);
  if (variant === undefined) {
    variant = "text-md/medium";
  }
  let str = color.color;
  if (str === undefined) {
    str = "text-default";
  }
  let obj = { variant, color: str };
  let obj1 = require(4319) /* getNickname */;
  const name = obj1.getName(color.guildId, null, user);
  if (user.hasUniqueUsername()) {
    str = user.toString();
  } else {
    obj = {};
    const items = [user.toString(), ];
    obj = {};
    const merged = Object.assign(obj);
    obj["color"] = "text-muted";
    const items1 = ["#", user.discriminator];
    obj["children"] = items1;
    items[1] = callback(require(4126) /* Text */.Text, obj);
    obj.children = items;
    str = callback(closure_3, obj);
  }
  obj1 = {};
  const merged1 = Object.assign(obj);
  let tmp13 = str;
  if (tmp2) {
    const obj2 = {};
    const items2 = [name, " ", ];
    const obj3 = {};
    const merged2 = Object.assign(obj);
    obj3["color"] = "text-muted";
    const items3 = ["(", str, ")"];
    obj3["children"] = items3;
    items2[2] = callback(require(4126) /* Text */.Text, obj3);
    obj2.children = items2;
    tmp13 = callback(closure_3, obj2);
  }
  obj1["children"] = tmp13;
  return closure_4(require(4126) /* Text */.Text, obj1);
};
