// Module ID: 12132
// Function ID: 12133
// Name: GameOrganizationInvitePickerRow
// Dependencies: [19, 10497, 5776, 21, 12133, 5607, 575, 6144, 12134, 6115, 7155, 5634, 1112, 2651, 10499, 2]

// Module 12132 (GameOrganizationInvitePickerRow)
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5607 */;
import Constants from "Constants" /* 5776 */;
import TableRow2 from "TableRow" /* 6144 */;
import InstantInviteSendStateStore from "InstantInviteSendStateStore" /* 10497 */;
import getGameOrganizationInviteSendStateKey from "getGameOrganizationInviteSendStateKey" /* 12133 */;
import GameOrganizationIconDefault from "GameOrganizationIcon" /* 12134 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const getGameOrganizationInviteSendStateKeyDefault = getGameOrganizationInviteSendStateKey;

let metroImportDefault;
let metroRequire;
let tmp;
const _modDef2651 = tmp(2651);
const InviteButtonDefault = tmp(10499);
let closure_4 = InstantInviteSendStateStore.useInstantInviteSendStates;
const InviteSendStates = Constants.InviteSendStates;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const memoResult = react.memo(function GameOrganizationInvitePickerRow(organization) {
  let closure_129_1;
  let intl;
  let items1;
  let maxMembers;
  let memberCount;
  let obj4;
  let obj8;
  let onInvite;
  let tmp10;
  let tmp9;
  organization = organization.organization;
  ({ userId: closure_129_1, onInvite } = organization);
  const tmp = importDefault;
  let tmp2 = dependencyMap;
  const tmp3 = getGameOrganizationInviteSendStateKeyDefault;
  const obj = getGameOrganizationInviteSendStateKey;
  let closure_3 = tmp3(obj.toLinkedGameOrganization(organization));
  const tmp5 = closure_4((arg0) => {
    let tmp2;
    if (arg0[closure_3] != null) {
      tmp2 = tmp[closure_1_1];
    }
    if (tmp2 == null) {
      tmp2 = null;
    }
    return tmp2;
  });
  const items = [onInvite, organization];
  const callback = react.useCallback(() => onInvite(organization), items);
  ({ memberCount, maxMembers } = organization);
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE);
  const obj3 = { icon: metroRequire(tmp9, obj4), label: organization.name, subLabel: tmp10, trailing: metroRequire(InviteButtonDefault, { sendState: tmp5, onPressSend: callback }), onPress: callback, disabled: tmp5 === InviteSendStates.SENDING || tmp5 === InviteSendStates.SENT };
  const TableRow = TableRow2.TableRow;
  obj4 = { iconUrl: organization.iconUrl, size: token, borderRadius: nativeDefault.radii.md, fallback: "guild" };
  tmp10 = undefined;
  tmp9 = GameOrganizationIconDefault;
  if (null != memberCount) {
    if (null != maxMembers) {
      const obj5 = { direction: "horizontal", spacing: nativeDefault.space.PX_4, align: "center", children: items1 };
      const Stack = tmp4(6115).Stack;
      const obj6 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
      const GroupIcon = tmp4(7155).GroupIcon;
      items1 = [metroRequire(GroupIcon, obj6), ];
      const obj7 = { variant: "body-xs/medium", color: "text-muted", children: intl.formatToPlainString(_modDef2651.VuENGl, obj8) };
      const Text = tmp4(5634).Text;
      intl = tmp4(1112).intl;
      obj8 = { count: memberCount, max: maxMembers };
      items1[1] = metroRequire(Text, obj7);
      tmp10 = metroImportDefault(Stack, obj5);
    }
  }
  return metroRequire(TableRow, obj3);
});
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInvitePickerRow.tsx");

export default memoResult;
