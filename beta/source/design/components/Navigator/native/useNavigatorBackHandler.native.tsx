// Module ID: 10383
// Function ID: 10384
// Name: useNavigatorBackHandler
// Dependencies: [19, 1485, 1364, 2]
// Exports: default

// Module 10383 (useNavigatorBackHandler)
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let navigation;

let react = react_mod;
let closure_3 = {};
const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigatorBackHandler.native.tsx");

export default function useNavigatorBackHandler() {
  let closure_2;
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_3;
  }
  const onBeforeGoBack = tmp.onBeforeGoBack;
  navigation = undefined;
  react = undefined;
  let obj = onBeforeGoBack(navigation[1]);
  navigation = obj.useNavigation();
  react = react.useRef(true);
  const items = [navigation];
  const items1 = [navigation, onBeforeGoBack];
  const onGoBack = react.useCallback(() => {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    closure_2.current = flag;
    navigation.goBack();
  }, items);
  const effect = react.useEffect(() => {
    let ref;
    return navigation.addListener("beforeRemove", (data) => {
      if (ref.current) {
        let isIOSResult = "POP" === data.data.action.type;
        if (isIOSResult) {
          const obj = onBeforeGoBack(navigation[2]);
          isIOSResult = obj.isIOS();
        }
        if (data != null) {
          let obj2;
          if (isIOSResult) {
            obj2 = { preventable: false };
          } else {
            obj2 = {
              preventable: true,
              preventDefault() {
                      return data.preventDefault();
                    },
              goBack() {
                      return navigation.goBack();
                    }
            };
          }
          tmp4(obj2);
        }
      }
    });
  }, items1);
  return { onGoBack };
};
