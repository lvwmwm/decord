// Module ID: 10419
// Function ID: 80274
// Name: MaxForumPostReactions
// Dependencies: [1347, 1348, 10424, 10213, 624, 3746, 10427, 2]
// Exports: ForumPostActionBarReactions, MaxForumPostReactions, MostCommonForumPostReaction

// Module 10419 (MaxForumPostReactions)
import "_createForOfIteratorHelperLoose";
import { View } from "_isNativeReflectConstruct";
import ChatOverlays from "ChatOverlays";
import ActivityPanelModes from "ActivityPanelModes";
import result2 from "result2";

({ jsx: closure_4, jsxs: closure_5 } = ChatOverlays);
let closure_6 = ActivityPanelModes.createStyles({ reactionButtonContainer: { marginEnd: 8 }, actionBarReaction: { marginEnd: 4 }, container: { flexDirection: "row" }, mostCommonContainer: { marginLeft: "auto" } });
const result = result2.fileFinishedImporting("modules/forums/native/posts/reactions/ForumPostReactions.tsx");

export const MaxForumPostReactions = function MaxForumPostReactions(thread) {
  let additionalReactionCount;
  let containerStyle;
  let containerWidth;
  let firstMessage;
  let parentChannel;
  let reactions;
  thread = thread.thread;
  const arg1 = thread;
  const reactionContainerStyle = thread.reactionContainerStyle;
  const importDefault = reactionContainerStyle;
  ({ parentChannel, firstMessage, containerWidth, containerStyle } = thread);
  const tmp = callback2();
  const dependencyMap = tmp;
  const disableReactionCreates = importDefault(dependencyMap[4])(thread).disableReactionCreates;
  let num = 28;
  if (disableReactionCreates) {
    num = 0;
  }
  let obj = arg1(dependencyMap[5]);
  obj = { containerWidth: containerWidth - num, message: firstMessage, parentChannel };
  const maxPossibleForumPostReactions = obj.useMaxPossibleForumPostReactions(obj);
  ({ reactions, additionalReactionCount } = maxPossibleForumPostReactions);
  if (0 !== reactions.length) {
    obj = {};
    const items = [tmp.container, containerStyle];
    obj.style = items;
    const items1 = [
      reactions.map((emoji) => {
          const items = [closure_4.reactionButtonContainer, reactionContainerStyle];
          let name = emoji.emoji.id;
          if (null == name) {
            name = emoji.emoji.name;
          }
          return closure_4(thread(closure_4[6]).ForumPostReactionButton, { containerStyle: items, thread, reaction: emoji, animateCount: false }, name);
        }),
  ,

    ];
    let tmp6 = additionalReactionCount > 0;
    if (tmp6) {
      const obj1 = { count: additionalReactionCount, containerStyle: reactionContainerStyle, threadId: thread.id };
      tmp6 = callback(arg1(dependencyMap[6]).AdditionalReactionCount, obj1);
    }
    items1[1] = tmp6;
    let tmp10 = !disableReactionCreates;
    if (tmp10) {
      const obj2 = { containerStyle: reactionContainerStyle, threadId: thread.id };
      tmp10 = callback(arg1(dependencyMap[6]).AddReactionButton, obj2);
    }
    items1[2] = tmp10;
    obj.children = items1;
    let tmp4Result = closure_5(View, obj);
    const tmp4 = closure_5;
    const tmp5 = View;
  } else {
    tmp4Result = null;
  }
  return tmp4Result;
};
export const ForumPostActionBarReactions = function ForumPostActionBarReactions(thread) {
  let additionalNonUniqueReactionCount;
  let containerStyle;
  let firstMessage;
  let parentChannel;
  let reactions;
  thread = thread.thread;
  const arg1 = thread;
  const reactionContainerStyle = thread.reactionContainerStyle;
  const importDefault = reactionContainerStyle;
  ({ parentChannel, firstMessage, containerStyle } = thread);
  const tmp = callback2();
  const dependencyMap = tmp;
  const disableReactionCreates = importDefault(dependencyMap[4])(thread).disableReactionCreates;
  let obj = arg1(dependencyMap[5]);
  obj = { message: firstMessage, parentChannel, sorted: false };
  let num = 2;
  if (disableReactionCreates) {
    num = 3;
  }
  obj.count = num;
  const someForumPostReactions = obj.useSomeForumPostReactions(obj);
  ({ reactions, additionalNonUniqueReactionCount } = someForumPostReactions);
  if (0 !== reactions.length) {
    obj = {};
    const items = [tmp.container, containerStyle];
    obj.style = items;
    const items1 = [
      reactions.map((emoji) => {
          const items = [closure_4.actionBarReaction, reactionContainerStyle];
          let name = emoji.emoji.id;
          if (null == name) {
            name = emoji.emoji.name;
          }
          return closure_4(thread(closure_4[6]).ForumPostReactionButton, { containerStyle: items, thread, reaction: emoji, animateCount: false }, name);
        }),
  ,

    ];
    let tmp6 = additionalNonUniqueReactionCount > 0;
    if (tmp6) {
      const obj1 = { count: additionalNonUniqueReactionCount };
      const items2 = [tmp.actionBarReaction, reactionContainerStyle];
      obj1.containerStyle = items2;
      obj1.threadId = thread.id;
      tmp6 = callback(arg1(dependencyMap[6]).AdditionalReactionCount, obj1);
    }
    items1[1] = tmp6;
    let tmp10 = !disableReactionCreates;
    if (tmp10) {
      const obj2 = {};
      const items3 = [tmp.actionBarReaction, reactionContainerStyle];
      obj2.containerStyle = items3;
      obj2.threadId = thread.id;
      tmp10 = callback(arg1(dependencyMap[6]).AddReactionButton, obj2);
    }
    items1[2] = tmp10;
    obj.children = items1;
    let tmp4Result = closure_5(View, obj);
    const tmp4 = closure_5;
    const tmp5 = View;
  } else {
    tmp4Result = null;
  }
  return tmp4Result;
};
export const MostCommonForumPostReaction = function MostCommonForumPostReaction(thread) {
  let disableReactionCreates;
  let disableReactionUpdates;
  let firstMessage;
  let locationAnalyticsObject;
  let parentChannel;
  thread = thread.thread;
  ({ parentChannel, firstMessage, locationAnalyticsObject } = thread);
  const tmp = callback2();
  ({ disableReactionCreates, disableReactionUpdates } = importDefault(dependencyMap[4])(thread));
  let obj = arg1(dependencyMap[5]);
  const first = obj.useSomeForumPostReactions({ parentChannel, message: firstMessage }).reactions[0];
  if (null != first) {
    if (!disableReactionUpdates) {
      if (!disableReactionCreates) {
        obj = { containerStyle: tmp.mostCommonContainer, thread, reaction: first, locationAnalyticsObject, animateCount: false };
        let tmp5 = callback(arg1(dependencyMap[6]).ForumPostReactionButton, obj);
      } else {
        tmp5 = null;
      }
      return tmp5;
    }
  }
  return null;
};
