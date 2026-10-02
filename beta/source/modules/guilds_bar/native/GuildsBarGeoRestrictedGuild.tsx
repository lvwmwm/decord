// Module ID: 15984
// Function ID: 15985
// Name: GuildsBarGeoRestrictedGuild
// Dependencies: [19, 15919, 21, 4837, 588, 15935, 558, 576, 15931, 1403, 5893, 5204, 1127, 9025, 15985, 15954, 5896, 2]

// Module 15984 (GuildsBarGeoRestrictedGuild)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 588 */;
import intl4 from "intl" /* 1127 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1403 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5204 */;
import GuildIcon from "GuildIcon" /* 5893 */;
import FastImageDefault from "FastImage" /* 5896 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9025 */;
import GuildsBarConstants from "GuildsBarConstants" /* 15919 */;
import GuildsBarAnimatedItemWrapperDefault from "GuildsBarAnimatedItemWrapper" /* 15931 */;
import computeGuildsBarCutoutDefault from "computeGuildsBarCutout" /* 15935 */;
import HomeDrawerGuildRowDefault from "HomeDrawerGuildRow" /* 15954 */;
import GuildsBarGeoRestrictedBadgeDefault from "GuildsBarGeoRestrictedBadge" /* 15985 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
let restrictedGuild;

let size;
const GUILD_ITEM_BADGE_SIZE = GuildsBarConstants.GUILD_ITEM_BADGE_SIZE;
const jsx = Fragment.jsx;
let obj = { guildIcon: size, geoRestrictedBadge: { borderColor: "transparent", width: GUILD_ITEM_BADGE_SIZE, height: GUILD_ITEM_BADGE_SIZE, bottom: 4, right: 12 } };
size = { width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
let closure_5 = createStyles.createStyles(obj);
let items = [computeGuildsBarCutoutDefault({ position: "bottom-right" })];
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((restrictedGuild) => {
  let first;
  let tmp = restrictedGuild;
  let obj = restrictedGuild(576);
  const cResult = obj.c(22);
  restrictedGuild = restrictedGuild.restrictedGuild;
  const tmp4 = closure_5();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { disableSelectedColor: true, disableBGColor: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult = tmp(15931);
  const guildsBarAnimatedWrapperStyles = tmpResult.useGuildsBarAnimatedWrapperStyles(first);
  if (cResult[1] === restrictedGuild.icon) {
    let tmp7;
    if (cResult[2] === restrictedGuild.id) {
      tmp7 = cResult[3];
    }
    if (cResult[4] === restrictedGuild.id) {
      let tmp10;
      let tmp11;
      let tmp15;
      let tmp24;
      if (cResult[5] === restrictedGuild.name) {
        tmp10 = cResult[6];
      }
      if (cResult[7] !== tmp4.geoRestrictedBadge) {
        const tmp14 = jsx(GuildsBarGeoRestrictedBadgeDefault, { style: tmp4.geoRestrictedBadge });
        cResult[7] = tmp4.geoRestrictedBadge;
        cResult[8] = tmp14;
        tmp11 = tmp14;
      } else {
        tmp11 = cResult[8];
      }
      if (cResult[9] !== restrictedGuild.id) {
        const tmp18 = jsx(HomeDrawerGuildRowDefault, { guildId: restrictedGuild.id });
        cResult[9] = restrictedGuild.id;
        cResult[10] = tmp18;
        tmp15 = tmp18;
      } else {
        tmp15 = cResult[10];
      }
      if (cResult[11] === tmp7) {
        if (cResult[12] === tmp4.guildIcon) {
          let tmp19;
          if (cResult[13] === restrictedGuild.name) {
            tmp19 = cResult[14];
          }
          if (cResult[15] === tmp10) {
            if (cResult[16] === restrictedGuild.name) {
              if (cResult[17] === tmp11) {
                if (cResult[18] === tmp15) {
                  if (cResult[19] === tmp19) {
                    let tmp27;
                    if (cResult[20] === guildsBarAnimatedWrapperStyles) {
                      tmp27 = cResult[21];
                    }
                    return tmp27;
                  }
                }
              }
            }
          }
          const tmp31 = jsx(GuildsBarAnimatedItemWrapperDefault, { selected: false, unread: false, circle: false, styles: guildsBarAnimatedWrapperStyles, label: restrictedGuild.name, isDragTarget: false, config: tmp10, cutouts: items, overState: "a", externalChildren: tmp11, expandedChildren: tmp15, children: tmp19 });
          cResult[15] = tmp10;
          cResult[16] = restrictedGuild.name;
          cResult[17] = tmp11;
          cResult[18] = tmp15;
          cResult[19] = tmp19;
          cResult[20] = guildsBarAnimatedWrapperStyles;
          cResult[21] = tmp31;
          tmp27 = tmp31;
        }
      }
      if (null != tmp7) {
        tmp24 = jsx(FastImageDefault, { source: tmp7, style: tmp4.guildIcon, fadeDuration: 0 });
      } else {
        GuildIconDefault;
        tmp24 = <tmp23 value={restrictedGuild.name} selected={false} animate={false} size={tmp(5893).GuildIconSizes.LARGE} />;
      }
      cResult[11] = tmp7;
      cResult[12] = tmp4.guildIcon;
      cResult[13] = restrictedGuild.name;
      cResult[14] = tmp24;
      tmp19 = tmp24;
    }
    const obj9 = {
      onPress() {
          let id;
          let intl;
          let intl2;
          let intl3;
          let obj2;
          let obj = {
            title: intl.string(intl4.t.aCAiGl),
            body: intl2.format(intl4.t["4cJV9S"], obj2),
            cancelText: intl3.string(intl4.t.J2TBi3),
            onCancel() {
              const obj = GuildSettingsActionCreatorsDefault;
              obj.leaveGuild(id.id);
            },
            isDismissable: false
          };
          const show = AlertActionCreatorsDefault.show;
          AlertActionCreatorsDefault;
          intl = intl4.intl;
          intl2 = intl4.intl;
          obj2 = { serverName: restrictedGuild.name };
          intl3 = intl4.intl;
          show(obj);
        }
    };
    cResult[4] = restrictedGuild.id;
    cResult[5] = restrictedGuild.name;
    cResult[6] = obj9;
    tmp10 = obj9;
  }
  let animatableSourceWithFallback = null;
  if (null != restrictedGuild.icon) {
    const obj4 = AvatarUtilsDefault;
    animatableSourceWithFallback = obj4.getAnimatableSourceWithFallback(false, (canAnimate) => {
      const getGuildIconSource = AvatarUtilsDefault.getGuildIconSource;
      const obj = { id: restrictedGuild.id, size: GuildIcon.ImageSizes[GuildIcon.GuildIconSizes.LARGE], icon: restrictedGuild.icon, canAnimate };
      return getGuildIconSource(obj);
    });
  }
  cResult[1] = restrictedGuild.icon;
  cResult[2] = restrictedGuild.id;
  cResult[3] = animatableSourceWithFallback;
  tmp7 = animatableSourceWithFallback;
}) : ((restrictedGuild) => {
  let tmp8Result;
  restrictedGuild = restrictedGuild.restrictedGuild;
  let tmp = closure_5();
  let obj = restrictedGuild(15931);
  let animatableSourceWithFallback = null;
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  const tmp2 = restrictedGuild;
  if (null != restrictedGuild.icon) {
    let obj2 = AvatarUtilsDefault;
    animatableSourceWithFallback = obj2.getAnimatableSourceWithFallback(false, (canAnimate) => {
      const getGuildIconSource = AvatarUtilsDefault.getGuildIconSource;
      const obj = { id: restrictedGuild.id, size: GuildIcon.ImageSizes[GuildIcon.GuildIconSizes.LARGE], icon: restrictedGuild.icon, canAnimate };
      return getGuildIconSource(obj);
    });
  }
  items = [, ];
  ({ id: arr[0], name: arr[1] } = restrictedGuild);
  const memo = react.useMemo(() => {
    let name;
    let obj = {
      onPress() {
        let id;
        let intl;
        let intl2;
        let intl3;
        let obj2;
        let obj = {
          title: intl.string(restrictedGuild(dependencyMap[12]).t.aCAiGl),
          body: intl2.format(restrictedGuild(dependencyMap[12]).t["4cJV9S"], obj2),
          cancelText: intl3.string(restrictedGuild(dependencyMap[12]).t.J2TBi3),
          onCancel() {
            const obj = closure_2_1(closure_2_2[13]);
            obj.leaveGuild(id.id);
          },
          isDismissable: false
        };
        const show = AlertActionCreatorsDefault.show;
        AlertActionCreatorsDefault;
        intl = restrictedGuild(dependencyMap[12]).intl;
        intl2 = restrictedGuild(dependencyMap[12]).intl;
        obj2 = { serverName: name.name };
        intl3 = restrictedGuild(dependencyMap[12]).intl;
        show(obj);
      }
    };
    return obj;
  }, items);
  GuildsBarAnimatedItemWrapperDefault;
  if (null != animatableSourceWithFallback) {
    const obj6 = { source: animatableSourceWithFallback, style: tmp.guildIcon, fadeDuration: 0 };
    tmp8Result = tmp8(tmp9(5896), obj6);
  } else {
    const obj7 = { value: restrictedGuild.name, selected: false, animate: false, size: tmp2(5893).GuildIconSizes.LARGE };
    const tmp9Result = GuildIconDefault;
    tmp8Result = tmp8(tmp9Result, obj7);
  }
  return <tmp10 selected={false} unread={false} circle={false} styles={guildsBarAnimatedWrapperStyles} label={restrictedGuild.name} isDragTarget={false} config={memo} cutouts={items} overState="a" externalChildren={40} expandedChildren={12}>{tmp8Result}</tmp10>;
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGeoRestrictedGuild.tsx");

export default memoResult;
