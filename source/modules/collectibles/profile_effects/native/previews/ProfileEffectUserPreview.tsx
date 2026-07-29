// Module ID: 8075
// Function ID: 8076
// Name: ProfileEffectUserPreview
// Dependencies: [19, 21, 8076, 1236, 2]
// Exports: default

// Module 8075 (ProfileEffectUserPreview)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("filterLayer").fileFinishedImporting("modules/collectibles/profile_effects/native/previews/ProfileEffectUserPreview.tsx");

export default function ProfileEffectUserPreview(profileEffect) {
  profileEffect = profileEffect.profileEffect;
  const merged = Object.assign(profileEffect, Object.create(null));
  let obj = { profileEffectOverride: profileEffect, accessibilityLabel: null };
  if (null != profileEffect) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj = { a11y_text: null };
    obj[0] = profileEffect.accessibilityLabel;
    let formatToPlainStringResult = intl2.formatToPlainString(require(1236) /* getSystemLocale */.t.mbHmX2, obj);
  } else {
    const intl = require(1236) /* getSystemLocale */.intl;
    formatToPlainStringResult = intl.string(require(1236) /* getSystemLocale */.t.XYdHeC);
  }
  obj[1] = formatToPlainStringResult;
  const merged1 = Object.assign(merged);
  return jsx(importDefault(8076), { profileEffectOverride: profileEffect, accessibilityLabel: null });
};
