// Module ID: 11002
// Function ID: 85618
// Name: _transformMetadataToCamelCase
// Dependencies: []

// Module 11002 (_transformMetadataToCamelCase)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_automod/DataUtils.tsx");
function _transformMetadataToCamelCase(body) {
  const require = body;
  let reduced = body;
  if (null != body) {
    const _Object = Object;
    const keys = Object.keys(body);
    reduced = keys.reduce((arg0, arg1) => {
      const camelCaseResult = arg0(closure_1[0]).camelCase(arg1);
      if ("object" === typeof arg0[arg1]) {
        const _Array = Array;
        if (!Array.isArray(arg0[arg1])) {
          arg0[camelCaseResult] = callback(arg0[arg1]);
        }
        return arg0;
      }
      arg0[camelCaseResult] = arg0[arg1];
    }, {});
  }
  return reduced;
}
function _transformMetadataToSnakeCase(metadata) {
  const require = metadata;
  let reduced = metadata;
  if (null != metadata) {
    const _Object = Object;
    const keys = Object.keys(metadata);
    reduced = keys.reduce((arg0, arg1) => {
      const snakeCaseResult = arg0(closure_1[0]).snakeCase(arg1);
      if ("object" === typeof arg0[arg1]) {
        const _Array = Array;
        if (!Array.isArray(arg0[arg1])) {
          arg0[snakeCaseResult] = callback(arg0[arg1]);
        }
        arg0[snakeCaseResult] = arg0[arg1];
        return arg0;
      }
      arg0[snakeCaseResult] = arg0[arg1];
    }, {});
  }
  return reduced;
}

export { _transformMetadataToCamelCase };
export { _transformMetadataToSnakeCase };
