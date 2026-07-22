// Module ID: 9103
// Function ID: 71336
// Name: useNavigatorBackHandler
// Dependencies: []
// Exports: default

// Module 9103 (useNavigatorBackHandler)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = {};
const result = arg1(dependencyMap[3]).fileFinishedImporting("design/components/Navigator/native/useNavigatorBackHandler.native.tsx");

export default function useNavigatorBackHandler() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_3;
  }
  const onBeforeGoBack = tmp.onBeforeGoBack;
  const arg1 = onBeforeGoBack;
  let dependencyMap;
  let React;
  const navigation = arg1(dependencyMap[1]).useNavigation();
  dependencyMap = navigation;
  React = React.useRef(true);
  const items = [navigation];
  const items1 = [navigation, onBeforeGoBack];
  const onGoBack = React.useCallback(() => {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    closure_2.current = flag;
    navigation.goBack();
  }, items);
  const effect = React.useEffect(() => navigation.addListener("beforeRemove", (data) => {
    if (ref.current) {
      if ("POP" === data.data.action.type) {
        let obj = data(closure_1[2]);
        if (obj.isIOS()) {
          if (null != data) {
            obj = { preventable: false };
            data(obj);
          }
        }
      }
      if (null != data) {
        obj = {
          preventable: true,
          preventDefault() {
                return arg0.preventDefault();
              },
          goBack() {
                return navigation.goBack();
              }
        };
        data(obj);
      }
    }
  }), items1);
  return { onGoBack };
};
