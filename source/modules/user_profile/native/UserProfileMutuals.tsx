// Module ID: 12020
// Function ID: 92904
// Name: UserProfileMutuals
// Dependencies: []
// Exports: default

// Module 12020 (UserProfileMutuals)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const UserProfileSections = arg1(dependencyMap[2]).UserProfileSections;
const DIVIDER_DOT = arg1(dependencyMap[3]).DIVIDER_DOT;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let closure_8 = arg1(dependencyMap[5]).createStyles({ container: { marginLeft: false, marginTop: false, borderRadius: false }, section: {} });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/user_profile/native/UserProfileMutuals.tsx");

export default function UserProfileMutuals(user) {
  user = user.user;
  const arg1 = user;
  const importDefault = user.guildId;
  let closure_3;
  let closure_4;
  let tmp4;
  let callback;
  function handlePress(section) {
    let obj = { action: "PRESS_SECTION", section };
    const tmp = _undefined(obj);
    obj = {
      user,
      section,
      guildId,
      onPressMutualFriend(arg0) {
        callback3({ action: "PRESS_MUTUAL_FRIEND" });
        const obj = {};
        const merged = Object.assign(closure_3);
        obj["userId"] = arg0;
        callback2(closure_2[12])(obj);
      },
      onPressMutualGuild(arg0) {
        callback3({ action: "PRESS_MUTUAL_GUILD" });
        callback(closure_2[13]).transitionToGuild(arg0);
        const obj = callback(closure_2[13]);
        callback2(closure_2[9]).hideActionSheet();
        const obj2 = callback2(closure_2[9]);
        callback2(closure_2[9]).hideActionSheet();
      }
    };
    guildId(tmp[9]).openLazy(user(tmp[11])(tmp[10], tmp.paths), "UserProfileMutualsActionSheet", obj, "stack");
  }
  const tmp = callback();
  const dependencyMap = tmp;
  let obj = arg1(dependencyMap[6]);
  const userProfileAnalyticsContext = obj.useUserProfileAnalyticsContext();
  ({ context: closure_3, trackUserProfileAction: closure_4 } = userProfileAnalyticsContext);
  const tmp3 = importDefault(dependencyMap[7])(user);
  const mutualFriends = tmp3.mutualFriends;
  const DIVIDER_DOT = mutualFriends;
  const mutualGuilds = tmp3.mutualGuilds;
  if (importDefault(dependencyMap[8])(user)) {
    tmp4 = null != mutualFriends;
    if (tmp4) {
      tmp4 = mutualFriends.length > 0;
    }
    let tmp5 = null != mutualGuilds;
    if (tmp5) {
      tmp5 = mutualGuilds.length > 0;
    }
    callback = tmp5;
    if (!tmp4) {
      if (!tmp5) {
        return null;
      }
    }
    obj = { style: tmp.container };
    const items = [
      () => {
          if (tmp4) {
            const substr = mutualFriends.slice(0, 3);
            const mapped = substr.map((user) => user.user);
            let obj = {
              style: tmp.section,
              accessibilityRole: "button",
              onPress() {
                  callback3(constants.MUTUAL_FRIENDS);
                }
            };
            obj = {
              size: user(tmp[16]).AvatarSizes.SIZE_16,
              totalCount: mapped.length,
              names: mapped.map((username) => username.username),
              children: mapped.map((id) => {
                  const obj = { user: id, size: callback(closure_2[16]).AvatarSizes.SIZE_16, guildId: undefined };
                  return callback2(callback(closure_2[16]).Avatar, obj, id.id);
                })
            };
            const items = [mutualGuilds(user(tmp[15]).AvatarPile, obj), ];
            obj = { children: guildId(tmp[18])(mutualFriends.length) };
            items[1] = mutualGuilds(user(tmp[17]).Text, obj);
            obj.children = items;
            return user(user(tmp[14]).PressableOpacity, obj);
          } else {
            return null;
          }
        }(),
  ,

    ];
    if (tmp4) {
      tmp4 = tmp5;
    }
    if (tmp4) {
      obj = { children: DIVIDER_DOT };
      tmp4 = mutualGuilds(arg1(dependencyMap[17]).Text, obj);
    }
    items[1] = tmp4;
    items[2] = () => {
      if (tmp5) {
        const substr = mutualGuilds.slice(0, 3);
        const mapped = substr.map((guild) => guild.guild);
        let obj = {
          style: tmp.section,
          accessibilityRole: "button",
          onPress() {
              callback4(constants.MUTUAL_GUILDS);
            }
        };
        let tmp8 = !tmp4;
        if (!user) {
          obj = {
            size: user(tmp[20]).GuildIconSizes.XXSMALL,
            totalCount: mapped.length,
            names: mapped.map((name) => name.name),
            children: mapped.map((guild) => {
                  const obj = { guild, size: callback(closure_2[20]).GuildIconSizes.XXSMALL };
                  return callback3(callback2(closure_2[20]), obj, guild.id);
                })
          };
          tmp8 = mutualGuilds(user(tmp[19]).GuildIconPile, obj);
        }
        const items = [tmp8, ];
        obj = { children: guildId(tmp[21])(mutualGuilds.length) };
        items[1] = mutualGuilds(user(tmp[17]).Text, obj);
        obj.children = items;
        return user(user(tmp[14]).PressableOpacity, obj);
      } else {
        return null;
      }
    }();
    obj.children = items;
    return tmp4(closure_3, obj);
  } else {
    return null;
  }
};
