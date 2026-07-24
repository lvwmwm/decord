// Module ID: 1505
// Function ID: 17331
// Name: result
// Dependencies: [31, 1506]

// Module 1505 (result)
const self = this;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let __setModuleDefault = self;
  if (self) {
    __setModuleDefault = self.__setModuleDefault;
  }
  if (__setModuleDefault) {
    let fn = self;
    if (self) {
      fn = self.__importStar;
    }
    if (!fn) {
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          for (const key10009 in arg0) {
            let tmp7 = key10009;
            let callResult = "default" !== key10009;
            if (callResult) {
              let _Object = Object;
              callResult = hasOwnProperty.call(arg0, key10009);
            }
            if (!callResult) {
              continue;
            } else {
              let tmp4 = self2;
              let tmp5 = self2(obj, arg0, key10009);
              continue;
            }
            continue;
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    let fn2 = self;
    if (self) {
      fn2 = self.__importDefault;
    }
    if (!fn2) {
      fn2 = (__esModule) => {
        if (!__esModule) {
          const obj = { default: __esModule };
          let tmp = obj;
        } else {
          tmp = __esModule;
        }
        return tmp;
      };
    }
    const _Object3 = Object;
    let obj = { value: true };
    let closure_2 = fn(require("result"));
    let closure_3 = fn2(require("result"));
    exports.default = function useLatestCallback(arg0) {
      let closure_0 = arg0;
      let closure_1 = React.useRef(arg0);
      closure_3.default(() => {
        closure_1.current = closure_0;
      });
      return React.useRef(function latestCallback() {
        let length;
        const items = [];
        let num = 0;
        if (0 < arguments.length) {
          do {
            items[num] = arguments[num];
            num = num + 1;
            length = arguments.length;
          } while (num < length);
        }
        const current = ref.current;
        return current.apply(this, items);
      }).current;
    };
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
