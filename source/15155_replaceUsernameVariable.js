// Module ID: 15155
// Function ID: 114307
// Name: replaceUsernameVariable
// Dependencies: []
// Exports: default

// Module 15155 (replaceUsernameVariable)
function replaceUsernameVariable(message, str) {
  let diff;
  const parts = str.split(/\[@username\]/g);
  const items = [];
  let num = 0;
  if (0 < parts.length - 1) {
    do {
      let tmp = closure_8;
      let tmp2 = closure_0;
      let tmp3 = closure_2;
      let obj = { variant: "text-sm/normal", style: message.message, children: parts[num] };
      let arr = items.push(closure_8(closure_0(closure_2[19]).Text, obj, num));
      let tmp5 = closure_8;
      obj = { variant: "text-sm/bold", style: message.message };
      let _HermesInternal = HermesInternal;
      obj.children = "@" + arg2;
      let _HermesInternal2 = HermesInternal;
      arr = items.push(closure_8(closure_0(closure_2[19]).Text, obj, "" + num + "-user"));
      num = num + 1;
      diff = parts.length - 1;
    } while (num < diff);
  }
  obj = { variant: "text-sm/normal", style: message.message, children: parts[parts.length - 1] };
  items.push(callback(str(dependencyMap[19]).Text, obj, parts.length));
  return items;
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { relativeContainer: { position: "relative" } };
obj = { 9223372036854775807: 16777216, -9223372036854775808: 45929537, 0: 1117741312, 0: 296041, 0: 68773, -9223372036854775808: -1773645567, borderRadius: importDefault(dependencyMap[7]).radii.sm };
obj.welcomeContainer = obj;
const obj1 = { "Bool(false)": "sEAnVH", "Bool(false)": "values", "Bool(false)": "isArray", "Bool(false)": "disabledFromFatalError", "Bool(false)": "forceRebuildReanimatedEvent", borderRadius: importDefault(dependencyMap[7]).radii.sm, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW };
obj.welcomeContent = obj1;
const tmp2 = arg1(dependencyMap[5]);
obj.avatarBackground = { borderRadius: importDefault(dependencyMap[7]).radii.round, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW };
const obj2 = { borderRadius: importDefault(dependencyMap[7]).radii.round, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW };
obj.avatarBorder = { borderRadius: importDefault(dependencyMap[7]).radii.round };
obj.avatar = {};
obj.adminUsernameContainer = { "Null": null, "Null": "1785b591bc534f1d0463ddef745bdb5c", "Null": "CalendarMinusIcon", "Null": "png", "Null": true };
const obj3 = { borderRadius: importDefault(dependencyMap[7]).radii.round };
obj.adminUsername = { color: importDefault(dependencyMap[7]).colors.MOBILE_TEXT_HEADING_PRIMARY, paddingLeft: 8 };
const obj4 = { color: importDefault(dependencyMap[7]).colors.MOBILE_TEXT_HEADING_PRIMARY, paddingLeft: 8 };
obj.message = { color: importDefault(dependencyMap[7]).colors.TEXT_DEFAULT };
obj.icon = { marginLeft: 4 };
let closure_10 = obj.createStyles(obj);
const obj5 = { color: importDefault(dependencyMap[7]).colors.TEXT_DEFAULT };
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/guild_onboarding_home/native/HomeWelcomeMessage.tsx");

export default function HomeWelcomeMessage(guildId) {
  let primaryColor;
  let secondaryColor;
  guildId = guildId.guildId;
  const arg1 = guildId;
  let React;
  const tmp = callback2();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => authStore.getCurrentUser());
  let obj1 = arg1(dependencyMap[8]);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => welcomeMessage.getWelcomeMessage(guildId));
  const importDefault = stateFromStores1;
  let obj2 = arg1(dependencyMap[8]);
  const items2 = [closure_6];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => {
    let first;
    if (null != stateFromStores1) {
      first = stateFromStores1.authorIds[0];
    }
    return authStore.getUser(first);
  });
  const dependencyMap = stateFromStores2;
  let id;
  if (null != stateFromStores2) {
    id = stateFromStores2.id;
  }
  const tmp5 = importDefault(dependencyMap[9]);
  const tmp8 = importDefault(dependencyMap[10])({ user: stateFromStores2, displayProfile: importDefault(dependencyMap[9])(id, guildId) });
  ({ primaryColor, secondaryColor } = tmp8);
  const items3 = [];
  let obj3 = arg1(dependencyMap[8]);
  const items4 = [closure_5];
  const stateFromStores3 = obj3.useStateFromStores(items4, () => guild.getGuild(guildId));
  React = stateFromStores3;
  let obj4 = arg1(dependencyMap[11]);
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
  const effect = React.useEffect(() => {
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
  let obj6 = arg1(dependencyMap[13]);
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
          obj3 = { style: tmp.avatar, user: stateFromStores2, size: arg1(dependencyMap[17]).AvatarSizes.NORMAL, disableStatus: true };
          items6[2] = callback(importDefault(dependencyMap[16]), obj3);
          obj4 = { containerStyle: tmp.welcomeContainer, primaryColor, secondaryColor, fallbackBackground: items3 };
          const obj5 = { style: tmp.welcomeContent };
          obj6 = { style: tmp.adminUsernameContainer };
          const tmp31 = importDefault(dependencyMap[16]);
          const tmp33 = callback;
          const obj7 = { style: tmp.adminUsername, variant: "text-md/semibold" };
          const tmp34 = importDefault(dependencyMap[18]);
          obj7.children = importDefault(dependencyMap[20]).getName(guildId, null, stateFromStores2);
          const items7 = [callback(arg1(dependencyMap[19]).Text, obj7), ];
          let tmp37 = null;
          if (tmp12) {
            const obj8 = { size: arg1(dependencyMap[17]).Icon.Sizes.REFRESH_SMALL_16, style: tmp.icon, source: importDefault(dependencyMap[21]), disableColor: true };
            tmp37 = callback(arg1(dependencyMap[17]).Icon, obj8);
          }
          items7[1] = tmp37;
          obj6.children = items7;
          const items8 = [closure_9(View, obj6), ];
          const obj9 = { variant: "text-sm/normal" };
          if (null == username) {
            username = stateFromStores.username;
          }
          obj9.children = replaceUsernameVariable(tmp, stateFromStores1.message, username);
          items8[1] = callback(arg1(dependencyMap[19]).Text, obj9);
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
            obj11 = arg1(dependencyMap[15]);
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
        const tmp12 = null != stateFromStores3 && stateFromStores3.ownerId === stateFromStores2.id;
        const tmp13 = callback;
      }
    }
  }
  return null;
};
