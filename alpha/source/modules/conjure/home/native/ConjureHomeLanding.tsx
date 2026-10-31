// Module ID: 12816
// Function ID: 12817
// Name: ConjureHomeLanding
// Dependencies: [5, 32, 19, 17, 10851, 21, 575, 5014, 12817, 1497, 1625, 12074, 5095, 12973, 12596, 12582, 12974, 12761, 10875, 12580, 1498, 12086, 1113, 3868, 10879, 5712, 12976, 7306, 5624, 12977, 12792, 12979, 2]
// Exports: default

// Module 12816 (ConjureHomeLanding)
import nativeDefault from "native" /* 575 */;
import ConjureHomeCarousel from "ConjureHomeCarousel" /* 12817 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ConjureChatStore from "ConjureChatStore" /* 10851 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c6, dependencyMap, guildId, navigation, projectId;

let c10;
let c9;
let diff;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
({ ScrollView: metroRequire, View: metroImportDefault } = react_native);
({ jsx: c9, jsxs: c10 } = Fragment);
let c11 = "conjure-home";
class ConjureHomeUploadError extends Error {
}
const PX_32 = nativeDefault.space.PX_32;
const PX_48 = nativeDefault.space.PX_48;
let createStyles = createStyles_mod;
let obj = { root: obj2, scroll: { flex: 1 }, content: obj3, hero: obj4, badgeRow: { flexDirection: "row" }, carousel: obj5, showcase: obj6, showcaseTitle: obj7, error: obj8 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_32, paddingBottom: nativeDefault.space.PX_32, gap: PX_32 };
obj4 = { gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_32 };
obj5 = { marginBottom: diff - ConjureHomeCarousel.CONJURE_HOME_CAROUSEL_ROOM_BELOW };
diff = PX_48 - PX_32;
obj6 = { gap: nativeDefault.space.PX_16 };
obj7 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj8 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
let closure_13 = createStyles(obj);
const __initData = { code: "function ConjureHomeLandingTsx1(){const{keyboardHeight,safeAreaBottom}=this.__closure;return{paddingBottom:Math.max(keyboardHeight.get(),safeAreaBottom)};}" };
const result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeLanding.tsx");

export default function ConjureHomeLanding(focusRequest) {
  let Badge;
  let _undefined;
  let _undefined2;
  let c10;
  let c7;
  let c9;
  let closure_11;
  let closure_2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj10;
  let obj9;
  let tmp15;
  let tmp21;
  let tmp23;
  focusRequest = focusRequest.focusRequest;
  let forMeGuildId = focusRequest.forMeGuildId;
  if (focusRequest === undefined) {
    focusRequest = null;
  }
  navigation = undefined;
  let bottom;
  dependencyMap = undefined;
  let str;
  forMeGuildId = undefined;
  let ref;
  c7 = undefined;
  let closure_8;
  c9 = undefined;
  c10 = undefined;
  projectId = undefined;
  let closure_12;
  const tmp2 = closure_13();
  const tmp3 = navigation;
  let tmp4 = dependencyMap;
  let obj = navigation(1497);
  navigation = obj.useNavigation();
  let tmp6 = bottom;
  bottom = bottom(1625)().bottom;
  let tmp7 = bottom(12074)();
  dependencyMap = tmp7;
  let obj2 = navigation(5095);
  const fn = function y() {
    const obj = { paddingBottom: Math.max(closure_2.get(), bottom) };
    return obj;
  };
  fn.__closure = { keyboardHeight: tmp7, safeAreaBottom: bottom };
  fn.__workletHash = 10510195293107;
  fn.__initData = __initData;
  let obj3 = forMeGuildId;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const tmp10 = str(forMeGuildId.useState(navigation(12973).CONJURE_TARGET_USER), 2);
  const first = tmp10[0];
  const tmp12 = tmp10[1];
  let obj4 = navigation(12596);
  const conjureEligibleGuilds = obj4.useConjureEligibleGuilds("ConjureHomeLanding");
  let CONJURE_TARGET_USER = first;
  if (first !== navigation(12973).CONJURE_TARGET_USER) {
    CONJURE_TARGET_USER = first;
    if (!conjureEligibleGuilds.some((id) => id.id === first)) {
      CONJURE_TARGET_USER = tmp3(12973).CONJURE_TARGET_USER;
    }
  }
  str = "guild";
  if (CONJURE_TARGET_USER === tmp3(12973).CONJURE_TARGET_USER) {
    str = "user";
  }
  let tmp13 = CONJURE_TARGET_USER;
  if (CONJURE_TARGET_USER === tmp3(12973).CONJURE_TARGET_USER) {
    tmp13 = forMeGuildId;
  }
  forMeGuildId = tmp13;
  ref = obj3.useRef(0);
  [tmp15, c7] = str(obj3.useState(true), 2);
  str(obj3.useState(true), 2);
  const callback = obj3.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.contentOffset.y < ref.current);
  }, []);
  const callback1 = obj3.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    ref.current = layout.y + layout.height;
  }, []);
  const tmp9Result4 = str(obj3.useState(false), 2);
  closure_8 = tmp9Result4[1];
  const first1 = tmp9Result4[0];
  [tmp21, c9] = str(obj3.useState(null), 2);
  str(obj3.useState(null), 2);
  [tmp23, c10] = str(obj3.useState(null), 2);
  str(obj3.useState(null), 2);
  const callback2 = obj3.useCallback(() => _undefined2((arg0) => {
    let num = arg0;
    if (arg0 == null) {
      num = 0;
    }
    return num + 1;
  }), []);
  projectId = obj3.useRef(false);
  const effect = obj3.useEffect(() => {
    closure_11.current = true;
    return () => {
      closure_1_11.current = false;
    };
  }, []);
  closure_12 = obj3.useRef(false);
  const useCallback = obj3.useCallback;
  let closure_0 = first(function*(arg0, value) {
    let closure_4;
    let obj6;
    function whenFirstPromptShown(value) {
      closure_0 = value;
      const promise = new Promise((fn) => {
        const f140373 = (role) => "user" === role.role;
        closure_0 = fn;
        function check() {
          const messages = closure_3_8.getMessages(closure_0);
          const obj = closure_3_8;
          if (messages.some(f140373)) {
            obj.removeChangeListener(check);
            const _clearTimeout = clearTimeout;
            clearTimeout(timerId);
            closure_0();
          }
        }
        const timerId = setTimeout(function finish() {
          closure_3_8.removeChangeListener(check);
          clearTimeout(timerId);
          fn();
        }, 10000);
        let obj = closure_1_8;
        closure_1_8.addChangeListener(check);
        let messages = closure_1_8.getMessages(closure_0);
        if (messages.some(f140373)) {
          obj.removeChangeListener(check);
          let _clearTimeout = clearTimeout;
          clearTimeout(timerId);
          fn();
        }
      });
      return promise;
    }
    closure_0 = arg0;
    let closure_1 = value;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let tmp114;
      try {
        let closure_3;
        c7 = 2;
        const tmp4 = c6;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            projectId = undefined;
            closure_3 = undefined;
            tmp114 = undefined;
            if (ref2.current) {
              c7 = 3;
              return { value: false, done: true };
            } else {
              ref2.current = true;
              closure_1_8(true);
              closure_1_9(null);
              const obj16 = closure_0(closure_2_2[15]);
              obj16.setComposerDraft(closure_2_11, "");
              guildId = 2;
              const obj4 = { guildId, installScope: tmp114, modelSettings: null };
              c6 = 3;
              c7 = 1;
              const obj5 = { value: bottom(closure_2_2[16])(obj4), done: false };
              return obj5;
            }
          }
        } else if (1 === tmp4) {
          guildId = 0;
          ref2.current = false;
          closure_1_8(false);
          throw tmp114;
        } else if (2 === tmp4) {
          let stringResult;
          guildId = 1;
          let closure_5 = tmp114;
          const obj12 = closure_0(closure_2_2[15]);
          obj12.setComposerDraft(closure_2_11, closure_0);
          if (closure_5 instanceof closure_2_12) {
            const intl = closure_0(closure_2_2[22]).intl;
            stringResult = intl.string(bottom(closure_2_2[23])["903H7m"]);
          } else {
            const obj13 = closure_0(closure_2_2[24]);
            stringResult = obj13.getConjureCreateErrorMessage(closure_5);
          }
          tmp114 = stringResult;
          if (ref.current) {
            closure_1_9(tmp114);
          } else {
            const obj7 = { text: tmp114, variant: "critical" };
            const obj14 = bottom(closure_2_2[25]);
            obj14.open("CONJURE_HOME_CREATE_FAILED", obj7);
          }
          guildId = 0;
          ref2.current = false;
          closure_1_8(false);
          c7 = 3;
          return { value: false, done: true };
        } else {
          if (3 === tmp4) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              guildId = 0;
              ref2.current = false;
              closure_1_8(false);
              c7 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              projectId = value;
              closure_3 = [];
              if (closure_1.length > 0) {
                guildId = 3;
                c6 = 7;
                c7 = 1;
                const obj10 = {
                  value: Promise.all(closure_1.map((item) => {
                                const obj = closure_0(closure_2[17]);
                                return obj.uploadConjurePickedFile(closure_1_2, item);
                              })),
                  done: false
                };
                return obj10;
              }
            }
          } else if (4 === tmp4) {
            guildId = 4;
            c6 = 8;
            c7 = 1;
            const obj11 = { value: obj6.deleteProject(projectId), done: false };
            obj6 = closure_0(closure_2_2[18]);
            return obj11;
          } else if (5 === tmp4) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              guildId = 0;
              ref2.current = false;
              closure_1_8(false);
              c7 = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else {
              const current = ref.current && closure_0.isFocused();
              if (current) {
                const dispatch = closure_0.dispatch;
                const obj17 = { projectId, entryPoint: "create" };
                str = closure_0(closure_2_2[20]).StackActions;
                dispatch(str.replace(closure_0(closure_2_2[21]).ConjureScreenScenes.CHAT, obj17));
              }
              guildId = 0;
              ref2.current = false;
              const current2 = ref.current;
              closure_1_8(false);
              c7 = 3;
              const obj18 = { value: current2, done: true };
              return obj18;
            }
          } else {
            if (6 === tmp4) {
              guildId = 2;
            } else if (7 === tmp4) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                guildId = 0;
                ref2.current = false;
                closure_1_8(false);
                c7 = 3;
                const obj19 = { value, done: true };
                return obj19;
              } else {
                closure_3 = value.map(function(item) {
                  if ("errorText" in item) {
                    const self = this;
                    throw new ref2();
                  } else {
                    return item;
                  }
                });
                guildId = 2;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              guildId = 0;
              ref2.current = false;
              closure_1_8(false);
              c7 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              guildId = 2;
            }
            let self = this;
            throw new closure_2_12();
          }
          const obj8 = closure_0(closure_2_2[19]);
          obj8.startConjurePrompt(projectId, closure_0.trim(), closure_3);
          c6 = 5;
          c7 = 1;
          const obj20 = { value: whenFirstPromptShown(projectId), done: false };
          return obj20;
        }
      } catch (tmp114) {
        if (0 === guildId) {
          c7 = 3;
          throw tmp114;
        } else if (1 === guildId) {
          c6 = 1;
        } else if (2 === guildId) {
          c6 = 2;
        } else if (3 === guildId) {
          c6 = 4;
        } else {
          c6 = 6;
        }
      }
    }
  });
  const items = [str, tmp13, navigation];
  const callback3 = useCallback(function() {
    return closure_0(...arguments);
  }, items);
  let obj5 = { style: items1, children: items2 };
  items1 = [tmp2.root, animatedStyle];
  const View = tmp6(5095).View;
  items2 = [c9(tmp6(12976), {}), , , ];
  let obj6 = { style: tmp2.scroll, contentContainerStyle: tmp2.content, keyboardShouldPersistTaps: "handled", onScrollBeginDrag: callback2, onTouchEnd: callback2, onScroll: callback, scrollEventThrottle: 100, children: items4 };
  let obj7 = { style: tmp2.hero, children: items3 };
  let obj8 = { style: tmp2.badgeRow, children: c9(Badge, obj9) };
  obj9 = { type: obj10, variant: "primary" };
  obj10 = { text: intl.string(tmp6(3868).y6T1Nu) };
  Badge = tmp3(7306).Badge;
  intl = tmp3(1113).intl;
  items3 = [c9(c7, obj8), , ];
  let obj11 = { variant: "display-md", color: "text-strong", accessibilityRole: "header", children: intl2.string(tmp6(3868).doYpEy) };
  const Text = tmp3(5624).Text;
  intl2 = tmp3(1113).intl;
  items3[1] = c9(Text, obj11);
  let obj12 = { variant: "text-sm/normal", color: "text-strong", children: intl3.string(tmp6(3868).BH58fD) };
  const Text2 = tmp3(5624).Text;
  intl3 = tmp3(1113).intl;
  items3[2] = c9(Text2, obj12);
  items4 = [c10(c7, obj7), , ];
  let obj13 = { style: tmp2.carousel, onLayout: callback1, children: c9(tmp6(12817), { onScreen: tmp15 }) };
  items4[1] = c9(c7, obj13);
  let obj14 = { style: tmp2.showcase, children: items5 };
  let obj15 = { variant: "heading-lg/medium", color: "text-strong", accessibilityRole: "header", style: tmp2.showcaseTitle, children: intl4.string(tmp6(3868).IiQEVd) };
  const Text3 = tmp3(5624).Text;
  intl4 = tmp3(1113).intl;
  items5 = [c9(Text3, obj15), c9(tmp6(12977), {})];
  items4[2] = c10(c7, obj14);
  items2[1] = c10(ref, obj6);
  let tmp28Result = null;
  const tmp27 = c10;
  if (null != tmp21) {
    let obj16 = { variant: "text-sm/normal", color: "text-feedback-critical", style: tmp2.error, children: tmp21 };
    tmp28Result = tmp28(tmp3(5624).Text, obj16);
  }
  items2[2] = tmp28Result;
  let obj17 = { projectId, canSend: true, running: false, onSendFiles: callback3, sending: first1, focusRequest, blurRequest: tmp23, placeholder: intl5.string(tmp6(3868).Hy0OLY), stackedAccessory: tmp28(tmp6(12979), { target: CONJURE_TARGET_USER, guilds: conjureEligibleGuilds, onChange: tmp12 }) };
  const tmp6Result = tmp6(12792);
  intl5 = tmp3(1113).intl;
  items2[3] = c9(tmp6Result, obj17);
  return tmp27(View, obj5);
};
