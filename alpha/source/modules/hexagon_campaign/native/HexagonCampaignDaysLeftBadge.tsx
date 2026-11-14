// Module ID: 17108
// Function ID: 17109
// Name: HexagonCampaignDaysLeftBadge
// Dependencies: [19, 21, 17109, 7459, 1113, 4516, 6042, 2]
// Exports: default

// Module 17108 (HexagonCampaignDaysLeftBadge)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef4516 from "module_4516" /* 4516 */;
import ClockIcon from "ClockIcon" /* 6042 */;
import Badge_Badge from "Badge/Badge" /* 7459 */;
import useHexagonCampaignDaysLeft from "useHexagonCampaignDaysLeft" /* 17109 */;
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
  const obj3 = { text: intl.formatToPlainString(_modDef4516["noGK/D"], { days: hexagonCampaignDaysLeft }) };
  const Badge = Badge_Badge.Badge;
  intl = intl2.intl;
  return <Badge type={obj3} variant={str} icon={ClockIcon.ClockIcon} />;
};
