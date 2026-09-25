// Module ID: 12080
// Function ID: 12081
// Name: UserProfileMutualGuildsActionSheet
// Dependencies: [19, 17, 21, 4829, 576, 12081, 10602, 12082, 12083, 12087, 2]
// Exports: default

// Module 12080 (UserProfileMutualGuildsActionSheet)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ActivityIndicator: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let obj2 = { container: { flex: 1, gap: 20, paddingTop: nativeDefault.space.PX_8 }, loadingState: null, emptyState: null };
let obj3 = { flex: 1, gap: 20, paddingTop: nativeDefault.space.PX_8 };
obj2.loadingState = { paddingTop: nativeDefault.space.PX_8, alignItems: "center" };
obj2.emptyState = { alignItems: "center" };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuildsActionSheet.tsx");

export default function UserProfileMutualGuildsActionSheet(user) {
  user = user.user;
  const onPressMutualGuild = user.onPressMutualGuild;
  const tmp = closure_6();
  const mutualGuilds = onPressMutualGuild(12081)(user).mutualGuilds;
  let length;
  const tmp4 = onPressMutualGuild(10602);
  if (mutualGuilds != null) {
    length = mutualGuilds.length;
  }
  const obj = { scrollable: true, title: onPressMutualGuild(12082)(length), children: null };
  const obj2 = { style: tmp.container, children: null };
  if (null == mutualGuilds) {
    const obj3 = { style: tmp.loadingState, children: tmp3(closure_4, {}) };
    let tmp3Result = tmp3(tmp7, obj3);
  } else if (0 === mutualGuilds.length) {
    const obj4 = { style: tmp.emptyState, children: tmp3(user(12083).NoMutualServers, {}) };
    tmp3Result = tmp3(tmp7, obj4);
  } else {
    const obj5 = {
      data: mutualGuilds,
      keyExtractor(guild) {
          return guild.guild.id;
        },
      renderItem(item) {
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
    tmp3Result = tmp3(user(10602).UserProfileStackedActionSheetList, obj5);
  }
  obj2.children = tmp3Result;
  obj.children = <closure_3 style={tmp.container}>{null}</closure_3>;
  return <tmp4 scrollable title={onPressMutualGuild(12082)(length)}>{null}</tmp4>;
};
