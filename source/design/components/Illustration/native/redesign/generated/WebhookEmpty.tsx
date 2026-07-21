// Module ID: 15402
// Function ID: 117511
// Name: getWebhookEmptySource
// Dependencies: []
// Exports: WebhookEmpty

// Module 15402 (getWebhookEmptySource)
function getWebhookEmptySource(theme) {
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
function useWebhookEmptySource() {
  return getWebhookEmptySource(arg1(dependencyMap[7]).useThemeContext().theme);
}
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export { getWebhookEmptySource };
export { useWebhookEmptySource };
export const WebhookEmpty = function WebhookEmpty(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useWebhookEmptySource();
  return <Image {...obj} />;
};
