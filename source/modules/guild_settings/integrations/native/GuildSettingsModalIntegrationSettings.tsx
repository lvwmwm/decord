// Module ID: 16332
// Function ID: 127088
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 1910, 8483, 33, 16333, 1212, 4130, 689, 7653, 4660, 5165, 16334, 5501, 5502, 8482, 4126, 4814, 1392, 3976, 7636, 4541, 3712, 7654, 16335, 5448, 3842, 566, 4066, 16297, 2]
// Exports: default

// Module 16332 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import closure_4 from "_createForOfIteratorHelperLoose";
import PressableBase from "PressableBase";
import registerAsset from "registerAsset";
import TableRowGroupTitle from "TableRowGroupTitle";
import get_ActivityIndicator from "t";
import closure_10 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "useTheme";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "ManaContext";

let closure_12;
let closure_13;
let closure_14;
let closure_8;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function GraceOption(option) {
  const iter = option.option;
  const onPress = option.onPress;
  return callback3(iter(7653).TableRadioRow, {
    value: iter.value,
    label: iter.label,
    legacyCompat_onPress() {
      return onPress(iter.value);
    },
    legacyCompat_selected: option.integration.expire_grace_period === iter.value
  });
}
function ForceSyncIcon(isSyncing) {
  if (isSyncing.isSyncing) {
    let tmp2Result = tmp2(closure_9, { animating: true, size: "small" });
  } else {
    let obj = { accessibilityRole: "button" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t["+Josox"]);
    obj.onPress = tmp;
    obj = { source: importDefault(16334) };
    obj.children = callback3(require(5165) /* TableRowInner */.TableRow.Icon, obj);
    tmp2Result = tmp2(require(4660) /* PressableBase */.PressableOpacity, obj);
  }
  return tmp2Result;
}
function TwitchEmoticonsRow(integration) {
  integration = integration.integration;
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.helperText = intl.string(require(1212) /* getSystemLocale */.t["7r4OKg"]);
  obj.hasIcons = false;
  obj = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl2.string(require(1212) /* getSystemLocale */.t.bZBLBs);
  obj.value = Boolean(integration.enable_emoticons);
  obj.onValueChange = integration.onPress;
  obj.disabled = integration.syncing;
  obj.children = callback3(require(5502) /* TableSwitchRow */.TableSwitchRow, obj);
  return callback3(require(5501) /* TableRowGroupTitle */.TableRowGroup, obj);
}
({ Image: closure_8, ActivityIndicator: closure_9 } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = { integrationLabel: { fontSize: 24 }, integrationIcon: { width: 48, height: 48, marginRight: 16 }, forceSyncIcon: { marginLeft: 10 }, value: { textAlign: "right" } };
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
_createForOfIteratorHelperLoose.stackPadding = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
const tmp5 = ((PureComponent) => {
  class GuildSettingsModalIntegrationSettings {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_3(this, apply);
      items1 = [...items];
      obj = outer1_6(apply);
      tmp2 = outer1_5;
      if (outer1_17()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.handleExpireBehaviorChange = (expire_behavior) => {
        let guildId;
        let integration;
        ({ guildId, integration } = tmp2Result.props);
        outer2_1(outer2_2[20]).updateIntegration(guildId, integration.id, expire_behavior, integration.expire_grace_period, integration.enable_emoticons);
      };
      tmp2Result.handleExpireGracePeriodChange = (expire_grace_period) => {
        let guildId;
        let integration;
        ({ guildId, integration } = tmp2Result.props);
        outer2_1(outer2_2[20]).updateIntegration(guildId, integration.id, integration.expire_behavior, expire_grace_period, integration.enable_emoticons);
      };
      tmp2Result.handleToggleEmotes = (enable_emoticons) => {
        let guildId;
        let integration;
        ({ guildId, integration } = tmp2Result.props);
        outer2_1(outer2_2[20]).updateIntegration(guildId, integration.id, integration.expire_behavior, integration.expire_grace_period, enable_emoticons);
      };
      tmp2Result.handleSync = () => {
        let guildId;
        let integration;
        ({ guildId, integration } = tmp2Result.props);
        outer2_1(outer2_2[20]).syncIntegration(guildId, integration.id);
      };
      return tmp2Result;
    }
  }
  callback2(GuildSettingsModalIntegrationSettings, PureComponent);
  let items = [
    {
      key: "render",
      value() {
        let self = this;
        self = this;
        const iter = outer1_15(this.context);
        const props = this.props;
        const integration = props.integration;
        const role_id = integration.role_id;
        let tmp = null;
        if (null != role_id) {
          tmp = props.guildRoles[role_id];
        }
        if (null != tmp) {
          let obj = {};
          let intl = GuildSettingsModalIntegrationSettings(outer1_2[11]).intl;
          obj.label = intl.string(GuildSettingsModalIntegrationSettings(outer1_2[11]).t.eBtNBa);
          obj = { style: iter.value, variant: "text-md/medium", color: "text-muted", children: tmp.name };
          obj.trailing = outer1_12(GuildSettingsModalIntegrationSettings(outer1_2[21]).Text, obj);
          const tmp2 = outer1_12(GuildSettingsModalIntegrationSettings(outer1_2[16]).TableRow, obj);
        }
        if ("youtube" === integration.type) {
          const account = integration.account;
          let name;
          if (null != account) {
            name = account.name;
          }
          const intl2 = GuildSettingsModalIntegrationSettings(outer1_2[11]).intl;
          let stringResult = intl2.string(GuildSettingsModalIntegrationSettings(outer1_2[11]).t.A5MiqO);
          let RdUTrl = GuildSettingsModalIntegrationSettings(outer1_2[11]).t["7lNtce"];
          let combined = name;
        } else {
          const _HermesInternal = HermesInternal;
          combined = "twitch.tv/" + integration.name;
          const intl9 = GuildSettingsModalIntegrationSettings(outer1_2[11]).intl;
          stringResult = intl9.string(GuildSettingsModalIntegrationSettings(outer1_2[11]).t["S/WCrG"]);
          RdUTrl = GuildSettingsModalIntegrationSettings(outer1_2[11]).t.RdUTrl;
          obj = { integration, onPress: self.handleToggleEmotes };
          const tmp12 = outer1_12(outer1_20, obj);
        }
        let obj2 = outer1_1(outer1_2[22]);
        const value = obj2.get(integration.type);
        if (null == value) {
          const obj1 = {};
          obj2 = {};
          const obj3 = { flex: 1 };
          obj2.style = obj3;
          let obj4 = { paddingTop: 16 };
          const items = [obj4, self.props.contentContainerStyle];
          obj2.contentContainerStyle = items;
          let obj5 = { style: iter.stackPadding, spacing: outer1_1(outer1_2[13]).space.PX_24 };
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
          obj6.children = outer1_12(GuildSettingsModalIntegrationSettings(outer1_2[16]).TableRow, obj7);
          const items1 = [outer1_12(GuildSettingsModalIntegrationSettings(outer1_2[18]).TableRowGroup, obj6), , , , ];
          const obj8 = {};
          const intl3 = GuildSettingsModalIntegrationSettings(outer1_2[11]).intl;
          obj8.title = intl3.string(GuildSettingsModalIntegrationSettings(outer1_2[11]).t.i17qFc);
          obj8.hasIcons = false;
          const obj9 = {};
          const intl4 = GuildSettingsModalIntegrationSettings(outer1_2[11]).intl;
          const obj10 = {};
          const subscriber_count = integration.subscriber_count;
          let str2 = "";
          if (null != subscriber_count) {
            str2 = subscriber_count;
          }
          obj10.subscribers = str2;
          obj9.label = intl4.format(RdUTrl, obj10);
          const intl5 = GuildSettingsModalIntegrationSettings(outer1_2[11]).intl;
          const obj11 = {};
          let obj17 = outer1_1(outer1_2[27])(integration.synced_at);
          obj11.datetime = obj17.calendar();
          obj9.subLabel = intl5.formatToPlainString(GuildSettingsModalIntegrationSettings(outer1_2[11]).t["+42M+u"], obj11);
          const obj12 = {};
          const syncing = integration.syncing;
          let tmp37 = null != syncing;
          if (tmp37) {
            tmp37 = syncing;
          }
          obj12.isSyncing = tmp37;
          obj12.onPress = self.handleSync;
          obj9.trailing = outer1_12(outer1_19, obj12);
          const items2 = [outer1_12(GuildSettingsModalIntegrationSettings(outer1_2[16]).TableRow, obj9), tmp2];
          obj8.children = items2;
          items1[1] = outer1_13(GuildSettingsModalIntegrationSettings(outer1_2[18]).TableRowGroup, obj8);
          const obj13 = { title: stringResult, value: integration.expire_behavior, onChange: self.handleExpireBehaviorChange, hasIcons: false };
          const obj14 = { value: GuildSettingsModalIntegrationSettings(outer1_2[29]).IntegrationExpireBehaviorTypes.REMOVE_ROLE };
          const intl6 = GuildSettingsModalIntegrationSettings(outer1_2[11]).intl;
          obj14.label = intl6.string(GuildSettingsModalIntegrationSettings(outer1_2[11]).t["6kpw4i"]);
          const items3 = [outer1_12(GuildSettingsModalIntegrationSettings(outer1_2[14]).TableRadioRow, obj14), ];
          const obj15 = { value: GuildSettingsModalIntegrationSettings(outer1_2[29]).IntegrationExpireBehaviorTypes.KICK };
          const intl7 = GuildSettingsModalIntegrationSettings(outer1_2[11]).intl;
          obj15.label = intl7.string(GuildSettingsModalIntegrationSettings(outer1_2[11]).t.fQUQIJ);
          items3[1] = outer1_12(GuildSettingsModalIntegrationSettings(outer1_2[14]).TableRadioRow, obj15);
          obj13.children = items3;
          items1[2] = outer1_13(GuildSettingsModalIntegrationSettings(outer1_2[28]).TableRadioGroup, obj13);
          const obj16 = {};
          const intl8 = GuildSettingsModalIntegrationSettings(outer1_2[11]).intl;
          obj16.title = intl8.string(GuildSettingsModalIntegrationSettings(outer1_2[11]).t.uiXMow);
          obj16.hasIcons = false;
          obj16.children = (function getSubGracePeriodOptions() {
            const values = Object.values(GuildSettingsModalIntegrationSettings(outer2_2[10]).IntegrationExpireGracePeriodTypes);
            const found = values.filter((arg0) => Number.isInteger(arg0));
            return found.map((days) => {
              let obj = { value: days };
              const intl = GuildSettingsModalIntegrationSettings(outer3_2[11]).intl;
              obj = { days };
              obj.label = intl.formatToPlainString(GuildSettingsModalIntegrationSettings(outer3_2[11]).t.eGjmy5, obj);
              return obj;
            });
          })().map((option) => outer2_12(outer2_18, { integration, option, onPress: self.handleExpireGracePeriodChange }, arg1));
          items1[3] = outer1_12(GuildSettingsModalIntegrationSettings(outer1_2[18]).TableRowGroup, obj16);
          items1[4] = tmp12;
          obj5.children = items1;
          obj2.children = outer1_13(GuildSettingsModalIntegrationSettings(outer1_2[26]).Stack, obj5);
          const items4 = [outer1_12(GuildSettingsModalIntegrationSettings(outer1_2[25]).Form, obj2), outer1_12(GuildSettingsModalIntegrationSettings(outer1_2[30]).NavScrim, {})];
          obj1.children = items4;
          return outer1_13(outer1_14, obj1);
        } else {
          obj17 = {};
          obj4 = GuildSettingsModalIntegrationSettings(outer1_2[23]);
          obj5 = GuildSettingsModalIntegrationSettings(outer1_2[24]);
          const icon = value.icon;
          obj17.source = obj4.makeSource(obj5.isThemeDark(props.theme) ? icon.darkPNG : icon.lightPNG);
          obj17.style = iter.integrationIcon;
          outer1_12(outer1_8, obj17);
          const tmp14 = outer1_12;
          const tmp15 = outer1_8;
        }
      }
    }
  ];
  return callback(GuildSettingsModalIntegrationSettings, items);
})(require("ManaContext").PureComponent);
let closure_16 = tmp5;
tmp5.contextType = require("ManaContext").ThemeContext;
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationSettings.tsx");

export default function ConnectedGuildSettingsModalIntegrationSettings(arg0) {
  let contentContainerStyle;
  let integrationId;
  ({ integrationId, contentContainerStyle } = arg0);
  let obj = guild(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_11.getProps());
  guild = stateFromStores.guild;
  const integrations = stateFromStores.integrations;
  const items1 = [closure_10];
  const stateFromStores1 = guild(566).useStateFromStores(items1, () => {
    let rolesSnapshot;
    if (null != guild) {
      rolesSnapshot = outer1_10.getRolesSnapshot(guild.id);
    }
    return rolesSnapshot;
  });
  let found;
  const obj2 = guild(566);
  if (null != integrations) {
    found = integrations.filter((type) => {
      const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = guild(outer1_2[34]).SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS;
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
        tmp6 = callback3(closure_16, obj);
      }
    }
  }
  return tmp6;
};
