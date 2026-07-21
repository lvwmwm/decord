// Module ID: 15236
// Function ID: 115043
// Name: FileOrLinkGridPlaceholderItem
// Dependencies: []
// Exports: default

// Module 15236 (FileOrLinkGridPlaceholderItem)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/FileOrLinkGridPlaceholder.tsx");

export default function FileOrLinkGridPlaceholderItem(imageStyle) {
  imageStyle = imageStyle.imageStyle;
  let obj = arg1(dependencyMap[2]);
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  const width = imageStyle.width;
  const arg1 = width;
  const sum = imageStyle.height + 108 * arg1(dependencyMap[3]).useFontScale();
  const importDefault = sum;
  const items = [width, sum];
  const memo = React.useMemo(() => ({ width, height: sum }), items);
  obj = { style: items1, pointerEvents: "none" };
  const items1 = [imageStyle.containerStyle, placeholderAnimatedStyle];
  obj.children = jsx(arg1(dependencyMap[5]).SearchListCardContainer, { containerStyle: memo });
  return jsx(importDefault(dependencyMap[4]).View, obj);
};
