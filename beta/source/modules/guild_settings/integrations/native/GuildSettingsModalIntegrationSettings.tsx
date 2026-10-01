// Module ID: 17396
// Function ID: 17397
// Name: GuildSettingsModalIntegrationSettings
// Dependencies: [19, 17, 2102, 9049, 21, 17397, 1115, 4836, 576, 6000, 5435, 5917, 17398, 5999, 6621, 4540, 4832, 5595, 1397, 4685, 8053, 5279, 4421, 5997, 17399, 6461, 9048, 504, 4767, 17361, 2]
// Exports: default

// Module 17396 (GuildSettingsModalIntegrationSettings)
import nativeDefault from "native" /* 576 */;
import intl10 from "intl" /* 1115 */;
import native from "native" /* 4540 */;
import useThemeDefault from "useTheme" /* 4767 */;
import Pressables from "Pressables" /* 5435 */;
import TableRow4 from "TableRow" /* 5917 */;
import TableRowGroup4 from "TableRowGroup" /* 5999 */;
import TableRadioRow3 from "TableRadioRow" /* 6000 */;
import TableSwitchRow2 from "TableSwitchRow" /* 6621 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9048 */;
import AssetRegistryDefault from "AssetRegistry" /* 17398 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9049 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let integrations;

let c3;
let c9;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
function GraceOption(option) {
  const iter = option.option;
  const onPress = option.onPress;
  const obj = {
    value: iter.value,
    label: iter.label,
    legacyCompat_onPress() {
      return onPress(iter.value);
    },
    legacyCompat_selected: option.integration.expire_grace_period === iter.value
  };
  return metroImportDefault(TableRadioRow3.TableRadioRow, obj);
}
function ForceSyncIcon(isSyncing) {
  let Icon;
  let intl;
  let obj2;
  let tmp2Result;
  if (isSyncing.isSyncing) {
    tmp2Result = tmp2(React3, { animating: true, size: "small" });
  } else {
    const obj = { accessibilityRole: "button", accessibilityLabel: intl.string(intl10.t["+Josox"]), onPress: tmp, children: metroImportDefault(Icon, obj2) };
    const PressableOpacity = Pressables.PressableOpacity;
    intl = intl10.intl;
    obj2 = { source: AssetRegistryDefault };
    Icon = TableRow4.TableRow.Icon;
    tmp2Result = tmp2(PressableOpacity, obj);
  }
  return tmp2Result;
}
function TwitchEmoticonsRow(integration) {
  let TableSwitchRow;
  let intl;
  let intl2;
  let obj2;
  integration = integration.integration;
  const onPress = integration.onPress;
  const obj = { helperText: intl.string(intl10.t["7r4OKg"]), hasIcons: false, children: metroImportDefault(TableSwitchRow, obj2) };
  const TableRowGroup = TableRowGroup4.TableRowGroup;
  intl = intl10.intl;
  obj2 = { label: intl2.string(intl10.t.bZBLBs), value: Boolean(integration.enable_emoticons), onValueChange: onPress, disabled: integration.syncing };
  TableSwitchRow = TableSwitchRow2.TableSwitchRow;
  intl2 = intl10.intl;
  return metroImportDefault(TableRowGroup, obj);
}
({ Image: c3, ActivityIndicator: closure_4 } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let obj = { integrationLabel: { fontSize: 24 }, integrationIcon: { width: 48, height: 48, marginRight: 16 }, forceSyncIcon: { marginLeft: 10 }, value: { textAlign: "right" }, stackPadding: obj2 };
obj2 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
const authStore = createStyles.createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class GuildSettingsModalIntegrationSettings extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleExpireBehaviorChange = function handleExpireBehaviorChange(expire_behavior) {
      let guildId;
      let integration;
      ({ guildId, integration } = require.props);
      const obj = GuildSettingsActionCreatorsDefault;
      obj.updateIntegration(guildId, integration.id, expire_behavior, integration.expire_grace_period, integration.enable_emoticons);
    };
    applyArgumentsResult.handleExpireGracePeriodChange = function handleExpireGracePeriodChange(expire_grace_period) {
      let guildId;
      let integration;
      ({ guildId, integration } = require.props);
      const obj = GuildSettingsActionCreatorsDefault;
      obj.updateIntegration(guildId, integration.id, integration.expire_behavior, expire_grace_period, integration.enable_emoticons);
    };
    applyArgumentsResult.handleToggleEmotes = function handleToggleEmotes(enable_emoticons) {
      let guildId;
      let integration;
      ({ guildId, integration } = require.props);
      const obj = GuildSettingsActionCreatorsDefault;
      obj.updateIntegration(guildId, integration.id, integration.expire_behavior, integration.expire_grace_period, enable_emoticons);
    };
    applyArgumentsResult.handleSync = function handleSync() {
      let guildId;
      let integration;
      ({ guildId, integration } = require.props);
      const obj = GuildSettingsActionCreatorsDefault;
      obj.syncIntegration(guildId, integration.id);
    };
    return applyArgumentsResult;
  }
  render() {
    let RdUTrl;
    let Stack;
    let combined;
    let formatToPlainString;
    let intl;
    let intl3;
    let intl6;
    let intl7;
    let intl8;
    let items;
    let items1;
    let items2;
    let items3;
    let items4;
    let obj11;
    let obj12;
    let obj14;
    let obj2;
    let obj7;
    let prop;
    let stringResult;
    let tmp12;
    let tmp13;
    let tmp15;
    let tmp15Result2;
    let tmp27;
    const self = this;
    const iter = closure_10(this.context);
    const props = this.props;
    const integration = props.integration;
    const role_id = integration.role_id;
    let tmp = null;
    const theme = props.theme;
    if (null != role_id) {
      tmp = props.guildRoles[role_id];
    }
    let tmp2;
    if (null != tmp) {
      let obj = { label: intl.string(integration(1115).t.eBtNBa), trailing: closure_7(integration(4832).Text, obj2) };
      const TableRow = integration(5917).TableRow;
      intl = integration(1115).intl;
      obj2 = { style: iter.value, variant: "text-md/medium", color: "text-muted", children: tmp.name };
      tmp2 = closure_7(TableRow, obj);
    }
    if ("youtube" === integration.type) {
      const account = integration.account;
      let name;
      if (account != null) {
        name = account.name;
      }
      const intl2 = integration(1115).intl;
      stringResult = intl2.string(integration(1115).t.A5MiqO);
      RdUTrl = integration(1115).t["7lNtce"];
      combined = name;
      tmp12 = integration;
      tmp15 = integration;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "twitch.tv/" + integration.name;
      const intl9 = integration(1115).intl;
      stringResult = intl9.string(integration(1115).t["S/WCrG"]);
      RdUTrl = integration(1115).t.RdUTrl;
      tmp12 = integration;
      tmp15 = integration;
      const obj4 = { integration, onPress: self.handleToggleEmotes };
      tmp13 = closure_7(TwitchEmoticonsRow, obj4);
    }
    const obj3 = self(5595);
    const value = obj3.get(integration.type);
    let tmp19Result = null;
    if (null != value) {
      const makeSource = tmp15(1397).makeSource;
      tmp15(1397);
      const icon = value.icon;
      const obj5 = { source: makeSource(tmp15Result2.isThemeDark(theme) ? icon.darkPNG : icon.lightPNG), style: iter.integrationIcon };
      tmp15Result2 = tmp15(4685);
      tmp19Result = closure_7(closure_3, obj5);
    }
    const values = Object.values(tmp12(17397).IntegrationExpireGracePeriodTypes);
    const found = values.filter((item) => Number.isInteger(item));
    const mapped = found.map((value) => {
      let intl;
      const obj = { value, label: intl.formatToPlainString(integration(dependencyMap[6]).t.eGjmy5, obj2) };
      intl = integration(dependencyMap[6]).intl;
      return obj;
    });
    const obj6 = { style: { flex: 1 }, contentContainerStyle: items, children: closure_8(Stack, obj7) };
    items = [{ paddingTop: 16 }, self.props.contentContainerStyle];
    const Form = tmp15(8053).Form;
    obj7 = { style: iter.stackPadding, spacing: self(576).space.PX_24, children: items1 };
    Stack = tmp15(5279).Stack;
    const TableRowGroup = tmp15(5999).TableRowGroup;
    let str1;
    const TableRow2 = tmp15(5917).TableRow;
    const tmp23 = closure_9;
    if (integration.user != null) {
      str1 = str.toString();
    }
    items1 = [, , , , ];
    const obj8 = { hasIcons: true, children: closure_7(TableRow2, { label: str1, subLabel: combined, icon: tmp19Result }) };
    items1[0] = closure_7(TableRowGroup, obj8);
    const obj9 = { title: intl3.string(tmp15(1115).t.i17qFc), hasIcons: false, children: items2 };
    const TableRowGroup2 = tmp15(5999).TableRowGroup;
    intl3 = tmp15(1115).intl;
    const TableRow3 = tmp15(5917).TableRow;
    const intl4 = tmp15(1115).intl;
    let str2 = integration.subscriber_count;
    const format = intl4.format;
    if (str2 == null) {
      str2 = "";
    }
    const obj10 = { label: format(RdUTrl, { subscribers: str2 }), subLabel: formatToPlainString(prop, obj11), trailing: closure_7(tmp27, obj14) };
    const intl5 = tmp15(1115).intl;
    formatToPlainString = intl5.formatToPlainString;
    obj11 = { datetime: obj12.calendar() };
    prop = tmp15(1115).t["+42M+u"];
    let flag = integration.syncing;
    obj12 = self(4421)(integration.synced_at);
    tmp27 = ForceSyncIcon;
    if (flag == null) {
      flag = false;
    }
    const obj13 = { children: items4 };
    obj14 = { isSyncing: flag, onPress: self.handleSync };
    items2 = [closure_7(TableRow3, obj10), tmp2];
    items1[1] = closure_8(TableRowGroup2, obj9);
    const obj15 = { title: stringResult, value: integration.expire_behavior, onChange: self.handleExpireBehaviorChange, hasIcons: false, children: items3 };
    const TableRadioGroup = tmp15(5997).TableRadioGroup;
    const obj16 = { value: tmp15(17399).IntegrationExpireBehaviorTypes.REMOVE_ROLE, label: intl6.string(tmp15(1115).t["6kpw4i"]) };
    const TableRadioRow = tmp15(6000).TableRadioRow;
    intl6 = tmp15(1115).intl;
    items3 = [closure_7(TableRadioRow, obj16), ];
    const obj17 = { value: tmp15(17399).IntegrationExpireBehaviorTypes.KICK, label: intl7.string(tmp15(1115).t.fQUQIJ) };
    const TableRadioRow2 = tmp15(6000).TableRadioRow;
    intl7 = tmp15(1115).intl;
    items3[1] = closure_7(TableRadioRow2, obj17);
    items1[2] = closure_8(TableRadioGroup, obj15);
    const obj18 = {
      title: intl8.string(tmp15(1115).t.uiXMow),
      hasIcons: false,
      children: mapped.map((option, index) => {
        const obj = { integration, option, onPress: self.handleExpireGracePeriodChange };
        return metroImportDefault(GraceOption, obj, index);
      })
    };
    const TableRowGroup3 = tmp15(5999).TableRowGroup;
    intl8 = tmp15(1115).intl;
    items1[3] = closure_7(TableRowGroup3, obj18);
    items1[4] = tmp13;
    items4 = [closure_7(Form, obj6), closure_7(tmp15(6461).NavScrim, {})];
    return closure_8(tmp23, obj13);
  }
}
const prototype = GuildSettingsModalIntegrationSettings.prototype;
GuildSettingsModalIntegrationSettings.contextType = native.ThemeContext;
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationSettings.tsx");

export default function ConnectedGuildSettingsModalIntegrationSettings(arg0) {
  let contentContainerStyle;
  let integrationId;
  let props;
  let guild;
  ({ integrationId, contentContainerStyle } = arg0);
  const items = [GuildSettingsStore];
  const obj = guild(504);
  const stateFromStores = obj.useStateFromStores(items, () => props.getProps());
  guild = stateFromStores.guild;
  integrations = stateFromStores.integrations;
  const items1 = [GuildRoleStore];
  const obj2 = guild(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let rolesSnapshot;
    if (null != guild) {
      rolesSnapshot = GuildRoleStore.getRolesSnapshot(tmp.id);
    }
    return rolesSnapshot;
  });
  let found;
  const tmp3 = useThemeDefault();
  if (integrations != null) {
    found = integrations.filter((type) => {
      const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = guild(dependencyMap[29]).SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS;
      return SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS.includes(type.type);
    });
  }
  let tmp6 = null;
  if (null != guild) {
    tmp6 = null;
    if (null != tmp5) {
      tmp6 = null;
      if (null != stateFromStores1) {
        const obj3 = { guildId: guild.id, guildRoles: stateFromStores1, integration: tmp5, theme: tmp3, contentContainerStyle };
        tmp6 = closure_7(GuildSettingsModalIntegrationSettings, obj3);
      }
    }
  }
  return tmp6;
};
