// Module ID: 12029
// Function ID: 92962
// Name: resolveFieldValue
// Dependencies: [12030, 12031, 2]
// Exports: bindResolveFieldValue

// Module 12029 (resolveFieldValue)
function resolveFieldValue(image, items, applicationAssets) {
  const _require = image;
  applicationAssets = applicationAssets.applicationAssets;
  if (null == image) {
    return null;
  } else if (image.value_type === _require(12031).ApplicationWidgetFieldValueType.DATA) {
    let iter = tmp[image.value];
    const presentation_type = image.presentation_type;
    if (null != iter) {
      if (null != table[presentation_type]) {
        if (obj4.includes(iter.type)) {
          if (items.includes(iter.type)) {
            if ("playtime_hours" === image.value) {
              let obj = { type: iter.type };
              const _Math = Math;
              iter = Math.floor(60 * iter.value * 60 * 1000);
              obj.value = iter;
              obj.presentationType = presentation_type;
            }
            obj = {};
            const merged = Object.assign(iter);
            obj["presentationType"] = presentation_type;
          }
        }
      }
    }
    let tmp17 = null;
    if ("fallback" in image) {
      tmp17 = null;
      if (null != image.fallback) {
        tmp17 = resolveFieldValue(image.fallback, items, applicationAssets);
      }
    }
    return tmp17;
  } else if (image.value_type === _require(12031).ApplicationWidgetFieldValueType.CUSTOM_STRING) {
    let tmp11 = null;
    if (image.presentation_type === _require(12030).ApplicationWidgetFieldPresentationType.TEXT) {
      tmp11 = null;
      if (items.includes(obj.STRING)) {
        const obj1 = { type: obj.STRING, value: image.value, presentationType: _require(12030).ApplicationWidgetFieldPresentationType.TEXT };
        tmp11 = obj1;
      }
    }
    return tmp11;
  } else if (image.value_type === _require(12031).ApplicationWidgetFieldValueType.APPLICATION_ASSET) {
    if (items.includes(obj.MEDIA)) {
      const found = applicationAssets.find((key) => key.key === image.value);
      let tmp5 = null;
      if (null != found) {
        obj = {};
        obj.type = obj.MEDIA;
        const obj2 = { url: tmp2(found), width: found.metadata.width, height: found.metadata.height };
        obj.media = obj2;
        obj.presentationType = _require(12030).ApplicationWidgetFieldPresentationType.IMAGE;
        tmp5 = obj;
      }
      return tmp5;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
let obj = { STRING: "string", NUMBER: "number", MEDIA: "media" };
const items = [obj.STRING];
const items1 = [obj.NUMBER];
const items2 = [obj.MEDIA];
const items3 = [obj.NUMBER];
let closure_3 = { [require(12030).ApplicationWidgetFieldPresentationType.TEXT]: items, [require(12030).ApplicationWidgetFieldPresentationType.NUMBER]: items1, [require(12030).ApplicationWidgetFieldPresentationType.IMAGE]: items2, [require(12030).ApplicationWidgetFieldPresentationType.DURATION]: items3 };
const result = require("set").fileFinishedImporting("../discord_common/js/packages/application-widget-renderer/src/resolvedValues.tsx");

export const ResolvedValueType = obj;
export function bindResolveFieldValue(resolutionContext) {
  let closure_0 = resolutionContext;
  return (arg0, arg1) => outer1_4(arg0, arg1, closure_0);
}
