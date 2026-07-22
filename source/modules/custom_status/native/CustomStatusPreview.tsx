// Module ID: 11895
// Function ID: 92106
// Name: CustomStatusPreview
// Dependencies: []
// Exports: default

// Module 11895 (CustomStatusPreview)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_5, UserProfileThemeTypes: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_9 = arg1(dependencyMap[4]).createStyles((arg0) => {
  let obj = {};
  obj = { borderWidth: 1 };
  const colors = importDefault(dependencyMap[5]).colors;
  obj.borderColor = arg0 ? colors.BORDER_MUTED : colors.BACKGROUND_SURFACE_HIGH;
  obj.borderRadius = importDefault(dependencyMap[5]).radii.lg;
  const merged = Object.assign(importDefault(dependencyMap[5]).shadows.SHADOW_HIGH);
  obj.profileContainer = obj;
  obj.profileEffect = { zIndex: 1 };
  return obj;
});
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/custom_status/native/CustomStatusPreview.tsx");

export default function CustomStatusPreview(user) {
  let avatarBackground;
  let containerBackground;
  let gradientFallbackBackground;
  let primaryColor;
  let secondaryColor;
  let theme;
  user = user.user;
  const arg1 = user;
  const pendingStatusText = user.pendingStatusText;
  const importDefault = pendingStatusText;
  const pendingStatusEmoji = user.pendingStatusEmoji;
  const dependencyMap = pendingStatusEmoji;
  const placeholderText = user.placeholderText;
  const tmp = importDefault(dependencyMap[6])(user.id);
  const tmp2 = importDefault(dependencyMap[7])(tmp);
  ({ theme, primaryColor, secondaryColor } = importDefault(dependencyMap[8])({ user, displayProfile: tmp }));
  const tmp5 = callback2(null != primaryColor);
  const tmp6 = importDefault(dependencyMap[9])();
  let obj = arg1(dependencyMap[10]);
  const userProfileColors = obj.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const items = [user, pendingStatusText, pendingStatusEmoji];
  ({ gradientFallbackBackground, avatarBackground, containerBackground } = userProfileColors);
  const callback = React.useCallback(() => {
    let obj = user(pendingStatusEmoji[11]);
    obj.dismissKeyboard();
    obj = { user, previewText: pendingStatusText, previewEmoji: pendingStatusEmoji };
    pendingStatusText(pendingStatusEmoji[12]).openLazy(user(pendingStatusEmoji[14])(pendingStatusEmoji[13], pendingStatusEmoji.paths), "UserProfileCustomStatusActionSheet", obj, "stack");
  }, items);
  obj = { theme, primaryColor, secondaryColor };
  obj = { style: items1 };
  const items1 = [tmp5.profileContainer];
  const items2 = [callback(importDefault(dependencyMap[16]), { user, displayProfile: tmp, bannerHeight: 132, disableInteraction: true }), , ];
  const obj1 = {};
  const items3 = [callback(importDefault(dependencyMap[17]), { user, backgroundColor: avatarBackground, disableStatus: true }), ];
  const obj2 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor: primaryColor };
  const items4 = [, , ];
  ({ profileContentWrapper: arr5[0], profileContent: arr5[1] } = tmp6);
  let tmp13 = "" !== pendingStatusText;
  const tmp3 = importDefault(dependencyMap[8])({ user, displayProfile: tmp });
  const tmp9 = callback;
  if (!tmp13) {
    tmp13 = null !== pendingStatusEmoji;
  }
  if (!tmp13) {
    tmp13 = "" !== placeholderText;
  }
  let tmp14 = !tmp13;
  if (!tmp13) {
    const obj3 = { paddingTop: closure_5 };
    tmp14 = obj3;
  }
  items4[2] = tmp14;
  obj2.containerStyle = items4;
  const items5 = [callback(importDefault(dependencyMap[19]), { hasCustomProfileTheme: null != primaryColor, style: tmp6.customStatusBubble, emojiOnlyStyle: tmp6.emojiOnlyCustomStatusBubble, onPressTruncatedStatus: callback, previewEmoji: pendingStatusEmoji, previewText: pendingStatusText, placeholderText }), ];
  const obj5 = { user, themeType: constants.PREVIEW };
  let pronouns;
  const obj4 = { hasCustomProfileTheme: null != primaryColor, style: tmp6.customStatusBubble, emojiOnlyStyle: tmp6.emojiOnlyCustomStatusBubble, onPressTruncatedStatus: callback, previewEmoji: pendingStatusEmoji, previewText: pendingStatusText, placeholderText };
  const tmp12 = importDefault(dependencyMap[18]);
  const tmp16 = callback;
  if (null != tmp) {
    pronouns = tmp.pronouns;
  }
  obj5.pronouns = pronouns;
  obj5.badges = tmp2;
  obj5.badgeContainerBackground = containerBackground;
  obj5.showBadgeToastOnPress = false;
  items5[1] = tmp16(importDefault(dependencyMap[20]), obj5);
  obj2.children = items5;
  items3[1] = closure_8(tmp12, obj2);
  obj1.children = items3;
  items2[1] = closure_8(View, obj1);
  let profileEffect;
  if (null != tmp) {
    profileEffect = tmp.profileEffect;
  }
  let tmp21Result = null != profileEffect;
  if (tmp21Result) {
    const obj6 = {};
    let skuId;
    if (null != tmp) {
      skuId = tmp.profileEffect.skuId;
    }
    obj6.skuId = skuId;
    obj6.style = tmp5.profileEffect;
    tmp21Result = callback(importDefault(dependencyMap[21]), obj6);
    const tmp21 = callback;
    const tmp24 = importDefault(dependencyMap[21]);
  }
  items2[2] = tmp21Result;
  obj.children = items2;
  obj.children = closure_8(View, obj);
  return tmp9(arg1(dependencyMap[15]).ThemeContextProvider, obj);
};
