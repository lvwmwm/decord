// Module ID: 18465
// Function ID: 18466
// Name: conjureViewPlacement
// Dependencies: [32, 7708, 18466, 2]
// Exports: addConjureViewAppChannel, checkConjureViewPlacement, conjureViewPlacementCreatedChannels, conjureViewPlacementNeeded, conjureViewPlacementWire, initialConjureViewPlacement

// Module 18465 (conjureViewPlacement)
import ConjureViewsTypes from "ConjureViewsTypes" /* 7708 */;
import conjureAppChannelNameDefault from "conjureAppChannelName" /* 18466 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let map, set, set2, set3;

const f115212 = (view) => view.view;
function placedViewIds(appChannels) {
  appChannels = appChannels.appChannels;
  set = new Set(appChannels.map(f115212));
  if (null != appChannels.activity) {
    set.add(appChannels.activity);
  }
  if (null != appChannels.voiceChannel) {
    set.add(appChannels.voiceChannel);
  }
  return set;
}
function sentName(nextResult) {
  let existing;
  let name;
  ({ name, existing } = nextResult);
  let recordedName;
  if (existing != null) {
    recordedName = existing.recordedName;
  }
  if (recordedName == null) {
    recordedName = name.trim();
  }
  return recordedName;
}
let c4 = 0;
let result = size.fileFinishedImporting("modules/conjure/views/conjureViewPlacement.tsx");

export function initialConjureViewPlacement(views, buildAppChannels) {
  let channelName;
  let flatMapResult;
  let id1;
  let items1;
  let live;
  let personal;
  let substr;
  const f115210 = (name) => {
    let id;
    let items1;
    const items = [, ];
    const str = name.name;
    items[0] = str.trim();
    items[1] = name.id;
    const found = items.find((item) => {
      const tmp2 = closure_2_1(closure_2_2[2])(item);
      let tmp3 = "" !== tmp2;
      const tmp = closure_2_2;
      if (tmp3) {
        tmp3 = item.length <= set1(tmp[1]).CONJURE_MAX_VIEW_APP_CHANNEL_NAME_LENGTH;
      }
      if (tmp3) {
        tmp3 = !set.has(tmp2);
      }
      return tmp3;
    });
    if (null == found) {
      items1 = [];
    } else {
      let tmp2 = set1;
      let tmp3 = importDefault;
      set1.add(conjureAppChannelNameDefault(found));
      const obj = { key: "channel-" + sum, name: found, view: id };
      sum = sum + 1;
      const _HermesInternal = HermesInternal;
      id = name.id;
      items1 = [obj];
    }
    return items1;
  };
  const f140034 = (suggestedSurfaces) => {
    suggestedSurfaces = suggestedSurfaces.suggestedSurfaces;
    return suggestedSurfaces.includes(app_channel);
  };
  ({ personal, live, channelName } = buildAppChannels);
  if (channelName === undefined) {
    channelName = function s() {

    };
  }
  buildAppChannels = buildAppChannels.buildAppChannels;
  if (buildAppChannels === undefined) {
    buildAppChannels = [];
  }
  let tmp = _slicedToArray;
  const first = _slicedToArray(views.views, 1)[0];
  if (!views.placed) {
    if (!live) {
      let tmp13;
      let activity;
      let tmp18;
      let tmp3 = null;
      if (null != first) {
        views = views.views;
        tmp13 = null;
        if (views.some((suggestedSurfaces) => suggestedSurfaces.suggestedSurfaces.length > 0)) {
          let str = "activity";
          activity = "activity";
          const first1 = views.filter(f140034)[0];
          let id;
          if (first1 != null) {
            id = first1.id;
          }
          if (id == null) {
            id = null;
          }
          let obj = { activity: id, voiceChannel: id1, appChannels: flatMapResult.slice(0, set(7708).CONJURE_MAX_VIEW_APP_CHANNELS) };
          const voice_channel = "voice_channel";
          const first2 = views.filter(f140034)[0];
          id1 = undefined;
          if (first2 != null) {
            id1 = first2.id;
          }
          if (id1 == null) {
            id1 = null;
          }
          const app_channel = "app_channel";
          let found = views.filter(f140034);
          const _Set = Set;
          const self = this;
          const self2 = this;
          set = new Set();
          tmp13 = obj;
          flatMapResult = found.flatMap(f115210);
        }
        if (tmp13 == null) {
          let tmp17;
          let obj2 = { activity: null, voiceChannel: null, appChannels: null };
          if (personal) {
            obj2.activity = first.id;
            obj2.appChannels = [];
            tmp17 = obj2;
          } else {
            let items = [first];
            const _Set2 = Set;
            const self3 = this;
            const self4 = this;
            const set1 = new Set();
            obj2.appChannels = items.flatMap(f115210);
            tmp17 = obj2;
          }
          tmp13 = tmp17;
        }
      }
      if (personal) {
        activity = tmp13.activity;
        if (activity == null) {
          const first3 = tmp13.appChannels[0];
          let view;
          if (first3 != null) {
            view = first3.view;
          }
          activity = view;
        }
        if (activity == null) {
          activity = null;
        }
        tmp18 = { activity, voiceChannel: null, appChannels: [] };
        const obj3 = { activity, voiceChannel: null, appChannels: [] };
      } else {
        tmp18 = tmp13;
        if (live) {
          tmp18 = tmp13;
          if (!views.placed) {
            const views1 = views.views;
            set2 = undefined;
            set3 = undefined;
            const first4 = tmp(views1, 1)[0];
            let tmp21 = tmp13;
            if (null != first4) {
              const _Set3 = Set;
              const self5 = this;
              const self6 = this;
              set2 = new Set(views1.map((id) => id.id));
              const _Set4 = Set;
              const appChannels = tmp13.appChannels;
              const self7 = this;
              const self8 = this;
              set3 = new Set(appChannels.map((item) => {
                let existing;
                let name;
                ({ name, existing } = item);
                let recordedName;
                const tmp = conjureAppChannelNameDefault;
                if (existing != null) {
                  recordedName = existing.recordedName;
                }
                if (recordedName == null) {
                  recordedName = name.trim();
                }
                return tmp(recordedName);
              }));
              const flatMapResult1 = buildAppChannels.flatMap((name) => {
                const tmp = conjureAppChannelNameDefault(name);
                if ("" !== tmp) {
                  let items;
                  const obj2 = set3;
                  if (!set3.has(tmp)) {
                    obj2.add(tmp);
                    let id = name;
                    if (!set2.has(name)) {
                      id = first4.id;
                    }
                    const obj = { key: "channel-" + sum, name, view: id };
                    sum = sum + 1;
                    const _HermesInternal = HermesInternal;
                    items = [obj];
                  }
                  return items;
                }
                items = [];
              });
              const obj4 = { appChannels: items1.slice(0, set(7708).CONJURE_MAX_VIEW_APP_CHANNELS) };
              let merged = Object.assign(tmp13);
              items1 = [];
              HermesBuiltin.arraySpread(items1, flatMapResult1, HermesBuiltin.arraySpread(items1, tmp13.appChannels, 0));
              tmp21 = obj4;
            }
            tmp18 = tmp21;
          }
        }
      }
      return tmp18;
    }
  }
  const mounts = views.mounts;
  const appChannels1 = mounts.appChannels;
  const obj5 = {
    activity: mounts.activity,
    voiceChannel: mounts.voiceChannel,
    appChannels: substr.map((name) => {
      name = name.name;
      const view = name.view;
      let tmp = channelName(name.id);
      if (tmp == null) {
        tmp = name;
      }
      const obj = { existing: { currentName: tmp, recordedName: name } };
      const obj2 = { key: "channel-" + sum, name: tmp, view };
      sum = sum + 1;
      const merged = Object.assign(obj2);
      return obj;
    })
  };
  substr = appChannels1.slice(0, set(7708).CONJURE_MAX_VIEW_APP_CHANNELS);
  tmp13 = obj5;
}
export function addConjureViewAppChannel(appChannels, arr) {
  let id;
  let items;
  let sum;
  let tmp = dependencyMap;
  if (appChannels.appChannels.length < ConjureViewsTypes.CONJURE_MAX_VIEW_APP_CHANNELS) {
    if (0 !== arr.length) {
      const _Set2 = Set;
      appChannels = appChannels.appChannels;
      const self4 = this;
      const self3 = this;
      set = new Set(appChannels.map(f115212));
      if (null != appChannels.activity) {
        set.add(appChannels.activity);
      }
      if (null != appChannels.voiceChannel) {
        set.add(appChannels.voiceChannel);
      }
      let found = arr.find((id) => !set.has(id.id));
      if (found == null) {
        found = arr[0];
      }
      const obj = { appChannels: items };
      const merged = Object.assign(appChannels);
      items = [];
      const name = found.name;
      const appChannels1 = appChannels.appChannels;
      const _Set = Set;
      const self = this;
      const self2 = this;
      const arraySpreadResult = HermesBuiltin.arraySpread(items, appChannels.appChannels, 0);
      let num2 = 2;
      let tmp12 = name;
      const set1 = new Set(appChannels1.map((item) => {
        let existing;
        let name;
        ({ name, existing } = item);
        let recordedName;
        const tmp = conjureAppChannelNameDefault;
        if (existing != null) {
          recordedName = existing.recordedName;
        }
        if (recordedName == null) {
          recordedName = name.trim();
        }
        return tmp(recordedName);
      }));
      if (set1.has(conjureAppChannelNameDefault(name))) {
        const _HermesInternal = HermesInternal;
        const combined = "" + name + " " + num2;
        tmp12 = combined;
        while (tmp14(conjureAppChannelNameDefault(combined))) {
          num2 = num2 + 1;
          continue;
        }
      }
      const obj2 = { key: "channel-" + sum, name: tmp12, view: id };
      sum = c4 + 1;
      c4 = sum;
      const _HermesInternal2 = HermesInternal;
      id = found.id;
      items[arraySpreadResult] = obj2;
      return obj;
    }
  }
  return appChannels;
}
export function checkConjureViewPlacement(appChannels, arr) {
  set = new Set(arr.map((id) => id.id));
  const tmp2 = placedViewIds(appChannels);
  let closure_1 = tmp2;
  const items = [...tmp2];
  const found = items.filter((item) => !set.has(item));
  map = new Map();
  const set1 = new Set();
  const iter = appChannels.appChannels[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    let tmp6 = sentName(nextResult);
    let arr3 = tmp6;
    let tmp9 = conjureAppChannelNameDefault(tmp6);
    if ("" === tmp6) {
      let result = map.set(tmp4.key, "empty");
    } else if (arr3.length > ConjureViewsTypes.CONJURE_MAX_VIEW_APP_CHANNEL_NAME_LENGTH) {
      let result1 = map.set(tmp4.key, "too_long");
    } else if ("" === tmp9) {
      let result2 = map.set(tmp4.key, "unusable");
    } else if (set1.has(tmp9)) {
      let result3 = map.set(tmp4.key, "duplicate");
    } else {
      let addResult = set1.add(tmp9);
    }
    continue;
  }
  const obj = { channelErrors: map, missingViews: found, unplacedViews: arr.filter((id) => !set.has(id.id)), blocked: map.size > 0 || found.length > 0 };
  return obj;
}
export function conjureViewPlacementWire(activity) {
  let appChannels;
  const obj = {
    activity: activity.activity,
    voice_channel: activity.voiceChannel,
    app_channels: appChannels.map((view) => {
      let existing;
      let name;
      ({ name, existing } = view);
      let recordedName;
      if (existing != null) {
        recordedName = existing.recordedName;
      }
      if (recordedName == null) {
        recordedName = name.trim();
      }
      return { name: recordedName, view: view.view };
    })
  };
  appChannels = activity.appChannels;
  return obj;
}
export function conjureViewPlacementNeeded(views) {
  let tmp = null != views;
  if (tmp) {
    const placed = views.placed;
    let tmp2 = !placed;
    if (placed) {
      tmp2 = views.missingViews.length > 0;
    }
    tmp = tmp2;
  }
  return tmp;
}
export function conjureViewPlacementCreatedChannels(draft, appChannels) {
  appChannels = draft.appChannels;
  return appChannels.filter((item) => {
    appChannels = item;
    return !appChannels.some((name) => {
      let existing;
      let name2;
      name = name.name;
      ({ name: name2, existing } = closure_0);
      let recordedName;
      const tmp = closure_2_1(closure_2_2[2]);
      if (existing != null) {
        recordedName = existing.recordedName;
      }
      if (recordedName == null) {
        recordedName = name2.trim();
      }
      return name === tmp(recordedName);
    });
  }).length;
}
