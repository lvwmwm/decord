// Module ID: 11006
// Function ID: 85568
// Dependencies: [31, 1917, 1838, 3758, 1849, 653, 33, 4130, 566, 11007, 8218, 4319, 4098, 5500, 1212, 5791, 4337, 11008, 1934, 11005, 3747, 11025, 11011, 4072, 11027, 9066, 11029, 5187, 5186, 11031, 5501, 2]

// Module 11006
import importAllResult from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { Permissions } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles({ container: { padding: 16, gap: 16 }, memberRoles: { justifyContent: "flex-start" } });
const memoResult = importAllResult.memo((user) => {
  let canBanUser;
  let canKickUser;
  user = user.user;
  const guild = user.guild;
  let hideActionSheet;
  let c4;
  const tmp = callback3();
  let obj = user(stateFromStores[8]);
  let items = [c4];
  const items1 = [user, guild];
  stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    if (null != guild) {
      id = guild.id;
    }
    return _undefined.getMember(id, user.id);
  }, items1);
  let obj1 = user(stateFromStores[8]);
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
      canManageUserResult = outer1_6.canManageUser(outer1_8.MANAGE_NICKNAMES, user, guild);
    }
    obj.canChangeNick = canManageUserResult;
    let canResult = null != guild;
    if (canResult) {
      canResult = outer1_6.can(outer1_8.MANAGE_ROLES, guild);
    }
    obj.canManageRoles = canResult;
    let result = null != guild;
    if (result) {
      const items = [outer1_7, outer1_5, outer1_6];
      result = user(stateFromStores[10]).canToggleCommunicationDisableOnUser(guild.id, user.id, items);
      const obj4 = user(stateFromStores[10]);
    }
    obj.canModerateMembers = result;
    return obj;
  }, items3);
  ({ canKickUser, canBanUser } = stateFromStoresObject);
  if (null != guild) {
    if (null != stateFromStores) {
      const name = guild(stateFromStores[11]).getName(guild.id, undefined, user);
      hideActionSheet = guild(stateFromStores[12]).hideActionSheet;
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
        const intl = user(stateFromStores[14]).intl;
        obj.label = intl.string(user(stateFromStores[14]).t.HxrBOZ);
        obj = { IconComponent: user(stateFromStores[15]).SettingsIcon };
        obj.icon = callback(user(stateFromStores[13]).ActionSheetRow.Icon, obj);
        obj.onPress = function onPress() {
          hideActionSheet();
          let obj = guild(stateFromStores[16]);
          obj = {
            userId: user.id,
            guildId: guild.id,
            onClose() {
              let arr = guild(stateFromStores[16]);
              arr = arr.pop();
              guild(stateFromStores[19])({ guild: outer1_1, user: outer1_0 });
            },
            onRemove() {
              let arr = guild(stateFromStores[16]);
              arr = arr.pop();
            }
          };
          obj.pushLazy(user(stateFromStores[18])(stateFromStores[17], stateFromStores.paths), obj);
        };
        items4.push(callback(user(stateFromStores[13]).ActionSheetRow, obj));
      }
      if (null != stateFromStores) {
        if (tmp7) {
          let obj4 = user(stateFromStores[20]);
          let result = obj4.isMemberCommunicationDisabled(stateFromStores);
          c4 = result;
          let onPress = 13;
          obj1 = {};
          let intl2 = user(stateFromStores[14]).intl;
          let ClockWarningIcon = intl2.string;
          let t = user(stateFromStores[14]).t;
          if (result) {
            let ClockWarningIconResult = ClockWarningIcon(t.qXtNtS);
          } else {
            ClockWarningIconResult = ClockWarningIcon(t.xpsADY);
          }
          obj1.label = ClockWarningIconResult;
          t = callback;
          intl2 = user;
          let obj2 = {};
          ClockWarningIcon = user(stateFromStores[21]).ClockWarningIcon;
          obj2.IconComponent = ClockWarningIcon;
          obj1.icon = callback(user(stateFromStores[onPress]).ActionSheetRow.Icon, obj2);
          onPress = function onPress() {
            hideActionSheet();
            let obj = user(stateFromStores[22]);
            if (c4) {
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
          obj1 = items4.push(callback(user(stateFromStores[13]).ActionSheetRow, obj1));
          const tmp17 = callback;
        }
      }
      if (tmp22) {
        let obj3 = {};
        const intl3 = user(stateFromStores[14]).intl;
        obj3.label = intl3.string(user(stateFromStores[14]).t["3glT6Z"]);
        obj4 = { IconComponent: user(stateFromStores[23]).UserMinusIcon };
        obj3.icon = callback(user(stateFromStores[13]).ActionSheetRow.Icon, obj4);
        obj3.variant = "danger";
        obj3.onPress = function onPress() {
          guild(stateFromStores[24])({
            guildId: guild.id,
            userId: user.id,
            cancelButtonCallback() {
              return guild(stateFromStores[19])({ guild: outer1_1, user: outer1_0 });
            }
          });
        };
        items4.push(callback(user(stateFromStores[13]).ActionSheetRow, obj3));
      }
      if (tmp27) {
        const obj5 = {};
        const intl4 = user(stateFromStores[14]).intl;
        obj5.label = intl4.string(user(stateFromStores[14]).t["5MBJ5M"]);
        const obj6 = { IconComponent: user(stateFromStores[25]).HammerIcon };
        obj5.icon = callback(user(stateFromStores[13]).ActionSheetRow.Icon, obj6);
        obj5.variant = "danger";
        obj5.onPress = function onPress() {
          guild(stateFromStores[26])({
            guildId: guild.id,
            userId: user.id,
            cancelButtonCallback() {
              return guild(stateFromStores[19])({ guild: outer1_1, user: outer1_0 });
            }
          });
        };
        items4.push(callback(user(stateFromStores[13]).ActionSheetRow, obj5));
      }
      const obj7 = {};
      const obj8 = {};
      const intl5 = user(stateFromStores[14]).intl;
      const obj9 = { nick: name };
      obj8.title = intl5.formatToPlainString(user(stateFromStores[14]).t["792QKT"], obj9);
      obj7.header = callback(user(stateFromStores[28]).BottomSheetTitleHeader, obj8);
      obj7.bodyStyles = tmp.container;
      const obj10 = {};
      const items5 = [tmp.memberRoles];
      obj10.style = items5;
      obj10.guild = guild;
      obj10.userRoles = tmp3;
      const items6 = [callback(guild(stateFromStores[29]), obj10), ];
      const obj11 = { hasIcons: true, children: items4.map((children) => outer1_9(hideActionSheet.Fragment, { children }, "action_" + arg1)) };
      items6[1] = callback(user(stateFromStores[30]).TableRowGroup, obj11);
      obj7.children = items6;
      return callback2(user(stateFromStores[27]).BottomSheet, obj7);
    }
  }
  return null;
});
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_automod/native/ModerateUserActionSheet.tsx");

export default memoResult;
