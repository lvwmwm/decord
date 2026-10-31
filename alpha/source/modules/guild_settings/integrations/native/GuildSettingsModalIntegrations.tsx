// Module ID: 19722
// Function ID: 19723
// Name: GuildSettingsModalIntegrations
// Dependencies: [19, 4946, 9075, 1072, 21, 5014, 575, 5596, 1497, 504, 5253, 19651, 8177, 6027, 7060, 6975, 1113, 18802, 18920, 12553, 6574, 5717, 1409, 5021, 5606, 2]
// Exports: default

// Module 19722 (GuildSettingsModalIntegrations)
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9075 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let PlatformTypes;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ GuildSettingsSections: hasOwnProperty, PlatformTypes } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let items = [, ];
({ TWITCH: arr[0], YOUTUBE: arr[1] } = PlatformTypes);
let createStyles = createStyles_mod;
let obj = { screenContainer: obj2, screenContent: obj3, platformIcon: { width: 24, height: 24 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_16 };
let closure_10 = createStyles(obj);
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
  let closure_3;
  let found;
  const tmp = _require;
  let tmp2 = stateFromStores;
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
  let obj = require("useToken");
  const tmp3 = importDefault;
  const token = obj.useToken(require("native").modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_10();
  _require = tmp5;
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
  const stateFromStores1 = obj5.useStateFromStores(items2, () => found.getProps().integrations);
  found = undefined;
  if (stateFromStores1 != null) {
    found = stateFromStores1.filter((type) => items.includes(type.type));
  }
  let id;
  const useChannelsAllowedToUnlink = tmp(tmp2[11]).useChannelsAllowedToUnlink;
  tmp(tmp2[11]);
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
    let obj6 = { style: tmp5.screenContainer, contentContainerStyle: items3, children: closure_6(Stack, obj7) };
    items3 = [tmp5.screenContent, contentContainerStyle];
    const Form = tmp(tmp2[12]).Form;
    obj7 = { style: obj8, spacing: tmp3(tmp2[6]).space.PX_24, children: closure_7(TableRowGroup, obj13) };
    obj8 = { paddingHorizontal: token };
    Stack = tmp(tmp2[13]).Stack;
    let tmp16Result = canManageWebhooks;
    TableRowGroup = tmp(tmp2[14]).TableRowGroup;
    const tmp15 = closure_8;
    if (canManageWebhooks) {
      const obj9 = {
        label: intl.string(tmp(tmp2[16]).t.jp25Id),
        subLabel: intl2.string(tmp(tmp2[16]).t.mKIOkI),
        icon: closure_6(tmp(tmp2[17]).WebhookIcon, {}),
        arrow: true,
        onPress() {
              return closure_1.push(hasOwnProperty.WEBHOOKS);
            }
      };
      let TableRow = tmp(tmp2[15]).TableRow;
      intl = tmp(tmp2[16]).intl;
      intl2 = tmp(tmp2[16]).intl;
      tmp16Result = tmp16(TableRow, obj9);
    }
    const items4 = [tmp16Result, , , ];
    if (canManageWebhooks) {
      const obj10 = {
        label: intl3.string(tmp(tmp2[16]).t.OrV60r),
        subLabel: intl4.string(tmp(tmp2[16]).t.rQREJl),
        icon: closure_6(tmp(tmp2[18]).ChannelsFollowedIcon, {}),
        arrow: true,
        onPress() {
              return closure_1.push(hasOwnProperty.CHANNELS_FOLLOWED);
            }
      };
      const TableRow2 = tmp(tmp2[15]).TableRow;
      intl3 = tmp(tmp2[16]).intl;
      intl4 = tmp(tmp2[16]).intl;
      canManageWebhooks = tmp16(TableRow2, obj10);
    }
    items4[1] = canManageWebhooks;
    if (tmp16Result2) {
      const obj11 = {
        label: intl5.string(tmp(tmp2[16]).t.tqtDXC),
        subLabel: intl6.string(tmp(tmp2[16]).t.v8819e),
        icon: closure_6(tmp(tmp2[19]).RefreshIcon, {}),
        arrow: true,
        onPress() {
              return closure_1.push(hasOwnProperty.LOBBIES_LINKED);
            }
      };
      const TableRow3 = tmp(tmp2[15]).TableRow;
      intl5 = tmp(tmp2[16]).intl;
      intl6 = tmp(tmp2[16]).intl;
      tmp16Result2 = tmp16(TableRow3, obj11);
    }
    items4[2] = tmp16Result2;
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
          const obj2 = closure_1(stateFromStores[20]);
          const value = obj2.get(item);
          let tmp6Result = null;
          const tmp2 = closure_1;
          if (null != value) {
            const obj3 = {
              label: value.name,
              subLabel: intl.formatToPlainString(platformType(stateFromStores[16]).t.VXU4EU, obj4),
              icon: closure_1_6(tmp2Result, obj6),
              arrow: true,
              onPress() {
                    const obj = { platformType };
                    return closure_1.push(hasOwnProperty.INTEGRATION_PLATFORM, obj);
                  }
            };
            const TableRow = platformType(tmp3[15]).TableRow;
            intl = platformType(tmp3[16]).intl;
            obj4 = { platformName: value.name };
            tmp2Result = tmp2(stateFromStores[21]);
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
    items5 = [closure_6(Form, obj6), closure_6(tmp(tmp2[24]).NavScrim, {})];
    tmp14Result = tmp14(tmp15, obj12);
  }
  return tmp12;
};
export const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = items;
