// Module ID: 11625
// Function ID: 90386
// Name: GuildLevelPowerupHeader
// Dependencies: [31, 27, 4018, 653, 11626, 33, 4130, 689, 4554, 7477, 11608, 11589, 4126, 1212, 2230, 11561, 11581, 11627, 11628, 11586, 2]
// Exports: default

// Module 11625 (GuildLevelPowerupHeader)
import result from "result";
import { View } from "get ActivityIndicator";
import BoostedGuildTiers from "BoostedGuildTiers";
import ME from "ME";
import { TIER_CARDS } from "BoostedGuildTiers";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function GuildLevelPowerupHeader(arg0) {
  let active;
  let nextActive;
  let position;
  ({ active, nextActive, position } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
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
    const items2 = [callback(importDefault(4554), obj), , ];
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
    const colors = importDefault(689).colors;
    obj2.color = active ? colors.WHITE : colors.TEXT_MUTED;
    obj1.children = callback(require(7477) /* BoostGemIcon */.BoostGemIcon, obj2);
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
    tmp = jsxs();
    closure_1 = tmp;
    tmp2 = require("useGuildPowerupColorConfig")(global.isActive);
    textColor = tmp2.textColor;
    iconColor = tmp2.iconColor;
    items = [, , , ];
    items[0] = index;
    items[1] = iconColor;
    items[2] = textColor;
    items[3] = tmp;
    obj = { style: tmp.perkRowContainer };
    items1 = [, ];
    items1[0] = iconColor.useMemo(() => {
      if (null == outer1_9[index]) {
        return [];
      } else {
        if (tmp.tier === outer1_7.TIER_3) {
          const perks = tmp.perks;
          let substr = perks.slice(0, -1);
        } else {
          substr = tmp.perks;
        }
        let mapped;
        if (null != substr) {
          mapped = substr.map((perkIcon) => {
            let obj = index(textColor[11]);
            obj = { style: outer1_1.perkRowStyle };
            obj = { color: outer1_3, size: "sm" };
            const items = [outer2_10(obj.getIconForPerk(perkIcon.perkIcon), obj), ];
            const obj1 = { color: outer1_2, style: outer1_1.perkText, variant: "text-sm/medium", children: perkIcon.getCopy() };
            items[1] = outer2_10(index(textColor[12]).Text, obj1);
            obj.children = items;
            return outer2_11(outer2_4, obj, "perk-" + outer1_0 + "-" + arg1);
          });
        }
        return mapped;
      }
    }, items);
    obj = { style: tmp.perkRow };
    obj1 = { color: textColor, variant: "text-sm/medium" };
    intl = require("getSystemLocale").intl;
    obj1.children = intl.string(require("messagesProxy").nIj3LZ);
    obj.children = jsx(require("Text").Text, obj1);
    items1[1] = jsx(View, obj);
    obj.children = items1;
    return jsxs(View, obj);
  }
}
({ LevelCardPosition: closure_5, PowerupActiveStatusType: closure_6 } = BoostedGuildTiers);
({ BoostedGuildTiers: closure_7, HorizontalGradient: closure_8 } = ME);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = { cardContainer: { flex: 1 }, card: { padding: 0, overflow: "hidden", flex: 1 } };
_createForOfIteratorHelperLoose = { marginVertical: require("_createForOfIteratorHelperLoose").space.PX_24, position: "relative" };
_createForOfIteratorHelperLoose.progressContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.progress = { height: 6, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
let obj1 = { height: 6, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
_createForOfIteratorHelperLoose.progressStart = { marginStart: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { marginStart: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.progressEnd = { marginEnd: require("_createForOfIteratorHelperLoose").space.PX_16, borderTopEndRadius: require("_createForOfIteratorHelperLoose").radii.round, borderBottomEndRadius: require("_createForOfIteratorHelperLoose").radii.round };
const obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_BACKGROUND_DEFAULT, width: 28, height: 28, start: require("_createForOfIteratorHelperLoose").space.PX_16 - 2, top: -11 };
_createForOfIteratorHelperLoose.boostContainerBackground = obj4;
const obj5 = { padding: require("_createForOfIteratorHelperLoose").space.PX_4, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, position: "absolute", width: 24, height: 24, top: -9, start: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
_createForOfIteratorHelperLoose.boostContainer = obj5;
const obj3 = { marginEnd: require("_createForOfIteratorHelperLoose").space.PX_16, borderTopEndRadius: require("_createForOfIteratorHelperLoose").radii.round, borderBottomEndRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.boostContainerActive = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GUILD_BOOSTING_PINK };
const obj6 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GUILD_BOOSTING_PINK };
_createForOfIteratorHelperLoose.boostContainerInactive = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
const obj8 = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: 0, flex: 1 };
_createForOfIteratorHelperLoose.contentContainer = obj8;
const obj7 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
_createForOfIteratorHelperLoose.perkRowContainer = { flexDirection: "column", marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.perkRow = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.perkRowStyle = { flexDirection: "row", alignItems: "center" };
const obj9 = { flexDirection: "column", marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.perkText = { marginStart: require("_createForOfIteratorHelperLoose").space.PX_8 };
const obj10 = { marginStart: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.footerContainer = { marginTop: "auto", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj11 = { marginTop: "auto", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("BoostedGuildTiers").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsLevelCard.tsx");

export default function GuildPowerupsLevelCard(arg0) {
  let guildId;
  let index;
  let isScrollingRef;
  let nextPowerup;
  let powerup;
  ({ guildId, powerup, nextPowerup, index, isScrollingRef } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = importDefault(11561)(guildId, powerup);
  let obj = isScrollingRef(11581);
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp2, false);
  const tmp3 = importDefault(11561)(guildId, nextPowerup);
  const tmp7 = importDefault(11627)(guildId, powerup);
  importDefault = tmp7;
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
  const tmp6 = importDefault(11561)(guildId, nextPowerup).type !== constants2.INACTIVE;
  if (null != nextPowerup) {
    tmp17 = tmp6;
  }
  obj.nextActive = tmp17;
  const items1 = [callback(GuildLevelPowerupHeader, obj), ];
  const obj1 = { style: tmp.contentContainer };
  const items2 = [callback(isScrollingRef(4126).Text, { variant: "heading-lg/semibold", children: powerup.title }), callback(GuildPowerupLevelBody, { isActive: tmp2.type !== constants2.INACTIVE, index }), ];
  const obj2 = { variant: "heading-lg/semibold", children: powerup.title };
  const tmp14 = importDefault(11628);
  const tmp15 = callback;
  const tmp16 = GuildLevelPowerupHeader;
  items2[2] = callback(View, { style: tmp.footerContainer, children: callback(isScrollingRef(11586).GuildPowerupsCardFooter, obj4) });
  obj1.children = items2;
  items1[1] = callback2(View, obj1);
  obj.children = items1;
  return tmp13(tmp14, obj);
};
export { GuildPowerupLevelBody };
