// Module ID: 951
// Function ID: 10307
// Name: contentUnionToMessages
// Dependencies: []

// Module 951 (contentUnionToMessages)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
function contentUnionToMessages(contents, user) {
  let str = "user";
  if (arguments.length > 1) {
    str = "user";
    if (undefined !== arguments[1]) {
      str = arguments[1];
    }
  }
  user = str;
  if ("string" === typeof contents) {
    let obj = { role: str, content: contents };
    const items = [obj];
    let flatMapResult = items;
  } else {
    const _Array = Array;
    if (Array.isArray(contents)) {
      flatMapResult = contents.flatMap((arg0) => callback(arg0, str));
    } else {
      if ("object" === tmp) {
        if (contents) {
          if (!("role" in contents)) {
            if ("parts" in contents) {
              const _Object = Object;
              obj = { role: str };
              const items1 = [Object.assign({}, contents, obj)];
              let items2 = items1;
            } else {
              obj = { role: str, content: contents };
              items2 = [obj];
            }
          }
          const items3 = [contents];
          items2 = items3;
        }
      }
      flatMapResult = [];
    }
  }
  return flatMapResult;
}
arg5.contentUnionToMessages = contentUnionToMessages;
arg5.isStreamingMethod = function isStreamingMethod(arr) {
  return arr.includes("Stream");
};
arg5.shouldInstrument = function shouldInstrument(str) {
  const GOOGLE_GENAI_INSTRUMENTED_METHODS = arg1(arg6[0]).GOOGLE_GENAI_INSTRUMENTED_METHODS;
  if (GOOGLE_GENAI_INSTRUMENTED_METHODS.includes(str)) {
    return true;
  } else {
    const parts = str.split(".");
    const GOOGLE_GENAI_INSTRUMENTED_METHODS2 = arg1(arg6[0]).GOOGLE_GENAI_INSTRUMENTED_METHODS;
    return GOOGLE_GENAI_INSTRUMENTED_METHODS2.includes(parts.pop());
  }
};
