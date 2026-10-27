// Module ID: 18998
// Function ID: 18999
// Name: GuildSettingsRoleSubscriptionsSection
// Dependencies: [19, 4841, 1392, 1087, 21, 558, 576, 504, 1128, 6903, 5686, 11004, 18999, 16737, 6987, 7360, 2]

// Module 18998 (GuildSettingsRoleSubscriptionsSection)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import intl6 from "intl" /* 1128 */;
import GuildRecord from "GuildRecord" /* 4841 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5686 */;
import TableRow5 from "TableRow" /* 6903 */;
import TableRowGroup2 from "TableRowGroup" /* 6987 */;
import GuildRoleSubscriptionSettingUtils from "GuildRoleSubscriptionSettingUtils" /* 7360 */;
import TagsIcon from "TagsIcon" /* 11004 */;
import EmojiMoneyMouthFaceIcon from "EmojiMoneyMouthFaceIcon" /* 16737 */;
import WalletIcon from "WalletIcon" /* 18999 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1392 */;
import Constants from "Constants" /* 1087 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const isGuildOwner = GuildRecord.isGuildOwner;
({ GuildFeatures: closure_4, GuildSettingsSections: hasOwnProperty } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function HasCreatedListingsSection(guild) {
  let Icon3;
  let first;
  let intl4;
  let items1;
  let obj10;
  let pushScreen;
  let tmp10;
  let tmp12;
  let tmp15;
  let tmp18;
  let tmp20;
  let tmp23;
  let tmp6;
  let tmp8;
  let obj = guild(pushScreen[6]);
  const cResult = obj.c(25);
  guild = guild.guild;
  pushScreen = guild.pushScreen;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild) {
    const fn = function c() {
      return isGuildOwner(guild, UserStore.getCurrentUser());
    };
    cResult[1] = guild;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = guild(pushScreen[7]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[8]).intl;
    const stringResult = intl.string(guild(pushScreen[8]).t["KzCF/6"]);
    cResult[3] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(tmp2[8]).intl;
    const stringResult1 = intl2.string(guild(pushScreen[8]).t["/CfKoD"]);
    cResult[4] = stringResult1;
    tmp10 = stringResult1;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { IconComponent: guild(pushScreen[10]).CircleInformationIcon };
    const Icon = tmp(tmp2[9]).TableRow.Icon;
    const tmp14 = closure_6(Icon, obj2);
    cResult[5] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] !== pushScreen) {
    const obj3 = {
      label: tmp10,
      arrow: true,
      icon: tmp12,
      onPress() {
          return pushScreen(hasOwnProperty.ROLE_SUBSCRIPTIONS_BASIC);
        }
    };
    const tmp17 = closure_6(guild(pushScreen[9]).TableRow, obj3, "guild-role-subscriptions-basic");
    cResult[6] = pushScreen;
    cResult[7] = tmp17;
    tmp15 = tmp17;
  } else {
    tmp15 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(tmp2[8]).intl;
    const stringResult2 = intl3.string(guild(pushScreen[8]).t.pXbGYc);
    cResult[8] = stringResult2;
    tmp18 = stringResult2;
  } else {
    tmp18 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { IconComponent: guild(pushScreen[11]).TagsIcon };
    const Icon2 = tmp(tmp2[9]).TableRow.Icon;
    const tmp22 = closure_6(Icon2, obj4);
    cResult[9] = tmp22;
    tmp20 = tmp22;
  } else {
    tmp20 = cResult[9];
  }
  if (cResult[10] !== pushScreen) {
    const obj5 = {
      label: tmp18,
      arrow: true,
      icon: tmp20,
      onPress() {
          return pushScreen(hasOwnProperty.ROLE_SUBSCRIPTIONS_TIERS);
        }
    };
    const tmp25 = closure_6(guild(pushScreen[9]).TableRow, obj5, "guild-role-subscriptions-tiers");
    cResult[10] = pushScreen;
    cResult[11] = tmp25;
    tmp23 = tmp25;
  } else {
    tmp23 = cResult[11];
  }
  if (cResult[12] === guild) {
    if (cResult[13] === pushScreen) {
      let tmp26;
      let tmp29;
      let tmp31;
      let tmp34;
      if (cResult[14] === stateFromStores) {
        tmp26 = cResult[15];
      }
      const _Symbol = Symbol;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = tmp(tmp2[8]).intl;
        const stringResult3 = intl5.string(guild(pushScreen[8]).t.C5Dbwn);
        cResult[16] = stringResult3;
        tmp29 = stringResult3;
      } else {
        tmp29 = cResult[16];
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { IconComponent: guild(pushScreen[13]).EmojiMoneyMouthFaceIcon };
        const Icon4 = tmp(tmp2[9]).TableRow.Icon;
        const tmp33 = closure_6(Icon4, obj6);
        cResult[17] = tmp33;
        tmp31 = tmp33;
      } else {
        tmp31 = cResult[17];
      }
      if (cResult[18] !== pushScreen) {
        const obj7 = {
          label: tmp29,
          arrow: true,
          icon: tmp31,
          onPress() {
                  return pushScreen(hasOwnProperty.ROLE_SUBSCRIPTIONS_EMOJIS);
                }
        };
        const tmp36 = closure_6(guild(pushScreen[9]).TableRow, obj7, "guild-role-subscriptions-emojis");
        cResult[18] = pushScreen;
        cResult[19] = tmp36;
        tmp34 = tmp36;
      } else {
        tmp34 = cResult[19];
      }
      if (cResult[20] === tmp26) {
        if (cResult[21] === tmp34) {
          if (cResult[22] === tmp15) {
            let tmp37;
            if (cResult[23] === tmp23) {
              tmp37 = cResult[24];
            }
            return tmp37;
          }
        }
      }
      const obj8 = { title: tmp8, hasIcons: true, children: items1 };
      items1 = [tmp15, tmp23, tmp26, tmp34];
      const tmp39 = closure_7(guild(pushScreen[14]).TableRowGroup, obj8);
      cResult[20] = tmp26;
      cResult[21] = tmp34;
      cResult[22] = tmp15;
      cResult[23] = tmp23;
      cResult[24] = tmp39;
      tmp37 = tmp39;
    }
  }
  let tmp27 = stateFromStores;
  if (tmp27) {
    const obj9 = {
      label: intl4.string(guild(pushScreen[8]).t.p2Rsdl),
      arrow: true,
      icon: closure_6(Icon3, obj10),
      onPress() {
          const obj = { guildId: guild.id };
          return pushScreen(hasOwnProperty.ROLE_SUBSCRIPTIONS_PAYMENTS, obj);
        }
    };
    const TableRow = tmp(tmp2[9]).TableRow;
    intl4 = tmp(tmp2[8]).intl;
    obj10 = { IconComponent: guild(pushScreen[12]).WalletIcon };
    Icon3 = tmp(tmp2[9]).TableRow.Icon;
    tmp27 = closure_6(TableRow, obj9, "guild-role-subscriptions-payments");
  }
  cResult[12] = guild;
  cResult[13] = pushScreen;
  cResult[14] = stateFromStores;
  cResult[15] = tmp27;
  tmp26 = tmp27;
}) : (function HasCreatedListingsSection(arg0) {
  let Icon;
  let Icon2;
  let Icon3;
  let Icon4;
  let id;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let obj10;
  let obj4;
  let obj6;
  let obj8;
  ({ guild: require, pushScreen: dependencyMap } = arg0);
  let obj = get_initialized;
  const items = [UserStore];
  let stateFromStores = obj.useStateFromStores(items, () => isGuildOwner(require, UserStore.getCurrentUser()));
  const obj2 = { title: intl.string(intl6.t["KzCF/6"]), hasIcons: true, children: items1 };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  intl = intl6.intl;
  const obj3 = {
    label: intl2.string(intl6.t["/CfKoD"]),
    arrow: true,
    icon: closure_6(Icon, obj4),
    onPress() {
      return dependencyMap(hasOwnProperty.ROLE_SUBSCRIPTIONS_BASIC);
    }
  };
  const TableRow = TableRow5.TableRow;
  intl2 = intl6.intl;
  obj4 = { IconComponent: CircleInformationIcon.CircleInformationIcon };
  Icon = TableRow5.TableRow.Icon;
  items1 = [closure_6(TableRow, obj3, "guild-role-subscriptions-basic"), , , ];
  const obj5 = {
    label: intl3.string(intl6.t.pXbGYc),
    arrow: true,
    icon: closure_6(Icon2, obj6),
    onPress() {
      return dependencyMap(hasOwnProperty.ROLE_SUBSCRIPTIONS_TIERS);
    }
  };
  const TableRow2 = TableRow5.TableRow;
  intl3 = intl6.intl;
  obj6 = { IconComponent: TagsIcon.TagsIcon };
  Icon2 = TableRow5.TableRow.Icon;
  items1[1] = closure_6(TableRow2, obj5, "guild-role-subscriptions-tiers");
  const tmp4 = closure_7;
  if (stateFromStores) {
    const obj7 = {
      label: intl4.string(intl6.t.p2Rsdl),
      arrow: true,
      icon: closure_6(Icon3, obj8),
      onPress() {
          const obj = { guildId: require.id };
          return dependencyMap(hasOwnProperty.ROLE_SUBSCRIPTIONS_PAYMENTS, obj);
        }
    };
    const TableRow3 = tmp(6903).TableRow;
    intl4 = tmp(1128).intl;
    obj8 = { IconComponent: WalletIcon.WalletIcon };
    Icon3 = tmp(6903).TableRow.Icon;
    stateFromStores = tmp5(TableRow3, obj7, "guild-role-subscriptions-payments");
  }
  items1[2] = stateFromStores;
  const obj9 = {
    label: intl5.string(intl6.t.C5Dbwn),
    arrow: true,
    icon: closure_6(Icon4, obj10),
    onPress() {
      return dependencyMap(hasOwnProperty.ROLE_SUBSCRIPTIONS_EMOJIS);
    }
  };
  const TableRow4 = tmp(6903).TableRow;
  intl5 = tmp(1128).intl;
  obj10 = { IconComponent: EmojiMoneyMouthFaceIcon.EmojiMoneyMouthFaceIcon };
  Icon4 = tmp(6903).TableRow.Icon;
  items1[3] = closure_6(TableRow4, obj9, "guild-role-subscriptions-emojis");
  return tmp4(TableRowGroup, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsRoleSubscriptionsSection(arg0) {
  let guild;
  let pushScreen;
  const obj = react2;
  const cResult = obj.c(3);
  ({ guild, pushScreen } = arg0);
  let tmp2 = null;
  const obj2 = GuildRoleSubscriptionSettingUtils;
  if (obj2.useCanSeeGuildRoleSubscriptionSettings(guild)) {
    const features = guild.features;
    tmp2 = null;
    if (features.has(constants.ROLE_SUBSCRIPTIONS_ENABLED)) {
      if (cResult[0] === guild) {
        let tmp4;
        if (cResult[1] === pushScreen) {
          tmp4 = cResult[2];
        }
        tmp2 = tmp4;
      }
      const obj3 = { pushScreen, guild };
      const tmp7 = metroRequire(closure_8, obj3);
      cResult[0] = guild;
      cResult[1] = pushScreen;
      cResult[2] = tmp7;
      tmp4 = tmp7;
    }
  }
  return tmp2;
}) : (function GuildSettingsRoleSubscriptionsSection(guild) {
  guild = guild.guild;
  const pushScreen = guild.pushScreen;
  let tmp = null;
  const obj = GuildRoleSubscriptionSettingUtils;
  if (obj.useCanSeeGuildRoleSubscriptionSettings(guild)) {
    const features = guild.features;
    tmp = null;
    if (features.has(constants.ROLE_SUBSCRIPTIONS_ENABLED)) {
      const obj2 = { pushScreen, guild };
      tmp = metroRequire(closure_8, obj2);
    }
  }
  return tmp;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsSection.tsx");

export default tmp5;
