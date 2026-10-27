// Module ID: 12161
// Function ID: 12162
// Name: useConjurePublishPanel
// Dependencies: [5, 32, 19, 6774, 6775, 3831, 12162, 12163, 12165, 10808, 12166, 10723, 1125, 2]
// Exports: default

// Module 12161 (useConjurePublishPanel)
import _modDef3831 from "module_3831" /* 3831 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6774 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6775 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c4, closure_2, importDefault;

let _slicedToArray = _slicedToArray_mod;
const isProjectOwner = ConjureProjectStore.isProjectOwner;
let items = [ConjureProjectTypes.ConjureSupportedSurface.BOT, _modDef3831.UnoAgo];
let items1 = [items, , , ];
let items2 = [ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY, _modDef3831["I88/iG"]];
items1[1] = items2;
const items3 = [ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET, _modDef3831.gXY1x1];
items1[2] = items3;
const items4 = [ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD, _modDef3831.Q9ruoM];
items1[3] = items4;
let obj = { screen_capture: _modDef3831["8/7kE7"], connect_user_to_voice: _modDef3831.uvDWXa };
let result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishPanel.tsx");

export default function useConjurePublishPanel(id, guildId) {
  let channels;
  let closure_1;
  let closure_3;
  let closure_4;
  let formatToPlainStringResult;
  let found;
  let guild;
  let intl2;
  let items;
  let liveDescription;
  let liveName;
  let memberCount;
  let saving;
  let str;
  let tmp16;
  let tmp18;
  let tmp6;
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
          return { value: "IconComponent", done: null };
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
              const tmp36 = saving;
              if (!tmp36) {
                if (null == items1) {
                  closure_2_3(true);
                  c3 = 1;
                  let tmp14 = closure_2_4;
                  if (tmp14) {
                    const changed = name !== user.name || closure_2_1.changed;
                    tmp14 = changed;
                  }
                  if (tmp14) {
                    const obj4 = { name };
                    const updateProjectSettings = tmp(closure_2[11]).updateProjectSettings;
                    id = user.id;
                    const tmp20 = tmp(closure_2[11]);
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
        } catch (tmp26) {
          closure_2 = tmp26;
          if (0 === c3) {
            c4 = 3;
            throw tmp26;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = importDefault;
  const tmp2 = saving;
  const tmp3 = require("useConjureLiveParts")(id.id, guildId.guildId);
  ({ liveName, liveDescription, guild, memberCount, channels } = tmp3);
  const tmp4 = require("useConjureAppIdentityDraft")(id.id);
  importDefault = tmp4;
  let items2 = require("useConjurePreviewDevicePermissions")(id.id);
  [str, tmp6] = items.useState(id.name);
  [saving, closure_3] = items.useState(false);
  let tmp9 = null == guildId.status;
  if (!tmp9) {
    obj = require("ConjurePublishTypes");
    tmp9 = !obj.isConjureLive(guildId.status.publishState);
  }
  let tmp11 = tmp9;
  if (tmp11) {
    tmp11 = trimmed(id);
  }
  _slicedToArray = tmp11;
  items = tmp9 ? id.preview_supported_surfaces : id.supported_surfaces;
  if (items == null) {
    items = [];
  }
  trimmed = str.trim();
  let result = null;
  if (tmp11) {
    let obj2 = require("conjureProjectNameError");
    result = obj2.conjureProjectNameError(trimmed);
  }
  items1 = result;
  const status = guildId.status;
  let previewAppChannels;
  if (status != null) {
    previewAppChannels = status.previewAppChannels;
  }
  if (previewAppChannels == null) {
    previewAppChannels = [];
  }
  let obj3 = {
    initial: tmp9,
    editable: tmp11,
    identity: tmp4,
    name: str,
    setName: tmp6,
    nameError: result,
    displayName: liveName,
    description: liveDescription,
    initialChannelNames: tmp16,
    channels,
    components: found.map((item) => {
      let intl;
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      obj = { surface: tmp, label: intl.string(tmp2) };
      intl = id(first[12]).intl;
      return obj;
    }),
    devicePermissions: items2,
    sharing: tmp18,
    saving,
    save() {
      return obj(...arguments);
    }
  };
  if (tmp9) {
    liveName = id.name;
  }
  if (tmp9) {
    liveDescription = tmp4.description;
  }
  tmp16 = previewAppChannels;
  if (0 === previewAppChannels.length) {
    tmp16 = previewAppChannels;
    const tmp17 = _require;
    if (items.includes(require("ConjureProjectTypes").ConjureSupportedSurface.APP_CHANNEL)) {
      let intl = tmp17(tmp2[12]).intl;
      items1 = [intl.string(tmp(tmp2[5]).xI4N6Q)];
      tmp16 = items1;
    }
  }
  found = items1.filter((item) => {
    let tmp;
    [tmp] = item;
    return items.includes(tmp);
  });
  if (!tmp9) {
    items2 = [];
  }
  if (null != guild) {
    let obj4 = { guild, caption: formatToPlainStringResult };
    formatToPlainStringResult = null;
    if (null != memberCount) {
      const intl3 = require("intl").intl;
      let obj5 = { count: memberCount };
      formatToPlainStringResult = intl3.formatToPlainString(tmp(tmp2[5]).ZpZxK9, obj5);
    }
    tmp18 = obj4;
  } else {
    tmp18 = null;
    if ("user" === id.install_scope) {
      const obj6 = { guild: null, caption: intl2.string(tmp(tmp2[5]).RUhWLH) };
      intl2 = require("intl").intl;
      tmp18 = obj6;
    }
  }
  return obj3;
};
export const CONJURE_PUBLISH_COMPONENTS = items1;
export const CONJURE_PUBLISH_PERMISSION_LABELS = obj;
