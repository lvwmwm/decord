// Module ID: 7899
// Function ID: 62908
// Name: normal
// Dependencies: []

// Module 7899 (normal)
function normal(border) {
  const require = border;
  const obj = { border: border.colors.BORDER_SUBTLE, borderWidth: 1, fill: border.colors.CARD_SECONDARY_BG };
  const match = require(dependencyMap[0]).match(arg1);
  const str = require(dependencyMap[0]);
  obj.label = match.with(require(dependencyMap[1]).PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => arg0.colors.WHITE).otherwise(() => arg0.colors.TEXT_DEFAULT);
  obj.opacity = 1;
  obj.answerBackground = border.colors.BACKGROUND_MOD_MUTED;
  obj.answerFill = border.colors.BACKGROUND_MOD_SUBTLE;
  obj.radioStyle = require(dependencyMap[2]).PollRadioStyle.HOLLOW;
  obj.radioBackground = border.colors.INTERACTIVE_TEXT_ACTIVE;
  obj.radioForeground = border.colors.WHITE;
  return obj;
}
function normalVote(colors, arg1) {
  const obj = {};
  const merged = Object.assign(normal(colors, arg1));
  obj["borderWidth"] = 0;
  return obj;
}
function notVoted(colors, arg1) {
  const obj = {};
  const merged = Object.assign(normalVote(colors, arg1));
  obj["answerFill"] = colors.colors.INTERACTIVE_BACKGROUND_ACTIVE;
  obj["radioStyle"] = require(dependencyMap[2]).PollRadioStyle.NONE;
  return obj;
}
function victorNotSelected(colors, arg1) {
  const obj = {};
  const merged = Object.assign(normalVote(colors, arg1));
  obj["border"] = colors.colors.STATUS_POSITIVE;
  obj["borderWidth"] = 1;
  obj["answerFill"] = colors.colors.POLLS_VICTOR_FILL;
  obj["radioStyle"] = require(dependencyMap[2]).PollRadioStyle.NONE;
  return obj;
}
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/polls/chat/native/PollStyles.tsx");

export const pollStyleSets = {
  loserSelected(colors) {
    const obj = {};
    const merged = Object.assign(notVoted(colors, arg1));
    obj["radioStyle"] = require(dependencyMap[2]).PollRadioStyle.CHECKMARK;
    obj["radioBackground"] = colors.colors.INTERACTIVE_TEXT_ACTIVE;
    obj["radioForeground"] = colors.colors.BACKGROUND_BASE_LOW;
    return obj;
  },
  normal,
  notVoted,
  selected(colors) {
    const obj = {};
    const merged = Object.assign(normalVote(colors, arg1));
    obj["border"] = colors.colors.BACKGROUND_BRAND;
    obj["borderWidth"] = 1;
    obj["radioStyle"] = require(dependencyMap[2]).PollRadioStyle.FILLED;
    obj["radioBackground"] = colors.colors.REDESIGN_INPUT_CONTROL_SELECTED;
    obj["radioForeground"] = colors.colors.STATUS_POSITIVE_TEXT;
    return obj;
  },
  victorNotSelected,
  victorSelected(colors) {
    const obj = {};
    const merged = Object.assign(victorNotSelected(colors, arg1));
    obj["radioStyle"] = require(dependencyMap[2]).PollRadioStyle.CHECKMARK;
    obj["radioBackground"] = colors.colors.STATUS_POSITIVE;
    obj["radioForeground"] = colors.colors.STATUS_POSITIVE_TEXT;
    return obj;
  },
  voted(colors) {
    const obj = {};
    const merged = Object.assign(normalVote(colors, arg1));
    obj["border"] = colors.colors.BACKGROUND_BRAND;
    obj["borderWidth"] = 1;
    obj["answerFill"] = colors.colors.POLLS_VOTED_FILL;
    obj["radioStyle"] = require(dependencyMap[2]).PollRadioStyle.CHECKMARK;
    obj["radioBackground"] = colors.colors.REDESIGN_INPUT_CONTROL_SELECTED;
    obj["radioForeground"] = colors.colors.STATUS_POSITIVE_TEXT;
    return obj;
  },
  normalVote
};
