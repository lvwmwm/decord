// Module ID: 16212
// Function ID: 16213
// Name: HomeWelcomeMessage
// Dependencies: [19, 17, 2067, 1372, 5023, 21, 4836, 576, 563, 7631, 7673, 6729, 7632, 4678, 4540, 1092, 7703, 1177, 10573, 4832, 4988, 9034, 2]
// Exports: default

// Module 16212 (HomeWelcomeMessage)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7632 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserStore from "UserStore" /* 1372 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 5023 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let size1;
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { relativeContainer: { position: "relative" }, welcomeContainer: obj2, welcomeContent: obj3, avatarBackground: size, avatarBorder: size1, avatar: { position: "absolute", top: 0, zIndex: 3, left: 28 }, adminUsernameContainer: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 4, paddingLeft: 44 }, adminUsername: obj4, message: obj5, icon: { marginLeft: 4 } };
obj2 = { marginHorizontal: 12, marginVertical: 16, borderRadius: nativeDefault.radii.sm, padding: 2, display: "flex", flexDirection: "column" };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: 12, paddingBottom: 12, paddingTop: 4 };
size = { position: "absolute", zIndex: 2, top: 0, left: 28, width: 40, height: 40, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
size1 = { position: "absolute", top: -2, zIndex: -1, left: 26, width: 44, height: 44, borderRadius: nativeDefault.radii.round };
obj4 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, paddingLeft: 8 };
obj5 = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_10 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/HomeWelcomeMessage.tsx");

export default function HomeWelcomeMessage(guildId) {
  let currentUser;
  let diff;
  let items7;
  let items8;
  let items9;
  let obj12;
  let obj6;
  let primaryColor;
  let secondaryColor;
  let theme;
  let tmp7Result4;
  guildId = guildId.guildId;
  let stateFromStores2;
  let stateFromStores3;
  let tmp = closure_10();
  let tmp2 = guildId;
  let tmp3 = stateFromStores2;
  const items = [UserStore];
  const obj = guildId(stateFromStores2[8]);
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = guildId(stateFromStores2[8]);
  const items1 = [GuildOnboardingHomeSettingsStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => GuildOnboardingHomeSettingsStore.getWelcomeMessage(guildId));
  const items2 = [UserStore];
  const obj3 = guildId(stateFromStores2[8]);
  stateFromStores2 = obj3.useStateFromStores(items2, () => {
    let first;
    const getUser = UserStore.getUser;
    if (stateFromStores1 != null) {
      first = stateFromStores1.authorIds[0];
    }
    return getUser(first);
  });
  let id;
  const tmp8 = stateFromStores1(stateFromStores2[9]);
  if (stateFromStores2 != null) {
    id = stateFromStores2.id;
  }
  const tmp8Result = tmp8(id, guildId);
  ({ primaryColor, secondaryColor, theme } = stateFromStores1(tmp3[10])({ user: stateFromStores2, displayProfile: tmp8Result }));
  stateFromStores1(tmp3[10])({ user: stateFromStores2, displayProfile: tmp8Result });
  const items3 = [GuildStore];
  const tmp2Result = tmp2(tmp3[8]);
  stateFromStores3 = tmp2Result.useStateFromStores(items3, () => GuildStore.getGuild(guildId));
  let authorIds;
  const useSubscribeGuildMembers = tmp2(tmp3[11]).useSubscribeGuildMembers;
  tmp2(tmp3[11]);
  if (stateFromStores1 != null) {
    authorIds = stateFromStores1.authorIds;
  }
  if (authorIds == null) {
    authorIds = [];
  }
  const obj4 = {};
  obj4[guildId] = authorIds;
  const subscribeGuildMembers = useSubscribeGuildMembers(obj4, "HomeWelcomeMessage");
  const items4 = [stateFromStores2, stateFromStores3];
  const effect = stateFromStores3.useEffect(() => {
    let getAvatarURL;
    let id;
    const tmp = null == stateFromStores2 || stateFromStores2.isNonUserBot();
    if (!tmp) {
      let id1;
      ({ id, getAvatarURL } = stateFromStores2);
      const tmp4 = maybeFetchUserProfileDefault;
      if (stateFromStores3 != null) {
        id1 = tmp5.id;
      }
      let id2;
      const avatarURL = getAvatarURL(id1, 80);
      if (stateFromStores3 != null) {
        id2 = tmp5.id;
      }
      const obj2 = { dispatchWait: true, guildId: id2 };
      tmp4(id, avatarURL, obj2);
    }
  }, items4);
  const tmp2Result5 = tmp2(tmp3[13]);
  const name = tmp2Result5.useName(stateFromStores);
  if (null != stateFromStores1) {
    if (null != stateFromStores) {
      if (null != stateFromStores2) {
        const items5 = ["#B8CDFF", "#8CD9FF"];
        const obj5 = { theme, primaryColor, secondaryColor, children: closure_9(View, obj6) };
        let tmp18Result = null;
        obj6 = { style: tmp.relativeContainer, children: items7 };
        const tmp17 = null != stateFromStores3 && stateFromStores3.ownerId === stateFromStores2.id;
        const ThemeContextProvider = tmp2(tmp3[14]).ThemeContextProvider;
        if (null == stateFromStores2.avatarDecoration) {
          let int2rgbaResult;
          const items6 = [tmp.avatarBorder, ];
          if (null != primaryColor) {
            const tmp2Result6 = tmp2(tmp3[15]);
            int2rgbaResult = tmp2Result6.int2rgba(primaryColor, 1);
          } else {
            int2rgbaResult = items5[0];
          }
          const obj7 = { style: items6 };
          const obj8 = { backgroundColor: int2rgbaResult };
          items6[1] = obj8;
          tmp18Result = tmp18(tmp20, obj7);
        }
        items7 = [tmp18Result, , , ];
        const obj9 = { style: tmp.avatarBackground };
        items7[1] = closure_8(View, obj9);
        const obj10 = { style: tmp.avatar, user: stateFromStores2, size: tmp2(tmp3[17]).AvatarSizes.NORMAL, disableStatus: true };
        const tmp7Result = stateFromStores1(tmp3[16]);
        items7[2] = closure_8(tmp7Result, obj10);
        const obj11 = { containerStyle: tmp.welcomeContainer, primaryColor, secondaryColor, fallbackBackground: items5, children: closure_9(View, obj12) };
        obj12 = { style: tmp.welcomeContent, children: items9 };
        const obj13 = { style: tmp.adminUsernameContainer, children: items8 };
        const obj14 = { style: tmp.adminUsername, variant: "text-md/semibold", children: tmp7Result4.getName(guildId, null, stateFromStores2) };
        const tmp7Result3 = stateFromStores1(tmp3[18]);
        const Text = tmp2(tmp3[19]).Text;
        tmp7Result4 = stateFromStores1(tmp3[20]);
        items8 = [closure_8(Text, obj14), ];
        let tmp18Result2 = null;
        if (tmp17) {
          const obj15 = { size: tmp2(tmp3[17]).Icon.Sizes.REFRESH_SMALL_16, style: tmp.icon, source: stateFromStores1(tmp3[21]), disableColor: true };
          const Icon = tmp2(tmp3[17]).Icon;
          tmp18Result2 = tmp18(Icon, obj15);
        }
        items8[1] = tmp18Result2;
        items9 = [closure_9(View, obj13), ];
        let username = name;
        const str = stateFromStores1.message;
        const Text2 = tmp2(tmp3[19]).Text;
        if (name == null) {
          username = stateFromStores.username;
        }
        const parts = str.split(/\[@username\]/g);
        const items10 = [];
        let tmp27 = tmp18;
        let num3 = 0;
        if (0 < parts.length - 1) {
          do {
            let obj16 = { variant: "text-sm/normal", style: tmp.message, children: parts[num3] };
            let arr = items10.push(closure_8(guildId(stateFromStores2[19]).Text, obj16, num3));
            let push = items10.push;
            let obj17 = { variant: "text-sm/bold", style: tmp.message, children: "@" + username };
            let _HermesInternal = HermesInternal;
            let Text3 = guildId(stateFromStores2[19]).Text;
            let _HermesInternal2 = HermesInternal;
            let arr2 = push(closure_8(Text3, obj17, "" + num3 + "-user"));
            num3 = num3 + 1;
            tmp3 = stateFromStores2;
            tmp2 = guildId;
            tmp27 = closure_8;
            diff = parts.length - 1;
          } while (num3 < diff);
        }
        const obj18 = { variant: "text-sm/normal", children: items10 };
        const obj19 = { variant: "text-sm/normal", style: tmp.message, children: parts[parts.length - 1] };
        items10.push(tmp27(tmp2(tmp3[19]).Text, obj19, parts.length));
        items9[1] = closure_8(Text2, obj18);
        items7[3] = closure_8(tmp7Result3, obj11);
        return closure_8(ThemeContextProvider, obj5);
      }
    }
  }
  return null;
};
