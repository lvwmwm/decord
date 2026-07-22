// Module ID: 14862
// Function ID: 111988
// Name: num2
// Dependencies: []
// Exports: default

// Module 14862 (num2)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_3 = importDefault(dependencyMap[2]);
const GuildTagBadgeSize = arg1(dependencyMap[3]).GuildTagBadgeSize;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
let num = 10;
if (obj.isAndroid()) {
  num = 14;
}
let obj1 = arg1(dependencyMap[6]);
obj = { gapContainer: obj };
obj = { height: num };
obj1 = { borderTopRightRadius: null, borderTopLeftRadius: null, position: null, top: null, left: null, right: null, bottom: null, borderTopRightRadius: null, borderTopLeftRadius: null, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_STRONG };
let num2 = 16;
obj1.marginVertical = (num - 16) / 2;
obj.tagContainer = obj1;
const obj2 = {};
const tmp3 = arg1(dependencyMap[4]);
if (obj7.isAndroid()) {
  num2 = 13;
}
obj2.lineHeight = num2;
obj.tag = obj2;
let closure_7 = obj1.createStyles(obj);
const obj7 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/guild_tag/native/VoiceGuildTag.tsx");

export default function VoiceGuildTagChiplet(userId) {
  let guildId;
  let tag;
  userId = userId.userId;
  const arg1 = userId;
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_3];
  const items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => user.getUser(userId), items1);
  let obj1 = arg1(dependencyMap[9]);
  let primaryGuild;
  if (null != stateFromStores) {
    primaryGuild = stateFromStores.primaryGuild;
  }
  const userPrimaryGuild = obj1.getUserPrimaryGuild(primaryGuild);
  ({ tag, guildId } = userPrimaryGuild);
  if (null != guildId) {
    if (null != tag) {
      let obj2 = arg1(dependencyMap[9]);
      obj = { style: tmp.gapContainer };
      obj = { style: tmp.tagContainer };
      const guildTagBadgeUrl = obj2.getGuildTagBadgeUrl(guildId, tmp5, GuildTagBadgeSize.SIZE_12);
      obj1 = {};
      obj2 = { uri: guildTagBadgeUrl };
      obj1.source = obj2;
      obj1.size = GuildTagBadgeSize.SIZE_12;
      const items2 = [callback(arg1(dependencyMap[10]).GuildTagBadge, obj1), ];
      const obj3 = { style: tmp.tag, children: tag };
      items2[1] = callback(arg1(dependencyMap[11]).Text, obj3);
      obj.children = items2;
      obj.children = callback2(View, obj);
      return callback(View, obj);
    }
  }
  return null;
};
