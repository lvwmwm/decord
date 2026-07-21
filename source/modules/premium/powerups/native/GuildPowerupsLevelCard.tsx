// Module ID: 11587
// Function ID: 90086
// Name: GuildLevelPowerupHeader
// Dependencies: []
// Exports: default

// Module 11587 (GuildLevelPowerupHeader)
function GuildLevelPowerupHeader(arg0) {
  let active;
  let nextActive;
  let position;
  ({ active, nextActive, position } = arg0);
  const tmp = callback3();
  if (active) {
    if (false !== nextActive) {
      const items = [tmp.boostContainerActive.backgroundColor, tmp.boostContainerActive.backgroundColor];
      let items6 = items;
    }
    let obj = { style: tmp.progressContainer };
    obj = { start: constants3.START, end: constants3.END, colors: items6 };
    const items1 = [tmp.progress, , ];
    let progressStart = position === constants.START;
    if (progressStart) {
      progressStart = tmp.progressStart;
    }
    items1[1] = progressStart;
    items1[2] = position === constants.END && tmp.progressEnd;
    obj.style = items1;
    const items2 = [callback(importDefault(dependencyMap[8]), obj), , ];
    obj = {};
    const items3 = [, ];
    ({ boostContainer: arr6[0], boostContainerBackground: arr6[1] } = tmp);
    obj.style = items3;
    items2[1] = callback(View, obj);
    const obj1 = {};
    const items4 = [tmp.boostContainer, ];
    let boostContainerActive = active;
    if (active) {
      boostContainerActive = tmp.boostContainerActive;
    }
    items4[1] = boostContainerActive;
    obj1.style = items4;
    const obj2 = { size: "xs" };
    const colors = importDefault(dependencyMap[7]).colors;
    obj2.color = active ? colors.WHITE : colors.TEXT_MUTED;
    obj1.children = callback(arg1(dependencyMap[9]).BoostGemIcon, obj2);
    items2[2] = callback(View, obj1);
    obj.children = items2;
    return closure_11(View, obj);
  }
  if (active) {
    if (false === nextActive) {
      const items5 = [tmp.boostContainerActive.backgroundColor, tmp.boostContainerInactive.backgroundColor];
      items6 = items5;
    }
  }
  items6 = [tmp.boostContainerInactive.backgroundColor, tmp.boostContainerInactive.backgroundColor];
}
class GuildPowerupLevelBody {
  constructor(arg0) {
    index = global.index;
    arg1 = index;
    tmp = jsxs();
    importDefault = tmp;
    tmp2 = importDefault(dependencyMap[10])(global.isActive);
    textColor = tmp2.textColor;
    dependencyMap = textColor;
    iconColor = tmp2.iconColor;
    importAll = iconColor;
    items = [, , , ];
    items[0] = index;
    items[1] = iconColor;
    items[2] = textColor;
    items[3] = tmp;
    obj = { style: tmp.perkRowContainer };
    items1 = [, ];
    items1[0] = importAll.useMemo(() => {
      if (null == closure_9[closure_0]) {
        return [];
      } else {
        if (tmp.tier === TIER_3.TIER_3) {
          const perks = tmp.perks;
          let substr = perks.slice(0, -1);
        } else {
          substr = tmp.perks;
        }
        let mapped;
        if (null != substr) {
          mapped = substr.map((perkIcon) => {
            let obj = callback(closure_2[11]);
            obj = { style: closure_1.perkRowStyle };
            obj = { color: closure_3, size: "sm" };
            const items = [callback2(obj.getIconForPerk(perkIcon.perkIcon), obj), ];
            const obj1 = { color: closure_2, style: closure_1.perkText, variant: "text-sm/medium", children: perkIcon.getCopy() };
            items[1] = callback2(callback(closure_2[12]).Text, obj1);
            obj.children = items;
            return callback3(closure_4, obj, "perk-" + callback + "-" + arg1);
          });
        }
        return mapped;
      }
    }, items);
    obj = { style: tmp.perkRow };
    obj1 = { color: textColor, variant: "text-sm/medium" };
    intl = arg1(dependencyMap[13]).intl;
    obj1.children = intl.string(importDefault(dependencyMap[14]).nIj3LZ);
    obj.children = jsx(arg1(dependencyMap[12]).Text, obj1);
    items1[1] = jsx(View, obj);
    obj.children = items1;
    return jsxs(View, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ LevelCardPosition: closure_5, PowerupActiveStatusType: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ BoostedGuildTiers: closure_7, HorizontalGradient: closure_8 } = arg1(dependencyMap[3]));
const TIER_CARDS = arg1(dependencyMap[4]).TIER_CARDS;
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { cardContainer: { flex: 1 }, card: { 1446730851: "c5a514a204d76328abe2ecbd82735ce3", 2021915988: "no_mutual_friends_dark", -1968402488: "png" } };
obj = { marginVertical: importDefault(dependencyMap[7]).space.PX_24, position: "relative" };
obj.progressContainer = obj;
const tmp4 = arg1(dependencyMap[5]);
obj.progress = { height: 6, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_SUBTLE };
const obj1 = { height: 6, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_SUBTLE };
obj.progressStart = { marginStart: importDefault(dependencyMap[7]).space.PX_16 };
const obj2 = { marginStart: importDefault(dependencyMap[7]).space.PX_16 };
obj.progressEnd = { marginEnd: importDefault(dependencyMap[7]).space.PX_16, borderTopEndRadius: importDefault(dependencyMap[7]).radii.round, borderBottomEndRadius: importDefault(dependencyMap[7]).radii.round };
const obj3 = { marginEnd: importDefault(dependencyMap[7]).space.PX_16, borderTopEndRadius: importDefault(dependencyMap[7]).radii.round, borderBottomEndRadius: importDefault(dependencyMap[7]).radii.round };
obj.boostContainerBackground = { backgroundColor: importDefault(dependencyMap[7]).colors.CARD_BACKGROUND_DEFAULT, start: importDefault(dependencyMap[7]).space.PX_16 - 2 };
const obj5 = { 9223372036854775807: "un mese", -9223372036854775808: "{{count}} mesi", -9223372036854775808: "circa un anno", 9223372036854775807: "circa {{count}} anni", EMPTY_SOUND_LIST: "un anno", overflow: "{{count}} anni", had_cache_at_startup: "pi\u00F9 di un anno", guild_features: "pi\u00F9 di {{count}} anni", tamldec: "quasi un anno", padding: importDefault(dependencyMap[7]).space.PX_4, borderRadius: importDefault(dependencyMap[7]).radii.round, start: importDefault(dependencyMap[7]).space.PX_16, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_SUBTLE };
obj.boostContainer = obj5;
const obj4 = { backgroundColor: importDefault(dependencyMap[7]).colors.CARD_BACKGROUND_DEFAULT, start: importDefault(dependencyMap[7]).space.PX_16 - 2 };
obj.boostContainerActive = { backgroundColor: importDefault(dependencyMap[7]).unsafe_rawColors.GUILD_BOOSTING_PINK };
const obj6 = { backgroundColor: importDefault(dependencyMap[7]).unsafe_rawColors.GUILD_BOOSTING_PINK };
obj.boostContainerInactive = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_SUBTLE };
const obj7 = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_SUBTLE };
obj.contentContainer = { padding: importDefault(dependencyMap[7]).space.PX_16 };
const obj8 = { padding: importDefault(dependencyMap[7]).space.PX_16 };
obj.perkRowContainer = { flexDirection: "column", marginTop: importDefault(dependencyMap[7]).space.PX_16, gap: importDefault(dependencyMap[7]).space.PX_8 };
obj.perkRow = { "Null": 7, "Null": 370 };
obj.perkRowStyle = { "Null": 7, "Null": 370 };
const obj9 = { flexDirection: "column", marginTop: importDefault(dependencyMap[7]).space.PX_16, gap: importDefault(dependencyMap[7]).space.PX_8 };
obj.perkText = { marginStart: importDefault(dependencyMap[7]).space.PX_8 };
const obj10 = { marginStart: importDefault(dependencyMap[7]).space.PX_8 };
obj.footerContainer = { marginTop: "auto", paddingTop: importDefault(dependencyMap[7]).space.PX_16 };
let closure_12 = obj.createStyles(obj);
const obj11 = { marginTop: "auto", paddingTop: importDefault(dependencyMap[7]).space.PX_16 };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsLevelCard.tsx");

export default function GuildPowerupsLevelCard(arg0) {
  let guildId;
  let index;
  let isScrollingRef;
  let nextPowerup;
  let powerup;
  ({ guildId, powerup, nextPowerup, index, isScrollingRef } = arg0);
  const arg1 = isScrollingRef;
  const tmp = callback3();
  const tmp2 = importDefault(dependencyMap[15])(guildId, powerup);
  let obj = arg1(dependencyMap[16]);
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp2, false);
  const tmp3 = importDefault(dependencyMap[15])(guildId, nextPowerup);
  const tmp7 = importDefault(dependencyMap[17])(guildId, powerup);
  const importDefault = tmp7;
  if (0 === index) {
    let MIDDLE = constants.START;
  } else if (null == nextPowerup) {
    MIDDLE = constants.END;
  } else {
    MIDDLE = constants.MIDDLE;
  }
  const items = [isScrollingRef, tmp7];
  const callback = React.useCallback(() => {
    if (!isScrollingRef.current) {
      tmp7();
    }
  }, items);
  obj = { containerStyle: tmp.cardContainer, style: tmp.card, onPress: callback, status: calculatePowerupCardStatus };
  obj = { position: MIDDLE, active: tmp2.type !== constants2.INACTIVE };
  let tmp17;
  const tmp13 = callback2;
  const tmp6 = importDefault(dependencyMap[15])(guildId, nextPowerup).type !== constants2.INACTIVE;
  if (null != nextPowerup) {
    tmp17 = tmp6;
  }
  obj.nextActive = tmp17;
  const items1 = [callback(GuildLevelPowerupHeader, obj), ];
  const obj1 = { style: tmp.contentContainer };
  const items2 = [callback(arg1(dependencyMap[12]).Text, { variant: "heading-lg/semibold", children: powerup.title }), callback(GuildPowerupLevelBody, { isActive: tmp2.type !== constants2.INACTIVE, index }), ];
  const obj2 = { variant: "heading-lg/semibold", children: powerup.title };
  const tmp14 = importDefault(dependencyMap[18]);
  const tmp15 = callback;
  const tmp16 = GuildLevelPowerupHeader;
  items2[2] = callback(View, { style: tmp.footerContainer, children: callback(arg1(dependencyMap[19]).GuildPowerupsCardFooter, obj4) });
  obj1.children = items2;
  items1[1] = callback2(View, obj1);
  obj.children = items1;
  return tmp13(tmp14, obj);
};
export { GuildPowerupLevelBody };
