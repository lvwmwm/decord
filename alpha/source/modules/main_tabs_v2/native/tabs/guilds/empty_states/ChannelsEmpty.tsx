// Module ID: 16482
// Function ID: 16483
// Name: ChannelsEmpty
// Dependencies: [19, 17, 4707, 1085, 21, 5090, 5086, 587, 558, 576, 573, 8613, 8578, 15179, 8557, 1200, 16483, 1126, 16484, 5376, 2]

// Module 16482 (ChannelsEmpty)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import Text_Text from "Text/Text" /* 5086 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 8578 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8613 */;
import AssetRegistryDefault from "AssetRegistry" /* 16483 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 16484 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
({ View: closure_4, Image: hasOwnProperty } = react_native);
const Permissions = Constants.Permissions;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: { flex: 1, paddingTop: 12 }, content: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 48 }, headerText: obj2, text: { textAlign: "center" }, buttonWrapper: { marginTop: 24 }, buttonPill: obj3, personalizeButtonWrapper: { marginHorizontal: 12, marginBottom: 12 } };
obj2 = { fontSize: 18, marginTop: 16, marginBottom: 8 };
createStyles = createStyles.createStyles;
const merged = Object.assign(Text_Text.TextStyleSheet["heading-md/bold"]);
obj3 = { borderRadius: nativeDefault.radii.xl, height: 44, paddingHorizontal: 20 };
let closure_10 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelsEmpty(guild) {
  let Icon;
  let RowButton;
  let canCreateChannel;
  let canCustomizeGuild;
  let first;
  let intl;
  let obj3;
  let obj4;
  let tmp10;
  let tmp7;
  let tmp8;
  let obj = guild(576);
  const cResult = obj.c(41);
  guild = guild.guild;
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild) {
    const fn = function u() {
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
    const fn2 = function _() {
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
    class S {
      constructor() {
        const obj = CreateChannelModalActionCreatorsDefault;
        obj.open(null, guild.id, null, null);
      }
    }
    cResult[6] = guild.id;
    cResult[7] = S;
  } else {
    class S {
      constructor() {
        const obj = CreateChannelModalActionCreatorsDefault;
        obj.open(null, guild.id, null, null);
      }
    }
  }
  const tmpResult2 = guild(15179);
  const youBarTotalHeight = tmpResult2.useYouBarTotalHeight(16);
  if (cResult[8] !== youBarTotalHeight) {
    class S {
      constructor() {
        const obj = CreateChannelModalActionCreatorsDefault;
        obj.open(null, guild.id, null, null);
      }
    }
    tmp14[0] = youBarTotalHeight;
    cResult[8] = youBarTotalHeight;
    cResult[9] = tmp14;
  } else {
    class S {
      constructor() {
        const obj = CreateChannelModalActionCreatorsDefault;
        obj.open(null, guild.id, null, null);
      }
    }
  }
  if (cResult[10] === tmp4.wrapper) {
    class S {
      constructor() {
        const obj = CreateChannelModalActionCreatorsDefault;
        obj.open(null, guild.id, null, null);
      }
    }
    if (cResult[13] === canCustomizeGuild) {
      class S {
        constructor() {
          const obj = CreateChannelModalActionCreatorsDefault;
          obj.open(null, guild.id, null, null);
        }
      }
    }
    let tmp16 = canCustomizeGuild;
    if (tmp16) {
      class S {
        constructor() {
          const obj = CreateChannelModalActionCreatorsDefault;
          obj.open(null, guild.id, null, null);
        }
      }
      const obj2 = { style: tmp4.personalizeButtonWrapper, children: closure_8(RowButton, obj3) };
      obj3 = { icon: closure_8(Icon, obj4), label: intl.string(guild(1126).t["Yhi9/N"]), onPress: tmp10 };
      RowButton = tmp(8557).RowButton;
      obj4 = { source: AssetRegistryDefault, disableColor: true };
      Icon = tmp(1200).Icon;
      intl = tmp(1126).intl;
      tmp16 = closure_8(closure_4, obj2);
    }
    cResult[13] = canCustomizeGuild;
    cResult[14] = tmp10;
    cResult[15] = tmp4.personalizeButtonWrapper;
    cResult[16] = tmp16;
  }
  const items2 = [tmp4.wrapper, tmp13];
  cResult[10] = tmp4.wrapper;
  cResult[11] = tmp13;
  cResult[12] = items2;
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
  const tmp = closure_10();
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
  const obj2 = guild(15179);
  items4[1] = { paddingBottom: obj2.useYouBarTotalHeight(16) };
  ({ paddingBottom: obj2.useYouBarTotalHeight(16) });
  if (canCustomizeGuild) {
    const obj5 = { style: tmp.personalizeButtonWrapper, children: closure_8(RowButton, obj6) };
    obj6 = { icon: closure_8(Icon, obj7), label: intl.string(guild(1126).t["Yhi9/N"]), onPress: callback };
    RowButton = tmp2(8557).RowButton;
    obj7 = { source: AssetRegistryDefault, disableColor: true };
    Icon = tmp2(1200).Icon;
    intl = tmp2(1126).intl;
    canCustomizeGuild = closure_8(tmp8, obj5);
  }
  items5 = [canCustomizeGuild, ];
  const obj8 = { style: tmp.content, children: items6 };
  items6 = [, , , ];
  const obj9 = { source: AssetRegistryDefault2 };
  items6[0] = closure_8(closure_5, obj9);
  const obj10 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: items7, children: intl2.string(guild(1126).t.o4s29v) };
  items7 = [, ];
  ({ text: arr8[0], headerText: arr8[1] } = tmp);
  const Text = tmp2(5086).Text;
  intl2 = tmp2(1126).intl;
  items6[1] = closure_8(Text, obj10);
  const obj11 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: intl3.string(guild(1126).t.iypvFu) };
  const Text2 = tmp2(5086).Text;
  intl3 = tmp2(1126).intl;
  items6[2] = closure_8(Text2, obj11);
  if (canCreateChannel) {
    const obj12 = { style: tmp.buttonWrapper, children: closure_8(BaseTextButton, obj13) };
    obj13 = { shrink: true, size: "md", pillStyle: tmp.buttonPill, text: intl4.string(guild(1126).t["63PyJQ"]), onPress: callback1 };
    BaseTextButton = tmp2(5376).BaseTextButton;
    intl4 = tmp2(1126).intl;
    canCreateChannel = tmp11(tmp8, obj12);
  }
  items6[3] = canCreateChannel;
  items5[1] = closure_9(closure_4, obj8);
  return closure_9(closure_4, obj3);
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/empty_states/ChannelsEmpty.tsx");

export default memoResult;
