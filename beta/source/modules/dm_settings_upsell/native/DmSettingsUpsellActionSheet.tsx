// Module ID: 17127
// Function ID: 17128
// Name: DmSettingsUpsellActionSheet
// Dependencies: [19, 17, 2067, 21, 4836, 576, 504, 17124, 17128, 6618, 10916, 4832, 1115, 5896, 5281, 6416, 2021, 4528, 8810, 4800, 13452, 2]
// Exports: default

// Module 17127 (DmSettingsUpsellActionSheet)
import nativeDefault from "native" /* 576 */;
import UserSettings from "UserSettings" /* 2021 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6416 */;
import openGuildActionSheetDefault from "openGuildActionSheet" /* 13452 */;
import DmSettingsUpsellManager from "DmSettingsUpsellManager" /* 17124 */;
import DmSettingsUpsellUtils from "DmSettingsUpsellUtils" /* 17128 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2067 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
({ View: closure_4, Image: hasOwnProperty } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerImage: { alignSelf: "center", width: 73, height: 86 }, title: { textAlign: "center", alignSelf: "center", width: 250 }, body: { textAlign: "center" }, guildContainer: obj3, guildInfo: obj4, footer: obj5 };
obj2 = { paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_16 };
obj4 = { marginTop: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md };
obj5 = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
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
  let tmp = closure_9();
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
    let obj2 = { startExpanded: true, children: closure_8(closure_4, obj3) };
    obj3 = { style: tmp.container, children: items2 };
    let obj4 = { source: stateFromStores(10916), style: tmp.headerImage };
    const ActionSheet = tmp2(6618).ActionSheet;
    items2 = [closure_7(closure_5, obj4), , , , , , ];
    const obj5 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.title, children: intl.string(guildId(1115).t.w2BvnL) };
    const Text = tmp2(4832).Text;
    intl = tmp2(1115).intl;
    items2[1] = closure_7(Text, obj5);
    const obj6 = { variant: "text-md/normal", color: "text-default", style: tmp.body, children: intl2.format(guildId(1115).t.Depjkv, obj7) };
    const Text2 = tmp2(4832).Text;
    intl2 = tmp2(1115).intl;
    obj7 = { guild_name: stateFromStores.name };
    items2[2] = closure_7(Text2, obj6);
    const obj8 = { style: tmp.guildContainer, children: items3 };
    const obj9 = { variant: "eyebrow", color: "text-default", children: intl3.string(guildId(1115).t.KPB2iw) };
    const Text3 = tmp2(4832).Text;
    intl3 = tmp2(1115).intl;
    items3 = [closure_7(Text3, obj9), ];
    const obj10 = { style: tmp.guildInfo, children: items4 };
    const obj11 = { guild: stateFromStores, size: guildId(5896).GuildIconSizes.SMALL_32 };
    const tmp12 = stateFromStores(5896);
    items4 = [closure_7(tmp12, obj11), ];
    const obj12 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: stateFromStores.name };
    items4[1] = closure_7(guildId(4832).Text, obj12);
    items3[1] = closure_8(closure_4, obj10);
    items2[3] = closure_8(closure_4, obj8);
    const obj13 = {
      size: "lg",
      onPress() {
          let obj = UserSettingsUtils;
          const sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
          sanitizedRestrictedGuilds.add(guildId);
          const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
          const updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
          updateSettingResult.then(() => {
            let intl;
            const tmp = stateFromStores(closure_1_2[17]);
            const open = tmp.open;
            const obj = { key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST", icon: stateFromStores(closure_1_2[18]), content: intl.string(guildId(closure_1_2[12]).t.rlYD1W) };
            intl = guildId(closure_1_2[12]).intl;
            open(obj);
          });
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideActionSheet();
          const obj4 = DmSettingsUpsellUtils;
          obj4.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_DISABLED_DMS, guildId);
        },
      text: intl4.string(guildId(1115).t.TD7iUx)
    };
    const Button = tmp2(5281).Button;
    intl4 = tmp2(1115).intl;
    items2[4] = closure_7(Button, obj13);
    const obj14 = {
      size: "lg",
      variant: "secondary",
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = DmSettingsUpsellUtils;
          obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_DISMISSED, guildId);
        },
      text: intl5.string(guildId(1115).t.PsWbcp)
    };
    const Button2 = tmp2(5281).Button;
    intl5 = tmp2(1115).intl;
    items2[5] = closure_7(Button2, obj14);
    const obj15 = { variant: "text-xs/normal", style: tmp.footer, children: intl6.format(guildId(1115).t.IzZxXW, obj16) };
    const Text4 = tmp2(4832).Text;
    intl6 = tmp2(1115).intl;
    obj16 = {
      onClick() {
          if (null != stateFromStores) {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            openGuildActionSheetDefault(tmp);
            const obj2 = DmSettingsUpsellUtils;
            obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED, guildId);
          }
        }
    };
    items2[6] = closure_7(Text4, obj15);
    tmp6 = closure_7(ActionSheet, obj2);
  }
  return tmp6;
};
