// Module ID: 13799
// Function ID: 105741
// Name: FamilyCenterTopActivity
// Dependencies: [31, 27, 1849, 6769, 33, 4130, 689, 624, 4098, 13800, 1934, 13801, 8474, 1212, 2198, 4126, 1273, 5515, 2]
// Exports: default

// Module 13799 (FamilyCenterTopActivity)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", flexDirection: "row", flexWrap: "wrap", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.section = { flex: 1 };
let obj1 = { display: "flex", flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_4, flexWrap: "wrap", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_12, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.avatarList = obj1;
_createForOfIteratorHelperLoose.touchableHitBox = { width: "100%", alignItems: "flex-start" };
_createForOfIteratorHelperLoose.guildAvatar = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGHEST };
_createForOfIteratorHelperLoose.guildAvatarText = { fontSize: 12 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGHEST };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopActivity.tsx");

export default function FamilyCenterTopActivity() {
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  let obj = require(stateFromStores1[7]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getTopUserActivities());
  let obj1 = require(stateFromStores1[7]);
  const items1 = [closure_6];
  stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_6.getTopGuildActivities());
  const items2 = [stateFromStores];
  [][0] = stateFromStores1;
  const callback = React.useCallback(() => {
    let obj = stateFromStores(stateFromStores1[8]);
    obj = { topUserActivities: stateFromStores };
    obj.openLazy(tmp(stateFromStores1[10])(stateFromStores1[9], stateFromStores1.paths), "FamilyCenterTopUsers", obj);
  }, items2);
  if (0 !== stateFromStores.length) {
    obj = { style: tmp.container };
    let tmp7 = stateFromStores.length > 0;
    if (tmp7) {
      obj = { style: tmp.section };
      obj1 = { style: tmp.touchableHitBox, onPress: callback, accessibilityRole: "button" };
      const intl = require(stateFromStores1[13]).intl;
      obj1.accessibilityLabel = intl.string(stateFromStores(stateFromStores1[14]).BxbvS7);
      const obj2 = { variant: "text-sm/semibold" };
      const intl2 = require(stateFromStores1[13]).intl;
      obj2.children = intl2.string(stateFromStores(stateFromStores1[14]).BxbvS7);
      const items3 = [callback(require(stateFromStores1[15]).Text, obj2), ];
      const obj3 = {
        style: tmp.avatarList,
        children: stateFromStores.map((user_id) => {
              const user = outer1_5.getUser(user_id.user_id);
              let tmp2 = null;
              if (null != user) {
                const obj = { user, size: tmp(stateFromStores1[16]).AvatarSizes.SMALL, guildId: undefined };
                tmp2 = outer1_7(tmp(stateFromStores1[16]).Avatar, obj, user.id);
              }
              return tmp2;
            })
      };
      items3[1] = callback(View, obj3);
      obj1.children = items3;
      obj.children = callback2(stateFromStores(stateFromStores1[12]), obj1);
      tmp7 = callback(View, obj);
      const tmp13 = stateFromStores(stateFromStores1[12]);
    }
    const items4 = [tmp7, ];
    let tmp15 = stateFromStores1.length > 0;
    if (tmp15) {
      const obj4 = { style: tmp.section };
      const obj5 = { style: tmp.touchableHitBox, onPress: tmp3, accessibilityRole: "button" };
      const intl3 = require(stateFromStores1[13]).intl;
      obj5.accessibilityLabel = intl3.string(stateFromStores(stateFromStores1[14]).Lq9Set);
      const obj6 = { variant: "text-sm/semibold" };
      const intl4 = require(stateFromStores1[13]).intl;
      obj6.children = intl4.string(stateFromStores(stateFromStores1[14]).Lq9Set);
      const items5 = [callback(require(stateFromStores1[15]).Text, obj6), ];
      const obj7 = {
        style: tmp.avatarList,
        children: stateFromStores1.map((guild_id) => {
              const guild = outer1_6.getGuild(guild_id.guild_id);
              let tmp2 = null;
              if (null != guild) {
                const obj = {};
                ({ guildAvatar: obj.style, guildAvatarText: obj.textStyle } = tmp);
                obj.guild = guild;
                obj.size = tmp(stateFromStores1[17]).GuildIconSizes.SMALL;
                tmp2 = outer1_7(stateFromStores(stateFromStores1[17]), obj, guild.id);
                const tmp6 = stateFromStores(stateFromStores1[17]);
              }
              return tmp2;
            })
      };
      items5[1] = callback(View, obj7);
      obj5.children = items5;
      obj4.children = callback2(stateFromStores(stateFromStores1[12]), obj5);
      tmp15 = callback(View, obj4);
      const tmp21 = stateFromStores(stateFromStores1[12]);
    }
    items4[1] = tmp15;
    obj.children = items4;
    let tmp5Result = callback2(View, obj);
    const tmp5 = callback2;
    let tmp6 = View;
  } else {
    tmp5Result = null;
  }
  return tmp5Result;
};
