// Module ID: 8402
// Function ID: 8403
// Name: transformContentInventoryEntryMessageComponent
// Dependencies: [17, 4984, 2109, 1372, 2004, 8403, 4909, 1400, 8404, 8405, 8406, 4606, 8408, 1091, 1115, 8410, 8411, 5246, 8412, 8414, 8415, 8409, 2]
// Exports: transformToRowGeneratedContentInventoryEntryComponent

// Module 8402 (transformContentInventoryEntryMessageComponent)
import _mod17 from "module_17" /* 17 */;
import Constants from "Constants" /* 2004 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4909 */;
import ContentInventoryEntryType from "ContentInventoryEntryType" /* 8403 */;
import _modDef8404 from "module_8404" /* 8404 */;
import _modDef8410 from "module_8410" /* 8410 */;
import _modDef8415 from "module_8415" /* 8415 */;
import ApplicationStore from "ApplicationStore" /* 4984 */;
import LocaleStore from "LocaleStore" /* 2109 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const Image = _mod17.Image;
const ImageSizes = Constants.ImageSizes;
let items = [{ r: 0, g: 0, b: 0, a: 1 }, { r: 0, g: 0, b: 0, a: 1 }];
const result = size.fileFinishedImporting("modules/messages/native/renderer/transformContentInventoryEntryMessageComponent.tsx");

export const transformToRowGeneratedContentInventoryEntryComponent = function transformToRowGeneratedContentInventoryEntryComponent(component) {
  const contentInventoryEntry = component.component.contentInventoryEntry;
  const message = component.message;
  const content_type = contentInventoryEntry.content_type;
  if (ContentInventoryEntryType.ContentInventoryEntryType.PLAYED_GAME !== content_type) {
    if (tmp(8403).ContentInventoryEntryType.TOP_GAME !== content_type) {
      if (tmp(8403).ContentInventoryEntryType.WATCHED_MEDIA === content_type) {
        items = [, ];
        ({ LARGE: arr7[0], LARGE: arr7[1] } = ImageSizes);
        const assetImage = tmp(8412).getAssetImage(contentInventoryEntry.extra.application_id, contentInventoryEntry.extra.media_assets_large_image, items);
        const application = ApplicationStore.getApplication(contentInventoryEntry.extra.application_id);
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(tmp38.LARGE);
        }
        if (iconURL == null) {
          iconURL = Image.resolveAssetSource(_modDef8404).uri;
        }
        let tmp45 = assetImage;
        if (assetImage == null) {
          tmp45 = iconURL;
        }
        if (tmp45 === Image.resolveAssetSource(_modDef8404).uri) {
          let tmp47 = items;
        } else {
          if (tmpResult29.hasFetchedColors(tmp45)) {
            const heroColors = tmp(8406).getHeroColors(tmp45);
            ({ primaryColor: primaryColor4, secondaryColor: secondaryColor4 } = heroColors);
            const tmpResult30 = tmp(8406);
            const items1 = [tmp(4606).hexToRgba(primaryColor4), ];
            const tmpResult31 = tmp(4606);
            items1[1] = tmp(4606).hexToRgba(secondaryColor4);
            tmp47 = items1;
            const tmpResult32 = tmp(4606);
          }
          tmpResult29 = tmp(8405);
        }
        let tmp49;
        if (null != tmp47) {
          let str = contentInventoryEntry.extra.media_assets_large_text;
          if (str == null) {
            str = "";
          }
          const items2 = [];
          const match = /\w+ (\d+), \w+ (\d+)/.exec(str);
          if (null != match) {
            const intl4 = tmp(1115).intl;
            const obj2 = { seasonNum: match[1], episodeNum: match[2] };
            const formatToPlainStringResult = intl4.formatToPlainString(tmp(1115).t.ijVm6y, obj2);
            let sum = formatToPlainStringResult;
            if (null != contentInventoryEntry.extra.media_title) {
              const _HermesInternal = HermesInternal;
              sum = formatToPlainStringResult + " \u00B7 " + contentInventoryEntry.extra.media_subtitle;
            }
            const obj3 = { text: sum };
            items2.push(obj3);
          }
          const obj4 = { imageUrl: tmp45, title: contentInventoryEntry.extra.media_title, subtitles: items2, gradientColors: tmp47, platformIconUrl: obj28.resolveAssetSource(tmp46(8414)).uri };
          tmp49 = obj4;
          const obj33 = /\w+ (\d+), \w+ (\d+)/;
        }
        let tmp20 = tmp49;
        obj28 = Image;
        tmp38 = ImageSizes;
        tmp46 = importDefault;
        const tmpResult = tmp(8412);
      } else if (tmp(8403).ContentInventoryEntryType.TOP_ARTIST === content_type) {
        const image_url2 = contentInventoryEntry.extra.media.image_url;
        let tmp30;
        if (null != image_url2) {
          if (tmpResult33.hasFetchedColors(image_url2)) {
            const heroColors1 = tmp(8406).getHeroColors(image_url2);
            ({ primaryColor: primaryColor3, secondaryColor: secondaryColor3 } = heroColors1);
            const tmpResult34 = tmp(8406);
            const items3 = [tmp(4606).hexToRgba(primaryColor3), ];
            const tmpResult35 = tmp(4606);
            items3[1] = tmp(4606).hexToRgba(secondaryColor3);
            const tmpResult36 = tmp(4606);
            const trait = tmp(8408).getTrait(contentInventoryEntry, tmp(8409).ContentInventoryTraitType.AGGREGATE_COUNT);
            let count;
            if (trait != null) {
              count = trait.count;
            }
            if (null != count) {
              const items4 = [];
              const intl = tmp(1115).intl;
              const obj5 = { count };
              const obj6 = { badgeUrl: Image.resolveAssetSource(_modDef8410).uri, text: intl.formatToPlainString(tmp(1115).t.HtifnG, obj5) };
              items4.push(obj6);
              const obj7 = { imageUrl: image_url2, title: contentInventoryEntry.extra.artist.name, subtitles: items4, gradientColors: items3, platformIconUrl: Image.resolveAssetSource(_modDef8415).uri };
              tmp30 = obj7;
              const formatToPlainStringResult1 = intl.formatToPlainString(tmp(1115).t.HtifnG, obj5);
            }
            const tmpResult37 = tmp(8408);
          }
          tmpResult33 = tmp(8405);
        }
        tmp20 = tmp30;
      } else if (tmp(8403).ContentInventoryEntryType.LISTENED_SESSION === content_type) {
        const first = contentInventoryEntry.extra.entries[0];
        const image_url = first.media.image_url;
        const first1 = first.media.artists[0];
        let name;
        if (first1 != null) {
          name = first1.name;
        }
        if (name == null) {
          name = first.media.title;
        }
        let tmp25;
        if (null != image_url) {
          if (tmpResult38.hasFetchedColors(image_url)) {
            const heroColors2 = tmp(8406).getHeroColors(image_url);
            ({ primaryColor: primaryColor2, secondaryColor: secondaryColor2 } = heroColors2);
            const tmpResult39 = tmp(8406);
            const items5 = [tmp(4606).hexToRgba(primaryColor2), ];
            const tmpResult40 = tmp(4606);
            items5[1] = tmp(4606).hexToRgba(secondaryColor2);
            const obj8 = { imageUrl: image_url, title: first.media.title, subtitles: null, gradientColors: null, platformIconUrl: null };
            const obj9 = { text: name };
            const items6 = [obj9];
            obj8.subtitles = items6;
            obj8.gradientColors = items5;
            obj8.platformIconUrl = Image.resolveAssetSource(_modDef8415).uri;
            tmp25 = obj8;
            const tmpResult41 = tmp(4606);
          }
          tmpResult38 = tmp(8405);
        }
        tmp20 = tmp25;
      } else if (tmp(8403).ContentInventoryEntryType.LAUNCHED_ACTIVITY === content_type) {
        const application1 = ApplicationStore.getApplication(contentInventoryEntry.extra.application_id);
        let tmp9;
        if (null != application1) {
          let uri = application1.getIconURL(ImageSizes.LARGE);
          if (uri == null) {
            uri = Image.resolveAssetSource(_modDef8404).uri;
          }
          if (uri === Image.resolveAssetSource(_modDef8404).uri) {
            let tmp7 = items;
          } else {
            if (tmpResult42.hasFetchedColors(uri)) {
              const heroColors3 = tmp(8406).getHeroColors(uri);
              ({ primaryColor, secondaryColor } = heroColors3);
              const tmpResult43 = tmp(8406);
              const items7 = [tmp(4606).hexToRgba(primaryColor), ];
              const tmpResult44 = tmp(4606);
              items7[1] = tmp(4606).hexToRgba(secondaryColor);
              tmp7 = items7;
              const tmpResult45 = tmp(4606);
            }
            tmpResult42 = tmp(8405);
          }
          if (null != tmp7) {
            const items8 = [];
            const obj10 = { badgeUrl: obj.resolveAssetSource(tmp6(5246)).uri };
            const timestamp = message.timestamp;
            const time = timestamp.getTime();
            const obj11 = {};
            const merged = Object.assign(obj10);
            obj11.text = tmp(8408).formatEntryTimestamp(contentInventoryEntry, LocaleStore.locale, time);
            const tmpResult47 = tmp(8408);
            const obj12 = { formatSet: tmp(8408).A11Y_FORMAT_SET };
            obj11.ariaDescription = tmpResult47.formatEntryTimestamp(contentInventoryEntry, LocaleStore.locale, time, obj12);
            items8.push(obj11);
            const obj13 = { imageUrl: uri, title: contentInventoryEntry.extra.activity_name, subtitles: items8, gradientColors: tmp7 };
            tmp9 = obj13;
            const tmpResult46 = tmp(8408);
          }
          obj = Image;
          tmp6 = importDefault;
        }
        tmp20 = tmp9;
      }
    }
    const user = UserStore.getUser(contentInventoryEntry.author_id);
    if (null != user) {
      const name1 = NicknameUtilsDefault.getName(undefined, undefined, user);
      const obj14 = { authorId: contentInventoryEntry.author_id, avatarUrl: null, userActionDescription: null, userClickable: null };
      const ensureAvatarSourceResult = tmp(1400).ensureAvatarSource(user.getAvatarSource(null, undefined, 80));
      let uri1;
      if (ensureAvatarSourceResult != null) {
        uri1 = ensureAvatarSourceResult.uri;
      }
      obj14.avatarUrl = uri1;
      obj14.userActionDescription = name1;
      const obj15 = { ariaDescription: name1 };
      obj14.userClickable = obj15;
      const tmpResult48 = tmp(1400);
    }
    if (null != tmp20) {
      if (null != tmp81) {
        const obj16 = { contentId: contentInventoryEntry.id };
        const merged1 = Object.assign(tmp20);
        const merged2 = Object.assign(tmp81);
        return obj16;
      }
    }
  }
  const application2 = ApplicationStore.getApplication(contentInventoryEntry.extra.application_id);
  let tmp54 = null;
  if (null != application2) {
    let game_name = application2.getIconURL(ImageSizes.LARGE);
    if (game_name == tmp54) {
      game_name = Image.resolveAssetSource(_modDef8404).uri;
    }
    if (game_name === Image.resolveAssetSource(_modDef8404).uri) {
      let tmp60 = items;
    } else {
      if (tmpResult49.hasFetchedColors(game_name)) {
        const heroColors4 = tmp(8406).getHeroColors(game_name);
        ({ primaryColor: primaryColor5, secondaryColor: secondaryColor5 } = heroColors4);
        const tmpResult50 = tmp(8406);
        const items9 = [tmp(4606).hexToRgba(primaryColor5), ];
        const tmpResult51 = tmp(4606);
        items9[1] = tmp(4606).hexToRgba(secondaryColor5);
        tmp60 = items9;
        const tmpResult52 = tmp(4606);
      }
      tmpResult49 = tmp(8405);
    }
    if (tmp54 != tmp60) {
      const items10 = [];
      if (tmpResult53.isEntryTopGame(contentInventoryEntry)) {
        const entryDuration = tmp(8408).getEntryDuration(contentInventoryEntry);
        tmp54 = tmp54 == entryDuration;
        if (!tmp54) {
          const _Math = Math;
          const rounded = Math.round(entryDuration / tmp59(1091).Seconds.HOUR);
          const intl2 = tmp(1115).intl;
          const intl3 = tmp(1115).intl;
          const obj17 = { hours: rounded };
          const _HermesInternal2 = HermesInternal;
          const obj18 = { badgeUrl: null, text: null };
          const combined = "" + intl2.string(tmp(1115).t["/50eHi"]) + " - " + intl3.formatToPlainString(tmp(1115).t.C0AxoR, obj17);
          obj18.badgeUrl = obj37.resolveAssetSource(tmp59(8410)).uri;
          obj18.text = combined;
          items10.push(obj18);
          const stringResult = intl2.string(tmp(1115).t["/50eHi"]);
        }
        const tmpResult54 = tmp(8408);
      } else {
        const obj19 = { badgeUrl: obj37.resolveAssetSource(tmp59(8411)).uri };
        const timestamp2 = message.timestamp;
        const time1 = timestamp2.getTime();
        const obj20 = {};
        const merged3 = Object.assign(obj19);
        obj20.text = tmp(8408).formatEntryTimestamp(contentInventoryEntry, LocaleStore.locale, time1);
        const tmpResult56 = tmp(8408);
        const obj21 = { formatSet: tmp(8408).A11Y_FORMAT_SET };
        obj20.ariaDescription = tmpResult56.formatEntryTimestamp(contentInventoryEntry, LocaleStore.locale, time1, obj21);
        items10.push(obj20);
        const tmpResult55 = tmp(8408);
      }
      const obj22 = { imageUrl: game_name, title: null, subtitles: null, gradientColors: null };
      game_name = contentInventoryEntry.extra.game_name;
      obj22.title = game_name;
      obj22.subtitles = items10;
      obj22.gradientColors = tmp60;
      tmpResult53 = tmp(8408);
    }
  }
  tmp20 = tmp55;
};
