// Module ID: 10958
// Function ID: 10959
// Name: ForumPostReactions
// Dependencies: [19, 17, 21, 4836, 10856, 7310, 9679, 2]
// Exports: ForumPostActionBarReactions, MaxForumPostReactions, MostCommonForumPostReaction

// Module 10958 (ForumPostReactions)
import react_native from "react-native" /* 17 */;
import ForumHooks from "ForumHooks" /* 7310 */;
import useReactionPermissionsDefault from "useReactionPermissions" /* 10856 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
let tmp4;
const ForumPostReactionButton2 = tmp4(9679);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ reactionButtonContainer: { marginEnd: 8 }, actionBarReaction: { marginEnd: 4 }, container: { flexDirection: "row" }, mostCommonContainer: { marginLeft: "auto" } });
const result = size.fileFinishedImporting("modules/forums/native/posts/reactions/ForumPostReactions.tsx");

export const MaxForumPostReactions = function MaxForumPostReactions(thread) {
  let additionalReactionCount;
  let closure_2;
  let containerStyle;
  let containerWidth;
  let firstMessage;
  let items;
  let items1;
  let parentChannel;
  let reactions;
  let tmp6Result;
  thread = thread.thread;
  const reactionContainerStyle = thread.reactionContainerStyle;
  ({ parentChannel, firstMessage, containerWidth, containerStyle } = thread);
  let tmp = closure_6();
  dependencyMap = tmp;
  const disableReactionCreates = reactionContainerStyle(10856)(thread).disableReactionCreates;
  let num = 28;
  if (disableReactionCreates) {
    num = 0;
  }
  let obj = thread(7310);
  const obj2 = { containerWidth: containerWidth - num, reactionEmojiWidth: 46, digitWidth: 7.5, message: firstMessage, parentChannel };
  const maxPossibleForumPostReactions = obj.useMaxPossibleForumPostReactions(obj2);
  ({ reactions, additionalReactionCount } = maxPossibleForumPostReactions);
  if (0 !== reactions.length) {
    const obj3 = { style: items, children: items1 };
    items = [tmp.container, containerStyle];
    items1 = [
      reactions.map((reaction) => {
          let items;
          const obj = { containerStyle: items, thread, reaction, animateCount: false };
          items = [closure_2.reactionButtonContainer, reactionContainerStyle];
          let name = reaction.emoji.id;
          const ForumPostReactionButton = ForumPostReactionButton2.ForumPostReactionButton;
          const tmp = React3;
          if (name == null) {
            name = reaction.emoji.name;
          }
          return tmp(ForumPostReactionButton, obj, name);
        }),
  ,

    ];
    let tmp8 = additionalReactionCount > 0;
    const tmp6 = closure_5;
    const tmp7 = View;
    if (tmp8) {
      const obj4 = { count: additionalReactionCount, containerStyle: reactionContainerStyle, threadId: thread.id };
      tmp8 = closure_4(tmp3(9679).AdditionalReactionCount, obj4);
    }
    items1[1] = tmp8;
    let tmp10 = !disableReactionCreates;
    if (tmp10) {
      const obj5 = { containerStyle: reactionContainerStyle, threadId: thread.id };
      tmp10 = closure_4(tmp3(9679).AddReactionButton, obj5);
    }
    items1[2] = tmp10;
    tmp6Result = tmp6(tmp7, obj3);
  } else {
    tmp6Result = null;
  }
  return tmp6Result;
};
export const ForumPostActionBarReactions = function ForumPostActionBarReactions(thread) {
  let actionBarReaction;
  let additionalNonUniqueReactionCount;
  let containerStyle;
  let firstMessage;
  let items;
  let items1;
  let items2;
  let items3;
  let num;
  let parentChannel;
  let reactions;
  let tmp7Result;
  thread = thread.thread;
  const reactionContainerStyle = thread.reactionContainerStyle;
  ({ parentChannel, firstMessage, containerStyle } = thread);
  let tmp = closure_6();
  dependencyMap = tmp;
  const disableReactionCreates = reactionContainerStyle(10856)(thread).disableReactionCreates;
  let obj = { message: firstMessage, parentChannel, sorted: false, count: num };
  num = 2;
  const useSomeForumPostReactions = thread(7310).useSomeForumPostReactions;
  thread(7310);
  if (disableReactionCreates) {
    num = 3;
  }
  const someForumPostReactions = useSomeForumPostReactions(obj);
  ({ reactions, additionalNonUniqueReactionCount } = someForumPostReactions);
  if (0 !== reactions.length) {
    const obj2 = { style: items, children: items1 };
    items = [tmp.container, containerStyle];
    items1 = [
      reactions.map((reaction) => {
          let items;
          const obj = { containerStyle: items, thread, reaction, animateCount: false };
          items = [actionBarReaction.actionBarReaction, reactionContainerStyle];
          let name = reaction.emoji.id;
          const ForumPostReactionButton = ForumPostReactionButton2.ForumPostReactionButton;
          const tmp = React3;
          if (name == null) {
            name = reaction.emoji.name;
          }
          return tmp(ForumPostReactionButton, obj, name);
        }),
  ,

    ];
    let tmp9 = additionalNonUniqueReactionCount > 0;
    const tmp7 = closure_5;
    const tmp8 = View;
    if (tmp9) {
      const obj3 = { count: additionalNonUniqueReactionCount, containerStyle: items2, threadId: thread.id };
      items2 = [tmp.actionBarReaction, reactionContainerStyle];
      tmp9 = closure_4(tmp3(9679).AdditionalReactionCount, obj3);
    }
    items1[1] = tmp9;
    let tmp11 = !disableReactionCreates;
    if (tmp11) {
      const obj4 = { containerStyle: items3, threadId: thread.id };
      items3 = [tmp.actionBarReaction, reactionContainerStyle];
      tmp11 = closure_4(tmp3(9679).AddReactionButton, obj4);
    }
    items1[2] = tmp11;
    tmp7Result = tmp7(tmp8, obj2);
  } else {
    tmp7Result = null;
  }
  return tmp7Result;
};
export const MostCommonForumPostReaction = function MostCommonForumPostReaction(thread) {
  let disableReactionCreates;
  let disableReactionUpdates;
  let firstMessage;
  let locationAnalyticsObject;
  let parentChannel;
  thread = thread.thread;
  ({ parentChannel, firstMessage, locationAnalyticsObject } = thread);
  const tmp = closure_6();
  ({ disableReactionCreates, disableReactionUpdates } = useReactionPermissionsDefault(thread));
  useReactionPermissionsDefault(thread);
  const obj = ForumHooks;
  const first = obj.useSomeForumPostReactions({ parentChannel, message: firstMessage }).reactions[0];
  if (null != first) {
    if (!disableReactionUpdates) {
      let tmp7;
      if (!disableReactionCreates) {
        const obj2 = { containerStyle: tmp.mostCommonContainer, thread, reaction: first, locationAnalyticsObject, animateCount: false };
        tmp7 = React3(ForumPostReactionButton2.ForumPostReactionButton, obj2);
      } else {
        tmp7 = null;
      }
      return tmp7;
    }
  }
  return null;
};
