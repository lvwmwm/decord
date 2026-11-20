// Module ID: 15755
// Function ID: 15756
// Name: HexagonCampaignDaysLeftBadge
// Dependencies: [19, 21, 15756, 6941, 1112, 4478, 5503, 2]
// Exports: default

// Module 15755 (HexagonCampaignDaysLeftBadge)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import _modDef4478 from "module_4478" /* 4478 */;
import ClockIcon from "ClockIcon" /* 5503 */;
import Badge_Badge from "Badge/Badge" /* 6941 */;
import useHexagonCampaignDaysLeft from "useHexagonCampaignDaysLeft" /* 15756 */;
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
  const obj3 = { text: intl.formatToPlainString(_modDef4478["noGK/D"], { days: hexagonCampaignDaysLeft }) };
  const Badge = Badge_Badge.Badge;
  intl = intl2.intl;
  return <Badge type={obj3} variant={str} icon={ClockIcon.ClockIcon} />;
};
