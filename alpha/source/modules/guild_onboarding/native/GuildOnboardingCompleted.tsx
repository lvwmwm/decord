// Module ID: 7491
// Function ID: 7492
// Name: GuildOnboardingCompleted
// Dependencies: [19, 17, 5144, 5049, 5014, 1385, 7407, 21, 5143, 575, 1499, 504, 7436, 5209, 7492, 1411, 2021, 1380, 5400, 1652, 5380, 5854, 7431, 5763, 1113, 1187, 7493, 7101, 2171, 7517, 5770, 2]
// Exports: default

// Module 7491 (GuildOnboardingCompleted)
import nativeDefault from "native" /* 575 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import UserProfileRolesCard from "UserProfileRolesCard" /* 7493 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;
import GuildRoleStore from "GuildRoleStore" /* 5049 */;
import GuildStore from "GuildStore" /* 5014 */;
import UserStore from "UserStore" /* 1385 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 7407 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

let duration, navigation;

let StyleSheet;
let c10;
let closure_4;
let items;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let unpackModuleId;
({ View: closure_4, StyleSheet } = react_native);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { screen: { flex: 1, position: "relative" }, container: { backgroundColor: "rgba(0, 0, 0, 0.5)", paddingHorizontal: 24, display: "flex", justifyContent: "center", flexGrow: 1 }, containerWithoutSplash: obj2, backgroundImage: { position: "absolute", width: "100%", height: "100%" }, title: {}, subtitle: { marginTop: 16 }, card: obj3, username: { marginTop: 16 }, rolesHeader: { marginTop: 8 }, roles: { marginTop: 12, display: "flex", flexDirection: "row", flexWrap: "wrap" }, role: { marginRight: 8 }, roleOverflow: obj4, animation: obj5, wave: obj6, animationText: { flexGrow: 1, marginLeft: 8 }, getStartedButton: { marginTop: 24 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { marginTop: 24, padding: 16, paddingBottom: 32, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj4 = { paddingHorizontal: 8, height: 28, borderRadius: nativeDefault.radii.xs, display: "flex", justifyContent: "center", borderWidth: StyleSheet.hairlineWidth, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj5 = { marginTop: 24, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 2, borderRadius: nativeDefault.radii.sm, padding: 12, display: "flex", flexDirection: "row", alignItems: "center" };
obj6 = { transform: items };
items = [{ translateX: 24 }, { rotate: "5deg" }];
let closure_12 = createStyles(obj);
let closure_13 = { code: "(function GuildOnboardingCompletedTsx1(){let[withSequence,withTiming,withDelay,ANIMATION_DURATION,Easing,useReducedMotion]=this.__closure;const opacity=withSequence(withTiming(0,{duration:0}),withDelay(ANIMATION_DURATION,withTiming(0.5,{duration:ANIMATION_DURATION})),withTiming(1,{duration:ANIMATION_DURATION,easing:Easing.out(Easing.ease)}));const scale=withSequence(withTiming(1,{duration:0}),withDelay(ANIMATION_DURATION,withTiming(1.5,{duration:ANIMATION_DURATION,easing:Easing.out(Easing.ease)})),withTiming(1,{duration:useReducedMotion?1:ANIMATION_DURATION,easing:Easing.out(Easing.ease)}));const rawRotation=withSequence(withTiming('0deg',{duration:0}),withDelay(ANIMATION_DURATION,withTiming('-2deg',{duration:ANIMATION_DURATION})),withTiming('-5deg',{duration:ANIMATION_DURATION}));return{opacity:opacity,transform:[{rotate:rawRotation},{scale:scale}]};})" };
const result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingCompleted.tsx");

export default function GuildOnboardingCompleted(guildId) {
  let Button;
  let Text4;
  let allSelectedRoleIds;
  let completeOnboarding;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items12;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let items20;
  let numSharedRoleMembers;
  let obj10;
  let obj18;
  let obj21;
  let obj26;
  let obj30;
  let obj31;
  let obj32;
  let prompts;
  let role;
  let rolePillBackgroundColor;
  let str2;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  guildId = guildId.guildId;
  ({ prompts, completeOnboarding } = guildId);
  const onClose = guildId.onClose;
  let closure_7;
  let found;
  allSelectedRoleIds = undefined;
  let isScreenReaderEnabled;
  let ref;
  let tmp = closure_12();
  duration = tmp;
  const tmp2 = guildId;
  let tmp3 = onClose;
  let obj = guildId(onClose[10]);
  navigation = obj.useNavigation();
  let obj2 = guildId(onClose[11]);
  let items = [found];
  const stateFromStores = obj2.useStateFromStores(items, () => found.getCurrentUser());
  const items1 = [closure_7];
  const obj3 = guildId(onClose[11]);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => GuildStore.getGuild(guildId));
  let tmp7 = completeOnboarding;
  let tmp8 = completeOnboarding(onClose[12])(guildId);
  let closure_6 = tmp8;
  let obj4 = guildId(onClose[13]);
  const theme = obj4.useThemeContext().theme;
  let obj5 = guildId(onClose[14]);
  const profileThemeValues = obj5.useProfileThemeValues(theme);
  if (profileThemeValues != null) {
    rolePillBackgroundColor = profileThemeValues.rolePillBackgroundColor;
  }
  let guildSplashURL = null;
  if (null != stateFromStores1) {
    let obj7 = { id: null, splash: null, size: 400 * tmp7(tmp3[16])() };
    ({ id: obj6.id, splash: obj6.splash } = stateFromStores1);
    const getGuildSplashURL = tmp7(tmp3[15]).getGuildSplashURL;
    let num = 400;
    tmp7(tmp3[15]);
    guildSplashURL = getGuildSplashURL(obj7);
  }
  let tmp2Result = tmp2(tmp3[11]);
  const items2 = [allSelectedRoleIds];
  const items3 = [guildId];
  closure_7 = tmp2Result.useStateFromStoresArray(items2, () => GuildOnboardingPromptsStore.getOnboardingResponses(guildId), items3);
  let mapped = prompts.map((options) => options.options);
  let flatResult = mapped.flat();
  found = flatResult.filter((id) => closure_7.includes(id.id));
  const items4 = [tmp8, found];
  const memo = duration.useMemo(() => {
    const mapped = found.map((roleIds) => roleIds.roleIds);
    const flatResult = mapped.flat();
    allSelectedRoleIds = flatResult.filter(GlobalUtils.isNotNullish);
    let numSharedRoleMembers = 0;
    if (null != closure_6) {
      numSharedRoleMembers = 0;
      if (allSelectedRoleIds.length > 0) {
        const _Math = Math;
        const items = [];
        HermesBuiltin.arraySpread(items, allSelectedRoleIds.map((item) => {
          let num = closure_1_6[item];
          if (num == null) {
            num = 0;
          }
          return num;
        }), 0);
        const _Math2 = Math;
        numSharedRoleMembers = HermesBuiltin.apply(max, items, Math);
      }
    }
    return { numSharedRoleMembers, allSelectedRoleIds };
  }, items4);
  ({ numSharedRoleMembers, allSelectedRoleIds } = memo);
  const items5 = [closure_6];
  const items6 = [allSelectedRoleIds, guildId];
  const tmp2Result5 = tmp2(tmp3[11]);
  const stateFromStoresArray = tmp2Result5.useStateFromStoresArray(items5, () => GuildRoleStore.getManyRoles(guildId, allSelectedRoleIds), items6);
  const items7 = [navigation];
  const layoutEffect = duration.useLayoutEffect(() => {
    const obj = {
      headerLeft() {
        return null;
      }
    };
    navigation.setOptions(obj);
  }, items7);
  const tmp2Result6 = tmp2(tmp3[18]);
  isScreenReaderEnabled = tmp2Result6.useIsScreenReaderEnabled();
  ref = duration.useRef(false);
  const items8 = [completeOnboarding, onClose, isScreenReaderEnabled];
  const effect = duration.useEffect(() => {
    let closure_0;
    const tmp = isScreenReaderEnabled;
    if (tmp) {
      if (!ref.current) {
        tmp3.current = true;
        completeOnboarding();
      }
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        if (!ref.current) {
          tmp.current = true;
          completeOnboarding();
        }
        onClose();
      }, 3600);
      return () => clearTimeout(closure_0);
    }
  }, items8);
  const items9 = [stateFromStores1];
  const tmp2Result7 = tmp2(tmp3[11]);
  const stateFromStores2 = tmp2Result7.useStateFromStores(items9, () => stateFromStores1.useReducedMotion);
  tmp2(tmp3[19]);
  const items10 = [closure_13, tmp2(tmp3[19]).withSequence, tmp2(tmp3[20]).withTiming, tmp2(tmp3[19]).withDelay, 400, tmp2(tmp3[19]).Easing, stateFromStores2];
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items10;
  class GuildOnboardingCompletedTsx1 {
    constructor() {
      let items;
      let tmp2Result;
      let tmp4Result;
      const obj = { duration };
      const obj2 = { duration, easing: _undefined4.out(_undefined4.ease) };
      const tmp3 = _undefined2(0, { duration: 0 });
      const tmp6 = _undefined3(duration, _undefined2(0.5, obj));
      const obj4 = { duration, easing: _undefined4.out(_undefined4.ease) };
      const tmp7 = _undefined(tmp3, tmp6, _undefined2(1, obj2));
      let num = 1;
      const tmp8 = _undefined2(1, { duration: 0 });
      const tmp4 = _undefined3;
      const tmp9 = _undefined3(duration, _undefined2(1.5, obj4));
      if (!c5) {
        num = tmp5;
      }
      const obj6 = { opacity: tmp7, transform: items };
      const obj7 = { rotate: _undefined(tmp2Result, tmp4Result, _undefined2("-5deg", { duration })) };
      const obj5 = { duration: num, easing: _undefined4.out(_undefined4.ease) };
      const tmpResult = _undefined(tmp8, tmp9, _undefined2(1, obj5));
      tmp2Result = _undefined2("0deg", { duration: 0 });
      items = [obj7, { scale: tmpResult }];
      tmp4Result = tmp4(duration, _undefined2("-2deg", { duration }));
      return obj6;
    }
  }
  const items11 = [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25];
  GuildOnboardingCompletedTsx1.__closure = items11;
  GuildOnboardingCompletedTsx1.__workletHash = 4442147087899;
  GuildOnboardingCompletedTsx1.__initData = tmp19;
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      const diff = stateFromStoresArray.length - 3;
      let tmp28 = null;
      const obj8 = { style: tmp.screen, children: items12 };
      if (null != guildSplashURL) {
        const obj9 = { source: obj10, style: tmp.backgroundImage };
        obj10 = { uri: guildSplashURL };
        tmp28 = isScreenReaderEnabled(tmp7(tmp3[21]), obj9);
      }
      items12 = [tmp28, ];
      const items13 = [tmp.container, ];
      let prop = null;
      const SafeAreaPaddingView = tmp2(tmp3[22]).SafeAreaPaddingView;
      if (null == guildSplashURL) {
        prop = tmp.containerWithoutSplash;
      }
      ({ bottom: true, style: items13, children: ref(navigation, obj32) });
      items13[1] = prop;
      let str = "text-overlay-light";
      const obj12 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xxl/semibold", color: str2, children: intl.string(tmp2(tmp3[24]).t.PFWIYe) };
      str2 = "text-overlay-light";
      const Text = tmp2(tmp3[23]).Text;
      if (null == guildSplashURL) {
        str2 = "mobile-text-heading-primary";
      }
      intl = tmp2(tmp3[24]).intl;
      const items14 = [isScreenReaderEnabled(Text, obj12), , , ];
      const obj13 = { style: tmp.subtitle, accessibilityRole: "header", variant: "body-md/medium", color: str, children: intl2.string(tmp2(tmp3[24]).t.og4NNr) };
      const Text2 = tmp2(tmp3[23]).Text;
      if (null == guildSplashURL) {
        str = "text-muted";
      }
      intl2 = tmp2(tmp3[24]).intl;
      items14[1] = isScreenReaderEnabled(Text2, obj13);
      const obj14 = { style: tmp.card, children: items15 };
      const obj15 = { size: tmp2(tmp3[25]).AvatarSizes.XXLARGE, user: stateFromStores, guildId, animate: false };
      const Avatar = tmp2(tmp3[25]).Avatar;
      items15 = [isScreenReaderEnabled(Avatar, obj15), , , , ];
      const obj16 = { style: tmp.username, variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: stateFromStores.username };
      items15[1] = isScreenReaderEnabled(tmp2(tmp3[23]).Text, obj16);
      let tmp29Result = null;
      if (numSharedRoleMembers > 0) {
        const obj17 = { style: tmp.rolesHeader, variant: "body-sm/normal", color: "text-muted", children: intl3.format(tmp2(tmp3[24]).t.l1Jc1n, obj18) };
        const Text3 = tmp2(tmp3[23]).Text;
        intl3 = tmp2(tmp3[24]).intl;
        obj18 = { numSharedRoleMembers };
        tmp29Result = tmp29(Text3, obj17);
      }
      items15[2] = tmp29Result;
      const obj19 = { style: tmp.roles, children: items16 };
      const substr = stateFromStoresArray.slice(0, 3);
      items16 = [
        substr.map((role) => {
              let obj2;
              const obj = { style: role.role, children: authStore(UserProfileRolesCard.RoleItem, obj2) };
              obj2 = { role, guildId: stateFromStores1.id, disableInteraction: true };
              return authStore(React3, obj, role.id);
            }),

      ];
      let tmp29Result3 = null;
      if (0 < diff) {
        const obj20 = { style: items17, children: isScreenReaderEnabled(Text4, obj21) };
        items17 = [tmp.roleOverflow, { backgroundColor: rolePillBackgroundColor }];
        const _HermesInternal = HermesInternal;
        obj21 = { variant: "body-xs/semibold", color: "mobile-text-heading-primary", children: "+" + diff };
        Text4 = tmp2(tmp3[23]).Text;
        tmp29Result3 = tmp29(tmp40, obj20);
      }
      items16[1] = tmp29Result3;
      items15[3] = ref(navigation, obj19);
      const obj22 = { style: items18, children: items19 };
      items18 = [tmp.animation, tmp26];
      const View = tmp7(tmp3[19]).View;
      const obj23 = { guild: stateFromStores1, size: tmp2(tmp3[27]).GuildIconSizes.LARGE };
      const tmp7Result3 = tmp7(tmp3[27]);
      items19 = [isScreenReaderEnabled(tmp7Result3, obj23), , ];
      const obj24 = { style: tmp.animationText, children: items20 };
      const obj25 = { variant: "body-sm/medium", color: "mobile-text-heading-primary", children: intl4.format(tmp2(tmp3[24]).t.FXREhf, obj26) };
      const Text5 = tmp2(tmp3[23]).Text;
      intl4 = tmp2(tmp3[24]).intl;
      obj26 = { guildName: stateFromStores1.name };
      items20 = [isScreenReaderEnabled(Text5, obj25), ];
      const obj27 = { variant: "body-xs/normal", color: "text-muted", children: "" + obj31.format("LL") };
      const Text6 = tmp2(tmp3[23]).Text;
      const _HermesInternal2 = HermesInternal;
      obj31 = tmp7(tmp3[28])();
      items20[1] = isScreenReaderEnabled(Text6, obj27);
      items19[1] = ref(navigation, obj24);
      const obj28 = { source: tmp7(tmp3[29]), style: tmp.wave };
      const tmp7Result4 = tmp7(tmp3[21]);
      items19[2] = isScreenReaderEnabled(tmp7Result4, obj28);
      items15[4] = ref(View, obj22);
      items14[2] = ref(navigation, obj14);
      let tmp29Result4 = null;
      if (isScreenReaderEnabled) {
        const obj29 = { style: tmp.getStartedButton, children: isScreenReaderEnabled(Button, obj30) };
        obj30 = { variant: "primary", size: "md", grow: true, text: intl5.string(tmp2(tmp3[24]).t.LhlgY9), onPress: onClose };
        Button = tmp2(tmp3[30]).Button;
        intl5 = tmp2(tmp3[24]).intl;
        tmp29Result4 = tmp29(tmp40, obj29);
      }
      obj32 = { children: items14 };
      items14[3] = tmp29Result4;
      class GuildOnboardingCompletedTsx1 {
        constructor() {
          let items;
          let tmp2Result;
          let tmp4Result;
          const obj = { duration };
          const obj2 = { duration, easing: _undefined4.out(_undefined4.ease) };
          const tmp3 = _undefined2(0, { duration: 0 });
          const tmp6 = _undefined3(duration, _undefined2(0.5, obj));
          const obj4 = { duration, easing: _undefined4.out(_undefined4.ease) };
          const tmp7 = _undefined(tmp3, tmp6, _undefined2(1, obj2));
          let num = 1;
          const tmp8 = _undefined2(1, { duration: 0 });
          const tmp4 = _undefined3;
          const tmp9 = _undefined3(duration, _undefined2(1.5, obj4));
          if (!c5) {
            num = tmp5;
          }
          const obj6 = { opacity: tmp7, transform: items };
          const obj7 = { rotate: _undefined(tmp2Result, tmp4Result, _undefined2("-5deg", { duration })) };
          const obj5 = { duration: num, easing: _undefined4.out(_undefined4.ease) };
          const tmpResult = _undefined(tmp8, tmp9, _undefined2(1, obj5));
          tmp2Result = _undefined2("0deg", { duration: 0 });
          items = [obj7, { scale: tmpResult }];
          tmp4Result = tmp4(duration, _undefined2("-2deg", { duration }));
          return obj6;
        }
      }
      return ref(navigation, obj8);
    }
  }
  return null;
};
