// Module ID: 9837
// Function ID: 76328
// Name: NameplatePreview
// Dependencies: [31, 27, 4122, 1917, 33, 4130, 689, 1873, 9126, 7929, 566, 3969, 4361, 1273, 8273, 8558, 8559, 4126, 2]
// Exports: NameplatePreview

// Module 9837 (NameplatePreview)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { borderRadius: null, padding: null, flexDirection: "row", alignItems: "center", width: "100%" };
  let num = 0;
  if (arg0) {
    num = importDefault(689).radii.sm;
  }
  obj.borderRadius = num;
  obj.padding = importDefault(689).space.PX_8;
  obj.backgroundColor = importDefault(689).colors.BACKGROUND_BASE_LOWEST;
  obj.container = obj;
  obj = {};
  let num3 = 0;
  if (arg0) {
    num3 = importDefault(689).radii.sm;
  }
  obj.borderRadius = num3;
  obj.nameplate = obj;
  obj.avatar = { borderRadius: importDefault(689).radii.round, marginRight: importDefault(689).space.PX_8 };
  const obj1 = { borderRadius: importDefault(689).radii.round, marginRight: importDefault(689).space.PX_8 };
  obj.content = { flex: 1, paddingRight: importDefault(689).space.PX_40 };
  return obj;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/nameplates/native/NameplatePreview.tsx");

export const NameplatePreview = function NameplatePreview(aria_hidden) {
  let nameplate;
  let nameplateData;
  let pendingDisplayNameStyles;
  let pendingGlobalName;
  let user;
  ({ nameplate, nameplateData, user } = aria_hidden);
  let flag = aria_hidden.hasRoundedCorners;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = aria_hidden.animate;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const guildId = aria_hidden.guildId;
  ({ pendingDisplayNameStyles, pendingGlobalName } = aria_hidden);
  let dependencyMap;
  let stateFromStores;
  let c4;
  const tmp = callback2(flag);
  dependencyMap = tmp;
  if (null != nameplate) {
    let obj = user(1873);
    nameplateData = obj.getNameplateData(nameplate);
  }
  let obj1 = user(9126);
  const avatarDecoration = obj1.useAvatarDecoration(user, guildId);
  const pendingAvatarDecoration = guildId(7929)({ guildId }).pendingAvatarDecoration;
  let obj2 = user(566);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj2.useStateFromStores(items, () => outer1_5.useReducedMotion);
  let obj3 = user(566);
  const items1 = [closure_6];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = null;
      if (null != user) {
        member = outer1_6.getMember(guildId, user.id);
      }
    }
    return member;
  });
  let obj4 = guildId(3969);
  const name = obj4.useName(user);
  if (null == pendingGlobalName) {
    let tmp8 = name;
    if (null != guildId) {
      let nick;
      if (null != stateFromStores1) {
        nick = stateFromStores1.nick;
      }
      tmp8 = name;
      if (null != nick) {
        let nick1;
        if (null != stateFromStores1) {
          nick1 = stateFromStores1.nick;
        }
        tmp8 = nick1;
      }
    }
    pendingGlobalName = tmp8;
  }
  let tmp11 = avatarDecoration;
  if (undefined !== pendingAvatarDecoration) {
    tmp11 = pendingAvatarDecoration;
  }
  c4 = tmp11;
  obj = { userId: user.id, guildId, pendingDisplayNameStyles };
  const tmp12 = guildId(4361)(obj);
  const items2 = [tmp.avatar, user, guildId, tmp11, stateFromStores];
  obj = { style: tmp.container, "aria-hidden": aria_hidden["aria-hidden"] };
  const memo = stateFromStores.useMemo(() => {
    const obj = { style: _undefined.avatar, user, guildId, size: user(_undefined[13]).AvatarSizes.NORMAL, avatarDecoration: c4, animate: !stateFromStores, autoStatusCutout: true, "aria-hidden": true };
    return outer1_7(user(_undefined[13]).Avatar, obj);
  }, items2);
  obj1 = { nameplate: nameplateData, style: tmp.nameplate, fullOpacity: true, animate: flag2 };
  const items3 = [callback(guildId(8273), obj1), , ];
  obj2 = { style: tmp.avatar, children: memo };
  items3[1] = callback(c4, obj2);
  obj3 = { style: tmp.content };
  let tmp16 = null != tmp12;
  if (tmp16) {
    obj4 = { userId: user.id, guildId, userName: pendingGlobalName, variant: "text-md/semibold", effectDisplayType: user(8559).EffectDisplayType.STATIC, lineClamp: 1, pendingDisplayNameStyles };
    tmp16 = callback(guildId(8558), obj4);
    const tmp20 = guildId(8558);
  }
  const items4 = [tmp16, ];
  let tmp22 = null == tmp12;
  if (tmp22) {
    const obj5 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: pendingGlobalName };
    tmp22 = callback(user(4126).Text, obj5);
  }
  items4[1] = tmp22;
  obj3.children = items4;
  items3[2] = closure_8(c4, obj3);
  obj.children = items3;
  return closure_8(c4, obj);
};
