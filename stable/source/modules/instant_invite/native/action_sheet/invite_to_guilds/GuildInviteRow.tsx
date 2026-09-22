// Module ID: 13244
// Function ID: 13245
// Name: GuildInviteRow
// Dependencies: [19, 17, 13240, 7838, 21, 13239, 10026, 5665, 4632, 1114, 5686, 2]

// Module 13244 (GuildInviteRow)
import GuildInviteUtils from "GuildInviteUtils" /* 13239 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const useGuildInviteSendStates = fn(13240).useGuildInviteSendStates;
const InviteSendStates = fn(7838).InviteSendStates;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteRow.tsx");

export default noop.memo(function GuildInviteRow(arg0) {
  ({ row, recipientId: require, source: importDefault } = arg0);
  function handlePress() {
    GuildInviteUtils.sendGuildInvite(closure_1_0, guild.id, importDefault);
  }
  const guild = row.guild;
  ({ start, end } = arg0);
  const tmp = useGuildInviteSendStates((arg0) => {
    let tmp2;
    if (arg0[require] != null) {
      tmp2 = tmp[guild.id];
    }
    return tmp2;
  });
  const obj = { importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: null };
  const obj2 = { guild, size: null };
  let tmp2 = jsx;
  const tmp3 = guild;
  const tmp4 = jsx(require("InviteButton"), { sendState: tmp, onPressSend: handlePress });
  obj2.size = require("GuildIcon").GuildIconSizes.SMALL;
  obj.children = jsx(require("GuildIcon"), { guild, size: null });
  const tmp5 = require("GuildIcon");
  const tmp6 = require;
  const obj3 = { variant: "text-xs/medium", color: "text-default", children: null };
  const intl = require("util").intl;
  obj3.children = intl.format(require("util").t.zRl6XR, { count: row.memberCount });
  let tmp9 = tmp === InviteSendStates.SENDING;
  const obj4 = { count: row.memberCount };
  const tmp7 = <View importantForAccessibility="no-hide-descendants" accessibilityElementsHidden>{null}</View>;
  if (!tmp9) {
    tmp9 = tmp === InviteSendStates.SENT;
  }
  const tmp8 = jsx(require("Text/Text").Text, { variant: "text-xs/medium", color: "text-default", children: null });
  return tmp2(tmp6(tmp3[10]).TableRow, { icon: tmp7, label: guild.name, trailing: tmp4, subLabel: jsx(require("Text/Text").Text, { variant: "text-xs/medium", color: "text-default", children: null }), onPress: handlePress, disabled: tmp9, accessibilityState: { disabled: tmp9 }, start, end });
});
