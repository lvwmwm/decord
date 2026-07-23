// Module ID: 11907
// Function ID: 92159
// Name: CustomStatusPreview
// Dependencies: [31, 27, 5512, 33, 4130, 689, 7887, 8254, 8236, 8238, 8240, 3989, 4098, 11908, 1934, 3842, 8260, 8263, 11909, 11898, 8512, 8218, 2]
// Exports: default

// Module 11907 (CustomStatusPreview)
import result from "result";
import { View } from "get ActivityIndicator";
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_5, UserProfileThemeTypes: closure_6 } = ARBITRARY_LARGE_OFFSET);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { flex: 1, position: "relative", overflow: "hidden", width: 323, maxHeight: 301, borderWidth: 1 };
  const colors = importDefault(689).colors;
  obj.borderColor = arg0 ? colors.BORDER_MUTED : colors.BACKGROUND_SURFACE_HIGH;
  obj.borderRadius = importDefault(689).radii.lg;
  const merged = Object.assign(importDefault(689).shadows.SHADOW_HIGH);
  obj.profileContainer = obj;
  obj.profileEffect = { zIndex: 1 };
  return obj;
});
const result = require("ARBITRARY_LARGE_OFFSET").fileFinishedImporting("modules/custom_status/native/CustomStatusPreview.tsx");

export default function CustomStatusPreview(user) {
  let avatarBackground;
  let containerBackground;
  let gradientFallbackBackground;
  let primaryColor;
  let secondaryColor;
  let theme;
  user = user.user;
  const pendingStatusText = user.pendingStatusText;
  const pendingStatusEmoji = user.pendingStatusEmoji;
  const placeholderText = user.placeholderText;
  const tmp = pendingStatusText(pendingStatusEmoji[6])(user.id);
  const tmp2 = pendingStatusText(pendingStatusEmoji[7])(tmp);
  ({ theme, primaryColor, secondaryColor } = pendingStatusText(pendingStatusEmoji[8])({ user, displayProfile: tmp }));
  const tmp5 = callback2(null != primaryColor);
  const tmp6 = pendingStatusText(pendingStatusEmoji[9])();
  let obj = user(pendingStatusEmoji[10]);
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
  items1 = [tmp5.profileContainer];
  const items2 = [callback(pendingStatusText(pendingStatusEmoji[16]), { user, displayProfile: tmp, bannerHeight: 132, disableInteraction: true }), , ];
  const obj1 = {};
  const items3 = [callback(pendingStatusText(pendingStatusEmoji[17]), { user, backgroundColor: avatarBackground, disableStatus: true }), ];
  const obj2 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor: primaryColor };
  const items4 = [, , ];
  ({ profileContentWrapper: arr5[0], profileContent: arr5[1] } = tmp6);
  let tmp13 = "" !== pendingStatusText;
  const tmp3 = pendingStatusText(pendingStatusEmoji[8])({ user, displayProfile: tmp });
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
  const items5 = [callback(pendingStatusText(pendingStatusEmoji[19]), { hasCustomProfileTheme: null != primaryColor, style: tmp6.customStatusBubble, emojiOnlyStyle: tmp6.emojiOnlyCustomStatusBubble, onPressTruncatedStatus: callback, previewEmoji: pendingStatusEmoji, previewText: pendingStatusText, placeholderText }), ];
  const obj5 = { user, themeType: constants.PREVIEW };
  let pronouns;
  const obj4 = { hasCustomProfileTheme: null != primaryColor, style: tmp6.customStatusBubble, emojiOnlyStyle: tmp6.emojiOnlyCustomStatusBubble, onPressTruncatedStatus: callback, previewEmoji: pendingStatusEmoji, previewText: pendingStatusText, placeholderText };
  const tmp12 = pendingStatusText(pendingStatusEmoji[18]);
  const tmp16 = callback;
  if (null != tmp) {
    pronouns = tmp.pronouns;
  }
  obj5.pronouns = pronouns;
  obj5.badges = tmp2;
  obj5.badgeContainerBackground = containerBackground;
  obj5.showBadgeToastOnPress = false;
  items5[1] = tmp16(pendingStatusText(pendingStatusEmoji[20]), obj5);
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
    tmp21Result = callback(pendingStatusText(pendingStatusEmoji[21]), obj6);
    const tmp21 = callback;
    const tmp24 = pendingStatusText(pendingStatusEmoji[21]);
  }
  items2[2] = tmp21Result;
  obj.children = items2;
  obj.children = closure_8(View, obj);
  return tmp9(user(pendingStatusEmoji[15]).ThemeContextProvider, obj);
};
