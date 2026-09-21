// Module ID: 8072
// Function ID: 8073
// Name: BurstReactionAnimationPreview
// Dependencies: [19, 21, 558, 568, 8010, 8073, 2]

// Module 8072 (BurstReactionAnimationPreview)
import c from "c" /* 568 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 8010 */;
import BurstReactionAnimationDefault from "BurstReactionAnimation" /* 8073 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimationPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp = dependencyMap;
  const cResult = c.c(4);
  ({ channelId, emoji, messageId, reactionType } = arg0);
  if (reactionType !== MessageReactionsTypes.ReactionTypes.BURST) {
    return null;
  } else {
    if (cResult[0] === channelId) {
      if (cResult[1] === emoji) {
      }
    }
    const obj2 = { isFullscreen: true, channelId, messageId, emoji };
    tmp = jsx(BurstReactionAnimationDefault, { isFullscreen: true, channelId, messageId, emoji });
    cResult[0] = channelId;
    cResult[1] = emoji;
    cResult[2] = messageId;
    cResult[3] = tmp;
  }
}) : ((arg0) => {
  ({ channelId, emoji, messageId, reactionType } = arg0);
  let tmp2 = null;
  if (reactionType === MessageReactionsTypes.ReactionTypes.BURST) {
    const obj = { isFullscreen: true, channelId, messageId, emoji };
    tmp2 = jsx(BurstReactionAnimationDefault, { isFullscreen: true, channelId, messageId, emoji });
  }
  return tmp2;
});
