// Module ID: 5883
// Function ID: 5884
// Name: MemberVerificationModal
// Dependencies: [19, 17, 2108, 5884, 5885, 21, 4566, 1177, 4836, 576, 1613, 4767, 4685, 5886, 5888, 504, 4658, 573, 5839, 5889, 5890, 5894, 5907, 5908, 5435, 1115, 6510, 2]
// Exports: default

// Module 5883 (MemberVerificationModal)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4566 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4658 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 5884 */;
import MemberVerificationFormConstants from "MemberVerificationFormConstants" /* 5885 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp3;
const MemberVerificationAlertActionCreators = tmp3(5839);
const View = react_native.View;
({ SCROLL_EVENT_TIMER_MS: metroImportDefault, useBannerHeight: metroImportAll } = MemberVerificationFormConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = ReanimatedRexport.createAnimatedComponent(native.Icon);
let createStyles = createStyles_mod;
let obj = { flex: { flex: 1 }, flexLoading: obj2, scrollContainer: obj3, closeButtonContainer: { position: "absolute", right: 0 }, closeIconContainer: { position: "relative", marginTop: 10, marginRight: 20, width: 24, height: 24 }, closeIconOverBanner: obj4, closeIconAfterBanner: obj5, headerSeparator: { marginHorizontal: 16, marginVertical: 12 } };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj4 = { position: "absolute", tintColor: nativeDefault.colors.WHITE };
obj5 = { position: "absolute", tintColor: nativeDefault.colors.TEXT_DEFAULT };
let closure_12 = createStyles(obj);
const __initData = { code: "function MemberVerificationModalTsx1({contentOffset:{y:y}}){const{scrollTop}=this.__closure;return scrollTop.set(y);}" };
const __initData2 = { code: "function MemberVerificationModalTsx2(){const{interpolate,scrollTop,bannerHeight,safeAreaTop,isDarkTheme}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[1,isDarkTheme?1:0],'clamp')};}" };
const __initData3 = { code: "function MemberVerificationModalTsx3(){const{interpolate,scrollTop,bannerHeight,safeAreaTop}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[0,1],'clamp')};}" };
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationModal.tsx");

export default function MemberVerificationModal(guildId) {
  let PressableOpacity;
  let intl;
  let items10;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj13;
  let obj19;
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  let top;
  let c4;
  let closure_5;
  let stateFromStores;
  let memo2;
  let closure_8;
  let tmp = closure_12();
  let tmp2 = onClose;
  let tmp3 = top;
  const rect = onClose(top[10])();
  top = rect.top;
  const bottom = rect.bottom;
  let obj = guildId(top[6]);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = guildId(top[6]);
  class A {
    constructor(contentOffset) {
      return sharedValue.set(contentOffset.contentOffset.y);
    }
  }
  A.__closure = { scrollTop: sharedValue };
  A.__workletHash = 16447800091731;
  A.__initData = __initData;
  const animatedScrollHandler = obj2.useAnimatedScrollHandler(A);
  const tmp7 = onClose(top[11])();
  const obj3 = guildId(top[12]);
  const isThemeDarkResult = obj3.isThemeDark(tmp7);
  c4 = isThemeDarkResult;
  const tmp9 = closure_8();
  closure_5 = tmp9;
  const obj4 = guildId(top[6]);
  class M {
    constructor() {
      let items1;
      const interpolate = ReanimatedRexport2.interpolate;
      ReanimatedRexport2;
      const value = sharedValue.get();
      const items = [0, closure_5 - top];
      let num = 0;
      if (c4) {
        num = 1;
      }
      const obj = { opacity: interpolate(value, items, items1, "clamp") };
      items1 = [1, num];
      return obj;
    }
  }
  M.__closure = { interpolate: guildId(top[6]).interpolate, scrollTop: sharedValue, bannerHeight: tmp9, safeAreaTop: top, isDarkTheme: isThemeDarkResult };
  M.__workletHash = 14739192562122;
  M.__initData = __initData2;
  ({ interpolate: guildId(top[6]).interpolate, scrollTop: sharedValue, bannerHeight: tmp9, safeAreaTop: top, isDarkTheme: isThemeDarkResult });
  const animatedStyle = obj4.useAnimatedStyle(M);
  const obj6 = guildId(top[6]);
  class C {
    constructor() {
      let items;
      let obj2;
      const obj = { opacity: obj2.interpolate(sharedValue.get(), items, [0, 1], "clamp") };
      items = [0, closure_5 - top];
      obj2 = ReanimatedRexport2;
      return obj;
    }
  }
  C.__closure = { interpolate: guildId(top[6]).interpolate, scrollTop: sharedValue, bannerHeight: tmp9, safeAreaTop: top };
  C.__workletHash = 4275816745587;
  C.__initData = __initData3;
  ({ interpolate: guildId(top[6]).interpolate, scrollTop: sharedValue, bannerHeight: tmp9, safeAreaTop: top });
  const animatedStyle1 = obj6.useAnimatedStyle(C);
  const obj8 = guildId(top[13]);
  const setInitialVerificationEffect = obj8.useSetInitialVerificationEffect(guildId);
  const tmp13 = onClose(top[14])(guildId);
  let items = [stateFromStores];
  let items1 = [guildId];
  const obj9 = guildId(top[15]);
  stateFromStores = obj9.useStateFromStores(items, () => MemberVerificationFormStore.get(guildId), items1);
  let formFields;
  const useMemo = sharedValue.useMemo;
  if (stateFromStores != null) {
    formFields = stateFromStores.formFields;
  }
  const items2 = [formFields];
  let formFields1;
  const memo = useMemo(() => {
    let flag;
    if (stateFromStores != null) {
      const formFields = stateFromStores.formFields;
      if (formFields != null) {
        flag = formFields.some((field_type) => field_type.field_type !== guildId(top[16]).VerificationFormFieldTypes.TERMS);
      }
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }, items2);
  const useMemo2 = obj10.useMemo;
  if (stateFromStores != null) {
    formFields1 = stateFromStores.formFields;
  }
  const items3 = [formFields1];
  memo2 = useMemo2(() => {
    let formFields;
    if (stateFromStores != null) {
      formFields = stateFromStores.formFields;
    }
    if (formFields == null) {
      formFields = [];
    }
    let closure_0 = Object.values(MemberVerificationTypes.VerificationFormFieldTypes);
    return formFields.some((field_type) => !closure_0.includes(field_type.field_type));
  }, items3);
  closure_8 = obj10.useRef(onClose);
  const effect = obj10.useEffect(() => {
    closure_8.current = onClose;
  });
  const items4 = [memo2];
  const effect1 = obj10.useEffect(() => {
    let ref;
    const tmp = memo2;
    if (tmp) {
      let obj = DispatcherDefault;
      obj.wait(() => {
        const current = ref.current;
        if (current != null) {
          current();
        }
        const obj = guildId(top[18]);
        const result = obj.openMemberVerificationUpdateAlert();
      });
    }
  }, items4);
  if (null != tmp13) {
    if (null != setInitialVerificationEffect) {
      let tmp27;
      if (!memo2) {
        const obj12 = { style: tmp.scrollContainer, contentContainerStyle: obj13, scrollEventThrottle: memo2, keyboardShouldPersistTaps: "handled", onScroll: animatedScrollHandler, children: items5 };
        const obj11 = { style: tmp.flex, children: items6 };
        obj13 = { paddingBottom: bottom };
        const tmp2Result = tmp2(tmp3[20]);
        const ScrollView = tmp2(tmp3[6]).ScrollView;
        const obj14 = { guild: tmp13, scrollTop: sharedValue, hasManualFormFields: memo };
        items5 = [closure_9(tmp2(tmp3[21]), obj14), , ];
        const obj15 = { style: tmp.headerSeparator };
        items5[1] = closure_9(tmp2(tmp3[22]), obj15);
        class A {
          constructor(contentOffset) {
            return sharedValue.set(contentOffset.contentOffset.y);
          }
        }
        items6 = [closure_10(ScrollView, obj12), ];
        const obj17 = { style: items7, children: closure_10(PressableOpacity, obj19) };
        items7 = [tmp.closeButtonContainer, ];
        const obj18 = { top };
        items7[1] = obj18;
        obj19 = {
          accessibilityRole: "button",
          accessibilityLabel: intl.string(guildId(tmp3[25]).t.cpT0Cq),
          style: null,
          onPress() {
                  let tmp;
                  if (onClose != null) {
                    tmp = onClose();
                  }
                  return tmp;
                },
          children: items9
        };
        PressableOpacity = tmp4(tmp3[24]).PressableOpacity;
        intl = tmp4(tmp3[25]).intl;
        class M {
          constructor() {
            let items1;
            const interpolate = ReanimatedRexport2.interpolate;
            ReanimatedRexport2;
            const value = sharedValue.get();
            const items = [0, closure_5 - top];
            let num = 0;
            if (c4) {
              num = 1;
            }
            const obj = { opacity: interpolate(value, items, items1, "clamp") };
            items1 = [1, num];
            return obj;
          }
        }
        const obj20 = { source: tmp2(tmp3[26]), style: items8 };
        items8 = [tmp.closeIconOverBanner, animatedStyle];
        items9 = [closure_9(closure_11, obj20), ];
        const obj21 = { source: tmp2(tmp3[26]), style: items10 };
        items10 = [tmp.closeIconAfterBanner, ];
        class C {
          constructor() {
            let items;
            let obj2;
            const obj = { opacity: obj2.interpolate(sharedValue.get(), items, [0, 1], "clamp") };
            items = [0, closure_5 - top];
            obj2 = ReanimatedRexport2;
            return obj;
          }
        }
        items9[1] = closure_9(closure_11, obj21);
        items6[1] = closure_9(c4, obj17);
        tmp27 = closure_10(tmp2Result, obj11);
      }
      return tmp27;
    }
  }
  const obj22 = { style: tmp.flexLoading, children: closure_9(guildId(tmp3[19]).ActivityIndicator, {}) };
  tmp27 = closure_9(c4, obj22);
};
