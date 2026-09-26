// Module ID: 16689
// Function ID: 16690
// Name: GuildsBarGeoRestrictedGuild
// Dependencies: [19, 16624, 21, 4788, 576, 16640, 16636, 1397, 5833, 5140, 1115, 9887, 16690, 16659, 5836, 2]

// Module 16689 (GuildsBarGeoRestrictedGuild)
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5140 */;
import GuildIcon from "GuildIcon" /* 5833 */;
import GuildsBarAnimatedItemWrapperDefault from "GuildsBarAnimatedItemWrapper" /* 16636 */;
import computeGuildsBarCutoutDefault from "computeGuildsBarCutout" /* 16640 */;
import HomeDrawerGuildRowDefault from "HomeDrawerGuildRow" /* 16659 */;
import GuildsBarGeoRestrictedBadgeDefault from "GuildsBarGeoRestrictedBadge" /* 16690 */;
import noop from "module_19" /* 19 */;

require = fn;
const GUILD_ITEM_BADGE_SIZE = fn(16624).GUILD_ITEM_BADGE_SIZE;
const jsx = fn(21).jsx;
const createStyles = fn(4788);
let obj = { guildIcon: null, geoRestrictedBadge: null };
let size = { width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
obj.guildIcon = size;
obj.geoRestrictedBadge = { borderColor: "transparent", width: GUILD_ITEM_BADGE_SIZE, height: GUILD_ITEM_BADGE_SIZE, bottom: 4, right: 12 };
let closure_5 = createStyles.createStyles(obj);
let items = [computeGuildsBarCutoutDefault({ position: "bottom-right" })];
size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGeoRestrictedGuild.tsx");

export default noop.memo(function GuildsBarGeoRestrictedGuild(restrictedGuild) {
  restrictedGuild = restrictedGuild.restrictedGuild;
  const tmp = closure_5();
  let animatableSourceWithFallback = null;
  let obj = restrictedGuild(16636);
  const tmp2 = restrictedGuild;
  if (null != restrictedGuild.icon) {
    animatableSourceWithFallback = AvatarUtilsDefault.getAnimatableSourceWithFallback(false, (canAnimate) => {
      const obj = AvatarUtilsDefault;
      return obj.getGuildIconSource({ id: restrictedGuild.id, size: GuildIcon.ImageSizes[GuildIcon.GuildIconSizes.LARGE], icon: restrictedGuild.icon, canAnimate });
    });
  }
  items = [, ];
  ({ id: arr[0], name: arr[1] } = restrictedGuild);
  const memo = noop.useMemo(() => ({
    onPress() {
      const obj2 = { title: null, body: null, cancelText: null, onCancel: null, isDismissable: false };
      const intl = restrictedGuild(1115).intl;
      obj2.title = intl.string(restrictedGuild(1115).t.aCAiGl);
      const intl2 = restrictedGuild(1115).intl;
      obj2.body = intl2.format(restrictedGuild(1115).t["4cJV9S"], { serverName: name.name });
      const intl3 = restrictedGuild(1115).intl;
      obj2.cancelText = intl3.string(restrictedGuild(1115).t.J2TBi3);
      obj2.onCancel = function onCancel() {
        closure_2_1(dependencyMap[11]).leaveGuild(id.id);
      };
      AlertActionCreatorsDefault.show(obj2);
    }
  }), items);
  const obj3 = { selected: false, unread: false, circle: false, styles: restrictedGuild(16636).useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true }), label: restrictedGuild.name, isDragTarget: false, config: memo, cutouts: items, overState: "a", externalChildren: 28, expandedChildren: 480, children: "center" };
  const guildsBarAnimatedWrapperStyles = restrictedGuild(16636).useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  obj3.externalChildren = jsx(GuildsBarGeoRestrictedBadgeDefault, { style: tmp.geoRestrictedBadge });
  obj3.expandedChildren = jsx(HomeDrawerGuildRowDefault, { guildId: restrictedGuild.id });
  if (null != animatableSourceWithFallback) {
    const obj6 = { source: animatableSourceWithFallback, style: tmp.guildIcon, fadeDuration: 0 };
    let tmp8Result = tmp8(tmp9(5836), obj6);
  } else {
    const obj7 = { value: restrictedGuild.name, selected: false, animate: false, size: tmp2(5833).GuildIconSizes.LARGE };
    tmp8Result = tmp8(tmp9(5833), obj7);
    const tmp9Result = tmp9(5833);
  }
  obj3.children = tmp8Result;
  return jsx(GuildsBarAnimatedItemWrapperDefault, { selected: false, unread: false, circle: false, styles: restrictedGuild(16636).useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true }), label: restrictedGuild.name, isDragTarget: false, config: memo, cutouts: items, overState: "a", externalChildren: 28, expandedChildren: 480, children: "center" });
});
