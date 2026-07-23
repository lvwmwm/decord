// Module ID: 7605
// Function ID: 60951
// Name: getScreens
// Dependencies: [5, 57, 31, 7606, 33, 5788, 7607, 1212, 7608, 4559, 6828, 7604, 7602, 5519, 2]
// Exports: default

// Module 7605 (getScreens)
import HeaderActionButton from "HeaderActionButton";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { IN_APP_REPORTS_NODE } from "IN_APP_REPORTS_NODE";
import { jsx } from "jsxProd";

const require = arg1;
function getScreens(arg0) {
  let IN_APP_REPORTS_NODE;
  let callbacks;
  let HeaderActionButton;
  let _slicedToArray;
  let result;
  let closure_9;
  let dependencyMap;
  let getScreens;
  let importDefault;
  let jsx;
  let require;
  ({ nodeMap: require, reportType: importDefault, reportSubType: dependencyMap, successNodeId: HeaderActionButton, failNodeId: _slicedToArray, callbacks, reportId: result } = arg0);
  ({ closeModal: IN_APP_REPORTS_NODE, addOnCloseCallback: jsx, onSubmit: getScreens, onNavigate: closure_9 } = callbacks);
  return {
    [closure_6]: {
      headerRight() {
        const obj = { source: outer1_1(outer1_2[6]), onPress: closure_6 };
        const intl = outer1_0(outer1_2[7]).intl;
        obj.accessibilityLabel = intl.string(outer1_0(outer1_2[7]).t.cpT0Cq);
        return outer1_7(outer1_0(outer1_2[5]).HeaderActionButton, obj);
      },
      headerTitle() {
        return null;
      },
      fullscreen: true,
      render(arg0) {
        let closure_0 = arg0;
        const obj = {};
        const merged = Object.assign(arg0);
        obj["nodeMap"] = closure_0;
        obj["reportType"] = closure_1;
        obj["reportSubType"] = closure_2;
        obj["successNodeId"] = HeaderActionButton;
        obj["failNodeId"] = _slicedToArray;
        obj["onSubmit"] = function onSubmit(arg0) {
          const items = [...closure_0.history, arg0];
          return outer1_8(items);
        };
        obj["closeModal"] = closure_6;
        obj["addOnCloseCallback"] = closure_7;
        obj["reportId"] = result;
        obj["onNavigate"] = closure_9;
        return outer1_7(outer1_1(outer1_2[8]), obj);
      }
    }
  };
}
let result = require("result").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportModal.tsx");

export default function InAppReportModal(arg0) {
  let IN_APP_REPORTS_NODE;
  let c12;
  let c14;
  let c15;
  let closure_10;
  let closure_11;
  let closure_13;
  let HeaderActionButton;
  let _slicedToArray;
  let result;
  let dependencyMap;
  let initialStack;
  let jsx;
  let menu;
  let require;
  let screens;
  ({ reportType: require, menu } = arg0);
  ({ afterSubmit: dependencyMap, isEligibleForFeedback: HeaderActionButton } = arg0);
  let first;
  c12 = undefined;
  c14 = undefined;
  c15 = undefined;
  function addOnCloseCallback(arg0) {
    let closure_0 = arg0;
    _undefined2((arg0) => {
      const items = [...arg0, closure_0];
      return items;
    });
  }
  function closeModal() {
    const result = outer1_0(outer1_2[11]).trackCloseReportModalAnalytics(closure_0, c12, first);
    const obj = outer1_0(outer1_2[11]);
    outer1_0(outer1_2[12]).hideReportModal();
    const item = _undefined.forEach((arg0) => arg0());
    if (HeaderActionButton) {
      const result1 = outer1_0(outer1_2[11]).showInAppReportsFeedbackModal(closure_0, first);
      const obj3 = outer1_0(outer1_2[11]);
    }
  }
  ({ nodes: _slicedToArray, root_node_id: result, success_node_id: IN_APP_REPORTS_NODE, fail_node_id: jsx } = menu);
  let tmp = callback(React.useState(undefined), 2);
  first = tmp[0];
  let closure_9 = tmp[1];
  [closure_10, closure_11] = callback(React.useState(undefined), 2);
  const tmp3 = callback(React.useState(undefined), 2);
  [c12, closure_13] = callback(React.useState([]), 2);
  const tmp4 = callback(React.useState([]), 2);
  [c14, c15] = callback(React.useState([]), 2);
  menu(4559)(() => {
    const orFetchLinkedUsers = outer1_0(outer1_2[10]).getOrFetchLinkedUsers();
  });
  let items = [closeModal, first];
  const memo = React.useMemo(() => {
    async function _onSubmit(arg0, arg1) {
      const tmp = yield outer4_0(outer4_2[11]).submitReport(outer3_1, _onSubmit, arg0);
      let report_id;
      if (null != tmp) {
        const body = tmp.body;
        if (null != body) {
          report_id = body.report_id;
        }
      }
      if (null != report_id) {
        outer3_9(report_id);
      }
      outer3_11(outer3_4[arg0[arg0.length - 1].nodeRef].report_type);
      if (null != outer3_2) {
        outer3_2();
      }
    }
    if (null == table[result]) {
      closeModal();
      return {};
    } else {
      let obj = {};
      obj = { name: outer1_6 };
      obj = { node: tmp, history: [] };
      obj.params = obj;
      let items = [obj];
      obj.initialStack = items;
      const obj1 = { nodeMap: table, reportType: _onSubmit, reportSubType: closure_10, successNodeId: closure_6, failNodeId: closure_7 };
      const obj2 = {
        onSubmit(arg0) {
            return _onSubmit(...arguments);
          },
        closeModal,
        addOnCloseCallback,
        onNavigate(key) {
            let closure_0 = key;
            outer1_13((arg0) => {
              const items = [...arg0, closure_0];
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
      let obj = { screens, initialRouteStack: initialStack };
      const intl = require(1212) /* getSystemLocale */.intl;
      obj.headerBackTitle = intl.string(require(1212) /* getSystemLocale */.t["13/7kX"]);
      tmp8 = jsx(require(5519) /* NavigationStack */.Navigator, { screens, initialRouteStack: initialStack });
    }
  }
  return tmp8;
};
