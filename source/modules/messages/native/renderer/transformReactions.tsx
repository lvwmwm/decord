// Module ID: 7639
// Function ID: 61176
// Name: transformReactions
// Dependencies: []
// Exports: default

// Module 7639 (transformReactions)
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/transformReactions.tsx");

export default function transformReactions(arg0) {
  let reactions;
  ({ reactions, animateEmoji: closure_0 } = arg0);
  let closure_1 = require(dependencyMap[0]).shouldSkipAccessibilityLabels();
  const obj = require(dependencyMap[0]);
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
      let animated = callback;
      if (callback) {
        animated = emoji.animated;
      }
      if (null == emoji.id) {
        let obj2 = callback2(closure_2[1]);
        let uRL = obj2.getURL(emoji.name);
      } else {
        obj = callback2(closure_2[2]);
        obj = { id: emoji.id, animated, size: 48 };
        uRL = obj.getEmojiURL(obj);
      }
      if (callback2) {
        const name = emoji.name;
        let str = "";
        if (null != name) {
          str = name;
        }
        let accessibleEmojiDisplayName = str;
      } else {
        let obj3 = callback(closure_2[3]);
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
          obj3 = { colors: obj1.burst_colors, shouldProcessMobileColors: callback(closure_2[5]).isIOS() };
          obj1.themedBurstColors = callback(closure_2[4]).buildPlatformedThemedEmojiColorPalette(obj3);
          const obj8 = callback(closure_2[5]);
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
      obj = callback2(closure_2[6]);
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
