// Module ID: 18470
// Function ID: 18471
// Name: useConjurePublishReview
// Dependencies: [5, 32, 19, 4914, 4975, 1387, 6934, 7706, 1071, 6935, 18471, 18473, 18474, 18475, 504, 18480, 18464, 18481, 18465, 8526, 7667, 2]
// Exports: default

// Module 18470 (useConjurePublishReview)
import ConjureProjectStore from "ConjureProjectStore" /* 6934 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6935 */;
import ChannelPermissionsUtils from "ChannelPermissionsUtils" /* 8526 */;
import conjurePublishReview from "conjurePublishReview" /* 18464 */;
import useConjureAppIdentityDraftDefault from "useConjureAppIdentityDraft" /* 18471 */;
import useConjurePreviewDevicePermissionsDefault from "useConjurePreviewDevicePermissions" /* 18474 */;
import useConjurePublishRemixDefault from "useConjurePublishRemix" /* 18475 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4914 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import UserStore from "UserStore" /* 1387 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7706 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c4, closure_2, constants, dependencyMap, importDefault;

let closure_12;
let tmp;
let unpackModuleId;
const useConjureViewPlacementDefault = tmp(18481);
let isProjectOwner = ConjureProjectStore.isProjectOwner;
({ ChannelTypes: unpackModuleId, Permissions: closure_12 } = Constants);
let items = ["app_channel", ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY, ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL];
const set = new Set(items);
let result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishReview.tsx");

export default function useConjurePublishReview(id, arg1) {
  let appChannels;
  let closure_1;
  let length;
  let result1;
  let saving;
  let tmp14;
  let tmp15;
  let tmp27;
  let tmp28;
  let tmp29;
  _require = id;
  importDefault = arg1;
  let obj = function _save() {
    let name;
    let user;
    obj = _asyncToGenerator(async function(arg0, value) {
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
          return { value: "HermesInternal", done: "+95" };
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
                    const updateProjectSettings = tmp(closure_2[20]).updateProjectSettings;
                    id = user.id;
                    const tmp27 = tmp(closure_2[20]);
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
            obj = { value, done: true };
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
  const tmp = importDefault;
  const tmp3 = useConjureAppIdentityDraftDefault(id.id);
  dependencyMap = tmp3;
  obj = require("useConjureManagedCopy");
  const isConjureManagedCopy = obj.useIsConjureManagedCopy(id.id);
  const tmp6 = useConjurePreviewDevicePermissionsDefault(id.id);
  const tmp7 = useConjurePublishRemixDefault(id.id);
  let closure_3 = tmp7;
  let obj2 = require("get initialized");
  const items = [result1];
  const items1 = [id.id];
  const stateFromStores = obj2.useStateFromStores(items, () => ConjurePublishStatusStore.getPublishStatus(id.id), items1);
  let obj3 = saving;
  const tmp9 = stateFromStores(saving.useState(id.name), 2);
  const tmp10 = tmp9[1];
  const tmp11 = stateFromStores(saving.useState(false), 2);
  saving = tmp11[0];
  let closure_6 = tmp11[1];
  [tmp14, tmp15] = stateFromStores(saving.useState(false), 2);
  const tmp13 = stateFromStores(saving.useState(false), 2);
  const tmp16 = isProjectOwner(id);
  let closure_7 = tmp16;
  const trimmed = str.trim();
  let result = null;
  if (tmp16) {
    const tmp4Result = require("conjureProjectNameError");
    result = tmp4Result.conjureProjectNameError(trimmed);
  }
  isProjectOwner = result;
  const tmp4Result6 = require("conjurePublishReview");
  result1 = tmp4Result6.conjurePublishReviewReason(id, stateFromStores);
  const tmp20 = useConjureViewPlacementDefault(id, stateFromStores);
  let closure_11 = tmp21;
  const items2 = [id, stateFromStores, result1, tmp21];
  const memo = obj3.useMemo(() => {
    obj = conjurePublishReview;
    result = obj.conjurePublishIncludes(id, stateFromStores, result1);
    let found = result;
    if (closure_11) {
      found = result.filter((icon) => !set.has(icon.icon));
    }
    return found;
  }, items2);
  if (stateFromStores != null) {
    const views = stateFromStores.views;
    if (views != null) {
      appChannels = views.mounts.appChannels;
    }
  }
  if (null == tmp20) {
    length = memo.filter((creates) => creates.creates).length;
  } else {
    const conjureViewPlacementCreatedChannels = tmp4(18465).conjureViewPlacementCreatedChannels;
    const draft = tmp20.draft;
    require("conjureViewPlacement");
    if (appChannels == null) {
      appChannels = [];
    }
    length = conjureViewPlacementCreatedChannels(draft, appChannels);
  }
  let tmp23 = null;
  if (tmp16) {
    tmp23 = null;
    if (length > 0) {
      tmp23 = null;
      if ("guild" === id.install_scope) {
        tmp23 = null;
        if (id.guild_id === arg1) {
          tmp23 = arg1;
        }
      }
    }
  }
  constants = tmp23;
  const items3 = [closure_6, closure_7];
  const items4 = [tmp23];
  const tmp4Result8 = require("get initialized");
  const stateFromStores1 = tmp4Result8.useStateFromStores(items3, () => {
    let guild = null;
    if (null != constants) {
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
  const tmp4Result9 = require("get initialized");
  const stateFromStores2 = tmp4Result9.useStateFromStores(items5, () => {
    let guild = null;
    if (null != closure_1) {
      guild = GuildStore.getGuild(tmp);
    }
    return guild;
  }, items6);
  const items7 = [trimmed];
  const tmp4Result10 = require("get initialized");
  const stateFromStores3 = tmp4Result10.useStateFromStores(items7, () => trimmed.getCurrentUser());
  let obj4 = {
    projectId: id.id,
    reason: result1,
    editable: tmp16,
    managedCopy: isConjureManagedCopy,
    identity: tmp3,
    name: str,
    setName: tmp10,
    nameError: result,
    includes: memo,
    placement: tmp20,
    appChannelsPrivate: tmp27,
    devicePermissions: tmp6,
    remix: tmp7,
    destination: tmp29,
    saving,
    save() {
      return obj(...arguments);
    }
  };
  tmp27 = null;
  if (stateFromStores1) {
    let obj5 = { isPrivate: tmp14, setPrivate: tmp15, shared: tmp28 };
    tmp28 = null != tmp20;
    if (!tmp28) {
      tmp28 = length > 1;
    }
    tmp27 = obj5;
  }
  if ("user" === id.install_scope) {
    let tmp30 = null;
    if (null != stateFromStores3) {
      let obj6 = { type: "account", user: stateFromStores3 };
      tmp30 = obj6;
    }
    tmp29 = tmp30;
  } else {
    tmp29 = null;
    if (null != stateFromStores2) {
      let obj7 = { type: "server", guild: stateFromStores2 };
      tmp29 = obj7;
    }
  }
  return obj4;
};
