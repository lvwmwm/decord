// Module ID: 10571
// Function ID: 10572
// Name: ProfileEffectUserPreview
// Dependencies: [19, 21, 10572, 1115, 2]
// Exports: default

// Module 10571 (ProfileEffectUserPreview)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1115 */;
import UserProfilePreviewDefault from "UserProfilePreview" /* 10572 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/previews/ProfileEffectUserPreview.tsx");

export default function ProfileEffectUserPreview(profileEffect) {
  let avatarDecorationOverride;
  let formatToPlainStringResult;
  let profileFrameOverride;
  profileEffect = profileEffect.profileEffect;
  ({ avatarDecorationOverride, profileFrameOverride } = profileEffect);
  const merged = Object.assign(profileEffect, Object.assign({ profileEffect: 0, avatarDecorationOverride: 0, profileFrameOverride: 0 }));
  const obj = { profileEffectOverride: profileEffect, avatarDecorationOverride, profileFrameOverride, accessibilityLabel: formatToPlainStringResult };
  const tmp2 = jsx;
  const tmp4 = UserProfilePreviewDefault;
  if (null != profileEffect) {
    const intl2 = intl3.intl;
    const obj2 = { a11y_text: profileEffect.accessibilityLabel };
    formatToPlainStringResult = intl2.formatToPlainString(intl3.t.mbHmX2, obj2);
  } else {
    const intl = intl3.intl;
    formatToPlainStringResult = intl.string(intl3.t.XYdHeC);
  }
  const merged1 = Object.assign(merged);
  return tmp2(tmp4, obj);
};
