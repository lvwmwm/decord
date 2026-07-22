// Module ID: 5487
// Function ID: 46834
// Name: RoleIcon
// Dependencies: []
// Exports: default

// Module 5487 (RoleIcon)
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/roles/native/RoleIcon.tsx");

export default function RoleIcon(arg0) {
  let size;
  let source;
  let unicodeEmoji;
  ({ source, unicodeEmoji, size } = arg0);
  if (size === undefined) {
    size = 20;
  }
  let obj = { roleIcon: obj, unicodeEmojiRoleIcon: obj };
  obj = { height: size, width: size, resizeMode: "contain" };
  obj = { fontSize: size };
  if (null != source) {
    const obj1 = { source, style: obj.roleIcon };
    let tmp = <Image {...obj1} />;
  } else {
    tmp = null;
    if (null != unicodeEmoji) {
      const obj2 = { adjustsFontSizeToFit: true };
      const items = [, ];
      ({ roleIcon: arr[0], unicodeEmojiRoleIcon: arr[1] } = obj);
      obj2.style = items;
      obj2.children = unicodeEmoji.surrogates;
      tmp = jsx(arg1(dependencyMap[3]).LegacyText, obj2);
    }
  }
  return tmp;
};
