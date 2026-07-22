// Module ID: 14884
// Function ID: 112099
// Name: GuildThemeMemberCoachmark
// Dependencies: []
// Exports: default

// Module 14884 (GuildThemeMemberCoachmark)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).GUILD_THEME_POWERUP_BOOST_PRICE;
const ContentDismissActionType = arg1(dependencyMap[4]).ContentDismissActionType;
const jsx = arg1(dependencyMap[5]).jsx;
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { height: 120, width: 260 - 2 * importDefault(dependencyMap[7]).space.PX_16, borderRadius: importDefault(dependencyMap[7]).radii.md };
obj.coachmarkImage = obj;
let closure_9 = obj.createStyles(obj);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/premium/powerups/native/GuildThemeMemberCoachmark.tsx");

export default function GuildThemeMemberCoachmark(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const markAsDismissed = guildId.markAsDismissed;
  const importDefault = markAsDismissed;
  let closure_4;
  let closure_5;
  let closure_6;
  let ContentDismissActionType;
  const tmp = callback();
  const dependencyMap = tmp;
  const items = [closure_5];
  const items1 = [guildId];
  const stateFromStores = arg1(dependencyMap[8]).useStateFromStores(items, () => {
    const stateForGuild = diff.getStateForGuild(guildId);
    let tmp2;
    if (null != stateForGuild) {
      tmp2 = stateForGuild.allPowerups[closure_0(undefined, closure_2[9]).GUILD_POWERUP_GUILD_THEME_SKU_ID];
    }
    return tmp2;
  }, items1);
  const obj = arg1(dependencyMap[8]);
  const items2 = [closure_4];
  const stateFromStores1 = arg1(dependencyMap[8]).useStateFromStores(items2, () => guildPowerupBannerImage.useReducedMotion);
  const React = stateFromStores1;
  const obj2 = arg1(dependencyMap[8]);
  let guildPowerupBannerImage = arg1(dependencyMap[10]).getGuildPowerupBannerImage(stateFromStores, stateFromStores1, true);
  if (null == guildPowerupBannerImage) {
    guildPowerupBannerImage = importDefault(dependencyMap[11]);
  }
  closure_4 = guildPowerupBannerImage;
  const diff = closure_6 - importDefault(dependencyMap[12])(guildId).available;
  closure_5 = diff;
  const items3 = [markAsDismissed];
  const callback = React.useCallback(() => {
    markAsDismissed(callback1.USER_DISMISS);
  }, items3);
  closure_6 = callback;
  const items4 = [diff, guildId, markAsDismissed];
  const callback1 = React.useCallback(() => {
    const tmp = markAsDismissed(callback1.TAKE_ACTION);
    if (diff > 0) {
      guildId(tmp[13]).openApplyBoostModal(guildId);
      const obj = guildId(tmp[13]);
    }
  }, items4);
  ContentDismissActionType = callback1;
  const items5 = [callback, callback1, guildPowerupBannerImage, tmp.coachmarkImage, stateFromStores1];
  const memo = React.useMemo(() => {
    const obj = { max: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001594112306612967, 0: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000146723, 9223372036854775807: NaN, 0: 1374100049, 0: 7707980 };
    const intl = guildId(tmp[14]).intl;
    obj.title = intl.string(markAsDismissed(tmp[15]).RK6NbY);
    const intl2 = guildId(tmp[14]).intl;
    obj.description = intl2.string(markAsDismissed(tmp[15]).xlAqGk);
    obj.onDismiss = callback;
    obj.renderImgComponent = function renderImgComponent() {
      return callback2(callback(coachmarkImage[16]), { imageUrl: closure_4, isAnimated: !closure_3, style: coachmarkImage.coachmarkImage });
    };
    const intl3 = guildId(tmp[14]).intl;
    obj.buttonLabel = intl3.string(guildId(tmp[14]).t.oPAx73);
    obj.buttonVariant = "primary";
    obj.onButtonPress = callback1;
    return obj;
  }, items5);
  const obj3 = arg1(dependencyMap[10]);
  const coachmark = arg1(dependencyMap[17]).useCoachmark(guildId.targetRef, memo);
  return null;
};
