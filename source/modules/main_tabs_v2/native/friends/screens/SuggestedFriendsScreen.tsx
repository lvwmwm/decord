// Module ID: 15509
// Function ID: 119326
// Name: SuggestedFriendsScreen
// Dependencies: [31, 27, 653, 33, 4130, 689, 5462, 5482, 675, 14961, 8537, 15506, 4662, 8864, 9924, 1212, 2]
// Exports: default

// Module 15509 (SuggestedFriendsScreen)
import result from "result";
import { View } from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ AnalyticEvents: closure_5, AnalyticsSections: closure_6 } = ME);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.emptyContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.container = { flex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/SuggestedFriendsScreen.tsx");

export default function SuggestedFriendsScreen() {
  const tmp = _createForOfIteratorHelperLoose();
  const analyticsLocations = added(setAdded[6])(added(setAdded[7]).SUGGESTED_FRIENDS).analyticsLocations;
  const effect = friendSuggestions.useEffect(() => {
    let obj = added(setAdded[8]);
    obj = { friend_add_type: outer1_6.FRIENDS_SUGGESTED_FRIENDS_MODAL };
    obj.track(outer1_5.FRIEND_ADD_VIEWED, obj);
  }, []);
  const tmp4 = added(setAdded[9])();
  added = tmp4.added;
  setAdded = tmp4.setAdded;
  friendSuggestions = tmp4.friendSuggestions;
  let items = [analyticsLocations];
  const callback = friendSuggestions.useCallback((id) => {
    added(setAdded[10])({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations });
  }, items);
  const items1 = [added, friendSuggestions, callback, setAdded];
  const callback1 = friendSuggestions.useCallback((arg0, arg1) => {
    let closure_0 = arg1;
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
    let obj = { type: "custom" };
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
        start: 0 === closure_0,
        end: closure_2,
        onPress: outer1_4,
        onAddSuggestion() {
          return callback((arg0) => {
            const items = [...arg0, outer2_1];
            return items;
          });
        },
        location: outer2_6.FRIENDS_SUGGESTED_FRIENDS_MODAL
      };
      return outer2_7(analyticsLocations(setAdded[11]).ContactSuggestionRow, obj);
    };
    return obj;
  }, items1);
  const callback2 = friendSuggestions.useCallback(() => {

  }, []);
  let obj = { value: analyticsLocations };
  const items2 = [callback(added(setAdded[12]), { absolute: true }), ];
  obj = { style: tmp.container };
  if (0 !== friendSuggestions.length) {
    obj = {};
    const items3 = [friendSuggestions.length];
    obj.sections = items3;
    obj.getItemProps = callback1;
    obj.getSectionProps = callback2;
    obj.insetStart = 8;
    let tmp14 = callback(analyticsLocations(setAdded[13]).UsersFastList, obj);
  } else {
    const obj1 = { style: tmp.emptyContainer };
    const obj2 = {};
    const intl = analyticsLocations(setAdded[15]).intl;
    obj2.title = intl.string(analyticsLocations(setAdded[15]).t.pxFW8V);
    obj2.disableBackgroundOverlay = true;
    obj1.children = callback(added(setAdded[14]), obj2);
    tmp14 = callback(callback, obj1);
    const tmp19 = added(setAdded[14]);
  }
  obj.children = tmp14;
  items2[1] = callback(callback, obj);
  obj.children = items2;
  return closure_8(analyticsLocations(setAdded[6]).AnalyticsLocationProvider, obj);
};
