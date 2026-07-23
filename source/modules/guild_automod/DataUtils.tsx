// Module ID: 11013
// Function ID: 85681
// Name: _transformMetadataToCamelCase
// Dependencies: [22, 2]

// Module 11013 (_transformMetadataToCamelCase)
const result = require("set").fileFinishedImporting("modules/guild_automod/DataUtils.tsx");
function _transformMetadataToCamelCase(body) {
  let closure_0 = body;
  let reduced = body;
  if (null != body) {
    const _Object = Object;
    const keys = Object.keys(body);
    reduced = keys.reduce((arg0, arg1) => {
      const camelCaseResult = body(outer1_1[0]).camelCase(arg1);
      if ("object" === typeof body[arg1]) {
        const _Array = Array;
        if (!Array.isArray(body[arg1])) {
          arg0[camelCaseResult] = outer1_2(body[arg1]);
        }
        return arg0;
      }
      arg0[camelCaseResult] = body[arg1];
    }, {});
  }
  return reduced;
}
function _transformMetadataToSnakeCase(metadata) {
  let closure_0 = metadata;
  let reduced = metadata;
  if (null != metadata) {
    const _Object = Object;
    const keys = Object.keys(metadata);
    reduced = keys.reduce((arg0, arg1) => {
      const snakeCaseResult = metadata(outer1_1[0]).snakeCase(arg1);
      if ("object" === typeof metadata[arg1]) {
        const _Array = Array;
        if (!Array.isArray(metadata[arg1])) {
          arg0[snakeCaseResult] = outer1_3(metadata[arg1]);
        }
        arg0[snakeCaseResult] = metadata[arg1];
        return arg0;
      }
      arg0[snakeCaseResult] = metadata[arg1];
    }, {});
  }
  return reduced;
}

export { _transformMetadataToCamelCase };
export { _transformMetadataToSnakeCase };
