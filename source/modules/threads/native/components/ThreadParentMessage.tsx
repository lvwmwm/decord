// Module ID: 15315
// Function ID: 116800
// Name: ThreadChannelStarterMessage
// Dependencies: [31, 6830, 4349, 33, 7621, 566, 4660, 1198, 9293, 2]
// Exports: ThreadChannelStarterMessage, ThreadCreationStarterMessage

// Module 15315 (ThreadChannelStarterMessage)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ReferencedMessageState } from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import importDefaultResult from "RowManager";

const require = arg1;
importDefaultResult = new importDefaultResult();
importDefaultResult.setOptions({ renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderEmbeds: true, ignoreMentioned: true, inlineAttachmentMedia: true, inlineEmbedMedia: true, renderReactions: false, renderReplies: true, renderThreadEmbeds: false });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/threads/native/components/ThreadParentMessage.tsx");

export const ThreadChannelStarterMessage = function ThreadChannelStarterMessage(arg0) {
  let dependencyMap;
  let importDefault;
  let require;
  ({ guildId: require, messageId: importDefault, channelId: dependencyMap } = arg0);
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getMessage(closure_2, closure_1));
  let state;
  if (null != stateFromStores) {
    state = stateFromStores.state;
  }
  let tmp3 = null;
  if (state === ReferencedMessageState.LOADED) {
    obj = {
      accessibilityRole: "button",
      onPress() {
          outer1_0(outer1_2[7]).transitionToGuild(closure_0, closure_2, closure_1);
        }
    };
    obj = { rowGenerator: closure_7, message: stateFromStores.message };
    obj.children = jsx(importDefault(9293), { rowGenerator: closure_7, message: stateFromStores.message });
    tmp3 = jsx(require(4660) /* PressableBase */.PressableOpacity, { rowGenerator: closure_7, message: stateFromStores.message });
  }
  return tmp3;
};
export const ThreadCreationStarterMessage = function ThreadCreationStarterMessage(arg0) {
  let importDefault;
  let require;
  ({ messageId: require, channelId: importDefault } = arg0);
  let obj = require(566) /* initialize */;
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getMessage(closure_1, closure_0));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { rowGenerator: closure_7, message: stateFromStores };
    tmp2 = jsx(importDefault(9293), { rowGenerator: closure_7, message: stateFromStores });
  }
  return tmp2;
};
