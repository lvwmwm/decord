// Module ID: 10968
// Function ID: 85306
// Dependencies: []

// Module 10968
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const Permissions = arg1(dependencyMap[5]).Permissions;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
let closure_11 = arg1(dependencyMap[7]).createStyles({ container: {}, memberRoles: { justifyContent: "flex-start" } });
const obj2 = arg1(dependencyMap[7]);
const memoResult = importAllResult.memo((user) => {
  let canBanUser;
  let canKickUser;
  user = user.user;
  const arg1 = user;
  const guild = user.guild;
  const importDefault = guild;
  let closure_4;
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_4];
  const items1 = [user, guild];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    if (null != guild) {
      id = guild.id;
    }
    return result.getMember(id, user.id);
  }, items1);
  const dependencyMap = stateFromStores;
  let obj1 = arg1(dependencyMap[8]);
  const items2 = [closure_6, closure_7, closure_5];
  const items3 = [user, guild];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items2, () => {
    const obj = {};
    let canKickMemberResult = null != guild;
    if (canKickMemberResult) {
      canKickMemberResult = user(stateFromStores[9]).canKickMember(user, guild);
      const obj2 = user(stateFromStores[9]);
    }
    obj.canKickUser = canKickMemberResult;
    let canBanMemberResult = null != guild;
    if (canBanMemberResult) {
      canBanMemberResult = user(stateFromStores[9]).canBanMember(user, guild);
      const obj3 = user(stateFromStores[9]);
    }
    obj.canBanUser = canBanMemberResult;
    let canManageUserResult = null != guild;
    if (canManageUserResult) {
      canManageUserResult = closure_6.canManageUser(constants.MANAGE_NICKNAMES, user, guild);
    }
    obj.canChangeNick = canManageUserResult;
    let canResult = null != guild;
    if (canResult) {
      canResult = closure_6.can(constants.MANAGE_ROLES, guild);
    }
    obj.canManageRoles = canResult;
    let result = null != guild;
    if (result) {
      const items = [closure_7, closure_5, closure_6];
      result = user(stateFromStores[10]).canToggleCommunicationDisableOnUser(guild.id, user.id, items);
      const obj4 = user(stateFromStores[10]);
    }
    obj.canModerateMembers = result;
    return obj;
  }, items3);
  ({ canKickUser, canBanUser } = stateFromStoresObject);
  if (null != guild) {
    if (null != stateFromStores) {
      const name = importDefault(dependencyMap[11]).getName(guild.id, undefined, user);
      importDefault(dependencyMap[12]).hideActionSheet;
      const items4 = [];
      let tmp9 = null != stateFromStores;
      if (tmp9) {
        let tmp8 = canKickUser;
        if (!canKickUser) {
          tmp8 = canBanUser;
        }
        if (!tmp8) {
          tmp8 = tmp5;
        }
        if (!tmp8) {
          tmp8 = tmp6;
        }
        tmp9 = tmp8;
      }
      if (tmp9) {
        tmp9 = !user.isNonUserBot();
      }
      if (tmp9) {
        obj = {};
        const intl = arg1(dependencyMap[14]).intl;
        obj.label = intl.string(arg1(dependencyMap[14]).t.HxrBOZ);
        obj = { IconComponent: arg1(dependencyMap[15]).SettingsIcon };
        obj.icon = callback(arg1(dependencyMap[13]).ActionSheetRow.Icon, obj);
        obj.onPress = function onPress() {
          hideActionSheet();
          let obj = guild(stateFromStores[16]);
          obj = {
            userId: user.id,
            guildId: guild.id,
            onClose() {
              let arr = callback(closure_2[16]);
              arr = arr.pop();
              callback(closure_2[19])({ guild: callback, user: closure_0 });
            },
            onRemove() {
              let arr = callback(closure_2[16]);
              arr = arr.pop();
            }
          };
          obj.pushLazy(user(stateFromStores[18])(stateFromStores[17], stateFromStores.paths), obj);
        };
        items4.push(callback(arg1(dependencyMap[13]).ActionSheetRow, obj));
      }
      if (null != stateFromStores) {
        if (tmp7) {
          let obj4 = arg1(dependencyMap[20]);
          const result = obj4.isMemberCommunicationDisabled(stateFromStores);
          closure_4 = result;
          let onPress = 13;
          obj1 = {};
          let intl2 = arg1(dependencyMap[14]).intl;
          let ClockWarningIcon = intl2.string;
          let t = arg1(dependencyMap[14]).t;
          if (result) {
            let ClockWarningIconResult = ClockWarningIcon(t.qXtNtS);
          } else {
            ClockWarningIconResult = ClockWarningIcon(t.xpsADY);
          }
          obj1.label = ClockWarningIconResult;
          t = callback;
          intl2 = arg1;
          const obj2 = {};
          ClockWarningIcon = arg1(dependencyMap[21]).ClockWarningIcon;
          obj2.IconComponent = ClockWarningIcon;
          obj1.icon = callback(arg1(dependencyMap[onPress]).ActionSheetRow.Icon, obj2);
          onPress = function onPress() {
            hideActionSheet();
            let obj = user(stateFromStores[22]);
            if (result) {
              obj = {};
              ({ guildId: obj3.guildId, userId: obj3.userId } = stateFromStores);
              const result = obj.openEnableCommunication(obj);
            } else {
              obj = {};
              ({ guildId: obj2.guildId, userId: obj2.userId } = stateFromStores);
              const result1 = obj.openDisableCommunication(obj);
            }
          };
          obj1.onPress = onPress;
          obj1 = items4.push(callback(arg1(dependencyMap[13]).ActionSheetRow, obj1));
          const tmp17 = callback;
        }
      }
      if (tmp22) {
        const obj3 = {};
        const intl3 = arg1(dependencyMap[14]).intl;
        obj3.label = intl3.string(arg1(dependencyMap[14]).t.3glT6Z);
        obj4 = { IconComponent: arg1(dependencyMap[23]).UserMinusIcon };
        obj3.icon = callback(arg1(dependencyMap[13]).ActionSheetRow.Icon, obj4);
        obj3.variant = "danger";
        obj3.onPress = function onPress() {
          guild(stateFromStores[24])({
            guildId: guild.id,
            userId: user.id,
            cancelButtonCallback() {
              return callback(closure_2[19])({ guild: callback, user: closure_0 });
            }
          });
        };
        items4.push(callback(arg1(dependencyMap[13]).ActionSheetRow, obj3));
      }
      if (tmp27) {
        const obj5 = {};
        const intl4 = arg1(dependencyMap[14]).intl;
        obj5.label = intl4.string(arg1(dependencyMap[14]).t.5MBJ5M);
        const obj6 = { IconComponent: arg1(dependencyMap[25]).HammerIcon };
        obj5.icon = callback(arg1(dependencyMap[13]).ActionSheetRow.Icon, obj6);
        obj5.variant = "danger";
        obj5.onPress = function onPress() {
          guild(stateFromStores[26])({
            guildId: guild.id,
            userId: user.id,
            cancelButtonCallback() {
              return callback(closure_2[19])({ guild: callback, user: closure_0 });
            }
          });
        };
        items4.push(callback(arg1(dependencyMap[13]).ActionSheetRow, obj5));
      }
      const obj7 = {};
      const obj8 = {};
      const intl5 = arg1(dependencyMap[14]).intl;
      const obj9 = { nick: name };
      obj8.title = intl5.formatToPlainString(arg1(dependencyMap[14]).t.792QKT, obj9);
      obj7.header = callback(arg1(dependencyMap[28]).BottomSheetTitleHeader, obj8);
      obj7.bodyStyles = tmp.container;
      const obj10 = {};
      const items5 = [tmp.memberRoles];
      obj10.style = items5;
      obj10.guild = guild;
      obj10.userRoles = tmp3;
      const items6 = [callback(importDefault(dependencyMap[29]), obj10), ];
      const obj11 = { hasIcons: true, children: items4.map((children) => callback(hideActionSheet.Fragment, { children }, "action_" + arg1)) };
      items6[1] = callback(arg1(dependencyMap[30]).TableRowGroup, obj11);
      obj7.children = items6;
      return callback2(arg1(dependencyMap[27]).BottomSheet, obj7);
    }
  }
  return null;
});
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/guild_automod/native/ModerateUserActionSheet.tsx");

export default memoResult;
