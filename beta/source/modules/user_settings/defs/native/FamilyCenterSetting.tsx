// Module ID: 15141
// Function ID: 15142
// Name: FamilyCenterSetting
// Dependencies: [19, 1078, 21, 558, 568, 15142, 15143, 8903, 580, 1119, 2486, 11630, 5341, 15146, 2]

// Module 15141 (FamilyCenterSetting)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import _modDef2486 from "module_2486" /* 2486 */;
import useIsParentalConsentBannerActive from "useIsParentalConsentBannerActive" /* 15142 */;
import useParentalConsentWarning from "useParentalConsentWarning" /* 15143 */;
import noop from "module_19" /* 19 */;

const util = intl(1119);
const WarningIcon = intl(8903);
require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11630);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let intl = require;
  let stringResult = dependencyMap;
  const cResult = c.c(1);
  const isParentalConsentBannerActive = useIsParentalConsentBannerActive.useIsParentalConsentBannerActive();
  const parentalConsentWarning = useParentalConsentWarning.useParentalConsentWarning();
  let daysRemaining;
  if (parentalConsentWarning != null) {
    daysRemaining = parentalConsentWarning.daysRemaining;
  }
  if (daysRemaining == null) {
    daysRemaining = null;
  }
  let tmp6 = null;
  if (isParentalConsentBannerActive) {
    tmp6 = null;
    if (null != daysRemaining) {
      tmp6 = null;
      if (daysRemaining >= 0) {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_WARNING, accessible: true, accessibilityLabel: null };
          intl = util.intl;
          stringResult = intl.string(_modDef2486.wucWfE);
          obj4.accessibilityLabel = stringResult;
          const tmp11 = jsx(WarningIcon.WarningIcon, { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_WARNING, accessible: true, accessibilityLabel: null });
          cResult[0] = tmp11;
          let first = tmp11;
        } else {
          first = cResult[0];
        }
      }
    }
  }
  return tmp6;
}) : (() => {
  const isParentalConsentBannerActive = useIsParentalConsentBannerActive.useIsParentalConsentBannerActive();
  const parentalConsentWarning = useParentalConsentWarning.useParentalConsentWarning();
  let daysRemaining;
  if (parentalConsentWarning != null) {
    daysRemaining = parentalConsentWarning.daysRemaining;
  }
  if (daysRemaining == null) {
    daysRemaining = null;
  }
  let tmp6 = null;
  if (isParentalConsentBannerActive) {
    tmp6 = null;
    if (null != daysRemaining) {
      tmp6 = null;
      if (daysRemaining >= 0) {
        const obj3 = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_WARNING, accessible: true, accessibilityLabel: null };
        const intl = tmp(1119).intl;
        obj3.accessibilityLabel = intl.string(_modDef2486.wucWfE);
        tmp6 = jsx(tmp(8903).WarningIcon, { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_WARNING, accessible: true, accessibilityLabel: null });
      }
    }
  }
  return tmp6;
});
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2486.RZqaJn);
  },
  parent: null,
  IconComponent: fn(5341).GroupIcon,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    let intl = require;
    let stringResult = dependencyMap;
    const cResult = c.c(1);
    const isParentalConsentBannerActive = useIsParentalConsentBannerActive.useIsParentalConsentBannerActive();
    const parentalConsentWarning = useParentalConsentWarning.useParentalConsentWarning();
    let daysRemaining;
    if (parentalConsentWarning != null) {
      daysRemaining = parentalConsentWarning.daysRemaining;
    }
    if (daysRemaining == null) {
      daysRemaining = null;
    }
    let tmp6 = null;
    if (isParentalConsentBannerActive) {
      tmp6 = null;
      if (null != daysRemaining) {
        tmp6 = null;
        if (daysRemaining >= 0) {
          const _Symbol = Symbol;
          if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_WARNING, accessible: true, accessibilityLabel: null };
            intl = util.intl;
            stringResult = intl.string(_modDef2486.wucWfE);
            obj4.accessibilityLabel = stringResult;
            const tmp11 = jsx(WarningIcon.WarningIcon, { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_WARNING, accessible: true, accessibilityLabel: null });
            cResult[0] = tmp11;
            let first = tmp11;
          } else {
            first = cResult[0];
          }
        }
      }
    }
    return tmp6;
  }) : (() => {
    const isParentalConsentBannerActive = useIsParentalConsentBannerActive.useIsParentalConsentBannerActive();
    const parentalConsentWarning = useParentalConsentWarning.useParentalConsentWarning();
    let daysRemaining;
    if (parentalConsentWarning != null) {
      daysRemaining = parentalConsentWarning.daysRemaining;
    }
    if (daysRemaining == null) {
      daysRemaining = null;
    }
    let tmp6 = null;
    if (isParentalConsentBannerActive) {
      tmp6 = null;
      if (null != daysRemaining) {
        tmp6 = null;
        if (daysRemaining >= 0) {
          const obj3 = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_WARNING, accessible: true, accessibilityLabel: null };
          const intl = tmp(1119).intl;
          obj3.accessibilityLabel = intl.string(_modDef2486.wucWfE);
          tmp6 = jsx(tmp(8903).WarningIcon, { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_WARNING, accessible: true, accessibilityLabel: null });
        }
      }
    }
    return tmp6;
  }),
  screen: {
    route: fn(1078).UserSettingsSections.FAMILY_CENTER,
    getComponent() {
      return require("UserSettingsFamilyCenter").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSetting.tsx");

export default route;
