// Module ID: 11472
// Function ID: 11473
// Name: NameplatePreview
// Dependencies: [19, 17, 5010, 4921, 21, 5009, 575, 1985, 6847, 8722, 504, 5063, 6433, 1188, 8812, 9492, 10752, 10753, 5619, 2]
// Exports: NameplatePreview

// Module 11472 (NameplatePreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1188 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let tmp;
const profile_customization_ProfileCustomizationUtils = tmp(8812);
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0) => {
  let num2;
  let num = 0;
  if (arg0) {
    num = nativeDefault.radii.sm;
  }
  const obj = { container: { borderRadius: num, padding: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, nameplate: { borderRadius: num2 }, avatar: { borderRadius: nativeDefault.radii.round, marginRight: nativeDefault.space.PX_8 }, content: { flex: 1, paddingRight: nativeDefault.space.PX_40 } };
  num2 = 0;
  ({ borderRadius: num, padding: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  if (arg0) {
    num2 = tmp3(575).radii.sm;
  }
  ({ borderRadius: nativeDefault.radii.round, marginRight: nativeDefault.space.PX_8 });
  ({ flex: 1, paddingRight: nativeDefault.space.PX_40 });
  return obj;
});
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplatePreview.tsx");

export function NameplatePreview(hasRoundedCorners) {
  let items3;
  let items4;
  let nameplate;
  let nameplateData;
  let pendingDisplayNameStyles;
  let pendingGlobalName;
  let user;
  ({ nameplate, nameplateData, user } = hasRoundedCorners);
  let flag = hasRoundedCorners.hasRoundedCorners;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = hasRoundedCorners.animate;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const guildId = hasRoundedCorners.guildId;
  const pendingAvatarSrc = hasRoundedCorners.pendingAvatarSrc;
  ({ pendingDisplayNameStyles, pendingGlobalName } = hasRoundedCorners);
  let stateFromStores;
  let pendingAvatarDecoration;
  const prop = hasRoundedCorners["aria-hidden"];
  const tmp2 = closure_9(flag);
  react = tmp2;
  if (null != nameplate) {
    let tmp3 = user;
    let obj = user(pendingAvatarSrc[7]);
    nameplateData = obj.getNameplateData(nameplate);
  }
  let obj2 = user(pendingAvatarSrc[8]);
  const avatarDecoration = obj2.useAvatarDecoration(user, guildId);
  pendingAvatarDecoration = guildId(pendingAvatarSrc[9])({ guildId }).pendingAvatarDecoration;
  let obj3 = user(pendingAvatarSrc[10]);
  const items = [pendingAvatarDecoration];
  stateFromStores = obj3.useStateFromStores(items, () => pendingAvatarDecoration.useReducedMotion);
  const items1 = [GuildMemberStore];
  const obj4 = user(pendingAvatarSrc[10]);
  const stateFromStores1 = obj4.useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = null;
      if (null != user) {
        member = GuildMemberStore.getMember(tmp, tmp3.id);
      }
    }
    return member;
  });
  const obj5 = guildId(pendingAvatarSrc[11]);
  const name = obj5.useName(user);
  if (pendingGlobalName == null) {
    let tmp12 = name;
    if (null != guildId) {
      let nick;
      if (stateFromStores1 != null) {
        nick = stateFromStores1.nick;
      }
      tmp12 = name;
      if (null != nick) {
        let nick1;
        if (stateFromStores1 != null) {
          nick1 = stateFromStores1.nick;
        }
        tmp12 = nick1;
      }
    }
    pendingGlobalName = tmp12;
  }
  let tmp15 = avatarDecoration;
  if (undefined !== pendingAvatarDecoration) {
    tmp15 = pendingAvatarDecoration;
  }
  pendingAvatarDecoration = tmp15;
  const obj6 = { userId: user.id, guildId, pendingDisplayNameStyles };
  const tmp16 = guildId(pendingAvatarSrc[12])(obj6);
  const items2 = [tmp2.avatar, user, guildId, pendingAvatarSrc, tmp15, stateFromStores];
  const obj7 = { style: tmp2.container, "aria-hidden": prop, children: items3 };
  const memo = react.useMemo(() => {
    let obj3;
    let tmpResult;
    const obj = { style: user.avatar, size: native.AvatarSizes.NORMAL, avatarDecoration: pendingAvatarDecoration, autoStatusCutout: true };
    const Avatar = native.Avatar;
    const tmp3 = metroImportDefault;
    if (undefined !== pendingAvatarSrc) {
      const obj2 = { source: tmpResult.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores) };
      const merged = Object.assign(obj);
      obj3 = obj2;
      tmpResult = profile_customization_ProfileCustomizationUtils;
    } else {
      obj3 = { user, guildId, animate: !stateFromStores };
      const merged1 = Object.assign(obj);
    }
    return tmp3(Avatar, obj3);
  }, items2);
  items3 = [, , ];
  const obj8 = { nameplate: nameplateData, style: tmp2.nameplate, fullOpacity: true, animate: flag2 };
  items3[0] = closure_7(guildId(pendingAvatarSrc[15]), obj8);
  const obj9 = { style: tmp2.avatar, children: memo };
  items3[1] = closure_7(stateFromStores, obj9);
  let tmp20Result = null != tmp16;
  const obj10 = { style: tmp2.content, children: items4 };
  if (tmp20Result) {
    const obj11 = { userId: user.id, guildId, userName: pendingGlobalName, variant: "text-md/semibold", effectDisplayType: user(pendingAvatarSrc[17]).EffectDisplayType.STATIC, lineClamp: 1, pendingDisplayNameStyles };
    const tmp8Result = guildId(pendingAvatarSrc[16]);
    tmp20Result = tmp20(tmp8Result, obj11);
  }
  items4 = [tmp20Result, ];
  let tmp20Result2 = null == tmp16;
  if (tmp20Result2) {
    const obj12 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: pendingGlobalName };
    tmp20Result2 = tmp20(tmp5(tmp6[18]).Text, obj12);
  }
  items4[1] = tmp20Result2;
  items3[2] = closure_8(stateFromStores, obj10);
  return closure_8(stateFromStores, obj7);
}
