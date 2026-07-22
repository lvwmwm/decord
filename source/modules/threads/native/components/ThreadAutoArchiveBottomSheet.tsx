// Module ID: 15385
// Function ID: 117267
// Name: AutoArchiveDurationOptions
// Dependencies: []

// Module 15385 (AutoArchiveDurationOptions)
const ChannelFlags = arg1(dependencyMap[1]).ChannelFlags;
const jsx = arg1(dependencyMap[2]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo((channel) => {
  let description;
  let onSelectDuration;
  let selected;
  let title;
  channel = channel.channel;
  let arg1;
  ({ title, description, selected, onSelectDuration } = channel);
  let obj = arg1(dependencyMap[3]);
  const autoArchiveOptions = obj.getAutoArchiveOptions();
  let hasFlagResult = null != channel && channel.isForumPost();
  if (hasFlagResult) {
    hasFlagResult = channel.hasFlag(ChannelFlags.PINNED);
  }
  arg1 = hasFlagResult;
  obj = { value: selected, title, description };
  const intl = arg1(dependencyMap[5]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[5]).t.H4mGfI);
  obj.onChange = onSelectDuration;
  obj.hasIcons = false;
  obj.children = autoArchiveOptions.map((value) => callback(hasFlagResult(closure_1[6]).TableRadioRow, { value: value.value, disabled: hasFlagResult, label: value.label }, value.value));
  return jsx(arg1(dependencyMap[4]).TableRadioGroup, obj);
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/threads/native/components/ThreadAutoArchiveBottomSheet.tsx");

export const AutoArchiveDurationOptions = memoResult;
