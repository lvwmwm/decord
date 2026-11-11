// Module ID: 18761
// Function ID: 18762
// Name: GuildThemeMemberCoachmark
// Dependencies: [19, 5244, 5460, 5461, 5089, 21, 5243, 575, 504, 5464, 10656, 18762, 9175, 6889, 1113, 2717, 10659, 9501, 2]
// Exports: default

// Module 18761 (GuildThemeMemberCoachmark)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import _modDef2717 from "module_2717" /* 2717 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5089 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 5461 */;
import Powerups from "Powerups" /* 5464 */;
import BoostingActionCreators from "BoostingActionCreators" /* 6889 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 5460 */;
import createStyles from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let size;
let closure_6 = GuildPowerupsConstants.GUILD_THEME_POWERUP_BOOST_PRICE;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let obj = { coachmarkImage: size };
size = { height: 120, width: 260 - 2 * nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md };
let closure_9 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildThemeMemberCoachmark.tsx");

export default function GuildThemeMemberCoachmark(guildId) {
  let closure_2;
  guildId = guildId.guildId;
  const markAsDismissed = guildId.markAsDismissed;
  let guildPowerupBannerImage;
  let c5;
  let onDismiss;
  let callback1;
  const targetRef = guildId.targetRef;
  const tmp = closure_9();
  dependencyMap = tmp;
  let tmp2 = guildId;
  let obj = guildId(504);
  const items = [c5];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const stateForGuild = GuildPowerupsStore.getStateForGuild(guildId);
    let tmp2;
    if (stateForGuild != null) {
      tmp2 = stateForGuild.allPowerups[Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID];
    }
    return tmp2;
  }, items1);
  const items2 = [guildPowerupBannerImage];
  const obj2 = guildId(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => guildPowerupBannerImage.useReducedMotion);
  const obj3 = guildId(10656);
  guildPowerupBannerImage = obj3.getGuildPowerupBannerImage(stateFromStores, stateFromStores1, true);
  if (guildPowerupBannerImage == null) {
    guildPowerupBannerImage = markAsDismissed(18762);
  }
  const diff = onDismiss - markAsDismissed(9175)(guildId).available;
  c5 = diff;
  const items3 = [markAsDismissed];
  onDismiss = stateFromStores1.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items3);
  const items4 = [diff, guildId, markAsDismissed];
  callback1 = stateFromStores1.useCallback(() => {
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    if (c5 > 0) {
      const obj = BoostingActionCreators;
      obj.openApplyBoostModal(guildId);
    }
  }, items4);
  const items5 = [onDismiss, callback1, guildPowerupBannerImage, tmp.coachmarkImage, stateFromStores1];
  const memo = stateFromStores1.useMemo(() => {
    let coachmarkImage;
    let imageUrl;
    let intl;
    let intl2;
    let intl3;
    const obj = {
      title: intl.string(_modDef2717.RK6NbY),
      description: intl2.string(_modDef2717.xlAqGk),
      visible: true,
      position: "bottom",
      offsetY: 8,
      onDismiss,
      renderImgComponent() {
        return jsx(markAsDismissed(coachmarkImage[16]), { imageUrl, isAnimated: !stateFromStores1, style: coachmarkImage.coachmarkImage });
      },
      buttonLabel: intl3.string(intl4.t.oPAx73),
      buttonVariant: "primary",
      onButtonPress: callback1
    };
    intl = intl4.intl;
    intl2 = intl4.intl;
    intl3 = intl4.intl;
    return obj;
  }, items5);
  const tmp2Result = tmp2(9501);
  const coachmark = tmp2Result.useCoachmark(targetRef, memo);
  return null;
};
