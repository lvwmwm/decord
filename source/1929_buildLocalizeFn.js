// Module ID: 1929
// Function ID: 21786
// Name: buildLocalizeFn
// Dependencies: []
// Exports: default

// Module 1929 (buildLocalizeFn)

export default function buildLocalizeFn(arg0) {
  return (self, context) => {
    let str = "standalone";
    if (null != context) {
      str = "standalone";
      if (context.context) {
        const _String = String;
        str = String(context.context);
      }
    }
    if ("formatting" === str) {
      if (self.formattingValues) {
        let defaultWidth2 = self.defaultFormattingWidth;
        if (!defaultWidth2) {
          defaultWidth2 = self.defaultWidth;
        }
        let StringResult = defaultWidth2;
        if (null != context) {
          StringResult = defaultWidth2;
          if (context.width) {
            const _String3 = String;
            StringResult = String(context.width);
          }
        }
        let tmp13 = self.formattingValues[StringResult];
        if (!tmp13) {
          tmp13 = self.formattingValues[defaultWidth2];
        }
        let tmp6 = tmp13;
      }
      let argumentCallbackResult = self;
      if (self.argumentCallback) {
        argumentCallbackResult = self.argumentCallback(self);
      }
      return tmp6[argumentCallbackResult];
    }
    if (null != context) {
      if (context.width) {
        const _String2 = String;
        let defaultWidth = String(context.width);
      }
      tmp6 = self.values[defaultWidth];
      if (!tmp6) {
        tmp6 = self.values[tmp3];
      }
    }
    defaultWidth = self.defaultWidth;
  };
};
export default exports.default;
