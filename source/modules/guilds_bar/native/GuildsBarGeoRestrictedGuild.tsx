// Module ID: 14875
// Function ID: 113436
// Name: GUILD_ITEM_BADGE_SIZE
// Dependencies: [31, 14813, 33, 4130, 689, 14827, 1324, 14823, 1392, 5515, 4470, 1212, 8438, 14876, 14844, 5085, 2]

// Module 14875 (GUILD_ITEM_BADGE_SIZE)
import importAllResult from "result";
import { GUILD_ITEM_BADGE_SIZE } from "GUILD_ITEM_SIZE";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let obj = {};
obj = { width: require("_createForOfIteratorHelperLoose").modules.mobile.GUILD_BAR_ITEM_SIZE, height: require("_createForOfIteratorHelperLoose").modules.mobile.GUILD_BAR_ITEM_SIZE };
obj.guildIcon = obj;
_createForOfIteratorHelperLoose = { borderColor: "transparent", width: GUILD_ITEM_BADGE_SIZE, height: GUILD_ITEM_BADGE_SIZE, bottom: 4, right: 12 };
obj.geoRestrictedBadge = _createForOfIteratorHelperLoose;
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
let items = [require("computeGuildsBarCutout")({ position: "bottom-right" })];
const memoResult = importAllResult.memo(function GuildsBarGeoRestrictedGuild(restrictedGuild) {
  restrictedGuild = restrictedGuild.restrictedGuild;
  const tmp2 = callback();
  let obj = restrictedGuild(14823);
  let animatableSourceWithFallback = null;
  const tmp = importDefault(1324)("GuildsBarGeoRestrictedGuild");
  if (null != restrictedGuild.icon) {
    let obj1 = importDefault(1392);
    animatableSourceWithFallback = obj1.getAnimatableSourceWithFallback(false, (canAnimate) => {
      let obj = outer1_1(outer1_2[8]);
      obj = { id: restrictedGuild.id, size: restrictedGuild(outer1_2[9]).ImageSizes[restrictedGuild(undefined, outer1_2[9]).GuildIconSizes.LARGE], icon: restrictedGuild.icon, canAnimate };
      return obj.getGuildIconSource(obj);
    });
  }
  const items = [, ];
  ({ id: arr[0], name: arr[1] } = restrictedGuild);
  const memo = importAllResult.useMemo(() => ({
    onPress() {
      let obj = outer2_1(outer2_2[10]);
      obj = {};
      const intl = restrictedGuild(outer2_2[11]).intl;
      obj.title = intl.string(restrictedGuild(outer2_2[11]).t.aCAiGl);
      const intl2 = restrictedGuild(outer2_2[11]).intl;
      obj = { serverName: outer1_0.name };
      obj.body = intl2.format(restrictedGuild(outer2_2[11]).t["4cJV9S"], obj);
      const intl3 = restrictedGuild(outer2_2[11]).intl;
      obj.cancelText = intl3.string(restrictedGuild(outer2_2[11]).t.J2TBi3);
      obj.onCancel = function onCancel() {
        outer3_1(outer3_2[12]).leaveGuild(outer2_0.id);
      };
      obj.show(obj);
    }
  }), items);
  obj = { selected: false, unread: false, circle: !tmp };
  obj.styles = obj.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  obj.label = restrictedGuild.name;
  obj.isDragTarget = false;
  obj.config = memo;
  obj.cutouts = items;
  obj.overState = undefined;
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  const tmp8 = jsx;
  obj = { style: tmp2.geoRestrictedBadge };
  obj.externalChildren = jsx(importDefault(14876), { style: tmp2.geoRestrictedBadge });
  obj1 = { guildId: restrictedGuild.id };
  obj.expandedChildren = jsx(importDefault(14844), { guildId: restrictedGuild.id });
  if (null != animatableSourceWithFallback) {
    const obj2 = { source: animatableSourceWithFallback, style: tmp2.guildIcon, fadeDuration: 0 };
    let tmp15 = jsx(importDefault(5085), { source: animatableSourceWithFallback, style: tmp2.guildIcon, fadeDuration: 0 });
  } else {
    const obj3 = { value: restrictedGuild.name, selected: false, animate: false, size: restrictedGuild(5515).GuildIconSizes.LARGE };
    tmp15 = jsx(importDefault(5515), { value: restrictedGuild.name, selected: false, animate: false, size: restrictedGuild(5515).GuildIconSizes.LARGE });
    const tmp13 = importDefault(5515);
  }
  obj.children = tmp15;
  return tmp8(importDefault(14823), obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/guilds_bar/native/GuildsBarGeoRestrictedGuild.tsx");

export default memoResult;
