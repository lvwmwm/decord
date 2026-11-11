// Module ID: 10159
// Function ID: 10160
// Name: ICYMIAnalyticsItemId
// Dependencies: [10142, 10157, 2]
// Exports: getDehydratedAnalyticsItemId, getListAnalyticsItemId

// Module 10159 (ICYMIAnalyticsItemId)
import ICYMITypes from "ICYMITypes" /* 10142 */;
import size from "module_2" /* 2 */;

let tmp;
const parseWaterwheelsCard = tmp(10157);
const result = size.fileFinishedImporting("modules/icymi/ICYMIAnalyticsItemId.tsx");

export function getDehydratedAnalyticsItemId(type) {
  let id;
  if (type.type !== ICYMITypes.ICYMIItemTypes.DISCOVER_ITEM) {
    return type.id;
  } else {
    const data = type.data;
    let item;
    if (data != null) {
      item = data.item;
    }
    if (null != item) {
      if (typeof item === "object") {
        if ("id" in item) {
          if ("type" in item) {
            ({ id, type } = item);
            let tmp4 = null;
            if (typeof id === "string") {
              tmp4 = null;
              if (typeof type === "string") {
                tmp4 = null;
                const tmpResult = parseWaterwheelsCard;
                if (tmpResult.isTypedWaterwheelsId(id, type)) {
                  tmp4 = id;
                }
              }
            }
            return tmp4;
          }
        }
      }
    }
    return null;
  }
}
export function getListAnalyticsItemId(data) {
  let id;
  if ("waterwheelsItem" === data.data.kind) {
    id = data.data.card.id;
  } else {
    id = data.id;
  }
  return id;
}
