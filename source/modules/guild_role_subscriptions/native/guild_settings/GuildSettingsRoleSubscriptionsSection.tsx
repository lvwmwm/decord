// Module ID: 16262
// Function ID: 126249
// Name: HasCreatedListingsSection
// Dependencies: [31, 1391, 1849, 653, 33, 566, 5501, 1212, 5165, 16263, 16264, 16265, 16266, 5641, 2]
// Exports: default

// Module 16262 (HasCreatedListingsSection)
import "result";
import { isGuildOwner } from "isGuildOwner";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function HasCreatedListingsSection(arg0) {
  let importDefault;
  let require;
  ({ guild: require, pushScreen: importDefault } = arg0);
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  let stateFromStores = obj.useStateFromStores(items, () => outer1_3(closure_0, outer1_4.getCurrentUser()));
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["KzCF/6"]);
  obj.hasIcons = true;
  obj = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl2.string(require(1212) /* getSystemLocale */.t["/CfKoD"]);
  obj.arrow = true;
  const obj1 = { source: importDefault(16263) };
  obj.icon = callback(require(5165) /* TableRowInner */.TableRow.Icon, obj1);
  obj.onPress = function onPress() {
    return callback(outer1_6.ROLE_SUBSCRIPTIONS_BASIC);
  };
  const items1 = [callback(require(5165) /* TableRowInner */.TableRow, obj, "guild-role-subscriptions-basic"), , , ];
  const obj2 = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj2.label = intl3.string(require(1212) /* getSystemLocale */.t.pXbGYc);
  obj2.arrow = true;
  const obj3 = { source: importDefault(16264) };
  obj2.icon = callback(require(5165) /* TableRowInner */.TableRow.Icon, obj3);
  obj2.onPress = function onPress() {
    return callback(outer1_6.ROLE_SUBSCRIPTIONS_TIERS);
  };
  items1[1] = callback(require(5165) /* TableRowInner */.TableRow, obj2, "guild-role-subscriptions-tiers");
  if (stateFromStores) {
    const obj4 = {};
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj4.label = intl4.string(require(1212) /* getSystemLocale */.t.p2Rsdl);
    obj4.arrow = true;
    const obj5 = { source: importDefault(16265) };
    obj4.icon = callback(require(5165) /* TableRowInner */.TableRow.Icon, obj5);
    obj4.onPress = function onPress() {
      return callback(outer1_6.ROLE_SUBSCRIPTIONS_PAYMENTS, { guildId: id.id });
    };
    stateFromStores = callback(require(5165) /* TableRowInner */.TableRow, obj4, "guild-role-subscriptions-payments");
  }
  items1[2] = stateFromStores;
  const obj6 = {};
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj6.label = intl5.string(require(1212) /* getSystemLocale */.t.C5Dbwn);
  obj6.arrow = true;
  const obj7 = { source: importDefault(16266) };
  obj6.icon = callback(require(5165) /* TableRowInner */.TableRow.Icon, obj7);
  obj6.onPress = function onPress() {
    return callback(outer1_6.ROLE_SUBSCRIPTIONS_EMOJIS);
  };
  items1[3] = callback(require(5165) /* TableRowInner */.TableRow, obj6, "guild-role-subscriptions-emojis");
  obj.children = items1;
  return closure_8(require(5501) /* TableRowGroupTitle */.TableRowGroup, obj);
}
({ GuildFeatures: closure_5, GuildSettingsSections: closure_6 } = ME);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsSection.tsx");

export default function GuildSettingsRoleSubscriptionsSection(guild) {
  guild = guild.guild;
  let obj = require(5641) /* canSeeGuildRoleSubscriptionSettingsContent */;
  let tmp = null;
  if (obj.useCanSeeGuildRoleSubscriptionSettings(guild)) {
    const features = guild.features;
    tmp = null;
    if (features.has(constants.ROLE_SUBSCRIPTIONS_ENABLED)) {
      obj = { pushScreen: guild.pushScreen, guild };
      tmp = callback(HasCreatedListingsSection, obj);
    }
  }
  return tmp;
};
