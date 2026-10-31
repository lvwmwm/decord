// Module ID: 9713
// Function ID: 9714
// Name: QuestHomeHeroCta
// Dependencies: [2]
// Exports: questHomeHeroCtaFromServer

// Module 9713 (QuestHomeHeroCta)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/QuestHomeHeroCta.tsx");

export function questHomeHeroCtaFromServer(cta) {
  let tmp;
  let tmp2;
  const obj = { url: cta.url, buttonLabel: cta.button_label, android: tmp, ios: tmp2 };
  tmp = undefined;
  if (null != cta.android) {
    tmp = { androidAppId: cta.android.android_app_id };
    const obj2 = { androidAppId: cta.android.android_app_id };
  }
  tmp2 = undefined;
  if (null != cta.ios) {
    tmp2 = { iosAppId: cta.ios.ios_app_id };
    const obj3 = { iosAppId: cta.ios.ios_app_id };
  }
  return obj;
}
