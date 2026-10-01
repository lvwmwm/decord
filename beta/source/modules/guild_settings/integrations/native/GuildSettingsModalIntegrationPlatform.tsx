// Module ID: 17400
// Function ID: 17401
// Name: GuildSettingsModalIntegrationPlatform
// Dependencies: [19, 17, 9049, 1074, 21, 4836, 576, 17361, 17331, 5595, 1397, 4685, 5999, 5917, 6621, 1115, 9048, 5204, 5300, 4531, 1485, 504, 4767, 5936, 6795, 6800, 2111, 8053, 5279, 4832, 6461, 2]
// Exports: default

// Module 17400 (GuildSettingsModalIntegrationPlatform)
import nativeDefault from "native" /* 576 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5204 */;
import AlertDefault from "Alert" /* 5300 */;
import PlatformsDefault from "Platforms" /* 5595 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import HeaderActionButton2 from "HeaderActionButton" /* 6795 */;
import openUserSettings from "openUserSettings" /* 6800 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9048 */;
import GuildSettingsModalIntegrations from "GuildSettingsModalIntegrations" /* 17361 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9049 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, navigation;

let c10;
let c3;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let tmp;
let unpackModuleId;
const intl6 = tmp(1115);
const AvatarUtils = tmp(1397);
const shared = tmp(4685);
const TableRow2 = tmp(5917);
const TableRowGroup2 = tmp(5999);
const TableSwitchRow2 = tmp(6621);
const IntegrationTypes = tmp(17331);
({ ActivityIndicator: c3, Image: closure_4, View: hasOwnProperty } = react_native);
({ GuildSettingsSections: metroImportDefault, HelpdeskArticles: metroImportAll, PlatformTypes: c9, UserSettingsSections: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let obj = { form: obj2, trailingWrapper: { flexDirection: "row", alignItems: "center" }, platformIcon: { width: 24, height: 24 } };
obj2 = { paddingTop: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(obj);
const Component = react.Component;
class IntegrationItem extends Component {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.state = { enabled: applyArgumentsResult.props.integration.enabled };
    applyArgumentsResult.handleToggleEnabled = function handleToggleEnabled() {
      let guild;
      let intl;
      let intl4;
      let intl5;
      let stringResult;
      const props = guild.props;
      const tmp = guild;
      guild = props.guild;
      const integration = props.integration;
      if (!integration.syncing) {
        const setState = tmp.setState;
        if (integration.enabled) {
          setState({ enabled: false });
          const obj2 = {
            title: intl.string(intl6.t.emx3lN),
            body: stringResult,
            confirmText: intl4.string(intl6.t.R9GHya),
            cancelText: intl5.string(intl6.t["ETE/oC"]),
            onConfirm() {
                  const obj = GuildSettingsActionCreatorsDefault;
                  return obj.disableIntegration(guild.id, integration.id);
                },
            onCancel() {
                  return guild.setState({ enabled: true });
                },
            confirmColor: AlertDefault.Colors.RED,
            isDismissable: false
          };
          const show = actions_AlertActionCreatorsDefault.show;
          actions_AlertActionCreatorsDefault;
          intl = intl6.intl;
          if ("youtube" === integration.type) {
            const intl3 = tmp10(dependencyMap[15]).intl;
            stringResult = intl3.string(tmp10(dependencyMap[15]).t.anKQWU);
          } else {
            const intl2 = tmp10(dependencyMap[15]).intl;
            stringResult = intl2.string(tmp10(dependencyMap[15]).t["BW/xtn"]);
          }
          intl4 = tmp10(dependencyMap[15]).intl;
          intl5 = tmp10(dependencyMap[15]).intl;
          show(obj2);
        } else {
          setState({ enabled: true });
          let obj = GuildSettingsActionCreatorsDefault;
          obj.enableIntegration(guild.id, integration.type, integration.id);
        }
      }
    };
    return applyArgumentsResult;
  }
  static getDerivedStateFromProps(integration, enabled) {
    integration = integration.integration;
    enabled = enabled.enabled;
    let tmp = null;
    if (enabled) {
      tmp = null;
      if (false === integration.syncing) {
        tmp = null;
        if (integration.enabled !== enabled) {
          tmp = { enabled: integration.enabled };
          const obj = { enabled: integration.enabled };
        }
      }
    }
    return tmp;
  }
  render() {
    let closure_129_1;
    let intl;
    let items;
    let obj4;
    let styles;
    let syncing;
    let syncing2;
    let tmp18;
    let tmpResult2;
    const self = this;
    const props = this.props;
    const integration = props.integration;
    ({ onPress: closure_129_1, styles } = props);
    const tmp = require;
    const theme = props.theme;
    const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = GuildSettingsModalIntegrations.SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS;
    if (SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS.includes(integration.type)) {
      let combined;
      const type = integration.type;
      if (IntegrationTypes.IntegrationTypes.YOUTUBE === type) {
        const account = integration.account;
        let name;
        if (account != null) {
          name = account.name;
        }
        combined = name;
      } else if (IntegrationTypes.IntegrationTypes.TWITCH === type) {
        const _HermesInternal = HermesInternal;
        combined = "twitch.tv/" + integration.name;
      }
      const obj = PlatformsDefault;
      const value = obj.get(integration.type);
      let tmp12Result = null;
      if (null != value) {
        const makeSource = AvatarUtils.makeSource;
        AvatarUtils;
        const icon = value.icon;
        const obj2 = { source: makeSource(tmpResult2.isThemeDark(theme) ? icon.darkPNG : icon.lightPNG), style: styles.platformIcon };
        tmpResult2 = shared;
        tmp12Result = unpackModuleId(React3, obj2);
      }
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      let str1;
      const TableRow = TableRow2.TableRow;
      const tmp15 = closure_12;
      if (integration.user != null) {
        str1 = str2.toString();
      }
      const obj3 = {
        label: str1,
        subLabel: combined,
        trailing: unpackModuleId(tmp18, obj4),
        arrow: integration.enabled && !integration.syncing,
        icon: tmp12Result,
        disabled: syncing2,
        onPress() {
            const enabled = integration.enabled && closure_1_1(tmp);
            return enabled;
          }
      };
      obj4 = { style: styles.trailingWrapper, children: syncing };
      syncing = integration.syncing;
      tmp18 = hasOwnProperty;
      if (syncing) {
        syncing = tmp16(_false, { animating: true, size: "small" });
      }
      let enabled = integration.enabled;
      syncing2 = !enabled;
      if (enabled) {
        syncing2 = integration.syncing;
      }
      const obj5 = { hasIcons: true, children: items };
      items = [unpackModuleId(TableRow, obj3), ];
      const _Boolean = Boolean;
      const obj6 = { value: Boolean(self.state.enabled), disabled: true === integration.syncing, onValueChange: self.handleToggleEnabled, label: intl.string(intl6.t.vQC6vR) };
      const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
      intl = intl6.intl;
      items[1] = unpackModuleId(TableSwitchRow, obj6);
      return tmp15(TableRowGroup, obj5);
    } else {
      return null;
    }
  }
}
const prototype = IntegrationItem.prototype;
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationPlatform.tsx");

export default function GuildSettingsModalIntegrationPlatform(platformType) {
  let Stack;
  let c5;
  let found;
  let guild;
  let items2;
  let items3;
  let name;
  let obj10;
  let obj9;
  let styles;
  let tmp3Result3;
  let tmp3Result4;
  platformType = platformType.platformType;
  const closeGuildSettings = platformType.closeGuildSettings;
  c5 = undefined;
  guild = undefined;
  function onSave() {
    if (null != guild) {
      const obj2 = { features: guild.features };
      const obj = GuildSettingsActionCreatorsDefault;
      obj.saveGuild(guild.id, obj2);
    }
  }
  let tmp = platformType;
  const contentContainerStyle = platformType.contentContainerStyle;
  let obj = platformType(4531);
  let tmp3 = closeGuildSettings;
  const token = obj.useToken(closeGuildSettings(576).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_14();
  dependencyMap = tmp5;
  let obj2 = platformType(1485);
  navigation = obj2.useNavigation();
  const items = [guild];
  const obj3 = platformType(504);
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => {
    const obj = { guild: guild.getGuild(), submitting: guild.isSubmitting(), hasChanges: guild.hasChanges() };
    return obj;
  });
  const submitting = stateFromStoresObject.submitting;
  ({ hasChanges: c5, guild } = stateFromStoresObject);
  const theme = closeGuildSettings(4767)();
  const items1 = [guild];
  const obj4 = platformType(504);
  const stateFromStores = obj4.useStateFromStores(items1, () => guild.getProps().integrations);
  if (stateFromStores != null) {
    found = stateFromStores.filter((type) => type.type === platformType);
  }
  if (null == guild) {
    return null;
  } else {
    let formatResult;
    let fn;
    const setOptions = navigation.setOptions;
    if (submitting) {
      fn = () => null;
    }
    const obj5 = {
      headerLeft: fn,
      title: name,
      headerRight() {
          let intl;
          let tmp3;
          const tmp = submitting;
          if (tmp) {
            tmp3 = unpackModuleId(NavigatorHeader.HeaderSubmittingIndicator, {});
          } else {
            tmp3 = null;
            if (c5) {
              const obj = { text: intl.string(intl6.t["R3BPH+"]), onPress: onSave };
              const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
              intl = intl6.intl;
              tmp3 = unpackModuleId(HeaderActionButton, obj);
            }
          }
          return tmp3;
        }
    };
    const tmp3Result = tmp3(5595);
    const value = tmp3Result.get(platformType);
    name = undefined;
    if (value != null) {
      name = value.name;
    }
    function onConectTap() {
      closeGuildSettings();
      const obj = openUserSettings;
      const obj2 = { screen: constants.CONNECTIONS, isRootScreen: true };
      obj.openUserSettings(obj2);
    }
    setOptions(obj5);
    if (constants2.YOUTUBE === platformType) {
      let intl = tmp(1115).intl;
      const format = intl.format;
      const obj6 = { connectAction: onConectTap, helpdeskArticle: tmp3Result3.getArticleURL(onSave.YOUTUBE_INTEGRATION) };
      const v4OSAQ9 = tmp(1115).t["4OSAQ9"];
      tmp3Result3 = tmp3(2111);
      formatResult = format(v4OSAQ9, obj6);
    } else if (tmp11.TWITCH === platformType) {
      const intl2 = tmp(1115).intl;
      const format2 = intl2.format;
      const obj7 = { connectAction: onConectTap, helpdeskArticle: tmp3Result4.getArticleURL(onSave.TWITCH_INTEGRATION) };
      const ro1jEN = tmp(1115).t.ro1jEN;
      tmp3Result4 = tmp3(2111);
      formatResult = format2(ro1jEN, obj7);
    }
    const obj8 = { style: tmp5.form, contentContainerStyle, children: closure_12(Stack, obj9) };
    const Form = tmp(8053).Form;
    obj9 = { style: obj10, spacing: tmp3(576).space.PX_24, children: items2 };
    obj10 = { paddingHorizontal: token };
    Stack = tmp(5279).Stack;
    let mapped;
    const tmp16 = closure_13;
    if (found != null) {
      mapped = found.map((integration, index) => {
        const integrationId = index;
        let obj = {
          guild,
          theme,
          integration,
          styles,
          onPress() {
            const obj = { integrationId };
            navigation.push(metroImportDefault.INTEGRATION_SETTINGS, obj);
          }
        };
        return closure_1_11(IntegrationItem, obj, integration.id);
      });
    }
    items2 = [mapped, ];
    const obj11 = { children: items3 };
    const obj12 = { variant: "text-sm/medium", color: "text-muted", children: formatResult };
    items2[1] = closure_11(tmp(4832).Text, obj12);
    items3 = [closure_11(Form, obj8), closure_11(tmp(6461).NavScrim, {})];
    return closure_12(tmp16, obj11);
  }
};
