// Module ID: 15077
// Function ID: 114824
// Name: GuildRoleSubscriptionsRow
// Dependencies: [31, 653, 1355, 10289, 33, 4130, 689, 1198, 4098, 15078, 1934, 11452, 1212, 10145, 2]
// Exports: default

// Module 15077 (GuildRoleSubscriptionsRow)
import result from "result";
import { Routes } from "ME";
import { StaticChannelRoute } from "set";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsRow.tsx");

export default function GuildRoleSubscriptionsRow(selected) {
  selected = selected.selected;
  const id = selected.guild.id;
  const items = [id];
  const items1 = [id];
  const callback = React.useCallback(() => {
    id(outer1_2[7]).transitionTo(outer1_4.CHANNEL(id, outer1_5.ROLE_SUBSCRIPTIONS));
  }, items);
  const callback1 = React.useCallback(() => {
    let obj = outer1_1(outer1_2[8]);
    obj = {
      guildId: id,
      onClose() {
        outer2_1(outer2_2[8]).hideActionSheet("role-subscriptions-channel-action-sheet");
      }
    };
    obj.openLazy(id(outer1_2[10])(outer1_2[9], outer1_2.paths), "role-subscriptions-channel-action-sheet", obj);
  }, items1);
  const ChannelModes = id(11452).ChannelModes;
  const tmp4 = selected ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
  let obj = { onPress: callback, onLongPress: callback1, style: _createForOfIteratorHelperLoose().container, accessible: true };
  const tmp = _createForOfIteratorHelperLoose();
  const intl = id(1212).intl;
  obj.accessibilityLabel = intl.string(id(1212).t["KzCF/6"]);
  obj.accessibilityState = { selected };
  obj.mode = tmp4;
  obj = {};
  const intl2 = id(1212).intl;
  obj.name = intl2.string(id(1212).t["KzCF/6"]);
  obj.mode = tmp4;
  obj.name = jsx(id(11452).BaseChannelName, {});
  obj = { disableColor: true, mode: tmp4, source: importDefault(10145) };
  obj.icon = jsx(id(11452).BaseChannelIcon, { disableColor: true, mode: tmp4, source: importDefault(10145) });
  return jsx(importDefault(11452), { disableColor: true, mode: tmp4, source: importDefault(10145) });
};
