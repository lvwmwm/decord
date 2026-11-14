// Module ID: 14172
// Function ID: 14173
// Name: DataUtils
// Dependencies: [12, 2]
// Exports: _transformMetadataToCamelCase, _transformMetadataToSnakeCase

// Module 14172 (DataUtils)
import _mod12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/DataUtils.tsx");

export function _transformMetadataToCamelCase(body) {
  const f109168 = (acc, item) => {
    const obj = _mod12;
    const camelCaseResult = obj.camelCase(item);
    if (typeof body[item] === "object") {
      const _Array = Array;
      if (!Array.isArray(body[item])) {
        body = tmp3;
        let reduced = tmp3;
        if (null != body[item]) {
          const _Object = Object;
          const keys = Object.keys(tmp3);
          reduced = keys.reduce(f109168, {});
        }
        acc[camelCaseResult] = reduced;
      }
      return acc;
    }
    acc[camelCaseResult] = body[item];
  };
  let reduced = body;
  if (null != body) {
    let _Object = Object;
    let keys = Object.keys(body);
    reduced = keys.reduce(f109168, {});
  }
  return reduced;
}
export function _transformMetadataToSnakeCase(metadata) {
  const f109169 = (acc, item) => {
    const obj = _mod12;
    const snakeCaseResult = obj.snakeCase(item);
    if (typeof metadata[item] === "object") {
      const _Array = Array;
      if (!Array.isArray(metadata[item])) {
        metadata = tmp3;
        let reduced = tmp3;
        if (null != metadata[item]) {
          const _Object = Object;
          const keys = Object.keys(tmp3);
          reduced = keys.reduce(f109169, {});
        }
        acc[snakeCaseResult] = reduced;
      }
      acc[snakeCaseResult] = metadata[item];
      return acc;
    }
    acc[snakeCaseResult] = metadata[item];
  };
  let reduced = metadata;
  if (null != metadata) {
    let _Object = Object;
    let keys = Object.keys(metadata);
    reduced = keys.reduce(f109169, {});
  }
  return reduced;
}
