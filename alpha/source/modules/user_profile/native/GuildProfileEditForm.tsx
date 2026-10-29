// Module ID: 16467
// Function ID: 16468
// Name: GuildProfileEditForm
// Dependencies: [109, 19, 17, 4917, 7760, 1084, 1391, 21, 2051, 7313, 7338, 16351, 5247, 16339, 2000, 8695, 1125, 8693, 16350, 16350, 9738, 558, 576, 16361, 16354, 5630, 16442, 587, 5271, 16386, 8772, 8691, 7087, 16355, 11162, 16462, 504, 8715, 11150, 8773, 8698, 15705, 16468, 8758, 8769, 16469, 16364, 5059, 16365, 16388, 16392, 16393, 16397, 16401, 9858, 9859, 5071, 11170, 11151, 11171, 2]

// Module 16467 (GuildProfileEditForm)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1125 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2051 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import Text_Text from "Text/Text" /* 5271 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7313 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7338 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8693 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8695 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9738 */;
import openPremiumModalDefault from "openPremiumModal" /* 9858 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9859 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 16351 */;
import UserProfileEditFormSharedStylesDefault from "UserProfileEditFormSharedStyles" /* 16354 */;
import UserProfilePremiumTryItOutMobileRefreshExperiment from "UserProfilePremiumTryItOutMobileRefreshExperiment" /* 16361 */;
import UserProfileUpsellCardDefault from "UserProfileUpsellCard" /* 16386 */;
import UserProfileFloatingUpsellDefault from "UserProfileFloatingUpsell" /* 16442 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildMemberStore from "GuildMemberStore" /* 4917 */;
import UserProfileStore from "UserProfileStore" /* 7760 */;
import Constants from "Constants" /* 1084 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let AnalyticsPages;
let AnalyticsSections;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let map1;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
function EditGuildProfileBanner(user) {
  let disabled;
  let displayProfile;
  let guildMember;
  let intl;
  let obj3;
  let pendingAvatarSrc;
  let pendingBanner;
  let pendingThemeColors;
  let tmp6;
  user = user.user;
  ({ guildId: importDefault, guildMemberProfile: dependencyMap, pendingBanner } = user);
  ({ displayProfile, guildMember, pendingAvatarSrc, pendingThemeColors, disabled } = user);
  let obj = PremiumUtilsDefault;
  let result = obj.canUsePremiumGuildMemberProfile(user);
  let c4 = result;
  let tmp3 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp3(AnalyticsLocationDefault.EDIT_BANNER).analyticsLocations;
  let obj2 = { value: analyticsLocations, children: tmp4(tmp6, obj3) };
  const AnalyticsLocationProvider = user(7313).AnalyticsLocationProvider;
  obj3 = {
    user,
    displayProfile,
    pendingBanner,
    pendingAvatarSrc,
    pendingThemeColors,
    showProfilePreviewButton: false,
    showEditButton: result,
    onPressEdit: function handleEditBanner() {
      let banner;
      let guildId;
      let intl;
      let obj3;
      let obj4;
      let showRemoveBanner;
      let tmp19;
      if (c4) {
        let openLazy = ActionSheetActionCreatorsDefault.openLazy;
        let obj = {
          user,
          analyticsLocations,
          showRemoveBanner: showRemoveBanner(tmp19, banner),
          removeText: intl.string(intl7.t.jHlJNS),
          onBannerChange(dependencyMap) {
              const obj = user(dependencyMap[17]);
              const obj2 = { guildId, banner: dependencyMap };
              return obj.setPendingChanges(obj2);
            },
          onGifBannerSelect: function openGifPicker() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              const openLazy = ActionSheetActionCreatorsDefault.openLazy;
              const obj2 = { profileAssetType: user(dependencyMap[19]).ProfileAssetType.BANNER, selectionContext: user(dependencyMap[19]).GIFSelectionContext.PROFILE_EDIT, guildId };
              ActionSheetActionCreatorsDefault;
              const tmp3 = user(dependencyMap[14])(dependencyMap[18], dependencyMap.paths);
              openLazy(tmp3, "Select GIF Banner", obj2);
            }
        };
        ActionSheetActionCreatorsDefault;
        banner = undefined;
        const tmp14 = asyncRequire(16339, dependencyMap.paths);
        showRemoveBanner = ProfileCustomizationUtils.showRemoveBanner;
        ProfileCustomizationUtils;
        tmp19 = pendingBanner;
        if (dependencyMap != null) {
          banner = dependencyMap.banner;
        }
        intl = tmp10(1125).intl;
        openLazy(tmp14, "Change Banner", obj);
      } else {
        let obj2 = { initialUpsellKey: constants.PREMIUM_GUILD_PROFILE, analyticsLocation: obj3, analyticsLocations, analyticsProperties: obj4 };
        let tmp3 = constants;
        obj3 = { section: AnalyticsSections.PREMIUM_GUILD_MEMBER_PROFILE, object: unpackModuleId.EDIT_GUILD_PROFILE_BANNER };
        obj4 = { type: PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL };
        const tmpResult2 = PremiumUpsellUtilsDefault;
        const result = tmpResult2.handleShowUpsellAlert(obj2);
      }
    },
    editButtonAccessibilityLabel: intl.string(tmp5(1125).t["95hPAe"]),
    editDisabled: disabled
  };
  tmp6 = UserProfileEditBannerButtonDefault;
  if (result) {
    result = null != guildMember;
  }
  intl = tmp5(1125).intl;
  return closure_17(AnalyticsLocationProvider, obj2);
}
let closure_3 = ["nick", "bio", "guild_tag"];
let closure_4 = ["nick", "bio", "guild_tag"];
({ ScrollView: metroImportDefault, View: metroImportAll } = react_native);
({ AnalyticsObjects: unpackModuleId, AnalyticsSections } = Constants);
({ DISPLAY_NAME_MAX_LENGTH: map1, PRONOUNS_MAX_LENGTH: closure_14, UpsellTypes: closure_15, AnalyticsPages } = Constants);
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let closure_19 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildProfileTryItOutUpsellExperimentWrapper(arg0) {
  let intl2;
  let onButtonPress;
  let onLayout;
  const obj = react2;
  const cResult = obj.c(16);
  ({ onLayout, onButtonPress } = arg0);
  const obj2 = UserProfilePremiumTryItOutMobileRefreshExperiment;
  const enabled = obj2.useTryItOutMobileRefreshConfig("GuildProfileEditForm").enabled;
  const tmp5 = UserProfileEditFormSharedStylesDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  if (enabled) {
    let tmp20;
    let tmp19;
    const _Symbol3 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1125).intl;
      const stringResult = intl3.string(intl7.t.YIZS5B);
      const intl4 = tmp(1125).intl;
      const stringResult1 = intl4.string(intl7.t.pj0XBN);
      cResult[1] = stringResult;
      cResult[2] = stringResult1;
      tmp20 = stringResult1;
      tmp19 = stringResult;
    } else {
      tmp19 = cResult[1];
      tmp20 = cResult[2];
    }
    if (cResult[3] === onButtonPress) {
      let tmp23;
      if (cResult[4] === onLayout) {
        tmp23 = cResult[5];
      }
      return tmp23;
    }
    const obj4 = { text: tmp19, buttonText: tmp20, buttonVariant: "experimental_premium-primary", onButtonPress, onLayout };
    const tmp25 = closure_17(UserProfileFloatingUpsellDefault, obj4);
    cResult[3] = onButtonPress;
    cResult[4] = onLayout;
    cResult[5] = tmp25;
    tmp23 = tmp25;
  } else {
    let tmp9;
    const sum = tmp4(587).space.PX_16 + tmp7.bottom;
    if (cResult[6] !== sum) {
      const obj5 = { bottom: sum };
      cResult[6] = sum;
      cResult[7] = obj5;
      tmp9 = obj5;
    } else {
      tmp9 = cResult[7];
    }
    if (cResult[8] === tmp5.floatingUpsell) {
      let tmp10;
      let tmp11;
      let tmp13;
      if (cResult[9] === tmp9) {
        tmp10 = cResult[10];
      }
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1125).intl;
        const stringResult2 = intl.string(intl7.t.pj0XBN);
        cResult[11] = stringResult2;
        tmp11 = stringResult2;
      } else {
        tmp11 = cResult[11];
      }
      const _Symbol2 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { variant: "text-sm/normal", children: intl2.string(intl7.t.YIZS5B) };
        const Text = tmp(5271).Text;
        intl2 = tmp(1125).intl;
        const tmp15 = closure_17(Text, obj6);
        cResult[12] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[12];
      }
      if (cResult[13] === onButtonPress) {
        let tmp16;
        if (cResult[14] === tmp10) {
          tmp16 = cResult[15];
        }
        return tmp16;
      }
      const obj7 = { style: tmp10, ctaText: tmp11, onPress: onButtonPress, children: tmp13 };
      const tmp18 = closure_17(UserProfileUpsellCardDefault, obj7);
      cResult[13] = onButtonPress;
      cResult[14] = tmp10;
      cResult[15] = tmp18;
      tmp16 = tmp18;
    }
    const items = [tmp5.floatingUpsell, tmp9];
    cResult[8] = tmp5.floatingUpsell;
    cResult[9] = tmp9;
    cResult[10] = items;
    tmp10 = items;
  }
}) : (function GuildProfileTryItOutUpsellExperimentWrapper(onButtonPress) {
  let Text;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj5;
  let tmp6Result;
  onButtonPress = onButtonPress.onButtonPress;
  const onLayout = onButtonPress.onLayout;
  const obj = UserProfilePremiumTryItOutMobileRefreshExperiment;
  const enabled = obj.useTryItOutMobileRefreshConfig("GuildProfileEditForm").enabled;
  const tmp4 = UserProfileEditFormSharedStylesDefault();
  if (enabled) {
    const obj2 = { text: intl3.string(intl7.t.YIZS5B), buttonText: intl4.string(intl7.t.pj0XBN), buttonVariant: "experimental_premium-primary", onButtonPress, onLayout };
    const tmp3Result = UserProfileFloatingUpsellDefault;
    intl3 = tmp(1125).intl;
    intl4 = tmp(1125).intl;
    tmp6Result = tmp6(tmp3Result, obj2);
  } else {
    const obj3 = { style: items, ctaText: intl.string(intl7.t.pj0XBN), onPress: onButtonPress, children: closure_17(Text, obj5) };
    items = [tmp4.floatingUpsell, ];
    const obj4 = { bottom: nativeDefault.space.PX_16 + tmp5.bottom };
    items[1] = obj4;
    const tmp3Result2 = UserProfileUpsellCardDefault;
    intl = tmp(1125).intl;
    obj5 = { variant: "text-sm/normal", children: intl2.string(intl7.t.YIZS5B) };
    Text = tmp(5271).Text;
    intl2 = tmp(1125).intl;
    tmp6Result = tmp6(tmp3Result2, obj3);
  }
  return tmp6Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildProfileEditForm(currentUser) {
  let errorContainer;
  let errors;
  let first;
  let fn;
  let guildScrollY;
  let isDisabled;
  let obj7;
  let pendingAvatar;
  let pendingAvatarDecoration;
  let pendingBanner;
  let pendingBio;
  let pendingDisplayNameStyles;
  let pendingNameplate;
  let pendingNickname;
  let pendingProfileEffect;
  let pendingProfileFrame;
  let pendingPronouns;
  let pendingThemeColors;
  let tmp14;
  let tmp15;
  let tmp21;
  let tmp23;
  let tmp25;
  let tmp27;
  let tmp29;
  let tmp32;
  let tmp35;
  let tmp = currentUser;
  let obj = currentUser(guildScrollY[22]);
  const cResult = obj.c(211);
  currentUser = currentUser.currentUser;
  require("UserProfileSharedStyles")();
  const tmp6 = require("UserProfileEditFormSharedStyles")();
  importDefault = tmp6;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "guild_profile_edit_form" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult = tmp(guildScrollY[31]);
  const bioMaxLength = tmpResult.useBioMaxLength(first);
  let tmp9 = tmp4(tmp2[32])();
  const ref = react.useRef(null);
  const context = react.useContext(tmp4(tmp2[33]));
  guildScrollY = undefined;
  if (context != null) {
    guildScrollY = context.guildScrollY;
  }
  if (cResult[1] !== guildScrollY) {
    class I {
      constructor(nativeEvent) {
        const obj = guildScrollY;
        if (guildScrollY != null) {
          const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
        }
      }
    }
    cResult[1] = guildScrollY;
    cResult[2] = I;
  } else {
    class I {
      constructor(nativeEvent) {
        const obj = guildScrollY;
        if (guildScrollY != null) {
          const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
        }
      }
    }
  }
  if (cResult[3] !== guildScrollY) {
    class I {
      constructor(nativeEvent) {
        const obj = guildScrollY;
        if (guildScrollY != null) {
          const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
        }
      }
    }
    const items = [guildScrollY];
    cResult[3] = guildScrollY;
    cResult[4] = tmp16;
    cResult[5] = items;
    tmp15 = items;
    tmp14 = tmp16;
  } else {
    class I {
      constructor(nativeEvent) {
        const obj = guildScrollY;
        if (guildScrollY != null) {
          const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
        }
      }
    }
    tmp15 = cResult[5];
  }
  const effect = obj4.useEffect(tmp14, tmp15);
  const ref1 = react.useRef(null);
  const ref2 = react.useRef(null);
  const ref3 = react.useRef(null);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor(nativeEvent) {
        const obj = guildScrollY;
        if (guildScrollY != null) {
          const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
        }
      }
    }
    cResult[6] = tmp22;
    tmp21 = tmp22;
  } else {
    class I {
      constructor(nativeEvent) {
        const obj = guildScrollY;
        if (guildScrollY != null) {
          const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
        }
      }
    }
  }
  const insets = tmp4(tmp2[25])(tmp21).insets;
  const PX_16 = tmp4(tmp2[27]).space.PX_16;
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor(nativeEvent) {
        const obj = guildScrollY;
        if (guildScrollY != null) {
          const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
        }
      }
    }
    tmp24[0] = ref1;
    const obj3 = { type: "toRef", ref: ref2, extraOffset: PX_16 };
    tmp24[1] = obj3;
    cResult[7] = tmp24;
    tmp23 = tmp24;
  } else {
    class I {
      constructor(nativeEvent) {
        const obj = guildScrollY;
        if (guildScrollY != null) {
          const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
        }
      }
    }
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor(nativeEvent) {
        const obj = guildScrollY;
        if (guildScrollY != null) {
          const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
        }
      }
    }
    tmp26[0] = ref2;
    const obj5 = { type: "toRef", ref: ref3, extraOffset: PX_16 };
    tmp26[1] = obj5;
    cResult[8] = tmp26;
    tmp25 = tmp26;
  } else {
    class I {
      constructor(nativeEvent) {
        const obj = guildScrollY;
        if (guildScrollY != null) {
          const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
        }
      }
    }
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor(nativeEvent) {
        const obj = guildScrollY;
        if (guildScrollY != null) {
          const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
        }
      }
    }
    tmp28[0] = tmp23;
    tmp28[1] = tmp25;
    const obj6 = { ref: ref3, offset: obj7 };
    tmp28[2] = obj6;
    cResult[9] = tmp28;
    obj7 = { type: "toValue", value: require("native").space.PX_64 };
    tmp27 = tmp28;
  } else {
    class I {
      constructor(nativeEvent) {
        const obj = guildScrollY;
        if (guildScrollY != null) {
          const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
        }
      }
    }
  }
  if (cResult[10] !== insets) {
    class I {
      constructor(nativeEvent) {
        const obj = guildScrollY;
        if (guildScrollY != null) {
          const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
        }
      }
    }
    tmp30[0] = insets;
    tmp30[1] = tmp27;
    tmp30[2] = ref;
    cResult[10] = insets;
    cResult[11] = tmp30;
    tmp29 = tmp30;
  } else {
    class I {
      constructor(nativeEvent) {
        const obj = guildScrollY;
        if (guildScrollY != null) {
          const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
        }
      }
    }
  }
  const onFocus = tmp4(tmp2[34])(tmp29).onFocus;
  const tmp31 = require("useGuildProfileEditForm")();
  const guild = tmp31.guild;
  ({ errors, isDisabled, pendingNickname, pendingAvatar, pendingBanner, pendingThemeColors, pendingPronouns, pendingBio, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingNameplate, pendingDisplayNameStyles } = tmp31);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor(nativeEvent) {
        const obj = guildScrollY;
        if (guildScrollY != null) {
          const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
        }
      }
    }
    const items1 = [GuildMemberStore];
    cResult[12] = items1;
    tmp32 = items1;
  } else {
    class I {
      constructor(nativeEvent) {
        const obj = guildScrollY;
        if (guildScrollY != null) {
          const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
        }
      }
    }
  }
  if (cResult[13] === currentUser.id) {
    let tmp34;
    class I {
      constructor(nativeEvent) {
        const obj = guildScrollY;
        if (guildScrollY != null) {
          const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
        }
      }
    }
    const tmpResult8 = tmp(guildScrollY[36]);
    const stateFromStores = tmpResult8.useStateFromStores(tmp32, fn);
    const _Symbol = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(nativeEvent) {
          const obj = guildScrollY;
          if (guildScrollY != null) {
            const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
          }
        }
      }
      const items2 = [UserProfileStore];
      cResult[16] = items2;
      tmp34 = items2;
    } else {
      class I {
        constructor(nativeEvent) {
          const obj = guildScrollY;
          if (guildScrollY != null) {
            const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
          }
        }
      }
    }
    if (cResult[17] === currentUser.id) {
      class I {
        constructor(nativeEvent) {
          const obj = guildScrollY;
          if (guildScrollY != null) {
            const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
          }
        }
      }
      const tmpResult9 = tmp(guildScrollY[36]);
      const stateFromStores1 = tmpResult9.useStateFromStores(tmp34, tmp35);
      let id = currentUser.id;
      const tmp4Result = require("useDisplayProfile");
      if (guild != null) {
        class I {
          constructor(nativeEvent) {
            const obj = guildScrollY;
            if (guildScrollY != null) {
              const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
            }
          }
        }
      }
      const tmp4ResultResult = tmp4Result(id, undefined);
      const tmpResult10 = tmp(guildScrollY[38]);
      const customStatusActivity = tmpResult10.useCustomStatusActivity();
      require("useBadges")(tmp4ResultResult);
      if (cResult[20] === currentUser.id) {
        class I {
          constructor(nativeEvent) {
            const obj = guildScrollY;
            if (guildScrollY != null) {
              const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
            }
          }
        }
        const tmpResult11 = tmp(guildScrollY[41]);
        const canEditNickname = tmpResult11.useGuildActionSheetPermissions(guild).canEditNickname;
        if (cResult[23] !== currentUser) {
          class I {
            constructor(nativeEvent) {
              const obj = guildScrollY;
              if (guildScrollY != null) {
                const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
              }
            }
          }
          let result = obj15.canUsePremiumGuildMemberProfile(currentUser);
          cResult[23] = currentUser;
          cResult[24] = result;
        } else {
          class I {
            constructor(nativeEvent) {
              const obj = guildScrollY;
              if (guildScrollY != null) {
                const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
              }
            }
          }
        }
        if (stateFromStores1 != null) {
          class I {
            constructor(nativeEvent) {
              const obj = guildScrollY;
              if (guildScrollY != null) {
                const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
              }
            }
          }
        }
        if (cResult[25] === pendingThemeColors) {
          let tmp56;
          class I {
            constructor(nativeEvent) {
              const obj = guildScrollY;
              if (guildScrollY != null) {
                const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
              }
            }
          }
          const tmpResult12 = tmp(guildScrollY[26]);
          const floatingUpsellHeight = tmpResult12.useFloatingUpsellHeight();
          const onLayout = floatingUpsellHeight.onLayout;
          const height = floatingUpsellHeight.height;
          if (stateFromStores != null) {
            class I {
              constructor(nativeEvent) {
                const obj = guildScrollY;
                if (guildScrollY != null) {
                  const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
                }
              }
            }
          }
          if (undefined == null) {
            class I {
              constructor(nativeEvent) {
                const obj = guildScrollY;
                if (guildScrollY != null) {
                  const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
                }
              }
            }
          }
          if (stateFromStores1 != null) {
            class I {
              constructor(nativeEvent) {
                const obj = guildScrollY;
                if (guildScrollY != null) {
                  const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
                }
              }
            }
          }
          if (undefined == null) {
            class I {
              constructor(nativeEvent) {
                const obj = guildScrollY;
                if (guildScrollY != null) {
                  const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
                }
              }
            }
          }
          if (tmp4ResultResult != null) {
            class I {
              constructor(nativeEvent) {
                const obj = guildScrollY;
                if (guildScrollY != null) {
                  const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
                }
              }
            }
          }
          if (undefined == null) {
            class I {
              constructor(nativeEvent) {
                const obj = guildScrollY;
                if (guildScrollY != null) {
                  const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
                }
              }
            }
          }
          if (pendingPronouns == null) {
            class I {
              constructor(nativeEvent) {
                const obj = guildScrollY;
                if (guildScrollY != null) {
                  const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
                }
              }
            }
          }
          if (stateFromStores1 != null) {
            class I {
              constructor(nativeEvent) {
                const obj = guildScrollY;
                if (guildScrollY != null) {
                  const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
                }
              }
            }
          }
          if (undefined == null) {
            class I {
              constructor(nativeEvent) {
                const obj = guildScrollY;
                if (guildScrollY != null) {
                  const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
                }
              }
            }
          }
          if (tmp4ResultResult != null) {
            class I {
              constructor(nativeEvent) {
                const obj = guildScrollY;
                if (guildScrollY != null) {
                  const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
                }
              }
            }
          }
          if (undefined == null) {
            class I {
              constructor(nativeEvent) {
                const obj = guildScrollY;
                if (guildScrollY != null) {
                  const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
                }
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
            class I {
              constructor(nativeEvent) {
                const obj = guildScrollY;
                if (guildScrollY != null) {
                  const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
                }
              }
            }
            tmp57[0] = require("AnalyticsLocation").USER_SETTINGS;
            cResult[28] = tmp57;
            tmp56 = tmp57;
          } else {
            class I {
              constructor(nativeEvent) {
                const obj = guildScrollY;
                if (guildScrollY != null) {
                  const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
                }
              }
            }
          }
          const analyticsLocations = tmp4(tmp2[9])(tmp56).analyticsLocations;
          if (cResult[29] === currentUser) {
            class I {
              constructor(nativeEvent) {
                const obj = guildScrollY;
                if (guildScrollY != null) {
                  const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
                }
              }
            }
          }
          const obj8 = { user: currentUser, displayProfile: tmp4ResultResult, pendingThemeColors };
          cResult[29] = currentUser;
          cResult[30] = tmp4ResultResult;
          cResult[31] = pendingThemeColors;
          cResult[32] = obj8;
        }
        const tmpResult13 = tmp(guildScrollY[42]);
        cResult[25] = pendingThemeColors;
        cResult[26] = undefined;
        cResult[27] = tmpResult13.canResetThemeColors(pendingThemeColors, undefined);
        const canResetThemeColorsResult = tmpResult13.canResetThemeColors(pendingThemeColors, undefined);
      }
      const obj9 = { userId: currentUser.id, image: pendingAvatar };
      const tmpResult14 = tmp(guildScrollY[40]);
      const pendingAvatarSrc = tmpResult14.getPendingAvatarSrc(obj9);
      cResult[20] = currentUser.id;
      cResult[21] = pendingAvatar;
      cResult[22] = pendingAvatarSrc;
    }
    function ge() {
      let guildMemberProfile = null;
      if (null != guild) {
        let id1;
        const getGuildMemberProfile = UserProfileStore.getGuildMemberProfile;
        const id = currentUser.id;
        if (guild != null) {
          id1 = tmp.id;
        }
        guildMemberProfile = getGuildMemberProfile(id, id1);
      }
      return guildMemberProfile;
    }
    cResult[17] = currentUser.id;
    cResult[18] = guild;
    cResult[19] = ge;
    tmp35 = ge;
  }
  fn = function z() {
    let member = null;
    if (null != guild) {
      member = GuildMemberStore.getMember(tmp.id, currentUser.id);
    }
    return member;
  };
  cResult[13] = currentUser.id;
  cResult[14] = guild;
  cResult[15] = fn;
}) : (function GuildProfileEditForm(currentUser) {
  let avatarBackground;
  let bio;
  let containerBackground;
  let errors;
  let first;
  let first1;
  let first2;
  let first3;
  let gradientFallbackBackground;
  let gradientSecondaryBackground;
  let guild_tag;
  let height;
  let id2;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let isDisabled;
  let items10;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items2;
  let items6;
  let items7;
  let items8;
  let items9;
  let nick;
  let num2;
  let obj11;
  let obj16;
  let obj19;
  let obj28;
  let obj7;
  let onLayout;
  let pendingAvatar;
  let pendingAvatarDecoration;
  let pendingBanner;
  let pendingBio;
  let pendingDisplayNameStyles;
  let pendingNameplate;
  let pendingNickname;
  let pendingProfileEffect;
  let pendingProfileFrame;
  let pendingPronouns;
  let pendingThemeColors;
  let primaryColor;
  let secondaryColor;
  let str6;
  let theme;
  let tmp42;
  let tmp46;
  let tmp50;
  let tmp51;
  let tmp59;
  let tmpResult14;
  let tmpResult18;
  currentUser = currentUser.currentUser;
  const stickyHeader = currentUser.stickyHeader;
  let guildScrollY;
  let guild;
  let analyticsLocations;
  let tmp = guildScrollY;
  const tmp2 = guild;
  const tmp3 = guildScrollY(guild[30])();
  const tmp4 = guildScrollY(guild[24])();
  let obj = currentUser(guild[31]);
  const bioMaxLength = obj.useBioMaxLength({ location: "guild_profile_edit_form" });
  let obj2 = react;
  const tmp7 = guildScrollY(guild[32])();
  const ref = react.useRef(null);
  const context = react.useContext(guildScrollY(guild[33]));
  guildScrollY = undefined;
  if (context != null) {
    guildScrollY = context.guildScrollY;
  }
  const items = [guildScrollY];
  const items1 = [guildScrollY];
  const callback = obj2.useCallback((nativeEvent) => {
    const obj = guildScrollY;
    if (guildScrollY != null) {
      const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
    }
  }, items);
  const effect = obj2.useEffect(() => {
    let obj = guildScrollY;
    if (guildScrollY != null) {
      let result = obj.set(0);
    }
    return () => {
      let result;
      const obj = guildScrollY;
      if (guildScrollY != null) {
        result = obj.set(0);
      }
      return result;
    };
  }, items1);
  const ref1 = obj2.useRef(null);
  const ref2 = obj2.useRef(null);
  const ref3 = obj2.useRef(null);
  const insets = tmp(tmp2[25])({ includeKeyboardHeight: true }).insets;
  const PX_16 = tmp(tmp2[27]).space.PX_16;
  const obj3 = { insets, inputs: items2, scrollViewRef: ref };
  items2 = [, , ];
  const obj4 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  items2[0] = obj4;
  const obj5 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  items2[1] = obj5;
  const obj6 = { ref: ref3, offset: obj7 };
  obj7 = { type: "toValue", value: tmp(tmp2[27]).space.PX_64 };
  items2[2] = obj6;
  const tmpResult = tmp(tmp2[34]);
  const onFocus = tmpResult(obj3).onFocus;
  const tmp17 = tmp(tmp2[35])();
  guild = tmp17.guild;
  ({ errors, isDisabled, pendingNickname, pendingThemeColors, pendingPronouns, pendingBio, pendingAvatar, pendingBanner, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingNameplate, pendingDisplayNameStyles } = tmp17);
  const items3 = [GuildMemberStore];
  const tmp5Result = currentUser(tmp2[36]);
  const stateFromStores = tmp5Result.useStateFromStores(items3, () => {
    let member = null;
    if (null != guild) {
      member = GuildMemberStore.getMember(tmp.id, currentUser.id);
    }
    return member;
  });
  const items4 = [UserProfileStore];
  const tmp5Result8 = currentUser(tmp2[36]);
  const stateFromStores1 = tmp5Result8.useStateFromStores(items4, () => {
    let guildMemberProfile = null;
    if (null != guild) {
      let id1;
      const getGuildMemberProfile = UserProfileStore.getGuildMemberProfile;
      const id = currentUser.id;
      if (guild != null) {
        id1 = tmp.id;
      }
      guildMemberProfile = getGuildMemberProfile(id, id1);
    }
    return guildMemberProfile;
  });
  let id1;
  let id = currentUser.id;
  const tmpResult11 = tmp(tmp2[37]);
  if (guild != null) {
    id1 = guild.id;
  }
  const tmpResult1Result = tmpResult11(id, id1);
  const tmp5Result9 = currentUser(tmp2[38]);
  const customStatusActivity = tmp5Result9.useCustomStatusActivity();
  const obj8 = { userId: currentUser.id, image: pendingAvatar };
  const tmp24 = tmp(tmp2[39])(tmpResult1Result);
  const tmp5Result10 = currentUser(tmp2[40]);
  const pendingAvatarSrc = tmp5Result10.getPendingAvatarSrc(obj8);
  const tmp5Result11 = currentUser(tmp2[41]);
  const canEditNickname = tmp5Result11.useGuildActionSheetPermissions(guild).canEditNickname;
  const tmpResult12 = tmp(tmp2[8]);
  let result = tmpResult12.canUsePremiumGuildMemberProfile(currentUser);
  let themeColors;
  const canResetThemeColors = currentUser(tmp2[42]).canResetThemeColors;
  currentUser(tmp2[42]);
  if (stateFromStores1 != null) {
    themeColors = stateFromStores1.themeColors;
  }
  let tmp66Result8 = !result;
  const canResetThemeColorsResult = canResetThemeColors(pendingThemeColors, themeColors);
  if (!result) {
    tmp66Result8 = !tmp7;
  }
  const tmp5Result13 = currentUser(tmp2[26]);
  const floatingUpsellHeight = tmp5Result13.useFloatingUpsellHeight();
  let str;
  ({ height, onLayout } = floatingUpsellHeight);
  if (stateFromStores != null) {
    str = stateFromStores.nick;
  }
  if (str == null) {
    str = "";
  }
  let str2;
  if (stateFromStores1 != null) {
    str2 = stateFromStores1.pronouns;
  }
  if (str2 == null) {
    str2 = "";
  }
  let str3;
  if (tmpResult1Result != null) {
    str3 = tmpResult1Result._userProfile.pronouns;
  }
  if (str3 == null) {
    str3 = "";
  }
  if (pendingPronouns == null) {
    pendingPronouns = str2;
  }
  let str4;
  if (stateFromStores1 != null) {
    str4 = stateFromStores1.bio;
  }
  if (str4 == null) {
    str4 = "";
  }
  let str5;
  if (tmpResult1Result != null) {
    str5 = tmpResult1Result._userProfile.bio;
  }
  if (str5 == null) {
    str5 = "";
  }
  const items5 = [];
  const tmpResult13 = tmp(tmp2[9]);
  items5[0] = tmp(tmp2[10]).USER_SETTINGS;
  analyticsLocations = tmpResult13(items5).analyticsLocations;
  ({ theme, primaryColor, secondaryColor } = tmp(tmp2[43])({ user: currentUser, displayProfile: tmpResult1Result, pendingThemeColors }));
  tmp(tmp2[43])({ user: currentUser, displayProfile: tmpResult1Result, pendingThemeColors });
  const tmp5Result14 = currentUser(tmp2[44]);
  const userProfileColors = tmp5Result14.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  ({ gradientFallbackBackground, avatarBackground } = userProfileColors);
  const bottom = insets.bottom;
  if (tmp66Result8) {
    num = height;
  }
  const sum = bottom + num;
  const obj9 = { backgroundColor: avatarBackground };
  ({ nick, bio, guild_tag } = errors);
  const sum1 = sum + tmp(tmp2[27]).space.PX_16;
  const tmp37 = _objectWithoutProperties(errors, closure_4);
  if (nick != null) {
    first = nick[0];
  }
  const pronouns = errors.pronouns;
  if (pronouns != null) {
    first1 = pronouns[0];
  }
  if (bio != null) {
    first2 = bio[0];
  }
  if (guild_tag != null) {
    first3 = guild_tag[0];
  }
  if (null == guild) {
    return null;
  } else {
    const obj10 = { theme, primaryColor, secondaryColor, children: closure_18(closure_8, obj11) };
    obj11 = { style: items6, children: items16 };
    items6 = [tmp4.container, ];
    const obj12 = { backgroundColor: gradientSecondaryBackground };
    items6[1] = obj12;
    const obj13 = { ref, bounces: null == context, keyboardShouldPersistTaps: str6, onScroll: tmp42, scrollEventThrottle: num2, stickyHeaderIndices: items7, children: items8 };
    str6 = undefined;
    const ThemeContextProvider = tmp5(tmp2[56]).ThemeContextProvider;
    const tmp69 = closure_7;
    if (null != stickyHeader) {
      str6 = "handled";
    }
    tmp42 = undefined;
    if (null != context) {
      tmp42 = callback;
    }
    num2 = undefined;
    if (null != context) {
      num2 = 16;
    }
    items7 = undefined;
    if (null != stickyHeader) {
      items7 = [2];
    }
    const obj14 = { style: tmp4.bounceOffset };
    items8 = [closure_17(closure_8, obj14), closure_17(currentUser(tmp2[33]).ProfileCustomizationHeaderSpacer, {}), stickyHeader, ];
    const obj15 = { style: obj16, children: items9 };
    obj16 = { backgroundColor: gradientSecondaryBackground };
    const obj17 = { user: currentUser, displayProfile: tmpResult1Result, guildId: guild.id, guildMember: stateFromStores, guildMemberProfile: stateFromStores1, pendingAvatarSrc, pendingBanner, pendingThemeColors, disabled: isDisabled };
    items9 = [closure_17(EditGuildProfileBanner, obj17), ];
    let tmp66Result = null;
    if (null != guild) {
      const obj18 = { style: items10, children: closure_17(tmpResult14, obj19) };
      items10 = [, , , ];
      ({ avatarBackground: arr10[0], avatarPosition: arr10[1] } = tmp3);
      items10[2] = tmp4.avatarContainer;
      items10[3] = obj9;
      obj19 = { userId: currentUser.id, disabled: tmp46, disableStatus: false, guildId: id2, statusStyle: obj9 };
      tmp46 = isDisabled;
      tmpResult14 = tmp(tmp2[45]);
      if (!isDisabled) {
        tmp46 = !result;
      }
      id2 = undefined;
      if (guild != null) {
        id2 = guild.id;
      }
      tmp66Result = tmp66(tmp68, obj18);
    }
    const items11 = [tmp66Result, ];
    const obj20 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: items12, children: items13 };
    items12 = [, , ];
    ({ profileContentWrapper: arr12[0], profileContent: arr12[1] } = tmp3);
    const obj21 = { paddingTop: 0, paddingBottom: sum1 };
    items12[2] = obj21;
    const obj22 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: null, editEnabled: true };
    ({ customStatusBubble: obj26.style, emojiOnlyCustomStatusBubble: obj26.emojiOnlyStyle } = tmp3);
    items13 = [, , ];
    const tmpResult15 = tmp(tmp2[57]);
    items13[0] = closure_17(tmp(tmp2[58]), obj22);
    const obj23 = { user: currentUser, displayName: tmp50, pronouns: tmp51, badges: tmp24, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", guildId: guild.id, pendingDisplayNameStyles };
    tmp50 = pendingNickname;
    const tmpResult16 = tmp(tmp2[59]);
    if (pendingNickname == null) {
      tmp50 = str;
    }
    tmp51 = str3;
    if ("" !== pendingPronouns) {
      tmp51 = pendingPronouns;
    }
    items13[1] = closure_17(tmpResult16, obj23);
    let tmp67Result = null;
    if (null != guild) {
      const obj24 = { style: items14, children: items15 };
      items14 = [tmp4.formContainer, ];
      const obj25 = { backgroundColor: containerBackground, paddingBottom: 20 };
      items14[1] = obj25;
      let tmp53 = null;
      if (null == first2) {
        tmp53 = null;
        if (null == first) {
          if (null == first3) {
            const _Object = Object;
            let stringResult = null;
            if (Object.keys(tmp37).length > 0) {
              const intl = tmp5(tmp2[16]).intl;
              stringResult = intl.string(tmp5(tmp2[16]).t.s35OuK);
            }
            first3 = stringResult;
          }
          let tmp66Result5 = null;
          if (null != first3) {
            tmp66Result5 = null;
            if ("" !== first3) {
              const obj27 = { style: tmp4.errorContainer, children: closure_17(currentUser(tmp2[28]).Text, obj28) };
              obj28 = { variant: "text-sm/bold", color: "text-feedback-critical", children: first3 };
              tmp66Result5 = tmp66(tmp68, obj27);
            }
          }
          tmp53 = tmp66Result5;
        }
      }
      items15 = [tmp53, , , , , , , , , ];
      const obj29 = {
        inputRef: ref1,
        label: intl2.string(currentUser(tmp2[16]).t.me1lRk),
        errorMessage: first,
        value: pendingNickname,
        onFocus,
        onChange(nickname) {
              const obj = UserProfileSettingsActionCreators;
              const obj2 = { guildId: guild.id, nickname };
              return obj.setPendingChanges(obj2);
            },
        placeholder: tmpResult18.getName(currentUser),
        maxLength,
        disabled: tmp59
      };
      const tmpResult17 = tmp(tmp2[46]);
      intl2 = tmp5(tmp2[16]).intl;
      if (pendingNickname == null) {
        pendingNickname = str;
      }
      tmp59 = !canEditNickname;
      tmpResult18 = tmp(tmp2[47]);
      if (canEditNickname) {
        tmp59 = isDisabled;
      }
      items15[1] = closure_17(tmpResult17, obj29);
      let tmp66Result6 = result;
      if (tmp66Result6) {
        const obj30 = { user: currentUser, guildId: guild.id };
        tmp66Result6 = tmp66(tmp(tmp2[48]), obj30);
      }
      items15[2] = tmp66Result6;
      const obj31 = {
        inputRef: ref2,
        label: intl3.string(currentUser(tmp2[16]).t["+T3RI/"]),
        errorMessage: first1,
        description: intl4.string(currentUser(tmp2[16]).t.NZqtIp),
        value: pendingPronouns,
        onFocus,
        onChange(pronouns) {
              const obj = UserProfileSettingsActionCreators;
              const obj2 = { guildId: guild.id, pronouns };
              return obj.setPendingChanges(obj2);
            },
        placeholder: str3,
        maxLength: maxLength2,
        spellCheck: false,
        autoCorrect: false,
        disabled: isDisabled
      };
      const tmpResult19 = tmp(tmp2[46]);
      intl3 = tmp5(tmp2[16]).intl;
      intl4 = tmp5(tmp2[16]).intl;
      items15[3] = closure_17(tmpResult19, obj31);
      let tmp66Result7 = null;
      if (result) {
        const obj32 = {
          inputRef: ref3,
          label: intl5.string(currentUser(tmp2[16]).t.ZzAR2Y),
          errorMessage: first2,
          description: intl6.string(currentUser(tmp2[16]).t.S5O8U2),
          value: pendingBio,
          onFocus,
          onChange(bio) {
                  const obj = UserProfileSettingsActionCreators;
                  const obj2 = { guildId: guild.id, bio };
                  return obj.setPendingChanges(obj2);
                },
          placeholder: str5,
          maxLength: bioMaxLength,
          numberOfLines: 5,
          disabled: isDisabled
        };
        const tmpResult20 = tmp(tmp2[46]);
        intl5 = tmp5(tmp2[16]).intl;
        intl6 = tmp5(tmp2[16]).intl;
        if (pendingBio == null) {
          pendingBio = str4;
        }
        tmp66Result7 = tmp66(tmpResult20, obj32);
      }
      items15[4] = tmp66Result7;
      const obj33 = {
        pendingAvatarSrc,
        pendingThemeColors,
        user: currentUser,
        guildId: guild.id,
        onProfileThemeColorsChanged(themeColors) {
              const obj = UserProfileSettingsActionCreators;
              const obj2 = { guildId: guild.id, themeColors };
              return obj.setPendingChanges(obj2);
            },
        showResetMenu: canResetThemeColorsResult
      };
      items15[5] = closure_17(tmp(tmp2[49]), obj33);
      const obj34 = { user: currentUser, guildId: guild.id, pendingAvatarDecoration };
      items15[6] = closure_17(tmp(tmp2[50]), obj34);
      const obj35 = { user: currentUser, guildId: guild.id, pendingProfileEffect, displayProfile: tmpResult1Result };
      items15[7] = closure_17(tmp(tmp2[51]), obj35);
      const obj36 = { user: currentUser, guildId: guild.id, pendingProfileFrame, displayProfile: tmpResult1Result };
      items15[8] = closure_17(tmp(tmp2[52]), obj36);
      const obj37 = { user: currentUser, pendingNameplate, guildId: guild.id };
      items15[9] = closure_17(tmp(tmp2[53]), obj37);
      tmp67Result = tmp67(tmp68, obj24);
    }
    const obj38 = { children: items11 };
    items13[2] = tmp67Result;
    items11[1] = closure_18(tmpResult15, obj20);
    items9[1] = closure_18(closure_8, obj38);
    items8[3] = closure_18(closure_8, obj15);
    items16 = [closure_18(tmp69, obj13), ];
    if (tmp66Result8) {
      const obj39 = {
        onButtonPress: function handleUpsellPress() {
              let obj2;
              const obj = { analyticsLocation: obj2, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
              obj2 = { object: unpackModuleId.BUTTON_CTA };
              const tmp = openPremiumModalDefault;
              const merged = Object.assign(closure_19);
              tmp(obj);
            },
        onLayout
      };
      tmp66Result8 = tmp66(closure_21, obj39);
    }
    items16[1] = tmp66Result8;
    return closure_17(ThemeContextProvider, obj10);
  }
});
let result = size.fileFinishedImporting("modules/user_profile/native/GuildProfileEditForm.tsx");

export default tmp5;
