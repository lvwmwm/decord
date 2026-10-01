// Module ID: 12573
// Function ID: 12574
// Name: ContentInventoryActivityImageUtils
// Dependencies: [19, 5063, 1074, 2005, 7789, 7595, 1115, 12574, 6727, 8817, 1397, 12576, 5595, 12577, 6589, 504, 1241, 7792, 2]
// Exports: getApplicationImage, useImageForActivity, useImageForContentEntry

// Module 12573 (ContentInventoryActivityImageUtils)
import react from "react" /* 19 */;
import intl5 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import Constants2 from "Constants" /* 2005 */;
import PlatformsDefault from "Platforms" /* 5595 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 6589 */;
import useGame from "useGame" /* 6727 */;
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 7595 */;
import ContentInventoryTypes from "ContentInventoryTypes" /* 7789 */;
import isCrunchyrollActivityDefault from "isCrunchyrollActivity" /* 7792 */;
import StageChannelRichPresenceUtils from "StageChannelRichPresenceUtils" /* 8817 */;
import useEntryActivityAndApplicationDefault from "useEntryActivityAndApplication" /* 12574 */;
import isOnXboxDefault from "isOnXbox" /* 12576 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 12577 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
function useComputedImagesForActivity(activity, activityApplication) {
  let intl3;
  let intl4;
  let largeImage;
  let obj12;
  let obj7;
  let obj9;
  let smallImage;
  let small_image;
  let stringResult;
  let tmp2Result;
  let tmp2Result2;
  ({ largeImage, smallImage } = useRichImageForActivity(activity, activityApplication));
  useRichImageForActivity(activity, activityApplication);
  if (null != largeImage) {
    obj12 = { largeImage, smallImage };
    const obj2 = { largeImage, smallImage };
  } else {
    const obj16 = StageChannelRichPresenceUtils;
    if (obj16.isStageActivity(activity)) {
      const tmp16Result = StageChannelRichPresenceUtils;
      const result = tmp16Result.unpackStageChannelParty(activity);
      let guildIconURL;
      if (null != result) {
        const obj3 = { id: result.guildId, icon: small_image, size: ImageSizes.SMALL };
        small_image = undefined;
        const getGuildIconURL = AvatarUtilsDefault.getGuildIconURL;
        AvatarUtilsDefault;
        if (activity != null) {
          const assets = activity.assets;
          if (assets != null) {
            small_image = assets.small_image;
          }
        }
        guildIconURL = getGuildIconURL(obj3);
      }
      let tmp15;
      if (null != guildIconURL) {
        tmp15 = { src: guildIconURL };
        const obj4 = { src: guildIconURL };
      }
      obj12 = { largeImage: tmp15, smallImage: "a" };
      const obj5 = { largeImage: tmp15, smallImage: "a" };
    } else if (isOnXboxDefault(activity)) {
      const obj6 = { largeImage: obj7, smallImage: "a" };
      obj7 = { src: tmp2Result.get(metroRequire.XBOX).icon.customPNG, alt: intl4.string(intl5.t.Nfvo72) };
      tmp2Result = PlatformsDefault;
      intl4 = tmp16(1115).intl;
      obj12 = obj6;
    } else {
      let name;
      if (null == smallImage) {
        if (isOnPlayStationDefault(activity)) {
          const obj8 = { largeImage: obj9, smallImage: "a" };
          obj9 = { src: tmp2Result2.get(metroRequire.PLAYSTATION).icon.lightPNG, alt: intl3.string(intl5.t.fFl4jo) };
          tmp2Result2 = PlatformsDefault;
          intl3 = tmp16(1115).intl;
          obj12 = obj8;
        }
      }
      let iconURL;
      if (activityApplication != null) {
        iconURL = activityApplication.getIconURL(ImageSizes.LARGE);
      }
      if (activityApplication != null) {
        name = activityApplication.name;
      }
      let tmp5;
      if (null != iconURL) {
        const obj = { src: iconURL, alt: stringResult };
        if (null == name) {
          const intl2 = tmp16(1115).intl;
          stringResult = intl2.string(tmp16(1115).t["2B/phM"]);
        } else {
          const intl = tmp16(1115).intl;
          const obj10 = { applicationName: name };
          stringResult = intl.formatToPlainString(tmp16(1115).t.tiKyYg, obj10);
        }
        tmp5 = obj;
      }
      if (null != tmp5) {
        obj12 = { largeImage: tmp5, smallImage };
        const obj11 = { largeImage: tmp5, smallImage };
      } else {
        obj12 = { largeImage: smallImage, smallImage: "a" };
      }
    }
  }
  return obj12;
}
function useTrackActivityDefaultIcon(arg0) {
  let activity;
  let application;
  let application_found;
  let largeImageSrc;
  let trackingSource;
  ({ activity, trackingSource } = arg0);
  let stateFromStores;
  useEffect = undefined;
  let closure_4;
  let name;
  let type;
  let session_id;
  let has_rich_assets;
  let closure_9;
  let application_id;
  ({ application, largeImageSrc } = arg0);
  if (activity != null) {
    application_id = activity.application_id;
  }
  let obj = trackingSource(stateFromStores[14]);
  const getOrFetchApplication = obj.useGetOrFetchApplication(application_id);
  let obj2 = trackingSource(stateFromStores[15]);
  const items = [closure_4];
  let tmp4 = null == application_id;
  stateFromStores = obj2.useStateFromStores(items, () => {
    const result = null != application_id && ApplicationStore.didFetchingApplicationFail(tmp);
    return result;
  });
  if (!tmp4) {
    tmp4 = null != getOrFetchApplication;
  }
  if (!tmp4) {
    tmp4 = stateFromStores;
  }
  stateFromStores = tmp4;
  useEffect = tmp5;
  closure_4 = tmp6;
  name = undefined;
  if (activity != null) {
    name = activity.name;
  }
  type = undefined;
  if (activity != null) {
    type = activity.type;
  }
  session_id = undefined;
  if (activity != null) {
    session_id = activity.session_id;
  }
  let large_image;
  if (activity != null) {
    const assets = activity.assets;
    if (assets != null) {
      large_image = assets.large_image;
    }
  }
  let tmp11 = null != large_image;
  if (!tmp11) {
    let small_image;
    if (activity != null) {
      const assets2 = activity.assets;
      if (assets2 != null) {
        small_image = assets2.small_image;
      }
    }
    tmp11 = null != small_image;
  }
  has_rich_assets = tmp11;
  closure_9 = tmp13;
  const items1 = [trackingSource, null != activity, tmp4, tmp6, application_id, name, type, session_id, tmp5, tmp11];
  useEffect(() => {
    const tmp = closure_9 && stateFromStores && closure_4;
    if (tmp) {
      const obj2 = { source: trackingSource, application_id, activity_name: name, activity_type: type, activity_session_id: session_id, application_found, has_rich_assets };
      const obj = AnalyticsUtilsDefault;
      obj.track(hasOwnProperty.ACTIVITY_DEFAULT_ICON_SHOWN, obj2);
    }
  }, items1);
}
function useRichImageForActivity(activity, activityApplication) {
  let items;
  let items1;
  let large_url;
  let small_url;
  let stringResult;
  let tmpResult;
  let tmpResult2;
  let trimmed;
  let trimmed1;
  useGetOrFetchApplications;
  if (activity != null) {
    const application_id = activity.application_id;
  }
  if (null == activity) {
    return { largeImage: "Array", smallImage: "channel" };
  } else {
    let large_image;
    if (activity != null) {
      const assets = activity.assets;
      if (assets != null) {
        large_image = assets.large_image;
      }
    }
    let tmp6;
    if (null != large_image) {
      const obj = { src: tmpResult.getAssetImage(activity.application_id, large_image, items), text: trimmed, url: large_url };
      items = [, ];
      ({ LARGE: arr[0], LARGE: arr[1] } = ImageSizes);
      const assets2 = activity.assets;
      trimmed = undefined;
      tmpResult = ApplicationAssetUtils;
      if (assets2 != null) {
        if (assets2.large_text != null) {
          trimmed = str.trim();
        }
      }
      const assets3 = activity.assets;
      large_url = undefined;
      if (assets3 != null) {
        large_url = assets3.large_url;
      }
      tmp6 = obj;
    }
    let tmp11;
    if (!isCrunchyrollActivityDefault(activity)) {
      let small_image;
      if (activity != null) {
        const assets4 = activity.assets;
        if (assets4 != null) {
          small_image = assets4.small_image;
        }
      }
      tmp11 = small_image;
    }
    let tmp13;
    if (null != tmp11) {
      const obj2 = { src: tmpResult2.getAssetImage(activity.application_id, tmp11, items1), text: trimmed1, url: small_url };
      items1 = [, ];
      ({ LARGE: arr2[0], LARGE: arr2[1] } = ImageSizes);
      const assets5 = activity.assets;
      trimmed1 = undefined;
      tmpResult2 = ApplicationAssetUtils;
      if (assets5 != null) {
        if (assets5.small_text != null) {
          trimmed1 = str2.trim();
        }
      }
      const assets6 = activity.assets;
      small_url = undefined;
      if (assets6 != null) {
        small_url = assets6.small_url;
      }
      tmp13 = obj2;
    }
    if (tmp6 == null) {
      let name;
      let obj5 = activityApplication;
      if (activityApplication == null) {
        obj5 = tmp4;
      }
      let iconURL;
      if (obj5 != null) {
        iconURL = obj5.getIconURL(ImageSizes.LARGE);
      }
      if (obj5 != null) {
        name = obj5.name;
      }
      let tmp19;
      if (null != iconURL) {
        const obj3 = { src: iconURL, alt: stringResult };
        if (null == name) {
          const intl2 = tmp(1115).intl;
          stringResult = intl2.string(tmp(1115).t["2B/phM"]);
        } else {
          const intl = tmp(1115).intl;
          const obj4 = { applicationName: name };
          stringResult = intl.formatToPlainString(tmp(1115).t.tiKyYg, obj4);
        }
        tmp19 = obj3;
      }
      tmp6 = tmp19;
    }
    return { largeImage: tmp6, smallImage: tmp13 };
  }
}
let useEffect = react.useEffect;
({ AnalyticEvents: hasOwnProperty, PlatformTypes: metroRequire } = Constants);
const ImageSizes = Constants2.ImageSizes;
let result = size.fileFinishedImporting("modules/content_inventory/ContentInventoryActivityImageUtils.tsx");

export const getApplicationImage = function getApplicationImage(getIconURL) {
  let name;
  let stringResult;
  let iconURL;
  if (getIconURL != null) {
    iconURL = getIconURL.getIconURL(ImageSizes.LARGE);
  }
  if (getIconURL != null) {
    name = getIconURL.name;
  }
  if (null != iconURL) {
    const obj = { src: iconURL, alt: stringResult };
    if (null == name) {
      const intl2 = intl5.intl;
      stringResult = intl2.string(intl5.t["2B/phM"]);
    } else {
      const intl = intl5.intl;
      const obj2 = { applicationName: name };
      stringResult = intl.formatToPlainString(intl5.t.tiKyYg, obj2);
    }
    return obj;
  }
};
export const useImageForContentEntry = function useImageForContentEntry(trackingSource) {
  let activity;
  let activityApplication;
  let coverURL;
  let entry;
  let fallbackApplication;
  let obj7;
  let showCoverImage;
  let src;
  let tmp5Result5;
  let tmp7;
  ({ entry, showCoverImage } = trackingSource);
  if (showCoverImage === undefined) {
    showCoverImage = true;
  }
  trackingSource = trackingSource.trackingSource;
  ({ activity, activityApplication, fallbackApplication } = useEntryActivityAndApplicationDefault(entry));
  let obj = fallbackApplication;
  useEntryActivityAndApplicationDefault(entry);
  if (fallbackApplication == null) {
    obj = activityApplication;
  }
  const tmp3 = useRichImageForActivity(activity, activityApplication);
  const largeImage = tmp3.largeImage;
  const smallImage = tmp3.smallImage;
  let canonicalGameId;
  const largeImage2 = useComputedImagesForActivity(activity, obj).largeImage;
  if (obj != null) {
    canonicalGameId = obj.getCanonicalGameId();
  }
  const obj2 = useGame;
  const data = obj2.useGame(canonicalGameId).data;
  if (data != null) {
    coverURL = data.getCoverURL();
  }
  const tmp5Result = ContentInventoryTypes;
  if (tmp5Result.isListenedSessionEntry(entry)) {
    let obj8;
    if (entry.extra.entries.length > 0) {
      tmp7 = { src: entry.extra.entries[0].media.image_url };
      const obj3 = { src: entry.extra.entries[0].media.image_url };
    }
    if (null != largeImage) {
      obj8 = { largeImage, smallImage };
      const obj4 = { largeImage, smallImage };
    } else if (null != tmp7) {
      obj8 = { largeImage: tmp7, smallImage: "a" };
      const obj5 = { largeImage: tmp7, smallImage: "a" };
    } else {
      if (null != coverURL) {
        if (showCoverImage) {
          const obj6 = { largeImage: obj7, smallImage: "a" };
          obj8 = obj6;
          obj7 = { src: coverURL };
        }
      }
      obj8 = { largeImage: largeImage2, smallImage: "a" };
    }
    const obj9 = { activity, application: fallbackApplication, largeImageSrc: src, trackingSource };
    const tmp9 = useTrackActivityDefaultIcon;
    if (fallbackApplication == null) {
      fallbackApplication = activityApplication;
    }
    const largeImage3 = obj8.largeImage;
    src = undefined;
    if (largeImage3 != null) {
      src = largeImage3.src;
    }
    tmp9(obj9);
    return obj8;
  }
  const tmp5Result4 = ContentInventoryTypes;
  if (tmp5Result4.isWatchedMediaEntry(entry)) {
    const obj10 = { src: tmp5Result5.getAssetImage(entry.extra.application_id, entry.extra.media_assets_large_image, ImageSizes.LARGE), alt: entry.extra.media_title };
    tmp7 = obj10;
    tmp5Result5 = ApplicationAssetUtils;
  } else {
    const tmp5Result6 = ContentInventoryTypes;
    if (tmp5Result6.isTopArtistEntry(entry)) {
      tmp7 = { src: entry.extra.media.image_url };
      const obj11 = { src: entry.extra.media.image_url };
    }
  }
};
export const useImageForActivity = function useImageForActivity(activity, application, user_profile_activity_native) {
  let src;
  const tmp = useComputedImagesForActivity(activity, application);
  const largeImage = tmp.largeImage;
  const obj = { activity, application, largeImageSrc: src, trackingSource: user_profile_activity_native };
  src = undefined;
  const tmp2 = useTrackActivityDefaultIcon;
  if (largeImage != null) {
    src = largeImage.src;
  }
  tmp2(obj);
  return tmp;
};
export { useRichImageForActivity };
