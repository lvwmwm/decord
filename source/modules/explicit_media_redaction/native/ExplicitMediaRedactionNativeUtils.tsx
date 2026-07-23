// Module ID: 13724
// Function ID: 105265
// Name: handleSensitiveMediaFilterPress
// Dependencies: [1849, 6836, 9103, 1282, 1212, 6835, 7536, 7538, 4098, 13725, 1934, 5670, 5675, 2]
// Exports: handleSensitiveMediaFilterPress, shouldAgeVerifyForSearchMedia

// Module 13724 (handleSensitiveMediaFilterPress)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { EXPLICIT_MEDIA_SETTINGS_ACTION_SHEET_KEY as closure_4 } from "USER_SETTING_ACTION_SHEET_KEY";
import { SearchMediaTypes } from "SearchAutocompleteSelectAnalyticsActions";

const require = arg1;
let result = require("SearchAutocompleteSelectAnalyticsActions").fileFinishedImporting("modules/explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx");

export const handleSensitiveMediaFilterPress = function handleSensitiveMediaFilterPress(arg0) {
  let currentValue;
  let excluded;
  let require;
  let subtitle;
  let title;
  ({ handlePress: require, excluded } = arg0);
  ({ title, subtitle, currentValue } = arg0);
  currentUser = currentUser.getCurrentUser();
  if (null != currentUser) {
    const nsfwAllowed = currentUser.nsfwAllowed;
  }
  const items = [];
  let hasItem = null != excluded;
  if (hasItem) {
    hasItem = excluded.includes(require(1282) /* _callSuper */.ExplicitContentRedaction.SHOW);
  }
  if (!hasItem) {
    hasItem = !nsfwAllowed;
  }
  if (!hasItem) {
    let obj = { value: require(1282) /* _callSuper */.ExplicitContentRedaction.SHOW };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.label = intl.string(require(1212) /* getSystemLocale */.t["5k5OFp"]);
    obj.onPress = function onPress() {
      let obj = outer1_0(outer1_2[5]);
      if (obj.shouldAgeVerifyForExplicitMedia()) {
        obj = { entryPoint: outer1_0(outer1_2[7]).AgeVerificationModalEntryPoint.OBSCURED_MEDIA };
        const result = outer1_1(outer1_2[6]).showAgeVerificationGetStartedModal(obj);
        const obj2 = outer1_1(outer1_2[6]);
      } else {
        callback(outer1_0(outer1_2[3]).ExplicitContentRedaction.SHOW);
      }
    };
    items.push(obj);
  }
  let hasItem1 = null != excluded;
  if (hasItem1) {
    hasItem1 = excluded.includes(require(1282) /* _callSuper */.ExplicitContentRedaction.BLUR);
  }
  if (!hasItem1) {
    obj = { value: require(1282) /* _callSuper */.ExplicitContentRedaction.BLUR };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.label = intl2.string(require(1212) /* getSystemLocale */.t.S49Uad);
    obj.onPress = function onPress() {
      callback(outer1_0(outer1_2[3]).ExplicitContentRedaction.BLUR);
    };
    items.push(obj);
  }
  let hasItem2 = null != excluded;
  if (hasItem2) {
    hasItem2 = excluded.includes(require(1282) /* _callSuper */.ExplicitContentRedaction.BLOCK);
  }
  if (!hasItem2) {
    obj = { value: require(1282) /* _callSuper */.ExplicitContentRedaction.BLOCK };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj.label = intl3.string(require(1212) /* getSystemLocale */.t["D/157Y"]);
    obj.onPress = function onPress() {
      callback(outer1_0(outer1_2[3]).ExplicitContentRedaction.BLOCK);
    };
    items.push(obj);
  }
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(13725, dependencyMap.paths), closure_4, { title, subtitle, options: items, currentValue });
};
export const shouldAgeVerifyForSearchMedia = function shouldAgeVerifyForSearchMedia(media, found) {
  if (null == found) {
    return false;
  } else {
    const enabledHarmTypesForMessage = require(5670) /* _createForOfIteratorHelperLoose */.getEnabledHarmTypesForMessage(found);
    if (0 === enabledHarmTypesForMessage) {
      return false;
    } else {
      if (media.type === SearchMediaTypes.ATTACHMENT) {
        let obj = { type: require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.Attachment, media: media.attachment };
        let tmp2 = obj;
      } else if (media.type === SearchMediaTypes.EMBED) {
        obj = { type: require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.Embed, media: media.embed };
        tmp2 = obj;
      } else {
        tmp2 = null;
        if (media.type === SearchMediaTypes.COMPONENT) {
          obj = { type: require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.GenericMedia, media: media.unfurledMediaItem };
          tmp2 = obj;
        }
      }
      let tmp7 = null != tmp2;
      if (tmp7) {
        let result = require(5670) /* _createForOfIteratorHelperLoose */.isMediaObscuredForHarmTypes(tmp2, enabledHarmTypesForMessage);
        if (result) {
          result = require(6835) /* timeoutAttachmentsAndEmbedsForMessage */.shouldAgeVerifyForExplicitMedia();
          const obj4 = require(6835) /* timeoutAttachmentsAndEmbedsForMessage */;
        }
        tmp7 = result;
        const obj3 = require(5670) /* _createForOfIteratorHelperLoose */;
      }
      return tmp7;
    }
    const obj5 = require(5670) /* _createForOfIteratorHelperLoose */;
  }
};
