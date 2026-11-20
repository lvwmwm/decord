// Module ID: 18125
// Function ID: 18126
// Name: conjurePublishReview
// Dependencies: [6503, 4091, 1112, 12190, 2]
// Exports: conjureAddedSurfaces, conjurePublishIncludes, conjurePublishReviewReason, conjureReviewComponents

// Module 18125 (conjurePublishReview)
import _modDef4091 from "module_4091" /* 4091 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6503 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let items = [ConjureProjectTypes.ConjureSupportedSurface.BOT, _modDef4091.UnoAgo];
let items1 = [items, , , , , ];
let items2 = [ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY, _modDef4091["I88/iG"]];
items1[1] = items2;
let items3 = [ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL, _modDef4091.skjf5I];
items1[2] = items3;
let items4 = [ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET, _modDef4091.gXY1x1];
items1[3] = items4;
const items5 = [ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD, _modDef4091.Q9ruoM];
items1[4] = items5;
const items6 = [ConjureProjectTypes.ConjureSupportedSurface.OVERLAY, _modDef4091.KR5R34];
items1[5] = items6;
let obj = { screen_capture: _modDef4091["8/7kE7"], connect_user_to_voice: _modDef4091.uvDWXa };
const items7 = [
  ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL,
  ...items1.map((item) => {
    let tmp;
    [tmp] = item;
    return tmp;
  })
];
new Set(items7);
const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishReview.tsx");

export const CONJURE_REVIEW_COMPONENTS = items1;
export function conjureReviewComponents(arr) {
  _require = arr;
  const found = items1.filter((item) => {
    let tmp;
    [tmp] = item;
    return found1.includes(tmp);
  });
  let found1 = found;
  arr = items1;
  if (0 === found.length) {
    found1 = found;
    if (arr.includes(require("ConjureProjectTypes").ConjureSupportedSurface.APPLICATION_COMMANDS)) {
      found1 = arr.filter((item) => {
        let tmp;
        [tmp] = item;
        return tmp === result1(items2[0]).ConjureSupportedSurface.BOT;
      });
    }
  }
  return found1.map((item) => {
    let intl;
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    const obj = { surface: tmp, label: intl.string(tmp2) };
    intl = result1(items2[2]).intl;
    return obj;
  });
}
export const CONJURE_REVIEW_PERMISSION_LABELS = obj;
export function conjureAddedSurfaces(supported_surfaces) {
  supported_surfaces = supported_surfaces.supported_surfaces;
  const _Set = Set;
  if (supported_surfaces == null) {
    supported_surfaces = [];
  }
  const _Set1 = new _Set(supported_surfaces);
  let prop = supported_surfaces.preview_supported_surfaces;
  if (prop == null) {
    prop = [];
  }
  return prop.filter((item) => {
    const hasItem = APP_CHANNEL.has(item) && !_Set21.has(item);
    return hasItem;
  });
}
export function conjurePublishReviewReason(project, publishStatus) {
  let _Set1;
  let tmp = null;
  if (null != publishStatus) {
    tmp = null;
    if (true !== publishStatus.safetyHold) {
      let str = "first_publish";
      const obj = _Set1(12190);
      if (obj.isConjureLive(publishStatus.publishState)) {
        let tmp7;
        let supported_surfaces = project.supported_surfaces;
        const _Set = Set;
        if (supported_surfaces == null) {
          supported_surfaces = [];
        }
        const self = this;
        const self2 = this;
        _Set1 = new _Set(supported_surfaces);
        let prop = project.preview_supported_surfaces;
        if (prop == null) {
          prop = [];
        }
        if (prop.filter((item) => {
          const hasItem = APP_CHANNEL.has(item) && !_Set21.has(item);
          return hasItem;
        }).length > 0) {
          tmp7 = "adds_surfaces";
        } else {
          let newAppChannels = publishStatus.newAppChannels;
          if (newAppChannels == null) {
            newAppChannels = [];
          }
          tmp7 = null;
        }
        str = tmp7;
      }
      tmp = str;
    }
  }
  return tmp;
}
export function conjurePublishIncludes(preview_supported_surfaces, stateFromStores, result1) {
  let APP_CHANNEL;
  let closure_3;
  let found;
  let intl;
  let items2;
  let mapped;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp17;
  _require = result1;
  let prop = preview_supported_surfaces.preview_supported_surfaces;
  const _Set = Set;
  if (prop == null) {
    prop = [];
  }
  const items = [...prop];
  let supported_surfaces = preview_supported_surfaces.supported_surfaces;
  if (supported_surfaces == null) {
    supported_surfaces = [];
  }
  HermesBuiltin.arraySpread(items, supported_surfaces, tmp2);
  const _Set1 = new _Set(items);
  items1 = [..._Set1];
  if ("adds_surfaces" === result1) {
    let supported_surfaces1 = preview_supported_surfaces.supported_surfaces;
    const _Set2 = Set;
    if (supported_surfaces1 == null) {
      supported_surfaces1 = [];
    }
    const self2 = this;
    const self = this;
    let tmp6 = supported_surfaces1;
    const _Set21 = new _Set2(supported_surfaces1);
    let prop1 = preview_supported_surfaces.preview_supported_surfaces;
    if (prop1 == null) {
      prop1 = [];
    }
    found = prop1.filter((item) => {
      const hasItem = APP_CHANNEL.has(item) && !_Set21.has(item);
      return hasItem;
    });
  } else {
    found = [];
  }
  if ("adds_surfaces" === result1) {
    let newAppChannels;
    if (stateFromStores != null) {
      newAppChannels = stateFromStores.newAppChannels;
    }
    if (newAppChannels == null) {
      newAppChannels = [];
    }
    items2 = newAppChannels;
  } else {
    items2 = [];
  }
  items1 = tmp9;
  const ConjureSupportedSurface = require("ConjureProjectTypes").ConjureSupportedSurface;
  if ("user" === preview_supported_surfaces.install_scope) {
    APP_CHANNEL = ConjureSupportedSurface.ACTIVITY;
    tmp12 = tmp11;
    tmp13 = tmp10;
    tmp14 = tmp11;
    tmp15 = tmp10;
  } else {
    APP_CHANNEL = ConjureSupportedSurface.APP_CHANNEL;
    tmp12 = tmp11;
    tmp13 = tmp10;
    tmp14 = tmp11;
    tmp15 = tmp10;
  }
  let previewAppChannels;
  if (stateFromStores != null) {
    previewAppChannels = stateFromStores.previewAppChannels;
  }
  if (previewAppChannels == null) {
    previewAppChannels = [];
  }
  if (previewAppChannels.length > 0) {
    mapped = previewAppChannels.map((item) => {
      let hasItem;
      let tmp6;
      if (closure_3) {
        hasItem = found.includes(APP_CHANNEL);
      } else {
        hasItem = items2.includes(item);
      }
      const obj = { key: "channel:" + item, icon: "app_channel", label: "#" + item, isNew: hasItem, creates: tmp6 };
      tmp6 = !tmp;
      if (tmp6) {
        tmp6 = "first_publish" === result1 || hasItem;
      }
      return obj;
    });
  } else if (items1.includes(tmp15(tmp14[0]).ConjureSupportedSurface.APP_CHANNEL)) {
    let obj = { key: "channel", icon: "app_channel", label: intl.string(found(tmp14[1]).xI4N6Q), isNew: found.includes(APP_CHANNEL), creates: tmp17 };
    intl = tmp15(tmp14[2]).intl;
    tmp17 = !tmp9;
    if (tmp17) {
      tmp17 = "first_publish" === result1 || found.includes(APP_CHANNEL);
      "first_publish" === result1 || found.includes(APP_CHANNEL);
    }
    const items3 = [obj];
    mapped = items3;
  } else {
    mapped = [];
  }
  let found1 = items1;
  if (mapped.length > 0) {
    found1 = items1;
    if ("user" === preview_supported_surfaces.install_scope) {
      found1 = items1.filter((item) => item !== result1(items2[0]).ConjureSupportedSurface.ACTIVITY);
    }
  }
  const found2 = items1.filter((item) => {
    let tmp;
    [tmp] = item;
    return found1.includes(tmp);
  });
  let found3 = found2;
  const arr13 = items1;
  if (0 === found2.length) {
    found3 = found2;
    if (found1.includes(tmp13(tmp12[0]).ConjureSupportedSurface.APPLICATION_COMMANDS)) {
      found3 = arr13.filter((item) => {
        let tmp;
        [tmp] = item;
        return tmp === result1(items2[0]).ConjureSupportedSurface.BOT;
      });
    }
  }
  const mapped1 = found3.map((item) => {
    let intl;
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    const obj = { surface: tmp, label: intl.string(tmp2) };
    intl = result1(items2[2]).intl;
    return obj;
  });
  const mapped2 = mapped1.map((label) => {
    const surface = label.surface;
    const obj = { key: "surface:" + surface, icon: surface, label: label.label, isNew: found.includes(surface), creates: false };
    return obj;
  });
  const items4 = [...mapped2];
  return items4;
}
