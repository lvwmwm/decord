// Module ID: 10790
// Function ID: 10791
// Name: NameplatePreview
// Dependencies: [19, 17, 4825, 2108, 21, 4836, 576, 1971, 7661, 7604, 504, 4678, 5084, 1177, 8281, 10357, 10358, 4832, 2]
// Exports: NameplatePreview

// Module 10790 (NameplatePreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let metroImportAll;
let metroImportDefault;
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
    num2 = tmp3(576).radii.sm;
  }
  ({ borderRadius: nativeDefault.radii.round, marginRight: nativeDefault.space.PX_8 });
  ({ flex: 1, paddingRight: nativeDefault.space.PX_40 });
  return obj;
});
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplatePreview.tsx");

export const NameplatePreview = function NameplatePreview(hasRoundedCorners) {
  let items3;
  let items4;
  let nameplate;
  let nameplateData;
  let pendingDisplayNameStyles;
  let pendingGlobalName;
  let useReducedMotion;
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
  ({ pendingDisplayNameStyles, pendingGlobalName } = hasRoundedCorners);
  let stateFromStores;
  let pendingAvatarDecoration;
  const prop = hasRoundedCorners["aria-hidden"];
  const tmp2 = closure_9(flag);
  dependencyMap = tmp2;
  if (null != nameplate) {
    const tmp3 = user;
    let obj = user(1971);
    nameplateData = obj.getNameplateData(nameplate);
  }
  const obj2 = user(7661);
  const avatarDecoration = obj2.useAvatarDecoration(user, guildId);
  pendingAvatarDecoration = guildId(7604)({ guildId }).pendingAvatarDecoration;
  const items = [AccessibilityStore];
  const obj3 = user(504);
  stateFromStores = obj3.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [GuildMemberStore];
  const obj4 = user(504);
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
  const obj5 = guildId(4678);
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
  const tmp16 = guildId(5084)(obj6);
  const items2 = [tmp2.avatar, user, guildId, tmp15, stateFromStores];
  const obj7 = { style: tmp2.container, "aria-hidden": prop, children: items3 };
  const memo = stateFromStores.useMemo(() => {
    const obj = { style: user.avatar, user, guildId, size: native.AvatarSizes.NORMAL, avatarDecoration: pendingAvatarDecoration, animate: !stateFromStores, autoStatusCutout: true, "aria-hidden": true };
    const Avatar = native.Avatar;
    return metroImportDefault(Avatar, obj);
  }, items2);
  items3 = [, , ];
  const obj8 = { nameplate: nameplateData, style: tmp2.nameplate, fullOpacity: true, animate: flag2 };
  items3[0] = closure_7(guildId(8281), obj8);
  const obj9 = { style: tmp2.avatar, children: memo };
  items3[1] = closure_7(pendingAvatarDecoration, obj9);
  let tmp20Result = null != tmp16;
  const obj10 = { style: tmp2.content, children: items4 };
  if (tmp20Result) {
    const obj11 = { userId: user.id, guildId, userName: pendingGlobalName, variant: "text-md/semibold", effectDisplayType: user(10358).EffectDisplayType.STATIC, lineClamp: 1, pendingDisplayNameStyles };
    const tmp8Result = guildId(10357);
    tmp20Result = tmp20(tmp8Result, obj11);
  }
  items4 = [tmp20Result, ];
  let tmp20Result2 = null == tmp16;
  if (tmp20Result2) {
    const obj12 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: pendingGlobalName };
    tmp20Result2 = tmp20(tmp5(4832).Text, obj12);
  }
  items4[1] = tmp20Result2;
  items3[2] = closure_8(pendingAvatarDecoration, obj10);
  return closure_8(pendingAvatarDecoration, obj7);
};
