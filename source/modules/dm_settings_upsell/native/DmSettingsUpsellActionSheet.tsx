// Module ID: 15889
// Function ID: 121680
// Name: DmSettingsUpsellActionSheet
// Dependencies: []
// Exports: default

// Module 15889 (DmSettingsUpsellActionSheet)
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, Image: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { paddingVertical: importDefault(dependencyMap[5]).space.PX_12, gap: importDefault(dependencyMap[5]).space.PX_8 };
obj.container = obj;
obj.headerImage = {};
obj.title = {};
obj.body = { textAlign: "center" };
const tmp3 = arg1(dependencyMap[3]);
obj.guildContainer = { paddingVertical: importDefault(dependencyMap[5]).space.PX_16 };
const obj1 = { paddingVertical: importDefault(dependencyMap[5]).space.PX_16 };
obj.guildInfo = { marginTop: importDefault(dependencyMap[5]).space.PX_4, gap: importDefault(dependencyMap[5]).space.PX_12, padding: importDefault(dependencyMap[5]).space.PX_12, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[5]).radii.md };
const obj2 = { marginTop: importDefault(dependencyMap[5]).space.PX_4, gap: importDefault(dependencyMap[5]).space.PX_12, padding: importDefault(dependencyMap[5]).space.PX_12, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[5]).radii.md };
obj.footer = { textAlign: "center", paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
let closure_9 = obj.createStyles(obj);
const obj3 = { textAlign: "center", paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/dm_settings_upsell/native/DmSettingsUpsellActionSheet.tsx");

export default function DmSettingsUpsellActionSheet(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
  const importDefault = stateFromStores;
  const items1 = [guildId];
  const effect = React.useEffect(() => {
    const result = guildId(closure_2[7]).acknowledgeDmSettingsUpsell(guildId);
    const obj = guildId(closure_2[7]);
    guildId(closure_2[8]).trackEvent(guildId(closure_2[8]).DmUpsellActionTypes.MODAL_VIEWED, guildId);
  }, items1);
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { startExpanded: true };
    obj = { style: tmp.container };
    const obj1 = { source: importDefault(dependencyMap[10]), style: tmp.headerImage };
    const items2 = [callback(closure_5, obj1), , , , , , ];
    const obj2 = { style: tmp.title };
    const intl = arg1(dependencyMap[12]).intl;
    obj2.children = intl.string(arg1(dependencyMap[12]).t.w2BvnL);
    items2[1] = callback(arg1(dependencyMap[11]).Text, obj2);
    const obj3 = { style: tmp.body };
    const intl2 = arg1(dependencyMap[12]).intl;
    const obj4 = { guild_name: stateFromStores.name };
    obj3.children = intl2.format(arg1(dependencyMap[12]).t.Depjkv, obj4);
    items2[2] = callback(arg1(dependencyMap[11]).Text, obj3);
    const obj5 = { style: tmp.guildContainer };
    const obj6 = {};
    const intl3 = arg1(dependencyMap[12]).intl;
    obj6.children = intl3.string(arg1(dependencyMap[12]).t.KPB2iw);
    const items3 = [callback(arg1(dependencyMap[11]).Text, obj6), ];
    const obj7 = { style: tmp.guildInfo };
    const obj8 = { guild: stateFromStores, size: arg1(dependencyMap[13]).GuildIconSizes.SMALL_32 };
    const items4 = [callback(importDefault(dependencyMap[13]), obj8), ];
    const obj9 = { children: stateFromStores.name };
    items4[1] = callback(arg1(dependencyMap[11]).Text, obj9);
    obj7.children = items4;
    items3[1] = callback2(closure_4, obj7);
    obj5.children = items3;
    items2[3] = callback2(closure_4, obj5);
    const obj10 = {
      size: "lg",
      onPress() {
          const sanitizedRestrictedGuilds = guildId(closure_2[15]).getSanitizedRestrictedGuilds();
          sanitizedRestrictedGuilds.add(guildId);
          const RestrictedGuildIds = guildId(closure_2[16]).RestrictedGuildIds;
          const obj = guildId(closure_2[15]);
          RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds)).then(() => {
            let obj = callback2(closure_2[17]);
            obj = { key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST", icon: callback2(closure_2[18]) };
            const intl = callback(closure_2[12]).intl;
            obj.content = intl.string(callback(closure_2[12]).t.rlYD1W);
            obj.open(obj);
          });
          const updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
          stateFromStores(closure_2[19]).hideActionSheet();
          const obj3 = stateFromStores(closure_2[19]);
          guildId(closure_2[8]).trackEvent(guildId(closure_2[8]).DmUpsellActionTypes.MODAL_DISABLED_DMS, guildId);
        }
    };
    const intl4 = arg1(dependencyMap[12]).intl;
    obj10.text = intl4.string(arg1(dependencyMap[12]).t.TD7iUx);
    items2[4] = callback(arg1(dependencyMap[14]).Button, obj10);
    const obj11 = {
      key: "r",
      onCloseCallback: "sectionIdsByBotId",
      onPress() {
          stateFromStores(closure_2[19]).hideActionSheet();
          const obj = stateFromStores(closure_2[19]);
          guildId(closure_2[8]).trackEvent(guildId(closure_2[8]).DmUpsellActionTypes.MODAL_DISMISSED, guildId);
        }
    };
    const intl5 = arg1(dependencyMap[12]).intl;
    obj11.text = intl5.string(arg1(dependencyMap[12]).t.PsWbcp);
    items2[5] = callback(arg1(dependencyMap[14]).Button, obj11);
    const obj12 = { variant: "text-xs/normal", style: tmp.footer };
    const intl6 = arg1(dependencyMap[12]).intl;
    const obj13 = {
      onClick() {
          if (null != stateFromStores) {
            stateFromStores(closure_2[19]).hideActionSheet();
            stateFromStores(closure_2[21])(stateFromStores);
            const obj = stateFromStores(closure_2[19]);
            guildId(closure_2[8]).trackEvent(guildId(closure_2[8]).DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED, guildId);
            const obj2 = guildId(closure_2[8]);
          }
        }
    };
    obj12.children = intl6.format(arg1(dependencyMap[12]).t.IzZxXW, obj13);
    items2[6] = callback(arg1(dependencyMap[20]).TextWithIOSLinkWorkaround, obj12);
    obj.children = items2;
    obj.children = callback2(closure_4, obj);
    tmp4 = callback(arg1(dependencyMap[9]).ActionSheet, obj);
    const tmp12 = importDefault(dependencyMap[13]);
  }
  return tmp4;
};
