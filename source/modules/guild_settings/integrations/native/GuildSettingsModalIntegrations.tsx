// Module ID: 16250
// Function ID: 126520
// Name: PlatformTypes
// Dependencies: [31, 27, 3758, 8439, 653, 33, 4130, 689, 3834, 1456, 566, 4066, 16214, 7495, 4541, 5503, 5165, 1212, 15418, 15523, 13509, 4814, 1392, 3976, 5448, 2]
// Exports: default

// Module 16250 (PlatformTypes)
import "result";
import { Image } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let PlatformTypes;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
let require = arg1;
({ GuildSettingsSections: closure_6, PlatformTypes } = ME);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let items = [, ];
({ TWITCH: arr[0], YOUTUBE: arr[1] } = PlatformTypes);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.screenContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.screenContent = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.platformIcon = { width: 24, height: 24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrations.tsx");

export default function GuildSettingsModalIntegrations(contentContainerStyle) {
  let canManageGuild;
  let canManageWebhooks;
  let found;
  let obj = require(stateFromStores[8]);
  const token = obj.useToken(importDefault(stateFromStores[7]).modules.mobile.TABLE_ROW_PADDING);
  let tmp2 = _createForOfIteratorHelperLoose();
  require = tmp2;
  let obj1 = require(stateFromStores[9]);
  importDefault = obj1.useNavigation();
  let obj2 = require(stateFromStores[10]);
  const items = [closure_5];
  stateFromStores = obj2.useStateFromStores(items, () => outer1_5.getGuild(), []);
  let obj3 = require(stateFromStores[10]);
  const items1 = [found];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    if (null == stateFromStores) {
      let guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
    } else {
      guildPermissionProps = found.getGuildPermissionProps(stateFromStores);
    }
    return guildPermissionProps;
  });
  ({ canManageWebhooks, canManageGuild } = stateFromStoresObject);
  let closure_3 = importDefault(stateFromStores[11])();
  let obj4 = require(stateFromStores[10]);
  const items2 = [closure_5];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => outer1_5.getProps().integrations);
  found = undefined;
  if (null != stateFromStores1) {
    found = stateFromStores1.filter((type) => outer1_10.includes(type.type));
  }
  let obj5 = require(stateFromStores[12]);
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  let tmp7 = obj5.useChannelsAllowedToUnlink(id).length > 0;
  if (canManageGuild) {
    let length;
    if (null != found) {
      length = found.length;
    }
    let num = 0;
    if (null != length) {
      num = length;
    }
    canManageGuild = num > 0;
  }
  let tmp9 = null;
  if (null != stateFromStores) {
    if (!canManageWebhooks) {
      if (!tmp7) {
        let tmp11Result = null;
      }
      tmp9 = tmp11Result;
    }
    obj = {};
    obj = { style: tmp2.screenContainer };
    const items3 = [tmp2.screenContent, contentContainerStyle.contentContainerStyle];
    obj.contentContainerStyle = items3;
    obj1 = {};
    obj2 = { paddingHorizontal: token };
    obj1.style = obj2;
    obj1.spacing = importDefault(stateFromStores[7]).space.PX_24;
    obj3 = { hasIcons: true };
    let tmp17 = canManageWebhooks;
    if (canManageWebhooks) {
      obj4 = {};
      let intl = require(stateFromStores[17]).intl;
      obj4.label = intl.string(require(stateFromStores[17]).t.jp25Id);
      const intl2 = require(stateFromStores[17]).intl;
      obj4.subLabel = intl2.string(require(stateFromStores[17]).t.mKIOkI);
      obj4.icon = callback(require(stateFromStores[18]).WebhookIcon, {});
      obj4.arrow = true;
      obj4.onPress = function onPress() {
        return arr.push(outer1_6.WEBHOOKS);
      };
      tmp17 = callback(require(stateFromStores[16]).TableRow, obj4);
    }
    const items4 = [tmp17, , , ];
    if (canManageWebhooks) {
      obj5 = {};
      const intl3 = require(stateFromStores[17]).intl;
      obj5.label = intl3.string(require(stateFromStores[17]).t.OrV60r);
      const intl4 = require(stateFromStores[17]).intl;
      obj5.subLabel = intl4.string(require(stateFromStores[17]).t.rQREJl);
      obj5.icon = callback(require(stateFromStores[19]).ChannelsFollowedIcon, {});
      obj5.arrow = true;
      obj5.onPress = function onPress() {
        return arr.push(outer1_6.CHANNELS_FOLLOWED);
      };
      canManageWebhooks = callback(require(stateFromStores[16]).TableRow, obj5);
    }
    items4[1] = canManageWebhooks;
    if (tmp7) {
      const obj6 = {};
      const intl5 = require(stateFromStores[17]).intl;
      obj6.label = intl5.string(require(stateFromStores[17]).t.tqtDXC);
      const intl6 = require(stateFromStores[17]).intl;
      obj6.subLabel = intl6.string(require(stateFromStores[17]).t.v8819e);
      obj6.icon = callback(require(stateFromStores[20]).RefreshIcon, {});
      obj6.arrow = true;
      obj6.onPress = function onPress() {
        return arr.push(outer1_6.LOBBIES_LINKED);
      };
      tmp7 = callback(require(stateFromStores[16]).TableRow, obj6);
    }
    items4[2] = tmp7;
    if (canManageGuild) {
      canManageGuild = items.map((arg0) => {
        let tmp2 = arg0;
        if (null != found) {
          if (found.some((type) => type.type === closure_0)) {
            tmp2 = stateFromStores;
            let obj = arr(stateFromStores[21]);
            const value = obj.get(arg0);
            if (null == value) {
              return null;
            } else {
              obj = { label: value.name };
              const intl = tmp2(stateFromStores[17]).intl;
              obj = { platformName: value.name };
              obj.subLabel = intl.formatToPlainString(tmp2(stateFromStores[17]).t.VXU4EU, obj);
              let flag = {};
              const obj4 = tmp2(stateFromStores[22]);
              const tmp8 = closure_3;
              const icon = value.icon;
              flag.source = obj4.makeSource(tmp2(stateFromStores[23]).isThemeDark(closure_3) ? icon.darkPNG : icon.lightPNG);
              flag.style = tmp2.platformIcon;
              obj.icon = outer1_7(tmp8, flag);
              flag = true;
              obj.arrow = true;
              obj.onPress = function onPress() {
                return outer1_1.push(outer2_6.INTEGRATION_PLATFORM, { platformType: closure_0 });
              };
              outer1_7(tmp2(stateFromStores[16]).TableRow, obj, arg0);
              const obj5 = tmp2(stateFromStores[23]);
            }
          }
        }
        return null;
      });
    }
    items4[3] = canManageGuild;
    obj3.children = items4;
    obj1.children = closure_8(require(stateFromStores[15]).TableRowGroup, obj3);
    obj.children = callback(require(stateFromStores[14]).Stack, obj1);
    const items5 = [callback(require(stateFromStores[13]).Form, obj), callback(require(stateFromStores[24]).NavScrim, {})];
    obj.children = items5;
    tmp11Result = tmp11(closure_9, obj);
    const tmp12 = closure_9;
  }
  return tmp9;
};
export const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = items;
