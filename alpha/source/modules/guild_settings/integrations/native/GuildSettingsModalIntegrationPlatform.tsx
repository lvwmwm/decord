// Module ID: 19704
// Function ID: 19705
// Name: GuildSettingsModalIntegrationPlatform
// Dependencies: [19, 17, 9056, 1072, 21, 5009, 575, 19665, 19635, 6568, 5712, 1410, 5016, 7054, 6969, 7363, 1114, 9055, 5954, 6025, 5591, 1498, 504, 5248, 6992, 7552, 7557, 2062, 8169, 6022, 5619, 5601, 2]
// Exports: default

// Module 19704 (GuildSettingsModalIntegrationPlatform)
import nativeDefault from "native" /* 575 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5954 */;
import AlertDefault from "Alert" /* 6025 */;
import PlatformsDefault from "Platforms" /* 6568 */;
import NavigatorHeader from "NavigatorHeader" /* 6992 */;
import HeaderActionButton2 from "HeaderActionButton" /* 7552 */;
import openUserSettings from "openUserSettings" /* 7557 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9055 */;
import GuildSettingsModalIntegrations from "GuildSettingsModalIntegrations" /* 19665 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9056 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let constants2, dependencyMap, navigation;

let c10;
let c3;
let c9;
let closure_12;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp;
let unpackModuleId;
const intl6 = tmp(1114);
const AvatarUtils = tmp(1410);
const shared = tmp(5016);
const TableRow2 = tmp(6969);
const TableRowGroup2 = tmp(7054);
const TableSwitchRow2 = tmp(7363);
const IntegrationTypes = tmp(19635);
({ ActivityIndicator: c3, View: closure_4 } = react_native);
({ GuildSettingsSections: metroRequire, HelpdeskArticles: metroImportDefault, PlatformTypes: metroImportAll, UserSettingsSections: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let obj = { form: obj2, trailingWrapper: { flexDirection: "row", alignItems: "center" }, platformIcon: { width: 24, height: 24 } };
obj2 = { paddingTop: nativeDefault.space.PX_16 };
let closure_13 = createStyles.createStyles(obj);
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
            const intl3 = tmp10(dependencyMap[16]).intl;
            stringResult = intl3.string(tmp10(dependencyMap[16]).t.anKQWU);
          } else {
            const intl2 = tmp10(dependencyMap[16]).intl;
            stringResult = intl2.string(tmp10(dependencyMap[16]).t["BW/xtn"]);
          }
          intl4 = tmp10(dependencyMap[16]).intl;
          intl5 = tmp10(dependencyMap[16]).intl;
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
      const tmp8 = importDefault;
      if (null != value) {
        const tmp8Result = tmp8(5712);
        const makeSource = AvatarUtils.makeSource;
        AvatarUtils;
        const icon = value.icon;
        const obj2 = { source: makeSource(tmpResult2.isThemeDark(theme) ? icon.darkPNG : icon.lightPNG), style: styles.platformIcon };
        tmpResult2 = shared;
        tmp12Result = authStore(tmp8Result, obj2);
      }
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      let str1;
      const TableRow = TableRow2.TableRow;
      const tmp15 = unpackModuleId;
      if (integration.user != null) {
        str1 = str2.toString();
      }
      const obj3 = {
        label: str1,
        subLabel: combined,
        trailing: authStore(tmp18, obj4),
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
      tmp18 = React3;
      if (syncing) {
        syncing = tmp16(_false, { animating: true, size: "small" });
      }
      let enabled = integration.enabled;
      syncing2 = !enabled;
      if (enabled) {
        syncing2 = integration.syncing;
      }
      const obj5 = { hasIcons: true, children: items };
      items = [authStore(TableRow, obj3), ];
      const _Boolean = Boolean;
      const obj6 = { value: Boolean(self.state.enabled), disabled: true === integration.syncing, onValueChange: self.handleToggleEnabled, label: intl.string(intl6.t.vQC6vR) };
      const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
      intl = intl6.intl;
      items[1] = authStore(TableSwitchRow, obj6);
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
  let _undefined;
  let c5;
  let found;
  let guild;
  let items2;
  let items3;
  let name;
  let obj10;
  let obj9;
  let styles;
  let theme;
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
  let obj = platformType(5591);
  let tmp3 = closeGuildSettings;
  const token = obj.useToken(closeGuildSettings(575).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_13();
  dependencyMap = tmp5;
  let obj2 = platformType(1498);
  navigation = obj2.useNavigation();
  const items = [c5];
  const obj3 = platformType(504);
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => {
    const obj = { guild: c5.getGuild(), submitting: c5.isSubmitting(), hasChanges: c5.hasChanges() };
    return obj;
  });
  const submitting = stateFromStoresObject.submitting;
  ({ hasChanges: c5, guild } = stateFromStoresObject);
  constants2 = closeGuildSettings(5248)();
  const items1 = [c5];
  const obj4 = platformType(504);
  const stateFromStores = obj4.useStateFromStores(items1, () => c5.getProps().integrations);
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
            tmp3 = authStore(NavigatorHeader.HeaderSubmittingIndicator, {});
          } else {
            tmp3 = null;
            if (c5) {
              const obj = { text: intl.string(intl6.t["R3BPH+"]), onPress: onSave };
              const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
              intl = intl6.intl;
              tmp3 = authStore(HeaderActionButton, obj);
            }
          }
          return tmp3;
        }
    };
    const tmp3Result = tmp3(6568);
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
    if (onSave.YOUTUBE === platformType) {
      let intl = tmp(1114).intl;
      const format = intl.format;
      const obj6 = { connectAction: onConectTap, helpdeskArticle: tmp3Result3.getArticleURL(constants2.YOUTUBE_INTEGRATION) };
      const v4OSAQ9 = tmp(1114).t["4OSAQ9"];
      tmp3Result3 = tmp3(2062);
      formatResult = format(v4OSAQ9, obj6);
    } else if (tmp11.TWITCH === platformType) {
      const intl2 = tmp(1114).intl;
      const format2 = intl2.format;
      const obj7 = { connectAction: onConectTap, helpdeskArticle: tmp3Result4.getArticleURL(constants2.TWITCH_INTEGRATION) };
      const ro1jEN = tmp(1114).t.ro1jEN;
      tmp3Result4 = tmp3(2062);
      formatResult = format2(ro1jEN, obj7);
    }
    const obj8 = { style: tmp5.form, contentContainerStyle, children: closure_11(Stack, obj9) };
    const Form = tmp(8169).Form;
    obj9 = { style: obj10, spacing: tmp3(575).space.PX_24, children: items2 };
    obj10 = { paddingHorizontal: token };
    Stack = tmp(6022).Stack;
    let mapped;
    const tmp16 = closure_12;
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
            navigation.push(metroRequire.INTEGRATION_SETTINGS, obj);
          }
        };
        return closure_1_10(IntegrationItem, obj, integration.id);
      });
    }
    items2 = [mapped, ];
    const obj11 = { children: items3 };
    const obj12 = { variant: "text-sm/medium", color: "text-muted", children: formatResult };
    items2[1] = closure_10(tmp(5619).Text, obj12);
    items3 = [closure_10(Form, obj8), closure_10(tmp(5601).NavScrim, {})];
    return closure_11(tmp16, obj11);
  }
};
