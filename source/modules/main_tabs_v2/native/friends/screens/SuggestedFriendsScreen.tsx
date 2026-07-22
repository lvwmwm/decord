// Module ID: 15345
// Function ID: 116830
// Name: SuggestedFriendsScreen
// Dependencies: []
// Exports: default

// Module 15345 (SuggestedFriendsScreen)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ AnalyticEvents: closure_5, AnalyticsSections: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { flex: 1, paddingTop: importDefault(dependencyMap[5]).space.PX_32 };
obj.emptyContainer = obj;
obj.container = { flex: 1 };
let closure_9 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/SuggestedFriendsScreen.tsx");

export default function SuggestedFriendsScreen() {
  const tmp = callback2();
  const analyticsLocations = importDefault(dependencyMap[6])(importDefault(dependencyMap[7]).SUGGESTED_FRIENDS).analyticsLocations;
  const arg1 = analyticsLocations;
  const effect = React.useEffect(() => {
    let obj = added(setAdded[8]);
    obj = { friend_add_type: constants2.FRIENDS_SUGGESTED_FRIENDS_MODAL };
    obj.track(constants.FRIEND_ADD_VIEWED, obj);
  }, []);
  const tmp4 = importDefault(dependencyMap[9])();
  const added = tmp4.added;
  const importDefault = added;
  const setAdded = tmp4.setAdded;
  const dependencyMap = setAdded;
  const friendSuggestions = tmp4.friendSuggestions;
  const React = friendSuggestions;
  const items = [analyticsLocations];
  const callback = React.useCallback((id) => {
    added(setAdded[10])({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations });
  }, items);
  const View = callback;
  const items1 = [added, friendSuggestions, callback, setAdded];
  const callback1 = React.useCallback((arg0, arg1) => {
    const analyticsLocations = arg1;
    const added = tmp;
    let mutualFriendsCount;
    if (null != friendSuggestions[arg1]) {
      mutualFriendsCount = tmp.mutualFriendsCount;
    }
    let tmp3 = null != mutualFriendsCount;
    if (tmp3) {
      let mutualFriendsCount1;
      if (null != tmp) {
        mutualFriendsCount1 = tmp.mutualFriendsCount;
      }
      tmp3 = mutualFriendsCount1 > 0;
    }
    let closure_2 = arg1 === friendSuggestions.length - 1;
    const obj = { type: "custom" };
    let str = "contactSuggestionNoMutualCount";
    if (tmp3) {
      str = "contactSuggestionMutualCount";
    }
    obj.itemType = str;
    obj.key = friendSuggestions[arg1].user.id;
    obj.component = function component() {
      const obj = {
        added: tmp.includes(tmp),
        suggestedFriend: tmp,
        start: 0 === arg1,
        end: closure_2,
        onPress: closure_4,
        onAddSuggestion() {
          return callback((arg0) => {
            const items = [...arg0, closure_1];
            return items;
          });
        },
        location: constants.FRIENDS_SUGGESTED_FRIENDS_MODAL
      };
      return callback(arg1(closure_2[11]).ContactSuggestionRow, obj);
    };
    return obj;
  }, items1);
  const callback2 = React.useCallback(() => {

  }, []);
  let obj = { value: analyticsLocations };
  const items2 = [callback(importDefault(dependencyMap[12]), { absolute: true }), ];
  obj = { style: tmp.container };
  if (0 !== friendSuggestions.length) {
    obj = {};
    const items3 = [friendSuggestions.length];
    obj.sections = items3;
    obj.getItemProps = callback1;
    obj.getSectionProps = callback2;
    obj.insetStart = 8;
    let tmp14 = callback(arg1(dependencyMap[13]).UsersFastList, obj);
  } else {
    const obj1 = { style: tmp.emptyContainer };
    const obj2 = {};
    const intl = arg1(dependencyMap[15]).intl;
    obj2.title = intl.string(arg1(dependencyMap[15]).t.pxFW8V);
    obj2.disableBackgroundOverlay = true;
    obj1.children = callback(importDefault(dependencyMap[14]), obj2);
    tmp14 = callback(View, obj1);
    const tmp19 = importDefault(dependencyMap[14]);
  }
  obj.children = tmp14;
  items2[1] = callback(View, obj);
  obj.children = items2;
  return closure_8(arg1(dependencyMap[6]).AnalyticsLocationProvider, obj);
};
