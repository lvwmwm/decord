// Module ID: 1929
// Function ID: 21792
// Name: buildLocalizeFn
// Dependencies: []
// Exports: default

// Module 1929 (buildLocalizeFn)

export default function buildLocalizeFn(arg0) {
  let closure_0 = arg0;
  return (arg0, context) => {
    let str = "standalone";
    if (null != context) {
      str = "standalone";
      if (context.context) {
        const _String = String;
        str = String(context.context);
      }
    }
    if ("formatting" === str) {
      if (closure_0.formattingValues) {
        let defaultWidth2 = closure_0.defaultFormattingWidth;
        if (!defaultWidth2) {
          defaultWidth2 = closure_0.defaultWidth;
        }
        let StringResult = defaultWidth2;
        if (null != context) {
          StringResult = defaultWidth2;
          if (context.width) {
            const _String3 = String;
            StringResult = String(context.width);
          }
        }
        let tmp13 = closure_0.formattingValues[StringResult];
        if (!tmp13) {
          tmp13 = closure_0.formattingValues[defaultWidth2];
        }
        let tmp6 = tmp13;
      }
      let argumentCallbackResult = arg0;
      if (closure_0.argumentCallback) {
        argumentCallbackResult = closure_0.argumentCallback(arg0);
      }
      return tmp6[argumentCallbackResult];
    }
    if (null != context) {
      if (context.width) {
        const _String2 = String;
        let defaultWidth = String(context.width);
      }
      tmp6 = closure_0.values[defaultWidth];
      if (!tmp6) {
        tmp6 = closure_0.values[tmp3];
      }
    }
    defaultWidth = closure_0.defaultWidth;
  };
};
export default exports.default;
