// Module ID: 13610
// Function ID: 103109
// Name: handleSensitiveMediaFilterPress
// Dependencies: [0, 0, 0, 0, 0]
// Exports: handleSensitiveMediaFilterPress, shouldAgeVerifyForSearchMedia

// Module 13610 (handleSensitiveMediaFilterPress)
import __exportStarResult1 from "__exportStarResult1";
import { EXPLICIT_MEDIA_SETTINGS_ACTION_SHEET_KEY as closure_4 } from "__exportStarResult1";
import { SearchMediaTypes } from "__exportStarResult1";

const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx");

export const handleSensitiveMediaFilterPress = function handleSensitiveMediaFilterPress(arg0) {
  let currentValue;
  let excluded;
  let subtitle;
  let title;
  ({ handlePress: closure_0, excluded } = arg0);
  ({ title, subtitle, currentValue } = arg0);
  const currentUser = currentUser.getCurrentUser();
  if (null != currentUser) {
    const nsfwAllowed = currentUser.nsfwAllowed;
  }
  const items = [];
  let hasItem = null != excluded;
  if (hasItem) {
    hasItem = excluded.includes(arg1(dependencyMap[3]).ExplicitContentRedaction.SHOW);
  }
  if (!hasItem) {
    hasItem = !nsfwAllowed;
  }
  if (!hasItem) {
    let obj = { value: arg1(dependencyMap[3]).ExplicitContentRedaction.SHOW };
    const intl = arg1(dependencyMap[4]).intl;
    obj.label = intl.string(arg1(dependencyMap[4]).t.5k5OFp);
    obj.onPress = function onPress() {
      let obj = callback(closure_2[5]);
      if (obj.shouldAgeVerifyForExplicitMedia()) {
        obj = { entryPoint: callback(closure_2[7]).AgeVerificationModalEntryPoint.OBSCURED_MEDIA };
        const result = callback2(closure_2[6]).showAgeVerificationGetStartedModal(obj);
        const obj2 = callback2(closure_2[6]);
      } else {
        callback(callback(closure_2[3]).ExplicitContentRedaction.SHOW);
      }
    };
    items.push(obj);
  }
  let hasItem1 = null != excluded;
  if (hasItem1) {
    hasItem1 = excluded.includes(arg1(dependencyMap[3]).ExplicitContentRedaction.BLUR);
  }
  if (!hasItem1) {
    obj = { value: arg1(dependencyMap[3]).ExplicitContentRedaction.BLUR };
    const intl2 = arg1(dependencyMap[4]).intl;
    obj.label = intl2.string(arg1(dependencyMap[4]).t.S49Uad);
    obj.onPress = function onPress() {
      callback(callback(closure_2[3]).ExplicitContentRedaction.BLUR);
    };
    items.push(obj);
  }
  let hasItem2 = null != excluded;
  if (hasItem2) {
    hasItem2 = excluded.includes(arg1(dependencyMap[3]).ExplicitContentRedaction.BLOCK);
  }
  if (!hasItem2) {
    obj = { value: arg1(dependencyMap[3]).ExplicitContentRedaction.BLOCK };
    const intl3 = arg1(dependencyMap[4]).intl;
    obj.label = intl3.string(arg1(dependencyMap[4]).t.D/157Y);
    obj.onPress = function onPress() {
      callback(callback(closure_2[3]).ExplicitContentRedaction.BLOCK);
    };
    items.push(obj);
  }
  importDefault(dependencyMap[8]).openLazy(arg1(dependencyMap[10])(dependencyMap[9], dependencyMap.paths), closure_4, { title, subtitle, options: items, currentValue });
};
export const shouldAgeVerifyForSearchMedia = function shouldAgeVerifyForSearchMedia(media, found) {
  if (null == found) {
    return false;
  } else {
    const enabledHarmTypesForMessage = found(dependencyMap[11]).getEnabledHarmTypesForMessage(found);
    if (0 === enabledHarmTypesForMessage) {
      return false;
    } else {
      if (media.type === SearchMediaTypes.ATTACHMENT) {
        let obj = { type: found(dependencyMap[12]).ObscuredMediaTypes.Attachment, media: media.attachment };
        let tmp2 = obj;
      } else if (media.type === SearchMediaTypes.EMBED) {
        obj = { type: found(dependencyMap[12]).ObscuredMediaTypes.Embed, media: media.embed };
        tmp2 = obj;
      } else {
        tmp2 = null;
        if (media.type === SearchMediaTypes.COMPONENT) {
          obj = { type: found(dependencyMap[12]).ObscuredMediaTypes.GenericMedia, media: media.unfurledMediaItem };
          tmp2 = obj;
        }
      }
      let tmp7 = null != tmp2;
      if (tmp7) {
        let result = found(dependencyMap[11]).isMediaObscuredForHarmTypes(tmp2, enabledHarmTypesForMessage);
        if (result) {
          result = found(dependencyMap[5]).shouldAgeVerifyForExplicitMedia();
          const obj4 = found(dependencyMap[5]);
        }
        tmp7 = result;
        const obj3 = found(dependencyMap[11]);
      }
      return tmp7;
    }
    const obj5 = found(dependencyMap[11]);
  }
};
