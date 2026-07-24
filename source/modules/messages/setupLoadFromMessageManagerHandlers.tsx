// Module ID: 16151
// Function ID: 125169
// Name: setupLoadFromMessageManagerHandlers
// Dependencies: [2]
// Exports: default

// Module 16151 (setupLoadFromMessageManagerHandlers)
const result = require("set").fileFinishedImporting("modules/messages/setupLoadFromMessageManagerHandlers.tsx");

export default function setupLoadFromMessageManagerHandlers(actions) {
  let obj = arg2;
  let closure_0 = arg1;
  if (arg2 === undefined) {
    obj = {};
  }
  let onBeforeBatch;
  let set;
  function handleCallbackIfLoaded(message) {
    let hasItem = null != message.channel_id;
    if (hasItem) {
      hasItem = set.has(message.channel_id);
    }
    if (hasItem) {
      callback(message);
    }
  }
  function handleMessage(message) {
    message = message.message;
    let hasItem = null != message.channel_id;
    if (hasItem) {
      hasItem = set.has(message.channel_id);
    }
    if (hasItem) {
      if (null != onBeforeBatch) {
        onBeforeBatch();
      }
      handleCallbackIfLoaded(message);
    }
  }
  function handleLoadMessages(messages) {
    messages = messages.messages;
    set.add(messages.channelId);
    if (null != onBeforeBatch) {
      onBeforeBatch();
    }
    const item = messages.forEach((arg0) => {
      outer1_3(arg0);
    });
  }
  function handleSearchMessagesSuccess(data) {
    data = data.data;
    if (null != onBeforeBatch) {
      onBeforeBatch();
    }
    let item = data.forEach((messages) => {
      messages = messages.messages;
      let item = messages.forEach((arr) => {
        const item = arr.forEach((arg0) => outer3_0(arg0));
      });
    });
  }
  onBeforeBatch = obj.onBeforeBatch;
  set = new Set();
  obj = {};
  const merged = Object.assign(actions.actions);
  obj["POST_CONNECTION_OPEN"] = function POST_CONNECTION_OPEN() {
    set.clear();
  };
  obj["MESSAGE_CREATE"] = { callback: handleMessage, autoSubscribe: false };
  obj["MESSAGE_UPDATE"] = handleMessage;
  obj["LOAD_MESSAGES_SUCCESS"] = handleLoadMessages;
  obj["LOAD_MESSAGES_AROUND_SUCCESS"] = handleLoadMessages;
  obj["LOAD_RECENT_MENTIONS_SUCCESS"] = function LOAD_RECENT_MENTIONS_SUCCESS(messages) {
    messages = messages.messages;
    if (null != onBeforeBatch) {
      onBeforeBatch();
    }
    const item = messages.forEach((arg0) => outer1_0(arg0));
  };
  obj["LOAD_PINNED_MESSAGES_SUCCESS"] = function LOAD_PINNED_MESSAGES_SUCCESS(pins) {
    pins = pins.pins;
    if (null != onBeforeBatch) {
      onBeforeBatch();
    }
    const item = pins.forEach((message) => outer1_0(message.message));
  };
  obj["SEARCH_MESSAGES_SUCCESS"] = handleSearchMessagesSuccess;
  obj["MOD_VIEW_SEARCH_MESSAGES_SUCCESS"] = handleSearchMessagesSuccess;
  obj = {
    callback(channelId) {
      channelId = channelId.channelId;
      if (null != channelId) {
        set.add(channelId);
      }
    },
    autoSubscribe: false
  };
  obj["CHANNEL_SELECT"] = obj;
  actions.actions = obj;
};
