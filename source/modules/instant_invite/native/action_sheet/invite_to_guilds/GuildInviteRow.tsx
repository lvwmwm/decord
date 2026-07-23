// Module ID: 12142
// Function ID: 95094
// Dependencies: [31, 27, 12138, 6979, 33, 12137, 11746, 5515, 4126, 1212, 5165, 2]

// Module 12142
import { View } from "get ActivityIndicator";
import { useGuildInviteSendStates } from "setSendState";
import { InviteSendStates } from "InviteSendStates";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo(function GuildInviteRow(arg0) {
  let end;
  let importDefault;
  let require;
  let row;
  let start;
  ({ row, recipientId: require, source: importDefault } = arg0);
  let guild;
  function handlePress() {
    outer1_0(guild[5]).sendGuildInvite(closure_0, guild.id, closure_1);
  }
  guild = row.guild;
  ({ start, end } = arg0);
  const tmp = useGuildInviteSendStates((arg0) => {
    let tmp2;
    if (null != arg0[closure_0]) {
      tmp2 = tmp[guild.id];
    }
    return tmp2;
  });
  let obj = { importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true };
  obj = { guild };
  let tmp2 = jsx(importDefault(guild[6]), { sendState: tmp, onPressSend: handlePress });
  obj.size = require(guild[7]).GuildIconSizes.SMALL;
  obj.children = jsx(importDefault(guild[7]), { guild });
  const tmp3 = importDefault(guild[7]);
  obj = { variant: "text-xs/medium", color: "text-default" };
  const intl = require(guild[9]).intl;
  obj.children = intl.format(require(guild[9]).t.zRl6XR, { count: row.memberCount });
  let tmp6 = tmp === InviteSendStates.SENDING;
  const obj1 = { count: row.memberCount };
  const tmp4 = <View variant="text-xs/medium" color="text-default" />;
  if (!tmp6) {
    tmp6 = tmp === InviteSendStates.SENT;
  }
  const obj2 = { icon: tmp4, label: guild.name, trailing: tmp2, subLabel: jsx(require(guild[8]).Text, { variant: "text-xs/medium", color: "text-default" }), onPress: handlePress, disabled: tmp6 };
  const obj3 = { disabled: tmp6 };
  obj2.accessibilityState = obj3;
  obj2.start = start;
  obj2.end = end;
  return jsx(require(guild[10]).TableRow, { icon: tmp4, label: guild.name, trailing: tmp2, subLabel: jsx(require(guild[8]).Text, { variant: "text-xs/medium", color: "text-default" }), onPress: handlePress, disabled: tmp6 });
});
const result = require("setSendState").fileFinishedImporting("modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteRow.tsx");

export default memoResult;
