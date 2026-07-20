// Module ID: 14360
// Function ID: 108439
// Name: Subblocks
// Dependencies: []
// Exports: default

// Module 14360 (Subblocks)
function Subblocks(style) {
  const arg1 = style.style;
  const subblocks = style.featuredBlock.subblocks;
  return subblocks.map((subblock, tilePosition) => {
    let obj = { newValue: obj };
    obj = { tilePosition };
    obj = { style, children: callback2(callback(closure_2[6]), { subblock }) };
    obj.children = callback2(closure_3, obj);
    return callback2(style(closure_2[5]).CollectiblesAnalyticsProvider, obj, tilePosition);
  });
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[4]);
obj = { customId: "/assets/design/components/Illustration/native/redesign/generated/images", onTapLink: 254, onLongPressLink: 154, onTapAttachmentLink: null, gap: importDefault(dependencyMap[3]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[3]).space.PX_16 };
let closure_5 = obj.createStyles({ container: obj, featuredSubblock: { "Bool(true)": 2, "Bool(true)": 36, "Bool(true)": "2026-02-activity-privacy-matching" } });
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/collectibles/native/FeaturedBlock.tsx");

export default function FeaturedBlock(featuredBlock) {
  const tmp = callback();
  let obj = { value: importDefault(dependencyMap[7])(importDefault(dependencyMap[8]).COLLECTIBLES_SHOP_FEATURED_BLOCK).analyticsLocations };
  obj = { style: tmp.container };
  obj = { featuredBlock: featuredBlock.featuredBlock, style: tmp.featuredSubblock };
  obj.children = <Subblocks {...obj} />;
  obj.children = <View {...obj} />;
  return jsx(arg1(dependencyMap[7]).AnalyticsLocationProvider, obj);
};
