// Module ID: 8240
// Function ID: 65068
// Name: isValidAnchor
// Dependencies: []
// Exports: compareLayerFiles, isPreviewFilename, parseLayerFilename

// Module 8240 (isValidAnchor)
function isValidAnchor(first1) {
  return set1.has(first1);
}
let closure_2 = importDefault(dependencyMap[0]);
let obj = { foreground: arg1(dependencyMap[1]).ProfileFrameLayerOrder.FRONT, background: arg1(dependencyMap[1]).ProfileFrameLayerOrder.BACK };
const items = [arg1(dependencyMap[2]).ProfileFrameLayerType.STAPLE, arg1(dependencyMap[2]).ProfileFrameLayerType.RAIL, arg1(dependencyMap[2]).ProfileFrameLayerType.BORDER];
const set = new Set(items);
const items1 = [arg1(dependencyMap[3]).ProfileFrameLayerAnchor.TOP, arg1(dependencyMap[3]).ProfileFrameLayerAnchor.BOTTOM, arg1(dependencyMap[3]).ProfileFrameLayerAnchor.CENTER];
const set1 = new Set(items1);
obj = { WRONG_PART_COUNT: "wrong_part_count", INVALID_INDEX: "invalid_index", INVALID_TYPE: "invalid_type", INVALID_ANCHOR: "invalid_anchor", INVALID_RESPONSIVE: "invalid_responsive", BORDER_HAS_ANCHOR: "border_has_anchor" };
obj = { [obj.WRONG_PART_COUNT]: "wrong filename format", [obj.INVALID_INDEX]: "invalid index" };
const items2 = [...set];
obj[obj.INVALID_TYPE] = "invalid type (expected: " + items2.join(", ") + ")";
const items3 = [...set1];
obj[obj.INVALID_ANCHOR] = "invalid anchor (expected: " + items3.join(", ") + ")";
obj[obj.INVALID_RESPONSIVE] = "invalid suffix (expected '" + "responsive" + "')";
obj[obj.BORDER_HAS_ANCHOR] = "border layers must omit the anchor";
let closure_6 = { [arg1(dependencyMap[1]).ProfileFrameLayerOrder.FRONT]: 0, [arg1(dependencyMap[1]).ProfileFrameLayerOrder.BACK]: 1 };
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/collectibles/profile_frames/tooling/ProfileFrameLayerParser.tsx");

export const PREVIEW_FILENAME = "preview";
export const RESPONSIVE_KEYWORD = "responsive";
export const FOLDER_ORDER_MAP = obj;
export const ParseErrorKind = obj;
export const PARSE_ERROR_LABELS = obj;
export const parseLayerFilename = function parseLayerFilename(filename) {
  const parts = filename.replace(/\.\w+$/, "").split("_");
  if (parts.length >= 2) {
    if (parts.length <= 4) {
      const arr2 = callback(parts);
      const first = arr2[0];
      const substr = arr2.slice(2);
      if (obj14.test(first)) {
        if (set.has(tmp28)) {
          if (tmp28 === arg1(dependencyMap[2]).ProfileFrameLayerType.BORDER) {
            if (substr.length > 0) {
              if (isValidAnchor(substr[0])) {
                let obj = { parsed: null };
                obj.errorType = obj.BORDER_HAS_ANCHOR;
                return obj;
              }
            }
            if (substr.length > 1) {
              obj = { parsed: null };
              obj.errorType = obj.WRONG_PART_COUNT;
              return obj;
            } else {
              if (1 === substr.length) {
                if (substr[0] !== "responsive") {
                  const obj1 = { parsed: null, errorType: obj.INVALID_RESPONSIVE };
                  return obj1;
                }
              }
              const obj2 = {};
              const obj3 = {};
              const _Number2 = Number;
              obj3.index = Number(first);
              obj3.type = tmp28;
              obj3.anchor = arg1(dependencyMap[3]).ProfileFrameLayerAnchor.CENTER;
              obj3.responsive = 1 === substr.length;
              obj2.parsed = obj3;
              obj2.errorType = null;
              return obj2;
            }
          } else {
            const first1 = substr[0];
            if (null != first1) {
              if (isValidAnchor(first1)) {
                if (substr.length > 2) {
                  const obj4 = { parsed: null, errorType: obj.WRONG_PART_COUNT };
                  return obj4;
                } else {
                  if (2 === substr.length) {
                    if (substr[1] !== "responsive") {
                      const obj5 = { parsed: null, errorType: obj.INVALID_RESPONSIVE };
                      return obj5;
                    }
                  }
                  let tmp8 = 2 === substr.length;
                  if (!tmp8) {
                    tmp8 = tmp28 === arg1(dependencyMap[2]).ProfileFrameLayerType.RAIL;
                  }
                  const obj6 = {};
                  const obj7 = {};
                  const _Number = Number;
                  obj7.index = Number(first);
                  obj7.type = tmp28;
                  obj7.anchor = first1;
                  obj7.responsive = tmp8;
                  obj6.parsed = obj7;
                  obj6.errorType = null;
                  return obj6;
                }
              }
            }
            const obj8 = { parsed: null, errorType: obj.INVALID_ANCHOR };
            return obj8;
          }
        } else {
          const obj9 = { parsed: null, errorType: obj.INVALID_TYPE };
          return obj9;
        }
      } else {
        obj = { parsed: null };
        obj.errorType = obj.INVALID_INDEX;
        return obj;
      }
      const obj14 = /^\d+$/;
    }
  }
  return { parsed: null, errorType: obj.WRONG_PART_COUNT };
};
export const compareLayerFiles = function compareLayerFiles(index, index2) {
  let diff = closure_6[index.order] - closure_6[index2.order];
  if (0 === diff) {
    diff = index.index - index2.index;
  }
  return diff;
};
export const isPreviewFilename = function isPreviewFilename(str) {
  return str.replace(/\.\w+$/, "") === "preview";
};
