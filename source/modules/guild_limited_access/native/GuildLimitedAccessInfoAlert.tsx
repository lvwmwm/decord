// Module ID: 12727
// Function ID: 97653
// Name: GuildLimitedAccessInfoAlert
// Dependencies: []
// Exports: default

// Module 12727 (GuildLimitedAccessInfoAlert)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = arg1(dependencyMap[2]).GUILD_LIMITED_ACCESS_HC_LINK;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = {};
const tmp3 = arg1(dependencyMap[4]);
const merged = Object.assign(importDefault(dependencyMap[6])(arg1(dependencyMap[3]).Fonts.PRIMARY_BOLD, importDefault(dependencyMap[7]).colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj["textAlign"] = "center";
obj["marginVertical"] = 12;
obj.header = obj;
obj.text = {};
let closure_7 = obj.createStyles(obj);
const importDefaultResult = importDefault(dependencyMap[6]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/guild_limited_access/native/GuildLimitedAccessInfoAlert.tsx");

export default function GuildLimitedAccessInfoAlert(arg0) {
  let guildId;
  let onClose;
  ({ guildId, onClose } = arg0);
  const tmp = callback3();
  const intl = arg1(dependencyMap[8]).intl;
  let obj = { helpdeskArticle: closure_4 };
  let formatResult = intl.format(arg1(dependencyMap[8]).t.ZqkXsC, obj);
  const guild = guild.getGuild(guildId);
  if (null != guild) {
    const intl2 = arg1(dependencyMap[8]).intl;
    obj = { guildName: guild.name, helpdeskArticle: closure_4 };
    formatResult = intl2.format(arg1(dependencyMap[8]).t.jn0Xyx, obj);
  }
  obj = { onClose };
  const obj1 = { style: tmp.header };
  const intl3 = arg1(dependencyMap[8]).intl;
  obj1.children = intl3.string(arg1(dependencyMap[8]).t.kJwpBW);
  const items = [callback(arg1(dependencyMap[10]).LegacyText, obj1), ];
  const obj2 = { style: tmp.text, variant: "text-md/medium", children: formatResult };
  items[1] = callback(arg1(dependencyMap[11]).Text, obj2);
  obj.children = items;
  return callback2(importDefault(dependencyMap[9]), obj);
};
