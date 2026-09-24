// Module ID: 7299
// Function ID: 7300
// Dependencies: [19, 17, 21, 5150]

// Module 7299
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
try {
  let closure_0 = fn(5150);
  exports.MaybeScreenContainer = (enabled) => {
    const merged = Object.assign(enabled, Object.assign({ enabled: 0 }));
    if (null != closure_0) {
      const obj2 = { enabled: enabled.enabled };
      const merged1 = Object.assign(merged);
      let tmp8 = <tmp2.ScreenContainer enabled={arg0.enabled} />;
    } else {
      const obj = {};
      const merged2 = Object.assign(merged);
      tmp8 = <View />;
    }
    return tmp8;
  };
  exports.MaybeScreen = (arg0) => {
    ({ enabled, active } = arg0);
    const merged = Object.assign(arg0, Object.assign({ enabled: 0, active: 0 }));
    if (null != closure_0) {
      const obj2 = { enabled, activityState: active };
      const merged1 = Object.assign(merged);
      let tmp8 = <tmp2.Screen enabled={enabled} activityState={active} />;
    } else {
      const obj = {};
      const merged2 = Object.assign(merged);
      tmp8 = <View />;
    }
    return tmp8;
  };
} catch (err) {
}
