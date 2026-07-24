// Module ID: 15353
// Function ID: 117052
// Name: JoinRequestActionSheet
// Dependencies: [31, 27, 4122, 1857, 1849, 653, 33, 4130, 566, 7974, 7186, 3991, 8280, 4066, 5484, 3834, 689, 665, 7980, 7107, 1904, 7975, 5187, 1273, 8547, 1212, 3842, 5189, 15354, 5446, 2]

// Module 15353 (JoinRequestActionSheet)
import importAllResult from "result";
import { View } from "BottomSheetModal";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
class JoinRequestActionSheet {
  constructor(arg0) {
    joinRequest = global.joinRequest;
    c5 = undefined;
    tmp = c11();
    user = joinRequest.user;
    userId = joinRequest.userId;
    guildId = joinRequest.guildId;
    obj = require("initialize");
    items = [];
    items[0] = c7;
    items1 = [, ];
    items1[0] = user;
    items1[1] = userId;
    stateFromStores = obj.useStateFromStores(items, () => {
      let user = outer1_7.getUser(userId);
      if (null == user) {
        const prototype = outer1_6.prototype;
        user = new outer1_6(user);
      }
      return user;
    }, items1);
    View = stateFromStores;
    id = undefined;
    tmp3 = require("useDisplayProfile");
    if (null != user) {
      id = user.id;
    }
    if (null == id) {
      id = EMPTY_STRING_SNOWFLAKE_ID;
    }
    tmp3Result = tmp3(id);
    obj2 = require("useBottomSheetRef");
    bottomSheetRef = obj2.useBottomSheetRef();
    ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
    ref = guildId.useRef(null);
    obj3 = require("module_3991");
    sharedValue = require("result");
    c5 = sharedValue;
    items2 = [];
    items2[0] = sharedValue;
    callback = guildId.useCallback((nativeEvent) => {
      const result = sharedValue.set(nativeEvent.nativeEvent.contentOffset.y);
    }, items2);
    tmp10 = require("useProfileTheme")({ user: stateFromStores, displayProfile: tmp3Result });
    ({ theme, secondaryColor, primaryColor } = tmp10);
    obj4 = require("initialize");
    items3 = [];
    items3[0] = c5;
    stateFromStores1 = obj4.useStateFromStores(items3, () => sharedValue.syncProfileThemeWithUserTheme);
    tmp12 = require("useTheme")();
    obj5 = require("useProfileThemeValues");
    profileThemeValues = obj5.useProfileThemeValues(theme);
    obj6 = require("map");
    tmp15 = null == profileThemeValues;
    token = obj6.useToken(require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_HOVER, theme);
    if (stateFromStores1) {
      prop = undefined;
      if (!tmp15) {
        prop = profileThemeValues.overlaySyncedWithUserTheme;
      }
      overlay = prop;
    } else if (!tmp15) {
      overlay = profileThemeValues.overlay;
    }
    obj7 = require("map");
    token1 = obj7.useToken(require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT, tmp12);
    int2hexResult = token1;
    if (null != secondaryColor) {
      int2hexResult = token1;
      if (null != profileThemeValues) {
        int2hexResult = token1;
        if (null != overlay) {
          tmp19 = joinRequest;
          tmp20 = userId;
          num = 17;
          obj8 = require("pad2");
          num2 = 18;
          obj9 = require("getProfileTheme");
          int2hexResult = obj8.int2hex(obj9.calculateOverlayedColor(secondaryColor, overlay));
        }
      }
    }
    items4 = [, , ];
    items4[0] = guildId;
    ({ applicationStatus: arr5[1], userId: arr5[2] } = joinRequest);
    effect = guildId.useEffect(() => {
      let obj = joinRequest(userId[19]);
      obj = { guildId, applicationStatus: joinRequest.applicationStatus, applicationUserId: joinRequest.userId };
      const result = obj.trackMemberApplicationViewed(obj);
    }, items4);
    items5 = [, ];
    items5[0] = guildId;
    items5[1] = stateFromStores;
    effect1 = guildId.useEffect(() => {
      let tmp = null == stateFromStores;
      if (!tmp) {
        let isNonUserBotResult = stateFromStores.isNonUserBot();
        if (isNonUserBotResult) {
          isNonUserBotResult = !user(userId[20])(stateFromStores.id);
        }
        tmp = isNonUserBotResult;
      }
      if (!tmp) {
        const obj = { type: "action_sheet", withMutualGuilds: true, withMutualFriends: true, dispatchWait: true, guildId };
        user(userId[21])(stateFromStores.id, stateFromStores.getAvatarURL(guildId, 80), obj);
        const tmp9 = user(userId[21]);
      }
    }, items5);
    if (null == user) {
      tmp23 = jsx;
      tmp24 = joinRequest;
      tmp25 = userId;
      num3 = 22;
      obj = {};
      tmp26 = jsx;
      num4 = 23;
      obj1 = {};
      obj2 = {};
      num5 = 42;
      obj2.marginTop = 42;
      obj1.style = obj2;
      num6 = 24;
      obj1.Illustration = require("getNoResultsSource").NoResults;
      num7 = 25;
      intl = require("getSystemLocale").intl;
      obj1.body = intl.string(require("getSystemLocale").t.eAn6z2);
      obj.children = jsx(require("Button").EmptyState, obj1);
      tmp27 = jsx(require("Background").BottomSheet, obj);
    } else {
      tmp28 = jsx;
      tmp29 = joinRequest;
      tmp30 = userId;
      num8 = 26;
      obj3 = {};
      obj3.theme = theme;
      obj3.primaryColor = primaryColor;
      obj3.secondaryColor = secondaryColor;
      tmp31 = jsxs;
      num9 = 22;
      obj4 = { ref: null, handleDisabled: true, scrollable: true, startExpanded: true };
      obj4.ref = bottomSheetRef;
      obj4.contentStyles = tmp.noPadding;
      tmp32 = jsx;
      num10 = 27;
      obj5 = {};
      flag = false;
      obj5.scrollsToTop = false;
      items6 = [, ];
      items6[0] = tmp.container;
      obj6 = {};
      obj6.backgroundColor = int2hexResult;
      items6[1] = obj6;
      obj5.style = items6;
      obj5.ref = ref;
      obj5.onScroll = callback;
      tmp33 = jsx;
      tmp34 = View;
      obj7 = {};
      obj8 = {};
      obj8.style = tmp.profileContainer;
      tmp35 = jsx;
      tmp36 = user;
      num11 = 28;
      obj9 = {};
      obj9.joinRequest = joinRequest;
      obj9.user = stateFromStores;
      obj9.displayProfile = tmp3Result;
      obj8.children = jsx(require("OpenInterviewButton"), obj9);
      obj7.children = jsx(View, obj8);
      obj5.children = jsx(View, obj7);
      items7 = [, ];
      items7[0] = jsx(require("BottomSheetModal").BottomSheetScrollView, obj5);
      tmp37 = jsx;
      num12 = 29;
      obj10 = {};
      str = "floating";
      obj10.variant = "floating";
      obj11 = {};
      obj11.backgroundColor = token;
      obj10.tabStyle = obj11;
      obj10.onPress = bottomSheetClose;
      items7[1] = jsx(require("ActionSheetHeaderBar").ActionSheetHeaderBar, obj10);
      obj4.children = items7;
      obj3.children = jsxs(require("Background").BottomSheet, obj4);
      tmp27 = jsx(require("ManaContext").ThemeContextProvider, obj3);
    }
    return tmp27;
  }
}
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1 }, profileContainer: { position: "relative" }, noPadding: { paddingHorizontal: 0 } });
const memoResult = importAllResult.memo(JoinRequestActionSheet);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestActionSheet.tsx");

export default memoResult;
export { JoinRequestActionSheet };
