// Module ID: 9528
// Function ID: 9529
// Name: BlankAudienceTile
// Dependencies: [19, 17, 21, 1479, 9529, 2]

// Module 9528 (BlankAudienceTile)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import AudienceTile from "AudienceTile" /* 9529 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const memoResult = react.memo(() => {
  const width = useWindowDimensionsDefault().width;
  const obj = AudienceTile;
  const audienceTileStyles = obj.useAudienceTileStyles();
  const items = [audienceTileStyles.container, ];
  const obj2 = AudienceTile;
  items[1] = { width: obj2.getTileWidthStyle(width) };
  ({ width: obj2.getTileWidthStyle(width) });
  return <View style={items} />;
});
const result = size.fileFinishedImporting("modules/stage_channels/native/components/BlankAudienceTile.tsx");

export default memoResult;
