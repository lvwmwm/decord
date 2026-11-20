// Module ID: 15062
// Function ID: 15063
// Name: GameOrganizationInviteRow
// Dependencies: [19, 8318, 21, 6925, 1186, 10266, 4850, 11975, 2]

// Module 15062 (GameOrganizationInviteRow)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 1186 */;
import UserUtilsDefault from "UserUtils" /* 4850 */;
import TableRow2 from "TableRow" /* 6925 */;
import Constants from "Constants" /* 8318 */;
import DiscordTagDefault from "DiscordTag" /* 10266 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const InviteSendStates = Constants.InviteSendStates;
const jsx = Fragment.jsx;
const memoResult = react.memo(function GameOrganizationInviteRow(user) {
  let end;
  let obj4;
  let onInvite;
  let sendState;
  let start;
  user = user.user;
  ({ sendState, onInvite } = user);
  const items = [onInvite, user];
  ({ start, end } = user);
  const callback = react.useCallback(() => onInvite(user), items);
  const TableRow = TableRow2.TableRow;
  ({ source: user.getAvatarSource(undefined), size: native.AvatarSizes.REFRESH_MEDIUM_32 });
  const Avatar = native.Avatar;
  ({ nick: obj4.getGlobalName(user), user });
  DiscordTagDefault;
  obj4 = UserUtilsDefault;
  return <TableRow start={start} end={end} icon={null} label={null} trailing={null} onPress={callback} disabled={sendState === InviteSendStates.SENDING || sendState === InviteSendStates.SENT} />;
});
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInviteRow.tsx");

export default memoResult;
