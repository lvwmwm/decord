// Module ID: 9357
// Function ID: 73027
// Name: View
// Dependencies: []

// Module 9357 (View)
let View = require(dependencyMap[0]).View;
const _module = require(dependencyMap[1]);
if (_module.isAndroid()) {
  View = importDefault(dependencyMap[2]);
}
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRowView.tsx");

export default View;
