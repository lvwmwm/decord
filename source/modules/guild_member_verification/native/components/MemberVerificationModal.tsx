// Module ID: 9147
// Function ID: 71700
// Name: MemberVerificationModal
// Dependencies: [31, 27, 1917, 5082, 9148, 33, 3991, 1273, 4130, 689, 1557, 4066, 9149, 9151, 566, 3950, 686, 9152, 5586, 5587, 9169, 9174, 9175, 4660, 1212, 7640, 2]
// Exports: default

// Module 9147 (MemberVerificationModal)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import BANNER_RATIO_HEIGHT_16_9 from "BANNER_RATIO_HEIGHT_16_9";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";

let closure_10;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ SCROLL_EVENT_TIMER_MS: closure_7, useBannerHeight: closure_8 } = BANNER_RATIO_HEIGHT_16_9);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = require("module_3991").createAnimatedComponent(require("Button").Icon);
let obj = { flex: { flex: 1 } };
obj = { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.flexLoading = obj;
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
obj.scrollContainer = _createForOfIteratorHelperLoose;
obj.closeButtonContainer = { position: "absolute", right: 0 };
obj.closeIconContainer = { position: "relative", marginTop: 10, marginRight: 20, width: 24, height: 24 };
obj.closeIconOverBanner = { position: "absolute", tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
let obj2 = { position: "absolute", tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
obj.closeIconAfterBanner = { position: "absolute", tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
obj.headerSeparator = { marginHorizontal: 16, marginVertical: 12 };
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_13 = { code: "function MemberVerificationModalTsx1({contentOffset:{y:y}}){const{scrollTop}=this.__closure;return scrollTop.set(y);}" };
let closure_14 = { code: "function MemberVerificationModalTsx2(){const{interpolate,scrollTop,bannerHeight,safeAreaTop,theme}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[1,theme==='dark'?1:0],'clamp')};}" };
let closure_15 = { code: "function MemberVerificationModalTsx3(){const{interpolate,scrollTop,bannerHeight,safeAreaTop}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[0,1],'clamp')};}" };
let obj3 = { position: "absolute", tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationModal.tsx");

export default function MemberVerificationModal(guildId) {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  let memo1;
  let callback;
  let tmp = callback4();
  const rect = onClose(top[10])();
  top = rect.top;
  let obj = guildId(top[6]);
  const sharedValue = obj.useSharedValue(0);
  let obj1 = guildId(top[6]);
  class A {
    constructor(arg0) {
      return result.set(guildId.contentOffset.y);
    }
  }
  A.__closure = { scrollTop: sharedValue };
  A.__workletHash = 16447800091731;
  A.__initData = closure_13;
  const tmp4 = onClose(top[11])();
  const View = tmp4;
  let tmp5 = callback();
  let _isNativeReflectConstruct = tmp5;
  let obj2 = guildId(top[6]);
  class M {
    constructor() {
      obj = {};
      obj2 = guildId(top[6]);
      value = result.get();
      items = [0];
      items[1] = _isNativeReflectConstruct - top;
      num = 0;
      if ("dark" === closure_4) {
        num = 1;
      }
      items1 = [1];
      items1[1] = num;
      obj.opacity = obj2.interpolate(value, items, items1, "clamp");
      return obj;
    }
  }
  obj = { interpolate: guildId(top[6]).interpolate, scrollTop: sharedValue, bannerHeight: tmp5, safeAreaTop: top, theme: tmp4 };
  M.__closure = obj;
  M.__workletHash = 9776820170891;
  M.__initData = closure_14;
  const animatedStyle = obj2.useAnimatedStyle(M);
  let obj4 = guildId(top[6]);
  const fn = function v() {
    const obj = {};
    const items = [0, _isNativeReflectConstruct - top];
    obj.opacity = guildId(top[6]).interpolate(sharedValue.get(), items, [0, 1], "clamp");
    return obj;
  };
  obj = { interpolate: guildId(top[6]).interpolate, scrollTop: sharedValue, bannerHeight: tmp5, safeAreaTop: top };
  fn.__closure = obj;
  fn.__workletHash = 4275816745587;
  fn.__initData = closure_15;
  const animatedStyle1 = obj4.useAnimatedStyle(fn);
  let obj6 = guildId(top[12]);
  const setInitialVerificationEffect = obj6.useSetInitialVerificationEffect(guildId);
  const tmp9 = onClose(top[13])(guildId);
  let obj7 = guildId(top[14]);
  let items = [stateFromStores];
  let items1 = [guildId];
  stateFromStores = obj7.useStateFromStores(items, () => stateFromStores.get(guildId), items1);
  let formFields;
  if (null != stateFromStores) {
    formFields = stateFromStores.formFields;
  }
  const items2 = [formFields];
  let formFields1;
  const memo = sharedValue.useMemo(() => {
    let someResult;
    if (null != stateFromStores) {
      const formFields = stateFromStores.formFields;
      if (null != formFields) {
        someResult = formFields.some((field_type) => field_type.field_type !== guildId(top[15]).VerificationFormFieldTypes.TERMS);
      }
    }
    return null != someResult && someResult;
  }, items2);
  if (null != stateFromStores) {
    formFields1 = stateFromStores.formFields;
  }
  const items3 = [formFields1];
  memo1 = sharedValue.useMemo(() => {
    let formFields;
    if (null != stateFromStores) {
      formFields = stateFromStores.formFields;
    }
    if (null == formFields) {
      formFields = [];
    }
    let closure_0 = Object.values(guildId(top[15]).VerificationFormFieldTypes);
    return formFields.some((field_type) => !closure_0.includes(field_type.field_type));
  }, items3);
  callback = sharedValue.useRef(onClose);
  const effect = sharedValue.useEffect(() => {
    closure_8.current = onClose;
  });
  const items4 = [memo1];
  const effect1 = sharedValue.useEffect(() => {
    if (memo1) {
      onClose(top[16]).wait(() => {
        if (null != outer1_8.current) {
          outer1_8.current();
        }
        const result = guildId(top[17]).openMemberVerificationUpdateAlert();
      });
      const obj = onClose(top[16]);
    }
  }, items4);
  if (null != tmp9) {
    if (null != setInitialVerificationEffect) {
      if (!memo1) {
        obj1 = { style: tmp.flex };
        obj2 = { style: tmp.scrollContainer };
        const obj3 = { paddingBottom: rect.bottom };
        obj2.contentContainerStyle = obj3;
        obj2.scrollEventThrottle = memo1;
        obj2.keyboardShouldPersistTaps = "handled";
        obj2.onScroll = animatedScrollHandler;
        obj4 = { guild: tmp9, scrollTop: sharedValue, hasManualFormFields: memo };
        class A {
          constructor(arg0) {
            return result.set(guildId.contentOffset.y);
          }
        }
        tmp25[0] = callback2(onClose(top[20]), obj4);
        const obj5 = { style: tmp.headerSeparator };
        tmp25[1] = callback2(onClose(top[21]), obj5);
        obj6 = {
          guild: tmp9,
          onSuccess(application_status) {
                  const tmp = null != tmp5.getSelfMember(guildId);
                  if (!tmp2) {
                    const result = guildId(top[17]).openMemberVerificationPendingAlert(guildId);
                    const obj = guildId(top[17]);
                    tmp5 = guildId;
                  }
                },
          onClose
        };
        tmp25[2] = callback2(onClose(top[22]), obj6);
        obj2.children = tmp25;
        const items5 = [callback3(onClose(top[6]).ScrollView, obj2), ];
        class M {
          constructor() {
            obj = {};
            obj2 = guildId(top[6]);
            value = result.get();
            items = [0];
            items[1] = _isNativeReflectConstruct - top;
            num = 0;
            if ("dark" === closure_4) {
              num = 1;
            }
            items1 = [1];
            items1[1] = num;
            obj.opacity = obj2.interpolate(value, items, items1, "clamp");
            return obj;
          }
        }
        const items6 = [tmp.closeButtonContainer, ];
        obj7 = { top };
        items6[1] = obj7;
        tmp27.style = items6;
        const obj8 = { accessibilityRole: "button" };
        const intl = guildId(top[24]).intl;
        obj8.accessibilityLabel = intl.string(guildId(top[24]).t.cpT0Cq);
        obj8.style = tmp.closeIconContainer;
        obj8.onPress = function onPress() {
          let tmp;
          if (null != onClose) {
            tmp = onClose();
          }
          return tmp;
        };
        const obj9 = { source: onClose(top[25]) };
        const items7 = [tmp.closeIconOverBanner, animatedStyle];
        obj9.style = items7;
        const items8 = [callback2(closure_11, obj9), ];
        const obj10 = { source: onClose(top[25]) };
        const items9 = [tmp.closeIconAfterBanner, animatedStyle1];
        obj10.style = items9;
        items8[1] = callback2(closure_11, obj10);
        obj8.children = items8;
        tmp27.children = callback3(guildId(top[23]).PressableOpacity, obj8);
        items5[1] = callback2(View, tmp27);
        obj1.children = items5;
        let tmp30 = callback3(onClose(top[19]), obj1);
        const tmp22 = onClose(top[19]);
      }
      return tmp30;
    }
  }
  animatedScrollHandler = obj1.useAnimatedScrollHandler(A);
  tmp30 = callback2(View, { style: tmp.flexLoading, children: callback2(guildId(top[18]).ActivityIndicator, {}) });
};
