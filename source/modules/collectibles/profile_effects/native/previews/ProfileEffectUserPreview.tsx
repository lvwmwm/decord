// Module ID: 8227
// Function ID: 64977
// Name: ProfileEffectUserPreview
// Dependencies: []
// Exports: default

// Module 8227 (ProfileEffectUserPreview)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/collectibles/profile_effects/native/previews/ProfileEffectUserPreview.tsx");

export default function ProfileEffectUserPreview(profileEffect) {
  profileEffect = profileEffect.profileEffect;
  let obj = Object.create(null);
  obj.profileEffect = 0;
  const merged = Object.assign(profileEffect, obj);
  obj = { profileEffectOverride: profileEffect };
  if (null != profileEffect) {
    const intl2 = arg1(dependencyMap[3]).intl;
    obj = { a11y_text: profileEffect.accessibilityLabel };
    let formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[3]).t.mbHmX2, obj);
  } else {
    const intl = arg1(dependencyMap[3]).intl;
    formatToPlainStringResult = intl.string(arg1(dependencyMap[3]).t.XYdHeC);
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  const merged1 = Object.assign(merged);
  return jsx(importDefault(dependencyMap[2]), obj);
};
