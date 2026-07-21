// Module ID: 16065
// Function ID: 123464
// Name: getVerifyPhoneSource
// Dependencies: []
// Exports: VerifyPhone

// Module 16065 (getVerifyPhoneSource)
function getVerifyPhoneSource(theme) {
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
function useVerifyPhoneSource() {
  return getVerifyPhoneSource(arg1(dependencyMap[7]).useThemeContext().theme);
}
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export { getVerifyPhoneSource };
export { useVerifyPhoneSource };
export const VerifyPhone = function VerifyPhone(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useVerifyPhoneSource();
  return <Image {...obj} />;
};
