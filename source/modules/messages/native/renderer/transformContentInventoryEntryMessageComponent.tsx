// Module ID: 7803
// Function ID: 62268
// Name: getMissingIconURL
// Dependencies: []
// Exports: transformToRowGeneratedContentInventoryEntryComponent

// Module 7803 (getMissingIconURL)
function getMissingIconURL() {
  return Image.resolveAssetSource(importDefault(dependencyMap[8])).uri;
}
function getGradientColors(game_name) {
  let primaryColor;
  let secondaryColor;
  if (game_name === getMissingIconURL()) {
    return items;
  } else {
    if (obj4.hasFetchedColors(game_name)) {
      const heroColors = require(dependencyMap[10]).getHeroColors(game_name);
      ({ primaryColor, secondaryColor } = heroColors);
      const obj = require(dependencyMap[10]);
      const items = [require(dependencyMap[11]).hexToRgba(primaryColor), ];
      const obj2 = require(dependencyMap[11]);
      items[1] = require(dependencyMap[11]).hexToRgba(secondaryColor);
      return items;
    }
    const obj4 = require(dependencyMap[9]);
  }
}
function buildTimestampBadge(contentInventoryEntry, message, arg2) {
  const timestamp = message.timestamp;
  const time = timestamp.getTime();
  let obj = {};
  const merged = Object.assign(arg2);
  obj["text"] = require(dependencyMap[12]).formatEntryTimestamp(contentInventoryEntry, closure_5.locale, time);
  const obj2 = require(dependencyMap[12]);
  obj = { formatSet: require(dependencyMap[12]).A11Y_FORMAT_SET };
  obj["ariaDescription"] = require(dependencyMap[12]).formatEntryTimestamp(contentInventoryEntry, closure_5.locale, time, obj);
  return obj;
}
const Image = require(dependencyMap[0]).Image;
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const ImageSizes = require(dependencyMap[4]).ImageSizes;
const items = [{ 9223372036854775807: "always", 0: false, -9223372036854775808: "list", 0: true }, { 9223372036854775807: "always", 0: false, -9223372036854775808: "list", 0: true }];
const _module = require(dependencyMap[22]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/transformContentInventoryEntryMessageComponent.tsx");

export const transformToRowGeneratedContentInventoryEntryComponent = function transformToRowGeneratedContentInventoryEntryComponent(component) {
  let primaryColor;
  let primaryColor2;
  let secondaryColor;
  let secondaryColor2;
  const contentInventoryEntry = component.component.contentInventoryEntry;
  const message = component.message;
  const content_type = contentInventoryEntry.content_type;
  if (require(dependencyMap[5]).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
    let formatToPlainStringResult = require;
    formatToPlainStringResult = dependencyMap;
    if (require(dependencyMap[5]).ContentInventoryEntryType.TOP_GAME !== content_type) {
      formatToPlainStringResult = require;
      formatToPlainStringResult = dependencyMap;
      if (require(dependencyMap[5]).ContentInventoryEntryType.WATCHED_MEDIA === content_type) {
        const items = [, ];
        ({ LARGE: arr6[0], LARGE: arr6[1] } = ImageSizes);
        const assetImage = require(dependencyMap[18]).getAssetImage(contentInventoryEntry.extra.application_id, contentInventoryEntry.extra.media_assets_large_image, items);
        const application = store.getApplication(contentInventoryEntry.extra.application_id);
        let iconURL;
        if (null != application) {
          iconURL = application.getIconURL(ImageSizes.LARGE);
        }
        if (null == iconURL) {
          iconURL = getMissingIconURL();
        }
        if (null != assetImage) {
          iconURL = assetImage;
        }
        const tmp52 = getGradientColors(iconURL);
        let tmp54;
        if (null != tmp52) {
          const items1 = [];
          const media_assets_large_text = contentInventoryEntry.extra.media_assets_large_text;
          let str = "";
          if (null != media_assets_large_text) {
            str = media_assets_large_text;
          }
          const match = /\w+ (\d+), \w+ (\d+)/.exec(str);
          if (null != match) {
            formatToPlainStringResult = require;
            formatToPlainStringResult = dependencyMap;
            const intl4 = require(dependencyMap[14]).intl;
            let obj = { seasonNum: match[1], episodeNum: match[2] };
            formatToPlainStringResult = intl4.formatToPlainString(require(dependencyMap[14]).t.ijVm6y, obj);
            let sum = formatToPlainStringResult;
            if (null != contentInventoryEntry.extra.media_title) {
              const _HermesInternal = HermesInternal;
              sum = formatToPlainStringResult + " \u00B7 " + contentInventoryEntry.extra.media_subtitle;
            }
            obj = { text: sum };
            items1.push(obj);
          }
          const obj1 = { imageUrl: iconURL, title: contentInventoryEntry.extra.media_title, subtitles: items1, gradientColors: tmp52, platformIconUrl: Image.resolveAssetSource(importDefault(dependencyMap[19])).uri };
          tmp54 = obj1;
          const obj19 = /\w+ (\d+), \w+ (\d+)/;
        }
        let tmp13 = tmp54;
        const obj17 = require(dependencyMap[18]);
      } else {
        formatToPlainStringResult = require;
        formatToPlainStringResult = dependencyMap;
        if (require(dependencyMap[5]).ContentInventoryEntryType.TOP_ARTIST === content_type) {
          const image_url2 = contentInventoryEntry.extra.media.image_url;
          let tmp27;
          if (null != image_url2) {
            let obj8 = require(dependencyMap[9]);
            if (obj8.hasFetchedColors(image_url2)) {
              let obj9 = require(dependencyMap[10]);
              const heroColors = obj9.getHeroColors(image_url2);
              ({ primaryColor: primaryColor2, secondaryColor: secondaryColor2 } = heroColors);
              let obj10 = require(dependencyMap[11]);
              const items2 = [obj10.hexToRgba(primaryColor2), ];
              let obj11 = require(dependencyMap[11]);
              items2[1] = obj11.hexToRgba(secondaryColor2);
              const items3 = [];
              let obj12 = require(dependencyMap[12]);
              const trait = obj12.getTrait(contentInventoryEntry, require(dependencyMap[21]).ContentInventoryTraitType.AGGREGATE_COUNT);
              let count;
              if (null != trait) {
                count = trait.count;
              }
              if (null != count) {
                const intl = require(dependencyMap[14]).intl;
                let obj2 = { count };
                let obj3 = { badgeUrl: Image.resolveAssetSource(importDefault(dependencyMap[15])).uri, text: intl.formatToPlainString(require(dependencyMap[14]).t.HtifnG, obj2) };
                items3.push(obj3);
                let obj4 = { imageUrl: image_url2, title: contentInventoryEntry.extra.artist.name, subtitles: items3, gradientColors: items2, platformIconUrl: Image.resolveAssetSource(importDefault(dependencyMap[20])).uri };
                tmp27 = obj4;
                const formatToPlainStringResult1 = intl.formatToPlainString(require(dependencyMap[14]).t.HtifnG, obj2);
              }
            }
          }
          tmp13 = tmp27;
        } else {
          formatToPlainStringResult = require;
          formatToPlainStringResult = dependencyMap;
          if (require(dependencyMap[5]).ContentInventoryEntryType.LISTENED_SESSION === content_type) {
            const first = contentInventoryEntry.extra.entries[0];
            const image_url = first.media.image_url;
            const first1 = first.media.artists[0];
            let name;
            if (null != first1) {
              name = first1.name;
            }
            if (null == name) {
              name = first.media.title;
            }
            let tmp18;
            if (null != image_url) {
              obj2 = require(dependencyMap[9]);
              if (obj2.hasFetchedColors(image_url)) {
                obj3 = require(dependencyMap[10]);
                const heroColors1 = obj3.getHeroColors(image_url);
                ({ primaryColor, secondaryColor } = heroColors1);
                obj4 = require(dependencyMap[11]);
                const items4 = [obj4.hexToRgba(primaryColor), ];
                let obj5 = require(dependencyMap[11]);
                items4[1] = obj5.hexToRgba(secondaryColor);
                obj5 = { imageUrl: image_url, title: first.media.title };
                const obj6 = { text: name };
                const items5 = [obj6];
                obj5.subtitles = items5;
                obj5.gradientColors = items4;
                obj5.platformIconUrl = Image.resolveAssetSource(importDefault(dependencyMap[20])).uri;
                tmp18 = obj5;
              }
            }
            tmp13 = tmp18;
          } else {
            formatToPlainStringResult = require;
            formatToPlainStringResult = dependencyMap;
            if (require(dependencyMap[5]).ContentInventoryEntryType.LAUNCHED_ACTIVITY === content_type) {
              formatToPlainStringResult = store;
              const application1 = store.getApplication(contentInventoryEntry.extra.application_id);
              formatToPlainStringResult = null;
              let tmp7;
              if (null != application1) {
                formatToPlainStringResult = ImageSizes;
                let iconURL1 = application1.getIconURL(ImageSizes.LARGE);
                if (null == iconURL1) {
                  iconURL1 = getMissingIconURL();
                }
                const tmp5 = getGradientColors(iconURL1);
                if (null != tmp5) {
                  const items6 = [];
                  obj = { badgeUrl: Image.resolveAssetSource(importDefault(dependencyMap[17])).uri };
                  items6.push(buildTimestampBadge(contentInventoryEntry, message, obj));
                  const obj7 = { imageUrl: iconURL1, title: contentInventoryEntry.extra.activity_name, subtitles: items6, gradientColors: tmp5 };
                  tmp7 = obj7;
                }
              }
              tmp13 = tmp7;
            }
          }
        }
      }
    }
    const user = user.getUser(contentInventoryEntry.author_id);
    if (null != user) {
      const name1 = importDefault(dependencyMap[6]).getName(undefined, undefined, user);
      obj8 = { authorId: contentInventoryEntry.author_id };
      const obj30 = importDefault(dependencyMap[6]);
      const ensureAvatarSourceResult = require(dependencyMap[7]).ensureAvatarSource(user.getAvatarSource(null, undefined, 80));
      let uri;
      if (null != ensureAvatarSourceResult) {
        uri = ensureAvatarSourceResult.uri;
      }
      obj8.avatarUrl = uri;
      obj8.userActionDescription = name1;
      obj9 = { ariaDescription: name1 };
      obj8.userClickable = obj9;
      const obj32 = require(dependencyMap[7]);
    }
    if (null != tmp13) {
      if (null != tmp89) {
        obj10 = { contentId: contentInventoryEntry.id };
        const merged = Object.assign(tmp13);
        formatToPlainStringResult = tmp89;
        formatToPlainStringResult = Object.assign(tmp89);
        return obj10;
      }
    }
  }
  const application2 = store.getApplication(contentInventoryEntry.extra.application_id);
  let obj14 = null;
  if (null != application2) {
    let game_name = application2.getIconURL(ImageSizes.LARGE);
    if (obj14 == game_name) {
      game_name = getMissingIconURL();
    }
    const tmp66 = getGradientColors(game_name);
    if (obj14 != tmp66) {
      const items7 = [];
      if (obj24.isEntryTopGame(contentInventoryEntry)) {
        const entryDuration = require(dependencyMap[num17]).getEntryDuration(contentInventoryEntry);
        if (obj14 != entryDuration) {
          const _Math = Math;
          const rounded = Math.round(entryDuration / importDefault(dependencyMap[13]).Seconds.HOUR);
          const intl2 = require(dependencyMap[14]).intl;
          const intl3 = require(dependencyMap[14]).intl;
          obj11 = { hours: rounded };
          const _HermesInternal2 = HermesInternal;
          obj12 = {};
          const combined = "" + intl2.string(require(dependencyMap[14]).t./50eHi) + " - " + intl3.formatToPlainString(require(dependencyMap[14]).t.C0AxoR, obj11);
          obj12.badgeUrl = Image.resolveAssetSource(importDefault(dependencyMap[15])).uri;
          obj12.text = combined;
          items7.push(obj12);
          const stringResult = intl2.string(require(dependencyMap[14]).t./50eHi);
        }
        const obj26 = require(dependencyMap[num17]);
      } else {
        const obj13 = { badgeUrl: Image.resolveAssetSource(importDefault(dependencyMap[16])).uri };
        items7.push(buildTimestampBadge(contentInventoryEntry, message, obj13));
      }
      obj14 = { imageUrl: game_name };
      game_name = contentInventoryEntry.extra.game_name;
      obj14.title = game_name;
      obj14.subtitles = items7;
      obj14.gradientColors = tmp66;
      const obj24 = require(dependencyMap[12]);
    }
  }
  tmp13 = tmp62;
};
