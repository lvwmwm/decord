// Module ID: 19915
// Function ID: 19916
// Name: GuildSettingsModalIntegrations
// Dependencies: [19, 4944, 8532, 1071, 21, 5012, 575, 5576, 1500, 504, 5221, 19916, 19845, 8046, 6084, 6109, 6113, 1112, 18991, 19116, 14025, 6147, 5699, 1412, 5019, 19917, 19918, 19919, 8531, 5586, 2]
// Exports: default

// Module 19915 (GuildSettingsModalIntegrations)
import nativeDefault from "native" /* 575 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8531 */;
import openGuildSettingsRemoveAppAlertDefault from "openGuildSettingsRemoveAppAlert" /* 19918 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4944 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8532 */;
import Constants from "Constants" /* 1071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let PlatformTypes;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ GuildSettingsSections: hasOwnProperty, Permissions: metroRequire, PlatformTypes } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let items = [, ];
({ TWITCH: arr[0], YOUTUBE: arr[1] } = PlatformTypes);
let createStyles = createStyles_mod;
let obj = { screenContainer: obj2, screenContent: obj3, platformIcon: { width: 24, height: 24 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrations.tsx");

export default function GuildSettingsModalIntegrations(contentContainerStyle) {
  let Stack;
  let application;
  let canManageGuild;
  let canManageWebhooks;
  let closure_0;
  let closure_1;
  let id;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items5;
  let items7;
  let items8;
  let obj10;
  let obj9;
  _require = undefined;
  importDefault = undefined;
  let stateFromStores;
  let closure_3;
  let found;
  let closure_5;
  let found2;
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
  let obj = require("useToken");
  const token = obj.useToken(require("native").modules.mobile.TABLE_ROW_PADDING);
  let tmp2 = closure_11();
  _require = tmp2;
  let obj2 = require("useNavigation");
  importDefault = obj2.useNavigation();
  let obj3 = require("get initialized");
  items = [found];
  stateFromStores = obj3.useStateFromStores(items, () => found.getGuild(), []);
  let obj4 = require("get initialized");
  const items1 = [closure_3];
  const stateFromStoresObject = obj4.useStateFromStoresObject(items1, () => {
    let guildPermissionProps;
    if (null == stateFromStores) {
      guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
    } else {
      guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
    }
    return guildPermissionProps;
  });
  ({ canManageWebhooks, canManageGuild } = stateFromStoresObject);
  closure_3 = require("useTheme")();
  let obj5 = require("get initialized");
  const items2 = [found];
  let stateFromStores1 = obj5.useStateFromStores(items2, () => found.getProps().integrations);
  found = undefined;
  if (stateFromStores1 != null) {
    found = stateFromStores1.filter((type) => items.includes(type.type));
  }
  const items3 = [];
  if (canManageGuild) {
    if (stateFromStores1 == null) {
      stateFromStores1 = [];
    }
    const tmp6 = stateFromStores1;
    const iter = stateFromStores1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      ({ id, application } = nextResult);
      let tmp10 = "discord" === nextResult.type;
      if (tmp10) {
        tmp10 = null != application;
      }
      if (tmp10) {
        let obj6 = { integrationId: id, application };
        let arr = items3.push(obj6);
      }
      continue;
    }
  }
  let id1;
  const tmp17 = require("useConjureServerApplicationIds");
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  closure_5 = tmp17(id1, items3.map((application) => application.application.id));
  const found1 = items3.filter((application) => closure_5.includes(application.application.id));
  found2 = items3.filter((application) => !closure_5.includes(application.application.id));
  const items4 = [closure_3];
  const obj7 = require("get initialized");
  const stateFromStoresArray = obj7.useStateFromStoresArray(items4, () => {
    if (null == stateFromStores) {
      items = [];
    } else {
      found = found2.filter((application) => {
        application = application.application;
        const canManageUserResult = null == application.bot || closure_3.canManageUser(found2.MANAGE_GUILD, application.bot.id, stateFromStores);
        return canManageUserResult;
      });
      items = found.map((application) => application.application.id);
    }
    return items;
  });
  let id2;
  const useChannelsAllowedToUnlink = require("useChannelsAllowedToUnlink").useChannelsAllowedToUnlink;
  require("useChannelsAllowedToUnlink");
  if (stateFromStores != null) {
    id2 = stateFromStores.id;
  }
  let tmp29Result4 = useChannelsAllowedToUnlink(id2).length > 0;
  if (canManageGuild) {
    let num;
    if (found != null) {
      num = found.length;
    }
    if (num == null) {
      num = 0;
    }
    canManageGuild = num > 0;
  }
  let tmp25 = null;
  if (null != stateFromStores) {
    let tmp27Result2;
    if (canManageWebhooks || tmp29Result4 || canManageGuild) {
      const obj8 = { style: tmp2.screenContainer, contentContainerStyle: items5, children: closure_8(Stack, obj9) };
      items5 = [tmp2.screenContent, contentContainerStyle];
      const Form = tmp19(tmp16[13]).Form;
      obj9 = { style: obj10, spacing: require("native").space.PX_24, children: items7 };
      obj10 = { paddingHorizontal: token };
      Stack = tmp19(tmp16[14]).Stack;
      let tmp27Result = null;
      const tmp28 = closure_9;
      if (canManageWebhooks || tmp29Result4 || canManageGuild) {
        let tmp29Result = canManageWebhooks;
        const TableRowGroup = tmp19(tmp16[15]).TableRowGroup;
        if (canManageWebhooks) {
          const obj11 = {
            label: intl.string(require("intl").t.jp25Id),
            subLabel: intl2.string(require("intl").t.mKIOkI),
            icon: closure_7(require("WebhookIcon").WebhookIcon, {}),
            arrow: true,
            onPress() {
                      return closure_1.push(hasOwnProperty.WEBHOOKS);
                    }
          };
          let TableRow = tmp19(tmp16[16]).TableRow;
          intl = tmp19(tmp16[17]).intl;
          intl2 = tmp19(tmp16[17]).intl;
          tmp29Result = tmp29(TableRow, obj11);
        }
        const items6 = [tmp29Result, , , ];
        if (canManageWebhooks) {
          const obj12 = {
            label: intl3.string(require("intl").t.OrV60r),
            subLabel: intl4.string(require("intl").t.rQREJl),
            icon: closure_7(require("ChannelsFollowedIcon").ChannelsFollowedIcon, {}),
            arrow: true,
            onPress() {
                      return closure_1.push(hasOwnProperty.CHANNELS_FOLLOWED);
                    }
          };
          const TableRow2 = tmp19(tmp16[16]).TableRow;
          intl3 = tmp19(tmp16[17]).intl;
          intl4 = tmp19(tmp16[17]).intl;
          canManageWebhooks = tmp29(TableRow2, obj12);
        }
        items6[1] = canManageWebhooks;
        if (tmp29Result4) {
          const obj13 = {
            label: intl5.string(require("intl").t.tqtDXC),
            subLabel: intl6.string(require("intl").t.v8819e),
            icon: closure_7(require("RefreshIcon").RefreshIcon, {}),
            arrow: true,
            onPress() {
                      return closure_1.push(hasOwnProperty.LOBBIES_LINKED);
                    }
          };
          const TableRow3 = tmp19(tmp16[16]).TableRow;
          intl5 = tmp19(tmp16[17]).intl;
          intl6 = tmp19(tmp16[17]).intl;
          tmp29Result4 = tmp29(TableRow3, obj13);
        }
        items6[2] = tmp29Result4;
        if (canManageGuild) {
          canManageGuild = items.map((item) => {
            let intl;
            let obj4;
            let obj5;
            let obj6;
            let tmp2Result;
            const platformType = item;
            let obj = found;
            let someResult;
            if (found != null) {
              someResult = obj.some((type) => type.type === platformType);
            }
            if (someResult) {
              const obj2 = closure_1(stateFromStores[21]);
              const value = obj2.get(item);
              let tmp6Result = null;
              const tmp2 = closure_1;
              if (null != value) {
                const obj3 = {
                  label: value.name,
                  subLabel: intl.formatToPlainString(platformType(stateFromStores[17]).t.VXU4EU, obj4),
                  icon: closure_1_7(tmp2Result, obj6),
                  arrow: true,
                  onPress() {
                        const obj = { platformType };
                        return closure_1.push(hasOwnProperty.INTEGRATION_PLATFORM, obj);
                      }
                };
                const TableRow = platformType(tmp3[16]).TableRow;
                intl = platformType(tmp3[17]).intl;
                obj4 = { platformName: value.name };
                tmp2Result = tmp2(stateFromStores[22]);
                const makeSource = platformType(stateFromStores[23]).makeSource;
                platformType(stateFromStores[23]);
                const icon = value.icon;
                obj6 = { source: makeSource(obj5.isThemeDark(closure_3) ? icon.darkPNG : icon.lightPNG), style: platformType.platformIcon };
                obj5 = platformType(stateFromStores[24]);
                tmp6Result = tmp6(TableRow, obj3, item);
              }
              return tmp6Result;
            } else {
              return null;
            }
          });
        }
        const obj14 = { hasIcons: true, children: items6 };
        items6[3] = canManageGuild;
        tmp27Result = tmp27(TableRowGroup, obj14);
      }
      items7 = [tmp27Result, , ];
      let tmp29Result5 = null;
      if (found2.length > 0) {
        const obj15 = {
          title: intl7.string(require("intl").t.pUBKht),
          apps: found2,
          removableApplicationIds: stateFromStoresArray,
          onRemove(app) {
                  const obj = { guildId: stateFromStores.id, app };
                  return openGuildSettingsRemoveAppAlertDefault(obj);
                }
        };
        const tmp15Result = require("GuildSettingsModalIntegrationsApps");
        intl7 = tmp19(tmp16[17]).intl;
        tmp29Result5 = tmp29(tmp15Result, obj15);
      }
      items7[1] = tmp29Result5;
      let tmp29Result6 = null;
      if (found1.length > 0) {
        const obj16 = {
          guildId: stateFromStores.id,
          apps: found1,
          onRemoveIntegration(arg0) {
                  const obj = GuildSettingsActionCreatorsDefault;
                  return obj.disableIntegration(stateFromStores.id, arg0);
                }
        };
        tmp29Result6 = tmp29(tmp15(tmp16[27]), obj16);
      }
      const obj17 = { children: items8 };
      items7[2] = tmp29Result6;
      items8 = [closure_7(Form, obj8), closure_7(require("NavScrim").NavScrim, {})];
      tmp27Result2 = tmp27(tmp28, obj17);
    } else {
      tmp27Result2 = null;
    }
    tmp25 = tmp27Result2;
  }
  return tmp25;
};
export const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = items;
