// Module ID: 15000
// Function ID: 114267
// Name: GuildThemeMemberCoachmark
// Dependencies: [31, 4122, 4017, 4018, 1345, 33, 4130, 689, 566, 4021, 11553, 15001, 4037, 4966, 1212, 2230, 11556, 8563, 2]
// Exports: default

// Module 15000 (GuildThemeMemberCoachmark)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { GUILD_THEME_POWERUP_BOOST_PRICE as closure_6 } from "BoostedGuildTiers";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: 120, width: 260 - 2 * require("_createForOfIteratorHelperLoose").space.PX_16, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose.coachmarkImage = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/powerups/native/GuildThemeMemberCoachmark.tsx");

export default function GuildThemeMemberCoachmark(guildId) {
  guildId = guildId.guildId;
  const markAsDismissed = guildId.markAsDismissed;
  let guildPowerupBannerImage;
  let c5;
  let callback;
  let callback1;
  let tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  const items = [c5];
  const items1 = [guildId];
  const stateFromStores = guildId(566).useStateFromStores(items, () => {
    const stateForGuild = _undefined.getStateForGuild(guildId);
    let tmp2;
    if (null != stateForGuild) {
      tmp2 = stateForGuild.allPowerups[guildId(undefined, tmp[9]).GUILD_POWERUP_GUILD_THEME_SKU_ID];
    }
    return tmp2;
  }, items1);
  let obj = guildId(566);
  const items2 = [guildPowerupBannerImage];
  const stateFromStores1 = guildId(566).useStateFromStores(items2, () => guildPowerupBannerImage.useReducedMotion);
  const obj2 = guildId(566);
  guildPowerupBannerImage = guildId(11553).getGuildPowerupBannerImage(stateFromStores, stateFromStores1, true);
  if (null == guildPowerupBannerImage) {
    guildPowerupBannerImage = markAsDismissed(15001);
  }
  const diff = callback - markAsDismissed(4037)(guildId).available;
  c5 = diff;
  const items3 = [markAsDismissed];
  callback = stateFromStores1.useCallback(() => {
    markAsDismissed(callback1.USER_DISMISS);
  }, items3);
  const items4 = [diff, guildId, markAsDismissed];
  callback1 = stateFromStores1.useCallback(() => {
    const tmp = markAsDismissed(callback1.TAKE_ACTION);
    if (c5 > 0) {
      guildId(tmp[13]).openApplyBoostModal(guildId);
      const obj = guildId(tmp[13]);
    }
  }, items4);
  const items5 = [callback, callback1, guildPowerupBannerImage, tmp.coachmarkImage, stateFromStores1];
  const memo = stateFromStores1.useMemo(() => {
    const obj = { title: null, description: null, visible: true, position: "bottom", offsetY: 8 };
    const intl = guildId(tmp[14]).intl;
    obj.title = intl.string(markAsDismissed(tmp[15]).RK6NbY);
    const intl2 = guildId(tmp[14]).intl;
    obj.description = intl2.string(markAsDismissed(tmp[15]).xlAqGk);
    obj.onDismiss = callback;
    obj.renderImgComponent = function renderImgComponent() {
      return outer2_8(markAsDismissed(table[16]), { imageUrl: outer1_4, isAnimated: !outer1_3, style: outer1_2.coachmarkImage });
    };
    const intl3 = guildId(tmp[14]).intl;
    obj.buttonLabel = intl3.string(guildId(tmp[14]).t.oPAx73);
    obj.buttonVariant = "primary";
    obj.onButtonPress = callback1;
    return obj;
  }, items5);
  const obj3 = guildId(11553);
  const coachmark = guildId(8563).useCoachmark(guildId.targetRef, memo);
  return null;
};
