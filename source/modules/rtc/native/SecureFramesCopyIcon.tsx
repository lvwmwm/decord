// Module ID: 8907
// Function ID: 70296
// Name: SecureFramesCopyIcon
// Dependencies: []
// Exports: default

// Module 8907 (SecureFramesCopyIcon)
let closure_2 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/rtc/native/SecureFramesCopyIcon.tsx");

export default function SecureFramesCopyIcon(chunks) {
  chunks = chunks.chunks;
  const arg1 = chunks;
  const items = [chunks];
  const memo = React.useMemo(() => chunks.join(" "), items);
  const dependencyMap = memo;
  const items1 = [memo];
  const callback = React.useCallback(() => {
    const result = chunks(memo[2]).presentCopiedToClipboard();
    const obj = chunks(memo[2]);
    chunks(memo[3]).copy(memo);
  }, items1);
  const obj = { icon: jsx(arg1(dependencyMap[5]).CopyIcon, { size: "sm" }), variant: "secondary", onPress: callback };
  const intl = arg1(dependencyMap[6]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[6]).t.e7GWjQ);
  obj.size = "sm";
  return jsx(arg1(dependencyMap[4]).IconButton, obj);
};
