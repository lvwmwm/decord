// Module ID: 16160
// Function ID: 124549
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: default

// Module 16160 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function GraceOption(option) {
  const arg1 = iter;
  const importDefault = option.onPress;
  return callback3(arg1(dependencyMap[14]).TableRadioRow, {
    value: option.option.value,
    label: option.option.label,
    legacyCompat_onPress() {
      return onPress(iter.value);
    },
    legacyCompat_selected: option.integration.expire_grace_period === option.option.value
  });
}
function ForceSyncIcon(isSyncing) {
  if (isSyncing.isSyncing) {
    let tmp2Result = tmp2(closure_9, { font: null, dx: null });
  } else {
    let obj = { accessibilityRole: "button" };
    const intl = arg1(dependencyMap[11]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[11]).t.+Josox);
    obj.onPress = tmp;
    obj = { source: importDefault(dependencyMap[17]) };
    obj.children = callback3(arg1(dependencyMap[16]).TableRow.Icon, obj);
    tmp2Result = tmp2(arg1(dependencyMap[15]).PressableOpacity, obj);
  }
  return tmp2Result;
}
function TwitchEmoticonsRow(integration) {
  integration = integration.integration;
  let obj = {};
  const intl = arg1(dependencyMap[11]).intl;
  obj.helperText = intl.string(arg1(dependencyMap[11]).t.7r4OKg);
  obj.hasIcons = false;
  obj = {};
  const intl2 = arg1(dependencyMap[11]).intl;
  obj.label = intl2.string(arg1(dependencyMap[11]).t.bZBLBs);
  obj.value = Boolean(integration.enable_emoticons);
  obj.onValueChange = integration.onPress;
  obj.disabled = integration.syncing;
  obj.children = callback3(arg1(dependencyMap[19]).TableSwitchRow, obj);
  return callback3(arg1(dependencyMap[18]).TableRowGroup, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const importAllResult = importAll(dependencyMap[5]);
({ Image: closure_8, ActivityIndicator: closure_9 } = arg1(dependencyMap[6]));
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = arg1(dependencyMap[9]));
let obj = arg1(dependencyMap[12]);
obj = { integrationLabel: { fontSize: 24 }, integrationIcon: { <string:1549954009>: -12512813, <string:67064148>: 1912603216, <string:2018617953>: 660 }, forceSyncIcon: { marginLeft: 10 }, value: { textAlign: "right" } };
obj = { paddingHorizontal: importDefault(dependencyMap[13]).modules.mobile.TABLE_ROW_PADDING };
obj.stackPadding = obj;
let closure_15 = obj.createLegacyClassComponentStyles(obj);
const tmp5 = (PureComponent) => {
  class GuildSettingsModalIntegrationSettings {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, GuildSettingsModalIntegrationSettings);
      items1 = [...items];
      obj = closure_6(GuildSettingsModalIntegrationSettings);
      tmp2 = closure_5;
      if (closure_17()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      GuildSettingsModalIntegrationSettings = tmp2Result;
      tmp2Result.handleExpireBehaviorChange = (expire_behavior) => {
        let guildId;
        let integration;
        ({ guildId, integration } = tmp2Result.props);
        callback(closure_2[20]).updateIntegration(guildId, integration.id, expire_behavior, integration.expire_grace_period, integration.enable_emoticons);
      };
      tmp2Result.handleExpireGracePeriodChange = (expire_grace_period) => {
        let guildId;
        let integration;
        ({ guildId, integration } = tmp2Result.props);
        callback(closure_2[20]).updateIntegration(guildId, integration.id, integration.expire_behavior, expire_grace_period, integration.enable_emoticons);
      };
      tmp2Result.handleToggleEmotes = (enable_emoticons) => {
        let guildId;
        let integration;
        ({ guildId, integration } = tmp2Result.props);
        callback(closure_2[20]).updateIntegration(guildId, integration.id, integration.expire_behavior, integration.expire_grace_period, enable_emoticons);
      };
      tmp2Result.handleSync = () => {
        let guildId;
        let integration;
        ({ guildId, integration } = tmp2Result.props);
        callback(closure_2[20]).syncIntegration(guildId, integration.id);
      };
      return tmp2Result;
    }
  }
  const arg1 = GuildSettingsModalIntegrationSettings;
  callback2(GuildSettingsModalIntegrationSettings, PureComponent);
  const items = [
    {
      key: "render",
      value() {
        const self = this;
        const GuildSettingsModalIntegrationSettings = this;
        const iter = callback5(this.context);
        const props = this.props;
        const integration = props.integration;
        const role_id = integration.role_id;
        let tmp = null;
        if (null != role_id) {
          tmp = props.guildRoles[role_id];
        }
        if (null != tmp) {
          let obj = {};
          const intl = GuildSettingsModalIntegrationSettings(closure_2[11]).intl;
          obj.label = intl.string(GuildSettingsModalIntegrationSettings(closure_2[11]).t.eBtNBa);
          obj = { delete: 14789019781002023000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, dispatch: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000254639494975, raw: -120145600412238510000000000000000000000000000000000000000000000000000000000, style: iter.value, children: tmp.name };
          obj.trailing = callback3(GuildSettingsModalIntegrationSettings(closure_2[21]).Text, obj);
          const tmp2 = callback3(GuildSettingsModalIntegrationSettings(closure_2[16]).TableRow, obj);
        }
        if ("youtube" === integration.type) {
          const account = integration.account;
          let name;
          if (null != account) {
            name = account.name;
          }
          const intl2 = GuildSettingsModalIntegrationSettings(closure_2[11]).intl;
          let stringResult = intl2.string(GuildSettingsModalIntegrationSettings(closure_2[11]).t.A5MiqO);
          let RdUTrl = GuildSettingsModalIntegrationSettings(closure_2[11]).t.7lNtce;
          let combined = name;
        } else {
          const _HermesInternal = HermesInternal;
          combined = "twitch.tv/" + integration.name;
          const intl9 = GuildSettingsModalIntegrationSettings(closure_2[11]).intl;
          stringResult = intl9.string(GuildSettingsModalIntegrationSettings(closure_2[11]).t.S/WCrG);
          RdUTrl = GuildSettingsModalIntegrationSettings(closure_2[11]).t.RdUTrl;
          obj = { integration, onPress: self.handleToggleEmotes };
          const tmp12 = callback3(closure_20, obj);
        }
        let obj2 = integration(closure_2[22]);
        const value = obj2.get(integration.type);
        if (null == value) {
          const obj1 = {};
          obj2 = {};
          const obj3 = { flex: 1 };
          obj2.style = obj3;
          let obj4 = { paddingTop: 16 };
          const items = [obj4, self.props.contentContainerStyle];
          obj2.contentContainerStyle = items;
          let obj5 = { style: iter.stackPadding, spacing: integration(closure_2[13]).space.PX_24 };
          const obj6 = { hasIcons: true };
          const obj7 = {};
          let str = integration.user;
          str = undefined;
          if (null != str) {
            str = str.toString();
          }
          obj7.label = str;
          obj7.subLabel = combined;
          obj7.icon = null;
          obj6.children = callback3(GuildSettingsModalIntegrationSettings(closure_2[16]).TableRow, obj7);
          const items1 = [callback3(GuildSettingsModalIntegrationSettings(closure_2[18]).TableRowGroup, obj6), , , , ];
          const obj8 = {};
          const intl3 = GuildSettingsModalIntegrationSettings(closure_2[11]).intl;
          obj8.title = intl3.string(GuildSettingsModalIntegrationSettings(closure_2[11]).t.i17qFc);
          obj8.hasIcons = false;
          const obj9 = {};
          const intl4 = GuildSettingsModalIntegrationSettings(closure_2[11]).intl;
          const obj10 = {};
          const subscriber_count = integration.subscriber_count;
          let str2 = "";
          if (null != subscriber_count) {
            str2 = subscriber_count;
          }
          obj10.subscribers = str2;
          obj9.label = intl4.format(RdUTrl, obj10);
          const intl5 = GuildSettingsModalIntegrationSettings(closure_2[11]).intl;
          const obj11 = {};
          let obj17 = integration(closure_2[27])(integration.synced_at);
          obj11.datetime = obj17.calendar();
          obj9.subLabel = intl5.formatToPlainString(GuildSettingsModalIntegrationSettings(closure_2[11]).t.+42M+u, obj11);
          const obj12 = {};
          const syncing = integration.syncing;
          let tmp37 = null != syncing;
          if (tmp37) {
            tmp37 = syncing;
          }
          obj12.isSyncing = tmp37;
          obj12.onPress = self.handleSync;
          obj9.trailing = callback3(closure_19, obj12);
          const items2 = [callback3(GuildSettingsModalIntegrationSettings(closure_2[16]).TableRow, obj9), tmp2];
          obj8.children = items2;
          items1[1] = callback4(GuildSettingsModalIntegrationSettings(closure_2[18]).TableRowGroup, obj8);
          const obj13 = { title: stringResult, value: integration.expire_behavior, onChange: self.handleExpireBehaviorChange, hasIcons: false };
          const obj14 = { value: GuildSettingsModalIntegrationSettings(closure_2[29]).IntegrationExpireBehaviorTypes.REMOVE_ROLE };
          const intl6 = GuildSettingsModalIntegrationSettings(closure_2[11]).intl;
          obj14.label = intl6.string(GuildSettingsModalIntegrationSettings(closure_2[11]).t.6kpw4i);
          const items3 = [callback3(GuildSettingsModalIntegrationSettings(closure_2[14]).TableRadioRow, obj14), ];
          const obj15 = { value: GuildSettingsModalIntegrationSettings(closure_2[29]).IntegrationExpireBehaviorTypes.KICK };
          const intl7 = GuildSettingsModalIntegrationSettings(closure_2[11]).intl;
          obj15.label = intl7.string(GuildSettingsModalIntegrationSettings(closure_2[11]).t.fQUQIJ);
          items3[1] = callback3(GuildSettingsModalIntegrationSettings(closure_2[14]).TableRadioRow, obj15);
          obj13.children = items3;
          items1[2] = callback4(GuildSettingsModalIntegrationSettings(closure_2[28]).TableRadioGroup, obj13);
          const obj16 = {};
          const intl8 = GuildSettingsModalIntegrationSettings(closure_2[11]).intl;
          obj16.title = intl8.string(GuildSettingsModalIntegrationSettings(closure_2[11]).t.uiXMow);
          obj16.hasIcons = false;
          obj16.children = function getSubGracePeriodOptions() {
            const values = Object.values(self(closure_2[10]).IntegrationExpireGracePeriodTypes);
            const found = values.filter((arg0) => Number.isInteger(arg0));
            return found.map((days) => {
              let obj = { value: days };
              const intl = callback(closure_2[11]).intl;
              obj = { days };
              obj.label = intl.formatToPlainString(callback(closure_2[11]).t.eGjmy5, obj);
              return obj;
            });
          }().map((option) => callback(closure_18, { integration, option, onPress: self.handleExpireGracePeriodChange }, arg1));
          items1[3] = callback3(GuildSettingsModalIntegrationSettings(closure_2[18]).TableRowGroup, obj16);
          items1[4] = tmp12;
          obj5.children = items1;
          obj2.children = callback4(GuildSettingsModalIntegrationSettings(closure_2[26]).Stack, obj5);
          const items4 = [callback3(GuildSettingsModalIntegrationSettings(closure_2[25]).Form, obj2), callback3(GuildSettingsModalIntegrationSettings(closure_2[30]).NavScrim, {})];
          obj1.children = items4;
          return callback4(closure_14, obj1);
        } else {
          obj17 = {};
          obj4 = GuildSettingsModalIntegrationSettings(closure_2[23]);
          obj5 = GuildSettingsModalIntegrationSettings(closure_2[24]);
          const icon = value.icon;
          obj17.source = obj4.makeSource(obj5.isThemeDark(props.theme) ? icon.darkPNG : icon.lightPNG);
          obj17.style = iter.integrationIcon;
          callback3(closure_8, obj17);
          const tmp14 = callback3;
          const tmp15 = closure_8;
        }
      }
    }
  ];
  return callback(GuildSettingsModalIntegrationSettings, items);
}(importAllResult.PureComponent);
tmp5.contextType = arg1(dependencyMap[31]).ThemeContext;
const tmp4 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[35]).fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationSettings.tsx");

export default function ConnectedGuildSettingsModalIntegrationSettings(arg0) {
  let contentContainerStyle;
  let integrationId;
  ({ integrationId, contentContainerStyle } = arg0);
  let obj = arg1(dependencyMap[32]);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => props.getProps());
  const guild = stateFromStores.guild;
  const arg1 = guild;
  const integrations = stateFromStores.integrations;
  const items1 = [closure_10];
  const stateFromStores1 = arg1(dependencyMap[32]).useStateFromStores(items1, () => {
    let rolesSnapshot;
    if (null != guild) {
      rolesSnapshot = rolesSnapshot.getRolesSnapshot(guild.id);
    }
    return rolesSnapshot;
  });
  let found;
  const obj2 = arg1(dependencyMap[32]);
  if (null != integrations) {
    found = integrations.filter((type) => {
      const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = guild(closure_2[34]).SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS;
      return SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS.includes(type.type);
    });
  }
  let tmp6 = null;
  if (null != guild) {
    tmp6 = null;
    if (null != tmp5) {
      tmp6 = null;
      if (null != stateFromStores1) {
        obj = { guildId: guild.id, guildRoles: stateFromStores1, integration: tmp5, theme: tmp3, contentContainerStyle };
        tmp6 = callback3(tmp5, obj);
      }
    }
  }
  return tmp6;
};
