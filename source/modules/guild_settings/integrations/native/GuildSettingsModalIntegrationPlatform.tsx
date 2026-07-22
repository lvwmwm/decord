// Module ID: 16172
// Function ID: 124617
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: default

// Module 16172 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const importAllResult = importAll(dependencyMap[5]);
({ ActivityIndicator: closure_8, Image: closure_9, View: closure_10 } = arg1(dependencyMap[6]));
let closure_11 = importDefault(dependencyMap[7]);
const tmp3 = arg1(dependencyMap[6]);
({ GuildSettingsSections: closure_12, HelpdeskArticles: closure_13, PlatformTypes: closure_14, UserSettingsSections: closure_15 } = arg1(dependencyMap[8]));
const tmp4 = arg1(dependencyMap[8]);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = arg1(dependencyMap[9]));
let obj = arg1(dependencyMap[10]);
obj = {};
obj = { paddingTop: importDefault(dependencyMap[11]).space.PX_16 };
obj.form = obj;
obj.trailingWrapper = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F" };
obj.platformIcon = {};
let closure_19 = obj.createStyles(obj);
let closure_20 = (Component) => {
  class IntegrationItem {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, IntegrationItem);
      items1 = [...items];
      obj = closure_6(IntegrationItem);
      tmp2 = closure_5;
      if (closure_21()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      IntegrationItem = tmp2Result;
      tmp2Result.state = { enabled: tmp2Result.props.integration.enabled };
      tmp2Result.handleToggleEnabled = () => {
        const props = tmp2Result.props;
        const guild = props.guild;
        const integration = props.integration;
        if (!integration.syncing) {
          const setState = tmp2Result.setState;
          let showResult = {};
          if (integration.enabled) {
            showResult.enabled = false;
            setState(showResult);
            showResult = {};
            let onConfirm = 14;
            const intl = tmp2Result(closure_2[14]).intl;
            showResult.title = intl.string(tmp2Result(closure_2[14]).t.emx3lN);
            if ("youtube" === integration.type) {
              const intl3 = tmp2Result(closure_2[onConfirm]).intl;
              let stringResult = intl3.string(tmp2Result(closure_2[onConfirm]).t.anKQWU);
            } else {
              const intl2 = tmp2Result(closure_2[onConfirm]).intl;
              stringResult = intl2.string(tmp2Result(closure_2[onConfirm]).t.BW/xtn);
            }
            showResult.body = stringResult;
            const intl4 = tmp2Result(closure_2[onConfirm]).intl;
            showResult.confirmText = intl4.string(tmp2Result(closure_2[onConfirm]).t.R9GHya);
            const intl5 = tmp2Result(closure_2[onConfirm]).intl;
            showResult.cancelText = intl5.string(tmp2Result(closure_2[onConfirm]).t.ETE/oC);
            onConfirm = function onConfirm() {
              return integration(closure_2[12]).disableIntegration(guild.id, integration.id);
            };
            showResult.onConfirm = onConfirm;
            showResult.onCancel = function onCancel() {
              return guild.setState({ enabled: true });
            };
            showResult.confirmColor = integration(closure_2[15]).Colors.RED;
            showResult = integration(closure_2[13]).show(showResult);
            const obj3 = integration(closure_2[13]);
          } else {
            showResult.enabled = true;
            setState(showResult);
            integration(closure_2[12]).enableIntegration(guild.id, integration.type, integration.id);
            const obj2 = integration(closure_2[12]);
          }
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = IntegrationItem;
  callback2(IntegrationItem, Component);
  let obj = {
    key: "render",
    value() {
      let styles;
      const self = this;
      const props = this.props;
      const integration = props.integration;
      const IntegrationItem = integration;
      ({ onPress: closure_1, styles } = props);
      const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = IntegrationItem(closure_2[16]).SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS;
      if (SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS.includes(integration.type)) {
        const type = integration.type;
        if (IntegrationItem(closure_2[17]).IntegrationTypes.YOUTUBE === type) {
          const account = integration.account;
          let name;
          if (null != account) {
            name = account.name;
          }
          let combined = name;
        } else if (IntegrationItem(closure_2[17]).IntegrationTypes.TWITCH === type) {
          const _HermesInternal = HermesInternal;
          let str = "twitch.tv/";
          combined = "twitch.tv/" + integration.name;
        }
        let obj = callback(closure_2[18]);
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
            syncing = callback4(closure_8, { "Null": "Array", "Null": "isArray" });
          }
          obj1.children = syncing;
          obj.trailing = callback4(closure_10, obj1);
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
          const items = [callback4(IntegrationItem(closure_2[22]).TableRow, obj), ];
          let obj2 = {};
          const _Boolean = Boolean;
          obj2.value = Boolean(self.state.enabled);
          obj2.disabled = true === integration.syncing;
          obj2.onValueChange = self.handleToggleEnabled;
          const intl = IntegrationItem(closure_2[14]).intl;
          obj2.label = intl.string(IntegrationItem(closure_2[14]).t.vQC6vR);
          items[1] = callback4(IntegrationItem(closure_2[23]).TableSwitchRow, obj2);
          obj.children = items;
          return closure_17(IntegrationItem(closure_2[21]).TableRowGroup, obj);
        } else {
          let obj3 = {};
          obj2 = IntegrationItem(closure_2[19]);
          obj3 = IntegrationItem(closure_2[20]);
          const icon = value.icon;
          obj3.source = obj2.makeSource(obj3.isThemeDark(props.theme) ? icon.darkPNG : icon.lightPNG);
          obj3.style = styles.platformIcon;
          callback4(closure_9, obj3);
          const tmp15 = callback4;
          const tmp16 = closure_9;
        }
      } else {
        return null;
      }
    }
  };
  const items = [obj];
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
  const items1 = [obj];
  return callback(IntegrationItem, items, items1);
}(importAllResult.Component);
const tmp5 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[36]).fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationPlatform.tsx");

export default function GuildSettingsModalIntegrationPlatform(platformType) {
  let guild;
  platformType = platformType.platformType;
  const arg1 = platformType;
  const importDefault = platformType.closeGuildSettings;
  let closure_6;
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
    obj = { screen: constants.CONNECTIONS, isRootScreen: true };
    obj.openUserSettings(obj);
  }
  let obj = arg1(dependencyMap[24]);
  const token = obj.useToken(importDefault(dependencyMap[11]).modules.mobile.TABLE_ROW_PADDING);
  const tmp2 = callback4();
  const dependencyMap = tmp2;
  let obj1 = arg1(dependencyMap[25]);
  const navigation = obj1.useNavigation();
  let closure_3 = navigation;
  let obj3 = arg1(dependencyMap[26]);
  const items = [closure_11];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => ({ guild: store.getGuild(), submitting: store.isSubmitting(), hasChanges: store.hasChanges() }));
  const submitting = stateFromStoresObject.submitting;
  let closure_4 = submitting;
  ({ hasChanges: closure_5, guild } = stateFromStoresObject);
  closure_6 = guild;
  let closure_7 = importDefault(dependencyMap[27])();
  let obj4 = arg1(dependencyMap[26]);
  const items1 = [closure_11];
  const stateFromStores = obj4.useStateFromStores(items1, () => store.getProps().integrations);
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
    let obj5 = importDefault(dependencyMap[18]);
    const value = obj5.get(platformType);
    let name;
    if (null != value) {
      name = value.name;
    }
    obj.title = name;
    obj.headerRight = function headerRight() {
      if (submitting) {
        let tmp2 = callback(platformType(tmp2[28]).HeaderSubmittingIndicator, {});
      } else {
        tmp2 = null;
        if (closure_5) {
          const obj = {};
          const intl = platformType(tmp2[14]).intl;
          obj.text = intl.string(platformType(tmp2[14]).t.R3BPH+);
          obj.onPress = onSave;
          tmp2 = callback(platformType(tmp2[29]).HeaderActionButton, obj);
        }
      }
      return tmp2;
    };
    navigation.setOptions(obj);
    if (constants2.YOUTUBE === platformType) {
      const intl = arg1(dependencyMap[14]).intl;
      obj = { connectAction: onConectTap, helpdeskArticle: importDefault(dependencyMap[31]).getArticleURL(constants.YOUTUBE_INTEGRATION) };
      let formatResult = intl.format(arg1(dependencyMap[14]).t.4OSAQ9, obj);
      const obj8 = importDefault(dependencyMap[31]);
    } else if (constants2.TWITCH === platformType) {
      const intl2 = arg1(dependencyMap[14]).intl;
      obj1 = { connectAction: onConectTap, helpdeskArticle: importDefault(dependencyMap[31]).getArticleURL(constants.TWITCH_INTEGRATION) };
      formatResult = intl2.format(arg1(dependencyMap[14]).t.ro1jEN, obj1);
      const obj16 = importDefault(dependencyMap[31]);
    }
    const obj2 = {};
    obj3 = { style: tmp2.form, contentContainerStyle: platformType.contentContainerStyle };
    obj4 = {};
    obj5 = { paddingHorizontal: token };
    obj4.style = obj5;
    obj4.spacing = importDefault(dependencyMap[11]).space.PX_24;
    let mapped;
    if (null != found) {
      mapped = found.map((id) => {
        const platformType = arg1;
        return callback(closure_20, {
          guild,
          theme: closure_7,
          integration: id,
          styles: tmp2,
          onPress() {

          }
        }, id.id);
      });
    }
    const items2 = [mapped, ];
    const obj6 = { cachedAt: "y", edpbxy: "isArray", children: formatResult };
    items2[1] = callback3(arg1(dependencyMap[34]).Text, obj6);
    obj4.children = items2;
    obj3.children = closure_17(arg1(dependencyMap[33]).Stack, obj4);
    const items3 = [callback3(arg1(dependencyMap[32]).Form, obj3), callback3(arg1(dependencyMap[35]).NavScrim, {})];
    obj2.children = items3;
    return closure_17(closure_18, obj2);
  }
};
