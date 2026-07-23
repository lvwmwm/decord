// Module ID: 15510
// Function ID: 119539
// Name: AddModeratorsActionSheet
// Dependencies: [5, 57, 31, 27, 1838, 7485, 33, 4130, 689, 566, 4320, 4948, 1881, 8414, 3830, 4098, 5187, 5186, 1212, 4543, 8435, 1356, 2]
// Exports: default

// Module 15510 (AddModeratorsActionSheet)
import RowType from "RowType";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import closure_7 from "_createForOfIteratorHelperLoose";
import { RowType } from "RowType";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("result").fileFinishedImporting("modules/stage_channels/native/channel_permissions/AddModeratorsActionSheet.tsx");

export default function AddModeratorsActionSheet(channel) {
  channel = channel.channel;
  let first;
  function _handleAddModeratorsPressed() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = outer1_3(tmp);
    return obj(...arguments);
  }
  const tmp2 = callback(React.useState({}), 2);
  first = tmp2[0];
  let obj = channel(_handleAddModeratorsPressed[9]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    return outer1_7.getGuild(guildId);
  });
  const tmp5 = first(_handleAddModeratorsPressed[10])(channel, true);
  let str = "";
  if (null != tmp5) {
    str = tmp5;
  }
  if (null == stateFromStores) {
    return null;
  } else {
    const _Object = Object;
    const tmp17 = 0 === Object.keys(first).length;
    obj = { scrollable: true, header: null, startExpanded: true };
    obj = {};
    const intl3 = channel(_handleAddModeratorsPressed[18]).intl;
    obj.title = intl3.string(channel(_handleAddModeratorsPressed[18]).t.n3bcy8);
    obj.subtitle = str;
    if (channel.canSkip) {
      if (tmp17) {
        const obj1 = { size: "sm" };
        const intl2 = channel(_handleAddModeratorsPressed[18]).intl;
        obj1.text = intl2.string(channel(_handleAddModeratorsPressed[18]).t["5Wxrcd"]);
        obj1.onPress = function handleSkip() {
          first(_handleAddModeratorsPressed[15]).hideActionSheet();
        };
        let obj4 = obj1;
      }
      obj.trailing = tmp18(tmp21, obj4);
      obj.header = tmp18(channel(_handleAddModeratorsPressed[17]).BottomSheetTitleHeader, obj);
      const obj2 = { style: tmp.container };
      const obj3 = { inActionSheet: true, channel, guild: stateFromStores, permission: channel(_handleAddModeratorsPressed[21]).MODERATE_STAGE_CHANNEL_PERMISSIONS, pendingAdditions: first, setPendingAdditions: tmp2[1] };
      obj2.children = jsx(first(_handleAddModeratorsPressed[20]), { inActionSheet: true, channel, guild: stateFromStores, permission: channel(_handleAddModeratorsPressed[21]).MODERATE_STAGE_CHANNEL_PERMISSIONS, pendingAdditions: first, setPendingAdditions: tmp2[1] });
      obj.children = <View style={tmp.container} />;
      return tmp18(channel(_handleAddModeratorsPressed[16]).BottomSheet, obj);
    }
    obj4 = { size: "sm", disabled: tmp17 };
    const intl = channel(_handleAddModeratorsPressed[18]).intl;
    obj4.text = intl.string(channel(_handleAddModeratorsPressed[18]).t.OYkgVk);
    obj4.onPress = function handleAddModeratorsPressed() {
      return _handleAddModeratorsPressed(...arguments);
    };
  }
};
