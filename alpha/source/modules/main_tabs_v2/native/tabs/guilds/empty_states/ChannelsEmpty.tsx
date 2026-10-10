// Module ID: 16668
// Function ID: 16669
// Name: ChannelsEmpty
// Dependencies: [19, 17, 4750, 1085, 21, 5092, 5088, 587, 558, 576, 573, 8637, 8605, 15352, 8581, 1200, 16669, 1126, 6156, 16670, 5380, 2]

// Module 16668 (ChannelsEmpty)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import Text_Text from "Text/Text" /* 5088 */;
import FastImageDefault from "FastImage" /* 6156 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 8605 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8637 */;
import AssetRegistryDefault from "AssetRegistry" /* 16669 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 16670 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
const Permissions = Constants.Permissions;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: { flex: 1, paddingTop: 12 }, content: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 48 }, headerText: obj2, text: { textAlign: "center" }, buttonWrapper: { marginTop: 24 }, buttonPill: obj3, personalizeButtonWrapper: { marginHorizontal: 12, marginBottom: 12 } };
obj2 = { fontSize: 18, marginTop: 16, marginBottom: 8 };
createStyles = createStyles.createStyles;
const merged = Object.assign(Text_Text.TextStyleSheet["heading-md/bold"]);
obj3 = { borderRadius: nativeDefault.radii.xl, height: 44, paddingHorizontal: 20 };
let closure_9 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelsEmpty(guild) {
  let BaseTextButton;
  let Icon;
  let RowButton;
  let canCreateChannel;
  let canCustomizeGuild;
  let first;
  let intl;
  let intl4;
  let items2;
  let items3;
  let obj11;
  let obj12;
  let obj9;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp7;
  let tmp8;
  let obj = guild(576);
  const cResult = obj.c(41);
  guild = guild.guild;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild) {
    const fn = function h() {
      const obj = { canCustomizeGuild: PermissionStore.can(Permissions.MANAGE_GUILD, guild), canCreateChannel: PermissionStore.can(Permissions.MANAGE_CHANNELS, guild) };
      return obj;
    };
    const items1 = [guild];
    cResult[1] = guild;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = guild(573);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp7, tmp8);
  ({ canCustomizeGuild, canCreateChannel } = stateFromStoresObject);
  if (cResult[4] !== guild.id) {
    const fn2 = function v() {
      const obj = GuildSettingsActionCreatorsDefault;
      obj.open(guild.id);
    };
    cResult[4] = guild.id;
    cResult[5] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] !== guild.id) {
    const fn3 = function f() {
      const obj = CreateChannelModalActionCreatorsDefault;
      obj.open(null, guild.id, null, null);
    };
    cResult[6] = guild.id;
    cResult[7] = fn3;
    tmp11 = fn3;
  } else {
    tmp11 = cResult[7];
  }
  const tmpResult2 = guild(15352);
  const youBarTotalHeight = tmpResult2.useYouBarTotalHeight(16);
  if (cResult[8] !== youBarTotalHeight) {
    const obj2 = { paddingBottom: youBarTotalHeight };
    cResult[8] = youBarTotalHeight;
    cResult[9] = obj2;
    tmp13 = obj2;
  } else {
    tmp13 = cResult[9];
  }
  if (cResult[10] === tmp4.wrapper) {
    let tmp14;
    if (cResult[11] === tmp13) {
      tmp14 = cResult[12];
    }
    if (cResult[13] === canCustomizeGuild) {
      if (cResult[14] === tmp10) {
        let tmp15;
        let tmp20;
        if (cResult[15] === tmp4.personalizeButtonWrapper) {
          tmp15 = cResult[16];
        }
        const _Symbol = Symbol;
        const content = tmp4.content;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { source: AssetRegistryDefault2 };
          const tmp23 = FastImageDefault;
          const tmp24 = closure_7(tmp23, obj3);
          cResult[17] = tmp24;
          tmp20 = tmp24;
        } else {
          tmp20 = cResult[17];
        }
        if (cResult[18] === tmp4.headerText) {
          let tmp25;
          let tmp26;
          let tmp28;
          let tmp31;
          let tmp33;
          if (cResult[19] === tmp4.text) {
            tmp25 = cResult[20];
          }
          const _Symbol2 = Symbol;
          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult = intl2.string(guild(1126).t.o4s29v);
            cResult[21] = stringResult;
            tmp26 = stringResult;
          } else {
            tmp26 = cResult[21];
          }
          if (cResult[22] !== tmp25) {
            const obj4 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: tmp25, children: tmp26 };
            const tmp30 = closure_7(guild(5088).Text, obj4);
            cResult[22] = tmp25;
            cResult[23] = tmp30;
            tmp28 = tmp30;
          } else {
            tmp28 = cResult[23];
          }
          const _Symbol3 = Symbol;
          const text = tmp4.text;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1126).intl;
            const stringResult1 = intl3.string(guild(1126).t.iypvFu);
            cResult[24] = stringResult1;
            tmp31 = stringResult1;
          } else {
            tmp31 = cResult[24];
          }
          if (cResult[25] !== tmp4.text) {
            const obj5 = { color: "text-default", variant: "text-md/medium", style: text, children: tmp31 };
            const tmp35 = closure_7(guild(5088).Text, obj5);
            cResult[25] = tmp4.text;
            cResult[26] = tmp35;
            tmp33 = tmp35;
          } else {
            tmp33 = cResult[26];
          }
          if (cResult[27] === canCreateChannel) {
            if (cResult[28] === tmp11) {
              if (cResult[29] === tmp4.buttonPill) {
                let tmp36;
                if (cResult[30] === tmp4.buttonWrapper) {
                  tmp36 = cResult[31];
                }
                if (cResult[32] === tmp4.content) {
                  if (cResult[33] === tmp28) {
                    if (cResult[34] === tmp33) {
                      let tmp40;
                      if (cResult[35] === tmp36) {
                        tmp40 = cResult[36];
                      }
                      if (cResult[37] === tmp40) {
                        if (cResult[38] === tmp14) {
                          let tmp44;
                          if (cResult[39] === tmp15) {
                            tmp44 = cResult[40];
                          }
                          return tmp44;
                        }
                      }
                      const obj6 = { style: tmp14, children: items2 };
                      items2 = [tmp15, tmp40];
                      const tmp47 = closure_8(View, obj6);
                      cResult[37] = tmp40;
                      cResult[38] = tmp14;
                      cResult[39] = tmp15;
                      cResult[40] = tmp47;
                      tmp44 = tmp47;
                    }
                  }
                }
                const obj7 = { style: content, children: items3 };
                items3 = [tmp20, tmp28, tmp33, tmp36];
                const tmp43 = closure_8(View, obj7);
                cResult[32] = tmp4.content;
                cResult[33] = tmp28;
                cResult[34] = tmp33;
                cResult[35] = tmp36;
                cResult[36] = tmp43;
                tmp40 = tmp43;
              }
            }
          }
          let tmp37 = canCreateChannel;
          if (tmp37) {
            const obj8 = { style: tmp4.buttonWrapper, children: closure_7(BaseTextButton, obj9) };
            obj9 = { shrink: true, size: "md", pillStyle: tmp4.buttonPill, text: intl4.string(guild(1126).t["63PyJQ"]), onPress: tmp11 };
            BaseTextButton = tmp(5380).BaseTextButton;
            intl4 = tmp(1126).intl;
            tmp37 = closure_7(View, obj8);
          }
          cResult[27] = canCreateChannel;
          cResult[28] = tmp11;
          cResult[29] = tmp4.buttonPill;
          cResult[30] = tmp4.buttonWrapper;
          cResult[31] = tmp37;
          tmp36 = tmp37;
        }
        const items4 = [, ];
        ({ text: arr4[0], headerText: arr4[1] } = tmp4);
        cResult[18] = tmp4.headerText;
        cResult[19] = tmp4.text;
        cResult[20] = items4;
        tmp25 = items4;
      }
    }
    let tmp16 = canCustomizeGuild;
    if (tmp16) {
      const obj10 = { style: tmp4.personalizeButtonWrapper, children: closure_7(RowButton, obj11) };
      obj11 = { icon: closure_7(Icon, obj12), label: intl.string(guild(1126).t["Yhi9/N"]), onPress: tmp10 };
      RowButton = tmp(8581).RowButton;
      obj12 = { source: AssetRegistryDefault, disableColor: true };
      Icon = tmp(1200).Icon;
      intl = tmp(1126).intl;
      tmp16 = closure_7(View, obj10);
    }
    cResult[13] = canCustomizeGuild;
    cResult[14] = tmp10;
    cResult[15] = tmp4.personalizeButtonWrapper;
    cResult[16] = tmp16;
    tmp15 = tmp16;
  }
  const items5 = [tmp4.wrapper, tmp13];
  cResult[10] = tmp4.wrapper;
  cResult[11] = tmp13;
  cResult[12] = items5;
  tmp14 = items5;
}) : (function ChannelsEmpty(guild) {
  let BaseTextButton;
  let Icon;
  let RowButton;
  let canCreateChannel;
  let canCustomizeGuild;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj13;
  let obj6;
  let obj7;
  guild = guild.guild;
  const tmp = closure_9();
  let obj = guild(573);
  const items = [PermissionStore];
  const items1 = [guild];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { canCustomizeGuild: PermissionStore.can(Permissions.MANAGE_GUILD, guild), canCreateChannel: PermissionStore.can(Permissions.MANAGE_CHANNELS, guild) };
    return obj;
  }, items1);
  ({ canCustomizeGuild, canCreateChannel } = stateFromStoresObject);
  const items2 = [guild.id];
  const items3 = [guild.id];
  const callback = react.useCallback(() => {
    const obj = GuildSettingsActionCreatorsDefault;
    obj.open(guild.id);
  }, items2);
  const callback1 = react.useCallback(() => {
    const obj = CreateChannelModalActionCreatorsDefault;
    obj.open(null, guild.id, null, null);
  }, items3);
  const obj3 = { style: items4, children: items5 };
  items4 = [tmp.wrapper, ];
  const obj2 = guild(15352);
  items4[1] = { paddingBottom: obj2.useYouBarTotalHeight(16) };
  ({ paddingBottom: obj2.useYouBarTotalHeight(16) });
  if (canCustomizeGuild) {
    const obj5 = { style: tmp.personalizeButtonWrapper, children: closure_7(RowButton, obj6) };
    obj6 = { icon: closure_7(Icon, obj7), label: intl.string(guild(1126).t["Yhi9/N"]), onPress: callback };
    RowButton = tmp2(8581).RowButton;
    obj7 = { source: AssetRegistryDefault, disableColor: true };
    Icon = tmp2(1200).Icon;
    intl = tmp2(1126).intl;
    canCustomizeGuild = closure_7(tmp8, obj5);
  }
  items5 = [canCustomizeGuild, ];
  const obj8 = { style: tmp.content, children: items6 };
  const obj9 = { source: AssetRegistryDefault2 };
  const tmp12 = FastImageDefault;
  items6 = [closure_7(tmp12, obj9), , , ];
  const obj10 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: items7, children: intl2.string(guild(1126).t.o4s29v) };
  items7 = [, ];
  ({ text: arr8[0], headerText: arr8[1] } = tmp);
  const Text = tmp2(5088).Text;
  intl2 = tmp2(1126).intl;
  items6[1] = closure_7(Text, obj10);
  const obj11 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: intl3.string(guild(1126).t.iypvFu) };
  const Text2 = tmp2(5088).Text;
  intl3 = tmp2(1126).intl;
  items6[2] = closure_7(Text2, obj11);
  if (canCreateChannel) {
    const obj12 = { style: tmp.buttonWrapper, children: closure_7(BaseTextButton, obj13) };
    obj13 = { shrink: true, size: "md", pillStyle: tmp.buttonPill, text: intl4.string(guild(1126).t["63PyJQ"]), onPress: callback1 };
    BaseTextButton = tmp2(5380).BaseTextButton;
    intl4 = tmp2(1126).intl;
    canCreateChannel = tmp11(tmp8, obj12);
  }
  items6[3] = canCreateChannel;
  items5[1] = closure_8(View, obj8);
  return closure_8(View, obj3);
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/empty_states/ChannelsEmpty.tsx");

export default memoResult;
