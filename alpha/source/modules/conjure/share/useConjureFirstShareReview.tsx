// Module ID: 18434
// Function ID: 18435
// Name: useConjureFirstShareReview
// Dependencies: [5, 32, 19, 6890, 6530, 4121, 1113, 18322, 18435, 504, 18330, 6844, 2]
// Exports: conjureReviewComponents, default

// Module 18434 (useConjureFirstShareReview)
import _modDef4121 from "module_4121" /* 4121 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6530 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 6890 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c4, closure_2, importDefault;

const f116173 = (item) => {
  let tmp;
  [tmp] = item;
  return tmp === id(first[4]).ConjureSupportedSurface.BOT;
};
const f116174 = (item) => {
  let intl;
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  obj = { surface: tmp, label: intl.string(tmp2) };
  intl = id(first[6]).intl;
  return obj;
};
let react = react_mod;
let items = [ConjureProjectTypes.ConjureSupportedSurface.BOT, _modDef4121.UnoAgo];
let items1 = [items, , , , , ];
let items2 = [ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY, _modDef4121["I88/iG"]];
items1[1] = items2;
let items3 = [ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL, _modDef4121.skjf5I];
items1[2] = items3;
let items4 = [ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET, _modDef4121.gXY1x1];
items1[3] = items4;
let items5 = [ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD, _modDef4121.Q9ruoM];
items1[4] = items5;
let items6 = [ConjureProjectTypes.ConjureSupportedSurface.OVERLAY, _modDef4121.KR5R34];
items1[5] = items6;
let obj = { screen_capture: _modDef4121["8/7kE7"], connect_user_to_voice: _modDef4121.uvDWXa };
let result = size.fileFinishedImporting("modules/conjure/share/useConjureFirstShareReview.tsx");

export default function useConjureFirstShareReview(id) {
  let closure_1;
  let found2;
  let saving;
  let tmp13;
  let tmp14;
  let tmp20;
  let trimmed;
  _require = id;
  let obj = function _save() {
    let name;
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
              const tmp31 = saving;
              if (!tmp31) {
                if (null == react) {
                  closure_2_3(true);
                  c3 = 1;
                  let changed = trimmed !== name.name;
                  const tmp34 = trimmed;
                  const tmp35 = name;
                  if (!changed) {
                    changed = closure_2_1.changed;
                  }
                  if (changed) {
                    const obj4 = { name: tmp34 };
                    const updateProjectSettings = tmp(closure_2[11]).updateProjectSettings;
                    id = tmp35.id;
                    const tmp17 = tmp(closure_2[11]);
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
            closure_128_3(false);
            throw closure_2;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_3(false);
            c4 = 3;
            obj = { value, done: true };
            return obj;
          }
          c3 = 0;
          closure_128_3(false);
          c4 = 3;
          return { value: true, done: true };
        } catch (tmp21) {
          closure_2 = tmp21;
          if (0 === c3) {
            c4 = 3;
            throw tmp21;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp3 = saving;
  const tmp2 = importDefault;
  const tmp4 = require("useConjureAppIdentityDraft")(id.id);
  importDefault = tmp4;
  const tmp5 = require("useConjurePreviewDevicePermissions")(id.id);
  obj = require("get initialized");
  const items = [obj];
  items1 = [id.id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(id.id);
    let previewAppChannels;
    if (publishStatus != null) {
      previewAppChannels = publishStatus.previewAppChannels;
    }
    return previewAppChannels;
  }, items1);
  const tmp8 = trimmed(react.useState(id.name), 2);
  const tmp9 = tmp8[1];
  const tmp10 = trimmed(react.useState(false), 2);
  saving = tmp10[0];
  let closure_3 = tmp10[1];
  let prop = id.preview_supported_surfaces;
  [tmp13, tmp14] = trimmed(react.useState(false), 2);
  const _Set = Set;
  const tmp12 = trimmed(react.useState(false), 2);
  if (prop == null) {
    prop = [];
  }
  const items2 = [...prop];
  let supported_surfaces = id.supported_surfaces;
  if (supported_surfaces == null) {
    supported_surfaces = [];
  }
  HermesBuiltin.arraySpread(items2, supported_surfaces, tmp15);
  const _Set1 = new _Set(items2);
  const items3 = [..._Set1];
  trimmed = str.trim();
  const tmp6Result = require("conjureProjectNameError");
  const result = tmp6Result.conjureProjectNameError(trimmed);
  react = result;
  let items4 = stateFromStores;
  if (stateFromStores == null) {
    items4 = [];
  }
  let arr8 = items4;
  if (items4.length <= 1) {
    if (1 !== items4.length) {
      let items5;
      if (!items3.includes(require("ConjureProjectTypes").ConjureSupportedSurface.APP_CHANNEL)) {
        items5 = [];
      }
      arr8 = items5;
    }
    let intl = tmp6(tmp3[6]).intl;
    const items6 = [intl.string(tmp2(tmp3[5]).xI4N6Q)];
    items5 = items6;
  }
  let found = items3;
  if (arr8.length > 0) {
    found = items3;
    if ("user" === id.install_scope) {
      found = items3.filter((item) => item !== id(first[4]).ConjureSupportedSurface.ACTIVITY);
    }
  }
  let obj2 = {
    identity: tmp4,
    name: str,
    setName: tmp9,
    nameError: result,
    channelNames: arr8,
    appChannelsPrivate: tmp20,
    components: found2.map(f116174),
    devicePermissions: tmp5,
    saving,
    save() {
      return obj(...arguments);
    }
  };
  tmp20 = null;
  if (arr8.length > 0) {
    let obj3 = { isPrivate: tmp13, setPrivate: tmp14 };
    tmp20 = obj3;
  }
  const found1 = items1.filter((item) => {
    let tmp;
    [tmp] = item;
    return found.includes(tmp);
  });
  found2 = found1;
  const arr11 = items1;
  if (0 === found1.length) {
    found2 = found1;
    if (found.includes(require("ConjureProjectTypes").ConjureSupportedSurface.APPLICATION_COMMANDS)) {
      found2 = arr11.filter(f116173);
    }
  }
  return obj2;
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
      found1 = arr.filter(f116173);
    }
  }
  return found1.map(f116174);
}
export const CONJURE_REVIEW_PERMISSION_LABELS = obj;
