// Module ID: 5483
// Function ID: 46771
// Name: GuildOnboardingCompleted
// Dependencies: []
// Exports: default

// Module 5483 (GuildOnboardingCompleted)
let closure_3 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const View = tmp2.View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = { screen: {}, container: { "Null": "relative", "Null": 1, "Null": "center", "Null": "hidden", "Null": 8 } };
obj = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOWEST };
obj.containerWithoutSplash = obj;
obj.backgroundImage = { "Null": null, "Null": null, "Null": null };
obj.title = {};
obj.subtitle = { marginTop: 16 };
const obj1 = { 0: null, 0: "hidden", 9223372036854775807: 1, borderRadius: importDefault(dependencyMap[9]).radii.sm, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_SURFACE_HIGH };
obj.card = obj1;
obj.username = { marginTop: 16 };
obj.rolesHeader = { marginTop: 8 };
obj.roles = { preventClipping: "enum", paddingLeft: null, marginRight: "\u{1F9CF}\u{1F3FC}\u200D\u2642\uFE0F", paddingRight: true };
obj.role = { marginRight: 8 };
const tmp3 = arg1(dependencyMap[7]);
obj.roleOverflow = { borderRadius: importDefault(dependencyMap[9]).radii.xs, borderWidth: tmp2.StyleSheet.hairlineWidth, borderColor: importDefault(dependencyMap[9]).colors.BORDER_SUBTLE };
const obj2 = { borderRadius: importDefault(dependencyMap[9]).radii.xs, borderWidth: tmp2.StyleSheet.hairlineWidth, borderColor: importDefault(dependencyMap[9]).colors.BORDER_SUBTLE };
obj.animation = { borderColor: importDefault(dependencyMap[9]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[9]).radii.sm };
const items = [{ translateX: 24 }, { rotate: "5deg" }];
obj.wave = { transform: items };
obj.animationText = { parent: "P", overflow: 40 };
obj.getStartedButton = { marginTop: 24 };
let closure_12 = obj.createStyles(obj);
let closure_13 = { code: "function GuildOnboardingCompletedTsx1(){const{withSequence,withTiming,withDelay,ANIMATION_DURATION,Easing,useReducedMotion}=this.__closure;const opacity=withSequence(withTiming(0,{duration:0}),withDelay(ANIMATION_DURATION,withTiming(0.5,{duration:ANIMATION_DURATION})),withTiming(1,{duration:ANIMATION_DURATION,easing:Easing.out(Easing.ease)}));const scale=withSequence(withTiming(1,{duration:0}),withDelay(ANIMATION_DURATION,withTiming(1.5,{duration:ANIMATION_DURATION,easing:Easing.out(Easing.ease)})),withTiming(1,{duration:useReducedMotion?1:ANIMATION_DURATION,easing:Easing.out(Easing.ease)}));const rawRotation=withSequence(withTiming('0deg',{duration:0}),withDelay(ANIMATION_DURATION,withTiming('-2deg',{duration:ANIMATION_DURATION})),withTiming('-5deg',{duration:ANIMATION_DURATION}));return{opacity:opacity,transform:[{rotate:rawRotation},{scale:scale}]};}" };
const obj3 = { borderColor: importDefault(dependencyMap[9]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[9]).radii.sm };
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingCompleted.tsx");

export default function GuildOnboardingCompleted(guildId) {
  let allSelectedRoleIds;
  let completeOnboarding;
  let numSharedRoleMembers;
  let prompts;
  guildId = guildId.guildId;
  const arg1 = guildId;
  ({ prompts, completeOnboarding } = guildId);
  const importDefault = completeOnboarding;
  const onClose = guildId.onClose;
  const dependencyMap = onClose;
  let closure_7;
  let closure_8;
  let closure_9;
  let isScreenReaderEnabled;
  let callback;
  let callback2;
  const tmp = callback2();
  const React = tmp;
  let obj = arg1(dependencyMap[10]);
  const navigation = obj.useNavigation();
  const View = navigation;
  let obj1 = arg1(dependencyMap[11]);
  const items = [closure_8];
  const stateFromStores = obj1.useStateFromStores(items, () => found.getCurrentUser());
  let obj2 = arg1(dependencyMap[11]);
  const items1 = [closure_7];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => closure_7.getGuild(guildId));
  let closure_5 = stateFromStores1;
  const tmp5 = importDefault(dependencyMap[12])(guildId);
  let closure_6 = tmp5;
  let obj3 = arg1(dependencyMap[13]);
  let obj4 = arg1(dependencyMap[14]);
  const profileThemeValues = obj4.useProfileThemeValues(obj3.useThemeContext().theme);
  obj = {};
  let prop;
  if (null != profileThemeValues) {
    prop = profileThemeValues.rolePillBackgroundColor;
  }
  obj.backgroundColor = prop;
  let guildSplashURL = null;
  if (null != stateFromStores1) {
    let obj6 = importDefault(dependencyMap[15]);
    obj = {};
    ({ id: obj8.id, splash: obj8.splash } = stateFromStores1);
    obj.size = 400 * importDefault(dependencyMap[16])();
    guildSplashURL = obj6.getGuildSplashURL(obj);
  }
  let obj8 = arg1(dependencyMap[11]);
  const items2 = [closure_9];
  const items3 = [guildId];
  closure_7 = obj8.useStateFromStoresArray(items2, () => allSelectedRoleIds.getOnboardingResponses(guildId), items3);
  const mapped = prompts.map((options) => options.options);
  const found = mapped.flat().filter((id) => closure_7.includes(id.id));
  closure_8 = found;
  const items4 = [tmp5, found];
  const memo = React.useMemo(() => {
    const mapped = found.map((roleIds) => roleIds.roleIds);
    const found = mapped.flat().filter(guildId(onClose[17]).isNotNullish);
    const obj = {};
    let num = 0;
    if (null != tmp5) {
      num = 0;
      if (found.length > 0) {
        const _Math = Math;
        const items = [];
        HermesBuiltin.arraySpread(found.map((arg0) => {
          let num = 0;
          if (null != closure_6[arg0]) {
            num = tmp;
          }
          return num;
        }), 0);
        const _Math2 = Math;
        num = HermesBuiltin.apply(items, Math);
        const tmp5 = items;
      }
    }
    obj.numSharedRoleMembers = num;
    obj.allSelectedRoleIds = found;
    return obj;
  }, items4);
  ({ numSharedRoleMembers, allSelectedRoleIds } = memo);
  closure_9 = allSelectedRoleIds;
  let obj10 = arg1(dependencyMap[11]);
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
  let obj11 = arg1(dependencyMap[18]);
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
        if (!ref.current) {
          ref.current = true;
          callback();
        }
        callback2();
      }, 3600);
      return () => clearTimeout(closure_0);
    }
  }, items8);
  let obj12 = arg1(dependencyMap[11]);
  const items9 = [closure_5];
  const stateFromStores2 = obj12.useStateFromStores(items9, () => stateFromStores1.useReducedMotion);
  callback2 = stateFromStores2;
  arg1(dependencyMap[19]);
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
  obj1 = { withSequence: arg1(dependencyMap[19]).withSequence, withTiming: arg1(dependencyMap[20]).withTiming, withDelay: arg1(dependencyMap[19]).withDelay, ANIMATION_DURATION: 400, Easing: arg1(dependencyMap[19]).Easing, useReducedMotion: stateFromStores2 };
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
        tmp22 = isScreenReaderEnabled(importDefault(dependencyMap[21]), obj3);
      }
      const items10 = [tmp22, ];
      const obj5 = { bottom: true };
      const items11 = [tmp.container, ];
      let prop1 = null;
      if (null == guildSplashURL) {
        prop1 = tmp.containerWithoutSplash;
      }
      items11[1] = prop1;
      obj5.style = items11;
      obj6 = {};
      const obj7 = { style: tmp.title };
      let str = "text-overlay-light";
      let str2 = "text-overlay-light";
      if (null == guildSplashURL) {
        str2 = "mobile-text-heading-primary";
      }
      obj7.color = str2;
      const intl = arg1(dependencyMap[24]).intl;
      obj7.children = intl.string(arg1(dependencyMap[24]).t.PFWIYe);
      const items12 = [isScreenReaderEnabled(arg1(dependencyMap[23]).Text, obj7), , , ];
      obj8 = { style: tmp.subtitle };
      if (null == guildSplashURL) {
        str = "text-muted";
      }
      obj8.color = str;
      const intl2 = arg1(dependencyMap[24]).intl;
      obj8.children = intl2.string(arg1(dependencyMap[24]).t.og4NNr);
      items12[1] = isScreenReaderEnabled(arg1(dependencyMap[23]).Text, obj8);
      const obj9 = { style: tmp.card };
      obj10 = { size: arg1(dependencyMap[25]).AvatarSizes.XXLARGE, user: stateFromStores, guildId, animate: false };
      const items13 = [isScreenReaderEnabled(arg1(dependencyMap[25]).Avatar, obj10), , , , ];
      obj11 = { style: tmp.username, children: stateFromStores.username };
      items13[1] = isScreenReaderEnabled(arg1(dependencyMap[23]).Text, obj11);
      let tmp40 = null;
      if (numSharedRoleMembers > 0) {
        obj12 = { "Null": false, "Null": 400, "Null": 20, style: tmp.rolesHeader };
        const intl3 = arg1(dependencyMap[24]).intl;
        const obj13 = { numSharedRoleMembers };
        obj12.children = intl3.format(arg1(dependencyMap[24]).t.l1Jc1n, obj13);
        tmp40 = isScreenReaderEnabled(arg1(dependencyMap[23]).Text, obj12);
      }
      items13[2] = tmp40;
      const obj14 = { style: tmp.roles };
      const substr = stateFromStoresArray.slice(0, 3);
      const items14 = [
        substr.map((id) => {
              let obj = { style: tmp.role, children: isScreenReaderEnabled(guildId(onClose[26]).RoleItem, obj) };
              obj = { role: id, guildId: stateFromStores1.id, disableInteraction: true };
              return isScreenReaderEnabled(navigation, obj, id.id);
            }),

      ];
      let tmp46 = null;
      if (diff > 0) {
        const obj15 = {};
        const items15 = [tmp.roleOverflow, obj];
        obj15.style = items15;
        const obj16 = {};
        const _HermesInternal = HermesInternal;
        obj16.children = "+" + diff;
        obj15.children = isScreenReaderEnabled(arg1(dependencyMap[23]).Text, obj16);
        tmp46 = isScreenReaderEnabled(View, obj15);
      }
      items14[1] = tmp46;
      obj14.children = items14;
      items13[3] = callback(View, obj14);
      const obj17 = {};
      const items16 = [tmp.animation, tmp18];
      obj17.style = items16;
      const obj18 = { guild: stateFromStores1, size: arg1(dependencyMap[27]).GuildIconSizes.LARGE };
      const items17 = [isScreenReaderEnabled(importDefault(dependencyMap[27]), obj18), , ];
      const obj19 = { style: tmp.animationText };
      const obj20 = {};
      const intl4 = arg1(dependencyMap[24]).intl;
      const obj21 = { guildName: stateFromStores1.name };
      obj20.children = intl4.format(arg1(dependencyMap[24]).t.FXREhf, obj21);
      const items18 = [isScreenReaderEnabled(arg1(dependencyMap[23]).Text, obj20), ];
      const obj22 = {};
      const tmp23 = isScreenReaderEnabled;
      const tmp27 = callback;
      const tmp28 = View;
      const tmp29 = isScreenReaderEnabled;
      const tmp34 = isScreenReaderEnabled;
      const tmp37 = callback;
      const tmp38 = View;
      const tmp44 = callback;
      const tmp45 = View;
      const tmp56 = importDefault(dependencyMap[27]);
      const tmp67 = callback;
      const tmp68 = View;
      const _HermesInternal2 = HermesInternal;
      obj22.children = "" + importDefault(dependencyMap[28])().format("LL");
      items18[1] = isScreenReaderEnabled(arg1(dependencyMap[23]).Text, obj22);
      obj19.children = items18;
      items17[1] = callback(View, obj19);
      const obj23 = {};
      const obj35 = importDefault(dependencyMap[28])();
      obj23.source = importDefault(dependencyMap[29]);
      obj23.style = tmp.wave;
      items17[2] = isScreenReaderEnabled(importDefault(dependencyMap[21]), obj23);
      obj17.children = items17;
      items13[4] = callback(importDefault(dependencyMap[19]).View, obj17);
      obj9.children = items13;
      items12[2] = tmp37(tmp38, obj9);
      let tmp61 = null;
      if (isScreenReaderEnabled) {
        const obj24 = { style: tmp.getStartedButton };
        const obj25 = {};
        const intl5 = arg1(dependencyMap[24]).intl;
        obj25.text = intl5.string(arg1(dependencyMap[24]).t.LhlgY9);
        obj25.onPress = onClose;
        obj24.children = isScreenReaderEnabled(arg1(dependencyMap[30]).Button, obj25);
        tmp61 = isScreenReaderEnabled(View, obj24);
      }
      items12[3] = tmp61;
      obj6.children = items12;
      obj5.children = tmp27(tmp28, obj6);
      items10[1] = tmp23(arg1(dependencyMap[22]).SafeAreaPaddingView, obj5);
      obj2.children = items10;
      return tmp67(tmp68, obj2);
    }
  }
  return null;
};
