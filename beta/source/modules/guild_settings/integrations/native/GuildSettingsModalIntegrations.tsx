// Module ID: 17361
// Function ID: 17362
// Name: GuildSettingsModalIntegrations
// Dependencies: [19, 17, 4469, 9049, 1074, 21, 4836, 576, 4531, 1485, 504, 4767, 17294, 8053, 5279, 5999, 5917, 1115, 16553, 16661, 14506, 5595, 1397, 4685, 6461, 2]
// Exports: default

// Module 17361 (GuildSettingsModalIntegrations)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9049 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let PlatformTypes;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const Image = react_native.Image;
({ GuildSettingsSections: metroRequire, PlatformTypes } = Constants);
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
  let TableRowGroup;
  let canManageGuild;
  let canManageWebhooks;
  let closure_0;
  let closure_1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items3;
  let items5;
  let obj13;
  let obj7;
  let obj8;
  _require = undefined;
  importDefault = undefined;
  let stateFromStores;
  let found;
  const tmp = _require;
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
  let obj = require("useToken");
  const tmp3 = importDefault;
  const token = obj.useToken(require("native").modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_11();
  _require = tmp5;
  let obj2 = require("useNavigation");
  importDefault = obj2.useNavigation();
  let obj3 = require("get initialized");
  items = [GuildSettingsStore];
  stateFromStores = obj3.useStateFromStores(items, () => GuildSettingsStore.getGuild(), []);
  let obj4 = require("get initialized");
  const items1 = [found];
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
  let closure_3 = require("useTheme")();
  let obj5 = require("get initialized");
  const items2 = [GuildSettingsStore];
  const stateFromStores1 = obj5.useStateFromStores(items2, () => GuildSettingsStore.getProps().integrations);
  found = undefined;
  if (stateFromStores1 != null) {
    found = stateFromStores1.filter((type) => items.includes(type.type));
  }
  let id;
  const useChannelsAllowedToUnlink = tmp(tmp2[12]).useChannelsAllowedToUnlink;
  tmp(stateFromStores[12]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmp16Result2 = useChannelsAllowedToUnlink(id).length > 0;
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
  let tmp12 = null;
  if (null != stateFromStores) {
    if (!canManageWebhooks) {
      let tmp14Result;
      if (!tmp16Result2) {
        tmp14Result = null;
      }
      tmp12 = tmp14Result;
    }
    let obj6 = { style: tmp5.screenContainer, contentContainerStyle: items3, children: closure_7(Stack, obj7) };
    items3 = [tmp5.screenContent, contentContainerStyle];
    const Form = tmp(tmp2[13]).Form;
    obj7 = { style: obj8, spacing: tmp3(stateFromStores[7]).space.PX_24, children: closure_8(TableRowGroup, obj13) };
    obj8 = { paddingHorizontal: token };
    Stack = tmp(tmp2[14]).Stack;
    let tmp16Result = canManageWebhooks;
    TableRowGroup = tmp(tmp2[15]).TableRowGroup;
    const tmp15 = closure_9;
    if (canManageWebhooks) {
      const obj9 = {
        label: intl.string(tmp(stateFromStores[17]).t.jp25Id),
        subLabel: intl2.string(tmp(stateFromStores[17]).t.mKIOkI),
        icon: closure_7(tmp(stateFromStores[18]).WebhookIcon, {}),
        arrow: true,
        onPress() {
              return closure_1.push(metroRequire.WEBHOOKS);
            }
      };
      let TableRow = tmp(tmp2[16]).TableRow;
      intl = tmp(tmp2[17]).intl;
      intl2 = tmp(tmp2[17]).intl;
      tmp16Result = tmp16(TableRow, obj9);
    }
    const items4 = [tmp16Result, , , ];
    if (canManageWebhooks) {
      const obj10 = {
        label: intl3.string(tmp(stateFromStores[17]).t.OrV60r),
        subLabel: intl4.string(tmp(stateFromStores[17]).t.rQREJl),
        icon: closure_7(tmp(stateFromStores[19]).ChannelsFollowedIcon, {}),
        arrow: true,
        onPress() {
              return closure_1.push(metroRequire.CHANNELS_FOLLOWED);
            }
      };
      const TableRow2 = tmp(tmp2[16]).TableRow;
      intl3 = tmp(tmp2[17]).intl;
      intl4 = tmp(tmp2[17]).intl;
      canManageWebhooks = tmp16(TableRow2, obj10);
    }
    items4[1] = canManageWebhooks;
    if (tmp16Result2) {
      const obj11 = {
        label: intl5.string(tmp(stateFromStores[17]).t.tqtDXC),
        subLabel: intl6.string(tmp(stateFromStores[17]).t.v8819e),
        icon: closure_7(tmp(stateFromStores[20]).RefreshIcon, {}),
        arrow: true,
        onPress() {
              return closure_1.push(metroRequire.LOBBIES_LINKED);
            }
      };
      const TableRow3 = tmp(tmp2[16]).TableRow;
      intl5 = tmp(tmp2[17]).intl;
      intl6 = tmp(tmp2[17]).intl;
      tmp16Result2 = tmp16(TableRow3, obj11);
    }
    items4[2] = tmp16Result2;
    if (canManageGuild) {
      canManageGuild = items.map((item) => {
        let intl;
        let obj4;
        let obj5;
        let obj6;
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
          if (null != value) {
            const obj3 = {
              label: value.name,
              subLabel: intl.formatToPlainString(platformType(stateFromStores[17]).t.VXU4EU, obj4),
              icon: closure_1_7(closure_3, obj6),
              arrow: true,
              onPress() {
                    const obj = { platformType };
                    return closure_1.push(metroRequire.INTEGRATION_PLATFORM, obj);
                  }
            };
            const TableRow = platformType(tmp3[16]).TableRow;
            intl = platformType(tmp3[17]).intl;
            obj4 = { platformName: value.name };
            const makeSource = platformType(stateFromStores[22]).makeSource;
            platformType(stateFromStores[22]);
            const icon = value.icon;
            obj6 = { source: makeSource(obj5.isThemeDark(closure_3) ? icon.darkPNG : icon.lightPNG), style: platformType.platformIcon };
            obj5 = platformType(stateFromStores[23]);
            tmp6Result = tmp6(TableRow, obj3, item);
          }
          return tmp6Result;
        } else {
          return null;
        }
      });
    }
    const obj12 = { children: items5 };
    obj13 = { hasIcons: true, children: items4 };
    items4[3] = canManageGuild;
    items5 = [closure_7(Form, obj6), closure_7(tmp(tmp2[24]).NavScrim, {})];
    tmp14Result = tmp14(tmp15, obj12);
  }
  return tmp12;
};
export const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = items;
