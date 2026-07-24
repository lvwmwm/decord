// Module ID: 16336
// Function ID: 127114
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 8483, 653, 33, 4130, 689, 8482, 4471, 1212, 4561, 16297, 16337, 4814, 1392, 3976, 5501, 5165, 5502, 3834, 1456, 566, 4066, 5087, 5788, 5796, 1920, 7636, 4541, 4126, 5448, 2]
// Exports: default

// Module 16336 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import set from "set";
import getPlatformUserUrl from "getPlatformUserUrl";
import get_ActivityIndicator from "useTheme";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "Stack";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "wrapURL";

let closure_10;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
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
({ ActivityIndicator: closure_8, Image: closure_9, View: closure_10 } = get_ActivityIndicator);
({ GuildSettingsSections: closure_12, HelpdeskArticles: closure_13, PlatformTypes: closure_14, UserSettingsSections: closure_15 } = ME);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.form = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.trailingWrapper = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.platformIcon = { width: 24, height: 24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_20 = ((Component) => {
  class IntegrationItem {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_3(this, apply);
      items1 = [...items];
      obj = outer1_6(apply);
      tmp2 = outer1_5;
      if (outer1_21()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.state = { enabled: tmp2Result.props.integration.enabled };
      tmp2Result.handleToggleEnabled = () => {
        const props = guild.props;
        guild = props.guild;
        const integration = props.integration;
        if (!integration.syncing) {
          const setState = guild.setState;
          let showResult = {};
          if (integration.enabled) {
            showResult.enabled = false;
            setState(showResult);
            showResult = {};
            let onConfirm = 14;
            const intl = IntegrationItem(outer2_2[14]).intl;
            showResult.title = intl.string(IntegrationItem(outer2_2[14]).t.emx3lN);
            if ("youtube" === integration.type) {
              const intl3 = IntegrationItem(outer2_2[onConfirm]).intl;
              let stringResult = intl3.string(IntegrationItem(outer2_2[onConfirm]).t.anKQWU);
            } else {
              const intl2 = IntegrationItem(outer2_2[onConfirm]).intl;
              stringResult = intl2.string(IntegrationItem(outer2_2[onConfirm]).t["BW/xtn"]);
            }
            showResult.body = stringResult;
            const intl4 = IntegrationItem(outer2_2[onConfirm]).intl;
            showResult.confirmText = intl4.string(IntegrationItem(outer2_2[onConfirm]).t.R9GHya);
            const intl5 = IntegrationItem(outer2_2[onConfirm]).intl;
            showResult.cancelText = intl5.string(IntegrationItem(outer2_2[onConfirm]).t["ETE/oC"]);
            onConfirm = function onConfirm() {
              return outer3_1(outer3_2[12]).disableIntegration(guild.id, integration.id);
            };
            showResult.onConfirm = onConfirm;
            showResult.onCancel = function onCancel() {
              return guild.setState({ enabled: true });
            };
            showResult.confirmColor = outer2_1(outer2_2[15]).Colors.RED;
            showResult = outer2_1(outer2_2[13]).show(showResult);
            const obj3 = outer2_1(outer2_2[13]);
          } else {
            showResult.enabled = true;
            setState(showResult);
            outer2_1(outer2_2[12]).enableIntegration(guild.id, integration.type, integration.id);
            const obj2 = outer2_1(outer2_2[12]);
          }
        }
      };
      return tmp2Result;
    }
  }
  callback2(IntegrationItem, Component);
  let obj = {
    key: "render",
    value() {
      let closure_1;
      let styles;
      const self = this;
      const props = this.props;
      const integration = props.integration;
      ({ onPress: closure_1, styles } = props);
      const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = IntegrationItem(outer1_2[16]).SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS;
      if (SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS.includes(integration.type)) {
        const type = integration.type;
        if (IntegrationItem(outer1_2[17]).IntegrationTypes.YOUTUBE === type) {
          const account = integration.account;
          let name;
          if (null != account) {
            name = account.name;
          }
          let combined = name;
        } else if (IntegrationItem(outer1_2[17]).IntegrationTypes.TWITCH === type) {
          const _HermesInternal = HermesInternal;
          let str = "twitch.tv/";
          combined = "twitch.tv/" + integration.name;
        }
        let obj = outer1_1(outer1_2[18]);
        const value = obj.get(integration.type);
        if (null == value) {
          obj = { hasIcons: true };
          obj = {};
          str = undefined;
          if (null != integration.user) {
            str = str2.toString();
          }
          obj.label = str;
          obj.subLabel = combined;
          const obj1 = { style: styles.trailingWrapper };
          let syncing = integration.syncing;
          if (syncing) {
            syncing = outer1_16(outer1_8, { animating: true, size: "small" });
          }
          obj1.children = syncing;
          obj.trailing = outer1_16(outer1_10, obj1);
          obj.arrow = integration.enabled && !integration.syncing;
          obj.icon = null;
          obj.disabled = !integration.enabled || integration.syncing;
          obj.onPress = function onPress() {
            let enabled = integration.enabled;
            if (enabled) {
              enabled = callback(integration);
            }
            return enabled;
          };
          const items = [outer1_16(IntegrationItem(outer1_2[22]).TableRow, obj), ];
          let obj2 = {};
          const _Boolean = Boolean;
          obj2.value = Boolean(self.state.enabled);
          obj2.disabled = true === integration.syncing;
          obj2.onValueChange = self.handleToggleEnabled;
          const intl = IntegrationItem(outer1_2[14]).intl;
          obj2.label = intl.string(IntegrationItem(outer1_2[14]).t.vQC6vR);
          items[1] = outer1_16(IntegrationItem(outer1_2[23]).TableSwitchRow, obj2);
          obj.children = items;
          return outer1_17(IntegrationItem(outer1_2[21]).TableRowGroup, obj);
        } else {
          let obj3 = {};
          obj2 = IntegrationItem(outer1_2[19]);
          obj3 = IntegrationItem(outer1_2[20]);
          const icon = value.icon;
          obj3.source = obj2.makeSource(obj3.isThemeDark(props.theme) ? icon.darkPNG : icon.lightPNG);
          obj3.style = styles.platformIcon;
          outer1_16(outer1_9, obj3);
          const tmp15 = outer1_16;
          const tmp16 = outer1_9;
        }
      } else {
        return null;
      }
    }
  };
  let items = [obj];
  obj = {
    key: "getDerivedStateFromProps",
    value(integration, enabled) {
      integration = integration.integration;
      enabled = enabled.enabled;
      let tmp = null;
      if (enabled) {
        tmp = null;
        if (false === integration.syncing) {
          tmp = null;
          if (integration.enabled !== enabled) {
            const obj = { enabled: integration.enabled };
            tmp = obj;
          }
        }
      }
      return tmp;
    }
  };
  let items1 = [obj];
  return callback(IntegrationItem, items, items1);
})(require("wrapURL").Component);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationPlatform.tsx");

export default function GuildSettingsModalIntegrationPlatform(platformType) {
  let closure_5;
  let guild;
  platformType = platformType.platformType;
  const closeGuildSettings = platformType.closeGuildSettings;
  guild = undefined;
  function onSave() {
    if (null != guild) {
      let obj = closeGuildSettings(tmp2[12]);
      obj = { features: guild.features };
      obj.saveGuild(guild.id, obj);
    }
  }
  function onConectTap() {
    closeGuildSettings();
    let obj = platformType(tmp2[30]);
    obj = { screen: outer1_15.CONNECTIONS, isRootScreen: true };
    obj.openUserSettings(obj);
  }
  let obj = platformType(3834);
  const token = obj.useToken(closeGuildSettings(689).modules.mobile.TABLE_ROW_PADDING);
  let tmp2 = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp2;
  let obj1 = platformType(1456);
  const navigation = obj1.useNavigation();
  let obj3 = platformType(566);
  const items = [closure_11];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => ({ guild: outer1_11.getGuild(), submitting: outer1_11.isSubmitting(), hasChanges: outer1_11.hasChanges() }));
  const submitting = stateFromStoresObject.submitting;
  ({ hasChanges: closure_5, guild } = stateFromStoresObject);
  let getPlatformUserUrl = closeGuildSettings(4066)();
  let obj4 = platformType(566);
  const items1 = [closure_11];
  const stateFromStores = obj4.useStateFromStores(items1, () => outer1_11.getProps().integrations);
  if (null != stateFromStores) {
    const found = stateFromStores.filter((type) => type.type === platformType);
  }
  if (null == guild) {
    return null;
  } else {
    obj = {};
    let fn;
    if (submitting) {
      fn = () => null;
    }
    obj.headerLeft = fn;
    let obj5 = closeGuildSettings(4814);
    const value = obj5.get(platformType);
    let name;
    if (null != value) {
      name = value.name;
    }
    obj.title = name;
    obj.headerRight = function headerRight() {
      if (submitting) {
        tmp2 = outer1_16(platformType(tmp2[28]).HeaderSubmittingIndicator, {});
      } else {
        tmp2 = null;
        if (closure_5) {
          const obj = {};
          const intl = platformType(tmp2[14]).intl;
          obj.text = intl.string(platformType(tmp2[14]).t["R3BPH+"]);
          obj.onPress = onSave;
          tmp2 = outer1_16(platformType(tmp2[29]).HeaderActionButton, obj);
        }
      }
      return tmp2;
    };
    navigation.setOptions(obj);
    if (constants2.YOUTUBE === platformType) {
      let intl = platformType(1212).intl;
      obj = { connectAction: onConectTap, helpdeskArticle: closeGuildSettings(1920).getArticleURL(constants.YOUTUBE_INTEGRATION) };
      let formatResult = intl.format(platformType(1212).t["4OSAQ9"], obj);
      const obj8 = closeGuildSettings(1920);
    } else if (constants2.TWITCH === platformType) {
      const intl2 = platformType(1212).intl;
      obj1 = { connectAction: onConectTap, helpdeskArticle: closeGuildSettings(1920).getArticleURL(constants.TWITCH_INTEGRATION) };
      formatResult = intl2.format(platformType(1212).t.ro1jEN, obj1);
      const obj16 = closeGuildSettings(1920);
    }
    const obj2 = {};
    obj3 = { style: tmp2.form, contentContainerStyle: platformType.contentContainerStyle };
    obj4 = {};
    obj5 = { paddingHorizontal: token };
    obj4.style = obj5;
    obj4.spacing = closeGuildSettings(689).space.PX_24;
    let mapped;
    if (null != found) {
      mapped = found.map((id) => {
        let closure_0 = arg1;
        return outer1_16(outer1_20, {
          guild,
          theme: getPlatformUserUrl,
          integration: id,
          styles: closure_2,
          onPress() {
            outer1_3.push(outer2_12.INTEGRATION_SETTINGS, { integrationId: closure_0 });
          }
        }, id.id);
      });
    }
    const items2 = [mapped, ];
    const obj6 = { variant: "text-sm/medium", color: "text-muted", children: formatResult };
    items2[1] = callback3(platformType(4126).Text, obj6);
    obj4.children = items2;
    obj3.children = closure_17(platformType(4541).Stack, obj4);
    const items3 = [callback3(platformType(7636).Form, obj3), callback3(platformType(5448).NavScrim, {})];
    obj2.children = items3;
    return closure_17(closure_18, obj2);
  }
};
