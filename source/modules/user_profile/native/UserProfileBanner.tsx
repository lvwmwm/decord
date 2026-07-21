// Module ID: 8252
// Function ID: 65099
// Name: UserProfileBanner
// Dependencies: []
// Exports: default

// Module 8252 (UserProfileBanner)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const BANNER_HEIGHT = arg1(dependencyMap[3]).BANNER_HEIGHT;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { bannerContainer: { position: "relative" } };
obj = {};
const tmp2 = arg1(dependencyMap[4]);
const importDefaultResult = importDefault(dependencyMap[6]);
const importDefaultResultResult = importDefault(dependencyMap[6])(importDefault(dependencyMap[7]).unsafe_rawColors.WHITE);
obj.backgroundColor = importDefault(dependencyMap[6])(importDefault(dependencyMap[7]).unsafe_rawColors.WHITE).alpha(0.9).css();
obj.gifTag = obj;
const alphaResult = importDefault(dependencyMap[6])(importDefault(dependencyMap[7]).unsafe_rawColors.WHITE).alpha(0.9);
obj.gifTagText = { color: importDefault(dependencyMap[7]).unsafe_rawColors.PRIMARY_800, fontSize: 14 };
let closure_9 = obj.createStyles(obj);
const obj1 = { color: importDefault(dependencyMap[7]).unsafe_rawColors.PRIMARY_800, fontSize: 14 };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/user_profile/native/UserProfileBanner.tsx");

export default function UserProfileBanner(displayProfile) {
  let bannerSafeArea;
  let disableInteraction;
  let pendingAvatarSrc;
  let pendingBanner;
  displayProfile = displayProfile.displayProfile;
  const arg1 = displayProfile;
  ({ style: closure_1, bannerSafeArea } = displayProfile);
  if (bannerSafeArea === undefined) {
    bannerSafeArea = 0;
  }
  const dependencyMap = bannerSafeArea;
  let bannerHeight = displayProfile.bannerHeight;
  if (bannerHeight === undefined) {
    bannerHeight = BANNER_HEIGHT;
  }
  const callback = bannerHeight;
  ({ pendingBanner, pendingAccentColor: closure_4, pendingThemeColors: closure_5, disableInteraction, pendingAvatarSrc } = displayProfile);
  if (disableInteraction === undefined) {
    disableInteraction = false;
  }
  let BANNER_HEIGHT;
  let callback2;
  let closure_8;
  let callback3;
  function renderBanner() {
    const obj = { style: callback, bannerSource: source };
    let first;
    if (null != closure_5) {
      first = closure_5[0];
    }
    if (null == first) {
      first = closure_4;
    }
    if (null == first) {
      let primaryColor;
      if (null != displayProfile) {
        primaryColor = displayProfile.primaryColor;
      }
      first = primaryColor;
    }
    if (null == first) {
      first = closure_8;
    }
    obj.backgroundColor = first;
    obj.bannerSafeArea = bannerSafeArea;
    obj.bannerHeight = bannerHeight;
    let banner;
    if (null != displayProfile) {
      banner = displayProfile.banner;
    }
    return closure_7(callback(bannerSafeArea[11]), obj, banner);
  }
  const tmp = callback3();
  const GifAutoPlay = arg1(dependencyMap[8]).GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const tmp3 = callback(React.useState(false), 2);
  const first = tmp3[0];
  BANNER_HEIGHT = first;
  callback2 = tmp3[1];
  let tmp5 = setting;
  if (!setting) {
    tmp5 = first;
  }
  let obj = arg1(dependencyMap[9]);
  obj = { user: displayProfile.user };
  let guildId;
  if (null != displayProfile) {
    guildId = displayProfile.guildId;
  }
  obj.guildId = guildId;
  obj.pendingAvatarSrc = pendingAvatarSrc;
  obj.displayProfile = displayProfile;
  closure_8 = obj.useUserProfileBannerBackgroundColor(obj);
  if (undefined !== pendingBanner) {
    let previewBanner;
    if (null != displayProfile) {
      previewBanner = displayProfile.getPreviewBanner(pendingBanner, tmp5, 600);
    }
    let bannerURL = previewBanner;
  } else if (null != displayProfile) {
    obj = { canAnimate: tmp5, size: 600 };
    bannerURL = displayProfile.getBannerURL(obj);
  }
  let source = null;
  if (null != bannerURL) {
    let obj3 = arg1(dependencyMap[10]);
    source = obj3.makeSource(bannerURL);
  }
  callback3 = source;
  const obj1 = { style: tmp.bannerContainer };
  if (obj5.isAnimatedImageURL(bannerURL)) {
    if (!setting) {
      if (!disableInteraction) {
        const obj2 = {
          onPress() {
                  callback2(!first);
                },
          accessibilityRole: "button"
        };
        const intl = arg1(dependencyMap[13]).intl;
        obj2.accessibilityLabel = intl.string(arg1(dependencyMap[13]).t.3fzj/l);
        const items = [renderBanner(), ];
        let tmp17 = !tmp5;
        if (tmp17) {
          obj3 = {};
          const intl2 = arg1(dependencyMap[13]).intl;
          obj3.label = intl2.string(arg1(dependencyMap[13]).t.I5gL2H);
          ({ gifTag: obj8.style, gifTagText: obj8.textStyle } = tmp);
          tmp17 = callback2(arg1(dependencyMap[14]).Caption, obj3);
        }
        items[1] = tmp17;
        obj2.children = items;
        let renderBannerResult = closure_8(arg1(dependencyMap[12]).PressableOpacity, obj2);
        const tmp14 = closure_8;
      }
      obj1.children = renderBannerResult;
      return tmp12(tmp13, obj1);
    }
  }
  renderBannerResult = renderBanner();
};
