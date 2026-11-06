// Module ID: 13010
// Function ID: 13011
// Name: ConjureHomeLanding
// Dependencies: [5, 32, 19, 17, 10987, 21, 575, 5170, 13011, 1499, 1627, 12247, 1652, 13167, 12789, 12775, 13168, 13169, 12954, 11012, 12773, 1500, 12259, 1113, 4024, 11016, 5867, 13171, 7075, 5781, 13172, 12986, 13174, 2]
// Exports: default

// Module 13010 (ConjureHomeLanding)
import nativeDefault from "native" /* 575 */;
import ConjureHomeCarousel from "ConjureHomeCarousel" /* 13011 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ConjureChatStore from "ConjureChatStore" /* 10987 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let _require, c6, closure_0, closure_4, navigation;

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
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ScrollView: metroRequire, View: metroImportDefault } = react_native);
({ jsx: c9, jsxs: c10 } = Fragment);
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
let closure_12 = createStyles(obj);
let closure_13 = { code: "(function ConjureHomeLandingTsx1(){let[keyboardHeight,safeAreaBottom]=this.__closure;return{paddingBottom:Math.max(keyboardHeight.get(),safeAreaBottom)};})" };
const result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeLanding.tsx");

export default function ConjureHomeLanding(focusRequest) {
  let Badge;
  let _undefined;
  let _undefined2;
  let c5;
  let c7;
  let c8;
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj8;
  let obj9;
  let ref;
  let tmp10;
  let tmp15;
  let tmp18;
  let tmp24;
  let tmp26;
  let tmp8;
  let tmp9;
  focusRequest = focusRequest.focusRequest;
  let forMeGuildId = focusRequest.forMeGuildId;
  if (focusRequest === undefined) {
    focusRequest = null;
  }
  navigation = undefined;
  first = undefined;
  let str;
  forMeGuildId = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let closure_6;
  c7 = undefined;
  c8 = undefined;
  let closure_9;
  let closure_10;
  const tmp2 = closure_12();
  const tmp3 = navigation;
  let tmp4 = str;
  let obj = navigation(str[9]);
  navigation = obj.useNavigation();
  let tmp6 = first;
  const bottom = first(str[10])().bottom;
  let tmp7 = first(str[11])();
  let obj2 = navigation(str[12]);
  const items = [closure_13, tmp7, bottom];
  let c0;
  let c1;
  [tmp8, tmp9, tmp10] = items;
  class ConjureHomeLandingTsx1 {
    constructor() {
      const obj = { paddingBottom: Math.max(_undefined.get(), c1) };
      return obj;
    }
  }
  const items1 = [tmp9, tmp10];
  ConjureHomeLandingTsx1.__closure = items1;
  ConjureHomeLandingTsx1.__workletHash = 1190769444170;
  ConjureHomeLandingTsx1.__initData = tmp8;
  let obj3 = react;
  const animatedStyle = obj2.useAnimatedStyle(ConjureHomeLandingTsx1);
  [first, tmp15] = react.useState(tmp3(tmp4[13]).CONJURE_TARGET_USER);
  const tmp3Result = tmp3(tmp4[14]);
  const conjureEligibleGuilds = tmp3Result.useConjureEligibleGuilds("ConjureHomeLanding");
  let CONJURE_TARGET_USER = first;
  if (first !== tmp3(tmp4[13]).CONJURE_TARGET_USER) {
    CONJURE_TARGET_USER = first;
    if (!conjureEligibleGuilds.some((id) => id.id === first)) {
      CONJURE_TARGET_USER = tmp3(tmp4[13]).CONJURE_TARGET_USER;
    }
  }
  str = "guild";
  if (CONJURE_TARGET_USER === tmp3(tmp4[13]).CONJURE_TARGET_USER) {
    str = "user";
  }
  let tmp16 = CONJURE_TARGET_USER;
  if (CONJURE_TARGET_USER === tmp3(tmp4[13]).CONJURE_TARGET_USER) {
    tmp16 = forMeGuildId;
  }
  forMeGuildId = tmp16;
  _slicedToArray = obj3.useRef(0);
  [tmp18, c5] = _slicedToArray(obj3.useState(true), 2);
  _slicedToArray(obj3.useState(true), 2);
  const callback = obj3.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.contentOffset.y < ref.current);
  }, []);
  const callback1 = obj3.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    ref.current = layout.y + layout.height;
  }, []);
  const tmp12Result4 = _slicedToArray(obj3.useState(false), 2);
  closure_6 = tmp12Result4[1];
  const first1 = tmp12Result4[0];
  [tmp24, c7] = _slicedToArray(obj3.useState(null), 2);
  _slicedToArray(obj3.useState(null), 2);
  [tmp26, c8] = _slicedToArray(obj3.useState(null), 2);
  _slicedToArray(obj3.useState(null), 2);
  const callback2 = obj3.useCallback(() => _undefined2((arg0) => {
    let num = arg0;
    if (arg0 == null) {
      num = 0;
    }
    return num + 1;
  }), []);
  closure_9 = obj3.useRef(false);
  const effect = obj3.useEffect(() => {
    closure_9.current = true;
    return () => {
      closure_1_9.current = false;
    };
  }, []);
  closure_10 = obj3.useRef(false);
  const useCallback = obj3.useCallback;
  _require = forMeGuildId(function*(arg0, value) {
    let closure_2;
    let obj6;
    let v3;
    let v6;
    function whenFirstPromptShown(value) {
      closure_0 = value;
      const promise = new Promise((fn) => {
        const f142981 = (role) => "user" === role.role;
        closure_0 = fn;
        function check() {
          const messages = closure_3_8.getMessages(closure_0);
          const obj = closure_3_8;
          if (messages.some(f142981)) {
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
        if (messages.some(f142981)) {
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c5;
      try {
        let projectId;
        let guildId;
        let text;
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
            guildId = undefined;
            text = undefined;
            if (ref2.current) {
              c7 = 3;
              return { value: false, done: true };
            } else {
              ref2.current = true;
              c6(true);
              c7(null);
              const obj16 = closure_0(closure_2_2[15]);
              obj16.setComposerDraft(closure_0(closure_2_2[16]).CONJURE_HOME_DRAFT_KEY, "");
              c5 = 2;
              const obj4 = { guildId, installScope: projectId, modelSettings: null };
              c6 = 3;
              c7 = 1;
              const obj5 = { value: first(closure_2_2[17])(obj4), done: false };
              return obj5;
            }
          }
        } else if (1 === tmp4) {
          c5 = 0;
          ref2.current = false;
          c6(false);
          throw closure_4;
        } else if (2 === tmp4) {
          let stringResult;
          c5 = 1;
          let closure_5 = closure_4;
          const obj12 = closure_0(closure_2_2[15]);
          obj12.setComposerDraft(closure_0(closure_2_2[16]).CONJURE_HOME_DRAFT_KEY, closure_0);
          if (closure_5 instanceof ConjureHomeUploadError) {
            const intl = closure_0(closure_2_2[23]).intl;
            stringResult = intl.string(first(closure_2_2[24])["903H7m"]);
          } else {
            const obj13 = closure_0(closure_2_2[25]);
            stringResult = obj13.getConjureCreateErrorMessage(closure_5);
          }
          text = stringResult;
          if (ref.current) {
            c7(text);
          } else {
            const obj7 = { text, variant: "critical" };
            const obj14 = first(closure_2_2[26]);
            obj14.open("CONJURE_HOME_CREATE_FAILED", obj7);
          }
          c5 = 0;
          ref2.current = false;
          c6(false);
          c7 = 3;
          return { value: false, done: true };
        } else {
          if (3 === tmp4) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              ref2.current = false;
              c6(false);
              c7 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              projectId = value;
              guildId = [];
              if (closure_1.length > 0) {
                c5 = 3;
                c6 = 7;
                c7 = 1;
                const obj10 = {
                  value: Promise.all(closure_1.map((item) => {
                                const obj = closure_0(closure_2[18]);
                                return obj.uploadConjurePickedFile(closure_1_2, item);
                              })),
                  done: false
                };
                return obj10;
              }
            }
          } else if (4 === tmp4) {
            c5 = 4;
            c6 = 8;
            c7 = 1;
            const obj11 = { value: obj6.deleteProject(projectId), done: false };
            obj6 = closure_0(closure_2_2[19]);
            return obj11;
          } else if (5 === tmp4) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              ref2.current = false;
              c6(false);
              c7 = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else {
              const current = ref.current && closure_0.isFocused();
              if (current) {
                const dispatch = closure_0.dispatch;
                const obj17 = { projectId, entryPoint: "create" };
                str = closure_0(closure_2_2[21]).StackActions;
                dispatch(str.replace(closure_0(closure_2_2[22]).ConjureScreenScenes.CHAT, obj17));
              }
              c5 = 0;
              ref2.current = false;
              const current2 = ref.current;
              c6(false);
              c7 = 3;
              const obj18 = { value: current2, done: true };
              return obj18;
            }
          } else {
            if (6 === tmp4) {
              c5 = 2;
            } else if (7 === tmp4) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                ref2.current = false;
                c6(false);
                c7 = 3;
                const obj19 = { value, done: true };
                return obj19;
              } else {
                guildId = value.map(function(item) {
                  if ("errorText" in item) {
                    const self = this;
                    throw new closure_1_11();
                  } else {
                    return item;
                  }
                });
                c5 = 2;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              ref2.current = false;
              c6(false);
              c7 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              c5 = 2;
            }
            let self = this;
            throw new ConjureHomeUploadError();
          }
          const obj8 = closure_0(closure_2_2[20]);
          obj8.startConjurePrompt(projectId, closure_0.trim(), guildId);
          c6 = 5;
          c7 = 1;
          const obj20 = { value: whenFirstPromptShown(projectId), done: false };
          return obj20;
        }
      } catch (tmp116) {
        closure_4 = tmp116;
        if (0 === c5) {
          c7 = 3;
          throw tmp116;
        } else if (1 === c5) {
          c6 = 1;
        } else if (2 === c5) {
          c6 = 2;
        } else if (3 === c5) {
          c6 = 4;
        } else {
          c6 = 6;
        }
      }
    }
  });
  const items2 = [str, tmp16, navigation];
  const callback3 = useCallback(function() {
    return closure_0(...arguments);
  }, items2);
  let obj4 = { style: items3, children: items4 };
  items3 = [tmp2.root, animatedStyle];
  const View = tmp6(tmp4[12]).View;
  items4 = [closure_9(tmp6(tmp4[27]), {}), , , ];
  let obj5 = { style: tmp2.scroll, contentContainerStyle: tmp2.content, keyboardShouldPersistTaps: "handled", onScrollBeginDrag: callback2, onTouchEnd: callback2, onScroll: callback, scrollEventThrottle: 100, children: items6 };
  let obj6 = { style: tmp2.hero, children: items5 };
  let obj7 = { style: tmp2.badgeRow, children: closure_9(Badge, obj8) };
  obj8 = { type: obj9, variant: "primary" };
  obj9 = { text: intl.string(tmp6(tmp4[24]).y6T1Nu) };
  Badge = tmp3(tmp4[28]).Badge;
  intl = tmp3(tmp4[23]).intl;
  items5 = [closure_9(c7, obj7), , ];
  let obj10 = { variant: "display-md", color: "text-strong", accessibilityRole: "header", children: intl2.string(tmp6(tmp4[24]).doYpEy) };
  const Text = tmp3(tmp4[29]).Text;
  intl2 = tmp3(tmp4[23]).intl;
  items5[1] = closure_9(Text, obj10);
  let obj11 = { variant: "body-sm/normal", color: "text-strong", children: intl3.string(tmp6(tmp4[24]).BH58fD) };
  const Text2 = tmp3(tmp4[29]).Text;
  intl3 = tmp3(tmp4[23]).intl;
  items5[2] = closure_9(Text2, obj11);
  items6 = [closure_10(c7, obj6), , ];
  let obj12 = { style: tmp2.carousel, onLayout: callback1, children: closure_9(tmp6(tmp4[8]), { onScreen: tmp18 }) };
  items6[1] = closure_9(c7, obj12);
  let obj13 = { style: tmp2.showcase, children: items7 };
  let obj14 = { variant: "heading-lg/medium", color: "text-strong", accessibilityRole: "header", style: tmp2.showcaseTitle, children: intl4.string(tmp6(tmp4[24]).IiQEVd) };
  const Text3 = tmp3(tmp4[29]).Text;
  intl4 = tmp3(tmp4[23]).intl;
  items7 = [closure_9(Text3, obj14), closure_9(tmp6(tmp4[30]), {})];
  items6[2] = closure_10(c7, obj13);
  items4[1] = closure_10(closure_6, obj5);
  let tmp31Result = null;
  const tmp30 = closure_10;
  if (null != tmp24) {
    let obj15 = { variant: "body-sm/normal", color: "text-feedback-critical", style: tmp2.error, children: tmp24 };
    tmp31Result = tmp31(tmp3(tmp4[29]).Text, obj15);
  }
  items4[2] = tmp31Result;
  let obj16 = { projectId: tmp3(tmp4[16]).CONJURE_HOME_DRAFT_KEY, canSend: true, running: false, onSendFiles: callback3, sending: first1, focusRequest, blurRequest: tmp26, placeholder: intl5.string(tmp6(tmp4[24]).Hy0OLY), stackedAccessory: tmp31(tmp6(tmp4[32]), { target: CONJURE_TARGET_USER, guilds: conjureEligibleGuilds, onChange: tmp15 }) };
  const tmp6Result = tmp6(tmp4[31]);
  intl5 = tmp3(tmp4[23]).intl;
  items4[3] = closure_9(tmp6Result, obj16);
  return tmp30(View, obj4);
};
