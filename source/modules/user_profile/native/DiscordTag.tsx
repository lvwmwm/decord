// Module ID: 9421
// Function ID: 73337
// Name: DiscordTag
// Dependencies: []
// Exports: default

// Module 9421 (DiscordTag)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { "Bool(false)": null, "Bool(false)": "Shape 2", "Bool(false)": 3 } };
obj = { marginLeft: importDefault(dependencyMap[4]).space.PX_4 };
obj.botTag = obj;
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_profile/native/DiscordTag.tsx");

export default function DiscordTag(arg0) {
  let discriminatorStyle;
  let hideBotTag;
  let nick;
  let nicknameStyle;
  let user;
  let usernameStyle;
  ({ user, nick, hideBotTag } = arg0);
  ({ usernameStyle, nicknameStyle, discriminatorStyle } = arg0);
  if (hideBotTag === undefined) {
    hideBotTag = false;
  }
  const tmp = callback3();
  let obj = { style: tmp.container };
  if (null != nick) {
    obj = { style: nicknameStyle, children: nick };
    let tmp4Result = callback(arg1(dependencyMap[5]).Text, obj);
  } else {
    tmp4Result = null;
    if (null != user) {
      obj = { "Bool(true)": "topSelectionChange", "Bool(true)": "onResponderMove", "Bool(true)": "<string:324075776>", "Bool(true)": "<string:553616>", style: usernameStyle };
      const items = [user.toString(), ];
      let tmp7 = !user.hasUniqueUsername();
      if (tmp7) {
        const obj1 = { style: discriminatorStyle };
        const items1 = ["discord_protos.discord_users.v1.GuildsLeaderboardOptOutDefault", user.discriminator];
        obj1.children = items1;
        tmp7 = callback2(arg1(dependencyMap[5]).Text, obj1);
      }
      items[1] = tmp7;
      obj.children = items;
      tmp4Result = callback2(arg1(dependencyMap[5]).Text, obj);
      const tmp4 = callback2;
    }
  }
  const items2 = [tmp4Result, ];
  let bot;
  if (null != user) {
    bot = user.bot;
  }
  let tmp16 = null;
  if (true === bot) {
    tmp16 = null;
    if (!hideBotTag) {
      const obj2 = { style: tmp.botTag, verified: user.isVerifiedBot() };
      tmp16 = callback(importDefault(dependencyMap[6]), obj2);
      const tmp20 = importDefault(dependencyMap[6]);
    }
  }
  items2[1] = tmp16;
  obj.children = items2;
  return callback2(View, obj);
};
