// Module ID: 13530
// Function ID: 13531
// Name: DataUtils
// Dependencies: [12, 2]
// Exports: _transformMetadataToCamelCase, _transformMetadataToSnakeCase

// Module 13530 (DataUtils)
import _mod12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/DataUtils.tsx");

export function _transformMetadataToCamelCase(body) {
  const f105379 = (acc, item) => {
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
          reduced = keys.reduce(f105379, {});
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
    reduced = keys.reduce(f105379, {});
  }
  return reduced;
}
export function _transformMetadataToSnakeCase(metadata) {
  const f105380 = (acc, item) => {
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
          reduced = keys.reduce(f105380, {});
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
    reduced = keys.reduce(f105380, {});
  }
  return reduced;
}
