// Module ID: 16050
// Function ID: 16051
// Name: ForYouHoistedItemsHeader
// Dependencies: [19, 17, 21, 4829, 576, 2]
// Exports: ForYouHoistedItemsHeader

// Module 16050 (ForYouHoistedItemsHeader)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
const obj2 = { container: { marginTop: nativeDefault.space.PX_16 } };
let closure_2 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouHoistedItemsHeader.tsx");

export const ForYouHoistedItemsHeader = function ForYouHoistedItemsHeader() {
  return <View style={closure_2().container} />;
};
