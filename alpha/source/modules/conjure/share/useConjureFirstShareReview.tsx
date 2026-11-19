// Module ID: 18428
// Function ID: 18429
// Name: useConjureFirstShareReview
// Dependencies: [5, 32, 19, 6860, 6501, 4089, 1113, 18315, 18324, 18429, 504, 18323, 6814, 2]
// Exports: conjureReviewComponents, default

// Module 18428 (useConjureFirstShareReview)
import _modDef4089 from "module_4089" /* 4089 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6501 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjurePublishStatusStore_mod from "ConjurePublishStatusStore" /* 6860 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c4, closure_2, importDefault;

let ConjurePublishStatusStore = ConjurePublishStatusStore_mod;
let items = [ConjureProjectTypes.ConjureSupportedSurface.BOT, _modDef4089.UnoAgo];
let items1 = [items, , , , , ];
let items2 = [ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY, _modDef4089["I88/iG"]];
items1[1] = items2;
let items3 = [ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL, _modDef4089.skjf5I];
items1[2] = items3;
let items4 = [ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET, _modDef4089.gXY1x1];
items1[3] = items4;
let items5 = [ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD, _modDef4089.Q9ruoM];
items1[4] = items5;
const items6 = [ConjureProjectTypes.ConjureSupportedSurface.OVERLAY, _modDef4089.KR5R34];
items1[5] = items6;
let obj = { screen_capture: _modDef4089["8/7kE7"], connect_user_to_voice: _modDef4089.uvDWXa };
let result = size.fileFinishedImporting("modules/conjure/share/useConjureFirstShareReview.tsx");

export default function useConjureFirstShareReview(id) {
  let closure_1;
  let closure_4;
  let found2;
  let isConjureManagedCopy;
  let saving;
  let str;
  let tmp9;
  let trimmed;
  _require = id;
  let obj = function _save() {
    let name;
    let user;
    obj = _asyncToGenerator(async (arg0, value) => {
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
          return { value: "HermesInternal", done: "+60" };
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
              const tmp37 = saving;
              if (!tmp37) {
                if (null == ConjurePublishStatusStore) {
                  closure_2_4(true);
                  c3 = 1;
                  let tmp15 = isConjureManagedCopy;
                  if (!tmp15) {
                    const tmp13 = name === user.name && !closure_2_1.changed;
                    tmp15 = tmp13;
                  }
                  if (!tmp15) {
                    const obj4 = { name };
                    const updateProjectSettings = tmp(closure_2[12]).updateProjectSettings;
                    id = user.id;
                    const tmp18 = tmp(closure_2[12]);
                    const merged = Object.assign(closure_2_1.changes);
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
          } else if (1 === tmp4) {
            c3 = 0;
            closure_128_4(false);
            throw closure_2;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_4(false);
            c4 = 3;
            obj = { value, done: true };
            return obj;
          }
          c3 = 0;
          closure_128_4(false);
          c4 = 3;
          return { value: true, done: true };
        } catch (tmp27) {
          closure_2 = tmp27;
          if (0 === c3) {
            c4 = 3;
            throw tmp27;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp3 = isConjureManagedCopy;
  const tmp2 = importDefault;
  const tmp4 = require("useConjureAppIdentityDraft")(id.id);
  importDefault = tmp4;
  obj = require("useConjureManagedCopy");
  isConjureManagedCopy = obj.useIsConjureManagedCopy(id.id);
  const tmp7 = require("useConjurePreviewDevicePermissions")(id.id);
  let obj2 = require("get initialized");
  const items = [ConjurePublishStatusStore];
  items1 = [id.id];
  let stateFromStores = obj2.useStateFromStores(items, () => {
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(id.id);
    let previewAppChannels;
    if (publishStatus != null) {
      previewAppChannels = publishStatus.previewAppChannels;
    }
    return previewAppChannels;
  }, items1);
  [str, tmp9] = trimmed.useState(id.name);
  [saving, _slicedToArray] = trimmed.useState(false);
  let prop = id.preview_supported_surfaces;
  const _Set = Set;
  if (prop == null) {
    prop = [];
  }
  const items2 = [...prop];
  let supported_surfaces = id.supported_surfaces;
  if (supported_surfaces == null) {
    supported_surfaces = [];
  }
  HermesBuiltin.arraySpread(items2, supported_surfaces, tmp12);
  const _Set1 = new _Set(items2);
  const items3 = [..._Set1];
  trimmed = str.trim();
  const tmp5Result = require("conjureProjectNameError");
  const result = tmp5Result.conjureProjectNameError(trimmed);
  ConjurePublishStatusStore = result;
  if (stateFromStores == null) {
    stateFromStores = [];
  }
  let arr8 = stateFromStores;
  if (stateFromStores.length <= 1) {
    if (1 !== stateFromStores.length) {
      let items4;
      if (!items3.includes(require("ConjureProjectTypes").ConjureSupportedSurface.APP_CHANNEL)) {
        items4 = [];
      }
      arr8 = items4;
    }
    let intl = tmp5(tmp3[6]).intl;
    const items5 = [intl.string(tmp2(tmp3[5]).xI4N6Q)];
    items4 = items5;
  }
  let found = items3;
  if (arr8.length > 0) {
    found = items3;
    if ("user" === id.install_scope) {
      found = items3.filter((item) => item !== id(isConjureManagedCopy[4]).ConjureSupportedSurface.ACTIVITY);
    }
  }
  let obj3 = {
    projectId: id.id,
    managedCopy: isConjureManagedCopy,
    identity: tmp4,
    name: str,
    setName: tmp9,
    nameError: result,
    channelNames: arr8,
    components: found2.map((item) => {
      let intl;
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      obj = { surface: tmp, label: intl.string(tmp2) };
      intl = id(isConjureManagedCopy[6]).intl;
      return obj;
    }),
    devicePermissions: tmp7,
    saving,
    save() {
      return obj(...arguments);
    }
  };
  const found1 = obj.filter((item) => {
    let tmp;
    [tmp] = item;
    return found.includes(tmp);
  });
  found2 = found1;
  const arr11 = obj;
  if (0 === found1.length) {
    found2 = found1;
    if (found.includes(require("ConjureProjectTypes").ConjureSupportedSurface.APPLICATION_COMMANDS)) {
      found2 = arr11.filter((item) => {
        let tmp;
        [tmp] = item;
        return tmp === id(isConjureManagedCopy[4]).ConjureSupportedSurface.BOT;
      });
    }
  }
  return obj3;
};
export const CONJURE_REVIEW_COMPONENTS = items1;
export function conjureReviewComponents(arr) {
  _require = arr;
  const found = items1.filter((item) => {
    let tmp;
    [tmp] = item;
    return found.includes(tmp);
  });
  let found1 = found;
  arr = items1;
  if (0 === found.length) {
    found1 = found;
    if (arr.includes(require("ConjureProjectTypes").ConjureSupportedSurface.APPLICATION_COMMANDS)) {
      found1 = arr.filter((item) => {
        let tmp;
        [tmp] = item;
        return tmp === id(isConjureManagedCopy[4]).ConjureSupportedSurface.BOT;
      });
    }
  }
  return found1.map((item) => {
    let intl;
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    obj = { surface: tmp, label: intl.string(tmp2) };
    intl = id(isConjureManagedCopy[6]).intl;
    return obj;
  });
}
export const CONJURE_REVIEW_PERMISSION_LABELS = obj;
