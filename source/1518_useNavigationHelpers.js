// Module ID: 1518
// Function ID: 17426
// Name: useNavigationHelpers
// Dependencies: [31, 1460, 1481, 1484, 1461]
// Exports: default

// Module 1518 (useNavigationHelpers)
import result from "result";
import { PrivateValueStore } from "PrivateValueStore";

const require = arg1;

export default function useNavigationHelpers(id) {
  id = id.id;
  const onAction = id.onAction;
  const getState = id.getState;
  const emitter = id.emitter;
  const router = id.router;
  const context = emitter.useContext(onAction(getState[2]));
  const context1 = emitter.useContext(onAction(getState[3]));
  const items = [id, emitter.emit, getState, onAction, context, context1, router];
  return emitter.useMemo(() => {
    function dispatch(arg0) {
      let tmp = arg0;
      if ("function" === typeof arg0) {
        tmp = arg0(merged1());
      }
      let tmp3 = merged(tmp);
      if (!tmp3) {
        tmp3 = null == outer1_5;
      }
      if (!tmp3) {
        outer1_5(tmp);
      }
    }
    const merged = Object.assign({}, router.actionCreators, id(getState[4]).CommonActions);
    const keys = Object.keys(merged);
    const reduced = keys.reduce((arg0, arg1) => {
      let closure_0 = arg1;
      arg0[arg1] = () => {
        callback(outer1_1[callback](...arguments));
      };
      return arg0;
    }, {});
    const obj = { dispatch, emit: emitter.emit };
    if (context1) {
      let fn = context1.isFocused;
    } else {
      fn = () => true;
    }
    obj.isFocused = fn;
    obj.canGoBack = function canGoBack() {
      const tmp = merged1();
      const CommonActions = id(getState[4]).CommonActions;
      let flag = null !== outer1_4.getStateForAction(tmp, CommonActions.goBack(), { routeNames: tmp.routeNames, routeParamList: {}, routeGetIdList: {} });
      if (!flag) {
        let canGoBackResult;
        if (null != outer1_6) {
          canGoBackResult = outer1_6.canGoBack();
        }
        flag = canGoBackResult;
      }
      if (!flag) {
        flag = false;
      }
      return flag;
    };
    obj.getId = function getId() {
      return dispatch;
    };
    obj.getParent = function getParent(arg0) {
      if (undefined !== arg0) {
        let tmp2 = merged1;
        if (merged1) {
          let obj2 = obj;
          tmp2 = obj;
          if (arg0 !== obj.getId()) {
            const parent = obj2.getParent();
            tmp2 = parent;
            while (parent) {
              obj2 = parent;
              tmp2 = parent;
              if (arg0 === parent.getId()) {
                break;
              }
            }
          }
        }
        return tmp2;
      } else {
        return outer1_6;
      }
    };
    obj.getState = merged1;
    merged1 = Object.assign({}, context1, reduced, obj);
    return merged1;
  }, items);
};
