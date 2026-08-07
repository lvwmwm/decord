// Module ID: 15807
// Function ID: 15808
// Name: AutoArchiveDurationOptions
// Dependencies: [19, 1379, 21, 8296, 7925, 1236, 7924, 2]

// Module 15807 (AutoArchiveDurationOptions)
import { ChannelFlags } from "set";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo((channel) => {
  let description;
  let onSelectDuration;
  let selected;
  let title;
  channel = channel.channel;
  let _require;
  ({ title, description, selected, onSelectDuration } = channel);
  let obj = _require(8296);
  const autoArchiveOptions = obj.getAutoArchiveOptions();
  let hasFlagResult = null != channel && channel.isForumPost();
  if (hasFlagResult) {
    hasFlagResult = channel.hasFlag(ChannelFlags.PINNED);
  }
  _require = hasFlagResult;
  obj = { value: selected, title, description, accessibilityLabel: null, onChange: null, hasIcons: false, children: null };
  const intl = tmp(1236).intl;
  obj[3] = intl.string(_require(1236).t.H4mGfI);
  obj[4] = onSelectDuration;
  obj[6] = autoArchiveOptions.map((value) => outer1_3(_undefined(outer1_1[6]).TableRadioRow, { value: value.value, disabled: _undefined, label: value.label }, value.value));
  return jsx(_require(7925).TableRadioGroup, { value: selected, title, description, accessibilityLabel: null, onChange: null, hasIcons: false, children: null });
});
const result = require("jsxProd").fileFinishedImporting("modules/threads/native/components/ThreadAutoArchiveBottomSheet.tsx");

export const AutoArchiveDurationOptions = memoResult;
