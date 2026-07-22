// Module ID: 15396
// Function ID: 117434
// Name: ChannelSettingsPermissionsOverrides
// Dependencies: []
// Exports: default

// Module 15396 (ChannelSettingsPermissionsOverrides)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
({ View: closure_7, ScrollView: closure_8 } = arg1(dependencyMap[3]));
const isGuildOwner = arg1(dependencyMap[4]).isGuildOwner;
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]);
let closure_14 = importDefault(dependencyMap[9]);
let closure_15 = importDefault(dependencyMap[10]);
const tmp2 = arg1(dependencyMap[3]);
({ PermissionOverrideType: closure_16, HelpdeskArticles: closure_17, Permissions: closure_18 } = arg1(dependencyMap[11]));
const tmp3 = arg1(dependencyMap[11]);
({ jsx: closure_19, jsxs: closure_20 } = arg1(dependencyMap[12]));
let obj = arg1(dependencyMap[13]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[14]).colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
const tmp4 = arg1(dependencyMap[12]);
obj.containerContent = { paddingTop: importDefault(dependencyMap[14]).space.PX_16, paddingBottom: importDefault(dependencyMap[14]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[14]).space.PX_12 };
const obj1 = { paddingTop: importDefault(dependencyMap[14]).space.PX_16, paddingBottom: importDefault(dependencyMap[14]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[14]).space.PX_12 };
obj.section = { marginBottom: importDefault(dependencyMap[14]).space.PX_16 };
let closure_21 = obj.createStyles(obj);
const obj2 = { marginBottom: importDefault(dependencyMap[14]).space.PX_16 };
const result = arg1(dependencyMap[38]).fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsOverrides.tsx");

export default function ChannelSettingsPermissionsOverrides(fromCreate) {
  let id;
  ({ channelId: closure_0, id } = fromCreate);
  const importDefault = id;
  fromCreate = fromCreate.fromCreate;
  const importAll = fromCreate;
  let React;
  const tmp = callback4();
  const dependencyMap = tmp;
  let obj = arg1(dependencyMap[15]);
  const navigation = obj.useNavigation();
  const callback = navigation;
  let obj1 = arg1(dependencyMap[17]);
  const items = [closure_10];
  const stateFromStores = obj1.useStateFromStores(items, () => channel.getChannel(closure_0));
  let closure_5 = stateFromStores;
  const items1 = [stateFromStores, id];
  React = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = stateFromStores(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items1);
  const items2 = [stateFromStores];
  let closure_7 = React.useCallback((VIEW_CHANNEL) => {
    const guild = guild.getGuild(stateFromStores.guild_id);
    const currentUser = currentUser.getCurrentUser();
    if (null != guild) {
      if (null != currentUser) {
        let canResult = first(guild, currentUser);
        if (!canResult) {
          canResult = closure_13.can(constants.ADMINISTRATOR, guild);
        }
        if (!canResult) {
          canResult = closure_13.can(constants.MANAGE_ROLES, stateFromStores, undefined, undefined, true);
        }
        if (stateFromStores.isGuildStageVoice()) {
          const STAGE_CHANNEL_DISABLED_PERMISSIONS = callback(tmp[28]).STAGE_CHANNEL_DISABLED_PERMISSIONS;
          if (STAGE_CHANNEL_DISABLED_PERMISSIONS.has(VIEW_CHANNEL)) {
            const intl2 = callback(tmp[25]).intl;
            let stringResult = intl2.string(callback(tmp[25]).t.bTS5lf);
          }
          return stringResult;
        }
        stringResult = VIEW_CHANNEL === constants.MANAGE_ROLES && !canResult;
        if (!stringResult) {
          let tmp15 = null != VIEW_CHANNEL;
          if (tmp15) {
            tmp15 = !closure_13.can(VIEW_CHANNEL, guild);
          }
          if (tmp15) {
            tmp15 = !canResult;
          }
          stringResult = tmp15;
        }
        if (stringResult) {
          const intl = callback(tmp[25]).intl;
          stringResult = intl.string(callback(tmp[25]).t.nOtPMM);
        }
      }
    }
    return false;
  }, items2);
  const items3 = [stateFromStores, id];
  let closure_8 = React.useCallback((arg0) => {
    let allow;
    if (null != stateFromStores.permissionOverwrites[closure_1]) {
      allow = tmp.allow;
    }
    if (obj.has(allow, arg0)) {
      let ALLOW = callback(tmp[18]).ALLOW;
    } else {
      let deny;
      if (null != tmp) {
        deny = tmp.deny;
      }
      const hasItem = fromCreate(tmp[19]).has(deny, arg0);
      const tmp9 = callback(tmp[18]);
      ALLOW = hasItem ? tmp9.DENY : tmp9.PASSTHROUGH;
      const obj2 = fromCreate(tmp[19]);
    }
    return ALLOW;
  }, items3);
  const first = callback(React.useState(() => id(tmp[29]).generateChannelPermissionSpec(stateFromStores.guild_id, stateFromStores, id === stateFromStores.guild_id)), 2)[0];
  const isGuildOwner = first;
  const items4 = [fromCreate, navigation];
  const effect = React.useEffect(() => {
    if (fromCreate) {
      const obj = {
        headerRight() {
            const obj = {
              onPress() {

              }
            };
            const intl = callback(closure_3[25]).intl;
            obj.label = intl.string(callback(closure_3[25]).t.i4jeWR);
            return callback2(callback(closure_3[30]).HeaderTextButton, obj);
          }
      };
      navigation.setOptions(obj);
    }
  }, items4);
  obj = { cachedAt: "FrameEffect_02-4_Out", edpbxy: 0 };
  let obj3 = arg1(dependencyMap[32]);
  obj.children = obj3.computeChannelName(stateFromStores, closure_15, closure_14, true);
  const tmp6 = callback2(arg1(dependencyMap[31]).Text, obj);
  if (fromCreate.type === constants.MEMBER) {
    obj = { userId: id, guildId: stateFromStores.guild_id, start: true, end: true, trailing: tmp6 };
    let tmp7Result = callback2(importDefault(dependencyMap[33]), obj);
  } else {
    obj1 = {};
    const role = role.getRole(stateFromStores.guild_id, id);
    let name;
    if (null != role) {
      name = role.name;
    }
    let str = "";
    if (null != name) {
      str = name;
    }
    obj1.label = str;
    obj1.trailing = tmp6;
    tmp7Result = callback2(arg1(dependencyMap[34]).TableRow, obj1);
    const tmp7 = callback2;
  }
  const obj2 = { style: tmp.container, contentContainerStyle: items5 };
  const items5 = [tmp.containerContent, { paddingBottom: tmp.containerContent.paddingBottom + importDefault(dependencyMap[16])().bottom }];
  obj3 = { style: tmp.section, children: tmp7Result };
  const items6 = [
    callback2(closure_7, obj3),
    first.map((permissions) => {
      permissions = permissions.permissions;
      let obj = { style: tmp.section };
      obj = {};
      let title;
      if (first.length > 1) {
        title = permissions.title;
      }
      obj.title = title;
      obj.hasIcons = false;
      obj.children = permissions.map((flag) => {
        let description;
        let title;
        flag = flag.flag;
        ({ title, description } = flag);
        const tmp = callback2(flag);
        let obj = { cachedAt: null, edpbxy: null, children: flag(closure_3[36]).renderDescription(description) };
        const obj2 = flag(closure_3[36]);
        const tmp2 = null != tmp && tmp;
        obj = { disabled: tmp4, label: title, subLabel: callback4(flag(closure_3[31]).Text, obj) };
        obj = {};
        const tmp3 = callback4(flag(closure_3[31]).Text, obj);
        obj.value = callback3(flag);
        obj.disabled = false !== tmp2;
        obj.onValueChange = function onValueChange(arg0) {
          callback(flag, arg0);
        };
        obj.trailing = callback4(callback(closure_3[37]), obj);
        return callback4(flag(closure_3[34]).TableRow, obj, "row-" + arg1);
      });
      obj.children = closure_19(callback(closure_19[35]).TableRowGroup, obj);
      return closure_19(closure_7, obj, "section-" + arg1);
    })
  ];
  obj2.children = items6;
  return callback3(closure_8, obj2);
};
