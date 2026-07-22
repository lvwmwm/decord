// Module ID: 10064
// Function ID: 77715
// Dependencies: []

// Module 10064
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const JoinGuildSources = arg1(dependencyMap[6]).JoinGuildSources;
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = arg1(dependencyMap[7]));
let obj1 = arg1(dependencyMap[8]);
let obj = { container: {}, guildInfoContainer: { 1649697713: "onAnimationFinishCapture", 106012843: "onAnimationFinish" } };
obj = { borderRadius: importDefault(dependencyMap[9]).radii.sm, marginRight: 16 };
obj.guildIcon = obj;
obj.guildWrapper = { flex: 1 };
obj.guildDescription = { entryType: "<string:2126337>", raw: "<string:2097152>" };
obj.memberInfo = {};
obj1 = { "Bool(false)": null, "Bool(false)": 4, "Bool(false)": "relative", "Bool(false)": "100%", borderRadius: importDefault(dependencyMap[9]).radii.sm, backgroundColor: importDefault(dependencyMap[9]).unsafe_rawColors.GREEN_360 };
obj.dotOnline = obj1;
const tmp2 = arg1(dependencyMap[7]);
obj.dotOffline = { borderRadius: importDefault(dependencyMap[9]).radii.sm, backgroundColor: importDefault(dependencyMap[9]).unsafe_rawColors.PRIMARY_400 };
obj.headerContainer = {};
obj.titleContainer = { 1649697713: "REDESIGN_INPUT_CONTROL_ACTIVE_BG", 106012843: "CAN" };
obj.flex = { backgroundColor: false, borderWidth: false };
let closure_13 = obj1.createStyles(obj);
const obj2 = { borderRadius: importDefault(dependencyMap[9]).radii.sm, backgroundColor: importDefault(dependencyMap[9]).unsafe_rawColors.PRIMARY_400 };
const memoResult = importAllResult.memo(function GuildDirectoryRow(entry) {
  let approximateMemberCount;
  let approximatePresenceCount;
  let description;
  entry = entry.entry;
  const arg1 = entry;
  let importDefault;
  let closure_2;
  function _handleJoinGuild() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = _handleJoinGuild(tmp);
    const _handleJoinGuild = obj;
    return obj(...arguments);
  }
  const tmp = callback4();
  ({ description, approximateMemberCount, approximatePresenceCount } = entry);
  let obj = arg1(closure_2[10]);
  const items = [closure_8];
  const tmp2 = null != obj.useStateFromStores(items, () => guild.getGuild(entry.guildId));
  importDefault = tmp2;
  const tmp3 = callback(importAllResult.useState(false), 2);
  closure_2 = tmp3[1];
  let obj1 = importDefault(closure_2[15]);
  obj = { id: entry.guildId, icon: entry.icon, size: 40 };
  const guildIconURL = obj1.getGuildIconURL(obj);
  let tmp5;
  if (null != guildIconURL) {
    tmp5 = guildIconURL;
  }
  const intl = arg1(closure_2[16]).intl;
  let stringResult = intl.string(arg1(closure_2[16]).t.VJlc0S);
  if (tmp2) {
    const intl2 = arg1(closure_2[16]).intl;
    stringResult = intl2.string(arg1(closure_2[16]).t.cqWE2Z);
  }
  obj = { style: tmp.container };
  obj1 = { style: tmp.guildWrapper };
  const obj2 = { style: tmp.headerContainer };
  const obj3 = { style: tmp.titleContainer };
  const obj4 = { style: tmp.guildIcon, icon: tmp5 };
  let result;
  if (null == tmp5) {
    let obj8 = arg1(closure_2[19]);
    result = obj8.fromGuildDirectoryEntry(entry);
  }
  obj4.guild = result;
  obj4.selected = false;
  const items1 = [callback2(importDefault(closure_2[18]), obj4), ];
  const obj5 = { style: tmp.guildInfoContainer };
  const obj6 = { 803799044: "<string:20995968>", 1269170180: "ars", 711589892: "<string:310460928>", children: entry.name };
  const items2 = [callback2(arg1(closure_2[20]).Text, obj6), ];
  const obj7 = { style: tmp.memberInfo };
  let tmp18 = null;
  if (null != approximatePresenceCount) {
    obj8 = {};
    const obj9 = { style: tmp.dotOnline };
    const items3 = [callback2(View, obj9), ];
    const obj10 = { cachedAt: true, edpbxy: true };
    const intl3 = arg1(closure_2[16]).intl;
    const obj11 = { membersOnline: approximatePresenceCount };
    obj10.children = intl3.format(arg1(closure_2[16]).t.LC+S+m, obj11);
    items3[1] = callback2(arg1(closure_2[20]).Text, obj10);
    obj8.children = items3;
    tmp18 = callback3(closure_11, obj8);
  }
  const items4 = [tmp18, ];
  let tmp25 = null;
  if (null != approximateMemberCount) {
    const obj12 = {};
    const obj13 = { style: tmp.dotOffline };
    const items5 = [callback2(View, obj13), ];
    const obj14 = { cachedAt: true, edpbxy: true };
    const intl4 = arg1(closure_2[16]).intl;
    const obj15 = { count: approximateMemberCount };
    obj14.children = intl4.format(arg1(closure_2[16]).t.zRl6XR, obj15);
    items5[1] = callback2(arg1(closure_2[20]).Text, obj14);
    obj12.children = items5;
    tmp25 = callback3(closure_11, obj12);
  }
  items4[1] = tmp25;
  obj7.children = items4;
  items2[1] = callback3(View, obj7);
  obj5.children = items2;
  items1[1] = callback3(View, obj5);
  obj3.children = items1;
  const items6 = [callback3(View, obj3), ];
  const tmp12 = importDefault(closure_2[18]);
  items6[1] = callback2(View, { children: callback2(importDefault(closure_2[21]), { entry }) });
  obj2.children = items6;
  const items7 = [callback3(View, obj2), , , ];
  let tmp32 = null != description;
  if (tmp32) {
    tmp32 = "" !== description;
  }
  if (tmp32) {
    const obj17 = { -9223372036854775808: 0, 9223372036854775807: 0, 9223372036854775807: 0, 9223372036854775807: 0, style: tmp.guildDescription, children: description };
    tmp32 = callback2(arg1(closure_2[20]).Text, obj17);
  }
  items7[1] = tmp32;
  items7[2] = callback2(View, { style: tmp.flex });
  const obj19 = {
    loading: tmp3[0],
    onPress: function handleJoinGuild() {
      return _handleJoinGuild(...arguments);
    }
  };
  let str2 = "active";
  if (tmp2) {
    str2 = "secondary";
  }
  obj19.variant = str2;
  obj19.text = stringResult;
  items7[3] = callback2(arg1(closure_2[22]).Button, obj19);
  obj1.children = items7;
  obj.children = callback3(View, obj1);
  return callback2(arg1(closure_2[17]).Card, obj);
});
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryRow.tsx");

export default memoResult;
