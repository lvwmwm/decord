// Module ID: 5483
// Function ID: 46807
// Name: GuildOnboardingCompleted
// Dependencies: [31, 27, 4122, 1910, 1838, 1849, 5058, 33, 4130, 689, 1456, 566, 5148, 3842, 5484, 1392, 1825, 1327, 4528, 3991, 4131, 5085, 5121, 4126, 1212, 1273, 5485, 5513, 3712, 5516, 4543, 2]
// Exports: default

// Module 5483 (GuildOnboardingCompleted)
import set from "set";
import get_ActivityIndicator from "makeSizeStyle";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import closure_7 from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
const View = get_ActivityIndicator.View;
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = { screen: { flex: 1, position: "relative" }, container: { backgroundColor: "rgba(0, 0, 0, 0.5)", paddingHorizontal: 24, display: "flex", justifyContent: "center", flexGrow: 1 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.containerWithoutSplash = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.backgroundImage = { position: "absolute", width: "100%", height: "100%" };
_createForOfIteratorHelperLoose.title = {};
_createForOfIteratorHelperLoose.subtitle = { marginTop: 16 };
let obj1 = { marginTop: 24, padding: 16, paddingBottom: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.card = obj1;
_createForOfIteratorHelperLoose.username = { marginTop: 16 };
_createForOfIteratorHelperLoose.rolesHeader = { marginTop: 8 };
_createForOfIteratorHelperLoose.roles = { marginTop: 12, display: "flex", flexDirection: "row", flexWrap: "wrap" };
_createForOfIteratorHelperLoose.role = { marginRight: 8 };
let obj2 = { paddingHorizontal: 8, height: 28, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, display: "flex", justifyContent: "center", borderWidth: get_ActivityIndicator.StyleSheet.hairlineWidth, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.roleOverflow = obj2;
let obj3 = { marginTop: 24, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderWidth: 2, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, padding: 12, display: "flex", flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.animation = obj3;
let items = [{ translateX: 24 }, { rotate: "5deg" }];
_createForOfIteratorHelperLoose.wave = { transform: items };
_createForOfIteratorHelperLoose.animationText = { flexGrow: 1, marginLeft: 8 };
_createForOfIteratorHelperLoose.getStartedButton = { marginTop: 24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_13 = { code: "function GuildOnboardingCompletedTsx1(){const{withSequence,withTiming,withDelay,ANIMATION_DURATION,Easing,useReducedMotion}=this.__closure;const opacity=withSequence(withTiming(0,{duration:0}),withDelay(ANIMATION_DURATION,withTiming(0.5,{duration:ANIMATION_DURATION})),withTiming(1,{duration:ANIMATION_DURATION,easing:Easing.out(Easing.ease)}));const scale=withSequence(withTiming(1,{duration:0}),withDelay(ANIMATION_DURATION,withTiming(1.5,{duration:ANIMATION_DURATION,easing:Easing.out(Easing.ease)})),withTiming(1,{duration:useReducedMotion?1:ANIMATION_DURATION,easing:Easing.out(Easing.ease)}));const rawRotation=withSequence(withTiming('0deg',{duration:0}),withDelay(ANIMATION_DURATION,withTiming('-2deg',{duration:ANIMATION_DURATION})),withTiming('-5deg',{duration:ANIMATION_DURATION}));return{opacity:opacity,transform:[{rotate:rawRotation},{scale:scale}]};}" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingCompleted.tsx");

export default function GuildOnboardingCompleted(guildId) {
  let allSelectedRoleIds;
  let completeOnboarding;
  let numSharedRoleMembers;
  let prompts;
  guildId = guildId.guildId;
  ({ prompts, completeOnboarding } = guildId);
  const onClose = guildId.onClose;
  let closure_7;
  let found;
  allSelectedRoleIds = undefined;
  let isScreenReaderEnabled;
  let callback;
  let stateFromStores2;
  const tmp = stateFromStores2();
  const React = tmp;
  let obj = guildId(onClose[10]);
  const navigation = obj.useNavigation();
  let obj1 = guildId(onClose[11]);
  let items = [found];
  const stateFromStores = obj1.useStateFromStores(items, () => found.getCurrentUser());
  let obj2 = guildId(onClose[11]);
  const items1 = [closure_7];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => closure_7.getGuild(guildId));
  const tmp5 = completeOnboarding(onClose[12])(guildId);
  let closure_6 = tmp5;
  let obj3 = guildId(onClose[13]);
  let obj4 = guildId(onClose[14]);
  const profileThemeValues = obj4.useProfileThemeValues(obj3.useThemeContext().theme);
  obj = {};
  let prop;
  if (null != profileThemeValues) {
    prop = profileThemeValues.rolePillBackgroundColor;
  }
  obj.backgroundColor = prop;
  let guildSplashURL = null;
  if (null != stateFromStores1) {
    let obj6 = completeOnboarding(onClose[15]);
    obj = {};
    ({ id: obj8.id, splash: obj8.splash } = stateFromStores1);
    obj.size = 400 * completeOnboarding(onClose[16])();
    guildSplashURL = obj6.getGuildSplashURL(obj);
  }
  let obj8 = guildId(onClose[11]);
  const items2 = [allSelectedRoleIds];
  const items3 = [guildId];
  closure_7 = obj8.useStateFromStoresArray(items2, () => allSelectedRoleIds.getOnboardingResponses(guildId), items3);
  let mapped = prompts.map((options) => options.options);
  found = mapped.flat().filter((id) => closure_7.includes(id.id));
  const items4 = [tmp5, found];
  const memo = React.useMemo(() => {
    const mapped = found.map((roleIds) => roleIds.roleIds);
    found = mapped.flat().filter(guildId(onClose[17]).isNotNullish);
    const obj = {};
    let num = 0;
    if (null != closure_6) {
      num = 0;
      if (found.length > 0) {
        const _Math = Math;
        const items = [];
        HermesBuiltin.arraySpread(found.map((arg0) => {
          let num = 0;
          if (null != outer1_6[arg0]) {
            num = tmp;
          }
          return num;
        }), 0);
        const _Math2 = Math;
        num = HermesBuiltin.apply(items, Math);
      }
    }
    obj.numSharedRoleMembers = num;
    obj.allSelectedRoleIds = found;
    return obj;
  }, items4);
  ({ numSharedRoleMembers, allSelectedRoleIds } = memo);
  let obj10 = guildId(onClose[11]);
  const items5 = [closure_6];
  const items6 = [allSelectedRoleIds, guildId];
  const stateFromStoresArray = obj10.useStateFromStoresArray(items5, () => tmp5.getManyRoles(guildId, allSelectedRoleIds), items6);
  const items7 = [navigation];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft() {
        return null;
      }
    });
  }, items7);
  let obj11 = guildId(onClose[18]);
  isScreenReaderEnabled = obj11.useIsScreenReaderEnabled();
  callback = React.useRef(false);
  const items8 = [completeOnboarding, onClose, isScreenReaderEnabled];
  const effect = React.useEffect(() => {
    if (isScreenReaderEnabled) {
      if (!ref.current) {
        ref.current = true;
        completeOnboarding();
      }
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        if (!outer1_11.current) {
          outer1_11.current = true;
          outer1_1();
        }
        outer1_2();
      }, 3600);
      return () => clearTimeout(closure_0);
    }
  }, items8);
  let obj12 = guildId(onClose[11]);
  const items9 = [stateFromStores1];
  stateFromStores2 = obj12.useStateFromStores(items9, () => stateFromStores1.useReducedMotion);
  guildId(onClose[19]);
  const fn = function k() {
    let obj = guildId(onClose[19]);
    let obj1 = guildId(onClose[20]);
    let obj2 = guildId(onClose[19]);
    let obj3 = guildId(onClose[20]);
    const withTimingResult = obj1.withTiming(0, { duration: 0 });
    const withDelayResult = obj2.withDelay(400, obj3.withTiming(0.5, { duration: 400 }));
    obj = { duration: 400 };
    const Easing = guildId(onClose[19]).Easing;
    obj.easing = Easing.out(guildId(onClose[19]).Easing.ease);
    const obj5 = guildId(onClose[20]);
    const withSequenceResult = obj.withSequence(withTimingResult, withDelayResult, guildId(onClose[20]).withTiming(1, obj));
    const obj7 = guildId(onClose[19]);
    const obj8 = guildId(onClose[20]);
    const withTimingResult1 = guildId(onClose[20]).withTiming(1, { duration: 0 });
    const obj9 = guildId(onClose[19]);
    obj = { duration: 400 };
    const Easing2 = guildId(onClose[19]).Easing;
    obj.easing = Easing2.out(guildId(onClose[19]).Easing.ease);
    const obj10 = guildId(onClose[20]);
    const withDelayResult1 = obj9.withDelay(400, guildId(onClose[20]).withTiming(1.5, obj));
    obj1 = {};
    let num = 1;
    if (!stateFromStores2) {
      num = 400;
    }
    obj1.duration = num;
    const Easing3 = guildId(onClose[19]).Easing;
    obj1.easing = Easing3.out(guildId(onClose[19]).Easing.ease);
    obj2 = { opacity: withSequenceResult };
    obj3 = {};
    const obj12 = guildId(onClose[20]);
    const withSequenceResult1 = obj7.withSequence(withTimingResult1, withDelayResult1, guildId(onClose[20]).withTiming(1, obj1));
    const obj16 = guildId(onClose[19]);
    const obj17 = guildId(onClose[20]);
    const withTimingResult2 = guildId(onClose[20]).withTiming("0deg", { duration: 0 });
    const obj18 = guildId(onClose[19]);
    const obj19 = guildId(onClose[20]);
    const withDelayResult2 = obj18.withDelay(400, guildId(onClose[20]).withTiming("-2deg", { duration: 400 }));
    obj3.rotate = obj16.withSequence(withTimingResult2, withDelayResult2, guildId(onClose[20]).withTiming("-5deg", { duration: 400 }));
    const items = [obj3, { scale: withSequenceResult1 }];
    obj2.transform = items;
    return obj2;
  };
  obj1 = { withSequence: guildId(onClose[19]).withSequence, withTiming: guildId(onClose[20]).withTiming, withDelay: guildId(onClose[19]).withDelay, ANIMATION_DURATION: 400, Easing: guildId(onClose[19]).Easing, useReducedMotion: stateFromStores2 };
  fn.__closure = obj1;
  fn.__workletHash = 8282245217026;
  fn.__initData = closure_13;
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      const diff = stateFromStoresArray.length - 3;
      obj2 = { style: tmp.screen };
      let tmp22 = null;
      if (null != guildSplashURL) {
        obj3 = {};
        obj4 = { uri: guildSplashURL };
        obj3.source = obj4;
        obj3.style = tmp.backgroundImage;
        tmp22 = isScreenReaderEnabled(completeOnboarding(onClose[21]), obj3);
      }
      const items10 = [tmp22, ];
      let obj5 = { bottom: true };
      const items11 = [tmp.container, ];
      let prop1 = null;
      if (null == guildSplashURL) {
        prop1 = tmp.containerWithoutSplash;
      }
      items11[1] = prop1;
      obj5.style = items11;
      obj6 = {};
      let obj7 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xxl/extrabold" };
      let str = "text-overlay-light";
      let str2 = "text-overlay-light";
      if (null == guildSplashURL) {
        str2 = "mobile-text-heading-primary";
      }
      obj7.color = str2;
      const intl = guildId(onClose[24]).intl;
      obj7.children = intl.string(guildId(onClose[24]).t.PFWIYe);
      const items12 = [isScreenReaderEnabled(guildId(onClose[23]).Text, obj7), , , ];
      obj8 = { style: tmp.subtitle, accessibilityRole: "header", variant: "text-md/medium" };
      if (null == guildSplashURL) {
        str = "text-muted";
      }
      obj8.color = str;
      const intl2 = guildId(onClose[24]).intl;
      obj8.children = intl2.string(guildId(onClose[24]).t.og4NNr);
      items12[1] = isScreenReaderEnabled(guildId(onClose[23]).Text, obj8);
      let obj9 = { style: tmp.card };
      obj10 = { size: guildId(onClose[25]).AvatarSizes.XXLARGE, user: stateFromStores, guildId, animate: false };
      const items13 = [isScreenReaderEnabled(guildId(onClose[25]).Avatar, obj10), , , , ];
      obj11 = { style: tmp.username, variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: stateFromStores.username };
      items13[1] = isScreenReaderEnabled(guildId(onClose[23]).Text, obj11);
      let tmp40 = null;
      if (numSharedRoleMembers > 0) {
        obj12 = { style: tmp.rolesHeader, variant: "text-sm/normal", color: "text-muted" };
        const intl3 = guildId(onClose[24]).intl;
        const obj13 = { numSharedRoleMembers };
        obj12.children = intl3.format(guildId(onClose[24]).t.l1Jc1n, obj13);
        tmp40 = isScreenReaderEnabled(guildId(onClose[23]).Text, obj12);
      }
      items13[2] = tmp40;
      const obj14 = { style: tmp.roles };
      const substr = stateFromStoresArray.slice(0, 3);
      const items14 = [
        substr.map((id) => {
              obj = { style: tmp.role, children: isScreenReaderEnabled(guildId(onClose[26]).RoleItem, obj) };
              obj = { role: id, guildId: stateFromStores1.id, disableInteraction: true };
              return isScreenReaderEnabled(navigation, obj, id.id);
            }),

      ];
      let tmp46 = null;
      if (diff > 0) {
        const obj15 = {};
        const items15 = [tmp.roleOverflow, obj];
        obj15.style = items15;
        let obj16 = { variant: "heading-deprecated-12/semibold", color: "mobile-text-heading-primary" };
        const _HermesInternal = HermesInternal;
        obj16.children = "+" + diff;
        obj15.children = isScreenReaderEnabled(guildId(onClose[23]).Text, obj16);
        tmp46 = isScreenReaderEnabled(navigation, obj15);
      }
      items14[1] = tmp46;
      obj14.children = items14;
      items13[3] = callback(navigation, obj14);
      let obj17 = {};
      const items16 = [tmp.animation, tmp18];
      obj17.style = items16;
      let obj18 = { guild: stateFromStores1, size: guildId(onClose[27]).GuildIconSizes.LARGE };
      const items17 = [isScreenReaderEnabled(completeOnboarding(onClose[27]), obj18), , ];
      let obj19 = { style: tmp.animationText };
      const obj20 = { variant: "text-sm/medium", color: "mobile-text-heading-primary" };
      const intl4 = guildId(onClose[24]).intl;
      const obj21 = { guildName: stateFromStores1.name };
      obj20.children = intl4.format(guildId(onClose[24]).t.FXREhf, obj21);
      const items18 = [isScreenReaderEnabled(guildId(onClose[23]).Text, obj20), ];
      const obj22 = { variant: "text-xs/normal", color: "text-muted" };
      const tmp23 = isScreenReaderEnabled;
      const tmp27 = callback;
      const tmp28 = navigation;
      const tmp29 = isScreenReaderEnabled;
      const tmp34 = isScreenReaderEnabled;
      const tmp37 = callback;
      const tmp38 = navigation;
      const tmp44 = callback;
      const tmp45 = navigation;
      const tmp56 = completeOnboarding(onClose[27]);
      const tmp67 = callback;
      const tmp68 = navigation;
      const _HermesInternal2 = HermesInternal;
      obj22.children = "" + completeOnboarding(onClose[28])().format("LL");
      items18[1] = isScreenReaderEnabled(guildId(onClose[23]).Text, obj22);
      obj19.children = items18;
      items17[1] = callback(navigation, obj19);
      const obj23 = {};
      const obj35 = completeOnboarding(onClose[28])();
      obj23.source = completeOnboarding(onClose[29]);
      obj23.style = tmp.wave;
      items17[2] = isScreenReaderEnabled(completeOnboarding(onClose[21]), obj23);
      obj17.children = items17;
      items13[4] = callback(completeOnboarding(onClose[19]).View, obj17);
      obj9.children = items13;
      items12[2] = tmp37(tmp38, obj9);
      let tmp61 = null;
      if (isScreenReaderEnabled) {
        const obj24 = { style: tmp.getStartedButton };
        const obj25 = { variant: "primary", size: "md", grow: true };
        const intl5 = guildId(onClose[24]).intl;
        obj25.text = intl5.string(guildId(onClose[24]).t.LhlgY9);
        obj25.onPress = onClose;
        obj24.children = isScreenReaderEnabled(guildId(onClose[30]).Button, obj25);
        tmp61 = isScreenReaderEnabled(navigation, obj24);
      }
      items12[3] = tmp61;
      obj6.children = items12;
      obj5.children = tmp27(tmp28, obj6);
      items10[1] = tmp23(guildId(onClose[22]).SafeAreaPaddingView, obj5);
      obj2.children = items10;
      return tmp67(tmp68, obj2);
    }
  }
  return null;
};
