// Module ID: 18258
// Function ID: 18259
// Name: useConjurePublishReview
// Dependencies: [5, 32, 19, 4784, 4845, 1386, 6621, 6980, 1071, 18259, 18261, 18262, 18263, 504, 18268, 18254, 7734, 6933, 2]
// Exports: default

// Module 18258 (useConjurePublishReview)
import ConjureProjectStore from "ConjureProjectStore" /* 6621 */;
import ChannelPermissionsUtils from "ChannelPermissionsUtils" /* 7734 */;
import conjurePublishReview from "conjurePublishReview" /* 18254 */;
import useConjureAppIdentityDraftDefault from "useConjureAppIdentityDraft" /* 18259 */;
import useConjurePreviewDevicePermissionsDefault from "useConjurePreviewDevicePermissions" /* 18262 */;
import useConjurePublishRemixDefault from "useConjurePublishRemix" /* 18263 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4784 */;
import PermissionStore from "PermissionStore" /* 4845 */;
import UserStore from "UserStore" /* 1386 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 6980 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c4, closure_2, dependencyMap, importDefault;

let closure_12;
let unpackModuleId;
let isProjectOwner = ConjureProjectStore.isProjectOwner;
({ ChannelTypes: unpackModuleId, Permissions: closure_12 } = Constants);
let result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishReview.tsx");

export default function useConjurePublishReview(id, arg1) {
  let closure_1;
  let result1;
  let saving;
  let tmp13;
  let tmp14;
  let tmp23;
  let tmp24;
  _require = id;
  importDefault = arg1;
  let obj = function _save() {
    let name;
    let user;
    let obj = _asyncToGenerator(async function(arg0, value) {
      let closure_0;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const tmp44 = saving;
              if (!tmp44) {
                if (null == isProjectOwner) {
                  closure_2_6(true);
                  c3 = 1;
                  let tmp22 = closure_2_7;
                  if (tmp22) {
                    const changed = name !== user.name || closure_2_2.changed;
                    tmp22 = changed;
                  }
                  if (tmp22) {
                    const obj4 = { name };
                    const updateProjectSettings = tmp(closure_2[17]).updateProjectSettings;
                    id = user.id;
                    const tmp27 = tmp(closure_2[17]);
                    const merged = Object.assign(closure_2_2.changes);
                    c1 = 2;
                    c4 = 1;
                    const obj5 = { value: updateProjectSettings(id, obj4), done: false };
                    return obj5;
                  }
                }
              }
              c4 = 3;
              return { value: false, done: true };
            }
          } else if (1 === c1) {
            c3 = 0;
            closure_128_6(false);
            throw closure_2;
          } else if (2 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_128_6(false);
              c4 = 3;
              const obj6 = { value, done: true };
              return obj6;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_6(false);
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else if (value) {
            c3 = 0;
            closure_128_6(false);
            c4 = 3;
            return { value: true, done: true };
          } else {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("Saving who can remix failed");
            throw error;
          }
          c1 = 3;
          c4 = 1;
          const obj7 = { value: closure_128_3.save(), done: false };
          return obj7;
        } catch (tmp33) {
          closure_2 = tmp33;
          if (0 === c3) {
            c4 = 3;
            throw tmp33;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = dependencyMap;
  const tmp2 = useConjureAppIdentityDraftDefault(id.id);
  dependencyMap = tmp2;
  const tmp3 = _require;
  obj = require("useConjureManagedCopy");
  const isConjureManagedCopy = obj.useIsConjureManagedCopy(id.id);
  const tmp5 = useConjurePreviewDevicePermissionsDefault(id.id);
  const tmp6 = useConjurePublishRemixDefault(id.id);
  let closure_3 = tmp6;
  let obj2 = require("get initialized");
  const items = [result1];
  const items1 = [id.id];
  const stateFromStores = obj2.useStateFromStores(items, () => ConjurePublishStatusStore.getPublishStatus(id.id), items1);
  let obj3 = saving;
  const tmp8 = stateFromStores(saving.useState(id.name), 2);
  const tmp9 = tmp8[1];
  const tmp10 = stateFromStores(saving.useState(false), 2);
  saving = tmp10[0];
  let closure_6 = tmp10[1];
  [tmp13, tmp14] = stateFromStores(saving.useState(false), 2);
  const tmp12 = stateFromStores(saving.useState(false), 2);
  const tmp15 = isProjectOwner(id);
  let closure_7 = tmp15;
  const trimmed = str.trim();
  let result = null;
  if (tmp15) {
    const tmp3Result = tmp3(18268);
    result = tmp3Result.conjureProjectNameError(trimmed);
  }
  isProjectOwner = result;
  const tmp3Result5 = tmp3(18254);
  result1 = tmp3Result5.conjurePublishReviewReason(id, stateFromStores);
  const items2 = [id, stateFromStores, result1];
  const memo = obj3.useMemo(() => {
    const obj = conjurePublishReview;
    return obj.conjurePublishIncludes(id, stateFromStores, result1);
  }, items2);
  const length = memo.filter((creates) => creates.creates).length;
  let tmp19 = null;
  if (tmp15) {
    tmp19 = null;
    if (length > 0) {
      tmp19 = null;
      if ("guild" === id.install_scope) {
        tmp19 = null;
        if (id.guild_id === arg1) {
          tmp19 = arg1;
        }
      }
    }
  }
  let closure_11 = tmp19;
  const items3 = [closure_6, closure_7];
  const items4 = [tmp19];
  const tmp3Result6 = tmp3(504);
  const stateFromStores1 = tmp3Result6.useStateFromStores(items3, () => {
    let guild = null;
    if (null != closure_11) {
      guild = GuildStore.getGuild(tmp);
    }
    let canResult = null != guild && PermissionStore.can(constants.MANAGE_CHANNELS, guild);
    if (canResult) {
      const canCreatePrivateChannel = ChannelPermissionsUtils.canCreatePrivateChannel;
      const GUILD_APP = unpackModuleId.GUILD_APP;
      ChannelPermissionsUtils;
      const canResult1 = PermissionStore.can(constants.VIEW_CHANNEL, guild);
      canResult = canCreatePrivateChannel(GUILD_APP, canResult1, PermissionStore.can(constants.CONNECT, guild));
    }
    return canResult;
  }, items4);
  const items5 = [closure_6];
  const items6 = [arg1];
  const tmp3Result7 = tmp3(504);
  const stateFromStores2 = tmp3Result7.useStateFromStores(items5, () => {
    let guild = null;
    if (null != closure_1) {
      guild = GuildStore.getGuild(tmp);
    }
    return guild;
  }, items6);
  const items7 = [trimmed];
  const tmp3Result8 = tmp3(504);
  const stateFromStores3 = tmp3Result8.useStateFromStores(items7, () => trimmed.getCurrentUser());
  let obj4 = {
    projectId: id.id,
    reason: result1,
    editable: tmp15,
    managedCopy: isConjureManagedCopy,
    identity: tmp2,
    name: str,
    setName: tmp9,
    nameError: result,
    includes: memo,
    appChannelsPrivate: tmp23,
    devicePermissions: tmp5,
    remix: tmp6,
    destination: tmp24,
    saving,
    save() {
      return obj(...arguments);
    }
  };
  tmp23 = null;
  if (stateFromStores1) {
    let obj5 = { isPrivate: tmp13, setPrivate: tmp14, shared: length > 1 };
    tmp23 = obj5;
  }
  if ("user" === id.install_scope) {
    let tmp25 = null;
    if (null != stateFromStores3) {
      let obj6 = { type: "account", user: stateFromStores3 };
      tmp25 = obj6;
    }
    tmp24 = tmp25;
  } else {
    tmp24 = null;
    if (null != stateFromStores2) {
      let obj7 = { type: "server", guild: stateFromStores2 };
      tmp24 = obj7;
    }
  }
  return obj4;
};
