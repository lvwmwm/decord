// Module ID: 18264
// Function ID: 18265
// Name: GuildSettingsModalIntegrationPlatform
// Dependencies: [19, 17, 8622, 1085, 21, 5091, 587, 18225, 18195, 5760, 6163, 1415, 4930, 6269, 6186, 6889, 1126, 8621, 5299, 5395, 558, 576, 4779, 1503, 504, 4992, 6205, 7082, 7087, 2127, 8563, 5374, 5087, 6726, 2]

// Module 18264 (GuildSettingsModalIntegrationPlatform)
import nativeDefault from "native" /* 587 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5299 */;
import AlertDefault from "Alert" /* 5395 */;
import PlatformsDefault from "Platforms" /* 5760 */;
import NavigatorHeader from "NavigatorHeader" /* 6205 */;
import HeaderActionButton2 from "HeaderActionButton" /* 7082 */;
import openUserSettings from "openUserSettings" /* 7087 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8621 */;
import GuildSettingsModalIntegrations from "GuildSettingsModalIntegrations" /* 18225 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8622 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let constants, constants2, dependencyMap, navigation;

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
const intl6 = tmp(1126);
const AvatarUtils = tmp(1415);
const shared = tmp(4930);
const TableRow2 = tmp(6186);
const TableRowGroup2 = tmp(6269);
const TableSwitchRow2 = tmp(6889);
const IntegrationTypes = tmp(18195);
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
        const tmp8Result = tmp8(6163);
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
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsModalIntegrationPlatform(closeGuildSettings) {
  let contentContainerStyle;
  let found;
  let hasChanges;
  let name;
  let platformType;
  let styles;
  let theme;
  let tmp13;
  let tmp14;
  let tmp31;
  let tmp4Result3;
  let tmp4Result4;
  let tmp8;
  let tmp9;
  let tmp = platformType;
  let obj = platformType(576);
  const cResult = obj.c(50);
  ({ contentContainerStyle, platformType } = closeGuildSettings);
  closeGuildSettings = closeGuildSettings.closeGuildSettings;
  let obj2 = platformType(4779);
  const token = obj2.useToken(closeGuildSettings(587).modules.mobile.TABLE_ROW_PADDING);
  const tmp6 = closure_13();
  dependencyMap = tmp6;
  const obj3 = platformType(1503);
  navigation = obj3.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [hasChanges];
    const fn = function i() {
      const obj = { guild: hasChanges.getGuild(), submitting: hasChanges.isSubmitting(), hasChanges: hasChanges.hasChanges() };
      return obj;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp8, tmp9);
  const submitting = stateFromStoresObject.submitting;
  hasChanges = stateFromStoresObject.hasChanges;
  const guild = stateFromStoresObject.guild;
  const tmp12 = closeGuildSettings(4992)();
  constants2 = tmp12;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [hasChanges];
    class A {
      constructor() {
        return hasChanges.getProps().integrations;
      }
    }
    cResult[2] = items1;
    cResult[3] = A;
    tmp14 = A;
    tmp13 = items1;
  } else {
    tmp13 = cResult[2];
    tmp14 = cResult[3];
  }
  const tmpResult2 = tmp(504);
  const stateFromStores = tmpResult2.useStateFromStores(tmp13, tmp14);
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === closeGuildSettings) {
      if (cResult[6] === contentContainerStyle) {
        if (cResult[7] === guild) {
          if (cResult[8] === hasChanges) {
            if (cResult[9] === navigation) {
              if (cResult[10] === platformType) {
                if (cResult[11] === tmp6) {
                  if (cResult[12] === submitting) {
                    if (cResult[13] === token) {
                      if (cResult[14] === tmp12) {
                        class A {
                          constructor() {
                            return hasChanges.getProps().integrations;
                          }
                        }
                      }
                      const _Symbol = Symbol;
                      class A {
                        constructor() {
                          return hasChanges.getProps().integrations;
                        }
                      }
                      return tmp31;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const forResult = Symbol.for("react.early_return_sentinel");
  if (stateFromStores != null) {
    found = stateFromStores.filter((type) => type.type === platformType);
  }
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  tmp31 = null;
  let tmp32;
  let tmp33;
  let tmp34;
  if (null != guild) {
    let tmp39;
    let tmp40;
    let tmp45;
    let tmp50;
    function onSave() {
      if (null != guild) {
        const obj2 = { features: guild.features };
        const obj = GuildSettingsActionCreatorsDefault;
        obj.saveGuild(guild.id, obj2);
      }
    }
    const setOptions = navigation.setOptions;
    class A {
      constructor() {
        return hasChanges.getProps().integrations;
      }
    }
    const obj4 = {
      headerLeft: undefined,
      title: name,
      headerRight() {
          let intl;
          let tmp3;
          const tmp = submitting;
          if (tmp) {
            tmp3 = authStore(NavigatorHeader.HeaderSubmittingIndicator, {});
          } else {
            tmp3 = null;
            if (hasChanges) {
              const obj = { text: intl.string(intl6.t["R3BPH+"]), onPress: onSave };
              const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
              intl = intl6.intl;
              tmp3 = authStore(HeaderActionButton, obj);
            }
          }
          return tmp3;
        }
    };
    const tmp4Result = closeGuildSettings(5760);
    const value = tmp4Result.get(platformType);
    name = undefined;
    if (value != null) {
      name = value.name;
    }
    setOptions(obj4);
    if (cResult[24] !== navigation) {
      function handleViewIntegration(integrationId) {
        const obj = { integrationId };
        navigation.push(metroRequire.INTEGRATION_SETTINGS, obj);
      }
      cResult[24] = navigation;
      class A {
        constructor() {
          return hasChanges.getProps().integrations;
        }
      }
      cResult[25] = handleViewIntegration;
      tmp39 = handleViewIntegration;
    } else {
      tmp39 = cResult[25];
    }
    constants = tmp39;
    if (cResult[26] !== closeGuildSettings) {
      function onConectTap() {
        closeGuildSettings();
        const obj = openUserSettings;
        const obj2 = { screen: constants.CONNECTIONS, isRootScreen: true };
        obj.openUserSettings(obj2);
      }
      cResult[26] = closeGuildSettings;
      class A {
        constructor() {
          return hasChanges.getProps().integrations;
        }
      }
      cResult[27] = onConectTap;
      tmp40 = onConectTap;
    } else {
      tmp40 = cResult[27];
    }
    if (onSave.YOUTUBE === platformType) {
      let tmp46;
      if (cResult[28] !== tmp40) {
        const intl2 = tmp(1126).intl;
        const format2 = intl2.format;
        const obj5 = { connectAction: null, helpdeskArticle: tmp4Result3.getArticleURL(constants2.YOUTUBE_INTEGRATION) };
        class A {
          constructor() {
            return hasChanges.getProps().integrations;
          }
        }
        const v4OSAQ9 = tmp(1126).t["4OSAQ9"];
        tmp4Result3 = closeGuildSettings(2127);
        const format2Result = format2(v4OSAQ9, obj5);
        cResult[28] = tmp40;
        cResult[29] = format2Result;
        tmp46 = format2Result;
      } else {
        tmp46 = cResult[29];
      }
      tmp45 = tmp46;
    } else if (tmp41.TWITCH === platformType) {
      let tmp42;
      if (cResult[30] !== tmp40) {
        let intl = tmp(1126).intl;
        const format = intl.format;
        const obj6 = { connectAction: null, helpdeskArticle: tmp4Result4.getArticleURL(constants2.TWITCH_INTEGRATION) };
        class A {
          constructor() {
            return hasChanges.getProps().integrations;
          }
        }
        const ro1jEN = tmp(1126).t.ro1jEN;
        tmp4Result4 = closeGuildSettings(2127);
        const formatResult = format(ro1jEN, obj6);
        cResult[30] = tmp40;
        cResult[31] = formatResult;
        tmp42 = formatResult;
      } else {
        tmp42 = cResult[31];
      }
      tmp45 = tmp42;
    }
    const Form = tmp(8563).Form;
    const form = tmp6.form;
    const Stack = tmp(5374).Stack;
    if (cResult[32] !== token) {
      const obj7 = { paddingHorizontal: token };
      class A {
        constructor() {
          return hasChanges.getProps().integrations;
        }
      }
      cResult[33] = obj7;
      tmp50 = obj7;
    } else {
      tmp50 = cResult[33];
    }
    let mapped;
    const PX_24 = tmp4(587).space.PX_24;
    if (found != null) {
      mapped = found.map((integration, index) => {
        let closure_0 = index;
        const obj = {
          guild,
          theme,
          integration,
          styles,
          onPress() {
            return constants(index);
          }
        };
        return closure_1_10(IntegrationItem, obj, integration.id);
      });
    }
    tmp28 = mapped;
    tmp26 = contentContainerStyle;
    tmp27 = form;
    tmp29 = PX_24;
    tmp30 = tmp50;
    tmp31 = forResult;
    tmp32 = tmp45;
    tmp33 = Form;
    tmp34 = Stack;
  }
  cResult[4] = stateFromStores;
  cResult[5] = closeGuildSettings;
  cResult[6] = contentContainerStyle;
  cResult[7] = guild;
  cResult[8] = hasChanges;
  cResult[9] = navigation;
  cResult[10] = platformType;
  cResult[11] = tmp6;
  cResult[12] = submitting;
  cResult[13] = token;
  cResult[14] = tmp12;
  cResult[15] = tmp34;
  cResult[16] = tmp33;
  cResult[17] = tmp32;
  cResult[18] = tmp31;
  cResult[19] = tmp30;
  cResult[20] = tmp29;
  cResult[21] = tmp28;
  cResult[22] = tmp27;
  cResult[23] = tmp26;
}) : (function GuildSettingsModalIntegrationPlatform(platformType) {
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
  let obj = platformType(4779);
  let tmp3 = closeGuildSettings;
  const token = obj.useToken(closeGuildSettings(587).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_13();
  dependencyMap = tmp5;
  let obj2 = platformType(1503);
  navigation = obj2.useNavigation();
  const items = [c5];
  const obj3 = platformType(504);
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => {
    const obj = { guild: c5.getGuild(), submitting: c5.isSubmitting(), hasChanges: c5.hasChanges() };
    return obj;
  });
  const submitting = stateFromStoresObject.submitting;
  ({ hasChanges: c5, guild } = stateFromStoresObject);
  constants2 = closeGuildSettings(4992)();
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
    const tmp3Result = tmp3(5760);
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
      let intl = tmp(1126).intl;
      const format = intl.format;
      const obj6 = { connectAction: onConectTap, helpdeskArticle: tmp3Result3.getArticleURL(constants2.YOUTUBE_INTEGRATION) };
      const v4OSAQ9 = tmp(1126).t["4OSAQ9"];
      tmp3Result3 = tmp3(2127);
      formatResult = format(v4OSAQ9, obj6);
    } else if (tmp11.TWITCH === platformType) {
      const intl2 = tmp(1126).intl;
      const format2 = intl2.format;
      const obj7 = { connectAction: onConectTap, helpdeskArticle: tmp3Result4.getArticleURL(constants2.TWITCH_INTEGRATION) };
      const ro1jEN = tmp(1126).t.ro1jEN;
      tmp3Result4 = tmp3(2127);
      formatResult = format2(ro1jEN, obj7);
    }
    const obj8 = { style: tmp5.form, contentContainerStyle, children: closure_11(Stack, obj9) };
    const Form = tmp(8563).Form;
    obj9 = { style: obj10, spacing: tmp3(587).space.PX_24, children: items2 };
    obj10 = { paddingHorizontal: token };
    Stack = tmp(5374).Stack;
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
    items2[1] = closure_10(tmp(5087).Text, obj12);
    items3 = [closure_10(Form, obj8), closure_10(tmp(6726).NavScrim, {})];
    return closure_11(tmp16, obj11);
  }
});
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationPlatform.tsx");

export default tmp6;
