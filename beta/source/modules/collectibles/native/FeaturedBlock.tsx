// Module ID: 15444
// Function ID: 15445
// Name: FeaturedBlock
// Dependencies: [19, 17, 21, 576, 4836, 8229, 15445, 6583, 6603, 2]
// Exports: default

// Module 15444 (FeaturedBlock)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6583 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 8229 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const useAnalyticsLocationsDefault = useAnalyticsLocations;

function Subblocks(style) {
  style = style.style;
  const subblocks = style.featuredBlock.subblocks;
  return subblocks.map((subblock, tilePosition) => {
    const CollectiblesAnalyticsProvider = CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
    return <CollectiblesAnalyticsProvider key={arg1} newValue={{ tilePosition: arg1 }}>{null}</CollectiblesAnalyticsProvider>;
  });
}
const View = react_native.View;
const jsx = Fragment.jsx;
const PX_16 = nativeDefault.space.PX_16;
const PX_12 = nativeDefault.space.PX_12;
const obj = { container: { display: "flex", width: "100%", flexDirection: "row", flexWrap: "wrap", gap: PX_12, paddingHorizontal: PX_16 }, featuredSubblock: { flex: 1, flexBasis: 400, maxWidth: "100%" } };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/collectibles/native/FeaturedBlock.tsx");

export default function FeaturedBlock(featuredBlock) {
  featuredBlock = featuredBlock.featuredBlock;
  const tmp = closure_5();
  const tmp2 = useAnalyticsLocationsDefault;
  const AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
  return <AnalyticsLocationProvider value={tmp2(AnalyticsLocationDefault.COLLECTIBLES_SHOP_FEATURED_BLOCK).analyticsLocations}>{null}</AnalyticsLocationProvider>;
};
