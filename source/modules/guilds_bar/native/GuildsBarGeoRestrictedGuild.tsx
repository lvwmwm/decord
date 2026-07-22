// Module ID: 14759
// Function ID: 111268
// Name: GUILD_ITEM_BADGE_SIZE
// Dependencies: []

// Module 14759 (GUILD_ITEM_BADGE_SIZE)
const importAllResult = importAll(dependencyMap[0]);
const GUILD_ITEM_BADGE_SIZE = arg1(dependencyMap[1]).GUILD_ITEM_BADGE_SIZE;
const jsx = arg1(dependencyMap[2]).jsx;
let obj1 = arg1(dependencyMap[3]);
let obj = {};
obj = { width: importDefault(dependencyMap[4]).modules.mobile.GUILD_BAR_ITEM_SIZE, height: importDefault(dependencyMap[4]).modules.mobile.GUILD_BAR_ITEM_SIZE };
obj.guildIcon = obj;
obj1 = { <string:1402249308>: "/assets/design/components/Icon/native/redesign/generated/images", <string:2858493750>: 24, <string:996584032>: 24, <string:3973631124>: null, <string:1314541923>: "d6a8eeb03988caf260d6fea57b710519", width: GUILD_ITEM_BADGE_SIZE, height: GUILD_ITEM_BADGE_SIZE };
obj.geoRestrictedBadge = obj1;
let closure_5 = obj1.createStyles(obj);
const items = [importDefault(dependencyMap[5])({ position: "bottom-right" })];
const memoResult = importAllResult.memo(function GuildsBarGeoRestrictedGuild(restrictedGuild) {
  restrictedGuild = restrictedGuild.restrictedGuild;
  const arg1 = restrictedGuild;
  const tmp2 = callback();
  let obj = arg1(dependencyMap[7]);
  let animatableSourceWithFallback = null;
  const tmp = importDefault(dependencyMap[6])("GuildsBarGeoRestrictedGuild");
  if (null != restrictedGuild.icon) {
    let obj1 = importDefault(dependencyMap[8]);
    animatableSourceWithFallback = obj1.getAnimatableSourceWithFallback(false, (canAnimate) => {
      let obj = callback(closure_2[8]);
      obj = { id: restrictedGuild.id, size: restrictedGuild(closure_2[9]).ImageSizes[closure_0(undefined, closure_2[9]).GuildIconSizes.LARGE], icon: restrictedGuild.icon, canAnimate };
      return obj.getGuildIconSource(obj);
    });
  }
  const items = [, ];
  ({ id: arr[0], name: arr[1] } = restrictedGuild);
  const memo = importAllResult.useMemo(() => ({
    onPress() {
      let obj = callback(closure_2[10]);
      obj = {};
      const intl = lib(closure_2[11]).intl;
      obj.title = intl.string(lib(closure_2[11]).t.aCAiGl);
      const intl2 = lib(closure_2[11]).intl;
      obj = { serverName: lib.name };
      obj.body = intl2.format(lib(closure_2[11]).t.4cJV9S, obj);
      const intl3 = lib(closure_2[11]).intl;
      obj.cancelText = intl3.string(lib(closure_2[11]).t.J2TBi3);
      obj.onCancel = function onCancel() {
        callback(closure_2[12]).leaveGuild(id.id);
      };
      obj.show(obj);
    }
  }), items);
  obj = { circle: !tmp, styles: obj.useGuildsBarAnimatedWrapperStyles({ 1365399211: null, 996494938: null }), label: restrictedGuild.name, isDragTarget: false, config: memo, cutouts: items, overState: undefined };
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles({ 1365399211: null, 996494938: null });
  const tmp8 = jsx;
  obj = { style: tmp2.geoRestrictedBadge };
  obj.externalChildren = jsx(importDefault(dependencyMap[13]), obj);
  obj1 = { guildId: restrictedGuild.id };
  obj.expandedChildren = jsx(importDefault(dependencyMap[14]), obj1);
  if (null != animatableSourceWithFallback) {
    const obj2 = { source: animatableSourceWithFallback, style: tmp2.guildIcon, fadeDuration: 0 };
    let tmp15 = jsx(importDefault(dependencyMap[15]), obj2);
  } else {
    const obj3 = { 9223372036854775807: "HTTP", 9223372036854775807: "Date", 0: "HTTP", value: restrictedGuild.name, size: arg1(dependencyMap[9]).GuildIconSizes.LARGE };
    tmp15 = jsx(importDefault(dependencyMap[9]), obj3);
    const tmp13 = importDefault(dependencyMap[9]);
  }
  obj.children = tmp15;
  return tmp8(importDefault(dependencyMap[7]), obj);
});
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/guilds_bar/native/GuildsBarGeoRestrictedGuild.tsx");

export default memoResult;
