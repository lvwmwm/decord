// Module ID: 391
// Function ID: 5733
// Name: get FlatList
// Dependencies: []

// Module 391 (get FlatList)
if (importDefault(dependencyMap[0]).isDisableAnimations) {
  let importDefaultResult = importDefault(dependencyMap[1]);
} else {
  importDefaultResult = importDefault(dependencyMap[2]);
}
const obj = {};
Object.defineProperty(obj, "FlatList", { get: () => arg1(dependencyMap[3]).default, set: undefined });
Object.defineProperty(obj, "Image", { get: () => arg1(dependencyMap[4]).default, set: undefined });
Object.defineProperty(obj, "ScrollView", { get: () => arg1(dependencyMap[5]).default, set: undefined });
Object.defineProperty(obj, "SectionList", { get: () => arg1(dependencyMap[6]).default, set: undefined });
Object.defineProperty(obj, "Text", { get: () => arg1(dependencyMap[7]).default, set: undefined });
Object.defineProperty(obj, "View", { get: () => arg1(dependencyMap[8]).default, set: undefined });

export default Object.assign(obj, importDefaultResult);
