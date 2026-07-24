// Module ID: 9146
// Function ID: 71586
// Name: useNavigatorBackHandler
// Dependencies: [31, 1456, 477, 2]
// Exports: default

// Module 9146 (useNavigatorBackHandler)
import result from "result";

const require = arg1;
let closure_3 = {};
const result = require("set").fileFinishedImporting("design/components/Navigator/native/useNavigatorBackHandler.native.tsx");

export default function useNavigatorBackHandler() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_3;
  }
  const onBeforeGoBack = tmp.onBeforeGoBack;
  let navigation;
  let React;
  navigation = onBeforeGoBack(navigation[1]).useNavigation();
  React = React.useRef(true);
  const items = [navigation];
  const items1 = [navigation, onBeforeGoBack];
  const onGoBack = React.useCallback(() => {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    result.current = flag;
    navigation.goBack();
  }, items);
  const effect = React.useEffect(() => navigation.addListener("beforeRemove", (data) => {
    let closure_0 = data;
    if (outer1_2.current) {
      if ("POP" === data.data.action.type) {
        let obj = onBeforeGoBack(navigation[2]);
        if (obj.isIOS()) {
          if (null != outer1_0) {
            obj = { preventable: false };
            outer1_0(obj);
          }
        }
      }
      if (null != outer1_0) {
        obj = {
          preventable: true,
          preventDefault() {
                return data.preventDefault();
              },
          goBack() {
                return outer2_1.goBack();
              }
        };
        outer1_0(obj);
      }
    }
  }), items1);
  return { onGoBack };
};
