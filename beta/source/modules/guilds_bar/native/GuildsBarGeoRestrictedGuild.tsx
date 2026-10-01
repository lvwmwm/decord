// Module ID: 15983
// Function ID: 15984
// Name: GuildsBarGeoRestrictedGuild
// Dependencies: [19, 15918, 21, 4836, 576, 15934, 15930, 1397, 5896, 5203, 1115, 9048, 15984, 15953, 5899, 2]

// Module 15983 (GuildsBarGeoRestrictedGuild)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5203 */;
import GuildIcon from "GuildIcon" /* 5896 */;
import GuildsBarConstants from "GuildsBarConstants" /* 15918 */;
import GuildsBarAnimatedItemWrapperDefault from "GuildsBarAnimatedItemWrapper" /* 15930 */;
import computeGuildsBarCutoutDefault from "computeGuildsBarCutout" /* 15934 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;

let size;
const GUILD_ITEM_BADGE_SIZE = GuildsBarConstants.GUILD_ITEM_BADGE_SIZE;
const jsx = Fragment.jsx;
let obj = { guildIcon: size, geoRestrictedBadge: { borderColor: "transparent", width: GUILD_ITEM_BADGE_SIZE, height: GUILD_ITEM_BADGE_SIZE, bottom: 4, right: 12 } };
size = { width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
let closure_5 = createStyles.createStyles(obj);
let items = [computeGuildsBarCutoutDefault({ position: "bottom-right" })];
const memoResult = react.memo(function GuildsBarGeoRestrictedGuild(restrictedGuild) {
  let tmp8Result;
  restrictedGuild = restrictedGuild.restrictedGuild;
  let tmp = closure_5();
  let obj = restrictedGuild(15930);
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
          title: intl.string(restrictedGuild(dependencyMap[10]).t.aCAiGl),
          body: intl2.format(restrictedGuild(dependencyMap[10]).t["4cJV9S"], obj2),
          cancelText: intl3.string(restrictedGuild(dependencyMap[10]).t.J2TBi3),
          onCancel() {
            const obj = closure_2_1(closure_2_2[11]);
            obj.leaveGuild(id.id);
          },
          isDismissable: false
        };
        const show = AlertActionCreatorsDefault.show;
        AlertActionCreatorsDefault;
        intl = restrictedGuild(dependencyMap[10]).intl;
        intl2 = restrictedGuild(dependencyMap[10]).intl;
        obj2 = { serverName: name.name };
        intl3 = restrictedGuild(dependencyMap[10]).intl;
        show(obj);
      }
    };
    return obj;
  }, items);
  GuildsBarAnimatedItemWrapperDefault;
  if (null != animatableSourceWithFallback) {
    const obj6 = { source: animatableSourceWithFallback, style: tmp.guildIcon, fadeDuration: 0 };
    tmp8Result = tmp8(tmp9(5899), obj6);
  } else {
    const obj7 = { value: restrictedGuild.name, selected: false, animate: false, size: tmp2(5896).GuildIconSizes.LARGE };
    const tmp9Result = GuildIconDefault;
    tmp8Result = tmp8(tmp9Result, obj7);
  }
  return <tmp10 selected={false} unread={false} circle={false} styles={guildsBarAnimatedWrapperStyles} label={restrictedGuild.name} isDragTarget={false} config={memo} cutouts={items} overState="a" externalChildren="automat do gier" expandedChildren="automat do gry">{tmp8Result}</tmp10>;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGeoRestrictedGuild.tsx");

export default memoResult;
