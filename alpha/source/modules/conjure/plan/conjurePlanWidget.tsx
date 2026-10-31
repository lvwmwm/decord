// Module ID: 12730
// Function ID: 12731
// Name: conjurePlanWidget
// Dependencies: [32, 19, 2062, 6844, 12117, 12731, 12732, 12084, 12488, 504, 2]
// Exports: useConjurePlanWidget

// Module 12730 (conjurePlanWidget)
import _mod12117 from "module_12117" /* 12117 */;
import ApplicationAssetType from "ApplicationAssetType" /* 12731 */;
import ApplicationAssetVisibility from "ApplicationAssetVisibility" /* 12732 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2062 */;
import ConjureProjectStore_mod from "ConjureProjectStore" /* 6844 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, map;

function withImageAssets(value_type) {
  let tmp = value_type;
  if ("custom_string" === value_type.value_type) {
    tmp = value_type;
    if ("image" === value_type.presentation_type) {
      const obj = { value_type: "application_asset" };
      const merged = Object.assign(value_type);
      tmp = obj;
    }
  }
  return tmp;
}
function previewSurface(components) {
  let first1;
  let tmp13;
  const obj = {};
  const entries = Object.entries(components.components);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let first = tmp5[0];
    let obj2 = {};
    let _Object = Object;
    let entries1 = Object.entries(tmp5[1].fields);
    for (const item10031 of entries1) {
      let obj5;
      [first1, tmp13] = item10031;
      let obj3 = {};
      let tmp14 = tmp13;
      let tmp16 = withImageAssets;
      let merged = Object.assign(withImageAssets(tmp13));
      if (null != tmp13.fallback) {
        let obj4 = { fallback: tmp16(tmp14.fallback) };
        obj5 = obj4;
      } else {
        obj5 = {};
      }
      let merged1 = Object.assign(obj5);
      obj2[first1] = obj3;
      continue;
    }
    let obj6 = { fields: obj2 };
    obj[first] = obj6;
    continue;
  }
  return { layout: components.layout, components: obj };
}
function sampleValues(surfaces, sample_data, arg2) {
  let first;
  let tmp8;
  function dataBindings(surfaces) {
    map = new Map();
    const values4 = Object.values(surfaces.surfaces);
    const iter = values4[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let components;
      let _Object = Object;
      if (nextResult != null) {
        components = nextResult.components;
      }
      if (components == null) {
        components = {};
      }
      let values5 = values(components);
      for (const item10028 of values5) {
        let _Object2 = Object;
        let values6 = Object.values(item10028.fields);
        for (const item10037 of values6) {
          let iter2 = item10037;
          let hasItem = "data" !== item10037.value_type;
          if (!hasItem) {
            hasItem = map.has(iter2.value);
          }
          if (!hasItem) {
            let result = map.set(iter2.value, iter2.presentation_type);
          }
          continue;
        }
        continue;
      }
      continue;
    }
    return map;
  }
  const obj2 = {};
  sample_data = sample_data.sample_data;
  let _Object = Object;
  const obj = dataBindings(surfaces);
  if (sample_data == null) {
    sample_data = {};
  }
  const entries1 = entries(sample_data);
  const tmp2 = entries1[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp4 = _slicedToArray;
    [first, tmp8] = tmp3;
    let tmp7 = first;
    if ("image" === obj.get(first)) {
      let _String = String;
      let tmp13 = arg2[String(undefined, tmp8)];
      if (null != tmp13) {
        let obj3 = { type: _mod12117.ResolvedValueType.MEDIA, media: size };
        size = { url: tmp14, width: v256, height: v256 };
        obj2[tmp7] = obj3;
      }
    } else {
      let obj5;
      if (typeof tmp8 === "number") {
        let obj4 = { type: _mod12117.ResolvedValueType.NUMBER, value: tmp8 };
        let tmp10 = dependencyMap;
        let tmp11 = tmp8;
        obj5 = obj4;
      } else {
        obj5 = { type: _mod12117.ResolvedValueType.STRING, value: tmp8 };
      }
      obj2[tmp7] = obj5;
    }
    continue;
  }
  return obj2;
}
function previewAsset(key) {
  const obj = { key, asset_id: key, asset_type: ApplicationAssetType.ApplicationAssetType.IMAGE, visibility: ApplicationAssetVisibility.ApplicationAssetVisibility.PUBLIC, metadata: size, updated_at: "" };
  size = { width: v256, height: v256, content_type: "image/png", is_animated: false };
  return obj;
}
let ConjureProjectStore = ConjureProjectStore_mod;
let closure_6 = [];
let closure_7 = {};
let closure_8 = {};
let c9 = 256;
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanWidget.tsx");

export function useConjurePlanWidget(projectId, proposal) {
  let c2;
  let closure_5;
  let stateFromStores1;
  let tmp4;
  _require = projectId;
  const widget_config = proposal.widget_config;
  let widget_preview = proposal.widget_preview;
  if (undefined === widget_preview) {
    widget_preview = closure_8;
  }
  let obj = require("get initialized");
  let items = [stateFromStores1];
  const stateFromStores = obj.useStateFromStores(items, () => stateFromStores1.locale);
  let obj2 = require("get initialized");
  const items1 = [ConjureProjectStore];
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const project = ConjureProjectStore.getProject(projectId);
    let prop;
    if (project != null) {
      prop = project.preview_application_id;
    }
    if (prop == null) {
      let application_id;
      if (project != null) {
        application_id = project.application_id;
      }
      prop = application_id;
    }
    if (prop == null) {
      prop = null;
    }
    return prop;
  });
  const images = widget_preview.images;
  _require = projectId;
  c2 = undefined;
  let tmp3 = widget_preview(stateFromStores.useState(closure_7), 2);
  [tmp4, c2] = tmp3;
  const items2 = [projectId, images];
  const effect = stateFromStores.useEffect(() => {
    let _true;
    let obj = images;
    let _Object = Object;
    if (images == null) {
      obj = {};
    }
    const entries1 = entries(obj);
    if (0 !== entries1.length) {
      let c0 = false;
      const allPromises = Promise.all(entries1.map((item) => {
        let tmp;
        [, tmp] = item;
        const obj = _true(images[8]);
        const attachmentUrl = obj.getAttachmentUrl(c0, tmp.id);
        return attachmentUrl.then((result) => {
          const items = [closure_1_0, result];
          return items;
        }, () => null);
      }));
      allPromises.then((arr) => {
        const tmp = c0;
        if (!tmp) {
          const _Object = Object;
          c2(Object.fromEntries(arr.filter((item) => null != item)));
        }
      }, () => {

      });
      return () => {
        let c0 = true;
      };
    }
  }, items2);
  ConjureProjectStore = tmp4;
  const items3 = [widget_config, widget_preview, tmp4, stateFromStores];
  const memo = stateFromStores.useMemo(() => {
    let localizedStrings;
    function buildConjurePlanWidgetRendererProps(widget_config, widget_preview, arg2, stateFromStores) {
      let keys;
      let obj3;
      let tmp6;
      let tmp7;
      let closure_0 = arg2;
      const obj = {};
      const entries = Object.entries(widget_config.surfaces);
      const tmp2 = entries[Symbol.iterator]();
      while (tmp2 !== undefined) {
        let tmp5 = widget_preview(tmp3, 2);
        [tmp6, tmp7] = tmp5;
        if (null != tmp7) {
          obj[tmp6] = closure_1_11(tmp8);
        }
        continue;
      }
      const applicationWidgetSurfaceConfigsSchema = projectId(widget_config[4]).applicationWidgetSurfaceConfigsSchema;
      const safeParseResult = applicationWidgetSurfaceConfigsSchema.safeParse(obj);
      if (safeParseResult.success) {
        const data = safeParseResult.data;
        let tmp15 = null;
        if (null != data[projectId(undefined, widget_config[7]).ApplicationWidgetConfigSurface.WIDGET_TOP]) {
          tmp15 = null;
          if (null != data[projectId(undefined, widget_config[7]).ApplicationWidgetConfigSurface.WIDGET_BOTTOM]) {
            const obj2 = { locale: stateFromStores, surfaceConfigs: data, isLoading: false, hasIdentity: true, resolutionContext: obj3 };
            const _Object = Object;
            obj3 = {
              data: closure_1_12(widget_config, widget_preview, arg2),
              applicationAssets: keys.map(closure_1_13),
              getApplicationAssetUrl(arg0) {
                      let str = closure_0[arg0.key];
                      if (str == null) {
                        str = "";
                      }
                      return str;
                    },
              localizedStrings
            };
            keys = Object.keys(arg2);
            tmp15 = obj2;
          }
        }
        return tmp15;
      } else {
        return null;
      }
    }
    let tmp2 = null;
    if (null != widget_config) {
      const tmp3 = widget_preview;
      let tmp4 = ConjureProjectStore;
      let tmp5 = stateFromStores;
      const tmp6 = tmp;
      tmp2 = buildConjurePlanWidgetRendererProps(tmp, widget_preview, ConjureProjectStore, stateFromStores);
    }
    return tmp2;
  }, items3);
  const items4 = [stateFromStores1, memo];
  return stateFromStores.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores1) {
      tmp2 = null;
      if (null != memo) {
        tmp2 = { applicationId: tmp, rendererProps: tmp3 };
        const obj = { applicationId: tmp, rendererProps: tmp3 };
      }
    }
    return tmp2;
  }, items4);
}
