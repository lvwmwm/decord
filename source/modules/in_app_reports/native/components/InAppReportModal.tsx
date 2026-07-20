// Module ID: 7594
// Function ID: 60880
// Name: getScreens
// Dependencies: []
// Exports: default

// Module 7594 (getScreens)
function getScreens(arg0) {
  let callbacks;
  ({ nodeMap: closure_0, reportType: closure_1, reportSubType: closure_2, successNodeId: closure_3, failNodeId: closure_4, callbacks, reportId: closure_5 } = arg0);
  ({ closeModal: closure_6, addOnCloseCallback: closure_7, onSubmit: closure_8, onNavigate: closure_9 } = callbacks);
  return {
    [closure_6]: {
      headerRight() {
        const obj = { source: callback2(closure_2[6]), onPress: closure_6 };
        const intl = callback(closure_2[7]).intl;
        obj.accessibilityLabel = intl.string(callback(closure_2[7]).t.cpT0Cq);
        return callback3(callback(closure_2[5]).HeaderActionButton, obj);
      },
      headerTitle() {
        return null;
      },
      fullscreen: true,
      render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["nodeMap"] = arg0;
        obj["reportType"] = callback2;
        obj["reportSubType"] = closure_2;
        obj["successNodeId"] = closure_3;
        obj["failNodeId"] = closure_4;
        obj["onSubmit"] = function onSubmit(arg0) {
          const items = [...closure_0.history, arg0];
          return callback(items);
        };
        obj["closeModal"] = closure_6;
        obj["addOnCloseCallback"] = callback3;
        obj["reportId"] = closure_5;
        obj["onNavigate"] = closure_9;
        return callback3(callback2(closure_2[8]), obj);
      }
    }
  };
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const IN_APP_REPORTS_NODE = arg1(dependencyMap[3]).IN_APP_REPORTS_NODE;
const jsx = arg1(dependencyMap[4]).jsx;
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/in_app_reports/native/components/InAppReportModal.tsx");

export default function InAppReportModal(arg0) {
  let initialStack;
  let menu;
  let screens;
  ({ reportType: closure_0, menu } = arg0);
  const importDefault = menu;
  ({ afterSubmit: closure_2, isEligibleForFeedback: closure_3 } = arg0);
  let getScreens;
  let closure_12;
  let closure_14;
  let closure_15;
  function addOnCloseCallback(arg0) {
    _undefined2((arg0) => {
      const items = [...arg0, arg0];
      return items;
    });
  }
  function closeModal() {
    const result = callback(closure_2[11]).trackCloseReportModalAnalytics(callback, closure_12, first);
    const obj = callback(closure_2[11]);
    callback(closure_2[12]).hideReportModal();
    const item = _undefined.forEach((arg0) => arg0());
    if (closure_3) {
      const result1 = callback(closure_2[11]).showInAppReportsFeedbackModal(callback, first);
      const obj3 = callback(closure_2[11]);
    }
  }
  ({ nodes: closure_4, root_node_id: closure_5, success_node_id: closure_6, fail_node_id: closure_7 } = menu);
  const tmp = callback(React.useState(undefined), 2);
  const first = tmp[0];
  getScreens = first;
  let closure_9 = tmp[1];
  [closure_10, closure_11] = callback(React.useState(undefined), 2);
  const tmp3 = callback(React.useState(undefined), 2);
  [closure_12, closure_13] = callback(React.useState([]), 2);
  const tmp4 = callback(React.useState([]), 2);
  [closure_14, closure_15] = callback(React.useState([]), 2);
  importDefault(dependencyMap[9])(() => {
    const orFetchLinkedUsers = callback(closure_2[10]).getOrFetchLinkedUsers();
  });
  const items = [closeModal, first];
  const memo = React.useMemo(() => {
    async function _onSubmit(arg0, arg1) {
      const tmp = yield callback(callback2[11]).submitReport(closure_1, closure_0, arg0);
      let report_id;
      if (null != tmp) {
        const body = tmp.body;
        if (null != body) {
          report_id = body.report_id;
        }
      }
      if (null != report_id) {
        callback3(report_id);
      }
      callback4(closure_4[arg0[arg0.length - 1].nodeRef].report_type);
      if (null != callback2) {
        callback2();
      }
    }
    if (null == closure_4[closure_5]) {
      closeModal();
      return {};
    } else {
      let obj = {};
      obj = { name: closure_6 };
      obj = { node: tmp, history: [] };
      obj.params = obj;
      const items = [obj];
      obj.initialStack = items;
      const obj1 = { nodeMap: closure_4, reportType: _onSubmit, reportSubType: closure_10, successNodeId: closure_6, failNodeId: closure_7 };
      const obj2 = {
        onSubmit(arg0) {
            return _onSubmit(...arguments);
          },
        closeModal,
        addOnCloseCallback,
        onNavigate(key) {
            const _onSubmit = key;
            callback2((arg0) => {
              const items = [...arg0, arg0];
              return items;
            });
          }
      };
      obj1.callbacks = obj2;
      obj1.reportId = first;
      obj.screens = first(obj1);
      return obj;
    }
  }, items);
  ({ initialStack, screens } = memo);
  let tmp8 = null;
  if (null != initialStack) {
    tmp8 = null;
    if (null != screens) {
      const obj = { screens, initialRouteStack: initialStack };
      const intl = arg1(dependencyMap[7]).intl;
      obj.headerBackTitle = intl.string(arg1(dependencyMap[7]).t.13/7kX);
      tmp8 = jsx(arg1(dependencyMap[13]).Navigator, obj);
    }
  }
  return tmp8;
};
