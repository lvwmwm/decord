// Module ID: 14129
// Function ID: 14130
// Name: UserProfileMutualGuildsActionSheet
// Dependencies: [19, 17, 21, 5009, 575, 14130, 11375, 14131, 14132, 14136, 2]
// Exports: default

// Module 14129 (UserProfileMutualGuildsActionSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
({ View: c3, ActivityIndicator: closure_4 } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { container: obj2, loadingState: obj3, emptyState: { alignItems: "center" } };
obj2 = { flex: 1, gap: 20, paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_8, alignItems: "center" };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuildsActionSheet.tsx");

export default function UserProfileMutualGuildsActionSheet(user) {
  user = user.user;
  const onPressMutualGuild = user.onPressMutualGuild;
  const tmp = closure_6();
  const mutualGuilds = onPressMutualGuild(14130)(user).mutualGuilds;
  let length;
  onPressMutualGuild(11375);
  const tmp5 = onPressMutualGuild(14131);
  if (mutualGuilds != null) {
    length = mutualGuilds.length;
  }
  if (null == mutualGuilds) {
    const obj3 = { style: tmp.loadingState, children: <closure_4 /> };
    let tmp3Result = tmp3(tmp7, obj3);
  } else if (0 === mutualGuilds.length) {
    const obj4 = { style: tmp.emptyState, children: jsx(user(14132).NoMutualServers, {}) };
    tmp3Result = tmp3(tmp7, obj4);
  } else {
    const obj5 = {
      data: mutualGuilds,
      keyExtractor(guild) {
          return guild.guild.id;
        },
      renderItem(item) {
          let end;
          let start;
          item = item.item;
          ({ start, end } = item);
          return jsx(user(dependencyMap[9]).MutualGuildRow, {
            user: item,
            mutualGuild: item,
            onPress() {
              return onPressMutualGuild(item.guild.id);
            },
            start,
            end
          });
        }
    };
    tmp3Result = tmp3(user(11375).UserProfileStackedActionSheetList, obj5);
  }
  return <tmp4 scrollable title={tmp5(length)}>{null}</tmp4>;
};
