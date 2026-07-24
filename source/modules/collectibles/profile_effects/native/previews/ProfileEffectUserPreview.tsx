// Module ID: 8278
// Function ID: 65254
// Name: ProfileEffectUserPreview
// Dependencies: [31, 33, 8279, 1212, 2]
// Exports: default

// Module 8278 (ProfileEffectUserPreview)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("filterLayer").fileFinishedImporting("modules/collectibles/profile_effects/native/previews/ProfileEffectUserPreview.tsx");

export default function ProfileEffectUserPreview(profileEffect) {
  profileEffect = profileEffect.profileEffect;
  let obj = Object.create(null);
  obj.profileEffect = 0;
  const merged = Object.assign(profileEffect, obj);
  obj = { profileEffectOverride: profileEffect };
  if (null != profileEffect) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { a11y_text: profileEffect.accessibilityLabel };
    let formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.mbHmX2, obj);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    formatToPlainStringResult = intl.string(require(1212) /* getSystemLocale */.t.XYdHeC);
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  const merged1 = Object.assign(merged);
  return jsx(importDefault(8279), { profileEffectOverride: profileEffect });
};
