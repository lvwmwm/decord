// Module ID: 11635
// Function ID: 90325
// Name: UserProfileMutualGuildsActionSheet
// Dependencies: [31, 27, 33, 4130, 689, 11636, 11637, 11638, 11639, 11643, 2]
// Exports: default

// Module 11635 (UserProfileMutualGuildsActionSheet)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ View: closure_3, ActivityIndicator: closure_4 } = get_ActivityIndicator);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, gap: 20, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.loadingState = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8, alignItems: "center" };
_createForOfIteratorHelperLoose.emptyState = { alignItems: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8, alignItems: "center" };
const result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuildsActionSheet.tsx");

export default function UserProfileMutualGuildsActionSheet(user) {
  user = user.user;
  const onPressMutualGuild = user.onPressMutualGuild;
  const tmp = _createForOfIteratorHelperLoose();
  const mutualGuilds = onPressMutualGuild(11636)(user).mutualGuilds;
  let obj = { scrollable: true };
  let length;
  const tmp2 = jsx;
  const tmp3 = onPressMutualGuild(11637);
  if (null != mutualGuilds) {
    length = mutualGuilds.length;
  }
  obj.title = onPressMutualGuild(11638)(length);
  obj = { style: tmp.container };
  if (null == mutualGuilds) {
    obj = { style: tmp.loadingState, children: <closure_4 /> };
    let tmp11 = <closure_3 style={tmp.loadingState}><closure_4 /></closure_3>;
  } else if (0 === mutualGuilds.length) {
    const obj1 = { style: tmp.emptyState, children: jsx(user(11639).NoMutualServers, {}) };
    tmp11 = <closure_3 style={tmp.emptyState}>{jsx(user(11639).NoMutualServers, {})}</closure_3>;
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
          ({ start, end } = item);
          return outer1_5(user(outer1_2[9]).MutualGuildRow, {
            user: item,
            mutualGuild: item,
            onPress() {
              return outer1_1(item.guild.id);
            },
            start,
            end
          });
        }
    };
    tmp11 = jsx(user(11637).UserProfileStackedActionSheetList, {
      data: mutualGuilds,
      keyExtractor(guild) {
          return guild.guild.id;
        },
      renderItem(item) {
          let end;
          let start;
          item = item.item;
          ({ start, end } = item);
          return outer1_5(user(outer1_2[9]).MutualGuildRow, {
            user: item,
            mutualGuild: item,
            onPress() {
              return outer1_1(item.guild.id);
            },
            start,
            end
          });
        }
    });
  }
  obj.children = tmp11;
  obj.children = <closure_3 style={tmp.container} />;
  return tmp2(tmp3, obj);
};
