// Module ID: 7726
// Function ID: 61466
// Name: createDefaultReaction
// Dependencies: [653, 7724, 4083, 7727, 1184, 4075, 1212, 1920, 7728, 7729, 7730, 1392, 3769, 3775, 2]
// Exports: createDefaultReaction, createForumPostActions

// Module 7726 (createDefaultReaction)
import { HelpdeskArticles } from "ME";

let result = require("registerAsset").fileFinishedImporting("modules/messages/native/renderer/row_data/ForumPostActions.tsx");

export const createDefaultReaction = function createDefaultReaction(arg0) {
  let customGuildEmoji;
  let defaultReactionEmoji;
  let emojiId;
  let emojiName;
  ({ defaultReactionEmoji, customGuildEmoji } = arg0);
  let obj = require(7730) /* apexExperiment */;
  const result = obj.shouldSkipAccessibilityLabels();
  let tmp2;
  if (null != defaultReactionEmoji) {
    ({ emojiId, emojiName } = defaultReactionEmoji);
    if (null != emojiId) {
      if (null != customGuildEmoji) {
        const name = customGuildEmoji.name;
        let str2 = "";
        if (null != name) {
          str2 = name;
        }
        obj = { id: emojiId, name: undefined, animated: customGuildEmoji.animated };
        obj = { id: emojiId, animated: customGuildEmoji.animated, size: 48 };
        obj.src = importDefault(1392).getEmojiURL(obj);
        let accessibleEmojiDisplayName = str2;
        if (!result) {
          const obj1 = { id: emojiId, name: str2, animated: customGuildEmoji.animated };
          accessibleEmojiDisplayName = require(3769) /* getReactionEmojiName */.getAccessibleEmojiDisplayName(false, 0, obj1);
          const obj9 = require(3769) /* getReactionEmojiName */;
        }
        obj.displayName = accessibleEmojiDisplayName;
        tmp2 = obj;
        const obj7 = importDefault(1392);
      }
    }
    if (null != emojiName) {
      let str = "";
      if (null != emojiName) {
        str = emojiName;
      }
      let obj2 = { id: undefined, name: emojiName, animated: false };
      obj2 = importDefault(3775);
      obj2.src = obj2.getURL(emojiName);
      let accessibleEmojiDisplayName1 = str;
      if (!result) {
        let obj3 = require(3769) /* getReactionEmojiName */;
        obj3 = { id: undefined, name: str, animated: false };
        accessibleEmojiDisplayName1 = obj3.getAccessibleEmojiDisplayName(false, 0, obj3);
      }
      obj2.displayName = accessibleEmojiDisplayName1;
      tmp2 = obj2;
    }
  }
  let tmp13;
  if (null != tmp2) {
    const obj4 = { emoji: tmp2, me: false, count: 0 };
    tmp13 = obj4;
  }
  return tmp13;
};
export const createForumPostActions = function createForumPostActions(arg0) {
  let defaultReaction;
  let hasReactions;
  let isFollowing;
  let showMediaPostSharePrompt;
  ({ isFollowing, defaultReaction } = arg0);
  ({ hasReactions, showMediaPostSharePrompt } = arg0);
  const getAssetUriForEmbed = require(7724) /* frozen */.getAssetUriForEmbed;
  if (isFollowing) {
    let assetUriForEmbed = getAssetUriForEmbed(tmp3(4083));
  } else {
    assetUriForEmbed = getAssetUriForEmbed(tmp3(7727));
  }
  if (null != assetUriForEmbed) {
    let obj1 = require(7724) /* frozen */;
    let stringResult;
    const assetUriForEmbed1 = obj1.getAssetUriForEmbed(importDefault(4075));
    if (!hasReactions) {
      let emoji;
      if (null != defaultReaction) {
        emoji = defaultReaction.emoji;
      }
      if (null == emoji) {
        const intl = require(1212) /* getSystemLocale */.intl;
        stringResult = intl.string(require(1212) /* getSystemLocale */.t.xpOyTO);
      }
    }
    let tmp18;
    if (showMediaPostSharePrompt) {
      let obj = {};
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj.title = intl2.string(require(1212) /* getSystemLocale */.t["5uAO7d"]);
      const intl3 = require(1212) /* getSystemLocale */.intl;
      obj = {};
      obj1 = { url: importDefault(1920).getCreatorSupportArticleURL(HelpdeskArticles.MEDIA_CHANNEL) };
      obj.helpArticleUrl = obj1;
      obj.subtitle = intl3.formatToParts(require(1212) /* getSystemLocale */.t.YtCu5p, obj);
      const intl4 = require(1212) /* getSystemLocale */.intl;
      obj.cta = intl4.string(require(1212) /* getSystemLocale */.t.C5UQC9);
      const obj6 = importDefault(1920);
      obj.icon = require(7724) /* frozen */.getAssetUriForEmbed(importDefault(7728));
      const obj7 = require(7724) /* frozen */;
      obj.closeIcon = require(7724) /* frozen */.getAssetUriForEmbed(importDefault(7729));
      tmp18 = obj;
      const obj8 = require(7724) /* frozen */;
    }
    const obj2 = { numDisplayedReactions: 3, isFollowing, followIcon: assetUriForEmbed };
    const intl5 = require(1212) /* getSystemLocale */.intl;
    const string = intl5.string;
    const t = require(1212) /* getSystemLocale */.t;
    if (isFollowing) {
      let stringResult1 = string(t["OtF+lC"]);
    } else {
      stringResult1 = string(t["0rQinA"]);
    }
    obj2.followLabel = stringResult1;
    obj2.shareIcon = assetUriForEmbed1;
    const intl6 = require(1212) /* getSystemLocale */.intl;
    obj2.shareLabel = intl6.string(require(1212) /* getSystemLocale */.t.Ej3B3Y);
    obj2.defaultReaction = defaultReaction;
    obj2.addReactLabel = stringResult;
    obj2.sharePrompt = tmp18;
    return obj2;
  } else {
    let str = importDefault;
    obj = importDefault(1184);
    let strResult = dependencyMap;
    if (isFollowing) {
      let tmp7 = 4083;
    } else {
      tmp7 = 7727;
    }
    strResult = str(tmp7);
    const _HermesInternal = HermesInternal;
    str = "Forum follow is null. isFollowing: ";
    obj.captureMessage("Forum follow is null. isFollowing: " + isFollowing + " icon: " + strResult);
  }
};
