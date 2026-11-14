// Module ID: 15762
// Function ID: 15763
// Name: UserProfileStreamVolumeScrollTarget
// Dependencies: [19, 17, 5307, 15763, 21, 8603, 504, 5570, 1655, 1708, 1113, 9567, 2]
// Exports: default

// Module 15762 (UserProfileStreamVolumeScrollTarget)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import StreamVolumeMovedStore_mod from "StreamVolumeMovedStore" /* 15763 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let react = react_mod;
const View = react_native.View;
let StreamVolumeMovedStore = StreamVolumeMovedStore_mod;
({ clearScrollToStreamVolume: metroRequire, hideStreamVolumeCoachmark: metroImportDefault, showStreamVolumeCoachmark: metroImportAll } = StreamVolumeMovedStore);
StreamVolumeMovedStore = StreamVolumeMovedStore_mod;
const jsx = Fragment.jsx;
let closure_11 = { code: "(function UserProfileStreamVolumeScrollTargetTsx1(){let[animatedScrollableState,SCROLLABLE_STATE]=this.__closure;return animatedScrollableState==null||animatedScrollableState.get()===SCROLLABLE_STATE.UNLOCKED;})" };
let closure_12 = { code: "(function UserProfileStreamVolumeScrollTargetTsx2(isUnlocked,wasUnlocked){let[scheduleOnRN,scrollToTargetIfReady]=this.__closure;if(isUnlocked&&wasUnlocked!==true){scheduleOnRN(scrollToTargetIfReady);}})" };
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileStreamVolumeScrollTarget.tsx");

export default function UserProfileStreamVolumeScrollTarget(userId) {
  let closure_1;
  let closure_3;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp8;
  let tmp9;
  userId = userId.userId;
  importDefault = undefined;
  react = undefined;
  let state;
  let ref;
  function scrollToTargetIfReady() {
    let innerViewRef;
    if (ref.current) {
      let obj = prop;
      if (null == prop) {
        tmp.current = false;
        let current;
        if (innerViewRef != null) {
          current = innerViewRef.current;
        }
        innerViewRef = undefined;
        if (current != null) {
          innerViewRef = current.getInnerViewRef();
        }
        let nativeScrollRef;
        if (current != null) {
          nativeScrollRef = current.getNativeScrollRef();
        }
        const tmp9 = null != current && null != innerViewRef && null != nativeScrollRef;
        if (tmp9) {
          nativeScrollRef.measure((arg0, arg1, arg2, arg3) => {
            let closure_0 = arg3;
            current = ref.current;
            if (current != null) {
              current.measureLayout(innerViewRef, (arg0, arg1, arg2, arg3) => {
                const obj = { y: Math.max(0, arg1 + arg3 / 2 - closure_0 / 2), animated: !closure_4 };
                current.scrollTo(obj);
                metroImportAll(userId);
              });
            }
          });
        }
      } else {
        const value = obj.get();
      }
    }
  }
  let obj = react;
  let tmp = ref;
  const children = userId.children;
  importDefault = react.useContext(require("react"));
  ref = react.useRef(null);
  react = StreamVolumeMovedStore.useState((scrollToStreamVolumeUserId) => scrollToStreamVolumeUserId.scrollToStreamVolumeUserId === userId);
  const items = [state];
  const obj2 = userId(ref[6]);
  let closure_4 = obj2.useStateFromStores(items, () => state.useReducedMotion);
  state = StreamVolumeMovedStore.useState((coachmarkUserId) => coachmarkUserId.coachmarkUserId === userId);
  ref = react.useRef(false);
  const obj3 = userId(ref[7]);
  const bottomSheetInternal = obj3.useBottomSheetInternal(true);
  let prop;
  if (bottomSheetInternal != null) {
    prop = bottomSheetInternal.animatedScrollableState;
  }
  const items1 = [closure_11, prop, ];
  const useAnimatedReaction = tmp3(tmp[8]).useAnimatedReaction;
  userId(tmp[8]);
  items1[2] = userId(tmp[7]).SCROLLABLE_STATE;
  let c0;
  let c1;
  [tmp8, tmp9, tmp10] = items1;
  class UserProfileStreamVolumeScrollTargetTsx1 {
    constructor() {
      let tmp = null == c0;
      const obj = c0;
      if (!tmp) {
        tmp = obj.get() === _undefined.UNLOCKED;
      }
      return tmp;
    }
  }
  const items2 = [tmp9, tmp10];
  UserProfileStreamVolumeScrollTargetTsx1.__closure = items2;
  UserProfileStreamVolumeScrollTargetTsx1.__workletHash = 1807770366217;
  UserProfileStreamVolumeScrollTargetTsx1.__initData = tmp8;
  const items3 = [closure_12, tmp3(tmp[9]).scheduleOnRN, scrollToTargetIfReady];
  c0 = undefined;
  c1 = undefined;
  [tmp11, tmp12, tmp13] = items3;
  class UserProfileStreamVolumeScrollTargetTsx2 {
    constructor(arg0, arg1) {
      const tmp = arg0 && true !== arg1;
      if (tmp) {
        _undefined(c1);
      }
    }
  }
  const items4 = [tmp12, tmp13];
  UserProfileStreamVolumeScrollTargetTsx2.__closure = items4;
  UserProfileStreamVolumeScrollTargetTsx2.__workletHash = 6263218548509;
  UserProfileStreamVolumeScrollTargetTsx2.__initData = tmp11;
  const animatedReaction = useAnimatedReaction(UserProfileStreamVolumeScrollTargetTsx1, UserProfileStreamVolumeScrollTargetTsx2);
  const effect = obj.useEffect(() => () => prop(), []);
  const items5 = [state];
  const memo = obj.useMemo(() => {
    let intl;
    let intl2;
    const obj = { title: intl.string(intl3.t["/fNrht"]), description: intl2.string(intl3.t["WQF2/t"]), position: "top", visible: state, onDismiss: metroImportDefault };
    intl = intl3.intl;
    intl2 = intl3.intl;
    return obj;
  }, items5);
  const tmp3Result2 = userId(tmp[11]);
  const coachmark = tmp3Result2.useCoachmark(ref, memo);
  return <closure_4 ref={ref} collapsable={false} onLayout={function handleLayout() {
    const tmp = closure_3;
    if (tmp) {
      metroRequire();
      ref.current = true;
      scrollToTargetIfReady();
    }
  }}>{children}</closure_4>;
};
