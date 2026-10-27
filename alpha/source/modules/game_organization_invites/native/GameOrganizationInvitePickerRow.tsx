// Module ID: 11319
// Function ID: 11320
// Name: GameOrganizationInvitePickerRow
// Dependencies: [19, 9131, 7810, 21, 4972, 587, 558, 576, 11320, 7267, 5670, 5978, 8560, 5235, 1125, 2403, 9136, 6905, 2]

// Module 11319 (GameOrganizationInvitePickerRow)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef2403 from "module_2403" /* 2403 */;
import FastImageDefault from "FastImage" /* 5670 */;
import AssetRegistryDefault from "AssetRegistry" /* 7267 */;
import Constants from "Constants" /* 7810 */;
import InstantInviteSendStateStore from "InstantInviteSendStateStore" /* 9131 */;
import InviteButtonDefault from "InviteButton" /* 9136 */;
import getGameOrganizationInviteSendStateKeyDefault from "getGameOrganizationInviteSendStateKey" /* 11320 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let size;
let tmp;
const intl2 = tmp(1125);
const Text_Text = tmp(5235);
const Stack_Stack = tmp(5978);
const TableRow2 = tmp(6905);
const GroupIcon2 = tmp(8560);
const getGameOrganizationInviteSendStateKey = tmp(11320);
let closure_4 = InstantInviteSendStateStore.useInstantInviteSendStates;
const InviteSendStates = Constants.InviteSendStates;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { icon: size };
size = { width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, height: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, borderRadius: nativeDefault.radii.md };
let closure_8 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GameOrganizationInvitePickerRow(organization) {
  let intl;
  let items;
  let maxMembers;
  let memberCount;
  let obj8;
  let tmp5;
  const tmp = require;
  let tmp2 = dependencyMap;
  const obj = react2;
  const cResult = obj.c(26);
  organization = organization.organization;
  const userId = organization.userId;
  const onInvite = organization.onInvite;
  const tmp4 = closure_8();
  if (cResult[0] !== organization) {
    const tmp7 = getGameOrganizationInviteSendStateKeyDefault;
    const tmpResult = getGameOrganizationInviteSendStateKey;
    const tmp7Result = tmp7(tmpResult.toLinkedGameOrganization(organization));
    cResult[0] = organization;
    cResult[1] = tmp7Result;
    tmp5 = tmp7Result;
  } else {
    tmp5 = cResult[1];
  }
  let closure_3 = tmp5;
  if (cResult[2] === tmp5) {
    let tmp9;
    if (cResult[3] === userId) {
      tmp9 = cResult[4];
    }
    const tmp11 = closure_4(tmp9);
    if (cResult[5] === onInvite) {
      let tmp12;
      let tmp13;
      if (cResult[6] === organization) {
        tmp12 = cResult[7];
      }
      ({ memberCount, maxMembers } = organization);
      if (cResult[8] !== organization.iconUrl) {
        let tmp16;
        if (null != organization.iconUrl) {
          tmp16 = { uri: organization.iconUrl };
          const obj2 = { uri: organization.iconUrl };
        } else {
          tmp16 = AssetRegistryDefault;
        }
        cResult[8] = organization.iconUrl;
        cResult[9] = tmp16;
        tmp13 = tmp16;
      } else {
        tmp13 = cResult[9];
      }
      if (cResult[10] === tmp4.icon) {
        let tmp17;
        if (cResult[11] === tmp13) {
          tmp17 = cResult[12];
        }
        if (cResult[13] === maxMembers) {
          let tmp21;
          if (cResult[14] === memberCount) {
            tmp21 = cResult[15];
          }
          if (cResult[16] === tmp12) {
            let tmp27;
            if (cResult[17] === tmp11) {
              tmp27 = cResult[18];
            }
            if (cResult[19] === tmp12) {
              if (cResult[20] === organization.name) {
                if (cResult[21] === tmp17) {
                  if (cResult[22] === tmp21) {
                    if (cResult[23] === tmp27) {
                      let tmp32;
                      if (cResult[24] === (tmp11 === InviteSendStates.SENDING || tmp11 === InviteSendStates.SENT)) {
                        tmp32 = cResult[25];
                      }
                      return tmp32;
                    }
                  }
                }
              }
            }
            const obj3 = { icon: tmp17, label: organization.name, subLabel: tmp21, trailing: tmp27, onPress: tmp12, disabled: tmp11 === InviteSendStates.SENDING || tmp11 === InviteSendStates.SENT };
            const tmp34 = metroRequire(TableRow2.TableRow, obj3);
            cResult[19] = tmp12;
            cResult[20] = organization.name;
            cResult[21] = tmp17;
            cResult[22] = tmp21;
            cResult[23] = tmp27;
            cResult[24] = tmp11 === InviteSendStates.SENDING || tmp11 === InviteSendStates.SENT;
            cResult[25] = tmp34;
            tmp32 = tmp34;
          }
          const obj4 = { sendState: tmp11, onPressSend: tmp12 };
          const tmp30 = metroRequire(InviteButtonDefault, obj4);
          cResult[16] = tmp12;
          cResult[17] = tmp11;
          cResult[18] = tmp30;
          tmp27 = tmp30;
        }
        let tmp23;
        if (null != memberCount) {
          if (null != maxMembers) {
            const obj5 = { direction: "horizontal", spacing: nativeDefault.space.PX_4, align: "center", children: items };
            const Stack = Stack_Stack.Stack;
            const obj6 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
            const GroupIcon = GroupIcon2.GroupIcon;
            items = [metroRequire(GroupIcon, obj6), ];
            const obj7 = { variant: "text-xs/medium", color: "text-muted", children: intl.formatToPlainString(_modDef2403.VuENGl, obj8) };
            const Text = Text_Text.Text;
            intl = intl2.intl;
            obj8 = { count: memberCount, max: maxMembers };
            items[1] = metroRequire(Text, obj7);
            tmp23 = metroImportDefault(Stack, obj5);
          }
        }
        cResult[13] = maxMembers;
        cResult[14] = memberCount;
        cResult[15] = tmp23;
        tmp21 = tmp23;
      }
      const obj9 = { source: tmp13, style: tmp4.icon };
      const tmp20 = metroRequire(FastImageDefault, obj9);
      cResult[10] = tmp4.icon;
      cResult[11] = tmp13;
      cResult[12] = tmp20;
      tmp17 = tmp20;
    }
    const fn2 = function z() {
      return onInvite(organization);
    };
    cResult[5] = onInvite;
    cResult[6] = organization;
    cResult[7] = fn2;
    tmp12 = fn2;
  }
  const fn = function _(arg0) {
    let tmp2;
    if (arg0[closure_3] != null) {
      tmp2 = tmp[userId];
    }
    if (tmp2 == null) {
      tmp2 = null;
    }
    return tmp2;
  };
  cResult[2] = tmp5;
  cResult[3] = userId;
  cResult[4] = fn;
  tmp9 = fn;
}) : (function GameOrganizationInvitePickerRow(organization) {
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
      const Stack = tmp5(5978).Stack;
      const obj6 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
      const GroupIcon = tmp5(8560).GroupIcon;
      items1 = [metroRequire(GroupIcon, obj6), ];
      const obj7 = { variant: "text-xs/medium", color: "text-muted", children: intl.formatToPlainString(_modDef2403.VuENGl, obj8) };
      const Text = tmp5(5235).Text;
      intl = tmp5(1125).intl;
      obj8 = { count: memberCount, max: maxMembers };
      items1[1] = metroRequire(Text, obj7);
      tmp11 = metroImportDefault(Stack, obj5);
    }
  }
  return metroRequire(TableRow, obj3);
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInvitePickerRow.tsx");

export default memoResult;
