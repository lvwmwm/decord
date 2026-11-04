// Module ID: 19031
// Function ID: 19032
// Name: editorUtils
// Dependencies: [32, 19032, 19033, 1297, 6406, 2]
// Exports: createDefaultDraftWidgets, filterCatalogWidgetsAtMaxInstances, getWidgetSaveError, isDraftWidgetId, toWidgetConfigUpdateRequest

// Module 19031 (editorUtils)
import HTTPUtils from "HTTPUtils" /* 1297 */;
import guildSpaceWidgetLayout from "guildSpaceWidgetLayout" /* 19032 */;
import GuildSpaceTypes from "GuildSpaceTypes" /* 19033 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let map, set;

let tmp;
const V6OrEarlierAPIError = tmp(6406);
function createDraftWidget(type, name, locked) {
  const obj = { id: "" + c3 + +closure_4, position: { column: guildSpaceWidgetLayout.LEFT_COLUMN, order: 0 }, requires_hydration: false, default_title: name, locked };
  closure_4 = tmp + 1;
  ({ column: guildSpaceWidgetLayout.LEFT_COLUMN, order: 0 });
  if (GuildSpaceTypes.GuildSpaceWidgetType.IMAGE_TEXT === type) {
    const obj3 = { type, config: obj4 };
    const merged = Object.assign(obj);
    return obj3;
  } else {
    const obj5 = { type, config: obj6 };
    const merged1 = Object.assign(obj);
    return obj5;
  }
}
let c3 = "draft:";
let closure_4 = 0;
let items = [GuildSpaceTypes.GuildSpaceWidgetType.POPULAR_MUSIC, GuildSpaceTypes.GuildSpaceWidgetType.LEADERBOARD];
let result = size.fileFinishedImporting("modules/guild_space/editorUtils.tsx");

export { createDraftWidget };
export const createDefaultDraftWidgets = function createDefaultDraftWidgets(arg0) {
  let closure_0 = arg0;
  return items.flatMap((item, order) => {
    let obj2;
    closure_0 = item;
    const found = closure_0.find((type) => type.type === closure_0);
    if (null == found) {
      items = [];
    } else {
      const obj = { position: obj2 };
      const merged = Object.assign(createDraftWidget(item, found.name, found.locked));
      items = [obj];
      obj2 = { column: guildSpaceWidgetLayout.LEFT_COLUMN, order };
    }
    return items;
  });
};
export const isDraftWidgetId = function isDraftWidgetId(widget_id) {
  return widget_id.startsWith(c3);
};
export const filterCatalogWidgetsAtMaxInstances = function filterCatalogWidgetsAtMaxInstances(arr, arg1) {
  map = new Map();
  const iter = arg1[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    set = map.set;
    let type = nextResult.type;
    let num = map.get(nextResult.type);
    if (num == null) {
      num = 0;
    }
    let result = set(type, num + 1);
    continue;
  }
  return arr.filter((type) => {
    let num = map.get(type.type);
    if (num == null) {
      num = 0;
    }
    return num < type.max_instances;
  });
};
export const toWidgetConfigUpdateRequest = function toWidgetConfigUpdateRequest(type) {
  if (type.type === GuildSpaceTypes.GuildSpaceWidgetType.IMAGE_TEXT) {
    const obj = { type: null, text: null, title: null };
    ({ type: obj.type, text: obj.text, title: obj.title } = type);
    if (undefined !== type.image) {
      obj.image = type.image;
    }
    return obj;
  } else {
    return type;
  }
};
export const getWidgetSaveError = function getWidgetSaveError(arg0, arg1) {
  let str3;
  let tmp14;
  if (arg0 instanceof HTTPUtils.HTTPResponseError) {
    const obj = { status: null, body: null };
    ({ status: obj.status, body: obj.body } = arg0);
    const self = this;
    const self2 = this;
    const aPIError = new V6OrEarlierAPIError.APIError(obj);
    const _Object = Object;
    const entries = Object.entries(aPIError.getAllFieldErrors());
    const obj3 = entries[Symbol.iterator]();
    while (obj3 !== undefined) {
      let tmp13 = _slicedToArray(tmp10, 2);
      [str3, tmp14] = tmp13;
      let tmp15 = _slicedToArray(str3.split("."), 2);
      let tmp16 = tmp15[1];
      if ("widgets" === tmp15[0]) {
        let message;
        let _Number = Number;
        let NumberResult = Number(tmp16);
        let _Number2 = Number;
        let tmp19 = NumberResult;
        let tmp20;
        if (Number.isInteger(NumberResult)) {
          tmp20 = arg1[tmp19];
        }
        let first = tmp14[0];
        let tmp22 = tmp20;
        if (first != null) {
          message = first.message;
        }
        if (null != tmp22) {
          if (null != tmp25) {
            let obj2 = { type: tmp20.type, message };
            obj3.return();
            return obj2;
          }
        }
      }
      continue;
    }
  }
};
