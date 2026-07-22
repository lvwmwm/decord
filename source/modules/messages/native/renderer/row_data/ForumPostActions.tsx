// Module ID: 7631
// Function ID: 61143
// Name: createDefaultReaction
// Dependencies: []
// Exports: createDefaultReaction, createForumPostActions

// Module 7631 (createDefaultReaction)
const HelpdeskArticles = require(dependencyMap[0]).HelpdeskArticles;
const _module = require(dependencyMap[14]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/row_data/ForumPostActions.tsx");

export const createDefaultReaction = function createDefaultReaction(arg0) {
  let customGuildEmoji;
  let defaultReactionEmoji;
  let emojiId;
  let emojiName;
  ({ defaultReactionEmoji, customGuildEmoji } = arg0);
  let obj = require(dependencyMap[10]);
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
        obj.src = importDefault(dependencyMap[11]).getEmojiURL(obj);
        let accessibleEmojiDisplayName = str2;
        if (!result) {
          const obj1 = { id: emojiId, name: str2, animated: customGuildEmoji.animated };
          accessibleEmojiDisplayName = require(dependencyMap[12]).getAccessibleEmojiDisplayName(false, 0, obj1);
          const obj9 = require(dependencyMap[12]);
        }
        obj.displayName = accessibleEmojiDisplayName;
        tmp2 = obj;
        const obj7 = importDefault(dependencyMap[11]);
      }
    }
    if (null != emojiName) {
      let str = "";
      if (null != emojiName) {
        str = emojiName;
      }
      let obj2 = { id: undefined, name: emojiName, animated: false };
      obj2 = importDefault(dependencyMap[13]);
      obj2.src = obj2.getURL(emojiName);
      let accessibleEmojiDisplayName1 = str;
      if (!result) {
        let obj3 = require(dependencyMap[12]);
        obj3 = { id: undefined, name: str, animated: false };
        accessibleEmojiDisplayName1 = obj3.getAccessibleEmojiDisplayName(false, 0, obj3);
      }
      obj2.displayName = accessibleEmojiDisplayName1;
      tmp2 = obj2;
    }
  }
  let tmp13;
  if (null != tmp2) {
    const obj4 = { "Bool(false)": null, "Bool(false)": "2eaff20be2a75be7ccdd4c6f19f0eb36", "Bool(false)": "img_account_sync_youtube_white", emoji: tmp2 };
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
  const getAssetUriForEmbed = require(dependencyMap[1]).getAssetUriForEmbed;
  if (isFollowing) {
    let assetUriForEmbed = getAssetUriForEmbed(tmp3(tmp[2]));
  } else {
    assetUriForEmbed = getAssetUriForEmbed(tmp3(tmp[3]));
  }
  if (null != assetUriForEmbed) {
    let obj1 = require(dependencyMap[1]);
    let stringResult;
    const assetUriForEmbed1 = obj1.getAssetUriForEmbed(importDefault(dependencyMap[5]));
    if (!hasReactions) {
      let emoji;
      if (null != defaultReaction) {
        emoji = defaultReaction.emoji;
      }
      if (null == emoji) {
        const intl = require(dependencyMap[6]).intl;
        stringResult = intl.string(require(dependencyMap[6]).t.xpOyTO);
      }
    }
    let tmp18;
    if (showMediaPostSharePrompt) {
      let obj = {};
      const intl2 = require(dependencyMap[6]).intl;
      obj.title = intl2.string(require(dependencyMap[6]).t.5uAO7d);
      const intl3 = require(dependencyMap[6]).intl;
      obj = {};
      obj1 = { url: importDefault(dependencyMap[7]).getCreatorSupportArticleURL(HelpdeskArticles.MEDIA_CHANNEL) };
      obj.helpArticleUrl = obj1;
      obj.subtitle = intl3.formatToParts(require(dependencyMap[6]).t.YtCu5p, obj);
      const intl4 = require(dependencyMap[6]).intl;
      obj.cta = intl4.string(require(dependencyMap[6]).t.C5UQC9);
      const obj6 = importDefault(dependencyMap[7]);
      obj.icon = require(dependencyMap[1]).getAssetUriForEmbed(importDefault(dependencyMap[8]));
      const obj7 = require(dependencyMap[1]);
      obj.closeIcon = require(dependencyMap[1]).getAssetUriForEmbed(importDefault(dependencyMap[9]));
      tmp18 = obj;
      const obj8 = require(dependencyMap[1]);
    }
    const obj2 = { numDisplayedReactions: 3, isFollowing, followIcon: assetUriForEmbed };
    const intl5 = require(dependencyMap[6]).intl;
    const string = intl5.string;
    const t = require(dependencyMap[6]).t;
    if (isFollowing) {
      let stringResult1 = string(t.OtF+lC);
    } else {
      stringResult1 = string(t.0rQinA);
    }
    obj2.followLabel = stringResult1;
    obj2.shareIcon = assetUriForEmbed1;
    const intl6 = require(dependencyMap[6]).intl;
    obj2.shareLabel = intl6.string(require(dependencyMap[6]).t.Ej3B3Y);
    obj2.defaultReaction = defaultReaction;
    obj2.addReactLabel = stringResult;
    obj2.sharePrompt = tmp18;
    return obj2;
  } else {
    let str = importDefault;
    obj = importDefault(dependencyMap[4]);
    let strResult = dependencyMap;
    if (isFollowing) {
      let tmp7 = strResult[2];
    } else {
      tmp7 = strResult[3];
    }
    strResult = str(tmp7);
    const _HermesInternal = HermesInternal;
    str = "Forum follow is null. isFollowing: ";
    obj.captureMessage("Forum follow is null. isFollowing: " + isFollowing + " icon: " + strResult);
  }
};
