// Module ID: 9358
// Function ID: 73051
// Name: View
// Dependencies: []

// Module 9358 (View)
let View = require(dependencyMap[0]).View;
const _module = require(dependencyMap[1]);
if (_module.isAndroid()) {
  View = importDefault(dependencyMap[2]);
}
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRowView.tsx");

export default View;
