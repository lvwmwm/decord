// Module ID: 8427
// Function ID: 67132
// Name: AddModerators
// Dependencies: []
// Exports: default

// Module 8427 (AddModerators)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
const RowType = arg1(dependencyMap[4]).RowType;
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.addMembersContainer = obj;
obj.moderatorDescriptionContainer = { margin: 16 };
obj.errorMessage = { 0: 838861158, 0: -385875662 };
let closure_10 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/stage_channels/native/create_channel/AddModerators.tsx");

export default function AddModerators(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  let obj = Object.create(null);
  obj.guildId = 0;
  obj.onChannelCreated = 0;
  const merged = Object.assign(guildId, obj);
  const importDefault = merged;
  const tmp3 = callback3();
  obj = arg1(dependencyMap[8]);
  const navigation = obj.useNavigation();
  const dependencyMap = navigation;
  let guild = guild.getGuild(guildId);
  importDefault(dependencyMap[9])(null != guild, "Guild must not be null");
  const tmp7 = callback(importDefault(dependencyMap[10])(guildId.onChannelCreated), 3);
  const first = tmp7[0];
  let callback = first;
  const React = tmp10;
  const tmp11 = callback(React.useState({}), 2);
  const first1 = tmp11[0];
  const View = first1;
  const items = [tmp7[2], first1, merged, guildId];
  callback = React.useCallback(() => {
    const values = Object.values(first1);
    const found = values.filter((row) => null != row.row.id);
    const mapped = found.map((row) => {
      row = row.row;
      if (row.rowType === constants.ROLE) {
        let moderatorOverwrite = callback(closure_2[11]).createModeratorOverwrite(row.id, callback(closure_2[12]).PermissionOverwriteType.ROLE);
        const obj2 = callback(closure_2[11]);
      } else {
        moderatorOverwrite = callback(closure_2[11]).createModeratorOverwrite(row.id, callback(closure_2[12]).PermissionOverwriteType.MEMBER);
        const obj = callback(closure_2[11]);
      }
      return moderatorOverwrite;
    });
    const obj = {};
    const merged = Object.assign(merged);
    obj["guildId"] = guildId;
    const items = [...mapped];
    let overwrites = merged.overwrites;
    if (null == overwrites) {
      overwrites = [];
    }
    HermesBuiltin.arraySpread(overwrites, tmp4);
    obj["overwrites"] = items;
    return tmp10(obj);
  }, items);
  guild = callback;
  const items1 = [callback, navigation, first1, first];
  const layoutEffect = React.useLayoutEffect(() => {
    if (Object.keys(first1).length > 0) {
      const intl2 = guildId(navigation[13]).intl;
      let stringResult = intl2.string(guildId(navigation[13]).t.CumH4u);
    } else {
      const intl = guildId(navigation[13]).intl;
      stringResult = intl.string(guildId(navigation[13]).t.5Wxrcd);
    }
    const guildId = stringResult;
    navigation.setOptions({ headerRight: first ? () => callback(stringResult(closure_2[14]).HeaderSubmittingIndicator, {}) : () => callback(stringResult(closure_2[15]).HeaderActionButton, { text: stringResult, onPress: closure_6 }) });
  }, items1);
  obj = { style: tmp3.addMembersContainer };
  const obj1 = { style: tmp3.moderatorDescriptionContainer };
  const obj2 = {};
  const intl = arg1(dependencyMap[13]).intl;
  obj2.children = intl.string(arg1(dependencyMap[13]).t.f7VbhF);
  obj1.children = callback2(arg1(dependencyMap[16]).Text, obj2);
  const items2 = [callback2(View, obj1), , ];
  let tmp17 = null;
  if (null != tmp7[1].message) {
    const obj3 = { style: tmp3.errorMessage };
    const obj4 = { messageType: arg1(dependencyMap[17]).HelpMessageTypes.ERROR, children: tmp9.message };
    obj3.children = callback2(arg1(dependencyMap[17]).HelpMessage, obj4);
    tmp17 = callback2(View, obj3);
  }
  items2[1] = tmp17;
  const obj5 = { channel: null, guild, permission: arg1(dependencyMap[19]).MODERATE_STAGE_CHANNEL_PERMISSIONS };
  const intl2 = arg1(dependencyMap[13]).intl;
  obj5.inputDesc = intl2.string(arg1(dependencyMap[13]).t.Ch6+n4);
  obj5.pendingAdditions = first1;
  obj5.setPendingAdditions = tmp11[1];
  items2[2] = callback2(importDefault(dependencyMap[18]), obj5);
  obj.children = items2;
  return closure_9(View, obj);
};
