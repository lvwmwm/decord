// Module ID: 11113
// Function ID: 86437
// Name: useChatInputRefs
// Dependencies: [31, 5035, 4468, 6923, 6928, 1849, 9313, 653, 4567, 4123, 5450, 3989, 22, 11114, 11118, 11119, 7934, 7019, 3996, 1555, 1454, 477, 3997, 1820, 675, 9542, 6691, 9544, 11120, 6924, 11121, 4466, 11153, 5784, 2]
// Exports: default

// Module 11113 (useChatInputRefs)
import getStickerPackPreviewSticker from "getStickerPackPreviewSticker";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { DraftType } from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { updateChatInputContainerHeight as closure_9 } from "getChatInputContainerHeight";
import { AnalyticEvents } from "ME";
import { COMMAND_SENTINEL } from "MENTION_SENTINEL";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/chat_input/native/useChatInputRefs.tsx");

export default function useChatInputRefs(chatInputProps) {
  chatInputProps = chatInputProps.chatInputProps;
  const chatInputTextFieldHeight = chatInputProps.chatInputTextFieldHeight;
  let closure_15;
  let closure_16;
  let dependencyMap = React.useRef(null);
  React = React.useRef(null);
  let _isNativeReflectConstruct = React.useRef(null);
  let closure_5 = React.useRef(null);
  let closure_6 = React.useRef(null);
  let closure_7 = React.useRef(null);
  let closure_8 = React.useRef(null);
  let closure_9 = React.useRef(null);
  let closure_10 = React.useRef(new Map());
  const tmp2 = chatInputTextFieldHeight(5450)(() => chatInputProps(3989).createInputRefTracker(chatInputProps.channel.id, chatInputProps.screenIndex));
  const COMMAND_SENTINEL = tmp2;
  let closure_12 = React.useRef(chatInputProps);
  let closure_13 = React.useRef(chatInputProps);
  let items = [chatInputProps];
  const effect = React.useEffect(() => {
    if (ref.current.channel.id !== chatInputProps.channel.id) {
      const current = ref3.current;
      if (null != current) {
        const result = current.flushPendingDraftSave();
      }
    }
    closure_12.current = ref.current;
    ref.current = chatInputProps;
  }, items);
  let items1 = [chatInputProps.channel.id];
  const effect1 = React.useEffect(() => {
    ref2.current.handledHereMention = false;
  }, items1);
  const items2 = [tmp2, chatInputProps.channel.id];
  const effect2 = React.useEffect(() => {
    tmp2.handleRef(ref3.current, chatInputProps.channel.id);
    return () => {
      outer1_11.handleRef(null, outer1_0.channel.id);
    };
  }, items2);
  let closure_14 = React.useRef(chatInputTextFieldHeight(5450)(() => {
    const obj = { editId: null, focused: false, selectionStart: 0, selectionEnd: 0, text: null, textPrev: null, textFieldContentSize: 0 };
    ({ defaultValue: obj.text, defaultValue: obj.textPrev } = chatInputProps);
    obj.textFieldHeight = chatInputTextFieldHeight;
    return obj;
  }));
  closure_15 = React.useRef({ handledHereMention: false, sending: false });
  const items3 = [tmp2];
  const memo = React.useMemo(() => {
    let obj = chatInputTextFieldHeight(22);
    let closure_0 = obj.throttle((arg0, arg1) => {
      chatInputTextFieldHeight(ref[13]).updateTextBlocks(outer1_8.current, arg0, arg1);
    }, 200);
    let closure_1 = chatInputTextFieldHeight(22).throttle((comment) => {
      const current = outer1_13.current;
      const channel = current.channel;
      if (null == current.pendingEdit) {
        if (comment.length > 0) {
          if (!comment.startsWith(closure_11)) {
            chatInputTextFieldHeight(ref[14]).startTyping(channel.id);
            const obj = chatInputTextFieldHeight(ref[14]);
          }
          if (null == tmp) {
            if (!outer1_15.current.handledHereMention) {
              const obj4 = chatInputProps(ref[15]);
              if (obj4.tryUpdateSubscriptionForHereMention(comment, obj5.getMaxMessageLength(), channel.guild_id, channel.id)) {
                outer1_15.current.handledHereMention = true;
              }
              obj5 = chatInputProps(ref[16]);
            }
            chatInputTextFieldHeight(ref[17]).saveDraft(channel.id, comment, closure_5.ChannelMessage);
            const obj6 = chatInputTextFieldHeight(ref[17]);
          } else {
            chatInputTextFieldHeight(ref[17]).saveDraft(channel.id, comment, closure_5.FirstThreadMessage);
            const obj3 = chatInputTextFieldHeight(ref[17]);
          }
        }
        chatInputTextFieldHeight(ref[14]).stopTyping(channel.id);
        const obj2 = chatInputTextFieldHeight(ref[14]);
      }
    }, 500);
    let obj2 = chatInputTextFieldHeight(22);
    const dependencyMap = chatInputTextFieldHeight(22).debounce((arg0) => {
      callback2(outer1_13.current.screenIndex, arg0);
    }, 32);
    obj = {
      backspace() {
        chatInputTextFieldHeight(ref[13]).backspace(outer1_8.current);
      },
      blur() {
        chatInputTextFieldHeight(ref[13]).blur(outer1_8.current);
      },
      chatInputTrackerRegister() {
        outer1_11.register();
      },
      chatInputTrackerUnregister() {
        outer1_11.unregister();
      },
      clearText() {
        const current = outer1_16.current;
        if (null != current) {
          current.setText("");
        }
      },
      closeCustomKeyboard() {
        let obj = chatInputProps(ref[18]);
        const keyboardType = obj.getKeyboardType();
        if (keyboardType !== chatInputProps(ref[19]).KeyboardTypes.SYSTEM) {
          obj = { type: chatInputProps(ref[19]).KeyboardTypes.SYSTEM };
          chatInputProps(ref[20]).setKeyboardType(obj);
          const obj2 = chatInputProps(ref[20]);
        }
        if (!obj4.isAndroid()) {
          chatInputTextFieldHeight(ref[13]).closeCustomKeyboard(outer1_8.current);
          const obj5 = chatInputTextFieldHeight(ref[13]);
        }
        obj4 = chatInputProps(ref[21]);
        const result = chatInputProps(ref[22]).closePortalKeyboardRequest();
      },
      dismissKeyboard() {
        const result = chatInputProps(ref[23]).dismissGlobalKeyboard();
        const current = outer1_16.current;
        if (null != current) {
          current.closeCustomKeyboard();
        }
      },
      flushPendingDraftSave() {
        lib.flush();
      },
      focus() {
        chatInputTextFieldHeight(ref[13]).focus(outer1_8.current);
      },
      focusPhotosButton() {
        const current = ref.current;
        if (null != current) {
          current.focusPhotosButton();
        }
      },
      getApplicationCommandManager() {
        const current = outer1_4.current;
        let applicationCommandManager;
        if (null != current) {
          applicationCommandManager = current.getApplicationCommandManager();
        }
        return applicationCommandManager;
      },
      getText() {
        return outer1_14.current.text;
      },
      handleCancelEditing() {
        const channel = outer1_13.current.channel;
        lib.cancel();
        editingMessage = editingMessage.getEditingMessage(channel.id);
        if (null != editingMessage) {
          let obj = { message_id: editingMessage.id };
          ({ id: obj3.channel_id, guild_id: obj3.guild_id } = channel);
          obj.context_action = "edit";
          const obj2 = chatInputTextFieldHeight(ref[24]);
          obj.reason = chatInputProps(ref[25]).getContextBarCancelReason("edit", "cancel");
          currentUser = currentUser.getCurrentUser();
          let id;
          if (null != currentUser) {
            id = currentUser.id;
          }
          obj.is_own_message = id === editingMessage.author.id;
          obj2.track(constants.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj);
          obj = chatInputTextFieldHeight(ref[26]);
          obj.endEditMessage(channel.id);
          const obj4 = chatInputProps(ref[25]);
        }
      },
      handlePressKey(arg0) {
        let channel;
        let pendingEdit;
        const current = outer1_13.current;
        ({ pendingEdit, channel } = current);
        if ("\r" === arg0) {
          const current3 = outer1_16.current;
          let text;
          if (null != current3) {
            text = current3.getText();
          }
          let str2 = "";
          if (null != text) {
            str2 = text;
          }
          if (str2.trim().length > 0) {
            if (null != pendingEdit) {
              const current5 = outer1_16.current;
              if (null != current5) {
                current5.handleSaveEditing();
              }
            }
          }
          if (!tmp) {
            const current4 = outer1_16.current;
            if (null != current4) {
              current4.handleSend();
            }
          }
        } else if ("UIKeyInputEscape" === arg0) {
          if (null != pendingEdit) {
            const current2 = outer1_16.current;
            if (null != current2) {
              current2.handleCancelEditing();
            }
          } else if (null != current.pendingReply) {
            chatInputProps(ref[27]).deletePendingReply(channel.id);
            const obj = chatInputProps(ref[27]);
          }
        }
      },
      handleSaveEditing(text) {
        function handleSaveEditing(text) {
          const channel = outer2_13.current.channel;
          outer1_1.cancel();
          const editingMessage = store.getEditingMessage(channel.id);
          if (null != editingMessage) {
            let obj = { channel, isEdit: true };
            const handleLegacyCommandsResult = chatInputProps(11120).handleLegacyCommands(text, obj);
            let content;
            if (null != handleLegacyCommandsResult) {
              content = handleLegacyCommandsResult.content;
            }
            content = text;
            if (null != content) {
              content = handleLegacyCommandsResult.content;
            }
            if (content !== store.getEditingTextValue(channel.id)) {
              obj = chatInputTextFieldHeight(6924);
              const parsed = obj.parse(channel, content);
              chatInputTextFieldHeight(6691).editMessage(channel.id, editingMessage.id, parsed);
              const obj2 = chatInputTextFieldHeight(6691);
            }
            const obj4 = chatInputProps(11120);
            chatInputTextFieldHeight(6691).endEditMessage(channel.id);
            const current = outer2_16.current;
            if (null != current) {
              current.showSideActions();
            }
            const obj3 = chatInputTextFieldHeight(6691);
          }
        }
        if (null == text) {
          text = chatInputTextFieldHeight(ref[13]).getText(outer1_8.current, outer1_10.current, handleSaveEditing);
          let obj = chatInputTextFieldHeight(ref[13]);
        } else {
          handleSaveEditing(text);
        }
      },
      handleSend(message, arg1) {
        if (!outer1_15.current.sending) {
          outer1_15.current.sending = true;
          threadCreationCallback.cancel();
          threadCreationCallback = outer1_13.current.threadCreationCallback;
          if (null != threadCreationCallback) {
            const text = chatInputTextFieldHeight(ref[13]).getText(outer1_8.current, outer1_10.current, (text) => {
              let obj = chatInputProps(11121);
              obj = { text };
              obj = {};
              const merged = Object.assign(outer2_13.current);
              obj["chatInputRef"] = outer2_16;
              obj.params = obj;
              if (null != obj.chatInputValidateContentLength(obj)) {
                const obj1 = { text, threadCreationCallback };
                const result = chatInputProps(11121).chatInputCreateThread(obj1);
                const obj4 = chatInputProps(11121);
              }
            });
            outer1_15.current.sending = false;
          } else {
            let current = outer1_16.current;
            const applicationCommandManager = current.getApplicationCommandManager();
            let sendCommandResult;
            if (null != applicationCommandManager) {
              sendCommandResult = applicationCommandManager.sendCommand(outer1_14.current.text, outer1_13.current.channel, (command, optionValues) => {
                let obj = chatInputProps(11121);
                obj = { applicationCommand: obj };
                obj = { command, optionValues };
                const obj1 = {};
                const merged = Object.assign(outer2_13.current);
                obj1["chatInputRef"] = outer2_16;
                obj.params = obj1;
                const result = obj.chatInputSendApplicationCommand(obj);
              });
            }
            if (!sendCommandResult) {
              const text1 = chatInputTextFieldHeight(ref[13]).getText(outer1_8.current, outer1_10.current, (text) => {
                if (null != outer2_13.current.pendingEdit) {
                  outer1_1.cancel();
                  const current = outer2_16.current;
                  if (null != current) {
                    current.handleSaveEditing(text);
                  }
                } else {
                  outer1_1.cancel();
                  let obj = chatInputProps(11121);
                  obj = { text };
                  obj = {};
                  const merged = Object.assign(outer2_13.current);
                  obj["chatInputRef"] = outer2_16;
                  obj.params = obj;
                  const result = obj.chatInputHandleSendText(obj);
                }
                const keyboardType = chatInputProps(3996).getKeyboardType();
                if (keyboardType === chatInputProps(1555).KeyboardTypes.SYSTEM) {
                  const current2 = outer2_16.current;
                  current2.focus();
                }
              });
              let obj = chatInputTextFieldHeight(ref[13]);
            }
            outer1_15.current.sending = false;
          }
        }
      },
      handleSelectGIF(url) {
        let channel;
        let threadCreationCallback;
        url = url.url;
        const current = outer1_13.current;
        ({ channel, threadCreationCallback } = current);
        let isChannelOnCooldownResult = closure_7.isChannelOnCooldown(channel);
        if (!isChannelOnCooldownResult) {
          isChannelOnCooldownResult = 0 === url.length;
        }
        if (!isChannelOnCooldownResult) {
          if (null != threadCreationCallback) {
            const result = threadCreationCallback(url);
          } else {
            let obj = chatInputTextFieldHeight(ref[26]);
            const id = channel.id;
            const parsed = chatInputTextFieldHeight(ref[29]).parse(channel, url);
            obj = {};
            const obj2 = chatInputTextFieldHeight(ref[29]);
            const merged = Object.assign(chatInputTextFieldHeight(ref[26]).getSendMessageOptionsForReply(current.pendingReply));
            obj["location"] = constants2.GIF_REPLY;
            obj.sendMessage(id, parsed, true, obj);
            const obj4 = chatInputTextFieldHeight(ref[26]);
            chatInputProps(ref[27]).deletePendingReply(channel.id);
            const obj5 = chatInputProps(ref[27]);
          }
          const current2 = outer1_16.current;
          current2.dismissKeyboard();
        }
      },
      handleSelectSticker(sticker, arg1) {
        let channel;
        let threadCreationCallback;
        let current = sticker;
        const current2 = outer1_13.current;
        ({ channel, threadCreationCallback } = current2);
        if (!closure_7.isChannelOnCooldown(channel)) {
          if (null != current) {
            if (!obj4.isStandardSticker(current)) {
              const text = outer1_14.current.text;
              let sum = text;
              if (null != arg1) {
                const substr = text.slice(0, arg1);
                sum = substr + text.slice(tmp4);
              }
              let obj = chatInputProps(ref[30]);
              obj = { text: sum };
              obj = {};
              const merged = Object.assign(outer1_13.current);
              obj["chatInputRef"] = outer1_16;
              obj.params = obj;
              const result = obj.chatInputValidateContentLength(obj);
              if (null != result) {
                lib.cancel();
                if (null != threadCreationCallback) {
                  const items = [current.id];
                  const result1 = threadCreationCallback(sum, items);
                } else {
                  const obj5 = chatInputTextFieldHeight(ref[26]);
                  const id = channel.id;
                  const items1 = [current.id];
                  const obj1 = {};
                  const merged1 = Object.assign(chatInputTextFieldHeight(ref[26]).getSendMessageOptionsForReply(current2.pendingReply));
                  obj1["location"] = constants2.STICKER_REPLY;
                  obj5.sendStickers(id, items1, result, obj1);
                  const obj7 = chatInputTextFieldHeight(ref[26]);
                  chatInputProps(ref[27]).deletePendingReply(channel.id);
                  const obj8 = chatInputProps(ref[27]);
                  chatInputTextFieldHeight(ref[17]).saveDraft(channel.id, "", closure_5.ChannelMessage);
                  const current4 = outer1_16.current;
                  if (null != current4) {
                    current4.clearText();
                  }
                  const current3 = outer1_16.current;
                  if (null != current3) {
                    current3.showSideActions();
                  }
                  const obj9 = chatInputTextFieldHeight(ref[17]);
                }
                current = outer1_16.current;
                current.dismissKeyboard();
              }
            }
            obj4 = chatInputProps(ref[31]);
          }
        }
      },
      hideSideActions() {
        const current = ref.current;
        if (null != current) {
          current.onDismissActions(outer1_14.current.focused);
        }
        const current2 = obj.current;
        if (null != current2) {
          current2.onDismissActions(outer1_14.current.focused);
        }
      },
      handleTextChanged(text) {
        lib(text);
      },
      insertText(autocompleteResultText, arg1, arg2) {
        let selectionStart = arg1;
        if (null == arg1) {
          selectionStart = outer1_14.current.selectionStart;
        }
        const current = outer1_16.current;
        const obj = { location: selectionStart, length: outer1_14.current.selectionEnd - selectionStart };
        let text = autocompleteResultText;
        if (arg2) {
          text = `${autocompleteResultText} `;
        }
        obj.text = text;
        const editId = outer1_14.current.editId;
        let tmp3;
        if (null != editId) {
          tmp3 = editId;
        }
        obj.editId = tmp3;
        current.replaceRange(obj);
      },
      isFocused() {
        return outer1_14.current.focused;
      },
      openCustomKeyboard(keyboardParams) {
        let channel;
        let secondaryTextFieldRef;
        ({ channel, secondaryTextFieldRef } = outer1_13.current);
        chatInputTextFieldHeight(ref[32])({ channelId: channel.id, chatInputRef: outer1_16, chatInputNativeRef: outer1_8, keyboardParams, secondaryTextFieldRef });
      },
      openSystemKeyboard() {
        let obj = chatInputProps(ref[18]);
        const keyboardType = obj.getKeyboardType();
        let keyboardIsOpen = keyboardType === chatInputProps(ref[19]).KeyboardTypes.SYSTEM;
        if (keyboardIsOpen) {
          let obj1 = chatInputProps(ref[33]);
          obj = { includeCustomKeyboard: false };
          keyboardIsOpen = obj1.getKeyboardIsOpen(obj);
        }
        if (!keyboardIsOpen) {
          obj = { type: chatInputProps(ref[19]).KeyboardTypes.SYSTEM };
          obj1 = { keyboardWillOpen: true };
          obj.context = obj1;
          chatInputProps(ref[20]).setKeyboardType(obj);
          const obj4 = chatInputProps(ref[20]);
          chatInputTextFieldHeight(ref[13]).openSystemKeyboard(outer1_8.current);
          const obj7 = chatInputTextFieldHeight(ref[13]);
        }
      },
      replaceRange(arg0) {
        chatInputTextFieldHeight(ref[13]).replaceRange(outer1_8.current, arg0);
      },
      setSelectedRange(arg0, arg1) {
        chatInputTextFieldHeight(ref[13]).setSelectedRange(outer1_8.current, arg0, arg1);
      },
      setText(arg0) {
        chatInputTextFieldHeight(ref[13]).setText(outer1_8.current, arg0);
      },
      showSideActions() {
        const current = ref.current;
        if (null != current) {
          current.onShowActions(outer1_14.current.focused);
        }
        const current2 = obj.current;
        if (null != current2) {
          current2.onShowActions(outer1_14.current.focused);
        }
      },
      updateNativeTextBlocksThrottled(chatInputNodes, editId) {
        callback(chatInputNodes, editId);
      },
      updateChatInputContainerHeightDebounced(height) {
        ref(height);
      }
    };
    obj = {
      chatInputRefObject: obj,
      chatInputRefObjectCallback() {
        return obj;
      }
    };
    return obj;
  }, items3);
  closure_16 = React.useRef(memo.chatInputRefObject);
  const imperativeHandle = React.useImperativeHandle(chatInputProps.ref, memo.chatInputRefObjectCallback);
  return React.useMemo(() => ({ chatInput: closure_16, chatInputCharCounter: closure_6, chatInputCover: closure_7, chatInputActions: closure_2, chatInputRightActions: getStickerPackPreviewSticker, chatInputAutocomplete: closure_5, chatInputAppCommandManager: _isNativeReflectConstruct, chatInputNative: closure_8, chatInputSendButton: closure_9, chatInputTextFlushedResponses: closure_10, props: closure_13, propsPrev: closure_12, state: closure_14 }), []);
};
