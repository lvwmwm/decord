// Module ID: 14803
// Function ID: 14804
// Name: ContentInventoryActivityImageUtils
// Dependencies: [19, 2040, 1072, 2019, 8903, 8713, 1114, 14804, 7474, 14806, 10743, 1410, 14810, 6568, 14811, 10737, 7324, 504, 1253, 8906, 2]
// Exports: getApplicationImage, useImageForActivity, useImageForContentEntry

// Module 14803 (ContentInventoryActivityImageUtils)
import react from "react" /* 19 */;
import intl5 from "intl" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import Constants2 from "Constants" /* 2019 */;
import PlatformsDefault from "Platforms" /* 6568 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7324 */;
import useGame2 from "useGame" /* 7474 */;
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 8713 */;
import ContentInventoryTypes from "ContentInventoryTypes" /* 8903 */;
import isCrunchyrollActivityDefault from "isCrunchyrollActivity" /* 8906 */;
import conjurePresenceActivity from "conjurePresenceActivity" /* 10737 */;
import StageChannelRichPresenceUtils from "StageChannelRichPresenceUtils" /* 10743 */;
import useEntryActivityAndApplicationDefault from "useEntryActivityAndApplication" /* 14804 */;
import isOnXboxDefault from "isOnXbox" /* 14810 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14811 */;
import ApplicationStore from "ApplicationStore" /* 2040 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
function useComputedImagesForActivity(activity, activityApplication) {
  let intl3;
  let intl4;
  let largeImage;
  let name1;
  let obj14;
  let obj6;
  let obj8;
  let smallImage;
  let small_image;
  let stringResult;
  let tmp2Result3;
  let tmp2Result4;
  ({ largeImage, smallImage } = useRichImageForActivity(activity, activityApplication));
  useRichImageForActivity(activity, activityApplication);
  if (null != largeImage) {
    obj14 = { largeImage, smallImage };
    const obj = { largeImage, smallImage };
  } else {
    const obj19 = StageChannelRichPresenceUtils;
    if (obj19.isStageActivity(activity)) {
      const tmp18Result = StageChannelRichPresenceUtils;
      const result = tmp18Result.unpackStageChannelParty(activity);
      let guildIconURL;
      if (null != result) {
        const obj2 = { id: result.guildId, icon: small_image, size: ImageSizes.SMALL };
        small_image = undefined;
        const getGuildIconURL = AvatarUtilsDefault.getGuildIconURL;
        AvatarUtilsDefault;
        if (activity != null) {
          const assets = activity.assets;
          if (assets != null) {
            small_image = assets.small_image;
          }
        }
        guildIconURL = getGuildIconURL(obj2);
      }
      let tmp17;
      if (null != guildIconURL) {
        tmp17 = { src: guildIconURL };
        const obj3 = { src: guildIconURL };
      }
      obj14 = { largeImage: tmp17, smallImage: "Array" };
      const obj4 = { largeImage: tmp17, smallImage: "Array" };
    } else if (isOnXboxDefault(activity)) {
      const obj5 = { largeImage: obj6, smallImage: "Array" };
      obj6 = { src: tmp2Result3.get(metroRequire.XBOX).icon.customPNG, alt: intl4.string(intl5.t.Nfvo72) };
      tmp2Result3 = PlatformsDefault;
      intl4 = tmp18(1114).intl;
      obj14 = obj5;
    } else {
      if (null == smallImage) {
        if (isOnPlayStationDefault(activity)) {
          const obj7 = { largeImage: obj8, smallImage: "Array" };
          obj8 = { src: tmp2Result4.get(metroRequire.PLAYSTATION).icon.lightPNG, alt: intl3.string(intl5.t.fFl4jo) };
          tmp2Result4 = PlatformsDefault;
          intl3 = tmp18(1114).intl;
          obj14 = obj7;
        }
      }
      const tmp18Result2 = conjurePresenceActivity;
      if (tmp18Result2.isConjurePresenceActivity(activity)) {
        const obj9 = { src: tmp4, alt: name1 };
        name1 = undefined;
        if (activity != null) {
          name1 = activity.name;
        }
        obj14 = { largeImage: obj9, smallImage: "Array" };
        const obj10 = { largeImage: obj9, smallImage: "Array" };
      } else {
        let name;
        let iconURL;
        if (activityApplication != null) {
          iconURL = activityApplication.getIconURL(ImageSizes.LARGE);
        }
        if (activityApplication != null) {
          name = activityApplication.name;
        }
        let tmp7;
        if (null != iconURL) {
          const obj11 = { src: iconURL, alt: stringResult };
          if (null == name) {
            const intl2 = tmp18(1114).intl;
            stringResult = intl2.string(tmp18(1114).t["2B/phM"]);
          } else {
            const intl = tmp18(1114).intl;
            const obj12 = { applicationName: name };
            stringResult = intl.formatToPlainString(tmp18(1114).t.tiKyYg, obj12);
          }
          tmp7 = obj11;
        }
        if (null != tmp7) {
          obj14 = { largeImage: tmp7, smallImage };
          const obj13 = { largeImage: tmp7, smallImage };
        } else {
          obj14 = { largeImage: smallImage, smallImage: "Array" };
        }
      }
    }
  }
  return obj14;
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
  let obj = trackingSource(stateFromStores[16]);
  const getOrFetchApplication = obj.useGetOrFetchApplication(application_id);
  let obj2 = trackingSource(stateFromStores[17]);
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
  let application_id;
  let intl;
  let items;
  let items1;
  let large_url;
  let obj4;
  let small_url;
  let stringResult;
  let tmpResult3;
  let tmpResult4;
  let trimmed;
  let trimmed1;
  const useGetOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication;
  useGetOrFetchApplications;
  if (activity != null) {
    application_id = activity.application_id;
  }
  let getOrFetchApplication = activityApplication;
  if (activityApplication == null) {
    getOrFetchApplication = useGetOrFetchApplication(application_id);
  }
  let canonicalGameId;
  const useGame = useGame2.useGame;
  useGame2;
  if (getOrFetchApplication != null) {
    canonicalGameId = getOrFetchApplication.getCanonicalGameId();
  }
  const data = useGame(canonicalGameId).data;
  if (null == activity) {
    return { largeImage: "color", smallImage: "Error" };
  } else {
    let large_image;
    if (activity != null) {
      const assets = activity.assets;
      if (assets != null) {
        large_image = assets.large_image;
      }
    }
    let tmp7;
    if (null != large_image) {
      const obj = { src: tmpResult3.getAssetImage(activity.application_id, large_image, items), text: trimmed, url: large_url };
      items = [, ];
      ({ LARGE: arr[0], LARGE: arr[1] } = ImageSizes);
      const assets2 = activity.assets;
      trimmed = undefined;
      tmpResult3 = ApplicationAssetUtils;
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
      tmp7 = obj;
    }
    let tmp12;
    if (!isCrunchyrollActivityDefault(activity)) {
      let small_image;
      if (activity != null) {
        const assets4 = activity.assets;
        if (assets4 != null) {
          small_image = assets4.small_image;
        }
      }
      tmp12 = small_image;
    }
    let tmp14;
    if (null != tmp12) {
      const obj2 = { src: tmpResult4.getAssetImage(activity.application_id, tmp12, items1), text: trimmed1, url: small_url };
      items1 = [, ];
      ({ LARGE: arr2[0], LARGE: arr2[1] } = ImageSizes);
      const assets5 = activity.assets;
      trimmed1 = undefined;
      tmpResult4 = ApplicationAssetUtils;
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
      tmp14 = obj2;
    }
    if (tmp7 == null) {
      let iconURL;
      if (data != null) {
        iconURL = data.getIconURL(ImageSizes.LARGE);
      }
      let tmp20;
      if (null != data) {
        if (null != iconURL) {
          const obj3 = { src: iconURL, alt: intl.formatToPlainString(intl5.t.tiKyYg, obj4) };
          intl = tmp(1114).intl;
          tmp20 = obj3;
          obj4 = { applicationName: data.name };
        }
      }
      tmp7 = tmp20;
    }
    if (tmp7 == null) {
      let name;
      let iconURL1;
      if (getOrFetchApplication != null) {
        iconURL1 = getOrFetchApplication.getIconURL(ImageSizes.LARGE);
      }
      if (getOrFetchApplication != null) {
        name = getOrFetchApplication.name;
      }
      let tmp23;
      if (null != iconURL1) {
        const obj5 = { src: iconURL1, alt: stringResult };
        if (null == name) {
          const intl3 = tmp(1114).intl;
          stringResult = intl3.string(tmp(1114).t["2B/phM"]);
        } else {
          const intl2 = tmp(1114).intl;
          const obj6 = { applicationName: name };
          stringResult = intl2.formatToPlainString(tmp(1114).t.tiKyYg, obj6);
        }
        tmp23 = obj5;
      }
      tmp7 = tmp23;
    }
    return { largeImage: tmp7, smallImage: tmp14 };
  }
}
let useEffect = react.useEffect;
({ AnalyticEvents: hasOwnProperty, PlatformTypes: metroRequire } = Constants);
const ImageSizes = Constants2.ImageSizes;
let result = size.fileFinishedImporting("modules/content_inventory/ContentInventoryActivityImageUtils.tsx");

export function getApplicationImage(getIconURL) {
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
}
export function useImageForContentEntry(trackingSource) {
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
  const obj2 = useGame2;
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
      obj8 = { largeImage: tmp7, smallImage: "Array" };
      const obj5 = { largeImage: tmp7, smallImage: "Array" };
    } else {
      if (null != coverURL) {
        if (showCoverImage) {
          const obj6 = { largeImage: obj7, smallImage: "Array" };
          obj8 = obj6;
          obj7 = { src: coverURL };
        }
      }
      obj8 = { largeImage: largeImage2, smallImage: "Array" };
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
}
export function useImageForActivity(activity, application, user_profile_activity_native) {
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
}
export { useRichImageForActivity };
