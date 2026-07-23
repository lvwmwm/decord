// Module ID: 7645
// Function ID: 61213
// Name: transformReactions
// Dependencies: [7641, 3775, 1392, 3769, 7646, 477, 1184, 2]
// Exports: default

// Module 7645 (transformReactions)
const result = require("getAvatarURL").fileFinishedImporting("modules/messages/native/renderer/transformReactions.tsx");

export default function transformReactions(arg0) {
  let reactions;
  let require;
  ({ reactions, animateEmoji: require } = arg0);
  let closure_1 = require(7641) /* apexExperiment */.shouldSkipAccessibilityLabels();
  let obj = require(7641) /* apexExperiment */;
  return reactions.flatMap((emoji) => {
    emoji = emoji.emoji;
    let obj = Object.create(null);
    obj.emoji = 0;
    const merged = Object.assign(emoji, obj);
    const count_details = merged.count_details;
    let vote;
    if (null != count_details) {
      vote = count_details.vote;
    }
    if (null != vote) {
      return [];
    } else {
      let animated = closure_0;
      if (closure_0) {
        animated = emoji.animated;
      }
      if (null == emoji.id) {
        let obj2 = callback(outer1_2[1]);
        let uRL = obj2.getURL(emoji.name);
      } else {
        obj = callback(outer1_2[2]);
        obj = { id: emoji.id, animated, size: 48 };
        uRL = obj.getEmojiURL(obj);
      }
      if (callback) {
        const name = emoji.name;
        let str = "";
        if (null != name) {
          str = name;
        }
        let accessibleEmojiDisplayName = str;
      } else {
        let obj3 = outer1_0(outer1_2[3]);
        accessibleEmojiDisplayName = obj3.getAccessibleEmojiDisplayName(merged.me, merged.count, emoji, merged.burst_count > 0);
      }
      let combined = null;
      if (null != emoji.id) {
        const _HermesInternal = HermesInternal;
        combined = "" + emoji.id;
      }
      const obj1 = {};
      const merged1 = Object.assign(merged);
      obj2 = {};
      const merged2 = Object.assign(emoji);
      obj2["id"] = combined;
      obj2["src"] = uRL;
      obj2["displayName"] = accessibleEmojiDisplayName;
      obj2["animated"] = animated;
      obj1["emoji"] = obj2;
      const _Array = Array;
      if (Array.isArray(obj1.burst_colors)) {
        if (obj1.burst_colors.length > 0) {
          obj3 = { colors: obj1.burst_colors, shouldProcessMobileColors: outer1_0(outer1_2[5]).isIOS() };
          obj1.themedBurstColors = outer1_0(outer1_2[4]).buildPlatformedThemedEmojiColorPalette(obj3);
          const obj8 = outer1_0(outer1_2[5]);
        }
      }
      return obj1;
    }
  }).map((burst_count) => {
    burst_count = burst_count.burst_count;
    let obj = Object.create(null);
    obj.burst_count = 0;
    const merged = Object.assign(burst_count, obj);
    let num = burst_count;
    if (null === burst_count) {
      obj = callback(outer1_2[6]);
      obj = { burst_count };
      const merged1 = Object.assign(merged);
      const _HermesInternal = HermesInternal;
      obj.captureMessage("Null burst_count while transforming reaction: " + obj);
      num = 0;
    }
    const obj1 = {};
    const merged2 = Object.assign(merged);
    obj1["burst_count"] = num;
    return obj1;
  });
};
