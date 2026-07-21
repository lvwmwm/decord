// Module ID: 1518
// Function ID: 17425
// Name: useNavigationHelpers
// Dependencies: []
// Exports: default

// Module 1518 (useNavigationHelpers)
let closure_3 = importAll(dependencyMap[0]);
const PrivateValueStore = arg1(dependencyMap[1]).PrivateValueStore;

export default function useNavigationHelpers(id) {
  id = id.id;
  const arg1 = id;
  const onAction = id.onAction;
  const importDefault = onAction;
  const getState = id.getState;
  const dependencyMap = getState;
  const emitter = id.emitter;
  const React = emitter;
  const router = id.router;
  const context = React.useContext(importDefault(dependencyMap[2]));
  const context1 = React.useContext(importDefault(dependencyMap[3]));
  const items = [id, emitter.emit, getState, onAction, context, context1, router];
  return React.useMemo(() => {
    function dispatch(arg0) {
      let tmp = arg0;
      if ("function" === typeof arg0) {
        tmp = arg0(merged1());
      }
      let tmp3 = merged(tmp);
      if (!tmp3) {
        tmp3 = null == callback;
      }
      if (!tmp3) {
        callback(tmp);
      }
    }
    const id = dispatch;
    const merged = Object.assign({}, router.actionCreators, id(getState[4]).CommonActions);
    const onAction = merged;
    const keys = Object.keys(merged);
    const reduced = keys.reduce((arg0, arg1) => {
      const dispatch = arg1;
      arg0[arg1] = () => {
        arg1(closure_1[closure_0](...arguments));
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
      const CommonActions = dispatch(merged1[4]).CommonActions;
      let flag = null !== stateForAction.getStateForAction(tmp, CommonActions.goBack(), { routeNames: tmp.routeNames, routeParamList: {}, routeGetIdList: {} });
      if (!flag) {
        let canGoBackResult;
        if (null != closure_6) {
          canGoBackResult = closure_6.canGoBack();
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
        return closure_6;
      }
    };
    obj.getState = getState;
    const merged1 = Object.assign({}, context1, reduced, obj);
    const getState = merged1;
    return merged1;
  }, items);
};
