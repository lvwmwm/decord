// Module ID: 15182
// Function ID: 114517
// Name: JoinRequestActionSheet
// Dependencies: []

// Module 15182 (JoinRequestActionSheet)
class JoinRequestActionSheet {
  constructor(arg0) {
    joinRequest = global.joinRequest;
    arg1 = joinRequest;
    closure_5 = undefined;
    tmp = closure_11();
    user = joinRequest.user;
    importDefault = user;
    userId = joinRequest.userId;
    dependencyMap = userId;
    guildId = joinRequest.guildId;
    defineProperty = guildId;
    obj = arg1(dependencyMap[8]);
    items = [];
    items[0] = closure_7;
    items1 = [, ];
    items1[0] = user;
    items1[1] = userId;
    stateFromStores = obj.useStateFromStores(items, () => {
      let user = user.getUser(userId);
      if (null == user) {
        const prototype = ctor.prototype;
        user = new ctor(user);
      }
      return user;
    }, items1);
    View = stateFromStores;
    id = undefined;
    tmp3 = importDefault(dependencyMap[9]);
    if (null != user) {
      id = user.id;
    }
    if (null == id) {
      id = EMPTY_STRING_SNOWFLAKE_ID;
    }
    tmp3Result = tmp3(id);
    obj2 = arg1(dependencyMap[10]);
    bottomSheetRef = obj2.useBottomSheetRef();
    ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
    ref = defineProperty.useRef(null);
    obj3 = arg1(dependencyMap[11]);
    sharedValue = require("module_0");
    closure_5 = sharedValue;
    items2 = [];
    items2[0] = sharedValue;
    callback = defineProperty.useCallback((nativeEvent) => {
      const result = sharedValue.set(nativeEvent.nativeEvent.contentOffset.y);
    }, items2);
    tmp10 = importDefault(dependencyMap[12])({ user: stateFromStores, displayProfile: tmp3Result });
    ({ theme, secondaryColor, primaryColor } = tmp10);
    obj4 = arg1(dependencyMap[8]);
    items3 = [];
    items3[0] = closure_5;
    stateFromStores1 = obj4.useStateFromStores(items3, () => sharedValue.syncProfileThemeWithUserTheme);
    tmp12 = importDefault(dependencyMap[13])();
    obj5 = arg1(dependencyMap[14]);
    profileThemeValues = obj5.useProfileThemeValues(theme);
    obj6 = arg1(dependencyMap[15]);
    tmp15 = null == profileThemeValues;
    token = obj6.useToken(importDefault(dependencyMap[16]).colors.INTERACTIVE_TEXT_HOVER, theme);
    if (stateFromStores1) {
      prop = undefined;
      if (!tmp15) {
        prop = profileThemeValues.overlaySyncedWithUserTheme;
      }
      overlay = prop;
    } else if (!tmp15) {
      overlay = profileThemeValues.overlay;
    }
    obj7 = arg1(dependencyMap[15]);
    token1 = obj7.useToken(importDefault(dependencyMap[16]).colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT, tmp12);
    int2hexResult = token1;
    if (null != secondaryColor) {
      int2hexResult = token1;
      if (null != profileThemeValues) {
        int2hexResult = token1;
        if (null != overlay) {
          tmp19 = arg1;
          tmp20 = dependencyMap;
          num = 17;
          obj8 = arg1(dependencyMap[17]);
          num2 = 18;
          obj9 = arg1(dependencyMap[18]);
          int2hexResult = obj8.int2hex(obj9.calculateOverlayedColor(secondaryColor, overlay));
        }
      }
    }
    items4 = [, , ];
    items4[0] = guildId;
    ({ applicationStatus: arr5[1], userId: arr5[2] } = joinRequest);
    effect = defineProperty.useEffect(() => {
      let obj = joinRequest(userId[19]);
      obj = { guildId, applicationStatus: joinRequest.applicationStatus, applicationUserId: joinRequest.userId };
      const result = obj.trackMemberApplicationViewed(obj);
    }, items4);
    items5 = [, ];
    items5[0] = guildId;
    items5[1] = stateFromStores;
    effect1 = defineProperty.useEffect(() => {
      let tmp = null == stateFromStores;
      if (!tmp) {
        let isNonUserBotResult = stateFromStores.isNonUserBot();
        if (isNonUserBotResult) {
          isNonUserBotResult = !user(userId[20])(stateFromStores.id);
        }
        tmp = isNonUserBotResult;
      }
      if (!tmp) {
        const obj = { -77355551: 11945304078997316000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 173127328: 85803430721961170000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 983589894: 35924079380512436000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 1666296379: 0.0000000000000000000000000000000000000000000000000000000000000000000742174465348898, guildId };
        user(userId[21])(stateFromStores.id, stateFromStores.getAvatarURL(guildId, 80), obj);
        const tmp9 = user(userId[21]);
      }
    }, items5);
    if (null == user) {
      tmp23 = jsx;
      tmp24 = arg1;
      tmp25 = dependencyMap;
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
      obj1.Illustration = arg1(dependencyMap[24]).NoResults;
      num7 = 25;
      intl = arg1(dependencyMap[25]).intl;
      obj1.body = intl.string(arg1(dependencyMap[25]).t.eAn6z2);
      obj.children = jsx(arg1(dependencyMap[23]).EmptyState, obj1);
      tmp27 = jsx(arg1(dependencyMap[22]).BottomSheet, obj);
    } else {
      tmp28 = jsx;
      tmp29 = arg1;
      tmp30 = dependencyMap;
      num8 = 26;
      obj3 = {};
      obj3.theme = theme;
      obj3.primaryColor = primaryColor;
      obj3.secondaryColor = secondaryColor;
      tmp31 = jsxs;
      num9 = 22;
      obj4 = { 1162986870: true, -104504668: true, 1671815505: true, 1370923259: true };
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
      tmp36 = importDefault;
      num11 = 28;
      obj9 = {};
      obj9.joinRequest = joinRequest;
      obj9.user = stateFromStores;
      obj9.displayProfile = tmp3Result;
      obj8.children = jsx(importDefault(dependencyMap[28]), obj9);
      obj7.children = jsx(View, obj8);
      obj5.children = jsx(View, obj7);
      items7 = [, ];
      items7[0] = jsx(arg1(dependencyMap[27]).BottomSheetScrollView, obj5);
      tmp37 = jsx;
      num12 = 29;
      obj10 = {};
      str = "floating";
      obj10.variant = "floating";
      obj11 = {};
      obj11.backgroundColor = token;
      obj10.tabStyle = obj11;
      obj10.onPress = bottomSheetClose;
      items7[1] = jsx(arg1(dependencyMap[29]).ActionSheetHeaderBar, obj10);
      obj4.children = items7;
      obj3.children = jsxs(arg1(dependencyMap[22]).BottomSheet, obj4);
      tmp27 = jsx(arg1(dependencyMap[26]).ThemeContextProvider, obj3);
    }
    return tmp27;
  }
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const EMPTY_STRING_SNOWFLAKE_ID = arg1(dependencyMap[5]).EMPTY_STRING_SNOWFLAKE_ID;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
let closure_11 = arg1(dependencyMap[7]).createStyles({ container: { flex: 1 }, profileContainer: { position: "relative" }, noPadding: { paddingHorizontal: 0 } });
const obj2 = arg1(dependencyMap[7]);
const memoResult = importAllResult.memo(JoinRequestActionSheet);
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestActionSheet.tsx");

export default memoResult;
export { JoinRequestActionSheet };
