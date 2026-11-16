// Module ID: 7035
// Function ID: 7036
// Name: MemberVerificationModal
// Dependencies: [19, 17, 5082, 7036, 7037, 21, 1652, 1187, 5170, 575, 1627, 5401, 5177, 7038, 7040, 504, 5206, 6996, 7041, 7048, 7049, 7052, 7062, 7063, 7076, 1113, 7353, 2]
// Exports: default

// Module 7035 (MemberVerificationModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 5206 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 6996 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 5082 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 7036 */;
import MemberVerificationFormConstants from "MemberVerificationFormConstants" /* 7037 */;
import Fragment from "Fragment" /* 21 */;
import module_1652 from "module_1652" /* 1652 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let SHEET_RADIUS;
let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ SCROLL_EVENT_TIMER_MS: metroImportDefault, SHEET_RADIUS, useBannerHeight: metroImportAll } = MemberVerificationFormConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = module_1652.createAnimatedComponent(native.Icon);
let createStyles = createStyles_mod;
let obj = { flex: { flex: 1 }, flexLoading: { flex: 1, alignItems: "center", justifyContent: "center" }, scrollContent: { flexGrow: 1 }, sheet: obj2, closeButtonContainer: { position: "absolute", right: 0 }, closeIconContainer: { position: "relative", marginTop: 10, marginRight: 20, width: 24, height: 24 }, closeIconOverBanner: obj3, closeIconAfterBanner: obj4, headerSeparator: { marginHorizontal: 16, marginVertical: 12 } };
obj2 = { flexGrow: 1, marginTop: -SHEET_RADIUS, borderTopLeftRadius: SHEET_RADIUS, borderTopRightRadius: SHEET_RADIUS, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { position: "absolute", tintColor: nativeDefault.colors.WHITE };
obj4 = { position: "absolute", tintColor: nativeDefault.colors.TEXT_DEFAULT };
let closure_12 = createStyles(obj);
let closure_13 = { code: "(function MemberVerificationModalTsx1({contentOffset:{y:y}}){let[scrollTop]=this.__closure;return scrollTop.set(y);})" };
let closure_14 = { code: "(function MemberVerificationModalTsx2(){let[interpolate,scrollTop,bannerHeight,safeAreaTop,isDarkTheme]=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[1,isDarkTheme?1:0],'clamp')};})" };
let closure_15 = { code: "(function MemberVerificationModalTsx3(){let[interpolate,scrollTop,bannerHeight,safeAreaTop]=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[0,1],'clamp')};})" };
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationModal.tsx");

export default function MemberVerificationModal(guildId) {
  let PressableOpacity;
  let intl;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let items20;
  let obj16;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp6;
  let tmp7;
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  let stateFromStores;
  let memo2;
  let ref;
  let tmp = closure_12();
  let tmp2 = onClose;
  let tmp3 = stateFromStores;
  const rect = onClose(stateFromStores[10])();
  const top = rect.top;
  const bottom = rect.bottom;
  let obj = guildId(stateFromStores[6]);
  const sharedValue = obj.useSharedValue(0);
  let items = [closure_13, sharedValue];
  let c0;
  [tmp6, tmp7] = items;
  const obj2 = guildId(stateFromStores[6]);
  class MemberVerificationModalTsx1 {
    constructor(contentOffset) {
      return _undefined.set(contentOffset.contentOffset.y);
    }
  }
  let items1 = [tmp7];
  MemberVerificationModalTsx1.__closure = items1;
  MemberVerificationModalTsx1.__workletHash = 7671790778026;
  MemberVerificationModalTsx1.__initData = tmp6;
  const animatedScrollHandler = obj2.useAnimatedScrollHandler(MemberVerificationModalTsx1);
  const tmp9 = tmp2(tmp3[11])();
  const tmp4Result = guildId(tmp3[12]);
  const isThemeDarkResult = tmp4Result.isThemeDark(tmp9);
  const tmp11 = closure_8();
  const items2 = [closure_14, , , , , ];
  const useAnimatedStyle = tmp4(tmp3[6]).useAnimatedStyle;
  guildId(tmp3[6]);
  items2[1] = guildId(tmp3[6]).interpolate;
  items2[2] = sharedValue;
  items2[3] = tmp11;
  items2[4] = top;
  items2[5] = isThemeDarkResult;
  c0 = undefined;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items2;
  class MemberVerificationModalTsx2 {
    constructor() {
      let items1;
      const value = _undefined.get();
      const items = [0, c2 - c3];
      let num = 0;
      const tmp = c0;
      if (c4) {
        num = 1;
      }
      const obj = { opacity: tmp(value, items, items1, "clamp") };
      items1 = [1, num];
      return obj;
    }
  }
  const items3 = [tmp14, tmp15, tmp16, tmp17, tmp18];
  MemberVerificationModalTsx2.__closure = items3;
  MemberVerificationModalTsx2.__workletHash = 1795520586643;
  MemberVerificationModalTsx2.__initData = tmp13;
  const animatedStyle = useAnimatedStyle(MemberVerificationModalTsx2);
  const items4 = [closure_15, , , , ];
  const useAnimatedStyle2 = tmp4(tmp3[6]).useAnimatedStyle;
  guildId(tmp3[6]);
  items4[1] = guildId(tmp3[6]).interpolate;
  items4[2] = sharedValue;
  items4[3] = tmp11;
  items4[4] = top;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp21, tmp22, tmp23, tmp24, tmp25] = items4;
  class MemberVerificationModalTsx3 {
    constructor() {
      let items;
      const obj = { opacity: _undefined(_undefined2.get(), items, [0, 1], "clamp") };
      items = [0, c2 - c3];
      return obj;
    }
  }
  const items5 = [tmp22, tmp23, tmp24, tmp25];
  MemberVerificationModalTsx3.__closure = items5;
  MemberVerificationModalTsx3.__workletHash = 11491807066890;
  MemberVerificationModalTsx3.__initData = tmp21;
  const animatedStyle2 = useAnimatedStyle2(MemberVerificationModalTsx3);
  const tmp4Result7 = guildId(tmp3[13]);
  const setInitialVerificationEffect = tmp4Result7.useSetInitialVerificationEffect(guildId);
  const tmp28 = tmp2(tmp3[14])(guildId);
  const items6 = [MemberVerificationFormStore];
  const items7 = [guildId];
  const tmp4Result8 = guildId(tmp3[15]);
  stateFromStores = tmp4Result8.useStateFromStores(items6, () => MemberVerificationFormStore.get(guildId), items7);
  let formFields;
  const useMemo = memo2.useMemo;
  if (stateFromStores != null) {
    formFields = stateFromStores.formFields;
  }
  const items8 = [formFields];
  let formFields1;
  const memo = useMemo(() => {
    let flag;
    if (stateFromStores != null) {
      const formFields = stateFromStores.formFields;
      if (formFields != null) {
        flag = formFields.some((field_type) => field_type.field_type !== guildId(stateFromStores[16]).VerificationFormFieldTypes.TERMS);
      }
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }, items8);
  const useMemo2 = obj6.useMemo;
  if (stateFromStores != null) {
    formFields1 = stateFromStores.formFields;
  }
  const items9 = [formFields1];
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
  }, items9);
  ref = obj6.useRef(onClose);
  const effect = obj6.useEffect(() => {
    ref.current = onClose;
  });
  const items10 = [memo2];
  const effect1 = obj6.useEffect(() => {
    const tmp = memo2;
    if (tmp) {
      const current = ref.current;
      if (current != null) {
        current();
      }
      const obj = MemberVerificationAlertActionCreators;
      const result = obj.openMemberVerificationUpdateAlert();
    }
  }, items10);
  if (null != tmp28) {
    if (null != setInitialVerificationEffect) {
      let obj3;
      if (!memo2) {
        obj3 = { style: tmp.flex, children: items11 };
        items11 = [closure_9(tmp2(tmp3[18]), {}), ];
        const obj4 = { style: tmp.flex, children: items15 };
        const obj5 = { style: null, contentContainerStyle: null, scrollEventThrottle, keyboardShouldPersistTaps: "handled", onScroll: animatedScrollHandler, children: items12 };
        ({ flex: obj9.style, scrollContent: obj9.contentContainerStyle } = tmp);
        const tmp2Result = tmp2(tmp3[20]);
        const ScrollView = tmp2(tmp3[6]).ScrollView;
        const obj7 = { guild: tmp28, scrollTop: sharedValue };
        items12 = [closure_9(tmp4(tmp3[21]).MemberVerificationGuildBanner, obj7), ];
        const obj8 = { style: items13, children: items14 };
        items13 = [tmp.sheet, ];
        const obj10 = { paddingBottom: bottom };
        items13[1] = obj10;
        const obj11 = { guild: null, scrollTop: sharedValue, hasManualFormFields: memo };
        class MemberVerificationModalTsx1 {
          constructor(contentOffset) {
            return _undefined.set(contentOffset.contentOffset.y);
          }
        }
        items14 = [closure_9(tmp2(tmp3[21]), obj11), , ];
        const obj12 = { style: tmp.headerSeparator };
        items14[1] = closure_9(tmp2(tmp3[22]), obj12);
        const obj13 = {
          guild: tmp28,
          onSuccess: function handleSuccess(application_status) {
                  const tmp2 = null != GuildMemberStore.getSelfMember(guildId);
                  const tmp = guildId;
                  const tmp5 = application_status.application_status !== MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED || tmp2;
                  if (!tmp5) {
                    const tmp3Result = MemberVerificationAlertActionCreators;
                    const result = tmp3Result.openMemberVerificationPendingAlert(tmp);
                  }
                },
          onClose
        };
        items14[2] = closure_9(tmp2(tmp3[23]), obj13);
        items12[1] = closure_10(ref, obj8);
        items15 = [closure_10(ScrollView, obj5), ];
        const obj14 = { style: items16, children: closure_10(PressableOpacity, obj16) };
        items16 = [tmp.closeButtonContainer, ];
        const obj15 = { top };
        items16[1] = obj15;
        obj16 = {
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
          children: items18
        };
        PressableOpacity = tmp4(tmp3[24]).PressableOpacity;
        intl = tmp4(tmp3[25]).intl;
        class MemberVerificationModalTsx2 {
          constructor() {
            let items1;
            const value = _undefined.get();
            const items = [0, c2 - c3];
            let num = 0;
            const tmp = c0;
            if (c4) {
              num = 1;
            }
            const obj = { opacity: tmp(value, items, items1, "clamp") };
            items1 = [1, num];
            return obj;
          }
        }
        const obj17 = { source: tmp2(tmp3[26]), style: items17 };
        items17 = [tmp.closeIconOverBanner, animatedStyle];
        items18 = [closure_9(closure_11, obj17), ];
        const obj18 = { source: tmp2(tmp3[26]), style: items19 };
        items19 = [tmp.closeIconAfterBanner, animatedStyle2];
        items18[1] = closure_9(closure_11, obj18);
        items15[1] = closure_9(ref, obj14);
        items11[1] = closure_10(tmp2Result, obj4);
      }
      return closure_10(ref, obj3);
    }
  }
  const obj19 = { style: tmp.flexLoading, children: items20 };
  items20 = [closure_9(tmp2(tmp3[18]), {}), closure_9(tmp4(tmp3[19]).ActivityIndicator, {})];
  obj3 = obj19;
};
