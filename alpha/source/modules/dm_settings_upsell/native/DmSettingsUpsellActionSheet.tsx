// Module ID: 19375
// Function ID: 19376
// Name: DmSettingsUpsellActionSheet
// Dependencies: [19, 17, 4880, 21, 5009, 575, 504, 19372, 19376, 7360, 5712, 11247, 5619, 1114, 6951, 5629, 7159, 4834, 5707, 5253, 15690, 2]
// Exports: default

// Module 19375 (DmSettingsUpsellActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import UserSettings from "UserSettings" /* 4834 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7159 */;
import openGuildActionSheetDefault from "openGuildActionSheet" /* 15690 */;
import DmSettingsUpsellManager from "DmSettingsUpsellManager" /* 19372 */;
import DmSettingsUpsellUtils from "DmSettingsUpsellUtils" /* 19376 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4880 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerImage: { alignSelf: "center", width: 73, height: 86 }, title: { textAlign: "center", alignSelf: "center", width: 250 }, body: { textAlign: "center" }, guildContainer: obj3, guildInfo: obj4, footer: obj5 };
obj2 = { paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_16 };
obj4 = { marginTop: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md };
obj5 = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
let result = size.fileFinishedImporting("modules/dm_settings_upsell/native/DmSettingsUpsellActionSheet.tsx");

export default function DmSettingsUpsellActionSheet(guildId) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items2;
  let items3;
  let items4;
  let obj16;
  let obj3;
  let obj7;
  guildId = guildId.guildId;
  const tmp = closure_8();
  let obj = guildId(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const items1 = [guildId];
  const effect = react.useEffect(() => {
    const obj = DmSettingsUpsellManager;
    const result = obj.acknowledgeDmSettingsUpsell(guildId);
    const obj2 = DmSettingsUpsellUtils;
    obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_VIEWED, guildId);
  }, items1);
  let tmp6 = null;
  if (null != stateFromStores) {
    let obj2 = { startExpanded: true, children: closure_7(View, obj3) };
    obj3 = { style: tmp.container, children: items2 };
    const ActionSheet = tmp2(7360).ActionSheet;
    let obj4 = { source: stateFromStores(11247), style: tmp.headerImage };
    const tmp11 = stateFromStores(5712);
    items2 = [closure_6(tmp11, obj4), , , , , , ];
    const obj5 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.title, children: intl.string(guildId(1114).t.w2BvnL) };
    const Text = tmp2(5619).Text;
    intl = tmp2(1114).intl;
    items2[1] = closure_6(Text, obj5);
    const obj6 = { variant: "text-md/normal", color: "text-default", style: tmp.body, children: intl2.format(guildId(1114).t.Depjkv, obj7) };
    const Text2 = tmp2(5619).Text;
    intl2 = tmp2(1114).intl;
    obj7 = { guild_name: stateFromStores.name };
    items2[2] = closure_6(Text2, obj6);
    const obj8 = { style: tmp.guildContainer, children: items3 };
    const obj9 = { variant: "eyebrow", color: "text-default", children: intl3.string(guildId(1114).t.KPB2iw) };
    const Text3 = tmp2(5619).Text;
    intl3 = tmp2(1114).intl;
    items3 = [closure_6(Text3, obj9), ];
    const obj10 = { style: tmp.guildInfo, children: items4 };
    const obj11 = { guild: stateFromStores, size: guildId(6951).GuildIconSizes.SMALL_32 };
    const tmp12 = stateFromStores(6951);
    items4 = [closure_6(tmp12, obj11), ];
    const obj12 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: stateFromStores.name };
    items4[1] = closure_6(guildId(5619).Text, obj12);
    items3[1] = closure_7(View, obj10);
    items2[3] = closure_7(View, obj8);
    const obj13 = {
      size: "lg",
      onPress: function handleSubmit() {
          let obj = UserSettingsUtils;
          const sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
          sanitizedRestrictedGuilds.add(guildId);
          const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
          const updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
          updateSettingResult.then(() => {
            let intl;
            const obj = { text: intl.string(guildId(closure_1_2[13]).t.rlYD1W), variant: "success" };
            const open = stateFromStores(closure_1_2[18]).open;
            stateFromStores(closure_1_2[18]);
            intl = guildId(closure_1_2[13]).intl;
            open("DM_SETTINGS_UPSELL_SUCCESS_TOAST", obj);
          });
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideActionSheet();
          const obj4 = DmSettingsUpsellUtils;
          obj4.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_DISABLED_DMS, guildId);
        },
      text: intl4.string(guildId(1114).t.TD7iUx)
    };
    const Button = tmp2(5629).Button;
    intl4 = tmp2(1114).intl;
    items2[4] = closure_6(Button, obj13);
    const obj14 = {
      size: "lg",
      variant: "secondary",
      onPress: function handleDismiss() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = DmSettingsUpsellUtils;
          obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_DISMISSED, guildId);
        },
      text: intl5.string(guildId(1114).t.PsWbcp)
    };
    const Button2 = tmp2(5629).Button;
    intl5 = tmp2(1114).intl;
    items2[5] = closure_6(Button2, obj14);
    const obj15 = { variant: "text-xs/normal", style: tmp.footer, children: intl6.format(guildId(1114).t.IzZxXW, obj16) };
    const Text4 = tmp2(5619).Text;
    intl6 = tmp2(1114).intl;
    obj16 = {
      onClick: function handleGotoServerPrivacySettings() {
          if (null != stateFromStores) {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            openGuildActionSheetDefault(tmp);
            const obj2 = DmSettingsUpsellUtils;
            obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED, guildId);
          }
        }
    };
    items2[6] = closure_6(Text4, obj15);
    tmp6 = closure_6(ActionSheet, obj2);
  }
  return tmp6;
};
