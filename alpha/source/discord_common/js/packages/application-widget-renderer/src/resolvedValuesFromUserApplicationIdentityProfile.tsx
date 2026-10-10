// Module ID: 13330
// Function ID: 13331
// Name: resolvedValuesFromUserApplicationIdentityProfile
// Dependencies: [32, 13248, 13331, 2]
// Exports: default

// Module 13330 (resolvedValuesFromUserApplicationIdentityProfile)
import resolvedValues from "resolvedValues" /* 13248 */;
import ProfileDataDynamicType from "ProfileDataDynamicType" /* 13331 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size_mod from "module_2" /* 2 */;

function isVisualUnfurledMedia(value) {
  return null != value.width && value.width > 0 && null != value.height && value.height > 0;
}
function resolvedValuesFromPrimary(data) {
  let tmp7;
  let tmp8;
  data = data.data;
  let primary;
  if (data != null) {
    primary = data.primary;
  }
  const obj = {};
  if (null == primary) {
    return obj;
  } else {
    const _Object = Object;
    const entries = Object.entries(primary);
    const tmp29 = entries[Symbol.iterator]();
    while (tmp29 !== undefined) {
      let tmp6 = _slicedToArray(tmp3, 2);
      [tmp7, tmp8] = tmp6;
      let tmp9 = tmp8;
      if (typeof tmp8 === "string") {
        let obj2 = { type: resolvedValues.ResolvedValueType.STRING, value: tmp9 };
        obj[tmp7] = obj2;
      } else if (typeof tmp9 === "number") {
        let obj4 = { type: resolvedValues.ResolvedValueType.NUMBER, value: tmp9 };
        obj[tmp7] = obj4;
      } else if (typeof tmp9 === "object") {
        if ("url" in tmp9) {
          if ("proxy_url" in tmp9) {
            if ("loading_state" in tmp9) {
              if (isVisualUnfurledMedia(tmp9)) {
                let obj5 = { type: resolvedValues.ResolvedValueType.MEDIA, media: size };
                size = { url: null, width: null, height: null };
                ({ proxy_url: obj3.url, width: obj3.width, height: obj3.height } = tmp9);
                obj[tmp7] = obj5;
              }
              continue;
            }
          }
        }
      }
      continue;
    }
    return obj;
  }
}
function resolvedValuesFromDynamic(data) {
  data = data.data;
  let dynamic;
  if (data != null) {
    dynamic = data.dynamic;
  }
  const obj = {};
  if (null == dynamic) {
    return obj;
  } else {
    const iter2 = dynamic[Symbol.iterator]();
    const nextResult = iter2.next();
    while (iter2 !== undefined) {
      let iter = nextResult;
      let tmp5 = require;
      if (nextResult.type === ProfileDataDynamicType.ProfileDataDynamicType.STRING) {
        let obj2 = { type: tmp5(13248).ResolvedValueType.STRING, value: iter.value };
        let name3 = iter.name;
        obj[name3] = obj2;
      } else if (iter.type === tmp5(13331).ProfileDataDynamicType.NUMBER) {
        let obj3 = { type: tmp5(13248).ResolvedValueType.NUMBER, value: iter.value };
        let name2 = iter.name;
        obj[name2] = obj3;
      } else if (iter.type === tmp5(13331).ProfileDataDynamicType.MEDIA) {
        if (isVisualUnfurledMedia(iter.value)) {
          let obj4 = { type: tmp5(13248).ResolvedValueType.MEDIA, media: size };
          let name = iter.name;
          size = { url: iter.value.proxy_url, width: iter.value.width, height: iter.value.height };
          obj[name] = obj4;
        }
        continue;
      }
      continue;
    }
    return obj;
  }
}
let size = size_mod;
const result = size.fileFinishedImporting("../discord_common/js/packages/application-widget-renderer/src/resolvedValuesFromUserApplicationIdentityProfile.tsx");

export default function resolvedValuesFromUserApplicationIdentityProfile(profile) {
  let obj2;
  if (null == profile) {
    obj2 = {};
  } else {
    const obj3 = {};
    if (null != profile.username) {
      obj3.username = { type: resolvedValues.ResolvedValueType.STRING, value: profile.username };
      const obj = { type: resolvedValues.ResolvedValueType.STRING, value: profile.username };
    }
    obj2 = {};
    const merged = Object.assign(obj3);
    const merged1 = Object.assign(resolvedValuesFromPrimary(profile));
    const merged2 = Object.assign(resolvedValuesFromDynamic(profile));
  }
  return obj2;
};
export const UnfurledMediaLoadingState = { UNKNOWN: 0, [0]: "UNKNOWN", LOADING: 1, [1]: "LOADING", LOADED_SUCCESS: 2, [2]: "LOADED_SUCCESS", LOADED_NOT_FOUND: 3, [3]: "LOADED_NOT_FOUND" };
