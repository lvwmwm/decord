// Module ID: 15139
// Function ID: 115155
// Name: GuildRoleSubscriptionsRow
// Dependencies: [31, 653, 1355, 10263, 33, 4165, 689, 1198, 4133, 15140, 1935, 11454, 1212, 10117, 2]
// Exports: default

// Module 15139 (GuildRoleSubscriptionsRow)
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
  const ChannelModes = id(11454).ChannelModes;
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
  obj.name = jsx(id(11454).BaseChannelName, {});
  obj = { disableColor: true, mode: tmp4, source: importDefault(10117) };
  obj.icon = jsx(id(11454).BaseChannelIcon, { disableColor: true, mode: tmp4, source: importDefault(10117) });
  return jsx(importDefault(11454), { disableColor: true, mode: tmp4, source: importDefault(10117) });
};
