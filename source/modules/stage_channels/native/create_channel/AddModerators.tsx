// Module ID: 8434
// Function ID: 67181
// Name: AddModerators
// Dependencies: [57, 31, 27, 1838, 7485, 33, 4130, 689, 1456, 44, 8410, 4948, 1881, 1212, 5087, 5788, 4126, 1273, 8435, 1356, 2]
// Exports: default

// Module 8434 (AddModerators)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import closure_6 from "_createForOfIteratorHelperLoose";
import { RowType } from "RowType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
_createForOfIteratorHelperLoose.addMembersContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.moderatorDescriptionContainer = { margin: 16 };
_createForOfIteratorHelperLoose.errorMessage = { margin: 16, marginBottom: 0 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/stage_channels/native/create_channel/AddModerators.tsx");

export default function AddModerators(guildId) {
  guildId = guildId.guildId;
  let obj = Object.create(null);
  obj.guildId = 0;
  obj.onChannelCreated = 0;
  let merged = Object.assign(guildId, obj);
  const tmp3 = _createForOfIteratorHelperLoose();
  obj = guildId(navigation[8]);
  navigation = obj.useNavigation();
  const guild = callback.getGuild(guildId);
  merged(navigation[9])(null != guild, "Guild must not be null");
  const tmp7 = first(merged(navigation[10])(guildId.onChannelCreated), 3);
  first = tmp7[0];
  const React = tmp10;
  const tmp11 = first(React.useState({}), 2);
  const first1 = tmp11[0];
  let items = [tmp7[2], first1, merged, guildId];
  callback = React.useCallback(() => {
    const values = Object.values(first1);
    const found = values.filter((row) => null != row.row.id);
    const mapped = found.map((row) => {
      row = row.row;
      if (row.rowType === outer2_7.ROLE) {
        let moderatorOverwrite = guildId(navigation[11]).createModeratorOverwrite(row.id, guildId(navigation[12]).PermissionOverwriteType.ROLE);
        const obj2 = guildId(navigation[11]);
      } else {
        moderatorOverwrite = guildId(navigation[11]).createModeratorOverwrite(row.id, guildId(navigation[12]).PermissionOverwriteType.MEMBER);
        const obj = guildId(navigation[11]);
      }
      return moderatorOverwrite;
    });
    let obj = {};
    merged = Object.assign(merged);
    obj["guildId"] = guildId;
    const items = [...mapped];
    let overwrites = merged.overwrites;
    if (null == overwrites) {
      overwrites = [];
    }
    HermesBuiltin.arraySpread(overwrites, tmp4);
    obj["overwrites"] = items;
    return result(obj);
  }, items);
  const items1 = [callback, navigation, first1, first];
  const layoutEffect = React.useLayoutEffect(() => {
    if (Object.keys(first1).length > 0) {
      const intl2 = guildId(navigation[13]).intl;
      let stringResult = intl2.string(guildId(navigation[13]).t.CumH4u);
    } else {
      const intl = guildId(navigation[13]).intl;
      stringResult = intl.string(guildId(navigation[13]).t["5Wxrcd"]);
    }
    guildId = stringResult;
    navigation.setOptions({ headerRight: first ? (() => outer2_8(guildId(navigation[14]).HeaderSubmittingIndicator, {})) : (() => outer2_8(guildId(navigation[15]).HeaderActionButton, { text: closure_0, onPress: outer1_6 })) });
  }, items1);
  obj = { style: tmp3.addMembersContainer };
  const obj1 = { style: tmp3.moderatorDescriptionContainer };
  let obj2 = { variant: "text-sm/medium", color: "text-default" };
  let intl = guildId(navigation[13]).intl;
  obj2.children = intl.string(guildId(navigation[13]).t.f7VbhF);
  obj1.children = callback(guildId(navigation[16]).Text, obj2);
  const items2 = [callback(first1, obj1), , ];
  let tmp17 = null;
  if (null != tmp7[1].message) {
    const obj3 = { style: tmp3.errorMessage };
    const obj4 = { messageType: guildId(navigation[17]).HelpMessageTypes.ERROR, children: tmp9.message };
    obj3.children = callback(guildId(navigation[17]).HelpMessage, obj4);
    tmp17 = callback(first1, obj3);
  }
  items2[1] = tmp17;
  const obj5 = { channel: null, guild, permission: guildId(navigation[19]).MODERATE_STAGE_CHANNEL_PERMISSIONS };
  let intl2 = guildId(navigation[13]).intl;
  obj5.inputDesc = intl2.string(guildId(navigation[13]).t["Ch6+n4"]);
  obj5.pendingAdditions = first1;
  obj5.setPendingAdditions = tmp11[1];
  items2[2] = callback(merged(navigation[18]), obj5);
  obj.children = items2;
  return closure_9(first1, obj);
};
