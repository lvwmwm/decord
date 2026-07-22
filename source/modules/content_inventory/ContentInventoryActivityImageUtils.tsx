// Module ID: 11907
// Function ID: 92188
// Name: getApplicationImage
// Dependencies: []
// Exports: useImageForActivity, useImageForContentEntry

// Module 11907 (getApplicationImage)
function getApplicationImage(getIconURL) {
  let iconURL;
  if (null != getIconURL) {
    iconURL = getIconURL.getIconURL(ImageSizes.LARGE);
  }
  if (null != getIconURL) {
    const name = getIconURL.name;
  }
  if (null != iconURL) {
    let obj = { src: iconURL };
    if (null == name) {
      const intl2 = require(dependencyMap[6]).intl;
      let stringResult = intl2.string(require(dependencyMap[6]).t.2B/phM);
    } else {
      const intl = require(dependencyMap[6]).intl;
      obj = { applicationName: name };
      stringResult = intl.formatToPlainString(require(dependencyMap[6]).t.tiKyYg, obj);
    }
    obj.alt = stringResult;
    return obj;
  }
}
function useComputedImagesForActivity(activity, application) {
  let largeImage;
  let smallImage;
  const tmp = useRichImageForActivity(activity, application);
  ({ activity, largeImage, smallImage } = { activity, application, largeImage: tmp.largeImage, smallImage: tmp.smallImage });
  if (null != largeImage) {
    let obj = { largeImage, smallImage };
  } else {
    if (obj15.isStageActivity(activity)) {
      const result = require(dependencyMap[9]).unpackStageChannelParty(activity);
      let guildIconURL;
      if (null != result) {
        obj = { id: result.guildId };
        let small_image;
        if (null != activity) {
          const assets = activity.assets;
          if (null != assets) {
            small_image = assets.small_image;
          }
        }
        obj.icon = small_image;
        obj.size = ImageSizes.SMALL;
        guildIconURL = importDefault(dependencyMap[10]).getGuildIconURL(obj);
        const obj10 = importDefault(dependencyMap[10]);
      }
      const obj1 = {};
      let tmp25;
      if (null != guildIconURL) {
        const obj2 = { src: guildIconURL };
        tmp25 = obj2;
      }
      obj1.largeImage = tmp25;
      obj1.smallImage = undefined;
      obj = obj1;
      const obj9 = require(dependencyMap[9]);
    } else if (importDefault(dependencyMap[11])(activity)) {
      const obj3 = {};
      let obj4 = {};
      let obj7 = importDefault(dependencyMap[12]);
      obj4.src = obj7.get(constants.XBOX).icon.customPNG;
      const intl2 = require(dependencyMap[6]).intl;
      obj4.alt = intl2.string(require(dependencyMap[6]).t.Nfvo72);
      obj3.largeImage = obj4;
      obj3.smallImage = undefined;
      obj = obj3;
    } else {
      if (null == smallImage) {
        if (importDefault(dependencyMap[13])(activity)) {
          const obj5 = {};
          const obj6 = {};
          obj4 = importDefault(dependencyMap[12]);
          obj6.src = obj4.get(constants.PLAYSTATION).icon.lightPNG;
          const intl = require(dependencyMap[6]).intl;
          obj6.alt = intl.string(require(dependencyMap[6]).t.fFl4jo);
          obj5.largeImage = obj6;
          obj5.smallImage = undefined;
          obj = obj5;
        }
      }
      const tmp8 = getApplicationImage(tmp2);
      if (null != tmp8) {
        obj7 = { largeImage: tmp8, smallImage };
        obj = obj7;
      } else {
        obj = { largeImage: smallImage, smallImage: undefined };
      }
    }
    const obj15 = require(dependencyMap[9]);
  }
  return obj;
}
function useTrackActivityDefaultIcon(arg0) {
  let activity;
  let application;
  let largeImageSrc;
  let trackingSource;
  ({ activity, trackingSource } = arg0);
  const require = trackingSource;
  let importDefault;
  let dependencyMap;
  let useEffect;
  let closure_4;
  let name;
  let type;
  let ImageSizes;
  let getApplicationImage;
  let useComputedImagesForActivity;
  let application_id;
  ({ application, largeImageSrc } = arg0);
  if (null != activity) {
    application_id = activity.application_id;
  }
  importDefault = application_id;
  const getOrFetchApplication = require(dependencyMap[14]).useGetOrFetchApplication(application_id);
  const obj = require(dependencyMap[14]);
  const items = [closure_4];
  let tmp4 = null == application_id;
  const stateFromStores = require(dependencyMap[15]).useStateFromStores(items, () => {
    let result = null != application_id;
    if (result) {
      result = tmp6.didFetchingApplicationFail(application_id);
    }
    return result;
  });
  if (!tmp4) {
    tmp4 = null != getOrFetchApplication;
  }
  if (!tmp4) {
    tmp4 = stateFromStores;
  }
  dependencyMap = tmp4;
  useEffect = tmp5;
  closure_4 = tmp6;
  name = undefined;
  if (null != activity) {
    name = activity.name;
  }
  type = undefined;
  if (null != activity) {
    type = activity.type;
  }
  let session_id;
  if (null != activity) {
    session_id = activity.session_id;
  }
  ImageSizes = session_id;
  let large_image;
  if (null != activity) {
    const assets = activity.assets;
    if (null != assets) {
      large_image = assets.large_image;
    }
  }
  let tmp11 = null != large_image;
  if (!tmp11) {
    let small_image;
    if (null != activity) {
      const assets2 = activity.assets;
      if (null != assets2) {
        small_image = assets2.small_image;
      }
    }
    tmp11 = null != small_image;
  }
  getApplicationImage = tmp11;
  useComputedImagesForActivity = tmp13;
  const items1 = [trackingSource, null != activity, tmp4, null == largeImageSrc, application_id, name, type, session_id, null != getOrFetchApplication || null != application, tmp11];
  useEffect(() => {
    let tmp = tmp13;
    if (tmp13) {
      tmp = tmp4;
    }
    if (tmp) {
      tmp = tmp6;
    }
    if (tmp) {
      let obj = application_id(tmp4[16]);
      obj = { source: trackingSource, application_id, activity_name: name, activity_type: type, activity_session_id: session_id, application_found: trackingSource, has_rich_assets: tmp11 };
      obj.track(name.ACTIVITY_DEFAULT_ICON_SHOWN, obj);
      const tmp6 = application_id;
    }
  }, items1);
}
function useRichImageForActivity(activity, activityApplication) {
  let obj = require(dependencyMap[14]);
  let application_id;
  if (null != activity) {
    application_id = activity.application_id;
  }
  let getOrFetchApplication = obj.useGetOrFetchApplication(application_id);
  if (null == activity) {
    obj = { largeImage: undefined, smallImage: undefined };
    return obj;
  } else {
    let large_image;
    if (null != activity) {
      const assets = activity.assets;
      if (null != assets) {
        large_image = assets.large_image;
      }
    }
    let tmp21Result;
    if (null != large_image) {
      obj = {};
      let obj2 = require(dependencyMap[5]);
      const items = [ImageSizes.LARGE, ImageSizes.LARGE];
      obj.src = obj2.getAssetImage(activity.application_id, large_image, items);
      const assets2 = activity.assets;
      let trimmed;
      if (null != assets2) {
        if (null != assets2.large_text) {
          trimmed = str.trim();
        }
      }
      obj.text = trimmed;
      const assets3 = activity.assets;
      let large_url;
      if (null != assets3) {
        large_url = assets3.large_url;
      }
      obj.url = large_url;
      tmp21Result = obj;
    }
    let small_image;
    if (!importDefault(dependencyMap[17])(activity)) {
      if (null != activity) {
        const assets4 = activity.assets;
        if (null != assets4) {
          small_image = assets4.small_image;
        }
      }
    }
    let tmp14;
    if (null != small_image) {
      const obj1 = {};
      const items1 = [ImageSizes.LARGE, ImageSizes.LARGE];
      obj1.src = require(dependencyMap[5]).getAssetImage(activity.application_id, small_image, items1);
      const assets5 = activity.assets;
      let trimmed1;
      if (null != assets5) {
        if (null != assets5.small_text) {
          trimmed1 = str2.trim();
        }
      }
      obj1.text = trimmed1;
      const assets6 = activity.assets;
      let small_url;
      if (null != assets6) {
        small_url = assets6.small_url;
      }
      obj1.url = small_url;
      tmp14 = obj1;
      const obj5 = require(dependencyMap[5]);
    }
    obj2 = {};
    if (null == tmp21Result) {
      if (null != activityApplication) {
        getOrFetchApplication = activityApplication;
      }
      tmp21Result = getApplicationImage(getOrFetchApplication);
      const tmp21 = getApplicationImage;
    }
    obj2.largeImage = tmp21Result;
    obj2.smallImage = tmp14;
    return obj2;
  }
}
const useEffect = require(dependencyMap[0]).useEffect;
let closure_4 = importDefault(dependencyMap[1]);
const _module = require(dependencyMap[2]);
({ AnalyticEvents: closure_5, PlatformTypes: closure_6 } = _module);
const ImageSizes = require(dependencyMap[3]).ImageSizes;
const _module1 = require(dependencyMap[18]);
const result = _module1.fileFinishedImporting("modules/content_inventory/ContentInventoryActivityImageUtils.tsx");

export { getApplicationImage };
export const useImageForContentEntry = function useImageForContentEntry(trackingSource) {
  let activity;
  let activityApplication;
  let entry;
  let fallbackApplication;
  let showCoverImage;
  ({ entry, showCoverImage } = trackingSource);
  if (showCoverImage === undefined) {
    showCoverImage = true;
  }
  ({ activity, activityApplication, fallbackApplication } = importDefault(dependencyMap[7])(entry));
  let obj = activityApplication;
  if (null != fallbackApplication) {
    obj = fallbackApplication;
  }
  const tmp2 = useRichImageForActivity(activity, activityApplication);
  const largeImage = tmp2.largeImage;
  let canonicalGameId;
  if (null != obj) {
    canonicalGameId = obj.getCanonicalGameId();
  }
  let obj1 = require(dependencyMap[8]);
  const data = obj1.useGame(canonicalGameId).data;
  if (null != data) {
    const coverURL = data.getCoverURL();
  }
  let obj2 = require(dependencyMap[4]);
  if (obj2.isListenedSessionEntry(entry)) {
    if (entry.extra.entries.length > 0) {
      obj = { src: entry.extra.entries[0].media.image_url };
      let tmp7 = obj;
    }
    obj = { activity };
    if (null != fallbackApplication) {
      activityApplication = fallbackApplication;
    }
    obj.application = activityApplication;
    if (null != largeImage) {
      obj1 = { largeImage, smallImage: tmp2.smallImage };
      let obj5 = obj1;
    } else if (null != tmp7) {
      obj2 = { largeImage: tmp7, smallImage: undefined };
      obj5 = obj2;
    } else {
      if (null != coverURL) {
        if (showCoverImage) {
          let obj3 = {};
          const obj4 = { src: coverURL };
          obj3.largeImage = obj4;
          obj3.smallImage = undefined;
          obj5 = obj3;
        }
      }
      obj5 = { largeImage: useComputedImagesForActivity(activity, obj).largeImage, smallImage: undefined };
    }
    const largeImage2 = obj5.largeImage;
    let src;
    if (null != largeImage2) {
      src = largeImage2.src;
    }
    obj.largeImageSrc = src;
    obj.trackingSource = trackingSource.trackingSource;
    useTrackActivityDefaultIcon(obj);
    return obj5;
  }
  obj3 = require(dependencyMap[4]);
  if (obj3.isWatchedMediaEntry(entry)) {
    const obj6 = {};
    let tmp5Result = tmp5(tmp6[5]);
    obj6.src = tmp5Result.getAssetImage(entry.extra.application_id, entry.extra.media_assets_large_image, ImageSizes.LARGE);
    obj6.alt = entry.extra.media_title;
    tmp7 = obj6;
  } else {
    tmp5Result = tmp5(tmp6[4]);
    if (tmp5Result.isTopArtistEntry(entry)) {
      const obj7 = { src: entry.extra.media.image_url };
      tmp7 = obj7;
    }
  }
};
export const useImageForActivity = function useImageForActivity(activity, application, user_profile_activity_native) {
  const tmp = useComputedImagesForActivity(activity, application);
  const obj = { activity, application };
  const largeImage = tmp.largeImage;
  let src;
  if (null != largeImage) {
    src = largeImage.src;
  }
  obj.largeImageSrc = src;
  obj.trackingSource = user_profile_activity_native;
  useTrackActivityDefaultIcon(obj);
  return tmp;
};
export { useRichImageForActivity };
