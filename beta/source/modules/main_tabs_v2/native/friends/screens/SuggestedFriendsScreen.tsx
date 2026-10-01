// Module ID: 16593
// Function ID: 16594
// Name: SuggestedFriendsScreen
// Dependencies: [19, 17, 1074, 21, 4836, 576, 6583, 6603, 1241, 15679, 16586, 7624, 16590, 5437, 10326, 10457, 1115, 2]
// Exports: default

// Module 16593 (SuggestedFriendsScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import ContactSuggestionRow2 from "ContactSuggestionRow" /* 16590 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { emptyContainer: obj2, container: { flex: 1 } };
obj2 = { flex: 1, paddingTop: nativeDefault.space.PX_32 };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/SuggestedFriendsScreen.tsx");

export default function SuggestedFriendsScreen() {
  let added;
  let friendSuggestions;
  let intl;
  let items3;
  let items4;
  let obj7;
  let setAdded;
  let tmp15Result;
  let tmp2Result;
  const tmp = closure_9();
  let tmp3 = setAdded;
  const tmp4 = added(setAdded[6]);
  const analyticsLocations = tmp4(added(setAdded[7]).SUGGESTED_FRIENDS).analyticsLocations;
  const effect = friendSuggestions.useEffect(() => {
    const obj = added(setAdded[8]);
    const obj2 = { friend_add_type: callback.FRIENDS_SUGGESTED_FRIENDS_MODAL };
    obj.track(userRowWithSubLabelHeight1.FRIEND_ADD_VIEWED, obj2);
  }, []);
  const tmp6 = added(setAdded[9])();
  const tmp2 = added;
  added = tmp6.added;
  setAdded = tmp6.setAdded;
  friendSuggestions = tmp6.friendSuggestions;
  let obj = analyticsLocations(setAdded[10]);
  const userRowWithSubLabelHeight = obj.useUserRowWithSubLabelHeight(1);
  let obj2 = analyticsLocations(setAdded[10]);
  const userRowWithSubLabelHeight1 = obj2.useUserRowWithSubLabelHeight(2);
  let items = [analyticsLocations];
  const onPress = friendSuggestions.useCallback((id) => {
    const obj = { userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  }, items);
  const items1 = [added, friendSuggestions, onPress, setAdded];
  const callback1 = friendSuggestions.useCallback((arg0, arg1) => {
    let closure_0 = arg1;
    const suggestedFriend = tmp;
    const end = arg1 === friendSuggestions.length - 1;
    let mutualFriendsCount;
    if (friendSuggestions[arg1] != null) {
      mutualFriendsCount = tmp.mutualFriendsCount;
    }
    let tmp3 = null != mutualFriendsCount;
    if (tmp3) {
      let mutualFriendsCount1;
      if (friendSuggestions[arg1] != null) {
        mutualFriendsCount1 = tmp.mutualFriendsCount;
      }
      tmp3 = mutualFriendsCount1 > 0;
    }
    let str = "contactSuggestionNoMutualCount";
    if (tmp3) {
      str = "contactSuggestionMutualCount";
    }
    let obj = {
      type: "custom",
      itemType: str,
      key: tmp.user.id,
      component() {
        const obj = {
          added: added.includes(suggestedFriend),
          suggestedFriend,
          start: 0 === closure_0,
          end,
          onPress,
          onAddSuggestion() {
            return end((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_1_1;
              return items;
            });
          },
          location: metroRequire.FRIENDS_SUGGESTED_FRIENDS_MODAL
        };
        const ContactSuggestionRow = ContactSuggestionRow2.ContactSuggestionRow;
        return metroImportDefault(ContactSuggestionRow, obj);
      }
    };
    return obj;
  }, items1);
  const items2 = [friendSuggestions, userRowWithSubLabelHeight, userRowWithSubLabelHeight1];
  const callback2 = friendSuggestions.useCallback(() => {

  }, []);
  const callback3 = friendSuggestions.useCallback((arg0, arg1) => {
    let mutualFriendsCount;
    if (friendSuggestions[arg1] != null) {
      mutualFriendsCount = tmp.mutualFriendsCount;
    }
    let tmp3 = null != mutualFriendsCount;
    if (tmp3) {
      let mutualFriendsCount1;
      if (friendSuggestions[arg1] != null) {
        mutualFriendsCount1 = tmp.mutualFriendsCount;
      }
      tmp3 = mutualFriendsCount1 > 0;
    }
    return tmp3 ? userRowWithSubLabelHeight1 : userRowWithSubLabelHeight;
  }, items2);
  const obj3 = { value: analyticsLocations, children: items3 };
  const AnalyticsLocationProvider = analyticsLocations(setAdded[6]).AnalyticsLocationProvider;
  items3 = [closure_7(added(setAdded[13]), { absolute: true }), ];
  const obj4 = { style: tmp.container, children: tmp15Result };
  const tmp14 = closure_8;
  if (0 !== friendSuggestions.length) {
    const obj5 = { sections: items4, getItemProps: callback1, getSectionProps: callback2, getItemSize: callback3, insetStart: 8 };
    items4 = [friendSuggestions.length];
    tmp15Result = tmp15(tmp7(tmp3[14]).UsersFastList, obj5);
  } else {
    const obj6 = { style: tmp.emptyContainer, children: closure_7(tmp2Result, obj7) };
    obj7 = { title: intl.string(analyticsLocations(tmp3[16]).t.pxFW8V), disableBackgroundOverlay: true };
    tmp2Result = tmp2(tmp3[15]);
    intl = tmp7(tmp3[16]).intl;
    tmp15Result = tmp15(tmp16, obj6);
  }
  items3[1] = closure_7(userRowWithSubLabelHeight, obj4);
  return tmp14(AnalyticsLocationProvider, obj3);
};
