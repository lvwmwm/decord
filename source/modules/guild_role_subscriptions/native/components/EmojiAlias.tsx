// Module ID: 16324
// Function ID: 125972
// Name: EmojiAlias
// Dependencies: []
// Exports: default

// Module 16324 (EmojiAlias)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_5 = arg1(dependencyMap[3]).createStyles({ emojiAlias: { width: true, marginHorizontal: true }, emojiColon: { width: 4 } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/EmojiAlias.tsx");

export default function EmojiAlias(arg0) {
  let name;
  let style;
  ({ name, style } = arg0);
  const tmp = callback3();
  let obj = { style: items };
  const items = [tmp.emojiAlias, style];
  obj = { Uuqbcm: false, loadIfNecessary: false, numOfEmbeds: false, parseRoom: false, handleToggleSelfMute: false, style: tmp.emojiColon };
  const items1 = [callback(arg1(dependencyMap[4]).Text, obj), callback(arg1(dependencyMap[4]).Text, { children: name }), ];
  obj = { Uuqbcm: false, loadIfNecessary: false, numOfEmbeds: false, parseRoom: false, handleToggleSelfMute: false, style: tmp.emojiColon };
  items1[2] = callback(arg1(dependencyMap[4]).Text, obj);
  obj.children = items1;
  return callback2(View, obj);
};
