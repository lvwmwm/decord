// Module ID: 11649
// Function ID: 11650
// Name: GameOrganizationInvitePickerRow
// Dependencies: [19, 9199, 7879, 21, 5014, 575, 11650, 6975, 5717, 7338, 6027, 8661, 5624, 1113, 2404, 9204, 2]

// Module 11649 (GameOrganizationInvitePickerRow)
import nativeDefault from "native" /* 575 */;
import FastImageDefault from "FastImage" /* 5717 */;
import TableRow2 from "TableRow" /* 6975 */;
import Constants from "Constants" /* 7879 */;
import InstantInviteSendStateStore from "InstantInviteSendStateStore" /* 9199 */;
import getGameOrganizationInviteSendStateKey from "getGameOrganizationInviteSendStateKey" /* 11650 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const getGameOrganizationInviteSendStateKeyDefault = getGameOrganizationInviteSendStateKey;

let metroImportDefault;
let metroRequire;
let size;
let tmp2;
const _modDef2404 = tmp2(2404);
const AssetRegistryDefault = tmp2(7338);
const InviteButtonDefault = tmp2(9204);
let closure_4 = InstantInviteSendStateStore.useInstantInviteSendStates;
const InviteSendStates = Constants.InviteSendStates;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { icon: size };
size = { width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, height: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, borderRadius: nativeDefault.radii.md };
let closure_8 = createStyles.createStyles(obj);
const memoResult = react.memo(function GameOrganizationInvitePickerRow(organization) {
  let closure_129_1;
  let intl;
  let items1;
  let maxMembers;
  let memberCount;
  let obj4;
  let obj8;
  let onInvite;
  let tmp11;
  let tmp2Result;
  organization = organization.organization;
  ({ userId: closure_129_1, onInvite } = organization);
  let tmp2 = importDefault;
  const tmp = closure_8();
  const tmp4 = getGameOrganizationInviteSendStateKeyDefault;
  const obj = getGameOrganizationInviteSendStateKey;
  let closure_3 = tmp4(obj.toLinkedGameOrganization(organization));
  const tmp6 = closure_4((arg0) => {
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
  const TableRow = TableRow2.TableRow;
  const tmp9 = FastImageDefault;
  if (null != organization.iconUrl) {
    tmp2Result = { uri: organization.iconUrl };
    const obj2 = { uri: organization.iconUrl };
  } else {
    tmp2Result = AssetRegistryDefault;
  }
  const obj3 = { icon: metroRequire(tmp9, obj4), label: organization.name, subLabel: tmp11, trailing: metroRequire(InviteButtonDefault, { sendState: tmp6, onPressSend: callback }), onPress: callback, disabled: tmp6 === InviteSendStates.SENDING || tmp6 === InviteSendStates.SENT };
  tmp11 = undefined;
  obj4 = { source: tmp2Result, style: tmp.icon };
  if (null != memberCount) {
    if (null != maxMembers) {
      const obj5 = { direction: "horizontal", spacing: nativeDefault.space.PX_4, align: "center", children: items1 };
      const Stack = tmp5(6027).Stack;
      const obj6 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
      const GroupIcon = tmp5(8661).GroupIcon;
      items1 = [metroRequire(GroupIcon, obj6), ];
      const obj7 = { variant: "text-xs/medium", color: "text-muted", children: intl.formatToPlainString(_modDef2404.VuENGl, obj8) };
      const Text = tmp5(5624).Text;
      intl = tmp5(1113).intl;
      obj8 = { count: memberCount, max: maxMembers };
      items1[1] = metroRequire(Text, obj7);
      tmp11 = metroImportDefault(Stack, obj5);
    }
  }
  return metroRequire(TableRow, obj3);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInvitePickerRow.tsx");

export default memoResult;
