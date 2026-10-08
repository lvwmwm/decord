// Module ID: 17797
// Function ID: 17798
// Name: DmSettingsUpsellActionSheet
// Dependencies: [19, 17, 2086, 21, 5090, 587, 558, 576, 504, 17794, 17798, 5054, 13960, 6675, 2040, 4766, 5005, 1126, 10380, 5086, 6161, 5375, 6885, 2]

// Module 17797 (DmSettingsUpsellActionSheet)
import nativeDefault from "native" /* 587 */;
import UserSettings from "UserSettings" /* 2040 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6675 */;
import openGuildActionSheetDefault from "openGuildActionSheet" /* 13960 */;
import DmSettingsUpsellManager from "DmSettingsUpsellManager" /* 17794 */;
import DmSettingsUpsellUtils from "DmSettingsUpsellUtils" /* 17798 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2086 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function DmSettingsUpsellActionSheet(guildId) {
  let first;
  let intl3;
  let items2;
  let items3;
  let items4;
  let obj12;
  let tmp10;
  let tmp7;
  let tmp9;
  let tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(55);
  guildId = guildId.guildId;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function p() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] !== guildId) {
    const fn2 = function f() {
      const obj = DmSettingsUpsellManager;
      const result = obj.acknowledgeDmSettingsUpsell(guildId);
      const obj2 = DmSettingsUpsellUtils;
      obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_VIEWED, guildId);
    };
    const items1 = [guildId];
    cResult[3] = guildId;
    cResult[4] = fn2;
    cResult[5] = items1;
    tmp10 = items1;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[4];
    tmp10 = cResult[5];
  }
  const effect = react.useEffect(tmp9, tmp10);
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp12;
    if (cResult[6] !== guildId) {
      function handleDismiss() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const obj2 = DmSettingsUpsellUtils;
        obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_DISMISSED, guildId);
      }
      cResult[6] = guildId;
      cResult[7] = handleDismiss;
      tmp12 = handleDismiss;
    } else {
      tmp12 = cResult[7];
    }
    if (cResult[8] === stateFromStores) {
      let tmp13;
      let tmp14;
      let tmp15;
      let tmp20;
      let tmp22;
      let tmp25;
      if (cResult[9] === guildId) {
        tmp13 = cResult[10];
      }
      if (cResult[11] !== guildId) {
        function handleSubmit() {
          let obj = UserSettingsUtils;
          const sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
          sanitizedRestrictedGuilds.add(guildId);
          const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
          const updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
          updateSettingResult.then(() => {
            let intl;
            const tmp = stateFromStores(closure_1_2[15]);
            const open = tmp.open;
            const obj = { key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST", icon: stateFromStores(closure_1_2[16]), content: intl.string(guildId(closure_1_2[17]).t.rlYD1W) };
            intl = guildId(closure_1_2[17]).intl;
            open(obj);
          });
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideActionSheet();
          const obj4 = DmSettingsUpsellUtils;
          obj4.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_DISABLED_DMS, guildId);
        }
        cResult[11] = guildId;
        cResult[12] = handleSubmit;
        tmp14 = handleSubmit;
      } else {
        tmp14 = cResult[12];
      }
      const container = tmp4.container;
      if (cResult[13] !== tmp4.headerImage) {
        let obj2 = { source: stateFromStores(10380), style: tmp4.headerImage };
        const tmp19 = closure_7(closure_5, obj2);
        cResult[13] = tmp4.headerImage;
        cResult[14] = tmp19;
        tmp15 = tmp19;
      } else {
        tmp15 = cResult[14];
      }
      const _Symbol = Symbol;
      const title = tmp4.title;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.w2BvnL);
        cResult[15] = stringResult;
        tmp20 = stringResult;
      } else {
        tmp20 = cResult[15];
      }
      if (cResult[16] !== tmp4.title) {
        let obj3 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: title, children: tmp20 };
        const tmp24 = closure_7(tmp(5086).Text, obj3);
        cResult[16] = tmp4.title;
        cResult[17] = tmp24;
        tmp22 = tmp24;
      } else {
        tmp22 = cResult[17];
      }
      const body = tmp4.body;
      if (cResult[18] !== stateFromStores.name) {
        const intl2 = tmp(1126).intl;
        let obj4 = { guild_name: stateFromStores.name };
        const formatResult = intl2.format(tmp(1126).t.Depjkv, obj4);
        cResult[18] = stateFromStores.name;
        cResult[19] = formatResult;
        tmp25 = formatResult;
      } else {
        tmp25 = cResult[19];
      }
      if (cResult[20] === tmp4.body) {
        let tmp27;
        let tmp30;
        let tmp33;
        let tmp38;
        if (cResult[21] === tmp25) {
          tmp27 = cResult[22];
        }
        const _Symbol2 = Symbol;
        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { variant: "eyebrow", color: "text-default", children: intl3.string(tmp(1126).t.KPB2iw) };
          const Text = tmp(5086).Text;
          intl3 = tmp(1126).intl;
          const tmp32 = closure_7(Text, obj5);
          cResult[23] = tmp32;
          tmp30 = tmp32;
        } else {
          tmp30 = cResult[23];
        }
        if (cResult[24] !== stateFromStores) {
          const obj6 = { guild: stateFromStores, size: tmp(6161).GuildIconSizes.SMALL_32 };
          const tmp36 = stateFromStores(6161);
          const tmp37 = closure_7(tmp36, obj6);
          cResult[24] = stateFromStores;
          cResult[25] = tmp37;
          tmp33 = tmp37;
        } else {
          tmp33 = cResult[25];
        }
        if (cResult[26] !== stateFromStores.name) {
          const obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: stateFromStores.name };
          const tmp40 = closure_7(tmp(5086).Text, obj7);
          cResult[26] = stateFromStores.name;
          cResult[27] = tmp40;
          tmp38 = tmp40;
        } else {
          tmp38 = cResult[27];
        }
        if (cResult[28] === tmp4.guildInfo) {
          if (cResult[29] === tmp33) {
            let tmp41;
            if (cResult[30] === tmp38) {
              tmp41 = cResult[31];
            }
            if (cResult[32] === tmp4.guildContainer) {
              let tmp45;
              let tmp49;
              let tmp51;
              let tmp54;
              let tmp56;
              let tmp59;
              if (cResult[33] === tmp41) {
                tmp45 = cResult[34];
              }
              const _Symbol3 = Symbol;
              if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                const intl4 = tmp(1126).intl;
                const stringResult1 = intl4.string(tmp(1126).t.TD7iUx);
                cResult[35] = stringResult1;
                tmp49 = stringResult1;
              } else {
                tmp49 = cResult[35];
              }
              if (cResult[36] !== tmp14) {
                const obj8 = { size: "lg", onPress: tmp14, text: tmp49 };
                const tmp53 = closure_7(tmp(5375).Button, obj8);
                cResult[36] = tmp14;
                cResult[37] = tmp53;
                tmp51 = tmp53;
              } else {
                tmp51 = cResult[37];
              }
              const _Symbol4 = Symbol;
              if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                const intl5 = tmp(1126).intl;
                const stringResult2 = intl5.string(tmp(1126).t.PsWbcp);
                cResult[38] = stringResult2;
                tmp54 = stringResult2;
              } else {
                tmp54 = cResult[38];
              }
              if (cResult[39] !== tmp12) {
                const obj9 = { size: "lg", variant: "secondary", onPress: tmp12, text: tmp54 };
                const tmp58 = closure_7(tmp(5375).Button, obj9);
                cResult[39] = tmp12;
                cResult[40] = tmp58;
                tmp56 = tmp58;
              } else {
                tmp56 = cResult[40];
              }
              const footer = tmp4.footer;
              if (cResult[41] !== tmp13) {
                const intl6 = tmp(1126).intl;
                const obj10 = { onClick: tmp13 };
                const formatResult1 = intl6.format(tmp(1126).t.IzZxXW, obj10);
                cResult[41] = tmp13;
                cResult[42] = formatResult1;
                tmp59 = formatResult1;
              } else {
                tmp59 = cResult[42];
              }
              if (cResult[43] === tmp4.footer) {
                let tmp61;
                if (cResult[44] === tmp59) {
                  tmp61 = cResult[45];
                }
                if (cResult[46] === tmp4.container) {
                  if (cResult[47] === tmp22) {
                    if (cResult[48] === tmp27) {
                      if (cResult[49] === tmp45) {
                        if (cResult[50] === tmp51) {
                          if (cResult[51] === tmp56) {
                            if (cResult[52] === tmp61) {
                              let tmp64;
                              if (cResult[53] === tmp15) {
                                tmp64 = cResult[54];
                              }
                              return tmp64;
                            }
                          }
                        }
                      }
                    }
                  }
                }
                const obj11 = { startExpanded: true, children: closure_8(closure_4, obj12) };
                obj12 = { style: container, children: items2 };
                items2 = [tmp15, tmp22, tmp27, tmp45, tmp51, tmp56, tmp61];
                const ActionSheet = tmp(6885).ActionSheet;
                const tmp68 = closure_7(ActionSheet, obj11);
                cResult[46] = tmp4.container;
                cResult[47] = tmp22;
                cResult[48] = tmp27;
                cResult[49] = tmp45;
                cResult[50] = tmp51;
                cResult[51] = tmp56;
                cResult[52] = tmp61;
                cResult[53] = tmp15;
                cResult[54] = tmp68;
                tmp64 = tmp68;
              }
              const obj13 = { variant: "text-xs/normal", style: footer, children: tmp59 };
              const tmp63 = closure_7(tmp(5086).Text, obj13);
              cResult[43] = tmp4.footer;
              cResult[44] = tmp59;
              cResult[45] = tmp63;
              tmp61 = tmp63;
            }
            const obj14 = { style: tmp4.guildContainer, children: items3 };
            items3 = [tmp30, tmp41];
            const tmp48 = closure_8(closure_4, obj14);
            cResult[32] = tmp4.guildContainer;
            cResult[33] = tmp41;
            cResult[34] = tmp48;
            tmp45 = tmp48;
          }
        }
        const obj15 = { style: tmp4.guildInfo, children: items4 };
        items4 = [tmp33, tmp38];
        const tmp44 = closure_8(closure_4, obj15);
        cResult[28] = tmp4.guildInfo;
        cResult[29] = tmp33;
        cResult[30] = tmp38;
        cResult[31] = tmp44;
        tmp41 = tmp44;
      }
      const obj16 = { variant: "text-md/normal", color: "text-default", style: body, children: tmp25 };
      const tmp29 = closure_7(tmp(5086).Text, obj16);
      cResult[20] = tmp4.body;
      cResult[21] = tmp25;
      cResult[22] = tmp29;
      tmp27 = tmp29;
    }
    function handleGotoServerPrivacySettings() {
      if (null != stateFromStores) {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        openGuildActionSheetDefault(tmp);
        const obj2 = DmSettingsUpsellUtils;
        obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED, guildId);
      }
    }
    cResult[8] = stateFromStores;
    cResult[9] = guildId;
    cResult[10] = handleGotoServerPrivacySettings;
    tmp13 = handleGotoServerPrivacySettings;
  }
}) : (function DmSettingsUpsellActionSheet(guildId) {
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
    let obj4 = { source: stateFromStores(10380), style: tmp.headerImage };
    const ActionSheet = tmp2(6885).ActionSheet;
    items2 = [closure_7(closure_5, obj4), , , , , , ];
    const obj5 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.title, children: intl.string(guildId(1126).t.w2BvnL) };
    const Text = tmp2(5086).Text;
    intl = tmp2(1126).intl;
    items2[1] = closure_7(Text, obj5);
    const obj6 = { variant: "text-md/normal", color: "text-default", style: tmp.body, children: intl2.format(guildId(1126).t.Depjkv, obj7) };
    const Text2 = tmp2(5086).Text;
    intl2 = tmp2(1126).intl;
    obj7 = { guild_name: stateFromStores.name };
    items2[2] = closure_7(Text2, obj6);
    const obj8 = { style: tmp.guildContainer, children: items3 };
    const obj9 = { variant: "eyebrow", color: "text-default", children: intl3.string(guildId(1126).t.KPB2iw) };
    const Text3 = tmp2(5086).Text;
    intl3 = tmp2(1126).intl;
    items3 = [closure_7(Text3, obj9), ];
    const obj10 = { style: tmp.guildInfo, children: items4 };
    const obj11 = { guild: stateFromStores, size: guildId(6161).GuildIconSizes.SMALL_32 };
    const tmp12 = stateFromStores(6161);
    items4 = [closure_7(tmp12, obj11), ];
    const obj12 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: stateFromStores.name };
    items4[1] = closure_7(guildId(5086).Text, obj12);
    items3[1] = closure_8(closure_4, obj10);
    items2[3] = closure_8(closure_4, obj8);
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
            const tmp = stateFromStores(closure_1_2[15]);
            const open = tmp.open;
            const obj = { key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST", icon: stateFromStores(closure_1_2[16]), content: intl.string(guildId(closure_1_2[17]).t.rlYD1W) };
            intl = guildId(closure_1_2[17]).intl;
            open(obj);
          });
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideActionSheet();
          const obj4 = DmSettingsUpsellUtils;
          obj4.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_DISABLED_DMS, guildId);
        },
      text: intl4.string(guildId(1126).t.TD7iUx)
    };
    const Button = tmp2(5375).Button;
    intl4 = tmp2(1126).intl;
    items2[4] = closure_7(Button, obj13);
    const obj14 = {
      size: "lg",
      variant: "secondary",
      onPress: function handleDismiss() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = DmSettingsUpsellUtils;
          obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_DISMISSED, guildId);
        },
      text: intl5.string(guildId(1126).t.PsWbcp)
    };
    const Button2 = tmp2(5375).Button;
    intl5 = tmp2(1126).intl;
    items2[5] = closure_7(Button2, obj14);
    const obj15 = { variant: "text-xs/normal", style: tmp.footer, children: intl6.format(guildId(1126).t.IzZxXW, obj16) };
    const Text4 = tmp2(5086).Text;
    intl6 = tmp2(1126).intl;
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
    items2[6] = closure_7(Text4, obj15);
    tmp6 = closure_7(ActionSheet, obj2);
  }
  return tmp6;
});
let result = size.fileFinishedImporting("modules/dm_settings_upsell/native/DmSettingsUpsellActionSheet.tsx");

export default tmp5;
