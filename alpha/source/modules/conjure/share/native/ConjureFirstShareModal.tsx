// Module ID: 18433
// Function ID: 18434
// Name: ConjureFirstShareModal
// Dependencies: [5, 19, 21, 6337, 5505, 18326, 18434, 18436, 7003, 7006, 12222, 1113, 5837, 575, 5414, 1502, 4121, 18437, 7722, 7724, 18438, 12198, 5421, 18441, 2]
// Exports: default

// Module 18433 (ConjureFirstShareModal)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import useNavigation from "useNavigation" /* 1502 */;
import Text_Text from "Text/Text" /* 5414 */;
import components_Button_Button from "components/Button/Button" /* 5421 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5505 */;
import Stack_Stack from "Stack/Stack" /* 5837 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6337 */;
import ModalScreen2 from "ModalScreen" /* 7722 */;
import ModalContent2 from "ModalContent" /* 7724 */;
import ModalFooter2 from "ModalFooter" /* 12198 */;
import useConjureSharingModeDefault from "useConjureSharingMode" /* 18326 */;
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
  let guildId;
  let intl;
  let obj3;
  let publishOptions;
  let review;
  project = project.project;
  const sharing = project.sharing;
  ({ guildId, publishOptions } = project);
  const tmp = sharing(18434)(project);
  dependencyMap = tmp;
  const tmp2 = sharing(18436)(project.id, guildId, publishOptions, true);
  const servers = tmp2;
  obj = project(7003);
  items = [project, tmp, sharing, tmp2];
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
    obj3 = project(review[9]);
    const ACCESS = constants.ACCESS;
    const obj4 = {
      headerLeft: obj5.getHeaderBackButton(),
      render() {
        return closure_1_5(closure_1_16, {});
      }
    };
    obj[ACCESS] = obj4;
    obj5 = project(review[9]);
    return obj;
  }, []);
  let obj2 = { value: react.useMemo(() => ({ project, review, sharing, servers }), items), children: closure_5(StepModal, obj3) };
  const Provider = redux.Provider;
  obj3 = { screens: navigatorScreens, initialRouteName: obj.REVIEW, steps: items, headerBackTitle: intl.string(project(1113).t["13/7kX"]), gradientColor: "blue" };
  StepModal = project(12222).StepModal;
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
          return { value: "HermesInternal", done: null };
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
            const intl = tmp(closure_2[11]).intl;
            closure_1_12(intl.string(c1(closure_2[16]).Fi7boI), "critical");
            c3 = 0;
            closure_128_3.current = false;
            c4 = 3;
            return { value: "HermesInternal", done: null };
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
              c1(closure_2[17])(closure_128_0.id);
            } else {
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
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
          return { value: "HermesInternal", done: null };
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
            const intl = tmp(closure_2[11]).intl;
            closure_1_12(intl.string(c1(closure_2[16]).Fi7boI), "critical");
            c3 = 0;
            closure_128_3.current = false;
            c4 = 3;
            return { value: "HermesInternal", done: null };
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
              return { value: "HermesInternal", done: null };
            }
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
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
    const obj6 = { title: intl.string(review(4121)["Vay+ld"]), description: intl2.string(review(4121)["N2HM8/"]) };
    intl = intl5.intl;
    intl2 = intl5.intl;
    items = [obj(StepHeading, obj6), ];
    const obj7 = {
      review,
      onConjureIcon: function handleConjureIcon() {
          return obj(...arguments);
        }
    };
    items[1] = obj(review(18438), obj7);
    items1 = [obj(ModalContent, obj4), ];
    const obj8 = { children: obj(Button, obj9) };
    const ModalFooter = ModalFooter2.ModalFooter;
    obj9 = {
      text: intl3.string(intl5.t.PDTjLN),
      size: "lg",
      disabled: null != review.nameError,
      loading: review.saving,
      onPress: function handleNext() {
          return obj(...arguments);
        }
    };
    Button = components_Button_Button.Button;
    intl3 = intl5.intl;
    items1[1] = obj(ModalFooter, obj8);
    return closure_6(ModalScreen, obj3);
  }
}
function AccessStep() {
  let Stack;
  let appChannelsPrivate;
  let intl;
  let intl2;
  let intl3;
  let obj3;
  let obj7;
  let project;
  let servers;
  let sharing;
  const context = react.useContext(closure_10);
  if (null == context) {
    let tmp2 = globalThis;
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("A first share step rendered outside its modal");
    throw error;
  } else {
    let i4jeWR;
    ({ review: require, servers } = context);
    ({ project, sharing } = context);
    const ModalScreen = ModalScreen2.ModalScreen;
    let obj2 = { children: closure_6(Stack, obj3) };
    const ModalContent = ModalContent2.ModalContent;
    obj3 = { spacing: servers(575).space.PX_16, children: items };
    Stack = Stack_Stack.Stack;
    const obj4 = { title: intl.string(servers(4121).IN5vt4), description: intl2.string(servers(4121).mbybxl) };
    intl = intl5.intl;
    intl2 = intl5.intl;
    items = [closure_5(StepHeading, obj4), ];
    const obj5 = { project, sharing, servers, serversLabel: intl3.string(servers(4121).BPxXfh) };
    const tmp11 = servers(18441);
    intl3 = intl5.intl;
    items[1] = closure_5(tmp11, obj5);
    const items1 = [closure_5(ModalContent, obj2), ];
    const ModalFooter = ModalFooter2.ModalFooter;
    const Button = components_Button_Button.Button;
    const intl4 = intl5.intl;
    const string = intl4.string;
    const tmp5 = closure_6;
    const tmp6 = require;
    const tmp9 = servers;
    if (null != servers.picked) {
      i4jeWR = tmp9(4121)["+uQwxA"];
    } else {
      i4jeWR = tmp6(1113).t.i4jeWR;
    }
    obj = { children: items1 };
    const obj6 = { children: closure_5(Button, obj7) };
    obj7 = {
      text: string(i4jeWR),
      size: "lg",
      loading: servers.sharing,
      onPress() {
          require = require.appChannelsPrivate;
          let isPrivate;
          const finish = servers.finish;
          const tmp2 = closeFirstShareModal;
          if (require != null) {
            isPrivate = require.isPrivate;
          }
          return finish(tmp2, (text) => {
            obj = servers(closure_1_2[4]);
            const obj2 = { text, variant: "success" };
            obj.open(closure_1_7, obj2);
          }, true === isPrivate);
        }
    };
    items1[1] = closure_5(ModalFooter, obj6);
    return tmp5(ModalScreen, obj);
  }
}
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const ConjureFirstShareModal_str = "ConjureFirstShareModal";
let obj = { REVIEW: "REVIEW", ACCESS: "ACCESS" };
let items = [, ];
({ REVIEW: arr[0], ACCESS: arr[1] } = obj);
const redux = react.createContext(null);
const result = size.fileFinishedImporting("modules/conjure/share/native/ConjureFirstShareModal.tsx");

export default function ConjureFirstShareModal(arg0) {
  let guildId;
  let projectId;
  let publishOptions;
  ({ projectId, guildId, publishOptions } = arg0);
  const tmp = useConjureSharingModeDefault(projectId);
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
    obj = { project, sharing: tmp, guildId, publishOptions };
    tmp3 = closure_5(FirstShareFlow, obj);
  }
  return tmp3;
};
export const CONJURE_FIRST_SHARE_MODAL_KEY = "ConjureFirstShareModal";
