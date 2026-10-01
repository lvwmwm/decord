// Module ID: 9044
// Function ID: 9045
// Name: AddModerators
// Dependencies: [32, 19, 17, 2067, 7849, 21, 4836, 576, 1485, 38, 9013, 5727, 1979, 1115, 5936, 6795, 4832, 1177, 9045, 2053, 2]
// Exports: default

// Module 9044 (AddModerators)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import HeaderActionButton from "HeaderActionButton" /* 6795 */;
import ChannelPermissionsConstants from "ChannelPermissionsConstants" /* 7849 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation, row;

let c9;
let metroImportAll;
let obj2;
let react = react_mod;
const View = react_native.View;
const RowType = ChannelPermissionsConstants.RowType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { addMembersContainer: obj2, moderatorDescriptionContainer: { margin: 16 }, errorMessage: { margin: 16, marginBottom: 0 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
let closure_10 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/stage_channels/native/create_channel/AddModerators.tsx");

export default function AddModerators(guildId) {
  let HelpMessage;
  let Text;
  let closure_4;
  let intl;
  let intl2;
  let items2;
  let obj4;
  let obj6;
  guildId = guildId.guildId;
  let tmp = null;
  const onChannelCreated = guildId.onChannelCreated;
  let merged = Object.assign(guildId, Object.assign({ guildId: 0, onChannelCreated: 0 }));
  navigation = undefined;
  let first;
  let onPress;
  let tmp3 = closure_10();
  const tmp5 = navigation;
  let obj = guildId(navigation[8]);
  navigation = obj.useNavigation();
  const guild = onPress.getGuild(guildId);
  merged(navigation[9])(null != guild, "Guild must not be null");
  const tmp10 = first(merged(navigation[10])(onChannelCreated), 3);
  first = tmp10[0];
  react = tmp13;
  const tmp14 = first(react.useState({}), 2);
  const first1 = tmp14[0];
  let items = [tmp10[2], first1, merged, guildId];
  const tmp16 = tmp14[1];
  onPress = react.useCallback(() => {
    let items;
    const values = Object.values(first1);
    const found = values.filter((row) => null != row.row.id);
    const mapped = found.map((row) => {
      let moderatorOverwrite;
      row = row.row;
      if (row.rowType === constants.ROLE) {
        const obj2 = guildId(navigation[11]);
        moderatorOverwrite = obj2.createModeratorOverwrite(row.id, guildId(navigation[12]).PermissionOverwriteType.ROLE);
      } else {
        const obj = guildId(navigation[11]);
        moderatorOverwrite = obj.createModeratorOverwrite(row.id, guildId(navigation[12]).PermissionOverwriteType.MEMBER);
      }
      return moderatorOverwrite;
    });
    let obj = { guildId, overwrites: items };
    merged = Object.assign(merged);
    items = [...mapped];
    let overwrites = merged.overwrites;
    const tmp3 = closure_4;
    if (overwrites == null) {
      overwrites = [];
    }
    HermesBuiltin.arraySpread(items, overwrites, tmp5);
    return tmp3(obj);
  }, items);
  const items1 = [onPress, navigation, first1, first];
  const layoutEffect = react.useLayoutEffect(() => {
    let stringResult;
    if (Object.keys(first1).length > 0) {
      const intl2 = guildId(navigation[13]).intl;
      stringResult = intl2.string(guildId(navigation[13]).t.CumH4u);
    } else {
      const intl = guildId(navigation[13]).intl;
      stringResult = intl.string(guildId(navigation[13]).t["5Wxrcd"]);
    }
    guildId = stringResult;
    let obj = {
      headerRight: first ? (() => closure_1_8(stringResult(navigation[14]).HeaderSubmittingIndicator, {})) : (() => {
        const obj = { text: stringResult, onPress };
        return metroImportAll(HeaderActionButton.HeaderActionButton, obj);
      })
    };
    navigation.setOptions(obj);
  }, items1);
  let obj2 = { style: tmp3.addMembersContainer, children: items2 };
  const obj3 = { style: tmp3.moderatorDescriptionContainer, children: closure_8(Text, obj4) };
  obj4 = { variant: "text-sm/medium", color: "text-default", children: intl.string(guildId(navigation[13]).t.f7VbhF) };
  Text = guildId(navigation[16]).Text;
  intl = guildId(navigation[13]).intl;
  items2 = [closure_8(first1, obj3), , ];
  const tmp19 = closure_9;
  const tmp8 = merged;
  if (null != tmp10[1].message) {
    const obj5 = { style: tmp3.errorMessage, children: closure_8(HelpMessage, obj6) };
    obj6 = { messageType: guildId(tmp5[17]).HelpMessageTypes.ERROR, children: tmp10[1].message };
    HelpMessage = tmp4(tmp5[17]).HelpMessage;
    tmp = tmp21(tmp20, obj5);
  }
  items2[1] = tmp;
  const obj7 = { channel: null, guild, permission: guildId(tmp5[19]).MODERATE_STAGE_CHANNEL_PERMISSIONS, inputDesc: intl2.string(guildId(tmp5[13]).t["Ch6+n4"]), pendingAdditions: first1, setPendingAdditions: tmp16 };
  const tmp8Result = tmp8(tmp5[18]);
  intl2 = tmp4(tmp5[13]).intl;
  items2[2] = closure_8(tmp8Result, obj7);
  return tmp19(first1, obj2);
};
