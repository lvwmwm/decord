// Module ID: 11102
// Function ID: 86374
// Name: useChatInputRefs
// Dependencies: []
// Exports: default

// Module 11102 (useChatInputRefs)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const DraftType = arg1(dependencyMap[2]).DraftType;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = arg1(dependencyMap[6]).updateChatInputContainerHeight;
const AnalyticEvents = arg1(dependencyMap[7]).AnalyticEvents;
const COMMAND_SENTINEL = arg1(dependencyMap[8]).COMMAND_SENTINEL;
const MessageSendLocation = arg1(dependencyMap[9]).MessageSendLocation;
const result = arg1(dependencyMap[34]).fileFinishedImporting("modules/chat_input/native/useChatInputRefs.tsx");

export default function useChatInputRefs(chatInputProps) {
  chatInputProps = chatInputProps.chatInputProps;
  const arg1 = chatInputProps;
  const importDefault = chatInputProps.chatInputTextFieldHeight;
  let closure_15;
  let closure_16;
  let closure_2 = React.useRef(null);
  const React = React.useRef(null);
  let closure_4 = React.useRef(null);
  let closure_5 = React.useRef(null);
  let closure_6 = React.useRef(null);
  let closure_7 = React.useRef(null);
  let closure_8 = React.useRef(null);
  let closure_9 = React.useRef(null);
  let closure_10 = React.useRef(new Map());
  const tmp2 = importDefault(closure_2[10])(() => chatInputProps(closure_2[11]).createInputRefTracker(chatInputProps.channel.id, chatInputProps.screenIndex));
  const COMMAND_SENTINEL = tmp2;
  let closure_12 = React.useRef(chatInputProps);
  let closure_13 = React.useRef(chatInputProps);
  const items = [chatInputProps];
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
  const items1 = [chatInputProps.channel.id];
  const effect1 = React.useEffect(() => {
    ref2.current.handledHereMention = false;
  }, items1);
  const items2 = [tmp2, chatInputProps.channel.id];
  const effect2 = React.useEffect(() => {
    tmp2.handleRef(ref3.current, chatInputProps.channel.id);
    return () => {
      closure_11.handleRef(null, channel.channel.id);
    };
  }, items2);
  let closure_14 = React.useRef(importDefault(closure_2[10])(() => ({ text: chatInputProps.defaultValue, textPrev: chatInputProps.defaultValue, textFieldHeight: chatInputTextFieldHeight })));
  closure_15 = React.useRef({ ty: null, nm: null });
  const items3 = [tmp2];
  const memo = React.useMemo(() => {
    let obj = chatInputTextFieldHeight(closure_2[12]);
    let closure_0 = obj.throttle((arg0, arg1) => {
      lib2(closure_2[13]).updateTextBlocks(currentUser.current, arg0, arg1);
    }, 200);
    const chatInputTextFieldHeight = chatInputTextFieldHeight(closure_2[12]).throttle((comment) => {
      const current = closure_13.current;
      const channel = current.channel;
      if (null == current.pendingEdit) {
        if (comment.length > 0) {
          if (!comment.startsWith(closure_11)) {
            lib2(closure_2[14]).startTyping(channel.id);
            const obj = lib2(closure_2[14]);
          }
          if (null == tmp) {
            if (!closure_15.current.handledHereMention) {
              const obj4 = lib(closure_2[15]);
              if (obj4.tryUpdateSubscriptionForHereMention(comment, obj5.getMaxMessageLength(), channel.guild_id, channel.id)) {
                closure_15.current.handledHereMention = true;
              }
              const obj5 = lib(closure_2[16]);
            }
            lib2(closure_2[17]).saveDraft(channel.id, comment, closure_5.ChannelMessage);
            const obj6 = lib2(closure_2[17]);
          } else {
            lib2(closure_2[17]).saveDraft(channel.id, comment, closure_5.FirstThreadMessage);
            const obj3 = lib2(closure_2[17]);
          }
        }
        lib2(closure_2[14]).stopTyping(channel.id);
        const obj2 = lib2(closure_2[14]);
      }
    }, 500);
    const obj2 = chatInputTextFieldHeight(closure_2[12]);
    closure_2 = chatInputTextFieldHeight(closure_2[12]).debounce((arg0) => {
      callback(closure_13.current.screenIndex, arg0);
    }, 32);
    obj = {
      backspace() {
        lib2(closure_2[13]).backspace(currentUser.current);
      },
      blur() {
        lib2(closure_2[13]).blur(currentUser.current);
      },
      chatInputTrackerRegister() {
        closure_11.register();
      },
      chatInputTrackerUnregister() {
        closure_11.unregister();
      },
      clearText() {
        const current = closure_16.current;
        if (null != current) {
          current.setText("");
        }
      },
      closeCustomKeyboard() {
        let obj = lib(closure_2[18]);
        const keyboardType = obj.getKeyboardType();
        if (keyboardType !== lib(closure_2[19]).KeyboardTypes.SYSTEM) {
          obj = { type: lib(closure_2[19]).KeyboardTypes.SYSTEM };
          lib(closure_2[20]).setKeyboardType(obj);
          const obj2 = lib(closure_2[20]);
        }
        if (!obj4.isAndroid()) {
          lib2(closure_2[13]).closeCustomKeyboard(currentUser.current);
          const obj5 = lib2(closure_2[13]);
        }
        const obj4 = lib(closure_2[21]);
        const result = lib(closure_2[22]).closePortalKeyboardRequest();
      },
      dismissKeyboard() {
        const result = lib(closure_2[23]).dismissGlobalKeyboard();
        const current = closure_16.current;
        if (null != current) {
          current.closeCustomKeyboard();
        }
      },
      flushPendingDraftSave() {
        lib2.flush();
      },
      focus() {
        lib2(closure_2[13]).focus(currentUser.current);
      },
      focusPhotosButton() {
        const current = ref.current;
        if (null != current) {
          current.focusPhotosButton();
        }
      },
      getApplicationCommandManager() {
        const current = ref2.current;
        let applicationCommandManager;
        if (null != current) {
          applicationCommandManager = current.getApplicationCommandManager();
        }
        return applicationCommandManager;
      },
      getText() {
        return closure_14.current.text;
      },
      handleCancelEditing() {
        const channel = closure_13.current.channel;
        lib2.cancel();
        const editingMessage = editingMessage.getEditingMessage(channel.id);
        if (null != editingMessage) {
          let obj = { message_id: editingMessage.id };
          ({ id: obj3.channel_id, guild_id: obj3.guild_id } = channel);
          obj.context_action = "edit";
          const obj2 = lib2(closure_2[24]);
          obj.reason = lib(closure_2[25]).getContextBarCancelReason("edit", "cancel");
          const currentUser = currentUser.getCurrentUser();
          let id;
          if (null != currentUser) {
            id = currentUser.id;
          }
          obj.is_own_message = id === editingMessage.author.id;
          obj2.track(closure_10.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj);
          obj = lib2(closure_2[26]);
          obj.endEditMessage(channel.id);
          const obj4 = lib(closure_2[25]);
        }
      },
      handlePressKey(arg0) {
        let channel;
        let pendingEdit;
        const current = closure_13.current;
        ({ pendingEdit, channel } = current);
        if ("\r" === arg0) {
          const current3 = closure_16.current;
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
              const current5 = closure_16.current;
              if (null != current5) {
                current5.handleSaveEditing();
              }
            }
          }
          if (!tmp) {
            const current4 = closure_16.current;
            if (null != current4) {
              current4.handleSend();
            }
          }
        } else if ("UIKeyInputEscape" === arg0) {
          if (null != pendingEdit) {
            const current2 = closure_16.current;
            if (null != current2) {
              current2.handleCancelEditing();
            }
          } else if (null != current.pendingReply) {
            lib(closure_2[27]).deletePendingReply(channel.id);
            const obj = lib(closure_2[27]);
          }
        }
      },
      handleSaveEditing(text) {
        function handleSaveEditing(text) {
          const channel = ref.current.channel;
          lib.cancel();
          const editingMessage = store.getEditingMessage(channel.id);
          if (null != editingMessage) {
            let obj = { channel, isEdit: true };
            const handleLegacyCommandsResult = callback(closure_2[28]).handleLegacyCommands(text, obj);
            let content;
            if (null != handleLegacyCommandsResult) {
              content = handleLegacyCommandsResult.content;
            }
            content = text;
            if (null != content) {
              content = handleLegacyCommandsResult.content;
            }
            if (content !== store.getEditingTextValue(channel.id)) {
              obj = lib(closure_2[29]);
              const parsed = obj.parse(channel, content);
              lib(closure_2[26]).editMessage(channel.id, editingMessage.id, parsed);
              const obj2 = lib(closure_2[26]);
            }
            const obj4 = callback(closure_2[28]);
            lib(closure_2[26]).endEditMessage(channel.id);
            const current = ref2.current;
            if (null != current) {
              current.showSideActions();
            }
            const obj3 = lib(closure_2[26]);
          }
        }
        if (null == text) {
          text = lib2(closure_2[13]).getText(currentUser.current, closure_10.current, handleSaveEditing);
          const obj = lib2(closure_2[13]);
        } else {
          handleSaveEditing(text);
        }
      },
      handleSend(message, arg1) {
        if (!closure_15.current.sending) {
          closure_15.current.sending = true;
          lib.cancel();
          const lib = threadCreationCallback;
          if (null != closure_13.current.threadCreationCallback) {
            const text = lib2(closure_2[13]).getText(currentUser.current, closure_10.current, (text) => {
              let obj = threadCreationCallback(closure_2[30]);
              obj = { text };
              obj = {};
              const merged = Object.assign(closure_13.current);
              obj["chatInputRef"] = closure_16;
              obj.params = obj;
              if (null != obj.chatInputValidateContentLength(obj)) {
                const obj1 = { text, threadCreationCallback };
                const result = threadCreationCallback(closure_2[30]).chatInputCreateThread(obj1);
                const obj4 = threadCreationCallback(closure_2[30]);
              }
            });
            closure_15.current.sending = false;
          } else {
            const current = closure_16.current;
            const applicationCommandManager = current.getApplicationCommandManager();
            let sendCommandResult;
            if (null != applicationCommandManager) {
              sendCommandResult = applicationCommandManager.sendCommand(closure_14.current.text, closure_13.current.channel, (command, optionValues) => {
                let obj = threadCreationCallback(closure_2[30]);
                obj = { applicationCommand: obj };
                obj = { command, optionValues };
                const obj1 = {};
                const merged = Object.assign(closure_13.current);
                obj1["chatInputRef"] = closure_16;
                obj.params = obj1;
                const result = obj.chatInputSendApplicationCommand(obj);
              });
            }
            if (!sendCommandResult) {
              const text1 = lib2(closure_2[13]).getText(currentUser.current, closure_10.current, (text) => {
                if (null != closure_13.current.pendingEdit) {
                  closure_1.cancel();
                  const current = ref.current;
                  if (null != current) {
                    current.handleSaveEditing(text);
                  }
                } else {
                  closure_1.cancel();
                  let obj = threadCreationCallback(closure_2[30]);
                  obj = { text };
                  obj = {};
                  const merged = Object.assign(closure_13.current);
                  obj["chatInputRef"] = ref;
                  obj.params = obj;
                  const result = obj.chatInputHandleSendText(obj);
                }
                const keyboardType = threadCreationCallback(closure_2[18]).getKeyboardType();
                if (keyboardType === threadCreationCallback(closure_2[19]).KeyboardTypes.SYSTEM) {
                  const current2 = ref.current;
                  current2.focus();
                }
              });
              const obj = lib2(closure_2[13]);
            }
            closure_15.current.sending = false;
          }
        }
      },
      handleSelectGIF(url) {
        let channel;
        let threadCreationCallback;
        url = url.url;
        const current = closure_13.current;
        ({ channel, threadCreationCallback } = current);
        let isChannelOnCooldownResult = closure_7.isChannelOnCooldown(channel);
        if (!isChannelOnCooldownResult) {
          isChannelOnCooldownResult = 0 === url.length;
        }
        if (!isChannelOnCooldownResult) {
          if (null != threadCreationCallback) {
            const result = threadCreationCallback(url);
          } else {
            let obj = lib2(closure_2[26]);
            const id = channel.id;
            const parsed = lib2(closure_2[29]).parse(channel, url);
            obj = {};
            const obj2 = lib2(closure_2[29]);
            const merged = Object.assign(lib2(closure_2[26]).getSendMessageOptionsForReply(current.pendingReply));
            obj["location"] = constants.GIF_REPLY;
            obj.sendMessage(id, parsed, true, obj);
            const obj4 = lib2(closure_2[26]);
            lib(closure_2[27]).deletePendingReply(channel.id);
            const obj5 = lib(closure_2[27]);
          }
          const current2 = closure_16.current;
          current2.dismissKeyboard();
        }
      },
      handleSelectSticker(sticker, arg1) {
        let channel;
        let threadCreationCallback;
        let current = sticker;
        const current2 = closure_13.current;
        ({ channel, threadCreationCallback } = current2);
        if (!closure_7.isChannelOnCooldown(channel)) {
          if (null != current) {
            if (!obj4.isStandardSticker(current)) {
              const text = closure_14.current.text;
              let sum = text;
              if (null != arg1) {
                const substr = text.slice(0, arg1);
                sum = substr + text.slice(tmp4);
              }
              let obj = lib(closure_2[30]);
              obj = { text: sum };
              obj = {};
              const merged = Object.assign(closure_13.current);
              obj["chatInputRef"] = closure_16;
              obj.params = obj;
              const result = obj.chatInputValidateContentLength(obj);
              if (null != result) {
                lib2.cancel();
                if (null != threadCreationCallback) {
                  const items = [current.id];
                  const result1 = threadCreationCallback(sum, items);
                } else {
                  const obj5 = lib2(closure_2[26]);
                  const id = channel.id;
                  const items1 = [current.id];
                  const obj1 = {};
                  const merged1 = Object.assign(lib2(closure_2[26]).getSendMessageOptionsForReply(current2.pendingReply));
                  obj1["location"] = constants.STICKER_REPLY;
                  obj5.sendStickers(id, items1, result, obj1);
                  const obj7 = lib2(closure_2[26]);
                  lib(closure_2[27]).deletePendingReply(channel.id);
                  const obj8 = lib(closure_2[27]);
                  lib2(closure_2[17]).saveDraft(channel.id, "", closure_5.ChannelMessage);
                  const current4 = closure_16.current;
                  if (null != current4) {
                    current4.clearText();
                  }
                  const current3 = closure_16.current;
                  if (null != current3) {
                    current3.showSideActions();
                  }
                  const obj9 = lib2(closure_2[17]);
                }
                current = closure_16.current;
                current.dismissKeyboard();
              }
            }
            const obj4 = lib(closure_2[31]);
          }
        }
      },
      hideSideActions() {
        const current = ref.current;
        if (null != current) {
          current.onDismissActions(closure_14.current.focused);
        }
        const current2 = obj.current;
        if (null != current2) {
          current2.onDismissActions(closure_14.current.focused);
        }
      },
      handleTextChanged(text) {
        lib2(text);
      },
      insertText(autocompleteResultText, arg1, arg2) {
        let selectionStart = arg1;
        if (null == arg1) {
          selectionStart = closure_14.current.selectionStart;
        }
        const current = closure_16.current;
        const obj = { location: selectionStart, length: closure_14.current.selectionEnd - selectionStart };
        let text = autocompleteResultText;
        if (arg2) {
          text = `${autocompleteResultText} `;
        }
        obj.text = text;
        const editId = closure_14.current.editId;
        let tmp3;
        if (null != editId) {
          tmp3 = editId;
        }
        obj.editId = tmp3;
        current.replaceRange(obj);
      },
      isFocused() {
        return closure_14.current.focused;
      },
      openCustomKeyboard(keyboardParams) {
        let channel;
        let secondaryTextFieldRef;
        ({ channel, secondaryTextFieldRef } = closure_13.current);
        lib2(closure_2[32])({ channelId: channel.id, chatInputRef: closure_16, chatInputNativeRef: closure_8, keyboardParams, secondaryTextFieldRef });
      },
      openSystemKeyboard() {
        let obj = lib(closure_2[18]);
        const keyboardType = obj.getKeyboardType();
        let keyboardIsOpen = keyboardType === lib(closure_2[19]).KeyboardTypes.SYSTEM;
        if (keyboardIsOpen) {
          let obj1 = lib(closure_2[33]);
          obj = { includeCustomKeyboard: false };
          keyboardIsOpen = obj1.getKeyboardIsOpen(obj);
        }
        if (!keyboardIsOpen) {
          obj = { type: lib(closure_2[19]).KeyboardTypes.SYSTEM };
          obj1 = { keyboardWillOpen: true };
          obj.context = obj1;
          lib(closure_2[20]).setKeyboardType(obj);
          const obj4 = lib(closure_2[20]);
          lib2(closure_2[13]).openSystemKeyboard(currentUser.current);
          const obj7 = lib2(closure_2[13]);
        }
      },
      replaceRange(arg0) {
        lib2(closure_2[13]).replaceRange(currentUser.current, arg0);
      },
      setSelectedRange(arg0, arg1) {
        lib2(closure_2[13]).setSelectedRange(currentUser.current, arg0, arg1);
      },
      setText(arg0) {
        lib2(closure_2[13]).setText(currentUser.current, arg0);
      },
      showSideActions() {
        const current = ref.current;
        if (null != current) {
          current.onShowActions(closure_14.current.focused);
        }
        const current2 = obj.current;
        if (null != current2) {
          current2.onShowActions(closure_14.current.focused);
        }
      },
      updateNativeTextBlocksThrottled(chatInputNodes, editId) {
        lib(chatInputNodes, editId);
      },
      updateChatInputContainerHeightDebounced(height) {
        ref(height);
      }
    };
    let closure_3 = obj;
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
  return React.useMemo(() => ({ chatInput: closure_16, chatInputCharCounter: closure_6, chatInputCover: closure_7, chatInputActions: closure_2, chatInputRightActions: closure_3, chatInputAutocomplete: closure_5, chatInputAppCommandManager: closure_4, chatInputNative: closure_8, chatInputSendButton: closure_9, chatInputTextFlushedResponses: closure_10, props: closure_13, propsPrev: closure_12, state: closure_14 }), []);
};
