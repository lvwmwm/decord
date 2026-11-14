// Module ID: 19692
// Function ID: 19693
// Name: ChannelSettingsPermissionsOverrides
// Dependencies: [32, 5, 19, 17, 19693, 5173, 5155, 5212, 5177, 5238, 5248, 1388, 1072, 21, 5306, 575, 504, 19695, 1502, 1630, 7261, 12560, 19694, 19698, 5243, 8133, 1084, 2119, 5372, 6268, 1113, 6012, 2188, 5163, 19699, 9051, 5929, 5954, 10929, 7443, 8159, 7746, 19703, 1380, 2]
// Exports: default

// Module 19692 (ChannelSettingsPermissionsOverrides)
import nativeDefault from "native" /* 575 */;
import StageChannelPermissions from "StageChannelPermissions" /* 5163 */;
import GuildRecord from "GuildRecord" /* 5173 */;
import TableRowGroup2 from "TableRowGroup" /* 7746 */;
import AppChannelPermissionUtils from "AppChannelPermissionUtils" /* 12560 */;
import PermissionSpecUtilsDefault from "PermissionSpecUtils" /* 19699 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelPermissionOverwriteEditStore from "ChannelPermissionOverwriteEditStore" /* 19693 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import GuildRoleStore from "GuildRoleStore" /* 5212 */;
import GuildStore from "GuildStore" /* 5177 */;
import PermissionStore from "PermissionStore" /* 5238 */;
import RelationshipStore from "RelationshipStore" /* 5248 */;
import UserStore from "UserStore" /* 1388 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let c0, c1, channel, dependencyMap, description, guild, navigation, permissions, user;

let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
({ View: metroImportDefault, ScrollView: metroImportAll } = react_native);
const isGuildOwner = GuildRecord.isGuildOwner;
({ PermissionOverrideType: closure_17, HelpdeskArticles: closure_18, Permissions: closure_19 } = Constants);
({ jsx: closure_20, Fragment: closure_21, jsxs: closure_22 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, containerContent: obj3, section: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 };
obj4 = { marginBottom: nativeDefault.space.PX_16 };
let closure_23 = createStyles(obj);
let closure_24 = react.memo(function ChannelPermissionOverrideControl(channelId) {
  let disabled;
  let permissionTitle;
  let savedValue;
  channelId = channelId.channelId;
  const overwriteId = channelId.overwriteId;
  const flag = channelId.flag;
  const onValueChange = channelId.onValueChange;
  ({ savedValue, permissionTitle, disabled } = channelId);
  const items = [ChannelPermissionOverwriteEditStore];
  const items1 = [channelId, overwriteId, flag];
  const obj = channelId(onValueChange[16]);
  let stateFromStores = obj.useStateFromStores(items, () => {
    const pendingEdits = ChannelPermissionOverwriteEditStore.getPendingEdits(channelId, overwriteId);
    const iter = pendingEdits[String(undefined, flag)];
    let value;
    if (iter != null) {
      value = iter.value;
    }
    return value;
  }, items1);
  const obj2 = {
    permissionTitle,
    value: stateFromStores,
    disabled,
    onValueChange(arg0) {
      return onValueChange(flag, arg0);
    }
  };
  const tmp2 = closure_20;
  const tmp3 = overwriteId(onValueChange[17]);
  if (stateFromStores == null) {
    stateFromStores = savedValue;
  }
  return tmp2(tmp3, obj2);
});
let result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsOverrides.tsx");

export default function ChannelSettingsPermissionsOverrides(channelId) {
  let InlineNotice;
  let intl;
  let items4;
  let items5;
  let obj11;
  let obj12;
  let section;
  let tmp11Result;
  let tmp2Result;
  channelId = channelId.channelId;
  const id = channelId.id;
  const fromCreate = channelId.fromCreate;
  let closure_7;
  let closure_8;
  let first;
  let type = channelId.type;
  let tmp = closure_23();
  dependencyMap = tmp;
  let tmp2 = channelId;
  let tmp3 = dependencyMap;
  let obj = channelId(1502);
  navigation = obj.useNavigation();
  const tmp5 = id;
  const bottom = id(1630)().bottom;
  let obj2 = channelId(504);
  let items = [ChannelStore];
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj3 = channelId(7261);
  const appChannelApplication = obj3.useAppChannelApplication(stateFromStores);
  let obj4 = channelId(12560);
  const appChannelBotUserId = obj4.useAppChannelBotUserId(stateFromStores);
  let tmp9 = null;
  if (appChannelBotUserId === id) {
    tmp9 = appChannelApplication;
  }
  const items1 = [channelId, id];
  closure_7 = appChannelBotUserId.useCallback((flag, value) => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let obj6;
    let tmp16;
    let closure_0 = flag;
    channel = channel.getChannel(closure_0);
    if (null != channel) {
      const guild_id = channel.guild_id;
      const obj7 = channelId(section[22]);
      const channelPermissionOverwrite = obj7.getChannelPermissionOverwrite(channel, id);
      if (null != channelPermissionOverwrite) {
        const effectiveOverwrite = first.getEffectiveOverwrite(channel.id, tmp19, channelPermissionOverwrite);
        const tmp20Result = channelId(section[22]);
        if (tmp20Result.getChannelPermissionOverwriteValue(effectiveOverwrite, flag) !== value) {
          const tmp20Result3 = channelId(section[22]);
          const result = tmp20Result3.applyChannelPermissionOverwriteEdit(effectiveOverwrite, flag, value);
          let obj2 = {};
          obj2[result.id] = result;
          const obj10 = PermissionStore;
          if (PermissionStore.can(flag, channel, obj2)) {
            let obj4 = { channelId: channel.id, overwriteId: id, flag, value, validate: tmp16 };
            const updateChannelPermissionOverwrite = channelId(section[23]).updateChannelPermissionOverwrite;
            tmp16 = undefined;
            channelId(section[23]);
            if (value === channelId(section[24]).DENY) {
              if (id === guild_id) {
                tmp16 = stateFromStores(function*(arg0, value) {
                  let obj3;
                  if (c0 === 2) {
                    c0 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp2 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj2 = { value, done: true };
                      return obj2;
                    } else {
                      return { value: "HermesInternal", done: null };
                    }
                  } else {
                    try {
                      let tmp4;
                      c0 = 2;
                      if (0 === c1) {
                        if (arg0 === 1) {
                          c0 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c0 = 3;
                          const obj4 = { value, done: true };
                          return obj4;
                        } else {
                          channel = channel.getChannel(c0);
                          tmp4 = null != channel;
                          if (tmp4) {
                            c1 = 1;
                            c0 = 1;
                            const obj5 = { value: obj3.checkChattableChannelThresholdMetAfterChannelPermissionDeny(channel, v3), done: false };
                            obj3 = v3(section[25]);
                            return obj5;
                          }
                        }
                      } else if (arg0 === 1) {
                        c0 = 3;
                        throw value;
                      } else {
                        tmp4 = value;
                        if (arg0 === 2) {
                          c0 = 3;
                          const obj = { value, done: true };
                          return obj;
                        }
                      }
                      c0 = 3;
                      const obj6 = { value: tmp4, done: true };
                      return obj6;
                    } catch (tmp8) {
                      c0 = 3;
                      throw tmp8;
                    }
                  }
                });
              }
            }
            const result1 = updateChannelPermissionOverwrite(obj4);
          } else {
            let name;
            if (obj10.can(flag, channel)) {
              if (id !== guild_id) {
                const tmp2 = fromCreate;
                let obj = fromCreate(tmp21[26]);
                if (!obj.has(effectiveOverwrite.allow, flag)) {
                  const tmp2Result = tmp2(section[26]);
                  if (!tmp2Result.has(effectiveOverwrite.deny, flag)) {
                    let tmp4 = closure_7(flag, tmp20(tmp21[24]).ALLOW);
                  }
                }
              }
            }
            const type = effectiveOverwrite.type;
            if (channelId(section[27]).PermissionOverwriteType.MEMBER === type) {
              user = user.getUser(effectiveOverwrite.id);
              if (null != user) {
                let obj3 = id(tmp21[28]);
                name = obj3.getName(user);
              }
            } else if (channelId(section[27]).PermissionOverwriteType.ROLE === type) {
              guild = guild.getGuild(channel.guild_id);
              if (null != guild) {
                role = role.getRole(guild.id, effectiveOverwrite.id);
                if (null != role) {
                  name = role.name;
                }
              }
            } else {
              const type2 = effectiveOverwrite.type;
            }
            const tmp13 = id(tmp21[29]);
            let obj5 = {
              title: intl.string(channelId(section[30]).t.vElC9b),
              body: intl2.format(channelId(section[30]).t.yslqFM, obj6),
              cancelText: intl3.string(channelId(section[30]).t["ETE/oC"]),
              confirmText: intl4.string(channelId(section[30]).t.psXQHP),
              onConfirm() {
                        const openURL = id(section[31]).openURL;
                        id(section[31]);
                        const obj = id(section[32]);
                        openURL(obj.getArticleURL(constants.PERMISSIONS_TUTORIAL));
                      }
            };
            const show = tmp13.show;
            intl = tmp20(tmp21[30]).intl;
            intl2 = tmp20(tmp21[30]).intl;
            obj6 = { name };
            intl3 = tmp20(tmp21[30]).intl;
            intl4 = tmp20(tmp21[30]).intl;
            show(obj5);
          }
        }
      }
    }
  }, items1);
  const items2 = [stateFromStores, id, appChannelBotUserId];
  closure_8 = appChannelBotUserId.useCallback((arg0) => {
    guild = GuildStore.getGuild(stateFromStores.guild_id);
    const currentUser = UserStore.getCurrentUser();
    if (null != guild) {
      if (null != currentUser) {
        let stringResult;
        const canResult = isGuildOwner(guild, currentUser) || PermissionStore.can(constants.ADMINISTRATOR, guild) || PermissionStore.can(constants.MANAGE_ROLES, obj, undefined, undefined, true);
        if (stateFromStores.isGuildStageVoice()) {
          const STAGE_CHANNEL_DISABLED_PERMISSIONS = StageChannelPermissions.STAGE_CHANNEL_DISABLED_PERMISSIONS;
          if (STAGE_CHANNEL_DISABLED_PERMISSIONS.has(arg0)) {
            const intl3 = tmp11(1113).intl;
            stringResult = intl3.string(tmp11(1113).t.bTS5lf);
          }
          return stringResult;
        }
        const obj2 = AppChannelPermissionUtils;
        if (obj2.isAppChannelFloorPermission(appChannelBotUserId, id, arg0)) {
          const intl2 = tmp13(1113).intl;
          stringResult = intl2.string(tmp13(1113).t.yXmgpP);
        } else {
          stringResult = arg0 === constants.MANAGE_ROLES && !canResult;
          if (!stringResult) {
            stringResult = !PermissionStore.can(arg0, guild) && !canResult;
            !PermissionStore.can(arg0, guild) && !canResult;
          }
          if (stringResult) {
            const intl = tmp13(1113).intl;
            stringResult = intl.string(tmp13(1113).t.nOtPMM);
          }
        }
      }
    }
    return false;
  }, items2);
  first = navigation(appChannelBotUserId.useState(() => {
    const guild_id = stateFromStores.guild_id;
    const obj = PermissionSpecUtilsDefault;
    return obj.generateChannelPermissionSpec(stateFromStores.guild_id, stateFromStores, id === guild_id);
  }), 1)[0];
  const items3 = [fromCreate, navigation];
  const effect = appChannelBotUserId.useEffect(() => {
    const tmp = fromCreate;
    if (tmp) {
      let obj = {
        headerRight() {
            let intl;
            const obj = {
              onPress() {
                closure_1_4.pop();
              },
              label: intl.string(channelId(section[30]).t.i4jeWR)
            };
            const HeaderTextButton = channelId(section[35]).HeaderTextButton;
            intl = channelId(section[30]).intl;
            return closure_2_20(HeaderTextButton, obj);
          }
      };
      navigation.setOptions(obj);
    }
  }, items3);
  const tmp11 = closure_20;
  let obj5 = { variant: "body-md/medium", color: "text-muted", children: tmp2Result.computeChannelName(stateFromStores, UserStore, RelationshipStore, true) };
  let Text = tmp2(5929).Text;
  tmp2Result = tmp2(5954);
  const tmp12 = closure_20(Text, obj5);
  if (type === constants.MEMBER) {
    let obj6 = { userId: id, guildId: stateFromStores.guild_id, start: true, end: true, trailing: tmp12 };
    tmp11Result = tmp11(tmp5(10929), obj6);
  } else {
    let tmp13 = GuildRoleStore;
    let TableRow = tmp2(7443).TableRow;
    let role = GuildRoleStore.getRole(stateFromStores.guild_id, id);
    let str;
    if (role != null) {
      str = role.name;
    }
    if (str == null) {
      str = "";
    }
    let obj7 = { end: true, label: str, start: true, trailing: tmp12 };
    tmp11Result = tmp11(TableRow, obj7);
  }
  const obj8 = { style: tmp.container, contentContainerStyle: items4, children: items5 };
  items4 = [tmp.containerContent, { paddingBottom: tmp.containerContent.paddingBottom + bottom }];
  let tmp16 = closure_22;
  items5 = [, , ];
  const obj9 = { style: tmp.section, children: tmp11Result };
  items5[0] = tmp11(closure_7, obj9);
  let tmp11Result2 = null;
  const tmp17 = closure_8;
  const tmp18 = closure_7;
  if (null != tmp9) {
    let obj10 = { style: tmp.section, children: tmp11(InlineNotice, obj11) };
    obj11 = { type: "info", message: intl.format(tmp2(1113).t["Xq++FA"], obj12), role: "none" };
    InlineNotice = tmp2(8159).InlineNotice;
    intl = tmp2(1113).intl;
    obj12 = { appName: tmp9.name };
    tmp11Result2 = tmp11(tmp18, obj10);
  }
  items5[1] = tmp11Result2;
  items5[2] = first.map((permissions, index) => {
    let TableRowGroup;
    let obj2;
    let onValueChange;
    let overwriteId;
    let permissionOverwrites;
    permissions = permissions.permissions;
    let tmp = closure_20;
    let obj = { style: section.section, children: tmp(TableRowGroup, obj2) };
    const title = permissions.title;
    let tmp3;
    TableRowGroup = TableRowGroup2.TableRowGroup;
    const tmp2 = metroImportDefault;
    if (first.length > 1) {
      tmp3 = title;
    }
    obj2 = {
      title: tmp3,
      hasIcons: false,
      children: permissions.map((description, index) => {
        let flag;
        let obj2;
        let obj5;
        let title;
        let tmp6Result2;
        ({ title, flag } = description);
        description = description.description;
        const tmp = closure_1_8(flag);
        const obj = { variant: "body-xs/medium", color: "text-subtle", children: obj2.renderDescription(description) };
        const Text = channelId(section[36]).Text;
        obj2 = channelId(section[42]);
        const items = [closure_2_20(Text, obj), ];
        let tmp5Result = null;
        const tmp3 = closure_2_22;
        const tmp4 = closure_2_21;
        if (false !== tmp) {
          tmp5Result = null;
          if ("" !== tmp) {
            const obj3 = { variant: "body-xs/medium", color: "text-feedback-critical", children: tmp };
            tmp5Result = tmp5(tmp6(tmp7[36]).Text, obj3);
          }
        }
        items[1] = tmp5Result;
        const tmp3Result = tmp3(tmp4, { children: items });
        const TableRow = tmp6(tmp7[39]).TableRow;
        const tmp6Result = channelId(section[43]);
        const obj4 = { accessible: tmp6Result.isAndroid() || undefined, disabled: false !== tmp, label: title, subLabel: tmp3Result, trailing: closure_2_20(closure_2_24, obj5) };
        obj5 = { channelId, overwriteId, flag, permissionTitle: title, savedValue: tmp6Result2.getChannelPermissionOverwriteValue(permissionOverwrites.permissionOverwrites[overwriteId], flag), disabled: false !== tmp, onValueChange };
        tmp6Result2 = channelId(section[22]);
        return closure_2_20(TableRow, obj4, "row-" + index);
      })
    };
    return tmp(tmp2, obj, "section-" + index);
  });
  return tmp16(tmp17, obj8);
};
