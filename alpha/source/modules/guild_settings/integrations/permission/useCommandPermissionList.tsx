// Module ID: 20075
// Function ID: 20076
// Name: useCommandPermissionList
// Dependencies: [32, 19, 502, 4949, 1387, 6807, 11, 504, 8184, 5695, 8185, 6991, 1112, 2]
// Exports: default, getCommandPermissionEntryRestrictions

// Module 20075 (useCommandPermissionList)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl6 from "intl" /* 1112 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5695 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6807 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 8184 */;
import IntegrationPermissionUtils from "IntegrationPermissionUtils" /* 8185 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildRoleStore from "GuildRoleStore" /* 4949 */;
import UserStore from "UserStore" /* 1387 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, dependencyMap, set, type;

const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/useCommandPermissionList.tsx");

export default function useCommandPermissionList(arg0, arg1, arg2) {
  let closure_2;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = arg2;
  let obj = require("get initialized");
  let items = [GuildRoleStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleStore.getSortedRoles(closure_0));
  const useState = first.useState;
  set = new Set();
  const tmp3 = stateFromStores(useState(set), 2);
  first = tmp3[0];
  let closure_5 = tmp5;
  const items1 = [arg0, arg1, stateFromStores];
  const items2 = [arg2];
  const sortedOverwrites = first.useMemo(() => {
    let obj = closure_0(closure_2[8]);
    closure_0 = obj.allChannelsSentinel(closure_0);
    const toReversedResult = stateFromStores.toReversed();
    closure_1 = toReversedResult.reduce((acc, id, index) => {
      acc[id.id] = index;
      return acc;
    }, {});
    const values = Object.values(closure_1);
    const found = values.filter((canRead) => canRead.canRead);
    return found.sort((type, type2) => {
      const diff = type.type - type2.type;
      if (0 !== diff) {
        return diff;
      } else {
        type = type.type;
        if (ApplicationCommandTypes.ApplicationCommandPermissionType.USER === type) {
          const _Number3 = Number;
          const _Number4 = Number;
          const NumberResult = Number(type.canWrite);
          let diff1 = NumberResult - Number(type2.canWrite);
          const tmp9 = closure_0;
          if (0 === diff1) {
            const user = UserStore.getUser(type.id);
            const user1 = UserStore.getUser(type2.id);
            if (null != user) {
              if (null != user1) {
                const obj3 = NicknameUtilsDefault;
                const name = obj3.getName(tmp9, undefined, user);
                NicknameUtilsDefault;
                let localeCompareResult;
                if (name != null) {
                  localeCompareResult = name.localeCompare(tmp16);
                }
                diff1 = localeCompareResult;
              }
            }
            const obj2 = SnowflakeUtilsDefault;
            diff1 = obj2.compare(type.id, type2.id);
          }
          return diff1;
        } else if (ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE === type) {
          let num3 = -1;
          if (type.id !== closure_0) {
            let num4 = 1;
            let num5 = 1;
            if (type2.id !== tmp7) {
              if (closure_1[type.id] > closure_1[type2.id]) {
                num4 = -1;
              }
              num5 = num4;
            }
            num3 = num5;
          }
          return num3;
        } else if (ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL === type) {
          let num = -1;
          if (type.id !== closure_0) {
            num = 1;
            if (type2.id !== tmp2) {
              const _Number = Number;
              const _Number2 = Number;
              const NumberResult1 = Number(type.canWrite);
              let diff2 = NumberResult1 - Number(type2.canWrite);
              if (0 === diff2) {
                const obj = SnowflakeUtilsDefault;
                diff2 = obj.compare(type.id, type2.id);
              }
              num = diff2;
            }
          }
          return num;
        }
      }
    });
  }, items1);
  const items3 = [arg2, arg1];
  const onRemove = first.useCallback((id) => {
    const items = [];
    const obj = IntegrationPermissionUtils;
    items[0] = obj.toPermissionKey(id.id, id.type);
    closure_2({}, items);
  }, items2);
  const items4 = [arg0, arg1, first, tmp5];
  const onChange = first.useCallback((id, permission) => {
    const obj = IntegrationPermissionUtils;
    const toPermissionKeyResult = obj.toPermissionKey(id.id, id.type);
    if (null != closure_1[toPermissionKeyResult]) {
      const obj2 = {};
      const obj3 = { id: id.id, permission, type: id.type };
      obj2[toPermissionKeyResult] = obj3;
      closure_2(obj2, []);
    }
  }, items3);
  const effect = first.useEffect(() => {
    const values = Object.values(closure_1);
    const found = values.filter((type) => {
      const tmp = type.type === mapped(closure_2[9]).ApplicationCommandPermissionType.USER && !type.canRead && !set.has(type.id);
      return tmp;
    });
    const mapped = found.map((id) => id.id);
    if (0 !== mapped.length) {
      let tmp = closure_1;
      const obj = closure_1(closure_2[11]);
      const membersById = obj.requestMembersById(mapped, mapped, false);
      closure_5((arg0) => {
        const items = [...mapped];
        set = new Set(items);
        return set;
      });
    }
  }, items4);
  return { sortedOverwrites, onRemove, onChange };
};
export function getCommandPermissionEntryRestrictions(arg0) {
  let commandId;
  let guildId;
  let hasAccessToMutatePermissions;
  let isRemovable;
  let lockReason;
  let overwrite;
  ({ overwrite, guildId, commandId, hasAccessToMutatePermissions } = arg0);
  let tmp = overwrite.id === guildId;
  if (!tmp) {
    const id = overwrite.id;
    const obj = ApplicationCommandUtils;
    tmp = id === obj.allChannelsSentinel(guildId);
  }
  const canWrite = overwrite.canWrite;
  let isUpdateRestricted = !canWrite;
  if (canWrite) {
    isUpdateRestricted = !isRemovable;
  }
  if (isRemovable) {
    if (!overwrite.canWrite) {
      let stringResult1;
      if (overwrite.type === ApplicationCommandTypes.ApplicationCommandPermissionType.USER) {
        let stringResult;
        if (overwrite.id === AuthenticationStore.getId()) {
          const intl5 = tmp11(1112).intl;
          stringResult = intl5.string(tmp11(1112).t["1VF/0x"]);
        } else {
          const intl4 = tmp11(1112).intl;
          stringResult = intl4.string(tmp11(1112).t.P1GnEd);
        }
        stringResult1 = stringResult;
      } else if (overwrite.type === ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE) {
        const intl3 = tmp11(1112).intl;
        stringResult1 = intl3.string(tmp11(1112).t.mcAijf);
      }
      lockReason = stringResult1;
    }
  } else if (null != commandId) {
    const intl2 = intl6.intl;
    lockReason = intl2.string(intl6.t.tybdas);
  } else {
    const intl = intl6.intl;
    lockReason = intl.string(intl6.t["z2hjk/"]);
  }
  if (isRemovable) {
    isRemovable = null != commandId || !tmp;
  }
  return { isRemovable, isUpdateRestricted, lockReason };
}
