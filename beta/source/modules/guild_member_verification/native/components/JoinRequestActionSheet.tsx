// Module ID: 16230
// Function ID: 16231
// Name: JoinRequestActionSheet
// Dependencies: [19, 17, 4825, 1386, 1372, 1074, 21, 4836, 504, 7631, 7615, 4566, 7673, 4767, 6605, 4531, 576, 1092, 7675, 5855, 2097, 7632, 6571, 1177, 7678, 1115, 4540, 6045, 16231, 6575, 2]

// Module 16230 (JoinRequestActionSheet)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import isChangelogUserDefault from "isChangelogUser" /* 2097 */;
import GuildJoinRequestAnalyticUtils from "GuildJoinRequestAnalyticUtils" /* 5855 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7632 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import UserRecord from "UserRecord" /* 1386 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c10;
let c9;
class JoinRequestActionSheet {
  constructor(joinRequest) {
    let BottomSheet2;
    let EmptyState;
    let bottomSheetClose;
    let bottomSheetRef;
    let intl;
    let items6;
    let items7;
    let obj10;
    let obj11;
    let obj13;
    let obj4;
    let obj6;
    let obj9;
    let overlay;
    let primaryColor;
    let secondaryColor;
    let theme;
    let tmp26;
    joinRequest = joinRequest.joinRequest;
    let sharedValue;
    let tmp = closure_11();
    let user = joinRequest.user;
    const userId = joinRequest.userId;
    const guildId = joinRequest.guildId;
    let obj = joinRequest(userId[8]);
    const items = [UserStore];
    const items1 = [user, userId];
    const stateFromStores = obj.useStateFromStores(items, function() {
      user = UserStore.getUser(userId);
      if (null == user) {
        const self = this;
        const self2 = this;
        user = new UserRecord(user);
      }
      return user;
    }, items1);
    let id;
    const tmp6 = user(userId[9]);
    if (user != null) {
      id = user.id;
    }
    if (id == null) {
      id = EMPTY_STRING_SNOWFLAKE_ID;
    }
    const tmp6Result = tmp6(id);
    const tmp2Result = joinRequest(userId[10]);
    const bottomSheetRef1 = tmp2Result.useBottomSheetRef();
    ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
    const ref = guildId.useRef(null);
    const tmp2Result8 = joinRequest(userId[11]);
    sharedValue = tmp2Result8.useSharedValue(0);
    const items2 = [sharedValue];
    const callback = guildId.useCallback((nativeEvent) => {
      const result = sharedValue.set(nativeEvent.nativeEvent.contentOffset.y);
    }, items2);
    ({ theme, secondaryColor, primaryColor } = user(userId[12])({ user: stateFromStores, displayProfile: tmp6Result }));
    user(userId[12])({ user: stateFromStores, displayProfile: tmp6Result });
    const items3 = [sharedValue];
    const tmp2Result9 = joinRequest(userId[8]);
    const stateFromStores1 = tmp2Result9.useStateFromStores(items3, () => sharedValue.syncProfileThemeWithUserTheme);
    const tmp15 = user(userId[13])();
    const tmp2Result10 = joinRequest(userId[14]);
    const profileThemeValues = tmp2Result10.useProfileThemeValues(theme);
    const tmp2Result11 = joinRequest(userId[15]);
    const token = tmp2Result11.useToken(tmp5(tmp3[16]).colors.INTERACTIVE_TEXT_HOVER, theme);
    if (stateFromStores1) {
      let prop;
      if (profileThemeValues != null) {
        prop = profileThemeValues.overlaySyncedWithUserTheme;
      }
      overlay = prop;
    } else if (profileThemeValues != null) {
      overlay = profileThemeValues.overlay;
    }
    const tmp2Result12 = joinRequest(userId[15]);
    const token1 = tmp2Result12.useToken(tmp5(tmp3[16]).colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT, tmp15);
    let int2hexResult = token1;
    if (null != secondaryColor) {
      int2hexResult = token1;
      if (null != profileThemeValues) {
        int2hexResult = token1;
        if (null != overlay) {
          const int2hex = tmp2(tmp3[17]).int2hex;
          joinRequest(userId[17]);
          const tmp2Result14 = joinRequest(userId[18]);
          int2hexResult = int2hex(tmp2Result14.calculateOverlayedColor(secondaryColor, overlay));
        }
      }
    }
    const items4 = [guildId, , ];
    ({ applicationStatus: arr5[1], userId: arr5[2] } = joinRequest);
    const effect = obj3.useEffect(() => {
      const obj = GuildJoinRequestAnalyticUtils;
      const obj2 = { guildId, applicationStatus: joinRequest.applicationStatus, applicationUserId: joinRequest.userId };
      const result = obj.trackMemberApplicationViewed(obj2);
    }, items4);
    const items5 = [guildId, stateFromStores];
    const effect1 = obj3.useEffect(() => {
      let tmp = null == stateFromStores;
      if (!tmp) {
        tmp = obj.isNonUserBot() && !isChangelogUserDefault(obj.id);
        const isNonUserBotResult = obj.isNonUserBot() && !isChangelogUserDefault(obj.id);
      }
      if (!tmp) {
        const obj2 = { type: "action_sheet", withMutualGuilds: true, withMutualFriends: true, dispatchWait: true, guildId };
        const tmp7 = maybeFetchUserProfileDefault;
        tmp7(stateFromStores.id, stateFromStores.getAvatarURL(guildId, 80), obj2);
      }
    }, items5);
    if (null == user) {
      let obj2 = { children: closure_9(EmptyState, obj4) };
      BottomSheet = tmp2(tmp3[22]).BottomSheet;
      obj4 = { style: { marginTop: 42 }, Illustration: joinRequest(userId[24]).NoResults, body: intl.string(joinRequest(userId[25]).t.eAn6z2) };
      EmptyState = tmp2(tmp3[23]).EmptyState;
      intl = tmp2(tmp3[25]).intl;
      tmp26 = closure_9(BottomSheet, obj2);
    } else {
      const obj5 = { theme, primaryColor, secondaryColor, children: closure_10(BottomSheet2, obj6) };
      const ThemeContextProvider = tmp2(tmp3[26]).ThemeContextProvider;
      obj6 = { ref: bottomSheetRef, handleDisabled: true, scrollable: true, startExpanded: true, contentStyles: tmp.noPadding, children: items7 };
      BottomSheet2 = tmp2(tmp3[22]).BottomSheet;
      const obj7 = { scrollsToTop: false, style: items6, ref, onScroll: callback, children: closure_9(stateFromStores, obj9) };
      items6 = [tmp.container, ];
      const obj8 = { backgroundColor: int2hexResult };
      items6[1] = obj8;
      obj9 = { children: closure_9(stateFromStores, obj10) };
      obj10 = { style: tmp.profileContainer, children: closure_9(user(userId[28]), obj11) };
      const BottomSheetScrollView = tmp2(tmp3[27]).BottomSheetScrollView;
      obj11 = { joinRequest, user: stateFromStores, displayProfile: tmp6Result };
      items7 = [closure_9(BottomSheetScrollView, obj7), ];
      const obj12 = { variant: "floating", tabStyle: obj13, onPress: bottomSheetClose };
      obj13 = { backgroundColor: token };
      items7[1] = closure_9(joinRequest(userId[29]).ActionSheetHeaderBar, obj12);
      tmp26 = closure_9(ThemeContextProvider, obj5);
    }
    return tmp26;
  }
}
const View = react_native.View;
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
({ jsx: c9, jsxs: c10 } = Fragment);
const unpackModuleId = createStyles.createStyles({ container: { flex: 1 }, profileContainer: { position: "relative" }, noPadding: { paddingHorizontal: 0 } });
const memoResult = react.memo(JoinRequestActionSheet);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestActionSheet.tsx");

export default memoResult;
export { JoinRequestActionSheet };
