// Module ID: 7692
// Function ID: 7693
// Name: UserProfileBanner
// Dependencies: [32, 19, 17, 1074, 21, 4836, 2021, 7693, 1397, 7700, 5435, 1115, 7701, 2]
// Exports: default

// Module 7692 (UserProfileBanner)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import BannerDefault from "Banner" /* 7700 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const BANNER_HEIGHT = Constants.BANNER_HEIGHT;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ bannerContainer: { position: "relative" }, gifTag: { position: "absolute", left: 12, top: 12, right: "auto", bottom: "auto" } });
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileBanner.tsx");

export default function UserProfileBanner(displayProfile) {
  let backgroundColor;
  let bannerSafeArea;
  let bannerURL;
  let disableInteraction;
  let guildId;
  let intl;
  let items;
  let pendingAvatarSrc;
  let pendingBanner;
  let style;
  displayProfile = displayProfile.displayProfile;
  ({ style: importDefault, bannerSafeArea } = displayProfile);
  const user = displayProfile.user;
  if (bannerSafeArea === undefined) {
    bannerSafeArea = 0;
  }
  let bannerHeight = displayProfile.bannerHeight;
  if (bannerHeight === undefined) {
    bannerHeight = backgroundColor;
  }
  ({ pendingBanner, pendingAccentColor: react, pendingThemeColors: View, disableInteraction, pendingAvatarSrc } = displayProfile);
  if (disableInteraction === undefined) {
    disableInteraction = false;
  }
  let closure_8;
  let source;
  let tmp = source();
  let tmp2 = displayProfile;
  const GifAutoPlay = displayProfile(bannerSafeArea[6]).GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const tmp5 = bannerHeight(react.useState(false), 2);
  backgroundColor = tmp5[0];
  let closure_7 = tmp5[1];
  let obj = { user, guildId, pendingAvatarSrc, displayProfile };
  guildId = undefined;
  const useUserProfileBannerBackgroundColor = tmp2(bannerSafeArea[7]).useUserProfileBannerBackgroundColor;
  tmp2(bannerSafeArea[7]);
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  closure_8 = useUserProfileBannerBackgroundColor(obj);
  if (undefined !== pendingBanner) {
    let previewBanner;
    if (displayProfile != null) {
      previewBanner = displayProfile.getPreviewBanner(pendingBanner, tmp7, 600);
    }
    bannerURL = previewBanner;
  } else if (displayProfile != null) {
    const obj2 = { canAnimate: setting || backgroundColor, size: 600 };
    bannerURL = displayProfile.getBannerURL(obj2);
  }
  source = null;
  if (null != bannerURL) {
    const tmp2Result3 = tmp2(bannerSafeArea[8]);
    source = tmp2Result3.makeSource(bannerURL);
  }
  function renderBanner() {
    const obj = { style: importDefault, bannerSource: source, backgroundColor, bannerSafeArea, bannerHeight };
    backgroundColor = undefined;
    const tmp = metroImportDefault;
    const tmp2 = BannerDefault;
    if (View != null) {
      backgroundColor = View[0];
    }
    if (backgroundColor == null) {
      backgroundColor = react;
    }
    if (backgroundColor == null) {
      let primaryColor;
      if (displayProfile != null) {
        primaryColor = displayProfile.primaryColor;
      }
      backgroundColor = primaryColor;
    }
    if (backgroundColor == null) {
      backgroundColor = closure_8;
    }
    let banner;
    if (displayProfile != null) {
      banner = displayProfile.banner;
    }
    return tmp(tmp2, obj, banner);
  }
  const obj3 = { style: tmp.bannerContainer, children: null };
  const tmp2Result4 = tmp2(bannerSafeArea[8]);
  if (tmp2Result4.isAnimatedImageURL(bannerURL)) {
    if (!setting) {
      let renderBannerResult;
      if (!disableInteraction) {
        const obj4 = {
          onPress() {
                  closure_7(!first);
                },
          accessibilityRole: "button",
          accessibilityLabel: intl.string(tmp2(bannerSafeArea[11]).t["3fzj/l"]),
          children: items
        };
        const PressableOpacity = tmp2(tmp3[10]).PressableOpacity;
        intl = tmp2(tmp3[11]).intl;
        items = [renderBanner(), ];
        let tmp13Result = null;
        const tmp15 = closure_8;
        if (!(setting || backgroundColor)) {
          const obj5 = { style: tmp.gifTag };
          tmp13Result = tmp13(require("GifTag"), obj5);
        }
        items[1] = tmp13Result;
        renderBannerResult = tmp15(PressableOpacity, obj4);
      }
      obj3.children = renderBannerResult;
      return closure_7(tmp14, obj3);
    }
  }
  renderBannerResult = renderBanner();
};
