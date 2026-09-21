// Module ID: 15087
// Function ID: 15088
// Name: useExplicitContentSettingsOrDefault
// Dependencies: [1224, 558, 568, 7542, 565, 7545, 2]

// Module 15087 (useExplicitContentSettingsOrDefault)
import useStateFromStores from "useStateFromStores" /* 565 */;
import c from "c" /* 568 */;
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils" /* 7542 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 7545 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1224 */;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsProtoStore];
    const fn = function o() {
      const textAndImages = settings.settings.textAndImages;
      let prop;
      if (textAndImages != null) {
        prop = textAndImages.explicitContentSettings;
      }
      if (prop == null) {
        prop = SensitiveMediaExplicitRedactionSettingsUtils.getExplicitContentSettingOrDefault();
      }
      return prop;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStoresObject = useStateFromStores.useStateFromStoresObject(tmp4, tmp5);
  let prop;
  if (stateFromStoresObject != null) {
    prop = stateFromStoresObject.explicitContentGuilds;
  }
  if (cResult[2] !== prop) {
    const obj2 = { setting: prop };
    const explicitContentSettingWithDefaults = tmp(7542).resolveExplicitContentSettingWithDefaults(obj2);
    cResult[2] = prop;
    cResult[3] = explicitContentSettingWithDefaults;
    let tmp9 = explicitContentSettingWithDefaults;
    const tmpResult4 = tmp(7542);
  } else {
    tmp9 = cResult[3];
  }
  let prop1;
  if (stateFromStoresObject != null) {
    prop1 = stateFromStoresObject.explicitContentNonFriendDm;
  }
  if (cResult[4] !== prop1) {
    const obj3 = { setting: prop1, isDm: true };
    const explicitContentSettingWithDefaults1 = tmp(7542).resolveExplicitContentSettingWithDefaults(obj3);
    cResult[4] = prop1;
    cResult[5] = explicitContentSettingWithDefaults1;
    let tmp12 = explicitContentSettingWithDefaults1;
    const tmpResult5 = tmp(7542);
  } else {
    tmp12 = cResult[5];
  }
  let prop2;
  if (stateFromStoresObject != null) {
    prop2 = stateFromStoresObject.explicitContentFriendDm;
  }
  if (cResult[6] !== prop2) {
    const obj4 = { setting: prop2, isDm: true, isFriend: true };
    const explicitContentSettingWithDefaults2 = tmp(7542).resolveExplicitContentSettingWithDefaults(obj4);
    cResult[6] = prop2;
    cResult[7] = explicitContentSettingWithDefaults2;
    let tmp15 = explicitContentSettingWithDefaults2;
    const tmpResult6 = tmp(7542);
  } else {
    tmp15 = cResult[7];
  }
  if (cResult[8] === tmp9) {
    if (cResult[9] === tmp12) {
      if (cResult[10] === tmp15) {
        let tmp17 = cResult[11];
      }
      return tmp17;
    }
  }
  const obj5 = { explicitContentGuilds: tmp9, explicitContentNonFriendDm: tmp12, explicitContentFriendDm: tmp15 };
  cResult[8] = tmp9;
  cResult[9] = tmp12;
  cResult[10] = tmp15;
  cResult[11] = obj5;
  tmp17 = obj5;
}) : (() => {
  const items = [UserSettingsProtoStore];
  const stateFromStoresObject = useStateFromStores.useStateFromStoresObject(items, () => {
    const textAndImages = settings.settings.textAndImages;
    let prop;
    if (textAndImages != null) {
      prop = textAndImages.explicitContentSettings;
    }
    if (prop == null) {
      prop = SensitiveMediaExplicitRedactionSettingsUtils.getExplicitContentSettingOrDefault();
    }
    return prop;
  });
  let prop;
  if (stateFromStoresObject != null) {
    prop = stateFromStoresObject.explicitContentGuilds;
  }
  const obj3 = { explicitContentGuilds: SensitiveMediaExplicitRedactionSettingsUtils.resolveExplicitContentSettingWithDefaults({ setting: prop }), explicitContentNonFriendDm: null, explicitContentFriendDm: null };
  let prop1;
  if (stateFromStoresObject != null) {
    prop1 = stateFromStoresObject.explicitContentNonFriendDm;
  }
  obj3.explicitContentNonFriendDm = SensitiveMediaExplicitRedactionSettingsUtils.resolveExplicitContentSettingWithDefaults({ setting: prop1, isDm: true });
  const tmpResult = SensitiveMediaExplicitRedactionSettingsUtils;
  let prop2;
  if (stateFromStoresObject != null) {
    prop2 = stateFromStoresObject.explicitContentFriendDm;
  }
  obj3.explicitContentFriendDm = SensitiveMediaExplicitRedactionSettingsUtils.resolveExplicitContentSettingWithDefaults({ setting: prop2, isDm: true, isFriend: true });
  return obj3;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx");

export const useExplicitContentSettingOrDefault = tmp2;
export const useGoreContentSettingOrDefault = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsProtoStore];
    const fn = function o() {
      const textAndImages = settings.settings.textAndImages;
      let goreContentSettings;
      if (textAndImages != null) {
        goreContentSettings = textAndImages.goreContentSettings;
      }
      if (goreContentSettings == null) {
        goreContentSettings = SensitiveMediaGoreRedactionSettingsUtils.getGoreContentSettingOrDefault();
      }
      return goreContentSettings;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStoresObject = useStateFromStores.useStateFromStoresObject(tmp4, tmp5);
  let goreContentGuilds;
  if (stateFromStoresObject != null) {
    goreContentGuilds = stateFromStoresObject.goreContentGuilds;
  }
  if (cResult[2] !== goreContentGuilds) {
    const obj2 = { setting: goreContentGuilds };
    const goreSettingWithDefaults = tmp(7545).resolveGoreSettingWithDefaults(obj2);
    cResult[2] = goreContentGuilds;
    cResult[3] = goreSettingWithDefaults;
    let tmp9 = goreSettingWithDefaults;
    const tmpResult4 = tmp(7545);
  } else {
    tmp9 = cResult[3];
  }
  let prop;
  if (stateFromStoresObject != null) {
    prop = stateFromStoresObject.goreContentNonFriendDm;
  }
  if (cResult[4] !== prop) {
    const obj3 = { setting: prop, isDm: true };
    const goreSettingWithDefaults1 = tmp(7545).resolveGoreSettingWithDefaults(obj3);
    cResult[4] = prop;
    cResult[5] = goreSettingWithDefaults1;
    let tmp12 = goreSettingWithDefaults1;
    const tmpResult5 = tmp(7545);
  } else {
    tmp12 = cResult[5];
  }
  let goreContentFriendDm;
  if (stateFromStoresObject != null) {
    goreContentFriendDm = stateFromStoresObject.goreContentFriendDm;
  }
  if (cResult[6] !== goreContentFriendDm) {
    const obj4 = { setting: goreContentFriendDm, isDm: true, isFriend: true };
    const goreSettingWithDefaults2 = tmp(7545).resolveGoreSettingWithDefaults(obj4);
    cResult[6] = goreContentFriendDm;
    cResult[7] = goreSettingWithDefaults2;
    let tmp15 = goreSettingWithDefaults2;
    const tmpResult6 = tmp(7545);
  } else {
    tmp15 = cResult[7];
  }
  if (cResult[8] === tmp9) {
    if (cResult[9] === tmp12) {
      if (cResult[10] === tmp15) {
        let tmp17 = cResult[11];
      }
      return tmp17;
    }
  }
  const obj5 = { goreContentGuilds: tmp9, goreContentNonFriendDm: tmp12, goreContentFriendDm: tmp15 };
  cResult[8] = tmp9;
  cResult[9] = tmp12;
  cResult[10] = tmp15;
  cResult[11] = obj5;
  tmp17 = obj5;
}) : (() => {
  const items = [UserSettingsProtoStore];
  const stateFromStoresObject = useStateFromStores.useStateFromStoresObject(items, () => {
    const textAndImages = settings.settings.textAndImages;
    let goreContentSettings;
    if (textAndImages != null) {
      goreContentSettings = textAndImages.goreContentSettings;
    }
    if (goreContentSettings == null) {
      goreContentSettings = SensitiveMediaGoreRedactionSettingsUtils.getGoreContentSettingOrDefault();
    }
    return goreContentSettings;
  });
  let goreContentGuilds;
  if (stateFromStoresObject != null) {
    goreContentGuilds = stateFromStoresObject.goreContentGuilds;
  }
  const obj3 = { goreContentGuilds: SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaults({ setting: goreContentGuilds }), goreContentNonFriendDm: null, goreContentFriendDm: null };
  let prop;
  if (stateFromStoresObject != null) {
    prop = stateFromStoresObject.goreContentNonFriendDm;
  }
  obj3.goreContentNonFriendDm = SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaults({ setting: prop, isDm: true });
  const tmpResult = SensitiveMediaGoreRedactionSettingsUtils;
  let goreContentFriendDm;
  if (stateFromStoresObject != null) {
    goreContentFriendDm = stateFromStoresObject.goreContentFriendDm;
  }
  obj3.goreContentFriendDm = SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaults({ setting: goreContentFriendDm, isDm: true, isFriend: true });
  return obj3;
});
