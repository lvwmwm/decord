// Module ID: 8260
// Function ID: 65161
// Name: UserProfileBanner
// Dependencies: [57, 31, 27, 653, 33, 4130, 666, 689, 3803, 7883, 1392, 8261, 4660, 1212, 8262, 2]
// Exports: default

// Module 8260 (UserProfileBanner)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { BANNER_HEIGHT } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "t";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { bannerContainer: { position: "relative" } };
_createForOfIteratorHelperLoose = { position: "absolute", left: 12, top: 12, right: "auto", bottom: "auto" };
const importDefaultResultResult = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE);
_createForOfIteratorHelperLoose.backgroundColor = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE).alpha(0.9).css();
_createForOfIteratorHelperLoose.gifTag = _createForOfIteratorHelperLoose;
const alphaResult = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE).alpha(0.9);
_createForOfIteratorHelperLoose.gifTagText = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_800, fontSize: 14 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_800, fontSize: 14 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfileBanner.tsx");

export default function UserProfileBanner(displayProfile) {
  let View;
  let bannerSafeArea;
  let result;
  let disableInteraction;
  let importDefault;
  let pendingAvatarSrc;
  let pendingBanner;
  displayProfile = displayProfile.displayProfile;
  ({ style: importDefault, bannerSafeArea } = displayProfile);
  if (bannerSafeArea === undefined) {
    bannerSafeArea = 0;
  }
  let bannerHeight = displayProfile.bannerHeight;
  if (bannerHeight === undefined) {
    bannerHeight = first;
  }
  ({ pendingBanner, pendingAccentColor: result, pendingThemeColors: View, disableInteraction, pendingAvatarSrc } = displayProfile);
  if (disableInteraction === undefined) {
    disableInteraction = false;
  }
  first = undefined;
  let callback;
  let closure_8;
  let source;
  function renderBanner() {
    const obj = { style: closure_1, bannerSource: source };
    let first;
    if (null != table) {
      first = table[0];
    }
    if (null == first) {
      first = result;
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
    return closure_7(outer1_1(bannerSafeArea[11]), obj, banner);
  }
  const tmp = source();
  const GifAutoPlay = displayProfile(bannerSafeArea[8]).GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const tmp3 = bannerHeight(React.useState(false), 2);
  first = tmp3[0];
  callback = tmp3[1];
  let tmp5 = setting;
  if (!setting) {
    tmp5 = first;
  }
  let obj = displayProfile(bannerSafeArea[9]);
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
  source = null;
  if (null != bannerURL) {
    let obj3 = displayProfile(bannerSafeArea[10]);
    source = obj3.makeSource(bannerURL);
  }
  const obj1 = { style: tmp.bannerContainer };
  if (obj5.isAnimatedImageURL(bannerURL)) {
    if (!setting) {
      if (!disableInteraction) {
        const obj2 = {
          onPress() {
                  callback(!first);
                },
          accessibilityRole: "button"
        };
        const intl = displayProfile(bannerSafeArea[13]).intl;
        obj2.accessibilityLabel = intl.string(displayProfile(bannerSafeArea[13]).t["3fzj/l"]);
        const items = [renderBanner(), ];
        let tmp17 = !tmp5;
        if (tmp17) {
          obj3 = {};
          const intl2 = displayProfile(bannerSafeArea[13]).intl;
          obj3.label = intl2.string(displayProfile(bannerSafeArea[13]).t.I5gL2H);
          ({ gifTag: obj8.style, gifTagText: obj8.textStyle } = tmp);
          tmp17 = callback(displayProfile(bannerSafeArea[14]).Caption, obj3);
        }
        items[1] = tmp17;
        obj2.children = items;
        let renderBannerResult = closure_8(displayProfile(bannerSafeArea[12]).PressableOpacity, obj2);
        const tmp14 = closure_8;
      }
      obj1.children = renderBannerResult;
      return tmp12(tmp13, obj1);
    }
  }
  renderBannerResult = renderBanner();
};
