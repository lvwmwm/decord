// Module ID: 16926
// Function ID: 16927
// Name: GuildFeedBanner
// Dependencies: [19, 17, 14124, 2086, 16927, 1085, 21, 5091, 587, 558, 576, 4811, 1497, 4992, 14125, 1382, 1415, 6169, 5092, 5095, 504, 6625, 10645, 4930, 16928, 16929, 6163, 6165, 5087, 1200, 6191, 4768, 1126, 16930, 2]

// Module 16926 (GuildFeedBanner)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import timing from "timing" /* 5092 */;
import timingPresets from "timingPresets" /* 5095 */;
import GuildPopoutActionCreators from "GuildPopoutActionCreators" /* 14125 */;
import react from "react" /* 19 */;
import GuildPopoutStore from "GuildPopoutStore" /* 14124 */;
import GuildStore from "GuildStore" /* 2086 */;
import GuildFeedConstants from "GuildFeedConstants" /* 16927 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, set;

let c10;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let size1;
let unpackModuleId;
let View = react_native.View;
const GUILD_FEED_CARD_MARGIN_HORIZONTAL = GuildFeedConstants.GUILD_FEED_CARD_MARGIN_HORIZONTAL;
const GUILD_FEED_MIN_BANNER_HEIGHT = GuildFeedConstants.GUILD_FEED_MIN_BANNER_HEIGHT;
const GuildFeatures = Constants.GuildFeatures;
let Fragment = Fragment_mod;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { avatar: size, container: obj2, bannerImage: { width: "100%", height: "100%" }, description: { marginTop: 4 }, textContainer: { marginTop: GUILD_FEED_CARD_MARGIN_HORIZONTAL, alignItems: "center", flexDirection: "row" }, content: { width: "100%" }, icon: { marginLeft: 8 }, headerContainer: obj3, headerBorder: obj4, guildIconContainer: obj5, dotOnline: size1, publicInfo: { flexDirection: "row", alignItems: "center", marginRight: 12 }, publicIcon: { marginRight: 4, width: 14, height: 14 }, memberInfo: { marginTop: 4, flexDirection: "row", alignItems: "center" }, title: { maxWidth: "90%" } };
size = { borderRadius: nativeDefault.radii.lg, height: 64, width: 64 };
createStyles = createStyles.createStyles;
obj2 = { paddingBottom: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj3 = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj4 = { borderTopRightRadius: nativeDefault.radii.lg, borderTopLeftRadius: nativeDefault.radii.lg, marginTop: -16 };
obj5 = { padding: 4, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
size1 = { width: 4, height: 4, borderRadius: nativeDefault.radii.xs, marginRight: 4, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
let closure_12 = createStyles(obj);
const __initData = { code: "function GuildFeedBannerTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const __initData2 = { code: "function GuildFeedBannerTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildFeedBanner(guild) {
  let description;
  let height;
  let hideMemberCount;
  let intl;
  let intl2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj18;
  let tmp10;
  let tmp11;
  let width;
  const tmp = guild;
  let obj = guild(576);
  const cResult = obj.c(82);
  guild = guild.guild;
  ({ description, hideMemberCount } = guild);
  const hideDescription = guild.hideDescription;
  const tmp4 = closure_12();
  const obj2 = guild(4811);
  const sharedValue = obj2.useSharedValue(0);
  const fn = function c() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 10872399645496;
  fn.__initData = __initData;
  const obj3 = guild(4811);
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const bound = Math.max(0.22 * sharedValue(1497)().height, GUILD_FEED_MIN_BANNER_HEIGHT);
  const tmp9 = sharedValue(4992)();
  if (cResult[0] !== guild.id) {
    const fn2 = function b() {
      const obj = GuildPopoutActionCreators;
      const guildForPopout = obj.fetchGuildForPopout(guild.id);
    };
    cResult[0] = guild.id;
    cResult[1] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] !== guild) {
    const items = [guild];
    cResult[2] = guild;
    cResult[3] = items;
    tmp11 = items;
  } else {
    tmp11 = cResult[3];
  }
  const effect = react.useEffect(tmp10, tmp11);
  const tmp12 = react;
  if (cResult[4] === guild.banner) {
    if (cResult[5] === guild.features) {
      let tmp14;
      let tmp21;
      let tmp23;
      let tmp24;
      let tmp26;
      let tmp27;
      let bound2;
      let tmp34;
      if (cResult[6] === guild.id) {
        tmp14 = cResult[7];
      }
      let tmp18 = tmp14;
      if (null != guild) {
        tmp18 = tmp14;
        if (null != guild.homeHeader) {
          if (cResult[8] === guild.homeHeader) {
            let tmp19;
            if (cResult[9] === guild.id) {
              tmp19 = cResult[10];
            }
            tmp18 = tmp19;
          }
          const obj4 = { id: null, homeHeader: null };
          ({ id: obj8.id, homeHeader: obj8.homeHeader } = guild);
          const tmp7Result = sharedValue(1415);
          const guildHomeHeaderSource = tmp7Result.getGuildHomeHeaderSource(obj4);
          cResult[8] = guild.homeHeader;
          cResult[9] = guild.id;
          cResult[10] = guildHomeHeaderSource;
          tmp19 = guildHomeHeaderSource;
        }
      }
      const name = guild.name;
      if (description == null) {
        description = guild.description;
      }
      if (cResult[11] !== guild) {
        const tmpResult = tmp(6169);
        const guildBadgeSource = tmpResult.getGuildBadgeSource(guild);
        cResult[11] = guild;
        cResult[12] = guildBadgeSource;
        tmp21 = guildBadgeSource;
      } else {
        tmp21 = cResult[12];
      }
      if (cResult[13] !== sharedValue) {
        function handleLoad() {
          set = sharedValue.set;
          const obj = timing;
          const result = set(obj.withTiming(1, timingPresets.timingSlow));
        }
        cResult[13] = sharedValue;
        cResult[14] = handleLoad;
        tmp23 = handleLoad;
      } else {
        tmp23 = cResult[14];
      }
      const _Symbol = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildPopoutStore];
        cResult[15] = items1;
        tmp24 = items1;
      } else {
        tmp24 = cResult[15];
      }
      if (cResult[16] !== guild.id) {
        const fn3 = function j() {
          const obj = { discoverableGuild: GuildPopoutStore.getGuild(guild.id) };
          return obj;
        };
        cResult[16] = guild.id;
        cResult[17] = fn3;
        tmp26 = fn3;
      } else {
        tmp26 = cResult[17];
      }
      if (cResult[18] !== guild) {
        const items2 = [guild];
        cResult[18] = guild;
        cResult[19] = items2;
        tmp27 = items2;
      } else {
        tmp27 = cResult[19];
      }
      const tmpResult5 = tmp(504);
      const discoverableGuild = tmpResult5.useStateFromStoresObject(tmp24, tmp26, tmp27).discoverableGuild;
      const tmp28 = sharedValue(6625)();
      ({ width, height } = sharedValue(1497)());
      sharedValue(1497)();
      const _Math = Math;
      const tmpResult6 = tmp(10645);
      const drawerWidth = tmpResult6.useDrawerWidth();
      const bound1 = Math.min(width, height);
      if (tmp28) {
        const _Math2 = Math;
        const _Math3 = Math;
        bound2 = Math.min(Math.max(width, height) - drawerWidth, bound1);
      } else {
        bound2 = bound1 - 2 * GUILD_FEED_CARD_MARGIN_HORIZONTAL;
      }
      if (cResult[20] !== bound) {
        size = { height: bound, width: "100%" };
        cResult[20] = bound;
        cResult[21] = size;
        tmp34 = size;
      } else {
        tmp34 = cResult[21];
      }
      if (cResult[22] === animatedStyle) {
        let tmp35;
        if (cResult[23] === tmp34) {
          tmp35 = cResult[24];
        }
        if (cResult[25] === tmp18) {
          let tmp36;
          if (cResult[26] === tmp9) {
            tmp36 = cResult[27];
          }
          if (cResult[28] === tmp23) {
            if (cResult[29] === tmp4.bannerImage) {
              let tmp39;
              if (cResult[30] === tmp36) {
                tmp39 = cResult[31];
              }
              if (cResult[32] === tmp35) {
                let tmp42;
                if (cResult[33] === tmp39) {
                  tmp42 = cResult[34];
                }
                if (cResult[35] === tmp4.headerBorder) {
                  let tmp45;
                  let tmp46;
                  if (cResult[36] === tmp4.headerContainer) {
                    tmp45 = cResult[37];
                  }
                  if (cResult[38] !== bound2) {
                    const obj5 = { width: bound2, marginTop: -32 };
                    cResult[38] = bound2;
                    cResult[39] = obj5;
                    tmp46 = obj5;
                  } else {
                    tmp46 = cResult[39];
                  }
                  if (cResult[40] === tmp4.content) {
                    let tmp47;
                    if (cResult[41] === tmp46) {
                      tmp47 = cResult[42];
                    }
                    if (cResult[43] === guild) {
                      let tmp48;
                      if (cResult[44] === tmp4.avatar) {
                        tmp48 = cResult[45];
                      }
                      if (cResult[46] === tmp4.guildIconContainer) {
                        let tmp52;
                        if (cResult[47] === tmp48) {
                          tmp52 = cResult[48];
                        }
                        if (cResult[49] === name) {
                          let tmp56;
                          if (cResult[50] === tmp4.title) {
                            tmp56 = cResult[51];
                          }
                          if (cResult[52] === tmp21) {
                            let tmp59;
                            if (cResult[53] === tmp4.icon) {
                              tmp59 = cResult[54];
                            }
                            if (cResult[55] === tmp4.textContainer) {
                              if (cResult[56] === tmp56) {
                                let tmp62;
                                if (cResult[57] === tmp59) {
                                  tmp62 = cResult[58];
                                }
                                if (cResult[59] === description) {
                                  let tmp66;
                                  if (cResult[60] === tmp4.description) {
                                    tmp66 = cResult[61];
                                  }
                                  if (cResult[62] === discoverableGuild) {
                                    if (cResult[63] === hideMemberCount) {
                                      if (cResult[64] === tmp4.dotOnline) {
                                        if (cResult[65] === tmp4.memberInfo) {
                                          if (cResult[66] === tmp4.publicIcon) {
                                            let tmp69;
                                            if (cResult[67] === tmp4.publicInfo) {
                                              tmp69 = cResult[68];
                                            }
                                            if (cResult[69] === tmp47) {
                                              if (cResult[70] === tmp52) {
                                                if (cResult[71] === tmp62) {
                                                  if (cResult[72] === tmp66) {
                                                    let tmp78;
                                                    if (cResult[73] === tmp69) {
                                                      tmp78 = cResult[74];
                                                    }
                                                    if (cResult[75] === tmp45) {
                                                      let tmp82;
                                                      if (cResult[76] === tmp78) {
                                                        tmp82 = cResult[77];
                                                      }
                                                      if (cResult[78] === tmp4.container) {
                                                        if (cResult[79] === tmp42) {
                                                          let tmp86;
                                                          if (cResult[80] === tmp82) {
                                                            tmp86 = cResult[81];
                                                          }
                                                          return tmp86;
                                                        }
                                                      }
                                                      const obj7 = { style: tmp4.container, children: items3 };
                                                      items3 = [tmp42, tmp82];
                                                      const tmp89 = closure_11(View, obj7);
                                                      cResult[78] = tmp4.container;
                                                      cResult[79] = tmp42;
                                                      cResult[80] = tmp82;
                                                      cResult[81] = tmp89;
                                                      tmp86 = tmp89;
                                                    }
                                                    const obj9 = { style: tmp45, children: tmp78 };
                                                    const tmp85 = closure_10(View, obj9);
                                                    cResult[75] = tmp45;
                                                    cResult[76] = tmp78;
                                                    cResult[77] = tmp85;
                                                    tmp82 = tmp85;
                                                  }
                                                }
                                              }
                                            }
                                            const obj10 = { style: tmp47, children: items4 };
                                            items4 = [tmp52, tmp62, tmp66, tmp69];
                                            const tmp81 = closure_11(View, obj10);
                                            cResult[69] = tmp47;
                                            cResult[70] = tmp52;
                                            cResult[71] = tmp62;
                                            cResult[72] = tmp66;
                                            cResult[73] = tmp69;
                                            cResult[74] = tmp81;
                                            tmp78 = tmp81;
                                          }
                                        }
                                      }
                                    }
                                  }
                                  let tmp71Result4 = null != discoverableGuild && !hideMemberCount;
                                  if (tmp71Result4) {
                                    const features2 = discoverableGuild.features;
                                    let tmp71Result = null;
                                    const obj11 = { style: tmp4.memberInfo, children: items6 };
                                    if (features2.has(GuildFeatures.DISCOVERABLE)) {
                                      const obj12 = {
                                        style: tmp4.publicInfo,
                                        accessibilityRole: "button",
                                        onPress() {
                                                                              let intl;
                                                                              const obj = { key: "DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO", content: intl.string(guild(dependencyMap[32]).t.O8lDI2) };
                                                                              const open = sharedValue(dependencyMap[31]).open;
                                                                              sharedValue(dependencyMap[31]);
                                                                              intl = guild(dependencyMap[32]).intl;
                                                                              open(obj);
                                                                            },
                                        children: items5
                                      };
                                      const PressableOpacity = tmp(6191).PressableOpacity;
                                      const obj13 = { style: tmp4.publicIcon, source: sharedValue(16930) };
                                      const Icon = tmp(1200).Icon;
                                      items5 = [closure_10(Icon, obj13), ];
                                      const obj14 = { variant: "text-xs/medium", color: "text-default", children: intl.string(tmp(1126).t["B/vjCu"]) };
                                      const Text = tmp(5087).Text;
                                      intl = tmp(1126).intl;
                                      items5[1] = closure_10(Text, obj14);
                                      tmp71Result = tmp71(PressableOpacity, obj12);
                                    }
                                    items6 = [tmp71Result, ];
                                    let tmp71Result3 = null;
                                    if (null != discoverableGuild.presenceCount) {
                                      tmp71Result3 = null;
                                      if (null != discoverableGuild.memberCount) {
                                        const Fragment = tmp12.Fragment;
                                        const obj15 = { children: items7 };
                                        const obj16 = { style: tmp4.dotOnline };
                                        items7 = [closure_10(View, obj16), ];
                                        const obj17 = { variant: "text-xs/medium", color: "text-default", children: intl2.format(tmp(1126).t.QCNv6P, obj18) };
                                        const Text2 = tmp(5087).Text;
                                        intl2 = tmp(1126).intl;
                                        obj18 = { online: null, offline: null };
                                        ({ presenceCount: obj30.online, memberCount: obj30.offline } = discoverableGuild);
                                        items7[1] = closure_10(Text2, obj17);
                                        tmp71Result3 = tmp71(Fragment, obj15);
                                      }
                                    }
                                    items6[1] = tmp71Result3;
                                    tmp71Result4 = tmp71(tmp72, obj11);
                                  }
                                  cResult[62] = discoverableGuild;
                                  cResult[63] = hideMemberCount;
                                  cResult[64] = tmp4.dotOnline;
                                  cResult[65] = tmp4.memberInfo;
                                  cResult[66] = tmp4.publicIcon;
                                  cResult[67] = tmp4.publicInfo;
                                  cResult[68] = tmp71Result4;
                                  tmp69 = tmp71Result4;
                                }
                                let tmp67 = null;
                                if (null != description) {
                                  const obj19 = { style: tmp4.description, variant: "text-sm/medium", color: "text-default", children: description };
                                  tmp67 = closure_10(tmp(5087).Text, obj19);
                                }
                                cResult[59] = description;
                                cResult[60] = tmp4.description;
                                cResult[61] = tmp67;
                                tmp66 = tmp67;
                              }
                            }
                            const obj20 = { style: tmp4.textContainer, children: items8 };
                            items8 = [tmp56, tmp59];
                            const tmp65 = closure_11(View, obj20);
                            cResult[55] = tmp4.textContainer;
                            cResult[56] = tmp56;
                            cResult[57] = tmp59;
                            cResult[58] = tmp65;
                            tmp62 = tmp65;
                          }
                          let tmp60 = null;
                          if (null != tmp21) {
                            const obj21 = { style: tmp4.icon, source: tmp21, disableColor: true };
                            tmp60 = closure_10(tmp(1200).Icon, obj21);
                          }
                          cResult[52] = tmp21;
                          cResult[53] = tmp4.icon;
                          cResult[54] = tmp60;
                          tmp59 = tmp60;
                        }
                        const obj22 = { lineClamp: 1, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: tmp4.title, children: name };
                        const tmp58 = closure_10(tmp(5087).Text, obj22);
                        cResult[49] = name;
                        cResult[50] = tmp4.title;
                        cResult[51] = tmp58;
                        tmp56 = tmp58;
                      }
                      const obj23 = { style: tmp4.guildIconContainer, children: tmp48 };
                      const tmp55 = closure_10(View, obj23);
                      cResult[46] = tmp4.guildIconContainer;
                      cResult[47] = tmp48;
                      cResult[48] = tmp55;
                      tmp52 = tmp55;
                    }
                    const obj24 = { style: tmp4.avatar, guild, size: tmp(6165).GuildIconSizes.XLARGE, animate: true };
                    const tmp7Result4 = sharedValue(6165);
                    const tmp51 = closure_10(tmp7Result4, obj24);
                    cResult[43] = guild;
                    cResult[44] = tmp4.avatar;
                    cResult[45] = tmp51;
                    tmp48 = tmp51;
                  }
                  const items9 = [tmp4.content, tmp46];
                  cResult[40] = tmp4.content;
                  cResult[41] = tmp46;
                  cResult[42] = items9;
                  tmp47 = items9;
                }
                const items10 = [, ];
                ({ headerContainer: arr5[0], headerBorder: arr5[1] } = tmp4);
                cResult[35] = tmp4.headerBorder;
                cResult[36] = tmp4.headerContainer;
                cResult[37] = items10;
                tmp45 = items10;
              }
              const obj25 = { style: tmp35, children: tmp39 };
              const tmp44 = closure_10(sharedValue(4811).View, obj25);
              cResult[32] = tmp35;
              cResult[33] = tmp39;
              cResult[34] = tmp44;
              tmp42 = tmp44;
            }
          }
          const obj26 = { style: tmp4.bannerImage, source: tmp36, onLoad: tmp23 };
          const tmp41 = closure_10(sharedValue(6163), obj26);
          cResult[28] = tmp23;
          cResult[29] = tmp4.bannerImage;
          cResult[30] = tmp36;
          cResult[31] = tmp41;
          tmp39 = tmp41;
        }
        let tmp37 = tmp18;
        if (tmp18 == null) {
          let tmp7Result5;
          const tmpResult7 = tmp(4930);
          if (tmpResult7.isThemeDark(tmp9)) {
            tmp7Result5 = tmp7(16928);
          } else {
            tmp7Result5 = tmp7(16929);
          }
          tmp37 = tmp7Result5;
        }
        cResult[25] = tmp18;
        cResult[26] = tmp9;
        cResult[27] = tmp37;
        tmp36 = tmp37;
      }
      const items11 = [tmp34, animatedStyle];
      cResult[22] = animatedStyle;
      cResult[23] = tmp34;
      cResult[24] = items11;
      tmp35 = items11;
    }
  }
  const features = guild.features;
  let hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
  if (hasItem) {
    const tmpResult8 = tmp(1382);
    hasItem = !tmpResult8.isAndroid();
  }
  let guildBannerSource = null;
  if (null != guild.banner) {
    const obj27 = { id: null, banner: null };
    ({ id: obj6.id, banner: obj6.banner } = guild);
    const tmp7Result6 = sharedValue(1415);
    guildBannerSource = tmp7Result6.getGuildBannerSource(obj27, hasItem);
  }
  cResult[4] = guild.banner;
  cResult[5] = guild.features;
  cResult[6] = guild.id;
  cResult[7] = guildBannerSource;
  tmp14 = guildBannerSource;
}) : (function GuildFeedBanner(guild) {
  let closure_2;
  let hideDescription;
  let hideMemberCount;
  let intl;
  let intl2;
  let items10;
  let items11;
  let items12;
  let items13;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj10;
  let obj22;
  let obj6;
  let obj8;
  let tmp6Result;
  let tmp6Result4;
  guild = guild.guild;
  let description = guild.description;
  dependencyMap = undefined;
  let width;
  let height;
  let drawerWidth;
  ({ hideDescription, hideMemberCount } = guild);
  let tmp = closure_12();
  let tmp2 = guild;
  let obj = guild(4811);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = guild(4811);
  const fn = function x() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 1869475832859;
  fn.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let bound = Math.max(0.22 * sharedValue(1497)().height, GUILD_FEED_MIN_BANNER_HEIGHT);
  const obj3 = width;
  const items = [guild];
  const tmp8 = sharedValue(4992)();
  const effect = width.useEffect(() => {
    const obj = GuildPopoutActionCreators;
    const guildForPopout = obj.fetchGuildForPopout(guild.id);
  }, items);
  const items1 = [guild];
  let memo = width.useMemo(() => {
    const features = guild.features;
    let hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
    if (hasItem) {
      const obj = PlatformUtils;
      hasItem = !obj.isAndroid();
    }
    let guildBannerSource = null;
    if (null != guild.banner) {
      const obj7 = { id: null, banner: null };
      ({ id: obj3.id, banner: obj3.banner } = guild);
      const obj2 = AvatarUtilsDefault;
      guildBannerSource = obj2.getGuildBannerSource(obj7, hasItem);
    }
    let guildHomeHeaderSource = guildBannerSource;
    if (null != guild) {
      guildHomeHeaderSource = guildBannerSource;
      if (null != guild.homeHeader) {
        const obj8 = { id: null, homeHeader: null };
        ({ id: obj5.id, homeHeader: obj5.homeHeader } = guild);
        const obj4 = AvatarUtilsDefault;
        guildHomeHeaderSource = obj4.getGuildHomeHeaderSource(obj8);
      }
    }
    return guildHomeHeaderSource;
  }, items1);
  const name = guild.name;
  if (description == null) {
    description = guild.description;
  }
  const tmp2Result = tmp2(6169);
  const guildBadgeSource = tmp2Result.getGuildBadgeSource(guild);
  const items2 = [drawerWidth];
  const items3 = [guild];
  const tmp2Result4 = tmp2(504);
  const discoverableGuild = tmp2Result4.useStateFromStoresObject(items2, () => {
    const obj = { discoverableGuild: GuildPopoutStore.getGuild(guild.id) };
    return obj;
  }, items3).discoverableGuild;
  const tmp12 = sharedValue(6625)();
  dependencyMap = tmp12;
  size = tmp6(1497)();
  width = size.width;
  height = size.height;
  const tmp2Result5 = tmp2(10645);
  drawerWidth = tmp2Result5.useDrawerWidth();
  const items4 = [width, height, tmp12, drawerWidth];
  let obj4 = { style: tmp.container, children: items6 };
  const memo1 = obj3.useMemo(() => {
    const bound = Math.min(width, height);
    const tmp = width;
    const tmp2 = height;
    const tmp4 = closure_2;
    if (tmp4) {
      const _Math = Math;
      const _Math2 = Math;
      return Math.min(Math.max(tmp, tmp2) - drawerWidth, bound);
    } else {
      return bound - 2 * GUILD_FEED_CARD_MARGIN_HORIZONTAL;
    }
  }, items4);
  const obj5 = { style: items5, children: closure_10(tmp6Result, obj6) };
  items5 = [{ height: bound, width: "100%" }, animatedStyle];
  View = tmp6(4811).View;
  obj6 = {
    style: tmp.bannerImage,
    source: memo,
    onLoad: function handleLoad() {
      set = sharedValue.set;
      const obj = timing;
      const result = set(obj.withTiming(1, timingPresets.timingSlow));
    }
  };
  tmp6Result = sharedValue(6163);
  if (memo == null) {
    let tmp6Result3;
    const tmp2Result6 = tmp2(4930);
    if (tmp2Result6.isThemeDark(tmp8)) {
      tmp6Result3 = tmp6(16928);
    } else {
      tmp6Result3 = tmp6(16929);
    }
    memo = tmp6Result3;
  }
  items6 = [closure_10(View, obj5), ];
  let obj7 = { style: items7, children: closure_11(height, obj8) };
  items7 = [, ];
  ({ headerContainer: arr8[0], headerBorder: arr8[1] } = tmp);
  obj8 = { style: items8, children: items9 };
  items8 = [tmp.content, { width: memo1, marginTop: -32 }];
  const obj9 = { style: tmp.guildIconContainer, children: closure_10(tmp6Result4, obj10) };
  obj10 = { style: tmp.avatar, guild, size: tmp2(6165).GuildIconSizes.XLARGE, animate: true };
  tmp6Result4 = sharedValue(6165);
  items9 = [closure_10(height, obj9), , , ];
  const obj11 = { style: tmp.textContainer, children: items10 };
  items10 = [, ];
  const obj12 = { lineClamp: 1, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: tmp.title, children: name };
  items10[0] = closure_10(tmp2(5087).Text, obj12);
  let tmp17Result = null;
  if (null != guildBadgeSource) {
    const obj13 = { style: tmp.icon, source: guildBadgeSource, disableColor: true };
    tmp17Result = tmp17(tmp2(1200).Icon, obj13);
  }
  items10[1] = tmp17Result;
  items9[1] = closure_11(height, obj11);
  let tmp17Result2 = null;
  if (null != description) {
    const obj14 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: description };
    tmp17Result2 = tmp17(tmp2(5087).Text, obj14);
  }
  items9[2] = tmp17Result2;
  let tmp15Result4 = null != discoverableGuild && !hideMemberCount;
  if (tmp15Result4) {
    let features = discoverableGuild.features;
    let tmp15Result = null;
    const obj15 = { style: tmp.memberInfo, children: items12 };
    if (features.has(GuildFeatures.DISCOVERABLE)) {
      const obj16 = {
        style: tmp.publicInfo,
        accessibilityRole: "button",
        onPress() {
              let intl;
              const obj = { key: "DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO", content: intl.string(guild(closure_2[32]).t.O8lDI2) };
              const open = sharedValue(closure_2[31]).open;
              sharedValue(closure_2[31]);
              intl = guild(closure_2[32]).intl;
              open(obj);
            },
        children: items11
      };
      const PressableOpacity = tmp2(6191).PressableOpacity;
      const obj17 = { style: tmp.publicIcon, source: sharedValue(16930) };
      const Icon = tmp2(1200).Icon;
      items11 = [closure_10(Icon, obj17), ];
      const obj18 = { variant: "text-xs/medium", color: "text-default", children: intl.string(tmp2(1126).t["B/vjCu"]) };
      const Text = tmp2(5087).Text;
      intl = tmp2(1126).intl;
      items11[1] = closure_10(Text, obj18);
      tmp15Result = tmp15(PressableOpacity, obj16);
    }
    items12 = [tmp15Result, ];
    let tmp15Result3 = null;
    if (null != discoverableGuild.presenceCount) {
      tmp15Result3 = null;
      if (null != discoverableGuild.memberCount) {
        const Fragment = obj3.Fragment;
        const obj19 = { children: items13 };
        const obj20 = { style: tmp.dotOnline };
        items13 = [closure_10(height, obj20), ];
        const obj21 = { variant: "text-xs/medium", color: "text-default", children: intl2.format(tmp2(1126).t.QCNv6P, obj22) };
        const Text2 = tmp2(5087).Text;
        intl2 = tmp2(1126).intl;
        obj22 = { online: null, offline: null };
        ({ presenceCount: obj26.online, memberCount: obj26.offline } = discoverableGuild);
        items13[1] = closure_10(Text2, obj21);
        tmp15Result3 = tmp15(Fragment, obj19);
      }
    }
    items12[1] = tmp15Result3;
    tmp15Result4 = tmp15(tmp16, obj15);
  }
  items9[3] = tmp15Result4;
  items6[1] = closure_10(height, obj7);
  return closure_11(height, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildFeedBannerContainer(guildId) {
  let description;
  let first;
  let hideDescription;
  let hideMemberCount;
  let tmp6;
  const obj = guildId(576);
  const cResult = obj.c(8);
  const tmp = guildId;
  guildId = guildId.guildId;
  ({ description, hideDescription, hideMemberCount } = guildId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function o() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  let tmp8 = null;
  if (null != stateFromStores) {
    if (cResult[3] === description) {
      if (cResult[4] === stateFromStores) {
        if (cResult[5] === hideDescription) {
          let tmp9;
          if (cResult[6] === hideMemberCount) {
            tmp9 = cResult[7];
          }
          tmp8 = tmp9;
        }
      }
    }
    const obj2 = { guild: stateFromStores, description, hideDescription, hideMemberCount };
    const tmp12 = closure_10(closure_15, obj2);
    cResult[3] = description;
    cResult[4] = stateFromStores;
    cResult[5] = hideDescription;
    cResult[6] = hideMemberCount;
    cResult[7] = tmp12;
    tmp9 = tmp12;
  }
  return tmp8;
}) : (function GuildFeedBannerContainer(guildId) {
  let description;
  let hideDescription;
  let hideMemberCount;
  guildId = guildId.guildId;
  ({ description, hideDescription, hideMemberCount } = guildId);
  const items = [GuildStore];
  const obj = guildId(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { guild: stateFromStores, description, hideDescription, hideMemberCount };
    tmp2 = closure_10(closure_15, obj2);
  }
  return tmp2;
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_home/native/components/GuildFeedBanner.tsx");

export default memoResult;
