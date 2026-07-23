// Module ID: 16018
// Function ID: 123940
// Name: DmSettingsUpsellActionSheet
// Dependencies: [31, 27, 1838, 33, 4130, 689, 566, 16015, 16019, 5500, 10413, 4126, 1212, 5515, 4543, 5793, 3803, 3831, 10332, 4098, 5459, 12914, 2]
// Exports: default

// Module 16018 (DmSettingsUpsellActionSheet)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_6 from "_createForOfIteratorHelperLoose";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
({ View: closure_4, Image: closure_5 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerImage = { alignSelf: "center", width: 73, height: 86 };
_createForOfIteratorHelperLoose.title = { textAlign: "center", alignSelf: "center", width: 250 };
_createForOfIteratorHelperLoose.body = { textAlign: "center" };
_createForOfIteratorHelperLoose.guildContainer = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_4, flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_12, padding: require("_createForOfIteratorHelperLoose").space.PX_12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose.guildInfo = obj2;
let obj1 = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.footer = { textAlign: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { textAlign: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/dm_settings_upsell/native/DmSettingsUpsellActionSheet.tsx");

export default function DmSettingsUpsellActionSheet(guildId) {
  guildId = guildId.guildId;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = guildId(566);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getGuild(guildId));
  const items1 = [guildId];
  const effect = React.useEffect(() => {
    const result = guildId(outer1_2[7]).acknowledgeDmSettingsUpsell(guildId);
    const obj = guildId(outer1_2[7]);
    guildId(outer1_2[8]).trackEvent(guildId(outer1_2[8]).DmUpsellActionTypes.MODAL_VIEWED, guildId);
  }, items1);
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { startExpanded: true };
    obj = { style: tmp.container };
    const obj1 = { source: stateFromStores(10413), style: tmp.headerImage };
    const items2 = [callback(closure_5, obj1), , , , , , ];
    let obj2 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.title };
    let intl = guildId(1212).intl;
    obj2.children = intl.string(guildId(1212).t.w2BvnL);
    items2[1] = callback(guildId(4126).Text, obj2);
    let obj3 = { variant: "text-md/normal", color: "text-default", style: tmp.body };
    const intl2 = guildId(1212).intl;
    const obj4 = { guild_name: stateFromStores.name };
    obj3.children = intl2.format(guildId(1212).t.Depjkv, obj4);
    items2[2] = callback(guildId(4126).Text, obj3);
    const obj5 = { style: tmp.guildContainer };
    const obj6 = { variant: "eyebrow", color: "text-default" };
    const intl3 = guildId(1212).intl;
    obj6.children = intl3.string(guildId(1212).t.KPB2iw);
    const items3 = [callback(guildId(4126).Text, obj6), ];
    const obj7 = { style: tmp.guildInfo };
    const obj8 = { guild: stateFromStores, size: guildId(5515).GuildIconSizes.SMALL_32 };
    const items4 = [callback(stateFromStores(5515), obj8), ];
    const obj9 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: stateFromStores.name };
    items4[1] = callback(guildId(4126).Text, obj9);
    obj7.children = items4;
    items3[1] = callback2(closure_4, obj7);
    obj5.children = items3;
    items2[3] = callback2(closure_4, obj5);
    const obj10 = {
      size: "lg",
      onPress() {
          const sanitizedRestrictedGuilds = guildId(outer1_2[15]).getSanitizedRestrictedGuilds();
          sanitizedRestrictedGuilds.add(guildId);
          const RestrictedGuildIds = guildId(outer1_2[16]).RestrictedGuildIds;
          let obj = guildId(outer1_2[15]);
          RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds)).then(() => {
            let obj = stateFromStores(outer2_2[17]);
            obj = { key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST", icon: stateFromStores(outer2_2[18]) };
            const intl = guildId(outer2_2[12]).intl;
            obj.content = intl.string(guildId(outer2_2[12]).t.rlYD1W);
            obj.open(obj);
          });
          const updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
          stateFromStores(outer1_2[19]).hideActionSheet();
          const obj3 = stateFromStores(outer1_2[19]);
          guildId(outer1_2[8]).trackEvent(guildId(outer1_2[8]).DmUpsellActionTypes.MODAL_DISABLED_DMS, guildId);
        }
    };
    const intl4 = guildId(1212).intl;
    obj10.text = intl4.string(guildId(1212).t.TD7iUx);
    items2[4] = callback(guildId(4543).Button, obj10);
    const obj11 = {
      size: "lg",
      variant: "secondary",
      onPress() {
          stateFromStores(outer1_2[19]).hideActionSheet();
          const obj = stateFromStores(outer1_2[19]);
          guildId(outer1_2[8]).trackEvent(guildId(outer1_2[8]).DmUpsellActionTypes.MODAL_DISMISSED, guildId);
        }
    };
    const intl5 = guildId(1212).intl;
    obj11.text = intl5.string(guildId(1212).t.PsWbcp);
    items2[5] = callback(guildId(4543).Button, obj11);
    const obj12 = { variant: "text-xs/normal", style: tmp.footer };
    const intl6 = guildId(1212).intl;
    const obj13 = {
      onClick() {
          if (null != stateFromStores) {
            stateFromStores(outer1_2[19]).hideActionSheet();
            stateFromStores(outer1_2[21])(stateFromStores);
            const obj = stateFromStores(outer1_2[19]);
            guildId(outer1_2[8]).trackEvent(guildId(outer1_2[8]).DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED, guildId);
            const obj2 = guildId(outer1_2[8]);
          }
        }
    };
    obj12.children = intl6.format(guildId(1212).t.IzZxXW, obj13);
    items2[6] = callback(guildId(5459).TextWithIOSLinkWorkaround, obj12);
    obj.children = items2;
    obj.children = callback2(closure_4, obj);
    tmp4 = callback(guildId(5500).ActionSheet, obj);
    const tmp12 = stateFromStores(5515);
  }
  return tmp4;
};
