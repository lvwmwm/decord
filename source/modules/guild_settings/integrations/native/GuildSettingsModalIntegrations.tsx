// Module ID: 16117
// Function ID: 124244
// Name: PlatformTypes
// Dependencies: []
// Exports: default

// Module 16117 (PlatformTypes)
let PlatformTypes;
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
({ GuildSettingsSections: closure_6, PlatformTypes } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = arg1(dependencyMap[5]));
const items = [, ];
({ TWITCH: arr[0], YOUTUBE: arr[1] } = PlatformTypes);
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWER };
obj.screenContainer = obj;
const tmp4 = arg1(dependencyMap[5]);
obj.screenContent = { paddingTop: importDefault(dependencyMap[7]).space.PX_16 };
obj.platformIcon = { bhk: "<string:1027735553>", bic: "<string:4143972873>" };
let closure_11 = obj.createStyles(obj);
const obj1 = { paddingTop: importDefault(dependencyMap[7]).space.PX_16 };
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrations.tsx");

export default function GuildSettingsModalIntegrations(contentContainerStyle) {
  let canManageGuild;
  let canManageWebhooks;
  let closure_4;
  let obj = arg1(dependencyMap[8]);
  const token = obj.useToken(importDefault(dependencyMap[7]).modules.mobile.TABLE_ROW_PADDING);
  const tmp2 = callback2();
  const arg1 = tmp2;
  let obj1 = arg1(dependencyMap[9]);
  const importDefault = obj1.useNavigation();
  let obj2 = arg1(dependencyMap[10]);
  const items = [closure_5];
  const stateFromStores = obj2.useStateFromStores(items, () => store.getGuild(), []);
  const dependencyMap = stateFromStores;
  let obj3 = arg1(dependencyMap[10]);
  const items1 = [closure_4];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    if (null == stateFromStores) {
      let guildPermissionProps = { cix: null, assign: null };
    } else {
      guildPermissionProps = found.getGuildPermissionProps(stateFromStores);
    }
    return guildPermissionProps;
  });
  ({ canManageWebhooks, canManageGuild } = stateFromStoresObject);
  let closure_3 = importDefault(dependencyMap[11])();
  let obj4 = arg1(dependencyMap[10]);
  const items2 = [closure_5];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => store.getProps().integrations);
  let found;
  if (null != stateFromStores1) {
    found = stateFromStores1.filter((type) => closure_10.includes(type.type));
  }
  closure_4 = found;
  let obj5 = arg1(dependencyMap[12]);
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
    obj1.spacing = importDefault(dependencyMap[7]).space.PX_24;
    obj3 = { hasIcons: true };
    let tmp17 = canManageWebhooks;
    if (canManageWebhooks) {
      obj4 = {};
      const intl = arg1(dependencyMap[17]).intl;
      obj4.label = intl.string(arg1(dependencyMap[17]).t.jp25Id);
      const intl2 = arg1(dependencyMap[17]).intl;
      obj4.subLabel = intl2.string(arg1(dependencyMap[17]).t.mKIOkI);
      obj4.icon = callback(arg1(dependencyMap[18]).WebhookIcon, {});
      obj4.arrow = true;
      obj4.onPress = function onPress() {
        return arr.push(constants.WEBHOOKS);
      };
      tmp17 = callback(arg1(dependencyMap[16]).TableRow, obj4);
    }
    const items4 = [tmp17, , , ];
    if (canManageWebhooks) {
      obj5 = {};
      const intl3 = arg1(dependencyMap[17]).intl;
      obj5.label = intl3.string(arg1(dependencyMap[17]).t.OrV60r);
      const intl4 = arg1(dependencyMap[17]).intl;
      obj5.subLabel = intl4.string(arg1(dependencyMap[17]).t.rQREJl);
      obj5.icon = callback(arg1(dependencyMap[19]).ChannelsFollowedIcon, {});
      obj5.arrow = true;
      obj5.onPress = function onPress() {
        return arr.push(constants.CHANNELS_FOLLOWED);
      };
      canManageWebhooks = callback(arg1(dependencyMap[16]).TableRow, obj5);
    }
    items4[1] = canManageWebhooks;
    if (tmp7) {
      const obj6 = {};
      const intl5 = arg1(dependencyMap[17]).intl;
      obj6.label = intl5.string(arg1(dependencyMap[17]).t.tqtDXC);
      const intl6 = arg1(dependencyMap[17]).intl;
      obj6.subLabel = intl6.string(arg1(dependencyMap[17]).t.v8819e);
      obj6.icon = callback(arg1(dependencyMap[20]).RefreshIcon, {});
      obj6.arrow = true;
      obj6.onPress = function onPress() {
        return arr.push(constants.LOBBIES_LINKED);
      };
      tmp7 = callback(arg1(dependencyMap[16]).TableRow, obj6);
    }
    items4[2] = tmp7;
    if (canManageGuild) {
      canManageGuild = items.map((arg0) => {
        let tmp2 = arg0;
        if (null != found) {
          if (found.some((type) => type.type === type)) {
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
              obj.icon = closure_7(tmp8, flag);
              flag = true;
              obj.arrow = true;
              obj.onPress = function onPress() {
                return arr.push(constants.INTEGRATION_PLATFORM, { platformType: arg0 });
              };
              closure_7(tmp2(stateFromStores[16]).TableRow, obj, arg0);
              const obj5 = tmp2(stateFromStores[23]);
            }
          }
        }
        return null;
      });
    }
    items4[3] = canManageGuild;
    obj3.children = items4;
    obj1.children = closure_8(arg1(dependencyMap[15]).TableRowGroup, obj3);
    obj.children = callback(arg1(dependencyMap[14]).Stack, obj1);
    const items5 = [callback(arg1(dependencyMap[13]).Form, obj), callback(arg1(dependencyMap[24]).NavScrim, {})];
    obj.children = items5;
    tmp11Result = tmp11(closure_9, obj);
    const tmp12 = closure_9;
  }
  return tmp9;
};
export const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = items;
