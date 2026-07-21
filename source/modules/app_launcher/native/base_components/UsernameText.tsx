// Module ID: 11294
// Function ID: 87890
// Name: UsernameText
// Dependencies: []
// Exports: default

// Module 11294 (UsernameText)
importAll(dependencyMap[0]);
({ jsxs: closure_2, Fragment: closure_3, jsx: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/app_launcher/native/base_components/UsernameText.tsx");

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
  let obj1 = arg1(dependencyMap[2]);
  const name = obj1.getName(color.guildId, null, user);
  if (user.hasUniqueUsername()) {
    str = user.toString();
  } else {
    obj = {};
    const items = [user.toString(), ];
    obj = {};
    const merged = Object.assign(obj);
    obj["color"] = "text-muted";
    const items1 = [null, user.discriminator];
    obj["children"] = items1;
    items[1] = callback(arg1(dependencyMap[3]).Text, obj);
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
    const items3 = [null, str, ")"];
    obj3["children"] = items3;
    items2[2] = callback(arg1(dependencyMap[3]).Text, obj3);
    obj2.children = items2;
    tmp13 = callback(closure_3, obj2);
  }
  obj1["children"] = tmp13;
  return closure_4(arg1(dependencyMap[3]).Text, obj1);
};
