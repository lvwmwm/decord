// Module ID: 11625
// Function ID: 90276
// Name: UserProfileMutualGuildsActionSheet
// Dependencies: []
// Exports: default

// Module 11625 (UserProfileMutualGuildsActionSheet)
importAll(dependencyMap[0]);
({ View: closure_3, ActivityIndicator: closure_4 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { paddingTop: importDefault(dependencyMap[4]).space.PX_8 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[1]);
obj.loadingState = { paddingTop: importDefault(dependencyMap[4]).space.PX_8, alignItems: "center" };
obj.emptyState = { alignItems: "center" };
let closure_6 = obj.createStyles(obj);
const obj1 = { paddingTop: importDefault(dependencyMap[4]).space.PX_8, alignItems: "center" };
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuildsActionSheet.tsx");

export default function UserProfileMutualGuildsActionSheet(user) {
  user = user.user;
  const arg1 = user;
  const importDefault = user.onPressMutualGuild;
  const tmp = callback();
  const mutualGuilds = importDefault(dependencyMap[5])(user).mutualGuilds;
  let obj = { scrollable: true };
  let length;
  const tmp2 = jsx;
  const tmp3 = importDefault(dependencyMap[6]);
  if (null != mutualGuilds) {
    length = mutualGuilds.length;
  }
  obj.title = importDefault(dependencyMap[7])(length);
  obj = { style: tmp.container };
  if (null == mutualGuilds) {
    obj = { style: tmp.loadingState, children: <closure_4 /> };
    let tmp11 = <closure_3 {...obj} />;
  } else if (0 === mutualGuilds.length) {
    const obj1 = { style: tmp.emptyState, children: jsx(arg1(dependencyMap[8]).NoMutualServers, {}) };
    tmp11 = <closure_3 {...obj1} />;
  } else {
    const obj2 = {
      data: mutualGuilds,
      keyExtractor(guild) {
          return guild.guild.id;
        },
      renderItem(item) {
          let end;
          let start;
          item = item.item;
          const user = item;
          ({ start, end } = item);
          return callback(user(closure_2[9]).MutualGuildRow, {
            user,
            mutualGuild: item,
            onPress() {
              return callback(item.guild.id);
            },
            start,
            end
          });
        }
    };
    tmp11 = jsx(arg1(dependencyMap[6]).UserProfileStackedActionSheetList, obj2);
  }
  obj.children = tmp11;
  obj.children = <closure_3 {...obj} />;
  return tmp2(tmp3, obj);
};
