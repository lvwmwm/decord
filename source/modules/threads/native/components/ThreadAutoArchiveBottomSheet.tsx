// Module ID: 15572
// Function ID: 119940
// Name: AutoArchiveDurationOptions
// Dependencies: [31, 1355, 33, 6133, 7596, 1212, 7595, 2]

// Module 15572 (AutoArchiveDurationOptions)
import { ChannelFlags } from "set";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo((channel) => {
  let description;
  let onSelectDuration;
  let selected;
  let title;
  channel = channel.channel;
  let _require;
  ({ title, description, selected, onSelectDuration } = channel);
  let obj = _require(6133);
  const autoArchiveOptions = obj.getAutoArchiveOptions();
  let hasFlagResult = null != channel && channel.isForumPost();
  if (hasFlagResult) {
    hasFlagResult = channel.hasFlag(ChannelFlags.PINNED);
  }
  _require = hasFlagResult;
  obj = { value: selected, title, description };
  const intl = _require(1212).intl;
  obj.accessibilityLabel = intl.string(_require(1212).t.H4mGfI);
  obj.onChange = onSelectDuration;
  obj.hasIcons = false;
  obj.children = autoArchiveOptions.map((value) => outer1_3(_undefined(outer1_1[6]).TableRadioRow, { value: value.value, disabled: _undefined, label: value.label }, value.value));
  return jsx(_require(7596).TableRadioGroup, { value: selected, title, description });
});
const result = require("jsxProd").fileFinishedImporting("modules/threads/native/components/ThreadAutoArchiveBottomSheet.tsx");

export const AutoArchiveDurationOptions = memoResult;
