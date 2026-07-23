// Module ID: 15288
// Function ID: 116577
// Name: replaceUsernameVariable
// Dependencies: [31, 27, 1838, 1849, 4333, 33, 4130, 689, 624, 7887, 8236, 5687, 7888, 3969, 3842, 665, 7880, 1273, 11909, 4126, 4319, 8423, 2]
// Exports: default

// Module 15288 (replaceUsernameVariable)
import result from "result";
import { View } from "get ActivityIndicator";
import closure_5 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
function replaceUsernameVariable(message, str) {
  let diff;
  const parts = str.split(/\[@username\]/g);
  const items = [];
  let num = 0;
  if (0 < parts.length - 1) {
    do {
      let tmp = callback;
      let tmp2 = require;
      let tmp3 = dependencyMap;
      let obj = { variant: "text-sm/normal", style: message.message, children: parts[num] };
      let arr = items.push(callback(require(4126) /* Text */.Text, obj, num));
      let tmp5 = callback;
      obj = { variant: "text-sm/bold", style: message.message };
      let _HermesInternal = HermesInternal;
      obj.children = "@" + arg2;
      let _HermesInternal2 = HermesInternal;
      arr = items.push(callback(require(4126) /* Text */.Text, obj, "" + num + "-user"));
      num = num + 1;
      diff = parts.length - 1;
    } while (num < diff);
  }
  obj = { variant: "text-sm/normal", style: message.message, children: parts[parts.length - 1] };
  items.push(callback(require(4126) /* Text */.Text, obj, parts.length));
  return items;
}
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = { relativeContainer: { position: "relative" } };
_createForOfIteratorHelperLoose = { marginHorizontal: 12, marginVertical: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, padding: 2, display: "flex", flexDirection: "column" };
_createForOfIteratorHelperLoose.welcomeContainer = _createForOfIteratorHelperLoose;
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, paddingHorizontal: 12, paddingBottom: 12, paddingTop: 4 };
_createForOfIteratorHelperLoose.welcomeContent = obj1;
let obj2 = { position: "absolute", zIndex: 2, top: 0, left: 28, width: 40, height: 40, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.avatarBackground = obj2;
let obj3 = { position: "absolute", top: -2, zIndex: -1, left: 26, width: 44, height: 44, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.avatarBorder = obj3;
_createForOfIteratorHelperLoose.avatar = { position: "absolute", top: 0, zIndex: 3, left: 28 };
_createForOfIteratorHelperLoose.adminUsernameContainer = { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 4, paddingLeft: 44 };
_createForOfIteratorHelperLoose.adminUsername = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, paddingLeft: 8 };
let obj4 = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, paddingLeft: 8 };
_createForOfIteratorHelperLoose.message = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
_createForOfIteratorHelperLoose.icon = { marginLeft: 4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj5 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_onboarding_home/native/HomeWelcomeMessage.tsx");

export default function HomeWelcomeMessage(guildId) {
  let primaryColor;
  let secondaryColor;
  guildId = guildId.guildId;
  let stateFromStores3;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = guildId(stateFromStores2[8]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getCurrentUser());
  let obj1 = guildId(stateFromStores2[8]);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_7.getWelcomeMessage(guildId));
  let obj2 = guildId(stateFromStores2[8]);
  const items2 = [_isNativeReflectConstruct];
  stateFromStores2 = obj2.useStateFromStores(items2, () => {
    let first;
    if (null != stateFromStores1) {
      first = stateFromStores1.authorIds[0];
    }
    return outer1_6.getUser(first);
  });
  let id;
  if (null != stateFromStores2) {
    id = stateFromStores2.id;
  }
  let tmp5 = stateFromStores1(stateFromStores2[9]);
  const tmp8 = stateFromStores1(stateFromStores2[10])({ user: stateFromStores2, displayProfile: stateFromStores1(stateFromStores2[9])(id, guildId) });
  ({ primaryColor, secondaryColor } = tmp8);
  const items3 = ["#B8CDFF", "#8CD9FF"];
  let obj3 = guildId(stateFromStores2[8]);
  const items4 = [closure_5];
  stateFromStores3 = obj3.useStateFromStores(items4, () => outer1_5.getGuild(guildId));
  let obj4 = guildId(stateFromStores2[11]);
  obj = {};
  let authorIds;
  if (null != stateFromStores1) {
    authorIds = stateFromStores1.authorIds;
  }
  if (null == authorIds) {
    authorIds = [];
  }
  obj[guildId] = authorIds;
  const subscribeGuildMembers = obj4.useSubscribeGuildMembers(obj, "HomeWelcomeMessage");
  const items5 = [stateFromStores2, stateFromStores3];
  const effect = stateFromStores3.useEffect(() => {
    let getAvatarURL;
    let id;
    let isNonUserBotResult = null == stateFromStores2;
    if (!isNonUserBotResult) {
      isNonUserBotResult = stateFromStores2.isNonUserBot();
    }
    if (!isNonUserBotResult) {
      id = undefined;
      ({ id, getAvatarURL } = stateFromStores2);
      if (null != stateFromStores3) {
        id = stateFromStores3.id;
      }
      const obj = { dispatchWait: true };
      let id1;
      const avatarURL = getAvatarURL(id, 80);
      if (null != stateFromStores3) {
        id1 = stateFromStores3.id;
      }
      obj.guildId = id1;
      stateFromStores1(stateFromStores2[12])(id, avatarURL, obj);
      const tmp5 = stateFromStores1(stateFromStores2[12]);
    }
  }, items5);
  let obj6 = guildId(stateFromStores2[13]);
  let username = obj6.useName(stateFromStores);
  if (null != stateFromStores1) {
    if (null != stateFromStores) {
      if (null != stateFromStores2) {
        obj = { theme: tmp8.theme, primaryColor, secondaryColor };
        obj1 = { style: tmp.relativeContainer };
        if (null != stateFromStores2.avatarDecoration) {
          const items6 = [null, , , ];
          obj2 = { style: tmp.avatarBackground };
          items6[1] = callback(View, obj2);
          obj3 = { style: tmp.avatar, user: stateFromStores2, size: guildId(stateFromStores2[17]).AvatarSizes.NORMAL, disableStatus: true };
          items6[2] = callback(stateFromStores1(stateFromStores2[16]), obj3);
          obj4 = { containerStyle: tmp.welcomeContainer, primaryColor, secondaryColor, fallbackBackground: items3 };
          const obj5 = { style: tmp.welcomeContent };
          obj6 = { style: tmp.adminUsernameContainer };
          const tmp31 = stateFromStores1(stateFromStores2[16]);
          const tmp33 = callback;
          const obj7 = { style: tmp.adminUsername, variant: "text-md/semibold" };
          const tmp34 = stateFromStores1(stateFromStores2[18]);
          obj7.children = stateFromStores1(stateFromStores2[20]).getName(guildId, null, stateFromStores2);
          const items7 = [callback(guildId(stateFromStores2[19]).Text, obj7), ];
          let tmp37 = null;
          if (tmp12) {
            const obj8 = { size: guildId(stateFromStores2[17]).Icon.Sizes.REFRESH_SMALL_16, style: tmp.icon, source: stateFromStores1(stateFromStores2[21]), disableColor: true };
            tmp37 = callback(guildId(stateFromStores2[17]).Icon, obj8);
          }
          items7[1] = tmp37;
          obj6.children = items7;
          const items8 = [closure_9(View, obj6), ];
          const obj9 = { variant: "text-sm/normal" };
          if (null == username) {
            username = stateFromStores.username;
          }
          obj9.children = replaceUsernameVariable(tmp, stateFromStores1.message, username);
          items8[1] = callback(guildId(stateFromStores2[19]).Text, obj9);
          obj5.children = items8;
          obj4.children = closure_9(View, obj5);
          items6[3] = tmp33(tmp34, obj4);
          obj1.children = items6;
          obj.children = tmp17(tmp18, obj1);
          return tmp13(tmp16, obj);
        } else {
          const obj10 = {};
          const items9 = [tmp.avatarBorder, ];
          let obj11 = {};
          if (null != primaryColor) {
            obj11 = guildId(stateFromStores2[15]);
            let int2rgbaResult = obj11.int2rgba(primaryColor, 1);
          } else {
            int2rgbaResult = items3[0];
          }
          obj11.backgroundColor = int2rgbaResult;
          items9[1] = obj11;
          obj10.style = items9;
          callback(View, obj10);
          const tmp20 = callback;
          const tmp21 = View;
        }
        tmp12 = null != stateFromStores3 && stateFromStores3.ownerId === stateFromStores2.id;
        tmp13 = callback;
      }
    }
  }
  return null;
};
