// Module ID: 12235
// Function ID: 12236
// Name: useConjurePublishPanel
// Dependencies: [5, 32, 19, 6759, 6760, 3830, 12236, 11748, 12237, 12238, 11752, 11819, 10690, 1128, 2]
// Exports: default

// Module 12235 (useConjurePublishPanel)
import _modDef3830 from "module_3830" /* 3830 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6759 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6760 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c4, closure_2, importDefault;

let _slicedToArray = _slicedToArray_mod;
const isProjectOwner = ConjureProjectStore.isProjectOwner;
let items = [ConjureProjectTypes.ConjureSupportedSurface.BOT, _modDef3830.UnoAgo];
let items1 = [items, , , ];
let items2 = [ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY, _modDef3830["I88/iG"]];
items1[1] = items2;
const items3 = [ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET, _modDef3830.gXY1x1];
items1[2] = items3;
const items4 = [ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD, _modDef3830.Q9ruoM];
items1[3] = items4;
let obj = { screen_capture: _modDef3830["8/7kE7"] };
let obj2 = { initial: _modDef3830.NUZBwo, notPublished: _modDef3830.Gdz7pg, published: _modDef3830["6E9W4F"] };
let result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishPanel.tsx");

export default function useConjurePublishPanel(id, guildId) {
  let channels;
  let closure_1;
  let closure_3;
  let closure_4;
  let formatToPlainStringResult;
  let formatToPlainStringResult1;
  let found;
  let guild;
  let intl2;
  let intl4;
  let items;
  let label;
  let liveDescription;
  let liveName;
  let memberCount;
  let saving;
  let str;
  let str3;
  let tmp18;
  let tmp19;
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
          obj2 = { value, done: true };
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
                if (null == result1) {
                  closure_2_3(true);
                  c3 = 1;
                  let tmp14 = closure_2_4;
                  if (tmp14) {
                    const changed = name !== user.name || closure_2_1.changed;
                    tmp14 = changed;
                  }
                  if (tmp14) {
                    const obj4 = { name };
                    const updateProjectSettings = tmp(closure_2[12]).updateProjectSettings;
                    id = user.id;
                    const tmp20 = tmp(closure_2[12]);
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
  obj = require("conjurePublishPopoutMode");
  const result = obj.conjurePublishPopoutMode(guildId.status);
  let tmp12 = tmp11;
  if (tmp12) {
    tmp12 = trimmed(id);
  }
  _slicedToArray = tmp12;
  items = tmp11 ? id.preview_supported_surfaces : id.supported_surfaces;
  if (items == null) {
    items = [];
  }
  trimmed = str.trim();
  let result1 = null;
  if (tmp12) {
    const tmp9Result = require("conjureProjectNameError");
    result1 = tmp9Result.conjureProjectNameError(trimmed);
  }
  const status = guildId.status;
  let previewAppChannels;
  if (status != null) {
    previewAppChannels = status.previewAppChannels;
  }
  if (previewAppChannels == null) {
    previewAppChannels = [];
  }
  const status2 = guildId.status;
  let publishedAt;
  if (status2 != null) {
    publishedAt = status2.publishedAt;
  }
  let relative = null;
  if (null != publishedAt) {
    const tmp9Result2 = require("ConjureHistoryFormat");
    relative = tmp9Result2.formatAuthoredAt(publishedAt).relative;
  }
  obj2 = {
    mode: result,
    initial: tmp11,
    editable: tmp12,
    identity: tmp4,
    name: str,
    setName: tmp6,
    nameError: result1,
    displayName: liveName,
    description: liveDescription,
    initialChannelNames: tmp18,
    channels,
    components: found.map((item) => {
      let intl;
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      obj = { surface: tmp, label: intl.string(tmp2) };
      intl = id(first[13]).intl;
      return obj;
    }),
    devicePermissions: items2,
    sharing: tmp19,
    statusText: intl4.string(obj[result]),
    lastPublishedText: formatToPlainStringResult1,
    ctaText: label,
    ctaVariant: str3,
    saving,
    save() {
      return obj(...arguments);
    }
  };
  if ("initial" === result) {
    liveName = id.name;
  }
  if ("initial" === result) {
    liveDescription = tmp4.description;
  }
  tmp18 = previewAppChannels;
  if (0 === previewAppChannels.length) {
    tmp18 = previewAppChannels;
    if (items.includes(require("ConjureProjectTypes").ConjureSupportedSurface.APP_CHANNEL)) {
      let intl = tmp9(tmp2[13]).intl;
      items1 = [intl.string(tmp(tmp2[5]).xI4N6Q)];
      tmp18 = items1;
    }
  }
  found = result1.filter((item) => {
    let tmp;
    [tmp] = item;
    return items.includes(tmp);
  });
  if ("initial" !== result) {
    items2 = [];
  }
  if (null != guild) {
    let obj3 = { guild, caption: formatToPlainStringResult };
    formatToPlainStringResult = null;
    if (null != memberCount) {
      const intl3 = tmp9(tmp2[13]).intl;
      let obj4 = { count: memberCount };
      formatToPlainStringResult = intl3.formatToPlainString(tmp(tmp2[5]).ZpZxK9, obj4);
    }
    tmp19 = obj3;
  } else {
    tmp19 = null;
    if ("user" === id.install_scope) {
      let obj5 = { guild: null, caption: intl2.string(tmp(tmp2[5]).RUhWLH) };
      intl2 = tmp9(tmp2[13]).intl;
      tmp19 = obj5;
    }
  }
  intl4 = tmp9(tmp2[13]).intl;
  formatToPlainStringResult1 = null;
  if (null != relative) {
    const intl5 = tmp9(tmp2[13]).intl;
    const obj6 = { time: relative };
    formatToPlainStringResult1 = intl5.formatToPlainString(tmp(tmp2[5])["/6YRCf"], obj6);
  }
  if ("initial" === result) {
    label = guildId.label;
  } else {
    const intl6 = tmp9(tmp2[13]).intl;
    label = intl6.string(tmp(tmp2[5]).KHg4Dk);
  }
  str3 = "primary";
  if ("published" === result) {
    str3 = "secondary";
  }
  return obj2;
};
export const CONJURE_PUBLISH_COMPONENTS = items1;
export const CONJURE_PUBLISH_PERMISSION_LABELS = obj;
