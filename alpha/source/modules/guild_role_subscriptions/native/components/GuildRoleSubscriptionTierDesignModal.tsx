// Module ID: 20390
// Function ID: 20391
// Name: GuildRoleSubscriptionTierDesignModal
// Dependencies: [32, 19, 17, 17517, 1072, 21, 5140, 575, 5724, 17549, 20355, 20365, 17537, 7417, 20350, 7126, 1113, 20356, 20391, 20357, 2]
// Exports: GuildRoleSubscriptionTierDesignTab, default

// Module 20390 (GuildRoleSubscriptionTierDesignModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import useToken5 from "useToken" /* 5724 */;
import RoleIconUtils from "RoleIconUtils" /* 7417 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 17517 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 17537 */;
import GuildRoleSubscriptionMemberPreview from "GuildRoleSubscriptionMemberPreview" /* 17549 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 20357 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let c9;
let obj2;
let obj3;
function MemberPreviews(role) {
  let items;
  let items1;
  let items2;
  role = role.role;
  const tmp = closure_11();
  const useToken = useToken5.useToken;
  useToken5;
  const token = useToken(nativeDefault.colors.BACKGROUND_BASE_LOW, nativeDefault.themes.DARK);
  const useToken2 = useToken5.useToken;
  useToken5;
  const token2 = useToken2(nativeDefault.colors.BACKGROUND_BASE_LOW, nativeDefault.themes.LIGHT);
  const useToken3 = useToken5.useToken;
  useToken5;
  const token3 = useToken3(nativeDefault.colors.TEXT_DEFAULT, nativeDefault.themes.DARK);
  const useToken4 = useToken5.useToken;
  const obj = { children: items1 };
  useToken5;
  const token4 = useToken4(nativeDefault.colors.TEXT_DEFAULT, nativeDefault.themes.LIGHT);
  const obj2 = { style: items, textStyle: { color: token4 }, role };
  items = [, , ];
  ({ member: arr[0], memberLight: arr[1] } = tmp);
  items[2] = { backgroundColor: token2 };
  items1 = [React4(GuildRoleSubscriptionMemberPreview.GuildRoleSubscriptionMemberPreview, obj2), ];
  const obj3 = { style: items2, textStyle: { color: token3 }, role };
  items2 = [, , ];
  ({ member: arr3[0], memberDark: arr3[1] } = tmp);
  items2[2] = { backgroundColor: token };
  items1[1] = React4(GuildRoleSubscriptionMemberPreview.GuildRoleSubscriptionMemberPreview, obj3);
  return authStore(View, obj);
}
function Content() {
  let closure_0;
  let editStateId;
  let guildId;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let items3;
  let role;
  let tmp7;
  let tmp8;
  const tmp3 = role(20355)();
  let obj = require("EditStateContextProvider");
  const editStateContext = obj.useEditStateContext();
  ({ editStateId, guildId } = editStateContext);
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  [tmp7, tmp8] = obj2.useRoleColor(editStateId, guildId);
  _slicedToArray(obj2.useRoleColor(editStateId, guildId), 2);
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  _require = _slicedToArray(obj3.useRoleIcon(editStateId, guildId), 2)[1];
  const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  role = obj4.useRole(editStateId, guildId);
  const items = [role];
  const customIconSrc = react.useMemo(() => {
    const obj = RoleIconUtils;
    let roleIconData = obj.getRoleIconData(role);
    if (roleIconData == null) {
      roleIconData = {};
    }
    return roleIconData;
  }, items).customIconSrc;
  let tmp10;
  if (null != customIconSrc) {
    tmp10 = { uri: customIconSrc };
    const obj5 = { uri: customIconSrc };
  }
  const tmp11 = closure_11();
  const tmp4Result = require("RoleSubscriptionSettingsDisabledContext");
  const roleSubscriptionSettingsDisabled = tmp4Result.useRoleSubscriptionSettingsDisabled();
  const obj6 = { style: items1, children: items2 };
  items1 = [tmp3.container, tmp11.container];
  items2 = [closure_9(MemberPreviews, { role }), , ];
  const obj7 = { children: items3 };
  const obj8 = { title: intl.string(require("intl").t.sEr1zr) };
  const TableRowGroupTitle = tmp4(7126).TableRowGroupTitle;
  intl = tmp4(1113).intl;
  items3 = [closure_9(TableRowGroupTitle, obj8), ];
  const obj9 = {
    description: intl2.string(require("intl").t.Glqj9m),
    image: tmp10,
    imageUploadSize: UPLOAD_SMALL_SIZE,
    previewShape: require("FormImagePicker").PreviewShape.SQUIRCLE,
    previewResizeMode: "cover",
    setImage(icon) {
      const obj = { icon: icon.uri, unicodeEmoji: "r" };
      return closure_0(obj);
    },
    disabled: roleSubscriptionSettingsDisabled
  };
  const tmpResult = role(20356);
  intl2 = tmp4(1113).intl;
  items3[1] = closure_9(tmpResult, obj9);
  items2[1] = closure_10(View, obj7);
  const obj10 = { title: intl3.string(require("intl").t["W7hH+z"]), hasIcons: true, children: closure_9(role(20391), { color: tmp7, onChange: tmp8, disabled: roleSubscriptionSettingsDisabled }) };
  const TableRowGroup = tmp4(7126).TableRowGroup;
  intl3 = tmp4(1113).intl;
  items2[2] = closure_9(TableRowGroup, obj10);
  return closure_10(View, obj6);
}
const View = react_native.View;
const constants = GuildRoleSubscriptionsConstants.GuildRoleSubscriptionsTierScenes;
const UPLOAD_SMALL_SIZE = Constants.UPLOAD_SMALL_SIZE;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, member: obj3, memberLight: { borderTopLeftRadius: 8, borderTopRightRadius: 8, borderTopWidth: 1 }, memberDark: { borderBottomLeftRadius: 8, borderBottomRightRadius: 8, borderBottomWidth: 1 } };
obj2 = { paddingTop: nativeDefault.space.PX_26 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.none, borderWidth: 0, borderLeftWidth: 1, borderRightWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierDesignModal.tsx");

export default function GuildRoleSubscriptionTierDesignModal(arg0) {
  let intl;
  let intl2;
  const obj = { title: intl.string(intl4.t.AbcgTx), description: intl2.string(intl4.t.YAUjGn), canProceedToNextStep: true, nextStep: constants.CONFIRMATION, children: React4(Content, {}) };
  const tmp = GuildRoleSubscriptionTierEditStepDefault;
  intl = intl4.intl;
  intl2 = intl4.intl;
  const merged = Object.assign(arg0);
  return React4(tmp, obj);
};
export function GuildRoleSubscriptionTierDesignTab() {
  return React4(Content, {});
}
