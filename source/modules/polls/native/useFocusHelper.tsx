// Module ID: 11311
// Function ID: 88031
// Name: FocusHelperState
// Dependencies: [469762069, 4177526800, 2046820356, 3154116629, 889192452, 33554476]
// Exports: default

// Module 11311 (FocusHelperState)
const importDefaultResult = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importAll(dependencyMap[2]);
class FocusHelperState {
  constructor() {
    tmp = closure_3(this, FocusHelperState);
    this.refsByKey = {};
    this.keyOrder = [];
    return;
  }
}
let closure_5 = importDefaultResult(FocusHelperState);
let closure_6 = () => {
  class FocusHelperImpl {
    constructor() {
      FocusHelperImpl = this;
      tmp = closure_3(this, FocusHelperImpl);
      tmp2 = new closure_5();
      this.validState = tmp2;
      this.focusNext = () => {
        let keyOrder;
        let refsByKey;
        ({ refsByKey, keyOrder } = self.validState);
        let tmp2;
        const keys = Object.keys();
        if (keys !== undefined) {
          while (keys[tmp] !== undefined) {
            let tmp15 = tmp4;
            let tmp16 = refsByKey[tmp4];
            let isFocusedResult;
            if (null != tmp16) {
              let current = tmp16.current;
              let tmp5 = current;
              if (null != current) {
                isFocusedResult = current.isFocused();
                let tmp7 = current;
              }
            }
            tmp2 = tmp4;
            if (true === isFocusedResult) {
              break;
            }
          }
        }
        if (null != tmp2) {
          const index = keyOrder.indexOf(tmp2);
          if (-1 !== index) {
            if (index < keyOrder.length - 1) {
              let tmp10 = null == tmp9;
              let obj = tmp9;
              if (!tmp10) {
                const current2 = tmp9.current;
                tmp10 = null == current2;
                obj = current2;
              }
              if (!tmp10) {
                obj.focus();
              }
            }
          }
          const onAddAnswer = self.onAddAnswer;
          if (null != onAddAnswer) {
            onAddAnswer.call(self);
          }
        }
      };
      this.focus = (arg0) => {
        let tmp2 = null == tmp;
        let obj = tmp;
        if (!tmp2) {
          const current = tmp.current;
          tmp2 = null == current;
          obj = current;
        }
        if (!tmp2) {
          obj.focus();
        }
      };
      return;
    }
  }
  const importDefault = FocusHelperImpl;
  let obj = {
    key: "restartState",
    value() {
      this.pendingState = new closure_5();
    }
  };
  const items = [obj, , ];
  obj = {
    key: "commitState",
    value() {
      const self = this;
      const pendingState = this.pendingState;
      if (null != pendingState) {
        self.validState = pendingState;
      }
      self.pendingState = undefined;
    }
  };
  items[1] = obj;
  obj = {
    key: "refWithKey",
    value(arg0) {
      const pendingState = this.pendingState;
      FocusHelperImpl(closure_1[3])(null != pendingState, "Called refWithKey without a valid state");
      const keyOrder = pendingState.keyOrder;
      keyOrder.push(arg0);
      if (null != pendingState.refsByKey[arg0]) {
        return tmp3;
      } else {
        const ref = React.createRef();
        pendingState.refsByKey[arg0] = ref;
        return ref;
      }
    }
  };
  items[2] = obj;
  return importDefaultResult(FocusHelperImpl, items);
}();
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/polls/native/useFocusHelper.tsx");

export default function useFocusHelper() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const importDefault = obj.onAddAnswer;
  let dependencyMap;
  const obj2 = importDefault(dependencyMap[4])(() => new closure_6());
  dependencyMap = obj2;
  obj2.restartState();
  const effect = React.useEffect(() => {
    obj2.onAddAnswer = onAddAnswer;
    obj2.commitState();
  });
  return obj2;
};
