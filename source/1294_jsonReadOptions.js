// Module ID: 1294
// Function ID: 15148
// Name: jsonReadOptions
// Dependencies: [65]
// Exports: jsonReadOptions, jsonWriteOptions, mergeJsonOptions

// Module 1294 (jsonReadOptions)
import _toConsumableArray from "_toConsumableArray";

let closure_1 = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
let closure_2 = { ignoreUnknownFields: false };

export const jsonReadOptions = function jsonReadOptions(arg0) {
  if (arg0) {
    const _Object = Object;
    const _Object2 = Object;
    let merged = Object.assign(Object.assign({}, closure_2), arg0);
  } else {
    merged = closure_2;
  }
  return merged;
};
export const jsonWriteOptions = function jsonWriteOptions(prettySpaces) {
  if (prettySpaces) {
    const _Object = Object;
    const _Object2 = Object;
    let merged = Object.assign(Object.assign({}, closure_1), prettySpaces);
  } else {
    merged = closure_1;
  }
  return merged;
};
export const mergeJsonOptions = function mergeJsonOptions(typeRegistry, typeRegistry2) {
  const merged = Object.assign(Object.assign({}, typeRegistry), typeRegistry2);
  const items = [];
  typeRegistry = undefined;
  if (null != typeRegistry) {
    typeRegistry = typeRegistry.typeRegistry;
  }
  if (null === typeRegistry) {
    typeRegistry = [];
  }
  let typeRegistry1;
  if (null != typeRegistry2) {
    typeRegistry1 = typeRegistry2.typeRegistry;
  }
  if (null === typeRegistry1) {
    typeRegistry1 = [];
  }
  merged.typeRegistry = items.concat(_toConsumableArray(typeRegistry), _toConsumableArray(typeRegistry1));
  return merged;
};
