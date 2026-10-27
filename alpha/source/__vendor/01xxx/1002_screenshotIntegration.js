// Module ID: 1002
// Function ID: 1003
// Name: screenshotIntegration
// Dependencies: [878]
// Exports: screenshotIntegration

// Module 1002 (screenshotIntegration)
let c3, c4, options;

function processEvent(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  return closure_2(this, undefined, undefined, function*(arg0, value) {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            options = tmp5;
            closure_1 = tmp;
            value = undefined;
            const exception = value.exception;
            let values;
            if (null !== exception) {
              if (undefined !== exception) {
                values = exception.values;
              }
            }
            if (values) {
              if (value.exception.values.length > 0) {
                options = options.getOptions();
                const beforeScreenshot = options.beforeScreenshot;
                let callResult;
                if (null !== beforeScreenshot) {
                  if (undefined !== beforeScreenshot) {
                    callResult = beforeScreenshot.call(options, value, closure_1);
                  }
                }
                if (false !== callResult) {
                  const NATIVE = value(closure_1[0]).NATIVE;
                  c3 = 1;
                  c4 = 1;
                  const obj4 = { value: NATIVE.captureScreenshot(), done: false };
                  return obj4;
                }
              }
            }
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          const tmp7 = value && value.length > 0;
          if (tmp7) {
            value = 0;
            const items = [];
            value = HermesBuiltin.arraySpread(items, value, 0);
            let attachments;
            const tmp10 = closure_130_1;
            if (null != closure_130_1) {
              attachments = closure_130_1.attachments;
            }
            if (!attachments) {
              attachments = [];
            }
            value = HermesBuiltin.arraySpread(items, attachments, value);
            tmp10.attachments = items;
          }
          c4 = 3;
          const obj = { value: closure_130_0, done: true };
          return obj;
        }
      } catch (tmp26) {
        c4 = 3;
        throw tmp26;
      }
    }
  });
}

export const screenshotIntegration = () => ({
  name: "Screenshot",
  setupOnce() {

  },
  processEvent
});
