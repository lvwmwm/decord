// Module ID: 18932
// Function ID: 18933
// Name: ICYMIWaterwheelsRow
// Dependencies: [19, 21, 18933, 18899, 2]
// Exports: default

// Module 18932 (ICYMIWaterwheelsRow)
import Fragment from "Fragment" /* 21 */;
import WaterwheelsCard from "WaterwheelsCard" /* 18899 */;
import useWaterwheelsActions from "useWaterwheelsActions" /* 18933 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/icymi/native/ICYMIWaterwheelsRow.tsx");

export default function ICYMIWaterwheelsRow(card) {
  card = card.card;
  const obj = useWaterwheelsActions;
  const onAction = obj.useWaterwheelsActions();
  return jsx(WaterwheelsCard.WaterwheelsCard, { card, onAction });
};
