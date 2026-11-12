// Module ID: 16834
// Function ID: 16835
// Name: HexagonCampaignDaysLeftBadge
// Dependencies: [19, 21, 16835, 7083, 1113, 4411, 5896, 2]
// Exports: default

// Module 16834 (HexagonCampaignDaysLeftBadge)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef4411 from "module_4411" /* 4411 */;
import ClockIcon from "ClockIcon" /* 5896 */;
import Badge_Badge from "Badge/Badge" /* 7083 */;
import useHexagonCampaignDaysLeft from "useHexagonCampaignDaysLeft" /* 16835 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignDaysLeftBadge.tsx");

export default function HexagonCampaignDaysLeftBadge(variant) {
  let intl;
  let str = variant.variant;
  const perk = variant.perk;
  if (str === undefined) {
    str = "secondary";
  }
  const obj = useHexagonCampaignDaysLeft;
  const hexagonCampaignDaysLeft = obj.useHexagonCampaignDaysLeft(perk);
  const obj3 = { text: intl.formatToPlainString(_modDef4411["noGK/D"], { days: hexagonCampaignDaysLeft }) };
  const Badge = Badge_Badge.Badge;
  intl = intl2.intl;
  return <Badge type={obj3} variant={str} icon={ClockIcon.ClockIcon} />;
};
