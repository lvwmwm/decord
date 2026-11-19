// Module ID: 18427
// Function ID: 18428
// Name: ConjureFirstShareModal
// Dependencies: [5, 19, 21, 6308, 5474, 18319, 18428, 6973, 6976, 12205, 1113, 5808, 575, 5383, 1502, 4089, 18430, 7692, 7694, 18431, 12178, 5390, 18434, 2]
// Exports: default

// Module 18427 (ConjureFirstShareModal)
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import useNavigation from "useNavigation" /* 1502 */;
import _modDef4089 from "module_4089" /* 4089 */;
import Text_Text from "Text/Text" /* 5383 */;
import components_Button_Button from "components/Button/Button" /* 5390 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5474 */;
import Stack_Stack from "Stack/Stack" /* 5808 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import ModalScreen2 from "ModalScreen" /* 7692 */;
import ModalContent2 from "ModalContent" /* 7694 */;
import ModalFooter2 from "ModalFooter" /* 12178 */;
import useConjureSharingModeDefault from "useConjureSharingMode" /* 18319 */;
import ConjureShareAccessDefault from "ConjureShareAccess" /* 18434 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c1, c4, closure_2, dependencyMap;

let hasOwnProperty;
let metroRequire;
function closeFirstShareModal() {
  obj = ModalActionCreatorsDefault;
  obj.popWithKey(ConjureFirstShareModal_str);
}
function showToast(text, arg1) {
  obj = ToastActionCreatorsDefault;
  const obj2 = { text, variant: "critical" };
  obj.open(ConjureFirstShareModal_str, obj2);
}
function FirstShareFlow(project) {
  let StepModal;
  let intl;
  let obj3;
  let review;
  project = project.project;
  const sharing = project.sharing;
  const tmp = sharing(18428)(project);
  dependencyMap = tmp;
  obj = project(6973);
  items = [project, tmp, sharing];
  const navigatorScreens = obj.useNavigatorScreens(() => {
    let obj3;
    let obj5;
    obj = {};
    const REVIEW = constants.REVIEW;
    const obj2 = {
      headerLeft: obj3.getHeaderCloseButton(closeFirstShareModal),
      render() {
        return closure_1_5(closure_1_15, {});
      }
    };
    obj[REVIEW] = obj2;
    obj3 = project(review[8]);
    const ACCESS = constants.ACCESS;
    const obj4 = {
      headerLeft: obj5.getHeaderBackButton(),
      render() {
        return closure_1_5(closure_1_16, {});
      }
    };
    obj[ACCESS] = obj4;
    obj5 = project(review[8]);
    return obj;
  }, []);
  let obj2 = { value: react.useMemo(() => ({ project, review, sharing }), items), children: closure_5(StepModal, obj3) };
  const Provider = redux.Provider;
  obj3 = { screens: navigatorScreens, initialRouteName: obj.REVIEW, steps: items, headerBackTitle: intl.string(project(1113).t["13/7kX"]), gradientColor: "blue" };
  StepModal = project(12205).StepModal;
  intl = project(1113).intl;
  return closure_5(Provider, obj2);
}
function StepHeading(arg0) {
  let description;
  let title;
  ({ title, description } = arg0);
  obj = { spacing: nativeDefault.space.PX_8, children: items };
  const Stack = Stack_Stack.Stack;
  items = [hasOwnProperty(Text_Text.Text, { accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: title }), hasOwnProperty(Text_Text.Text, { variant: "body-md/normal", color: "text-subtle", children: description })];
  return metroRequire(Stack, obj);
}
function ReviewStep() {
  let Button;
  let Stack;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj5;
  let obj9;
  let review;
  obj = function _handleConjureIcon() {
    let ref;
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let v2;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "+60" };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else if (!ref.current) {
              ref.current = true;
              c3 = 2;
              c1 = 3;
              c4 = 1;
              const obj4 = { value: review.save(), done: false };
              return obj4;
            }
          } else if (1 === c1) {
            c3 = 0;
            closure_128_3.current = false;
            throw closure_2;
          } else if (2 === c1) {
            const intl = tmp(closure_2[10]).intl;
            closure_1_12(intl.string(c1(closure_2[15]).Fi7boI), "critical");
            c3 = 0;
            closure_128_3.current = false;
            c4 = 3;
            return { value: "HermesInternal", done: "+60" };
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_3.current = false;
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            closure_128_3.current = false;
            if (value) {
              closure_1_11();
              c1(closure_2[16])(closure_128_0.id);
            } else {
              c4 = 3;
              return { value: "HermesInternal", done: "+60" };
            }
          }
          c4 = 3;
          return { value: "HermesInternal", done: "+60" };
        } catch (tmp32) {
          closure_2 = tmp32;
          if (0 === c3) {
            c4 = 3;
            throw tmp32;
          } else if (1 === tmp34) {
            c1 = 1;
          } else {
            c1 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  obj = function _handleNext() {
    let ref;
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let v2;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "+60" };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else if (!ref.current) {
              ref.current = true;
              c3 = 2;
              c1 = 3;
              c4 = 1;
              const obj4 = { value: review.save(), done: false };
              return obj4;
            }
          } else if (1 === c1) {
            c3 = 0;
            closure_128_3.current = false;
            throw closure_2;
          } else if (2 === c1) {
            const intl = tmp(closure_2[10]).intl;
            closure_1_12(intl.string(c1(closure_2[15]).Fi7boI), "critical");
            c3 = 0;
            closure_128_3.current = false;
            c4 = 3;
            return { value: "HermesInternal", done: "+60" };
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_3.current = false;
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            closure_128_3.current = false;
            if (value) {
              closure_128_2.navigate(constants.ACCESS);
            } else {
              c4 = 3;
              return { value: "HermesInternal", done: "+60" };
            }
          }
          c4 = 3;
          return { value: "HermesInternal", done: "+60" };
        } catch (tmp28) {
          closure_2 = tmp28;
          if (0 === c3) {
            c4 = 3;
            throw tmp28;
          } else if (1 === tmp30) {
            c1 = 1;
          } else {
            c1 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const context = obj.useContext(closure_10);
  if (null == context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("A first share step rendered outside its modal");
    throw error;
  } else {
    ({ project: require, review } = context);
    let obj2 = useNavigation;
    dependencyMap = obj2.useNavigation();
    let closure_3 = obj.useRef(false);
    let obj3 = { children: items1 };
    const ModalScreen = ModalScreen2.ModalScreen;
    let obj4 = { children: closure_6(Stack, obj5) };
    const ModalContent = ModalContent2.ModalContent;
    obj5 = { spacing: review(575).space.PX_16, children: items };
    Stack = Stack_Stack.Stack;
    const obj6 = { title: intl.string(review(4089)["Vay+ld"]), description: intl2.string(review(4089)["N2HM8/"]) };
    intl = intl4.intl;
    intl2 = intl4.intl;
    items = [obj(StepHeading, obj6), ];
    const obj7 = {
      review,
      onConjureIcon: function handleConjureIcon() {
          return obj(...arguments);
        }
    };
    items[1] = obj(review(18431), obj7);
    items1 = [obj(ModalContent, obj4), ];
    const obj8 = { children: obj(Button, obj9) };
    const ModalFooter = ModalFooter2.ModalFooter;
    obj9 = {
      text: intl3.string(intl4.t.PDTjLN),
      size: "lg",
      disabled: null != review.nameError,
      loading: review.saving,
      onPress: function handleNext() {
          return obj(...arguments);
        }
    };
    Button = components_Button_Button.Button;
    intl3 = intl4.intl;
    items1[1] = obj(ModalFooter, obj8);
    return closure_6(ModalScreen, obj3);
  }
}
function AccessStep() {
  let Button;
  let Stack;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj3;
  let obj7;
  let project;
  let sharing;
  const context = react.useContext(redux);
  if (null == context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("A first share step rendered outside its modal");
    throw error;
  } else {
    ({ project, sharing } = context);
    obj = { children: items1 };
    const ModalScreen = ModalScreen2.ModalScreen;
    const obj2 = { children: metroRequire(Stack, obj3) };
    const ModalContent = ModalContent2.ModalContent;
    obj3 = { spacing: nativeDefault.space.PX_16, children: items };
    Stack = Stack_Stack.Stack;
    const obj4 = { title: intl.string(_modDef4089.IN5vt4), description: intl2.string(_modDef4089.mbybxl) };
    intl = intl4.intl;
    intl2 = intl4.intl;
    items = [hasOwnProperty(StepHeading, obj4), ];
    const obj5 = { project, sharing };
    items[1] = hasOwnProperty(ConjureShareAccessDefault, obj5);
    items1 = [hasOwnProperty(ModalContent, obj2), ];
    const obj6 = { children: hasOwnProperty(Button, obj7) };
    const ModalFooter = ModalFooter2.ModalFooter;
    obj7 = { text: intl3.string(intl4.t.i4jeWR), size: "lg", onPress: closeFirstShareModal };
    Button = components_Button_Button.Button;
    intl3 = intl4.intl;
    items1[1] = hasOwnProperty(ModalFooter, obj6);
    return metroRequire(ModalScreen, obj);
  }
}
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const ConjureFirstShareModal_str = "ConjureFirstShareModal";
let obj = { REVIEW: "REVIEW", ACCESS: "ACCESS" };
let items = [, ];
({ REVIEW: arr[0], ACCESS: arr[1] } = obj);
const redux = react.createContext(null);
const result = size.fileFinishedImporting("modules/conjure/share/native/ConjureFirstShareModal.tsx");

export default function ConjureFirstShareModal(projectId) {
  const tmp = useConjureSharingModeDefault(projectId.projectId);
  const project = tmp.project;
  items = [project];
  const effect = react.useEffect(() => {
    if (null == project) {
      obj = ModalActionCreatorsDefault;
      obj.popWithKey(ConjureFirstShareModal_str);
    }
  }, items);
  let tmp3 = null;
  if (null != project) {
    obj = { project, sharing: tmp };
    tmp3 = closure_5(FirstShareFlow, obj);
  }
  return tmp3;
};
export const CONJURE_FIRST_SHARE_MODAL_KEY = "ConjureFirstShareModal";
