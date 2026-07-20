// Module ID: 9135
// Function ID: 71623
// Name: MemberVerificationModal
// Dependencies: []
// Exports: default

// Module 9135 (MemberVerificationModal)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ SCROLL_EVENT_TIMER_MS: closure_7, useBannerHeight: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]).createAnimatedComponent(arg1(dependencyMap[7]).Icon);
let obj1 = arg1(dependencyMap[8]);
let obj = { flex: { flex: 1 } };
obj = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
obj.flexLoading = obj;
obj1 = { flex: 1, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOWER };
obj.scrollContainer = obj1;
obj.closeButtonContainer = { <string:2423925279>: null, <string:2596769915>: null };
obj.closeIconContainer = {};
const importDefaultResult = importDefault(dependencyMap[6]);
obj.closeIconOverBanner = { position: "absolute", tintColor: importDefault(dependencyMap[9]).colors.WHITE };
const obj2 = { position: "absolute", tintColor: importDefault(dependencyMap[9]).colors.WHITE };
obj.closeIconAfterBanner = { position: "absolute", tintColor: importDefault(dependencyMap[9]).colors.TEXT_DEFAULT };
obj.headerSeparator = { "Null": true, "Null": null };
let closure_12 = obj1.createStyles(obj);
let closure_13 = { code: "function MemberVerificationModalTsx1({contentOffset:{y:y}}){const{scrollTop}=this.__closure;return scrollTop.set(y);}" };
let closure_14 = { code: "function MemberVerificationModalTsx2(){const{interpolate,scrollTop,bannerHeight,safeAreaTop,theme}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[1,theme==='dark'?1:0],'clamp')};}" };
let closure_15 = { code: "function MemberVerificationModalTsx3(){const{interpolate,scrollTop,bannerHeight,safeAreaTop}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[0,1],'clamp')};}" };
const obj3 = { position: "absolute", tintColor: importDefault(dependencyMap[9]).colors.TEXT_DEFAULT };
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationModal.tsx");

export default function MemberVerificationModal(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const onClose = guildId.onClose;
  const importDefault = onClose;
  let memo1;
  let callback;
  const tmp = callback4();
  const rect = importDefault(dependencyMap[10])();
  const top = rect.top;
  const dependencyMap = top;
  let obj = arg1(dependencyMap[6]);
  const sharedValue = obj.useSharedValue(0);
  const React = sharedValue;
  let obj1 = arg1(dependencyMap[6]);
  class A {
    constructor(arg0) {
      return closure_3.set(guildId.contentOffset.y);
    }
  }
  A.__closure = { scrollTop: sharedValue };
  A.__workletHash = 16447800091731;
  A.__initData = closure_13;
  const tmp4 = importDefault(dependencyMap[11])();
  const View = tmp4;
  const tmp5 = callback();
  let closure_5 = tmp5;
  let obj2 = arg1(dependencyMap[6]);
  class M {
    constructor() {
      obj = {};
      obj2 = guildId(top[6]);
      value = closure_3.get();
      items = [0.229];
      items[1] = closure_5 - top;
      num = 0;
      if ("dark" === closure_4) {
        num = 1;
      }
      items1 = [24573934974154670000000000000000000000000000000000000000000000000000000000000];
      items1[1] = num;
      obj.opacity = obj2.interpolate(value, items, items1, "clamp");
      return obj;
    }
  }
  obj = { interpolate: arg1(dependencyMap[6]).interpolate, scrollTop: sharedValue, bannerHeight: tmp5, safeAreaTop: top, theme: tmp4 };
  M.__closure = obj;
  M.__workletHash = 9776820170891;
  M.__initData = closure_14;
  const animatedStyle = obj2.useAnimatedStyle(M);
  let obj4 = arg1(dependencyMap[6]);
  const fn = function v() {
    const obj = {};
    const items = [0.229, tmp5 - top];
    obj.opacity = guildId(top[6]).interpolate(sharedValue.get(), items, [null, null], "clamp");
    return obj;
  };
  obj = { interpolate: arg1(dependencyMap[6]).interpolate, scrollTop: sharedValue, bannerHeight: tmp5, safeAreaTop: top };
  fn.__closure = obj;
  fn.__workletHash = 4275816745587;
  fn.__initData = closure_15;
  const animatedStyle1 = obj4.useAnimatedStyle(fn);
  let obj6 = arg1(dependencyMap[12]);
  const setInitialVerificationEffect = obj6.useSetInitialVerificationEffect(guildId);
  const tmp9 = importDefault(dependencyMap[13])(guildId);
  let obj7 = arg1(dependencyMap[14]);
  const items = [closure_6];
  const items1 = [guildId];
  const stateFromStores = obj7.useStateFromStores(items, () => stateFromStores.get(guildId), items1);
  closure_6 = stateFromStores;
  let formFields;
  if (null != stateFromStores) {
    formFields = stateFromStores.formFields;
  }
  const items2 = [formFields];
  let formFields1;
  const memo = React.useMemo(() => {
    let someResult;
    if (null != stateFromStores) {
      const formFields = stateFromStores.formFields;
      if (null != formFields) {
        someResult = formFields.some((field_type) => field_type.field_type !== callback(closure_2[15]).VerificationFormFieldTypes.TERMS);
      }
    }
    return null != someResult && someResult;
  }, items2);
  if (null != stateFromStores) {
    formFields1 = stateFromStores.formFields;
  }
  const items3 = [formFields1];
  memo1 = React.useMemo(() => {
    let formFields;
    if (null != stateFromStores) {
      formFields = stateFromStores.formFields;
    }
    if (null == formFields) {
      formFields = [];
    }
    const guildId = Object.values(guildId(top[15]).VerificationFormFieldTypes);
    return formFields.some((field_type) => !closure_0.includes(field_type.field_type));
  }, items3);
  callback = React.useRef(onClose);
  const effect = React.useEffect(() => {
    closure_8.current = onClose;
  });
  const items4 = [memo1];
  const effect1 = React.useEffect(() => {
    if (memo1) {
      onClose(top[16]).wait(() => {
        if (null != ref.current) {
          ref.current();
        }
        const result = callback(closure_2[17]).openMemberVerificationUpdateAlert();
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
            return closure_3.set(guildId.contentOffset.y);
          }
        }
        tmp25[0] = callback2(importDefault(dependencyMap[20]), obj4);
        const obj5 = { style: tmp.headerSeparator };
        tmp25[1] = callback2(importDefault(dependencyMap[21]), obj5);
        obj6 = {
          guild: tmp9,
          onSuccess(application_status) {
                  const tmp = null != tmp5.getSelfMember(guildId);
                  if (!tmp2) {
                    const result = guildId(top[17]).openMemberVerificationPendingAlert(guildId);
                    const obj = guildId(top[17]);
                    const tmp5 = guildId;
                  }
                },
          onClose
        };
        tmp25[2] = callback2(importDefault(dependencyMap[22]), obj6);
        obj2.children = tmp25;
        const items5 = [callback3(importDefault(dependencyMap[6]).ScrollView, obj2), ];
        class M {
          constructor() {
            obj = {};
            obj2 = guildId(top[6]);
            value = closure_3.get();
            items = [0.229];
            items[1] = closure_5 - top;
            num = 0;
            if ("dark" === closure_4) {
              num = 1;
            }
            items1 = [24573934974154670000000000000000000000000000000000000000000000000000000000000];
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
        const intl = arg1(dependencyMap[24]).intl;
        obj8.accessibilityLabel = intl.string(arg1(dependencyMap[24]).t.cpT0Cq);
        obj8.style = tmp.closeIconContainer;
        obj8.onPress = function onPress() {
          let tmp;
          if (null != onClose) {
            tmp = onClose();
          }
          return tmp;
        };
        const obj9 = { source: importDefault(dependencyMap[25]) };
        const items7 = [tmp.closeIconOverBanner, animatedStyle];
        obj9.style = items7;
        const items8 = [callback2(closure_11, obj9), ];
        const obj10 = { source: importDefault(dependencyMap[25]) };
        const items9 = [tmp.closeIconAfterBanner, animatedStyle1];
        obj10.style = items9;
        items8[1] = callback2(closure_11, obj10);
        obj8.children = items8;
        tmp27.children = callback3(arg1(dependencyMap[23]).PressableOpacity, obj8);
        items5[1] = callback2(View, tmp27);
        obj1.children = items5;
        let tmp30 = callback3(importDefault(dependencyMap[19]), obj1);
        const tmp22 = importDefault(dependencyMap[19]);
      }
      return tmp30;
    }
  }
  const animatedScrollHandler = obj1.useAnimatedScrollHandler(A);
  tmp30 = callback2(View, { style: tmp.flexLoading, children: callback2(arg1(dependencyMap[18]).ActivityIndicator, {}) });
};
