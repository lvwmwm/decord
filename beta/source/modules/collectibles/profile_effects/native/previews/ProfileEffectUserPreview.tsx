// Module ID: 11389
// Function ID: 11390
// Name: ProfileEffectUserPreview
// Dependencies: [109, 19, 21, 558, 568, 1119, 11390, 2]

// Module 11389 (ProfileEffectUserPreview)
import c from "c" /* 568 */;
import UserProfilePreviewDefault from "UserProfilePreview" /* 11390 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const util = mbHmX2(1119);
require = fn;
let closure_3 = ["profileEffect"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/previews/ProfileEffectUserPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((profileEffect) => {
  let mbHmX2 = require;
  const cResult = c.c(9);
  if (cResult[0] !== profileEffect) {
    profileEffect = profileEffect.profileEffect;
    const tmp7 = _objectWithoutProperties(profileEffect, closure_3);
    cResult[0] = profileEffect;
    cResult[1] = profileEffect;
    cResult[2] = tmp7;
    let tmp4 = tmp7;
    let tmp3 = profileEffect;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  if (cResult[3] !== tmp3) {
    if (null != tmp3) {
      const intl2 = util.intl;
      mbHmX2 = util.t.mbHmX2;
      const obj2 = { a11y_text: tmp3.accessibilityLabel };
      let formatToPlainStringResult = intl2.formatToPlainString(mbHmX2, obj2);
    } else {
      const intl = util.intl;
      formatToPlainStringResult = intl.string(util.t.XYdHeC);
    }
    cResult[3] = tmp3;
    cResult[4] = formatToPlainStringResult;
  } else {
    if (cResult[5] === tmp3) {
      if (cResult[6] === tmp4) {
        if (cResult[7] === tmp8) {
          let tmp12 = cResult[8];
        }
        return tmp12;
      }
    }
    const obj3 = { profileEffectOverride: tmp3, accessibilityLabel: cResult[4] };
    const merged = Object.assign(tmp4);
    const tmp19 = jsx(UserProfilePreviewDefault, { profileEffectOverride: tmp3, accessibilityLabel: cResult[4] });
    cResult[5] = tmp3;
    cResult[6] = tmp4;
    cResult[7] = cResult[4];
    cResult[8] = tmp19;
    tmp12 = tmp19;
  }
}) : ((profileEffect) => {
  profileEffect = profileEffect.profileEffect;
  const merged = Object.assign(profileEffect, Object.assign({ profileEffect: 0 }));
  const obj = { profileEffectOverride: profileEffect, accessibilityLabel: null };
  if (null != profileEffect) {
    const intl2 = util.intl;
    const obj2 = { a11y_text: profileEffect.accessibilityLabel };
    let formatToPlainStringResult = intl2.formatToPlainString(util.t.mbHmX2, obj2);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(util.t.XYdHeC);
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  const merged1 = Object.assign(merged);
  return jsx(UserProfilePreviewDefault, { profileEffectOverride: profileEffect, accessibilityLabel: null });
});
