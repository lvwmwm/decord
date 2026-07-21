// Module ID: 16134
// Function ID: 124395
// Name: getEmptyServerSettingsEmojiSource
// Dependencies: []
// Exports: EmptyServerSettingsEmoji

// Module 16134 (getEmptyServerSettingsEmojiSource)
function getEmptyServerSettingsEmojiSource(theme) {
  let obj = arg1(dependencyMap[3]);
  obj = {
    dark() {
      return callback(closure_1[4]);
    },
    darker() {
      return callback(closure_1[5]);
    },
    light() {
      return callback(closure_1[6]);
    }
  };
  return obj.getIllustrationSource(theme, obj);
}
function useEmptyServerSettingsEmojiSource() {
  return getEmptyServerSettingsEmojiSource(arg1(dependencyMap[7]).useThemeContext().theme);
}
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx");

export { getEmptyServerSettingsEmojiSource };
export { useEmptyServerSettingsEmojiSource };
export const EmptyServerSettingsEmoji = function EmptyServerSettingsEmoji(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useEmptyServerSettingsEmojiSource();
  return <Image {...obj} />;
};
