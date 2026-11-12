// Module ID: 12468
// Function ID: 12469
// Name: GameOrganizationInvitePickerRow
// Dependencies: [19, 12469, 8775, 21, 5243, 575, 12470, 7379, 5957, 7862, 6274, 7372, 5866, 1113, 2549, 12471, 2]

// Module 12468 (GameOrganizationInvitePickerRow)
import nativeDefault from "native" /* 575 */;
import FastImageDefault from "FastImage" /* 5957 */;
import TableRow2 from "TableRow" /* 7379 */;
import Constants from "Constants" /* 8775 */;
import InstantInviteSendStateStore from "InstantInviteSendStateStore" /* 12469 */;
import getGameOrganizationInviteSendStateKey from "getGameOrganizationInviteSendStateKey" /* 12470 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

const getGameOrganizationInviteSendStateKeyDefault = getGameOrganizationInviteSendStateKey;

let metroImportDefault;
let metroRequire;
let size;
let tmp2;
const _modDef2549 = tmp2(2549);
const AssetRegistryDefault = tmp2(7862);
const InviteButtonDefault = tmp2(12471);
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
      const Stack = tmp5(6274).Stack;
      const obj6 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
      const GroupIcon = tmp5(7372).GroupIcon;
      items1 = [metroRequire(GroupIcon, obj6), ];
      const obj7 = { variant: "body-xs/medium", color: "text-muted", children: intl.formatToPlainString(_modDef2549.VuENGl, obj8) };
      const Text = tmp5(5866).Text;
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
