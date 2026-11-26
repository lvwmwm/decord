// Module ID: 7707
// Function ID: 7708
// Name: conjureViewsStatus
// Dependencies: [7708, 2]
// Exports: parseConjureViewsStatus, sameConjureViewsStatus

// Module 7707 (conjureViewsStatus)
import ConjureViewsTypes from "ConjureViewsTypes" /* 7708 */;
import size from "module_2" /* 2 */;

let set;

function isViewSurface(str) {
  let hasItem = typeof str === "string";
  if (typeof str === "string") {
    const CONJURE_VIEW_SURFACES = ConjureViewsTypes.CONJURE_VIEW_SURFACES;
    hasItem = CONJURE_VIEW_SURFACES.includes(str);
  }
  return hasItem;
}
const result = size.fileFinishedImporting("modules/conjure/views/conjureViewsStatus.tsx");

export function parseConjureViewsStatus(views) {
  let flatMapResult1;
  let obj2;
  let tmp7;
  if (Array.isArray(views.views)) {
    let found;
    let tmp4;
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    views = views.views;
    const flatMapResult = views.flatMap((item) => {
      let found;
      let id;
      let name;
      let suggested_surfaces;
      let tmp = null;
      if (null != item) {
        tmp = null;
        if (typeof item === "object") {
          ({ id, name, suggested_surfaces } = item);
          let tmp2 = null;
          if (typeof id === "string") {
            tmp2 = null;
            if ("" !== id) {
              tmp2 = null;
              if (typeof name === "string") {
                const obj2 = { id, name, suggestedSurfaces: found };
                if ("" === name.trim()) {
                  name = id;
                }
                const _Array = Array;
                if (Array.isArray(suggested_surfaces)) {
                  found = suggested_surfaces.filter(isViewSurface);
                } else {
                  found = [];
                }
                tmp2 = obj2;
              }
            }
          }
          tmp = tmp2;
        }
      }
      if (null != tmp) {
        let items;
        const obj = set;
        if (!set.has(tmp.id)) {
          obj.add(tmp.id);
          items = [tmp];
        }
        return items;
      }
      items = [];
    });
    let _Array = Array;
    if (Array.isArray(views.missing_views)) {
      const missing_views = views.missing_views;
      found = missing_views.filter((item) => typeof item === "string");
    } else {
      found = [];
    }
    if (0 !== flatMapResult.length) {
      let obj = { views: flatMapResult, mounts: obj2, placed: true === views.view_mounts_placed, missingViews: found };
      const view_mounts = views.view_mounts ?? {};
      const activity = view_mounts.activity;
      let tmp6 = null;
      if (typeof activity === "string") {
        tmp6 = null;
        if ("" !== activity) {
          tmp6 = activity;
        }
      }
      obj2 = { activity: tmp6, voiceChannel: tmp7, appChannels: flatMapResult1 };
      const voice_channel = view_mounts.voice_channel;
      tmp7 = null;
      if (typeof voice_channel === "string") {
        tmp7 = null;
        if ("" !== voice_channel) {
          tmp7 = voice_channel;
        }
      }
      const _Array2 = Array;
      if (Array.isArray(view_mounts.app_channels)) {
        const app_channels = view_mounts.app_channels;
        flatMapResult1 = app_channels.flatMap((item) => {
          let id;
          let name;
          let view;
          let items = null;
          if (null != item) {
            items = null;
            if (typeof item === "object") {
              ({ id, name, view } = item);
              let tmp = null;
              if (typeof id === "string") {
                tmp = null;
                if (typeof name === "string") {
                  tmp = null;
                  if (typeof view === "string") {
                    tmp = { id, name, view };
                    const obj = { id, name, view };
                  }
                }
              }
              items = tmp;
            }
          }
          if (items == null) {
            items = [];
          }
          return items;
        });
      } else {
        flatMapResult1 = [];
      }
      tmp4 = obj;
    } else {
      tmp4 = null;
    }
    return tmp4;
  } else {
    let tmp = null;
    return null;
  }
}
export function sameConjureViewsStatus(views1, views) {
  if (null != views1) {
    let everyResult;
    if (null != views) {
      everyResult = views1.placed === views.placed;
      if (everyResult) {
        const missingViews = views1.missingViews;
        const missingViews1 = views.missingViews;
        const tmp = missingViews.length === missingViews1.length && missingViews.every((item, index) => item === suggestedSurfaces1[index]);
        everyResult = tmp;
      }
      if (everyResult) {
        everyResult = views1.views.length === views.views.length;
      }
      if (everyResult) {
        views = views1.views;
        everyResult = views.every((id, index) => {
          let tmp2 = id.id === views.views[index].id && id.name === tmp.views[index].name;
          if (tmp2) {
            const suggestedSurfaces = id.suggestedSurfaces;
            const suggestedSurfaces1 = tmp.views[index].suggestedSurfaces;
            tmp2 = suggestedSurfaces.length === suggestedSurfaces1.length && suggestedSurfaces.every((item, index) => item === suggestedSurfaces1[index]);
            suggestedSurfaces.length === suggestedSurfaces1.length && suggestedSurfaces.every((item, index) => item === suggestedSurfaces1[index]);
          }
          return tmp2;
        });
      }
      if (everyResult) {
        everyResult = views1.mounts.activity === views.mounts.activity;
      }
      if (everyResult) {
        everyResult = views1.mounts.voiceChannel === views.mounts.voiceChannel;
      }
      if (everyResult) {
        everyResult = views1.mounts.appChannels.length === views.mounts.appChannels.length;
      }
      if (everyResult) {
        const appChannels = views1.mounts.appChannels;
        everyResult = appChannels.every((id, index) => id.id === views.mounts.appChannels[index].id && id.name === views.mounts.appChannels[index].name && id.view === views.mounts.appChannels[index].view);
      }
    }
    return everyResult;
  }
  everyResult = views1 === views;
}
