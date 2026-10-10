// Module ID: 10526
// Function ID: 10527
// Name: CustomStatusPreview
// Dependencies: [19, 17, 6904, 21, 5092, 587, 8310, 8368, 8353, 8367, 8364, 4985, 5056, 10527, 2000, 4827, 8372, 8381, 10530, 10513, 10531, 9004, 2]
// Exports: default

// Module 10526 (CustomStatusPreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ChatInputUtils from "ChatInputUtils" /* 4985 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 6904 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: hasOwnProperty, UserProfileThemeTypes: metroRequire } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0) => {
  let BACKGROUND_SURFACE_HIGH;
  let tmp4;
  const obj = { flex: 1, position: "relative", overflow: "hidden", width: 323, maxHeight: 301, borderWidth: 1, borderColor: BACKGROUND_SURFACE_HIGH, borderRadius: tmp4(587).radii.lg };
  const colors = nativeDefault.colors;
  if (arg0) {
    BACKGROUND_SURFACE_HIGH = colors.BORDER_MUTED;
    tmp4 = tmp;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp4 = tmp;
  }
  const obj2 = { profileContainer: obj, profileEffect: { zIndex: 1 } };
  const merged = Object.assign(tmp4(587).shadows.SHADOW_HIGH);
  return obj2;
});
const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusPreview.tsx");

export default function CustomStatusPreview(user) {
  let avatarBackground;
  let containerBackground;
  let gradientFallbackBackground;
  let items1;
  let items3;
  let items4;
  let obj3;
  let primaryColor;
  let pronouns;
  let secondaryColor;
  let theme;
  user = user.user;
  const pendingStatusText = user.pendingStatusText;
  const pendingStatusEmoji = user.pendingStatusEmoji;
  const placeholderText = user.placeholderText;
  const tmp3 = pendingStatusText(pendingStatusEmoji[6])(user.id);
  const tmp4 = pendingStatusText(pendingStatusEmoji[7])(tmp3);
  ({ theme, primaryColor, secondaryColor } = pendingStatusText(pendingStatusEmoji[8])({ user, displayProfile: tmp3 }));
  pendingStatusText(pendingStatusEmoji[8])({ user, displayProfile: tmp3 });
  const tmp7 = closure_9(null != primaryColor);
  const tmp8 = pendingStatusText(pendingStatusEmoji[9])();
  let obj = user(pendingStatusEmoji[10]);
  const userProfileColors = obj.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const items = [user, pendingStatusText, pendingStatusEmoji];
  ({ gradientFallbackBackground, avatarBackground, containerBackground } = userProfileColors);
  const callback = react.useCallback(() => {
    const obj = ChatInputUtils;
    obj.dismissKeyboard();
    const obj2 = ActionSheetActionCreatorsDefault;
    const obj3 = { user, previewText: pendingStatusText, previewEmoji: pendingStatusEmoji };
    obj2.openLazy(asyncRequire(10527, dependencyMap.paths), "UserProfileCustomStatusActionSheet", obj3, "stack");
  }, items);
  let obj2 = { theme, primaryColor, secondaryColor, children: closure_8(View, obj3) };
  obj3 = { style: tmp7.profileContainer, children: items1 };
  const ThemeContextProvider = user(pendingStatusEmoji[15]).ThemeContextProvider;
  items1 = [closure_7(pendingStatusText(pendingStatusEmoji[16]), { user, displayProfile: tmp3, bannerHeight: 132, disableInteraction: true }), , ];
  const items2 = [closure_7(pendingStatusText(pendingStatusEmoji[17]), { user, backgroundColor: avatarBackground, disableStatus: true }), ];
  const obj4 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor: primaryColor, containerStyle: items3, children: items4 };
  items3 = [, , ];
  ({ profileContentWrapper: arr4[0], profileContent: arr4[1] } = tmp8);
  let tmp15 = "" !== pendingStatusText;
  const tmp14 = pendingStatusText(pendingStatusEmoji[18]);
  if (!tmp15) {
    tmp15 = null !== pendingStatusEmoji;
  }
  if (!tmp15) {
    tmp15 = "" !== placeholderText;
  }
  let tmp16 = !tmp15;
  if (tmp16) {
    tmp16 = { paddingTop };
    const obj5 = { paddingTop };
  }
  items3[2] = tmp16;
  items4 = [, ];
  const obj6 = { hasCustomProfileTheme: null != primaryColor, style: tmp8.customStatusBubble, emojiOnlyStyle: tmp8.emojiOnlyCustomStatusBubble, onPressTruncatedStatus: callback, previewEmoji: pendingStatusEmoji, previewText: pendingStatusText, placeholderText };
  items4[0] = closure_7(pendingStatusText(pendingStatusEmoji[19]), obj6);
  const obj7 = { user, themeType: constants.PREVIEW, pronouns, badges: tmp4, badgeContainerBackground: containerBackground, showBadgeToastOnPress: false };
  pronouns = undefined;
  const tmpResult = pendingStatusText(pendingStatusEmoji[20]);
  if (tmp3 != null) {
    pronouns = tmp3.pronouns;
  }
  const obj8 = { children: items2 };
  items4[1] = closure_7(tmpResult, obj7);
  items2[1] = closure_8(tmp14, obj4);
  items1[1] = closure_8(View, obj8);
  let profileEffect;
  if (tmp3 != null) {
    profileEffect = tmp3.profileEffect;
  }
  let tmp11Result = null != profileEffect;
  if (tmp11Result) {
    let skuId;
    const tmpResult2 = pendingStatusText(pendingStatusEmoji[21]);
    if (tmp3 != null) {
      skuId = tmp3.profileEffect.skuId;
    }
    const obj9 = { skuId, style: tmp7.profileEffect };
    tmp11Result = tmp11(tmpResult2, obj9);
  }
  items1[2] = tmp11Result;
  return closure_7(ThemeContextProvider, obj2);
};
