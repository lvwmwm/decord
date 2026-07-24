// Module ID: 1284
// Function ID: 14994
// Dependencies: [1285, 1286, 1287, 1288, 1289, 1292, 1291, 1294, 1295, 1296, 1297, 1299, 1307, 1305, 1308, 1309, 1304, 1306, 1301, 1303, 1310, 1300, 1311, 1298, 1293]

// Module 1284
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return require(1285) /* typeofJsonValue */.typeofJsonValue;
  }
};
Object.defineProperty(arg5, "typeofJsonValue", obj);
obj = {
  enumerable: true,
  get() {
    return require(1285) /* typeofJsonValue */.isJsonObject;
  }
};
Object.defineProperty(arg5, "isJsonObject", obj);
obj = {
  enumerable: true,
  get() {
    return require(1286) /* parts */.base64decode;
  }
};
Object.defineProperty(arg5, "base64decode", obj);
Object.defineProperty(arg5, "base64encode", {
  enumerable: true,
  get() {
    return require(1286) /* parts */.base64encode;
  }
});
Object.defineProperty(arg5, "utf8read", {
  enumerable: true,
  get() {
    return require(1287) /* fromCharCodes */.utf8read;
  }
});
Object.defineProperty(arg5, "WireType", {
  enumerable: true,
  get() {
    return require(1288) /* onRead */.WireType;
  }
});
Object.defineProperty(arg5, "mergeBinaryOptions", {
  enumerable: true,
  get() {
    return require(1288) /* onRead */.mergeBinaryOptions;
  }
});
Object.defineProperty(arg5, "UnknownFieldHandler", {
  enumerable: true,
  get() {
    return require(1288) /* onRead */.UnknownFieldHandler;
  }
});
Object.defineProperty(arg5, "BinaryReader", {
  enumerable: true,
  get() {
    return require(1289) /* binaryReadOptions */.BinaryReader;
  }
});
Object.defineProperty(arg5, "binaryReadOptions", {
  enumerable: true,
  get() {
    return require(1289) /* binaryReadOptions */.binaryReadOptions;
  }
});
Object.defineProperty(arg5, "BinaryWriter", {
  enumerable: true,
  get() {
    return require(1292) /* binaryWriteOptions */.BinaryWriter;
  }
});
Object.defineProperty(arg5, "binaryWriteOptions", {
  enumerable: true,
  get() {
    return require(1292) /* binaryWriteOptions */.binaryWriteOptions;
  }
});
Object.defineProperty(arg5, "PbLong", {
  enumerable: true,
  get() {
    return require(1291) /* _callSuper */.PbLong;
  }
});
Object.defineProperty(arg5, "PbULong", {
  enumerable: true,
  get() {
    return require(1291) /* _callSuper */.PbULong;
  }
});
Object.defineProperty(arg5, "jsonReadOptions", {
  enumerable: true,
  get() {
    return require(1294) /* jsonReadOptions */.jsonReadOptions;
  }
});
Object.defineProperty(arg5, "jsonWriteOptions", {
  enumerable: true,
  get() {
    return require(1294) /* jsonReadOptions */.jsonWriteOptions;
  }
});
Object.defineProperty(arg5, "mergeJsonOptions", {
  enumerable: true,
  get() {
    return require(1294) /* jsonReadOptions */.mergeJsonOptions;
  }
});
Object.defineProperty(arg5, "MESSAGE_TYPE", {
  enumerable: true,
  get() {
    return require(1295).MESSAGE_TYPE;
  }
});
Object.defineProperty(arg5, "MessageType", {
  enumerable: true,
  get() {
    return require(1296) /* MessageType */.MessageType;
  }
});
Object.defineProperty(arg5, "ScalarType", {
  enumerable: true,
  get() {
    return require(1297) /* RepeatType */.ScalarType;
  }
});
Object.defineProperty(arg5, "LongType", {
  enumerable: true,
  get() {
    return require(1297) /* RepeatType */.LongType;
  }
});
Object.defineProperty(arg5, "RepeatType", {
  enumerable: true,
  get() {
    return require(1297) /* RepeatType */.RepeatType;
  }
});
Object.defineProperty(arg5, "normalizeFieldInfo", {
  enumerable: true,
  get() {
    return require(1297) /* RepeatType */.normalizeFieldInfo;
  }
});
Object.defineProperty(arg5, "readFieldOptions", {
  enumerable: true,
  get() {
    return require(1297) /* RepeatType */.readFieldOptions;
  }
});
Object.defineProperty(arg5, "readFieldOption", {
  enumerable: true,
  get() {
    return require(1297) /* RepeatType */.readFieldOption;
  }
});
Object.defineProperty(arg5, "readMessageOption", {
  enumerable: true,
  get() {
    return require(1297) /* RepeatType */.readMessageOption;
  }
});
Object.defineProperty(arg5, "ReflectionTypeCheck", {
  enumerable: true,
  get() {
    return require(1299) /* ReflectionTypeCheck */.ReflectionTypeCheck;
  }
});
Object.defineProperty(arg5, "reflectionCreate", {
  enumerable: true,
  get() {
    return require(1307) /* reflectionCreate */.reflectionCreate;
  }
});
Object.defineProperty(arg5, "reflectionScalarDefault", {
  enumerable: true,
  get() {
    return require(1305) /* reflectionScalarDefault */.reflectionScalarDefault;
  }
});
Object.defineProperty(arg5, "reflectionMergePartial", {
  enumerable: true,
  get() {
    return require(1308) /* reflectionMergePartial */.reflectionMergePartial;
  }
});
Object.defineProperty(arg5, "reflectionEquals", {
  enumerable: true,
  get() {
    return require(1309) /* primitiveEq */.reflectionEquals;
  }
});
Object.defineProperty(arg5, "ReflectionBinaryReader", {
  enumerable: true,
  get() {
    return require(1304) /* ReflectionBinaryReader */.ReflectionBinaryReader;
  }
});
Object.defineProperty(arg5, "ReflectionBinaryWriter", {
  enumerable: true,
  get() {
    return require(1306) /* ReflectionBinaryWriter */.ReflectionBinaryWriter;
  }
});
Object.defineProperty(arg5, "ReflectionJsonReader", {
  enumerable: true,
  get() {
    return require(1301) /* ReflectionJsonReader */.ReflectionJsonReader;
  }
});
Object.defineProperty(arg5, "ReflectionJsonWriter", {
  enumerable: true,
  get() {
    return require(1303) /* ReflectionJsonWriter */.ReflectionJsonWriter;
  }
});
Object.defineProperty(arg5, "containsMessageType", {
  enumerable: true,
  get() {
    return require(1310) /* containsMessageType */.containsMessageType;
  }
});
Object.defineProperty(arg5, "isOneofGroup", {
  enumerable: true,
  get() {
    return require(1300) /* isOneofGroup */.isOneofGroup;
  }
});
Object.defineProperty(arg5, "setOneofValue", {
  enumerable: true,
  get() {
    return require(1300) /* isOneofGroup */.setOneofValue;
  }
});
Object.defineProperty(arg5, "getOneofValue", {
  enumerable: true,
  get() {
    return require(1300) /* isOneofGroup */.getOneofValue;
  }
});
Object.defineProperty(arg5, "clearOneofValue", {
  enumerable: true,
  get() {
    return require(1300) /* isOneofGroup */.clearOneofValue;
  }
});
Object.defineProperty(arg5, "getSelectedOneofValue", {
  enumerable: true,
  get() {
    return require(1300) /* isOneofGroup */.getSelectedOneofValue;
  }
});
Object.defineProperty(arg5, "listEnumValues", {
  enumerable: true,
  get() {
    return require(1311) /* isEnumObject */.listEnumValues;
  }
});
Object.defineProperty(arg5, "listEnumNames", {
  enumerable: true,
  get() {
    return require(1311) /* isEnumObject */.listEnumNames;
  }
});
Object.defineProperty(arg5, "listEnumNumbers", {
  enumerable: true,
  get() {
    return require(1311) /* isEnumObject */.listEnumNumbers;
  }
});
Object.defineProperty(arg5, "isEnumObject", {
  enumerable: true,
  get() {
    return require(1311) /* isEnumObject */.isEnumObject;
  }
});
Object.defineProperty(arg5, "lowerCamelCase", {
  enumerable: true,
  get() {
    return require(1298) /* lowerCamelCase */.lowerCamelCase;
  }
});
Object.defineProperty(arg5, "assert", {
  enumerable: true,
  get() {
    return require(1293) /* assert */.assert;
  }
});
Object.defineProperty(arg5, "assertNever", {
  enumerable: true,
  get() {
    return require(1293) /* assert */.assertNever;
  }
});
Object.defineProperty(arg5, "assertInt32", {
  enumerable: true,
  get() {
    return require(1293) /* assert */.assertInt32;
  }
});
Object.defineProperty(arg5, "assertUInt32", {
  enumerable: true,
  get() {
    return require(1293) /* assert */.assertUInt32;
  }
});
Object.defineProperty(arg5, "assertFloat32", {
  enumerable: true,
  get() {
    return require(1293) /* assert */.assertFloat32;
  }
});
