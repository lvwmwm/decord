// Module ID: 12550
// Function ID: 12551
// Name: GuildInviteRow
// Dependencies: [19, 17, 12546, 7155, 21, 12545, 9351, 5896, 4832, 1115, 5917, 2]

// Module 12550 (GuildInviteRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 7155 */;
import GuildInviteUtils from "GuildInviteUtils" /* 12545 */;
import GuildInviteSendStateStore from "GuildInviteSendStateStore" /* 12546 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const View = react_native.View;
const useGuildInviteSendStates = GuildInviteSendStateStore.useGuildInviteSendStates;
const InviteSendStates = Constants.InviteSendStates;
const jsx = Fragment.jsx;
const memoResult = react.memo(function GuildInviteRow(arg0) {
  let end;
  let row;
  let start;
  ({ row, recipientId: require, source: importDefault } = arg0);
  function handlePress() {
    const obj = GuildInviteUtils;
    obj.sendGuildInvite(require, guild.id, importDefault);
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
  let tmp2 = jsx;
  ({ guild, size: require("GuildIcon").GuildIconSizes.SMALL });
  const tmp4 = jsx(require("InviteButton"), { sendState: tmp, onPressSend: handlePress });
  require("GuildIcon");
  const tmp7 = <View importantForAccessibility="no-hide-descendants" accessibilityElementsHidden>{null}</View>;
  const Text = require("Text/Text").Text;
  const intl = require("intl").intl;
  let tmp9 = tmp === InviteSendStates.SENDING;
  const obj4 = { count: row.memberCount };
  const tmp3 = guild;
  const tmp6 = require;
  const tmp8 = <Text variant="text-xs/medium" color="text-default">{intl.format(require("intl").t.zRl6XR, obj4)}</Text>;
  if (!tmp9) {
    tmp9 = tmp === InviteSendStates.SENT;
  }
  const obj5 = { icon: tmp7, label: guild.name, trailing: tmp4, subLabel: tmp8, onPress: handlePress, disabled: tmp9, accessibilityState: { disabled: tmp9 }, start, end };
  return tmp2(tmp6(tmp3[10]).TableRow, obj5);
});
const result = size.fileFinishedImporting("modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteRow.tsx");

export default memoResult;
